/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 *
 * @param {number} timer
 * @returns {string}
 */
export function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  }
  if (!timer) {
    return "You forgot to set the timer.";
  }
  return "Not done, please wait.";
}

/**
 *
 * @param {string[]} layers
 * @param {number} time
 * @returns {number}
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

/**
 *
 * @param {string[]} layers
 * @returns {Quantities}
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      noodles += 50;
    } else if (layers[i] === "sauce") {
      sauce += 0.2;
    }
  }
  return {
    noodles,
    sauce,
  };
}

/**
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 *
 * @param {object} recipe
 * @param {number} portions
 * @returns {object}
 */
export function scaleRecipe(recipe, portions) {
  const factor = portions / 2;
  const newRecipe = {};
  for (const key in recipe) {
    newRecipe[key] = recipe[key] * factor;
  }
  return newRecipe;
}
