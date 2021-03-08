import { Component, OnInit, Input } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { UserService } from '../user.service';
import {InputFormComponent} from "../input-form/input-form.component"

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {


  @Input() list: any;
  constructor(private userservice: UserService) {
    //get data call when student list load
    this.userservice.getdata().subscribe(
      (list) => {
        console.log(list);
        this.list = list;
      },
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {}
  //delete function
  ondelete(id: any) {
    this.userservice.deletedata(id).subscribe(
      (res) => {
        this.userservice.getdata().subscribe((list) => {
          this.list = list;
          console.log(res);
        });
      },
      (err) => console.log(err)
    );
  }
//edit function 
  onedit(user: any) {
    // console.log(user)
    this.userservice.currentdata(user).subscribe(
      (result) => {
        // console.log(result);
      },
      (err) => console.log(err)
    ); 
    
  }
}
