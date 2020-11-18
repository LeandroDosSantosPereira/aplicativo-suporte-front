import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthService } from '../../auth/auth.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: any = {name: '', username: '', password_digest: '', admin: false };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async onSignup(form: NgForm) {  
    // this.submitted = true;
    //Objeto signup
    this.signup = {user:{ name: form.value.name,
     email: form.value.username,
     password: form.value.password,
     admin: form.value.admin 
    }};    
    const loading = await this.loadingCtrl.create({ message: 'Registering...' });
    await loading.present();
    //Envia objeto signup para o metodo register na classe authservice para salvar o usuário criado
    this.authService.register(this.signup).subscribe(
     // Se sucesso redireciona para página home
      async () => {
        const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: 'dark' });
        await toast.present();
        loading.dismiss();
        form.reset();
        this.router.navigateByUrl('/app/tabs/schedule');
      },
      // Caso não tiver sucesso exibe msg de erro
      async () => {
        const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
        loading.dismiss();
        await alert.present();
      }
    );  
    console.log(this.signup)
  }
  
}
