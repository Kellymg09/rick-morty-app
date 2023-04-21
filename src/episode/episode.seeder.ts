import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import episodes from './episodes.json';
import { Episode } from './models/episode.model';

@Injectable()
export class EpisodeSeeder implements Seeder {
  constructor(
    @InjectModel(Episode.name) private readonly episode: Model<Episode>,
  ) {}

  async seed(): Promise<any> {
    // Insert into the database.
    return this.episode.insertMany(episodes);
  }

  async drop(): Promise<any> {
    return this.episode.deleteMany({});
  }
}
