import _curry2 from './internal/_curry2'

/**
 * Returns a string by concatenating all of the elements in a list, separated by a specific separator string.
 *
 * @sig String -> [a] -> String
 * @param {String} separator The separator string used to separate the list
 * @param {Array} list The list to join
 * @return {String} The string with all the elements joined
 * @example
 *
 * import { join } from 'funale'
 *
 * join(' ', [1, '2', 3]) // '1 2 3'
 * join('|', [1, '2', 3]) // '1|2|3'
 */
const join = _curry2((separator, list) => list.join(separator))
export default join
