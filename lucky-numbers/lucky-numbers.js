// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const digits1 = array1.join("");
  const digits2 = array2.join("");
  return Number(digits1) + Number(digits2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringNumber = String(value);
  const reversedStringNumber = stringNumber.split("").reverse().join("");
  return stringNumber === reversedStringNumber;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  }

  const number = Number(input);
  if (!number) {
    return "Must be a number besides 0";
  }

  return "";
}
