import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  empList: Employee[] =[];


  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.empList = this.employeeService.getEmployees();
  }
  remove(id: number) {

    this. employeeService.removeUser(id);
  
    this.empList = this.employeeService.getEmployees();
  
  }
  
  Edit(id: number) {
  
  }

}
