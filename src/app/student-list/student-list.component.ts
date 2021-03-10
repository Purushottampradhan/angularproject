import { Component, OnInit, Input } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { coerceStringArray } from '@angular/cdk/coercion';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Input() list: any;
  constructor(private userservice: UserService, public dialog: MatDialog) {
    //get data call when student list load
    this.userservice.getdata().subscribe(
      (list) => {
        this.list = list;
      },
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {
    this.userservice.isedit = false;
  }
  //delete function
  ondelete(id: any) {
    let dialogref = this.dialog.open(DialogComponent);
    dialogref.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == 'true') {
        this.userservice.deletedata(id).subscribe(
          (res) => {
            location.reload();
          },
          (err) => console.log(err)
        );
      } 
    });
  }
  //edit function
  onedit(user: any) {
    this.userservice.currentdata(user).subscribe(
      (result) => {
        this.userservice.isedit = false;
      },
      (err) => console.log(err)
    );
  }
}
