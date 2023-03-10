import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function fetchProducts(setProducts, setFilteredProducts, setApiError) {
  await HttpHelper(Constants.PRODUCTS_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then((data) => {
      // only load active products into the front end
      const activeProducts = data.filter((product) => product.active);
      setProducts(activeProducts);
      setFilteredProducts(activeProducts);
    })
    .catch(() => {
      setApiError(true);
    });
}
