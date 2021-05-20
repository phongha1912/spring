package com.logigear.demospringdatajpa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logigear.demospringdatajpa.entities.Employee;
import com.logigear.demospringdatajpa.services.EmployeeService;

@RestController
@RequestMapping("/api/v1/Employee")
public class EmployeeController {
	private final EmployeeService service;
	@Autowired
	public EmployeeController(EmployeeService service) {
		this.service = service;
	}
	@GetMapping
	public ResponseEntity<List<Employee>> getAllEmployee(){
		return ResponseEntity.ok(service.getAll());
	}
	@GetMapping("{username}")
	public ResponseEntity<List<Employee>> getEmployeeHaveNameLike(String username){
		return ResponseEntity.ok(service.getEmployeeByLikeFullName(username));
	}
	@PostMapping
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee currentEmployee){
		System.out.println(currentEmployee.getUsername());
		return ResponseEntity.ok(service.AddEmployee(currentEmployee));
	}
	@PatchMapping("{username}")
	public ResponseEntity<Employee> updateEmployeeById(String username,@RequestBody Employee employee){
		return ResponseEntity.ok(service.updateEmployeeById(username, employee));
	}
	@DeleteMapping
	public ResponseEntity<HttpStatus> deleteEmployeeById(String username){
		service.DeleteEmployeeById(username);
		return ResponseEntity.ok().build();
	}
}
