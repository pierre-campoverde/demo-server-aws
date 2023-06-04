import { Injectable } from '@nestjs/common';

@Injectable()
export class BurguersService {
  getBurgersMenu(): string {
    return 'Cangreburguer';
  }
}
