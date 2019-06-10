# Cloud SDK


### Step 1: Install

Download latest [cloud-sdk](https://cloud.google.com/sdk/docs/quickstart-macos) and unpack into `/Developer/Applications/google-cloud-sdk`

```bash
cd /Developer/Applications/google-cloud-sdk
./install.sh
```

### Step 2: Configure gCloud CLI

```bash
# initialize the SDK
gcloud init

# Testing The CLI Setup
gcloud auth login
gcloud auth list
# List the sdk configuration
gcloud config list
gcloud info
# hook it up to GCR so you can push containers:
gcloud auth configure-docker

# if you dont have kubectl
gcloud components install kubectl

# To install or remove components at your current SDK, run:
gcloud components install COMPONENT_ID
gcloud components remove COMPONENT_ID


export PROJECT_ID=ngx-starter-kit
export COMPUTE_ZONE=us-west2-a

gcloud config set project $PROJECT_ID
gcloud config set compute/zone $COMPUTE_ZONE
```
