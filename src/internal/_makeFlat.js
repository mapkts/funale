import _isArrayLike from './_isArrayLike'

export default function _makeFlat(recursive) {
  return function flatten(list) {
    let val, j, jlen
    let idx = -1
    const ilen = list.length
    const rv = []

    while (++idx < ilen) {
      if (_isArrayLike(list[idx])) {
        val = recursive ? flatten(list[idx]) : list[idx]
        j = -1
        jlen = val.length
        while (++j < jlen) {
          rv[rv.length] = val[j]
        }
      } else {
        rv[rv.length] = list[idx]
      }
    }

    return rv
  }
}
