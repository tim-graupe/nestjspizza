import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type PizzaDocument = HydratedDocument<Pizza>;

@Schema()
export class Pizza {
  @Prop()
  name: string;
  @Prop()
  style: string;
  @Prop()
  photo: string;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
