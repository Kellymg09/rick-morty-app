import { Injectable } from '@nestjs/common';
import { Episode } from './models/episode.model';
import { EpisodeArgs } from './dto/episode.args';

@Injectable()
export class EpisodeService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: string): Promise<Episode> {
    return {
      id: "1",
      name: "hola",
    } as any;
  }

  async findAll(episodeArgs: EpisodeArgs): Promise<Episode[]> {
    return [] as Episode[];
  }
}
