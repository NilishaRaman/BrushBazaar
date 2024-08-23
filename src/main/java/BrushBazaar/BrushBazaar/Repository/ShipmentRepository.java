package BrushBazaar.BrushBazaar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import BrushBazaar.BrushBazaar.entities.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Long> {
}
