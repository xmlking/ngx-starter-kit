# Postgres via Helm

Deploying `Postgres` to `Kubernetes` via `Helm`

### Init Scripts

> first install `postgres-init-scripts`
```bash
cd .deploy/postgres/helm
kubectl create -f postgres-init-scripts.yaml
kubectl get secret postgres-init-scripts -o yaml
```

### With Tiller

```bash
cd .deploy/postgres/helm

# To install the chart with the release name `ngxdb`:
# --dry-run --debug flags help you to see before you really deploy
helm install --name=ngxdb --namespace=default --tiller-namespace=kube-system -f  values-dev.yaml stable/postgresql

# Verify the installation
helm ls 
helm ls -a --tiller-namespace=kube-system --debug

# To uninstall/delete the postgres deployment:
helm delete --purge ngxdb
```

### Without Tiller

```bash
cd .deploy/postgres/helm

helm fetch stable/postgresql
helm template ./postgresql-3.11.7.tgz \
--name ngxdb \
--namespace default \
--values values-dev.yaml  \
--output-dir generated

# Applying the result to the cluster
kubectl apply --recursive -f generated/postgresql/* --namespace default
```

### Connect to Postgres

PostgreSQL can be accessed via port 5432 on the following DNS name from within your cluster:

    ngxdb-postgresql.default.svc.cluster.local - Read/Write connection

To get the password for "postgres" run:

    export POSTGRES_PASSWORD=$(kubectl get secret --namespace default ngxdb-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)

To connect to your database run the following command:

    kubectl run ngxdb-postgresql-client --rm --tty -i --restart='Never' --namespace default --image bitnami/postgresql --env="PGPASSWORD=$POSTGRES_PASSWORD" --command -- psql --host ngxdb-postgresql -U postgres

To connect to your database from outside the cluster execute the following commands:

    export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
    export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services ngxdb-postgresql)
    PGPASSWORD="postgres321" psql --host $NODE_IP --port $NODE_PORT -U postgres




### Reference
1. [Create A Production-Ready PostgreSQL Cluster With Bitnami, Kubernetes And Helm](https://engineering.bitnami.com/articles/create-a-production-ready-postgresql-cluster-bitnami-kubernetes-and-helm.html)
