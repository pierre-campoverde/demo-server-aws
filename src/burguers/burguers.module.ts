import { Module } from '@nestjs/common';
import { BurguersController } from './burguers.controller';
import { BurguersService } from './burguers.service';

@Module({
  controllers: [BurguersController],
  providers: [BurguersService]
})
export class BurguersModule {}
