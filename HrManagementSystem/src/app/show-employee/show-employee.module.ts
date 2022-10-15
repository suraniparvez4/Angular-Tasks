import { EmployeeComponent } from './show-employee.component';
import { NgModule } from "@angular/core";
import { EmployeeRoutingModule } from './show-employee-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@NgModule({
  declarations:[EmployeeComponent,AddEmployeeComponent,EditEmployeeComponent],
  imports:[EmployeeRoutingModule,ReactiveFormsModule,FormsModule,CommonModule
    ]
})
export class EmployeeModule{}
