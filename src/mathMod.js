import _curry2 from './internal/_curry2'
import _isInteger from './internal/_isInteger'

const mathMod = _curry2((a, b) => {
  if (!_isInteger(b)) return NaN
  if (!_isInteger(a) || a < 1) return NaN
  return ((b % a) + a) % a
})
export default mathMod
