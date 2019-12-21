import _curry3 from './internal/_curry3'
import _isInteger from './internal/_isInteger'
import _isArray from './internal/_isArray'
import _has from './internal/_has'
import _assoc from './internal/_assoc'

/**
 * Makes a shallow copy of an object, settting or overriding the specific
 * property with the given value if firstArg is a string, or setting or
 * overriding the specific node with the given value when firstArg is a
 * path array.
 *
 * @sig String -> a -> {k: v} -> {k: v}
 * @sig [String|Int] -> a -> {a} -> {a}
 * @param {String|Array} path The prop or path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original expect the specific prop/path
 * @example
 *
 * import { assoc } from 'funale'
 *
 * assoc('a', 1, {a: 0}) // {a: 1}
 * assoc('b', 1, {a: 0}) // {a: 0, b: 1}
 * assoc(['a', 'b'], 1, {a: {b: 0}}) // {a: {b: 1}}
 * assoc(['a', 'b'], 1, {}) // {a: {b: 1}}
 */
const assoc = _curry3(function assocPath(path, val, obj) {
  if (typeof path === 'string') return _assoc(path, val, obj)
  if (path.length === 0) return val

  const idx = path[0]
  if (path.length > 1) {
    const nextObj = (obj != null && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {}
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj)
  }
  if (_isInteger(idx) && _isArray(obj)) {
    const arr = [].concat(obj)
    arr[idx] = val
    return arr
  }
  return _assoc(idx, val, obj)
})
export default assoc
