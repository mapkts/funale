import add from './add'
import reduce from './reduce'

/**
 * Adds together all elements of a list
 *
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 * import { sum } from 'funale'
 *
 * sum([1, 2, 3, 4]) // 10
 */
const sum = reduce(add, 0)
export default sum
