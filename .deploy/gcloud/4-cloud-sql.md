# Cloud SQL

Create Google Cloud Postgres SQL

## Set Env

```bash
export PROJECT_ID=ngx-starter-kit
export COMPUTE_REGION=us-west2
export COMPUTE_ZONE=us-west2-a
export MACHINE_TYPE=db-f1-micro
export DISK_SIZE=10GB
export NETWORK_NAME=ngx-network
export SUBNET_NAME=ngx-subnet
export INSTANCE_NAME=ngxdb
export DATABASE_NAME=postgres
export DATABASE_VERSION=POSTGRES_11_1

gcloud config set project $PROJECT_ID
gcloud config set compute/zone $COMPUTE_ZONE
```

### Step 1: Create Postgres Instance

> this will also create a default database:  `postgres` and default user: `postgres`

```bash
gcloud sql instances create ${INSTANCE_NAME} \
  --project ${PROJECT_ID}
  --tier ${MACHINE_TYPE} \
  --region ${COMPUTE_REGION} \
  --storage-type HDD \
  --storage-size ${DISK_SIZE} \
  --network ${NETWORK_NAME}  \
  --database-version ${DATABASE_VERSION}
  
# Verify
gcloud sql instances describe ${INSTANCE_NAME}
```

### Step 2: Set Password

> Set the password for the default user to `postgres321`

```bash
gcloud sql users set-password postgres \
    --instance=${INSTANCE_NAME} --prompt-for-password
```

### Step 3: Create keycloak DB
keycloak123
```bash
# Listing your databases
gcloud sql databases list --instance=${INSTANCE_NAME}
gcloud sql users list --instance=${INSTANCE_NAME}

gcloud sql databases create keycloak --instance=${INSTANCE_NAME} --charset=UTF8 --collation=en_US.UTF8
```

### Step 4: Connect

> connect and create user/password for `keycloak` database (First Time Only)

```bash
 gcloud sql connect ngxdb --user=postgres --quiet
```
```sql
CREATE ROLE keycloak WITH PASSWORD 'keycloak123' NOSUPERUSER LOGIN;
GRANT ALL PRIVILEGES ON DATABASE keycloak TO keycloak;
```

### Cleaning up
```bash
# Warning: All data on an instance, including backups, is permanently lost when that instance is deleted.
gcloud sql databases delete ${DATABASE_NAME} --instance=${INSTANCE_NAME} --project ${PROJECT_ID}
gcloud sql instances delete ${INSTANCE_NAME} --project ${PROJECT_ID}
```
