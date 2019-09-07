import _curry2 from './internal/_curry2'

/**
 * A curried version of ES6 Object.is
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
const is = _curry2((x, y) => ( x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y ))
export default is
