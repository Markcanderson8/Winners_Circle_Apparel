package io.catalyte.training.sportsproducts.data;

import io.catalyte.training.sportsproducts.domains.product.Product;

import java.lang.reflect.Array;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import org.apache.commons.lang3.RandomStringUtils;
import org.assertj.core.internal.bytebuddy.asm.Advice;

/**
 * This class provides tools for random generation of products.
 */
public class ProductFactory {
  private static final String[] colors = {
      "#000000", // black
      "#ffffff", // white
      "#39add1", // light blue
      "#3079ab", // dark blue
      "#c25975", // mauve
      "#e15258", // red
      "#f9845b", // orange
      "#838cc7", // lavender
      "#7d669e", // purple
      "#53bbb4", // aqua
  };
  private static final String[] demographics = {
      "Men",
      "Women",
      "Kids"
  };
  private static final String[] categories = {
      "Golf",
      "Soccer",
      "Basketball",
      "Hockey",
      "Football",
      "Running",
      "Baseball",
      "Skateboarding",
      "Boxing",
      "Weightlifting"
  };
  private static final String[] adjectives = {
      "Lightweight",
      "Slim",
      "Shock Absorbing",
      "Exotic",
      "Elastic",
      "Fashionable",
      "Trendy",
      "Next Gen",
      "Colorful",
      "Comfortable",
      "Water Resistant",
      "Wicking",
      "Heavy Duty"
  };
  private static final String[] types = {
      "Pant",
      "Short",
      "Shoe",
      "Glove",
      "Jacket",
      "Tank Top",
      "Sock",
      "Sunglasses",
      "Hat",
      "Helmet",
      "Belt",
      "Visor",
      "Shin Guard",
      "Elbow Pad",
      "Headband",
      "Wristband",
      "Hoodie",
      "Flip Flop",
      "Pool Noodle"
  };
public static final String[] customerName = {
        "James",
        "Robert",
        "John",
        "Michael",
        "David",
        "William",
        "Joseph",
        "Mary",
        "Patricia",
        "Jennifer",
        "Linda",
        "Elizabeth",
        "Barbara",
        "Jessica"
};
  private static final String[] brands = {
      "Champion",
      "lululemon",
      "Adidas",
      "Athleta",
      "Bandier",
      "New Balance",
      "Under Armour"
  };

  private static final String[] materials = {
      "Nylon",
      "Polyester",
      "Cotton",
      "Lycra",
      "Mesh",
      "Microfiber"
  };

  /**
   * Returns a random demographic from the list of demographics.
   *
   * @return - a demographic string
   */
  public static String getDemographic() {
    Random randomGenerator = new Random();
    return demographics[randomGenerator.nextInt(demographics.length)];
  }

  /**
   * Generates a random product offering id.
   *
   * @return - a product offering id
   */
  public static String getRandomProductId() {
    return "po-" + RandomStringUtils.random(7, false, true);
  }

  /**
   * Generates a random style code.
   *
   * @return - a style code string
   */
  public static String getStyleCode() {
    return "sc" + RandomStringUtils.random(5, false, true);
  }

  /**
   * Finds a random date between two date bounds.
   *
   * @param startInclusive - the beginning bound
   * @param endExclusive   - the ending bound
   * @return - a random date as a LocalDate
   */
  private static LocalDate between(LocalDate startInclusive, LocalDate endExclusive) {
    long startEpochDay = startInclusive.toEpochDay();
    long endEpochDay = endExclusive.toEpochDay();
    long randomDay = ThreadLocalRandom
            .current()
            .nextLong(startEpochDay, endEpochDay);

    return LocalDate.ofEpochDay(randomDay);
  }
  public static String getCategory() {
    Random randomGenerator = new Random();
    return categories[randomGenerator.nextInt(categories.length)];
  }

  public static String getImageSrc(String category) {

    switch (category) {
      case "Golf":
        return "https://media.istockphoto.com/photos/lets-golf-picture-id485187122?s=612x612";

      case "Soccer":
        return "https://media.istockphoto.com/photos/soccer-ball-flew-into-the-goal-soccer-ball-bends-the-net-against-the-picture-id1197582798?s=612x612";

      case "Basketball":
        return "https://media.istockphoto.com/photos/scoring-the-winning-points-at-a-basketball-game-picture-id492629987?s=612x612";

      case "Hockey":
        return "https://media.istockphoto.com/photos/strategy-to-win-in-ice-hockey-picture-id1186323725?s=612x612";

      case "Football":
        return "https://media.istockphoto.com/photos/pro-football-on-the-field-picture-id137379860?s=612x612";

      case "Running":
        return  "https://media.istockphoto.com/photos/happy-female-runner-jogging-in-the-morning-in-nature-picture-id1142900322?s=612x612";

      case "Baseball":
        return "https://media.istockphoto.com/photos/baseball-player-in-stadium-picture-id473559846?s=612x612";

      case "Skateboarding":
        return   "https://media.istockphoto.com/photos/skateboarding-picture-id470933205?s=612x612";

      case "Boxing":
        return "https://media.istockphoto.com/photos/glove-in-gym-picture-id1074736630?s=612x612";

      case "Weightlifting":
        return "https://media.istockphoto.com/photos/handsome-weightlifter-preparing-for-training-training-with-barbell-picture-id1160795384?s=612x612";
      default:
        return "";
    }


  }

