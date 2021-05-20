import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.sass']
})

export class NewEmployeeComponent implements OnInit {
  newEmployeeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private location: Location) {
    
    this.newEmployeeForm = this.fb.group({
      username: [''],
      password: [''],
      fullname: [''],
      role: ['']
    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  new(): void {
    this.employeeService.newEmployee(this.newEmployeeForm.value)
      .subscribe(() => this.goBack());
  }
}
