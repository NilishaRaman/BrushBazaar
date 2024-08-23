package BrushBazaar.BrushBazaar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import BrushBazaar.BrushBazaar.Repository.UserRepository;
import BrushBazaar.BrushBazaar.entities.User;
import BrushBazaar.BrushBazaar.services.AuthenticationService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationService authenticationService;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already in use.");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // Login a user
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        boolean isAuthenticated = authenticationService.authenticate(email, password);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }
    }

    // Admin login with hardcoded credentials
    @PostMapping("/admin-login")
    public ResponseEntity<String> adminLogin(@RequestParam String email, @RequestParam String password) {
        // Hardcoded admin credentials
        String adminEmail = "brushbazaar@gmail.com";
        String adminPassword = "bb123";

        if (email.equals(adminEmail) && password.equals(adminPassword)) {
            return ResponseEntity.ok("Admin login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid admin email or password.");
        }
    }
}
