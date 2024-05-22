import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto{
    @ApiProperty()
    name: string
    @ApiProperty()
    surname: string
    @ApiProperty()
    age: number
    @ApiProperty()
    email: string
}
