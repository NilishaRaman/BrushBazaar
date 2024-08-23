package BrushBazaar.BrushBazaar.services;

import java.util.List;
import BrushBazaar.BrushBazaar.entities.Product;


public interface ProductService {
    List<Product> getProducts();
    Product getProduct(long productId);
    Product addProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(long productId);
}
