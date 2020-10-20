import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getReversedString(somestring: string): string {
    let splittedString = somestring.split(''); // 'str' -> ['s', 't', 'r']
    let reversedCharactersArray = splittedString.reverse(); // ['s', 't', 'r'] -> ['r', 't', 's']

    return somestring;
  }
}
