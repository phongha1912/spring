package com.logigear.training.security;

import com.logigear.training.model.Employee;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserPrincipal extends Employee implements UserDetails {
    private static final long serialVersionUID = -6572014278512709432L;

    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(String username, Collection<? extends GrantedAuthority> authorities) {
        super();
        super.setUsername(username);
        this.authorities = authorities;
    }

    public UserPrincipal(String username) {
        super();
        super.setUsername(username);
    }

    public UserPrincipal(Employee user) {
        super.setPassword(user.getPassword());
        super.setUsername(user.getUsername());
        super.setFullname(user.getFullname());
        super.setRole(user.getRole());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }


    @Override
    public String getUsername() {
        return super.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
