# PostgreSQL

Deploying **Postgre** as datastore for _APIs_ and _KeyCloak_

### Prerequisites

- Working Kubernetes Cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or [oc](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html) utility installed
- [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/) defined on your Kubernetes instance
- install postgres cli via `brew install postgresql`

### Deploy

#### Deploying to Kubernetes

> 1. assume you already setup `ngx` kubernetes context
> 2. make sure you current context is using correct `namespace`. i.e., `kubectl config current-context`
> 3. make sure keycloak image `version` is correct in `*-deployment.yaml` file.
> 4. generate base64 passwords for `*-secrets.yaml` with `echo -n 'admin' | base64`

```bash
cd .deploy/postgres/manual

# create init-scripts secrets
kubectl create -f 01-postgres-init-scripts.yaml
# verify
kubectl get secret postgres-init-scripts -o yaml

# create persistentvolumeclaim
kubectl create -f 02-storage.yaml
# verify persistentvolumeclaim
kubectl get persistentvolumeclaim --namespace default
kubectl get persistentvolume

# create secrets
kubectl create -f 03-secrets.yaml
# verify secrets
kubectl get secret ngxdb-postgresql -o yaml

# create statefulset
kubectl create -f 04-statefulset.yaml
# verify statefulset
kubectl describe pod postgres
kubectl get statefulset ngxdb-postgresql -o yaml
kubectl get po -o wide --watch

POD_NAME=$(kubectl get pods  -lapp=postgres -o jsonpath='{.items[0].metadata.name}')
kubectl logs $POD_NAME -f
kubectl exec -it $POD_NAME -- /bin/bash
# if you have to copy something use `kubectl cp`
kubectl cp /Developer/Work/SPA/ngx-starter-kit/.deploy/postgres/scripts/create_databases.sh $POD_NAME:/tmp/test.sh

# create service (use -svc.yaml for prod cluster, -headless.yaml for development)
kubectl create -f 05-svc.yaml
kubectl create -f 05-svc-headless.yaml
# verify service
kubectl get svc -lapp=postgresql
kubectl get ep

kubectl get all,configmap,secret -l app=postgresql

# Scale to zero
kubectl scale statefulset ngxdb-postgresql --replicas=0
```

### Connect to PostgreSQL

```bash
kubectl port-forward $POD_NAME 5432:5432
psql -h localhost -p 5432 -U cockpit --password  -d cockpit
```

#### Delete PostgreSQL Deployment

```bash
kubectl delete service postgres
kubectl delete statefulset postgres
kubectl delete configmap postgres
kubectl delete secret postgres
kubectl delete persistentvolumeclaim postgres
```

#### TODO

> deploy via typescript

```bash
ts-node .deploy/postgres/deploy.ts
```
