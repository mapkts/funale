import _curry3 from './internal/_curry3'
import equals from './equals'

/**
 * Returns `true` if the specified object property is equal, in
 * `equals` terms, to the given value; `false` otherwise.
 *
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @example
 *
 * import { propEq } from 'funale'
 *
 * const fred = {name: 'Fred', age: 12, hair: 'brown'}
 * const hasBrownHair = propEq('hair', 'brown')
 * hasBrownHair(fred) // true
 */
const propEq = _curry3((name, val, obj) => equals(val, obj[name]))
export default propEq
