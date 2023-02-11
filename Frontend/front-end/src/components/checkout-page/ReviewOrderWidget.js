import React from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import { getSubtotal } from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import ReviewOrderModal from './review-order-modal/ReviewOrderModal';
import { useState } from 'react';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = () => {
  const {
    state: { products }
  } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [blurActive, setActiveBlur] = useState(false);
  const [blurRef, setBlurRef] = useState("")
  

  const {dispatch} = useCart();

  const deleteProduct = (title) => {
    dispatch(
      {
        type: 'delete',
        product: {
          title: title
        }
      }
    );
  }

  const quantityPlus = (title) => {
   dispatch(
    {
      type: 'one',
      product: {
        title: title, 
      }
    }
  );
  }

  const quantityMinus = (title, quantity) => {
   if (quantity - 1 != 0){
    dispatch(
      {
        type: 'minus',
        product: {
          title: title, 
        }
      }
    )}

    else{
      dispatch(
        {
          type: 'minus',
          product: {
            title: title, 
          }
        }
      )
      setActiveBlur(true)
    } }

const modalOpen1 = () => {
  setModalOpen(true)
}

const proceed1 = () => {
  dispatch(
    {
      type: 'delete',
      product: {
        title: blurRef
      }
    }
  );
  setModalOpen(false)
}

const cancel1 = () => {
  quantityPlus(blurRef)
  setModalOpen(false)
}

const onBlur1 = (title) => {
  if(blurActive){
    setModalOpen(true)
    setBlurRef(title)
    setActiveBlur(false)
  }
}

  return (
    <>
      {products.map(({
        price, title, description, quantity
      }) => (
        <OrderItem
          key={title}
          price={price}
          title={title}
          description={description}
          quantity={quantity}
          onDelete={()=>deleteProduct(title)}
          plusQuantity={()=>quantityPlus(title)}
          minusQuantity={()=>quantityMinus(title, quantity)}
          openModal={()=> modalOpen1()}
          onBlur ={()=> onBlur1(title)}
        />
      
      ))}

      <hr />
      <div className={styles.subtotal}>
        <div>
          <p>Subtotal</p>
        </div>
        <div className={styles.price}>
          <p>{products.length > 0 ? getSubtotal(products) : <> </>}</p>
          {modalOpen && <ReviewOrderModal setOpenModal={setModalOpen} proceed={()=>proceed1()} cancel={()=>cancel1()}  />}
        </div>
      </div>
    </>
  );
};

export default ReviewOrderWidget;
