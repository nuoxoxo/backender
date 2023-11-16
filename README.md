<!------------  ------------>

# Tcd

- [ ] to modf - ft_tcd header
  - `somewhere/logo.297ed23d4b73a363f8ce.png` 
- [ ] to know - manifest.json
  - maybe a default preset file

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


<!------------ NGINX ------------>

# Nginx sandbox
### RUN nginx
```j
$ cd ~
$ cd /usr/local/etc/nginx
$ nginx

or

$ nginx -c /___path___/nginx.conf 
```
```j
use -s: Signal

$ nginx -s stop
$ nginx -s reload
```

### TEST Bouncer
- Build image
```
Build docker image 

$ docker build . -t imagename
```
- Build container(s)
```
Run containers based on the image

$ docker run -p 7777:10086 -d imagename
$ docker run -p 8888:10086 -d imagename
$ docker run -p 9999:10086 -d imagename
```
- Visite any one of the servers defined above
```
> http://localhost:PORT
```
- Nginx 
```j
$ nginx

Check the backlog for proofs
```
- In case of bad luck
```j
$ ps -ef | grep nginx
$ kill -9 PID
```
### CLEANUP 
```j
$ docker stop $(docker ps -aq)  
```


<!------------ FOOTNOTE ------------>

# &#8203;
All projects sprawned from : \
[nuoxoxo/nn](https://github.com/nuoxoxo/nn)
