package com.nissan.repo;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.nissan.model.Role;


public interface IRoleRepo extends JpaRepositoryImplementation<Role, Integer>{
	
}
