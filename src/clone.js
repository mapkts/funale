import _clone from './internal/_clone'
import _curry1 from './internal/_curry1'

/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied.
 *
 * Dispatches to a `clone` method if present.
 *
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deep copy of `value`
 * @example
 *
 * import { clone } from 'funale'
 *
 * const objects = [{}, {}, {}]
 * const objectsClone = clone(objects)
 * objects === objectsClone //=> false
 * objects[0] === objectsClone[0] //=> false
 */
const clone = _curry1((value) => {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true)
})
export default clone
