import _curry1 from './internal/_curry1'
import _isString from './internal/_isString'

const reverse = _curry1(list => (_isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse()))
export default reverse
