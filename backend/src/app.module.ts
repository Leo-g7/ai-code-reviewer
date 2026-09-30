import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './reviews/reviews.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [ReviewsModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
