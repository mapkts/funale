export default function _dissoc(prop, obj) {
  const rv = {}
  for (const p in obj) {
    rv[p] = obj[p]
  }
  delete rv[prop]
  return rv
}
