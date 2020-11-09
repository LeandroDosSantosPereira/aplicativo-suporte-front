import { CurrentUser } from './../../auth/currentuser';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';






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
  
  user: any = {name: '', email: '', password_digest: '', photo: '' };
  current: CurrentUser = new CurrentUser()
  imageSrc: string = '';
  base64Image:any;
 
  ImgUrl: any;
  

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public formsModule: FormsModule,
    public reactiveFormsModule: ReactiveFormsModule,
    private domSanitizer: DomSanitizer  

  ) { }

  ngOnInit() {     

    this.id = this.current.getUser() 

    this.authService.getItem(this.id).then(response => {        
      this.data = response; 
      this.imageSrc = "http://localhost:3000/" + this.data.photo.url  
      this.user ={
        name: this.data.name,
        email: this.data.email,
        password: "" ,
        photo:  this.data.photo

      }     
    })
    
  }


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
    this.user.photo =  this.imageSrc  ;
    console.log(this.imageSrc)
  }

  

  update() {  
    console.log(this.user)    
    //Update item by taking id and updated data object
    this.authService.updateItem(this.id, this.user ).subscribe(response => {     
      this.router.navigate(['/login']);
    })
  }

}
