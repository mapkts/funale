import _curry2 from './internal/_curry2'

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to omit
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it
 * @example
 *
 * import { omit } from 'funale'
 *
 * omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) // {b: 2, c: 3}
 */
const omit = _curry2((names, obj) => {
  const rv = {}
  const index = {}
  const len = names.length
  let idx = -1

  while (++idx < len) {
    index[names[idx]] = 0
  }

  for (const prop in obj) {
    if (!index.hasOwnProperty(prop)) rv[prop] = obj[prop]
  }

  return rv
})
export default omit
