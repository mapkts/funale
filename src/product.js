import multiply from './multiply'
import reduce from './reduce'

/**
 * Multiplies together all the elements of a list.
 *
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number} The product of all the elements in the list
 * @example
 *
 * import { product } from 'funale'
 *
 * product([1, 2, 3, 7]) // 42
 */
const product = reduce(multiply, 1)
export default product
