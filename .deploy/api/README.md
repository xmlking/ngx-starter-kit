API
===
Build and Deploy NgxApi

### Build
```bash
# build
VERSION=1.5.0-SNAPSHOT
docker build \
--no-cache \
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
docker-compose up api
kubectl run -it --rm ngxapi  --port 3000 --hostport=3000 --expose=true --image=xmlking/ngxapi --restart=Never --env TYPEORM_HOST=ngxdb-postgresql
kubectl port-forward ngxapi 3000:3000

# docker run -it --env TYPEORM_HOST=postgres -p 3000:3000  xmlking/ngxapi
# to see ditectory content:
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

### Test API
```bash
curl -X  GET "https://ngxapi.traefik.k8s/" -k -H  "accept: application/json"
curl -X  GET "https://ngxapi.traefik.k8s/echo?sumo=demo" -k -H  "accept: application/json"
```
