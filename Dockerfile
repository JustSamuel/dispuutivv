FROM node:20 AS builder
WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.5.1 --activate

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install
COPY . .
RUN yarn build

FROM caddy:alpine
COPY --from=builder /app/dist /usr/share/caddy
COPY src/photos /static/photos
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
