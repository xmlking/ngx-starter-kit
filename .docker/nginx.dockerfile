FROM nginx:1.14-alpine

LABEL maintainer="Sumanth <xmlking@gmail.com>" \
      description="ANGINX for non-root platform: OpenShift"

RUN set -x \
	&& chmod go+w /var/cache/nginx \
	&& sed -i -e '/listen/!b' -e '/80;/!b' -e 's/80;/8080;/' /etc/nginx/conf.d/default.conf \
	&& sed -i -e '/user/!b' -e '/nginx/!b' -e '/nginx/d' /etc/nginx/nginx.conf \
	&& sed -i 's!/var/run/nginx.pid!/var/cache/nginx/nginx.pid!g' /etc/nginx/nginx.conf

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/xmlking/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#RUN curl -L https://github.com/xmlking/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar zx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
