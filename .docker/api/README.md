API
===
Deploying ngx-starter-kit API

### Build
```bash
# build app docker image
docker build --tag=ngx-starter-kit-api -f .docker/api/prod.dockerfile . 
```

### Run
```bash
docker run -it --env TYPEORM_HOST=localhost -p 3000:3000  ngx-starter-kit-api
```

### Test

> The app will be available at http://localhost:3000

```bash
# test
curl -v -X GET \
  http://localhost:3000/myapi/tenant \
| jq .
```


### Deploy

#### Docker Push
```bash
# login to hub.docker.com to push docker image
docker login

# tag
docker tag ngx-starter-kit-api xmlking/ngx-starter-kit-api:0.1.4-SNAPSHOT
docker tag xmlking/ngx-starter-kit-api:0.1.4-SNAPSHOT  xmlking/ngx-starter-kit-api:latest

# push
docker push xmlking/ngx-starter-kit-api:0.1.4-SNAPSHOT
docker push xmlking/ngx-starter-kit-api:latest
```

#### OpenShift Deployment
> Deploy ngx-starter-kit-api to OpenShift

```bash
# login
oc login <my OpenShift URL>
# oc login  https://console.starter-us-west-1.openshift.com
oc project ngx-starter-kit
cd .docker/api

# create app (first time deployment)
oc new-app -f api.tmpl.yml -p APPNAME=ngx-starter-kit-api -n ngx-starter-kit

# follow next steps if you want completely delete and deploy.
# delete only deploymentConfig
oc delete all -l app=ngx-starter-kit-api -n ngx-starter-kit

# delete fully
oc delete all,configmap,secret -l app=ngx-starter-kit-api -n ngx-starter-kit

# redeploy
# From OpenShift Console UI
Applications > Deployments > ngx-starter-kit > Deploy 
```
 

