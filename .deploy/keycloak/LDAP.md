# KeyCloak LDAP

Post-Install KeyCloak Setup and LDAP Configuration

### LDAP Config

> in KeyCloak admin console , make sure you are in correct `Realm`

1. Add LDAP user federation provider
   ```
   Import Users: off
   Edit Mode: READ_ONLY
   Vendor: Active Directory
   Username LDAP attribute: sAMAccountName
   Connection URL: ldap://myad.mycom.com
   Users DN: CN=Users,DC=myad,DC=ds,DC=mycom,DC=com
   Authentication Type: simple
   Bind DN: cn=et_ose,cn=users,dc=myad,dc=ds,dc=mycom,dc=com
   Bind Credentia: xxx
   ```
2. Create new `given name` under `LDAP Mappers` (optional)
   ```
   Name: given name
   Mapper Type: user-attribute-ldap-mapper
   User Model Attribute: firstName
   LDAP Attribute: givenName
   Read Only: On
   ```
3. Create new `telephone number` under `LDAP Mappers` (optional)
   ```
   Name: telephone number
   Mapper Type: user-attribute-ldap-mapper
   User Model Attribute: telephoneNumber
   LDAP Attribute: telephoneNumber
   Read Only: On
   ```
4. Create new `roles` under `LDAP Mappers`

   > User Federation > Ldap > LDAP Mappers > Create LDAP mapper

   ```
   Name: roles
   Mapper Type: role-ldap-mapper
   LDAP Roles DN: cn=Users,dc=myad,dc=ds,dc=mycom,dc=com
   Role Name LDAP Attribute: cn
   Role Object Classes: group
   Membership LDAP Attribute: member
   Membership User LDAP Attribute: sAMAccountName
   LDAP Filter: (&(objectCategory=Group)(cn=IMP_GROUP_*))
   Member-Of LDAP Attribute: memberOf
   Client ID: ngxweb (optional)
   ```

5. Add new `telephone number` for `ngxweb` client Mappers (optional)

   > Clients > ngxweb > Mappers > telephone number

   ```
   Name: telephone number
   Mapper Type: User Attribute
   User Attribute: telephoneNumber
   Token Claim Name: telephone_number
   Claim JSON Type: String
   ```

6. Add `NGX_ADMIN To Admin` for `ngxweb` client Mappers (optional)

   > Clients > ngxweb > Mappers > my_group to admin

   ```
   Name:  NGX_ADMIN to admin
   Mapper Type: Role Name Mapper
   Role: NGX_ADMIN
   New Role Name: ROLE_ADMIN
   ```

7. Add `groups` for `ngxweb` client Mappers (optional)

   > k8s is configured to reed groups from ID_TOKEN/ACCESS_TOKEN, so create groups claim

   > Clients > ngxweb > Mappers > groups

   ```
   Name:  groups
   Mapper Type: User Realm Role
   # keep Realm Role prefix empty
   Realm Role prefix:
   Multivalued: On
   Token Claim Name: groups
   Claim JSON Type: String
   Add to ID token: On
   Add to access token: On
   Add to userinfo: Off
   ```

8. Enable `Remember Me` for `Ngx` realm.

   > Realm Settings > logins

   ```
   Remember Me : On
   ```

9. Turn off `Full Scope Allowed` (this step is not needed - buggy)

   > Under Clients > ngxweb > Scope

   Turn off `Full Scope Allowed` for `ngxweb` client and select few Realm Roles

### FAQ

1. how do i ask quetions for KeyCloak? is there a mailing list?

http://lists.jboss.org/pipermail/keycloak-user/

2. How to use script mapper?
   > How can I map the first role from the list of client roles to a field named "role" in the id token?

```js
function logic() {
  var f = realm.getClients();
  var currentClient = null;
  for (var i = 0; i < f.size(); i++) {
    // here replace rolemaptest with your client name.
    if (f.get(i).getClientId() === 'rolemaptest') {
      currentClient = f.get(i);
      break;
    }
  }
  if (currentClient === null) {
    return 'cant find current client';
  }
  // getClientRoleMappings returns a Set object which needs to be converted to an array. Otherwise it just returns a list of nulls, dunno why
  var userRolesInClient = user.getClientRoleMappings(currentClient).toArray();
  // var userRolesInClient = user.getRoleMappings().toArray();
  if (userRolesInClient.length === 0) {
    return '';
  }
  return userRolesInClient[0].getName();
}

logic();
```

3. How to make REST Call to KeyCloak?

```bash
curl -d "client_id=admin-cli" -d "username=admin" -d "password=admin" -d
"grant_type=password" "http://localhost:8080/auth/realms/master/protocol/openid-connect/token"

curl -H "Authorization: Bearer eyJh........MY3g"
"http://localhost:8080/auth/admin/realms/master/users"


curl -H "Authorization: Bearer eyJh........MY3g"
POST "https://localhost:8080/auth/admin/realms/ngx/user-storage/2f63c117-9f99-4cb4-bb8f-2ff748bbcadb/mappers/98972fa2-2055-4f98-a238-f0da7cfbe135/sync?direction=fedToKeycloak"
```

4. Reload

log into the container and manually changed the standalone.xml... and then restarted the server using the below command:

```bash
POD_NAME=$(kubectl get pods  -lapp=keycloak -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /bin/bash

cd /opt/jboss/keycloak/standalone/configuration
# change in standalone.xml, standalone-ha.xml: userCache-> enabled="false"
/opt/jboss/keycloak/bin/jboss-cli.sh --connect "reload"

# docker exec {CONTAINER} /opt/jboss/keycloak/bin/jboss-cli.sh --connect "reload"


# make a local copy for standalone.xml , standalone-ha.xml for latest keycloak version
kubectl cp $POD_NAME:/opt/jboss/keycloak/standalone/configuration/standalone.xml /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak
kubectl cp $POD_NAME:/opt/jboss/keycloak/standalone/configuration/standalone-ha.xml /Developer/Work/SPA/ngx-starter-kit/.deploy/keycloak
```
