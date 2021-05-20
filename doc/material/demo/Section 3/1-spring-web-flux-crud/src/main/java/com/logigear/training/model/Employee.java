package com.logigear.training.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Table("employees")
public class Employee {

	@Id
	@Column("id")
	private Integer id;
	
	@Column("username")
	private String username;
	
	@Column("password")
	private String password;
	
	@Column("fullname")
	private String fullname;
	
	@Column("role")
	private String role;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", username=" + username + ", password=" + password + ", fullname=" + fullname
				+ ", role=" + role + "]";
	}

	public Employee(Integer id, String username, String password, String fullname, String role) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.fullname = fullname;
		this.role = role;
	}

	public Employee() {
	}
	
	
	
}
