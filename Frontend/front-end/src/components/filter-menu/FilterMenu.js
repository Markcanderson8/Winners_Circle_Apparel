import React, { useState } from 'react';
import style from './FilterMenu.module.css';
import Spinner from '../spinner/Spinner';

const FilterMenu = (props) => {

    const { products, setFilteredProducts, setCurrentPage } = props;
    const [loading, setLoading] = useState(false);

    const onFilter = (event) => {
        setLoading(true);
        // Checks to see if the component was passed an array of products, if not...it won't filter
        if (products != undefined) {
            const tempProducts = [...products];
            const tempArray = [];
            tempProducts.forEach((product) => {
                if (product.demographic === event.target.id) {
                    tempArray.push(product);
                }
            })
            setFilteredProducts(tempArray);
            setCurrentPage(1);
        }
        setLoading(false);
    }
    // Returns navBar buttons
    return (
        <div>
            <ul className={style.navUl}>
                {loading && <Spinner loading={loading} />}
                <li className={style.navLi}><button id="Men" className={style.navButton} onClick={onFilter}>MEN</button></li>
                <li className={style.navLi}><button id="Women" className={style.navButton} onClick={onFilter}>WOMEN</button></li>
                <li className={style.navLi}><button id="Kids" className={style.navButton} onClick={onFilter}>KIDS</button></li>
            </ul>
        </div>
    );
};

export default FilterMenu;