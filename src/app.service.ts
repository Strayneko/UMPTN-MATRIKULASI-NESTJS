import { Injectable, HttpStatus } from '@nestjs/common';
import baseResponse from './response.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  cobaBang(): string {
    return 'Hello World';
  }

  cobaJSON(): baseResponse {
    const resp: baseResponse = {
      status_code: HttpStatus.OK,
      status: true,
      message: 'Data successfully fetched!',
      data: {
        name: 'Rendi Bayu Setiawan',
        github: 'https://github.com/strayneko',
      },
    };
    return resp;
  }
}
