import _curry2 from './internal/_curry2'
import _combine from './internal/_combine'

/**
 * Returns a new list containing the elements of the given list, followed by
 * the given element.
 *
 * @sig a -> [a] -> [a]
 * @param {*} el The element to append
 * @param {Array} list The list to append element to
 * @return {Array} A new list
 * @example
 *
 * import { append } from 'funale'
 *
 * append('c', ['a', 'b']) // ['a', 'b', 'c']
 */
const append = _curry2((el, list) => {
  return _combine(list, [el])
})
export default append
