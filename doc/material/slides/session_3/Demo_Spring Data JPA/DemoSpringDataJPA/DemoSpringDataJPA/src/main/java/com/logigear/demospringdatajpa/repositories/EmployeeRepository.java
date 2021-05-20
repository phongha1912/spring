package com.logigear.demospringdatajpa.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.logigear.demospringdatajpa.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String>{
	@Query("Select e FROM Employee e WHERE e.fullname like ?1")
	Optional<List<Employee>> findEmployeeByLikeFullName(String searchName);
}
