const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;

const client = new Client({ config: config.fromKubeconfig(), version: '1.10' });

(async () => {

  try {
    const namespaces = await client.api.v1.namespaces.get();
    namespaces.body.items.forEach( (namespace) => {
      console.log(namespace.metadata.name);
    });
  } catch (error) {
    console.log(error);
  }

})();
