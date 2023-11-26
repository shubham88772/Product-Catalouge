package com.nagarro.exittest.ProductCatalog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.ProductCatalog.dao.UserDao;
import com.nagarro.exittest.ProductCatalog.domain.User;

@Service
public class UserService {
	
	@Autowired
	private UserDao userDao;

	public User createUser(User user) throws Exception {
		User local = this.userDao.getUserByEmail(user.getEmail());
		if (local != null) {
			System.out.println("User exists");
			throw new Exception("User already present!");
		} else {
			local = this.userDao.save(user);
			return local;
		}
	}

	public User save(User user) {
		return this.userDao.save(user);
	}

	public User showUser(String email) {
		return this.userDao.getUserByEmail(email);
	}

	public User fetchUserByEmailAndPassword(String email, String password) {
		return this.userDao.findByEmailAndPassword(email, password);
	}

	public List<User> findAll() {
		return this.userDao.findAll();
	}

}

