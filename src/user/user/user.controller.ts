import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
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
