import _curry2 from './internal/_curry2'
import _has from './internal/_has'

/**
 * Returns whether or not an object has an own property with the specific name.
 *
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for
 * @param {Object} obj The obj to query
 * @return {Boolean} Whether the property exists
 * @example
 *
 * import { has } from 'funale'
 *
 * const hasName = has('name')
 * hasName({name: 'alex'}) // true
 * hasName({}) // false
 */
const has = _curry2(_has)
export default has
