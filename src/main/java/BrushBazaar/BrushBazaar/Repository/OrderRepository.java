package BrushBazaar.BrushBazaar.Repository;

import BrushBazaar.BrushBazaar.entities.Orders;
import BrushBazaar.BrushBazaar.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders, Long> {
    List<Orders> findByUser(User user);  
    List<Orders> findByUserId(Long userId);
}

