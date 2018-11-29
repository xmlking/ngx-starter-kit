# API Testing

### Database

```bash
psql -h <host> -p <port> -u <database>
psql -h <host> -p <port> -U <username> -W <password> <database>

```

### REST API

> Note: you need to pass [access_token](#token)

```bash
# create
curl -v -X POST \
  http://localhost:3000/api/notifications \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "account123",
    "description": "account description",
    "email": "sumo@demo.com"
  }' \
| jq .

# get all
curl -v -X GET \
  http://localhost:3000/api/notifications \
| jq .

# get one
curl -v -X GET \
  http://localhost:3000/api/notifications/1 \
| jq .


# patch
curl -v -X PATCH \
  http://localhost:3000/api/notifications/1 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "wwww"
  }' \
| jq .

# verify if it is patched
curl -v -X GET \
  http://localhost:3000/api/notifications/1 \
| jq .

# replace
curl -v -X PUT \
  http://localhost:3000/api/notifications/1 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "account555",
    "description": "description",
  }' \
| jq .

# verify if it is replaced
curl -v -X GET \
  http://localhost:3000/api/notifications/1 \
| jq .

# delete
curl -v -X DELETE \
  http://localhost:3000/api/notifications/1 \
| jq .

```

### Email

```bash
# send email
curl -v -X POST \
  http://localhost:3000/api/user/email \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "sumodmeo",
    "name" : "Gabber",
    "comments" : "no comments"
  }' \
| jq .
```

### Token

```bash
OIDC_ISSUER_URL=https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360
OIDC_CLIENT_ID=is360ui

USERNAME=sumo3
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
 -d client_id=OIDC_CLIENT_ID \
 -d 'grant_type=password' \
 -d 'scope=openid')

access_token=$(echo $response | jq  -r '.access_token')
refresh_token=$(echo $response | jq  -r '.refresh_token')

echo $access_token
echo $refresh_token

curl -X GET \
  http://localhost:3000 \
    -H "Authorization: Bearer $access_token"

curl -X GET \
  http://localhost:3000/api/notifications \
    -H "accept: application/json" \
    -H "Authorization: Bearer $access_token" \
  | jq .

# Get User Profile
curl -X POST $OIDC_ISSUER_URL/protocol/openid-connect/userinfo \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d "access_token=$access_token" | jq .

# Logout
curl -X POST  $OIDC_ISSUER_URL/protocol/openid-connect/logout \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d client_id=$OIDC_CLIENT_ID \
 -d "refresh_token=$refresh_token" | jq .
```
