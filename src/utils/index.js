/**
 * Calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = products => {
  const total = products.reduce((total, product) => total + product.price, 0);
  return parseFloat(total.toFixed(2));
};
