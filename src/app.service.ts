import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getReversedString(somestring: string): string {
    return somestring;
  }
}
