import _curry2 from './internal/_curry2'
import _path from './internal/_path'

/**
 * Returns a function when supplied an object returns the indicated
 * property of that object, if exists.
 *
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} prop The property name
 * @param {Object} obj The object to query
 * @return {*} The value of `prop`
 * @example
 *
 * import { prop } from 'funale'
 *
 * const getName = prop('name')
 * getName({name: 'Fred', age: 22}) // 'Fred'
 * getName({id: 42, age: 22}) // undefined
 */
const prop = _curry2((prop, obj) => _path([prop], obj))
export default prop

