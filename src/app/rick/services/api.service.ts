import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseURL='https://rickandomortyapi.com/api'
options={
  Headers:new HttpHeaders({
    'content-type':'application/json'
  }),
}

  constructor(private http:HttpClient) { }
  getCharacters(){
    return this.http.get(this.baseUrl+'/character',this.options)
  }
}


