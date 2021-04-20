package com.logigear.crm.career.validation;

import java.util.Collection;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidRolesValidator implements ConstraintValidator<ValidRoles, Collection<String>> {

	
    @Override
    public boolean isValid(Collection<String> collection, ConstraintValidatorContext context) {
    	// TODO : implement
        return true;
    }

}