import _curry2 from './internal/_curry2'

const join = _curry2((separator, list) => list.join(separator))
export default join
