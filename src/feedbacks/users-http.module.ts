import { Module } from '@nestjs/common';
import { FeedbacksController } from 'src/feedbacks/feedbacks.controller';
import { MessageService } from 'src/message-service/message-service.service';
import { FeedbackModule } from 'src/messages/messages.module';

@Module({
  imports: [FeedbackModule],
  providers: [MessageService],
  controllers: [FeedbacksController],
})
export class UserHttpModule {}
