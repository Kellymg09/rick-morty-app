import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import characters from './characters.json';
import { Character } from './models/character.model';

@Injectable()
export class CharacterSeeder implements Seeder {
  constructor(
    @InjectModel(Character.name) private readonly character: Model<Character>,
  ) {}

  async seed(): Promise<any> {
    // Insert into the database.
    return this.character.insertMany(characters);
  }

  async drop(): Promise<any> {
    return this.character.deleteMany({});
  }
}
