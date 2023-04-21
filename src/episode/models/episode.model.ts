import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Episode {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  
  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  air_date: string;

  @Prop()
  @Field()
  episode: string;

  @Prop()
  @Field()
  characters: string[];

  @Prop()
  @Field()
  created: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);