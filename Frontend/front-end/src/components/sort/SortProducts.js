import React, { useState, useEffect } from 'react';
import style from './SortProducts.module.css';
import FilterItem from '../product-filter/FilterItem';

/**
 * component to sort products on page
 * @param {*} props 
 * @returns sorted products ascending or descending
 */
const SortProducts = (props) => {
  const { products, filteredProducts, setFilteredProducts, setCurrentPage, list } = props;
  const [value, setValue] = useState('sort');
  const [sorter, setSorter] = useState('asc');

    const getSorterValue = (e) => {
      setSorter(e.target.value);
    }

    const getValue = (e) => {
      setValue(e.target.value);
    }

    useEffect(() => {
      const sortArray = () => {
        const tempProducts = [...products];
        const tempArray = [];
        const parsePrice = x => parseFloat(x.replace(/^\$/, '')) || 0

        if(sorter == 'ascPrice'){
              const sorted = [...tempProducts].slice().sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
              tempArray.push(sorted);
          }
          // return tempArray;

    //     const sorted = [...tempProducts].sort((a, b) => {    
    //       switch(sorter) {
    //         case 'ascName':
    //           return a.name.localeCompare(b.name);
    //           break;
    //         case 'descName':
    //           return b.name.localeCompare(a.name);

    //           break;
    //         case 'ascPrice':
    //           return a.price.localeCompare(b.price);
    //           break;
    //         case 'descPrice':
    //           return b.price.localeCompare(a.price);
    //           break;
    //         default:
    //           break;
    //       }
    //     });
        setFilteredProducts(tempArray);
        setCurrentPage(1);
      };
      sortArray(value);
    }, [value]); 
    
      return (
       <div>
        <select className={style.sort} defaultValue="sort" onChange={(e) => {getValue(e); getSorterValue(e);}}> 
          <option disabled value="sort">Sort by: Featured</option>
          <option value="ascName" sorter='ascName'>Sort by: Name A - Z</option>
          <option value="descName" sorter='descName'>Sort by: Name Z - A</option>
          <option value="ascPrice" sorter='ascPrice'>Sort by: Price Low to High</option>
          <option value="descPrice" sorter='descPrice'>Sort by: Price High to Low</option>
        </select>
      </div> 
    )
}

export default SortProducts;