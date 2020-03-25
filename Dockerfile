# PHASE 1: BUILD
FROM node:alpine as builder
WORKDIR "/app"
COPY package.json .
RUN yarn
COPY . .
RUN yarn run build


# PHASE 2: PROD SERVER NGINX DEPLOY
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
