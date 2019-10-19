export default function _filter(pred, list) {
  const rv = []
  const len = list.length
  let idx = -1

  while (++idx < len) {
    if (pred(list[idx])) rv[rv.length] = list[idx]
  }

  return rv
}
