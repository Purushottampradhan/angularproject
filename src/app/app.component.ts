import { Component } from '@angular/core';
import { UserService } from './user.service';
import {HttpClient} from "@angular/common/http"
import { MatDialog } from '@angular/material/dialog';
import { StudentListComponent } from './student-list/student-list.component';
import { DialogComponent} from "./dialog/dialog.component"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Form';
  constructor(private http:HttpClient){

  }  
}
