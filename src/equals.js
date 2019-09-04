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
 * import { equals } from 'funale'
 *
 * equals('abc', 'abc') // true
 */
const equals = _curry2((x, y) => ( x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y ))
export default equals
