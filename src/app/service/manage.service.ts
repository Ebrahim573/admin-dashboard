import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { manage } from '../model/manage';
@Injectable({
  providedIn: 'root'
})
export class ManageService {
base_Url=" http://localhost:3000/jsonmanage";
  constructor(private http:HttpClient) { }



httpOptions={
  headers:new HttpHeaders({
    'content-type':'application/json'
  })
}

handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error('an error occurred:', error.error.message);}
else{
  console.error('backend retured code ${error.status}',+'body was:${error.error}');
}
    return throwError('Something bad happened try again later');
  };

createItem(item:any):Observable<manage>{
   return this.http.post<manage>(this.base_Url,JSON.stringify(item),this.httpOptions)
  .pipe(retry(2),catchError(this.handleError))
}


getList(item: any):Observable<manage>{
  return this.http.get<manage>(this.base_Url).pipe(retry(2),catchError(this.handleError))
}
getItem(id:string):Observable<manage>{
  return this.http.get<manage>(this.base_Url+'/'+id).pipe(retry(2),catchError(this.handleError))
}
  updateItem(id:string, item: any): Observable<manage>{
    return this.http.put<manage>(this.base_Url+'/'+id, JSON.stringify(item), this.httpOptions).pipe(retry(2),catchError(this.handleError))

  }
  deleteItem(id:string){
    return this.http.delete<manage>(this.base_Url+'/'+id, this.httpOptions).pipe(retry(2),catchError(this.handleError))
  }
}


