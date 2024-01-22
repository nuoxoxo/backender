- # RUN : 1
```c
$ npm run go
```
- # RUN : 2 
- Postman / Insomnia
- So, we have four routes 
- POST to Signup : <kbd>http://localhost:10086/auth/signup</kbd>
  - bring two fields : `mail` and `pass`
- POST to Signin : <kbd>http://localhost:10086/auth/signin</kbd>
  - bring two fields : `mail` and `pass`
- POST to Logout : <kbd>http://localhost:10086/auth/logout</kbd>
  - bring Header > Authorization > Bearer + `$access_token`
- POST to Refresh(Token) : <kbd>http://localhost:10086/auth/refresh</kbd>
  - bring Header > Authorization > Bearer + `$refresh_token`
