export default function _path(paths, obj) {
  let val = obj
  let idx = -1
  while (++idx < paths.length) {
    if (val == null) return
    val = val[paths[idx]]
  }
  return val
}
