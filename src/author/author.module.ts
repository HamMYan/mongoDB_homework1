import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './entities/author.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Author', schema: AuthorSchema}])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
