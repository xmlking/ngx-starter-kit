# Istio

> Installing Istio with Helm via **helm template**

1. Create a namespace for the 1istio-system1 components:
```bash
kubectl create namespace istio-system
```

2. Install all the Istio Custom Resource Definitions (CRDs) using `kubectl apply`, and wait a few seconds for the CRDs to be committed in the Kubernetes API-server:
```bash
helm template install/kubernetes/helm/istio-init --name istio-init --namespace istio-system | kubectl apply -f -
```

3. Verify that all `53` Istio CRDs were committed to the Kubernetes api-server using the following command:
> If cert-manager is enabled, then the CRD count will be `58` instead.
```bash
kubectl get crds | grep 'istio.io\|certmanager.k8s.io' | wc -l
```

4. Select a [configuration profile](https://istio.io/docs/setup/kubernetes/additional-setup/config-profiles/) and then render and apply Istio’s core components corresponding to your chosen profile.
```bash
helm template install/kubernetes/helm/istio --name=istio --namespace=istio-system --values=/path/to/values.yaml | kubectl apply -f -
```


### Reference

1. [Customizable Install with Helm](https://istio.io/docs/setup/kubernetes/install/helm/)
