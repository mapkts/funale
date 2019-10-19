import _curry1 from './_curry1'
import _curry2 from './_curry2'
import _curry3 from './_curry3'

/**
 * Internal four-arity curry function.
 *
 * @private
 * @param {Function} function The function to curry
 * @return {Function} A curried function
 */
export default function _curry4(fn) {
  return function f4(a, b, c, d) {
    switch (arguments.length) {
      case 0: return f4
      case 1: return _curry3((_b, _c, _d) => fn(a, _b, _c, _d))
      case 2: return _curry2((_c, _d) => fn(a, b, _c, _d))
      case 3: return _curry1((_d) => fn(a, b, c, _d))
      default: return fn(a, b, c, d)
    }
  }
}
