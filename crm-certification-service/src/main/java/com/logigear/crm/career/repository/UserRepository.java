package com.logigear.crm.career.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.logigear.crm.career.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);
    List<User> findByIdIn(List<Long> userIds);
    Boolean existsByEmail(String email);
}
