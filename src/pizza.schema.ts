import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { Pizza } from "./pizza.interface"
export type PizzaDocument = HydratedDocument<Pizza>;
//go to https://docs.nestjs.com/techniques/mongodb for reference on how to set up  type: mongoose.Schema.Types.ObjectId, ref: (x)
//such as the name of the submitter and style of pizza
@Schema()
export class Pizza {
  @Prop()
  name: string;
  @Prop()
  style: string;
  @Prop()
  score: number;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
