# Helm

> One time Helm setup and configuration


### Install Helm CLI
```bash
brew install kubernetes-helm
```

### Install Tiller

> first time only: setup tiller in default `kube-system` namespace or your private namespace

```bash
# Install tiller into default `kube-system` namespace
helm init
# Install tiller into your private namespace (below showing `kube-system` namespace, but it could be any of your namespaces)
helm init --tiller-namespace=kube-system --service-account=default --tiller-image=gcr.io/kubernetes-helm/tiller:v2.13.0

# Upgrade tiller to latest version
export TILLER_TAG=v2.13.0
helm init --upgrade --tiller-namespace=kube-system --service-account=default --tiller-image=gcr.io/kubernetes-helm/tiller:$TILLER_TAG

# Verify the installation
helm version --tiller-namespace=kube-system
helm ls -a --tiller-namespace=kube-system --debug

# Uninstall tiller from your namespace
helm reset --tiller-namespace=kube-system 

# if needed
helm init --client-only --tiller-namespace=kube-system 
helm repo update --tiller-namespace=kube-system 
``` 

### Install Charts

```bash
# example chart instalation 
helm install --name=nginx-ingress --namespace=default --tiller-namespace=kube-system  ./charts-master/incubator/nginx-ingress
helm install --name=traefik       --namespace=default --tiller-namespace=kube-system  -f  traefik-values.yaml stable/traefik
```

### Using Helm without Tiller

1. Fetching the chart templates
2. Rendering the template with configurable values
3. Applying the result to the cluster

```bash
# Fetching the chart templates
helm fetch  \
  --untar \
  --untardir charts/stable \
stable/traefik

# Rendering the template with configurable values
cp charts/stable/traefik/values.yaml \
  values/traefik-values.yaml

# copied traefik.yaml can now be adjusted as needed

# To render the manifests from the template source with the potentially edited values file:
mkdir -p manual/stable

helm template \
  --values values-prod.yaml  \
  --name traefik \
  --tiller-namespace kube-system \
  --namespace default \
  --output-dir manual/stable  \
    charts/stable/traefik
    
# Applying the result to the cluster
kubectl apply --recursive --filename manual/stable/traefik
```



### Reference
1. [What You Yaml is What You Get](https://blog.giantswarm.io/what-you-yaml-is-what-you-get/)
2. [helm-nomagic](https://github.com/giantswarm/helm-nomagic)

