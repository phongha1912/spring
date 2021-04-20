package com.logigear.crm.employees.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.logigear.crm.employees.model.EmployeeDetails;
import com.logigear.crm.employees.model.EmployeeDetailsDTO;
import com.logigear.crm.employees.service.EmployeeService;

@RestController	
@RequestMapping("/api/employees")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@PreAuthorize("permitAll()")
	@GetMapping(value = "{id}")
	public EmployeeDetails getDetails(@PathVariable(name = "id") Long id) {        
        return employeeService.getEmployeeDetails(id);
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping()
	public List<EmployeeDetails> getAll() {        
        return employeeService.getEmployees();
	}
	
	//@PreAuthorize("hasRole('ADMIN')")
	@RequestMapping(value = "/update", method= RequestMethod.PATCH,
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public EmployeeDetails updateEmployeeDetails(@RequestBody EmployeeDetailsDTO req) {
    	return employeeService.updateEmployeeDetails(req);
	}

}
