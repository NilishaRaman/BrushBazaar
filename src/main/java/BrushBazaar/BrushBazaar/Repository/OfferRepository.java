package BrushBazaar.BrushBazaar.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import BrushBazaar.BrushBazaar.entities.Offer;

public interface OfferRepository extends JpaRepository<Offer, Long> {
}
