import add from './add'

/**
 * Increments its argument.
 *
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @example
 *
 * import { inc } from 'funale'
 *
 * inc(42) // 43
 */
const inc = add(1)
export default inc
