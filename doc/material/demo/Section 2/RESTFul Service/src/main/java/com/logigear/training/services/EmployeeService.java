package com.logigear.training.services;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logigear.training.entities.Employee;
import com.logigear.training.repositories.EmployeeRepository;

@Service
public class EmployeeService {
	private final EmployeeRepository repository;
	@Autowired
	public EmployeeService(EmployeeRepository repository) {
		this.repository = repository;
	}

	public List<Employee> getAll() {
		return this.repository.getAll();
	}
	
	public List<Employee> getByLikeFullname(String fullname) {
		return this.repository.findByLikeFullname(fullname);
	}
	
	public Employee getById(String username) {
		return this.repository.getEmployeeByUsername(username);
	}
	
	public boolean update(Employee requestedEmp, String username) {
		return this.repository.update(requestedEmp,username);
	}
	
	public boolean add(Employee emp) {
		return this.repository.add(emp);
	}
	
	public void delete(String username) {
		this.repository.delete(username);
	}
	
}
