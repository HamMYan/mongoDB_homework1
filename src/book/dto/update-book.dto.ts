import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto{
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    price: number
    @ApiProperty()
    authorId: string
}
