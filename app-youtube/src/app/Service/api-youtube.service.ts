import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiYoutubeService {

  api = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }
CreateVideo(body:any){
  return this.http.post(`${this.api}/videos/`,body);
}
AllVideo(){
  return this.http.get(`${this.api}/videos/`);
}
OneVideo(id:any){
  return this.http.get(`${this.api}/videos/${id}`);
}
UpdateVideo(id:any,body:any){
  return this.http.put(`${this.api}/videos/${id}`,body);
}
DeleteVideo(id:any){
  return this.http.delete(`${this.api}/videos/${id}`);
}
pdf(){
  const headers = new HttpHeaders({ 'Content-Type':'application/json'});
  const opcion ={headers: headers, responseType: 'blob' as 'json'};
  return this.http.get(`${this.api}/show1`,opcion);
}

}
