package BrushBazaar.BrushBazaar.controller;

import BrushBazaar.BrushBazaar.entities.CartItem;
import BrushBazaar.BrushBazaar.entities.Orders;
import BrushBazaar.BrushBazaar.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart") // Base path for all endpoints in this controller
@CrossOrigin(origins = "http://localhost:3000") // CORS configuration
public class CartController {

    @Autowired
    private CartService cartService;

    // Fetch cart items for a specific user
    @GetMapping("/{userId}")
    public ResponseEntity<List<CartItem>> getCartItems(@PathVariable Long userId) {
        List<CartItem> items = cartService.getCartItems(userId);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    // Add a new item to the cart
    @PostMapping
    public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem) {
        CartItem addedItem = cartService.addCartItem(cartItem);
        return new ResponseEntity<>(addedItem, HttpStatus.CREATED);
    }

    // Update an existing item in the cart
    @PutMapping
    public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartItem) {
        CartItem updatedItem = cartService.updateCartItem(cartItem);
        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }

    // Remove an item from the cart
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeCartItem(@PathVariable Long id) {
        cartService.removeCartItem(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Checkout and place an order
    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(@RequestBody Orders order) {
        try {
            cartService.checkout(order);
            return new ResponseEntity<>("Order placed successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to place order", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Clear the entire cart for a specific user
    @PostMapping("/clear")
    public ResponseEntity<String> clearCart(@RequestParam Long userId) {
        try {
            cartService.clearCart(userId);
            return new ResponseEntity<>("Cart cleared successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to clear cart", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
