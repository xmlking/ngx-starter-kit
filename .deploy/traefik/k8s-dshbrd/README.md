# Helm chart for Kubernetes Dashboard

This Helm chart will deploy the [Kubernetes Dashboard](https://github.com/kubernetes/dashboard).

Only tested/working with Docker for Mac with Kubernetes!!!

## Prereqs
- Helm is installed and ready
- [Træfik](https://docs.traefik.io/) (load balancer) is deployed

To deploy Træfik you can also use Helm as described in the docs. Use the following config:
```
dashboard:
  enabled: true
  domain: traefik.k8s
kubernetes:
  namespaces:
    - default
    - kube-system
```

### Edit /etc/hosts
```
127.0.0.1	localhost web.traefik.k8s
```

## Install
```
$ git clone https://github.com/thmshmm/chart-k8s-dashboard.git k8s-dshbrd/
$ helm install k8s-dshbrd --name kubernetes-dashboard
```

## Remove
```
$ helm delete kubernetes-dashboard
```

## Dashboard

The dashboard can be accessed via http://web.traefik.k8s.