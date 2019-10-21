import _curry2 from './internal/_curry2'
import _includes from './internal/_includes'

/**
 * Returns `true` if the specific value is in the given list; `false` otherwise.
 *
 * @sig a -> [a] -> Boolean
 * @param {*} item The item to test
 * @param {Array} list The list to consider
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise
 * @example
 *
 * import { includes } from 'funale'
 *
 * includes(2, [1, 2, 3]) // true
 * includes(4, [1, 2, 3]) // false
 * includes([42], [[42]]) // true
 * includes({name: 'Curry'}, [{name: 'Curry'}]) // true
 * includes('abc', 'abcdef') // true
 */
const includes = _curry2(_includes)
export default includes
