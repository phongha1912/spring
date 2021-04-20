package com.logigear.crm.career.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.logigear.crm.career.model.User;
import com.logigear.crm.career.payload.LoginRequest;
import com.logigear.crm.career.payload.SignUpRequest;
import com.logigear.crm.career.payload.UserResponse;
import com.logigear.crm.career.security.JwtProvider;
import com.logigear.crm.career.service.UserService;
import com.logigear.crm.career.util.AppConstants;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtProvider tokenProvider;
	private UserService userService;

	@Autowired
	public AuthController(AuthenticationManager authenticationManager, JwtProvider tokenProvider,
						  UserService userService) {
		this.authenticationManager = authenticationManager;
		this.tokenProvider = tokenProvider;
		this.userService = userService;
	}

	@PostMapping("/signin")
	public ResponseEntity<UserResponse> authenticateUser(@Valid @RequestBody LoginRequest req) {
		Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                		req.getEmail(),
                		req.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User)authentication.getPrincipal();
        String token = tokenProvider.generateToken(user);
        
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set(AppConstants.TOKEN_RESPONSE_HEADER_NAME, AppConstants.TOKEN_PREFIX + token);
        return ResponseEntity.ok()
        		.headers(responseHeaders)
        		.body(new UserResponse((User)authentication.getPrincipal()));
	}
	
    @PostMapping("/signup")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<UserResponse> signup(@Valid @RequestBody SignUpRequest req) {
    	
    	User user = userService.signup(req);
    	String token = tokenProvider.generateToken(user);
    	HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set(AppConstants.TOKEN_RESPONSE_HEADER_NAME, AppConstants.TOKEN_PREFIX + token);
        return ResponseEntity.ok()
         		.headers(responseHeaders)
         		.body(new UserResponse(user));
	}
}
