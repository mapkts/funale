import _curry2 from './internal/_curry2'
import _includes from './internal/_includes'
import reject from './reject'
import flip from './flip'

/**
 * Returns a new list without values in the first argument.
 *
 * @sig [a] -> [a] -> [a]
 * @param {Array} xs The values to be removed
 * @param {Array} list The list to remove values from
 * @return {Array} The new array without values in `xs`
 * @example
 *
 * import { without } from 'funale'
 * without([2, 3], [1, 2, 3, ,4]) // [1, 4]
 */
const without = _curry2((xs, list) => reject(flip(_includes)(xs), list))
export default without

