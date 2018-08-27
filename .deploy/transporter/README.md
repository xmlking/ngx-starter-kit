Transporter
===========

This is a docker image, which includes a `Transporter` application with a predefined, parameterized pipeline definition.

The predefined pipeline migrates the current state of a MongoDB database into Elasticsearch, and then continues with syncing the changes too.

    +---------+     +-------------+     +---------------+
    | mongodb |---->| transporter |---->| elasticsearch |
    +---------+     +-------------+     +---------------+


### Build
```bash
# build mongo-to-es transporter docker image
cd .deploy/transporter
docker build --tag=xmlking/mongo-to-es-transporter:latest .

# Tag
docker tag xmlking/mongo-to-es-transporter:latest xmlking/mongo-to-es-transporter:0.5.2
# Push
docker push xmlking/mongo-to-es-transporter:0.5.2
docker push xmlking/mongo-to-es-transporter:latest
```

### Run

The configuration parameters for run:

- `DB_NAME`: The name of the database to transport from MongoDD to ES.
  It is also the name of the index will be created on ES. Default: `test`.
- `MONGODB_URI`: The full URI of the MongoDB server, including credentials, if there is any.
  Use one of the following formats: `mongodb://<user>:password@host:port` or `mongodb://host:port`.
  Default: `mongodb://localhost:27017`.
- `ELASTICSEARCH_URI`: The full URI of the Elasticsearch server, including credentials if there is any.
  Use one of the following formats: `http://<user>:password@host:port` or `http://host:port`.
  Default: `http://localhost:9200`.


```bash
    docker run -it --rm xmlking/mongo-to-es-transporter:latest
```
 
### Docker Compose
```bash
docker-compose up mongodb
docker-compose up elasticsearch
docker-compose up kibana
docker-compose up transporter
```

### Ref
* https://github.com/bitnami/bitnami-docker-mongodb
* https://github.com/debezium/docker-images/blob/master/examples/mongodb/0.9/init-inventory.sh
