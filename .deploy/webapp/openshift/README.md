# NgxWeb

Deploying **NgxWeb** on OpenShift

## Prerequisites

---

## Deploy

### Deploying to OpenShift

> Deploy ngxapi to OpenShift

```bash
# login with your ID
oc login <my OpenShift URL>
# oc login  https://console.starter-us-east-1.openshift.com
oc project ngx
cd .deploy/ngxweb

# create app (first time deployment)
oc new-app -f ngxweb.tmpl.yml -p APPNAME=ngxweb -n ngx-starter-kit

# follow next steps if you want completely delete and deploy.
# delete only deploymentConfig
oc delete all -l app=ngxweb -n cockpit

# delete fully
oc delete all,configmap,secret -l app=ngxweb -n ngx-starter-kit

# redeploy
from OpenShift Console UI,
Applications > Deployments > ngxweb > Deploy
```
