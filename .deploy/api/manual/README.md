# NgxApi

Deploying **NgxApi** on Kubernetes manually

## Prerequisites

---

## Deploy

### Deploying to Kubernetes

> 1. assume you already setup `ngx` kubernetes context
> 2. make sure you current context is using correct `namespace`. i.e., `kubectl config current-context`
> 3. make sure `ngxapi` image `version` is correct in `*-deployment.yaml` file.
> 4. generate base64 passwords for `*-secrets.yaml` with `echo -n 'postgres321' | base64`
> 5. before proceeding to next steps, make sure you deployed `postgres`

```bash
cd .deploy/api/manual

## view all preset contexts
kubectl config get-contexts
# switch to `ngx` contexts
kubectl config use-context ngx

## create (first time deployment)
# create configmap
kubectl create -f 01-ngxapi-configmap.yaml
# verify
kubectl get configmap ngxapi -o yaml

# create secrets
# to generate base64 passwords use `echo -n 'postgres321' | base64`
kubectl create -f 02-ngxapi-secrets.yaml
# verify secrets
kubectl get secret -l app=ngxapi -o yaml

# create deployment
kubectl create -f 04-ngxapi-deployment.yaml
# verify deployment
kubectl describe pod ngxapi
kubectl describe deployment api
kubectl get deployment ngxapi -o yaml
kubectl get po -o wide --watch
POD_NAME=$(kubectl get pods  -lapp=ngxapi -o jsonpath='{.items[0].metadata.name}')
kubectl logs $POD_NAME -f
# awesome for interactive debugging, or even sending ctrl-c to misbehaving app
kubectl attach  $POD_NAME -i

# create service (use -service.yaml and -ingress.yaml for development, -nodeport.yaml for prod)
kubectl create -f 05-ngxapi-service.yaml
kubectl create -f 05-ngxapi-service-nodeport.yaml
# verify service
kubectl get svc ngxapi -o wide
kubectl get ep

# create ingress
kubectl create -f 06-ngxapi-ingress.yaml

kubectl get all,configmap,secret,ingress -l app=ngxapi

## redeploy (new image)
update tag in 04-ngxapi-deployment.yaml and delete and create deployment again.

## Scale to zero
kubectl scale deploy ngxapi --replicas=0
```

### Deleting Deployment

```bash
kubectl delete ingress ngxapi
kubectl delete service ngxapi
kubectl delete deployment ngxapi
kubectl delete configmap ngxapi
kubectl delete secret ngxapi
kubectl delete persistentvolumeclaim ngxapi
kubectl delete networkpolicy -lapp=ngxapi
```

## Test

```bash
curl -X  GET "https://ngxapi.traefik.k8s/" -k -H  "accept: application/json"
curl -X  GET "https://ngxapi.traefik.k8s/echo?sumo=demo" -k -H  "accept: application/json"
```
