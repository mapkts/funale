import _curry2 from './internal/_curry2'
import _combine from './internal/_combine'
import _reduce from './internal/_reduce'
import map from './map'

/**
 * Applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the first argument, if presented.
 * Also treats curried functions as applicatives.
 *
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 * import { ap } from 'funale'
 *
 * const double = x => x * 2
 * const plus3 = x => x + 3
 * ap([double, plus3], [1, 2, 3]) // [2, 4, 6, 4, 5, 6]
 *
 * // can also be used as S combinator when only two functions are passed
 * const f = r => a => r + a
 * ap(f, double)(10) // 10 + (10 * 2)
 */
const ap = _curry2((applyF, applyX) => {
  return typeof applyF.ap === 'function'
    ? applyF.ap(applyX)
    : typeof applyF === 'function'
      ? (x) => applyF(x)(applyX(x))
      : _reduce((acc, f) => _combine(acc, map(f, applyX)), [], applyF)
})
export default ap
