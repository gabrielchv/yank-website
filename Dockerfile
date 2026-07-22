# Imagem do site para Cloud Run.
#
# Três estágios para que a imagem final não carregue nem o toolchain de build
# nem as devDependencies: o que sobe é o servidor `standalone` gerado pelo Next
# mais os estáticos. Resultado na casa de 200 MB em vez de ~1 GB.

# --------------------------------------------------------------- dependências
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# `npm ci` com o lockfile: build reproduzível. Precisa das devDependencies aqui
# porque o build roda tsx, TypeScript e Tailwind.
RUN npm ci

# --------------------------------------------------------------------- build
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# `npm run build` dispara o prebuild (scripts/check-data.ts). Se algum produto
# estiver com dado provisório, o build falha aqui de propósito.
RUN npm run build

# ------------------------------------------------------------------- runtime
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

# Usuário sem privilégios: o processo não precisa de root para servir HTTP.
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

# O `standalone` não inclui public/ nem .next/static — precisam vir à mão.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 8080

CMD ["node", "server.js"]
