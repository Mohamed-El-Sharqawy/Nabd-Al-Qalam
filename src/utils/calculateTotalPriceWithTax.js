export function calculateTotalPriceWithTax(cartTotalPrice) {
  // Define the tax rate
  const taxRate = 1.5 / 100; // 1.5%

  // Calculate the subtotal (cart total + shipping)
  const subtotal = cartTotalPrice;

  // Calculate the tax amount
  let taxAmount = subtotal * taxRate;

  // If the tax amount is less than $1, set taxAmount to $1
  if (taxAmount < 1) {
    taxAmount = 1;
  }

  // Calculate the total price with the adjusted tax amount
  const totalPrice = subtotal + taxAmount;

  // Return the total price
  return totalPrice;
}

export function calculateTax(cartTotalPrice) {
  // Define the tax rate
  const taxRate = 1.5 / 100; // 1.5%

  // Calculate the tax amount
  let taxAmount = cartTotalPrice * taxRate;

  // If the tax amount is less than $1, set taxAmount to $1
  if (taxAmount < 1) {
      taxAmount = 1;
  }

  // Return the tax amount
  return taxAmount;
}