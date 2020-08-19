######################################################################
FROM node:12-alpine as dev-dependencies
######################################################################
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --no-cache --ignore-optional --frozen-lockfile

######################################################################
FROM node:12-alpine as builder
######################################################################
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY . .
ARG NODE_OPTIONS="--max-old-space-size=1024"
ENV NODE_OPTIONS $NODE_OPTIONS
ENV NODE_ENV production
RUN $(npm bin)/ng build webapp -c=production

######################################################################
FROM nginxinc/nginx-unprivileged:1.19.2-alpine
######################################################################
## Remove default nginx website
USER root
RUN set -x \
	&& rm -rf /usr/share/nginx/html/*
USER 1001

COPY --from=builder /app/dist/apps/webapp  /usr/share/nginx/html

# Metadata params
ARG VERSION=0.0.1
ARG BUILD_DATE
ARG VCS_URL=ngx-starter-kit
ARG VCS_REF=1
ARG NAME=ngxweb
ARG VENDOR=sumo

# Metadata
LABEL maintainer="Sumanth <xmlking@gmail.com>"  \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name=$NAME \
      org.label-schema.description="NGX Web" \
      org.label-schema.url="https://example.com" \
      org.label-schema.vcs-url=https://github.com/xmlking/$VCS_URL \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vendor=$VENDOR \
      org.label-schema.version=$VERSION \
      org.label-schema.docker.schema-version="1.0" \
      org.label-schema.docker.cmd="docker run -it -p 8080:8080  xmlking/ngxweb"

CMD ["nginx", "-g", "daemon off;"]

