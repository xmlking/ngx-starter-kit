# Cloud DNS

## Prerequisites

1. A domain name through a domain name registrar. 

## Set Env
```bash
export PROJECT_ID=ngx-starter-kit
export MANAGED_ZONE_NAME=ngx-zone-name
export STATIC_ADDRESS_NAME=kashmora-static-ip
```

### Step 1: Reserved (static) external IP address.
```bash
gcloud compute addresses create ${STATIC_ADDRESS_NAME} --global --project ${PROJECT_ID}
gcloud compute addresses describe ${STATIC_ADDRESS_NAME} --global
```

### Step 2: Create a managed zone
```bash
gcloud dns managed-zones create ${MANAGED_ZONE_NAME} \
    --project ${PROJECT_ID} \
    --dns-name "kashmora.com" \
    --description "A zone" \
    --visibility public
```

### Step 3: Import the record set (Optional)

> export DNS configuration from `domains.google.com`, and import into `Cloud DNS` 

```bash
cd .deploy/gcloud
gcloud dns record-sets import -z=${MANAGED_ZONE_NAME} \
    --project ${PROJECT_ID} \
    --delete-all-existing \
    --zone-file-format ./kashmora.com.txt
```

### Step 3: Add DNS records

> Configure the DNS records for your domain to point to the IP address of the load balancer.
> If you use Cloud DNS, you can refer to the [Managing Records](https://cloud.google.com/dns/records/) guide for details.

```bash
# Start a transaction by running the start command
gcloud dns record-sets transaction start -z=${MANAGED_ZONE_NAME} --project ${PROJECT_ID}

# Append A record addition to the transaction.
gcloud dns record-sets transaction add -z=${MANAGED_ZONE_NAME} \
    --project ${PROJECT_ID} \
   --name="api.kashmora.com." \
   --type=A \
   --ttl=300 "34.95.105.220"

gcloud dns record-sets transaction add -z=${MANAGED_ZONE_NAME} \
    --project ${PROJECT_ID} \
    --name="keycloak.kashmora.com." \
    --type=A \
    --ttl=300 "34.95.105.220"

gcloud dns record-sets transaction add -z=${MANAGED_ZONE_NAME} \
    --project ${PROJECT_ID} \
    --name="www.kashmora.com." \
    --type=CNAME \
    --ttl=300 "kashmora.com."

# commit the transaction
gcloud dns record-sets transaction execute -z=${MANAGED_ZONE_NAME} --project ${PROJECT_ID}

# Verify
gcloud dns record-sets list -z=${MANAGED_ZONE_NAME} --project ${PROJECT_ID}
```

### Step 4: Update your domain name servers

Finally, you must update your domain's name servers to use `Cloud DNS` to publish your newly-created records to the Internet
Even if your domain name is registered with Google Domains, you still need to [update the name servers](https://support.google.com/domains/answer/3290309) — although they look very similar


### Step 5: Verify DNS propagation
```bash
gcloud dns managed-zones describe ${MANAGED_ZONE_NAME}
 
dig kashmora.com @ns-cloud-a1.googledomains.com
dig www.kashmora.com @ns-cloud-a1.googledomains.com
dig keycloak.kashmora.com @ns-cloud-a1.googledomains.com

dig +short NS kashmora.com
dig kashmora.com
```
 
### Step 6: Create Cloud NAT Gateway

> for `ngxapi` app to connect to internet(Weather API), we need to open outgoing internet access from Private GKE VPC.
> create `ngx-internet-gateway` NAT gateway from `Google Cloud Console` --> `Network Services` --> `Cloud NAT`

### Cleaning up
```bash
gcloud compute addresses delete ${STATIC_ADDRESS_NAME} --global --project ${PROJECT_ID}
gcloud dns managed-zones delete ${MANAGED_ZONE_NAME} --project ${PROJECT_ID}
```

## Reference
1. [Setup a Kubernetes Cluster on GCP with Cloud NAT](https://medium.com/bluekiri/setup-a-kubernetes-cluster-on-gcp-with-cloud-nat-efe6aa5780c6)


