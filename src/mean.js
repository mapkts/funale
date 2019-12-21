import _curry1 from './internal/_curry1'
import sum from './sum'

/**
 * Returns the mean of the given list of numbers.
 *
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 * import { mean } from 'funale'
 *
 * mean([1, 2, 3]) // 2
 * mean([]) // NaN
 */
const mean = _curry1(list => sum(list) / list.length)
export default mean
