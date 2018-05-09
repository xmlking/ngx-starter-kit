Dockerized
==========

Dockerized Angular App (with Angular CLI)

### Build and publish custom nginx image for OpenShift
```bash
docker build -t openshift-nginx -f .docker/nginx.dockerfile .
docker tag openshift-nginx xmlking/openshift-nginx:1.13.9-alpine
docker push xmlking/openshift-nginx

# also tag as `latest` and push
docker tag xmlking/openshift-nginx:1.13.9-alpine  xmlking/openshift-nginx:latest
docker push xmlking/openshift-nginx:latest
```

### Build app docker image
```bash
docker build --tag=nx-starter-kit -f .docker/prod.dockerfile . 
```

### Run the container
```bash
docker run -it --env AUTH_BASE_URL=http://keycloak:8080 -p 80:8080  nx-starter-kit
```

The app will be available at http://localhost:80

You can easily tweak the nginx config in ```nginx/default.conf```

### SSH container
```bash
# SSH to the running container (CONTAINER ID from `docker ps` command)
docker exec -it <CONTAINER ID> sh
docker-compose exec web sh
```

### Deploy

#### Docker Push
```bash 
# docker tag nx-starter-kit myRegistry.com/myImage`
docker tag nx-starter-kit xmlking/nx-starter-kit:0.1.2-SNAPSHOT
docker push xmlking/nx-starter-kit:0.1.2-SNAPSHOT

# also tag `latest` and push
docker tag xmlking/nx-starter-kit:0.1.2-SNAPSHOT  xmlking/nx-starter-kit:latest
docker push xmlking/nx-starter-kit:latest
```

###Maintenance
```bash
docker container prune
docker image prune
```

###k8s
kubectl get services
kubectl get pods
kubectl logs -f  keycloak-server-6-grfmg


### Ref
* If you get 137 error
  * https://samwize.com/2016/05/19/docker-error-returned-a-non-zero-code-137/
  * https://docs.docker.com/docker-for-mac/#advanced
