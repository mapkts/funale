/* eslint-disable no-case-declarations */

import _curry2 from './internal/_curry2'
import _isInteger from './internal/_isInteger'
import _isArray from './internal/_isArray'
import _assoc from './internal/_assoc'
import _dissoc from './internal/_dissoc'
import remove from './remove'
import update from './update'

/**
 * Returns a shallow clone of an object, omitting the property if firstArg is a string,
 * or omitting the property at the given path if firstArg is an array.
 *
 * @sig String -> {k: v} -> {k: v}
 * @sig [String|Int] -> {k: v} -> {k: v}
 * @param {String|Array} path The prop or the path of value to remove
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property or the property at path
 * @example
 *
 * import { dissoc } from 'funale'
 *
 * dissoc('a', {a: {b: {c: 42}}}) // {}
 * dissoc(['a', 'b', 'c'], {a: {b: {c: 42}}}) // {a: {b: {}}}
 */
const dissoc = _curry2(function dissocPath(path, obj) {
  if (typeof path === 'string') return _dissoc(path, obj)
  switch (path.length) {
    case 0:
      return obj
    case 1:
      return _isInteger(path[0]) && _isArray(obj) ? remove(path[0], 1, obj) : _dissoc(path[0], obj)
    default:
      const head = path[0]
      const tail = Array.prototype.slice.call(path, 1)
      if (obj[head] == null) {
        return obj
      } else if (_isInteger(head) && _isArray(obj)) {
        return update(head, dissocPath(tail, obj[head]), obj)
      }
      return _assoc(head, dissocPath(tail, obj[head]), obj)
  }
})
export default dissoc
