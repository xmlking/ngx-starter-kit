# Traefik

Ingress Controller with Traefik
> based on [Docker for Mac with Kubernetes — Ingress Controller with Traefik](https://medium.com/@thms.hmm/docker-for-mac-with-kubernetes-ingress-controller-with-traefik-e194919591bb)

`cd .deploy/traefik`
    
1. Create a file called `values-dev.yaml`.
    ```yaml
    dashboard:
      enabled: true
      domain: traefik.k8s
    ssl:
      enabled: true
      insecureSkipVerify: true
    kubernetes:
      namespaces:
        - default
        - kube-system
    ```

2. Install the Traefik Chart and check if the pod is up and running.
    ```bash
    helm install stable/traefik --name=traefik --namespace=kube-system -f values-dev.yaml
    kubectl get pods --namespace=kube-system
    kubectl get ingress traefik-dashboard --namespace=kube-system -o yaml

    # to see traefik logs
    kubectl logs $(kubectl get pods --namespace=kube-system -lapp=traefik -o jsonpath='{.items[0].metadata.name}') -f --namespace=kube-system

    # To update, if you change `values-dev.yaml` later
    helm upgrade --namespace=kube-system  -f values-dev.yaml traefik stable/traefik

    # To uninstall/delete the `traefik` deployment
    helm delete traefik --tiller-namespace=kube-system --purge
    ```

3. Add your domains to MacOS `/etc/hosts` as needed. Other options:  `wildcard DNS in localhost development` [1](https://gist.github.com/eloypnd/5efc3b590e7c738630fdcf0c10b68072), [2](https://medium.com/localz-engineering/kubernetes-traefik-locally-with-a-wildcard-certificate-e15219e5255d)

    ```
    127.0.0.1       localhost traefik.k8s web.traefik.k8s keycloak.traefik.k8s 
    ```

4. Deploying the K8s dashboard and check if the pod is up and running.
    ```
    cd .deploy/traefik
    git clone https://github.com/thmshmm/chart-k8s-dashboard.git k8s-dshbrd/
    helm install k8s-dshbrd --name kubernetes-dashboard --namespace=kube-system
    kubectl get ingress kubernetes-dashboard --namespace=kube-system -o yaml
    ```
