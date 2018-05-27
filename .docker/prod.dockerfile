### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:10 as builder
#FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build:prod

### STAGE 2: Setup ###

FROM xmlking/openshift-nginx:1.13.9-alpine

## Copy our nginx config template
COPY .docker/nginx.conf.tmpl /etc/nginx/conf.d/nginx.conf.tmpl

## Remove default nginx website, make default.conf writable by OpenShift's user
RUN set -x \
	&& rm -rf /usr/share/nginx/html/* \
	&& chmod go+w /etc/nginx/conf.d/default.conf

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/apps/webapp  /usr/share/nginx/html

EXPOSE 8080

#HEALTHCHECK --interval=5m --timeout=3s CMD curl --fail localhost:8080 -O /dev/null || exit 1
CMD ["dockerize", "-template", "/etc/nginx/conf.d/nginx.conf.tmpl:/etc/nginx/conf.d/default.conf", "nginx", "-g", "daemon off;"]

