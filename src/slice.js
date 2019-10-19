import _curry3 from './internal/_curry3'
import _dispatch from './internal/_dispatch'

const slice = _curry3(_dispatch('slice', (from, to, list) => {
  return Array.prototype.slice.call(list, from, to)
}))
export default slice
