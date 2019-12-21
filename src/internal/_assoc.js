export default function _assoc(prop, val, obj) {
  const rv = {}
  for (const p in obj) {
    rv[p] = obj[p]
  }
  rv[prop] = val
  return rv
}
