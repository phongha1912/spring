import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private readonly apiService: ApiService,
    private messageService: MessageService) { }

  getEmployees() : Observable<Employee[]> {
    return this.apiService.get(`/v1/employees`);
  }

  getEmloyee(username: any): Observable<Employee> {
    return this.apiService.get(`/v1/employees/${username}`);
  }

  updateEmployee(employee: any): Observable<any> {
    return this.apiService.patch(`/v1/employees/${employee.username}`, employee);
  }

  newEmployee(employee: any): Observable<any> {
    return this.apiService.post(`/v1/employees`, employee);
  }

  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }
}
