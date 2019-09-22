import _isArray from './_isArray'

export default function _dispatch(methodName, f) {
  return function () {
    const length = arguments.length
    if (length === 0) return f()
    const obj = arguments[length - 1]
    return (_isArray(obj) || typeof obj[methodName] !== 'function') ?
      f.apply(this, arguments) :
      obj[methodName].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1))
  }
}
