import _curry1 from './internal/_curry1'

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap
 * @return {Function} A new function wrapping `fn`
 * @example
 *
 * import { binary } from 'funale'
 *
 * const takesTwoArgs = binary((a, b, c) => [a, b, c])
 * takesTwoArgs.length // 2
 * takesTwoArgs(1, 2, 3) // [1, 2, undefined]
 */
const binary = _curry1(fn => function (a, b) {
  return fn.call(this, a, b)
})
export default binary
