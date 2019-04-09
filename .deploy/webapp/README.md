# NxgWeb

Build and Deploy NgxWeb webapp.

### Build

```bash
# build, optionally use `--no-cache`
export VERSION=2.0.0-SNAPSHOT
export DOCKER_BUILDKIT=1
docker build \
--build-arg VERSION=$VERSION \
--build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
-t xmlking/ngxweb -f .deploy/webapp/Dockerfile .

# if you need more memory for build
export NODE_OPTIONS=--max-old-space-size=4096
export VERSION=2.0.0-SNAPSHOT
export DOCKER_BUILDKIT=1
docker build \
--build-arg VERSION=$VERSION \
--build-arg NODE_OPTIONS=$NODE_OPTIONS \
--build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
-t xmlking/ngxweb -f .deploy/webapp/Dockerfile .

# tag
docker tag  xmlking/ngxweb  xmlking/ngxweb:$VERSION

# push
docker push xmlking/ngxweb:$VERSION
docker push xmlking/ngxweb:latest

# check
docker inspect  xmlking/ngxweb:$VERSION
docker image prune -f
```

### Run

```bash
# start ngxweb pod in interative mode.  Use 'Ctrl+C' to terminate pod and delete temp service.
kubectl run -it --rm ngxweb  --port 8080 --hostport=8080 --expose=true --image=xmlking/ngxweb:$VERSION --restart=Never
kubectl port-forward ngxweb 8080:8080
kubectl exec -it ngxweb -- /bin/sh
```

### Test

> The app will be available at http://localhost:8080

```bash
open  http://localhost:8080
```

### Deploy

Follow instructions from [helm](./helm) or [OpenShift](./openshift)

### Reference

- If you get 137 error
  - https://samwize.com/2016/05/19/docker-error-returned-a-non-zero-code-137/
  - https://docs.docker.com/docker-for-mac/#advanced
- use [nginxconfig](https://nginxconfig.io/) to generate `nginx.conf`
