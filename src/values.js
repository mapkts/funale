import _curry1 from './internal/_curry1'
import keys from './keys'

/**
 * Returns a list of a given object's own enumerable property values, in the same order
 * as that provided by for...in loop.
 *
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the given object's own enumerable properties
 * @example

 * import { values } from 'funale'
 *
 * values({a: 1, b: 2, c: 3}) // [1, 2, 3]
 */
const values = _curry1(obj => {
  const props = keys(obj)
  const len = props.length
  const vals = []
  let idx = -1
  while (++idx < len) {
    vals[idx] = obj[props[idx]]
  }

  return vals
})
export default values

