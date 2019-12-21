import _curry1 from './internal/_curry1'

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap
 * @return {Function} A new function wrapping `fn`
 * @example
 *
 * import { unary } from 'funale'
 *
 * const takesOneArg = unary((a, b) => [a, b])
 * takesOneArg.length // 1
 * takesOneArg(1, 2) // [1, undefined]
 */
const unary = _curry1(fn => function (a) {
  return fn.call(this, a)
})
export default unary
