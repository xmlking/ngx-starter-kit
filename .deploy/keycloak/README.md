# KeyClock

Deploying **KeyCloak** on kubernetes and/or OpenShift

## Prerequisites

- Working Kubernetes Cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or [oc](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html) utility installed
- [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/) defined on your Kubernetes instance

---

## Deploy

### Deploying to Kubernetes

> 1. assume you already setup `ngx` kubernetes context
> 2. make sure you current context is using correct `namespace`. i.e., `kubectl config current-context`
> 3. make sure keycloak image `version` is correct in `*-deployment.yaml` file.
> 4. generate base64 passwords for `*-secrets.yaml` with `echo -n 'admin' | base64`
> 5. before proceeding to next steps, make sure you deployed `postgres`

```bash
cd .deploy/keycloak/manual

# create configmap
kubectl create -f 01-keycloak-configmap.yaml
# verify
kubectl get configmap keycloak -o yaml

# create secrets
# to generate base64 passwords use `echo -n 'admin' | base64`
kubectl create -f 02-keycloak-secrets.yaml
# verify secrets
kubectl get secret keycloak -o yaml

# create persistentvolumeclaim (optional)
kubectl create -f 03-keycloak-storage.yaml
# verify persistentvolumeclaim
kubectl get persistentvolumeclaim --namespace default
kubectl get persistentvolume

# create deployment
kubectl create -f 04-keycloak-deployment.yaml
# verify deployment
kubectl describe pod keycloak
kubectl get deployment keycloak -o yaml
kubectl get po -o wide --watch

POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/bash
kubectl log $POD_NAME -f
# Accessing logs from Init Containers
kubectl logs $POD_NAME -c wait-for-postgresql -f
kubectl exec -it $POD_NAME -c wait-for-postgresql -- /bin/sh

# create service (use -service.yaml for development, -nodeport.yaml for prod)
kubectl create -f 05-keycloak-service-nodeport.yaml
# verify service
kubectl get svc keycloak -o wide
kubectl get ep

# create network policy
kubectl create -f 06-keycloak-network-policy.yaml
# test network policy
kubectl get networkpolicy

open http://node1:32080
open http://node2:32080
open http://node3:32080

kubectl get all,configmap,secret -l app=keycloak
```

#### Delete Keycloak Deployment

```bash
kubectl delete ingress keycloak
kubectl delete service keycloak
kubectl delete deployment keycloak
kubectl delete configmap keycloak
kubectl delete secret keycloak
kubectl delete persistentvolumeclaim keycloak
```

### Deploying to Kubernetes via Helm

#### Install Tiller

> first only: setup tiller in default `kube-system` namespace or your private namespace

```bash
# Install tiller into default `kube-system` namespace
helm init
# Install tiller into your private namespace (below showing `kube-system` namespace, but it could be any of your namespaces)
helm init --tiller-namespace=kube-system --service-account=default --tiller-image=gcr.io/kubernetes-helm/tiller:$TILLER_TAG

# Upgrade tiller to latest version
export TILLER_TAG=v2.13.0
helm init --upgrade --tiller-namespace=kube-system --service-account=default --tiller-image=gcr.io/kubernetes-helm/tiller:$TILLER_TAG

# Verify the installation
helm version --tiller-namespace=kube-system
helm ls --tiller-namespace=kube-system

# Uninstall tiller from your namespace
helm reset --tiller-namespace=kube-system 
``` 

#### Install Keycloak

```bash
cd .deploy/keycloak/helm

# To install the chart with the release name `keycloak`
helm install --name keycloak --namespace default -f values.yaml stable/keycloak

# verify deployment
helm ls
kubectl get all,configmap,secret -l app=keycloak
kubectl describe pod keycloak
kubectl get statefulset keycloak -o yaml


POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/bash
kubectl log $POD_NAME -f
 
 
# To update 
helm upgrade --namespace default -f values.yaml -f override.yaml keycloak stable/keycloak

# To uninstall/delete the `keycloak` deployment
helm delete keycloak

delete keycloak and purge
helm delete --purge keycloak
```

 
##### Keycloak can be accessed:

Within your cluster, at the following DNS name at port 80:

  `keycloak-http.default.svc.cluster.local`

From outside the cluster, run these commands in the same shell:

  ```bash
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services keycloak-http)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT
  ```

##### Login with the following credentials:
Username: admin

