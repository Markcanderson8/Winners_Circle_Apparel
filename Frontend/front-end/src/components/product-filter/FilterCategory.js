import React, { useState } from 'react';
import FilterItem from './FilterItem';
import styles from './FilterCategory.module.css';

/**
 * @name FilterCategory
 * Creates an expandable filter category based on the given parameters.
 * @param {*} props - the parameters to set the list by.
 * @returns - an expandable category with the fields set.
 */
const FilterCategory = (props) => {
  const {
    title, name, list, handler
  } = props;

  const [open, setOpen] = useState(false);

  // State is tracked here for the clicked state of each option in the component.
  const [fields, setFields] = useState([]);

  const hide = { display: "none" };
  const show = { display: "block" };

  /**
   * sets the state for whether the field is open or closed
   */
  const handleClick = () => {
    setOpen(!open);
  }

  /**
   * When an individual field is changed, sets the state of the category's options, then calls
   * the event handler prop passed from the ProductFilter
   * @param {string} field - the field that was changed
   * @param {boolean} checked - whether the field was checked or unchecked
   */
  const changeFields = (field, checked) => {
    let newFields = [...fields];
    if (checked) {
      newFields.push(field);
      setFields(newFields);
    } else {
      newFields.splice(newFields.indexOf(field), 1);
      setFields(newFields);
    }
    handler(name, newFields);
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', verticalAlign: 'baseline'}} onClick={handleClick}>
      <h4 style={{marginLeft: '10px'}}>{title}</h4>
      <h4>{open ? '-' : '+'}</h4>
      </div>
      <ul className={styles.categoryList} style={open ? show : hide}>
        {list.map((item) => <FilterItem key={item} item={item} name={name} changeFields={changeFields} />)}
      </ul>
      <hr />
    </div>
  );
};
export default FilterCategory;
