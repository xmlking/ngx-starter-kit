### KeyCloak on OpenShift 4.1

> Deploy KeyCloak to OpenShift

All files here are generated with Helm:

```bash
cd .deploy/keycloak/helm

helm fetch codecentric/keycloak
helm template ./keycloak-4.14.1.tgz --name keycloak --namespace default --values values-os.yaml --output-dir generated
```

After generation, remove `securityContext` block from `statefulset.yaml`
