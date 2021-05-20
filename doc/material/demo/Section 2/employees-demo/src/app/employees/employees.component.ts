import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [ EmployeeService ],
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee?: Employee;
  
  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.messageService.add(`EmployeesComponent: Selected employee username=${employee.username}`);
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
}
