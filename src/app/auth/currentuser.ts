import { AlertController, LoadingController, ModalController } from "@ionic/angular";
import jwt_decode from "jwt-decode";

//Comando para instalar o decode e pegar o id npm install jwt-decode

export class CurrentUser {

  id: any
  loading: any
  public alertCtrl: AlertController
  public loadingCtrl: LoadingController
  public modalCtrl: ModalController

  //  Método para pegar o usuário logado
  getUser() {
    // Inicia o alert de  loading
    this.open()
    try {
      const jwt = localStorage.getItem('token');
      let obj = jwt_decode(jwt); //Função que pega o usuário logado
      this.id = JSON.stringify(obj.user_id);
      return this.id
      this.close()
    } catch (ex) {
      return null;
    }
  }

  async open() {
    this.loading = await this.loadingCtrl.create({ message: 'Carregando ...' });
    await this.loading.present();
    
  }


  close() {
    this.loading.dismiss();
  }

}