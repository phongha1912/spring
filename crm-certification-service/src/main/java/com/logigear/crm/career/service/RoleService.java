package com.logigear.crm.career.service;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.logigear.crm.career.model.Role;
import com.logigear.crm.career.repository.RoleRepository;

@Service
public class RoleService {
	
	private RoleRepository roleRepository; 
	
	public List<Role> getRoles() {
		return roleRepository.findAll();
	}
}
