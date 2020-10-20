import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:stringToReverse')
  getReversedString(@Param('stringToReverse') stringToReverse: string): string {
    return this.appService.getReversedString(stringToReverse);
  }
}
