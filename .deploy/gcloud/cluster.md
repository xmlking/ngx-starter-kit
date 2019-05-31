# Cluster

Creating VPC-native private Kubernetes cluster


## Prerequisites

1. Active Google Cloud Platform (GCP) Account.
2. Working [gCloud SDK](cloud-sdk.md).


### Step 1: Set Env

```bash
export PROJECT_ID=ngx-starter-kit
export COMPUTE_REGION=us-west2
export COMPUTE_ZONE=us-west2-a
export MACHINE_TYPE=g1-small
export DISK_SIZE=10GB
export NUM_NODES=3
export NETWORK_NAME=ngx-network
export SUBNET_NAME=ngx-subnet
export SUBNET_RANGE=10.0.0.0/20
export SUBNET_PODS_NAME=ngx-subnet-pods
export SUBNET_PODS_RANGE=10.11.0.0/16
export SUBNET_SERVICES_NAME=ngx-subnet-services
export SUBNET_SERVICES_RANGE=10.12.0.0/18
export CLUSTER_NAME=ngx-cluster
export CLUSTER_VERSION=1.13.6-gke.0

gcloud config set project $PROJECT_ID
gcloud config set compute/zone $COMPUTE_ZONE
```

### Step 2: Create VPC network

```bash
gcloud compute networks create ${NETWORK_NAME} \
  --project ${PROJECT_ID} \
  --subnet-mode custom 
```

### Step 3: Create a subnet for GKE cluster

```bash
gcloud compute networks subnets create ${SUBNET_NAME} \
  --project ${PROJECT_ID}  \
  --network ${NETWORK_NAME}  \
  --region ${COMPUTE_REGION}    \
  --range ${SUBNET_RANGE}    \
  --secondary-range ${SUBNET_PODS_NAME}=${SUBNET_PODS_RANGE},${SUBNET_SERVICES_NAME}=${SUBNET_SERVICES_RANGE}

# Verify
gcloud compute networks subnets list --network ${NETWORK_NAME}
gcloud compute networks subnets describe ${SUBNET_NAME}
```

### Step 4: Create GKE cluster 

```bash
gcloud container clusters create ${CLUSTER_NAME} \
  --cluster-version latest \
  --machine-type ${MACHINE_TYPE} \
  --disk-size ${DISK_SIZE} \
  --num-nodes ${NUM_NODES \
  --zone ${COMPUTE_ZONE} \
  --network ${NETWORK_NAME} \
  --subnetwork ${SUBNET_NAME} \
  --cluster-secondary-range-name ${SUBNET_PODS_NAME} \
  --services-secondary-range-name ${SUBNET_SERVICES_NAME} \
  --master-ipv4-cidr 172.16.0.0/28 \
  --enable-ip-alias \
  --enable-private-nodes \
  --enable-autoupgrade \
  --enable-autorepair \
  --enable-autoscaling --min-nodes 1 --max-nodes 5 \
  --no-enable-master-authorized-networks \
  --no-enable-basic-auth \
  --no-issue-client-certificate \
  --scopes bigtable,sql-admin,gke-default \
  --preemptible
  
# Verify
gcloud container clusters describe ${CLUSTER_NAME}
```

> Optional Flags

```
--enable-master-authorized-networks \
--master-authorized-networks [cloudshell-ip-address]
```


> To enable to dashboard:

```bash
gcloud container clusters update ${CLUSTER_NAME} \
--update-addons=KubernetesDashboard=ENABLED
```

### Step 5: Setup Kubectl CLI

> Configure kubectl command line access by running the following command:

```bash
gcloud container clusters get-credentials ${CLUSTER_NAME} \
--project=${PROJECT_ID} \
--zone=${COMPUTE_ZONE}
```

> To switch the current context to my-cluster
```bash
gcloud container clusters get-credentials my-cluster
```

> required?
```
kubectl create clusterrolebinding $(whoami)-cluster-admin-binding \
--clusterrole=cluster-admin \
--user=$(gcloud config get-value account)
```

> Verify if kubectl working
```bash
kubectl cluster-info
kubectl get nodes --output wide
```

### Step 6: Install And Configure Helm And Tiller

```bash
brew install kubernetes-helm
 kubectl create serviceaccount -n kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
helm init --service-account tiller
# next step required?
kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'
helm init --upgrade --service-account tiller 

# verify that helm is installed in the cluster
kubectl --namespace kube-system get pods | grep tiller
kubectl get deploy,svc tiller-deploy -n kube-system


helm --tls --tls-verify --tiller-namespace kube-system install stable/nginx-ingress
```

### Cleaning up
```bash
gcloud container clusters delete -q ${CLUSTER_NAME}
gcloud compute networks subnets delete ${SUBNET_NAME}
gcloud compute networks delete ${NETWORK_NAME}
```


### Tips
```bash
gcloud compute machine-types list | grep us-west2
```

### Ref

1. https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl
2. https://www.doxsey.net/blog/kubernetes--the-surprisingly-affordable-platform-for-personal-projects
