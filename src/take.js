import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import slice from './slice'

/**
 * Returns the first `n` elements of the given list if first argument is positive, or
 * returns the last `n` elements of the given list if first argument is negative.
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @sig Number -> [a] -> [a]
 * @param {Number} n
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 * import { take } from 'funale'
 *
 * take(1, ['a', 'b', 'c']) // ['a']
 * take(3, ['a', 'b', 'c']) // ['a', 'b', 'c']
 * take(4, ['a', 'b', 'c']) // ['a', 'b', 'c']
 * take(-1, ['a', 'b', 'c']) // ['c']
 * take(-3, ['a', 'b', 'c']) // ['a', 'b', 'c']
 * take(-4, ['a', 'b', 'c']) // ['a', 'b', 'c']
 */
const take = _curry2(_dispatch('take', (n, as) => {
  return n >= 0 ? slice(0, n, as) : slice(n, Infinity, as)
}))
export default take
