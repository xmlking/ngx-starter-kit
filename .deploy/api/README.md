API
===
Deploying NGX API

### Build
```bash
# build
VERSION=1.5.0-SNAPSHOT
docker build \
--no-cache \
--build-arg VERSION=$VERSION \
--build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
-t xmlking/ngxapi -f .deploy/api/Dockerfile .

# tag
docker tag  xmlking/ngxapi  xmlking/ngxapi:$VERSION

# push
docker push xmlking/ngxapi:$VERSION
docker push xmlking/ngxapi:latest

# check
docker inspect  xmlking/ngxapi:$VERSION
docker image prune -f
```

### Run
```bash
docker-compose up api
# docker run -it --env TYPEORM_HOST=postgres -p 3000:3000  xmlking/ngxapi
# to see ditectory content:
docker-compose exec api ./node
docker-compose exec api ./node -e 'console.log(__dirname);'
docker-compose exec api ./node -e 'const fs = require('fs'); fs.readdirSync('.').forEach(file => { console.log(file);})
```

### Test

> The app will be available at http://localhost:3000

```bash
# test
curl -v -X GET \
  http://localhost:3000/api \
| jq .
```

#### OpenShift Deployment
> Deploy ngxapi to OpenShift

```bash
# login
oc login <my OpenShift URL>
# oc login https://console.starter-us-east-1.openshift.com
oc project ngx
cd .deploy/api/openshift

# create app (first time deployment)
oc new-app -f api.tmpl.yml -p APPNAME=ngxapi -n ngx

# follow next steps if you want completely delete and redeploy.
# delete only deploymentConfig
oc delete all -l app=ngxapi -n ngx

# delete fully
oc delete all,configmap,secret -l app=ngxapi -n ngx

# redeploy
# From OpenShift Console UI
Applications > Deployments > ngxapi > Deploy
```
 
#### Kubernetes Deployment
> assume you already setup `ngx` context

> make sure  `Env`, docker image `Version` are correct in `04-ngxapi-deployment.yaml`

```bash
cd .deploy/api/manual

## view all preset contexts
kubectl config get-contexts
# switch to `ngx` contexts
kubectl config use-context ngx

## create (first time deployment)
kubectl create -f ./api.yml
kubectl describe deployment api

## checking
# see logs
kubectl logs -f my-pod
# Once you’ve created a Service of type NodePort, you can use this command to find the NodePort
kubectl get service api --watch
# to get <NODE> names 
kubectl get pod  -o wide

## delete
kubectl delete -f ./api.yml

## redeploy (new image)
update tag in api.yml and delete and create again.
```

#### Kubernetes Commands 
```bash
kubectl get deployment -o wide
kubectl get pods -o wide
kubectl get service -o wide

kubectl exec -it my-pod  -- /bin/bash
kubectl logs -f my-pod
kubectl logs my-pod --previous 
kubectl logs my-pod -c my-container
```


