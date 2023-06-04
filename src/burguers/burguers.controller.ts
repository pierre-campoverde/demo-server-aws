import { Controller, Get, Post } from '@nestjs/common';
import { BurguersService } from './burguers.service';

@Controller('burguers')
export class BurguersController {
  constructor(private readonly burguersService: BurguersService) {}
  @Get()
  getBurgersMenu(): string {
    return this.burguersService.getBurgersMenu();
  }
}
