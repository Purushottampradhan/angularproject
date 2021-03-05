import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
