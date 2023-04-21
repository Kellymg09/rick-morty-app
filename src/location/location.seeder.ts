import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import locations from './locations.json';
import { Location } from './models/location.model';

@Injectable()
export class LocationSeeder implements Seeder {
  constructor(
    @InjectModel(Location.name) private readonly location: Model<Location>,
  ) {}

  async seed(): Promise<any> {
    // Insert into the database.
    return this.location.insertMany(locations);
  }

  async drop(): Promise<any> {
    return this.location.deleteMany({});
  }
}
