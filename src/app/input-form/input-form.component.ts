import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor(private userservice:UserService) {}

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.userservice.postdata(data).subscribe((data)=>{
      console.log(data);
      alert('submited');
    })
  }

}
