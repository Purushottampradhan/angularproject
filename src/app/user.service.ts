import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  isedit=false;
  myuserobj={
    name:'',
    class:" ",
    id:''
  }
  constructor(private http: HttpClient) {}
  url =
    'https://us-central1-services-example-39773.cloudfunctions.net/app/api/students';
  getdata() {
    //get data from user
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }
  postdata(data: any) {
    return this.http.post(this.url, data).pipe(catchError(this.handleError));
  }
  deletedata(id: any) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
  currentdata(id: any) {
    this.isedit=true;
    this.myuserobj=id;
    console.log(this.myuserobj.id)
    return this.http.get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
  putdata(user:any){
    return this.http.put(this.url + '/' + user.id,user).pipe(catchError(this.handleError));
  }
  handleError(error: any) {
    return throwError(error.message || 'server error');
  }
}
