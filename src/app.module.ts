import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurguersModule } from './burguers/burguers.module';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service';

@Module({
  imports: [BurguersModule, OrderModule],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
