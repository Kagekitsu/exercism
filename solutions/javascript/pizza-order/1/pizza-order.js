/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10
  };

  const extraPrices = {
    'ExtraSauce': 1,
    'ExtraToppings': 2
  };

  // Get the base price of the pizza
  let totalPrice = basePrices[pizza] ?? 0;

  // Add the price of each extra
  for (const extra of extras) {
    totalPrice += extraPrices[extra] ?? 0;
  }

  return totalPrice;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(orders) {

  const basePrices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10
  };

  const extraPrices = {
    'ExtraSauce': 1,
    'ExtraToppings': 2
  };

  let total = 0;

  for (const order of orders) {

    let pizzaTotal = basePrices[order.pizza] ?? 0;

    for (const extra of order.extras ?? []) {
      pizzaTotal += extraPrices[extra] ?? 0;
    }

    total += pizzaTotal;
  }

  return total;
}
