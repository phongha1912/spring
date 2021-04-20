package com.logigear.crm.career.exception;

import java.util.Map;

import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.web.context.request.WebRequest;

public class GlobalErrorAttributes<T extends Throwable> extends DefaultErrorAttributes {
	

	private ErrorResponseComposer<T> errorResponseComposer;
	
    public GlobalErrorAttributes(ErrorResponseComposer<T> errorResponseComposer) {
    	super();
		this.errorResponseComposer = errorResponseComposer;
	}

	@Override
	public Map<String, Object> getErrorAttributes(WebRequest request, boolean includeStackTrace) {
		
		Map<String, Object> errorAttributes = super.getErrorAttributes(request, includeStackTrace);		
		addLemonErrorDetails(errorAttributes, request);
		return errorAttributes;
	}
	
	/**
     * Handles exceptions
     */
	@SuppressWarnings("unchecked")
	protected void addLemonErrorDetails(
			Map<String, Object> errorAttributes, WebRequest request) {
		
		Throwable ex = getError(request);
		if(ex != null) {
			errorAttributes.put("exception", ex.getClass().getSimpleName());
			
			errorResponseComposer.compose((T)ex).ifPresent(errorResponse -> {
				
				// check for nulls - errorResponse may have left something for the DefaultErrorAttributes
				if (errorResponse.getMessage() != null)
					errorAttributes.put("message", errorResponse.getMessage());
				
				Integer status = errorResponse.getStatus();
				
				if (status != null) {
					errorAttributes.put("status", status);
					errorAttributes.put("error", errorResponse.getError());
				}
	
				if (errorResponse.getErrors() != null)
					errorAttributes.put("errors", errorResponse.getErrors());	
			});
		}
	}
}