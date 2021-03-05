import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{InputFormComponent} from "./input-form/input-form.component"
import{StudentListComponent} from "./student-list/student-list.component"
const routes: Routes = [
  {
    path:"input-form",
    component:InputFormComponent
  },
  {
    path:'student-list',
    component:StudentListComponent
  },
  {
    path:'input-form/:id',
    component:InputFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
