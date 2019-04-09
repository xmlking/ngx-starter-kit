# NgxApi Helm

Deploying `NgxApi` to `Kubernetes` via `Helm`

## Prerequisites

1. Helm command line and Tiller backend [installed](../../helm/README.md).
2. `helm-secrets` [installed](../../helm/README.md#managing-helm-chart-secrets-with-helm-secrets).

first create plain `secrets.dev.yaml` e.g., 

```yaml
envSecrets:
  - name: TYPEORM_PASSWORD
    value: postgres321
  - name: EMAIL_AUTH_PASS
    value: auth_pass
  - name: VAPID_PRIVATE_KEY
    value: cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI
```

encrypt before check-in to Git.
 
```bash
helm secrets enc secrets.dev.yaml
# verify 
helm secrets view secrets.dev.yaml
```

## Deploy

### With Tiller 

```bash
cd .deploy/api/helm

# To install the chart with the release name `ngxapi`
# `--dry-run --debug` flags help you to see before you really deploy
# use `secrets` plugin for  on-the-fly decryption
helm secrets install --name=ngxapi --namespace=default -f values-dev.yaml -f secrets.dev.yaml ./nodeapp

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress,replicasets -lapp.kubernetes.io/instance=ngxapi
kubectl describe pod ngxapi-nodeapp
kubectl get deployment ngxapi-nodeapp -o yaml
kubectl get ingress ngxapi-nodeapp  -o yaml

POD_NAME=$(kubectl get pods  -lapp.kubernetes.io/instance=ngxapi -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/sh
kubectl logs $POD_NAME -f
echo | openssl s_client -showcerts -connect ngxapi.traefik.k8s:443 2>/dev/null
 
 
# To update 
helm secrets upgrade --namespace=default -f values-dev.yaml -f secrets.dev.yaml ngxapi ./nodeapp

# To uninstall/delete the `ngxapi` release
helm delete ngxapi
helm delete ngxapi --purge  # delete ngxapi and purge

# Scale to zero
kubectl scale deployment ngxapi-nodeapp --replicas=0
```

### Without Tiller

```bash
cd .deploy/api/helm

helm secrets template ./nodeapp \
--name ngxapi \
--namespace default \
-f values-dev.yaml \
-f secrets.dev.yaml \
--output-dir generated

kubectl apply --recursive -f generated/nodeapp/* --namespace default
```


### Access NgxApi

ngxapi can be accessed:

* Within your cluster, at the following DNS name at port 3000:

  ```
  ngxapi-nodeapp.default.svc.cluster.local
  ```

* From outside the cluster:

  ```
   - https://ngxapi.traefik.k8s
  ```

* From outside the cluster, run these commands in the same shell: (`when NodePort used in values.yaml`)

  ```bash
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services ngxapi-nodeapp)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT
  ```

## Test
```bash
curl -X  GET "https://ngxapi.traefik.k8s/" -k -H  "accept: application/json"
curl -X  GET "https://ngxapi.traefik.k8s/echo?sumo=demo" -k -H  "accept: application/json"
```

## Reference
