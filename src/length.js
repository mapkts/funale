import _curry1 from './internal/_curry1'
import _isNumber from './internal/_isNumber'

/**
 * Returns the value of the `length` property of the given list.
 *
 * @sig: [a] -> Number
 * @param {Array} list The list to inspect
 * @return {Number} The length of the list
 * @example
 *
 * import { length } from 'funale'
 *
 * length([]) // 0
 * length([1, 2, 3]) // 3
 */
const length = _curry1(list => (list != null && _isNumber(list.length) ? list.length : NaN))
export default length
