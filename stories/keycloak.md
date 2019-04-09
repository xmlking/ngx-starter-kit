KeyCloak
========

Pre-configured KeyCloak OpenID Connect server for testing.

* **Realm**: ngx
* **Client ID**: ngxweb, ngxapi
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
    clientId: 'ngxweb',
    issuer: 'http://localhost:8080/auth/realms/ngx',
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

http://localhost:8080/
> admin: admin123

### Setup

> Do import config. (first time only...)
1. login to keycloak admin console
2. create new realm `ngx`
3. import pre-set [config](../.deploy/keycloak/realm-manual-import.json)


### Test

```bash
# Environment variable. change as per your server setup
OIDC_ISSUER_URL=http://localhost:8080/auth/realms/ngx
OIDC_CLIENT=ngxweb

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
  "jti": "bcd8138f-cba9-49e4-a4fa-86f688ba2730",
  "exp": 1547688875,
  "nbf": 0,
  "iat": 1547688575,
  "iss": "http://localhost:8080/auth/realms/ngx",
  "aud": "ngxapi",
  "sub": "12c4ef1f-f4bd-451c-a435-ffc5daa1412c",
  "typ": "Bearer",
  "azp": "ngxweb",
  "auth_time": 0,
  "session_state": "92cc97ad-3be7-48e0-9ee9-4329b2a66f07",
  "acr": "1",
  "allowed-origins": [
    "*"
  ],
  "realm_access": {
    "roles": [
      "ROLE_USER"
    ]
  },
  "scope": "openid email ngxapi_audience profile",
  "email_verified": true,
  "name": "sumo1 ngx",
  "preferred_username": "sumo1",
  "given_name": "sumo1",
  "family_name": "ngx",
  "email": "sumo1@ngx.com"
}
```
