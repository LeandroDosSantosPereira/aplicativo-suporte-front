import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { TicketService } from '../../auth/ticket.service';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage {

  constructor(
    public ticketService: TicketService
  ) {}

  ticket = {user_id: '', title: '', ads_id: '' }
  data: any

  logForm() {
    this.data = { 
      user_id: this.ticket.user_id ,
      title: this.ticket.title,
      ads_id: this.ticket.ads_id};    
      this.ticketService.create(this.data).subscribe(
      async () => {
       alert("Ticket salvo")        
      },
    );
    console.log(this.data)

//fINAL
  } 
}

