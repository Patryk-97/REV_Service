import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReversedString(): string {
    return this.appService.getReversedString('testowyString');
  }
}
