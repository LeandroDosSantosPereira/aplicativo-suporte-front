import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api/v1/users';

  constructor(private http: HttpClient) { }
  
  users:any
   
  // Do this on service. But for this demo lets do here
    token:any = localStorage.getItem('token');
    headers:any = new HttpHeaders({
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


  //Register Method
  register(user: User) {    
    // return this.http.post(`${this.url}/create`, user);
    return this.http.post(`${this.url}`, user);
  }

  //Login Method
  login(credentials: any): Observable<string> {
    console.log(credentials)
    return this.http.post<{ token: string }>(`${this.url}/login`, credentials).pipe(
      map(response => response.token)
    );
  }
 
  updateItem(id, item): Observable<any> {        
    this.httpOptions.headers =
    this.httpOptions.headers.set('Authorization', this.token);
    return this.http
      .put<any>(this.url + '/' + id, JSON.stringify(item) , this.httpOptions )
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getItem(id) {  
  return new Promise(resolve => {
    this.http.get(this.url + '/' + id ,
     { headers: this.headers }).subscribe(data => {
      resolve(data);
      this.users = data;
      // console.log(data)
    }, err => {
      console.log(err);
    });
  }); 

  }

  getAll() {  
    return new Promise(resolve => {
      this.http.get(this.url  ,
       { headers: this.headers }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }); 
  
    }

    //Fim


}
