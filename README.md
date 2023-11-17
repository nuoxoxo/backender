<!------------  ------------>



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

# Create a WebSocket Gateway Server
Doc: [Gateways | NestJS](https://docs.nestjs.com/websockets/gateways)

# Story Mode

```
↑ [recv]: listen on 'route_two' in [Events]
↑ 
↑ [send]: send to 'route_one' (pattern to be fulfilled)
↑ [send]: fill in [Message] 
↑ 
↑ Connect ➜ http://localhost:10086
↑ Postman ➜ New ➜ Socket.IO request
↑
*** Test: sending request on Postman ***
```
- Postman: ✅ 
- Insomnia: No Socket IO [support](https://github.com/Kong/insomnia/issues/5884) 
```sc
// src/gateway/gateway.module.ts

@Module({
  providers: [myGateway]
})
export class GatewayModule {}
```
```ts
// src/gateway/gateway.ts

import { OnModuleInit } from "@nestjs/common";
import { Server } from "socket.io";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer 
} from "@nestjs/websockets";

@WebSocketGateway()
export class myGateway implements OnModuleInit {

  @WebSocketServer()
  server: Server

  private connCount: number = 0
  private disconnCount: number = 0

  onModuleInit() {
    this.server.on(
      'connection',
      (sock) => {
        console.log(sock.id, 'connected', this.connCount++)
        sock.on('disconnect', () => {
          console.log(sock.id, 'disconnected', this.disconnCount++)
        })
      }
    )
  }

  onModuleDestroy(signal: string) {
    console.log(signal, 'connected', this.disconnCount++)
  }

  @SubscribeMessage('route_one') // param: a pattern to be fulfilled
  onNewMsg (@MessageBody () payload: any) {
    console.log( payload )
    this.server.emit(
      'route_two',
      `hello! (replying to \"${payload}\")`
    )
  }
}
```
```
$ npm run start:dev
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
$ nest new websocket-gateway
↑
*
```



<!------------ FOOTNOTE ------------>

# &#8203;
All projects sprawned from : \
[nuoxoxo/nn](https://github.com/nuoxoxo/nn)
