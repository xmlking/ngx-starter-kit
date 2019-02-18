# User Module


### Profile

```bash
# obtain and set token
access_token=11111
```

> create profile.  user with user e.g., `sumo3's` token
```bash
curl -X POST "http://localhost:3000/api/user/profile" \
-H "accept: application/json" \
-H "Content-Type: multipart/form-data" \
-H "authorization: Bearer $access_token" \
-F "file=@/Users/schinth/Documents/icons/amd_logo.png;type=image/png" \
-F "gender=male" \
-F "mobilePhone=1112223344"
```

> get profile.  user with user e.g., `sumo3's` token
```bash
curl -X GET "http://localhost:3000/api/user/profile/1" \
-H "accept: application/json" \
-H "authorization: Bearer $access_token"
```

> list profiles. user with admin e.g., `ngxadmin's` token
```bash
curl -X GET "http://localhost:3000/api/user/profile" \
-H "accept: application/json" \
-H "authorization: Bearer $access_token"
```


### Reference 
* https://www.joshmorony.com/handling-multiple-file-uploads-with-nest-js/
* https://www.joshmorony.com/displaying-upload-download-progress-in-an-ionic-application/
* https://malcoded.com/posts/angular-file-upload-component-with-express
* https://github.com/LukasMarx/angular-file-upload
* https://github.com/apiel/wudo/blob/master/backend/src/resolver/auth.ts
