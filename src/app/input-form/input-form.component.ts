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
  id: any;
  // dataobj: any;
  userobj = {
    name: '',
    class: '',
    id: '',
  };
  @Input() userdata: any;
  constructor(private userservice: UserService, private route: ActivatedRoute) {
    // this.userobj = this.userservice.myuserobj;
    this.isedit = this.userservice.isedit;
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    if (this.id == undefined) {
      // console.log('helllo');
    } else {
      this.getone();
    }
  }
  getone() {
    this.userservice.currentdata(this.id).subscribe(
      (data) => {
        // console.log(data);
        if (data == null) {
          console.log('no data found');
          alert('no data found');
        } else {
          this.userdata = data;
          this.userobj.name = this.userdata.name;
          this.userobj.class = this.userdata.class;
          this.userobj.id = this.userdata.id;
          this.isedit = true;
        }
      },
      (err) => console.log(err)
    );
  }

  onSubmit(data: any) {
    this.userservice.postdata(data).subscribe(
      (data) => {
        console.log(data);
        alert('submited');
        this.userobj.name = '';
        this.userobj.class = '';
      },
      (err) => console.log('input error type ' + err)
    );
  }

  onUpdate(data: any) {
    this.isedit = true;
    console.log(this.userobj);
    this.userservice.putdata(this.userobj).subscribe(
      (data) => {
        alert('user updated sucesfully');
        this.isedit = false;
        this.userobj.name = '';
        this.userobj.class = '';
      },
      (err) => console.log(err)
    );
  }

  cancle() {
    this.isedit = false;
  }

  
}
