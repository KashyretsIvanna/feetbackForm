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
      host:"us-cdbr-east-06.cleardb.net",
      port:3306,
      username:"b015a13af4b200",
      password: process.env.PASSWORD,
      database: 'heroku_11d8aa7030a557a',
      entities: [Feedback],
      synchronize: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
