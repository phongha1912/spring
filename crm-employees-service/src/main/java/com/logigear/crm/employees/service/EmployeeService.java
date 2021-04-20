package com.logigear.crm.employees.service;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.logigear.crm.employees.model.EmployeeDetails;
import com.logigear.crm.employees.model.EmployeeDetailsDTO;
import com.logigear.crm.employees.model.EmployeeMapper;
import com.logigear.crm.employees.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private EmployeeMapper mapper;
	
	private static Map<Long, String> images = new HashMap<Long, String>();
	
	public EmployeeDetails getEmployeeDetails(Long id) {
		EmployeeDetails emp = employeeRepository.findById(id).get();
		emp.setImage(this.getImage(id));
		return emp;
	}
	
	public List<EmployeeDetails> getEmployees() {
		return employeeRepository.findAll().stream().map((emp) -> {
			emp.setImage(this.getImage(emp.getId()));
			return emp;
		}).collect(Collectors.toList());
	}
	
	public EmployeeDetails updateEmployeeDetails(EmployeeDetailsDTO employee) {	
		EmployeeDetails emp = employeeRepository.findById(employee.getId()).get();
		employee.setImage(null);
		mapper.updateEmployeeFromDto(employee, emp);
	    return employeeRepository.save(emp);
	}
	
	public String getImage (Long id) {
		if (images.containsKey(id)) {
			return images.get(id);
		}
		
		byte[] fileContent = null;
		try {
			ClassPathResource imgFile = new ClassPathResource("image/" + id + ".png");
			fileContent = FileUtils.readFileToByteArray(imgFile.getFile());
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		String encodedString = Base64.getEncoder().encodeToString(fileContent);
		images.put(id, "data:image/png;base64," + encodedString);
		return encodedString;
	}
}
