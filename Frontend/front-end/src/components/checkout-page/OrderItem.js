import React from 'react';
import styles from './OrderItem.module.css';
import { toPrice } from './ReviewOrderWidgetService';
import trashcan from './trashcan.png';


/**
 * @name OrderItem
 * @description Displays an order row
 * @return component
 */
const OrderItem = ({
  price, title, description, quantity, onDelete, plusQuantity, minusQuantity, onBlur
}) => (
  <div className={styles.orderItem}>
    <div className={styles.image}>
      IMAGE HERE
    </div>
    <div className={styles.item}>
      <p className={styles.itemTitle}>{title}</p>
      <p>{description}</p>
      <p>{`Qty:${quantity}`} <button className={styles.plusBtn} onClick={plusQuantity}>+</button> <button className={styles.minusBtn} onBlur={onBlur} onClick={minusQuantity}><b>-</b> </button>
      <img src={trashcan} className={styles.trashcan} alt="" onClick={onDelete}/>
    
      </p>
    </div>
    <div className={styles.price}>
      <p>{toPrice(quantity * price)}</p>
    </div>
  </div>
);

export default OrderItem;
