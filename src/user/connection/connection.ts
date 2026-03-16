import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class Connection {
  getName(): string {
    return '';
  }
}

@Injectable()
export class MySQLConnection extends Connection {
  getName(): string {
    return 'mysql';
  }
}

@Injectable()
export class PostgreSQLConnection extends Connection {
  getName(): string {
    return 'postgresql';
  }
}

export function createConnection(configService: ConfigService): Connection {
  if (configService.get('DATABASE') === 'mysql') {
    return new MySQLConnection();
  } else {
    return new PostgreSQLConnection();
  }
}
