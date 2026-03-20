import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Această funcție TREBUIE să existe ca să dispară eroarea roșie din test
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Această funcție returnează lista pentru cardurile tale
  @Get('cabane')
  getCabane() {
    return this.appService.getCabane();
  }
}