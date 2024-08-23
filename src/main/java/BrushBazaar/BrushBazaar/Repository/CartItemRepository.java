package BrushBazaar.BrushBazaar.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import BrushBazaar.BrushBazaar.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUserId(Long userId);
}

