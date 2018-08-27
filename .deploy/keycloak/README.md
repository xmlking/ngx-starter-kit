KeyClock
========
Deploying KeyCloak on OpenShift Origin

### Build
```bash
# build stateless  KeyCloak docker image
cd .deploy/keycloak
docker build --tag=keycloak-openshift-stateless . 
# Tag
docker tag xmlking/keycloak-openshift-stateless:4.3.0.Final
docker tag xmlking/keycloak-openshift-stateless:4.3.0.Final  xmlking/keycloak-openshift-stateless:latest
# Push
docker push xmlking/keycloak-openshift-stateless:4.3.0.Final
docker push xmlking/keycloak-openshift-stateless:latest
```

### Deploy

#### OpenShift Deployment
> Deploy KeyCloak to OpenShift

```bash
# login with your ID
oc login <my OpenShift URL>
# oc login  https://console.starter-us-west-1.openshift.com
oc project ngx-starter-kit
cd .deploy/keycloak

# create app (first time deployment)
oc new-app -f keycloak.tmpl.yml -p APPNAME=keycloak -n ngx-starter-kit

# follow next steps if you want completely delete and deploy.
# delete only deploymentConfig
oc delete all -l app=keycloak -n ngx-starter-kit

# delete fully
oc delete all,configmap,secret -l app=keycloak -n ngx-starter-kit

# redeploy
From OpenShift Console UI
Applications > Deployments > ngx-starter-kit > Deploy 
```

#### Envelopment Variables
```bash
# When running Keycloak behind a proxy, you will need to enable proxy address forwarding.
PROXY_ADDRESS_FORWARDING=true
```

### Export 
> if you change keycloak config via UI, 
> you may want to export changes and check-in in Git for automated deployment next time.
```bash
# get keycloak pod name
oc get pods
# ssh to pod
oc rsh <keycloak-pod-name>
# in the shell , run
/bin/sh /opt/jboss/keycloak/bin/standalone.sh -Dkeycloak.migration.realmName=kubernetes -Dkeycloak.migration.action=export -Dkeycloak.migration.provider=dir  -Dkeycloak.migration.dir=/tmp/sumo
# copy files back to codebase
oc rsync <pod-name>:/tmp/sumo  /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak
```

### Reference 
* Secure a Spring Boot Rest app with Spring Security and Keycloak
    * https://sandor-nemeth.github.io/java/spring/2017/06/15/spring-boot-with-keycloak.html

* https://github.com/clevercloud-jhipster/clevercloud-keycloak-jhipster-ldap/blob/master/Dockerfile
