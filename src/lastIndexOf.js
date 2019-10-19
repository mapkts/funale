import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import _indexOf from './internal/_indexOf'

const lastIndexOf = _curry2(_dispatch('lastIndexOf', (x, xs) => _indexOf(x, xs, -1)))
export default lastIndexOf
