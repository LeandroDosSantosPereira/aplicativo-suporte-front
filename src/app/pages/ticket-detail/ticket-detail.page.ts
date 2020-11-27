import { FormatDate } from './../../auth/formatdate';
import { AuthService } from './../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../auth/ticket.service';
import { CommentService } from '../../auth/comment.service';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {

  ticketId: number
  ticket: any 
  user: any
  ticketCards: any = { id: '', title: '', name: '', created_at: '', photo: '', image: '', text: '' }
  data: any = {text:'', ticket_id:''}
  comment:any
  formatDate: FormatDate =  new FormatDate()

  constructor(

    public ticketService: TicketService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public commentService: CommentService

  ) { }

  ngOnInit() {
    // Recebe o id vindo da url 
    this.ticketId = parseInt(this.route.snapshot.paramMap.get('id'))
    // Chama a função da classe ticketService que retorna o usuário pelo id 
    this.ticketService.getItemTicket(this.ticketId).then(response => {
      this.ticket = response
      console.log(this.ticket)
      this.authService.getItem(this.ticket.user_id).then(response => {
        this.user = response; 
              
        //Seta valores no objeto ticket
        this.ticketCards = {
          photo: "http://localhost:3000/" + this.user.photo.url,
          name: this.user.name,
          id: this.ticket.id,
          title: this.ticket.title,
          text:this.ticket.text,
          date:  this.formatDate.format(this.ticket.created_at),
          image: "http://localhost:3000/" + Object.values(this.ticket.image)[0]
          // this.ticket.image
        }
        console.log(this.ticketCards)
      })

    })

  }

  createComment(){  
    // Cria um objeto Comment
    this.comment = {
      comment: {
        ticket_id: this.ticket.id,      
        text: this.data.text             
      }
    };
     // Envia o objeto ticket para o método create da classe ticketService
     this.commentService.create(this.comment).subscribe(
      async () => {
        alert("Comentário salvo!!")
      },
    );

    this.data = {text:'', ticket_id:''}
    //fINAL
  }

}


