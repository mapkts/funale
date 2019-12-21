import _curry3 from './internal/_curry3'
import adjust from './adjust'
import always from './always'

const update = _curry3((idx, x, list) => adjust(idx, always(x), list))
export default update
