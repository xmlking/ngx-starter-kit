# Projects

API to manage multiple Kubernetes clusters.

A **Project** represent a *Cluster, Namespace, User Account, Resource Quotas, Billing* etc.


### Setup
Setup your [Docker for Mac](https://gist.github.com/xmlking/62ab53753c0f0f5247d0e174b31dab21) for local development.
Create a cluster via [Swagger API](http://localhost:3000/docs/#/Cluster/post_api_cluster) 
> `YOUR_KUBERNETES_TOKEN` can be retrieved from kubernetes dashboard

```json
{
  "name": "LOC",
  "ver": "1.13",
  "baseUrl": "https://localhost:6443",
  "token": "YOUR_KUBERNETES_TOKEN"
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
