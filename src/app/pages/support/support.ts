import { CurrentUser } from './../../auth/currentuser';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";





@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage implements OnInit {
  submitted = false;
  supportMessage: string;

  id: any;
  data: any;
  user: any = {name: '', email: '', password_digest: '' };
  current: CurrentUser = new CurrentUser()

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public formsModule: FormsModule,
    public reactiveFormsModule: ReactiveFormsModule  

  ) { }

  ngOnInit() {     
    console.log(this.current.getUser())
    this.id = this.current.getUser() 

    this.authService.getItem(this.id).then(response => {        
      this.data = response;  
      this.user ={
        name: this.data.name,
        email: this.data.email,
        password: this.data.password_digest
      }     
    })

  }

  update() {       
    //Update item by taking id and updated data object
    this.authService.updateItem(this.id,{user: this.user}).subscribe(response => {
      this.router.navigate(['/login']);
    })
  }

}
