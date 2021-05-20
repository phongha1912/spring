package com.logigear.demospringdatajpa.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.logigear.demospringdatajpa.entities.Employee;
import com.logigear.demospringdatajpa.repositories.EmployeeRepository;
@Service
public class EmployeeService {
	private final EmployeeRepository repository;
	
	public EmployeeService(EmployeeRepository repository) {
		this.repository = repository;
	}
	//List ALl Employee in Repository
	public List<Employee> getAll(){
		return this.repository.findAll();
	}
	//Get List Employee have name like or same with arguments
	public List<Employee> getEmployeeByLikeFullName(String fullName){
		return this.repository.findEmployeeByLikeFullName(fullName)
				.orElseThrow(NoSuchElementException::new);
	}
	//Get Employee have username = ?
	public Employee getEmployeeById(String username) {
		return this.repository.findById(username).orElseThrow(NoSuchElementException::new);	
	}
	//Update Employee (find by id)
	public Employee updateEmployeeById(String username, Employee requestEmployee) {
		Optional<Employee> FoundedEmployee = this.repository.findById(username);
		if(FoundedEmployee.isEmpty()) {
			throw new NoSuchElementException();
		}else {
			Employee currentEmployee = FoundedEmployee.get();
			return this.repository.save(currentEmployee);
		}
	}
	//Delete Employee by id
	public void DeleteEmployeeById(String username) {
		this.repository.deleteById(username);
	}
	//Add Employee by Id
	public Employee AddEmployee(Employee currentEmployee) {
		System.out.println(currentEmployee.toString());
		return this.repository.saveAndFlush(currentEmployee);
	}
}
