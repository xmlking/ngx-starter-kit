var source = postgres({
  "uri": "${POSTGRES_URI}/${DB_NAME}",
  // "timeout": "30s",
  // "tail": false,
  "tail": true,
  "ssl": false,
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  // "fsync": false,
  // "bulk": false,
  "bulk": true
  // "collection_filters": "{}",
  // "read_preference": "Primary"
});

var sink = elasticsearch({
  "uri": "${ELASTICSEARCH_URI}/${DB_NAME}"
  // "timeout": "10s", // defaults to 30s
  // "aws_access_key": "ABCDEF", // used for signing requests to AWS Elasticsearch service
  // "aws_access_secret": "ABCDEF" // used for signing requests to AWS Elasticsearch service
  // "parent_id": "elastic_parent" // defaults to "elastic_parent" parent identifier for Elasticsearch
});

t.Source("source", source, "/.*/").Save("sink", sink, "/.*/");
