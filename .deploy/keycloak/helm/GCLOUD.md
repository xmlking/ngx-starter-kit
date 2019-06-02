# KeyCloak on GKE

Deploying `KeyCloak` to `Google Kubernetes Engine` via `Helm`

## Set Env
```bash
export PROJECT_ID=ngx-starter-kit
cd .deploy/keycloak/helm
```

## Push keycloak to GCR
```bash
# Authenticate to the Google Container Registry (first time)
gcloud auth configure-docker
docker pull jboss/keycloak:6.0.1
docker tag jboss/keycloak:6.0.1 gcr.io/${PROJECT_ID}/keycloak:6.0.1
docker push gcr.io/${PROJECT_ID}/keycloak:6.0.1
```

## Create Google-managed SSL certificates

> Ref [gke-managed-certs](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs)

```bash
kubectl apply -f gke-keycloak-certificate.yaml

# Verify
kubectl get  ManagedCertificate
kubectl describe  ManagedCertificate keycloak
kubectl describe  ManagedCertificate ngxweb-anginx
kubectl describe  ManagedCertificate ngxapi-nodeapp

gcloud beta compute ssl-certificates list
gcloud compute ssl-certificates describe  mcrt-xxx...

```

## Deploy

### With Tiller 

> make sure `postgres-init-scripts`  via `kubectl create -f postgres-init-scripts.yaml` before next step.
> remove **Load balancing** manually from `Google Cloud Console` before next step.

```bash
cd .deploy/keycloak/helm

# add KeyCloak Charts Repo
helm repo add codecentric https://codecentric.github.io/helm-charts

# To install the chart with the release name `keycloak`
# --dry-run --debug flags help you to see before you really deploy
helm install --name keycloak --namespace=default -f values-gke.yaml codecentric/keycloak

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress,ManagedCertificate -l app=keycloak
kubectl describe pod keycloak
kubectl get statefulset keycloak -o yaml
kubectl get ingress keycloak  -o yaml

POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/bash
kubectl logs $POD_NAME -f

# To update
helm upgrade --namespace=default -f values-gke.yaml keycloak codecentric/keycloak

# To uninstall/delete the `keycloak` deployment
helm delete keycloak
helm delete keycloak --purge  # delete keycloak and purge

# Scale to zero
kubectl scale statefulset keycloak --replicas=0
```


> Ingress would consume a good amount of time to have the GCP load balancing functioning.


## Cleaning up
```bash
gcloud compute ssl-certificates delete keycloak
```

## Reference
1. [Cloud DNS](https://cloud.google.com/dns/records/)
2. [Migrating to Cloud DNS](https://cloud.google.com/dns/docs/migrating)
