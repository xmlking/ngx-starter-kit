MongoDB
=======
Deploying MongoDB on OpenShift Origin

### Deploy

#### OpenShift Deployment
> Deploy KeyCloak-Proxy to OpenShift

> first time deployment

> Add storage 50GB  with name: `mongodb-data` in  OpenShift UI Console 

```bash
# login with ms id
oc login <my OpenShift URL>
# oc login  https://console.starter-us-west-1.openshift.com
oc project ngx-starter-kit
cd .deploy/mongodb

# create app (first time deployment)
oc new-app -f mongodb.tmpl.yml -p APPNAME=mongodb -n ngx-starter-kit

# follow next steps if you want completely delete and deploy.
# delete only deploymentConfig
oc delete all -l app=mongodb -n ngx-starter-kit

# delete fully
oc delete all,configmap,secret -l app=mongodb -n ngx-starter-kit

# redeploy
From OpenShift Console UI
Applications > Deployments > ngx-starter-kit > Deploy 
```

### Use

#### Prerequisite 

1. mongo shell
```bash
brew update
# install mongodb locally, required to use mongo shell
brew install mongodb
```
2. Install IntelliJ mongodb plugin
```bash
# port forward so that you can connect local dev tools to MongoDB
# get mongodb pod name with `oc get pods`
oc port-forward <pod-name> 27017:27017
```

3. with-in this project, configure mongo connetion with IntelliJ Mongo Plugin 
```
Path to Mongo Shell : /usr/local/bin/mongo
Label : cockpit-on-openshift
server url : localhost:27017
user database : cockpit
Authentication
  username: mdbuser
  password: cockpit123
  auth databse:  cockpit
  auth mechanisum: SCRAM-SHA-1

Then test connection
```

#### Commands
 
```bash
# get pod name
oc get pods -n ngx-starter-kit
# ssh to pod
oc rsh  mongodb-1-zkgrw  
# or port forward
oc port-forward <pod-name> 27017:27017
# connect locally either with admin or mdbuser user
mongo -u "admin" -p "cockpit321" --authenticationDatabase "admin"
mongo -u "mdbuser" -p "cockpit123" --authenticationDatabase "cockpit"

# example commands 
use admin
show users
show roles
show dbs

use cockpit
show users
show roles
show dbs
show collections
```


### Ref:
* https://access.redhat.com/articles/1752723
* https://docs.openshift.org/latest/using_images/db_images/mongodb.html

