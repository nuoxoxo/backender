# JWT Sandbox
- # RUN : 1
```c
$ npm run go
```
- # RUN : 2 
- Postman / Insomnia
- So, we have four routes 
- POST : <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST : <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST : <kbd>http://localhost:10086/auth/logout</kbd>
  - bring Header > Authorization > Bearer + `$access_token`
- POST : <kbd>http://localhost:10086/auth/refresh</kbd>
  - bring Header > Authorization > Bearer + `$refresh_token`
- # END
```c
$ docker compose down
$ docker ps
``` 

# JWT IMPROV Sandbox
- # RUN : 1
```c
$ npm run go
```
- # RUN : 2 
- Postman / Insomnia
- So, we have four routes 
- POST : <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST : <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST : <kbd>http://localhost:10086/auth/logout</kbd>
  - bring Header > Authorization > Bearer + `$access_token`
- POST : <kbd>http://localhost:10086/auth/refresh</kbd>
  - bring Header > Authorization > Bearer + `$refresh_token`

# OAUTH 42 Sandbox
- # SETUP
- Go to <kbd>setting > API > register a new app</kbd>
- set redirect uri to <kbd>http://localhost:10086/auth/42/callback</kbd>
- # RUN
```c
$ npm run go
OR
$ npm i
$ npm run start:dev
```

# OAUTH Google Sandbox
- # SETUP
- Go to <kbd>https://console.cloud.google.com/apis/credentials</kbd>
- set redirect uri to <kbd>http://localhost:10086/auth/google/callback</kbd>
- # RUN
```c
$ npm run go
OR
$ npm i
$ npm run start:dev
```
