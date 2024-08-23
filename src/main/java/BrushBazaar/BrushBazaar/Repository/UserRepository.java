package BrushBazaar.BrushBazaar.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import BrushBazaar.BrushBazaar.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email); 
}
