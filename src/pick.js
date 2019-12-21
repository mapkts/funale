import _curry2 from './internal/_curry2'

/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it
 * @example
 *
 * import { pick } from 'funale'
 *
 * pick(['a', 'c', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}) // {a: 1, c: 3}
 **/
const pick = _curry2((names, obj) => {
  const rv = {}
  let idx = -1

  while (++idx < names.length) {
    if (names[idx] in obj) rv[names[idx]] = obj[names[idx]]
  }

  return rv
})
export default pick
