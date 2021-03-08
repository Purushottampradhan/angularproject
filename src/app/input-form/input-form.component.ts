import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  isedit: any;
  userobj = {
    name: '',
    class: '',
    id: '',
  };
  @Input() userdata: any;
  constructor(private userservice: UserService) {
    this.userobj = this.userservice.myuserobj;
    this.isedit = this.userservice.isedit;
  }

  ngOnInit(): void {}
  onSubmit(data: any) {
    this.userservice.postdata(data).subscribe(
      (data) => {
        console.log(data);
        alert('submited');
      },
      (err) => console.log('inout error type ' + err)
    );
  }
  onUpdate(data: any) {
    this.isedit = !this.isedit;
    console.log(this.userobj);
    this.userservice.putdata(this.userobj).subscribe(
      (data) => {
        console.log(data);
        alert('user updated');
      },
      (err) => console.log(err)
    );
  }
  cancle() {
    this.isedit = false;
  }
}
