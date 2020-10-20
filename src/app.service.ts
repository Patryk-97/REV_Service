import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getReversedString(somestring: string): string {
    let splittedString = somestring.split(""); // 'hello' -> ["h", "e", "l", "l", "o"]
    
    return somestring;
  }
}
