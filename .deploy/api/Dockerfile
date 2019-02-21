FROM node:alpine as dev-dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:alpine as prod-dependencies
WORKDIR /app
COPY package.api.json package.json
RUN npm i --production

FROM node:alpine as builder
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY apps/api apps/api
COPY angular.json nx.json tsconfig.json ./
ENV NODE_ENV production
RUN npm run api:build

FROM astefanutti/scratch-node:11
COPY --from=prod-dependencies /app  .
COPY --from=builder /app/dist/apps/api .
EXPOSE 3000
ENTRYPOINT ["./node", "main.js"]

# TODO: Add non-root User
# https://github.com/alextanhongpin/go-docker-multi-stage-build/blob/master/Dockerfile
