import { Injectable } from '@nestjs/common';
import { Location } from './models/location.model';
import { LocationArgs } from './dto/location.args';

@Injectable()
export class LocationService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: any): Promise<any> {
    return {
      id: "1",
      name: "hola",
    } as any;
  }

  async findAll(locationArgs: LocationArgs): Promise<Location[]> {
    return [] as Location[];
  }
}
