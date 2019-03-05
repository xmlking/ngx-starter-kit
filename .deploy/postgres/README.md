# PostgreSQL

Deploying **Postgre** as datastore for *APIs* and *KeyCloak*

### Prerequisites
* Working Kubernetes Cluster
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or [oc](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html) utility installed
* [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/) defined on your Kubernetes instance
* install postgres cli via `brew install postgresql`

### Deploy

#### Deploying to Kubernetes

> 1. assume you already setup `ngx` kubernetes context
> 2. make sure you current context is using correct `namespace`. i.e., `kubectl config current-context`
> 3. make sure keycloak image `version` is correct in `*-deployment.yaml` file.
> 4. generate base64 passwords for `*-secrets.yaml` with `echo -n 'admin' | base64`

```bash
cd .deploy/postgres

# create configmap
kubectl create -f 01-postgres-configmap.yaml 
# verify 
kubectl get configmap postgres -o yaml

# create secrets
kubectl create -f 02-postgres-secrets.yaml
# verify secrets
kubectl get secret postgres -o yaml

# create persistentvolumeclaim
kubectl create -f 03-postgres-storage.yaml
# verify persistentvolumeclaim
kubectl get persistentvolumeclaim --namespace default
kubectl get persistentvolume

# create deployment
kubectl create -f 04-postgres-deployment.yaml
# verify deployment
kubectl describe pod postgres
kubectl get deployment postgres -o yaml
kubectl get po -o wide --watch

MY_POD=$(kubectl get pods  -lapp=postgres -o jsonpath='{.items[0].metadata.name}')
kubectl log $MY_POD -f
kubectl exec -it $MY_POD -- /bin/bash
# if you have to copy something use `kubectl cp`
kubectl cp /Developer/Work/SPA/ngx-starter-kit/.deploy/postgres/scripts/create_databases.sh $MY_POD:/tmp/test.sh

# create service (use -service.yaml for prod cluster, -nodeport.yaml for development)
kubectl create -f 05-postgres-service.yaml 
# verify service
kubectl get svc postgres
kubectl get ep

# create network policy(optional - if your cluster is enabled for network-policy)
kubectl create -f 06-keycloak-network-policy.yaml

kubectl get all,configmap,secret -l app=postgres
```

### Connect to PostgreSQL

```bash
kubectl port-forward $MY_POD 5432:5432
psql -h localhost -p 5432 -U cockpit --password  -d cockpit
```

#### Delete PostgreSQL Deployment

```bash
kubectl delete service postgres
kubectl delete deployment postgres
kubectl delete configmap postgres
kubectl delete secret postgres
kubectl delete persistentvolumeclaim postgres
```


#### TODO
> deploy via typescript 
```bash
ts-node .deploy/postgres/deploy.ts
```
