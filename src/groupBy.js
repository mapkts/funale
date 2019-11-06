import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'
import reduceBy from './reduceBy'

const groupBy = _curry2(_dispatch('groupBy', reduceBy((acc, el) => {
  if (acc == null) acc = []
  acc.push(el)
  return acc
}, null)))
export default groupBy
