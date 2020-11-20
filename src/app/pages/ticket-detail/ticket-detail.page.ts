import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../auth/ticket.service';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {

  ticketId:number
  ticket: any = {id:'', title: ''}

  constructor(
    
    public ticketService: TicketService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    // Recebe o id vindo da url 
    this.ticketId = parseInt(this.route.snapshot.paramMap.get('id'))
    // Chama a função da classe ticketService que retorna o usuário pelo id 
    this.ticketService.getItemTicket(this.ticketId).then(response => {
      this.ticket = response
      console.log(this.ticket)
      })   
  }

}
