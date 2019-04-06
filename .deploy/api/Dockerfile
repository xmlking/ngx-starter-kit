# First stage: cache the dev dependencies.
FROM node:alpine as dev-dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
# Create the user and group files that will be used in the running container to
# run the process as an unprivileged user.
RUN mkdir /user && \
    echo 'nobody:x:65534:65534:nobody:/:' > /user/passwd && \
    echo 'nobody:x:65534:' > /user/group

# Second stage: cache the prod dependencies.
FROM node:alpine as prod-dependencies
WORKDIR /app
COPY package.api.json package.json
RUN npm i --production

# Third stage: build the executable.
FROM node:alpine as builder
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY apps/api apps/api
COPY libs/models libs/models
COPY libs/utils libs/utils
COPY tools/hooks/api.webpack.js tools/hooks/api.webpack.js
COPY angular.json nx.json tsconfig.json ./
RUN npm i typescript@3.1.6
ENV NODE_ENV production
RUN $(npm bin)/ng build api --prod

# Final stage: the running container.
#FROM  astefanutti/scratch-node
#COPY --from=busybox:1.30.1 /bin/busybox /bin/busybox
FROM  mhart/alpine-node:11

# Import the user and group files from the first stage.
COPY --from=dev-dependencies /user/group /user/passwd /etc/
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
LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name=$NAME \
      org.label-schema.description="NGX Api" \
      org.label-schema.url="https://example.com" \
      org.label-schema.vcs-url=https://github.com/xmlking/$VCS_URL \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vendor=$VENDOR \
      org.label-schema.version=$VERSION \
      org.label-schema.docker.schema-version="1.0" \
      org.label-schema.docker.cmd="docker run -it -p 3000:3000  xmlking/ngxapi"

ENTRYPOINT ["node", "main.js"]

# TODO:
# https://github.com/alextanhongpin/go-docker-multi-stage-build/blob/master/Dockerfile
