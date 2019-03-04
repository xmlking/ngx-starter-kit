# KeyClock

Deploying **KeyCloak** on kubernetes and/or OpenShift

### Prerequisites

- Working Kubernetes Cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or [oc](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html) utility installed
- [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/) defined on your Kubernetes instance

### Deploy

#### Deploying to Kubernetes

> 1. assume you already setup `ngx` kubernetes context
> 2. make sure you current context is using correct `namespace`. i.e., `kubectl config current-context`
> 3. make sure keycloak image `version` is correct in `*-deployment.yaml` file.
> 4. generate base64 passwords for `*-secrets.yaml` with `echo -n 'admin' | base64`
> 5. before proceeding to next steps, make sure you deployed `postgres`

```bash
cd .deploy/keycloak

# create configmap
kubectl create -f 01-keycloak-configmap.yaml
# verify
kubectl get configmap keycloak -o yaml

# create secrets
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

MY_POD=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $MY_POD -- /bin/bash
kubectl log $MY_POD -f
# Accessing logs from Init Containers
kubectl logs $MY_POD -c wait-for-postgresql -f
kubectl exec -it $MY_POD -c wait-for-postgresql -- /bin/sh

# create service (use -service.yaml for prod cluster, -nodeport.yaml for development)
kubectl create -f 05-keycloak-service.yaml
# verify service
kubectl get svc keycloak -o wide
kubectl get ep

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

#### Deploying to OpenShift

> Deploy KeyCloak to OpenShift

```bash
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

#### Envelopment Variables

```bash
# When running Keycloak behind a proxy, you will need to enable proxy address forwarding.
PROXY_ADDRESS_FORWARDING=true
```

---
### Configuration

#### Access Keycloak Admin Console

```bash
# if service exposing via port-forward 
MY_POD=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl port-forward $MY_POD 8080:8080
open http://localhost:8080
# if service exposing via nodeport 
# get node port from `kubectl get svc keycloak`
open http://localhost:31080
```

#### Keycloak automatic configuration

> Open Keycloak WebConsole

1. Create a Keycloak realm called `ngx` via `Master > Add realm` menu, and switch to `ngx` realm
2. Import `.deploy/keycloak/realm-manual-import.json` via `Manage > Import` menu

#### Keycloak manual configuration

> Open Keycloak WebConsole

1. Create a Keycloak realm called `ngx` via `Master > Add realm` menu, and switch to `ngx` realm
2. Create a public client called `ngxapp` and `ngxapi` under realm `ngx`
3. Create a role `ROLE_USER` , `ROLE_ADMIN` under realm `ngx`
4. Add a user `sumo`, `sumo1` , `sumo2` , `sumo3` under realm `ngx` and add the user to user role `ROLE_USER`
5. Add a user `ngxadmin` under realm `ngx` and add the user to user role `ROLE_ADMIN`

##### Configure audience in Keycloak

Refer https://stackoverflow.com/questions/53550321/keycloak-gatekeeper-aud-claim-and-client-id-do-not-match

1. add `ngxapi_audience` **Client Scopes** at Realm `ngx` with Audience mapper name: `ngxapi_audience_mapper` and adding `ngxapi` Client under `Included Client Audience`.
2. for `ngxapp` client, add `ngxapi_audience` at **Client Scopes** tab
3. for `ngxapi` client, add `ngxapi_audience` at **Client Scopes** tab (for Swagger API Docs)

---

### Export

> if you change keycloak config via UI,
> you may want to export changes and check-in to GitHib for automated deployment next time.

```bash
# get keycloak pod name
# oc get pods # for OpenShift
MY_POD=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')

# ssh to pod
# oc rsh <keycloak-pod-name> # for OpenShift
kubectl exec -it $MY_POD -- /bin/bash

# in the shell , run
/bin/sh /opt/jboss/keycloak/bin/standalone.sh \
-Dkeycloak.migration.realmName=ngx \
-Dkeycloak.migration.action=export \
-Dkeycloak.migration.provider=dir  \
-Dkeycloak.migration.dir=/tmp/sumo \
-Djboss.http.port=8888 -Djboss.https.port=9999 -Djboss.management.http.port=7777

# copy files back to codebase
# exit previous shell first, then
kubectl cp $MY_POD:/tmp/sumo /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak/realm-import
# oc rsync <pod-name>:/tmp/sumo  /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak # for OpenShift
```

---

### Troubleshooting

#### User with username exists

If you get a error `Failed to add user 'admin' to realm 'master': user with username exists` this is most likely because
you've already ran the example, but not deleted the persisted volume for the database. In this case the admin user already
exists. You can ignore this warning.

---

### Reference

- Secure a Spring Boot Rest app with Spring Security and Keycloak

  - https://sandor-nemeth.github.io/java/spring/2017/06/15/spring-boot-with-keycloak.html

- https://github.com/clevercloud-jhipster/clevercloud-keycloak-jhipster-ldap/blob/master/Dockerfile
