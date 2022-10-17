import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  //template: '<h1>Hey Emp Component</h1>',
  templateUrl: './parvez.component.html',
  selector: 'emp',
})
export class ParvezComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      empFirstName: ['', Validators.required],
      empLastName: ['', Validators.maxLength(4)],
      address: this.formBuilder.group({
        city: [''],
        state: [''],
      }),
      hobbies: this.formBuilder.array([]),
    });
  }
  addHobby() {
    const hobby = this.employeeForm.controls.hobbies as FormArray;
    hobby.push(
      this.formBuilder.group({
        hobbieName: [''],
      })
    );
  }

  onSubmit() {
    // console.log(this.employeeForm.controls.hobbies.value.hobbyName);
    console.log(this.employeeForm);
  }
}
