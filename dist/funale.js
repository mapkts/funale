(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.F = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Internal one-arity curry function.
   *
   * @private
   * @param {Function} function The function to curry
   * @return {Function} A curried function
   */
  function _curry1(fn) {
    return function f1() {
      return arguments.length ? fn.apply(this, arguments) : f1;
    };
  }

  /**
   * Internal two-arity curry function.
   *
   * @private
   * @param {Function} function The function to curry
   * @return {Function} A curried function
   */

  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;

        case 1:
          return _curry1(function (_b) {
            return fn(a, _b);
          });

        default:
          return fn(a, b);
      }
    };
  }

  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
  }

  /**
   * Determines whether a given string matches a given regular expression.
   *
   * @sig RegExp -> String -> Boolean
   * @param {RegExp} pattern
   * @param {String} str
   * @return {Boolean}
   * @example
   *
   * import { test } from 'funale'
   *
   * test(/^x/, 'xyz') // true
   * test(/^y/, 'xyz') // false
   */

  var test = _curry2(function (pattern, str) {
    return _cloneRegExp(pattern).test(str);
  });

  /**
   * Adds two values.
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   * @example
   *
   * import { add } from 'funale'
   *
   * add(2, 3) // 5
   * add(2)(3) // 5
   */

  var add = _curry2(function (a, b) {
    return Number(a) + Number(b);
  });

  function _combine(a1, a2) {
    a1 = a1 || [];
    a2 = a2 || [];
    var idx;
    var len1 = a1.length;
    var len2 = a2.length;
    var rv = [];
    idx = -1;

    while (++idx < len1) {
      rv[rv.length] = a1[idx];
    }

    idx = -1;

    while (++idx < len2) {
      rv[rv.length] = a2[idx];
    }

    return rv;
  }

  /**
   * Internal three-arity curry function.
   *
   * @private
   * @param {Function} function The function to curry
   * @return {Function} A curried function
   */

  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;

        case 1:
          return _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });

        case 2:
          return _curry1(function (_c) {
            return fn(a, b, _c);
          });

        default:
          return fn(a, b, c);
      }
    };
  }

  /**
   * Applies a function to the value at the given index of an array, returning
   * a new copy of the array with the element at the given index replaced with
   * the result of the function application.
   *
   * @sig Number -> (a -> a) -> [a] -> [a]
   * @param {Number} index
   * @param {Function} fn The function to apply
   * @param {Array} list
   * @return {Array} A copy of the supplied list with the element at the given index adjusted
   * @example
   *
   * import { adjust, toUpper } from 'funale'
   *
   * adjust(1, toUpper, ['a', 'b', 'c']) // ['a', 'B', 'c']
   * adjust(-1, toUpper, ['a', 'b', 'c']) // ['a', 'b', 'C']
   */

  var adjust = _curry3(function (idx, fn, list) {
    if (idx >= list.length || idx < -list.length) return list;
    var index = idx < 0 ? list.length + idx : idx;

    var clone = _combine(list);

    clone[index] = fn(clone[index]);
    return clone;
  });

  var _isArray = function _isArray(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };

  var _isArray$1 = Array.isArray || _isArray;

  function _dispatch(methodName, f) {
    return function () {
      var length = arguments.length;
      if (length === 0) return f();
      var obj = arguments[length - 1];
      return _isArray$1(obj) || typeof obj[methodName] !== 'function' ? f.apply(this, arguments) : obj[methodName].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  /**
   * Returns `true` if all elements of the list match the predicate, `false` otherwise.
   *
   * Dispatches to the `all` method of the second argument, if present.
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} predicate
   * @param {Array} list
   * @return {Boolean}
   * @example
   *
   * import { all } from 'funale'
   *
   * const equals3 = x => x === 3
   * all(equals3, [3, 3, 3]) // true
   * all(equals3, [1, 1, 1]) // false
   */

  var all = _curry2(_dispatch('all', function (fn, list) {
    var idx = -1;

    while (++idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
    }

    return true;
  }));

  function _arity(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
      case 0:
        return function () {
          return fn.apply(this, arguments);
        };

      case 1:
        return function (a0) {
          return fn.apply(this, arguments);
        };

      case 2:
        return function (a0, a1) {
          return fn.apply(this, arguments);
        };

      case 3:
        return function (a0, a1, a2) {
          return fn.apply(this, arguments);
        };

      case 4:
        return function (a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };

      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };

      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };

      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };

      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };

      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };

      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };

      default:
        throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _curryN(arity, fn) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      var combined = [].concat(args, rest);
      var left = arity - combined.length;
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN.apply(void 0, [arity, fn].concat(_toConsumableArray(combined))));
    };
  }

  /**
   * Returns a curried equivalent of the provided function, with the specified arity.
   *
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} arity The arity of the returned function
   * @param {Function} fn The function to curry
   * @return {Funtion} A new curried function
   * @example
   *
   * import { curryN } from 'funale'
   *
   * const sumArgs = (...args) => args.reduce((a, b) => a + b)
   * const curriedAddFourNumbers = curryN(4, sumArgs)
   * const f = curriedAddFourNumbers(1, 2)
   * const g = f(3)
   * g(4) // 10
   */

  var curryN = _curry2(function (n, fn) {
    return n === 0 ? fn : n === 1 ? _curry1(fn) : _arity(n, _curryN(n, fn));
  });

  /**
   * Returns the larger of its two arguments.
   *
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @example
   *
   * import { max } from 'funale'
   *
   * max(1, -1) // 1
   * max('a', 'b') // 'b'
   */

  var max = _curry2(function (a, b) {
    return b > a ? b : a;
  });

  var _isObject = function _isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  };

  var _isString = function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  };

  function _isArrayLike(x) {
    if (_isArray$1(x)) {
      return true;
    }

    if (!x) {
      return false;
    }

    if (_typeof(x) !== 'object') {
      return false;
    }

    if (_isString(x)) {
      return false;
    }

    if (x.nodeType === 1) {
      return !!x.length;
    }

    if (x.length === 0) {
      return true;
    }

    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }

    return false;
  }

  function arrayReduce(reducer, seed, list) {
    var idx = -1;
    var acc = seed;
    var len = list.length;

    while (++idx < len) {
      acc = reducer(acc, list[idx]);
    }

    return acc;
  }

  function iterableReduce(reducer, seed, iterable) {
    var acc = seed;
    var step = iterable.next();

    while (!step.done) {
      acc = reducer(acc, step.value);
      step = iterable.next();
    }

    return acc;
  }

  var iterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  function _reduce(reducer, seed, iterable) {
    if (_isArrayLike(iterable)) return arrayReduce(reducer, seed, iterable);
    if (typeof iterable[iterator] !== 'undefined') return iterableReduce(reducer, seed, iterable[iterator]());
    if (typeof iterable.next === 'function') return iterableReduce(reducer, seed, iterable);
    if (typeof iterable.reduce === 'function') return iterable.reduce(reducer, seed, iterable);
  }

  /**
   * Returns a list of a given object's own enumerable property names, in the same order
   * as that provided by a for...in loop.
   *
   * @sig {k: v} -> [k]
   * @param {Object} obj The object to extract properties from
   * @return {Array} An array of the object's own enumerable properties
   * @example
   *
   * import { keys } from 'funale'
   *
   * keys({a: 1, b: 2, c: 3}) // ['a', 'b', 'c']
   */

  var keys = _curry1(function (obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  });

  function _map(fn, functor) {
    var idx = -1;
    var len = functor.length;
    var rv = Array(len);

    while (++idx < len) {
      rv[idx] = fn(functor[idx]);
    }

    return rv;
  }

  /**
   * Takes a function and a functor, applies the function to each of the
   * functor's values, and returns a functor of the same shape. Dispatches
   * to the `map` method of the second argument, if present.
   *
   * @sig Functor f => (a -> b) -> f a -> f b
   * @param {Function} fn The function to be executed
   * @param {Array} list The list to be iterate over
   * @return {Array} A new list
   * @example
   *
   * import { map } from 'funale'
   *
   * const double = x => x * 2
   * map(double, [1, 2, 3]) // [2, 4, 6]
   * map(double, {a: 1, b: 2, c: 3}) // {a: 2, b: 4, c: 6}
   */

  var map = _curry2(_dispatch('map', function (fn, functor) {
    return _isObject(functor) ? _reduce(function (acc, key) {
      acc[key] = fn(functor[key]);
      return acc;
    }, {}, keys(functor)) : _map(fn, functor);
  }));

  function _path(paths, obj) {
    var val = obj;
    var idx = -1;

    while (++idx < paths.length) {
      if (val == null) return;
      val = val[paths[idx]];
    }

    return val;
  }

  /**
   * Returns a function when supplied an object returns the indicated
   * property of that object, if exists.
   *
   * @sig s -> {s: a} -> a | Undefined
   * @param {String} prop The property name
   * @param {Object} obj The object to query
   * @return {*} The value of `prop`
   * @example
   *
   * import { prop } from 'funale'
   *
   * const getName = prop('name')
   * getName({name: 'Fred', age: 22}) // 'Fred'
   * getName({id: 42, age: 22}) // undefined
   */

  var prop = _curry2(function (prop, obj) {
    return _path([prop], obj);
  });

  /**
   * Returns a new list by plucking the given property from each object in a list
   *
   * @sig Functor f => k -> f {k: v} -> f v
   * @param {Number|String} key The key to pluck off from each object
   * @param {Array} functor The functor to consider
   * @return {Array} The list of values for the given keys
   * @example
   *
   * import { pluck } from 'funale'
   *
   * const getAges = pluck('age')
   * getAges([{name: 'Alex', age: 29}, {name: 'Fred', age: 27}]); // [29, 27]
   *
   * pluck(0, [[1, 2], [3, 4]]) // [1, 3]
   * pluck('val', {a: {val: 3}, b: {val: 5}}) // {a: 3, b: 5}
   */

  var pluck = _curry2(function (p, list) {
    return map(prop(p), list);
  });

  /**
   * Returns a single value by executing the provided reducer function on each element of the list.
   * The reducer function receives two values: (acc, value).
   *
   * Dispatches to the `reduce` method of the third argument, if present.
   *
   * **Note:** `reduce` does not skip deleted or unassigned indices (sparse arrays), unlike
   * `array.prototype.reduce`.
   *
   * @sig ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} reducer A reducer function that receives the accumulator and the current value
   * @param {*} seed The initial value of the accumulator
   * @param {Array} list The list to iterate over
   * @return {*} The accumulated value
   * @example
   *
   * import { reduce } from 'funale'
   *
   * const add = (a, b) => a + b
   * reduce(add, 0, [1, 2, 3]) // 6
   */

  var reduce = _curry3(_reduce);

  /**
   * Takes a list of predicates and returns a predicate that returns true for a
   * given list of arguments if every one of the provided predicates is satisfied
   * by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the
   * highest-arity predicate.
   *
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @example
   *
   * import { propEq, allPass } from 'funale'
   *
   * const isQueen = propEq('rank', 'Q')
   * const isSpade = propEq('suit', '♠︎')
   * const isQueenOfSpades = allPass([isQueen, isSpade])
   *
   * isQueenOfSpades({rank: 'Q', suit: '♣︎'}) // false
   * isQueenOfSpades({rank: 'Q', suit: '♠︎'}) // true
   */

  var allPass = _curry1(function (preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function () {
      var len = preds.length;
      var idx = -1;

      while (++idx < len) {
        if (!preds[idx].apply(this, arguments)) return false;
      }

      return true;
    });
  });

  var always = _curry1(function (x) {
    return function () {
      return x;
    };
  });

  /**
   * Returns `true` if both arguments are `true`; `false` otherwise.
   *
   * @sig a -> b -> a | b
   * @param {*} a
   * @param {*} b
   * @return {*} The first argument if it is falsy, otherwise the second arugment
   * @example
   *
   * import { and } from 'funale'
   *
   * and(true, true) // true
   * and(true, false) // false
   * and(false, true) // false
   * and(false, false) // false
   */

  var and = _curry2(function (a, b) {
    return a && b;
  });

  /**
   * Returns `true` if at least one of the elements of the list match the predicate, `false` otherwise.
   *
   * Dispatches to the `any` method of the second argument, if present.
   *
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} predicate
   * @param {Array} list
   * @return {Boolean}
   * @example
   *
   * import { any } from 'funale'
   *
   * const equals3 = x => x === 3
   * any(equals3, [1, 2, 3]) // true
   * any(equals3, [1, 1, 1]) // false
   */

  var any = _curry2(_dispatch('any', function (fn, list) {
    var idx = -1;

    while (++idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
    }

    return false;
  }));

  /**
   * Takes a list of predicates and returns a predicate that returns true for a
   * given list of arguments if at least one of the provided predicates is
   * satisfied by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the
   * highest-arity predicate.
   *
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @example
   *
   * import { propEq, anyPass } from 'funale'
   *
   * const isClub = propEq('suit', '♣')
   * const isSpade = propEq('suit', '♠')
   * const isBlackCard = anyPass([isClub, isSpade])
   *
   * isBlackCard({rank: '10', suit: '♣'}) // true
   * isBlackCard({rank: 'Q', suit: '♠'}) // true
   * isBlackCard({rank: 'Q', suit: '♦'}) // false
   */

  var anyPass = _curry1(function (preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function () {
      var len = preds.length;
      var idx = -1;

      while (++idx < len) {
        if (preds[idx].apply(this, arguments)) return true;
      }

      return false;
    });
  });

  /**
   * Applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the first argument, if presented.
   * Also treats curried functions as applicatives.
   *
   * @sig [a -> b] -> [a] -> [b]
   * @sig Apply f => f (a -> b) -> f a -> f b
   * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
   * @param {*} applyF
   * @param {*} applyX
   * @return {*}
   * @example
   *
   * import { ap } from 'funale'
   *
   * const double = x => x * 2
   * const plus3 = x => x + 3
   * ap([double, plus3], [1, 2, 3]) // [2, 4, 6, 4, 5, 6]
   *
   * // can also be used as S combinator when only two functions are passed
   * const f = r => a => r + a
   * ap(f, double)(10) // 10 + (10 * 2)
   */

  var ap = _curry2(function (applyF, applyX) {
    return typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
      return applyF(x)(applyX(x));
    } : _reduce(function (acc, f) {
      return _combine(acc, map(f, applyX));
    }, [], applyF);
  });

  /**
   * Returns a new list containing the elements of the given list, followed by
   * the given element.
   *
   * @sig a -> [a] -> [a]
   * @param {*} el The element to append
   * @param {Array} list The list to append element to
   * @return {Array} A new list
   * @example
   *
   * import { append } from 'funale'
   *
   * append('c', ['a', 'b']) // ['a', 'b', 'c']
   */

  var append = _curry2(function (el, list) {
    return _combine(list, [el]);
  });

  /**
   * Applies function `fn` to the argument list `args`.
   *
   * @sig (*... -> a) -> [*] -> a
   * @param {Function} fn The function to call
   * @param {Array} args The arguments to call `fn` with
   * @return {*} Result of `fn(...args)`
   * @example
   *
   * import { apply } from 'funale'
   *
   * const nums = [1, 2, 3, -99, 42, 6, 7]
   * apply(Math.max, nums) // 42
   */

  var apply = _curry2(function apply(fn, args) {
    return fn.apply(this, args);
  });

  var _isInteger = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  function _assoc(prop, val, obj) {
    var rv = {};

    for (var p in obj) {
      rv[p] = obj[p];
    }

    rv[prop] = val;
    return rv;
  }

  /**
   * Makes a shallow copy of an object, settting or overriding the specific
   * property with the given value if firstArg is a string, or setting or
   * overriding the specific node with the given value when firstArg is a
   * path array.
   *
   * @sig String -> a -> {k: v} -> {k: v}
   * @sig [String|Int] -> a -> {a} -> {a}
   * @param {String|Array} path The prop or path to set
   * @param {*} val The new value
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original expect the specific prop/path
   * @example
   *
   * import { assoc } from 'funale'
   *
   * assoc('a', 1, {a: 0}) // {a: 1}
   * assoc('b', 1, {a: 0}) // {a: 0, b: 1}
   * assoc(['a', 'b'], 1, {a: {b: 0}}) // {a: {b: 1}}
   * assoc(['a', 'b'], 1, {}) // {a: {b: 1}}
   */

  var assoc = _curry3(function assocPath(path, val, obj) {
    if (typeof path === 'string') return _assoc(path, val, obj);
    if (path.length === 0) return val;
    var idx = path[0];

    if (path.length > 1) {
      var nextObj = obj != null && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
      val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
    }

    if (_isInteger(idx) && _isArray$1(obj)) {
      var arr = [].concat(obj);
      arr[idx] = val;
      return arr;
    }

    return _assoc(idx, val, obj);
  });

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts
   * exactly 2 parameters. Any extraneous parameters will not be passed to the
   * supplied function.
   *
   * @sig (* -> c) -> (a, b -> c)
   * @param {Function} fn The function to wrap
   * @return {Function} A new function wrapping `fn`
   * @example
   *
   * import { binary } from 'funale'
   *
   * const takesTwoArgs = binary((a, b, c) => [a, b, c])
   * takesTwoArgs.length // 2
   * takesTwoArgs(1, 2, 3) // [1, 2, undefined]
   */

  var binary = _curry1(function (fn) {
    return function (a, b) {
      return fn.call(this, a, b);
    };
  });

  /**
   * Creates a function that is bound to a context.
   *
   * @sig (* -> *) -> {*} -> (* -> *)
   * @param {Function} fn The function to bind to context
   * @param {Object} thisObj The context to bind `fn` to
   * @return {Function} A function that will execute in the context of `thisObj`.
   * @example
   *
   * import { bind } from 'funale'
   *
   * const module = { x: 42, getX: function () { return this.x } }
   * const unboundGetX = module.getX
   * const boundGetX = bind(unBoundGetX, module)
   * unboundGetX() // undefined
   * boundGetX() // 42
   */

  var bind = _curry2(function (fn, thisObj) {
    return _arity(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  function _makeFlat(recursive) {
    return function flatten(list) {
      var val, j, jlen;
      var idx = -1;
      var ilen = list.length;
      var rv = [];

      while (++idx < ilen) {
        if (_isArrayLike(list[idx])) {
          val = recursive ? flatten(list[idx]) : list[idx];
          j = -1;
          jlen = val.length;

          while (++j < jlen) {
            rv[rv.length] = val[j];
          }
        } else {
          rv[rv.length] = list[idx];
        }
      }

      return rv;
    };
  }

  /**
   * Maps a function over a list and concatenates the result. If second argument
   * is a function, `chain(f, g)(x)` is equivalent as `f(g(x), x)`.
   *
   * Dispatches to the `chain` method of the second arugment, if present.
   *
   * @sig Chain m => (a -> m b) -> m a -> m b
   * @param {Function} fn The function to map with
   * @param {Array} list The list to map over
   * @return {Array} The result of flat-mapping `list` with `fn`
   * @example
   *
   * import { chain } from 'funale'
   *
   * const duplicate = x => [x, x]
   * chain(duplicate, [1, 2, 3]) // [1, 1, 2, 2, 3, 3]
   */

  var chain = _curry2(_dispatch('chain', function (fn, monad) {
    if (typeof monad === 'function') {
      return function (x) {
        return fn(monad(x))(x);
      };
    }

    return _makeFlat(false)(map(fn, monad));
  }));

  var _type = function _type(x) {
    return x === null ? 'null' : x === undefined ? 'undefined' : Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
  };

  /**
   * Returns the type of the value in lower-case
   *
   * @sig * -> String
   * @param {*} val The value to check
   * @return {String} The type of the value
   * @example
   *
   * import { type } from 'funale'
   *
   * type(null) // 'null'
   * type(undefined) // 'undefined'
   * type(true) // 'boolean'
   * type(1) // 'number'
   * type('s') // 'string'
   * type([]) // 'array'
   * type({}) // 'object'
   * type(() => {}) // 'function'
   * type(/\s/g) // 'regexp'
   * type(new Error('woof')) // 'error'
   */

  var type = _curry1(_type);

  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy(copiedValue) {
      var len = refFrom.length;
      var idx = 0;

      while (idx < len) {
        if (value === refFrom[idx]) return refTo[idx];
        idx += 1;
      }

      refFrom[idx + 1] = value;
      refTo[idx + 1] = copiedValue;

      for (var key in value) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }

      return copiedValue;
    };

    switch (type(value)) {
      case 'object':
        return copy({});

      case 'array':
        return copy([]);

      case 'date':
        return new Date(value.valueOf());

      case 'regexp':
        return _cloneRegExp(value);

      default:
        return value;
    }
  }

  /**
   * Creates a deep copy of the value which may contain (nested) `Array`s and
   * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
   * assigned by reference rather than copied.
   *
   * Dispatches to a `clone` method if present.
   *
   * @sig {*} -> {*}
   * @param {*} value The object or array to clone
   * @return {*} A deep copy of `value`
   * @example
   *
   * import { clone } from 'funale'
   *
   * const objects = [{}, {}, {}]
   * const objectsClone = clone(objects)
   * objects === objectsClone //=> false
   * objects[0] === objectsClone[0] //=> false
   */

  var clone = _curry1(function (value) {
    return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
  });

  /**
   * Makes a comparator function that reports whether the first argument is less than the second.
   *
   * @sig ((a, b) -> Boolean) -> ((a, b) -> number)
   * @param {Function} predicate A two-arity function that returns `true` if firstArg < secondArg, `false` otherwise
   * @return {Function} A two-arity function that returns `-1` if firstArg < secondArg, `1` if firstArg > secondArg, `0` otherwise
   * @example
   *
   * import { comparator, sort } from 'funale'
   *
   * const byFirstName = comparator((a, b) => a.firstName.toUpperCase() < b.firstName.toUpperCase())
   * const people = [
   *   { name: 'Haskell Curry', firstName: 'Haskell', secondName: 'Curry' }
   *   { name: 'Alan Turing', firstName: 'Alan', secondName: 'Turing' }
   *   { name: 'Gottlob Frege', firstName: 'Gottlob', secondName: 'Frege' }
   * ]
   *
   * const peopleByIncreasingFirstName = sort(byFirstName, people)
   * //=> [
   *   { name: 'Alan Turing', firstName: 'Alan', secondName: 'Turing' },
   *   { name: 'Gottlob Frege', firstName: 'Gottlob', secondName: 'Frege' },
   *   { name: 'Haskell Curry', firstName: 'Haskell', secondName: 'Curry' },
   * ]
   */

  var comparator = _curry1(function (predicate) {
    return function (a, b) {
      return predicate(a, b) ? -1 : predicate(b, a) ? 1 : 0;
    };
  });

  function _complement(f) {
    return function () {
      return !f.apply(this, arguments);
    };
  }

  /**
   * Takes a function `f` and returns a function `g` such that if called with the same arguments
   * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
   *
   * @sig (*... -> *) -> (*... -> Boolean)
   * @param {Function} f
   * @return {Function}
   * @example
   *
   * import { complement } from 'funale'
   *
   * const isEven = n => n % 2 === 0
   * const isOdd = complement(isEven)
   * isEven(1) // false
   * isOdd(1) // true
   */

  var complement = _curry1(_complement);

  /**
   * Performs left-to-right function composition. The first argument
   * may have any arity; the remaining arguments must be unary.
   *
   * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function} A composed function
   * @example
   *
   * import { pipe } from 'funale'
   *
   * const sum = (a, b) => a + b
   * const inc = x => x + 1
   * const double = x => x * 2
   * const f = pipe(sum, inc, double)
   * f(1, 2) // ((1 + 2) + 1) * 2
   */
  var pipe = function pipe(f) {
    for (var _len = arguments.length, fs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      fs[_key - 1] = arguments[_key];
    }

    return function () {
      return fs.reduce(function (a, c) {
        return c(a);
      }, f.apply(void 0, arguments));
    };
  };

  /**
   * Performs right-to-left function composition. The last argument
   * may have any arity; the remaining arguments must be unary.
   *
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function} A composed function
   * @example
   *
   * import { compose } from 'funale'
   *
   * const sum = (a, b) => a + b
   * const inc = x => x + 1
   * const double = x => x * 2
   * const f = compose(double, inc, sum)
   * f(1, 2) // ((1 + 2) + 1) * 2
   */

  var compose = function compose() {
    for (var _len = arguments.length, fs = new Array(_len), _key = 0; _key < _len; _key++) {
      fs[_key] = arguments[_key];
    }

    return pipe.apply(void 0, _toConsumableArray(fs.reverse()));
  };

  var _isFunction = function _isFunction(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
  };

  function _concat(a, b) {
    var typeA = _type(a);

    var typeB = _type(b);

    if (typeA !== typeB) throw new TypeError('two arguments are not of the same type');
    if (typeA === 'array') return b.concat(a);
    if (typeA === 'string') return b + a;
    if (b != null && _isFunction(b.concat)) return b.concat(a);
    throw new TypeError('concat method not found');
  }

  /**
   * Concatenating the given lists or strings (both arguments must be of the same type).
   *
   * Dispatches to the `concat` method of the second argument, if present.
   *
   * @sig [a] -> [a] -> [a]
   * @sig String -> String -> String
   * @param {Array|String} list The list to concat
   * @param {Array|String} list The original list
   * @return {Array|String} A list of the elements of secondArg followed by the elements of firstArg
   * @example
   *
   * import { concat } from 'funale'
   *
   * concat([3, 4], [1, 2]) // [1, 2, 3, 4]
   * concat('world')('hello ') // 'hello world'
   */

  var concat = _curry2(_concat);

  /**
   * Accepts a converging function and a list of branching functions and returns
   * a new function. The arity of the new function is the same as the arity of
   * the longest branching function. When invoked, this new function is applied
   * to some arguments, and each branching function is applied to those same
   * arguments. The results of each branching function are passed as arguments
   * to the converging function to produce the return value.
   *
   * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
   * @param {Function} after Will be invoked with the return values of `functions` as its arguments
   * @param {Array} funtions
   * @return {Function} A new function
   * @example
   *
   * import { converge } from 'funale'
   *
   * const div = (a, b) => a / b
   * const sum = (a, b) => a + b
   * const length = x => x.length
   * const average = converge(div, [sum, length])
   *
   * average([1, 2, 3, 4, 5, 6, 7]) // 4
   */

  var converge = _curry2(function (after, fns) {
    return curryN(reduce(max, 0, pluck('length', fns)), function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return after.apply(null, _map(function (fn) {
        return fn.apply(void 0, args);
      }, fns));
    });
  });

  /**
   * Returns a curried version of the provided function.
   *
   * @sig ((a, b, ...) -> c) -> a -> b -> ... -> c
   * @param {Function} fn The function to curry
   * @return {Function} A curried function
   * @example
   *
   * import { curry } from 'funale'
   *
   * const sum = (a, b) => a + b
   * const inc = curry(sum)(1)
   * inc(2) // 3
   */

  var curry = _curry1(function (fn) {
    return curryN(fn.length, fn);
  });

  /**
   * Decrements its argument.
   *
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} n - 1
   * @example
   *
   * import { dec } from 'funale'
   *
   * dec(42) // 41
   */

  var dec = add(-1);

  /**
   * Returns the second argument if it is not `null`, `undefined` or `NaN`;
   * otherwise the first argument is returned.
   *
   * @sig a -> b -> a | b
   * @param {a} default The default value.
   * @param {b} val
   * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
   * @example
   *
   * import { defaultTo } from 'funale'
   *
   * const defaultTo42 = defaultTo(42)
   * defaultTo42(null)  // 42
   * defaultTo42(undefined)  // 42
   * defaultTo42(false) // false
   * defaultTo42(parseInt('string')) // 42
   */

  var defaultTo = _curry2(function (d, v) {
    return v == null || v !== v ? d : v;
  });

  var _is = function _is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
  };

  function _equals(a, b, aStack, bStack) {
    if (_is(a, b)) return true;

    var typeA = _type(a);

    if (_typeof(a) !== _typeof(b) || typeA !== _type(b)) return false;

    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
      return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }

    var idx = aStack.length - 1;

    while (idx >= 0) {
      if (aStack[idx] === a) {
        return bStack[idx] === b;
      }

      idx -= 1;
    }

    aStack.push(a);
    bStack.push(b);

    switch (typeA) {
      case 'date':
      case 'boolean':
        return +a === +b;

      case 'regexp':
      case 'string':
        return '' + a === '' + b;

      case 'number':
        if (+a !== +a) return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / +b : +a === +b;

      case 'arguments':
      case 'array':
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; i++) {
          if (!_equals(a[i], b[i], aStack, bStack)) return false;
        }

        return true;

      case 'object':
        for (var _i in a) {
          if (!b.hasOwnProperty(_i)) return false;
        }

        for (var j in b) {
          if (!a.hasOwnProperty(j)) return false;
          if (!_equals(a[j], b[j], aStack, bStack)) return false;
        }

        return true;

      case 'error':
        return a.name === b.name && a.message === b.message;

      default:
        return a === b;
    }
  }

  function _indexOf(x, list, dir, idx) {
    var length = list.length;
    var method = dir > 0 ? 'indexOf' : 'lastIndexOf';
    if (idx === undefined) idx = dir > 0 ? 0 : length - 1;

    if (typeof list[method] === 'function') {
      switch (_typeof(x)) {
        case 'number':
          if (x === 0 || x !== x) {
            for (; idx >= 0 && idx < length; idx += dir) {
              if (_is(x, list[idx])) return idx;
            }

            return -1;
          }

          return list[method](x, idx);

        case 'undefined':
        case 'boolean':
        case 'string':
        case 'function':
          return list[method](x, idx);

        case 'object':
          if (x === null) return list[method](x, idx);
      }
    }

    for (; idx >= 0 && idx < length; idx += dir) {
      if (_equals(x, list[idx], [], [])) return idx;
    }

    return -1;
  }

  function _includes(x, xs) {
    return _indexOf(x, xs, 1) >= 0;
  }

  /*
   * Returns a duplicate-free version of the provided array. Funale
   * `equals` is used to determine equality.
   *
   * @sig [a] -> [a]
   * @param {Array} list
   * @return {Array} A duplicate-free array
   * @example
   *
   * import { uniq } from 'funale'
   *
   * uniq([1, 2, 1]) // [1, 2]
   * uniq([NaN, NaN, [1], [1], { x: 1 }, { x: 1 }]) // [NaN, [1], { x: 1 }]
   */

  var uniq = _curry1(function (list) {
    var rv = [];
    var item;
    var idx = -1;
    var skip = false;

    while (++idx < list.length) {
      item = list[idx];
      rv.forEach(function (x) {
        if (_equals(item, x, [], [])) skip = true;
      });
      if (!skip) rv.push(item);
      skip = false;
    }

    return rv;
  });

  /**
   * Finds the set of all elements in the first list but not in the second list.
   *
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1
   * @param {Array} list2
   * @return {Array} The elements in `list1` that are not in `list2`
   * @example
   *
   * import { difference } from 'funale'
   *
   * difference([1, 2, 3, 4], [3, 4, 5, 6]) // [1, 2]
   * difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) // [{b: 2}]
   */

  var difference = _curry2(function (oList, nList) {
    return uniq(oList).filter(function (x) {
      return !_includes(x, nList);
    });
  });

  function _dissoc(prop, obj) {
    var rv = {};

    for (var p in obj) {
      rv[p] = obj[p];
    }

    delete rv[prop];
    return rv;
  }

  /**
   * Removes the sub-list of `list` starting at index `start` and containing
   * `count` elements.
   *
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} start The position to start removing elements
   * @param {Number} count The number of elements to remove
   * @param {Array} list The list to remove from
   * @example
   *
   * import { remove } from 'funale'
   *
   * remove(2, 3, [1, 2, 3, 4, 5, 6, 7]) // [1, 2, 6, 7]
   */

  var remove = _curry3(function (start, count, list) {
    var rv = Array.prototype.slice.call(list, 0);
    rv.splice(start, count);
    return rv;
  });

  var update = _curry3(function (idx, x, list) {
    return adjust(idx, always(x), list);
  });

  /* eslint-disable no-case-declarations */
  /**
   * Returns a shallow clone of an object, omitting the property if firstArg is a string,
   * or omitting the property at the given path if firstArg is an array.
   *
   * @sig String -> {k: v} -> {k: v}
   * @sig [String|Int] -> {k: v} -> {k: v}
   * @param {String|Array} path The prop or the path of value to remove
   * @param {Object} obj The object to clone
   * @return {Object} A new object without the property or the property at path
   * @example
   *
   * import { dissoc } from 'funale'
   *
   * dissoc('a', {a: {b: {c: 42}}}) // {}
   * dissoc(['a', 'b', 'c'], {a: {b: {c: 42}}}) // {a: {b: {}}}
   */

  var dissoc = _curry2(function dissocPath(path, obj) {
    if (typeof path === 'string') return _dissoc(path, obj);

    switch (path.length) {
      case 0:
        return obj;

      case 1:
        return _isInteger(path[0]) && _isArray$1(obj) ? remove(path[0], 1, obj) : _dissoc(path[0], obj);

      default:
        var head = path[0];
        var tail = Array.prototype.slice.call(path, 1);

        if (obj[head] == null) {
          return obj;
        } else if (_isInteger(head) && _isArray$1(obj)) {
          return update(head, dissocPath(tail, obj[head]), obj);
        }

        return _assoc(head, dissocPath(tail, obj[head]), obj);
    }
  });

  /**
   * Divides two numbers. Equivalent to `b / a`
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number} The result of `b / a`
   * @example
   *
   * import { divide } from 'funale'
   *
   * const half = divide(2)
   * half(42) // 21
   */

  var divide = _curry2(function (a, b) {
    return b / a;
  });

  /**
   * Returns a portion of a given list or string selected from `fromIndex` (inclusive) to `toIndex` (exclusive).
   *
   * Dispatches to the `slice` method of the third arugment, if present.
   *
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} fromIndex The start index (inclusive)
   * @param {Number} toIndex The end index (exclusive)
   * @param {*} list
   * @return {*} A portion of the given list
   * @example
   *
   * import { slice } from 'funale'
   *
   * slice(1, 3, ['a', 'b', 'c', 'd']) // ['b', 'c']
   * slice(1, Infinity, ['a', 'b', 'c', 'd']) // ['b', 'c', 'd']
   * slice(0, -1, ['a', 'b', 'c', 'd']) // ['a', 'b', 'c']
   * slice(-3, -1, ['a', 'b', 'c', 'd'] // ['b', 'c']
   */

  var slice = _curry3(_dispatch('slice', function (from, to, list) {
    return Array.prototype.slice.call(list, from, to);
  }));

  /**
   * Returns all but the first `n` elements of the given list if `n` is positive, or
   * returns all but the last `n` elements of the given list if `n` is negative.
   *
   * @sig Number -> [a] -> [a]
   * @param {Number} n
   * @param {Array|String} list
   * @return {Array|String}
   * @example
   *
   * import { drop } from 'funale'
   *
   * drop(1, ['a', 'b', 'c']) // ['b', 'c']
   * drop(3, ['a', 'b', 'c']) // []
   * drop(4, ['a', 'b', 'c']) // []
   * drop(1, 'abc') // 'bc'
   * drop(3, 'abc') // ''
   * drop(4, 'abc') // ''
   */

  var drop = _curry2(_dispatch('drop', function (n, as) {
    return n >= 0 ? slice(n, Infinity, as) : slice(0, n, as);
  }));

  /**
   * Returns the empty value of its argument's type.
   *
   * Dispatches to the `empty` method of the first argument, if present.
   *
   * @sig a -> a
   * @param {*} x
   * @return {*}
   * @example
   *
   * import { empty } from 'funale'
   *
   * empty(Just(42))      // Nothing()
   * empty([1, 2, 3])     // []
   * empty('unicorns')    // ''
   * empty({x: 1, y: 2})  // {}
   */

  var empty = _curry1(function (x) {
    return x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _type(x) === 'array' ? [] : _type(x) === 'string' ? '' : _type(x) === 'object' ? {} : _type(x) === 'arguments' ? function () {
      return arguments;
    }() : void 0;
  });

  /**
   * Returns `true` if its arguments are equivalent, `false` otherwise.
   *
   * @sig a -> b -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { equals } from 'funale'
   *
   * equals(1, 1) // true
   * equals(1, '1') // false
   * equals([1, 2, 3], [1, 2, 3]) // true
   *
   * const a = {}; a.v = a
   * const b = {}; b.v = b
   * equals(a, b) // true
   */

  var equals = _curry2(function (a, b) {
    return _equals(a, b, [], []);
  });

  /**
   * Returns the first `n` elements of the given list if first argument is positive, or
   * returns the last `n` elements of the given list if first argument is negative.
   *
   * Dispatches to the `take` method of the second argument, if present.
   *
   * @sig Number -> [a] -> [a]
   * @param {Number} n
   * @param {Array|String} list
   * @return {Array|String}
   * @example
   *
   * import { take } from 'funale'
   *
   * take(1, ['a', 'b', 'c']) // ['a']
   * take(3, ['a', 'b', 'c']) // ['a', 'b', 'c']
   * take(4, ['a', 'b', 'c']) // ['a', 'b', 'c']
   * take(-1, ['a', 'b', 'c']) // ['c']
   * take(-3, ['a', 'b', 'c']) // ['a', 'b', 'c']
   * take(-4, ['a', 'b', 'c']) // ['a', 'b', 'c']
   */

  var take = _curry2(_dispatch('take', function (n, as) {
    return n >= 0 ? slice(0, n, as) : slice(n, Infinity, as);
  }));

  /**
   * Checks if a list ends with the provided sublist.
   *
   * @sig [a] -> [a] -> Boolean
   * @param {Array|String} list
   * @param {Array|String} list
   * @return {Boolean}
   * @example
   *
   * import { endsWith } from 'funale'
   *
   * endsWith(['c'], ['a', 'b', 'c']) // true
   * endsWith(['b'], ['a', 'b', 'c']) // false
   * endsWith('c', 'abc') // true
   * endsWith('b', 'abc') // false
   */

  var endsWith = _curry2(function (suffix, as) {
    return equals(take(-suffix.length, as), suffix);
  });

  function _filter(pred, list) {
    var rv = [];
    var len = list.length;
    var idx = -1;

    while (++idx < len) {
      if (pred(list[idx])) rv[rv.length] = list[idx];
    }

    return rv;
  }

  /**
   * Takes a predicate and a filterable, and returns a new filterable with all the elements that
   * satisfy the predicate.
   *
   * Dispatches to the `filter` method of the second argument, if present.
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} predicate
   * @param {Array} filterable
   * @return {Array} Filterable
   * @example
   *
   * import { filter } from 'funale'
   *
   * const isEven = n => n % 2 === 0
   * filter(isEven, [1, 2, 3, 4]) // [2, 4]
   * filter(isEven, {a: 1, b: 2, c: 3, d: 4}) // {b: 2, d: 4}
   */

  var filter = _curry2(_dispatch('filter', function (pred, filterable) {
    return _isObject(filterable) ? _reduce(function (acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }

      return acc;
    }, {}, keys(filterable)) : _filter(pred, filterable);
  }));

  /**
   * Returns the first element in the provided list that satisfies the predicate, or
   * `undefined` if no matches.
   *
   * Dispatches to the `find` method of the second argument, if present.
   *
   * @sig (a -> Boolean) -> [a] -> a | undefined
   * @param {Function} predicate
   * @param {Array} list
   * @return {*} The element found, or `undefined` if no matches
   * @example
   *
   * import { find } from 'funale'
   *
   * const xs = [123, 'abc', 'def']
   * const hasLengthN = n => x => x && x.length === n
   * const hasLength3 = hasLengthN(3)
   * const hasLength4 = hasLengthN(4)
   * find(hasLength3)(xs) // 'abc'
   * find(hasLength4)(xs) // undefined
   */

  var find = _curry2(_dispatch('find', function (pred, list) {
    var len = list.length;
    var idx = -1;

    while (++idx < len) {
      if (pred(list[idx])) return list[idx];
    }
  }));

  /**
   * Returns the index of the first element in the list that matches the predicate, or
   * `-1` if no element matches.
   *
   * @sig (a -> Boolean) -> [a] -> Number
   * @param {Function} predicate
   * @param {Array} list
   * @return {Number} The index of the element found, or `-1` if no matches
   * @example
   *
   * import { findIndex } from 'funale'
   *
   * const xs = [123, 'abc', 'def']
   * const hasLengthN = n => x => x && x.length === n
   * const hasLength3 = hasLengthN(3)
   * const hasLength4 = hasLengthN(4)
   * findIndex(hasLength3)(xs) // 1
   * findIndex(hasLength4)(xs) // -1
   */

  var findIndex = _curry2(function (pred, list) {
    var len = list.length;
    var idx = -1;

    while (++idx < len) {
      if (pred(list[idx])) return idx;
    }

    return -1;
  });

  /**
   * Returns a new list by pulling every item out of it (and all its sub-arrays)
   * and putting them in a new array, depth-first.
   *
   * @sig [a] -> [b]
   * @param {Array} list
   * @return {Array} The flattened list
   * @example
   *
   * import { flatten } from 'funale'
   *
   * flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])
   * // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   */

  var flatten = _curry1(_makeFlat(true));

  /**
   * Returns a new function much like the supplied one, except that the first two
   * arguments' order is reversed.
   *
   * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
   * @param {Function} fn The function to reverse first two arguments
   * @param {Function} fn A curried function with its first two arguments reversed
   * @example
   *
   * import { flip } from 'funale'
   *
   * const mergeThree = (a, b, c) => [].concat(a, b, c)
   * mergeThree(1, 2, 3) // [1, 2, 3]
   * flip(mergeThree)(1, 2, 3) // [2, 1, 3]
   */

  var flip = _curry1(function (fn) {
    return curryN(fn.length, function (a, b) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return fn.apply(void 0, [b, a].concat(args));
    });
  });

  /**
   * Executes a provided function for each list element.
   *
   * Dispatches to the `forEach` method of the second argument, if present.
   *
   * **Note:** funale `forEach` differs from `Array.prototype.forEach` in the following ways:
   * 1. funale `forEach` does not skip deleted or unassigned indices (sparse arrays)
   * 2. funale `forEach` callback function `fn` receives only one argument `currentValue`
   * 3. funale `forEach` returns the original array
   *
   * @sig (a -> *) -> [a] -> [a]
   * @param {Function} fn The function to execute
   * @param {Array} list The list to iterate over
   * @return {Array} The original list
   * @example
   *
   * import { forEach } from 'funale'
   *
   * forEach(console.log, [1, 2, 3])
   * // 1
   * // 2
   * // 3
   */

  var forEach = _curry2(_dispatch('forEach', function (fn, list) {
    var idx = -1;
    var len = list.length;

    while (++idx < len) {
      fn(list[idx]);
    }

    return list;
  }));

  /**
   * Internal four-arity curry function.
   *
   * @private
   * @param {Function} function The function to curry
   * @return {Function} A curried function
   */

  function _curry4(fn) {
    return function f4(a, b, c, d) {
      switch (arguments.length) {
        case 0:
          return f4;

        case 1:
          return _curry3(function (_b, _c, _d) {
            return fn(a, _b, _c, _d);
          });

        case 2:
          return _curry2(function (_c, _d) {
            return fn(a, b, _c, _d);
          });

        case 3:
          return _curry1(function (_d) {
            return fn(a, b, c, _d);
          });

        default:
          return fn(a, b, c, d);
      }
    };
  }

  var reduceBy = _curry4(function (valueFn, valueAcc, keyFn, list) {
    return _reduce(function (acc, cur) {
      var key = keyFn(cur);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, cur);
      return acc;
    }, {}, list);
  });

  var groupBy = _curry2(_dispatch('groupBy', reduceBy(function (acc, el) {
    if (acc == null) acc = [];
    acc.push(el);
    return acc;
  }, null)));

  /**
   * Returns `true` if the second argument is greater than the first argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { gt } from 'funale'
   *
   * gt(1, 2) // true
   * gt(2, 1) // false
   * gt(2, 2) // false
   * gt('a', 'b') // true
   * gt('b', 'a') // false
   * gt('b', 'b') // false
   */

  var gt = _curry2(function (a, b) {
    return b > a;
  });

  /**
   * Returns `true` if the second argument is greater than or equal to the first argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { gte } from 'funale'
   *
   * gte(1, 2) // true
   * gte(2, 1) // false
   * gte(2, 2) // true
   * gte('a', 'b') // true
   * gte('b', 'a') // false
   * gte('b', 'b') // true
   */

  var gte = _curry2(function (a, b) {
    return b >= a;
  });

  /**
   * Returns whether or not an object has an own property with the specific name.
   *
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for
   * @param {Object} obj The obj to query
   * @return {Boolean} Whether the property exists
   * @example
   *
   * import { has } from 'funale'
   *
   * const hasName = has('name')
   * hasName({name: 'alex'}) // true
   * hasName({}) // false
   */

  var has = _curry2(_has);

  /**
   * A function does nothing but take one parameter and return the supplied parameter.
   *
   * @sig x -> x
   * @param {*} x The value to return
   * @return {*} The input value
   * @example
   *
   * import { identity } from 'funale'
   *
   * identity(1) // 1
   *
   * const obj = {}
   * identity(obj) // obj
   */

  var identity = _curry1(function (x) {
    return x;
  });

  /**
   * Increments its argument.
   *
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} n + 1
   * @example
   *
   * import { inc } from 'funale'
   *
   * inc(42) // 43
   */

  var inc = add(1);

  /**
   * Returns `true` if the specific value is in the given list; `false` otherwise.
   *
   * @sig a -> [a] -> Boolean
   * @param {*} item The item to test
   * @param {Array} list The list to consider
   * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise
   * @example
   *
   * import { includes } from 'funale'
   *
   * includes(2, [1, 2, 3]) // true
   * includes(4, [1, 2, 3]) // false
   * includes([42], [[42]]) // true
   * includes({name: 'Curry'}, [{name: 'Curry'}]) // true
   * includes('abc', 'abcdef') // true
   */

  var includes = _curry2(_includes);

  /**
   * Returns the position of the first occurence of an item in a list, or `-1`
   * if the item is not found.
   *
   * Dispatches to the `indexOf` method of the second argument, if present.
   *
   * @sig a -> [a] -> Number
   * @param {*} item The item to find
   * @param {Array} list The list to consider
   * @return {Number} The index of the given item, or -1 if the item is not found
   * @example
   *
   * import { indexOf } from 'funale'
   *
   * indexOf(3, [1, 2, 3]) // 2
   * indexOf(4, [1, 2, 3]) // -1
   * indexOf('def', 'abcdef') // 3
   */

  var indexOf = _curry2(_dispatch('indexOf', function (x, xs) {
    return _indexOf(x, xs, 1);
  }));

  /**
   * Concatenating the given lists or strings (both arguments must be of the same type).
   *
   * Dispatches to the `concat` method of the first argument, if present.
   *
   * @sig [a] -> [a] -> [a]
   * @sig String -> String -> String
   * @param {Array|String} list1
   * @param {Array|String} list2
   * @return {Array|String} A list of the elements of fisrtArg followed by the elements of secondArg
   * @example
   *
   * import { infixConcat } from 'funale'
   *
   * infixConcat([1, 2], [3, 4]) // [1, 2, 3, 4]
   * infixConcat('hello ')('world') // 'hello world'
   */

  var infixConcat = _curry2(function (a, b) {
    return _concat(b, a);
  });

  /**
   * Divides two numbers. Equivalent to `a / b`
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number} The result of `a / b`
   * @example
   *
   * import { infixDivide } from 'funale'
   *
   * infixDivide(42, 2) // 21
   */

  var infixDivide = _curry2(function (a, b) {
    return a / b;
  });

  /**
   * Returns `true` if the first argument is greater than the second argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { infixGt } from 'funale'
   *
   * infixGt(1, 2) // false
   * infixGt(2, 1) // true
   * infixGt(2, 2) // false
   * infixGt('a', 'b') // false
   * infixGt('b', 'a') // true
   * infixGt('b', 'b') // false
   */

  var infixGt = _curry2(function (a, b) {
    return a > b;
  });

  /**
   * Returns `true` if the first argument is greater than or equal to the second argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { infixGte } from 'funale'
   *
   * infixGte(1, 2) // false
   * infixGte(2, 1) // true
   * infixGte(2, 2) // true
   * infixGte('a', 'b') // false
   * infixGte('b', 'a') // true
   * infixGte('b', 'b') // true
   */

  var infixGte = _curry2(function (a, b) {
    return a >= b;
  });

  /**
   * Returns `true` if the first argument is less than the second argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { infixLt } from 'funale'
   *
   * infixLt(1, 2) // true
   * infixLt(2, 1) // false
   * infixLt(2, 2) // false
   * infixLt('a', 'b') // true
   * infixLt('b', 'a') // false
   * infixLt('b', 'b') // false
   */

  var infixLt = _curry2(function (a, b) {
    return a < b;
  });

  /**
   * Returns `true` if the first argument is less than or equal to the second argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { infixLte } from 'funale'
   *
   * infixLte(1, 2) // true
   * infixLte(2, 1) // false
   * infixLte(2, 2) // true
   * infixLte('a', 'b') // true
   * infixLte('b', 'a') // false
   * infixLte('b', 'b') // true
   */

  var infixLte = _curry2(function (a, b) {
    return a <= b;
  });

  var infixMathMod = _curry2(function (b, a) {
    if (!_isInteger(b)) return NaN;
    if (!_isInteger(a) || a < 1) return NaN;
    return (b % a + a) % a;
  });

  /**
   * Divides the first argument by the second and returns the remainder.
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number} The result of `b % a`
   * @example
   *
   * import { infixModulo } from 'funale'
   *
   * infixModulo(17, 3) // 2
   */

  var infixModulo = _curry2(function (a, b) {
    return a % b;
  });

  /**
   * Subtracts its second argument from its first argument
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number} The result of `a - b`
   * @example
   *
   * import { infixSubtract } from 'funale'
   *
   * infixSubtract(42, 1) // 41
   */

  var infixSubtract = _curry2(function (a, b) {
    return a - b;
  });

  /**
   * Returns all but the last element of the given list or string.
   *
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @example
   *
   * import { init } from 'funale'
   *
   * init([1, 2, 3])  // [1, 2]
   * init([1, 2])     // [1]
   * init([1])        // []
   * init([])         // []
   *
   * init('abc')  // 'ab'
   * init('ab')   // 'a'
   * init('a')    // ''
   * init('')     // ''
   */

  var init = slice(0, -1);

  /**
   * Inserts the supplied element into the list, at the specified `index`.
   *
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} index The position to insert the element
   * @param {*} elt The element to insert into the Array
   * @param {Array} list The list to insert into
   * @return {Array} A new Array with `elt` inserted at `index`.
   * @example
   *
   * import { insert } from 'funale'
   *
   * insert(2, 'x', [1,2,3,4]) //=> [1,2,'x',3,4]
   */

  var insert = _curry3(function (idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var rv = Array.prototype.slice.call(list, 0);
    rv.splice(idx, 0, elt);
    return rv;
  });

  /**
   * Combines two lists into a set composed of those elements common to both lists.
   *
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1
   * @param {Array} list2
   * @return {Array} The list of elements found in both lists
   * @example
   *
   * import { intersetion } from 'funale'
   *
   * intersection([1, 2, 3, 4], [3, 4, 5, 6]) // [3, 4]
   */

  var intersection = _curry2(function (list1, list2) {
    return list1.length > list2.length ? uniq(_filter(function (x) {
      return _includes(x, list1);
    }, list2)) : uniq(_filter(function (x) {
      return _includes(x, list2);
    }, list1));
  });

  /**
   * A curried version of `Object.is` function.
   *
   * @sig a -> b -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { is } from 'funale'
   *
   * is('abc', 'abc') // true
   */

  var is = _curry2(_is);

  /**
   * Returns a string by concatenating all of the elements in a list, separated by a specific separator string.
   *
   * @sig String -> [a] -> String
   * @param {String} separator The separator string used to separate the list
   * @param {Array} list The list to join
   * @return {String} The string with all the elements joined
   * @example
   *
   * import { join } from 'funale'
   *
   * join(' ', [1, '2', 3]) // '1 2 3'
   * join('|', [1, '2', 3]) // '1|2|3'
   */

  var join = _curry2(function (separator, list) {
    return list.join(separator);
  });

  /**
   * Applies a list of functions to a list of values.
   *
   * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
   * @param {Array} functions A list of functions
   * @return {Function} A function that returns a list of values
   * @example
   *
   * import { juxt } from 'funale'
   *
   * const getRange = juxt([Math.min, Math.max])
   * getRange(3, 4, -1, 1) // [-1, 4]
   */

  var juxt = _curry1(function (fns) {
    return converge(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args;
    }, fns);
  });

  /**
   * Returns the position of the last occurence of an item in a list, or `-1`
   * if the item is not found.
   *
   * Dispatches to the `lastIndexOf` method of the second argument, if present.
   *
   * @sig a -> [a] -> Number
   * @param {*} item The item to find
   * @param {Array} list The list to consider
   * @return {Number} The last index of the given item, or -1 if the item is not found
   * @example
   *
   * import { lastIndexOf } from 'funale'
   *
   * indexOf(3, [1, 2, 3]) // 2
   * indexOf(4, [1, 2, 3]) // -1
   * indexOf('def', 'abcdef') // 3
   */

  var lastIndexOf = _curry2(_dispatch('lastIndexOf', function (x, xs) {
    return _indexOf(x, xs, -1);
  }));

  var _isNumber = function _isNumber(x) {
    return Object.prototype.toString.call(x) === '[object Number]';
  };

  /**
   * Returns the value of the `length` property of the given list.
   *
   * @sig: [a] -> Number
   * @param {Array} list The list to inspect
   * @return {Number} The length of the list
   * @example
   *
   * import { length } from 'funale'
   *
   * length([]) // 0
   * length([1, 2, 3]) // 3
   */

  var length = _curry1(function (list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });

  /**
   * "lifts" a function to be the specified arity, so that it may "map over" that
   * many lists, Functions or other objects that satisfy the y).
   *
   * @sig Number -> (*... -> *) -> ([*]... -> [*])
   * @param {Number} arity
   * @param {Function} fn The function to lift
   * @return {Function} The lifted function
   * @example
   *
   * import { liftN, sum } from 'funale'
   *
   * const madd3 = liftN(3, sum)
   * madd3([1,2,3], [1,2,3], [1]) // [3, 4, 5, 4, 5, 6, 5, 6, 7]
   */

  var liftN = _curry2(function (arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function (arg) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      return _reduce(ap, map(lifted, arg), rest);
    });
  });

  /**
   * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
   * object that satisfies the Apply spec.
   *
   * @sig (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift
   * @return {Function} The lifted function
   * @example
   *
   * import { lift } from 'funale'
   *
   * const madd3 = lift((a, b, c) => a + b + c)
   * madd3([1,2,3], [1,2,3], [1]) // [3, 4, 5, 4, 5, 6, 5, 6, 7]
   *
   * const madd5 = lift((a, b, c, d, e) => a + b + c + d + e)
   * madd5([1,2], [3], [4, 5], [6], [7, 8]) // [21, 22, 22, 23, 22, 23, 23, 24]
   */

  var lift = _curry1(function (fn) {
    return liftN(fn.length, fn);
  });

  /**
   * Returns `true` if the second argument is less than the first argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { lt } from 'funale'
   *
   * lt(1, 2) // false
   * lt(2, 1) // true
   * lt(2, 2) // false
   * lt('a', 'b') // false
   * lt('b', 'a') // true
   * lt('b', 'b') // false
   */

  var lt = _curry2(function (a, b) {
    return b < a;
  });

  /**
   * Returns `true` if the second argument is less than or equal to the first argument; `false` otherwise.
   *
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   * import { lte } from 'funale'
   *
   * lte(1, 2) // false
   * lte(2, 1) // true
   * lte(2, 2) // true
   * lte('a', 'b') // false
   * lte('b', 'a') // true
   * lte('b', 'b') // true
   */

  var lte = _curry2(function (a, b) {
    return b <= a;
  });

  /**
   * Tests a regular expression against a String. Note that this function will
   * return an empty array when there are no matches.
   *
   * @sig RegExp -> String -> [String | Undefined]
   * @param {RegExp} regex
   * @param {String} str
   * @return {Array} The list of matches or empty array
   * @example
   *
   * import { match } from 'funale'
   *
   * match(/([a-z]a)/g, 'bananas') // ['ba', 'na', 'na']
   * match(/a/, 'b') // []
   */

  var match = _curry2(function (re, str) {
    return str.match(re) || [];
  });

  var mathMod = _curry2(function (a, b) {
    if (!_isInteger(b)) return NaN;
    if (!_isInteger(a) || a < 1) return NaN;
    return (b % a + a) % a;
  });

  /**
   * Adds together all elements of a list
   *
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number}
   * @example
   *
   * import { sum } from 'funale'
   *
   * sum([1, 2, 3, 4]) // 10
   */

  var sum = reduce(add, 0);

  /**
   * Returns the mean of the given list of numbers.
   *
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number}
   * @example
   *
   * import { mean } from 'funale'
   *
   * mean([1, 2, 3]) // 2
   * mean([]) // NaN
   */

  var mean = _curry1(function (list) {
    return sum(list) / list.length;
  });

  var median = _curry1(function (list) {
    var len = list.length;
    if (len === 0) return NaN;
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
  });

  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    var len = arguments.length;
    var idx = 0;

    while (++idx < len) {
      var source = arguments[idx];

      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) output[nextKey] = source[nextKey];
        }
      }
    }

    return output;
  }

  var _objectAssign$1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

  /**
   * Create a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects,
   * the value from the second object will be used.
   *
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @example
   *
   * import { merge } from 'funale'
   *
   * merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }) // { 'name': 'fred', 'age': 40 }
   *
   * const withDefaults = R.merge({x: 0, y: 0})
   * withDefaults({y: 2}) // {x: 0, y: 2}
   */

  var merge = _curry2(function (l, r) {
    return _objectAssign$1({}, l, r);
  });

  /**
   * Returns the smaller of its two arguments.
   *
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @example
   *
   * import { min } from 'funale'
   *
   * min(1, -1) // 1
   * min('a', 'b') // 'b'
   */

  var min = _curry2(function (a, b) {
    return a > b ? b : a;
  });

  /**
   * Divides the second argument by the first and returns the remainder.
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number} The result of `b % a`
   * @example
   *
   * import { modulo } from 'funale'
   *
   * modulo(3, 17) // 2
   */

  var modulo = _curry2(function (a, b) {
    return b % a;
  });

  /**
   * Multiplies two numbers.
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number}`a * b`
   * @example
   *
   * import { multiply } from 'funale'
   *
   * const double = multiply(2)
   * const triple = multiply(3)
   * double(3) // 6
   * triple(4) // 12
   * multiply(2, 5) // 10
   */

  var multiply = _curry2(function (a, b) {
    return a * b;
  });

  /**
   * Negates its argument.
   *
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} -n
   * @example
   *
   * import { negate } from 'funale'
   *
   * negate(42) // -42
   */

  var negate = _curry1(function (n) {
    return -n;
  });

  /**
   * Returns `true` if no elements of the list match the predicate, `false` otherwise.
   *
   * Dispatches to the `all` method of the second argument, if present.
   *
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} predicate
   * @param {Array} list
   * @return {Boolean}
   * @example
   *
   * import { all } from 'funale'
   *
   * const equals3 = x => x === 3
   * none(equals3, [1, 2, 3]) // false
   * none(equals3, [1, 1, 1]) // true
   */

  var none = _curry2(function (fn, list) {
    return all(_complement(fn), list);
  });

  /**
   * Returns the `!` of its arguments. It will return `true` if when
   * passed a falsy value, and `false` when passed a truthy one.
   *
   * @sig * -> Boolean
   * @param {*} x any value
   * @return {Boolean} The logical inverse of the passed argument
   * @example
   *
   * import { not } from 'funale'
   *
   * not(true) => false
   * not(false) => true
   * not(0) => true
   * not(1) => false
   */

  var not = _curry1(function (a) {
    return !a;
  });

  /**
   * Returns the nth element of the given list or string. If index `n` is negative the
   * element at index length + n is returned. If index `n` is out of index range,
   * `undefined` is returned.
   *
   * @sig Number -> [a] -> a | undefined
   * @param {Number} index
   * @param {*} list
   * @return {*} Nth element of the list
   * @example
   *
   * import { nth } from 'funale'
   *
   * const head = nth(0)
   * const last = nth(-1)
   * head([1, 2, 3]) // 1
   * last([1, 2, 3]) // 3
   */

  var nth = _curry2(function (n, as) {
    var idx = n < 0 ? as.length + n : n;
    return as[idx];
  });

  function _of(x) {
    return [x];
  }

  /**
   * Returns a sigleton array containing the value provided.
   *
   * @sig a -> [a]
   * @param {*} x Any value
   * @return {Array} An array wrapping `x`
   * @example
   *
   * import { of } from 'funale'
   * of(42) // [42]
   */

  var of = _curry1(_of);

  /**
   * Returns a partial copy of an object omitting the keys specified.
   *
   * @sig [k] -> {k: v} -> {k: v}
   * @param {Array} names an array of String property names to omit
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with properties from `names` not on it
   * @example
   *
   * import { omit } from 'funale'
   *
   * omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) // {b: 2, c: 3}
   */

  var omit = _curry2(function (names, obj) {
    var rv = {};
    var index = {};
    var len = names.length;
    var idx = -1;

    while (++idx < len) {
      index[names[idx]] = 0;
    }

    for (var prop in obj) {
      if (!index.hasOwnProperty(prop)) rv[prop] = obj[prop];
    }

    return rv;
  });

  /**
   * Accepts a function `fn` and returns a function that can only be called once.
   * The first value calculated is returned in subsequent invocations.
   *
   * @sig (a... -> b) -> (a... -> b)
   * @param {Function} fn The function to wrap in a call-only-once wrapper
   * @return {Function} The wrapped function
   * @example
   *
   * import { once } from 'funale'
   *
   * const addOneOnce = once(x => x + 1)
   * addOneOnce(10) // 11
   * addOneOnce(addOneOnce(50)) // 11
   */

  var once = _curry1(function (fn) {
    var rv;
    var called = false;
    return _arity(fn.length, function () {
      if (called) return rv;
      called = true;
      rv = fn.apply(this, arguments);
      return rv;
    });
  });

  /**
   * Returns `true` if one or both of its arguments are `true`; `false` if both arguments are `false`.
   *
   * @sig a -> b -> a | b
   * @param {*} a
   * @param {*} b
   * @return {*} The first argument if it is truthy, otherwise the second arugment
   * @example
   *
   * import { or } from 'funale'
   *
   * or(true, true) // true
   * or(true, false) // true
   * or(false, true) // true
   * or(false, false) // false
   */

  var or = _curry2(function (a, b) {
    return a || b;
  });

  /**
   * The complement of funale's `filter` method.
   *
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} predicate
   * @param {Array} filterable
   * @return {Array} A new filterable
   * @example
   *
   * import { reject } from 'funale'
   *
   * const isEven = n => n % 2 === 0
   * reject(isEven, [1, 2, 3, 4]) // [1, 3]
   * reject(isEven, {a: 1, b: 2, c: 3, d: 4}) // {a: 1, c: 3}
   *
   */

  var reject = _curry2(function (pred, filterable) {
    var predicate = function predicate(acc, x) {
      return !pred(acc, x);
    };

    return filter(predicate, filterable);
  });

  /**
   * Takes a predicate and a list or other `Filterable` object and returns the
   * pair of filterable objects of the same type of elements which do and do not
   * satisfy, the predicate, respectively.
   *
   * @sig Fiterable f => (a -> Boolean) -> f a -> [f a, f a]
   * @param {Function} predicate A predicate to determine which side the element belongs to
   * @param {Array} Filterable The list to partition
   * @return {Array} A array containing first the subset of elements that satisfy the predicate, and
   *         second the subset of elements that do not satisfy
   *
   * @example
   *
   * import { partition, includes } from 'funale'
   *
   * partition(includes('s'), ['sss', 'ttt', 'foo', 'bars']) // [['sss', 'bars'], ['ttt', 'foo']]
   * partition(includes('s'), {a: 'sss', b: 'ttt', c: 'foo', d: 'bars'}) // [{a: 'sss', d: 'bars'}, {b: 'ttt', c: 'foo'}]
   */

  var partition = juxt([filter, reject]);

  /**
   * Retrives the value at a given path.
   *
   * @sig [String] -> {a} -> a | Undefined
   * @param {Array} path The path to use
   * @param {Object} obj The object to query
   * @return {*} The value at `path`
   * @example
   *
   * import { path } from 'funale'
   *
   * path(['a', 'b'], {a: {b: 'b'}} // 'b'
   * path(['a', 'c'], {a: {c: 'c'}} // undefined
   */

  var path = _curry2(_path);

  /**
   * Returns a partial copy of an object containing only the keys specified. If
   * the key does not exist, the property is ignored.
   *
   * @sig [k] -> {k: v} -> {k: v}
   * @param {Array} names an array of String property names to copy onto a new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties from `names` on it
   * @example
   *
   * import { pick } from 'funale'
   *
   * pick(['a', 'c', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}) // {a: 1, c: 3}
   **/

  var pick = _curry2(function (names, obj) {
    var rv = {};
    var idx = -1;

    while (++idx < names.length) {
      if (names[idx] in obj) rv[names[idx]] = obj[names[idx]];
    }

    return rv;
  });

  /**
   * Returns a partial copy of an object containing only the keys that satisfy
   * the supplied predicate.
   *
   * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
   * @param {Function} pred A predicate to determine whether or not a key
   *        should be included on the output object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties that satisfy `pred`
   * @example
   *
   * import { pickBy } from 'funale'
   *
   * const isUpperCase = (val, key) => key.toUpperCase() === key
   * pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}) //=> {A: 3, B: 4}
   */

  var pickBy = _curry2(function (pred, obj) {
    var rv = {};

    for (var prop in obj) {
      if (pred(obj[prop], prop, obj)) rv[prop] = obj[prop];
    }

    return rv;
  });

  /**
   * Returns a new list with the given element at the front, followed by
   * the elements of the list.
   *
   * @sig a -> [a] -> [a]
   * @param {*} el The element to prepend
   * @param {Array} list The list to prepend element to
   * @return {Array} A new list
   * @example
   *
   * import { append } from 'funale'
   *
   * append('c', ['a', 'b']) // ['a', 'b', 'c']
   */

  var prepend = _curry2(function (el, list) {
    return _combine([el], list);
  });

  /**
   * Multiplies together all the elements of a list.
   *
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number} The product of all the elements in the list
   * @example
   *
   * import { product } from 'funale'
   *
   * product([1, 2, 3, 7]) // 42
   */

  var product = reduce(multiply, 1);

  /**
   * Returns `true` if the specified object property is equal, in
   * `equals` terms, to the given value; `false` otherwise.
   *
   * @sig String -> a -> Object -> Boolean
   * @param {String} name
   * @param {*} val
   * @param {*} obj
   * @return {Boolean}
   * @example
   *
   * import { propEq } from 'funale'
   *
   * const fred = {name: 'Fred', age: 12, hair: 'brown'}
   * const hasBrownHair = propEq('hair', 'brown')
   * hasBrownHair(fred) // true
   */

  var propEq = _curry3(function (name, val, obj) {
    return equals(val, obj[name]);
  });

  var reduceRight = _curry3(function (fn, acc, list) {
    var idx = list.length;

    while (--idx >= 0) {
      acc = fn(list[idx], acc);
    }

    return acc;
  });

  /**
   * Similar to `reduce`, `reduceWhile` also takes a predicate that is evaluated before each iteration. If
   * the predicate returns `false`, it `short-circuits` the reduce iteration and returns the current value of
   * the accumulator.
   *
   * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} pred A predicate function that receives the accumulator and the current value
   * @param {Function} reducer A reducer function that receives the accumulator and the current value
   * @param {*} seed The initial value of the accumulator
   * @param {Array} iterable The iterable to iterate over
   * @return {*} The acumulated value
   * @example
   *
   * import { reduceWhile } from 'funale'
   *
   * const isOdd = (acc, x) => x % 2 === 1
   * const add = (a, b) => a + b
   * const xs = [1, 3, 5, 2, 4, 6]
   *
   * reduceWhile(isOdd, add, 0, xs) // 9
   */

  var reduceWhile = _curry4(function (pred, reducer, seed, iterable) {
    return _reduce(function (acc, x) {
      return pred(acc, x) ? reducer(acc, x) : acc;
    }, seed, iterable);
  });

  /**
   * Replace a substring or regex match in a string with a replacement.
   *
   * @sig RegExp|String -> String -> String -> String
   * @param {RegExp|String} pattern
   * @param {String} replacement
   * @param {String} str
   * @return {String}
   * @example
   *
   * import { replace } from 'funale'
   *
   * replace('foo', 'bar', 'foo foo foo') // 'bar foo foo'
   * replace(/foo/, 'bar', 'foo foo foo') // 'bar foo foo'
   * replace(/foo/g, 'bar', 'foo foo foo') // 'bar bar bar'
   */

  var replace = _curry3(function (re, replacement, str) {
    return str.replace(re, replacement);
  });

  var reverse = _curry1(function (list) {
    return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
  });

  /**
   * Transform a Traversable of Applicative into an Applicative of Traversable.
   *
   * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
   * @param {Function} of
   * @param {*} traversable
   * @return {*}
   * @example
   *
   * import { sequence, of } from 'funale'
   *
   * sequence(of, Just([1, 2, 3]) // [Just(1), Just(2), Just(3)]
   * sequence(of, Nothing()) // [Nothing()]
   *
   * sequence(Maybe.of, [Just(1), Just(2), Just(3)]) // Just([1, 2, 3])
   * sequence(Maybe.of, [Just(1), Just(2), Nothing()]) // Nothing()
   */

  var sequence = _curry2(function (of, traversable) {
    return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (x, acc) {
      return ap(map(prepend, x), acc);
    }, of([]), traversable);
  });

  /**
   * Returns a curried version of `Array.prototype.sort` method.
   * Please note that it returns a **copy** of the list rather than modifying the original.
   *
   * @sig ((a, a) -> Number) -> [a] -> [a]
   * @param {Function} comparator A sorting function
   * @param {Array} list The list to sort
   * @return {Array} A new sorted array
   * @example
   *
   * import { sort } from 'funale'
   *
   * sort((a, b) => a - b, [2, 1, 4, 1, 3, 5]) // [1, 1, 2, 3, 4, 5]
   */

  var sort = _curry2(function (comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
  });

  /**
   * Sorts the list according to the supplied function.
   *
   * @sig Ord b => (a -> b) -> [a] -> [a]
   * @param {Function} fn
   * @param {Array} list
   * @return {Array} A new list sorted by the keys generated by `fn`
   * @example
   *
   * import { sortBy, prop } from 'funale'
   *
   * const sortByFirstItem = sortBy(prop(0))
   * const pairs = [[-1, 1], [-2, 2], [-3, 3]]
   * sortByFirstItem(pairs) // [[-3, 3], [-2, 2], [-1, 1]]
   */

  var sortBy = _curry2(function (fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function (a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });

  /**
   * Splits a string into an array of strings based on a specific separator.
   *
   * @sig (String | RegExp) -> String -> [String]
   * @param {String|RegExp} spliter A string or regexp separator
   * @param {String} string The string to split
   * @return {Array} The array of separated strings
   * @example
   *
   * import { split } from 'funale'
   *
   * split('|', 'a|b|c|d') // ['a', 'b', 'c', 'd']
   * split('/', '/usr/local/bin/node') // ['/', 'usr', 'local', 'bin', 'node']
   */

  var split = _curry2(function (spliter, string) {
    return string.split(spliter);
  });

  /**
   * Splits a given list or string at a given index.
   *
   * @sig Number -> [a] -> [[a], [a]]
   * @param {Number} index The index where the list is split
   * @param {Array|String} list The list to be split
   * @return {Array} The splited array
   * @example
   *
   *  import { splitAt } from 'funale'
   *
   *  splitAt(1, [1, 2, 3]) // [[1], [2, 3]]
   *  splitAt(5, 'hello world') // ['hello', ' world']
   *  splitAt(-3, 'foobar') // ['foo', 'bar']
   */

  var splitAt = _curry2(function (idx, as) {
    return [slice(0, idx, as), slice(idx, length(as), as)];
  });

  /**
   * Splits a list into slices of the specific length.
   *
   * @sig Number -> [a] -> [[a]]
   * @param {Number} n
   * @param {Array} list
   * @return {Array}
   * @example
   *
   * import { splitEvery } from 'funale'
   *
   * splitEvery(3, [1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3], [4, 5, 6], [7]]
   * splitEvery(3,'abcdefijk') // ['abc', 'def', 'ijk']
   */

  var splitEvery = _curry2(function (n, list) {
    if (n <= 0) throw new Error('First argument to splitEvery must be a positive integer');
    var rv = [];
    var idx = 0;

    while (idx < list.length) {
      rv.push(slice(idx, idx += n, list));
    }

    return rv;
  });

  /**
   * Checks if a list starts with the provided sublist.
   *
   * @sig [a] -> [a] -> Boolean
   * @param {Array|String} list
   * @param {Array|String} list
   * @return {Boolean}
   * @example
   *
   * import { startsWith } from 'funale'
   *
   * startsWith(['a'], ['a', 'b', 'c']) // true
   * startsWith(['b'], ['a', 'b', 'c']) // false
   * startsWith('a', 'abc') // true
   * startsWith('b', 'abc') // false
   */

  var startsWith = _curry2(function (prefix, as) {
    return equals(take(prefix.length, as), prefix);
  });

  /**
   * Subtracts its first argument from its second argument
   *
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number} The result of `b - a`
   * @example
   *
   * import { subtract } from 'funale'
   *
   * const dec = subtract(1)
   * dec(42) // 41
   */

  var subtract = _curry2(function (a, b) {
    return b - a;
  });

  /**
   * Finds the set of all elements in the first or second list, but not both.
   *
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1
   * @param {Array} list2
   * @return {Array} The elements in `list2` or `list2`, but not both.
   * @example
   *
   * import { symmetricDifference } from 'funale'
   *
   * symmetricDifference([1, 2, 3, 4], [3, 4, 5, 6]) // [1, 2, 5, 6]
   * symmetricDifference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) // [{b: 2}, {c: 3}]
   */

  var symmetricDifference = _curry2(function (list1, list2) {
    return _combine(difference(list1, list2), difference(list2, list1));
  });

  /**
   * Returns all but the first element of the given list or string.
   *
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @example
   *
   * import { tail } from 'funale'
   *
   * tail([1, 2, 3])  // [2, 3]
   * tail([1, 2])     // [2]
   * tail([1])        // []
   * tail([])         // []
   *
   * tail('abc')  // 'bc'
   * tail('ab')   // 'b'
   * tail('a')    // ''
   * tail('')     // ''
   */

  var tail = slice(1, Infinity);

  /**
   * Runs the given function with the supplied object, then returns the object.
   *
   * @sig (a -> *) -> a -> a
   * @param {Function} fn The function to call with `x`
   * @param {*} x
   * @return {*} `x`
   * @example
   *
   * import { tap } from 'funale'
   *
   * const sayX = x => console.log('x is ' + x)
   * tap(sayX, 100) // 100
   * // logs `x is 100`
   */

  var tap = _curry2(function (fn, x) {
    fn(x);
    return x;
  });

  /**
   * Creates a thunk out of a function. A thunk delays a calculation until
   * its result is needed, providing lazy evaluation of arguments.
   *
   * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
   * @param {Function} fn A function to wrap in a thunk
   * @return {Function} Expects arguments for `fn` and returns a new function
   *  that, when called, applies those arguments to `fn`
   * @example
   *
   * import { thunkify } from 'funale'
   *
   * thunkify(x => x)(42)() // 42
   * thunkify((a, b) => a + b)(25, 17)() // 42
   */

  var thunkify = _curry1(function (fn) {
    return curryN(fn.length, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function invokeThunk() {
        return fn.apply(this, args);
      };
    });
  });

  /**
   * Returns the lower case wersion of a given string.
   *
   * @sig String -> String
   * @param {String} str
   * @return {String}
   * @example
   *
   * import { toLower } from 'funale'
   *
   * toLower('XYZ') // 'xyz'
   */

  var toLower = _curry1(function (str) {
    return str.toLowerCase();
  });

  /**
   * Converts an object into an array of key, value arrays. Only the object's
   * own properties are used.
   *
   * @sig {k: v} -> [[k,v]]
   * @param {Object} obj The object to extract from
   * @return {Array} An array of key, value arrays from the object's own properties
   * @example
   *
   * import { toPairs } from 'funale'
   *
   * toPairs({a: 1, b: 2, c: 3}) // [['a', 1], ['b', 2], ['c', 3]]
   */

  var toPairs = _curry1(function (obj) {
    var pairs = [];

    for (var prop in obj) {
      if (_has(prop, obj)) pairs[pairs.length] = [prop, obj[prop]];
    }

    return pairs;
  });

  /**
   * Returns the upper case wersion of a given string.
   *
   * @sig String -> String
   * @param {String} str
   * @return {String}
   * @example
   *
   * import { toUpper } from 'funale'
   *
   * toLower('xyz') // 'XYZ'
   */

  var toUpper = _curry1(function (str) {
    return str.toUpperCase();
  });

  /**
   * Removes whitespace from both ends of the string.
   *
   * @sig String -> String
   * @param {String} str The string to trim
   * @return {String} Trimmed version of `str`
   * @example
   *
   * import { trim } from 'funale'
   *
   * trim('  xy z ') // 'xy z'
   */

  var trim = _curry1(function (str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  });

  /**
   *
   * Derives a variadic function from a function which takes an array.
   *
   * @sig ([*...] -> a) -> (*... -> a)
   * @param {Function} fn
   * @return {Function}
   * @example
   *
   * import { unapply } from 'funale'
   *
   * unapply(JSON.stringify)(1, 2, 3) // '[1,2,3]'
   */

  var unapply = _curry1(function (fn) {
    return function () {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts
   * exactly 1 parameter. Any extraneous parameters will not be passed to the
   * supplied function.
   *
   * @sig (* -> b) -> (a -> b)
   * @param {Function} fn The function to wrap
   * @return {Function} A new function wrapping `fn`
   * @example
   *
   * import { unary } from 'funale'
   *
   * const takesOneArg = unary((a, b) => [a, b])
   * takesOneArg.length // 1
   * takesOneArg(1, 2) // [1, undefined]
   */

  var unary = _curry1(function (fn) {
    return function (a) {
      return fn.call(this, a);
    };
  });

  /**
   * Combines two lists into a set composed of the elements of each list.
   *
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1
   * @param {Array} list2
   * @return {Array} The first and second lists concatenated, with duplicates removed
   * @example
   *
   * import { union } from 'funale'
   *
   * union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
   */

  var union = _curry2(function (as, bs) {
    return uniq(_combine(as, bs));
  });

  /**
   * Removes one level of nesting from any Chain.
   *
   * @sig Chain c => c (c a) -> c a
   * @param {*} list
   * @return {*}
   * @example
   *
   * import { unnest } from 'funale
   *
   * unnest([1, [2], [[3]]]) // [1, 2, [3]]
   */

  var unnest = chain(function (x) {
    return x;
  });

  /**
   * Returns a list of a given object's own enumerable property values, in the same order
   * as that provided by for...in loop.
   *
   * @sig {k: v} -> [v]
   * @param {Object} obj The object to extract values from
   * @return {Array} An array of the values of the given object's own enumerable properties
   * @example

   * import { values } from 'funale'
   *
   * values({a: 1, b: 2, c: 3}) // [1, 2, 3]
   */

  var values = _curry1(function (obj) {
    var props = keys(obj);
    var len = props.length;
    var vals = [];
    var idx = -1;

    while (++idx < len) {
      vals[idx] = obj[props[idx]];
    }

    return vals;
  });

  /**
   * Returns a new list without values in the first argument.
   *
   * @sig [a] -> [a] -> [a]
   * @param {Array} xs The values to be removed
   * @param {Array} list The list to remove values from
   * @return {Array} The new array without values in `xs`
   * @example
   *
   * import { without } from 'funale'
   * without([2, 3], [1, 2, 3, ,4]) // [1, 4]
   */

  var without = _curry2(function (xs, list) {
    return reject(flip(_includes)(xs), list);
  });

  /**
   * Creates a new list out of the two supplied by pairing up equally-positioned
   * item from both lists. The returned list is truncated to the length of the
   * shorter of the two input lists.
   *
   * @sig [a] -> [b] -> [[a, b]]
   * @param {Array} list1
   * @param {Array} list2
   * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`
   * @example
   *
   * import { zip } from 'funale'
   *
   * zip([1, 2, 3], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b'], [3, 'c']]
   */

  var zip = _curry2(function (a, b) {
    var rv = [];
    var len = Math.min(a.length, b.length);
    var idx = -1;

    while (++idx < len) {
      rv[idx] = [a[idx], b[idx]];
    }

    return rv;
  });

  /**
   * Creates a new list out of the two supplied by applying the function to each
   * equally-positioned pair in the lists. The returned list is truncated to the
   * length of the shorter of the two input lists.
   *
   * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
   * @param {Function} fn The function used to combine two elements into one value
   * @param {Array} list1 The first array to consider
   * @param {Array} list2 The second array to consider
   * @return {Array} The list made by combining same-indexed elements of `list1` and `list2` using `fn`.
   * @example
   *
   * import { zipWith } from 'funale'
   *
   * const add = (a, b) => a + b
   * zipWith(add, [100, 200, 300], [1, 2, 3]) // [101, 202, 303]
   */

  var zipWith = _curry3(function (fn, a, b) {
    var rv = [];
    var len = Math.min(a.length, b.length);
    var idx = -1;

    while (++idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
    }

    return rv;
  });

  exports.add = add;
  exports.adjust = adjust;
  exports.all = all;
  exports.allPass = allPass;
  exports.always = always;
  exports.and = and;
  exports.any = any;
  exports.anyPass = anyPass;
  exports.ap = ap;
  exports.append = append;
  exports.apply = apply;
  exports.assoc = assoc;
  exports.binary = binary;
  exports.bind = bind;
  exports.chain = chain;
  exports.clone = clone;
  exports.comparator = comparator;
  exports.complement = complement;
  exports.compose = compose;
  exports.concat = concat;
  exports.converge = converge;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.dec = dec;
  exports.defaultTo = defaultTo;
  exports.difference = difference;
  exports.dissoc = dissoc;
  exports.divide = divide;
  exports.drop = drop;
  exports.empty = empty;
  exports.endsWith = endsWith;
  exports.equals = equals;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = findIndex;
  exports.flatten = flatten;
  exports.flip = flip;
  exports.forEach = forEach;
  exports.groupBy = groupBy;
  exports.gt = gt;
  exports.gte = gte;
  exports.has = has;
  exports.identity = identity;
  exports.inc = inc;
  exports.includes = includes;
  exports.indexOf = indexOf;
  exports.infixConcat = infixConcat;
  exports.infixDivide = infixDivide;
  exports.infixGt = infixGt;
  exports.infixGte = infixGte;
  exports.infixLt = infixLt;
  exports.infixLte = infixLte;
  exports.infixMathMod = infixMathMod;
  exports.infixModulo = infixModulo;
  exports.infixSubtract = infixSubtract;
  exports.init = init;
  exports.insert = insert;
  exports.intersection = intersection;
  exports.is = is;
  exports.join = join;
  exports.juxt = juxt;
  exports.keys = keys;
  exports.lastIndexOf = lastIndexOf;
  exports.length = length;
  exports.lift = lift;
  exports.liftN = liftN;
  exports.lt = lt;
  exports.lte = lte;
  exports.map = map;
  exports.match = match;
  exports.mathMod = mathMod;
  exports.max = max;
  exports.mean = mean;
  exports.median = median;
  exports.merge = merge;
  exports.min = min;
  exports.modulo = modulo;
  exports.multiply = multiply;
  exports.negate = negate;
  exports.none = none;
  exports.not = not;
  exports.nth = nth;
  exports.of = of;
  exports.omit = omit;
  exports.once = once;
  exports.or = or;
  exports.partition = partition;
  exports.path = path;
  exports.pick = pick;
  exports.pickBy = pickBy;
  exports.pipe = pipe;
  exports.pluck = pluck;
  exports.prepend = prepend;
  exports.product = product;
  exports.prop = prop;
  exports.propEq = propEq;
  exports.reduce = reduce;
  exports.reduceBy = reduceBy;
  exports.reduceRight = reduceRight;
  exports.reduceWhile = reduceWhile;
  exports.reject = reject;
  exports.remove = remove;
  exports.replace = replace;
  exports.reverse = reverse;
  exports.sequence = sequence;
  exports.slice = slice;
  exports.sort = sort;
  exports.sortBy = sortBy;
  exports.split = split;
  exports.splitAt = splitAt;
  exports.splitEvery = splitEvery;
  exports.startsWith = startsWith;
  exports.subtract = subtract;
  exports.sum = sum;
  exports.symmetricDifference = symmetricDifference;
  exports.tail = tail;
  exports.take = take;
  exports.tap = tap;
  exports.test = test;
  exports.thunkify = thunkify;
  exports.toLower = toLower;
  exports.toPairs = toPairs;
  exports.toUpper = toUpper;
  exports.trim = trim;
  exports.type = type;
  exports.unapply = unapply;
  exports.unary = unary;
  exports.union = union;
  exports.uniq = uniq;
  exports.unnest = unnest;
  exports.update = update;
  exports.values = values;
  exports.without = without;
  exports.zip = zip;
  exports.zipWith = zipWith;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
