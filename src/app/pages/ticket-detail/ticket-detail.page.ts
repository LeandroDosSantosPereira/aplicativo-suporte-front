import { FormatDate } from './../../auth/formatdate';
import { AuthService } from './../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../auth/ticket.service';
import { CommentService } from '../../auth/comment.service';
import { ConnectionUrl } from '../../auth/connectionurl';


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
  data: any = { text: '', ticket_id: '' }
  comment: any
  formatDate: FormatDate = new FormatDate()
  link: ConnectionUrl = new ConnectionUrl()
  imageSrc: string = ''
  img: string = ''


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
          photo: this.link.urlconnection + this.user.photo.url,
          name: this.user.name,
          id: this.ticket.id,
          title: this.ticket.title,
          text: this.ticket.text,
          date: this.formatDate.format(this.ticket.created_at),
          image: this.link.urlconnection + Object.values(this.ticket.image)[0]
          // this.ticket.image
        }
        console.log(this.ticketCards)
      })

    })

  }

  //Método que pega imagem do input file e convete em base 64 e guarda na variável imageSrc 
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.img = this.imageSrc;
    console.log(this.img)
  }


  //Metodo para cadastrar ticket
  createComment() {
    // Cria um objeto Comment
    this.comment = {
      comment: {
        ticket_id: this.ticket.id,
        text: this.data.text,
        image: this.img
      }
    };
    // Envia o objeto ticket para o método create da classe ticketService
    this.commentService.create(this.comment).subscribe(
      async () => {
        alert("Comentário salvo!!")
      },
    );

    this.data = { text: '', ticket_id: '' }
    //fINAL
  }

  hideComment(el) {

    let display = document.getElementById(el).style.display;

    if (display == "none"){
      document.getElementById(el).style.display = 'block';     
    }
    else{
      document.getElementById(el).style.display = 'none';
      console.log("Fechou")
    }

  }

}


