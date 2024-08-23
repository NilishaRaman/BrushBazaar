package BrushBazaar.BrushBazaar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import BrushBazaar.BrushBazaar.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
