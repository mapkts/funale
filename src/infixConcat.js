import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * Concatenating the given lists or strings (both arguments must be of the same type).
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} list1
 * @param {Array|String} list2
 * @return {Array|String} A list of the elements of fisrtArg followed by the elements of secondArg
 * @example
 *
 * import { infixConcat } from 'funale'
 *
 * infixConcat([1, 2], [3, 4]) // [1, 2, 3, 4]
 * infixConcat('hello ')('world') // 'hello world'
 */
const infixConcat = _curry2((a, b) => _concat(b, a))
export default infixConcat
