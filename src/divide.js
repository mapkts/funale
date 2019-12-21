import _curry2 from './internal/_curry2'

/**
 * Divides two numbers. Equivalent to `b / a`
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `b / a`
 * @example
 *
 * import { divide } from 'funale'
 *
 * const half = divide(2)
 * half(42) // 21
 */
const divide = _curry2((a, b) => b / a)
export default divide
