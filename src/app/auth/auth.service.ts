import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/User';
import { ConnectionUrl } from './connectionurl';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Recebe a url da classe ConnectionUrl
  link: ConnectionUrl = new ConnectionUrl()

  // Concatena a url com a rota
  private url = this.link.urlconnection + 'api/v1/users';

  constructor(private http: HttpClient) { }

  users: any

  // Do this on service. But for this demo lets do here
  token: any = localStorage.getItem('token');
  headers: any = new HttpHeaders({
    Authorization: 'Bearer ' + this.token
  });

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  //Método de cadastrar o usuário
  register(user: User) {
    // return this.http.post(`${this.url}/create`, user);
    return this.http.post(`${this.url}`, user);
  }

  //Método de login
  login(credentials: any): Observable<string> {
    console.log(credentials)
    return this.http.post<{ token: string }>(`${this.url}/login`, credentials).pipe(
      map(response => response.token)
    );
  }

  // Método de atualizar usuário
  updateItem(id, item): Observable<any> {
    this.httpOptions.headers =
      this.httpOptions.headers.set('Authorization', this.token);
    return this.http
      .put<any>(this.url + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Busca um usuário pelo id
  getItem(id) {
    return new Promise(resolve => {
      this.http.get(this.url + '/' + id,
        { headers: this.headers }).subscribe(data => {
          resolve(data);
          this.users = data;
        }, err => {
          // Caso aconteça algum problema
          console.log(err);
          // Verifica se está online
          // if (navigator.onLine) {
          //   // Da um reload na página para forçar a pegar o token caso estaja conectado a internet
          //   document.location.reload(true)
          // }
          // else {
          //   // Se não estiver conectado exibe essa mensagem de erro
          //   alert("Você deve estar conectado á internet")
          // }
          ;
        });
    });

  }

  // Busca todos os usuário
  getAll() {
    return new Promise(resolve => {
      this.http.get(this.url,
        { headers: this.headers }).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });

  }

  //Fim


}
