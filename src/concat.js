import _curry2 from './internal/_curry2'
import _type from './internal/_type'
import _isFunction from './internal/_isFunction'

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
const concat = _curry2((a, b) => {
  const typeA = _type(a)
  const typeB = _type(b)

  if (typeA !== typeB) throw new TypeError('two arguments are not of the same type')
  if (typeA === 'array') return b.concat(a)
  if (typeA === 'string') return b + a
  if (b != null && _isFunction(b.concat)) return b.concat(a)
  throw new TypeError('concat method not found')
})
export default concat
