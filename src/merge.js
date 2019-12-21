import _curry2 from './internal/_curry2'
import _objectAssign from './internal/_objectAssign'

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @example
 *
 * import { merge } from 'funale'
 *
 * merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }) // { 'name': 'fred', 'age': 40 }
 *
 * const withDefaults = R.merge({x: 0, y: 0})
 * withDefaults({y: 2}) // {x: 0, y: 2}
 */
const merge = _curry2((l, r) => _objectAssign({}, l, r))
export default merge
