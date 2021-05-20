package com.logigear.training.repository;

import org.springframework.data.r2dbc.repository.Modifying;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.logigear.training.model.Employee;

import reactor.core.publisher.Mono;

@Repository
public interface EmployeeRepository extends ReactiveCrudRepository<Employee, Integer> {
	@Modifying
	Mono<Void> deleteByUsername(String username);
	Mono<Employee> findByUsername(String username);
}
