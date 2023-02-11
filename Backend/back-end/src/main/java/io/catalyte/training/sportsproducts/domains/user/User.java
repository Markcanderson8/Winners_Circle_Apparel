package io.catalyte.training.sportsproducts.domains.user;

import javax.persistence.*;

/**
 * User entity in database
 */
@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
  String email;
  String role;
  String firstName;
  String lastName;

  String streetAddress;

  String streetAddress2;

  String city;

  String state;

  Integer zipCode;

  String phoneNumber;

  public User() {}

  public User(Long id, String email, String role, String firstName, String lastName) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public User(String email, String role, String firstName, String lastName) {
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public User(String firstName, String lastName, String email, String streetAddress, String streetAddress2, String city, String state, Integer zipcode, String phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.streetAddress = streetAddress;
    this.streetAddress2 = streetAddress2;
    this.city = city;
    this.state = state;
    this.zipCode = zipcode;
    this.phoneNumber = phoneNumber;
  }

  public User(Long id, String firstName, String lastName, String email, String streetAddress, String streetAddress2, String city, String state, Integer zipcode, String phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.streetAddress = streetAddress;
    this.streetAddress2 = streetAddress2;
    this.city = city;
    this.state = state;
    this.zipCode = zipcode;
    this.phoneNumber = phoneNumber;
  }

  public String getStreetAddress() {
    return streetAddress;
  }

  public void setStreetAddress(String streetAddress) {
    this.streetAddress = streetAddress;
  }

  public String getStreetAddress2() {
    return streetAddress2;
  }

  public void setStreetAddress2(String streetAddress2) {
    this.streetAddress2 = streetAddress2;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public Integer getZipCode() {
    return zipCode;
  }

  public void setZipCode(Integer zipCode) {
    this.zipCode = zipCode;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  @Override
  public String toString() {
    return "User{" +
        "id=" + id +
        ", email='" + email + '\'' +
        ", role='" + role + '\'' +
        ", firstName='" + firstName + '\'' +
        ", lastName='" + lastName + '\'' +
        ", streetAddress='" + streetAddress + '\'' +
        ", streetAddress2='" + streetAddress2 + '\'' +
        ", city='" + city + '\'' +
        ", state='" + state + '\'' +
        ", zipCode='" + zipCode + '\'' +
        ", phoneNumber='" + phoneNumber + '\'' +
        '}';
  }
}
