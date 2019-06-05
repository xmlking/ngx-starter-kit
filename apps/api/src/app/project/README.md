# Projects

API to manage multiple Kubernetes clusters.

A **Project** represent a *Cluster, Namespace, User Account, Resource Quotas, Billing* etc.


### Setup
Setup your [Docker for Mac](https://gist.github.com/xmlking/62ab53753c0f0f5247d0e174b31dab21) for local development.
Create a cluster via [Swagger API](http://localhost:3000/docs/#/Cluster/post_api_cluster) 

1. k8s baseUrl with in pod:  `https://kubernetes`, for local development with `Docker for Mac`, use `https://localhost:6443`
  ```bash
  kubectl get endpoints | grep kubernetes
  ```

2. Create `kubeview` Service Account: [Instructions](../../../../../.deploy/api/README.md#Deploy)

3. `YOUR_KUBEVIEW_TOKEN` for `kubeview` Service Account can be retrieved from kubernetes via cli:
  ```bash
  kubectl get secret | grep kubeview
  kubectl get secrets <name-of-the-secret> -o json | jq -Mr '.data.token' | base64 -D
  ```

3. from Pod, you should be able to test
  ```bash
  curl -k  https://kubernetes/api/v1/namespaces -H "Authorization: Bearer  $TOKEN"
  ```

```json
{
  "name": "LOC",
  "ver": "1.13",
  "baseUrl": "https://localhost:6443",
  "token": "YOUR_KUBEVIEW_TOKEN"
}
```

### Test
```bash
# Get all namespaces in a clusterName
curl -X GET "http://localhost:3000/api/kubernetes/LOC" \
-H "accept: application/json" \
-H "authorization: Bearer YOUR_OIDC_ACCESS_TOKEN"

# Find one namespace in a cluster by namespaceName
curl -X GET "http://localhost:3000/api/kubernetes/LOC/kube-system" \
-H "accept: application/json" \
-H "authorization: Bearer YOUR_OIDC_ACCESS_TOKEN"
``` 

### TODO

Implement [kubeview](https://github.com/benc-uk/kubeview) with Angular

