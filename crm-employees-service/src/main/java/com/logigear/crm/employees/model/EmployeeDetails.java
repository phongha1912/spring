package com.logigear.crm.employees.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="employeesdetails", uniqueConstraints = {
		@UniqueConstraint(columnNames = {"id"})
})
@Getter @Setter @ToString
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotBlank
	@Size(max = 40)
	private String fullName;
	
	// Personal Info
	private Instant birthDay;
	
	@NotBlank
	private String placeOfBirth;
	
	@NotBlank
	@Size(max = 10)
	private String gender;

	private Long idNumber;
	
	private Instant issueDate;
	
	@NotBlank
	@Size(max = 20)
	private String race;
	
	@Size(max = 20)
	private String religion;
	
	private String marriedStatus;

	private Long cellPhone;

	private Long taxID;

	private Long insuranceBookNo;
	
	private String address;
	
	// Payment info
	@NotBlank
	private String bankName;

	private Long bankAccount;
	
	private String image;
	
	// Education
	@NotEmpty
	private String degree;
	private String major;
	
	// At company
	private int employeeID;

	private Instant startDate;

	private Instant contractedDate;
	@NotBlank
	private String department;
	private String jobTitle;
	
	// ?? id of Manager
	private Long manager;
}
