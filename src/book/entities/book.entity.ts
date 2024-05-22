import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Author } from "src/author/entities/author.entity";

export type BookDocument = HydratedDocument<Book>

@Schema()
export class Book {
    @Prop()
    name: string
    @Prop()
    description: string
    @Prop()
    price: number
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    authorId: string
}

export const BookSchema = SchemaFactory.createForClass(Book)