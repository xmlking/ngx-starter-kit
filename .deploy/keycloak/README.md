KeyClock
========
Deploying KeyCloak on OpenShift Origin

### Deploy

#### OpenShift Deployment
> Deploy KeyCloak to OpenShift

```bash
# login with your ID
oc login <my OpenShift URL>
# oc login  https://console.starter-us-east-1.openshift.com
oc project ngx
cd .deploy/keycloak

# create app (first time deployment)
oc apply -f ./keycloak.openshift.yaml
# oc new-app -f keycloak.tmpl.yml -p APPNAME=keycloak -n ngx-starter-kit

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

#### Keycloak manual configuration
> To Open Keycloak WebConsole 

Using Keycloak WebConsole :

1. Create a Keycloak realm called `ngx`  
2. Create a public client called `ngxapp`  and `ngxapi`  under realm `ngx`  
3. Create a role `ROLE_USER` , `ROLE_ADMIN` under realm `ngx`  
4. Add a user  `sumo`, `sumo1` , `sumo2` , `sumo3`  under realm `ngx`   and add the user to user role `ROLE_USER`
5. Add a user  `ngxadmin` under realm `ngx`   and add the user to user role `ROLE_ADMIN`

##### Configure audience in Keycloak

Refer https://stackoverflow.com/questions/53550321/keycloak-gatekeeper-aud-claim-and-client-id-do-not-match

1. add `ngxapi_audience` **Client Scopes** at Realm `ngx` with Audience mapper with `ngxapi`  Client.
2. for `ngxapp` client, add `ngxapi_audience` at **Client Scopes**
3. for `ngxapi` client, add `ngxapi_audience` at **Client Scopes** (for Swagger API Docs)

### Export 
> if you change keycloak config via UI, 
> you may want to export changes and check-in in Git for automated deployment next time.
```bash
# get keycloak pod name
oc get pods
# ssh to pod
oc rsh <keycloak-pod-name>
# in the shell , run
/bin/sh /opt/jboss/keycloak/bin/standalone.sh -Dkeycloak.migration.realmName=ngx -Dkeycloak.migration.action=export -Dkeycloak.migration.provider=dir  -Dkeycloak.migration.dir=/tmp/sumo
# copy files back to codebase
oc rsync <pod-name>:/tmp/sumo  /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak
```

### Reference 
* Secure a Spring Boot Rest app with Spring Security and Keycloak
    * https://sandor-nemeth.github.io/java/spring/2017/06/15/spring-boot-with-keycloak.html

* https://github.com/clevercloud-jhipster/clevercloud-keycloak-jhipster-ldap/blob/master/Dockerfile
