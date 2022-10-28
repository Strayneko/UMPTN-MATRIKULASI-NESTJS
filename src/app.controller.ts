import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/coba')
  cobaBang(): string {
    return this.appService.cobaBang();
  }

  @Get('/json')
  cobaJson(@Res() res: Response): Response {
    return res.status(HttpStatus.OK).json(this.appService.cobaJSON());
  }
}
