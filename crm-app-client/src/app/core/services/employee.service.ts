import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Employee } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor ( private apiService: ApiService) {

  }

  getEmployees(): Observable<Employee[]> {
    return this.apiService.get("/employees");
  }

  getEmployee(id:string): Observable<Employee> {
    return this.apiService.get(`/employees/${id}`);
  }

  updateEmployee(id:String, data:any) :  Observable<Employee> {
    return this.apiService.patch(`/employees/update`, data);
  }
}
