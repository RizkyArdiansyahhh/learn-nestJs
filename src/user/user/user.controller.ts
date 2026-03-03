import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
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
