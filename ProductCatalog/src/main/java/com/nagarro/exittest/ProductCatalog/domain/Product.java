package com.nagarro.exittest.ProductCatalog.domain;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String product_image;
	private String product_name;
	private String description;
	private String brand;
	private Long price;
	private String serviceability;
	private Long product_code;
	
	public Long getProduct_code() {
		return product_code;
	}
	public void setProduct_code(Long product_code) {
		this.product_code = product_code;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProduct_image() {
		return product_image;
	}
	public void setProduct_image(String product_image) {
		this.product_image = product_image;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public String getServiceability() {
		return serviceability;
	}
	public void setServiceability(String serviceability) {
		this.serviceability = serviceability;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", product_image=" + product_image + ", product_name="
				+ product_name + ", description=" + description + ", brand=" + brand + ", price=" + price
				+ ", serviceability=" + serviceability + ", product_code=" + product_code + "]";
	}
	
	
	
}
