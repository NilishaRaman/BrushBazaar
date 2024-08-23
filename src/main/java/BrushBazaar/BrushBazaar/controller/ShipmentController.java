package BrushBazaar.BrushBazaar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import BrushBazaar.BrushBazaar.Repository.ShipmentRepository;
import BrushBazaar.BrushBazaar.entities.Shipment;

import java.util.Optional;

@RestController
@RequestMapping("/api/shipment")
public class ShipmentController {

    @Autowired
    private ShipmentRepository shipmentRepository;

    @PostMapping
    public ResponseEntity<Shipment> createShipment(@RequestBody Shipment shipment) {
        Shipment savedShipment = shipmentRepository.save(shipment);
        return ResponseEntity.ok(savedShipment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shipment> getShipment(@PathVariable Long id) {
        Optional<Shipment> shipment = shipmentRepository.findById(id);
        return shipment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
