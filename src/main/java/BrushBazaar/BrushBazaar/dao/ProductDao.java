package BrushBazaar.BrushBazaar.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import BrushBazaar.BrushBazaar.entities.Product;

public interface ProductDao extends JpaRepository<Product,Long>{
	   List<Product> findByCategory(String category);
	    
	    List<Product> findByNameContaining(String keyword);
}
