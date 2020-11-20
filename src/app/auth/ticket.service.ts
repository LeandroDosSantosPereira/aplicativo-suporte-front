import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})


export class TicketService {

  private url = 'http://localhost:3000/api/v1/tickets';
  tickets: any

  constructor(private http: HttpClient) { }

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

  // Pega a lista de todos os tickets
  getTicketList() {
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/v1/tickets',
        { headers: this.headers }).subscribe(data => {
          resolve(data);
          // return data;
        }, err => {
          console.log(err);
        });
    });

  }


  //Método que cria um ticket
  create(t: any) {
    this.httpOptions.headers =
      this.httpOptions.headers.set('Authorization', this.token);
    return this.http.post(`${this.url}`, t, this.httpOptions);
  }

  // Busca um ticket pelo id
  getItemTicket(id) {
    return new Promise(resolve => {
      this.http.get(this.url + '/' + id,
        { headers: this.headers }).subscribe(data => {
          resolve(data);
          this.tickets = data;
        }, err => {
          console.log(err);
        });
    });

  }



}



