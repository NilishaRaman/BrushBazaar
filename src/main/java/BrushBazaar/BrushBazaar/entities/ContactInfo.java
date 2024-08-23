package BrushBazaar.BrushBazaar.entities;

public class ContactInfo {
 private String email;
 private String phone;
 private String address;

 // Constructors, getters, and setters
 public ContactInfo() {}

 public ContactInfo(String email, String phone, String address) {
     this.email = email;
     this.phone = phone;
     this.address = address;
 }

 // Getters and Setters
 public String getEmail() {
     return email;
 }

 public void setEmail(String email) {
     this.email = email;
 }

 public String getPhone() {
     return phone;
 }

 public void setPhone(String phone) {
     this.phone = phone;
 }

 public String getAddress() {
     return address;
 }

 public void setAddress(String address) {
     this.address = address;
 }
}

