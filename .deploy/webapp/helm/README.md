# WebApp Helm

Deploying `WebApp` to `Kubernetes` via `Helm`

## Deploy

### With Tiller 

```bash
cd .deploy/webapp/helm

# To install the chart with the release name `ngxweb`
# `--dry-run --debug` flags help you to see before you really deploy
helm install --name=ngxweb --namespace=default -f values-dev.yaml ./anginx

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress,replicasets -lapp.kubernetes.io/instance=ngxweb
kubectl describe pod ngxweb-anginx
kubectl get deployment ngxweb-anginx -o yaml
kubectl get ingress ngxweb-anginx  -o yaml

POD_NAME=$(kubectl get pods  -lapp.kubernetes.io/instance=ngxweb -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/sh
kubectl logs $POD_NAME -f
echo | openssl s_client -showcerts -connect ngxweb.traefik.k8s:443 2>/dev/null
 
 
# To update 
helm upgrade --namespace=default -f values-dev.yaml ngxweb ./anginx

# To uninstall/delete the `ngxweb` release
helm delete ngxweb
helm delete ngxweb --purge  # delete ngxweb and purge

# Scale to zero
kubectl scale deployment ngxweb-anginx --replicas=0
```

### Without Tiller

```bash
cd .deploy/webapp/helm

helm template ./anginx \
--name ngxweb \
--namespace default \
--values values-dev.yaml \
--output-dir generated

kubectl apply --recursive -f generated/anginx/* --namespace default
```


### Access NgxWeb

ngxweb can be accessed:

* Within your cluster, at the following DNS name at port 80:

  ```
  ngxweb-anginx.default.svc.cluster.local
  ```

* From outside the cluster:

  ```
   - https://ngxweb.traefik.k8s
  ```

* From outside the cluster, run these commands in the same shell: (`when NodePort used in values.yaml`)

  ```bash
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services ngxweb-anginx)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT
  ```

## Test
```bash
open https://ngxweb.traefik.k8s
```

## Reference
