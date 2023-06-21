import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { BooksModule } from './modules/books/books.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot(),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
