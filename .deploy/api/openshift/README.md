# NgxApi

Deploying **NgxApi** on OpenShift

## Prerequisites

---

## Deploy

### Deploying to OpenShift

> Deploy ngxapi to OpenShift
 
```bash
# login
oc login <my OpenShift URL>
# oc login https://console.starter-us-east-1.openshift.com
oc project ngx
cd .deploy/api/openshift

# create app (first time deployment)
oc new-app -f api.tmpl.yml -p APPNAME=ngxapi -n ngx

# follow next steps if you want completely delete and redeploy.
# delete only deploymentConfig
oc delete all -l app=ngxapi -n ngx

# delete fully
oc delete all,configmap,secret -l app=ngxapi -n ngx

# redeploy
# From OpenShift Console UI
Applications > Deployments > ngxapi > Deploy
```
