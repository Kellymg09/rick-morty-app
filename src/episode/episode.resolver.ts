import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Episode } from './models/episode.model';
import { EpisodeService } from './episode.service';
import { EpisodeArgs } from './dto/episode.args';

@Resolver(of => Episode)
export class EpisodeResolver {
  constructor(private readonly episodeService: EpisodeService) {}

  @Query(returns => Episode)
  async episode(@Args('id') id: string): Promise<Episode> {
    const recipe = await this.episodeService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [Episode])
  episodes(@Args() episodeArgs: EpisodeArgs): Promise<Episode[]> {
    return this.episodeService.findAll(episodeArgs);
  }
}
