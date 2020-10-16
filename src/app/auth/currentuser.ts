import jwt_decode from "jwt-decode";
 //Comando para instalar o decode e pegar o id npm install jwt-decode

export class CurrentUser{

   id:any

   getUser(){     
      try {
        const jwt = localStorage.getItem('token');     
        let obj = jwt_decode(jwt); //Função que pega o usuário logado
        this.id = JSON.stringify(obj.user_id);        
        return this.id
      } catch (ex) {
        return null;
      }     
   }

}