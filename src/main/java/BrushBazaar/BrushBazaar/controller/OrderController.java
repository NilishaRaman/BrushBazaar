package BrushBazaar.BrushBazaar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import BrushBazaar.BrushBazaar.Repository.OrderRepository;
import BrushBazaar.BrushBazaar.entities.Orders;

import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<Orders> createOrder(@RequestBody Orders orders) {
        Orders savedOrder = orderRepository.save(orders);
        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Orders> getOrder(@PathVariable Long id) {
        Optional<Orders> orders = orderRepository.findById(id);
        return orders.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
