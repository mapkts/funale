export default function _combine(a1, a2) {
  a1 = a1 || []
  a2 = a2 || []
  let idx
  const len1 = a1.length
  const len2 = a2.length
  const rv = []

  idx = -1
  while (++idx < len1) {
    rv[rv.length] = a1[idx]
  }
  idx = -1
  while (++idx < len2) {
    rv[rv.length] = a2[idx]
  }
  return rv
}
