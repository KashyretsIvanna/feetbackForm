import {
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Post,
  Put,
  Delete,
  Body,
  Header,
} from '@nestjs/common';
import { MessageService } from '../message-service/message-service.service';
import { CreateMessageDto } from './dto/createMessage.dto';


@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  @HttpCode(HttpStatus.FOUND)
  getAll(): object {
    return this.messageService.getAll();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  @HttpCode(HttpStatus.FOUND)
  getOne(@Param('id') id: number): object | null {
    return this.messageService.getById(id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  @HttpCode(HttpStatus.CREATED)
  createMessage(@Body() CreateMessageDto: CreateMessageDto): object {
    return this.messageService.createMessage(CreateMessageDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.MOVED_PERMANENTLY)
  @Header('Content-Type', 'application/json')
  deleteMessage(@Param('id') id: number) {
    const response = this.messageService.remove(id);
    return response;
  }
}
