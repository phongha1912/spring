package com.logigear.crm.career.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logigear.crm.career.model.Role;
import com.logigear.crm.career.service.RoleService;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

	private RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping
    public List<Role> getRoles() {
    	return roleService.getRoles();
    }
    
}
