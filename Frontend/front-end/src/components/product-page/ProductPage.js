import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import styles from './ProductPage.module.css';
import Constants from '../../utils/constants';
import fetchProducts from './ProductPageService';
import ProductFilter from '../product-filter/ProductFilter';
import Pagination from '../pagination/Pagination';
import FilterMenu from '../filter-menu/FilterMenu';
import sortStyle from '../sort/SortProducts.module.css';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [value, setValue] = useState('sort');
  const [sorter, setSorter] = useState('asc');
  const [maxPageLimit, setMaxPageLimit] = useState(10);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [theFirstPage, setTheFirstPage] = useState(1);

    const getSorterValue = (e) => {
      setSorter(e.target.value);
    }

    const getValue = (e) => {
      setValue(e.target.value);
    }
    const firstPage = () => {
      setMinPageLimit(0);
      setMaxPageLimit(10);
      setCurrentPage(theFirstPage);
    }
  
    useEffect(() => {
      fetchProducts(setProducts, setFilteredProducts, setApiError);
    }, []);

    useEffect(() => {
      const sortArray = () => {
        const tempProducts = [...filteredProducts];
        const sorted = [...tempProducts].sort((a, b) => {    
          switch(sorter) {
            case 'ascName':
              return a.name.localeCompare(b.name);
              break;
            case 'descName':
              return b.name.localeCompare(a.name);
              break;
            case 'ascPrice':
              return a.price - b.price;
              break;
            case 'descPrice':
              return b.price - a.price;
              break;
            default:
              break;
          }
        });
        setFilteredProducts(sorted);
      firstPage();
      };
      sortArray(value);
    }, [value]); 

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // Get the current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <FilterMenu products={products} setFilteredProducts={setFilteredProducts} setCurrentPage={setCurrentPage} />
      <select className={sortStyle.sortUl} defaultValue="sort" onChange={(e) => {getValue(e); getSorterValue(e);}}> 
        <option disabled value="sort">Sort by: Featured</option>
        <option value="ascName" sorter='ascName'>Sort by: Name A - Z</option>
        <option value="descName" sorter='descName'>Sort by: Name Z - A</option>
        <option value="ascPrice" sorter='ascPrice'>Sort by: Price Low to High</option>
        <option value="descPrice" sorter='descPrice'>Sort by: Price High to Low</option>
      </select>
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      <ProductFilter setPage={firstPage} products={products} setFilteredProducts={setFilteredProducts} setCurrentPage={setCurrentPage} paginate={paginate} />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.app}>
            {currentProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate} firstPage={firstPage} currentPage={currentPage} setCurrentPage={setCurrentPage} minPageLimit={minPageLimit} setMinPageLimit={setMinPageLimit} maxPageLimit={maxPageLimit} setMaxPageLimit={setMaxPageLimit}/>
    </div>
  );
};

export default ProductPage;