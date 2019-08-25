# KeyCloak Helm

Deploying `KeyCloak` to `Kubernetes` via `Helm`

we will be using charts from [codecentric](https://github.com/codecentric/helm-charts) Repo.

> Follow extra instructions for [OPENSHIFT](./OPENSHIFT4.md) and  [GCLOUD](./GCLOUD.md)

### With Tiller

```bash
cd .deploy/keycloak/helm

# add KeyCloak Charts Repo
helm repo add codecentric https://codecentric.github.io/helm-charts

# To install the chart with the release name `keycloak`
# --dry-run --debug flags help you to see before you really deploy
helm install --name keycloak --namespace=default -f values-dev.yaml codecentric/keycloak

# verify deployment
helm ls
kubectl get all,configmap,secret,ingress -l app=keycloak
kubectl describe pod keycloak
kubectl get statefulset keycloak -o yaml
kubectl get ingress keycloak  -o yaml

POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/bash
kubectl logs $POD_NAME -f
echo | openssl s_client -showcerts -connect keycloak.traefik.k8s:443 2>/dev/null


# To update
helm upgrade --namespace=default -f values-dev.yaml keycloak codecentric/keycloak

# To uninstall/delete the `keycloak` deployment
helm delete keycloak
helm delete keycloak --purge  # delete keycloak and purge

# Scale to zero
kubectl scale statefulset keycloak --replicas=0
```

### Without Tiller

```bash
cd .deploy/keycloak/helm

helm fetch codecentric/keycloak

helm template ./keycloak-4.14.1.tgz \
--name keycloak \
--namespace default \
--values values-dev.yaml \
--output-dir generated

kubectl apply --recursive -f generated/keycloak/* --namespace default
```

### Access Keycloak

Keycloak can be accessed:

- Within your cluster, at the following DNS name at port 80:

  ```
  keycloak-http.default.svc.cluster.local
  ```

- From outside the cluster:

  ```
   - https://keycloak.traefik.k8s
  ```

- From outside the cluster, run these commands in the same shell: (`when NodePort used in values.yaml`)

  ```bash
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services keycloak-http)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT
  ```

Login with the following credentials:
`Username: admin`

To retrieve the initial user password run:

```bash
kubectl get secret --namespace default keycloak-http -o jsonpath="{.data.password}" | base64 --decode; echo
```

### Reference
