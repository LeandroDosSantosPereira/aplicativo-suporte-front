import { AuthService } from './../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../auth/ticket.service';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {

  ticketId: number
  ticket: any 
  user: any
  ticketCards: any = { id: '', title: '', name: '', created_at: '', photo: '' }

  constructor(

    public ticketService: TicketService,
    private route: ActivatedRoute,
    public authService: AuthService

  ) { }

  ngOnInit() {
    // Recebe o id vindo da url 
    this.ticketId = parseInt(this.route.snapshot.paramMap.get('id'))
    // Chama a função da classe ticketService que retorna o usuário pelo id 
    this.ticketService.getItemTicket(this.ticketId).then(response => {
      this.ticket = response

      this.authService.getItem(this.ticket.user_id).then(response => {
        this.user = response;        
        //Seta valores no objeto ticket
        this.ticketCards = {
          photo: "http://localhost:3000/" + this.user.photo.url,
          name: this.user.name,
          id: this.ticket.id,
          title: this.ticket.title,
          date: this.ticket.created_at
        }
        console.log(this.ticketCards)
      })

    })

  }

}


