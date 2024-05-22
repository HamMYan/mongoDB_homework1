import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(@InjectModel('Author') private autorModel: Model<Author>) { }
  async create(createAuthorDto: CreateAuthorDto) {
    const { name, surname, age, email } = createAuthorDto
    return await this.autorModel.create({ name, surname, age, email })
  }

  async findAll() {
    return await this.autorModel.find()
  }

  async findOne(id: string) {
    const user = await this.autorModel.findById(id);
    if (user) return user;
    else return 'User not found';
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.autorModel.findById(id)
    if (author) {
      const { name, surname, age, email } = updateAuthorDto
      await this.autorModel.findByIdAndUpdate(id, { name, surname, age, email })
      return 'Author updated'
    }else return 'Authr not found'
  }

  async remove(id: string) {
    const author = await this.autorModel.findById(id)
    if(author) {
      await this.autorModel.findByIdAndDelete(id)
      return "Author deleted"
    }else return 'Authr not found'
  }
}
