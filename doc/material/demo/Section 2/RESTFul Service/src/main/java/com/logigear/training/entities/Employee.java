/**
 * 
 */
package com.logigear.training.entities;
/**
 * @author bang.ngo
 *
 */
public class Employee {

	private String username;
	
	private String password;
	
	private String fullname;
	
	private String role;

	public Employee() {
	}

	public Employee(String username, String password, String fullname, String role) {
		this.username = username;
		this.password = password;
		this.fullname = fullname;
		this.role = role;
	}

	public  String getUsername() {
		return this.username;
	}

	public String getPassword() {
		return this.password;
	}

	public String getFullname() {
		return this.fullname;
	}

	public String getRole() {
		return this.role;
	}

	public void setUsername( String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String toString() {
		return "Employee(username=" + this.getUsername() + ", password=" + this.getPassword() + ", fullname=" + this.getFullname() + ", role=" + this.getRole() + ")";
	}
}
