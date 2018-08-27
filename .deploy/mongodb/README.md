MongoDB
=======
Deploying MongoDB on OpenShift Origin

### Deploy

#### OpenShift Deployment

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

4. Install MongoDB Compass Community (recommended)
  > [Instructions](https://docs.mongodb.com/compass/master/install/)

#### Commands
 
```bash
# get pod name
oc get pods -n ngx-starter-kit
# ssh to pod
oc rsh  mongodb-1-zkgrw  
# or port forward
oc port-forward <pod-name> 27017:27017
# connect locally either with root or mdbuser user
mongo -u "root" -p "cockpit321" --authenticationDatabase "admin"
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
db.project.find()
db.project.find( { _id: ObjectId("5b4ac15994802c4e097cc579") } )
# to fix user.email index
db.user.getIndexes()
db.user.dropIndex("IDX_e12875dfb3b1d92d7d7c5377e2")
```

### Backup
#### export
```bash
mongo -u "root" -p "cockpit321" --authenticationDatabase "admin"
mongoexport --db cockpit --collection user --out user.json
```
#### import
```bash
```

### Ref:
* https://github.com/bitnami/bitnami-docker-mongodb
* https://access.redhat.com/articles/1752723
* https://docs.openshift.org/latest/using_images/db_images/mongodb.html
* https://github.com/debezium/docker-images/blob/master/examples/mongodb/0.9/init-inventory.sh
