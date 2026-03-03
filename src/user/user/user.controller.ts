import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('Cookie set');
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return request.cookies['name'];
  }

  @Get('/sample-hello')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  sampleHello(): Record<string, string> {
    return {
      data: 'hello',
    };
  }

  @Get('/hello')
  sayHello(
    @Query('first_name') firtsName: string,
    @Query('last_name') lastName: string,
  ) {
    return `Hello ${firtsName} ${lastName}`;
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return `Get ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}
