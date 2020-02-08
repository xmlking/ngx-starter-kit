Analytics
=========


This is a docker-compose project which helps to analyze and monitor the business data of an application that is stored in MongoDB.


The predefined pipeline migrates the current state of a MongoDB database into Elasticsearch, and then continues with syncing the changes too.

    +---------+     +-------------+     +---------------+     +--------+     +---------+
    | mongodb |---->| transporter |---->| elasticsearch |---->| kibana |---->| browser |
    +---------+     +-------------+     +---------------+     +--------+     +---------+

In thi case the live `mongodb` database is synchronized to the `elasticsearch` server by the `transporter` utility.
The `elasticsearch` is indexing the incoming documents, stores and runs queries, and provides search results in JSON format through its REST API,
that is consumed by `kibana`, which helps to interactively analyze and visualize the result of queries.
The user can see the final results on its web `browser`.


## Configuration

Before run the setup, you have to define the following environment variables:

- `MONGO_BACKUP_DIR`: THe path to the folder you stored your mongodb backup.
- `DB_NAME`: The name of the database you want to analyze. This will the also the name of the index on elasticsearch,
   into which the `transporter` will upload the documents.
- `MONGODB_URI`: The full URI of the mongodb server. Either the local one or the on-line one, depending on which mode you want to use.
- `ELASTICSEARCH_URI`: The full URI of the elasticserach server.

You should create a dedicated env file for each setup, you are willing to analyze.

This is an example of an environment file, that you can use for off-line mode:

    export MONGO_BACKUP_DIR="/home/sumanth/cockpit/cockpit-db/2018-08-26"
    export DB_NAME="cockpit"
    export MONGODB_URI="mongodb://root:cockpit321@mongodb:27017" 
    export ELASTICSEARCH_URI="http://elasticsearch:9200"

## Run
```bash
docker-compose up mongodb
docker-compose up elasticsearch
docker-compose up kibana
docker-compose up transporter
```
