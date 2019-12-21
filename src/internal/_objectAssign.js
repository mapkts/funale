import _has from './_has'

function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  const output = Object(target)
  const len = arguments.length
  let idx = 0
  while (++idx < len) {
    const source = arguments[idx]
    if (source != null) {
      for (const nextKey in source) {
        if (_has(nextKey, source)) output[nextKey] = source[nextKey]
      }
    }
  }
  return output
}
export default typeof Object.assign === 'function' ? Object.assign : _objectAssign
