package BrushBazaar.BrushBazaar.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BrushBazaar.BrushBazaar.entities.ContactInfo;
@CrossOrigin(origins="http://localhost:3000/") 
@RestController
@RequestMapping("/api/contact")
public class ContactController {

 @GetMapping
 public ContactInfo getContactInfo() {
     return new ContactInfo(
             "contact@brushbazaar.com",
             "+1-234-567-8900",
             "123 Art Lane, Creativity City, CA 90001"
     );
 }
}

