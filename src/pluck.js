import _curry2 from './internal/_curry2'
import map from './map'
import prop from './prop'

/**
 * Returns a new list by plucking the given property from each object in a list
 *
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key to pluck off from each object
 * @param {Array} functor The functor to consider
 * @return {Array} The list of values for the given keys
 * @example
 *
 * import { pluck } from 'funale'
 *
 * const getAges = pluck('age')
 * getAges([{name: 'Alex', age: 29}, {name: 'Fred', age: 27}]); // [29, 27]
 *
 * pluck(0, [[1, 2], [3, 4]]) // [1, 3]
 * pluck('val', {a: {val: 3}, b: {val: 5}}) // {a: 3, b: 5}
 */
const pluck = _curry2((p, list) => map(prop(p), list))
export default pluck
