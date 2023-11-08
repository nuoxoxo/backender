import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"; 
import { Strategy, VerifyCallback } from 'passport-google-oauth20'

// import { config } /*as dotenv*/ from 'dotenv';
// config()

@Injectable()
export class GoogleStrategy extends PassportStrategy (
  Strategy, 'google' 
) {

  constructor () {
    super ({
      clientID : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
      callbackURL : process.env.GOOGLE_CALLBACK_URL,
      scope : [ 'profile', 'email' ]
    });
  }

  async validate (

    accessToken : string, 
    refreshToken : string,
    profile: any,
    done: VerifyCallback
  ) : Promise<any> {

    const { name, emails, photos } = profile
    const user = {
      email : emails[0].value,
      firstName : name.givenName,
      lastName : name.familyName,
      picture: photos[0].value,
      accessToken
    } 

    done ( null, user )
  }
}
