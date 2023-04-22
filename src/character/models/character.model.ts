import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Location } from 'src/location/models/location.model';

@Schema()
@ObjectType()
export class Character {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  status: string;

  @Prop()
  @Field()
  species: string;

  @Prop()
  @Field()
  type: string;

  @Prop()
  @Field()
  gender: string;

  @Prop()
  @Field()
  origin: string;

  @Prop()
  @Field()
  location: string;

  @Prop()
  @Field()
  image: string;

  @Prop()
  @Field()
  episode: string[];

  @Prop()
  @Field()
  created: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);