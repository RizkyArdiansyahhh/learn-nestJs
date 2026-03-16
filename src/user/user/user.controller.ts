import {
  Controller,
  Get,
  Header,
  HttpCode,
  Inject,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';

@Controller('/api/users')
export class UserController {
  constructor(
    private userService: UserService,
    private connectionService: Connection,
    private mailService: MailService,
    @Inject('EmailService') private emailService: MailService,
  ) {}

  @Get('/connection')
  getConnection() {
    this.emailService.send();
    this.mailService.send();
    return this.connectionService.getName();
  }

  @Get('/hello')
  sayHello(@Query('name') name: string) {
    return this.userService.sayHello(name);
  }

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
