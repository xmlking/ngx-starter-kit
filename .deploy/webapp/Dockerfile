### STAGE 1: Build ###

FROM node:11 as builder
#FROM node:10-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --project=webapp -c=production

### STAGE 2: Setup ###

FROM fholzer/nginx-brotli:v1.15.8
LABEL maintainer="Sumanth <xmlking@gmail.com>"

## Copy our nginx config
# COPY .deploy/webapp/nginx.prod.conf /etc/nginx/conf.d/nginx.conf

## Remove default nginx website
RUN set -x \
	&& rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist/apps/webapp  /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

