import _is from './_is'
import _equals from './_equals'

export default function _indexOf(x, list, dir, idx) {
  const length = list.length
  const method = dir > 0 ? 'indexOf' : 'lastIndexOf'

  if (idx === undefined) idx = dir > 0 ? 0 : length - 1

  if (typeof list[method] === 'function') {
    switch (typeof x) {
      case 'number':
        if (x === 0 || x !== x) {
          for (; idx >= 0 && idx < length; idx += dir) {
            if (_is(x, list[idx])) return idx
          }
          return -1
        }
        return list[method](x, idx)
      case 'undefined':
      case 'boolean':
      case 'string':
      case 'function':
        return list[method](x, idx)
      case 'object':
        if (x === null) return list[method](x, idx)
    }
  }

  for (; idx >= 0 && idx < length; idx += dir) {
    if (_equals(x, list[idx], [], [])) return idx
  }
  return -1
}
