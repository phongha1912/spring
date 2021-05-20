package com.logigear.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logigear.training.model.Employee;
import com.logigear.training.service.EmployeeService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@PostMapping
	public Mono<ResponseEntity<Mono<Employee>>> addNewEmployee(@RequestBody Employee e) {
		return Mono.just(ResponseEntity.status(HttpStatus.CREATED).body(service.add(e)));
	}
	
	@GetMapping
	public Mono<ResponseEntity<Flux<Employee>>> getAllEmployees() {
		return Mono.just(ResponseEntity.ok(service.findAll()));
	}
	
	@DeleteMapping("{username}")
	public Mono<ResponseEntity<Mono<Void>>> deleteEmployee(@PathVariable("username") String username) {
		return Mono.just(ResponseEntity.ok(service.delete(username)));
	}
	
	@GetMapping("{username}")
	public Mono<ResponseEntity<Mono<Employee>>> getEmployee(@PathVariable("username") String username) {
		return Mono.just(ResponseEntity.ok(service.findByUsername(username)));
	}
	
	@PatchMapping("{username}")
	public Mono<ResponseEntity<Mono<Employee>>> updateEmployee(@PathVariable("username") String username,
			@RequestBody Employee e) {
		return Mono.just(ResponseEntity.ok(service.updateEmployeeByUsername(username, e)));
	}

}
