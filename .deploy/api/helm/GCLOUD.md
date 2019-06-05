# NgxApi on GKE

Deploying `NgxApi` to `Google Kubernetes Engine` via `Helm`

## Set Env
```bash
export PROJECT_ID=ngx-starter-kit
export BUILD_VERSION=2.0.4-SNAPSHOT
```

## Push NgxApi to GCR
```bash
# Authenticate to the Google Container Registry (first time)
gcloud auth configure-docker
docker tag xmlking/ngxapi:${BUILD_VERSION} gcr.io/${PROJECT_ID}/ngxapi:${BUILD_VERSION}
docker push gcr.io/${PROJECT_ID}/ngxapi:${BUILD_VERSION}
```

## Deploy

### With Tiller 

```bash
cd .deploy/api/helm

# To install the chart with the release name `ngxapi`
helm install --name=ngxapi --namespace=default -f values-gke.yaml -f secrets.gke.yaml ./nodeapp

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress,replicasets,managedCertificate -lapp.kubernetes.io/instance=ngxapi
kubectl describe pod ngxapi-nodeapp
kubectl get deployment ngxapi-nodeapp -o yaml
kubectl get ingress ngxapi-nodeapp  -o yaml

POD_NAME=$(kubectl get pods  -lapp.kubernetes.io/instance=ngxapi -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/sh
kubectl logs $POD_NAME -f

# To update 
helm upgrade --namespace=default -f values-gke.yaml -f secrets.gke.yaml ngxapi ./nodeapp

# To uninstall/delete the `ngxapi` release
helm delete ngxapi
helm delete ngxapi --purge  # delete ngxapi and purge

# Scale to zero
kubectl scale deployment ngxapi-nodeapp --replicas=0
```

> Ingress would consume a good amount of time to have the GCP load balancing functioning.

## Cleaning up
```bash
helm delete ngxapi --purge
gcloud compute ssl-certificates delete ngxapi-nodeapp
```

## Reference
1. [Cloud DNS](https://cloud.google.com/dns/records/)
1. [Migrating to Cloud DNS](https://cloud.google.com/dns/docs/migrating)
