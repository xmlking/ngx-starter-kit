API Testing
===========

### Database
```bash
psql -h <host> -p <port> -u <database>
psql -h <host> -p <port> -U <username> -W <password> <database>

```

### REST API 
```bash
# create 
curl -v -X POST \
  http://localhost:3000/api/account \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "account123",
    "description": "account description",
    "email": "sumo@demo.com"
  }' \
| jq .

# get all
curl -v -X GET \
  http://localhost:3000/api/account \
| jq .

# get one 
curl -v -X GET \
  http://localhost:3000/api/account/5b3e4e97e2891c9fb3692d15 \
| jq .


# patch
curl -v -X PATCH \
  http://localhost:3000/api/account/5b3e4e97e2891c9fb3692d15 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "wwww"
  }' \
| jq .

# verify if it is patched
curl -v -X GET \
  http://localhost:3000/api/account/5b3e4e97e2891c9fb3692d15 \
| jq .

# replace
curl -v -X PUT \
  http://localhost:3000/api/account/5b3e4e97e2891c9fb3692d15 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "account555",
    "description": "description",
  }' \
| jq .

# verify if it is replaced
curl -v -X GET \
  http://localhost:3000/api/account/5b3e4e97e2891c9fb3692d15 \
| jq .

# delete
curl -v -X DELETE \
  http://localhost:3000/api/account/5b3e4e97e2891c9fb3692d15 \
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

### User
```bash
curl -v -X POST \
  http://localhost:3000/api/user \
  -H 'Content-Type: application/json' \
  -d '{
        "firstName": "dsfds",
        "lastName": "sdfsf",
        "email": "sdfsdfddw@sdfsd.com",
        "accounts": {"ddd": "2342424",
          "ttt" : { "ddd" : "sadad" }
        }
      }' \
| jq .
```


### token
```bash
USERNAME=sumo
PASSWORD=demo
OIDC_BASE_URL=https://keycloak-is360.7e14.starter-us-west-2.openshiftapps.com/auth/realms/is360
CLIENT_ID=cockpit

# Get tokens
response=$(curl -X POST $OIDC_BASE_URL/protocol/openid-connect/token \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d username=$USERNAME \
 -d password=$PASSWORD \
 -d client_id=$CLIENT_ID \
 -d 'grant_type=password' \
 -d 'scope=openid')

access_token=$(echo $response | jq  -r '.access_token')

echo $access_token

curl -X GET \
  http://localhost:3000/api \
  -H "Authorization: Bearer $access_token" \
| jq .
```
