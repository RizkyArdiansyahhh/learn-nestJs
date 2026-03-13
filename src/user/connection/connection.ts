import { Injectable } from '@nestjs/common';

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
