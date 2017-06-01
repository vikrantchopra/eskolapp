import { Injectable } from '@angular/core';
import { HorizonService } from './horizon.service';

import { Release } from '../models';

@Injectable()
export class ReleaseService {

  table = this.horizon.table("release");

  constructor(private horizon: HorizonService) { }

  getReleases() {
    return this.table
    .order('datetime', 'descending')
    .watch();
  }

  save(model: Release ) {
    this.table.store({
      id: model.id,
      team: model.team,
      product: model.product,
      release: model.release,
      releaseDate: model.releaseDate,
      releaseLink: model.releaseLink,
      datetime: new Date()
    });
    
  }

}
