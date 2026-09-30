import { AiModule } from './ai/ai.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule  } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ReviewsModule } from './reviews/reviews.module';
import { validate } from './config/env.validation';

@Module({
  imports: [
    ReviewsModule, 
    AiModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      validate
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
