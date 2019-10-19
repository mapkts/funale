import _curry1 from './internal/_curry1'

/**
 * Returns a list of a given object's own enumerable property names, in the same order
 * as that provided by a for...in loop.
 *
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own enumerable properties
 * @example
 *
 * import { keys } from 'funale'
 *
 * keys({a: 1, b: 2, c: 3}) // ['a', 'b', 'c']
 */
const keys = _curry1(obj => (Object(obj) !== obj ? [] : Object.keys(obj)))
export default keys
