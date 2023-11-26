package com.nagarro.exittest.ProductCatalog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.ProductCatalog.dao.ProductDao;
import com.nagarro.exittest.ProductCatalog.domain.Product;

@Service
public class ProductService {

	@Autowired
	private ProductDao productDao;

	public Product createProduct(Product product) throws Exception {
		return this.productDao.save(product);
	}

	public Product getMatchingProducts(int id) {
		Product product = this.productDao.getProductById(id);
		return product;

	}

	public List<Product> getAllProducts() {
		List<Product> product = this.productDao.findAll();
		return product;
	}

	public List<Product> getProductByProductCode(Long product_code) {
		List<Product> product = this.productDao.getProductByProductCode(product_code);
		return product;
	}
	public List<Product> getProductByProductName(String product_name) {
		List<Product> product = this.productDao.getProductByProductName(product_name);
		return product;
	}
	public List<Product> getProductByBrand(String brand) {
		List<Product> product = this.productDao.getProductByBrand(brand);
		return product;
	}


	public boolean getMatchingProducts(Long pincode, int id) {
		try {
			Product product = this.productDao.getProductById(id);
			String isServiceable = product.getServiceability();
			System.out.println(isServiceable);
			if (isServiceable.equalsIgnoreCase("Yes")) {
				if (pincode % 2 == 0) {
					return true;
				}

				else {
					return false;
				}
			} else {
				return false;
			}

		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}

}
