import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './models/character.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Character.name,
        schema: CharacterSchema,
      },
    ]),
  ],
  providers: [CharacterResolver, CharacterService],
})
export class CharacterModule { }
