package BrushBazaar.BrushBazaar.services;

import BrushBazaar.BrushBazaar.Repository.CartItemRepository;
import BrushBazaar.BrushBazaar.Repository.OrderRepository;
import BrushBazaar.BrushBazaar.entities.CartItem;
import BrushBazaar.BrushBazaar.entities.Orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private OrderRepository orderRepository;

    // Fetch cart items for a specific user
    public List<CartItem> getCartItems(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }

    // Add a new item to the cart
    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    // Update an existing item in the cart
    public CartItem updateCartItem(CartItem cartItem) {
        if (!cartItemRepository.existsById(cartItem.getId())) {
            throw new RuntimeException("CartItem not found");
        }
        return cartItemRepository.save(cartItem);
    }

    // Remove an item from the cart
    public void removeCartItem(Long id) {
        if (cartItemRepository.existsById(id)) {
            cartItemRepository.deleteById(id);
        } else {
            throw new RuntimeException("CartItem not found");
        }
    }

    // Checkout and place an order
    @Transactional
    public Orders checkout(Orders order) {
        // Save the order
        Orders savedOrder = orderRepository.save(order);

        // Clear items from cart after checkout
        cartItemRepository.deleteById(order.getId());

        return savedOrder;
    }

    // Clear the entire cart for a specific user
    public void clearCart(Long userId) {
        cartItemRepository.deleteById(userId);
    }
}
