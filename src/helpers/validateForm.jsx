export const validateForm = ({ expiryDate, cvc }) => {
  const newErrors = {};
  const [month, year] = expiryDate.split('/');
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
    newErrors.expiryDate = 'Invalid month.';
  }

  if (parseInt(year, 10) < currentYear) {
    newErrors.expiryDate = 'Year cannot be in the past.';
  }

  if (parseInt(year, 10) === currentYear && parseInt(month, 10) < currentMonth) {
    newErrors.expiryDate = 'Expiration date cannot be in the past.';
  }

  if (!/^\d{3}$/.test(cvc)) {
    newErrors.cvc = 'CVC must be 3 digits.';
  }

  return newErrors;
};
