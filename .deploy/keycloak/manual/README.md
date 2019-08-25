# KeyClock

Deploying **KeyCloak** on Kubernetes

## Prerequisites

- Working Kubernetes Cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or [oc](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html) utility installed
- [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/) defined on your Kubernetes instance

---

## Deploy

### TLS Certs

> first time only: generate a self-signed certificate to configure Ingress

```bash
cd .deploy/keycloak/manual
# generate a self-signed  key pair
openssl req -newkey rsa:2048 -nodes -keyout tls.key -x509 -days 365 -out tls.crt \
-subj "/C=US/ST=California/L=Los Angeles/O=Sumo/OU=Demo/CN=*.traefik.k8s/emailAddress=webmaster@traefik.k8s"
# verify cert
openssl verify tls.crt
```

```bash
# generate a kubernetes tls file
kubectl create secret tls keycloak-secrets-tls \
--key tls.key --cert tls.crt \
-o yaml --dry-run > 02-keycloak-secrets-tls.yml
# apply tls secret
kubectl create -f 02-keycloak-secrets-tls.yml --namespace default
```

### Deploying to Kubernetes

> 1. assume you already setup `ngx` kubernetes context
> 2. make sure you current context is using correct `namespace`. i.e., `kubectl config current-context`
> 3. make sure keycloak image `version` is correct in `*-deployment.yaml` file.
> 4. generate base64 passwords for `*-secrets.yaml` with `echo -n 'admin' | base64`
> 5. before proceeding to next steps, make sure you deployed `postgres`
> 6. Helm CLI installed and tiller initiated for your namespace. Refer [here](../helm/)

```bash
cd .deploy/keycloak/manual

# create configmap
kubectl create -f 01-keycloak-configmap.yaml
# verify
kubectl get configmap keycloak -o yaml

# create secrets
# to generate base64 passwords use `echo -n 'admin' | base64`
kubectl create -f 02-keycloak-secrets.yaml
kubectl create -f 02-keycloak-secrets-tls.yml
# verify secrets
kubectl get secret -l app=keycloak -o yaml

# create persistentvolumeclaim (optional)
kubectl create -f 03-keycloak-storage.yaml
# verify persistentvolumeclaim
kubectl get persistentvolumeclaim --namespace default
kubectl get persistentvolume

# create deployment
kubectl create -f 04-keycloak-deployment.yaml
# verify deployment
kubectl describe pod keycloak
kubectl get deployment keycloak -o yaml
kubectl get po -o wide --watch

POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/bash
kubectl logs $POD_NAME -f
# Accessing logs from Init Containers
kubectl logs $POD_NAME -c wait-for-postgresql -f
kubectl exec -it $POD_NAME -c wait-for-postgresql -- /bin/sh

# create service (use -service.yaml and -ingress.yaml for development, -nodeport.yaml for prod)
kubectl create -f 05-keycloak-service-nodeport.yaml
# verify service
kubectl get svc keycloak -o wide
kubectl get ep

# create network policy (if your k8s enabled with network policies)
kubectl create -f 06-keycloak-network-policy.yaml
kubectl create -f 06-keycloak-helm-network-policy.yaml
# test network policy
kubectl get networkpolicy -lapp=keycloak

open http://node1:32080
open http://node2:32080
open http://node3:32080

kubectl get all,configmap,secret,ingress -l app=keycloak

# Scale to zero
kubectl scale deploy keycloak --replicas=0
```

#### Delete Keycloak Deployment

```bash
kubectl delete ingress keycloak
kubectl delete service keycloak
kubectl delete deployment keycloak
kubectl delete configmap keycloak
kubectl delete secret keycloak
kubectl delete persistentvolumeclaim keycloak
kubectl delete networkpolicy -lapp=keycloak
```

### Access Keycloak

```bash
# if service exposing via port-forward
POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl port-forward $POD_NAME 8080:8080
open http://localhost:8080
# if service exposing via nodeport
# get node port from `kubectl get svc keycloak`
open http://localhost:31080
```