To retrieve the initial user password run:

  ```bash
  kubectl get secret --namespace default keycloak-http -o jsonpath="{.data.password}" | base64 --decode; echo
  ```
 
### Deploying to OpenShift

> Deploy KeyCloak to OpenShift

```bash
cd .deploy/keycloak/openshift

# login with your ID
oc login <my OpenShift URL>
# oc login  https://console.starter-us-east-1.openshift.com
oc project ngx
cd .deploy/keycloak

# create app (first time deployment)
oc apply -f ./keycloak-openshift.yaml

# follow next steps if you want completely delete and deploy.
# delete only deploymentConfig
oc delete all -l app=keycloak -n ngx

# delete fully
oc delete all,configmap,secret -l app=keycloak -n ngx
oc delete pvc --all -n ngx

# redeploy
From OpenShift Console UI
Applications > Deployments > ngx > Deploy
```

#### Environment Variables

> When running Keycloak behind a proxy, you will need to enable proxy address forwarding.
> Read [Documentation](https://www.keycloak.org/docs/latest/server_installation/#_setting-up-a-load-balancer-or-proxy)

```bash
PROXY_ADDRESS_FORWARDING="true"
```

---

## Configuration

### Access Keycloak Admin Console

```bash
# if service exposing via port-forward
POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl port-forward $POD_NAME 8080:8080
open http://localhost:8080
# if service exposing via nodeport
# get node port from `kubectl get svc keycloak`
open http://localhost:31080
```

### Keycloak automatic configuration

> Open Keycloak WebConsole

1. Create a Keycloak realm called `ngx` via `Master > Add realm` menu, and switch to `ngx` realm
2. Import `.deploy/keycloak/realm-manual-import.json` via `Manage > Import` menu

### Keycloak manual configuration

> Open Keycloak WebConsole

1. Create a Keycloak realm called `ngx` via `Master > Add realm` menu, and switch to `ngx` realm
2. Create a public client called `ngxapp` and `ngxapi` under realm `ngx`
3. Create a role `ROLE_USER` , `ROLE_ADMIN` under realm `ngx`
4. Add a user `sumo`, `sumo1` , `sumo2` , `sumo3` under realm `ngx` and add the user to user role `ROLE_USER`
5. Add a user `ngxadmin` under realm `ngx` and add the user to user role `ROLE_ADMIN`

#### Configure audience in Keycloak

Refer https://stackoverflow.com/questions/53550321/keycloak-gatekeeper-aud-claim-and-client-id-do-not-match

1. add `ngxapi_audience` **Client Scopes** at Realm `ngx` with Audience mapper name: `ngxapi_audience_mapper` and adding `ngxapi` Client under `Included Client Audience`.
2. for `ngxapp` client, add `ngxapi_audience` at **Client Scopes** tab
3. for `ngxapi` client, add `ngxapi_audience` at **Client Scopes** tab (for Swagger API Docs)

---

## Export

> if you change keycloak config via UI,
> you may want to export changes and check-in to GitHib for automated deployment next time.

```bash
# get keycloak pod name
# oc get pods # for OpenShift
POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')

# ssh to pod
# oc rsh <keycloak-pod-name> # for OpenShift
kubectl exec -it $POD_NAME -- /bin/bash

# in the shell , run
/bin/sh /opt/jboss/keycloak/bin/standalone.sh \
-Dkeycloak.migration.realmName=ngx \
-Dkeycloak.migration.action=export \
-Dkeycloak.migration.provider=dir  \
-Dkeycloak.migration.dir=/tmp/sumo \
-Djboss.http.port=8888 -Djboss.https.port=9999 -Djboss.management.http.port=7777

# copy files back to codebase
# exit previous shell first, then
kubectl cp $POD_NAME:/tmp/sumo /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak/realm-import
# oc rsync <pod-name>:/tmp/sumo  /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak # for OpenShift
```

---

## Troubleshooting

### User with username exists

If you get a error `Failed to add user 'admin' to realm 'master': user with username exists` this is most likely because
you've already ran the example, but not deleted the persisted volume for the database. In this case the admin user already
exists. You can ignore this warning.

---

## Reference

- Secure a Spring Boot Rest app with Spring Security and Keycloak

  - https://sandor-nemeth.github.io/java/spring/2017/06/15/spring-boot-with-keycloak.html

- https://github.com/clevercloud-jhipster/clevercloud-keycloak-jhipster-ldap/blob/master/Dockerfile
