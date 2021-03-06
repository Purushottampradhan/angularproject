import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
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
  // currentdata(id: any) {
  //   console.log(id)
  //   return this.http.get(this.url + '/' + id)
  //     .pipe(catchError(this.handleError));
  // }
  handleError(error: any) {
    return throwError(error.message || 'server error');
  }
}
