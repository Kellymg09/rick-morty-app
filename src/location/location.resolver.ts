import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Location } from './models/location.model';
import { LocationService } from './location.service';
import { LocationArgs } from './dto/location.args';

@Resolver(of => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(returns => Location)
  async location(@Args('id') id: string): Promise<Location> {
    const recipe = await this.locationService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [Location])
  locations(@Args() locationArgs: LocationArgs): Promise<Location[]> {
    return this.locationService.findAll(locationArgs);
  }
}
