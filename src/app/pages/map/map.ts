import { Component } from '@angular/core';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage {

  constructor() {}

  ticket = {user_id: '', title: '', ads_id: '' }
  logForm() {
    console.log(this.ticket)
  }

 
}

