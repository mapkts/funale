import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import _isObject from './internal/_isObject'
import _reduce from './internal/_reduce'
import keys from './keys'
import _filter from './internal/_filter'

/**
 * Takes a predicate and a filterable, and returns a new filterable with all the elements that
 * satisfy the predicate.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} predicate
 * @param {Array} filterable
 * @return {Array} Filterable
 * @example
 *
 * import { filter } from 'funale'
 *
 * const isEven = n => n % 2 === 0
 * filter(isEven, [1, 2, 3, 4]) // [2, 4]
 * filter(isEven, {a: 1, b: 2, c: 3, d: 4}) // {b: 2, d: 4}
 */
const filter = _curry2(_dispatch('filter', (pred, filterable) => {
  return _isObject(filterable) ?
    _reduce((acc, key) => {
      if (pred(filterable[key])) {
        acc[key] = filterable[key]
      }
      return acc
    }, {}, keys(filterable)) :
    _filter(pred, filterable)
}))
export default filter
