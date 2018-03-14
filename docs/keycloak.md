KeyCloak
========
KeyCloak setup and configuration 

### Start
```bash
docker-compose up keycloak
```
> http://localhost:8080/auth   [admin:admin] 

### Config
> After fresh Keycloak installation, Import [realm-export](./realm-export.json) or follow instructions below. 

1. Add `is360` realm. Then switch to `is360` realm.
2. Create client `is360ui` with `openid-connect` Protocol
    ```
    Implicit Flow Enabled: Enabled
    Valid Redirect URIs: http://localhost:4200/*
    Base URL: http://localhost:4200
    Web Origins: http://localhost:4200
    ```
3. Add Local User `Manage > Users > Add User`
    ```
    Username: sumo
    Email: sumo@demo.com
    First Name: sumo
    Last Name: demo
    ```
> Under `Conditional`, reset password to `demo`, go back to `Details`, remove `update password` from  `Required User Actions`, `Save`

### Test

```bash
# get URLs
curl http://localhost:8080/auth/realms/is360/.well-known/openid-configuration | jq .
#get certs
curl http://localhost:8080/auth/realms/is360/protocol/openid-connect/certs | jq .

# Get tokens
response=$(curl -X POST 'http://localhost:8080/auth/realms/is360/protocol/openid-connect/token' \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d "username=sumo" \
 -d 'password=demo' \
  -d 'client_id=is360ui' \
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
curl -X POST 'http://localhost:8080/auth/realms/is360/protocol/openid-connect/userinfo' \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d "access_token=$access_token" | jq .
 
# Logout
curl -X POST  'http://localhost:8080/auth/realms/is360/protocol/openid-connect/logout' \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d 'client_id=is360ui' \
 -d "refresh_token=$refresh_token" | jq .
 ```
