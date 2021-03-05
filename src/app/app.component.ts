import { Component } from '@angular/core';
import { UserService } from './user.service';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Form';
  // data:any;
  constructor(private http:HttpClient){
    // console.log(this.userservice.getdata())
    // this.data=this.userservice.getdata()
  }
  // url ='https://us-central1-services-example-39773.cloudfunctions.net/app/api/students';
  // onSubmit(data:any){
  //   this.http.post(this.url,data).subscribe((result)=>{
  //     console.log(result)
  //   })
    // console.log(data)
  // }
  
}
