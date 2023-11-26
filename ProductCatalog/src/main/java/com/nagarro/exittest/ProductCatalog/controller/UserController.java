package com.nagarro.exittest.ProductCatalog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exittest.ProductCatalog.domain.User;
import com.nagarro.exittest.ProductCatalog.service.UserService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/user/register")
	public User register(@RequestBody User user) throws Exception {
//		System.out.println(user.getFirstName());
		try {
			return this.userService.createUser(user);
		} 
		catch (Exception e) {
			throw new Exception("User with email " + user.getEmail() + " already exists!!");
		}
	}

	@PostMapping("/user/login")
	public boolean login(@RequestBody User user) throws Exception {

		User validUser = userService.fetchUserByEmailAndPassword(user.getEmail(), user.getPassword());

		if (validUser != null) {
			return true;
		} else {
			return false;
		}
	}
	@GetMapping("users/getall")
	public List<User> findAllUser(){
		return this.userService.findAll();
	}
}
