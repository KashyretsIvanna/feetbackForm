import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/feedbacks/dto/createMessage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from 'src/feedbacks/feedback.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Feedback)
    private feedbacksRepository: Repository<Feedback>,
  ) {}

  getAll(): Promise<Feedback[]> {
    return this.feedbacksRepository.find();
  }

  getById(id: number): Promise<Feedback> {
    return this.feedbacksRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const item =await this.feedbacksRepository.delete(Number(id));
    return item ;
  }

  async createMessage(feedback: Feedback): Promise<Feedback> {
    const obj = { ...feedback, id: 4 };
    return this.feedbacksRepository.save(obj);
  }
}
