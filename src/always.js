import _curry1 from './internal/_curry1'

const always = _curry1(x => () => x)
export default always
