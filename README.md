<!------------ Docker Prisma JWT IMPROV ------------>

# Docker Prisma Jwt Improv.
### RUN : 1
```c
$ npm run go
```
### RUN : 2 
Use Postman or Insomnia
- POST <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/logout</kbd>
  - Header > Authorization > Bearer + `$access_token`
- POST <kbd>http://localhost:10086/auth/refresh</kbd>
  - Header > Authorization > Bearer + `$refresh_token`
### END
```c
$ docker stop $(docker ps -a -q)
OR
$ docker compose down
$ docker ps
``` 

<!------------ Docker Prisma JWT ------------>

# Docker Prisma JWT 
### RUN : 1
```c
$ npm run go
```
### RUN : 2 
Use Postman or Insomnia
- POST <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/logout</kbd>
  - Header > Authorization > Bearer + `$access_token`
- POST <kbd>http://localhost:10086/auth/refresh</kbd>
  - Header > Authorization > Bearer + `$refresh_token`
### END
```c
$ docker stop $(docker ps -a -q)
OR
$ docker compose down
$ docker ps
``` 

<!------------ OAUTH 42 ------------>

# OAUTH 42 
### SETUP
- Go to Settings > API > register a new app
- Set Redirect URI to <kbd>http://localhost:10086/auth/42/callback</kbd>
### RUN
```c
$ npm run go
OR
$ npm i
$ npm run start:dev
```

<!------------ OAUTH Google ------------>

# OAUTH Google 
### SETUP
- Go to <kbd>https://console.cloud.google.com/apis/credentials</kbd>
- Set Redirect URI to <kbd>http://localhost:10086/auth/google/callback</kbd>
### RUN
```c
$ npm run go
OR
$ npm i
$ npm run start:dev
```
# &#8203;
All projects moved here from : \
[nuoxoxo/nn](https://github.com/nuoxoxo/nn)
