import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AuthorDocument = HydratedDocument<Author>

@Schema()
export class Author {
    @Prop()
    name: string
    @Prop()
    surname: string
    @Prop()
    age: number
    @Prop()
    email: string
}

export const AuthorSchema = SchemaFactory.createForClass(Author)