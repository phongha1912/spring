package com.logigear.crm.career.config;

import java.util.List;

import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.logigear.crm.career.exception.ErrorResponseComposer;
import com.logigear.crm.career.exception.GlobalErrorAttributes;
import com.logigear.crm.career.exception.handler.AbstractExceptionHandler;
import com.logigear.crm.career.util.MessageUtil;

@Configuration
@ComponentScan(basePackageClasses=AbstractExceptionHandler.class)
public class ExceptionConfig {

	@Bean
	public <T extends Throwable> ErrorAttributes errorAttributes(ErrorResponseComposer<T> errorResponseComposer) {
		return new GlobalErrorAttributes<>(errorResponseComposer);
	}
	
	@Bean
	public <T extends Throwable> ErrorResponseComposer<T> errorResponseComposer(List<AbstractExceptionHandler<T>> handlers) {
		return new ErrorResponseComposer<>(handlers);
	}

	@Bean
	public MessageUtil getMessageUtil(MessageSource messageSource) {
		return new MessageUtil(messageSource);
	}
}
