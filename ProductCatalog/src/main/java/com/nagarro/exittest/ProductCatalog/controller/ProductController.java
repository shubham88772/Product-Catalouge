package com.nagarro.exittest.ProductCatalog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exittest.ProductCatalog.domain.Product;
import com.nagarro.exittest.ProductCatalog.service.ProductService;
@CrossOrigin(origins = {"http://localhost:4200","*"}, allowedHeaders ="*")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;

	@PostMapping("/user/product")
	public Product register(@RequestBody Product product) throws Exception {
		return this.productService.createProduct(product);
	}
	

	@GetMapping("/productcatalog/products/{id}")
	public Product getMatchProduct(@PathVariable("id") int id) throws Exception {
		try {
			System.out.println(id);
			Product product = this.productService.getMatchingProducts(id);
			System.out.println(product);
			return product;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
	
	@GetMapping("/productcatalog/products")
	public List<Product> getAllProduct() throws Exception {
		try {

			List<Product> product = this.productService.getAllProducts();
			System.out.println(product);
			return product;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
	
	@GetMapping("/productcatalog/products/search/name/{product_name}")
	public List<Product> getProductByProductName(@PathVariable("product_name") String product_name) throws Exception {
		try {
			System.out.println(product_name);
			List<Product> product = this.productService.getProductByProductName(product_name);
			System.out.println(product);
			return product;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
	
	@GetMapping("/productcatalog/products/search/code/{product_code}")
	public List<Product> getProductByProductCode(@PathVariable("product_code") Long product_code) throws Exception {
		try {
			System.out.println(product_code);
			List<Product> product = this.productService.getProductByProductCode(product_code);
			System.out.println(product);
			return product;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
	
	@GetMapping("/productcatalog/products/search/brand/{brand}")
	public List<Product> getProductByBrand(@PathVariable("brand") String brand) throws Exception {
		try {
			System.out.println(brand);
			List<Product> product = this.productService.getProductByBrand(brand);
			System.out.println(product);
			return product;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	

//	@PostMapping("/productcatalog/products/productavailability/{id}")
//	public String getAvailableProduct(@RequestBody Long pincode, @PathVariable Long id) throws Exception {
//		System.out.println(id);
//		System.out.println(pincode);
//		return this.productService.getMatchingProducts(pincode,id);
//	}
	
	
	@PostMapping("/productcatalog/products/productavailability/{id}/{pincode}")
	public boolean getAvailableProduct(@PathVariable Long pincode, @PathVariable int id) throws Exception {
		System.out.println(id);
		System.out.println(pincode);
		return this.productService.getMatchingProducts(pincode,id);
	}
}
