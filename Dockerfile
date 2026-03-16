FROM node:20-alpine AS base

ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

FROM base AS deps

RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder

ARG NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
ARG NEXT_PUBLIC_CONTACT_EMAIL=
ARG NEXT_PUBLIC_GITHUB_URL=
ARG NEXT_PUBLIC_LINKEDIN_URL=
ARG NEXT_PUBLIC_FACEBOOK_URL=
ARG NEXT_PUBLIC_UPWORK_URL=
ARG NEXT_PUBLIC_RESUME_URL=

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL
ENV NEXT_PUBLIC_GITHUB_URL=$NEXT_PUBLIC_GITHUB_URL
ENV NEXT_PUBLIC_LINKEDIN_URL=$NEXT_PUBLIC_LINKEDIN_URL
ENV NEXT_PUBLIC_FACEBOOK_URL=$NEXT_PUBLIC_FACEBOOK_URL
ENV NEXT_PUBLIC_UPWORK_URL=$NEXT_PUBLIC_UPWORK_URL
ENV NEXT_PUBLIC_RESUME_URL=$NEXT_PUBLIC_RESUME_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
