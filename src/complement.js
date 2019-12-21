import _curry1 from './internal/_curry1'
import _complement from './internal/_complement'

/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @example
 *
 * import { complement } from 'funale'
 *
 * const isEven = n => n % 2 === 0
 * const isOdd = complement(isEven)
 * isEven(1) // false
 * isOdd(1) // true
 */
const complement = _curry1(_complement)
export default complement
