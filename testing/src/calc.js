export function calculatePrice(originalPrice, tax) {
  let totalPrice;
  totalPrice = originalPrice + (originalPrice * tax) / 100;
  return totalPrice;
}
