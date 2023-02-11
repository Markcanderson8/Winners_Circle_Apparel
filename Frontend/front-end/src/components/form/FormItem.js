import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItem = ({
  onChange, value, id, label, placeholder, type, error, errorMsg
}) => (

  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div>
      <div style={{color: 'red', fontSize: 'small', fontStyle: 'italic'}}>{errorMsg}</div>
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          style={error ? {border: '2px solid red'} : {border: '1px solid black'}}
        />
      </div>
    </label>
  </div>
);

export default FormItem;
