# KeyClock

Deploying **KeyCloak** on kubernetes and/or OpenShift

## Prerequisites

- Working Kubernetes Cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or [oc](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html) utility installed
- [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/) defined on your Kubernetes instance

---

## Deploy

### TLS Certs
> first time only: generate a self-signed certificate to configure Ingress 

```bash
cd .deploy/keycloak/manual
# generate a self-signed  key pair
openssl req -newkey rsa:2048 -nodes -keyout tls.key -x509 -days 365 -out tls.crt \
-subj "/C=US/ST=California/L=Los Angeles/O=Sumo/OU=Demo/CN=*.traefik.k8s/emailAddress=webmaster@traefik.k8s"
# verify cert
openssl verify tls.crt
```

```bash
# generate a kubernetes tls file
kubectl create secret tls keycloak-secrets-tls \
--key tls.key --cert tls.crt \
-o yaml --dry-run > 02-keycloak-secrets-tls.yml
# apply tls secret
kubectl create -f 02-keycloak-secrets-tls.yml --namespace default
```

Follow instructions from [manual](./manual) or [helm](./helm) or [OpenShift](./openshift)

Then continue steps below. 
 

#### Environment Variables

> When running Keycloak behind a proxy, you will need to enable proxy address forwarding.
> Read [Documentation](https://www.keycloak.org/docs/latest/server_installation/#_setting-up-a-load-balancer-or-proxy)

```bash
PROXY_ADDRESS_FORWARDING="true"
```

---

## Configuration

> Access Keycloak Admin Console
 
### Keycloak automatic configuration

> Open Keycloak WebConsole

1. Create a Keycloak realm called `ngx` via `Master > Add realm` menu, and switch to `ngx` realm
2. Import `.deploy/keycloak/realm-manual-import.json` via `Manage > Import` menu

### Keycloak manual configuration

> Open Keycloak WebConsole

1. Create a Keycloak realm called `ngx` via `Master > Add realm` menu, and switch to `ngx` realm
2. Create a public client called `ngxweb` and `ngxapi` under realm `ngx`
3. Create a role `ROLE_USER` , `ROLE_ADMIN` under realm `ngx`
4. Add a user `sumo`, `sumo1` , `sumo2` , `sumo3` under realm `ngx` and add the user to user role `ROLE_USER`
5. Add a user `ngxadmin` under realm `ngx` and add the user to user role `ROLE_ADMIN`

#### Configure audience in Keycloak

Refer https://stackoverflow.com/questions/53550321/keycloak-gatekeeper-aud-claim-and-client-id-do-not-match

1. add `ngxapi_audience` **Client Scopes** at Realm `ngx` with Audience mapper name: `ngxapi_audience_mapper` and adding `ngxapi` Client under `Included Client Audience`.
2. for `ngxweb` client, add `ngxapi_audience` at **Client Scopes** tab
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
-Djboss.socket.binding.port-offset --debug
# -Djboss.http.port=8888 -Djboss.https.port=9999 -Djboss.management.http.port=7777

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
