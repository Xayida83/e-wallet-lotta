
//* Luhn-algoritmen för att validera kortnummer
export const isValidCardNumber = (cardNumber) => {
  // Rensa bort alla mellanslag från kortnumret
  const cleanedCardNumber = cardNumber.replace(/\s+/g, '');

  // Kontrollera att det är exakt 16 siffror
  if (!/^\d{16}$/.test(cleanedCardNumber)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  // Iterera genom siffrorna baklänges
  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // Om summan är delbar med 10, är kortnumret giltigt
  return sum % 10 === 0;
};

//* Validera kortnummer med mellanslag (XXXX XXXX XXXX XXXX)
export const validateCardNumber = (cardNumber) => {
  // Rensa bort alla mellanslag
  const cleanedCardNumber = cardNumber.replace(/\s+/g, '');

  // Kontrollera om kortnumret är giltigt enligt Luhn-algoritmen
  return isValidCardNumber(cleanedCardNumber)
    ? null // Inget fel
    : 'Invalid card number. Please enter a valid 16-digit card number.';
};

//* Validera kortinnehavarens namn (får inte innehålla siffror)
export const validateCardholderName = (cardholder) => {
  return /\d/.test(cardholder)
    ? 'Cardholder name cannot contain numbers.'
    : null; // Inget fel
};

//* Validera utgångsdatum (får inte vara passerat)
export const validateExpireDate = (expireMonth, expireYear) => {
  const currentYear = new Date().getFullYear() % 100; // Får de sista två siffrorna av året
  const currentMonth = new Date().getMonth() + 1; // Månad 1-12

  //* Kontrollera om utgångsdatumet har passerat
  if (expireYear < currentYear || (expireYear === currentYear && expireMonth < currentMonth)) {
    return 'The expiration date cannot be in the past.';
  }

  //* Kontrollera om månad är giltig
  if (expireMonth < 1 || expireMonth > 12) {
    return 'Invalid expiration month.';
  }

  return null; // Inget fel
};
