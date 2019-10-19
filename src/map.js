import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import _isObject from './internal/_isObject'
import _reduce from './internal/_reduce'
import keys from './keys'
import _map from './internal/_map'

/**
 * Takes a function and a functor, applies the function to each of the
 * functor's values, and returns a functor of the same shape. Dispatches
 * to the `map` method of the second argument, if present.
 *
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be executed
 * @param {Array} list The list to be iterate over
 * @return {Array} A new list
 * @example
 *
 * import { map } from 'funale'
 *
 * const double = x => x * 2
 * map(double, [1, 2, 3]) // [2, 4, 6]
 * map(double, {a: 1, b: 2, c: 3}) // {a: 2, b: 4, c: 6}
 */
const map = _curry2(_dispatch('map', (fn, functor) => {
  return _isObject(functor) ?
    _reduce((acc, key) => {
      acc[key] = fn(functor[key])
      return acc
    }, {}, keys(functor)) :
    _map(fn, functor)
}))
export default map
