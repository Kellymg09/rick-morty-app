import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSeeder } from './character/character.seeder';
import { EpisodeSeeder } from './episode/episode.seeder';
import { Character, CharacterSchema } from './character/models/character.model';
import { Episode, EpisodeSchema } from './episode/models/episode.model';
import { Location, LocationSchema } from './location/models/location.model';
import { LocationSeeder } from './location/location.seeder';


seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/rick-morty-db'),
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
      { name: Episode.name, schema: EpisodeSchema },
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
}).run([CharacterSeeder, EpisodeSeeder, LocationSeeder]);
