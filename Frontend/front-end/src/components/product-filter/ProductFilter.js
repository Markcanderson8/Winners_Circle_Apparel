import React, { useState } from "react";
import FilterCategory from "./FilterCategory";
import "./ProductFilter.module.css";
import { useContext } from "react";

/**
 * @name ProductFilter
 * Creates a sidebar that filters the products on the page based on the options selected
 * @param {*} props - products - the array of products to be filtered
 *            setFilteredProducts - a useState hook to change the filtered products
 * @returns a side-mounted menu component
 */
const ProductFilter = (props) => {
  const { products, setFilteredProducts, setCurrentPage, setPage } = props;
  const [filter, setFilter] = useState({});

  /**
   * Filters a set of products to get all unique entries in the fields specified
   * @param {Array} data - an array of objects
   * @param {[]} fields - an array containing of keys to check
   * @returns an object containing arrays of all unique entries, with the field name as the key
   */
  const filterFields = (data, fields) => {
    const types = {};

    fields.forEach((field) => {
      types[field] = [];
      data.forEach((product) => {
        if (!types[field].includes(product[field])) {
          types[field].push(product[field]);
        }
      });
    });
    return types;
  };

  /**
   * Filters products based on a given set of parameters
   * @param {Array} productArray - an array of product objects to be sorted
   * @param {{}} filterParameters - an object containing arrays of values to match by.
   * Example filterParameters: { brand: ['brand 1', 'brand 2'], demographic: ['Women'] }
   */
  const filterProducts = (productArray, filterParameters) => {
    // I deeply apologize for how hard this code is to read. I had to keep patching cases into it.
    if (Object.keys(filterParameters).length !== 0) {
      // makes sure the filter object is not empty
      const filteredProducts = [];
      productArray.forEach((product) => {
        let match = true;
        let priceMatch = 0;
        for (const [key, value] of Object.entries(filterParameters)) {
          // eslint-disable-line
          switch (key) {
            case "price":
              // price tests go here
              priceMatch = 1;
              value.forEach((pair) => {
                if (
                  Number(product.price) >= pair.min &&
                  Number(product.price) < pair.max
                ) {
                  priceMatch = 2;
                }
              });
              break;
            default:
              if (!value.includes(product[key])) {
                match = false;
              }
          }
        }
        // priceMatch == 0, price was empty, ignore the field
        // priceMatch == 1, it failed a price test
        // priceMatch == 2, it passed the test and is a true match
        if (priceMatch === 1 ) {
          match = false;
        }
        if (match) {
          filteredProducts.push(product);
          console.log(filterProducts);
        }
      });
      return filteredProducts;
    }
    // if we make it here, the filter was empty, so return the product array instead
    return productArray;
  };

  /**
   * Callback function for when the user selects a new filter option.
   * Sets the filter state, then sorts the page by filter using a state hook (setFilteredProducts)
   * @param {string} name - the name of the field to check
   * @param {[]} fields - an array of entries to set the field to
   */
  const handleSelect = (name, fields) => {
    setPage();
    if (fields.length !== 0) {
      let newFilter;
      // it was necessary to create a new object here, because React would not re-render
      // when a new field was added without it
      switch (name) {
        case "price":
          const parsedPrices = parsePrices(fields);
          newFilter = { ...filter, [name]: parsedPrices };
          break;
        default:
          newFilter = { ...filter, [name]: fields };
      }
      setFilter(newFilter);
      setFilteredProducts(filterProducts(products, newFilter));
      setCurrentPage(1);
    } else {
      const shallowFilter = filter;
      delete shallowFilter[name];
      setFilter(shallowFilter);
      setFilteredProducts(filterProducts(products, filter));
      setCurrentPage(1);
    }
  };

  /**
   * Translates the entries from the Price category into values the filterProducts function can understand
   * @param {*} fields - text fields from the price sort
   * @returns an array of objects { min: value, max: value } to be read by filterProducts
   */
  const parsePrices = (fields) => {
    const prices = [];
    fields.forEach((field) => {
      switch (field) {
        case "Under $25":
          prices.push({ min: 0, max: 25 });
          break;
        case "$25 to $50":
          prices.push({ min: 25, max: 50 });
          break;
        case "$50 to $100":
          prices.push({ min: 50, max: 100 });
          break;
        case "$100 to $200":
          prices.push({ min: 100, max: 200 });
          break;
        case "$200 and above":
          prices.push({ min: 200, max: 99999 }); // this will break if prices ever go above $100000
          break;
        default:
          break;
      }
    });
    return prices;
  };

  // 1. parse the option string(s) to the numeric value they represent
  // 2. filter the products array

  // This line sets the fields to filter by.
  // To add new fields:
  // 1. add the field to sort by to the array below
  // 2. add to the line beneath that
  // 3. add a <FilterCategory /> that uses the field as a list
  // or, you know, make a FilterList component that maps the whole 'types' object.
  // that probably would have been smarter, but I did it this way for now :D
  const types = filterFields(products, [
    "brand",
    "category",
    "demographic",
    "colorName",
    "material",
  ]);

  const price = [
    "Under $25",
    "$25 to $50",
    "$50 to $100",
    "$100 to $200",
    "$200 and above",
  ];

  const { brand, category, demographic, material, colorName } = types;

  return (
    <div>
      <nav>
        <hr />
        <FilterCategory
          title='Brand'
          name='brand'
          list={brand}
          handler={handleSelect}
        />
        <FilterCategory
          title='Category'
          name='category'
          list={category}
          handler={handleSelect}
        />
        <FilterCategory
          title='Department'
          name='demographic'
          list={demographic}
          handler={handleSelect}
        />
        <FilterCategory
          title='Price'
          name='price'
          list={price}
          handler={handleSelect}
        />
        <FilterCategory
          title='Color'
          name='colorName'
          list={colorName}
          handler={handleSelect}
        />
        <FilterCategory
          title='Material'
          name='material'
          list={material}
          handler={handleSelect}
        />
      </nav>
    </div>
  );
};

export default ProductFilter;
