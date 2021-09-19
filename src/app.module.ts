import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigController } from './config/config.controller';
import { ConfigModule } from './config/config.module';
import { CoService } from './co/co.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { EntityController } from './entity/entity.controller';
import { EntityService } from './entity/entity.service';
import { BiddingController } from './bidding/bidding.controller';
import { BiddingService } from './bidding/bidding.service';
import { BrowerService } from './brower/brower.service';
import { BrowerController } from './brower/brower.controller';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, ConfigController, AuthController, EntityController, BiddingController, BrowerController],
  providers: [AppService, CoService, AuthService, EntityService, BiddingService, BrowerService],
})
export class AppModule {}
