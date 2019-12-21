import _curry1 from './internal/_curry1'
import mean from './mean'

const median = _curry1(list => {
  const len = list.length
  if (len === 0) return NaN
  const width = 2 - len % 2
  const idx = (len - width) / 2

  return mean(
    Array.prototype.slice.call(list, 0)
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      .slice(idx, idx + width)
  )
})
export default median
