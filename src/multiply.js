import _curry2 from './internal/_curry2'

/**
 * Multiplies two numbers.
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}`a * b`
 * @example
 *
 * import { multiply } from 'funale'
 *
 * const double = multiply(2)
 * const triple = multiply(3)
 * double(3) // 6
 * triple(4) // 12
 * multiply(2, 5) // 10
 */
const multiply = _curry2((a, b) => a * b)
export default multiply
