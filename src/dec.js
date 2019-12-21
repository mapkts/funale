import add from './add'

/**
 * Decrements its argument.
 *
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @example
 *
 * import { dec } from 'funale'
 *
 * dec(42) // 41
 */
const dec = add(-1)
export default dec
