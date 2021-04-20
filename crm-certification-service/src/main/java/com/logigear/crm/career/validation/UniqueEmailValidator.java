package com.logigear.crm.career.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.logigear.crm.career.repository.UserRepository;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

	@Autowired 
	UserRepository userRepository;

	@Override
	public boolean isValid(String email, ConstraintValidatorContext context) {
		return !userRepository.existsByEmail(email);
	}

}
