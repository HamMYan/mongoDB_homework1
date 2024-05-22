import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private bookModel: Model<Book>) { }
  async create(createBookDto: CreateBookDto) {
    const { name, description, price, authorId } = createBookDto
    return await this.bookModel.create({ name, description, price, authorId })
  }

  async findAll() {
    return await this.bookModel.find()
  }

  async findOne(id: string) {
    const book = await this.bookModel.findById(id);
    if (book) return book;
    else return 'Book not found';
  }

  async getBooksByAuthorId(id: string) {
    const book = await this.bookModel.find({ authorId: id })
    if (book) return book;
    else return 'Book not found';
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const author = await this.bookModel.findById(id)
    if (author) {
      const { name, description, price, authorId } = updateBookDto
      await this.bookModel.findByIdAndUpdate(id, { name, description, price, authorId })
      return 'Book updated'
    } else return 'Book not found'
  }

  async remove(id: string) {
    const book = await this.bookModel.findById(id)
    if (book) {
      await this.bookModel.findByIdAndDelete(id)
      return "Book deleted"
    } else return 'Book not found'
  }
}
