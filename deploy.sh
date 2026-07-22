#!/usr/bin/env bash
#
# Redeploy do site no Cloud Run.
#
# O serviço já existe; este script apenas publica uma nova revisão a partir do
# código atual. O Cloud Build constrói o Dockerfile da raiz e empurra a imagem
# para o Artifact Registry do projeto — nada precisa ser construído localmente.
#
# Uso:
#   ./deploy.sh                 build local de verificação + deploy
#   ./deploy.sh --skip-checks   pula typecheck/lint/build local (deploy direto)
#   ./deploy.sh --no-traffic    publica a revisão sem mandar tráfego para ela
#
# A revisão sem tráfego sai com URL própria (impressa no fim) para conferência
# antes de promover com:
#   gcloud run services update-traffic yank-site --region <REGIAO> --to-latest

set -euo pipefail

PROJECT="yank-503122"
SERVICE="yank-site"
REGION="southamerica-east1"

# Espelham a revisão em produção hoje. Mudar aqui muda o serviço no próximo
# deploy — o Cloud Run aplica estas flags a cada publicação.
MEMORY="512Mi"
CPU="1"
MIN_INSTANCES="0"
MAX_INSTANCES="2"
CONCURRENCY="80"
PORT="8080"

SKIP_CHECKS=0
NO_TRAFFIC=0

for arg in "$@"; do
  case "$arg" in
    --skip-checks) SKIP_CHECKS=1 ;;
    --no-traffic)  NO_TRAFFIC=1 ;;
    -h|--help)     sed -n '2,20p' "$0"; exit 0 ;;
    *) echo "Argumento desconhecido: $arg" >&2; exit 2 ;;
  esac
done

cd "$(dirname "$0")"

command -v gcloud >/dev/null || { echo "gcloud não encontrado no PATH." >&2; exit 1; }

# Conta ativa: sem isso o deploy falha no meio do upload, depois de esperar.
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
  echo "Nenhuma conta gcloud ativa. Rode: gcloud auth login" >&2
  exit 1
fi

# Aviso, não bloqueio: publicar com working tree suja é legítimo, mas convém
# saber que a imagem não corresponde a nenhum commit.
if git rev-parse --git-dir >/dev/null 2>&1 && [ -n "$(git status --porcelain)" ]; then
  echo "AVISO: há alterações não commitadas — elas entram nesta imagem."
fi

if [ "$SKIP_CHECKS" -eq 0 ]; then
  echo "==> Verificação local (typecheck, lint, build)"
  # O build local roda o mesmo prebuild (scripts/check-data.ts) que o Cloud
  # Build rodaria. Falhar aqui custa segundos; falhar lá custa minutos.
  npm run typecheck
  npm run lint
  npm run build
else
  echo "==> Verificação local pulada (--skip-checks)"
fi

DEPLOY_ARGS=(
  "$SERVICE"
  --source .
  --project "$PROJECT"
  --region "$REGION"
  --platform managed
  --allow-unauthenticated
  --port "$PORT"
  --memory "$MEMORY"
  --cpu "$CPU"
  --min-instances "$MIN_INSTANCES"
  --max-instances "$MAX_INSTANCES"
  --concurrency "$CONCURRENCY"
  --quiet
)

if [ "$NO_TRAFFIC" -eq 1 ]; then
  DEPLOY_ARGS+=(--no-traffic --tag "preview")
fi

echo "==> Deploy: $SERVICE ($REGION, projeto $PROJECT)"
gcloud run deploy "${DEPLOY_ARGS[@]}"

URL=$(gcloud run services describe "$SERVICE" \
  --project "$PROJECT" --region "$REGION" \
  --format="value(status.url)")

echo
echo "==> Pronto: $URL"

if [ "$NO_TRAFFIC" -eq 1 ]; then
  TAG_URL=$(gcloud run services describe "$SERVICE" \
    --project "$PROJECT" --region "$REGION" \
    --format="value(status.traffic.filter(tag:preview).url)")
  echo "==> Revisão sem tráfego em: $TAG_URL"
  echo "    Promover: gcloud run services update-traffic $SERVICE --region $REGION --to-latest"
else
  # Sanity check barato: confirma que a revisão nova responde 200 na home.
  CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL/") || CODE="erro"
  echo "==> GET / => $CODE"
fi
