import { ApiProperty } from "@nestjs/swagger"

export class CreateAuthorDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    surname: string
    @ApiProperty()
    age: number
    @ApiProperty()
    email: string
}
