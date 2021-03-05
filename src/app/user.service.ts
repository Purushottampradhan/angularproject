import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url ='https://us-central1-services-example-39773.cloudfunctions.net/app/api/students';
  getdata() {
    //get data from user

    return this.http.get(this.url);
  }
  postdata(data:any){
    return this.http.post(this.url,data)
  }
  deletedata(id:any){
    return this.http.delete(this.url+'/'+id);
  }

}
