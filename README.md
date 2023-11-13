<!------------ Docker Prisma JWT IMPROV ------------>

# Docker Prisma Jwt Improv. 
### RUN : 1 - Server
```c
$ npm run go
```
### RUN : 2 - Routes
Use Postman or Insomnia
- POST <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/logout</kbd>
  - Header > Authorization > Bearer + `$access_token`
- POST <kbd>http://localhost:10086/auth/refresh</kbd>
  - Header > Authorization > Bearer + `$refresh_token`
### CLEANUP 
```c
$ docker stop $(docker ps -a -q)
OR
$ docker compose down
$ docker ps
``` 

<!------------ Docker Prisma JWT ------------>

# Docker Prisma JWT 
### RUN : 1 - Server
```c
$ npm run go
```
### RUN : 2 - Routes
Use Postman or Insomnia
- POST <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST <kbd>http://localhost:10086/auth/logout</kbd>
  - Header > Authorization > Bearer + `$access_token`
- POST <kbd>http://localhost:10086/auth/refresh</kbd>
  - Header > Authorization > Bearer + `$refresh_token`
### CLEANUP 
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


<!------------ NGINX ------------>

# Nginx sandbox
### RUN nginx
```
$ cd ~
$ cd /usr/local/etc/nginx
$ nginx

or

$ nginx -c /___path___/nginx.conf 
```
-s: Signal
```
$ nginx -s stop
$ nginx -s reload
```

### TEST Bouncer
Docker
```j
*** Build docker image ***

$ docker build . -t voila_server

*** Run containers based on the image ***

$ docker run -p 7777:10086 -d voila_server
$ docker run -p 8888:10086 -d voila_server
$ docker run -p 9999:10086 -d voila_server

*** Visit ***

http://localhost:7777
http://localhost:8888
http://localhost:9999
```
Nginx 
```j
$ nginx

*** then look at the backlog ***
```
Bad luck
```
$ ps -ef | grep nginx
$ kill -9 PID
```
### CLEANUP 
```j
$ docker stop $(docker ps -aq)  
```
