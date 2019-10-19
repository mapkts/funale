import _curry2 from './internal/_curry2'
import slice from './slice'
import length from './length'

const splitAt = _curry2((idx, as) => {
  return [slice(0, idx, as), slice(idx, length(as), as)]
})
export default splitAt
