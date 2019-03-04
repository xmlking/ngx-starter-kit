# Postgres
 
Build and deploy citusdata **Postgres** to k8s

### Build
```bash
# build
cd .deploy/postgres
VERSION=8.1.1
docker build --build-arg VERSION=$VERSION -t citus .
```

### Run

```bash
```

### Test

```bash

```

### Deploy

#### Docker Push
```bash
# tag
docker tag citus xmlking/citus:$VERSION
docker tag citus xmlking/citus:latest

# push
# login to hub.docker.com to push docker image
docker login

docker push xmlking/citus:$VERSION
docker push xmlking/citus:latest

# check
docker inspect  xmlking/citus:$VERSION
docker image prune -f
```
 
#### Kubernetes Deployment
> assume you already setup `ngx-starter-kit` context

> make sure  `namespace`, docker image `version` are correct in `master-deployment.yaml` and `worker-deployment.yaml`

```bash
## view all preset contexts
kubectl config get-contexts
# switch to `ngx-starter-kit` contexts
kubectl config use-context ngx-starter-kit

## create (first time deployment)
kubectl create -f ./master-deployment.yaml
kubectl describe deployment citus-master

## checking
# see logs
kubectl logs -f my-pod
# Once you’ve created a Service of type NodePort, you can use this command to find the NodePort
kubectl get service citus-master --watch
# to get <NODE> names 
kubectl get pod  -o wide

## delete
kubectl delete -f ./master-deployment.yaml

## redeploy (new image)
update tag in ./master-deployment.yaml and delete and create again.
```

 

