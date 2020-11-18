import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AuthService } from '../../auth/auth.service';
import { CurrentUser } from '../../auth/currentuser';
import { TicketService } from '../../auth/ticket.service';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage {

  data = { user_id: '', title: '', ads_id: '' }
  ticket: any
  current: CurrentUser = new CurrentUser()
  id: number
 public  usersList: any 

  constructor(
    public ticketService: TicketService,
    public authService: AuthService
  ) { }


  ngOnInit() {

    this.id = this.current.getUser()
    this.authService.getAll().then(d => {
    this.usersList = d
    console.log(this.usersList)
    });
  }

  logForm() {    

    this.ticket = {
      ticket: {
        user_id: this.id,
        title: this.data.title,
        ads_id: this.data.ads_id
      }
    };
    this.ticketService.create(this.ticket).subscribe(
      async () => {
        alert("Ticket salvo")
      },
    );
    //fINAL
  }
}


