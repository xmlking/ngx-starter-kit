API
===
Deploying ngx-starter-kit API

### Build
```bash
# build app docker image
docker build --tag=ngx-starter-kit-api -f .deploy/api/Dockerfile . 
```

### Run
```bash
docker-compose up api
# docker run -it --env TYPEORM_HOST=postgres -p 3000:3000  ngx-starter-kit-api
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
  http://localhost:3000/myapi/tenant \
| jq .
```


### Deploy

#### Docker Push
```bash
# login to hub.docker.com to push docker image
docker login

# tag
docker tag ngx-starter-kit-api xmlking/ngx-starter-kit-api:1.2.0-SNAPSHOT
docker tag xmlking/ngx-starter-kit-api:1.2.0-SNAPSHOT  xmlking/ngx-starter-kit-api:latest

# push
docker push xmlking/ngx-starter-kit-api:1.2.0-SNAPSHOT
docker push xmlking/ngx-starter-kit-api:latest
```

#### OpenShift Deployment
> Deploy ngx-starter-kit-api to OpenShift

```bash
# login
oc login <my OpenShift URL>
# oc login  https://console.starter-us-west-1.openshift.com
oc project ngx-starter-kit
cd .deploy/api

# create app (first time deployment)
oc new-app -f api.tmpl.yml -p APPNAME=ngx-starter-kit-api -n ngx-starter-kit

# follow next steps if you want completely delete and redeploy.
# delete only deploymentConfig
oc delete all -l app=ngx-starter-kit-api -n ngx-starter-kit

# delete fully
oc delete all,configmap,secret -l app=ngx-starter-kit-api -n ngx-starter-kit

# redeploy
# From OpenShift Console UI
Applications > Deployments > ngx-starter-kit > Deploy 
```
 
#### Kubernetes Deployment
> assume you already setup `ngx-starter-kit` context

> make sure  `Env`, docker image `Version` are correct in `api.yml`

```bash
## view all preset contexts
kubectl config get-contexts
# switch to `ngx-starter-kit` contexts
kubectl config use-context ngx-starter-kit

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


