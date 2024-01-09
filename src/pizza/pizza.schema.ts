import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { User } from 'src/users/users.model';
export type PizzaDocument = HydratedDocument<Pizza>;

@Schema()
export class Pizza {
  @Prop()
  user: string;
  @Prop()
  recipe: string;
  @Prop()
  style: string;
  @Prop()
  photo: string;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
