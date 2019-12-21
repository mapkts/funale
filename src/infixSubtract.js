import _curry2 from './internal/_curry2'

/**
 * Subtracts its second argument from its first argument
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `a - b`
 * @example
 *
 * import { infixSubtract } from 'funale'
 *
 * infixSubtract(42, 1) // 41
 */
const infixSubtract = _curry2((a, b) => a - b)
export default infixSubtract
