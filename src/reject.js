import _curry2 from './internal/_curry2'
import filter from './filter'

const reject = _curry2((pred, filterable) => {
  const predicate = (acc, x) => !pred(acc, x)
  return filter(predicate, filterable)
})
export default reject
