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