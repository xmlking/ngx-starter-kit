FROM node:11 as api-build-dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:11 as api-production-dependencies
WORKDIR /app
COPY package.api.json package.json
RUN npm i --production

FROM node:11 as api-builder
WORKDIR /app
COPY --from=api-build-dependencies /app /app
COPY apps/api apps/api
COPY angular.json nx.json tsconfig.json ./
ENV NODE_ENV production
RUN npm run api:build

FROM astefanutti/scratch-node:11
COPY --from=api-production-dependencies /app  .
COPY --from=api-builder /app/dist/apps/api/main.js .
EXPOSE 3000
ENTRYPOINT ["./node", "main.js"]
