package BrushBazaar.BrushBazaar.services;

import BrushBazaar.BrushBazaar.entities.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    User getUserById(Long id);
    List<User> getAllUsers();
}

