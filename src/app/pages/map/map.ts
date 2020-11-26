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

  data = { user_id: '', title: '', ads_id: '', text:'' }
  ticket: any
  current: CurrentUser = new CurrentUser()
  id: number
  imageSrc:string = ''
  img:string = '' 
  public  usersList: any 

  constructor(
    public ticketService: TicketService,
    public authService: AuthService
  ) { }


  ngOnInit() {
    // Pega o id do usuário logado
    this.id = this.current.getUser()
    // Chama o método getAll da classe auService e salva na userList a lista de usuários
    this.authService.getAll().then(d => {
    this.usersList = d
    console.log(this.usersList)
    });
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
    this.img =  this.imageSrc  ;
    console.log(this.imageSrc)
  }



  logForm() {    
    // Cria um objeto ticket
    this.ticket = {
      ticket: {
        user_id: this.id,
        title: this.data.title,
        ads_id: this.data.ads_id,
        text: this.data.text,
        image: this.img       
      }
    };
    // Envia o objeto ticket para o método create da classe ticketService
    this.ticketService.create(this.ticket).subscribe(
      async () => {
        alert("Ticket salvo")
      },
    );
    //fINAL
  }
}


