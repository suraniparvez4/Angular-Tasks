import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormArrayName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AddEmployeeRoutingModule } from "./add-employee-routing.module";
import { CommonModule } from "@angular/common";
import { AppModule } from "../app.module";

@NgModule({
  declarations:[],
  imports:[AddEmployeeRoutingModule,ReactiveFormsModule,FormsModule,CommonModule]
})
export class AddEmployeeModule{}
