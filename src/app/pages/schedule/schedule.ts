import { AuthService } from './../../auth/auth.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { TicketService } from '../../auth/ticket.service';



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

  ) { }

  ngOnInit() {


    this.ticketService.getTicketList().then(response => {
      this.data = response;     
        
      for(let i=0; i < this.data.length; i++){
        this.authService.getItem(this.data[i].user_id).then(response => {                   
          this.users = response; 
          console.log(this.users.url) 
          this.get_tickets ={
            photo: "http://localhost:3000/" + this.users.photo.url,
            name: this.users.name,
            id: this.data[i].id,
            title: this.data[i].title ,
            date:  this.data[i].created_at    
          } 
          this.tickets.push(this.get_tickets)          
        })        
      }
    })       
  }
}
