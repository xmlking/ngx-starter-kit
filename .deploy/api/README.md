# API

Build and Deploy NgxApi

### Build

```bash
# build, optionally use `--no-cache`
export VERSION=2.0.0-SNAPSHOT
export DOCKER_BUILDKIT=1
docker build \
--build-arg VERSION=$VERSION \
--build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
-t xmlking/ngxapi -f .deploy/api/Dockerfile .

# tag
docker tag  xmlking/ngxapi  xmlking/ngxapi:$VERSION

# push
docker push xmlking/ngxapi:$VERSION
docker push xmlking/ngxapi:latest

# check
docker inspect  xmlking/ngxapi:$VERSION
docker image prune -f
```

### Run

```bash
# start ngxapi pod in interative mode.  Use 'Ctrl+C' to terminate pod and delete temp service.
kubectl run -it --rm ngxapi  --port 3000 --hostport=3000 --expose=true --image=xmlking/ngxapi:$VERSION --restart=Never --env TYPEORM_HOST=ngxdb-postgresql
kubectl port-forward ngxapi 3000:3000
#kubectl exec -it ngxapi /bin/busybox sh
kubectl exec -it ngxapi -- /bin/sh

# if you are using `docker-compose` instead of `Kubernetes`
docker-compose up api
# docker run -it --env TYPEORM_HOST=postgres -p 3000:3000  xmlking/ngxapi
# to see ditectory content: (as we are using scratch container, we dont have any unix commands to interact with)
docker-compose exec api node
docker-compose exec api node -e 'console.log(__dirname);'
docker-compose exec api node -e 'const fs = require('fs'); fs.readdirSync('.').forEach(file => { console.log(file);})
```

### Test

> The app will be available at http://localhost:3000

```bash
# test
curl -v -X GET \
  http://localhost:3000/ \
| jq .
```

### Deploy

Follow instructions from [manual](./manual) or [helm](./helm) or [OpenShift](./openshift)
