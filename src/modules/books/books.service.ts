import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository, InsertResult} from 'typeorm'
import {Books} from './books.entity'
import { CreateBookDto } from './books.dto';

@Injectable()
export class BooksService{
  constructor(
    @InjectRepository(Books)
    private bookRepository : Repository<Books> 
  ) {}
  async getAllBooks(): Promise<Books[]>{
    return this.bookRepository.find();
  }

  async CreateNewBook(createBookDto : CreateBookDto): Promise<Books>{
    const newBooks = this.bookRepository.create({
      ...createBookDto
    })
    return this.bookRepository.save(newBooks)
  }
}