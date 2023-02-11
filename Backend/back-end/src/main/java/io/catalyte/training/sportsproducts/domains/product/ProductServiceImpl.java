package io.catalyte.training.sportsproducts.domains.product;

import io.catalyte.training.sportsproducts.exceptions.ResourceNotFound;
import io.catalyte.training.sportsproducts.exceptions.ServerError;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

/**
 * This class provides the implementation for the ProductService interface.
 */
@Service
public class ProductServiceImpl implements ProductService {

  private final Logger logger = LogManager.getLogger(ProductServiceImpl.class);

  ProductRepository productRepository;

  @Autowired
  public ProductServiceImpl(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  /**
   * Retrieves all products from the database, optionally making use of an example if it is passed.
   *
   * @param product - an example product to use for querying
   * @return - a list of products matching the example, or all products if no example was passed
   */
  public List<Product> getProducts(Product product) {
    if (product.getPrice() != null && product.getPrice().contains(",")){
      String price1 = product.getPrice().substring(0, product.getPrice().indexOf(","));
      String price2 = product.getPrice().substring((product.getPrice().trim().indexOf(",")+2));
      product.setPrice(null);
      System.out.println(IntStream.range(Integer.valueOf(price1), Integer.valueOf(price2)));
     return getProductsByPrice(price1, price2, productRepository.findAll(Example.of(product)));
    }
    try {
      return productRepository.findAll(Example.of(product));
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
      throw new ServerError(e.getMessage());
    }
  }

  /**
   *
   * @param price1 beginning of price range
   * @param price2 end of price range
   * @param products list of products to search through
   * @return Gives a list of products based on their price range
   */
  public List<Product> getProductsByPrice(String price1, String price2, List<Product> products) {
    List<Product> productRep = new ArrayList<>();
    try {
//      line below borrowed from https://stackoverflow.com/questions/71287180/how-to-collect-a-list-of-doubles-from-a-stream
    IntStream.range(Integer.valueOf(price1), Integer.valueOf(price2)).parallel().forEach(
            (n) -> {
              for (Product p: products) {
                if (p.getPrice().substring(0, p.getPrice().indexOf(".")).matches(String.valueOf(n))){
                  productRep.add(p);
                }
              }
    });
    return productRep;

    } catch (DataAccessException e) {
      logger.error(e.getMessage());
      throw new ServerError(e.getMessage());
    }
  }

  /**
   * Retrieves the product with the provided id from the database.
   *
   * @param id - the id of the product to retrieve
   * @return - the product
   */
  public Product getProductById(Long id) {
//    Product product;

    try {
      Product product = productRepository.findById(id).orElse(null);
      if (product != null) {
        return product;
      } else {
        logger.info("Get by id failed, it does not exist in the database: " + id);
        throw new ResourceNotFound("Get by id failed, it does not exist in the database: " + id);
      }
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
      throw new ServerError(e.getMessage());
    }


  }
}