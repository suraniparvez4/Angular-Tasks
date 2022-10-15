import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EditEmployeeRoutingModule } from "./edit-employee-routing.module";

@NgModule({
  declarations:[],
  imports:[BrowserModule,FormsModule,
    ReactiveFormsModule,EditEmployeeRoutingModule]
})
export class EditEmployeeModule{}
