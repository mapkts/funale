import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import _makeFlat from './internal/_makeFlat'
import map from './map'

/**
 * Maps a function over a list and concatenates the result. If second argument
 * is a function, `chain(f, g)(x)` is equivalent as `f(g(x), x)`.
 *
 * Dispatches to the `chain` method of the second arugment, if present.
 *
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 * import { chain } from 'funale'
 *
 * const duplicate = x => [x, x]
 * chain(duplicate, [1, 2, 3]) // [1, 1, 2, 2, 3, 3]
 */
const chain = _curry2(_dispatch('chain', (fn, monad) => {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x) }
  }
  return _makeFlat(false)(map(fn, monad))
}))
export default chain

