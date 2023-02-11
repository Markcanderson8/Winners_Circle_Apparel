import { CardActions, CardMedia, IconButton, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { AddShoppingCart, CancelRounded, ExitToApp } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../checkout-page/CartContext';
import './ProductModal.css';

/**
 * used to set the theme of the product image
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

/**
 * a modal used for viewing information on a product
 * @param {*} props props used for getting the product info and closing the modal
 * @returns 
 */
const ProductModal = (props) => {
  const { product, closeM } = props;
  const classes = useStyles();
  const { dispatch } = useCart();
  const [quantityNum, setQuantity] = useState(0);
  let isDarkColor = false;
  if (product.colorName == "Black" || product.colorName == "Dark Blue" ) {
    isDarkColor = true;
  }
  const handleClick = (e) => {
    if (e.target.className == 'modal') {
      closeM();
    }
  };
  const closeButton = () => {
    closeM();
  };
  const onAdd = () => {
    if (quantityNum > 0) {
      dispatch(
        {
          type: 'add',
          product: {
            id: product.id,
            title: product.name,
            price: product.price,
            description: product.description,
            quantity: quantityNum
          }
        }
      );
    }
  };

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {product.name}
          </h2>
          <div className='closeButton'>
            <IconButton onClick={closeButton} className='modalClose' aria-label="exit product view" >
              <CancelRounded />
            </IconButton>
          </div>
        </div>

        <div className="modal-body">
          <div className='modal-picture'>
            <CardMedia
              className={classes.media}
              image={product.imageSrc}
              title={product.name}
            />
          </div>
          <div className='info-category'>
            {product.category}
          </div>
          {isDarkColor ? <div className='info-color-dark'>
            <a style={{ backgroundColor: product.primaryColorCode }}> {product.colorName}</a>
          </div> : <div className='info-color'>
            <a style={{ backgroundColor: product.primaryColorCode }}> {product.colorName}</a>
          </div>
          }
          <div className='info-description'>
            Product details:
          </div>
          <div className='info-description'>
            {product.description}
          </div>
          <div>
            <div className='info-price'>
              ${product.price}
            </div>
          </div>
          <div className='modal-cart-input'>
          <select onChange={(e) => setQuantity(e.target.value)}>
              <option value={0}>Select quantity</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <IconButton aria-label="add to shopping cart" className='cart-button' onClick={onAdd}>
              <AddShoppingCart className='cart-button' />
            </IconButton>
            <Link className='reviewLink' to={`/reviews/${product.id}`}>{product.reviews.length} reviews</Link>
          </div>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div >
  );
};
export default ProductModal;
