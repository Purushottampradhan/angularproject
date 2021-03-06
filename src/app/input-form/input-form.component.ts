import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {StudentListComponent} from "../student-list/student-list.component"
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})

export class InputFormComponent implements OnInit {

  userobj={
    name:'',
    class:''
  }

  constructor(private userservice: UserService) { 
    
  }

  ngOnInit(): void {
    
  }
  onSubmit(data: any) {
    this.userservice.postdata(data).subscribe(
      (data) => {
        console.log(data);
        alert('submited');
      },
      (err) => console.log("inout error type "+err)
    );
  }
}
