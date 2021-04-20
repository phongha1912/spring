package com.logigear.crm.employees.model;

import java.time.Instant;

import lombok.Getter;
import lombok.Setter;
@Getter @Setter 
public class EmployeeDetailsDTO {
    private Long id;
	private String fullName;
	private Instant birthDay;
	private String placeOfBirth;
	private String gender;
	private Long idNumber;
	private Instant issueDate;
	private String race;
	private String religion;
	private String marriedStatus;
	private Long cellPhone;
	private Long taxID;
	private Long insuranceBookNo;
	private String address;
	private String bankName;
	private Long bankAccount;
	private String image;
	private String degree;
	private String major;
	private int employeeID;
	private Instant startDate;
	private Instant contractedDate;
	private String department;
	private String jobTitle;
	private Long manager;
}
