# Cloud SQL

Create Google Cloud Postgres SQL

### Step 1: Set Env

```bash
export PROJECT_ID=ngx-starter-kit
export COMPUTE_REGION=us-west2
export COMPUTE_ZONE=us-west2-a
export MACHINE_TYPE=db-f1-micro
export DISK_SIZE=10GB
export NETWORK_NAME=ngx-network
export SUBNET_NAME=ngx-subnet
export DATABASE_NAME=ngxdb
export DATABASE_VERSION=POSTGRES_11_1

gcloud config set project $PROJECT_ID
gcloud config set compute/zone $COMPUTE_ZONE
```

### Step 2: Create Database

```bash
gcloud beta sql instances create ${DATABASE_NAME} \
  --tier ${MACHINE_TYPE} \
  --region ${COMPUTE_REGION} \
  --storage-type HDD \
  --storage-size ${DISK_SIZE} \
  --network ${NETWORK_NAME}  \
  --database-version ${DATABASE_VERSION}
```

### Step 3: Set Password

```bash
gcloud sql users set-password postgres no-host --instance=${DATABASE_NAME} \
       --password=${DATABASE_PASSWORD}
```

### Step 4: Connect

```bash
 gcloud sql connect ngxdb --user=postgres --quiet
```
