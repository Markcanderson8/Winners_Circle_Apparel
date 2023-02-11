import React, { useState } from "react";
import styles from './FilterItem.module.css';

/**
 * @name FilterItem
 * Component that indicates whether to filter or not based on the parameter
 * @param {*} props - 
 * @returns a list item containing a checkbox and a label that indicates what option it is for
 */
const FilterItem = (props) => {
  const { item, name, changeFields } = props;

  const [checked, setChecked] = useState(false);

  /**
   * Event handler for the checkbox. Sets the state of the checkbox and also calls the event handler prop for the FilterCategory
   * @param {*} event 
   */
  const handleChange = (event) => {
    setChecked(event.target.checked);
    changeFields(item, event.target.checked);
  }

  return (
    <li style={{display: 'flex', verticalAlign: 'baseline', marginLeft: '10px'}}>
      <input className={styles.checkbox} type='checkbox' name={name} checked={checked} onChange={handleChange} />
      <label className={styles.label} htmlFor={item}>{item}</label>
    </li>
  );
}
export default FilterItem;