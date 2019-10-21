import _curry2 from './internal/_curry2'
import _is from './internal/_is'

/**
 * A curried version of `Object.is` function.
 *
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { is } from 'funale'
 *
 * is('abc', 'abc') // true
 */
const is = _curry2(_is)
export default is
