import _curry2 from './internal/_curry2'

/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 * @example
 *
 * import { pickBy } from 'funale'
 *
 * const isUpperCase = (val, key) => key.toUpperCase() === key
 * pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}) //=> {A: 3, B: 4}
 */
const pickBy = _curry2((pred, obj) => {
  const rv = {}
  for (const prop in obj) {
    if (pred(obj[prop], prop, obj)) rv[prop] = obj[prop]
  }
  return rv
})
export default pickBy
