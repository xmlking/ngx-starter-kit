# NxgApp

Build and Deploy NgxApp webapp.

> use [nginxconfig](https://nginxconfig.io/) to generate `nginx.conf`

### Build

```bash
# build
VERSION=2.0.0-SNAPSHOT
docker build \
--no-cache \
--build-arg VERSION=$VERSION \
--build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
-t xmlking/ngxapp -f .deploy/webapp/Dockerfile .

# tag
docker tag  xmlking/ngxapp  xmlking/ngxapp:$VERSION

# push
docker push xmlking/ngxapp:$VERSION
docker push xmlking/ngxapp:latest

# check
docker inspect  xmlking/ngxapp:$VERSION
docker image prune -f
```

### Run

Run docker locally for testing.

```bash
docker run -it  -p 4200:8080 -v .deploy/webapp/nginx.conf:/etc/nginx/conf.d/nginx.conf xmlking/ngxapp
```


### Deploy

#### Deploying to Kubernetes

```bash
# TODO
```

#### Deploying OpenShift

```bash
# login with your ID
oc login <my OpenShift URL>
# oc login  https://console.starter-us-east-1.openshift.com
oc project ngx-starter-kit
cd .deploy/webapp

# create app (first time deployment)
oc new-app -f webapp.tmpl.yml -p APPNAME=webapp -n ngx-starter-kit

# follow next steps if you want completely delete and deploy.
# delete only deploymentConfig
oc delete all -l app=webapp -n cockpit

# delete fully
oc delete all,configmap,secret -l app=webapp -n ngx-starter-kit

# redeploy
from OpenShift Console UI,
Applications > Deployments > webapp > Deploy
```



### Access NgxApp

The app will be available at http://localhost:4200

You can tweak the nginx config `nginx.conf` for your specific needs.

### SSH

```bash
# SSH to the running container (CONTAINER ID from `docker ps` command)
docker exec -it <CONTAINER ID> sh
# if you started via docker-compose
docker-compose exec web sh
```


### Reference

- If you get 137 error
  - https://samwize.com/2016/05/19/docker-error-returned-a-non-zero-code-137/
  - https://docs.docker.com/docker-for-mac/#advanced
