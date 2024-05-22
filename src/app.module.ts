import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/mongodb1_homework'),AuthorModule,BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
