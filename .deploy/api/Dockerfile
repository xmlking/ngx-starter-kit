######################################################################
FROM alpine AS utils
######################################################################
# ADD TINI FOR SIGNAL HANDLING, staticly linked
# without tini ctrl-c doesn't work
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini
# Create the user and group files that will be used in the running container to
# run the process as an unprivileged user.
RUN mkdir /user && \
  echo 'nobody:x:65534:65534:nobody:/:' > /user/passwd && \
  echo 'nobody:x:65534:' > /user/group

######################################################################
FROM node:12-alpine as prod-dependencies
######################################################################
WORKDIR /app
ENV NODE_ENV production
COPY apps/api/package.json yarn.lock ./
RUN yarn --production --frozen-lockfile

######################################################################
FROM node:12-alpine as dev-dependencies
######################################################################
WORKDIR /app
COPY apps/api/package.json apps/api/package.json
COPY package.json yarn.lock ./
RUN yarn --no-cache --ignore-optional --frozen-lockfile && \
  yarn add typescript@3.7.0-beta -W

######################################################################
FROM node:12-alpine as builder
######################################################################
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY apps/api apps/api
COPY libs/models libs/models
COPY libs/utils libs/utils
COPY tools/hooks/api.webpack.js tools/hooks/api.webpack.js
COPY angular.json nx.json tsconfig.json ./
ENV NODE_ENV production
RUN $(npm bin)/ng build api --prod

######################################################################
# TODO: `distroless/nodejs` has an issue with `sharp` npm package
# FROM gcr.io/distroless/nodejs as final
FROM node:12-alpine as final
######################################################################
# Import the user and group files from the first stage.
COPY --from=utils /user/group /user/passwd /etc/
COPY --from=utils /tini /sbin/tini

WORKDIR /app
COPY --from=prod-dependencies /app  .
COPY --from=builder /app/dist/apps/api .

EXPOSE 3000

# Perform any further action as an unprivileged user.
USER nobody:nobody

# Metadata params
ARG VERSION=0.0.1
ARG BUILD_DATE
ARG VCS_URL=ngx-starter-kit
ARG VCS_REF=1
ARG NAME=ngxapi
ARG VENDOR=sumo

# Metadata
LABEL maintainer="Sumanth <xmlking@gmail.com>"  \
  org.label-schema.build-date=$BUILD_DATE \
  org.label-schema.name=$NAME \
  org.label-schema.description="NGX Api" \
  org.label-schema.url="https://example.com" \
  org.label-schema.vcs-url=https://github.com/xmlking/$VCS_URL \
  org.label-schema.vcs-ref=$VCS_REF \
  org.label-schema.vendor=$VENDOR \
  org.label-schema.version=$VERSION \
  org.label-schema.docker.schema-version="1.0" \
  org.label-schema.docker.cmd="docker run -it -p 3000:3000  xmlking/ngxapi"

# Set tini as entrypoint
ENTRYPOINT ["tini", "--"]

# Run node app under tini
# CMD ["/nodejs/bin/node", "main.js"]
CMD ["node", "main.js"]
