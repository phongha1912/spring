import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Employee, EmployeeService} from "../../core";

//Decorator pattern
//DI
@Component({
    selector: 'crm-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    employees$: Observable<Employee[]>;
    displayModal: boolean;
    employee$: Observable<Employee>;

    constructor(private employeeService: EmployeeService) {
        this.displayModal = false;
        this.employee$ = new Observable<Employee>();
        this.employees$ = employeeService.getEmployees();

    }

    ngOnInit(): void {
    }

    showEmpInformation(id: string) {
        this.employee$ = this.employeeService.getEmployee(id);
        this.displayModal = true;
    }
}
