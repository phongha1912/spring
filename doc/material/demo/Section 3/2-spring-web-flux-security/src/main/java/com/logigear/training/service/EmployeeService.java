package com.logigear.training.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logigear.training.mapper.EmployeeMapper;
import com.logigear.training.model.Employee;
import com.logigear.training.repository.EmployeeRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository repository;
	
	@Autowired
	private EmployeeMapper mapper;
	
	public Mono<Employee> add(Employee e) {
		return repository.save(e);
	}
	
	public Flux<Employee> findAll() {
		return repository.findAll();
	}
	
	public Mono<Employee> findByUsername(String username) {
		return repository.findByUsername(username);
	}
	
	public Mono<Void> delete(String username) { 
		return repository.deleteByUsername(username);
	}
	
	public Mono<Employee> updateEmployeeByUsername(String username, Employee emp) {
		return repository.findByUsername(username).flatMap(e -> {
			mapper.updateEmployeeFromDTO(emp, e);
			return repository.save(e);
		});
	}

}
