// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesNumber = 0;
  let cutWedges = 0;

  while (cutWedges < wedgesNeeded && limes.length > 0) {
    const currentLime = limes[0];
    switch (currentLime) {
      case "small":
        cutWedges += 6;
        break;
      case "medium":
        cutWedges += 8;
        break;
      case "large":
        cutWedges += 10;
    }
    limesNumber++;
    limes.splice(0, 1);
  }
  return limesNumber;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    const juicePreparationTime = timeToMixJuice(orders[0]);
    timeLeft -= juicePreparationTime;
    orders.splice(0, 1);
  } while (timeLeft > 0 && orders.length > 0);
  return orders;
}
