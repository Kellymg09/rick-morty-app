import { Injectable, NotFoundException } from '@nestjs/common';
import { Character } from './models/character.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>,
  ) {}

  findAll(page: number) {
    return this.characterModel.find().skip(page).limit(20).exec();
  }

  async findOneById(id: string) {
    const character = await this.characterModel.findOne({ _id: id }).exec();
    if (!character) {
      throw new NotFoundException(`Character ${id} not found`);
    }
    return character;
  }
}
