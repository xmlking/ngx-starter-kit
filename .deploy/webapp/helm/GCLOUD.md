# WebApp on GKE

Deploying `WebApp` to `Google Kubernetes Engine` via `Helm`

## Set Env
```bash
export PROJECT_ID=ngx-starter-kit
export BUILD_VERSION=2.0.4-SNAPSHOT
```

## Push NgxApi to GCR
```bash
# Authenticate to the Google Container Registry (first time)
gcloud auth configure-docker
docker tag xmlking/ngxweb:${BUILD_VERSION} gcr.io/${PROJECT_ID}/ngxweb:${BUILD_VERSION}
docker push gcr.io/${PROJECT_ID}/ngxweb:${BUILD_VERSION}
```

## Deploy

### With Tiller 

```bash
cd .deploy/webapp/helm

# To install the chart with the release name `ngxweb`
# `--dry-run --debug` flags help you to see before you really deploy
helm install --name=ngxweb --namespace=default -f values-gke.yaml ./anginx

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress,replicasets,managedCertificate -lapp.kubernetes.io/instance=ngxweb
kubectl describe pod ngxweb-anginx
kubectl get deployment ngxweb-anginx -o yaml
kubectl get ingress ngxweb-anginx  -o yaml

POD_NAME=$(kubectl get pods  -lapp.kubernetes.io/instance=ngxweb -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/sh
kubectl logs $POD_NAME -f
echo | openssl s_client -showcerts -connect ngxweb.traefik.k8s:443 2>/dev/null
 

# To update 
helm upgrade --namespace=default -f values-gke.yaml ngxweb ./anginx

# To uninstall/delete the `ngxweb` release
helm delete ngxweb
helm delete ngxweb --purge  # delete ngxweb and purge

# Scale to zero
kubectl scale deployment ngxweb-anginx --replicas=0
```

> Ingress would consume a good amount of time to have the GCP load balancing functioning.

## Cleaning up
```bash
gcloud compute ssl-certificates delete ngxweb-nodeapp
```

## Reference
1. [Cloud DNS](https://cloud.google.com/dns/records/)
1. [Migrating to Cloud DNS](https://cloud.google.com/dns/docs/migrating)
