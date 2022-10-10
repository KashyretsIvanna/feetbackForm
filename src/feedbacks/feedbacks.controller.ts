import {
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Post,
  Delete,
  Body,
  Header,
  Req,
} from '@nestjs/common';
import { MessageService } from '../message-service/message-service.service';
import { CreateMessageDto } from './dto/createMessage.dto';
import { Feedback } from './feedback.entity';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @HttpCode(HttpStatus.FOUND)
  getAll(): object {
    return this.messageService.getAll();
  }

  @Get(':id')
  @Header('Access-Control-Allow-Origin', '*')
  @HttpCode(HttpStatus.FOUND)
  getOne(@Param('id') id: number): object | null {
    return this.messageService.getById(id);
  }

  // @Post()
  // @Header('Access-Control-Allow-Origin', '*')
  // @Header('Access-Control-Allow-Methods', '*')
  // @HttpCode(HttpStatus.CREATED)
  // createMessage(@Req() CreateMessageDto: CreateMessageDto):object {
  //   this.messageService.createMessage(CreateMessageDto)
  //   return CreateMessageDto;
  // }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Allow-Methods', '*')
  @Header('Content-Type', 'application/json')
  @HttpCode(HttpStatus.CREATED)
  createMessage(@Body() body: any): object {
    // this.messageService.createMessage(CreateMessageDto)
    return body;
  }

  @Delete(':id')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Allow-Methods', '*')
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  deleteMessage(@Param('id') id: number) {
    const response = this.messageService.remove(id);
    return response;
  }
}
