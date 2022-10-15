import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeComponent } from './show-employee.component';

const routes: Routes = [
  {
    path : '',
    component : EmployeeComponent
  },
  {path:'add',component:AddEmployeeComponent},
  {path:'edit/:id',component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
