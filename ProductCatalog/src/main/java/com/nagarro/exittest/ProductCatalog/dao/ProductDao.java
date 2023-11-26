package com.nagarro.exittest.ProductCatalog.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nagarro.exittest.ProductCatalog.domain.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Long> {
	
	@Query("select q from Product q where q.id = :id")
	public Product getProductById(@Param("id") int id);	
	
	@Query("select q from Product q where q.product_code = :product_code")
	public List<Product> getProductByProductCode(@Param("product_code") Long product_code);

	@Query("select q from Product q where q.brand = :brand")
	public List<Product> getProductByBrand(@Param("brand") String brand);
	
	@Query("select q from Product q where q.product_name = :product_name")
	public List<Product> getProductByProductName(@Param("product_name") String product_name);


}
