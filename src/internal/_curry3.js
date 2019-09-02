import _curry1 from './_curry1'
import _curry2 from './_curry2'

/**
 * Internal three-arity curry function.
 *
 * @private
 * @param {Function} function The function to curry
 * @return {Function} A curried function
 */
export default function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
    case 0: return f3
    case 1: return _curry2((_b, _c) => fn(a, _b, _c))
    case 2: return _curry1((_c) => fn(a, b, _c))
    default: return fn(a, b, c)
    }
  }
}
