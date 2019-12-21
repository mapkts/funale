import _curry2 from './internal/_curry2'

/**
 * Adds two values.
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @example
 *
 * import { add } from 'funale'
 *
 * add(2, 3) // 5
 * add(2)(3) // 5
 */
const add = _curry2((a, b) => Number(a) + Number(b))
export default add
