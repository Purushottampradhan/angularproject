import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Input() list: any;
  constructor(private userservice:UserService) {
    this.userservice.getdata().subscribe((list) => {
      console.log(list);
      this.list = list;
    });
  }
  ngOnInit(): void {
  
  }
  ondelete(id: any) {
    this.userservice.deletedata(id).subscribe((res) => {
      // this.userservice.getdata()
      this.userservice.getdata().subscribe((list) => {
        this.list = list;
        console.log(res);
      });
    });
  }
  onedit(editdata:any){
    console.log(editdata);
  }
}
