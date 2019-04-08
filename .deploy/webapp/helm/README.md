# WebApp Helm

Deploying `WebApp` to `Kubernetes` via `Helm`

## Deploy

### With Tiller 

```bash
cd .deploy/webapp/helm

# To install the chart with the release name `ngxapp`
# `--dry-run --debug` flags help you to see before you really deploy
helm install --name=ngxapp --namespace=default -f values-dev.yaml ./anginx

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress,replicasets -lapp.kubernetes.io/instance=ngxapp
kubectl describe pod ngxapp-angular
kubectl get deployment ngxapp-angular -o yaml
kubectl get ingress ngxapp-angular  -o yaml

POD_NAME=$(kubectl get pods  -lapp.kubernetes.io/instance=ngxapp -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/sh
kubectl logs $POD_NAME -f
echo | openssl s_client -showcerts -connect ngxapp.traefik.k8s:443 2>/dev/null
 
 
# To update 
helm upgrade --namespace=default -f values-dev.yaml ngxapp ./angular

# To uninstall/delete the `ngxapp` release
helm delete ngxapp
helm delete ngxapp --purge  # delete ngxapp and purge

# Scale to zero
kubectl scale deployment ngxapp-angular --replicas=0
```

### Without Tiller

```bash
cd .deploy/webapp/helm

helm template ./angular \
--name ngxapp \
--namespace default \
--values values-dev.yaml \
--output-dir generated

kubectl apply --recursive -f generated/angular/* --namespace default
```


### Access ngxapp

ngxapp can be accessed:

* Within your cluster, at the following DNS name at port 80:

  ```
  ngxapp-angular.default.svc.cluster.local
  ```

* From outside the cluster:

  ```
   - https://ngxapp.traefik.k8s
  ```

* From outside the cluster, run these commands in the same shell: (`when NodePort used in values.yaml`)

  ```bash
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services ngxapp-angular)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT
  ```

## Test
```bash
open https://ngxapp.traefik.k8s
```

## Reference
