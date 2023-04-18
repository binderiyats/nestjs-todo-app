import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema({ timestamps: true })
export class Todo {
  @Prop({ default: () => nanoid(), type: String })
  _id: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Boolean })
  checked: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
