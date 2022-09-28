import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empList: Employee[] = [{
    id: 1,
    name: 'James',
    email: 'James@gmail.com',
    mobile: '9856112233',
    gender: 'Male'

  }];

  constructor() { }
  getEmployees() {
    return this.empList
  }
  removeUser(id: number) {
    this.empList = this.empList.filter(x => x.id != id);
  }
  getUsersByID(id: number ) {
    return this.empList.find(x => x.id == id)
  }
  EditUser(employee:Employee) {
    const userIndex = this.empList.findIndex(x => x.id == employee.id);
        if (userIndex != null && userIndex != undefined) {
            this.empList[userIndex] = employee;
        }
  }
}
