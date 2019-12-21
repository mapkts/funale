import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * Concatenating the given lists or strings (both arguments must be of the same type).
 *
 * Dispatches to the `concat` method of the second argument, if present.
 *
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} list The list to concat
 * @param {Array|String} list The original list
 * @return {Array|String} A list of the elements of secondArg followed by the elements of firstArg
 * @example
 *
 * import { concat } from 'funale'
 *
 * concat([3, 4], [1, 2]) // [1, 2, 3, 4]
 * concat('world')('hello ') // 'hello world'
 */
const concat = _curry2(_concat)
export default concat
