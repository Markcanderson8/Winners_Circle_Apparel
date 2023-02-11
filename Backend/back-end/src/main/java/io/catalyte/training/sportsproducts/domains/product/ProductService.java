package io.catalyte.training.sportsproducts.domains.product;

import java.util.List;

/**
 * This interface provides an abstraction layer for the Products Service
 */
public interface ProductService {

  List<Product> getProducts(Product product);

  List<Product> getProductsByPrice(String price1, String price2, List<Product> products);

  Product getProductById(Long id);
}
