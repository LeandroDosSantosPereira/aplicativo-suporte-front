import { CurrentUser } from './../../auth/currentuser';
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
  current: CurrentUser = new CurrentUser()
  id: number
  commentdata: any
  users: any
  comments = new Array<any>()
  getComments: any

  constructor(

    public ticketService: TicketService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public commentService: CommentService

  ) { }

  ngOnInit() {
    this.createCardTickets()    
  }

  //Cria o Ticket de cards na view
  createCardTickets() {
    // Recebe o id vindo da url 
    this.ticketId = parseInt(this.route.snapshot.paramMap.get('id'))
    //Pega o id logado para cadastrar o comentário
    this.id = this.current.getUser()
    // Chama a função da classe ticketService que retorna o ticket pelo id 
    this.ticketService.getItemTicket(this.ticketId).then(response => {
      this.ticket = response
      // Chama a função da classe ticketService que retorna o usuário pelo id 
      this.authService.getItem(this.ticket.user_id).then(response => {
        this.user = response;

        //Seta valores no objeto ticketCards do card da View 
        this.ticketCards = {
          photo: this.link.urlconnection + this.user.photo.url,
          name: this.user.name,
          id: this.ticket.id,
          title: this.ticket.title,
          text: this.ticket.text,
          date: this.formatDate.format(this.ticket.created_at),
          image: this.link.urlconnection + Object.values(this.ticket.image)[0]

        }
      })

    })

  }

  async ionViewWillEnter(){     
     // Limpa a lista
     this.comments = new Array<any>()
     // Pega a lista de comentários da classe CommentService
     this.commentService.getCommentsList().then(response => {
       this.commentdata = response;
       // Laço do tamanho da lista de tickets chama o metodo getItem da classe authService buscando o usuário pelo id 
       for (let i = 0; i < this.commentdata.length; i++) {
         this.authService.getItem(this.commentdata[i].user_id).then(response => {
           this.users = response;
           //     // Compara se o usuário logado está no ticket como remetente ou destinatário do ticket
           if (this.ticketId == Object.values(this.commentdata[i])[2]) {
             // console.log(Object.values(this.commentdata[i])[5])             
             // Seta valores no objeto ticket
             this.getComments = {
               photo: this.link.urlconnection + this.users.photo.url,
               name: this.users.name,
               image: this.commentdata[i].image.url,
               text: this.commentdata[i].text,
               date: this.formatDate.format(this.commentdata[i].created_at)
             }
             // Adiciona o objeto ticket no Array
             this.comments.push(this.getComments)
           }
         })
       }
 
     })
     console.log(this.comments)       
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
  }


  //Metodo para cadastrar ticket
  createComment() {
    // Cria um objeto Comment
    this.comment = {
      comment: {
        ticket_id: this.ticket.id,
        text: this.data.text,
        image: this.img,
        user_id: this.id
      }
    };
    // Envia o objeto ticket para o método create da classe ticketService
    this.commentService.create(this.comment).subscribe(
      async () => {
        this.ionViewWillEnter()       
        // alert("Comentário salvo!!")
      },
    );

    this.data = { text: '', ticket_id: '' } 
    //fINAL
  }

  // Esconde comentários
  hideComment(el) {

    let display = document.getElementById(el).style.display;

    if (display == "none") {
      document.getElementById(el).style.display = 'block';
    }
    else {
      document.getElementById(el).style.display = 'none';
      console.log("Fechou")
    }

  }

}


