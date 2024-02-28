import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get(this.apiUrl + '/students/').pipe(catchError((error:
      HttpErrorResponse)=>{
        if(error.status != 200){
          return EMPTY;
        }else{
          return throwError(error);
        }
      }));
  }

  create(student:Student):Observable<any>{
    return this.httpClient.post(this.apiUrl+'/students/',JSON.stringify(student), this.httpOptions).pipe(catchError((error:
      HttpErrorResponse)=>{
        if(error.status != 200){
          return EMPTY;
        }else{
          return throwError(error);
        }
      }));
  }

  find(id:string):Observable<any>{
    return this.httpClient.get(this.apiUrl+'/students/'+id).pipe(catchError((error:
      HttpErrorResponse)=>{
        if(error.status != 200){
          return EMPTY;
        }else{
          return throwError(error);
        }
      }));
  }

  update(id:string, student:Student):Observable<any>{
    return this.httpClient.put(this.apiUrl+'/students/'+id,JSON.stringify(student), this.httpOptions).pipe(catchError((error:
      HttpErrorResponse)=>{
        if(error.status != 200){
          return EMPTY;
        }else{
          return throwError(error);
        }
      }));
  }

  delete(id:string){
    return this.httpClient.delete(this.apiUrl+'/students/'+id).pipe(catchError((error:
      HttpErrorResponse)=>{
        if(error.status != 200){
          return EMPTY;
        }else{
          return throwError(error);
        }
      }));
  }
}
