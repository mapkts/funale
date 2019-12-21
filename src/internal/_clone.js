import _cloneRegExp from './_cloneRegExp'
import type from '../type'

export default function _clone(value, refFrom, refTo, deep) {
  const copy = function (copiedValue) {
    const len = refFrom.length
    let idx = 0
    while (idx < len) {
      if (value === refFrom[idx]) return refTo[idx]
      idx += 1
    }
    refFrom[idx + 1] = value
    refTo[idx + 1] = copiedValue
    for (const key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key]
    }
    return copiedValue
  }

  switch (type(value)) {
    case 'object': return copy({})
    case 'array': return copy([])
    case 'date': return new Date(value.valueOf())
    case 'regexp': return _cloneRegExp(value)
    default: return value
  }
}
