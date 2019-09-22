/**
 * Internal one-arity curry function.
 *
 * @private
 * @param {Function} function The function to curry
 * @return {Function} A curried function
 */
export default function _curry1(fn) {
  return function f1() {
    return arguments.length ? fn.apply(this, arguments) : f1
  }
}
