import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { LocationModule } from './location/location.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CharacterModule,
    EpisodeModule,
    LocationModule,
    CommonModule
  ],
})
export class AppModule {}
