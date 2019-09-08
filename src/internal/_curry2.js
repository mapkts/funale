import _curry1 from './_curry1'

/**
 * Internal two-arity curry function.
 *
 * @private
 * @param {Function} function The function to curry
 * @return {Function} A curried function
 */
export default function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0: return f2
      case 1: return _curry1((_b) => fn(a, _b))
      default: return fn(a, b)
    }
  }
}