  public static ArrayList generateReviews(String name) {
    Random randomGenerator = new Random();
    String[] goodReviews = {
            "This was perfect for me",
            "This " + name + " was exactly what I wanted",
            "I cant wait to get another " + name
    };
    String[] badReviews = {
            "I didn't like this at all",
            "This " + name + " was not what I wanted",
            "Disappointing"
    };
    ArrayList Result = new ArrayList();
    for (int i = 0; i <= randomGenerator.nextInt(3); i++) {
      Integer rating =(int)Math.floor(Math.random()*(5-1+1)+1);
      if (rating < 3) {
        Result.add(new Object[]{badReviews[randomGenerator.nextInt(badReviews.length)], customerName[randomGenerator.nextInt(customerName.length)], rating});
      } else {
        Result.add(new Object[]{goodReviews[randomGenerator.nextInt(goodReviews.length)], customerName[randomGenerator.nextInt(customerName.length)], rating});
      }
    }
      return Result;
  }

  /**
   * Finds a random type from an array
   * @return A random product type
   */
  public static String getType() {
    Random randomGenerator = new Random();
    return types[randomGenerator.nextInt(types.length)];
  }

  /**
   * Creates a random adjective from the adjective list
   * @return a random adjective
   */
  public static String generateAdjective(){
    Random randomGenerator = new Random();
    return adjectives[randomGenerator.nextInt(adjectives.length)];
  }

  /**
   * Creates a random brand from the brands list
   * @return a random brand
   */
  public static String generateBrands(){
    Random randomGenerator = new Random();
    return brands[randomGenerator.nextInt(brands.length)];
  }

  /**
   * Creates a random material from the materials list
   * @return a random material
   */
  public static String generateMaterials(){
    Random randomGenerator = new Random();
    return materials[randomGenerator.nextInt(materials.length)];
  }

  /**
   * Generates a name based on the product's adjective, category, and type
   * @param adjective - the product's adjective
   * @param category - the product's category
   * @param type - the product's type
   * @return a random name
   */
  public static String getName(String adjective, String category, String type) {
    return adjective+" "+category+" "+type;
  }

  /**
   * Creates a description of the product based on category, demographic, and adjective
   * @param category - the product's category
   * @param demographic - the product's demographic
   * @param adjective - the product's adjective
   * @param type - the product's type
   * @return a generated description
   */
  public static String getDescription(String category, String demographic, String adjective, String type ) {
    return adjective+" "+category+" "+type+" made for "+demographic;
  }

  /**
   * Takes a color from a list and randomly chooses one
   * @return a random color
   */
  public static String getColor() {
    Random randomGenerator = new Random();
    return colors[randomGenerator.nextInt(colors.length)];
  }
  /**
   * Syncs up the primaryColorCode param to a color Name
   * @return primaryColorCode String as a name
   */
  public static String getColorName(String primaryColorCode) {

    switch (primaryColorCode) {
      case "#000000":
        return "Black";

      case "#ffffff":
        return "White";

      case "#39add1":
        return "Light Blue";

      case "#3079ab":
        return "Dark Blue";

      case "#c25975":
        return "Mauve";

      case "#e15258":
        return  "Red";

      case "#f9845b":
        return "Orange";

      case "#838cc7":
        return   "Lavender";

      case "#7d669e":
        return "Purple";

      case "#53bbb4":
        return "Aqua";
      default:
        return "";
    }}

  /**
   * generates a random price between 1 and 500
   * @return random price
   */
  public static String getPrice() {
    //Code for rounding found from https://intellipaat.com/community/35143/how-to-round-up-to-2-decimal-places-in-java
    //code for random double modified from https://stackoverflow.com/questions/27531759/generating-decimal-random-numbers-in-java-in-a-specific-range
    double price = 1D + new Random().nextDouble() * (500D - 1D);
return String.valueOf((double) Math.round(price*100)/100);
  }

  /**
   * Generates a number of random products based on input.
   *
   * @param numberOfProducts - the number of random products to generate
   * @return - a list of random products
   */
  public List<Product> generateRandomProducts(Integer numberOfProducts) {

    List<Product> productList = new ArrayList<>();

    for (int i = 0; i < numberOfProducts; i++) {
      productList.add(createRandomProduct());
    }

    return productList;
  }

  /**
   * Uses random generators to build a product.
   *
   * @return - a randomly generated product
   */
  public Product createRandomProduct() {
    Product product = new Product();
    Random random = new Random();
    String demographic = ProductFactory.getDemographic();
    String category = ProductFactory.getCategory();
    String type = ProductFactory.getType();
    String brand = ProductFactory.generateBrands();
    String material = ProductFactory.generateMaterials();
    String adjective = ProductFactory.generateAdjective();
    String name =  ProductFactory.getName(adjective,category, type);
    String description = ProductFactory.getDescription(category, demographic, adjective, type);
    String imageSrc = ProductFactory.getImageSrc(category);
    String primaryColorCode = ProductFactory.getColor();
    String secondaryColorCode = ProductFactory.getColor();
    String colorName = ProductFactory.getColorName(primaryColorCode);

product.setReviews(generateReviews(type));
product.setPrice(ProductFactory.getPrice());
    product.setCategory(category);
    product.setType(type);
    product.setName(name);
    product.setBrand(brand);
    product.setMaterial(material);
    product.setDemographic(demographic);
    product.setGlobalProductCode(ProductFactory.getRandomProductId());
    product.setStyleNumber(ProductFactory.getStyleCode());
    product.setPrimaryColorCode(primaryColorCode);
    product.setSecondaryColorCode(secondaryColorCode);
    product.setColorName(colorName);
    product.setDescription(description);
    product.setImageSrc(imageSrc);
    product.setReleaseDate((between(LocalDate.of(1970, Month.JANUARY, 1), LocalDate.of(2022, Month.SEPTEMBER, 9 )).toString()));
    product.setActive( random.nextBoolean());

    return product;
  }

}
