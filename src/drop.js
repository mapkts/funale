import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import slice from './slice'

/**
 * Returns all but the first `n` elements of the given list if `n` is positive, or
 * returns all but the last `n` elements of the given list if `n` is negative.
 *
 * @sig Number -> [a] -> [a]
 * @param {Number} n
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 * import { drop } from 'funale'
 *
 * drop(1, ['a', 'b', 'c']) // ['b', 'c']
 * drop(3, ['a', 'b', 'c']) // []
 * drop(4, ['a', 'b', 'c']) // []
 * drop(1, 'abc') // 'bc'
 * drop(3, 'abc') // ''
 * drop(4, 'abc') // ''
 */
const drop = _curry2(_dispatch('drop', (n, as) => {
  return n >= 0 ? slice(n, Infinity, as) : slice(0, n, as)
}))
export default drop
