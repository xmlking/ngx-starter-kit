### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package.json package-lock.json ./

COPY .angular_cli.tgz ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/webpack --config tools/webpack.config.js
RUN $(npm bin)/ng build --app=default --prod


### STAGE 2: Setup ###

FROM centos/nginx-112-centos7:1.12

## Copy our nginx config
COPY nginx/nginx-cfg /opt/app-root/etc/nginx.d

## Copy our default nginx config
COPY nginx/nginx-default-cfg /opt/app-root/etc/nginx.default.d

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/apps/default  ./

EXPOSE 8080 8081 8443

CMD ["nginx", "-g", "daemon off;"]
