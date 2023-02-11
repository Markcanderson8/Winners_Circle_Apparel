import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from './CartContext';
import styles from './CheckoutPage.module.css';
import ReviewOrderWidget from './ReviewOrderWidget';
import DeliveryAddress from './forms/DeliveryAddress';
import BillingDetails from './forms/BillingDetails';
import makePurchase from './CheckoutService';
import FilterMenu from '../filter-menu/FilterMenu';
import Spinner from '../spinner/Spinner';
import { isNotBlank, isThreeDigits, isExpired, isSixteenOrMoreDigits, isValidMMYY } from '../../utils/validateCardInfo';

/**
 * @name CheckoutPage
 * @description A view that contains details needed to process a transaction for items
 * @return component
 */
const CheckoutPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const {
    state: { products }
  } = useCart();

  // initializing state for validated fields to fix a bug with uncontrolled components
  const [billingData, setBillingData] = React.useState({
    billingStreet: { value: '', error: false, errorMsg: '' },
    billingStreet2: { value: '', error: false, errorMsg: '' },
    billingCity: { value: '', error: false, errorMsg: '' },
    billingState: { value: '', error: false, errorMsg: '' },
    billingZip: { value: '', error: false, errorMsg: '' },
    email: { value: '', error: false, errorMsg: '' },
    phone: { value: '', error: false, errorMsg: '' },
    creditCard: { value: '', error: false, errorMsg: '' },
    cvv: { value: '', error: false, errorMsg: '' },
    expiration: { value: '', error: false, errorMsg: '' },
    cardholder: { value: '', error: false, errorMsg: '' },
  });

  const onBillingChange = (e) => {
    setBillingData({
      ...billingData, [e.target.id]: {
        value: e.target.value,
        error: false
      }
    });
  };

  // initializing state with an empty object makes the fields uncontrolled components to start.
  // this should be addressed in the future
  const [deliveryData, setDeliveryData] = React.useState({});

  const onDeliveryChange = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.id]: e.target.value });
  };

  const [checked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };

  const setError = (field, message, data) => {
    data = {
      ...data, [field]: {
        error: true,
        errorMsg: message
      }
    };
    return data;
  }

  const validateCard = (cardInfo) => {
    let isValid = true;
    let newBillingData = {...billingData};

    if (isNotBlank(cardInfo.cardNumber)) {
      if (!isSixteenOrMoreDigits(cardInfo.cardNumber)) {
        isValid = false;
        newBillingData = setError('creditCard', 'Credit card number must have at least 16 digits', newBillingData);
      }
    } else {
      isValid = false;
      newBillingData = setError('creditCard', 'Credit Card number cannot be blank', newBillingData);
    }

    if (isNotBlank(cardInfo.cvv)) {
      if (!isThreeDigits(cardInfo.cvv)) {
        isValid = false;
        newBillingData = setError('cvv', 'CVV must be 3 digits', newBillingData);
      }
    } else {
      isValid = false;
      newBillingData = setError('cvv', 'CVV cannot be blank', newBillingData);
    }

    if (isNotBlank(cardInfo.expiration)) {
      if (isValidMMYY(cardInfo.expiration)) {
        if (isExpired(cardInfo.expiration)) {
          isValid = false;
          newBillingData = setError('expiration', 'Card is expired', newBillingData);
        }
      } else {
        isValid = false;
        newBillingData = setError('expiration', 'Invalid expiration date (MM/YY)', newBillingData);
      }
    } else {
      isValid = false;
      newBillingData = setError('expiration', 'Expiration date cannot be blank', newBillingData);
    }

    if (!isNotBlank(cardInfo.cardholder)) {
      isValid = false;
      newBillingData = setError('cardholder', 'Cardholder cannot be blank', newBillingData);
    }
    setBillingData(newBillingData);
    return isValid;
  }

  const handlePay = () => {
    setLoading(true);
    const productData = products.map(({ id, quantity }) => ({ id, quantity }));
    const deliveryAddress = {
      firstName: deliveryData.firstName,
      lastName: deliveryData.lastName,
      street: deliveryData.street,
      street2: deliveryData.street2,
      city: deliveryData.city,
      state: deliveryData.state,
      zip: deliveryData.zip
    };
    const billingAddress = {};
    if (checked) {
      billingAddress.street = deliveryAddress.street;
      billingAddress.street2 = deliveryAddress.street2;
      billingAddress.city = deliveryAddress.city;
      billingAddress.state = deliveryAddress.state;
      billingAddress.zip = deliveryAddress.zip;
    } else {
      billingAddress.street = billingData.billingStreet;
      billingAddress.street2 = billingData.billingStreet2;
      billingAddress.city = billingData.billingCity;
      billingAddress.state = billingData.billingState;
      billingAddress.zip = billingData.billingZip;
    }
    billingAddress.email = billingData.email;
    billingAddress.phone = billingData.phone;

    const creditCard = {
      cardNumber: billingData.creditCard.value,
      cvv: billingData.cvv.value,
      expiration: billingData.expiration.value,
      cardholder: billingData.cardholder.value
    };
    const validateErrors = validateCard(creditCard);
    if (validateErrors) {
      makePurchase(productData, deliveryAddress, billingAddress, creditCard).then(() => {
        setTimeout(() => {
          setLoading(false);
          history.push('/confirmation');
        }, 2000);
      });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner loading={loading} />}
      <FilterMenu />
      <div className={styles.checkoutContainer}>
        <div className={`${styles.step} ${styles.order}`}>
          <h3 className={styles.title}>1. Review Order</h3>
          <ReviewOrderWidget />
        </div>
        <div className={`${styles.step} ${styles.delivery}`}>
          <h3 className={styles.title}>2. Delivery Address</h3>
          <DeliveryAddress onChange={onDeliveryChange} deliveryData={deliveryData} />
          <label htmlFor="useSame" className={styles.sameAddressText}>
            <div className={styles.useSameAddress}>
              <input
                id="useSame"
                onChange={handleCheck}
                type="checkbox"
                value={checked}
              />
            </div>
            Same Billing Address
          </label>
        </div>
        <div className={`${styles.step} ${styles.payment}`}>
          <h3 className={styles.title}>3. Billing Details</h3>
          <BillingDetails
            onChange={onBillingChange}
            billingData={billingData}
            useShippingForBilling={checked}
          />
        </div>
        <div className={styles.payNow}>
          <button onClick={handlePay} type="button" className={styles.payButton}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
