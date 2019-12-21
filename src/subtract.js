import _curry2 from './internal/_curry2'

/**
 * Subtracts its first argument from its second argument
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `b - a`
 * @example
 *
 * import { subtract } from 'funale'
 *
 * const dec = subtract(1)
 * dec(42) // 41
 */
const subtract = _curry2((a, b) => b - a)
export default subtract
