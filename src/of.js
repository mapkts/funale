import _curry1 from './internal/_curry1'
import _of from './internal/_of'

/**
 * Returns a sigleton array containing the value provided.
 *
 * @sig a -> [a]
 * @param {*} x Any value
 * @return {Array} An array wrapping `x`
 * @example
 *
 * import { of } from 'funale'
 * of(42) // [42]
 */
const of = _curry1(_of)
export default of
