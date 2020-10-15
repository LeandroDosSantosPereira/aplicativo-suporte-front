import { User } from './../../models/User';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: any = { email: '', password: '' };  
  submitted = false;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public userData: UserData,
    public router: Router
  ) { }

  async onLogin(form: NgForm) {     
    this.login = { email: form.value.username, password: form.value.password };
    console.log({user: this.login})
    
     this.submitted = true;

    const loading = await this.loadingCtrl.create({ message: 'Carregando ...' });
    await loading.present();    
    this.authService.login({user: this.login}).subscribe(   
        
      async token => {
        console.log(token)
        localStorage.setItem('token',token);
        loading.dismiss();
        this.router.navigateByUrl('/app/tabs/schedule');
      },
      async () => {
        const alert = await this.alertCtrl.create({ message: 'Senha ou e-mail incorretos, tente novamente', buttons: ['OK'] });
        await alert.present();
        loading.dismiss();
      }
    );

  }

}
