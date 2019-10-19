import _curry2 from './internal/_curry2'

const nth = _curry2((n, as) => {
  const idx = n < 0 ? as.length + n : n
  return as[idx]
})
export default nth
