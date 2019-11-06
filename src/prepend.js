import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * Returns a new list with the given element at the front, followed by
 * the elements of the list.
 *
 * @sig a -> [a] -> [a]
 * @param {*} el The element to prepend
 * @param {Array} list The list to prepend element to
 * @return {Array} A new list
 * @example
 *
 * import { append } from 'funale'
 *
 * append('c', ['a', 'b']) // ['a', 'b', 'c']
 */
const prepend = _curry2((el, list) => {
  return _concat([el], list)
})
export default prepend
