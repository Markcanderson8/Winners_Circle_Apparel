const isNotBlank = (value) => {
  return (value !== '' && value !== undefined);
}

const isSixteenOrMoreDigits = (cardNumber) => {
  return /^.\d{15,}$/.test(cardNumber);
}

const isThreeDigits = (cvv) => {
  return (cvv.length === 3 && !/\D/.test(cvv));
}

const isValidMMYY = (expiration) => {
  return (/^\d{2}\/\d{2}$/.test(expiration));
}
const isExpired = (date) => {
  const currentDate = new Date();
      // build an actual date [MM, 31, YYYY] from the month and year provided
      const dateArray = date.split('/');
      dateArray.splice(1, 0, '31');
      const expirationDate = new Date(dateArray);

      return (expirationDate < currentDate);
}

export { isNotBlank, isSixteenOrMoreDigits, isThreeDigits, isValidMMYY, isExpired };