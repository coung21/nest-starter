import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './books.dto';

@Controller('books')
export class BooksController{
  constructor(private bookService : BooksService) {}

  @Get()
  getAllBooks(){
    const books = this.bookService.getAllBooks()
    return books
  }

  @Post()
    createNewBook(@Body() createBookDto: CreateBookDto){
      return this.bookService.CreateNewBook(createBookDto);
  }
}
