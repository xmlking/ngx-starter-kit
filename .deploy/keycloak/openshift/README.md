# Postgres on OpenShift

Deploying `Postgres` to `OpenShift` via `Helm`

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
