import { ConnectionUrl } from './../../auth/connectionurl';
import { AuthService } from './../../auth/auth.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { TicketService } from '../../auth/ticket.service';
import { CurrentUser } from './../../auth/currentuser';
import { FormatDate } from '../../auth/formatdate';



@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;


  data: any
  get_tickets: any
  users: any
  tickets = new Array<any>()
  current: CurrentUser = new CurrentUser()
  id: number;
  nameUser:any = {name:''}
  formatDate: FormatDate =  new FormatDate()
  link: ConnectionUrl = new ConnectionUrl()


  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    public ticketService: TicketService,
    public authService: AuthService

  ) {  }

  ngOnInit() {    
    
  }

  // Função Assincrona para esperar o a requisição http da api 
  async ionViewWillEnter(){
    // Instância novamente  para limpar o array 
    this.tickets = new Array<any>()
     // Pega o usuário logado
     this.id = this.current.getUser()

     //Seta o nome do Usuário no cabeçalho página
     this.authService.getItem(this.id).then(r=> {
       this.nameUser = r;         
    })
 
     // Pega a lista de tickets da classe ticketService
     this.ticketService.getTicketList().then(response => {
       this.data = response;
 
       for (let i = 0; i < this.data.length; i++) {
         // Laço do tamanho da lista de tickets chama o metodo getItem da classe authService buscando o usuário pelo id 
         this.authService.getItem(this.data[i].user_id).then(response => {
           this.users = response;
           // Compara se o usuário logado está no ticket como remetente ou destinatário do ticket
           if (this.id == Object.values(this.data[i])[5] || this.id == Object.values(this.data[i])[2]) {           
               // Seta valores no objeto ticket
               this.get_tickets = {
               photo: this.link.urlconnection + this.users.photo.url,
               name: this.users.name,
               id: this.data[i].id,
               title: this.data[i].title,
               date: this.formatDate.format(this.data[i].created_at) 
             }
             // Adiciona o objeto ticket no Array
             this.tickets.push(this.get_tickets)
           }
         })
       }
     })    

     
  }
  
  
  // Função que recebe o id do objeto selecionado e manda para a página ticket-detail através da rota
  getTicketId(id){
    this.router.navigate(['/ticket-detail',id])
  }


}
