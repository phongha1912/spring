package com.logigear.crm.career;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.logigear.crm.career.exception.AppException;
import com.logigear.crm.career.model.Role;
import com.logigear.crm.career.model.RoleName;
import com.logigear.crm.career.model.User;
import com.logigear.crm.career.property.AppProperties;
import com.logigear.crm.career.repository.RoleRepository;
import com.logigear.crm.career.repository.UserRepository;

@SpringBootApplication
@EnableConfigurationProperties({
    AppProperties.class
})
@EntityScan(basePackageClasses = { 
	CareerApplication.class,
	Jsr310JpaConverters.class 
})
public class CareerApplication {
	
	private UserRepository userRepository;
	private RoleRepository roleRepository;
	private AppProperties properties;
	private PasswordEncoder passwordEncoder;

	@Autowired
	public CareerApplication(UserRepository userRepository, RoleRepository roleRepository,
							 AppProperties properties, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
		this.properties = properties;
		this.passwordEncoder = passwordEncoder;
	}

	public static void main(String[] args) {
        SpringApplication.run(CareerApplication.class, args);
	}

	@EventListener
	public void afterApplicationReady(ApplicationReadyEvent event) {
		
		if(!roleRepository.existsByName(RoleName.ADMIN)) {
			final Role adminRole = new Role();
			adminRole.setName(RoleName.ADMIN);
			roleRepository.save(adminRole);
		}
		
		if(!roleRepository.existsByName(RoleName.USER)) {
			final Role userRole = new Role();
			userRole.setName(RoleName.USER);
			roleRepository.save(userRole);
		}
		
		if (!userRepository.existsByEmail(properties.getAdmin().getEmail())) {
    		final User user = new User();
    	    user.setEmail(properties.getAdmin().getEmail());
    		user.setPassword(passwordEncoder.encode(properties.getAdmin().getPassword()));
    		Role userRole = roleRepository.findByName(RoleName.ADMIN)
                    .orElseThrow(() -> new AppException("Admin Role not set."));
    		user.setRoles(Collections.singleton(userRole));
    		userRepository.save(user);
    	}
	}
}
