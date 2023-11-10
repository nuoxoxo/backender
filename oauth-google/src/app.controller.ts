import { Controller, Get,/*added:*/ UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @UseGuards( AuthGuard('google'))
  async googleAuth ( @Req() req) {

  }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect( @Req() req ) {
    this.appService.hello( req )
    return this.appService.googleLogin( req )
  }

}
