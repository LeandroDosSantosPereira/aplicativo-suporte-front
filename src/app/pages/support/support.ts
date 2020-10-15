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

  id: number;
  data: any;
  user: any = {name: '', email: '', password_digest: '' };
  

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
    // this.id = this.activatedRoute.snapshot.params["id"];   
    this.authService.getItem(10).then(response => { 
      // console.log(response)    
      this.data = response;  
      this.user ={
        name: this.data.name,
        email: this.data.email,
        password: this.data.password_digest
      }     
    })

    try {
      const jwt = localStorage.getItem('token');
      //************************/ Comando para instalar o decode e pegar o id npm install jwt-decode
      console.log("Usuário decodificado: ");
      console.log(jwt_decode(jwt));
    } catch (ex) {
      return null;
    }


  }

  update() {       
    //Update item by taking id and updated data object
    this.authService.updateItem(10,{user: this.user}).subscribe(response => {
      this.router.navigate(['/login']);
    })
  }

}
