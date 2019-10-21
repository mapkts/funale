import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import _indexOf from './internal/_indexOf'

/**
 * Returns the position of the last occurence of an item in a list, or `-1`
 * if the item is not found.
 *
 * Dispatches to the `lastIndexOf` method of the second argument, if present.
 *
 * @sig a -> [a] -> Number
 * @param {*} item The item to find
 * @param {Array} list The list to consider
 * @return {Number} The last index of the given item, or -1 if the item is not found
 * @example
 *
 * import { lastIndexOf } from 'funale'
 *
 * indexOf(3, [1, 2, 3]) // 2
 * indexOf(4, [1, 2, 3]) // -1
 * indexOf('def', 'abcdef') // 3
 */
const lastIndexOf = _curry2(_dispatch('lastIndexOf', (x, xs) => _indexOf(x, xs, -1)))
export default lastIndexOf
