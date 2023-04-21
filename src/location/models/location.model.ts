import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Location {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  
  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  type: string;

  @Prop()
  @Field()
  dimension: string;

  @Prop()
  @Field()
  residents: string[];

  @Prop()
  @Field()
  created: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);