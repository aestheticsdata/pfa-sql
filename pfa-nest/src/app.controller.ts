import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    console.log('this.configService', this.configService);
    console.log(this.configService.get<string>('PFA_EMAIL_USER'));
    console.log('process.env.PFA_EMAIL_USER', process.env.PFA_EMAIL_USER);
    return this.appService.getHello();
  }
}
