import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // getHello(): string {
  //   return 'Hello World!';
  // }

  // Use Google
  /*
  googleLogin (req) {
    if ( ! req.user)
      return 'no use(r)'
    return {
      messgage: 'user info from ggl',
      user: req.user
    }
  }
  */

  // Use 42 
  fortytwoLogin (req) {
    if ( ! req.user)
      return 'no use(r)'
    return {
      messgage: 'user info from 42 campus',
      user: req.user
    }
  }

  hello ( req ) {
    console.log(Object.keys(req).sort())
    return 'Hello'
  }

}
