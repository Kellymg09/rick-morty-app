import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Character } from './models/character.model';
import { CharacterService } from './character.service';

@Resolver(of => Character)
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(returns => Character)
  async character(@Args('id') id: string): Promise<Character> {
    const recipe = await this.characterService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [Character])
  characters(@Args('page') page: number): Promise<Character[]> {
    return this.characterService.findAll(page);
  }
}
