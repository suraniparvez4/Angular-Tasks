import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: number = 0;
  EmpForm: FormGroup
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private ro:Router,
    private formBuilder: FormBuilder
    ) {
      this.EmpForm = this.formBuilder.group({
        id: '',
      name:  new FormControl('',[Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      gender: ['', [Validators.required]],
      })
    }

  empList: Employee[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.EmpForm.get('id')?.setValue(params['id']);
        const data = this.employeeService.getUsersByID(this.id);
        if (data) {
          this.EmpForm.setValue(data);
        }
      }
    });
  }
  onSubmit() {
    this.employeeService.EditUser(this.EmpForm.value);
    this.ro.navigate(['/employees']);
  }

}
