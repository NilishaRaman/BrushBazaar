package BrushBazaar.BrushBazaar.controller;

import BrushBazaar.BrushBazaar.entities.User;
import BrushBazaar.BrushBazaar.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/register")
public class RegistrationController {

    private final UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());
        return "register"; // View name for registration form
    }

    @PostMapping
    public String registerUser(@ModelAttribute User user, Model model) {
        userService.saveUser(user);
        model.addAttribute("message", "Registration successful!");
        return "register-success"; // View name for success page
    }

    @GetMapping("/profile/{id}")
    public String viewProfile(@PathVariable Long id, Model model) {
        User user = userService.getUserById(id);
        if (user == null) {
            model.addAttribute("error", "User not found");
            return "error"; // View name for error page
        }
        model.addAttribute("user", user);
        return "profile"; // View name for user profile
    }

    @GetMapping("/all")
    public String listUsers(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "user-list"; // View name for user list
    }
}
