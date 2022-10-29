package com.nissan.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nissan.model.Role;
import com.nissan.model.User;
import com.nissan.repo.IRoleRepo;
import com.nissan.repo.IUserRepository;


@Service
public class UserServiceImlp implements IUserService {

	//field injection
	@Autowired
	IUserRepository userRepo;
	
	@Autowired
	IRoleRepo roleRepo;
	
	/*
	@Autowired
	public UserServiceImpl(IUserRepository _userRepo) {
		this.userRepo = _userRepo;
	}
	*/
	
	//Find All
	@Override
	public List<User> findAllUsers() {
		return (List<User>) userRepo.findAll();
	}

	//Find Username and Password
	@Override
	public User findByUserNameAndPassword(String userName, String password) {
		
		User user = userRepo.findByUserNameAndPassword(userName, password);
		//check condition
		if(userName.equals(user.getUserName()) && password.equals(user.getPassword())) {
			return user;
		}else {
			return null;
		}
		
	}

	//Find By Name
	@Override
	public User searchByName(String fullName) {
		
		User _user = userRepo.searchByName(fullName);
		
		//check condition
		if(fullName.equals(_user.getFullName())) {
			return _user;
		}else {
			return null;
		}
		
	}

	//Add User
	@Transactional
	@Override
	public User addUser(User user) {
		
		return userRepo.save(user);
		
	}

	//Update user
	@Override
	public User updateUser(User user) {
		
		return userRepo.save(user);
	}

	@Override
	public List<Role> findAllRoles() {
		return (List<Role>) roleRepo.findAll();
	}

	//Delete User
	/*
	@Override
	public User deleteUser(String fullName) {
		
			User _user= userRepo.searchByName(fullName);
			if(fullName.equals(_user.getFullName()))  
			{  
			_user.setActive(false);
			userRepo.save(_user);
			return _user; //returns the deleted resource back  
			}  
		return null;  
	}
	*/

	@Override
	public void deleteUser(int userId) {
		userRepo.deleteById(userId);
		
	}

}

