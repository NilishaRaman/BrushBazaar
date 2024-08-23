package BrushBazaar.BrushBazaar.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BrushBazaar.BrushBazaar.Repository.OrderRepository;
import BrushBazaar.BrushBazaar.entities.Orders;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Orders> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public Orders createOrder(Orders orders) {
        return orderRepository.save(orders);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}

