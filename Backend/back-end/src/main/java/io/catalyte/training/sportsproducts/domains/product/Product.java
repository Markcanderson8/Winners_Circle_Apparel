package io.catalyte.training.sportsproducts.domains.product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Objects;

/**
 * This class is a representation of a sports apparel product.
 */
@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private String brand;

  private String material;

  private String imageSrc;

  private String price;

  private String quantity;

  private String description;

  private String demographic;

  private String category;

  private String type;

  private String releaseDate;

  private String primaryColorCode;

  private String secondaryColorCode;

  private String colorName;

  private String styleNumber;

  private String globalProductCode;

  private Boolean active;

  private ArrayList reviews;

  public ArrayList getReviews() {
    return reviews;
  }

  public void setReviews(ArrayList reviews) {
    this.reviews = reviews;
  }


  public Product() {
  }

  public Product(String name, String description,
      String demographic, String category,
      String type, String releaseDate) {
    this.name = name;
    this.description = description;
    this.demographic = demographic;
    this.category = category;
    this.type = type;
    this.releaseDate = releaseDate;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getMaterial() {
    return material;
  }

  public void setMaterial(String material) {
    this.material = material;
  }

  public String getImageSrc() {
    return imageSrc;
  }

  public void setImageSrc(String imageSrc) {
    this.imageSrc = imageSrc;
  }

  public String getPrice() {
    return price;
  }

  public void setPrice(String price) {
    this.price = price;
  }

  public String getQuantity() {
    return quantity;
  }

  public void setQuantity(String quantity) {
    this.quantity = quantity;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDemographic() {
    return demographic;
  }

  public void setDemographic(String demographic) {
    this.demographic = demographic;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getReleaseDate() {
    return releaseDate;
  }

  public void setReleaseDate(String releaseDate) {
    this.releaseDate = releaseDate;
  }

  public String getPrimaryColorCode() {
    return primaryColorCode;
  }

  public void setPrimaryColorCode(String primaryColorCode) {
    this.primaryColorCode = primaryColorCode;
  }

  public String getSecondaryColorCode() {
    return secondaryColorCode;
  }

  public void setSecondaryColorCode(String secondaryColorCode) {
    this.secondaryColorCode = secondaryColorCode;
  }

  public String getColorName() {return colorName;}

  public void setColorName(String colorName){this.colorName = colorName;}

  public String getStyleNumber() {
    return styleNumber;
  }

  public void setStyleNumber(String styleNumber) {
    this.styleNumber = styleNumber;
  }

  public String getGlobalProductCode() {
    return globalProductCode;
  }

  public void setGlobalProductCode(String globalProductCode) {
    this.globalProductCode = globalProductCode;
  }

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }
  public Product(Long id, String name, String brand, String material, String imageSrc, String price, String quantity, String description, String demographic, String category, String type, String releaseDate, String primaryColorCode, String secondaryColorCode, String colorName, String styleNumber, String globalProductCode, Boolean active, ArrayList reviews) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.material = material;
    this.imageSrc = imageSrc;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.demographic = demographic;
    this.category = category;
    this.type = type;
    this.releaseDate = releaseDate;
    this.primaryColorCode = primaryColorCode;
    this.secondaryColorCode = secondaryColorCode;
    this.colorName = colorName;
    this.styleNumber = styleNumber;
    this.globalProductCode = globalProductCode;
    this.active = active;
    this.reviews = reviews;
  }

  @Override
  public String toString() {
    return "Product{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", brand='" + brand + '\'' +
            ", material='" + material + '\'' +
            ", imageSrc='" + imageSrc + '\'' +
            ", price='" + price + '\'' +
            ", quantity='" + quantity + '\'' +
            ", description='" + description + '\'' +
            ", demographic='" + demographic + '\'' +
            ", category='" + category + '\'' +
            ", type='" + type + '\'' +
            ", releaseDate='" + releaseDate + '\'' +
            ", primaryColorCode='" + primaryColorCode + '\'' +
            ", secondaryColorCode='" + secondaryColorCode + '\'' +
            ", colorName='" + colorName + '\'' +
            ", styleNumber='" + styleNumber + '\'' +
            ", globalProductCode='" + globalProductCode + '\'' +
            ", active=" + active +
            ", reviews=" + reviews +
            '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Product product = (Product) o;
    return id.equals(product.id) && name.equals(product.name) && brand.equals(product.brand) && material.equals(product.material) && imageSrc.equals(product.imageSrc) && price.equals(product.price) && quantity.equals(product.quantity) && description.equals(product.description) && demographic.equals(product.demographic) && category.equals(product.category) && type.equals(product.type) && releaseDate.equals(product.releaseDate) && primaryColorCode.equals(product.primaryColorCode) && secondaryColorCode.equals(product.secondaryColorCode) && colorName.equals(product.colorName)  &&  styleNumber.equals(product.styleNumber) && globalProductCode.equals(product.globalProductCode) && active.equals(product.active);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, brand, material, imageSrc, price, quantity, description, demographic, category, type, releaseDate, primaryColorCode, secondaryColorCode, colorName, styleNumber, globalProductCode, active);
  }


}
