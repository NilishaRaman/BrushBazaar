package BrushBazaar.BrushBazaar.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import BrushBazaar.BrushBazaar.Repository.UserRepository;
import BrushBazaar.BrushBazaar.entities.User;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String email, String password) {
        User user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }
}
