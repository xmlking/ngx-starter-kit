KeyCloak
========

Pre-configured KeyCloak OpenID Connect server for testing.

* **Realm**: ngx
* **Client ID**: cockpit
* **Accounts**:
  * *ROLE_ADMIN*
    1. ngxadmin : ngxadmin
  * *ROLE_USER*
    1. sumo: demo
    2. sumo1: demo
    3. sumo2: demo
    4. sumo3: demo


### Configure SPA Client

> set issuer, clientId in apps/webapp/src/environments/environment.ts 

```json
  auth: {
    clientId: 'cockpit',
    issuer: 'http://localhost:9080/auth/realms/ngx'
  }
```

### Start

```bash
# Start keycloak
docker-compose up keycloak

# Stop keycloak
docker-compose stop keycloak
# this will remove volume created by docker.
docker-compose down

# SSH into keycloak container
docker-compose exec keycloak sh
```


### Use

http://localhost:m080/
> admin: admin

### Setup

> Do import config. (first time only...)
1. login to keycloak admin console
2. create new realm `ngx`
3. import pre-set [config](../.deploy/keycloak/realm-manual-import.json)


### Test

```bash
# Environment variable. change as per your server setup
OIDC_ISSUER_URL=http://localhost:8080/auth/realms/ngx
OIDC_CLIENT=cockpit

USERNAME=sumo
PASSWORD=demo

# get URLs
curl $OIDC_ISSUER_URL/.well-known/openid-configuration | jq .
#get certs
curl $OIDC_ISSUER_URL/protocol/openid-connect/certs | jq .

# Get tokens
response=$(curl -X POST $OIDC_ISSUER_URL/protocol/openid-connect/token \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d username=$USERNAME \
 -d password=$PASSWORD \
 -d client_id=$OIDC_CLIENT \
 -d 'grant_type=password' \
 -d 'scope=openid')

access_token=$(echo $response | jq  -r '.access_token')
id_token=$(echo $response | jq  -r '.id_token')
refresh_token=$(echo $response | jq  -r '.refresh_token')

# Print tokens
echo $access_token
echo $id_token
echo $refresh_token

# Get User Profile
curl -X POST $OIDC_ISSUER_URL/protocol/openid-connect/userinfo \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d "access_token=$access_token" | jq .
 
# Logout
curl -X POST  $OIDC_ISSUER_URL/protocol/openid-connect/logout \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d client_id=$OIDC_CLIENT \
 -d "refresh_token=$refresh_token" | jq .
 ```

#### Example Access Token
```json
{
  "jti": "726d3a1b-4d1c-44e0-b645-f6c8b38ed83f",
  "exp": 1529217929,
  "nbf": 0,
  "iat": 1529217629,
  "iss": "http://localhost:9080/auth/realms/kubernetes",
  "aud": "kube-tenant",
  "sub": "8602c118-9778-4eda-98a0-673382934688",
  "typ": "Bearer",
  "azp": "kube-tenant",
  "auth_time": 0,
  "session_state": "698b3e16-4f53-46b4-aa7f-ddc05c2f9ae8",
  "acr": "1",
  "allowed-origins": [
    "http://localhost:4200"
  ],
  "realm_access": {
    "roles": [
      "offline_access",
      "uma_authorization"
    ]
  },
  "resource_access": {
    "kube-tenant": {
      "roles": [
        "ROLE_USER"
      ]
    },
    "account": {
      "roles": [
        "manage-account",
        "manage-account-links",
        "view-profile"
      ]
    }
  },
  "scope": "openid profile email",
  "email_verified": false,
  "name": "sumo demo",
  "preferred_username": "sumo",
  "given_name": "sumo",
  "family_name": "demo",
  "email": "sumo@demo.com"
}
```
