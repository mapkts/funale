import _curry1 from './internal/_curry1'
import _isNumber from './internal/_isNumber'

const length = _curry1(list => (list != null && _isNumber(list.length) ? list.length : NaN))
export default length
