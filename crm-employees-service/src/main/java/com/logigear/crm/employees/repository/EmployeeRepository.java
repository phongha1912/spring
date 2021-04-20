package com.logigear.crm.employees.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.logigear.crm.employees.model.EmployeeDetails;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeDetails, Long>{
	Optional<EmployeeDetails> findById(Long id);
	List<EmployeeDetails> findAll();
}
