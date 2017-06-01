import { Component, OnInit } from '@angular/core';

import { Release } from '../../models';
import { ReleaseService } from '../../services/release.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'],
  providers: [ReleaseService]
})
export class ReleaseComponent implements OnInit {

  items: any;
  release: Release;
  selectedRecord: any;

  constructor(private service: ReleaseService) { }

  ngOnInit() {
    this.load();
    this.release = this.initializeRelease();
  }

  load() {
    this.items = this.service.getReleases();
  }

  addRelease(model: Release) {
    this.service.save(model);
    this.release = this.initializeRelease();
  }

  initializeRelease() {
    let release = {
      id: '',
      team: '',
      product: '',
      release: '',
      releaseDate: new Date(),
      releaseLink: ''
    }
    return release;
  }

  onRowSelect(event) {
    
  }

}
