

import React from 'react';

const CartContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'delete': {
      return {
        ...state,
        products: state.products.filter((product) => product.title !== action.product.title)
      };
    }
    case 'add': {
      return {
        ...state,
        products:  onAdd(action, state)
       
      };
    }

    case 'one': {
      return {
       ...state,
        products: addOne(action, state)
      };
    }
    case 'minus': {
      return {
       ...state,
        products: minusOne(action, state)
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}


const addOne = (action, state) => {
  const index = state.products.findIndex((product) => product.title == action.product.title);
  let newProducts = [
    ...state.products.slice(0, index),
    {...state.products[index], quantity: state.products[index].quantity + 1},
    ...state.products.slice(index + 1)
  ];
  return newProducts;
   
}

const minusOne = (action, state) => {
  const newProducts = state.products;
  let newProducts1 = newProducts.map((item)=>
  item.title === action.product.title
  ? { ...item, quantity: Math.max(0,item.quantity -1)}
  : item
  );
  return  newProducts1;
}

const onAdd = (action, state) => {
  let currentList = state.products.findIndex((product) => product.title == action.product.title);
  if(currentList == -1){
    return [...state.products, action.product]
  }
  else {
    if(action.product.quantity >1){
      let newProducts = [...state.products]
newProducts[currentList].quantity = Number(newProducts[currentList].quantity) + Number(action.product.quantity);
 return  [...newProducts]
    }
    else{
      let newProducts = [...state.products]
newProducts[currentList].quantity += 1;
 return  [...newProducts]
    }

  }
}

function CartProvider({ children }) {
  const initialProducts = {
    products: [
    ],
    setProducts: () => { }
  };
  const [state, dispatch] = React.useReducer(cartReducer, initialProducts);

  const value = { state, dispatch };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}
export { CartProvider, useCart };
