import _curry2 from './internal/_curry2'
import filter from './filter'

/**
 * The complement of funale's `filter` method.
 *
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} predicate
 * @param {Array} filterable
 * @return {Array} A new filterable
 * @example
 *
 * import { reject } from 'funale'
 *
 * const isEven = n => n % 2 === 0
 * reject(isEven, [1, 2, 3, 4]) // [1, 3]
 * reject(isEven, {a: 1, b: 2, c: 3, d: 4}) // {a: 1, c: 3}
 *
 */
const reject = _curry2((pred, filterable) => {
  const predicate = (acc, x) => !pred(acc, x)
  return filter(predicate, filterable)
})
export default reject
