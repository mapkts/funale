import _curry2 from './internal/_curry2'

/**
 * Divides two numbers. Equivalent to `a / b`
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `a / b`
 * @example
 *
 * import { infixDivide } from 'funale'
 *
 * infixDivide(42, 2) // 21
 */
const infixDivide = _curry2((a, b) => a / b)
export default infixDivide
