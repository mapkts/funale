import _isArray from './_isArray'
import _isString from './_isString'

export default function _isArrayLike(x) {
  if (_isArray(x)) { return true }
  if (!x) { return false }
  if (typeof x !== 'object') { return false }
  if (_isString(x)) { return false }
  if (x.nodeType === 1) { return !!x.length }
  if (x.length === 0) { return true }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  }
  return false
}
