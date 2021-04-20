package com.logigear.crm.career.payload;

import java.util.HashSet;
import java.util.Set;

import com.logigear.crm.career.model.Role;
import com.logigear.crm.career.model.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class UserResponse {

	private Long id;
	private String email;
	private Set<Role> roles = new HashSet<>();
	
	private boolean unverified = false;
	private boolean blocked = false;
	private boolean admin = false;
	private boolean goodUser = false;
	private boolean goodAdmin = false;
	
	public UserResponse(User user) {
		
		id = user.getId();
		email = user.getEmail();
		roles = user.getRoles();
		//TODO
		//unverified = roles.contains(User.Role.UNVERIFIED);
		//blocked = roles.contains(User.Role.BLOCKED);
		//admin = roles.contains(User.Role.ADMIN);
		goodUser = !(unverified || blocked);
		goodAdmin = goodUser && admin;
	}
}
