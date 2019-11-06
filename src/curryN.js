import _curry1 from './internal/_curry1'
import _curry2 from './internal/_curry2'
import _arity from './internal/_arity'
import _curryN from './internal/_curryN'

/**
 * Returns a curried equivalent of the provided function, with the specified arity.
 *
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} arity The arity of the returned function
 * @param {Function} fn The function to curry
 * @return {Funtion} A new curried function
 * @example
 *
 * import { curryN } from 'funale'
 *
 * const sumArgs = (...args) => args.reduce((a, b) => a + b)
 * const curriedAddFourNumbers = curryN(4, sumArgs)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4) // 10
 */
const curryN = _curry2((n, fn) => {
  return n === 0 ? fn : n === 1 ? _curry1(fn) : _arity(n, _curryN(n, fn))
})
export default curryN
