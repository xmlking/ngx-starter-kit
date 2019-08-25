# Helm

> One time Helm setup and configuration

### Install Helm CLI

```bash
brew install kubernetes-helm
```

### Install Tiller

> first time only: setup tiller in default `kube-system` namespace or your private namespace

```bash
# Install tiller into default `kube-system` namespace
helm init
# Install tiller into your private namespace (below showing `kube-system` namespace, but it could be any of your namespaces)
helm init --tiller-namespace=kube-system --service-account=default --tiller-image=gcr.io/kubernetes-helm/tiller:v2.13.0

# Upgrade tiller to latest version
export TILLER_TAG=v2.13.0
helm init --upgrade --tiller-namespace=kube-system --service-account=default --tiller-image=gcr.io/kubernetes-helm/tiller:$TILLER_TAG

# Verify the installation
helm version --tiller-namespace=kube-system
helm ls -a --tiller-namespace=kube-system --debug

# Uninstall tiller from your namespace
helm reset --tiller-namespace=kube-system

# if needed
helm init --client-only --tiller-namespace=kube-system
helm repo update --tiller-namespace=kube-system
```

### Install Charts

```bash
# example chart instalation
# --dry-run --debug flags help you to see before you really deploy
helm install --name=nginx-ingress --namespace=default --tiller-namespace=kube-system  ./charts-master/incubator/nginx-ingress
helm install --name=traefik       --namespace=default --tiller-namespace=kube-system  -f  traefik-values.yaml stable/traefik
```

### Using Helm without Tiller

1. Fetching the chart templates
2. Rendering the template with configurable values
3. Applying the result to the cluster

```bash
# Fetching the chart templates
helm fetch  \
  --untar \
  --untardir charts/stable \
stable/traefik

# Rendering the template with configurable values
cp charts/stable/traefik/values.yaml \
  values/traefik-values.yaml

# copied traefik.yaml can now be adjusted as needed

# To render the manifests from the template source with the potentially edited values file:
mkdir -p manual/stable

helm template \
  --values values-prod.yaml  \
  --name traefik \
  --tiller-namespace kube-system \
  --namespace default \
  --output-dir manual/stable  \
    charts/stable/traefik

# Applying the result to the cluster
kubectl apply --recursive --filename manual/stable/traefik
```

### Managing Helm Chart Secrets with `helm-secrets`

#### Install dependencies for `helm-secrets` plugin

```bash
brew install gnu-getopt
# brew install gnupg
brew install gpg1
ln -s /usr/local/bin/gpg1 /usr/local/bin/gpg
```

#### Create your `GPG` key:

```bash
gpg --gen-key
```

#### Create your `GPG` key with `YubiKey`:

> only works when using latest gpg2

```bash
gpg --expert --full-gen-key
# note key ID, in this case is 1234ABC
"gpg: key 1234ABC marked as ultimately trusted"
```

#### To export your public key:

```bash
gpg --export --armor <my_eamil> > mypubkey.asc
```

#### To backup your private key:

```bash
gpg --export -secret-key --armor <1234ABC>
```

#### To import another person’s public key:

```
gpg --import theirpubkey.asc
```

#### To list the public keys in your keyring:

```bash
gpg --list-keys
```

#### To list private keys in your keyring:

```bash
gpg --list-secret-keys
```

#### To find out the fingerprint of your key

```bash
gpg --fingerprint
```

Install `helm-secrets` plugin

```bash
helm plugin install https://github.com/futuresimple/helm-secrets

# test
helm secrets help
```

> With the helm wrapper you can easily run `helm secrets install/upgrade/rollback` with secrets files included as `-f` option from you values dir tree.

Follow infractions [Kubernetes Deployments with Helm - Secrets](https://developer.epages.com/blog/tech-stories/kubernetes-deployments-with-helm-secrets/)

> secrets file should be named with `secrets[.*].yaml` pattern

Additional Commands

```bash
helm secrets enc secrets.yaml
helm secrets view secrets.yaml
helm secrets edit secrets.yaml
helm secrets dec secrets.yaml
helm secrets clean <your_chart_directory>
```

### Reference

1. [What You Yaml is What You Get](https://blog.giantswarm.io/what-you-yaml-is-what-you-get/)
2. [helm-nomagic](https://github.com/giantswarm/helm-nomagic)
3. [Helm from the trenches](https://hackernoon.com/helm-from-the-trenches-17f87859ee47)
4. [How To Use GPG on the Command Line](http://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/)
5. [Using Your YubiKey with OpenPGP](https://support.yubico.com/support/solutions/articles/15000006420-using-your-yubikey-with-openpgp)
6. [Kubernetes Deployments with Helm - Secrets](https://developer.epages.com/blog/tech-stories/kubernetes-deployments-with-helm-secrets/)
