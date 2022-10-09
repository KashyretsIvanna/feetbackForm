import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedbacks/feedback.entity';
import { UserHttpModule } from './feedbacks/users-http.module';
dotenv.config();

@Module({
  imports: [
    UserHttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:process.env.HOST,
      port:Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.BASE_PASSWORD,
      database: 'feedbacks',
      entities: [Feedback],
      synchronize: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
