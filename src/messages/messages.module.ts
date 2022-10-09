import { Module } from '@nestjs/common';
import { FeedbacksController } from 'src/feedbacks/feedbacks.controller';
import { MessageService } from 'src/message-service/message-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from 'src/feedbacks/feedback.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Feedback])],
//   providers: [MessageService],
//   controllers: [FeedbacksController],
// //   exports: [TypeOrmModule]
// })
// export class MessagesModule {}


@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  exports: [TypeOrmModule]
})
export class FeedbackModule {}
