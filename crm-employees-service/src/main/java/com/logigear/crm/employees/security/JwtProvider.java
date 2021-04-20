package com.logigear.crm.employees.security;

import java.util.ArrayList;
import java.util.Date;
import java.util.Objects;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

	@Autowired
	private AppProperties properties;
	

	public Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(properties.getJwt().getSecret()).parseClaimsJws(token).getBody();
	}

	public Long getUserIdFromToken(String token) {
		return Long.parseLong(getAllClaimsFromToken(token).getSubject());
	}
	
	public String getEmailFromToken(String token) {
		return Objects.toString(getAllClaimsFromToken(token).get("email"), "");
	}
	
	public String getPasswordFromToken(String token) {
		return Objects.toString(getAllClaimsFromToken(token).get("password"), "");
	}

	public ArrayList<String> getRolesFromToken(String token) {
		return (ArrayList<String>) getAllClaimsFromToken(token).get("roles");
	}

	public Date getExpirationDateFromToken(String token) {
		return getAllClaimsFromToken(token).getExpiration();
	}

	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}

	public Boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(properties.getJwt().getSecret()).parseClaimsJws(token);
			return !isTokenExpired(token);
		} catch (SignatureException ex) {
			logger.error("Invalid JWT signature");
		} catch (MalformedJwtException ex) {
			logger.error("Invalid JWT token");
		} catch (ExpiredJwtException ex) {
			logger.error("Expired JWT token");
		} catch (UnsupportedJwtException ex) {
			logger.error("Unsupported JWT token");
		} catch (IllegalArgumentException ex) {
			logger.error("JWT claims string is empty.");
		}
		return false;

	}
}
