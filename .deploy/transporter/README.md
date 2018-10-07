Transporter
===========

This is a docker image, which includes a `Transporter` application with a predefined, parameterized pipeline definition.

The predefined pipeline migrates the current state of a PostgreSQL database into Elasticsearch, and then continues with syncing the changes too.

    +----------+     +-------------+     +---------------+
    | postgres |---->| transporter |---->| elasticsearch |
    +----------+     +-------------+     +---------------+


### Build
```bash
# build postgres-to-es transporter docker image
cd .deploy/transporter
docker build --tag=xmlking/postgres-to-es-transporter:latest .

# Tag
docker tag xmlking/postgres-to-es-transporter:latest xmlking/postgres-to-es-transporter:0.5.2
# Push
docker push xmlking/postgres-to-es-transporter:0.5.2
docker push xmlking/postgres-to-es-transporter:latest
```

### Run

The configuration parameters for run:

- `DB_NAME`: The name of the database to transport from PostgreSQL to ES.
  It is also the name of the index will be created on ES. Default: `test`.
- `POSTGRES_URI`: The full URI of the PostgreSQL server, including credentials, if there is any.
  Use one of the following formats: `postgres://<user>:password@host:port` or `postgres://host:port`.
  Default: `postgres://localhost:5432`.
- `ELASTICSEARCH_URI`: The full URI of the Elasticsearch server, including credentials if there is any.
  Use one of the following formats: `http://<user>:password@host:port` or `http://host:port`.
  Default: `http://localhost:9200`.


```bash
    docker run -it --rm xmlking/postgres-to-es-transporter:latest
```
 
### Docker Compose
```bash
docker-compose up postgres
docker-compose up elasticsearch
docker-compose up kibana
docker-compose up transporter
```

### Ref
* https://github.com/bitnami/bitnami-docker-mongodb
* https://github.com/debezium/docker-images/blob/master/examples/mongodb/0.9/init-inventory.sh
