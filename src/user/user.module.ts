import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MySQLConnection,
  PostgreSQLConnection,
} from './connection/connection';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABASE === 'mysql'
          ? MySQLConnection
          : PostgreSQLConnection,
    },
  ],
})
export class UserModule {}
