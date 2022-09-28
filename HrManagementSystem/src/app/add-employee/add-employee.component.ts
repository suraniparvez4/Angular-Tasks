import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import{ FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  EmpForm:FormGroup
  
  constructor(private employeeService:EmployeeService,
    private formBuilder:FormBuilder, private router:Router
    ) { 
      this.EmpForm=this.formBuilder.group({
        id:'',
        name:'',
        email:'',
        mobile:'',
        gender:'',
      })
  }
  
  empList: Employee[] =[];

  ngOnInit(): void {
    this.EmpForm = this.formBuilder.group({
      id: '',
      // name:  new FormControl('',[Validators.required,Validators.minLength(5),]),
      name:  new FormControl('',[Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      gender: ['', [Validators.required]],
    });

    this.empList = this.employeeService.getEmployees();
    // this.initForm();
  //  var  item = this.employeeService.getEmployees();
  }

  private initForm() {
    this.EmpForm = new FormGroup({
      'name': new FormControl(null, Validators.required)
    });
  }

  
  onSubmit(){ 
    var demo = this.EmpForm.value;
    // Object.values(demo);
    console.log(demo);
    this.empList.push(demo)
    console.log(this.empList);
    this.router.navigate(['/']);
  }

}
