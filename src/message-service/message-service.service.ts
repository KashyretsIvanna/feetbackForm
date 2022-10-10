import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from '../feedbacks/feedback.entity';

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
    const obj = { ...feedback, id: Math.floor(Math.random() * 1000000) };
    this.feedbacksRepository.save(obj);
    return obj;
  }
}
