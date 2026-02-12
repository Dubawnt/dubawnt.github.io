function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArrayLimit(e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [], r = !0, i = !1, o = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
        } catch (u) {
            i = !0, o = u
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _createForOfIteratorHelper(e) {
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = _unsupportedIterableToArray(e))) {
            var t = 0, n = function () {
            };
            return {
                s: n, n: function () {
                    return t >= e.length ? {done: !0} : {done: !1, value: e[t++]}
                }, e: function (e) {
                    throw e
                }, f: n
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, i, o = !0, a = !1;
    return {
        s: function () {
            r = e[Symbol.iterator]()
        }, n: function () {
            var e = r.next();
            return o = e.done, e
        }, e: function (e) {
            a = !0, i = e
        }, f: function () {
            try {
                o || null == r.return || r.return()
            } finally {
                if (a) throw i
            }
        }
    }
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _construct(e, t, n) {
    return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e, r));
        return n && _setPrototypeOf(i, n.prototype), i
    }).apply(null, arguments)
}

function _get(e, t, n) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var r = _superPropBase(e, t);
        if (r) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            return i.get ? i.get.call(n) : i.value
        }
    })(e, t, n || e)
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e));) ;
    return e
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _createSuper(e) {
    var t = _isNativeReflectConstruct();
    return function () {
        var n, r = _getPrototypeOf(e);
        if (t) {
            var i = _getPrototypeOf(this).constructor;
            n = Reflect.construct(r, arguments, i)
        } else n = r.apply(this, arguments);
        return _possibleConstructorReturn(this, n)
    }
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
        }))), !0
    } catch (e) {
        return !1
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function (e, t, n) {
        e.exports = n("zUnb")
    }, zUnb: function (e, t, n) {
        "use strict";

        function r(e) {
            return "function" == typeof e
        }

        n.r(t);
        var i = !1, o = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(e) {
                if (e) {
                    var t = new Error;
                    console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                i = e
            }, get useDeprecatedSynchronousErrorHandling() {
                return i
            }
        };

        function a(e) {
            setTimeout((function () {
                throw e
            }), 0)
        }

        var s = {
            closed: !0, next: function (e) {
            }, error: function (e) {
                if (o.useDeprecatedSynchronousErrorHandling) throw e;
                a(e)
            }, complete: function () {
            }
        }, u = Array.isArray || function (e) {
            return e && "number" == typeof e.length
        };

        function l(e) {
            return null !== e && "object" == typeof e
        }

        var c, h = function () {
            function e(e) {
                return Error.call(this), this.message = e ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(e.map((function (e, t) {
                    return "".concat(t + 1, ") ").concat(e.toString())
                })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = e, this
            }

            return e.prototype = Object.create(Error.prototype), e
        }(), f = ((c = function () {
            function e(t) {
                _classCallCheck(this, e), this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }

            return _createClass(e, [{
                key: "unsubscribe", value: function () {
                    var t;
                    if (!this.closed) {
                        var n = this._parentOrParents, i = this._unsubscribe, o = this._subscriptions;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this); else if (null !== n) for (var a = 0; a < n.length; ++a) n[a].remove(this);
                        if (r(i)) try {
                            i.call(this)
                        } catch (p) {
                            t = p instanceof h ? d(p.errors) : [p]
                        }
                        if (u(o)) for (var s = -1, c = o.length; ++s < c;) {
                            var f = o[s];
                            if (l(f)) try {
                                f.unsubscribe()
                            } catch (p) {
                                t = t || [], p instanceof h ? t = t.concat(d(p.errors)) : t.push(p)
                            }
                        }
                        if (t) throw new h(t)
                    }
                }
            }, {
                key: "add", value: function (t) {
                    var n = t;
                    if (!t) return e.EMPTY;
                    switch (typeof t) {
                        case"function":
                            n = new e(t);
                        case"object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if (!(n instanceof e)) {
                                var r = n;
                                (n = new e)._subscriptions = [r]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + t + " added to Subscription.")
                    }
                    var i = n._parentOrParents;
                    if (null === i) n._parentOrParents = this; else if (i instanceof e) {
                        if (i === this) return n;
                        n._parentOrParents = [i, this]
                    } else {
                        if (-1 !== i.indexOf(this)) return n;
                        i.push(this)
                    }
                    var o = this._subscriptions;
                    return null === o ? this._subscriptions = [n] : o.push(n), n
                }
            }, {
                key: "remove", value: function (e) {
                    var t = this._subscriptions;
                    if (t) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1)
                    }
                }
            }]), e
        }()).EMPTY = function (e) {
            return e.closed = !0, e
        }(new c), c);

        function d(e) {
            return e.reduce((function (e, t) {
                return e.concat(t instanceof h ? t.errors : t)
            }), [])
        }

        var p = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
            v = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var o;
                    switch (_classCallCheck(this, n), (o = t.call(this)).syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                        case 0:
                            o.destination = s;
                            break;
                        case 1:
                            if (!e) {
                                o.destination = s;
                                break
                            }
                            if ("object" == typeof e) {
                                e instanceof n ? (o.syncErrorThrowable = e.syncErrorThrowable, o.destination = e, e.add(_assertThisInitialized(o))) : (o.syncErrorThrowable = !0, o.destination = new g(_assertThisInitialized(o), e));
                                break
                            }
                        default:
                            o.syncErrorThrowable = !0, o.destination = new g(_assertThisInitialized(o), e, r, i)
                    }
                    return o
                }

                return _createClass(n, [{
                    key: p, value: function () {
                        return this
                    }
                }, {
                    key: "next", value: function (e) {
                        this.isStopped || this._next(e)
                    }
                }, {
                    key: "error", value: function (e) {
                        this.isStopped || (this.isStopped = !0, this._error(e))
                    }
                }, {
                    key: "complete", value: function () {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }
                }, {
                    key: "unsubscribe", value: function () {
                        this.closed || (this.isStopped = !0, _get(_getPrototypeOf(n.prototype), "unsubscribe", this).call(this))
                    }
                }, {
                    key: "_next", value: function (e) {
                        this.destination.next(e)
                    }
                }, {
                    key: "_error", value: function (e) {
                        this.destination.error(e), this.unsubscribe()
                    }
                }, {
                    key: "_complete", value: function () {
                        this.destination.complete(), this.unsubscribe()
                    }
                }, {
                    key: "_unsubscribeAndRecycle", value: function () {
                        var e = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                    }
                }], [{
                    key: "create", value: function (e, t, r) {
                        var i = new n(e, t, r);
                        return i.syncErrorThrowable = !1, i
                    }
                }]), n
            }(f), g = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, i, o, a) {
                    var u, l;
                    _classCallCheck(this, n), (u = t.call(this))._parentSubscriber = e;
                    var c = _assertThisInitialized(u);
                    return r(i) ? l = i : i && (l = i.next, o = i.error, a = i.complete, i !== s && (r((c = Object.create(i)).unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(_assertThisInitialized(u)))), u._context = c, u._next = l, u._error = o, u._complete = a, u
                }

                return _createClass(n, [{
                    key: "next", value: function (e) {
                        if (!this.isStopped && this._next) {
                            var t = this._parentSubscriber;
                            o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                        }
                    }
                }, {
                    key: "error", value: function (e) {
                        if (!this.isStopped) {
                            var t = this._parentSubscriber, n = o.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe()); else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : a(e), this.unsubscribe(); else {
                                if (this.unsubscribe(), n) throw e;
                                a(e)
                            }
                        }
                    }
                }, {
                    key: "complete", value: function () {
                        var e = this;
                        if (!this.isStopped) {
                            var t = this._parentSubscriber;
                            if (this._complete) {
                                var n = function () {
                                    return e._complete.call(e._context)
                                };
                                o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }
                }, {
                    key: "__tryOrUnsub", value: function (e, t) {
                        try {
                            e.call(this._context, t)
                        } catch (n) {
                            if (this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling) throw n;
                            a(n)
                        }
                    }
                }, {
                    key: "__tryOrSetError", value: function (e, t, n) {
                        if (!o.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            t.call(this._context, n)
                        } catch (r) {
                            return o.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (a(r), !0)
                        }
                        return !1
                    }
                }, {
                    key: "_unsubscribe", value: function () {
                        var e = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, e.unsubscribe()
                    }
                }]), n
            }(v), y = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function m(e) {
            return e
        }

        function _() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k(t)
        }

        function k(e) {
            return 0 === e.length ? m : 1 === e.length ? e[0] : function (t) {
                return e.reduce((function (e, t) {
                    return t(e)
                }), t)
            }
        }

        var C, w = ((C = function () {
            function e(t) {
                _classCallCheck(this, e), this._isScalar = !1, t && (this._subscribe = t)
            }

            return _createClass(e, [{
                key: "lift", value: function (t) {
                    var n = new e;
                    return n.source = this, n.operator = t, n
                }
            }, {
                key: "subscribe", value: function (e, t, n) {
                    var r = this.operator, i = function (e, t, n) {
                        if (e) {
                            if (e instanceof v) return e;
                            if (e[p]) return e[p]()
                        }
                        return e || t || n ? new v(e, t, n) : new v(s)
                    }(e, t, n);
                    if (i.add(r ? r.call(i, this.source) : this.source || o.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), o.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                    return i
                }
            }, {
                key: "_trySubscribe", value: function (e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        o.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), function (e) {
                            for (; e;) {
                                var t = e, n = t.closed, r = t.destination, i = t.isStopped;
                                if (n || i) return !1;
                                e = r && r instanceof v ? r : null
                            }
                            return !0
                        }(e) ? e.error(t) : console.warn(t)
                    }
                }
            }, {
                key: "forEach", value: function (e, t) {
                    var n = this;
                    return new (t = b(t))((function (t, r) {
                        var i;
                        i = n.subscribe((function (t) {
                            try {
                                e(t)
                            } catch (n) {
                                r(n), i && i.unsubscribe()
                            }
                        }), r, t)
                    }))
                }
            }, {
                key: "_subscribe", value: function (e) {
                    var t = this.source;
                    return t && t.subscribe(e)
                }
            }, {
                key: y, value: function () {
                    return this
                }
            }, {
                key: "pipe", value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return 0 === t.length ? this : k(t)(this)
                }
            }, {
                key: "toPromise", value: function (e) {
                    var t = this;
                    return new (e = b(e))((function (e, n) {
                        var r;
                        t.subscribe((function (e) {
                            return r = e
                        }), (function (e) {
                            return n(e)
                        }), (function () {
                            return e(r)
                        }))
                    }))
                }
            }]), e
        }()).create = function (e) {
            return new C(e)
        }, C);

        function b(e) {
            if (e || (e = o.Promise || Promise), !e) throw new Error("no Promise impl found");
            return e
        }

        var S, x = function () {
            function e() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }

            return e.prototype = Object.create(Error.prototype), e
        }(), E = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this)).subject = e, i.subscriber = r, i.closed = !1, i
            }

            return _createClass(n, [{
                key: "unsubscribe", value: function () {
                    if (!this.closed) {
                        this.closed = !0;
                        var e = this.subject, t = e.observers;
                        if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                            var n = t.indexOf(this.subscriber);
                            -1 !== n && t.splice(n, 1)
                        }
                    }
                }
            }]), n
        }(f), O = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this, e)).destination = e, r
            }

            return n
        }(v), A = ((S = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e;
                return _classCallCheck(this, n), (e = t.call(this)).observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
            }

            return _createClass(n, [{
                key: p, value: function () {
                    return new O(this)
                }
            }, {
                key: "lift", value: function (e) {
                    var t = new T(this, this);
                    return t.operator = e, t
                }
            }, {
                key: "next", value: function (e) {
                    if (this.closed) throw new x;
                    if (!this.isStopped) for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].next(e)
                }
            }, {
                key: "error", value: function (e) {
                    if (this.closed) throw new x;
                    this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                    for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].error(e);
                    this.observers.length = 0
                }
            }, {
                key: "complete", value: function () {
                    if (this.closed) throw new x;
                    this.isStopped = !0;
                    for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                    this.observers.length = 0
                }
            }, {
                key: "unsubscribe", value: function () {
                    this.isStopped = !0, this.closed = !0, this.observers = null
                }
            }, {
                key: "_trySubscribe", value: function (e) {
                    if (this.closed) throw new x;
                    return _get(_getPrototypeOf(n.prototype), "_trySubscribe", this).call(this, e)
                }
            }, {
                key: "_subscribe", value: function (e) {
                    if (this.closed) throw new x;
                    return this.hasError ? (e.error(this.thrownError), f.EMPTY) : this.isStopped ? (e.complete(), f.EMPTY) : (this.observers.push(e), new E(this, e))
                }
            }, {
                key: "asObservable", value: function () {
                    var e = new w;
                    return e.source = this, e
                }
            }]), n
        }(w)).create = function (e, t) {
            return new T(e, t)
        }, S), T = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this)).destination = e, i.source = r, i
            }

            return _createClass(n, [{
                key: "next", value: function (e) {
                    var t = this.destination;
                    t && t.next && t.next(e)
                }
            }, {
                key: "error", value: function (e) {
                    var t = this.destination;
                    t && t.error && this.destination.error(e)
                }
            }, {
                key: "complete", value: function () {
                    var e = this.destination;
                    e && e.complete && this.destination.complete()
                }
            }, {
                key: "_subscribe", value: function (e) {
                    return this.source ? this.source.subscribe(e) : f.EMPTY
                }
            }]), n
        }(A);

        function I(e) {
            return e && "function" == typeof e.schedule
        }

        var P = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this)).parent = e, o.outerValue = r, o.outerIndex = i, o.index = 0, o
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
                }
            }, {
                key: "_error", value: function (e) {
                    this.parent.notifyError(e, this), this.unsubscribe()
                }
            }, {
                key: "_complete", value: function () {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }]), n
        }(v), R = function (e) {
            return function (t) {
                for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                t.complete()
            }
        };
        var M = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator", D = function (e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };

        function V(e) {
            return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        }

        var N = function (e) {
            if (e && "function" == typeof e[y]) return r = e, function (e) {
                var t = r[y]();
                if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return t.subscribe(e)
            };
            if (D(e)) return R(e);
            if (V(e)) return n = e, function (e) {
                return n.then((function (t) {
                    e.closed || (e.next(t), e.complete())
                }), (function (t) {
                    return e.error(t)
                })).then(null, a), e
            };
            if (e && "function" == typeof e[M]) return t = e, function (e) {
                for (var n = t[M](); ;) {
                    var r = n.next();
                    if (r.done) {
                        e.complete();
                        break
                    }
                    if (e.next(r.value), e.closed) break
                }
                return "function" == typeof n.return && e.add((function () {
                    n.return && n.return()
                })), e
            };
            var t, n, r, i = l(e) ? "an invalid object" : "'".concat(e, "'");
            throw new TypeError("You provided ".concat(i, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.")
        };

        function j(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new P(e, n, r);
            if (!i.closed) return t instanceof w ? t.subscribe(i) : N(t)(i)
        }

        var F = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }

            return _createClass(n, [{
                key: "notifyNext", value: function (e, t, n, r, i) {
                    this.destination.next(t)
                }
            }, {
                key: "notifyError", value: function (e, t) {
                    this.destination.error(e)
                }
            }, {
                key: "notifyComplete", value: function (e) {
                    this.destination.complete()
                }
            }]), n
        }(v);

        function U(e, t) {
            return function (n) {
                if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new H(e, t))
            }
        }

        var H = function () {
            function e(t, n) {
                _classCallCheck(this, e), this.project = t, this.thisArg = n
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new L(e, this.project, this.thisArg))
                }
            }]), e
        }(), L = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, e)).project = r, o.count = 0, o.thisArg = i || _assertThisInitialized(o), o
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    var t;
                    try {
                        t = this.project.call(this.thisArg, e, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(t)
                }
            }]), n
        }(v);

        function z(e, t) {
            return new w((function (n) {
                var r = new f, i = 0;
                return r.add(t.schedule((function () {
                    i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete()
                }))), r
            }))
        }

        function B(e, t) {
            return t ? function (e, t) {
                if (null != e) {
                    if (function (e) {
                        return e && "function" == typeof e[y]
                    }(e)) return function (e, t) {
                        return new w((function (n) {
                            var r = new f;
                            return r.add(t.schedule((function () {
                                var i = e[y]();
                                r.add(i.subscribe({
                                    next: function (e) {
                                        r.add(t.schedule((function () {
                                            return n.next(e)
                                        })))
                                    }, error: function (e) {
                                        r.add(t.schedule((function () {
                                            return n.error(e)
                                        })))
                                    }, complete: function () {
                                        r.add(t.schedule((function () {
                                            return n.complete()
                                        })))
                                    }
                                }))
                            }))), r
                        }))
                    }(e, t);
                    if (V(e)) return function (e, t) {
                        return new w((function (n) {
                            var r = new f;
                            return r.add(t.schedule((function () {
                                return e.then((function (e) {
                                    r.add(t.schedule((function () {
                                        n.next(e), r.add(t.schedule((function () {
                                            return n.complete()
                                        })))
                                    })))
                                }), (function (e) {
                                    r.add(t.schedule((function () {
                                        return n.error(e)
                                    })))
                                }))
                            }))), r
                        }))
                    }(e, t);
                    if (D(e)) return z(e, t);
                    if (function (e) {
                        return e && "function" == typeof e[M]
                    }(e) || "string" == typeof e) return function (e, t) {
                        if (!e) throw new Error("Iterable cannot be null");
                        return new w((function (n) {
                            var r, i = new f;
                            return i.add((function () {
                                r && "function" == typeof r.return && r.return()
                            })), i.add(t.schedule((function () {
                                r = e[M](), i.add(t.schedule((function () {
                                    if (!n.closed) {
                                        var e, t;
                                        try {
                                            var i = r.next();
                                            e = i.value, t = i.done
                                        } catch (o) {
                                            return void n.error(o)
                                        }
                                        t ? n.complete() : (n.next(e), this.schedule())
                                    }
                                })))
                            }))), i
                        }))
                    }(e, t)
                }
                throw new TypeError((null !== e && typeof e || e) + " is not observable")
            }(e, t) : e instanceof w ? e : new w(N(e))
        }

        function G(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
            return "function" == typeof t ? function (r) {
                return r.pipe(G((function (n, r) {
                    return B(e(n, r)).pipe(U((function (e, i) {
                        return t(n, e, r, i)
                    })))
                }), n))
            } : ("number" == typeof t && (n = t), function (t) {
                return t.lift(new q(e, n))
            })
        }

        var q = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
                _classCallCheck(this, e), this.project = t, this.concurrent = n
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new W(e, this.project, this.concurrent))
                }
            }]), e
        }(), W = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
                return _classCallCheck(this, n), (i = t.call(this, e)).project = r, i.concurrent = o, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
                }
            }, {
                key: "_tryNext", value: function (e) {
                    var t, n = this.index++;
                    try {
                        t = this.project(e, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this.active++, this._innerSub(t, e, n)
                }
            }, {
                key: "_innerSub", value: function (e, t, n) {
                    var r = new P(this, t, n), i = this.destination;
                    i.add(r);
                    var o = j(this, e, void 0, void 0, r);
                    o !== r && i.add(o)
                }
            }, {
                key: "_complete", value: function () {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
            }, {
                key: "notifyNext", value: function (e, t, n, r, i) {
                    this.destination.next(t)
                }
            }, {
                key: "notifyComplete", value: function (e) {
                    var t = this.buffer;
                    this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }]), n
        }(F);

        function Z() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY;
            return G(m, e)
        }

        function Q(e, t) {
            return t ? z(e, t) : new w(R(e))
        }

        function J() {
            return function (e) {
                return e.lift(new $(e))
            }
        }

        var K, $ = function () {
            function e(t) {
                _classCallCheck(this, e), this.connectable = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new Y(e, n), i = t.subscribe(r);
                    return r.closed || (r.connection = n.connect()), i
                }
            }]), e
        }(), Y = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).connectable = r, i
            }

            return _createClass(n, [{
                key: "_unsubscribe", value: function () {
                    var e = this.connectable;
                    if (e) {
                        this.connectable = null;
                        var t = e._refCount;
                        if (t <= 0) this.connection = null; else if (e._refCount = t - 1, t > 1) this.connection = null; else {
                            var n = this.connection, r = e._connection;
                            this.connection = null, !r || n && r !== n || r.unsubscribe()
                        }
                    } else this.connection = null
                }
            }]), n
        }(v), X = {
            operator: {value: null},
            _refCount: {value: 0, writable: !0},
            _subject: {value: null, writable: !0},
            _connection: {value: null, writable: !0},
            _subscribe: {
                value: (K = function (e) {
                    _inherits(n, e);
                    var t = _createSuper(n);

                    function n(e, r) {
                        var i;
                        return _classCallCheck(this, n), (i = t.call(this)).source = e, i.subjectFactory = r, i._refCount = 0, i._isComplete = !1, i
                    }

                    return _createClass(n, [{
                        key: "_subscribe", value: function (e) {
                            return this.getSubject().subscribe(e)
                        }
                    }, {
                        key: "getSubject", value: function () {
                            var e = this._subject;
                            return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
                        }
                    }, {
                        key: "connect", value: function () {
                            var e = this._connection;
                            return e || (this._isComplete = !1, (e = this._connection = new f).add(this.source.subscribe(new ee(this.getSubject(), this))), e.closed && (this._connection = null, e = f.EMPTY)), e
                        }
                    }, {
                        key: "refCount", value: function () {
                            return J()(this)
                        }
                    }]), n
                }(w).prototype)._subscribe
            },
            _isComplete: {value: K._isComplete, writable: !0},
            getSubject: {value: K.getSubject},
            connect: {value: K.connect},
            refCount: {value: K.refCount}
        }, ee = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).connectable = r, i
            }

            return _createClass(n, [{
                key: "_error", value: function (e) {
                    this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_error", this).call(this, e)
                }
            }, {
                key: "_complete", value: function () {
                    this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
                }
            }, {
                key: "_unsubscribe", value: function () {
                    var e = this.connectable;
                    if (e) {
                        this.connectable = null;
                        var t = e._connection;
                        e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                    }
                }
            }]), n
        }(O);

        function te() {
            return new A
        }

        function ne(e) {
            return {toString: e}.toString()
        }

        function re(e, t, n) {
            return ne((function () {
                var r = function (e) {
                    return function () {
                        if (e) {
                            var t = e.apply(void 0, arguments);
                            for (var n in t) this[n] = t[n]
                        }
                    }
                }(t);

                function i() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if (this instanceof i) return r.apply(this, t), this;
                    var o = _construct(i, t);
                    return a.annotation = o, a;

                    function a(e, t, n) {
                        for (var r = e.hasOwnProperty("__parameters__") ? e.__parameters__ : Object.defineProperty(e, "__parameters__", {value: []}).__parameters__; r.length <= n;) r.push(null);
                        return (r[n] = r[n] || []).push(o), e
                    }
                }

                return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
            }))
        }

        var ie = re("Inject", (function (e) {
            return {token: e}
        })), oe = re("Optional"), ae = re("Self"), se = re("SkipSelf"), ue = function (e) {
            return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
        }({});

        function le(e) {
            for (var t in e) if (e[t] === le) return t;
            throw Error("Could not find renamed property on target object.")
        }

        function ce(e, t) {
            for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
        }

        function he(e) {
            return {token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0}
        }

        function fe(e) {
            return {factory: e.factory, providers: e.providers || [], imports: e.imports || []}
        }

        function de(e) {
            return pe(e, e[ge]) || pe(e, e[_e])
        }

        function pe(e, t) {
            return t && t.token === e ? t : null
        }

        function ve(e) {
            return e && (e.hasOwnProperty(ye) || e.hasOwnProperty(ke)) ? e[ye] : null
        }

        var ge = le({"\u0275prov": le}), ye = le({"\u0275inj": le}), me = le({"\u0275provFallback": le}),
            _e = le({ngInjectableDef: le}), ke = le({ngInjectorDef: le});

        function Ce(e) {
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) return "[" + e.map(Ce).join(", ") + "]";
            if (null == e) return "" + e;
            if (e.overriddenName) return "".concat(e.overriddenName);
            if (e.name) return "".concat(e.name);
            var t = e.toString();
            if (null == t) return "" + t;
            var n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }

        function we(e, t) {
            return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
        }

        var be = le({__forward_ref__: le});

        function Se(e) {
            return e.__forward_ref__ = Se, e.toString = function () {
                return Ce(this())
            }, e
        }

        function xe(e) {
            return Ee(e) ? e() : e
        }

        function Ee(e) {
            return "function" == typeof e && e.hasOwnProperty(be) && e.__forward_ref__ === Se
        }

        var Oe, Ae = "undefined" != typeof globalThis && globalThis, Te = "undefined" != typeof window && window,
            Ie = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            Pe = "undefined" != typeof global && global, Re = Ae || Pe || Te || Ie, Me = le({"\u0275cmp": le}),
            De = le({"\u0275dir": le}), Ve = le({"\u0275pipe": le}), Ne = le({"\u0275mod": le}),
            je = le({"\u0275loc": le}), Fe = le({"\u0275fac": le}), Ue = le({__NG_ELEMENT_ID__: le}), He = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = he({
                        token: this,
                        providedIn: n.providedIn || "root",
                        factory: n.factory
                    }))
                }

                return _createClass(e, [{
                    key: "toString", value: function () {
                        return "InjectionToken ".concat(this._desc)
                    }
                }]), e
            }(), Le = new He("INJECTOR", -1), ze = {}, Be = /\n/gm, Ge = le({provide: String, useValue: le}), qe = void 0;

        function We(e) {
            var t = qe;
            return qe = e, t
        }

        function Ze(e) {
            var t = Oe;
            return Oe = e, t
        }

        function Qe(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue.Default;
            if (void 0 === qe) throw new Error("inject() must be called from an injection context");
            return null === qe ? Ke(e, void 0, t) : qe.get(e, t & ue.Optional ? null : void 0, t)
        }

        function Je(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue.Default;
            return (Oe || Qe)(xe(e), t)
        }

        function Ke(e, t, n) {
            var r = de(e);
            if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
            if (n & ue.Optional) return null;
            if (void 0 !== t) return t;
            throw new Error("Injector: NOT_FOUND [".concat(Ce(e), "]"))
        }

        function $e(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = xe(e[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length) throw new Error("Arguments array must have arguments.");
                    for (var i = void 0, o = ue.Default, a = 0; a < r.length; a++) {
                        var s = r[a];
                        s instanceof oe || "Optional" === s.ngMetadataName || s === oe ? o |= ue.Optional : s instanceof se || "SkipSelf" === s.ngMetadataName || s === se ? o |= ue.SkipSelf : s instanceof ae || "Self" === s.ngMetadataName || s === ae ? o |= ue.Self : i = s instanceof ie || s === ie ? s.token : s
                    }
                    t.push(Je(i, o))
                } else t.push(Je(r))
            }
            return t
        }

        var Ye = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "get", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze;
                    if (t === ze) {
                        var n = new Error("NullInjectorError: No provider for ".concat(Ce(e), "!"));
                        throw n.name = "NullInjectorError", n
                    }
                    return t
                }
            }]), e
        }(), Xe = function e() {
            _classCallCheck(this, e)
        }, et = function e() {
            _classCallCheck(this, e)
        };

        function tt(e, t) {
            e.forEach((function (e) {
                return Array.isArray(e) ? tt(e, t) : t(e)
            }))
        }

        function nt(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }

        function rt(e, t) {
            return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
        }

        function it(e, t) {
            var n = ot(e, t);
            if (n >= 0) return e[1 | n]
        }

        function ot(e, t) {
            return function (e, t, n) {
                for (var r = 0, i = e.length >> 1; i !== r;) {
                    var o = r + (i - r >> 1), a = e[o << 1];
                    if (t === a) return o << 1;
                    a > t ? i = o : r = o + 1
                }
                return ~(i << 1)
            }(e, t)
        }

        var at = function () {
            var e = {OnPush: 0, Default: 1};
            return e[e.OnPush] = "OnPush", e[e.Default] = "Default", e
        }(), st = function () {
            var e = {Emulated: 0, Native: 1, None: 2, ShadowDom: 3};
            return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e
        }(), ut = {}, lt = [], ct = 0;

        function ht(e) {
            return ne((function () {
                var t = e.type, n = t.prototype, r = {}, i = {
                    type: t,
                    providersResolver: null,
                    decls: e.decls,
                    vars: e.vars,
                    factory: null,
                    template: e.template || null,
                    consts: e.consts || null,
                    ngContentSelectors: e.ngContentSelectors,
                    hostBindings: e.hostBindings || null,
                    hostVars: e.hostVars || 0,
                    hostAttrs: e.hostAttrs || null,
                    contentQueries: e.contentQueries || null,
                    declaredInputs: r,
                    inputs: null,
                    outputs: null,
                    exportAs: e.exportAs || null,
                    onChanges: null,
                    onInit: n.ngOnInit || null,
                    doCheck: n.ngDoCheck || null,
                    afterContentInit: n.ngAfterContentInit || null,
                    afterContentChecked: n.ngAfterContentChecked || null,
                    afterViewInit: n.ngAfterViewInit || null,
                    afterViewChecked: n.ngAfterViewChecked || null,
                    onDestroy: n.ngOnDestroy || null,
                    onPush: e.changeDetection === at.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: e.selectors || lt,
                    viewQuery: e.viewQuery || null,
                    features: e.features || null,
                    data: e.data || {},
                    encapsulation: e.encapsulation || st.Emulated,
                    id: "c",
                    styles: e.styles || lt,
                    _: null,
                    setInput: null,
                    schemas: e.schemas || null,
                    tView: null
                }, o = e.directives, a = e.features, s = e.pipes;
                return i.id += ct++, i.inputs = gt(e.inputs, r), i.outputs = gt(e.outputs), a && a.forEach((function (e) {
                    return e(i)
                })), i.directiveDefs = o ? function () {
                    return ("function" == typeof o ? o() : o).map(ft)
                } : null, i.pipeDefs = s ? function () {
                    return ("function" == typeof s ? s() : s).map(dt)
                } : null, i
            }))
        }

        function ft(e) {
            return _t(e) || function (e) {
                return e[De] || null
            }(e)
        }

        function dt(e) {
            return function (e) {
                return e[Ve] || null
            }(e)
        }

        var pt = {};

        function vt(e) {
            var t = {
                type: e.type,
                bootstrap: e.bootstrap || lt,
                declarations: e.declarations || lt,
                imports: e.imports || lt,
                exports: e.exports || lt,
                transitiveCompileScopes: null,
                schemas: e.schemas || null,
                id: e.id || null
            };
            return null != e.id && ne((function () {
                pt[e.id] = e.type
            })), t
        }

        function gt(e, t) {
            if (null == e) return ut;
            var n = {};
            for (var r in e) if (e.hasOwnProperty(r)) {
                var i = e[r], o = i;
                Array.isArray(i) && (o = i[1], i = i[0]), n[i] = r, t && (t[i] = o)
            }
            return n
        }

        var yt = ht;

        function mt(e) {
            return {
                type: e.type,
                name: e.name,
                factory: null,
                pure: !1 !== e.pure,
                onDestroy: e.type.prototype.ngOnDestroy || null
            }
        }

        function _t(e) {
            return e[Me] || null
        }

        function kt(e, t) {
            return e.hasOwnProperty(Fe) ? e[Fe] : null
        }

        function Ct(e, t) {
            var n = e[Ne] || null;
            if (!n && !0 === t) throw new Error("Type ".concat(Ce(e), " does not have '\u0275mod' property."));
            return n
        }

        function wt(e) {
            return Array.isArray(e) && "object" == typeof e[1]
        }

        function bt(e) {
            return Array.isArray(e) && !0 === e[1]
        }

        function St(e) {
            return 0 != (8 & e.flags)
        }

        function xt(e) {
            return 2 == (2 & e.flags)
        }

        function Et(e) {
            return 1 == (1 & e.flags)
        }

        function Ot(e) {
            return null !== e.template
        }

        function At(e) {
            return 0 != (512 & e[2])
        }

        var Tt = void 0;

        function It(e) {
            return !!e.listen
        }

        var Pt = {
            createRenderer: function (e, t) {
                return void 0 !== Tt ? Tt : "undefined" != typeof document ? document : void 0
            }
        };

        function Rt(e) {
            for (; Array.isArray(e);) e = e[0];
            return e
        }

        function Mt(e, t) {
            return Rt(t[e + 20])
        }

        function Dt(e, t) {
            return Rt(t[e.index])
        }

        function Vt(e, t) {
            return e.data[t + 20]
        }

        function Nt(e, t) {
            return e[t + 20]
        }

        function jt(e, t) {
            var n = t[e];
            return wt(n) ? n : n[0]
        }

        function Ft(e) {
            var t = function (e) {
                return e.__ngContext__ || null
            }(e);
            return t ? Array.isArray(t) ? t : t.lView : null
        }

        function Ut(e) {
            return 128 == (128 & e[2])
        }

        function Ht(e, t) {
            return null === e || null == t ? null : e[t]
        }

        function Lt(e) {
            e[18] = 0
        }

        function zt(e, t) {
            e[5] += t;
            for (var n = e, r = e[3]; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) r[5] += t, n = r, r = r[3]
        }

        var Bt = {lFrame: un(null), bindingsEnabled: !0, checkNoChangesMode: !1};

        function Gt() {
            return Bt.bindingsEnabled
        }

        function qt() {
            return Bt.lFrame.lView
        }

        function Wt() {
            return Bt.lFrame.tView
        }

        function Zt(e) {
            Bt.lFrame.contextLView = e
        }

        function Qt() {
            return Bt.lFrame.previousOrParentTNode
        }

        function Jt(e, t) {
            Bt.lFrame.previousOrParentTNode = e, Bt.lFrame.isParent = t
        }

        function Kt() {
            return Bt.lFrame.isParent
        }

        function $t() {
            return Bt.checkNoChangesMode
        }

        function Yt(e) {
            Bt.checkNoChangesMode = e
        }

        function Xt() {
            var e = Bt.lFrame, t = e.bindingRootIndex;
            return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        }

        function en() {
            return Bt.lFrame.bindingIndex++
        }

        function tn(e, t) {
            var n = Bt.lFrame;
            n.bindingIndex = n.bindingRootIndex = e, nn(t)
        }

        function nn(e) {
            Bt.lFrame.currentDirectiveIndex = e
        }

        function rn(e) {
            Bt.lFrame.currentQueryIndex = e
        }

        function on(e, t) {
            var n = sn();
            Bt.lFrame = n, n.previousOrParentTNode = t, n.lView = e
        }

        function an(e, t) {
            var n = sn(), r = e[1];
            Bt.lFrame = n, n.previousOrParentTNode = t, n.lView = e, n.tView = r, n.contextLView = e, n.bindingIndex = r.bindingStartIndex
        }

        function sn() {
            var e = Bt.lFrame, t = null === e ? null : e.child;
            return null === t ? un(e) : t
        }

        function un(e) {
            var t = {
                previousOrParentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: 0,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentSanitizer: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: e,
                child: null
            };
            return null !== e && (e.child = t), t
        }

        function ln() {
            var e = Bt.lFrame;
            return Bt.lFrame = e.parent, e.previousOrParentTNode = null, e.lView = null, e
        }

        var cn = ln;

        function hn() {
            var e = ln();
            e.isParent = !0, e.tView = null, e.selectedIndex = 0, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.currentSanitizer = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
        }

        function fn() {
            return Bt.lFrame.selectedIndex
        }

        function dn(e) {
            Bt.lFrame.selectedIndex = e
        }

        function pn() {
            var e = Bt.lFrame;
            return Vt(e.tView, e.selectedIndex)
        }

        function vn(e, t) {
            for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                var i = e.data[n];
                i.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(-n, i.afterContentInit), i.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, i.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, i.afterContentChecked)), i.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(-n, i.afterViewInit), i.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, i.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, i.afterViewChecked)), null != i.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, i.onDestroy)
            }
        }

        function gn(e, t, n) {
            _n(e, t, 3, n)
        }

        function yn(e, t, n, r) {
            (3 & e[2]) === n && _n(e, t, n, r)
        }

        function mn(e, t) {
            var n = e[2];
            (3 & n) === t && (n &= 2047, n += 1, e[2] = n)
        }

        function _n(e, t, n, r) {
            for (var i = null != r ? r : -1, o = 0, a = void 0 !== r ? 65535 & e[18] : 0; a < t.length; a++) if ("number" == typeof t[a + 1]) {
                if (o = t[a], null != r && o >= r) break
            } else t[a] < 0 && (e[18] += 65536), (o < i || -1 == i) && (kn(e, n, t, a), e[18] = (4294901760 & e[18]) + a + 2), a++
        }

        function kn(e, t, n, r) {
            var i = n[r] < 0, o = n[r + 1], a = e[i ? -n[r] : n[r]];
            i ? e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t && (e[2] += 2048, o.call(a)) : o.call(a)
        }

        var Cn = function e(t, n, r) {
            _classCallCheck(this, e), this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
        };

        function wn(e, t, n) {
            for (var r = It(e), i = 0; i < n.length;) {
                var o = n[i];
                if ("number" == typeof o) {
                    if (0 !== o) break;
                    i++;
                    var a = n[i++], s = n[i++], u = n[i++];
                    r ? e.setAttribute(t, s, u, a) : t.setAttributeNS(a, s, u)
                } else {
                    var l = o, c = n[++i];
                    Sn(l) ? r && e.setProperty(t, l, c) : r ? e.setAttribute(t, l, c) : t.setAttribute(l, c), i++
                }
            }
            return i
        }

        function bn(e) {
            return 3 === e || 4 === e || 6 === e
        }

        function Sn(e) {
            return 64 === e.charCodeAt(0)
        }

        function xn(e, t) {
            if (null === t || 0 === t.length) ; else if (null === e || 0 === e.length) e = t.slice(); else for (var n = -1, r = 0; r < t.length; r++) {
                var i = t[r];
                "number" == typeof i ? n = i : 0 === n || En(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
            }
            return e
        }

        function En(e, t, n, r, i) {
            var o = 0, a = e.length;
            if (-1 === t) a = -1; else for (; o < e.length;) {
                var s = e[o++];
                if ("number" == typeof s) {
                    if (s === t) {
                        a = -1;
                        break
                    }
                    if (s > t) {
                        a = o - 1;
                        break
                    }
                }
            }
            for (; o < e.length;) {
                var u = e[o];
                if ("number" == typeof u) break;
                if (u === n) {
                    if (null === r) return void (null !== i && (e[o + 1] = i));
                    if (r === e[o + 1]) return void (e[o + 2] = i)
                }
                o++, null !== r && o++, null !== i && o++
            }
            -1 !== a && (e.splice(a, 0, t), o = a + 1), e.splice(o++, 0, n), null !== r && e.splice(o++, 0, r), null !== i && e.splice(o++, 0, i)
        }

        function On(e) {
            return -1 !== e
        }

        function An(e) {
            return 32767 & e
        }

        function Tn(e) {
            return e >> 16
        }

        function In(e, t) {
            for (var n = Tn(e), r = t; n > 0;) r = r[15], n--;
            return r
        }

        function Pn(e) {
            return "string" == typeof e ? e : null == e ? "" : "" + e
        }

        function Rn(e) {
            return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : Pn(e)
        }

        var Mn = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Re);

        function Dn(e) {
            return {name: "window", target: e.ownerDocument.defaultView}
        }

        function Vn(e) {
            return {name: "document", target: e.ownerDocument}
        }

        function Nn(e) {
            return e instanceof Function ? e() : e
        }

        var jn = !0;

        function Fn(e) {
            var t = jn;
            return jn = e, t
        }

        var Un = 0;

        function Hn(e, t) {
            var n = zn(e, t);
            if (-1 !== n) return n;
            var r = t[1];
            r.firstCreatePass && (e.injectorIndex = t.length, Ln(r.data, e), Ln(t, null), Ln(r.blueprint, null));
            var i = Bn(e, t), o = e.injectorIndex;
            if (On(i)) for (var a = An(i), s = In(i, t), u = s[1].data, l = 0; l < 8; l++) t[o + l] = s[a + l] | u[a + l];
            return t[o + 8] = i, o
        }

        function Ln(e, t) {
            e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
        }

        function zn(e, t) {
            return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null == t[e.injectorIndex + 8] ? -1 : e.injectorIndex
        }

        function Bn(e, t) {
            if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
            for (var n = t[6], r = 1; n && -1 === n.injectorIndex;) n = (t = t[15]) ? t[6] : null, r++;
            return n ? n.injectorIndex | r << 16 : -1
        }

        function Gn(e, t, n) {
            !function (e, t, n) {
                var r = "string" != typeof n ? n[Ue] : n.charCodeAt(0) || 0;
                null == r && (r = n[Ue] = Un++);
                var i = 255 & r, o = 1 << i, a = 64 & i, s = 32 & i, u = t.data;
                128 & i ? a ? s ? u[e + 7] |= o : u[e + 6] |= o : s ? u[e + 5] |= o : u[e + 4] |= o : a ? s ? u[e + 3] |= o : u[e + 2] |= o : s ? u[e + 1] |= o : u[e] |= o
            }(e, t, n)
        }

        function qn(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ue.Default,
                i = arguments.length > 4 ? arguments[4] : void 0;
            if (null !== e) {
                var o = function (e) {
                    if ("string" == typeof e) return e.charCodeAt(0) || 0;
                    var t = e[Ue];
                    return "number" == typeof t && t > 0 ? 255 & t : t
                }(n);
                if ("function" == typeof o) {
                    on(t, e);
                    try {
                        var a = o();
                        if (null != a || r & ue.Optional) return a;
                        throw new Error("No provider for ".concat(Rn(n), "!"))
                    } finally {
                        cn()
                    }
                } else if ("number" == typeof o) {
                    if (-1 === o) return new $n(e, t);
                    var s = null, u = zn(e, t), l = -1, c = r & ue.Host ? t[16][6] : null;
                    for ((-1 === u || r & ue.SkipSelf) && (l = -1 === u ? Bn(e, t) : t[u + 8], Kn(r, !1) ? (s = t[1], u = An(l), t = In(l, t)) : u = -1); -1 !== u;) {
                        l = t[u + 8];
                        var h = t[1];
                        if (Jn(o, u, h.data)) {
                            var f = Zn(u, t, n, s, r, c);
                            if (f !== Wn) return f
                        }
                        Kn(r, t[1].data[u + 8] === c) && Jn(o, u, t) ? (s = h, u = An(l), t = In(l, t)) : u = -1
                    }
                }
            }
            if (r & ue.Optional && void 0 === i && (i = null), 0 == (r & (ue.Self | ue.Host))) {
                var d = t[9], p = Ze(void 0);
                try {
                    return d ? d.get(n, i, r & ue.Optional) : Ke(n, i, r & ue.Optional)
                } finally {
                    Ze(p)
                }
            }
            if (r & ue.Optional) return i;
            throw new Error("NodeInjector: NOT_FOUND [".concat(Rn(n), "]"))
        }

        var Wn = {};

        function Zn(e, t, n, r, i, o) {
            var a = t[1], s = a.data[e + 8], u = function (e, t, n, r, i) {
                for (var o = e.providerIndexes, a = t.data, s = 65535 & o, u = e.directiveStart, l = o >> 16, c = i ? s + l : e.directiveEnd, h = r ? s : s + l; h < c; h++) {
                    var f = a[h];
                    if (h < u && n === f || h >= u && f.type === n) return h
                }
                if (i) {
                    var d = a[u];
                    if (d && Ot(d) && d.type === n) return u
                }
                return null
            }(s, a, n, null == r ? xt(s) && jn : r != a && 3 === s.type, i & ue.Host && o === s);
            return null !== u ? Qn(t, a, u, s) : Wn
        }

        function Qn(e, t, n, r) {
            var i = e[n], o = t.data;
            if (i instanceof Cn) {
                var a = i;
                if (a.resolving) throw new Error("Circular dep for ".concat(Rn(o[n])));
                var s, u = Fn(a.canSeeViewProviders);
                a.resolving = !0, a.injectImpl && (s = Ze(a.injectImpl)), on(e, r);
                try {
                    i = e[n] = a.factory(void 0, o, e, r), t.firstCreatePass && n >= r.directiveStart && function (e, t, n) {
                        var r = t.onChanges, i = t.onInit, o = t.doCheck;
                        r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, r)), i && (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, i), o && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, o), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, o))
                    }(n, o[n], t)
                } finally {
                    a.injectImpl && Ze(s), Fn(u), a.resolving = !1, cn()
                }
            }
            return i
        }

        function Jn(e, t, n) {
            var r = 64 & e, i = 32 & e;
            return !!((128 & e ? r ? i ? n[t + 7] : n[t + 6] : i ? n[t + 5] : n[t + 4] : r ? i ? n[t + 3] : n[t + 2] : i ? n[t + 1] : n[t]) & 1 << e)
        }

        function Kn(e, t) {
            return !(e & ue.Self || e & ue.Host && t)
        }

        var $n = function () {
            function e(t, n) {
                _classCallCheck(this, e), this._tNode = t, this._lView = n
            }

            return _createClass(e, [{
                key: "get", value: function (e, t) {
                    return qn(this._tNode, this._lView, e, void 0, t)
                }
            }]), e
        }();

        function Yn(e) {
            return ne((function () {
                var t = Object.getPrototypeOf(e.prototype).constructor, n = t[Fe] || function e(t) {
                    var n = t;
                    if (Ee(t)) return function () {
                        var t = e(xe(n));
                        return t ? t() : null
                    };
                    var r = kt(n);
                    if (null === r) {
                        var i = ve(n);
                        r = i && i.factory
                    }
                    return r || null
                }(t);
                return null !== n ? n : function (e) {
                    return new e
                }
            }))
        }

        function Xn(e) {
            return e.ngDebugContext
        }

        function er(e) {
            return e.ngOriginalError
        }

        function tr(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            e.error.apply(e, n)
        }

        var nr = function () {
            function e() {
                _classCallCheck(this, e), this._console = console
            }

            return _createClass(e, [{
                key: "handleError", value: function (e) {
                    var t = this._findOriginalError(e), n = this._findContext(e), r = function (e) {
                        return e.ngErrorLogger || tr
                    }(e);
                    r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
                }
            }, {
                key: "_findContext", value: function (e) {
                    return e ? Xn(e) ? Xn(e) : this._findContext(er(e)) : null
                }
            }, {
                key: "_findOriginalError", value: function (e) {
                    for (var t = er(e); t && er(t);) t = er(t);
                    return t
                }
            }]), e
        }(), rr = !0, ir = !1;

        function or() {
            return ir = !0, rr
        }

        function ar(e, t) {
            e.__ngContext__ = t
        }

        function sr(e) {
            throw new Error("Multiple components match node with tagname ".concat(e.tagName))
        }

        function ur() {
            throw new Error("Cannot mix multi providers and regular providers")
        }

        function lr(e, t, n) {
            for (var r = e.length; ;) {
                var i = e.indexOf(t, n);
                if (-1 === i) return i;
                if (0 === i || e.charCodeAt(i - 1) <= 32) {
                    var o = t.length;
                    if (i + o === r || e.charCodeAt(i + o) <= 32) return i
                }
                n = i + 1
            }
        }

        function cr(e, t, n) {
            for (var r = 0; r < e.length;) {
                var i = e[r++];
                if (n && "class" === i) {
                    if (-1 !== lr((i = e[r]).toLowerCase(), t, 0)) return !0
                } else if (1 === i) {
                    for (; r < e.length && "string" == typeof (i = e[r++]);) if (i.toLowerCase() === t) return !0;
                    return !1
                }
            }
            return !1
        }

        function hr(e) {
            return 0 === e.type && "ng-template" !== e.tagName
        }

        function fr(e, t, n) {
            return t === (0 !== e.type || n ? e.tagName : "ng-template")
        }

        function dr(e, t, n) {
            for (var r = 4, i = e.attrs || [], o = function (e) {
                for (var t = 0; t < e.length; t++) if (bn(e[t])) return t;
                return e.length
            }(i), a = !1, s = 0; s < t.length; s++) {
                var u = t[s];
                if ("number" != typeof u) {
                    if (!a) if (4 & r) {
                        if (r = 2 | 1 & r, "" !== u && !fr(e, u, n) || "" === u && 1 === t.length) {
                            if (pr(r)) return !1;
                            a = !0
                        }
                    } else {
                        var l = 8 & r ? u : t[++s];
                        if (8 & r && null !== e.attrs) {
                            if (!cr(e.attrs, l, n)) {
                                if (pr(r)) return !1;
                                a = !0
                            }
                            continue
                        }
                        var c = vr(8 & r ? "class" : u, i, hr(e), n);
                        if (-1 === c) {
                            if (pr(r)) return !1;
                            a = !0;
                            continue
                        }
                        if ("" !== l) {
                            var h;
                            h = c > o ? "" : i[c + 1].toLowerCase();
                            var f = 8 & r ? h : null;
                            if (f && -1 !== lr(f, l, 0) || 2 & r && l !== h) {
                                if (pr(r)) return !1;
                                a = !0
                            }
                        }
                    }
                } else {
                    if (!a && !pr(r) && !pr(u)) return !1;
                    if (a && pr(u)) continue;
                    a = !1, r = u | 1 & r
                }
            }
            return pr(r) || a
        }

        function pr(e) {
            return 0 == (1 & e)
        }

        function vr(e, t, n, r) {
            if (null === t) return -1;
            var i = 0;
            if (r || !n) {
                for (var o = !1; i < t.length;) {
                    var a = t[i];
                    if (a === e) return i;
                    if (3 === a || 6 === a) o = !0; else {
                        if (1 === a || 2 === a) {
                            for (var s = t[++i]; "string" == typeof s;) s = t[++i];
                            continue
                        }
                        if (4 === a) break;
                        if (0 === a) {
                            i += 4;
                            continue
                        }
                    }
                    i += o ? 1 : 2
                }
                return -1
            }
            return function (e, t) {
                var n = e.indexOf(4);
                if (n > -1) for (n++; n < e.length;) {
                    var r = e[n];
                    if ("number" == typeof r) return -1;
                    if (r === t) return n;
                    n++
                }
                return -1
            }(t, e)
        }

        function gr(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = 0; r < t.length; r++) if (dr(e, t[r], n)) return !0;
            return !1
        }

        function yr(e, t) {
            return e ? ":not(" + t.trim() + ")" : t
        }

        function mr(e) {
            for (var t = e[0], n = 1, r = 2, i = "", o = !1; n < e.length;) {
                var a = e[n];
                if ("string" == typeof a) if (2 & r) {
                    var s = e[++n];
                    i += "[" + a + (s.length > 0 ? '="' + s + '"' : "") + "]"
                } else 8 & r ? i += "." + a : 4 & r && (i += " " + a); else "" === i || pr(a) || (t += yr(o, i), i = ""), r = a, o = o || !pr(r);
                n++
            }
            return "" !== i && (t += yr(o, i)), t
        }

        var _r = {};

        function kr(e) {
            var t = e[3];
            return bt(t) ? t[3] : t
        }

        function Cr(e) {
            wr(Wt(), qt(), fn() + e, $t())
        }

        function wr(e, t, n, r) {
            if (!r) if (3 == (3 & t[2])) {
                var i = e.preOrderCheckHooks;
                null !== i && gn(t, i, n)
            } else {
                var o = e.preOrderHooks;
                null !== o && yn(t, o, 0, n)
            }
            dn(n)
        }

        function br(e, t) {
            return e << 17 | t << 2
        }

        function Sr(e) {
            return e >> 17 & 32767
        }

        function xr(e) {
            return 2 | e
        }

        function Er(e) {
            return (131068 & e) >> 2
        }

        function Or(e, t) {
            return -131069 & e | t << 2
        }

        function Ar(e) {
            return 1 | e
        }

        function Tr(e, t) {
            var n = e.contentQueries;
            if (null !== n) for (var r = 0; r < n.length; r += 2) {
                var i = n[r], o = n[r + 1];
                if (-1 !== o) {
                    var a = e.data[o];
                    rn(i), a.contentQueries(2, t[o], o)
                }
            }
        }

        function Ir(e, t, n) {
            return It(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
        }

        function Pr(e, t, n, r, i, o, a, s, u, l) {
            var c = t.blueprint.slice();
            return c[0] = i, c[2] = 140 | r, Lt(c), c[3] = c[15] = e, c[8] = n, c[10] = a || e && e[10], c[11] = s || e && e[11], c[12] = u || e && e[12] || null, c[9] = l || e && e[9] || null, c[6] = o, c[16] = 2 == t.type ? e[16] : c, c
        }

        function Rr(e, t, n, r, i, o) {
            var a = n + 20, s = e.data[a] || function (e, t, n, r, i, o) {
                var a = Qt(), s = Kt(), u = s ? a : a && a.parent,
                    l = e.data[n] = Lr(0, u && u !== t ? u : null, r, n, i, o);
                return null === e.firstChild && (e.firstChild = l), a && (!s || null != a.child || null === l.parent && 2 !== a.type ? s || (a.next = l) : a.child = l), l
            }(e, t, a, r, i, o);
            return Jt(s, !0), s
        }

        function Mr(e, t, n) {
            an(t, t[6]);
            try {
                var r = e.viewQuery;
                null !== r && hi(1, r, n);
                var i = e.template;
                null !== i && Nr(e, t, i, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && Tr(e, t), e.staticViewQueries && hi(2, e.viewQuery, n);
                var o = e.components;
                null !== o && function (e, t) {
                    for (var n = 0; n < t.length; n++) ai(e, t[n])
                }(t, o)
            } catch (a) {
                throw e.firstCreatePass && (e.incompleteFirstPass = !0), a
            } finally {
                t[2] &= -5, hn()
            }
        }

        function Dr(e, t, n, r) {
            var i = t[2];
            if (256 != (256 & i)) {
                an(t, t[6]);
                var o = $t();
                try {
                    Lt(t), Bt.lFrame.bindingIndex = e.bindingStartIndex, null !== n && Nr(e, t, n, 2, r);
                    var a = 3 == (3 & i);
                    if (!o) if (a) {
                        var s = e.preOrderCheckHooks;
                        null !== s && gn(t, s, null)
                    } else {
                        var u = e.preOrderHooks;
                        null !== u && yn(t, u, 0, null), mn(t, 0)
                    }
                    if (function (e) {
                        for (var t = ri(e); null !== t; t = ii(t)) if (0 != (1 & t[2])) for (var n = t[9], r = 0; r < n.length; r++) {
                            var i = n[r], o = i[3];
                            0 == (1024 & i[2]) && zt(o, 1), i[2] |= 1024
                        }
                    }(t), function (e) {
                        for (var t = ri(e); null !== t; t = ii(t)) for (var n = 10; n < t.length; n++) {
                            var r = t[n], i = r[1];
                            Ut(r) && Dr(i, r, i.template, r[8])
                        }
                    }(t), null !== e.contentQueries && Tr(e, t), !o) if (a) {
                        var l = e.contentCheckHooks;
                        null !== l && gn(t, l)
                    } else {
                        var c = e.contentHooks;
                        null !== c && yn(t, c, 1), mn(t, 1)
                    }
                    !function (e, t) {
                        try {
                            var n = e.expandoInstructions;
                            if (null !== n) for (var r = e.expandoStartIndex, i = -1, o = 0; o < n.length; o++) {
                                var a = n[o];
                                "number" == typeof a ? a <= 0 ? (dn(0 - a), i = r += 9 + n[++o]) : r += a : (null !== a && (tn(r, i), a(2, t[i])), i++)
                            }
                        } finally {
                            dn(-1)
                        }
                    }(e, t);
                    var h = e.components;
                    null !== h && function (e, t) {
                        for (var n = 0; n < t.length; n++) oi(e, t[n])
                    }(t, h);
                    var f = e.viewQuery;
                    if (null !== f && hi(2, f, r), !o) if (a) {
                        var d = e.viewCheckHooks;
                        null !== d && gn(t, d)
                    } else {
                        var p = e.viewHooks;
                        null !== p && yn(t, p, 2), mn(t, 2)
                    }
                    !0 === e.firstUpdatePass && (e.firstUpdatePass = !1), o || (t[2] &= -73), 1024 & t[2] && (t[2] &= -1025, zt(t[3], -1))
                } finally {
                    hn()
                }
            }
        }

        function Vr(e, t, n, r) {
            var i = t[10], o = !$t(), a = 4 == (4 & t[2]);
            try {
                o && !a && i.begin && i.begin(), a && Mr(e, t, r), Dr(e, t, n, r)
            } finally {
                o && !a && i.end && i.end()
            }
        }

        function Nr(e, t, n, r, i) {
            var o = fn();
            try {
                dn(-1), 2 & r && t.length > 20 && wr(e, t, 0, $t()), n(r, i)
            } finally {
                dn(o)
            }
        }

        function jr(e, t, n) {
            Gt() && (function (e, t, n, r) {
                var i = n.directiveStart, o = n.directiveEnd;
                e.firstCreatePass || Hn(n, t), ar(r, t);
                for (var a = n.initialInputs, s = i; s < o; s++) {
                    var u = e.data[s], l = Ot(u);
                    l && Xr(t, n, u);
                    var c = Qn(t, e, s, n);
                    ar(c, t), null !== a && ei(0, s - i, c, u, 0, a), l && (jt(n.index, t)[8] = c)
                }
            }(e, t, n, Dt(n, t)), 128 == (128 & n.flags) && function (e, t, n) {
                var r = n.directiveStart, i = n.directiveEnd, o = e.expandoInstructions, a = e.firstCreatePass,
                    s = n.index - 20, u = Bt.lFrame.currentDirectiveIndex;
                try {
                    dn(s);
                    for (var l = r; l < i; l++) {
                        var c = e.data[l], h = t[l];
                        nn(l), null !== c.hostBindings || 0 !== c.hostVars || null !== c.hostAttrs ? Zr(c, h) : a && o.push(null)
                    }
                } finally {
                    dn(-1), nn(u)
                }
            }(e, t, n))
        }

        function Fr(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dt, r = t.localNames;
            if (null !== r) for (var i = t.index + 1, o = 0; o < r.length; o += 2) {
                var a = r[o + 1], s = -1 === a ? n(t, e) : e[a];
                e[i++] = s
            }
        }

        function Ur(e) {
            var t = e.tView;
            return null === t || t.incompleteFirstPass ? e.tView = Hr(1, -1, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
        }

        function Hr(e, t, n, r, i, o, a, s, u, l) {
            var c = 20 + r, h = c + i, f = function (e, t) {
                for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : _r);
                return n
            }(c, h);
            return f[1] = {
                type: e,
                id: t,
                blueprint: f,
                template: n,
                queries: null,
                viewQuery: s,
                node: null,
                data: f.slice().fill(null, c),
                bindingStartIndex: c,
                expandoStartIndex: h,
                expandoInstructions: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof o ? o() : o,
                pipeRegistry: "function" == typeof a ? a() : a,
                firstChild: null,
                schemas: u,
                consts: l,
                incompleteFirstPass: !1
            }
        }

        function Lr(e, t, n, r, i, o) {
            return {
                type: n,
                index: r,
                injectorIndex: t ? t.injectorIndex : -1,
                directiveStart: -1,
                directiveEnd: -1,
                directiveStylingLast: -1,
                propertyBindings: null,
                flags: 0,
                providerIndexes: 0,
                tagName: i,
                attrs: o,
                mergedAttrs: null,
                localNames: null,
                initialInputs: void 0,
                inputs: null,
                outputs: null,
                tViews: null,
                next: null,
                projectionNext: null,
                child: null,
                parent: t,
                projection: null,
                styles: null,
                residualStyles: void 0,
                classes: null,
                residualClasses: void 0,
                classBindings: 0,
                styleBindings: 0
            }
        }

        function zr(e, t, n) {
            for (var r in e) if (e.hasOwnProperty(r)) {
                var i = e[r];
                (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : n[r] = [t, i]
            }
            return n
        }

        function Br(e, t, n, r, i, o, a, s) {
            var u, l, c = Dt(t, n), h = t.inputs;
            !s && null != h && (u = h[r]) ? (vi(e, n, u, r, i), xt(t) && function (e, t) {
                var n = jt(t, e);
                16 & n[2] || (n[2] |= 64)
            }(n, t.index)) : 3 === t.type && (r = "class" === (l = r) ? "className" : "for" === l ? "htmlFor" : "formaction" === l ? "formAction" : "innerHtml" === l ? "innerHTML" : "readonly" === l ? "readOnly" : "tabindex" === l ? "tabIndex" : l, i = null != a ? a(i, t.tagName || "", r) : i, It(o) ? o.setProperty(c, r, i) : Sn(r) || (c.setProperty ? c.setProperty(r, i) : c[r] = i))
        }

        function Gr(e, t, n, r) {
            var i = !1;
            if (Gt()) {
                var o = function (e, t, n) {
                    var r = e.directiveRegistry, i = null;
                    if (r) for (var o = 0; o < r.length; o++) {
                        var a = r[o];
                        gr(n, a.selectors, !1) && (i || (i = []), Gn(Hn(n, t), e, a.type), Ot(a) ? (2 & n.flags && sr(n), Jr(e, n), i.unshift(a)) : i.push(a))
                    }
                    return i
                }(e, t, n), a = null === r ? null : {"": -1};
                if (null !== o) {
                    var s = 0;
                    i = !0, $r(n, e.data.length, o.length);
                    for (var u = 0; u < o.length; u++) {
                        var l = o[u];
                        l.providersResolver && l.providersResolver(l)
                    }
                    Qr(e, n, o.length);
                    for (var c = !1, h = !1, f = 0; f < o.length; f++) {
                        var d = o[f];
                        n.mergedAttrs = xn(n.mergedAttrs, d.hostAttrs), Yr(e, t, d), Kr(e.data.length - 1, d, a), null !== d.contentQueries && (n.flags |= 8), null === d.hostBindings && null === d.hostAttrs && 0 === d.hostVars || (n.flags |= 128), !c && (d.onChanges || d.onInit || d.doCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - 20), c = !0), h || !d.onChanges && !d.doCheck || ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index - 20), h = !0), qr(e, d), s += d.hostVars
                    }
                    !function (e, t) {
                        for (var n = t.directiveEnd, r = e.data, i = t.attrs, o = [], a = null, s = null, u = t.directiveStart; u < n; u++) {
                            var l = r[u], c = l.inputs, h = null === i || hr(t) ? null : ti(c, i);
                            o.push(h), a = zr(c, u, a), s = zr(l.outputs, u, s)
                        }
                        null !== a && (a.hasOwnProperty("class") && (t.flags |= 16), a.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = o, t.inputs = a, t.outputs = s
                    }(e, n), Wr(e, t, s)
                }
                a && function (e, t, n) {
                    if (t) for (var r = e.localNames = [], i = 0; i < t.length; i += 2) {
                        var o = n[t[i + 1]];
                        if (null == o) throw new Error("Export of name '".concat(t[i + 1], "' not found!"));
                        r.push(t[i], o)
                    }
                }(n, r, a)
            }
            return n.mergedAttrs = xn(n.mergedAttrs, n.attrs), i
        }

        function qr(e, t) {
            var n = e.expandoInstructions;
            n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars)
        }

        function Wr(e, t, n) {
            for (var r = 0; r < n; r++) t.push(_r), e.blueprint.push(_r), e.data.push(null)
        }

        function Zr(e, t) {
            null !== e.hostBindings && e.hostBindings(1, t)
        }

        function Qr(e, t, n) {
            var r = 20 - t.index, i = e.data.length - (65535 & t.providerIndexes);
            (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n)
        }

        function Jr(e, t) {
            t.flags |= 2, (e.components || (e.components = [])).push(t.index)
        }

        function Kr(e, t, n) {
            if (n) {
                if (t.exportAs) for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                Ot(t) && (n[""] = e)
            }
        }

        function $r(e, t, n) {
            e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
        }

        function Yr(e, t, n) {
            e.data.push(n);
            var r = n.factory || (n.factory = kt(n.type)), i = new Cn(r, Ot(n), null);
            e.blueprint.push(i), t.push(i)
        }

        function Xr(e, t, n) {
            var r = Dt(t, e), i = Ur(n), o = e[10],
                a = si(e, Pr(e, i, null, n.onPush ? 64 : 16, r, t, o, o.createRenderer(r, n)));
            e[t.index] = a
        }

        function ei(e, t, n, r, i, o) {
            var a = o[t];
            if (null !== a) for (var s = r.setInput, u = 0; u < a.length;) {
                var l = a[u++], c = a[u++], h = a[u++];
                null !== s ? r.setInput(n, h, l, c) : n[c] = h
            }
        }

        function ti(e, t) {
            for (var n = null, r = 0; r < t.length;) {
                var i = t[r];
                if (0 !== i) if (5 !== i) {
                    if ("number" == typeof i) break;
                    e.hasOwnProperty(i) && (null === n && (n = []), n.push(i, e[i], t[r + 1])), r += 2
                } else r += 2; else r += 4
            }
            return n
        }

        function ni(e, t, n, r) {
            return new Array(e, !0, -2, t, null, 0, r, n, null, null)
        }

        function ri(e) {
            for (var t = e[13]; null !== t && (!bt(t) || t[2] >> 1 != -1);) t = t[4];
            return t
        }

        function ii(e) {
            for (var t = e[4]; null !== t && (!bt(t) || t[2] >> 1 != -1);) t = t[4];
            return t
        }

        function oi(e, t) {
            var n = jt(t, e);
            if (Ut(n)) {
                var r = n[1];
                80 & n[2] ? Dr(r, n, r.template, n[8]) : n[5] > 0 && function e(t) {
                    for (var n = ri(t); null !== n; n = ii(n)) for (var r = 10; r < n.length; r++) {
                        var i = n[r];
                        if (1024 & i[2]) {
                            var o = i[1];
                            Dr(o, i, o.template, i[8])
                        } else i[5] > 0 && e(i)
                    }
                    var a = t[1].components;
                    if (null !== a) for (var s = 0; s < a.length; s++) {
                        var u = jt(a[s], t);
                        Ut(u) && u[5] > 0 && e(u)
                    }
                }(n)
            }
        }

        function ai(e, t) {
            var n = jt(t, e), r = n[1];
            !function (e, t) {
                for (var n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
            }(r, n), Mr(r, n, n[8])
        }

        function si(e, t) {
            return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
        }

        function ui(e) {
            for (; e;) {
                e[2] |= 64;
                var t = kr(e);
                if (At(e) && !t) return e;
                e = t
            }
            return null
        }

        function li(e, t, n) {
            var r = t[10];
            r.begin && r.begin();
            try {
                Dr(e, t, e.template, n)
            } catch (i) {
                throw pi(t, i), i
            } finally {
                r.end && r.end()
            }
        }

        function ci(e) {
            !function (e) {
                for (var t = 0; t < e.components.length; t++) {
                    var n = e.components[t], r = Ft(n), i = r[1];
                    Vr(i, r, i.template, n)
                }
            }(e[8])
        }

        function hi(e, t, n) {
            rn(0), t(e, n)
        }

        var fi = Promise.resolve(null);

        function di(e) {
            return e[7] || (e[7] = [])
        }

        function pi(e, t) {
            var n = e[9], r = n ? n.get(nr, null) : null;
            r && r.handleError(t)
        }

        function vi(e, t, n, r, i) {
            for (var o = 0; o < n.length;) {
                var a = n[o++], s = n[o++], u = t[a], l = e.data[a];
                null !== l.setInput ? l.setInput(u, i, r, s) : u[s] = i
            }
        }

        function gi(e, t) {
            var n = t[3];
            return -1 === e.index ? bt(n) ? n : null : n
        }

        function yi(e, t) {
            var n = gi(e, t);
            return n ? Ai(t[11], n[7]) : null
        }

        function mi(e, t, n, r, i) {
            if (null != r) {
                var o, a = !1;
                bt(r) ? o = r : wt(r) && (a = !0, r = r[0]);
                var s = Rt(r);
                0 === e && null !== n ? null == i ? Ei(t, n, s) : xi(t, n, s, i || null) : 1 === e && null !== n ? xi(t, n, s, i || null) : 2 === e ? function (e, t, n) {
                    var r = Ai(e, t);
                    r && function (e, t, n, r) {
                        It(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                    }(e, r, t, n)
                }(t, s, a) : 3 === e && t.destroyNode(s), null != o && function (e, t, n, r, i) {
                    var o = n[7];
                    o !== Rt(n) && mi(t, e, r, o, i);
                    for (var a = 10; a < n.length; a++) {
                        var s = n[a];
                        Ri(s[1], s, e, t, r, o)
                    }
                }(t, e, o, n, i)
            }
        }

        function _i(e, t, n, r) {
            var i = yi(e.node, t);
            i && Ri(e, t, t[11], n ? 1 : 2, i, r)
        }

        function ki(e, t) {
            var n = e[9], r = n.indexOf(t);
            1024 & t[2] && zt(t[3], -1), n.splice(r, 1)
        }

        function Ci(e, t) {
            if (!(e.length <= 10)) {
                var n = 10 + t, r = e[n];
                if (r) {
                    var i = r[17];
                    null !== i && i !== e && ki(i, r), t > 0 && (e[n - 1][4] = r[4]);
                    var o = rt(e, 10 + t);
                    _i(r[1], r, !1, null);
                    var a = o[19];
                    null !== a && a.detachView(o[1]), r[3] = null, r[4] = null, r[2] &= -129
                }
                return r
            }
        }

        function wi(e, t) {
            if (!(256 & t[2])) {
                var n = t[11];
                It(n) && n.destroyNode && Ri(e, t, n, 3, null, null), function (e) {
                    var t = e[13];
                    if (!t) return Si(e[1], e);
                    for (; t;) {
                        var n = null;
                        if (wt(t)) n = t[13]; else {
                            var r = t[10];
                            r && (n = r)
                        }
                        if (!n) {
                            for (; t && !t[4] && t !== e;) wt(t) && Si(t[1], t), t = bi(t, e);
                            null === t && (t = e), wt(t) && Si(t[1], t), n = t && t[4]
                        }
                        t = n
                    }
                }(t)
            }
        }

        function bi(e, t) {
            var n;
            return wt(e) && (n = e[6]) && 2 === n.type ? gi(n, e) : e[3] === t ? null : e[3]
        }

        function Si(e, t) {
            if (!(256 & t[2])) {
                t[2] &= -129, t[2] |= 256, function (e, t) {
                    var n;
                    if (null != e && null != (n = e.destroyHooks)) for (var r = 0; r < n.length; r += 2) {
                        var i = t[n[r]];
                        if (!(i instanceof Cn)) {
                            var o = n[r + 1];
                            if (Array.isArray(o)) for (var a = 0; a < o.length; a += 2) o[a + 1].call(i[o[a]]); else o.call(i)
                        }
                    }
                }(e, t), function (e, t) {
                    var n = e.cleanup;
                    if (null !== n) {
                        for (var r = t[7], i = 0; i < n.length - 1; i += 2) if ("string" == typeof n[i]) {
                            var o = n[i + 1], a = "function" == typeof o ? o(t) : Rt(t[o]), s = r[n[i + 2]],
                                u = n[i + 3];
                            "boolean" == typeof u ? a.removeEventListener(n[i], s, u) : u >= 0 ? r[u]() : r[-u].unsubscribe(), i += 2
                        } else n[i].call(r[n[i + 1]]);
                        t[7] = null
                    }
                }(e, t);
                var n = t[6];
                n && 3 === n.type && It(t[11]) && t[11].destroy();
                var r = t[17];
                if (null !== r && bt(t[3])) {
                    r !== t[3] && ki(r, t);
                    var i = t[19];
                    null !== i && i.detachView(e)
                }
            }
        }

        function xi(e, t, n, r) {
            It(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0)
        }

        function Ei(e, t, n) {
            It(e) ? e.appendChild(t, n) : t.appendChild(n)
        }

        function Oi(e, t, n, r) {
            null !== r ? xi(e, t, n, r) : Ei(e, t, n)
        }

        function Ai(e, t) {
            return It(e) ? e.parentNode(t) : t.parentNode
        }

        function Ti(e, t, n, r) {
            var i = function (e, t, n) {
                for (var r = t.parent; null != r && (4 === r.type || 5 === r.type);) r = (t = r).parent;
                if (null == r) {
                    var i = n[6];
                    return 2 === i.type ? yi(i, n) : n[0]
                }
                if (t && 5 === t.type && 4 & t.flags) return Dt(t, n).parentNode;
                if (2 & r.flags) {
                    var o = e.data, a = o[o[r.index].directiveStart].encapsulation;
                    if (a !== st.ShadowDom && a !== st.Native) return null
                }
                return Dt(r, n)
            }(e, r, t);
            if (null != i) {
                var o = t[11], a = function (e, t) {
                    if (2 === e.type) {
                        var n = gi(e, t);
                        return null === n ? null : Ii(n.indexOf(t, 10) - 10, n)
                    }
                    return 4 === e.type || 5 === e.type ? Dt(e, t) : null
                }(r.parent || t[6], t);
                if (Array.isArray(n)) for (var s = 0; s < n.length; s++) Oi(o, i, n[s], a); else Oi(o, i, n, a)
            }
        }

        function Ii(e, t) {
            var n = 10 + e + 1;
            if (n < t.length) {
                var r = t[n], i = r[1].firstChild;
                if (null !== i) return function e(t, n) {
                    if (null !== n) {
                        var r = n.type;
                        if (3 === r) return Dt(n, t);
                        if (0 === r) return Ii(-1, t[n.index]);
                        if (4 === r || 5 === r) {
                            var i = n.child;
                            if (null !== i) return e(t, i);
                            var o = t[n.index];
                            return bt(o) ? Ii(-1, o) : Rt(o)
                        }
                        var a = t[16], s = a[6], u = kr(a), l = s.projection[n.projection];
                        return null != l ? e(u, l) : e(t, n.next)
                    }
                    return null
                }(r, i)
            }
            return t[7]
        }

        function Pi(e, t, n, r, i, o, a) {
            for (; null != n;) {
                var s = r[n.index], u = n.type;
                a && 0 === t && (s && ar(Rt(s), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === u || 5 === u ? (Pi(e, t, n.child, r, i, o, !1), mi(t, e, i, s, o)) : 1 === u ? Mi(e, t, r, n, i, o) : mi(t, e, i, s, o)), n = a ? n.projectionNext : n.next
            }
        }

        function Ri(e, t, n, r, i, o) {
            Pi(n, r, e.node.child, t, i, o, !1)
        }

        function Mi(e, t, n, r, i, o) {
            var a = n[16], s = a[6].projection[r.projection];
            if (Array.isArray(s)) for (var u = 0; u < s.length; u++) mi(t, e, i, s[u], o); else Pi(e, t, s, a[3], i, o, !0)
        }

        function Di(e, t, n) {
            It(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
        }

        function Vi(e, t, n) {
            It(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
        }

        var Ni, ji, Fi, Ui = function () {
            function e(t, n) {
                _classCallCheck(this, e), this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
            }

            return _createClass(e, [{
                key: "destroy", value: function () {
                    if (this._appRef) this._appRef.detachView(this); else if (this._viewContainerRef) {
                        var e = this._viewContainerRef.indexOf(this);
                        e > -1 && this._viewContainerRef.detach(e), this._viewContainerRef = null
                    }
                    wi(this._lView[1], this._lView)
                }
            }, {
                key: "onDestroy", value: function (e) {
                    var t, n, r;
                    t = this._lView[1], r = e, di(n = this._lView).push(r), t.firstCreatePass && function (e) {
                        return e.cleanup || (e.cleanup = [])
                    }(t).push(n[7].length - 1, null)
                }
            }, {
                key: "markForCheck", value: function () {
                    ui(this._cdRefInjectingView || this._lView)
                }
            }, {
                key: "detach", value: function () {
                    this._lView[2] &= -129
                }
            }, {
                key: "reattach", value: function () {
                    this._lView[2] |= 128
                }
            }, {
                key: "detectChanges", value: function () {
                    li(this._lView[1], this._lView, this.context)
                }
            }, {
                key: "checkNoChanges", value: function () {
                    !function (e, t, n) {
                        Yt(!0);
                        try {
                            li(e, t, n)
                        } finally {
                            Yt(!1)
                        }
                    }(this._lView[1], this._lView, this.context)
                }
            }, {
                key: "attachToViewContainerRef", value: function (e) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = e
                }
            }, {
                key: "detachFromAppRef", value: function () {
                    var e;
                    this._appRef = null, Ri(this._lView[1], e = this._lView, e[11], 2, null, null)
                }
            }, {
                key: "attachToAppRef", value: function (e) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = e
                }
            }, {
                key: "rootNodes", get: function () {
                    var e = this._lView;
                    return null == e[0] ? function e(t, n, r, i) {
                        for (var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; null !== r;) {
                            var a = n[r.index];
                            if (null !== a && i.push(Rt(a)), bt(a)) for (var s = 10; s < a.length; s++) {
                                var u = a[s], l = u[1].firstChild;
                                null !== l && e(u[1], u, l, i)
                            }
                            var c = r.type;
                            if (4 === c || 5 === c) e(t, n, r.child, i); else if (1 === c) {
                                var h = n[16], f = h[6].projection[r.projection];
                                if (Array.isArray(f)) i.push.apply(i, _toConsumableArray(f)); else {
                                    var d = kr(h);
                                    e(d[1], d, f, i, !0)
                                }
                            }
                            r = o ? r.projectionNext : r.next
                        }
                        return i
                    }(e[1], e, e[6].child, []) : []
                }
            }, {
                key: "context", get: function () {
                    return this._lView[8]
                }
            }, {
                key: "destroyed", get: function () {
                    return 256 == (256 & this._lView[2])
                }
            }]), e
        }(), Hi = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this, e))._view = e, r
            }

            return _createClass(n, [{
                key: "detectChanges", value: function () {
                    ci(this._view)
                }
            }, {
                key: "checkNoChanges", value: function () {
                    !function (e) {
                        Yt(!0);
                        try {
                            ci(e)
                        } finally {
                            Yt(!1)
                        }
                    }(this._view)
                }
            }, {
                key: "context", get: function () {
                    return null
                }
            }]), n
        }(Ui);

        function Li(e, t, n) {
            return Ni || (Ni = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    return _classCallCheck(this, n), t.apply(this, arguments)
                }

                return n
            }(e)), new Ni(Dt(t, n))
        }

        var zi = function () {
            var e = function e() {
                _classCallCheck(this, e)
            };
            return e.__NG_ELEMENT_ID__ = function () {
                return Bi()
            }, e
        }(), Bi = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function (e, t, n) {
                if (!n && xt(e)) {
                    var r = jt(e.index, t);
                    return new Ui(r, r)
                }
                return 3 === e.type || 0 === e.type || 4 === e.type || 5 === e.type ? new Ui(t[16], t) : null
            }(Qt(), qt(), e)
        }, Gi = new He("Set Injector scope."), qi = {}, Wi = {}, Zi = [], Qi = void 0;

        function Ji() {
            return void 0 === Qi && (Qi = new Ye), Qi
        }

        function Ki(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 ? arguments[3] : void 0;
            return new $i(e, n, t || Ji(), r)
        }

        var $i = function () {
            function e(t, n, r) {
                var i = this, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                _classCallCheck(this, e), this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                var a = [];
                n && tt(n, (function (e) {
                    return i.processProvider(e, t, n)
                })), tt([t], (function (e) {
                    return i.processInjectorType(e, [], a)
                })), this.records.set(Le, eo(void 0, this));
                var s = this.records.get(Gi);
                this.scope = null != s ? s.value : null, this.source = o || ("object" == typeof t ? null : Ce(t))
            }

            return _createClass(e, [{
                key: "destroy", value: function () {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach((function (e) {
                            return e.ngOnDestroy()
                        }))
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
            }, {
                key: "get", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ue.Default;
                    this.assertNotDestroyed();
                    var r, i = We(this);
                    try {
                        if (!(n & ue.SkipSelf)) {
                            var o = this.records.get(e);
                            if (void 0 === o) {
                                var a = ("function" == typeof (r = e) || "object" == typeof r && r instanceof He) && de(e);
                                o = a && this.injectableDefInScope(a) ? eo(Yi(e), qi) : null, this.records.set(e, o)
                            }
                            if (null != o) return this.hydrate(e, o)
                        }
                        return (n & ue.Self ? Ji() : this.parent).get(e, t = n & ue.Optional && t === ze ? null : t)
                    } catch (s) {
                        if ("NullInjectorError" === s.name) {
                            if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(Ce(e)), i) throw s;
                            return function (e, t, n, r) {
                                var i = e.ngTempTokenPath;
                                throw t.__source && i.unshift(t.__source), e.message = function (e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                                    var i = Ce(t);
                                    if (Array.isArray(t)) i = t.map(Ce).join(" -> "); else if ("object" == typeof t) {
                                        var o = [];
                                        for (var a in t) if (t.hasOwnProperty(a)) {
                                            var s = t[a];
                                            o.push(a + ":" + ("string" == typeof s ? JSON.stringify(s) : Ce(s)))
                                        }
                                        i = "{".concat(o.join(", "), "}")
                                    }
                                    return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(e.replace(Be, "\n  "))
                                }("\n" + e.message, i, "R3InjectorError", r), e.ngTokenPath = i, e.ngTempTokenPath = null, e
                            }(s, e, 0, this.source)
                        }
                        throw s
                    } finally {
                        We(i)
                    }
                }
            }, {
                key: "_resolveInjectorDefTypes", value: function () {
                    var e = this;
                    this.injectorDefTypes.forEach((function (t) {
                        return e.get(t)
                    }))
                }
            }, {
                key: "toString", value: function () {
                    var e = [];
                    return this.records.forEach((function (t, n) {
                        return e.push(Ce(n))
                    })), "R3Injector[".concat(e.join(", "), "]")
                }
            }, {
                key: "assertNotDestroyed", value: function () {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
            }, {
                key: "processInjectorType", value: function (e, t, n) {
                    var r = this;
                    if (!(e = xe(e))) return !1;
                    var i = ve(e), o = null == i && e.ngModule || void 0, a = void 0 === o ? e : o,
                        s = -1 !== n.indexOf(a);
                    if (void 0 !== o && (i = ve(o)), null == i) return !1;
                    if (null != i.imports && !s) {
                        var u;
                        n.push(a);
                        try {
                            tt(i.imports, (function (e) {
                                r.processInjectorType(e, t, n) && (void 0 === u && (u = []), u.push(e))
                            }))
                        } finally {
                        }
                        if (void 0 !== u) for (var l = function (e) {
                            var t = u[e], n = t.ngModule, i = t.providers;
                            tt(i, (function (e) {
                                return r.processProvider(e, n, i || Zi)
                            }))
                        }, c = 0; c < u.length; c++) l(c)
                    }
                    this.injectorDefTypes.add(a), this.records.set(a, eo(i.factory, qi));
                    var h = i.providers;
                    if (null != h && !s) {
                        var f = e;
                        tt(h, (function (e) {
                            return r.processProvider(e, f, h)
                        }))
                    }
                    return void 0 !== o && void 0 !== e.providers
                }
            }, {
                key: "processProvider", value: function (e, t, n) {
                    var r = no(e = xe(e)) ? e : xe(e && e.provide), i = function (e, t, n) {
                        return to(e) ? eo(void 0, e.useValue) : eo(Xi(e, t, n), qi)
                    }(e, t, n);
                    if (no(e) || !0 !== e.multi) {
                        var o = this.records.get(r);
                        o && void 0 !== o.multi && ur()
                    } else {
                        var a = this.records.get(r);
                        a ? void 0 === a.multi && ur() : ((a = eo(void 0, qi, !0)).factory = function () {
                            return $e(a.multi)
                        }, this.records.set(r, a)), r = e, a.multi.push(e)
                    }
                    this.records.set(r, i)
                }
            }, {
                key: "hydrate", value: function (e, t) {
                    var n;
                    return t.value === Wi ? function (e) {
                        throw new Error("Cannot instantiate cyclic dependency! ".concat(e))
                    }(Ce(e)) : t.value === qi && (t.value = Wi, t.value = t.factory()), "object" == typeof t.value && t.value && null !== (n = t.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), t.value
                }
            }, {
                key: "injectableDefInScope", value: function (e) {
                    return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || e.providedIn === this.scope : this.injectorDefTypes.has(e.providedIn))
                }
            }, {
                key: "destroyed", get: function () {
                    return this._destroyed
                }
            }]), e
        }();

        function Yi(e) {
            var t = de(e), n = null !== t ? t.factory : kt(e);
            if (null !== n) return n;
            var r = ve(e);
            if (null !== r) return r.factory;
            if (e instanceof He) throw new Error("Token ".concat(Ce(e), " is missing a \u0275prov definition."));
            if (e instanceof Function) return function (e) {
                var t = e.length;
                if (t > 0) {
                    var n = function (e, t) {
                        for (var n = [], r = 0; r < e; r++) n.push("?");
                        return n
                    }(t);
                    throw new Error("Can't resolve all parameters for ".concat(Ce(e), ": (").concat(n.join(", "), ")."))
                }
                var r = function (e) {
                    var t = e && (e[ge] || e[_e] || e[me] && e[me]());
                    if (t) {
                        var n = function (e) {
                            if (e.hasOwnProperty("name")) return e.name;
                            var t = ("" + e).match(/^function\s*([^\s(]+)/);
                            return null === t ? "" : t[1]
                        }(e);
                        return console.warn('DEPRECATED: DI is instantiating a token "'.concat(n, '" that inherits its @Injectable decorator but does not provide one itself.\n') + 'This will become an error in v10. Please add @Injectable() to the "'.concat(n, '" class.')), t
                    }
                    return null
                }(e);
                return null !== r ? function () {
                    return r.factory(e)
                } : function () {
                    return new e
                }
            }(e);
            throw new Error("unreachable")
        }

        function Xi(e, t, n) {
            var r, i = void 0;
            if (no(e)) {
                var o = xe(e);
                return kt(o) || Yi(o)
            }
            if (to(e)) i = function () {
                return xe(e.useValue)
            }; else if ((r = e) && r.useFactory) i = function () {
                return e.useFactory.apply(e, _toConsumableArray($e(e.deps || [])))
            }; else if (function (e) {
                return !(!e || !e.useExisting)
            }(e)) i = function () {
                return Je(xe(e.useExisting))
            }; else {
                var a = xe(e && (e.useClass || e.provide));
                if (a || function (e, t, n) {
                    var r = "";
                    throw e && t && (r = " - only instances of Provider and Type are allowed, got: [".concat(t.map((function (e) {
                        return e == n ? "?" + n + "?" : "..."
                    })).join(", "), "]")), new Error("Invalid provider for the NgModule '".concat(Ce(e), "'") + r)
                }(t, n, e), !function (e) {
                    return !!e.deps
                }(e)) return kt(a) || Yi(a);
                i = function () {
                    return _construct(a, _toConsumableArray($e(e.deps)))
                }
            }
            return i
        }

        function eo(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return {factory: e, value: t, multi: n ? [] : void 0}
        }

        function to(e) {
            return null !== e && "object" == typeof e && Ge in e
        }

        function no(e) {
            return "function" == typeof e
        }

        var ro = function (e, t, n) {
            return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 ? arguments[3] : void 0, i = Ki(e, t, n, r);
                return i._resolveInjectorDefTypes(), i
            }({name: n}, t, e, n)
        }, io = function () {
            var e = function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, null, [{
                    key: "create", value: function (e, t) {
                        return Array.isArray(e) ? ro(e, t, "") : ro(e.providers, e.parent, e.name || "")
                    }
                }]), e
            }();
            return e.THROW_IF_NOT_FOUND = ze, e.NULL = new Ye, e.\u0275prov = he({
                token: e,
                providedIn: "any",
                factory: function () {
                    return Je(Le)
                }
            }), e.__NG_ELEMENT_ID__ = -1, e
        }(), oo = new He("AnalyzeForEntryComponents"), ao = new Map, so = new Set;

        function uo(e) {
            return "string" == typeof e ? e : e.text()
        }

        function lo(e, t) {
            for (var n = e.styles, r = e.classes, i = 0, o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a ? i = a : 1 == i ? r = we(r, a) : 2 == i && (n = we(n, a + ": " + t[++o] + ";"))
            }
            null !== n && (e.styles = n), null !== r && (e.classes = r)
        }

        var co = null;

        function ho() {
            if (!co) {
                var e = Re.Symbol;
                if (e && e.iterator) co = e.iterator; else for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
                    var r = t[n];
                    "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (co = r)
                }
            }
            return co
        }

        function fo(e, t) {
            return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
        }

        var po = function () {
            function e(t) {
                _classCallCheck(this, e), this.wrapped = t
            }

            return _createClass(e, null, [{
                key: "wrap", value: function (t) {
                    return new e(t)
                }
            }, {
                key: "unwrap", value: function (t) {
                    return e.isWrapped(t) ? t.wrapped : t
                }
            }, {
                key: "isWrapped", value: function (t) {
                    return t instanceof e
                }
            }]), e
        }();

        function vo(e) {
            return !!go(e) && (Array.isArray(e) || !(e instanceof Map) && ho() in e)
        }

        function go(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }

        function yo(e, t, n) {
            return e[t] = n
        }

        function mo(e, t, n) {
            return !Object.is(e[t], n) && (e[t] = n, !0)
        }

        function _o(e, t, n, r) {
            var i = mo(e, t, n);
            return mo(e, t + 1, r) || i
        }

        function ko(e, t, n, r) {
            var i = qt();
            return mo(i, en(), t) && (Wt(), function (e, t, n, r, i, o) {
                var a = Dt(e, t), s = t[11];
                if (null == r) It(s) ? s.removeAttribute(a, n, o) : a.removeAttribute(n); else {
                    var u = null == i ? Pn(r) : i(r, e.tagName || "", n);
                    It(s) ? s.setAttribute(a, n, u, o) : o ? a.setAttributeNS(o, n, u) : a.setAttribute(n, u)
                }
            }(pn(), i, e, t, n, r)), ko
        }

        function Co(e, t, n, r) {
            return mo(e, en(), n) ? t + Pn(n) + r : _r
        }

        function wo(e, t, n, r, i, o, a, s) {
            var u = qt(), l = Wt(), c = e + 20, h = l.firstCreatePass ? function (e, t, n, r, i, o, a, s, u) {
                var l = t.consts, c = Rr(t, n[6], e, 0, a || null, Ht(l, s));
                Gr(t, n, c, Ht(l, u)), vn(t, c);
                var h = c.tViews = Hr(2, -1, r, i, o, t.directiveRegistry, t.pipeRegistry, null, t.schemas, l),
                    f = Lr(0, null, 2, -1, null, null);
                return f.injectorIndex = c.injectorIndex, h.node = f, null !== t.queries && (t.queries.template(t, c), h.queries = t.queries.embeddedTView(c)), c
            }(e, l, u, t, n, r, i, o, a) : l.data[c];
            Jt(h, !1);
            var f = u[11].createComment("");
            Ti(l, u, f, h), ar(f, u), si(u, u[c] = ni(f, u, f, h)), Et(h) && jr(l, u, h), null != a && Fr(u, h, s)
        }

        function bo(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue.Default, n = qt();
            return null == n ? Je(e, t) : qn(Qt(), n, xe(e), t)
        }

        function So() {
            throw new Error("invalid")
        }

        function xo(e, t, n) {
            var r = qt();
            return mo(r, en(), t) && Br(Wt(), pn(), r, e, t, r[11], n, !1), xo
        }

        function Eo(e, t, n, r, i) {
            var o = i ? "class" : "style";
            vi(e, n, t.inputs[o], o, r)
        }

        function Oo(e, t, n, r) {
            var i = qt(), o = Wt(), a = 20 + e, s = i[11], u = i[a] = Ir(t, s, Bt.lFrame.currentNamespace),
                l = o.firstCreatePass ? function (e, t, n, r, i, o, a) {
                    var s = t.consts, u = Ht(s, o), l = Rr(t, n[6], e, 3, i, u);
                    return Gr(t, n, l, Ht(s, a)), null !== l.mergedAttrs && lo(l, l.mergedAttrs), null !== t.queries && t.queries.elementStart(t, l), l
                }(e, o, i, 0, t, n, r) : o.data[a];
            Jt(l, !0);
            var c = l.mergedAttrs;
            null !== c && wn(s, u, c);
            var h = l.classes;
            null !== h && Vi(s, u, h);
            var f = l.styles;
            null !== f && Di(s, u, f), Ti(o, i, u, l), 0 === Bt.lFrame.elementDepthCount && ar(u, i), Bt.lFrame.elementDepthCount++, Et(l) && (jr(o, i, l), function (e, t, n) {
                if (St(t)) for (var r = t.directiveEnd, i = t.directiveStart; i < r; i++) {
                    var o = e.data[i];
                    o.contentQueries && o.contentQueries(1, n[i], i)
                }
            }(o, l, i)), null !== r && Fr(i, l)
        }

        function Ao() {
            var e = Qt();
            Kt() ? Bt.lFrame.isParent = !1 : Jt(e = e.parent, !1);
            var t = e;
            Bt.lFrame.elementDepthCount--;
            var n = Wt();
            n.firstCreatePass && (vn(n, e), St(e) && n.queries.elementEnd(e)), null !== t.classes && function (e) {
                return 0 != (16 & e.flags)
            }(t) && Eo(n, t, qt(), t.classes, !0), null !== t.styles && function (e) {
                return 0 != (32 & e.flags)
            }(t) && Eo(n, t, qt(), t.styles, !1)
        }

        function To(e, t, n, r) {
            Oo(e, t, n, r), Ao()
        }

        function Io() {
            return qt()
        }

        function Po(e) {
            return !!e && "function" == typeof e.then
        }

        function Ro(e) {
            return !!e && "function" == typeof e.subscribe
        }

        function Mo(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0, i = qt(), o = Wt(), a = Qt();
            return function (e, t, n, r, i, o) {
                var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    s = arguments.length > 7 ? arguments[7] : void 0, u = Et(r),
                    l = e.firstCreatePass && (e.cleanup || (e.cleanup = [])), c = di(t), h = !0;
                if (3 === r.type) {
                    var f = Dt(r, t), d = s ? s(f) : ut, p = d.target || f, v = c.length, g = s ? function (e) {
                        return s(Rt(e[r.index])).target
                    } : r.index;
                    if (It(n)) {
                        var y = null;
                        if (!s && u && (y = function (e, t, n, r) {
                            var i = e.cleanup;
                            if (null != i) for (var o = 0; o < i.length - 1; o += 2) {
                                var a = i[o];
                                if (a === n && i[o + 1] === r) {
                                    var s = t[7], u = i[o + 2];
                                    return s.length > u ? s[u] : null
                                }
                                "string" == typeof a && (o += 2)
                            }
                            return null
                        }(e, t, i, r.index)), null !== y) (y.__ngLastListenerFn__ || y).__ngNextListenerFn__ = o, y.__ngLastListenerFn__ = o, h = !1; else {
                            o = Vo(r, t, o, !1);
                            var m = n.listen(d.name || p, i, o);
                            c.push(o, m), l && l.push(i, g, v, v + 1)
                        }
                    } else o = Vo(r, t, o, !0), p.addEventListener(i, o, a), c.push(o), l && l.push(i, g, v, a)
                }
                var _, k = r.outputs;
                if (h && null !== k && (_ = k[i])) {
                    var C = _.length;
                    if (C) for (var w = 0; w < C; w += 2) {
                        var b = t[_[w]][_[w + 1]].subscribe(o), S = c.length;
                        c.push(o, b), l && l.push(i, r.index, S, -(S + 1))
                    }
                }
            }(o, i, i[11], a, e, t, n, r), Mo
        }

        function Do(e, t, n) {
            try {
                return !1 !== t(n)
            } catch (r) {
                return pi(e, r), !1
            }
        }

        function Vo(e, t, n, r) {
            return function i(o) {
                if (o === Function) return n;
                var a = 2 & e.flags ? jt(e.index, t) : t;
                0 == (32 & t[2]) && ui(a);
                for (var s = Do(t, n, o), u = i.__ngNextListenerFn__; u;) s = Do(t, u, o) && s, u = u.__ngNextListenerFn__;
                return r && !1 === s && (o.preventDefault(), o.returnValue = !1), s
            }
        }

        function No() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return function (e) {
                return (Bt.lFrame.contextLView = function (e, t) {
                    for (; e > 0;) t = t[15], e--;
                    return t
                }(e, Bt.lFrame.contextLView))[8]
            }(e)
        }

        function jo(e, t, n, r, i) {
            var o = qt(), a = Co(o, t, n, r);
            return a !== _r && Br(Wt(), pn(), o, e, a, o[11], i, !1), jo
        }

        var Fo = [];

        function Uo(e, t, n, r, i) {
            for (var o = e[n + 1], a = null === t, s = r ? Sr(o) : Er(o), u = !1; 0 !== s && (!1 === u || a);) {
                var l = e[s + 1];
                Ho(e[s], t) && (u = !0, e[s + 1] = r ? Ar(l) : xr(l)), s = r ? Sr(l) : Er(l)
            }
            u && (e[n + 1] = r ? xr(o) : Ar(o))
        }

        function Ho(e, t) {
            return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && ot(e, t) >= 0
        }

        function Lo(e, t, n) {
            return Bo(e, t, n, !1), Lo
        }

        function zo(e, t) {
            return Bo(e, t, null, !0), zo
        }

        function Bo(e, t, n, r) {
            var i, o, a, s = qt(), u = Wt(),
                l = (i = Bt.lFrame, o = i.bindingIndex, i.bindingIndex = i.bindingIndex + 2, o);
            (u.firstUpdatePass && function (e, t, n, r) {
                var i = e.data;
                if (null === i[n + 1]) {
                    var o = i[fn() + 20], a = function (e, t) {
                        return t >= e.expandoStartIndex
                    }(e, n);
                    (function (e, t) {
                        return 0 != (e.flags & (t ? 16 : 32))
                    })(o, r) && null === t && !a && (t = !1), t = function (e, t, n, r) {
                        var i = function (e) {
                            var t = Bt.lFrame.currentDirectiveIndex;
                            return -1 === t ? null : e[t]
                        }(e), o = r ? t.residualClasses : t.residualStyles;
                        if (null === i) 0 === (r ? t.classBindings : t.styleBindings) && (n = qo(n = Go(null, e, t, n, r), t.attrs, r), o = null); else {
                            var a = t.directiveStylingLast;
                            if (-1 === a || e[a] !== i) if (n = Go(i, e, t, n, r), null === o) {
                                var s = function (e, t, n) {
                                    var r = n ? t.classBindings : t.styleBindings;
                                    if (0 !== Er(r)) return e[Sr(r)]
                                }(e, t, r);
                                void 0 !== s && Array.isArray(s) && function (e, t, n, r) {
                                    e[Sr(n ? t.classBindings : t.styleBindings)] = r
                                }(e, t, r, s = qo(s = Go(null, e, t, s[1], r), t.attrs, r))
                            } else o = function (e, t, n) {
                                for (var r = void 0, i = t.directiveEnd, o = 1 + t.directiveStylingLast; o < i; o++) r = qo(r, e[o].hostAttrs, n);
                                return qo(r, t.attrs, n)
                            }(e, t, r)
                        }
                        return void 0 !== o && (r ? t.residualClasses = o : t.residualStyles = o), n
                    }(i, o, t, r), function (e, t, n, r, i, o) {
                        var a = o ? t.classBindings : t.styleBindings, s = Sr(a), u = Er(a);
                        e[r] = n;
                        var l, c = !1;
                        if (Array.isArray(n)) {
                            var h = n;
                            (null === (l = h[1]) || ot(h, l) > 0) && (c = !0)
                        } else l = n;
                        if (i) if (0 !== u) {
                            var f = Sr(e[s + 1]);
                            e[r + 1] = br(f, s), 0 !== f && (e[f + 1] = Or(e[f + 1], r)), e[s + 1] = 131071 & e[s + 1] | r << 17
                        } else e[r + 1] = br(s, 0), 0 !== s && (e[s + 1] = Or(e[s + 1], r)), s = r; else e[r + 1] = br(u, 0), 0 === s ? s = r : e[u + 1] = Or(e[u + 1], r), u = r;
                        c && (e[r + 1] = xr(e[r + 1])), Uo(e, l, r, !0), Uo(e, l, r, !1), function (e, t, n, r, i) {
                            var o = i ? e.residualClasses : e.residualStyles;
                            null != o && "string" == typeof t && ot(o, t) >= 0 && (n[r + 1] = Ar(n[r + 1]))
                        }(t, l, e, r, o), a = br(s, u), o ? t.classBindings = a : t.styleBindings = a
                    }(i, o, t, n, a, r)
                }
            }(u, e, l, r), t !== _r && mo(s, l, t)) && (null == n && (a = function () {
                var e = Bt.lFrame;
                return null === e ? null : e.currentSanitizer
            }()) && (n = a), function (e, t, n, r, i, o, a, s) {
                if (3 === t.type) {
                    var u = e.data, l = u[s + 1];
                    Zo(1 == (1 & l) ? Wo(u, t, n, i, Er(l), a) : void 0) || (Zo(o) || 2 == (2 & l) && (o = Wo(u, null, n, i, s, a)), function (e, t, n, r, i) {
                        var o = It(e);
                        if (t) i ? o ? e.addClass(n, r) : n.classList.add(r) : o ? e.removeClass(n, r) : n.classList.remove(r); else {
                            var a = -1 == r.indexOf("-") ? void 0 : 2;
                            null == i ? o ? e.removeStyle(n, r, a) : n.style.removeProperty(r) : o ? e.setStyle(n, r, i, a) : n.style.setProperty(r, i)
                        }
                    }(r, a, Mt(fn(), n), i, o))
                }
            }(u, u.data[fn() + 20], s, s[11], e, s[l + 1] = function (e, t) {
                return null == e || ("function" == typeof t ? e = t(e) : "string" == typeof t ? e += t : "object" == typeof e && (e = Ce(function (e) {
                    return e instanceof function () {
                        function e(t) {
                            _classCallCheck(this, e), this.changingThisBreaksApplicationSecurity = t
                        }

                        return _createClass(e, [{
                            key: "toString", value: function () {
                                return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity) + " (see http://g.co/ng/security#xss)"
                            }
                        }]), e
                    }() ? e.changingThisBreaksApplicationSecurity : e
                }(e)))), e
            }(t, n), r, l))
        }

        function Go(e, t, n, r, i) {
            var o = null, a = n.directiveEnd, s = n.directiveStylingLast;
            for (-1 === s ? s = n.directiveStart : s++; s < a && (r = qo(r, (o = t[s]).hostAttrs, i), o !== e);) s++;
            return null !== e && (n.directiveStylingLast = s), r
        }

        function qo(e, t, n) {
            var r, i, o, a, s = n ? 1 : 2, u = -1;
            if (null !== t) for (var l = 0; l < t.length; l++) {
                var c = t[l];
                "number" == typeof c ? u = c : u === s && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), r = e, i = c, o = !!n || t[++l], a = void 0, (a = ot(r, i)) >= 0 ? r[1 | a] = o : function (e, t, n, r) {
                    var i = e.length;
                    if (i == t) e.push(n, r); else if (1 === i) e.push(r, e[0]), e[0] = n; else {
                        for (i--, e.push(e[i - 1], e[i]); i > t;) e[i] = e[i - 2], i--;
                        e[t] = n, e[t + 1] = r
                    }
                }(r, a = ~a, i, o))
            }
            return void 0 === e ? null : e
        }

        function Wo(e, t, n, r, i, o) {
            for (var a = null === t, s = void 0; i > 0;) {
                var u = e[i], l = Array.isArray(u), c = l ? u[1] : u, h = null === c, f = n[i + 1];
                f === _r && (f = h ? Fo : void 0);
                var d = h ? it(f, r) : c === r ? f : void 0;
                if (l && !Zo(d) && (d = it(u, r)), Zo(d) && (s = d, a)) return s;
                var p = e[i + 1];
                i = a ? Sr(p) : Er(p)
            }
            if (null !== t) {
                var v = o ? t.residualClasses : t.residualStyles;
                null != v && (s = it(v, r))
            }
            return s
        }

        function Zo(e) {
            return void 0 !== e
        }

        function Qo(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = qt(), r = Wt(), i = e + 20,
                o = r.firstCreatePass ? Rr(r, n[6], e, 3, null, null) : r.data[i], a = n[i] = function (e, t) {
                    return It(t) ? t.createText(e) : t.createTextNode(e)
                }(t, n[11]);
            Ti(r, n, a, o), Jt(o, !1)
        }

        function Jo(e) {
            return Ko("", e, ""), Jo
        }

        function Ko(e, t, n) {
            var r = qt(), i = Co(r, e, t, n);
            return i !== _r && function (e, t, n) {
                var r = Mt(t, e), i = e[11];
                It(i) ? i.setValue(r, n) : r.textContent = n
            }(r, fn(), i), Ko
        }

        function $o(e, t) {
            var n = Ft(e)[1], r = n.data.length - 1;
            vn(n, {directiveStart: r, directiveEnd: r + 1})
        }

        function Yo(e) {
            for (var t = Object.getPrototypeOf(e.type.prototype).constructor, n = !0, r = [e]; t;) {
                var i = void 0;
                if (Ot(e)) i = t.\u0275cmp || t.\u0275dir; else {
                    if (t.\u0275cmp) throw new Error("Directives cannot inherit Components");
                    i = t.\u0275dir
                }
                if (i) {
                    if (n) {
                        r.push(i);
                        var o = e;
                        o.inputs = Xo(e.inputs), o.declaredInputs = Xo(e.declaredInputs), o.outputs = Xo(e.outputs);
                        var a = i.hostBindings;
                        a && na(e, a);
                        var s = i.viewQuery, u = i.contentQueries;
                        if (s && ea(e, s), u && ta(e, u), ce(e.inputs, i.inputs), ce(e.declaredInputs, i.declaredInputs), ce(e.outputs, i.outputs), Ot(i) && i.data.animation) {
                            var l = e.data;
                            l.animation = (l.animation || []).concat(i.data.animation)
                        }
                        o.afterContentChecked = o.afterContentChecked || i.afterContentChecked, o.afterContentInit = e.afterContentInit || i.afterContentInit, o.afterViewChecked = e.afterViewChecked || i.afterViewChecked, o.afterViewInit = e.afterViewInit || i.afterViewInit, o.doCheck = e.doCheck || i.doCheck, o.onDestroy = e.onDestroy || i.onDestroy, o.onInit = e.onInit || i.onInit
                    }
                    var c = i.features;
                    if (c) for (var h = 0; h < c.length; h++) {
                        var f = c[h];
                        f && f.ngInherit && f(e), f === Yo && (n = !1)
                    }
                }
                t = Object.getPrototypeOf(t)
            }
            !function (e) {
                for (var t = 0, n = null, r = e.length - 1; r >= 0; r--) {
                    var i = e[r];
                    i.hostVars = t += i.hostVars, i.hostAttrs = xn(i.hostAttrs, n = xn(n, i.hostAttrs))
                }
            }(r)
        }

        function Xo(e) {
            return e === ut ? {} : e === lt ? [] : e
        }

        function ea(e, t) {
            var n = e.viewQuery;
            e.viewQuery = n ? function (e, r) {
                t(e, r), n(e, r)
            } : t
        }

        function ta(e, t) {
            var n = e.contentQueries;
            e.contentQueries = n ? function (e, r, i) {
                t(e, r, i), n(e, r, i)
            } : t
        }

        function na(e, t) {
            var n = e.hostBindings;
            e.hostBindings = n ? function (e, r) {
                t(e, r), n(e, r)
            } : t
        }

        var ra = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this.previousValue = t, this.currentValue = n, this.firstChange = r
            }

            return _createClass(e, [{
                key: "isFirstChange", value: function () {
                    return this.firstChange
                }
            }]), e
        }();

        function ia(e) {
            e.type.prototype.ngOnChanges && (e.setInput = oa, e.onChanges = function () {
                var e = aa(this), t = e && e.current;
                if (t) {
                    var n = e.previous;
                    if (n === ut) e.previous = t; else for (var r in t) n[r] = t[r];
                    e.current = null, this.ngOnChanges(t)
                }
            })
        }

        function oa(e, t, n, r) {
            var i = aa(e) || function (e, t) {
                    return e.__ngSimpleChanges__ = t
                }(e, {previous: ut, current: null}), o = i.current || (i.current = {}), a = i.previous,
                s = this.declaredInputs[n], u = a[s];
            o[s] = new ra(u && u.currentValue, t, a === ut), e[r] = t
        }

        function aa(e) {
            return e.__ngSimpleChanges__ || null
        }

        function sa(e, t, n, r, i) {
            if (e = xe(e), Array.isArray(e)) for (var o = 0; o < e.length; o++) sa(e[o], t, n, r, i); else {
                var a = Wt(), s = qt(), u = no(e) ? e : xe(e.provide), l = Xi(e), c = Qt(),
                    h = 65535 & c.providerIndexes, f = c.directiveStart, d = c.providerIndexes >> 16;
                if (no(e) || !e.multi) {
                    var p = new Cn(l, i, bo), v = ca(u, t, i ? h : h + d, f);
                    -1 === v ? (Gn(Hn(c, s), a, u), ua(a, e, t.length), t.push(u), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(p), s.push(p)) : (n[v] = p, s[v] = p)
                } else {
                    var g = ca(u, t, h + d, f), y = ca(u, t, h, h + d), m = g >= 0 && n[g], _ = y >= 0 && n[y];
                    if (i && !_ || !i && !m) {
                        Gn(Hn(c, s), a, u);
                        var k = function (e, t, n, r, i) {
                            var o = new Cn(e, n, bo);
                            return o.multi = [], o.index = t, o.componentProviders = 0, la(o, i, r && !n), o
                        }(i ? fa : ha, n.length, i, r, l);
                        !i && _ && (n[y].providerFactory = k), ua(a, e, t.length, 0), t.push(u), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(k), s.push(k)
                    } else ua(a, e, g > -1 ? g : y, la(n[i ? y : g], l, !i && r));
                    !i && r && _ && n[y].componentProviders++
                }
            }
        }

        function ua(e, t, n, r) {
            var i = no(t);
            if (i || t.useClass) {
                var o = (t.useClass || t).prototype.ngOnDestroy;
                if (o) {
                    var a = e.destroyHooks || (e.destroyHooks = []);
                    if (!i && t.multi) {
                        var s = a.indexOf(n);
                        -1 === s ? a.push(n, [r, o]) : a[s + 1].push(r, o)
                    } else a.push(n, o)
                }
            }
        }

        function la(e, t, n) {
            return n && e.componentProviders++, e.multi.push(t) - 1
        }

        function ca(e, t, n, r) {
            for (var i = n; i < r; i++) if (t[i] === e) return i;
            return -1
        }

        function ha(e, t, n, r) {
            return da(this.multi, [])
        }

        function fa(e, t, n, r) {
            var i, o = this.multi;
            if (this.providerFactory) {
                var a = this.providerFactory.componentProviders, s = Qn(n, n[1], this.providerFactory.index, r);
                da(o, i = s.slice(0, a));
                for (var u = a; u < s.length; u++) i.push(s[u])
            } else da(o, i = []);
            return i
        }

        function da(e, t) {
            for (var n = 0; n < e.length; n++) t.push((0, e[n])());
            return t
        }

        function pa(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return function (n) {
                n.providersResolver = function (n, r) {
                    return function (e, t, n) {
                        var r = Wt();
                        if (r.firstCreatePass) {
                            var i = Ot(e);
                            sa(n, r.data, r.blueprint, i, !0), sa(t, r.data, r.blueprint, i, !1)
                        }
                    }(n, r ? r(e) : e, t)
                }
            }
        }

        ia.ngInherit = !0;
        var va = function e() {
            _classCallCheck(this, e)
        }, ga = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "resolveComponentFactory", value: function (e) {
                    throw function (e) {
                        var t = Error("No component factory found for ".concat(Ce(e), ". Did you add it to @NgModule.entryComponents?"));
                        return t.ngComponent = e, t
                    }(e)
                }
            }]), e
        }(), ya = function () {
            var e = function e() {
                _classCallCheck(this, e)
            };
            return e.NULL = new ga, e
        }(), ma = function () {
            var e = function e(t) {
                _classCallCheck(this, e), this.nativeElement = t
            };
            return e.__NG_ELEMENT_ID__ = function () {
                return _a(e)
            }, e
        }(), _a = function (e) {
            return Li(e, Qt(), qt())
        }, ka = function e() {
            _classCallCheck(this, e)
        }, Ca = function () {
            var e = {Important: 1, DashCase: 2};
            return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e
        }(), wa = function () {
            var e = function e() {
                _classCallCheck(this, e)
            };
            return e.__NG_ELEMENT_ID__ = function () {
                return ba()
            }, e
        }(), ba = function () {
            var e = qt(), t = jt(Qt().index, e);
            return function (e) {
                var t = e[11];
                if (It(t)) return t;
                throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
            }(wt(t) ? t : e)
        }, Sa = function () {
            var e = function e() {
                _classCallCheck(this, e)
            };
            return e.\u0275prov = he({
                token: e, providedIn: "root", factory: function () {
                    return null
                }
            }), e
        }(), xa = new function e(t) {
            _classCallCheck(this, e), this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
        }("9.1.7"), Ea = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "supports", value: function (e) {
                    return vo(e)
                }
            }, {
                key: "create", value: function (e) {
                    return new Aa(e)
                }
            }]), e
        }(), Oa = function (e, t) {
            return t
        }, Aa = function () {
            function e(t) {
                _classCallCheck(this, e), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Oa
            }

            return _createClass(e, [{
                key: "forEachItem", value: function (e) {
                    var t;
                    for (t = this._itHead; null !== t; t = t._next) e(t)
                }
            }, {
                key: "forEachOperation", value: function (e) {
                    for (var t = this._itHead, n = this._removalsHead, r = 0, i = null; t || n;) {
                        var o = !n || t && t.currentIndex < Ra(n, r, i) ? t : n, a = Ra(o, r, i), s = o.currentIndex;
                        if (o === n) r--, n = n._nextRemoved; else if (t = t._next, null == o.previousIndex) r++; else {
                            i || (i = []);
                            var u = a - r, l = s - r;
                            if (u != l) {
                                for (var c = 0; c < u; c++) {
                                    var h = c < i.length ? i[c] : i[c] = 0, f = h + c;
                                    l <= f && f < u && (i[c] = h + 1)
                                }
                                i[o.previousIndex] = l - u
                            }
                        }
                        a !== s && e(o, a, s)
                    }
                }
            }, {
                key: "forEachPreviousItem", value: function (e) {
                    var t;
                    for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
                }
            }, {
                key: "forEachAddedItem", value: function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }
            }, {
                key: "forEachMovedItem", value: function (e) {
                    var t;
                    for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
                }
            }, {
                key: "forEachRemovedItem", value: function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }
            }, {
                key: "forEachIdentityChange", value: function (e) {
                    var t;
                    for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
                }
            }, {
                key: "diff", value: function (e) {
                    if (null == e && (e = []), !vo(e)) throw new Error("Error trying to diff '".concat(Ce(e), "'. Only arrays and iterables are allowed"));
                    return this.check(e) ? this : null
                }
            }, {
                key: "onDestroy", value: function () {
                }
            }, {
                key: "check", value: function (e) {
                    var t = this;
                    this._reset();
                    var n, r, i, o = this._itHead, a = !1;
                    if (Array.isArray(e)) {
                        this.length = e.length;
                        for (var s = 0; s < this.length; s++) r = e[s], i = this._trackByFn(s, r), null !== o && fo(o.trackById, i) ? (a && (o = this._verifyReinsertion(o, r, i, s)), fo(o.item, r) || this._addIdentityChange(o, r)) : (o = this._mismatch(o, r, i, s), a = !0), o = o._next
                    } else n = 0, function (e, t) {
                        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t(e[n]); else for (var r, i = e[ho()](); !(r = i.next()).done;) t(r.value)
                    }(e, (function (e) {
                        i = t._trackByFn(n, e), null !== o && fo(o.trackById, i) ? (a && (o = t._verifyReinsertion(o, e, i, n)), fo(o.item, e) || t._addIdentityChange(o, e)) : (o = t._mismatch(o, e, i, n), a = !0), o = o._next, n++
                    })), this.length = n;
                    return this._truncate(o), this.collection = e, this.isDirty
                }
            }, {
                key: "_reset", value: function () {
                    if (this.isDirty) {
                        var e, t;
                        for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
            }, {
                key: "_mismatch", value: function (e, t, n, r) {
                    var i;
                    return null === e ? i = this._itTail : (i = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (fo(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (fo(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r)) : e = this._addAfter(new Ta(t, n), i, r), e
                }
            }, {
                key: "_verifyReinsertion", value: function (e, t, n, r) {
                    var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                    return null !== i ? e = this._reinsertAfter(i, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
                }
            }, {
                key: "_truncate", value: function (e) {
                    for (; null !== e;) {
                        var t = e._next;
                        this._addToRemovals(this._unlink(e)), e = t
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
            }, {
                key: "_reinsertAfter", value: function (e, t, n) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                    var r = e._prevRemoved, i = e._nextRemoved;
                    return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
                }
            }, {
                key: "_moveAfter", value: function (e, t, n) {
                    return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
                }
            }, {
                key: "_addAfter", value: function (e, t, n) {
                    return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
                }
            }, {
                key: "_insertAfter", value: function (e, t, n) {
                    var r = null === t ? this._itHead : t._next;
                    return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new Pa), this._linkedRecords.put(e), e.currentIndex = n, e
                }
            }, {
                key: "_remove", value: function (e) {
                    return this._addToRemovals(this._unlink(e))
                }
            }, {
                key: "_unlink", value: function (e) {
                    null !== this._linkedRecords && this._linkedRecords.remove(e);
                    var t = e._prev, n = e._next;
                    return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
                }
            }, {
                key: "_addToMoves", value: function (e, t) {
                    return e.previousIndex === t || (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e), e
                }
            }, {
                key: "_addToRemovals", value: function (e) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new Pa), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
                }
            }, {
                key: "_addIdentityChange", value: function (e, t) {
                    return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
                }
            }, {
                key: "isDirty", get: function () {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
            }]), e
        }(), Ta = function e(t, n) {
            _classCallCheck(this, e), this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        }, Ia = function () {
            function e() {
                _classCallCheck(this, e), this._head = null, this._tail = null
            }

            return _createClass(e, [{
                key: "add", value: function (e) {
                    null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
                }
            }, {
                key: "get", value: function (e, t) {
                    var n;
                    for (n = this._head; null !== n; n = n._nextDup) if ((null === t || t <= n.currentIndex) && fo(n.trackById, e)) return n;
                    return null
                }
            }, {
                key: "remove", value: function (e) {
                    var t = e._prevDup, n = e._nextDup;
                    return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
                }
            }]), e
        }(), Pa = function () {
            function e() {
                _classCallCheck(this, e), this.map = new Map
            }

            return _createClass(e, [{
                key: "put", value: function (e) {
                    var t = e.trackById, n = this.map.get(t);
                    n || (n = new Ia, this.map.set(t, n)), n.add(e)
                }
            }, {
                key: "get", value: function (e, t) {
                    var n = this.map.get(e);
                    return n ? n.get(e, t) : null
                }
            }, {
                key: "remove", value: function (e) {
                    var t = e.trackById;
                    return this.map.get(t).remove(e) && this.map.delete(t), e
                }
            }, {
                key: "clear", value: function () {
                    this.map.clear()
                }
            }, {
                key: "isEmpty", get: function () {
                    return 0 === this.map.size
                }
            }]), e
        }();

        function Ra(e, t, n) {
            var r = e.previousIndex;
            if (null === r) return r;
            var i = 0;
            return n && r < n.length && (i = n[r]), r + t + i
        }

        var Ma = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "supports", value: function (e) {
                    return e instanceof Map || go(e)
                }
            }, {
                key: "create", value: function () {
                    return new Da
                }
            }]), e
        }(), Da = function () {
            function e() {
                _classCallCheck(this, e), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
            }

            return _createClass(e, [{
                key: "forEachItem", value: function (e) {
                    var t;
                    for (t = this._mapHead; null !== t; t = t._next) e(t)
                }
            }, {
                key: "forEachPreviousItem", value: function (e) {
                    var t;
                    for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
                }
            }, {
                key: "forEachChangedItem", value: function (e) {
                    var t;
                    for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
                }
            }, {
                key: "forEachAddedItem", value: function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }
            }, {
                key: "forEachRemovedItem", value: function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }
            }, {
                key: "diff", value: function (e) {
                    if (e) {
                        if (!(e instanceof Map || go(e))) throw new Error("Error trying to diff '".concat(Ce(e), "'. Only maps and objects are allowed"))
                    } else e = new Map;
                    return this.check(e) ? this : null
                }
            }, {
                key: "onDestroy", value: function () {
                }
            }, {
                key: "check", value: function (e) {
                    var t = this;
                    this._reset();
                    var n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(e, (function (e, r) {
                        if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next; else {
                            var i = t._getOrCreateRecordForKey(r, e);
                            n = t._insertBeforeOrAppend(n, i)
                        }
                    })), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
            }, {
                key: "_insertBeforeOrAppend", value: function (e, t) {
                    if (e) {
                        var n = e._prev;
                        return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                    }
                    return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
                }
            }, {
                key: "_getOrCreateRecordForKey", value: function (e, t) {
                    if (this._records.has(e)) {
                        var n = this._records.get(e);
                        this._maybeAddToChanges(n, t);
                        var r = n._prev, i = n._next;
                        return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
                    }
                    var o = new Va(e);
                    return this._records.set(e, o), o.currentValue = t, this._addToAdditions(o), o
                }
            }, {
                key: "_reset", value: function () {
                    if (this.isDirty) {
                        var e;
                        for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                        for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
            }, {
                key: "_maybeAddToChanges", value: function (e, t) {
                    fo(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
                }
            }, {
                key: "_addToAdditions", value: function (e) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                }
            }, {
                key: "_addToChanges", value: function (e) {
                    null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                }
            }, {
                key: "_forEach", value: function (e, t) {
                    e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((function (n) {
                        return t(e[n], n)
                    }))
                }
            }, {
                key: "isDirty", get: function () {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
            }]), e
        }(), Va = function e(t) {
            _classCallCheck(this, e), this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        }, Na = function () {
            var e = function () {
                function e(t) {
                    _classCallCheck(this, e), this.factories = t
                }

                return _createClass(e, [{
                    key: "find", value: function (e) {
                        var t, n = this.factories.find((function (t) {
                            return t.supports(e)
                        }));
                        if (null != n) return n;
                        throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'"))
                    }
                }], [{
                    key: "create", value: function (t, n) {
                        if (null != n) {
                            var r = n.factories.slice();
                            t = t.concat(r)
                        }
                        return new e(t)
                    }
                }, {
                    key: "extend", value: function (t) {
                        return {
                            provide: e, useFactory: function (n) {
                                if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                return e.create(t, n)
                            }, deps: [[e, new se, new oe]]
                        }
                    }
                }]), e
            }();
            return e.\u0275prov = he({
                token: e, providedIn: "root", factory: function () {
                    return new e([new Ea])
                }
            }), e
        }(), ja = function () {
            var e = function () {
                function e(t) {
                    _classCallCheck(this, e), this.factories = t
                }

                return _createClass(e, [{
                    key: "find", value: function (e) {
                        var t = this.factories.find((function (t) {
                            return t.supports(e)
                        }));
                        if (t) return t;
                        throw new Error("Cannot find a differ supporting object '".concat(e, "'"))
                    }
                }], [{
                    key: "create", value: function (t, n) {
                        if (n) {
                            var r = n.factories.slice();
                            t = t.concat(r)
                        }
                        return new e(t)
                    }
                }, {
                    key: "extend", value: function (t) {
                        return {
                            provide: e, useFactory: function (n) {
                                if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                return e.create(t, n)
                            }, deps: [[e, new se, new oe]]
                        }
                    }
                }]), e
            }();
            return e.\u0275prov = he({
                token: e, providedIn: "root", factory: function () {
                    return new e([new Ma])
                }
            }), e
        }(), Fa = [new Ma], Ua = new Na([new Ea]), Ha = new ja(Fa), La = function () {
            var e = function e() {
                _classCallCheck(this, e)
            };
            return e.__NG_ELEMENT_ID__ = function () {
                return za(e, ma)
            }, e
        }(), za = function (e, t) {
            return function (e, t, n, r) {
                return ji || (ji = function (e) {
                    _inherits(n, e);
                    var t = _createSuper(n);

                    function n(e, r, i) {
                        var o;
                        return _classCallCheck(this, n), (o = t.call(this))._declarationView = e, o._declarationTContainer = r, o.elementRef = i, o
                    }

                    return _createClass(n, [{
                        key: "createEmbeddedView", value: function (e) {
                            var t = this._declarationTContainer.tViews,
                                n = Pr(this._declarationView, t, e, 16, null, t.node);
                            n[17] = this._declarationView[this._declarationTContainer.index];
                            var r = this._declarationView[19];
                            null !== r && (n[19] = r.createEmbeddedView(t)), Mr(t, n, e);
                            var i = new Ui(n);
                            return i._tViewNode = n[6], i
                        }
                    }]), n
                }(e)), 0 === n.type ? new ji(r, n, Li(t, n, r)) : null
            }(e, t, Qt(), qt())
        }, Ba = function () {
            var e = function e() {
                _classCallCheck(this, e)
            };
            return e.__NG_ELEMENT_ID__ = function () {
                return Ga(e, ma)
            }, e
        }(), Ga = function (e, t) {
            return function (e, t, n, r) {
                var i;
                Fi || (Fi = function (e) {
                    _inherits(r, e);
                    var n = _createSuper(r);

                    function r(e, t, i) {
                        var o;
                        return _classCallCheck(this, r), (o = n.call(this))._lContainer = e, o._hostTNode = t, o._hostView = i, o
                    }

                    return _createClass(r, [{
                        key: "clear", value: function () {
                            for (; this.length > 0;) this.remove(this.length - 1)
                        }
                    }, {
                        key: "get", value: function (e) {
                            return null !== this._lContainer[8] && this._lContainer[8][e] || null
                        }
                    }, {
                        key: "createEmbeddedView", value: function (e, t, n) {
                            var r = e.createEmbeddedView(t || {});
                            return this.insert(r, n), r
                        }
                    }, {
                        key: "createComponent", value: function (e, t, n, r, i) {
                            var o = n || this.parentInjector;
                            if (!i && null == e.ngModule && o) {
                                var a = o.get(Xe, null);
                                a && (i = a)
                            }
                            var s = e.create(o, r, void 0, i);
                            return this.insert(s.hostView, t), s
                        }
                    }, {
                        key: "insert", value: function (e, t) {
                            var n = e._lView, r = n[1];
                            if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                            if (this.allocateContainerIfNeeded(), bt(n[3])) {
                                var i = this.indexOf(e);
                                if (-1 !== i) this.detach(i); else {
                                    var o = n[3], a = new Fi(o, o[6], o[3]);
                                    a.detach(a.indexOf(e))
                                }
                            }
                            var s = this._adjustIndex(t);
                            return function (e, t, n, r) {
                                var i = 10 + r, o = n.length;
                                r > 0 && (n[i - 1][4] = t), r < o - 10 ? (t[4] = n[i], nt(n, 10 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                                var a = t[17];
                                null !== a && n !== a && function (e, t) {
                                    var n = e[9];
                                    t[16] !== t[3][3][16] && (e[2] |= 1), null === n ? e[9] = [t] : n.push(t)
                                }(a, t);
                                var s = t[19];
                                null !== s && s.insertView(e), t[2] |= 128
                            }(r, n, this._lContainer, s), _i(r, n, !0, Ii(s, this._lContainer)), e.attachToViewContainerRef(this), nt(this._lContainer[8], s, e), e
                        }
                    }, {
                        key: "move", value: function (e, t) {
                            if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                            return this.insert(e, t)
                        }
                    }, {
                        key: "indexOf", value: function (e) {
                            var t = this._lContainer[8];
                            return null !== t ? t.indexOf(e) : -1
                        }
                    }, {
                        key: "remove", value: function (e) {
                            this.allocateContainerIfNeeded();
                            var t = this._adjustIndex(e, -1);
                            !function (e, t) {
                                var n = Ci(e, t);
                                n && wi(n[1], n)
                            }(this._lContainer, t), rt(this._lContainer[8], t)
                        }
                    }, {
                        key: "detach", value: function (e) {
                            this.allocateContainerIfNeeded();
                            var t = this._adjustIndex(e, -1), n = Ci(this._lContainer, t);
                            return n && null != rt(this._lContainer[8], t) ? new Ui(n) : null
                        }
                    }, {
                        key: "_adjustIndex", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return null == e ? this.length + t : e
                        }
                    }, {
                        key: "allocateContainerIfNeeded", value: function () {
                            null === this._lContainer[8] && (this._lContainer[8] = [])
                        }
                    }, {
                        key: "element", get: function () {
                            return Li(t, this._hostTNode, this._hostView)
                        }
                    }, {
                        key: "injector", get: function () {
                            return new $n(this._hostTNode, this._hostView)
                        }
                    }, {
                        key: "parentInjector", get: function () {
                            var e = Bn(this._hostTNode, this._hostView), t = In(e, this._hostView),
                                n = function (e, t, n) {
                                    if (n.parent && -1 !== n.parent.injectorIndex) {
                                        for (var r = n.parent.injectorIndex, i = n.parent; null != i.parent && r == i.parent.injectorIndex;) i = i.parent;
                                        return i
                                    }
                                    for (var o = Tn(e), a = t, s = t[6]; o > 1;) s = (a = a[15])[6], o--;
                                    return s
                                }(e, this._hostView, this._hostTNode);
                            return On(e) && null != n ? new $n(n, t) : new $n(null, this._hostView)
                        }
                    }, {
                        key: "length", get: function () {
                            return this._lContainer.length - 10
                        }
                    }]), r
                }(e));
                var o = r[n.index];
                if (bt(o)) (function (e, t) {
                    e[2] = -2
                })(i = o); else {
                    var a;
                    if (4 === n.type) a = Rt(o); else if (a = r[11].createComment(""), At(r)) {
                        var s = r[11], u = Dt(n, r);
                        xi(s, Ai(s, u), a, function (e, t) {
                            return It(e) ? e.nextSibling(t) : t.nextSibling
                        }(s, u))
                    } else Ti(r[1], r, a, n);
                    r[n.index] = i = ni(o, r, a, n), si(r, i)
                }
                return new Fi(i, n, r)
            }(e, t, Qt(), qt())
        }, qa = {}, Wa = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this)).ngModule = e, r
            }

            return _createClass(n, [{
                key: "resolveComponentFactory", value: function (e) {
                    var t = _t(e);
                    return new Ja(t, this.ngModule)
                }
            }]), n
        }(ya);

        function Za(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push({propName: e[n], templateName: n});
            return t
        }

        var Qa = new He("SCHEDULER_TOKEN", {
                providedIn: "root", factory: function () {
                    return Mn
                }
            }), Ja = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this)).componentDef = e, i.ngModule = r, i.componentType = e.type, i.selector = e.selectors.map(mr).join(","), i.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], i.isBoundToModule = !!r, i
                }

                return _createClass(n, [{
                    key: "create", value: function (e, t, n, r) {
                        var i, o, a = (r = r || this.ngModule) ? function (e, t) {
                                return {
                                    get: function (n, r, i) {
                                        var o = e.get(n, qa, i);
                                        return o !== qa || r === qa ? o : t.get(n, r, i)
                                    }
                                }
                            }(e, r.injector) : e, s = a.get(ka, Pt), u = a.get(Sa, null),
                            l = s.createRenderer(null, this.componentDef), c = this.componentDef.selectors[0][0] || "div",
                            h = n ? function (e, t, n) {
                                if (It(e)) return e.selectRootElement(t, n === st.ShadowDom);
                                var r = "string" == typeof t ? e.querySelector(t) : t;
                                return r.textContent = "", r
                            }(l, n, this.componentDef.encapsulation) : Ir(c, s.createRenderer(null, this.componentDef), function (e) {
                                var t = e.toLowerCase();
                                return "svg" === t ? "/2000/svg/index.html" : "math" === t ? "/1998/MathML/index.html" : null
                            }(c)), f = this.componentDef.onPush ? 576 : 528,
                            d = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
                            p = {components: [], scheduler: Mn, clean: fi, playerHandler: null, flags: 0},
                            v = Hr(0, -1, null, 1, 0, null, null, null, null, null),
                            g = Pr(null, v, p, f, null, null, s, l, u, a);
                        an(g, null);
                        try {
                            var y = function (e, t, n, r, i, o) {
                                var a = n[1];
                                n[20] = e;
                                var s = Rr(a, null, 0, 3, null, null), u = s.mergedAttrs = t.hostAttrs;
                                null !== u && (lo(s, u), null !== e && (wn(i, e, u), null !== s.classes && Vi(i, e, s.classes), null !== s.styles && Di(i, e, s.styles)));
                                var l = r.createRenderer(e, t),
                                    c = Pr(n, Ur(t), null, t.onPush ? 64 : 16, n[20], s, r, l, void 0);
                                return a.firstCreatePass && (Gn(Hn(s, n), a, t.type), Jr(a, s), $r(s, n.length, 1)), si(n, c), n[20] = c
                            }(h, this.componentDef, g, s, l);
                            if (h) if (n) wn(l, h, ["ng-version", xa.full]); else {
                                var m = function (e) {
                                    for (var t = [], n = [], r = 1, i = 2; r < e.length;) {
                                        var o = e[r];
                                        if ("string" == typeof o) 2 === i ? "" !== o && t.push(o, e[++r]) : 8 === i && n.push(o); else {
                                            if (!pr(i)) break;
                                            i = o
                                        }
                                        r++
                                    }
                                    return {attrs: t, classes: n}
                                }(this.componentDef.selectors[0]), _ = m.attrs, k = m.classes;
                                _ && wn(l, h, _), k && k.length > 0 && Vi(l, h, k.join(" "))
                            }
                            if (o = Vt(v, 0), void 0 !== t) for (var C = o.projection = [], w = 0; w < this.ngContentSelectors.length; w++) {
                                var b = t[w];
                                C.push(null != b ? Array.from(b) : null)
                            }
                            i = function (e, t, n, r, i) {
                                var o = n[1], a = function (e, t, n) {
                                    var r = Qt();
                                    e.firstCreatePass && (n.providersResolver && n.providersResolver(n), Qr(e, r, 1), Yr(e, t, n));
                                    var i = Qn(t, e, t.length - 1, r);
                                    ar(i, t);
                                    var o = Dt(r, t);
                                    return o && ar(o, t), i
                                }(o, n, t);
                                r.components.push(a), e[8] = a, i && i.forEach((function (e) {
                                    return e(a, t)
                                })), t.contentQueries && t.contentQueries(1, a, n.length - 1);
                                var s = Qt();
                                if (o.firstCreatePass && (null !== t.hostBindings || null !== t.hostAttrs)) {
                                    dn(s.index - 20);
                                    var u = n[1];
                                    qr(u, t), Wr(u, n, t.hostVars), Zr(t, a)
                                }
                                return a
                            }(y, this.componentDef, g, p, [$o]), Mr(v, g, null)
                        } finally {
                            hn()
                        }
                        var S = new Ka(this.componentType, i, Li(ma, o, g), g, o);
                        return n && !d || (S.hostView._tViewNode.child = o), S
                    }
                }, {
                    key: "inputs", get: function () {
                        return Za(this.componentDef.inputs)
                    }
                }, {
                    key: "outputs", get: function () {
                        return Za(this.componentDef.outputs)
                    }
                }]), n
            }(va), Ka = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, o, a) {
                    var s, u, l, c;
                    return _classCallCheck(this, n), (s = t.call(this)).location = i, s._rootLView = o, s._tNode = a, s.destroyCbs = [], s.instance = r, s.hostView = s.changeDetectorRef = new Hi(o), s.hostView._tViewNode = (u = o[1], l = o, null == (c = u.node) && (u.node = c = Lr(0, null, 2, -1, null, null)), l[6] = c), s.componentType = e, s
                }

                return _createClass(n, [{
                    key: "destroy", value: function () {
                        this.destroyCbs && (this.destroyCbs.forEach((function (e) {
                            return e()
                        })), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
                    }
                }, {
                    key: "onDestroy", value: function (e) {
                        this.destroyCbs && this.destroyCbs.push(e)
                    }
                }, {
                    key: "injector", get: function () {
                        return new $n(this._tNode, this._rootLView)
                    }
                }]), n
            }(function () {
                return function e() {
                    _classCallCheck(this, e)
                }
            }()), $a = void 0,
            Ya = ["en", [["a", "p"], ["AM", "PM"], $a], [["AM", "PM"], $a, $a], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], $a, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], $a, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", $a, "{1} 'at' {0}", $a], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return 1 === t && 0 === n ? 1 : 5
            }], Xa = {};

        function es(e) {
            return e in Xa || (Xa[e] = Re.ng && Re.ng.common && Re.ng.common.locales && Re.ng.common.locales[e]), Xa[e]
        }

        var ts = function () {
            var e = {
                LocaleId: 0,
                DayPeriodsFormat: 1,
                DayPeriodsStandalone: 2,
                DaysFormat: 3,
                DaysStandalone: 4,
                MonthsFormat: 5,
                MonthsStandalone: 6,
                Eras: 7,
                FirstDayOfWeek: 8,
                WeekendRange: 9,
                DateFormat: 10,
                TimeFormat: 11,
                DateTimeFormat: 12,
                NumberSymbols: 13,
                NumberFormats: 14,
                CurrencyCode: 15,
                CurrencySymbol: 16,
                CurrencyName: 17,
                Currencies: 18,
                Directionality: 19,
                PluralCase: 20,
                ExtraData: 21
            };
            return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencyCode] = "CurrencyCode", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.Directionality] = "Directionality", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e
        }();

        function ns(e) {
            var t;
            null == (t = e) && function (e, t, n, r) {
                throw new Error("ASSERTION ERROR: ".concat("Expected localeId to be defined") + " [Expected=> null != ".concat(t, " <=Actual]"))
            }(0, t), "string" == typeof e && e.toLowerCase().replace(/_/g, "-")
        }

        var rs = new Map, is = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                _classCallCheck(this, n), (i = t.call(this))._parent = r, i._bootstrapComponents = [], i.injector = _assertThisInitialized(i), i.destroyCbs = [], i.componentFactoryResolver = new Wa(_assertThisInitialized(i));
                var o = Ct(e), a = e[je] || null;
                return a && ns(a), i._bootstrapComponents = Nn(o.bootstrap), i._r3Injector = Ki(e, r, [{
                    provide: Xe,
                    useValue: _assertThisInitialized(i)
                }, {
                    provide: ya,
                    useValue: i.componentFactoryResolver
                }], Ce(e)), i._r3Injector._resolveInjectorDefTypes(), i.instance = i.get(e), i
            }

            return _createClass(n, [{
                key: "get", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : io.THROW_IF_NOT_FOUND,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ue.Default;
                    return e === io || e === Xe || e === Le ? this : this._r3Injector.get(e, t, n)
                }
            }, {
                key: "destroy", value: function () {
                    var e = this._r3Injector;
                    !e.destroyed && e.destroy(), this.destroyCbs.forEach((function (e) {
                        return e()
                    })), this.destroyCbs = null
                }
            }, {
                key: "onDestroy", value: function (e) {
                    this.destroyCbs.push(e)
                }
            }]), n
        }(Xe), os = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this)).moduleType = e, null !== Ct(e) && function e(t) {
                    if (null !== t.\u0275mod.id) {
                        var n = t.\u0275mod.id;
                        (function (e, t, n) {
                            if (t && t !== n) throw new Error("Duplicate module registered for ".concat(e, " - ").concat(Ce(t), " vs ").concat(Ce(t.name)))
                        })(n, rs.get(n), t), rs.set(n, t)
                    }
                    var r = t.\u0275mod.imports;
                    r instanceof Function && (r = r()), r && r.forEach((function (t) {
                        return e(t)
                    }))
                }(e), r
            }

            return _createClass(n, [{
                key: "create", value: function (e) {
                    return new is(this.moduleType, e)
                }
            }]), n
        }(et);

        function as(e, t) {
            var n = e[t];
            return n === _r ? void 0 : n
        }

        function ss(e, t) {
            var n, r = Wt(), i = e + 20;
            r.firstCreatePass ? (n = function (e, t) {
                if (t) for (var n = t.length - 1; n >= 0; n--) {
                    var r = t[n];
                    if (e === r.name) return r
                }
                throw new Error("The pipe '".concat(e, "' could not be found!"))
            }(t, r.pipeRegistry), r.data[i] = n, n.onDestroy && (r.destroyHooks || (r.destroyHooks = [])).push(i, n.onDestroy)) : n = r.data[i];
            var o = n.factory || (n.factory = kt(n.type)), a = Ze(bo), s = Fn(!1), u = o();
            return Fn(s), Ze(a), function (e, t, n, r) {
                var i = n + 20;
                i >= e.data.length && (e.data[i] = null, e.blueprint[i] = null), t[i] = r
            }(r, qt(), e, u), u
        }

        function us(e, t, n, r) {
            var i = qt(), o = Nt(i, e);
            return cs(i, ls(i, e) ? function (e, t, n, r, i, o, a) {
                var s = t + n;
                return _o(e, s, i, o) ? yo(e, s + 2, a ? r.call(a, i, o) : r(i, o)) : as(e, s + 2)
            }(i, Xt(), t, o.transform, n, r, o) : o.transform(n, r))
        }

        function ls(e, t) {
            return e[1].data[t + 20].pure
        }

        function cs(e, t) {
            return po.isWrapped(t) && (t = po.unwrap(t), e[Bt.lFrame.bindingIndex] = _r), t
        }

        var hs = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return _classCallCheck(this, n), (e = t.call(this)).__isAsync = r, e
            }

            return _createClass(n, [{
                key: "emit", value: function (e) {
                    _get(_getPrototypeOf(n.prototype), "next", this).call(this, e)
                }
            }, {
                key: "subscribe", value: function (e, t, r) {
                    var i, o = function (e) {
                        return null
                    }, a = function () {
                        return null
                    };
                    e && "object" == typeof e ? (i = this.__isAsync ? function (t) {
                        setTimeout((function () {
                            return e.next(t)
                        }))
                    } : function (t) {
                        e.next(t)
                    }, e.error && (o = this.__isAsync ? function (t) {
                        setTimeout((function () {
                            return e.error(t)
                        }))
                    } : function (t) {
                        e.error(t)
                    }), e.complete && (a = this.__isAsync ? function () {
                        setTimeout((function () {
                            return e.complete()
                        }))
                    } : function () {
                        e.complete()
                    })) : (i = this.__isAsync ? function (t) {
                        setTimeout((function () {
                            return e(t)
                        }))
                    } : function (t) {
                        e(t)
                    }, t && (o = this.__isAsync ? function (e) {
                        setTimeout((function () {
                            return t(e)
                        }))
                    } : function (e) {
                        t(e)
                    }), r && (a = this.__isAsync ? function () {
                        setTimeout((function () {
                            return r()
                        }))
                    } : function () {
                        r()
                    }));
                    var s = _get(_getPrototypeOf(n.prototype), "subscribe", this).call(this, i, o, a);
                    return e instanceof f && e.add(s), s
                }
            }]), n
        }(A), fs = new He("Application Initializer"), ds = function () {
            var e = function () {
                function e(t) {
                    var n = this;
                    _classCallCheck(this, e), this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function (e, t) {
                        n.resolve = e, n.reject = t
                    }))
                }

                return _createClass(e, [{
                    key: "runInitializers", value: function () {
                        var e = this;
                        if (!this.initialized) {
                            var t = [], n = function () {
                                e.done = !0, e.resolve()
                            };
                            if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                                var i = this.appInits[r]();
                                Po(i) && t.push(i)
                            }
                            Promise.all(t).then((function () {
                                n()
                            })).catch((function (t) {
                                e.reject(t)
                            })), 0 === t.length && n(), this.initialized = !0
                        }
                    }
                }]), e
            }();
            return e.\u0275fac = function (t) {
                return new (t || e)(Je(fs, 8))
            }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
        }(), ps = new He("AppId"), vs = {
            provide: ps, useFactory: function () {
                return "".concat(gs()).concat(gs()).concat(gs())
            }, deps: []
        };

        function gs() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }

        var ys = new He("Platform Initializer"), ms = new He("Platform ID"), _s = new He("appBootstrapListener"),
            ks = function () {
                var e = function () {
                    function e() {
                        _classCallCheck(this, e)
                    }

                    return _createClass(e, [{
                        key: "log", value: function (e) {
                            console.log(e)
                        }
                    }, {
                        key: "warn", value: function (e) {
                            console.warn(e)
                        }
                    }]), e
                }();
                return e.\u0275fac = function (t) {
                    return new (t || e)
                }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
            }(), Cs = new He("LocaleId"), ws = new He("DefaultCurrencyCode"), bs = function e(t, n) {
                _classCallCheck(this, e), this.ngModuleFactory = t, this.componentFactories = n
            }, Ss = function (e) {
                return new os(e)
            }, xs = Ss, Es = function (e) {
                return Promise.resolve(Ss(e))
            }, Os = function (e) {
                var t = Ss(e), n = Nn(Ct(e).declarations).reduce((function (e, t) {
                    var n = _t(t);
                    return n && e.push(new Ja(n)), e
                }), []);
                return new bs(t, n)
            }, As = Os, Ts = function (e) {
                return Promise.resolve(Os(e))
            }, Is = function () {
                var e = function () {
                    function e() {
                        _classCallCheck(this, e), this.compileModuleSync = xs, this.compileModuleAsync = Es, this.compileModuleAndAllComponentsSync = As, this.compileModuleAndAllComponentsAsync = Ts
                    }

                    return _createClass(e, [{
                        key: "clearCache", value: function () {
                        }
                    }, {
                        key: "clearCacheFor", value: function (e) {
                        }
                    }, {
                        key: "getModuleId", value: function (e) {
                        }
                    }]), e
                }();
                return e.\u0275fac = function (t) {
                    return new (t || e)
                }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
            }(), Ps = new He("compilerOptions"), Rs = Promise.resolve(0);

        function Ms(e) {
            "undefined" == typeof Zone ? Rs.then((function () {
                e && e.apply(null, null)
            })) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }

        var Ds = function () {
            function e(t) {
                var n, r, i = t.enableLongStackTrace, o = void 0 !== i && i, a = t.shouldCoalesceEventChangeDetection,
                    s = void 0 !== a && a;
                if (_classCallCheck(this, e), this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new hs(!1), this.onMicrotaskEmpty = new hs(!1), this.onStable = new hs(!1), this.onError = new hs(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), o && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = s, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
                    var e = Re.requestAnimationFrame, t = Re.cancelAnimationFrame;
                    if ("undefined" != typeof Zone && e && t) {
                        var n = e[Zone.__symbol__("OriginalDelegate")];
                        n && (e = n);
                        var r = t[Zone.__symbol__("OriginalDelegate")];
                        r && (t = r)
                    }
                    return {nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: t}
                }().nativeRequestAnimationFrame, r = !!(n = this).shouldCoalesceEventChangeDetection && n.nativeRequestAnimationFrame && function () {
                    !function (e) {
                        -1 === e.lastRequestAnimationFrameId && (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(Re, (function () {
                            e.lastRequestAnimationFrameId = -1, Fs(e), js(e)
                        })), Fs(e))
                    }(n)
                }, n._inner = n._inner.fork({
                    name: "angular",
                    properties: {isAngularZone: !0, maybeDelayChangeDetection: r},
                    onInvokeTask: function (e, t, i, o, a, s) {
                        try {
                            return Us(n), e.invokeTask(i, o, a, s)
                        } finally {
                            r && "eventTask" === o.type && r(), Hs(n)
                        }
                    },
                    onInvoke: function (e, t, r, i, o, a, s) {
                        try {
                            return Us(n), e.invoke(r, i, o, a, s)
                        } finally {
                            Hs(n)
                        }
                    },
                    onHasTask: function (e, t, r, i) {
                        e.hasTask(r, i), t === r && ("microTask" == i.change ? (n._hasPendingMicrotasks = i.microTask, Fs(n), js(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask))
                    },
                    onHandleError: function (e, t, r, i) {
                        return e.handleError(r, i), n.runOutsideAngular((function () {
                            return n.onError.emit(i)
                        })), !1
                    }
                })
            }

            return _createClass(e, [{
                key: "run", value: function (e, t, n) {
                    return this._inner.run(e, t, n)
                }
            }, {
                key: "runTask", value: function (e, t, n, r) {
                    var i = this._inner, o = i.scheduleEventTask("NgZoneEvent: " + r, e, Ns, Vs, Vs);
                    try {
                        return i.runTask(o, t, n)
                    } finally {
                        i.cancelTask(o)
                    }
                }
            }, {
                key: "runGuarded", value: function (e, t, n) {
                    return this._inner.runGuarded(e, t, n)
                }
            }, {
                key: "runOutsideAngular", value: function (e) {
                    return this._outer.run(e)
                }
            }], [{
                key: "isInAngularZone", value: function () {
                    return !0 === Zone.current.get("isAngularZone")
                }
            }, {
                key: "assertInAngularZone", value: function () {
                    if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
            }, {
                key: "assertNotInAngularZone", value: function () {
                    if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
            }]), e
        }();

        function Vs() {
        }

        var Ns = {};

        function js(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                e._nesting++, e.onMicrotaskEmpty.emit(null)
            } finally {
                if (e._nesting--, !e.hasPendingMicrotasks) try {
                    e.runOutsideAngular((function () {
                        return e.onStable.emit(null)
                    }))
                } finally {
                    e.isStable = !0
                }
            }
        }

        function Fs(e) {
            e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || e.shouldCoalesceEventChangeDetection && -1 !== e.lastRequestAnimationFrameId)
        }

        function Us(e) {
            e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
        }

        function Hs(e) {
            e._nesting--, js(e)
        }

        var Ls, zs = function () {
            function e() {
                _classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new hs, this.onMicrotaskEmpty = new hs, this.onStable = new hs, this.onError = new hs
            }

            return _createClass(e, [{
                key: "run", value: function (e, t, n) {
                    return e.apply(t, n)
                }
            }, {
                key: "runGuarded", value: function (e, t, n) {
                    return e.apply(t, n)
                }
            }, {
                key: "runOutsideAngular", value: function (e) {
                    return e()
                }
            }, {
                key: "runTask", value: function (e, t, n, r) {
                    return e.apply(t, n)
                }
            }]), e
        }(), Bs = function () {
            var e = function () {
                function e(t) {
                    var n = this;
                    _classCallCheck(this, e), this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run((function () {
                        n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                    }))
                }

                return _createClass(e, [{
                    key: "_watchAngularEvents", value: function () {
                        var e = this;
                        this._ngZone.onUnstable.subscribe({
                            next: function () {
                                e._didWork = !0, e._isZoneStable = !1
                            }
                        }), this._ngZone.runOutsideAngular((function () {
                            e._ngZone.onStable.subscribe({
                                next: function () {
                                    Ds.assertNotInAngularZone(), Ms((function () {
                                        e._isZoneStable = !0, e._runCallbacksIfReady()
                                    }))
                                }
                            })
                        }))
                    }
                }, {
                    key: "increasePendingRequestCount", value: function () {
                        return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                    }
                }, {
                    key: "decreasePendingRequestCount", value: function () {
                        if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                        return this._runCallbacksIfReady(), this._pendingCount
                    }
                }, {
                    key: "isStable", value: function () {
                        return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                    }
                }, {
                    key: "_runCallbacksIfReady", value: function () {
                        var e = this;
                        if (this.isStable()) Ms((function () {
                            for (; 0 !== e._callbacks.length;) {
                                var t = e._callbacks.pop();
                                clearTimeout(t.timeoutId), t.doneCb(e._didWork)
                            }
                            e._didWork = !1
                        })); else {
                            var t = this.getPendingTasks();
                            this._callbacks = this._callbacks.filter((function (e) {
                                return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                            })), this._didWork = !0
                        }
                    }
                }, {
                    key: "getPendingTasks", value: function () {
                        return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function (e) {
                            return {source: e.source, creationLocation: e.creationLocation, data: e.data}
                        })) : []
                    }
                }, {
                    key: "addCallback", value: function (e, t, n) {
                        var r = this, i = -1;
                        t && t > 0 && (i = setTimeout((function () {
                            r._callbacks = r._callbacks.filter((function (e) {
                                return e.timeoutId !== i
                            })), e(r._didWork, r.getPendingTasks())
                        }), t)), this._callbacks.push({doneCb: e, timeoutId: i, updateCb: n})
                    }
                }, {
                    key: "whenStable", value: function (e, t, n) {
                        if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                        this.addCallback(e, t, n), this._runCallbacksIfReady()
                    }
                }, {
                    key: "getPendingRequestCount", value: function () {
                        return this._pendingCount
                    }
                }, {
                    key: "findProviders", value: function (e, t, n) {
                        return []
                    }
                }]), e
            }();
            return e.\u0275fac = function (t) {
                return new (t || e)(Je(Ds))
            }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
        }(), Gs = function () {
            var e = function () {
                function e() {
                    _classCallCheck(this, e), this._applications = new Map, qs.addToWindow(this)
                }

                return _createClass(e, [{
                    key: "registerApplication", value: function (e, t) {
                        this._applications.set(e, t)
                    }
                }, {
                    key: "unregisterApplication", value: function (e) {
                        this._applications.delete(e)
                    }
                }, {
                    key: "unregisterAllApplications", value: function () {
                        this._applications.clear()
                    }
                }, {
                    key: "getTestability", value: function (e) {
                        return this._applications.get(e) || null
                    }
                }, {
                    key: "getAllTestabilities", value: function () {
                        return Array.from(this._applications.values())
                    }
                }, {
                    key: "getAllRootElements", value: function () {
                        return Array.from(this._applications.keys())
                    }
                }, {
                    key: "findTestabilityInTree", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return qs.findTestabilityInTree(this, e, t)
                    }
                }]), e
            }();
            return e.\u0275fac = function (t) {
                return new (t || e)
            }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
        }(), qs = new (function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "addToWindow", value: function (e) {
                }
            }, {
                key: "findTestabilityInTree", value: function (e, t, n) {
                    return null
                }
            }]), e
        }()), Ws = function (e, t, n) {
            var r = e.get(Ps, []).concat(t), i = new os(n);
            if (0 === ao.size) return Promise.resolve(i);
            var o, a, s = (o = r.map((function (e) {
                return e.providers
            })), a = [], o.forEach((function (e) {
                return e && a.push.apply(a, _toConsumableArray(e))
            })), a);
            if (0 === s.length) return Promise.resolve(i);
            var u = function () {
                var e = Re.ng;
                if (!e || !e.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                return e.\u0275compilerFacade
            }(), l = io.create({providers: s}).get(u.ResourceLoader);
            return function (e) {
                var t = [], n = new Map;

                function r(e) {
                    var t = n.get(e);
                    if (!t) {
                        var r = function (e) {
                            return Promise.resolve(l.get(e))
                        }(e);
                        n.set(e, t = r.then(uo))
                    }
                    return t
                }

                return ao.forEach((function (e, n) {
                    var i = [];
                    e.templateUrl && i.push(r(e.templateUrl).then((function (t) {
                        e.template = t
                    })));
                    var o = e.styleUrls, a = e.styles || (e.styles = []), s = e.styles.length;
                    o && o.forEach((function (t, n) {
                        a.push(""), i.push(r(t).then((function (r) {
                            a[s + n] = r, o.splice(o.indexOf(t), 1), 0 == o.length && (e.styleUrls = void 0)
                        })))
                    }));
                    var u = Promise.all(i).then((function () {
                        return function (e) {
                            so.delete(e)
                        }(n)
                    }));
                    t.push(u)
                })), ao = new Map, Promise.all(t).then((function () {
                }))
            }().then((function () {
                return i
            }))
        }, Zs = new He("AllowMultipleToken"), Qs = function e(t, n) {
            _classCallCheck(this, e), this.name = t, this.token = n
        };

        function Js(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = "Platform: ".concat(t),
                i = new He(r);
            return function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], o = Ks();
                if (!o || o.injector.get(Zs, !1)) if (e) e(n.concat(t).concat({provide: i, useValue: !0})); else {
                    var a = n.concat(t).concat({provide: i, useValue: !0}, {provide: Gi, useValue: "platform"});
                    !function (e) {
                        if (Ls && !Ls.destroyed && !Ls.injector.get(Zs, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                        Ls = e.get($s);
                        var t = e.get(ys, null);
                        t && t.forEach((function (e) {
                            return e()
                        }))
                    }(io.create({providers: a, name: r}))
                }
                return function (e) {
                    var t = Ks();
                    if (!t) throw new Error("No platform exists!");
                    if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return t
                }(i)
            }
        }

        function Ks() {
            return Ls && !Ls.destroyed ? Ls : null
        }

        var $s = function () {
            var e = function () {
                function e(t) {
                    _classCallCheck(this, e), this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                }

                return _createClass(e, [{
                    key: "bootstrapModuleFactory", value: function (e, t) {
                        var n, r, i = this,
                            o = (n = t ? t.ngZone : void 0, r = t && t.ngZoneEventCoalescing || !1, "noop" === n ? new zs : ("zone.js" === n ? void 0 : n) || new Ds({
                                enableLongStackTrace: or(),
                                shouldCoalesceEventChangeDetection: r
                            })), a = [{provide: Ds, useValue: o}];
                        return o.run((function () {
                            var t = io.create({providers: a, parent: i.injector, name: e.moduleType.name}),
                                n = e.create(t), r = n.injector.get(nr, null);
                            if (!r) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return n.onDestroy((function () {
                                return tu(i._modules, n)
                            })), o.runOutsideAngular((function () {
                                return o.onError.subscribe({
                                    next: function (e) {
                                        r.handleError(e)
                                    }
                                })
                            })), function (e, t, r) {
                                try {
                                    var o = ((a = n.injector.get(ds)).runInitializers(), a.donePromise.then((function () {
                                        return ns(n.injector.get(Cs, "en-US") || "en-US"), i._moduleDoBootstrap(n), n
                                    })));
                                    return Po(o) ? o.catch((function (n) {
                                        throw t.runOutsideAngular((function () {
                                            return e.handleError(n)
                                        })), n
                                    })) : o
                                } catch (s) {
                                    throw t.runOutsideAngular((function () {
                                        return e.handleError(s)
                                    })), s
                                }
                                var a
                            }(r, o)
                        }))
                    }
                }, {
                    key: "bootstrapModule", value: function (e) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = Ys({}, n);
                        return Ws(this.injector, r, e).then((function (e) {
                            return t.bootstrapModuleFactory(e, r)
                        }))
                    }
                }, {
                    key: "_moduleDoBootstrap", value: function (e) {
                        var t = e.injector.get(eu);
                        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((function (e) {
                            return t.bootstrap(e)
                        })); else {
                            if (!e.instance.ngDoBootstrap) throw new Error("The module ".concat(Ce(e.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ') + "Please define one of these.");
                            e.instance.ngDoBootstrap(t)
                        }
                        this._modules.push(e)
                    }
                }, {
                    key: "onDestroy", value: function (e) {
                        this._destroyListeners.push(e)
                    }
                }, {
                    key: "destroy", value: function () {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach((function (e) {
                            return e.destroy()
                        })), this._destroyListeners.forEach((function (e) {
                            return e()
                        })), this._destroyed = !0
                    }
                }, {
                    key: "injector", get: function () {
                        return this._injector
                    }
                }, {
                    key: "destroyed", get: function () {
                        return this._destroyed
                    }
                }]), e
            }();
            return e.\u0275fac = function (t) {
                return new (t || e)(Je(io))
            }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
        }();

        function Ys(e, t) {
            return Array.isArray(t) ? t.reduce(Ys, e) : Object.assign(Object.assign({}, e), t)
        }

        var Xs, eu = ((Xs = function () {
            function e(t, n, r, i, o, a) {
                var s = this;
                _classCallCheck(this, e), this._zone = t, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = o, this._initStatus = a, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = or(), this._zone.onMicrotaskEmpty.subscribe({
                    next: function () {
                        s._zone.run((function () {
                            s.tick()
                        }))
                    }
                });
                var u = new w((function (e) {
                    s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular((function () {
                        e.next(s._stable), e.complete()
                    }))
                })), l = new w((function (e) {
                    var t;
                    s._zone.runOutsideAngular((function () {
                        t = s._zone.onStable.subscribe((function () {
                            Ds.assertNotInAngularZone(), Ms((function () {
                                s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, e.next(!0))
                            }))
                        }))
                    }));
                    var n = s._zone.onUnstable.subscribe((function () {
                        Ds.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular((function () {
                            e.next(!1)
                        })))
                    }));
                    return function () {
                        t.unsubscribe(), n.unsubscribe()
                    }
                }));
                this.isStable = function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = Number.POSITIVE_INFINITY, i = null, o = t[t.length - 1];
                    return I(o) ? (i = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof o && (r = t.pop()), null === i && 1 === t.length && t[0] instanceof w ? t[0] : Z(r)(Q(t, i))
                }(u, l.pipe((function (e) {
                    return J()((t = te, function (e) {
                        var n;
                        n = "function" == typeof t ? t : function () {
                            return t
                        };
                        var r = Object.create(e, X);
                        return r.source = e, r.subjectFactory = n, r
                    })(e));
                    var t
                })))
            }

            return _createClass(e, [{
                key: "bootstrap", value: function (e, t) {
                    var n, r = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    n = e instanceof va ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                    var i = n.isBoundToModule ? void 0 : this._injector.get(Xe),
                        o = n.create(io.NULL, [], t || n.selector, i);
                    o.onDestroy((function () {
                        r._unloadComponent(o)
                    }));
                    var a = o.injector.get(Bs, null);
                    return a && o.injector.get(Gs).registerApplication(o.location.nativeElement, a), this._loadComponent(o), or() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), o
                }
            }, {
                key: "tick", value: function () {
                    var e = this;
                    if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                    try {
                        this._runningTick = !0;
                        var t, n = _createForOfIteratorHelper(this._views);
                        try {
                            for (n.s(); !(t = n.n()).done;) t.value.detectChanges()
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                        if (this._enforceNoNewChanges) {
                            var r, i = _createForOfIteratorHelper(this._views);
                            try {
                                for (i.s(); !(r = i.n()).done;) r.value.checkNoChanges()
                            } catch (o) {
                                i.e(o)
                            } finally {
                                i.f()
                            }
                        }
                    } catch (a) {
                        this._zone.runOutsideAngular((function () {
                            return e._exceptionHandler.handleError(a)
                        }))
                    } finally {
                        this._runningTick = !1
                    }
                }
            }, {
                key: "attachView", value: function (e) {
                    var t = e;
                    this._views.push(t), t.attachToAppRef(this)
                }
            }, {
                key: "detachView", value: function (e) {
                    var t = e;
                    tu(this._views, t), t.detachFromAppRef()
                }
            }, {
                key: "_loadComponent", value: function (e) {
                    this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(_s, []).concat(this._bootstrapListeners).forEach((function (t) {
                        return t(e)
                    }))
                }
            }, {
                key: "_unloadComponent", value: function (e) {
                    this.detachView(e.hostView), tu(this.components, e)
                }
            }, {
                key: "ngOnDestroy", value: function () {
                    this._views.slice().forEach((function (e) {
                        return e.destroy()
                    }))
                }
            }, {
                key: "viewCount", get: function () {
                    return this._views.length
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || Xs)(Je(Ds), Je(ks), Je(io), Je(nr), Je(ya), Je(ds))
        }, Xs.\u0275prov = he({token: Xs, factory: Xs.\u0275fac}), Xs);

        function tu(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }

        var nu = function e() {
            _classCallCheck(this, e)
        }, ru = function e() {
            _classCallCheck(this, e)
        }, iu = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"}, ou = function () {
            var e = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this._compiler = t, this._config = n || iu
                }

                return _createClass(e, [{
                    key: "load", value: function (e) {
                        return this.loadAndCompile(e)
                    }
                }, {
                    key: "loadAndCompile", value: function (e) {
                        var t = this, r = _slicedToArray(e.split("#"), 2), i = r[0], o = r[1];
                        return void 0 === o && (o = "default"), n("zn8P")(i).then((function (e) {
                            return e[o]
                        })).then((function (e) {
                            return au(e, i, o)
                        })).then((function (e) {
                            return t._compiler.compileModuleAsync(e)
                        }))
                    }
                }, {
                    key: "loadFactory", value: function (e) {
                        var t = _slicedToArray(e.split("#"), 2), r = t[0], i = t[1], o = "NgFactory";
                        return void 0 === i && (i = "default", o = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function (e) {
                            return e[i + o]
                        })).then((function (e) {
                            return au(e, r, i)
                        }))
                    }
                }]), e
            }();
            return e.\u0275fac = function (t) {
                return new (t || e)(Je(Is), Je(ru, 8))
            }, e.\u0275prov = he({token: e, factory: e.\u0275fac}), e
        }();

        function au(e, t, n) {
            if (!e) throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'"));
            return e
        }

        var su = Js(null, "core", [{provide: ms, useValue: "unknown"}, {provide: $s, deps: [io]}, {
            provide: Gs,
            deps: []
        }, {provide: ks, deps: []}]), uu = [{provide: eu, useClass: eu, deps: [Ds, ks, io, nr, ya, ds]}, {
            provide: Qa,
            deps: [Ds],
            useFactory: function (e) {
                var t = [];
                return e.onStable.subscribe((function () {
                    for (; t.length;) t.pop()()
                })), function (e) {
                    t.push(e)
                }
            }
        }, {provide: ds, useClass: ds, deps: [[new oe, fs]]}, {provide: Is, useClass: Is, deps: []}, vs, {
            provide: Na,
            useFactory: function () {
                return Ua
            },
            deps: []
        }, {
            provide: ja, useFactory: function () {
                return Ha
            }, deps: []
        }, {
            provide: Cs, useFactory: function (e) {
                return ns(e = e || "undefined" != typeof $localize && $localize.locale || "en-US"), e
            }, deps: [[new ie(Cs), new oe, new se]]
        }, {provide: ws, useValue: "USD"}], lu = function () {
            var e = function e(t) {
                _classCallCheck(this, e)
            };
            return e.\u0275mod = vt({type: e}), e.\u0275inj = fe({
                factory: function (t) {
                    return new (t || e)(Je(eu))
                }, providers: uu
            }), e
        }(), cu = null;

        function hu() {
            return cu
        }

        var fu, du = new He("DocumentToken"), pu = ((fu = function e() {
            _classCallCheck(this, e)
        }).\u0275fac = function (e) {
            return new (e || fu)
        }, fu.\u0275prov = he({factory: vu, token: fu, providedIn: "platform"}), fu);

        function vu() {
            return Je(mu)
        }

        var gu, yu = new He("Location Initialized"), mu = ((gu = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this))._doc = e, r._init(), r
            }

            return _createClass(n, [{
                key: "_init", value: function () {
                    this.location = hu().getLocation(), this._history = hu().getHistory()
                }
            }, {
                key: "getBaseHrefFromDOM", value: function () {
                    return hu().getBaseHref(this._doc)
                }
            }, {
                key: "onPopState", value: function (e) {
                    hu().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1)
                }
            }, {
                key: "onHashChange", value: function (e) {
                    hu().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1)
                }
            }, {
                key: "pushState", value: function (e, t, n) {
                    _u() ? this._history.pushState(e, t, n) : this.location.hash = n
                }
            }, {
                key: "replaceState", value: function (e, t, n) {
                    _u() ? this._history.replaceState(e, t, n) : this.location.hash = n
                }
            }, {
                key: "forward", value: function () {
                    this._history.forward()
                }
            }, {
                key: "back", value: function () {
                    this._history.back()
                }
            }, {
                key: "getState", value: function () {
                    return this._history.state
                }
            }, {
                key: "href", get: function () {
                    return this.location.href
                }
            }, {
                key: "protocol", get: function () {
                    return this.location.protocol
                }
            }, {
                key: "hostname", get: function () {
                    return this.location.hostname
                }
            }, {
                key: "port", get: function () {
                    return this.location.port
                }
            }, {
                key: "pathname", get: function () {
                    return this.location.pathname
                }, set: function (e) {
                    this.location.pathname = e
                }
            }, {
                key: "search", get: function () {
                    return this.location.search
                }
            }, {
                key: "hash", get: function () {
                    return this.location.hash
                }
            }]), n
        }(pu)).\u0275fac = function (e) {
            return new (e || gu)(Je(du))
        }, gu.\u0275prov = he({factory: ku, token: gu, providedIn: "platform"}), gu);

        function _u() {
            return !!window.history.pushState
        }

        function ku() {
            return new mu(Je(du))
        }

        function Cu(e, t) {
            if (0 == e.length) return t;
            if (0 == t.length) return e;
            var n = 0;
            return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        }

        function wu(e) {
            var t = e.match(/#|\?|$/), n = t && t.index || e.length;
            return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
        }

        function bu(e) {
            return e && "?" !== e[0] ? "?" + e : e
        }

        var Su, xu = ((Su = function e() {
            _classCallCheck(this, e)
        }).\u0275fac = function (e) {
            return new (e || Su)
        }, Su.\u0275prov = he({factory: Eu, token: Su, providedIn: "root"}), Su);

        function Eu(e) {
            var t = Je(du).location;
            return new Pu(Je(pu), t && t.origin || "")
        }

        var Ou, Au, Tu, Iu = new He("appBaseHref"), Pu = ((Tu = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                if (_classCallCheck(this, n), (i = t.call(this))._platformLocation = e, null == r && (r = i._platformLocation.getBaseHrefFromDOM()), null == r) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                return i._baseHref = r, _possibleConstructorReturn(i)
            }

            return _createClass(n, [{
                key: "onPopState", value: function (e) {
                    this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                }
            }, {
                key: "getBaseHref", value: function () {
                    return this._baseHref
                }
            }, {
                key: "prepareExternalUrl", value: function (e) {
                    return Cu(this._baseHref, e)
                }
            }, {
                key: "path", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this._platformLocation.pathname + bu(this._platformLocation.search),
                        n = this._platformLocation.hash;
                    return n && e ? "".concat(t).concat(n) : t
                }
            }, {
                key: "pushState", value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + bu(r));
                    this._platformLocation.pushState(e, t, i)
                }
            }, {
                key: "replaceState", value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + bu(r));
                    this._platformLocation.replaceState(e, t, i)
                }
            }, {
                key: "forward", value: function () {
                    this._platformLocation.forward()
                }
            }, {
                key: "back", value: function () {
                    this._platformLocation.back()
                }
            }]), n
        }(xu)).\u0275fac = function (e) {
            return new (e || Tu)(Je(pu), Je(Iu, 8))
        }, Tu.\u0275prov = he({token: Tu, factory: Tu.\u0275fac}), Tu), Ru = ((Au = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this))._platformLocation = e, i._baseHref = "", null != r && (i._baseHref = r), i
            }

            return _createClass(n, [{
                key: "onPopState", value: function (e) {
                    this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                }
            }, {
                key: "getBaseHref", value: function () {
                    return this._baseHref
                }
            }, {
                key: "path", value: function () {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    var e = this._platformLocation.hash;
                    return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                }
            }, {
                key: "prepareExternalUrl", value: function (e) {
                    var t = Cu(this._baseHref, e);
                    return t.length > 0 ? "#" + t : t
                }
            }, {
                key: "pushState", value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + bu(r));
                    0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(e, t, i)
                }
            }, {
                key: "replaceState", value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + bu(r));
                    0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, i)
                }
            }, {
                key: "forward", value: function () {
                    this._platformLocation.forward()
                }
            }, {
                key: "back", value: function () {
                    this._platformLocation.back()
                }
            }]), n
        }(xu)).\u0275fac = function (e) {
            return new (e || Au)(Je(pu), Je(Iu, 8))
        }, Au.\u0275prov = he({token: Au, factory: Au.\u0275fac}), Au), Mu = ((Ou = function () {
            function e(t, n) {
                var r = this;
                _classCallCheck(this, e), this._subject = new hs, this._urlChangeListeners = [], this._platformStrategy = t;
                var i = this._platformStrategy.getBaseHref();
                this._platformLocation = n, this._baseHref = wu(Vu(i)), this._platformStrategy.onPopState((function (e) {
                    r._subject.emit({url: r.path(!0), pop: !0, state: e.state, type: e.type})
                }))
            }

            return _createClass(e, [{
                key: "path", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this.normalize(this._platformStrategy.path(e))
                }
            }, {
                key: "getState", value: function () {
                    return this._platformLocation.getState()
                }
            }, {
                key: "isCurrentPathEqualTo", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return this.path() == this.normalize(e + bu(t))
                }
            }, {
                key: "normalize", value: function (t) {
                    return e.stripTrailingSlash(function (e, t) {
                        return e && t.startsWith(e) ? t.substring(e.length) : t
                    }(this._baseHref, Vu(t)))
                }
            }, {
                key: "prepareExternalUrl", value: function (e) {
                    return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e)
                }
            }, {
                key: "go", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._platformStrategy.pushState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + bu(t)), n)
                }
            }, {
                key: "replaceState", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._platformStrategy.replaceState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + bu(t)), n)
                }
            }, {
                key: "forward", value: function () {
                    this._platformStrategy.forward()
                }
            }, {
                key: "back", value: function () {
                    this._platformStrategy.back()
                }
            }, {
                key: "onUrlChange", value: function (e) {
                    var t = this;
                    this._urlChangeListeners.push(e), this.subscribe((function (e) {
                        t._notifyUrlChangeListeners(e.url, e.state)
                    }))
                }
            }, {
                key: "_notifyUrlChangeListeners", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    this._urlChangeListeners.forEach((function (n) {
                        return n(e, t)
                    }))
                }
            }, {
                key: "subscribe", value: function (e, t, n) {
                    return this._subject.subscribe({next: e, error: t, complete: n})
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || Ou)(Je(xu), Je(pu))
        }, Ou.normalizeQueryParams = bu, Ou.joinWithSlash = Cu, Ou.stripTrailingSlash = wu, Ou.\u0275prov = he({
            factory: Du,
            token: Ou,
            providedIn: "root"
        }), Ou);

        function Du() {
            return new Mu(Je(xu), Je(pu))
        }

        function Vu(e) {
            return e.replace(/\/index.html$/, "")
        }

        var Nu, ju = function () {
            var e = {Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5};
            return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e
        }(), Fu = function e() {
            _classCallCheck(this, e)
        }, Uu = ((Nu = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this)).locale = e, r
            }

            return _createClass(n, [{
                key: "getPluralCategory", value: function (e, t) {
                    switch (function (e) {
                        return function (e) {
                            var t = function (e) {
                                return e.toLowerCase().replace(/_/g, "-")
                            }(e), n = es(t);
                            if (n) return n;
                            var r = t.split("-")[0];
                            if (n = es(r)) return n;
                            if ("en" === r) return Ya;
                            throw new Error('Missing locale data for the locale "'.concat(e, '".'))
                        }(e)[ts.PluralCase]
                    }(t || this.locale)(e)) {
                        case ju.Zero:
                            return "zero";
                        case ju.One:
                            return "one";
                        case ju.Two:
                            return "two";
                        case ju.Few:
                            return "few";
                        case ju.Many:
                            return "many";
                        default:
                            return "other"
                    }
                }
            }]), n
        }(Fu)).\u0275fac = function (e) {
            return new (e || Nu)(Je(Cs))
        }, Nu.\u0275prov = he({token: Nu, factory: Nu.\u0275fac}), Nu);

        function Hu(e, t) {
            t = encodeURIComponent(t);
            var n, r = _createForOfIteratorHelper(e.split(";"));
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value, o = i.indexOf("="),
                        a = _slicedToArray(-1 == o ? [i, ""] : [i.slice(0, o), i.slice(o + 1)], 2), s = a[0], u = a[1];
                    if (s.trim() === t) return decodeURIComponent(u)
                }
            } catch (l) {
                r.e(l)
            } finally {
                r.f()
            }
            return null
        }

        var Lu, zu, Bu, Gu = ((Lu = function () {
            function e(t, n, r, i) {
                _classCallCheck(this, e), this._iterableDiffers = t, this._keyValueDiffers = n, this._ngEl = r, this._renderer = i, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
            }

            return _createClass(e, [{
                key: "ngDoCheck", value: function () {
                    if (this._iterableDiffer) {
                        var e = this._iterableDiffer.diff(this._rawClass);
                        e && this._applyIterableChanges(e)
                    } else if (this._keyValueDiffer) {
                        var t = this._keyValueDiffer.diff(this._rawClass);
                        t && this._applyKeyValueChanges(t)
                    }
                }
            }, {
                key: "_applyKeyValueChanges", value: function (e) {
                    var t = this;
                    e.forEachAddedItem((function (e) {
                        return t._toggleClass(e.key, e.currentValue)
                    })), e.forEachChangedItem((function (e) {
                        return t._toggleClass(e.key, e.currentValue)
                    })), e.forEachRemovedItem((function (e) {
                        e.previousValue && t._toggleClass(e.key, !1)
                    }))
                }
            }, {
                key: "_applyIterableChanges", value: function (e) {
                    var t = this;
                    e.forEachAddedItem((function (e) {
                        if ("string" != typeof e.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got ".concat(Ce(e.item)));
                        t._toggleClass(e.item, !0)
                    })), e.forEachRemovedItem((function (e) {
                        return t._toggleClass(e.item, !1)
                    }))
                }
            }, {
                key: "_applyClasses", value: function (e) {
                    var t = this;
                    e && (Array.isArray(e) || e instanceof Set ? e.forEach((function (e) {
                        return t._toggleClass(e, !0)
                    })) : Object.keys(e).forEach((function (n) {
                        return t._toggleClass(n, !!e[n])
                    })))
                }
            }, {
                key: "_removeClasses", value: function (e) {
                    var t = this;
                    e && (Array.isArray(e) || e instanceof Set ? e.forEach((function (e) {
                        return t._toggleClass(e, !1)
                    })) : Object.keys(e).forEach((function (e) {
                        return t._toggleClass(e, !1)
                    })))
                }
            }, {
                key: "_toggleClass", value: function (e, t) {
                    var n = this;
                    (e = e.trim()) && e.split(/\s+/g).forEach((function (e) {
                        t ? n._renderer.addClass(n._ngEl.nativeElement, e) : n._renderer.removeClass(n._ngEl.nativeElement, e)
                    }))
                }
            }, {
                key: "klass", set: function (e) {
                    this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof e ? e.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                }
            }, {
                key: "ngClass", set: function (e) {
                    this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof e ? e.split(/\s+/) : e, this._rawClass && (vo(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || Lu)(bo(Na), bo(ja), bo(ma), bo(wa))
        }, Lu.\u0275dir = yt({
            type: Lu,
            selectors: [["", "ngClass", ""]],
            inputs: {klass: ["class", "klass"], ngClass: "ngClass"}
        }), Lu), qu = function () {
            function e(t, n, r, i) {
                _classCallCheck(this, e), this.$implicit = t, this.ngForOf = n, this.index = r, this.count = i
            }

            return _createClass(e, [{
                key: "first", get: function () {
                    return 0 === this.index
                }
            }, {
                key: "last", get: function () {
                    return this.index === this.count - 1
                }
            }, {
                key: "even", get: function () {
                    return this.index % 2 == 0
                }
            }, {
                key: "odd", get: function () {
                    return !this.even
                }
            }]), e
        }(), Wu = ((zu = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this._viewContainer = t, this._template = n, this._differs = r, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }

            return _createClass(e, [{
                key: "ngDoCheck", value: function () {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        var e = this._ngForOf;
                        if (!this._differ && e) try {
                            this._differ = this._differs.find(e).create(this.ngForTrackBy)
                        } catch (r) {
                            throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'. NgFor only supports binding to Iterables such as Arrays."))
                        }
                    }
                    var t;
                    if (this._differ) {
                        var n = this._differ.diff(this._ngForOf);
                        n && this._applyChanges(n)
                    }
                }
            }, {
                key: "_applyChanges", value: function (e) {
                    var t = this, n = [];
                    e.forEachOperation((function (e, r, i) {
                        if (null == e.previousIndex) {
                            var o = t._viewContainer.createEmbeddedView(t._template, new qu(null, t._ngForOf, -1, -1), null === i ? void 0 : i),
                                a = new Zu(e, o);
                            n.push(a)
                        } else if (null == i) t._viewContainer.remove(null === r ? void 0 : r); else if (null !== r) {
                            var s = t._viewContainer.get(r);
                            t._viewContainer.move(s, i);
                            var u = new Zu(e, s);
                            n.push(u)
                        }
                    }));
                    for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                    for (var i = 0, o = this._viewContainer.length; i < o; i++) {
                        var a = this._viewContainer.get(i);
                        a.context.index = i, a.context.count = o, a.context.ngForOf = this._ngForOf
                    }
                    e.forEachIdentityChange((function (e) {
                        t._viewContainer.get(e.currentIndex).context.$implicit = e.item
                    }))
                }
            }, {
                key: "_perViewChange", value: function (e, t) {
                    e.context.$implicit = t.item
                }
            }, {
                key: "ngForOf", set: function (e) {
                    this._ngForOf = e, this._ngForOfDirty = !0
                }
            }, {
                key: "ngForTrackBy", set: function (e) {
                    or() && null != e && "function" != typeof e && console && console.warn && console.warn("trackBy must be a function, but received ".concat(JSON.stringify(e), ". ") + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = e
                }, get: function () {
                    return this._trackByFn
                }
            }, {
                key: "ngForTemplate", set: function (e) {
                    e && (this._template = e)
                }
            }], [{
                key: "ngTemplateContextGuard", value: function (e, t) {
                    return !0
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || zu)(bo(Ba), bo(La), bo(Na))
        }, zu.\u0275dir = yt({
            type: zu,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate"}
        }), zu), Zu = function e(t, n) {
            _classCallCheck(this, e), this.record = t, this.view = n
        }, Qu = ((Bu = function () {
            function e(t, n) {
                _classCallCheck(this, e), this._viewContainer = t, this._context = new Ju, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = n
            }

            return _createClass(e, [{
                key: "_updateView", value: function () {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                }
            }, {
                key: "ngIf", set: function (e) {
                    this._context.$implicit = this._context.ngIf = e, this._updateView()
                }
            }, {
                key: "ngIfThen", set: function (e) {
                    Ku("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView()
                }
            }, {
                key: "ngIfElse", set: function (e) {
                    Ku("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView()
                }
            }], [{
                key: "ngTemplateContextGuard", value: function (e, t) {
                    return !0
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || Bu)(bo(Ba), bo(La))
        }, Bu.\u0275dir = yt({
            type: Bu,
            selectors: [["", "ngIf", ""]],
            inputs: {ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse"}
        }), Bu), Ju = function e() {
            _classCallCheck(this, e), this.$implicit = null, this.ngIf = null
        };

        function Ku(e, t) {
            if (t && !t.createEmbeddedView) throw new Error("".concat(e, " must be a TemplateRef, but received '").concat(Ce(t), "'."))
        }

        var $u, Yu, Xu, el, tl, nl, rl, il = ((Xu = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (t, n, r) {
                    if (null == t) return t;
                    if (!this.supports(t)) throw function (e, t) {
                        return Error("InvalidPipeArgument: '".concat(t, "' for pipe '").concat(Ce(e), "'"))
                    }(e, t);
                    return t.slice(n, r)
                }
            }, {
                key: "supports", value: function (e) {
                    return "string" == typeof e || Array.isArray(e)
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || Xu)
        }, Xu.\u0275pipe = mt({name: "slice", type: Xu, pure: !1}), Xu), ol = ((Yu = function e() {
            _classCallCheck(this, e)
        }).\u0275mod = vt({type: Yu}), Yu.\u0275inj = fe({
            factory: function (e) {
                return new (e || Yu)
            }, providers: [{provide: Fu, useClass: Uu}]
        }), Yu), al = (($u = function e() {
            _classCallCheck(this, e)
        }).\u0275prov = he({
            token: $u, providedIn: "root", factory: function () {
                return new sl(Je(du), window, Je(nr))
            }
        }), $u), sl = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this.document = t, this.window = n, this.errorHandler = r, this.offset = function () {
                    return [0, 0]
                }
            }

            return _createClass(e, [{
                key: "setOffset", value: function (e) {
                    this.offset = Array.isArray(e) ? function () {
                        return e
                    } : e
                }
            }, {
                key: "getScrollPosition", value: function () {
                    return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                }
            }, {
                key: "scrollToPosition", value: function (e) {
                    this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1])
                }
            }, {
                key: "scrollToAnchor", value: function (e) {
                    if (this.supportScrollRestoration()) {
                        e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                        try {
                            var t = this.document.querySelector("#".concat(e));
                            if (t) return void this.scrollToElement(t);
                            var n = this.document.querySelector("[name='".concat(e, "']"));
                            if (n) return void this.scrollToElement(n)
                        } catch (r) {
                            this.errorHandler.handleError(r)
                        }
                    }
                }
            }, {
                key: "setHistoryScrollRestoration", value: function (e) {
                    if (this.supportScrollRestoration()) {
                        var t = this.window.history;
                        t && t.scrollRestoration && (t.scrollRestoration = e)
                    }
                }
            }, {
                key: "scrollToElement", value: function (e) {
                    var t = e.getBoundingClientRect(), n = t.left + this.window.pageXOffset,
                        r = t.top + this.window.pageYOffset, i = this.offset();
                    this.window.scrollTo(n - i[0], r - i[1])
                }
            }, {
                key: "supportScrollRestoration", value: function () {
                    try {
                        return !!this.window && !!this.window.scrollTo
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }(), ul = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }

            return _createClass(n, [{
                key: "getProperty", value: function (e, t) {
                    return e[t]
                }
            }, {
                key: "log", value: function (e) {
                    window.console && window.console.log && window.console.log(e)
                }
            }, {
                key: "logGroup", value: function (e) {
                    window.console && window.console.group && window.console.group(e)
                }
            }, {
                key: "logGroupEnd", value: function () {
                    window.console && window.console.groupEnd && window.console.groupEnd()
                }
            }, {
                key: "onAndCancel", value: function (e, t, n) {
                    return e.addEventListener(t, n, !1), function () {
                        e.removeEventListener(t, n, !1)
                    }
                }
            }, {
                key: "dispatchEvent", value: function (e, t) {
                    e.dispatchEvent(t)
                }
            }, {
                key: "remove", value: function (e) {
                    return e.parentNode && e.parentNode.removeChild(e), e
                }
            }, {
                key: "getValue", value: function (e) {
                    return e.value
                }
            }, {
                key: "createElement", value: function (e, t) {
                    return (t = t || this.getDefaultDocument()).createElement(e)
                }
            }, {
                key: "createHtmlDocument", value: function () {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
            }, {
                key: "getDefaultDocument", value: function () {
                    return document
                }
            }, {
                key: "isElementNode", value: function (e) {
                    return e.nodeType === Node.ELEMENT_NODE
                }
            }, {
                key: "isShadowRoot", value: function (e) {
                    return e instanceof DocumentFragment
                }
            }, {
                key: "getGlobalEventTarget", value: function (e, t) {
                    return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
                }
            }, {
                key: "getHistory", value: function () {
                    return window.history
                }
            }, {
                key: "getLocation", value: function () {
                    return window.location
                }
            }, {
                key: "getBaseHref", value: function (e) {
                    var t, n = ll || (ll = document.querySelector("base")) ? ll.getAttribute("href") : null;
                    return null == n ? null : (t = n, el || (el = document.createElement("a")), el.setAttribute("href", t), "/" === el.pathname.charAt(0) ? el.pathname : "/" + el.pathname)
                }
            }, {
                key: "resetBaseElement", value: function () {
                    ll = null
                }
            }, {
                key: "getUserAgent", value: function () {
                    return window.navigator.userAgent
                }
            }, {
                key: "performanceNow", value: function () {
                    return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                }
            }, {
                key: "supportsCookies", value: function () {
                    return !0
                }
            }, {
                key: "getCookie", value: function (e) {
                    return Hu(document.cookie, e)
                }
            }], [{
                key: "makeCurrent", value: function () {
                    var e;
                    e = new n, cu || (cu = e)
                }
            }]), n
        }(function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.call(this)
            }

            return _createClass(n, [{
                key: "supportsDOMEvents", value: function () {
                    return !0
                }
            }]), n
        }(function () {
            return function e() {
                _classCallCheck(this, e)
            }
        }())), ll = null, cl = new He("TRANSITION_ID"), hl = [{
            provide: fs, useFactory: function (e, t, n) {
                return function () {
                    n.get(ds).donePromise.then((function () {
                        var n = hu();
                        Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter((function (t) {
                            return t.getAttribute("ng-transition") === e
                        })).forEach((function (e) {
                            return n.remove(e)
                        }))
                    }))
                }
            }, deps: [cl, du, io], multi: !0
        }], fl = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "addToWindow", value: function (e) {
                    Re.getAngularTestability = function (t) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = e.findTestabilityInTree(t, n);
                        if (null == r) throw new Error("Could not find testability for element.");
                        return r
                    }, Re.getAllAngularTestabilities = function () {
                        return e.getAllTestabilities()
                    }, Re.getAllAngularRootElements = function () {
                        return e.getAllRootElements()
                    }, Re.frameworkStabilizers || (Re.frameworkStabilizers = []), Re.frameworkStabilizers.push((function (e) {
                        var t = Re.getAllAngularTestabilities(), n = t.length, r = !1, i = function (t) {
                            r = r || t, 0 == --n && e(r)
                        };
                        t.forEach((function (e) {
                            e.whenStable(i)
                        }))
                    }))
                }
            }, {
                key: "findTestabilityInTree", value: function (e, t, n) {
                    if (null == t) return null;
                    var r = e.getTestability(t);
                    return null != r ? r : n ? hu().isShadowRoot(t) ? this.findTestabilityInTree(e, t.host, !0) : this.findTestabilityInTree(e, t.parentElement, !0) : null
                }
            }], [{
                key: "init", value: function () {
                    var t;
                    t = new e, qs = t
                }
            }]), e
        }(), dl = new He("EventManagerPlugins"), pl = ((tl = function () {
            function e(t, n) {
                var r = this;
                _classCallCheck(this, e), this._zone = n, this._eventNameToPlugin = new Map, t.forEach((function (e) {
                    return e.manager = r
                })), this._plugins = t.slice().reverse()
            }

            return _createClass(e, [{
                key: "addEventListener", value: function (e, t, n) {
                    return this._findPluginFor(t).addEventListener(e, t, n)
                }
            }, {
                key: "addGlobalEventListener", value: function (e, t, n) {
                    return this._findPluginFor(t).addGlobalEventListener(e, t, n)
                }
            }, {
                key: "getZone", value: function () {
                    return this._zone
                }
            }, {
                key: "_findPluginFor", value: function (e) {
                    var t = this._eventNameToPlugin.get(e);
                    if (t) return t;
                    for (var n = this._plugins, r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.supports(e)) return this._eventNameToPlugin.set(e, i), i
                    }
                    throw new Error("No event manager plugin found for event ".concat(e))
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || tl)(Je(dl), Je(Ds))
        }, tl.\u0275prov = he({token: tl, factory: tl.\u0275fac}), tl), vl = function () {
            function e(t) {
                _classCallCheck(this, e), this._doc = t
            }

            return _createClass(e, [{
                key: "addGlobalEventListener", value: function (e, t, n) {
                    var r = hu().getGlobalEventTarget(this._doc, e);
                    if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(t));
                    return this.addEventListener(r, t, n)
                }
            }]), e
        }(), gl = ((rl = function () {
            function e() {
                _classCallCheck(this, e), this._stylesSet = new Set
            }

            return _createClass(e, [{
                key: "addStyles", value: function (e) {
                    var t = this, n = new Set;
                    e.forEach((function (e) {
                        t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e))
                    })), this.onStylesAdded(n)
                }
            }, {
                key: "onStylesAdded", value: function (e) {
                }
            }, {
                key: "getAllStyles", value: function () {
                    return Array.from(this._stylesSet)
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || rl)
        }, rl.\u0275prov = he({token: rl, factory: rl.\u0275fac}), rl), yl = ((nl = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this))._doc = e, r._hostNodes = new Set, r._styleNodes = new Set, r._hostNodes.add(e.head), r
            }

            return _createClass(n, [{
                key: "_addStylesToHost", value: function (e, t) {
                    var n = this;
                    e.forEach((function (e) {
                        var r = n._doc.createElement("style");
                        r.textContent = e, n._styleNodes.add(t.appendChild(r))
                    }))
                }
            }, {
                key: "addHost", value: function (e) {
                    this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
                }
            }, {
                key: "removeHost", value: function (e) {
                    this._hostNodes.delete(e)
                }
            }, {
                key: "onStylesAdded", value: function (e) {
                    var t = this;
                    this._hostNodes.forEach((function (n) {
                        return t._addStylesToHost(e, n)
                    }))
                }
            }, {
                key: "ngOnDestroy", value: function () {
                    this._styleNodes.forEach((function (e) {
                        return hu().remove(e)
                    }))
                }
            }]), n
        }(gl)).\u0275fac = function (e) {
            return new (e || nl)(Je(du))
        }, nl.\u0275prov = he({token: nl, factory: nl.\u0275fac}), nl), ml = {
            svg: "/2000/svg/index.html",
            xhtml: "/1999/xhtml/index.html",
            xlink: "/1999/xlink/index.html",
            xml: "/XML/1998/namespace/index.html",
            xmlns: "/2000/xmlns/index.html"
        }, _l = /%COMP%/g;

        function kl(e, t, n) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                Array.isArray(i) ? kl(e, i, n) : (i = i.replace(_l, e), n.push(i))
            }
            return n
        }

        function Cl(e) {
            return function (t) {
                if ("__ngUnwrap__" === t) return e;
                !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
            }
        }

        var wl, bl, Sl, xl, El = ((wl = function () {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.eventManager = t, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new Ol(t)
                }

                return _createClass(e, [{
                    key: "createRenderer", value: function (e, t) {
                        if (!e || !t) return this.defaultRenderer;
                        switch (t.encapsulation) {
                            case st.Emulated:
                                var n = this.rendererByCompId.get(t.id);
                                return n || (n = new Al(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
                            case st.Native:
                            case st.ShadowDom:
                                return new Tl(this.eventManager, this.sharedStylesHost, e, t);
                            default:
                                if (!this.rendererByCompId.has(t.id)) {
                                    var r = kl(t.id, t.styles, []);
                                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                }, {
                    key: "begin", value: function () {
                    }
                }, {
                    key: "end", value: function () {
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || wl)(Je(pl), Je(yl), Je(ps))
            }, wl.\u0275prov = he({token: wl, factory: wl.\u0275fac}), wl), Ol = function () {
                function e(t) {
                    _classCallCheck(this, e), this.eventManager = t, this.data = Object.create(null)
                }

                return _createClass(e, [{
                    key: "destroy", value: function () {
                    }
                }, {
                    key: "createElement", value: function (e, t) {
                        return t ? document.createElementNS(ml[t] || t, e) : document.createElement(e)
                    }
                }, {
                    key: "createComment", value: function (e) {
                        return document.createComment(e)
                    }
                }, {
                    key: "createText", value: function (e) {
                        return document.createTextNode(e)
                    }
                }, {
                    key: "appendChild", value: function (e, t) {
                        e.appendChild(t)
                    }
                }, {
                    key: "insertBefore", value: function (e, t, n) {
                        e && e.insertBefore(t, n)
                    }
                }, {
                    key: "removeChild", value: function (e, t) {
                        e && e.removeChild(t)
                    }
                }, {
                    key: "selectRootElement", value: function (e, t) {
                        var n = "string" == typeof e ? document.querySelector(e) : e;
                        if (!n) throw new Error('The selector "'.concat(e, '" did not match any elements'));
                        return t || (n.textContent = ""), n
                    }
                }, {
                    key: "parentNode", value: function (e) {
                        return e.parentNode
                    }
                }, {
                    key: "nextSibling", value: function (e) {
                        return e.nextSibling
                    }
                }, {
                    key: "setAttribute", value: function (e, t, n, r) {
                        if (r) {
                            t = r + ":" + t;
                            var i = ml[r];
                            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)
                        } else e.setAttribute(t, n)
                    }
                }, {
                    key: "removeAttribute", value: function (e, t, n) {
                        if (n) {
                            var r = ml[n];
                            r ? e.removeAttributeNS(r, t) : e.removeAttribute("".concat(n, ":").concat(t))
                        } else e.removeAttribute(t)
                    }
                }, {
                    key: "addClass", value: function (e, t) {
                        e.classList.add(t)
                    }
                }, {
                    key: "removeClass", value: function (e, t) {
                        e.classList.remove(t)
                    }
                }, {
                    key: "setStyle", value: function (e, t, n, r) {
                        r & Ca.DashCase ? e.style.setProperty(t, n, r & Ca.Important ? "important" : "") : e.style[t] = n
                    }
                }, {
                    key: "removeStyle", value: function (e, t, n) {
                        n & Ca.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
                    }
                }, {
                    key: "setProperty", value: function (e, t, n) {
                        e[t] = n
                    }
                }, {
                    key: "setValue", value: function (e, t) {
                        e.nodeValue = t
                    }
                }, {
                    key: "listen", value: function (e, t, n) {
                        return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, Cl(n)) : this.eventManager.addEventListener(e, t, Cl(n))
                    }
                }]), e
            }(), Al = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, o) {
                    var a;
                    _classCallCheck(this, n), (a = t.call(this, e)).component = i;
                    var s, u = kl(o + "-" + i.id, i.styles, []);
                    return r.addStyles(u), a.contentAttr = "_ngcontent-%COMP%".replace(_l, o + "-" + i.id), a.hostAttr = (s = o + "-" + i.id, "_nghost-%COMP%".replace(_l, s)), a
                }

                return _createClass(n, [{
                    key: "applyToHost", value: function (e) {
                        _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, e, this.hostAttr, "")
                    }
                }, {
                    key: "createElement", value: function (e, t) {
                        var r = _get(_getPrototypeOf(n.prototype), "createElement", this).call(this, e, t);
                        return _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r
                    }
                }]), n
            }(Ol), Tl = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, o) {
                    var a;
                    _classCallCheck(this, n), (a = t.call(this, e)).sharedStylesHost = r, a.hostEl = i, a.component = o, a.shadowRoot = o.encapsulation === st.ShadowDom ? i.attachShadow({mode: "open"}) : i.createShadowRoot(), a.sharedStylesHost.addHost(a.shadowRoot);
                    for (var s = kl(o.id, o.styles, []), u = 0; u < s.length; u++) {
                        var l = document.createElement("style");
                        l.textContent = s[u], a.shadowRoot.appendChild(l)
                    }
                    return a
                }

                return _createClass(n, [{
                    key: "nodeOrShadowRoot", value: function (e) {
                        return e === this.hostEl ? this.shadowRoot : e
                    }
                }, {
                    key: "destroy", value: function () {
                        this.sharedStylesHost.removeHost(this.shadowRoot)
                    }
                }, {
                    key: "appendChild", value: function (e, t) {
                        return _get(_getPrototypeOf(n.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(e), t)
                    }
                }, {
                    key: "insertBefore", value: function (e, t, r) {
                        return _get(_getPrototypeOf(n.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(e), t, r)
                    }
                }, {
                    key: "removeChild", value: function (e, t) {
                        return _get(_getPrototypeOf(n.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(e), t)
                    }
                }, {
                    key: "parentNode", value: function (e) {
                        return this.nodeOrShadowRoot(_get(_getPrototypeOf(n.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(e)))
                    }
                }]), n
            }(Ol), Il = ((bl = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    return _classCallCheck(this, n), t.call(this, e)
                }

                return _createClass(n, [{
                    key: "supports", value: function (e) {
                        return !0
                    }
                }, {
                    key: "addEventListener", value: function (e, t, n) {
                        var r = this;
                        return e.addEventListener(t, n, !1), function () {
                            return r.removeEventListener(e, t, n)
                        }
                    }
                }, {
                    key: "removeEventListener", value: function (e, t, n) {
                        return e.removeEventListener(t, n)
                    }
                }]), n
            }(vl)).\u0275fac = function (e) {
                return new (e || bl)(Je(du))
            }, bl.\u0275prov = he({token: bl, factory: bl.\u0275fac}), bl), Pl = ["alt", "control", "meta", "shift"], Rl = {
                "\b": "Backspace",
                "\t": "Tab",
                "\x7f": "Delete",
                "\x1b": "Escape",
                Del: "Delete",
                Esc: "Escape",
                Left: "ArrowLeft",
                Right: "ArrowRight",
                Up: "ArrowUp",
                Down: "ArrowDown",
                Menu: "ContextMenu",
                Scroll: "ScrollLock",
                Win: "OS"
            }, Ml = {
                A: "1",
                B: "2",
                C: "3",
                D: "4",
                E: "5",
                F: "6",
                G: "7",
                H: "8",
                I: "9",
                J: "*",
                K: "+",
                M: "-",
                N: ".",
                O: "/",
                "`": "0",
                "\x90": "NumLock"
            }, Dl = {
                alt: function (e) {
                    return e.altKey
                }, control: function (e) {
                    return e.ctrlKey
                }, meta: function (e) {
                    return e.metaKey
                }, shift: function (e) {
                    return e.shiftKey
                }
            }, Vl = ((Sl = function (e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    return _classCallCheck(this, n), t.call(this, e)
                }

                return _createClass(n, [{
                    key: "supports", value: function (e) {
                        return null != n.parseEventName(e)
                    }
                }, {
                    key: "addEventListener", value: function (e, t, r) {
                        var i = n.parseEventName(t), o = n.eventCallback(i.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular((function () {
                            return hu().onAndCancel(e, i.domEventName, o)
                        }))
                    }
                }], [{
                    key: "parseEventName", value: function (e) {
                        var t = e.toLowerCase().split("."), r = t.shift();
                        if (0 === t.length || "keydown" !== r && "keyup" !== r) return null;
                        var i = n._normalizeKey(t.pop()), o = "";
                        if (Pl.forEach((function (e) {
                            var n = t.indexOf(e);
                            n > -1 && (t.splice(n, 1), o += e + ".")
                        })), o += i, 0 != t.length || 0 === i.length) return null;
                        var a = {};
                        return a.domEventName = r, a.fullKey = o, a
                    }
                }, {
                    key: "getEventFullKey", value: function (e) {
                        var t = "", n = function (e) {
                            var t = e.key;
                            if (null == t) {
                                if (null == (t = e.keyIdentifier)) return "Unidentified";
                                t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Ml.hasOwnProperty(t) && (t = Ml[t]))
                            }
                            return Rl[t] || t
                        }(e);
                        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Pl.forEach((function (r) {
                            r != n && (0, Dl[r])(e) && (t += r + ".")
                        })), t += n
                    }
                }, {
                    key: "eventCallback", value: function (e, t, r) {
                        return function (i) {
                            n.getEventFullKey(i) === e && r.runGuarded((function () {
                                return t(i)
                            }))
                        }
                    }
                }, {
                    key: "_normalizeKey", value: function (e) {
                        switch (e) {
                            case"esc":
                                return "escape";
                            default:
                                return e
                        }
                    }
                }]), n
            }(vl)).\u0275fac = function (e) {
                return new (e || Sl)(Je(du))
            }, Sl.\u0275prov = he({token: Sl, factory: Sl.\u0275fac}), Sl),
            Nl = Js(su, "browser", [{provide: ms, useValue: "browser"}, {
                provide: ys, useValue: function () {
                    ul.makeCurrent(), fl.init()
                }, multi: !0
            }, {
                provide: du, useFactory: function () {
                    return function (e) {
                        Tt = e
                    }(document), document
                }, deps: []
            }]), jl = [[], {provide: Gi, useValue: "root"}, {
                provide: nr, useFactory: function () {
                    return new nr
                }, deps: []
            }, {provide: dl, useClass: Il, multi: !0, deps: [du, Ds, ms]}, {
                provide: dl,
                useClass: Vl,
                multi: !0,
                deps: [du]
            }, [], {provide: El, useClass: El, deps: [pl, yl, ps]}, {provide: ka, useExisting: El}, {
                provide: gl,
                useExisting: yl
            }, {provide: yl, useClass: yl, deps: [du]}, {provide: Bs, useClass: Bs, deps: [Ds]}, {
                provide: pl,
                useClass: pl,
                deps: [dl, Ds]
            }, []], Fl = ((xl = function () {
                function e(t) {
                    if (_classCallCheck(this, e), t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }

                return _createClass(e, null, [{
                    key: "withServerTransition", value: function (t) {
                        return {
                            ngModule: e,
                            providers: [{provide: ps, useValue: t.appId}, {provide: cl, useExisting: ps}, hl]
                        }
                    }
                }]), e
            }()).\u0275mod = vt({type: xl}), xl.\u0275inj = fe({
                factory: function (e) {
                    return new (e || xl)(Je(xl, 12))
                }, providers: jl, imports: [ol, lu]
            }), xl);

        function Ul() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t[t.length - 1];
            return I(r) ? (t.pop(), z(t, r)) : Q(t)
        }

        "undefined" != typeof window && window;
        var Hl = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this))._value = e, r
            }

            return _createClass(n, [{
                key: "_subscribe", value: function (e) {
                    var t = _get(_getPrototypeOf(n.prototype), "_subscribe", this).call(this, e);
                    return t && !t.closed && e.next(this._value), t
                }
            }, {
                key: "getValue", value: function () {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new x;
                    return this._value
                }
            }, {
                key: "next", value: function (e) {
                    _get(_getPrototypeOf(n.prototype), "next", this).call(this, this._value = e)
                }
            }, {
                key: "value", get: function () {
                    return this.getValue()
                }
            }]), n
        }(A), Ll = function () {
            function e() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }

            return e.prototype = Object.create(Error.prototype), e
        }(), zl = {}, Bl = function () {
            function e(t) {
                _classCallCheck(this, e), this.resultSelector = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new Gl(e, this.resultSelector))
                }
            }]), e
        }(), Gl = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).resultSelector = r, i.active = 0, i.values = [], i.observables = [], i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    this.values.push(zl), this.observables.push(e)
                }
            }, {
                key: "_complete", value: function () {
                    var e = this.observables, t = e.length;
                    if (0 === t) this.destination.complete(); else {
                        this.active = t, this.toRespond = t;
                        for (var n = 0; n < t; n++) {
                            var r = e[n];
                            this.add(j(this, r, r, n))
                        }
                    }
                }
            }, {
                key: "notifyComplete", value: function (e) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
            }, {
                key: "notifyNext", value: function (e, t, n, r, i) {
                    var o = this.values, a = this.toRespond ? o[n] === zl ? --this.toRespond : this.toRespond : 0;
                    o[n] = t, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
                }
            }, {
                key: "_tryResultSelector", value: function (e) {
                    var t;
                    try {
                        t = this.resultSelector.apply(this, e)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(t)
                }
            }]), n
        }(F), ql = new w((function (e) {
            return e.complete()
        }));

        function Wl(e) {
            return e ? function (e) {
                return new w((function (t) {
                    return e.schedule((function () {
                        return t.complete()
                    }))
                }))
            }(e) : ql
        }

        function Zl(e) {
            return new w((function (t) {
                var n;
                try {
                    n = e()
                } catch (r) {
                    return void t.error(r)
                }
                return (n ? B(n) : Wl()).subscribe(t)
            }))
        }

        function Ql() {
            return Z(1)
        }

        function Jl(e, t) {
            return function (n) {
                return n.lift(new Kl(e, t))
            }
        }

        var Kl = function () {
            function e(t, n) {
                _classCallCheck(this, e), this.predicate = t, this.thisArg = n
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new $l(e, this.predicate, this.thisArg))
                }
            }]), e
        }(), $l = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, e)).predicate = r, o.thisArg = i, o.count = 0, o
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    var t;
                    try {
                        t = this.predicate.call(this.thisArg, e, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    t && this.destination.next(e)
                }
            }]), n
        }(v), Yl = function () {
            function e() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }

            return e.prototype = Object.create(Error.prototype), e
        }();

        function Xl(e) {
            return function (t) {
                return 0 === e ? Wl() : t.lift(new ec(e))
            }
        }

        var ec = function () {
            function e(t) {
                if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new Yl
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new tc(e, this.total))
                }
            }]), e
        }(), tc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).total = r, i.ring = new Array, i.count = 0, i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    var t = this.ring, n = this.total, r = this.count++;
                    t.length < n ? t.push(e) : t[r % n] = e
                }
            }, {
                key: "_complete", value: function () {
                    var e = this.destination, t = this.count;
                    if (t > 0) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                        var o = t++ % n;
                        e.next(r[o])
                    }
                    e.complete()
                }
            }]), n
        }(v);

        function nc() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oc;
            return function (t) {
                return t.lift(new rc(e))
            }
        }

        var rc = function () {
            function e(t) {
                _classCallCheck(this, e), this.errorFactory = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new ic(e, this.errorFactory))
                }
            }]), e
        }(), ic = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).errorFactory = r, i.hasValue = !1, i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    this.hasValue = !0, this.destination.next(e)
                }
            }, {
                key: "_complete", value: function () {
                    if (this.hasValue) return this.destination.complete();
                    var e;
                    try {
                        e = this.errorFactory()
                    } catch (t) {
                        e = t
                    }
                    this.destination.error(e)
                }
            }]), n
        }(v);

        function oc() {
            return new Ll
        }

        function ac() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return function (t) {
                return t.lift(new sc(e))
            }
        }

        var sc = function () {
            function e(t) {
                _classCallCheck(this, e), this.defaultValue = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new uc(e, this.defaultValue))
                }
            }]), e
        }(), uc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).defaultValue = r, i.isEmpty = !0, i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    this.isEmpty = !1, this.destination.next(e)
                }
            }, {
                key: "_complete", value: function () {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }
            }]), n
        }(v);

        function lc(e, t) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(e ? Jl((function (t, n) {
                    return e(t, n, r)
                })) : m, Xl(1), n ? ac(t) : nc((function () {
                    return new Ll
                })))
            }
        }

        function cc(e) {
            return function (t) {
                var n = new hc(e), r = t.lift(n);
                return n.caught = r
            }
        }

        var hc = function () {
            function e(t) {
                _classCallCheck(this, e), this.selector = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new fc(e, this.selector, this.caught))
                }
            }]), e
        }(), fc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, e)).selector = r, o.caught = i, o
            }

            return _createClass(n, [{
                key: "error", value: function (e) {
                    if (!this.isStopped) {
                        var t;
                        try {
                            t = this.selector(e, this.caught)
                        } catch (o) {
                            return void _get(_getPrototypeOf(n.prototype), "error", this).call(this, o)
                        }
                        this._unsubscribeAndRecycle();
                        var r = new P(this, void 0, void 0);
                        this.add(r);
                        var i = j(this, t, void 0, void 0, r);
                        i !== r && this.add(i)
                    }
                }
            }]), n
        }(F);

        function dc(e) {
            return function (t) {
                return 0 === e ? Wl() : t.lift(new pc(e))
            }
        }

        var pc = function () {
            function e(t) {
                if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new Yl
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new vc(e, this.total))
                }
            }]), e
        }(), vc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).total = r, i.count = 0, i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    var t = this.total, n = ++this.count;
                    n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
                }
            }]), n
        }(v);

        function gc(e, t) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(e ? Jl((function (t, n) {
                    return e(t, n, r)
                })) : m, dc(1), n ? ac(t) : nc((function () {
                    return new Ll
                })))
            }
        }

        var yc = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this.predicate = t, this.thisArg = n, this.source = r
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new mc(e, this.predicate, this.thisArg, this.source))
                }
            }]), e
        }(), mc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this, e)).predicate = r, a.thisArg = i, a.source = o, a.index = 0, a.thisArg = i || _assertThisInitialized(a), a
            }

            return _createClass(n, [{
                key: "notifyComplete", value: function (e) {
                    this.destination.next(e), this.destination.complete()
                }
            }, {
                key: "_next", value: function (e) {
                    var t = !1;
                    try {
                        t = this.predicate.call(this.thisArg, e, this.index++, this.source)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    t || this.notifyComplete(!1)
                }
            }, {
                key: "_complete", value: function () {
                    this.notifyComplete(!0)
                }
            }]), n
        }(v);

        function _c(e, t) {
            return "function" == typeof t ? function (n) {
                return n.pipe(_c((function (n, r) {
                    return B(e(n, r)).pipe(U((function (e, i) {
                        return t(n, e, r, i)
                    })))
                })))
            } : function (t) {
                return t.lift(new kc(e))
            }
        }

        var kc = function () {
            function e(t) {
                _classCallCheck(this, e), this.project = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new Cc(e, this.project))
                }
            }]), e
        }(), Cc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).project = r, i.index = 0, i
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    var t, n = this.index++;
                    try {
                        t = this.project(e, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this._innerSub(t, e, n)
                }
            }, {
                key: "_innerSub", value: function (e, t, n) {
                    var r = this.innerSubscription;
                    r && r.unsubscribe();
                    var i = new P(this, t, n), o = this.destination;
                    o.add(i), this.innerSubscription = j(this, e, void 0, void 0, i), this.innerSubscription !== i && o.add(this.innerSubscription)
                }
            }, {
                key: "_complete", value: function () {
                    var e = this.innerSubscription;
                    e && !e.closed || _get(_getPrototypeOf(n.prototype), "_complete", this).call(this), this.unsubscribe()
                }
            }, {
                key: "_unsubscribe", value: function () {
                    this.innerSubscription = null
                }
            }, {
                key: "notifyComplete", value: function (e) {
                    this.destination.remove(e), this.innerSubscription = null, this.isStopped && _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
                }
            }, {
                key: "notifyNext", value: function (e, t, n, r, i) {
                    this.destination.next(t)
                }
            }]), n
        }(F);

        function wc() {
            return Ql()(Ul.apply(void 0, arguments))
        }

        function bc(e, t) {
            var n = !1;
            return arguments.length >= 2 && (n = !0), function (r) {
                return r.lift(new Sc(e, t, n))
            }
        }

        var Sc = function () {
            function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                _classCallCheck(this, e), this.accumulator = t, this.seed = n, this.hasSeed = r
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new xc(e, this.accumulator, this.seed, this.hasSeed))
                }
            }]), e
        }(), xc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this, e)).accumulator = r, a._seed = i, a.hasSeed = o, a.index = 0, a
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    if (this.hasSeed) return this._tryNext(e);
                    this.seed = e, this.destination.next(e)
                }
            }, {
                key: "_tryNext", value: function (e) {
                    var t, n = this.index++;
                    try {
                        t = this.accumulator(this.seed, e, n)
                    } catch (r) {
                        this.destination.error(r)
                    }
                    this.seed = t, this.destination.next(t)
                }
            }, {
                key: "seed", get: function () {
                    return this._seed
                }, set: function (e) {
                    this.hasSeed = !0, this._seed = e
                }
            }]), n
        }(v);

        function Ec(e, t) {
            return G(e, t, 1)
        }

        function Oc() {
        }

        function Ac(e, t, n) {
            return function (r) {
                return r.lift(new Ic(e, t, n))
            }
        }

        var Tc, Ic = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this.nextOrObserver = t, this.error = n, this.complete = r
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new Pc(e, this.nextOrObserver, this.error, this.complete))
                }
            }]), e
        }(), Pc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, i, o, a) {
                var s;
                return _classCallCheck(this, n), (s = t.call(this, e))._tapNext = Oc, s._tapError = Oc, s._tapComplete = Oc, s._tapError = o || Oc, s._tapComplete = a || Oc, r(i) ? (s._context = _assertThisInitialized(s), s._tapNext = i) : i && (s._context = i, s._tapNext = i.next || Oc, s._tapError = i.error || Oc, s._tapComplete = i.complete || Oc), s
            }

            return _createClass(n, [{
                key: "_next", value: function (e) {
                    try {
                        this._tapNext.call(this._context, e)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(e)
                }
            }, {
                key: "_error", value: function (e) {
                    try {
                        this._tapError.call(this._context, e)
                    } catch (e) {
                        return void this.destination.error(e)
                    }
                    this.destination.error(e)
                }
            }, {
                key: "_complete", value: function () {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (e) {
                        return void this.destination.error(e)
                    }
                    return this.destination.complete()
                }
            }]), n
        }(v), Rc = function () {
            function e(t) {
                _classCallCheck(this, e), this.callback = t
            }

            return _createClass(e, [{
                key: "call", value: function (e, t) {
                    return t.subscribe(new Mc(e, this.callback))
                }
            }]), e
        }(), Mc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).add(new f(r)), i
            }

            return n
        }(v), Dc = function e(t, n) {
            _classCallCheck(this, e), this.id = t, this.url = n
        }, Vc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return _classCallCheck(this, n), (i = t.call(this, e, r)).navigationTrigger = o, i.restoredState = a, i
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')")
                }
            }]), n
        }(Dc), Nc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, e, r)).urlAfterRedirects = i, o
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')")
                }
            }]), n
        }(Dc), jc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, e, r)).reason = i, o
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')")
                }
            }]), n
        }(Dc), Fc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, e, r)).error = i, o
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")")
                }
            }]), n
        }(Dc), Uc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                }
            }]), n
        }(Dc), Hc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                }
            }]), n
        }(Dc), Lc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o, a) {
                var s;
                return _classCallCheck(this, n), (s = t.call(this, e, r)).urlAfterRedirects = i, s.state = o, s.shouldActivate = a, s
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")")
                }
            }]), n
        }(Dc), zc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                }
            }]), n
        }(Dc), Bc = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                }
            }]), n
        }(Dc), Gc = function () {
            function e(t) {
                _classCallCheck(this, e), this.route = t
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "RouteConfigLoadStart(path: ".concat(this.route.path, ")")
                }
            }]), e
        }(), qc = function () {
            function e(t) {
                _classCallCheck(this, e), this.route = t
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")")
                }
            }]), e
        }(), Wc = function () {
            function e(t) {
                _classCallCheck(this, e), this.snapshot = t
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                }
            }]), e
        }(), Zc = function () {
            function e(t) {
                _classCallCheck(this, e), this.snapshot = t
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                }
            }]), e
        }(), Qc = function () {
            function e(t) {
                _classCallCheck(this, e), this.snapshot = t
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                }
            }]), e
        }(), Jc = function () {
            function e(t) {
                _classCallCheck(this, e), this.snapshot = t
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                }
            }]), e
        }(), Kc = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this.routerEvent = t, this.position = n, this.anchor = r
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')")
                }
            }]), e
        }(), $c = ((Tc = function e() {
            _classCallCheck(this, e)
        }).\u0275fac = function (e) {
            return new (e || Tc)
        }, Tc.\u0275cmp = ht({
            type: Tc, selectors: [["ng-component"]], decls: 1, vars: 0, template: function (e, t) {
                1 & e && To(0, "router-outlet")
            }, directives: function () {
                return [nd]
            }, encapsulation: 2
        }), Tc), Yc = function () {
            function e(t) {
                _classCallCheck(this, e), this.params = t || {}
            }

            return _createClass(e, [{
                key: "has", value: function (e) {
                    return this.params.hasOwnProperty(e)
                }
            }, {
                key: "get", value: function (e) {
                    if (this.has(e)) {
                        var t = this.params[e];
                        return Array.isArray(t) ? t[0] : t
                    }
                    return null
                }
            }, {
                key: "getAll", value: function (e) {
                    if (this.has(e)) {
                        var t = this.params[e];
                        return Array.isArray(t) ? t : [t]
                    }
                    return []
                }
            }, {
                key: "keys", get: function () {
                    return Object.keys(this.params)
                }
            }]), e
        }();

        function Xc(e) {
            return new Yc(e)
        }

        function eh(e) {
            var t = Error("NavigationCancelingError: " + e);
            return t.ngNavigationCancelingError = !0, t
        }

        function th(e, t, n) {
            var r = n.path.split("/");
            if (r.length > e.length) return null;
            if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
            for (var i = {}, o = 0; o < r.length; o++) {
                var a = r[o], s = e[o];
                if (a.startsWith(":")) i[a.substring(1)] = s; else if (a !== s.path) return null
            }
            return {consumed: e.slice(0, r.length), posParams: i}
        }

        var nh = function e(t, n) {
            _classCallCheck(this, e), this.routes = t, this.module = n
        };

        function rh(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < e.length; n++) {
                var r = e[n];
                ih(r, oh(t, r))
            }
        }

        function ih(e, t) {
            if (!e) throw new Error("\n      Invalid configuration of route '".concat(t, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "));
            if (Array.isArray(e)) throw new Error("Invalid configuration of route '".concat(t, "': Array cannot be specified"));
            if (!e.component && !e.children && !e.loadChildren && e.outlet && "primary" !== e.outlet) throw new Error("Invalid configuration of route '".concat(t, "': a componentless route without children or loadChildren cannot have a named outlet set"));
            if (e.redirectTo && e.children) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and children cannot be used together"));
            if (e.redirectTo && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and loadChildren cannot be used together"));
            if (e.children && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': children and loadChildren cannot be used together"));
            if (e.redirectTo && e.component) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and component cannot be used together"));
            if (e.path && e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': path and matcher cannot be used together"));
            if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "'. One of the following must be provided: component, redirectTo, children or loadChildren"));
            if (void 0 === e.path && void 0 === e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': routes must have either a path or a matcher specified"));
            if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(t, "': path cannot start with a slash"));
            if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(t, '", redirectTo: "').concat(e.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."));
            if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error("Invalid configuration of route '".concat(t, "': pathMatch can only be set to 'prefix' or 'full'"));
            e.children && rh(e.children, t)
        }

        function oh(e, t) {
            return t ? e || t.path ? e && !t.path ? "".concat(e, "/") : !e && t.path ? t.path : "".concat(e, "/").concat(t.path) : "" : e
        }

        function ah(e) {
            var t = e.children && e.children.map(ah),
                n = t ? Object.assign(Object.assign({}, e), {children: t}) : Object.assign({}, e);
            return !n.component && (t || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = $c), n
        }

        function sh(e, t) {
            var n, r = Object.keys(e), i = Object.keys(t);
            if (!r || !i || r.length != i.length) return !1;
            for (var o = 0; o < r.length; o++) if (!uh(e[n = r[o]], t[n])) return !1;
            return !0
        }

        function uh(e, t) {
            return Array.isArray(e) && Array.isArray(t) ? e.length == t.length && e.every((function (e) {
                return t.indexOf(e) > -1
            })) : e === t
        }

        function lh(e) {
            return Array.prototype.concat.apply([], e)
        }

        function ch(e) {
            return e.length > 0 ? e[e.length - 1] : null
        }

        function hh(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
        }

        function fh(e) {
            return Ro(e) ? e : Po(e) ? B(Promise.resolve(e)) : Ul(e)
        }

        function dh(e, t, n) {
            return n ? function (e, t) {
                return sh(e, t)
            }(e.queryParams, t.queryParams) && function e(t, n) {
                if (!yh(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                    if (!t.children[r]) return !1;
                    if (!e(t.children[r], n.children[r])) return !1
                }
                return !0
            }(e.root, t.root) : function (e, t) {
                return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every((function (n) {
                    return uh(e[n], t[n])
                }))
            }(e.queryParams, t.queryParams) && function e(t, n) {
                return function t(n, r, i) {
                    if (n.segments.length > i.length) return !!yh(n.segments.slice(0, i.length), i) && !r.hasChildren();
                    if (n.segments.length === i.length) {
                        if (!yh(n.segments, i)) return !1;
                        for (var o in r.children) {
                            if (!n.children[o]) return !1;
                            if (!e(n.children[o], r.children[o])) return !1
                        }
                        return !0
                    }
                    var a = i.slice(0, n.segments.length), s = i.slice(n.segments.length);
                    return !!yh(n.segments, a) && !!n.children.primary && t(n.children.primary, r, s)
                }(t, n, n.segments)
            }(e.root, t.root)
        }

        var ph = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this.root = t, this.queryParams = n, this.fragment = r
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return Ch.serialize(this)
                }
            }, {
                key: "queryParamMap", get: function () {
                    return this._queryParamMap || (this._queryParamMap = Xc(this.queryParams)), this._queryParamMap
                }
            }]), e
        }(), vh = function () {
            function e(t, n) {
                var r = this;
                _classCallCheck(this, e), this.segments = t, this.children = n, this.parent = null, hh(n, (function (e, t) {
                    return e.parent = r
                }))
            }

            return _createClass(e, [{
                key: "hasChildren", value: function () {
                    return this.numberOfChildren > 0
                }
            }, {
                key: "toString", value: function () {
                    return wh(this)
                }
            }, {
                key: "numberOfChildren", get: function () {
                    return Object.keys(this.children).length
                }
            }]), e
        }(), gh = function () {
            function e(t, n) {
                _classCallCheck(this, e), this.path = t, this.parameters = n
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return Ah(this)
                }
            }, {
                key: "parameterMap", get: function () {
                    return this._parameterMap || (this._parameterMap = Xc(this.parameters)), this._parameterMap
                }
            }]), e
        }();

        function yh(e, t) {
            return e.length === t.length && e.every((function (e, n) {
                return e.path === t[n].path
            }))
        }

        function mh(e, t) {
            var n = [];
            return hh(e.children, (function (e, r) {
                "primary" === r && (n = n.concat(t(e, r)))
            })), hh(e.children, (function (e, r) {
                "primary" !== r && (n = n.concat(t(e, r)))
            })), n
        }

        var _h = function e() {
            _classCallCheck(this, e)
        }, kh = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "parse", value: function (e) {
                    var t = new Mh(e);
                    return new ph(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment())
                }
            }, {
                key: "serialize", value: function (e) {
                    var t, n, r;
                    return "".concat("/".concat(function e(t, n) {
                        if (!t.hasChildren()) return wh(t);
                        if (n) {
                            var r = t.children.primary ? e(t.children.primary, !1) : "", i = [];
                            return hh(t.children, (function (t, n) {
                                "primary" !== n && i.push("".concat(n, ":").concat(e(t, !1)))
                            })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r
                        }
                        var o = mh(t, (function (n, r) {
                            return "primary" === r ? [e(t.children.primary, !1)] : ["".concat(r, ":").concat(e(n, !1))]
                        }));
                        return "".concat(wh(t), "/(").concat(o.join("//"), ")")
                    }(e.root, !0)), (n = e.queryParams, r = Object.keys(n).map((function (e) {
                        var t = n[e];
                        return Array.isArray(t) ? t.map((function (t) {
                            return "".concat(Sh(e), "=").concat(Sh(t))
                        })).join("&") : "".concat(Sh(e), "=").concat(Sh(t))
                    })), r.length ? "?".concat(r.join("&")) : "")).concat("string" == typeof e.fragment ? "#".concat((t = e.fragment, encodeURI(t))) : "")
                }
            }]), e
        }(), Ch = new kh;

        function wh(e) {
            return e.segments.map((function (e) {
                return Ah(e)
            })).join("/")
        }

        function bh(e) {
            return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function Sh(e) {
            return bh(e).replace(/%3B/gi, ";")
        }

        function xh(e) {
            return bh(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }

        function Eh(e) {
            return decodeURIComponent(e)
        }

        function Oh(e) {
            return Eh(e.replace(/\+/g, "%20"))
        }

        function Ah(e) {
            return "".concat(xh(e.path)).concat((t = e.parameters, Object.keys(t).map((function (e) {
                return ";".concat(xh(e), "=").concat(xh(t[e]))
            })).join("")));
            var t
        }

        var Th = /^[^\/()?;=#]+/;

        function Ih(e) {
            var t = e.match(Th);
            return t ? t[0] : ""
        }

        var Ph = /^[^=?&#]+/, Rh = /^[^?&#]+/, Mh = function () {
            function e(t) {
                _classCallCheck(this, e), this.url = t, this.remaining = t
            }

            return _createClass(e, [{
                key: "parseRootSegment", value: function () {
                    return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new vh([], {}) : new vh([], this.parseChildren())
                }
            }, {
                key: "parseQueryParams", value: function () {
                    var e = {};
                    if (this.consumeOptional("?")) do {
                        this.parseQueryParam(e)
                    } while (this.consumeOptional("&"));
                    return e
                }
            }, {
                key: "parseFragment", value: function () {
                    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                }
            }, {
                key: "parseChildren", value: function () {
                    if ("" === this.remaining) return {};
                    this.consumeOptional("/");
                    var e = [];
                    for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
                    var t = {};
                    this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
                    var n = {};
                    return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n.primary = new vh(e, t)), n
                }
            }, {
                key: "parseSegment", value: function () {
                    var e = Ih(this.remaining);
                    if ("" === e && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'."));
                    return this.capture(e), new gh(Eh(e), this.parseMatrixParams())
                }
            }, {
                key: "parseMatrixParams", value: function () {
                    for (var e = {}; this.consumeOptional(";");) this.parseParam(e);
                    return e
                }
            }, {
                key: "parseParam", value: function (e) {
                    var t = Ih(this.remaining);
                    if (t) {
                        this.capture(t);
                        var n = "";
                        if (this.consumeOptional("=")) {
                            var r = Ih(this.remaining);
                            r && (n = r, this.capture(n))
                        }
                        e[Eh(t)] = Eh(n)
                    }
                }
            }, {
                key: "parseQueryParam", value: function (e) {
                    var t = function (e) {
                        var t = e.match(Ph);
                        return t ? t[0] : ""
                    }(this.remaining);
                    if (t) {
                        this.capture(t);
                        var n = "";
                        if (this.consumeOptional("=")) {
                            var r = function (e) {
                                var t = e.match(Rh);
                                return t ? t[0] : ""
                            }(this.remaining);
                            r && (n = r, this.capture(n))
                        }
                        var i = Oh(t), o = Oh(n);
                        if (e.hasOwnProperty(i)) {
                            var a = e[i];
                            Array.isArray(a) || (a = [a], e[i] = a), a.push(o)
                        } else e[i] = o
                    }
                }
            }, {
                key: "parseParens", value: function (e) {
                    var t = {};
                    for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                        var n = Ih(this.remaining), r = this.remaining[n.length];
                        if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'"));
                        var i = void 0;
                        n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : e && (i = "primary");
                        var o = this.parseChildren();
                        t[i] = 1 === Object.keys(o).length ? o.primary : new vh([], o), this.consumeOptional("//")
                    }
                    return t
                }
            }, {
                key: "peekStartsWith", value: function (e) {
                    return this.remaining.startsWith(e)
                }
            }, {
                key: "consumeOptional", value: function (e) {
                    return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0)
                }
            }, {
                key: "capture", value: function (e) {
                    if (!this.consumeOptional(e)) throw new Error('Expected "'.concat(e, '".'))
                }
            }]), e
        }(), Dh = function () {
            function e(t) {
                _classCallCheck(this, e), this._root = t
            }

            return _createClass(e, [{
                key: "parent", value: function (e) {
                    var t = this.pathFromRoot(e);
                    return t.length > 1 ? t[t.length - 2] : null
                }
            }, {
                key: "children", value: function (e) {
                    var t = Vh(e, this._root);
                    return t ? t.children.map((function (e) {
                        return e.value
                    })) : []
                }
            }, {
                key: "firstChild", value: function (e) {
                    var t = Vh(e, this._root);
                    return t && t.children.length > 0 ? t.children[0].value : null
                }
            }, {
                key: "siblings", value: function (e) {
                    var t = Nh(e, this._root);
                    return t.length < 2 ? [] : t[t.length - 2].children.map((function (e) {
                        return e.value
                    })).filter((function (t) {
                        return t !== e
                    }))
                }
            }, {
                key: "pathFromRoot", value: function (e) {
                    return Nh(e, this._root).map((function (e) {
                        return e.value
                    }))
                }
            }, {
                key: "root", get: function () {
                    return this._root.value
                }
            }]), e
        }();

        function Vh(e, t) {
            if (e === t.value) return t;
            var n, r = _createForOfIteratorHelper(t.children);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = Vh(e, n.value);
                    if (i) return i
                }
            } catch (o) {
                r.e(o)
            } finally {
                r.f()
            }
            return null
        }

        function Nh(e, t) {
            if (e === t.value) return [t];
            var n, r = _createForOfIteratorHelper(t.children);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = Nh(e, n.value);
                    if (i.length) return i.unshift(t), i
                }
            } catch (o) {
                r.e(o)
            } finally {
                r.f()
            }
            return []
        }

        var jh = function () {
            function e(t, n) {
                _classCallCheck(this, e), this.value = t, this.children = n
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "TreeNode(".concat(this.value, ")")
                }
            }]), e
        }();

        function Fh(e) {
            var t = {};
            return e && e.children.forEach((function (e) {
                return t[e.value.outlet] = e
            })), t
        }

        var Uh = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).snapshot = r, qh(_assertThisInitialized(i), e), i
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return this.snapshot.toString()
                }
            }]), n
        }(Dh);

        function Hh(e, t) {
            var n = function (e, t) {
                    var n = new Bh([], {}, {}, "", {}, "primary", t, null, e.root, -1, {});
                    return new Gh("", new jh(n, []))
                }(e, t), r = new Hl([new gh("", {})]), i = new Hl({}), o = new Hl({}), a = new Hl({}), s = new Hl(""),
                u = new Lh(r, i, a, s, o, "primary", t, n.root);
            return u.snapshot = n.root, new Uh(new jh(u, []), n)
        }

        var Lh = function () {
            function e(t, n, r, i, o, a, s, u) {
                _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = s, this._futureSnapshot = u
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")")
                }
            }, {
                key: "routeConfig", get: function () {
                    return this._futureSnapshot.routeConfig
                }
            }, {
                key: "root", get: function () {
                    return this._routerState.root
                }
            }, {
                key: "parent", get: function () {
                    return this._routerState.parent(this)
                }
            }, {
                key: "firstChild", get: function () {
                    return this._routerState.firstChild(this)
                }
            }, {
                key: "children", get: function () {
                    return this._routerState.children(this)
                }
            }, {
                key: "pathFromRoot", get: function () {
                    return this._routerState.pathFromRoot(this)
                }
            }, {
                key: "paramMap", get: function () {
                    return this._paramMap || (this._paramMap = this.params.pipe(U((function (e) {
                        return Xc(e)
                    })))), this._paramMap
                }
            }, {
                key: "queryParamMap", get: function () {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(U((function (e) {
                        return Xc(e)
                    })))), this._queryParamMap
                }
            }]), e
        }();

        function zh(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly", n = e.pathFromRoot,
                r = 0;
            if ("always" !== t) for (r = n.length - 1; r >= 1;) {
                var i = n[r], o = n[r - 1];
                if (i.routeConfig && "" === i.routeConfig.path) r--; else {
                    if (o.component) break;
                    r--
                }
            }
            return function (e) {
                return e.reduce((function (e, t) {
                    return {
                        params: Object.assign(Object.assign({}, e.params), t.params),
                        data: Object.assign(Object.assign({}, e.data), t.data),
                        resolve: Object.assign(Object.assign({}, e.resolve), t._resolvedData)
                    }
                }), {params: {}, data: {}, resolve: {}})
            }(n.slice(r))
        }

        var Bh = function () {
            function e(t, n, r, i, o, a, s, u, l, c, h) {
                _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = s, this.routeConfig = u, this._urlSegment = l, this._lastPathIndex = c, this._resolve = h
            }

            return _createClass(e, [{
                key: "toString", value: function () {
                    return "Route(url:'".concat(this.url.map((function (e) {
                        return e.toString()
                    })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')")
                }
            }, {
                key: "root", get: function () {
                    return this._routerState.root
                }
            }, {
                key: "parent", get: function () {
                    return this._routerState.parent(this)
                }
            }, {
                key: "firstChild", get: function () {
                    return this._routerState.firstChild(this)
                }
            }, {
                key: "children", get: function () {
                    return this._routerState.children(this)
                }
            }, {
                key: "pathFromRoot", get: function () {
                    return this._routerState.pathFromRoot(this)
                }
            }, {
                key: "paramMap", get: function () {
                    return this._paramMap || (this._paramMap = Xc(this.params)), this._paramMap
                }
            }, {
                key: "queryParamMap", get: function () {
                    return this._queryParamMap || (this._queryParamMap = Xc(this.queryParams)), this._queryParamMap
                }
            }]), e
        }(), Gh = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, r)).url = e, qh(_assertThisInitialized(i), r), i
            }

            return _createClass(n, [{
                key: "toString", value: function () {
                    return Wh(this._root)
                }
            }]), n
        }(Dh);

        function qh(e, t) {
            t.value._routerState = e, t.children.forEach((function (t) {
                return qh(e, t)
            }))
        }

        function Wh(e) {
            var t = e.children.length > 0 ? " { ".concat(e.children.map(Wh).join(", "), " } ") : "";
            return "".concat(e.value).concat(t)
        }

        function Zh(e) {
            if (e.snapshot) {
                var t = e.snapshot, n = e._futureSnapshot;
                e.snapshot = n, sh(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), sh(t.params, n.params) || e.params.next(n.params), function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; ++n) if (!sh(e[n], t[n])) return !1;
                    return !0
                }(t.url, n.url) || e.url.next(n.url), sh(t.data, n.data) || e.data.next(n.data)
            } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
        }

        function Qh(e, t) {
            var n, r;
            return sh(e.params, t.params) && yh(n = e.url, r = t.url) && n.every((function (e, t) {
                return sh(e.parameters, r[t].parameters)
            })) && !(!e.parent != !t.parent) && (!e.parent || Qh(e.parent, t.parent))
        }

        function Jh(e) {
            return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        }

        function Kh(e, t, n, r, i) {
            var o = {};
            return r && hh(r, (function (e, t) {
                o[t] = Array.isArray(e) ? e.map((function (e) {
                    return "".concat(e)
                })) : "".concat(e)
            })), new ph(n.root === e ? t : function e(t, n, r) {
                var i = {};
                return hh(t.children, (function (t, o) {
                    i[o] = t === n ? r : e(t, n, r)
                })), new vh(t.segments, i)
            }(n.root, e, t), o, i)
        }

        var $h = function () {
            function e(t, n, r) {
                if (_classCallCheck(this, e), this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = r, t && r.length > 0 && Jh(r[0])) throw new Error("Root segment cannot have matrix parameters");
                var i = r.find((function (e) {
                    return "object" == typeof e && null != e && e.outlets
                }));
                if (i && i !== ch(r)) throw new Error("{outlets:{}} has to be the last command")
            }

            return _createClass(e, [{
                key: "toRoot", value: function () {
                    return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                }
            }]), e
        }(), Yh = function e(t, n, r) {
            _classCallCheck(this, e), this.segmentGroup = t, this.processChildren = n, this.index = r
        };

        function Xh(e) {
            return "object" == typeof e && null != e && e.outlets ? e.outlets.primary : "".concat(e)
        }

        function ef(e, t, n) {
            if (e || (e = new vh([], {})), 0 === e.segments.length && e.hasChildren()) return tf(e, t, n);
            var r = function (e, t, n) {
                for (var r = 0, i = t, o = {match: !1, pathIndex: 0, commandIndex: 0}; i < e.segments.length;) {
                    if (r >= n.length) return o;
                    var a = e.segments[i], s = Xh(n[r]), u = r < n.length - 1 ? n[r + 1] : null;
                    if (i > 0 && void 0 === s) break;
                    if (s && u && "object" == typeof u && void 0 === u.outlets) {
                        if (!af(s, u, a)) return o;
                        r += 2
                    } else {
                        if (!af(s, {}, a)) return o;
                        r++
                    }
                    i++
                }
                return {match: !0, pathIndex: i, commandIndex: r}
            }(e, t, n), i = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < e.segments.length) {
                var o = new vh(e.segments.slice(0, r.pathIndex), {});
                return o.children.primary = new vh(e.segments.slice(r.pathIndex), e.children), tf(o, 0, i)
            }
            return r.match && 0 === i.length ? new vh(e.segments, {}) : r.match && !e.hasChildren() ? nf(e, t, n) : r.match ? tf(e, 0, i) : nf(e, t, n)
        }

        function tf(e, t, n) {
            if (0 === n.length) return new vh(e.segments, {});
            var r = function (e) {
                return "object" != typeof e[0] || void 0 === e[0].outlets ? {primary: e} : e[0].outlets
            }(n), i = {};
            return hh(r, (function (n, r) {
                null !== n && (i[r] = ef(e.children[r], t, n))
            })), hh(e.children, (function (e, t) {
                void 0 === r[t] && (i[t] = e)
            })), new vh(e.segments, i)
        }

        function nf(e, t, n) {
            for (var r = e.segments.slice(0, t), i = 0; i < n.length;) {
                if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
                    var o = rf(n[i].outlets);
                    return new vh(r, o)
                }
                if (0 === i && Jh(n[0])) r.push(new gh(e.segments[t].path, n[0])), i++; else {
                    var a = Xh(n[i]), s = i < n.length - 1 ? n[i + 1] : null;
                    a && s && Jh(s) ? (r.push(new gh(a, of(s))), i += 2) : (r.push(new gh(a, {})), i++)
                }
            }
            return new vh(r, {})
        }

        function rf(e) {
            var t = {};
            return hh(e, (function (e, n) {
                null !== e && (t[n] = nf(new vh([], {}), 0, e))
            })), t
        }

        function of(e) {
            var t = {};
            return hh(e, (function (e, n) {
                return t[n] = "".concat(e)
            })), t
        }

        function af(e, t, n) {
            return e == n.path && sh(t, n.parameters)
        }

        var sf = function () {
            function e(t, n, r, i) {
                _classCallCheck(this, e), this.routeReuseStrategy = t, this.futureState = n, this.currState = r, this.forwardEvent = i
            }

            return _createClass(e, [{
                key: "activate", value: function (e) {
                    var t = this.futureState._root, n = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(t, n, e), Zh(this.futureState.root), this.activateChildRoutes(t, n, e)
                }
            }, {
                key: "deactivateChildRoutes", value: function (e, t, n) {
                    var r = this, i = Fh(t);
                    e.children.forEach((function (e) {
                        var t = e.value.outlet;
                        r.deactivateRoutes(e, i[t], n), delete i[t]
                    })), hh(i, (function (e, t) {
                        r.deactivateRouteAndItsChildren(e, n)
                    }))
                }
            }, {
                key: "deactivateRoutes", value: function (e, t, n) {
                    var r = e.value, i = t ? t.value : null;
                    if (r === i) if (r.component) {
                        var o = n.getContext(r.outlet);
                        o && this.deactivateChildRoutes(e, t, o.children)
                    } else this.deactivateChildRoutes(e, t, n); else i && this.deactivateRouteAndItsChildren(t, n)
                }
            }, {
                key: "deactivateRouteAndItsChildren", value: function (e, t) {
                    this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t)
                }
            }, {
                key: "detachAndStoreRouteSubtree", value: function (e, t) {
                    var n = t.getContext(e.value.outlet);
                    if (n && n.outlet) {
                        var r = n.outlet.detach(), i = n.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(e.value.snapshot, {componentRef: r, route: e, contexts: i})
                    }
                }
            }, {
                key: "deactivateRouteAndOutlet", value: function (e, t) {
                    var n = this, r = t.getContext(e.value.outlet);
                    if (r) {
                        var i = Fh(e), o = e.value.component ? r.children : t;
                        hh(i, (function (e, t) {
                            return n.deactivateRouteAndItsChildren(e, o)
                        })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                    }
                }
            }, {
                key: "activateChildRoutes", value: function (e, t, n) {
                    var r = this, i = Fh(t);
                    e.children.forEach((function (e) {
                        r.activateRoutes(e, i[e.value.outlet], n), r.forwardEvent(new Jc(e.value.snapshot))
                    })), e.children.length && this.forwardEvent(new Zc(e.value.snapshot))
                }
            }, {
                key: "activateRoutes", value: function (e, t, n) {
                    var r = e.value, i = t ? t.value : null;
                    if (Zh(r), r === i) if (r.component) {
                        var o = n.getOrCreateContext(r.outlet);
                        this.activateChildRoutes(e, t, o.children)
                    } else this.activateChildRoutes(e, t, n); else if (r.component) {
                        var a = n.getOrCreateContext(r.outlet);
                        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                            var s = this.routeReuseStrategy.retrieve(r.snapshot);
                            this.routeReuseStrategy.store(r.snapshot, null), a.children.onOutletReAttached(s.contexts), a.attachRef = s.componentRef, a.route = s.route.value, a.outlet && a.outlet.attach(s.componentRef, s.route.value), uf(s.route)
                        } else {
                            var u = function (e) {
                                for (var t = e.parent; t; t = t.parent) {
                                    var n = t.routeConfig;
                                    if (n && n._loadedConfig) return n._loadedConfig;
                                    if (n && n.component) return null
                                }
                                return null
                            }(r.snapshot), l = u ? u.module.componentFactoryResolver : null;
                            a.attachRef = null, a.route = r, a.resolver = l, a.outlet && a.outlet.activateWith(r, l), this.activateChildRoutes(e, null, a.children)
                        }
                    } else this.activateChildRoutes(e, null, n)
                }
            }]), e
        }();

        function uf(e) {
            Zh(e.value), e.children.forEach(uf)
        }

        function lf(e) {
            return "function" == typeof e
        }

        function cf(e) {
            return e instanceof ph
        }

        var hf = function e(t) {
            _classCallCheck(this, e), this.segmentGroup = t || null
        }, ff = function e(t) {
            _classCallCheck(this, e), this.urlTree = t
        };

        function df(e) {
            return new w((function (t) {
                return t.error(new hf(e))
            }))
        }

        function pf(e) {
            return new w((function (t) {
                return t.error(new ff(e))
            }))
        }

        function vf(e) {
            return new w((function (t) {
                return t.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(e, "'")))
            }))
        }

        var gf = function () {
            function e(t, n, r, i, o) {
                _classCallCheck(this, e), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(Xe)
            }

            return _createClass(e, [{
                key: "apply", value: function () {
                    var e = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(U((function (t) {
                        return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment)
                    }))).pipe(cc((function (t) {
                        if (t instanceof ff) return e.allowRedirects = !1, e.match(t.urlTree);
                        if (t instanceof hf) throw e.noMatchError(t);
                        throw t
                    })))
                }
            }, {
                key: "match", value: function (e) {
                    var t = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, e.root, "primary").pipe(U((function (n) {
                        return t.createUrlTree(n, e.queryParams, e.fragment)
                    }))).pipe(cc((function (e) {
                        if (e instanceof hf) throw t.noMatchError(e);
                        throw e
                    })))
                }
            }, {
                key: "noMatchError", value: function (e) {
                    return new Error("Cannot match any routes. URL Segment: '".concat(e.segmentGroup, "'"))
                }
            }, {
                key: "createUrlTree", value: function (e, t, n) {
                    var r = e.segments.length > 0 ? new vh([], {primary: e}) : e;
                    return new ph(r, t, n)
                }
            }, {
                key: "expandSegmentGroup", value: function (e, t, n, r) {
                    return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(U((function (e) {
                        return new vh([], e)
                    }))) : this.expandSegment(e, n, t, n.segments, r, !0)
                }
            }, {
                key: "expandChildren", value: function (e, t, n) {
                    var r = this;
                    return function (n, i) {
                        if (0 === Object.keys(n).length) return Ul({});
                        var o = [], a = [], s = {};
                        return hh(n, (function (n, i) {
                            var u, l, c = (u = i, l = n, r.expandSegmentGroup(e, t, l, u)).pipe(U((function (e) {
                                return s[i] = e
                            })));
                            "primary" === i ? o.push(c) : a.push(c)
                        })), Ul.apply(null, o.concat(a)).pipe(Ql(), lc(), U((function () {
                            return s
                        })))
                    }(n.children)
                }
            }, {
                key: "expandSegment", value: function (e, t, n, r, i, o) {
                    var a = this;
                    return Ul.apply(void 0, _toConsumableArray(n)).pipe(U((function (s) {
                        return a.expandSegmentAgainstRoute(e, t, n, s, r, i, o).pipe(cc((function (e) {
                            if (e instanceof hf) return Ul(null);
                            throw e
                        })))
                    })), Ql(), gc((function (e) {
                        return !!e
                    })), cc((function (e, n) {
                        if (e instanceof Ll || "EmptyError" === e.name) {
                            if (a.noLeftoversInUrl(t, r, i)) return Ul(new vh([], {}));
                            throw new hf(t)
                        }
                        throw e
                    })))
                }
            }, {
                key: "noLeftoversInUrl", value: function (e, t, n) {
                    return 0 === t.length && !e.children[n]
                }
            }, {
                key: "expandSegmentAgainstRoute", value: function (e, t, n, r, i, o, a) {
                    return kf(r) !== o ? df(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, i) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) : df(t)
                }
            }, {
                key: "expandSegmentAgainstRouteUsingRedirect", value: function (e, t, n, r, i, o) {
                    return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o)
                }
            }, {
                key: "expandWildCardWithParamsAgainstRouteUsingRedirect", value: function (e, t, n, r) {
                    var i = this, o = this.applyRedirectCommands([], n.redirectTo, {});
                    return n.redirectTo.startsWith("/") ? pf(o) : this.lineralizeSegments(n, o).pipe(G((function (n) {
                        var o = new vh(n, {});
                        return i.expandSegment(e, o, t, n, r, !1)
                    })))
                }
            }, {
                key: "expandRegularSegmentAgainstRouteUsingRedirect", value: function (e, t, n, r, i, o) {
                    var a = this, s = yf(t, r, i), u = s.matched, l = s.consumedSegments, c = s.lastChild,
                        h = s.positionalParamSegments;
                    if (!u) return df(t);
                    var f = this.applyRedirectCommands(l, r.redirectTo, h);
                    return r.redirectTo.startsWith("/") ? pf(f) : this.lineralizeSegments(r, f).pipe(G((function (r) {
                        return a.expandSegment(e, t, n, r.concat(i.slice(c)), o, !1)
                    })))
                }
            }, {
                key: "matchSegmentAgainstRoute", value: function (e, t, n, r) {
                    var i = this;
                    if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(U((function (e) {
                        return n._loadedConfig = e, new vh(r, {})
                    }))) : Ul(new vh(r, {}));
                    var o = yf(t, n, r), a = o.matched, s = o.consumedSegments, u = o.lastChild;
                    if (!a) return df(t);
                    var l = r.slice(u);
                    return this.getChildConfig(e, n, r).pipe(G((function (e) {
                        var n = e.module, r = e.routes, o = function (e, t, n, r) {
                            return n.length > 0 && function (e, t, n) {
                                return n.some((function (n) {
                                    return _f(e, t, n) && "primary" !== kf(n)
                                }))
                            }(e, n, r) ? {
                                segmentGroup: mf(new vh(t, function (e, t) {
                                    var n = {};
                                    n.primary = t;
                                    var r, i = _createForOfIteratorHelper(e);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var o = r.value;
                                            "" === o.path && "primary" !== kf(o) && (n[kf(o)] = new vh([], {}))
                                        }
                                    } catch (a) {
                                        i.e(a)
                                    } finally {
                                        i.f()
                                    }
                                    return n
                                }(r, new vh(n, e.children)))), slicedSegments: []
                            } : 0 === n.length && function (e, t, n) {
                                return n.some((function (n) {
                                    return _f(e, t, n)
                                }))
                            }(e, n, r) ? {
                                segmentGroup: mf(new vh(e.segments, function (e, t, n, r) {
                                    var i, o = {}, a = _createForOfIteratorHelper(n);
                                    try {
                                        for (a.s(); !(i = a.n()).done;) {
                                            var s = i.value;
                                            _f(e, t, s) && !r[kf(s)] && (o[kf(s)] = new vh([], {}))
                                        }
                                    } catch (u) {
                                        a.e(u)
                                    } finally {
                                        a.f()
                                    }
                                    return Object.assign(Object.assign({}, r), o)
                                }(e, n, r, e.children))), slicedSegments: n
                            } : {segmentGroup: e, slicedSegments: n}
                        }(t, s, l, r), a = o.segmentGroup, u = o.slicedSegments;
                        return 0 === u.length && a.hasChildren() ? i.expandChildren(n, r, a).pipe(U((function (e) {
                            return new vh(s, e)
                        }))) : 0 === r.length && 0 === u.length ? Ul(new vh(s, {})) : i.expandSegment(n, a, r, u, "primary", !0).pipe(U((function (e) {
                            return new vh(s.concat(e.segments), e.children)
                        })))
                    })))
                }
            }, {
                key: "getChildConfig", value: function (e, t, n) {
                    var r = this;
                    return t.children ? Ul(new nh(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? Ul(t._loadedConfig) : function (e, t, n) {
                        var r, i = t.canLoad;
                        return i && 0 !== i.length ? B(i).pipe(U((function (r) {
                            var i, o = e.get(r);
                            if (function (e) {
                                return e && lf(e.canLoad)
                            }(o)) i = o.canLoad(t, n); else {
                                if (!lf(o)) throw new Error("Invalid CanLoad guard");
                                i = o(t, n)
                            }
                            return fh(i)
                        }))).pipe(Ql(), (r = function (e) {
                            return !0 === e
                        }, function (e) {
                            return e.lift(new yc(r, void 0, e))
                        })) : Ul(!0)
                    }(e.injector, t, n).pipe(G((function (n) {
                        return n ? r.configLoader.load(e.injector, t).pipe(U((function (e) {
                            return t._loadedConfig = e, e
                        }))) : function (e) {
                            return new w((function (t) {
                                return t.error(eh("Cannot load children because the guard of the route \"path: '".concat(e.path, "'\" returned false")))
                            }))
                        }(t)
                    }))) : Ul(new nh([], e))
                }
            }, {
                key: "lineralizeSegments", value: function (e, t) {
                    for (var n = [], r = t.root; ;) {
                        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Ul(n);
                        if (r.numberOfChildren > 1 || !r.children.primary) return vf(e.redirectTo);
                        r = r.children.primary
                    }
                }
            }, {
                key: "applyRedirectCommands", value: function (e, t, n) {
                    return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n)
                }
            }, {
                key: "applyRedirectCreatreUrlTree", value: function (e, t, n, r) {
                    var i = this.createSegmentGroup(e, t.root, n, r);
                    return new ph(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment)
                }
            }, {
                key: "createQueryParams", value: function (e, t) {
                    var n = {};
                    return hh(e, (function (e, r) {
                        if ("string" == typeof e && e.startsWith(":")) {
                            var i = e.substring(1);
                            n[r] = t[i]
                        } else n[r] = e
                    })), n
                }
            }, {
                key: "createSegmentGroup", value: function (e, t, n, r) {
                    var i = this, o = this.createSegments(e, t.segments, n, r), a = {};
                    return hh(t.children, (function (t, o) {
                        a[o] = i.createSegmentGroup(e, t, n, r)
                    })), new vh(o, a)
                }
            }, {
                key: "createSegments", value: function (e, t, n, r) {
                    var i = this;
                    return t.map((function (t) {
                        return t.path.startsWith(":") ? i.findPosParam(e, t, r) : i.findOrReturn(t, n)
                    }))
                }
            }, {
                key: "findPosParam", value: function (e, t, n) {
                    var r = n[t.path.substring(1)];
                    if (!r) throw new Error("Cannot redirect to '".concat(e, "'. Cannot find '").concat(t.path, "'."));
                    return r
                }
            }, {
                key: "findOrReturn", value: function (e, t) {
                    var n, r = 0, i = _createForOfIteratorHelper(t);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var o = n.value;
                            if (o.path === e.path) return t.splice(r), o;
                            r++
                        }
                    } catch (a) {
                        i.e(a)
                    } finally {
                        i.f()
                    }
                    return e
                }
            }]), e
        }();

        function yf(e, t, n) {
            if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            } : {matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};
            var r = (t.matcher || th)(n, e, t);
            return r ? {
                matched: !0,
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                positionalParamSegments: r.posParams
            } : {matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {}}
        }

        function mf(e) {
            if (1 === e.numberOfChildren && e.children.primary) {
                var t = e.children.primary;
                return new vh(e.segments.concat(t.segments), t.children)
            }
            return e
        }

        function _f(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
        }

        function kf(e) {
            return e.outlet || "primary"
        }

        var Cf = function e(t) {
            _classCallCheck(this, e), this.path = t, this.route = this.path[this.path.length - 1]
        }, wf = function e(t, n) {
            _classCallCheck(this, e), this.component = t, this.route = n
        };

        function bf(e, t, n) {
            var r = function (e) {
                if (!e) return null;
                for (var t = e.parent; t; t = t.parent) {
                    var n = t.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig
                }
                return null
            }(t);
            return (r ? r.module.injector : n).get(e)
        }

        function Sf(e, t, n) {
            var r = Fh(e), i = e.value;
            hh(r, (function (e, r) {
                Sf(e, i.component ? t ? t.children.getContext(r) : null : t, n)
            })), n.canDeactivateChecks.push(new wf(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i))
        }

        var xf = Symbol("INITIAL_VALUE");

        function Ef() {
            return _c((function (e) {
                return (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = null, i = null;
                    return I(t[t.length - 1]) && (i = t.pop()), "function" == typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && u(t[0]) && (t = t[0]), Q(t, i).lift(new Bl(r))
                }).apply(void 0, _toConsumableArray(e.map((function (e) {
                    return e.pipe(dc(1), function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = t[t.length - 1];
                        return I(r) ? (t.pop(), function (e) {
                            return wc(t, e, r)
                        }) : function (e) {
                            return wc(t, e)
                        }
                    }(xf))
                })))).pipe(bc((function (e, t) {
                    var n = !1;
                    return t.reduce((function (e, r, i) {
                        if (e !== xf) return e;
                        if (r === xf && (n = !0), !n) {
                            if (!1 === r) return r;
                            if (i === t.length - 1 || cf(r)) return r
                        }
                        return e
                    }), e)
                }), xf), Jl((function (e) {
                    return e !== xf
                })), U((function (e) {
                    return cf(e) ? e : !0 === e
                })), dc(1))
            }))
        }

        function Of(e, t) {
            return null !== e && t && t(new Qc(e)), Ul(!0)
        }

        function Af(e, t) {
            return null !== e && t && t(new Wc(e)), Ul(!0)
        }

        function Tf(e, t, n) {
            var r = t.routeConfig ? t.routeConfig.canActivate : null;
            return r && 0 !== r.length ? Ul(r.map((function (r) {
                return Zl((function () {
                    var i, o = bf(r, t, n);
                    if (function (e) {
                        return e && lf(e.canActivate)
                    }(o)) i = fh(o.canActivate(t, e)); else {
                        if (!lf(o)) throw new Error("Invalid CanActivate guard");
                        i = fh(o(t, e))
                    }
                    return i.pipe(gc())
                }))
            }))).pipe(Ef()) : Ul(!0)
        }

        function If(e, t, n) {
            var r = t[t.length - 1], i = t.slice(0, t.length - 1).reverse().map((function (e) {
                return function (e) {
                    var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                    return t && 0 !== t.length ? {node: e, guards: t} : null
                }(e)
            })).filter((function (e) {
                return null !== e
            })).map((function (t) {
                return Zl((function () {
                    return Ul(t.guards.map((function (i) {
                        var o, a = bf(i, t.node, n);
                        if (function (e) {
                            return e && lf(e.canActivateChild)
                        }(a)) o = fh(a.canActivateChild(r, e)); else {
                            if (!lf(a)) throw new Error("Invalid CanActivateChild guard");
                            o = fh(a(r, e))
                        }
                        return o.pipe(gc())
                    }))).pipe(Ef())
                }))
            }));
            return Ul(i).pipe(Ef())
        }

        var Pf = function e() {
            _classCallCheck(this, e)
        }, Rf = function () {
            function e(t, n, r, i, o, a) {
                _classCallCheck(this, e), this.rootComponentType = t, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = a
            }

            return _createClass(e, [{
                key: "recognize", value: function () {
                    try {
                        var e = Vf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                            t = this.processSegmentGroup(this.config, e, "primary"),
                            n = new Bh([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
                            r = new jh(n, t), i = new Gh(this.url, r);
                        return this.inheritParamsAndData(i._root), Ul(i)
                    } catch (o) {
                        return new w((function (e) {
                            return e.error(o)
                        }))
                    }
                }
            }, {
                key: "inheritParamsAndData", value: function (e) {
                    var t = this, n = e.value, r = zh(n, this.paramsInheritanceStrategy);
                    n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), e.children.forEach((function (e) {
                        return t.inheritParamsAndData(e)
                    }))
                }
            }, {
                key: "processSegmentGroup", value: function (e, t, n) {
                    return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n)
                }
            }, {
                key: "processChildren", value: function (e, t) {
                    var n, r = this, i = mh(t, (function (t, n) {
                        return r.processSegmentGroup(e, t, n)
                    }));
                    return n = {}, i.forEach((function (e) {
                        var t = n[e.value.outlet];
                        if (t) {
                            var r = t.url.map((function (e) {
                                return e.toString()
                            })).join("/"), i = e.value.url.map((function (e) {
                                return e.toString()
                            })).join("/");
                            throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'."))
                        }
                        n[e.value.outlet] = e.value
                    })), i.sort((function (e, t) {
                        return "primary" === e.value.outlet ? -1 : "primary" === t.value.outlet ? 1 : e.value.outlet.localeCompare(t.value.outlet)
                    })), i
                }
            }, {
                key: "processSegment", value: function (e, t, n, r) {
                    var i, o = _createForOfIteratorHelper(e);
                    try {
                        for (o.s(); !(i = o.n()).done;) {
                            var a = i.value;
                            try {
                                return this.processSegmentAgainstRoute(a, t, n, r)
                            } catch (s) {
                                if (!(s instanceof Pf)) throw s
                            }
                        }
                    } catch (u) {
                        o.e(u)
                    } finally {
                        o.f()
                    }
                    if (this.noLeftoversInUrl(t, n, r)) return [];
                    throw new Pf
                }
            }, {
                key: "noLeftoversInUrl", value: function (e, t, n) {
                    return 0 === t.length && !e.children[n]
                }
            }, {
                key: "processSegmentAgainstRoute", value: function (e, t, n, r) {
                    if (e.redirectTo) throw new Pf;
                    if ((e.outlet || "primary") !== r) throw new Pf;
                    var i, o = [], a = [];
                    if ("**" === e.path) {
                        var s = n.length > 0 ? ch(n).parameters : {};
                        i = new Bh(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Ff(e), r, e.component, e, Mf(t), Df(t) + n.length, Uf(e))
                    } else {
                        var u = function (e, t, n) {
                            if ("" === t.path) {
                                if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Pf;
                                return {consumedSegments: [], lastChild: 0, parameters: {}}
                            }
                            var r = (t.matcher || th)(n, e, t);
                            if (!r) throw new Pf;
                            var i = {};
                            hh(r.posParams, (function (e, t) {
                                i[t] = e.path
                            }));
                            var o = r.consumed.length > 0 ? Object.assign(Object.assign({}, i), r.consumed[r.consumed.length - 1].parameters) : i;
                            return {consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o}
                        }(t, e, n);
                        o = u.consumedSegments, a = n.slice(u.lastChild), i = new Bh(o, u.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Ff(e), r, e.component, e, Mf(t), Df(t) + o.length, Uf(e))
                    }
                    var l = function (e) {
                        return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                    }(e), c = Vf(t, o, a, l, this.relativeLinkResolution), h = c.segmentGroup, f = c.slicedSegments;
                    if (0 === f.length && h.hasChildren()) {
                        var d = this.processChildren(l, h);
                        return [new jh(i, d)]
                    }
                    if (0 === l.length && 0 === f.length) return [new jh(i, [])];
                    var p = this.processSegment(l, h, f, "primary");
                    return [new jh(i, p)]
                }
            }]), e
        }();

        function Mf(e) {
            for (var t = e; t._sourceSegment;) t = t._sourceSegment;
            return t
        }

        function Df(e) {
            for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
            return n - 1
        }

        function Vf(e, t, n, r, i) {
            if (n.length > 0 && function (e, t, n) {
                return n.some((function (n) {
                    return Nf(e, t, n) && "primary" !== jf(n)
                }))
            }(e, n, r)) {
                var o = new vh(t, function (e, t, n, r) {
                    var i = {};
                    i.primary = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
                    var o, a = _createForOfIteratorHelper(n);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value;
                            if ("" === s.path && "primary" !== jf(s)) {
                                var u = new vh([], {});
                                u._sourceSegment = e, u._segmentIndexShift = t.length, i[jf(s)] = u
                            }
                        }
                    } catch (l) {
                        a.e(l)
                    } finally {
                        a.f()
                    }
                    return i
                }(e, t, r, new vh(n, e.children)));
                return o._sourceSegment = e, o._segmentIndexShift = t.length, {segmentGroup: o, slicedSegments: []}
            }
            if (0 === n.length && function (e, t, n) {
                return n.some((function (n) {
                    return Nf(e, t, n)
                }))
            }(e, n, r)) {
                var a = new vh(e.segments, function (e, t, n, r, i, o) {
                    var a, s = {}, u = _createForOfIteratorHelper(r);
                    try {
                        for (u.s(); !(a = u.n()).done;) {
                            var l = a.value;
                            if (Nf(e, n, l) && !i[jf(l)]) {
                                var c = new vh([], {});
                                c._sourceSegment = e, c._segmentIndexShift = "legacy" === o ? e.segments.length : t.length, s[jf(l)] = c
                            }
                        }
                    } catch (h) {
                        u.e(h)
                    } finally {
                        u.f()
                    }
                    return Object.assign(Object.assign({}, i), s)
                }(e, t, n, r, e.children, i));
                return a._sourceSegment = e, a._segmentIndexShift = t.length, {segmentGroup: a, slicedSegments: n}
            }
            var s = new vh(e.segments, e.children);
            return s._sourceSegment = e, s._segmentIndexShift = t.length, {segmentGroup: s, slicedSegments: n}
        }

        function Nf(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
        }

        function jf(e) {
            return e.outlet || "primary"
        }

        function Ff(e) {
            return e.data || {}
        }

        function Uf(e) {
            return e.resolve || {}
        }

        function Hf(e, t, n, r) {
            var i = bf(e, t, r);
            return fh(i.resolve ? i.resolve(t, n) : i(t, n))
        }

        function Lf(e) {
            return function (t) {
                return t.pipe(_c((function (t) {
                    var n = e(t);
                    return n ? B(n).pipe(U((function () {
                        return t
                    }))) : B([t])
                })))
            }
        }

        var zf = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "shouldDetach", value: function (e) {
                    return !1
                }
            }, {
                key: "store", value: function (e, t) {
                }
            }, {
                key: "shouldAttach", value: function (e) {
                    return !1
                }
            }, {
                key: "retrieve", value: function (e) {
                    return null
                }
            }, {
                key: "shouldReuseRoute", value: function (e, t) {
                    return e.routeConfig === t.routeConfig
                }
            }]), e
        }(), Bf = new He("ROUTES"), Gf = function () {
            function e(t, n, r, i) {
                _classCallCheck(this, e), this.loader = t, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i
            }

            return _createClass(e, [{
                key: "load", value: function (e, t) {
                    var n = this;
                    return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(U((function (r) {
                        n.onLoadEndListener && n.onLoadEndListener(t);
                        var i = r.create(e);
                        return new nh(lh(i.injector.get(Bf)).map(ah), i)
                    })))
                }
            }, {
                key: "loadModuleFactory", value: function (e) {
                    var t = this;
                    return "string" == typeof e ? B(this.loader.load(e)) : fh(e()).pipe(G((function (e) {
                        return e instanceof et ? Ul(e) : B(t.compiler.compileModuleAsync(e))
                    })))
                }
            }]), e
        }(), qf = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "shouldProcessUrl", value: function (e) {
                    return !0
                }
            }, {
                key: "extract", value: function (e) {
                    return e
                }
            }, {
                key: "merge", value: function (e, t) {
                    return e
                }
            }]), e
        }();

        function Wf(e) {
            throw e
        }

        function Zf(e, t, n) {
            return t.parse("/")
        }

        function Qf(e, t) {
            return Ul(null)
        }

        var Jf, Kf, $f, Yf, Xf = ((Jf = function () {
                function e(t, n, r, i, o, a, s, u) {
                    var l = this;
                    _classCallCheck(this, e), this.rootComponentType = t, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new A, this.errorHandler = Wf, this.malformedUriErrorHandler = Zf, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                        beforePreactivation: Qf,
                        afterPreactivation: Qf
                    }, this.urlHandlingStrategy = new qf, this.routeReuseStrategy = new zf, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(Xe), this.console = o.get(ks);
                    var c = o.get(Ds);
                    this.isNgZoneEnabled = c instanceof Ds, this.resetConfig(u), this.currentUrlTree = new ph(new vh([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Gf(a, s, (function (e) {
                        return l.triggerEvent(new Gc(e))
                    }), (function (e) {
                        return l.triggerEvent(new qc(e))
                    })), this.routerState = Hh(this.currentUrlTree, this.rootComponentType), this.transitions = new Hl({
                        id: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {canActivateChecks: [], canDeactivateChecks: []},
                        guardsResult: null
                    }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                }

                return _createClass(e, [{
                    key: "setupNavigations", value: function (e) {
                        var t = this, n = this.events;
                        return e.pipe(Jl((function (e) {
                            return 0 !== e.id
                        })), U((function (e) {
                            return Object.assign(Object.assign({}, e), {extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl)})
                        })), _c((function (e) {
                            var r, i, o, a, s = !1, u = !1;
                            return Ul(e).pipe(Ac((function (e) {
                                t.currentNavigation = {
                                    id: e.id,
                                    initialUrl: e.currentRawUrl,
                                    extractedUrl: e.extractedUrl,
                                    trigger: e.source,
                                    extras: e.extras,
                                    previousNavigation: t.lastSuccessfulNavigation ? Object.assign(Object.assign({}, t.lastSuccessfulNavigation), {previousNavigation: null}) : null
                                }
                            })), _c((function (e) {
                                var r, i, o, a,
                                    s = !t.navigated || e.extractedUrl.toString() !== t.browserUrlTree.toString();
                                if (("reload" === t.onSameUrlNavigation || s) && t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)) return Ul(e).pipe(_c((function (e) {
                                    var r = t.transitions.getValue();
                                    return n.next(new Vc(e.id, t.serializeUrl(e.extractedUrl), e.source, e.restoredState)), r !== t.transitions.getValue() ? ql : [e]
                                })), _c((function (e) {
                                    return Promise.resolve(e)
                                })), (r = t.ngModule.injector, i = t.configLoader, o = t.urlSerializer, a = t.config, function (e) {
                                    return e.pipe(_c((function (e) {
                                        return function (e, t, n, r, i) {
                                            return new gf(e, t, n, r, i).apply()
                                        }(r, i, o, e.extractedUrl, a).pipe(U((function (t) {
                                            return Object.assign(Object.assign({}, e), {urlAfterRedirects: t})
                                        })))
                                    })))
                                }), Ac((function (e) {
                                    t.currentNavigation = Object.assign(Object.assign({}, t.currentNavigation), {finalUrl: e.urlAfterRedirects})
                                })), function (e, n, r, i, o) {
                                    return function (r) {
                                        return r.pipe(G((function (r) {
                                            return function (e, t, n, r) {
                                                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                                                    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy";
                                                return new Rf(e, t, n, r, i, o).recognize()
                                            }(e, n, r.urlAfterRedirects, (a = r.urlAfterRedirects, t.serializeUrl(a)), i, o).pipe(U((function (e) {
                                                return Object.assign(Object.assign({}, r), {targetSnapshot: e})
                                            })));
                                            var a
                                        })))
                                    }
                                }(t.rootComponentType, t.config, 0, t.paramsInheritanceStrategy, t.relativeLinkResolution), Ac((function (e) {
                                    "eager" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects)
                                })), Ac((function (e) {
                                    var r = new Uc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    n.next(r)
                                })));
                                if (s && t.rawUrlTree && t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)) {
                                    var u = e.id, l = e.extractedUrl, c = e.source, h = e.restoredState, f = e.extras,
                                        d = new Vc(u, t.serializeUrl(l), c, h);
                                    n.next(d);
                                    var p = Hh(l, t.rootComponentType).snapshot;
                                    return Ul(Object.assign(Object.assign({}, e), {
                                        targetSnapshot: p,
                                        urlAfterRedirects: l,
                                        extras: Object.assign(Object.assign({}, f), {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return t.rawUrlTree = e.rawUrl, t.browserUrlTree = e.urlAfterRedirects, e.resolve(null), ql
                            })), Lf((function (e) {
                                var n = e.targetSnapshot, r = e.id, i = e.extractedUrl, o = e.rawUrl, a = e.extras,
                                    s = a.skipLocationChange, u = a.replaceUrl;
                                return t.hooks.beforePreactivation(n, {
                                    navigationId: r,
                                    appliedUrlTree: i,
                                    rawUrlTree: o,
                                    skipLocationChange: !!s,
                                    replaceUrl: !!u
                                })
                            })), Ac((function (e) {
                                var n = new Hc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                t.triggerEvent(n)
                            })), U((function (e) {
                                return Object.assign(Object.assign({}, e), {
                                    guards: (n = e.targetSnapshot, r = e.currentSnapshot, i = t.rootContexts, o = n._root, function e(t, n, r, i) {
                                        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                            canDeactivateChecks: [],
                                            canActivateChecks: []
                                        }, a = Fh(n);
                                        return t.children.forEach((function (t) {
                                            !function (t, n, r, i) {
                                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                                        canDeactivateChecks: [],
                                                        canActivateChecks: []
                                                    }, a = t.value, s = n ? n.value : null,
                                                    u = r ? r.getContext(t.value.outlet) : null;
                                                if (s && a.routeConfig === s.routeConfig) {
                                                    var l = function (e, t, n) {
                                                        if ("function" == typeof n) return n(e, t);
                                                        switch (n) {
                                                            case"pathParamsChange":
                                                                return !yh(e.url, t.url);
                                                            case"pathParamsOrQueryParamsChange":
                                                                return !yh(e.url, t.url) || !sh(e.queryParams, t.queryParams);
                                                            case"always":
                                                                return !0;
                                                            case"paramsOrQueryParamsChange":
                                                                return !Qh(e, t) || !sh(e.queryParams, t.queryParams);
                                                            case"paramsChange":
                                                            default:
                                                                return !Qh(e, t)
                                                        }
                                                    }(s, a, a.routeConfig.runGuardsAndResolvers);
                                                    l ? o.canActivateChecks.push(new Cf(i)) : (a.data = s.data, a._resolvedData = s._resolvedData), e(t, n, a.component ? u ? u.children : null : r, i, o), l && o.canDeactivateChecks.push(new wf(u && u.outlet && u.outlet.component || null, s))
                                                } else s && Sf(n, u, o), o.canActivateChecks.push(new Cf(i)), e(t, null, a.component ? u ? u.children : null : r, i, o)
                                            }(t, a[t.value.outlet], r, i.concat([t.value]), o), delete a[t.value.outlet]
                                        })), hh(a, (function (e, t) {
                                            return Sf(e, r.getContext(t), o)
                                        })), o
                                    }(o, r ? r._root : null, i, [o.value]))
                                });
                                var n, r, i, o
                            })), function (e, t) {
                                return function (n) {
                                    return n.pipe(G((function (n) {
                                        var r = n.targetSnapshot, i = n.currentSnapshot, o = n.guards,
                                            a = o.canActivateChecks, s = o.canDeactivateChecks;
                                        return 0 === s.length && 0 === a.length ? Ul(Object.assign(Object.assign({}, n), {guardsResult: !0})) : function (e, t, n, r) {
                                            return B(e).pipe(G((function (e) {
                                                return function (e, t, n, r, i) {
                                                    var o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                                    return o && 0 !== o.length ? Ul(o.map((function (o) {
                                                        var a, s = bf(o, t, i);
                                                        if (function (e) {
                                                            return e && lf(e.canDeactivate)
                                                        }(s)) a = fh(s.canDeactivate(e, t, n, r)); else {
                                                            if (!lf(s)) throw new Error("Invalid CanDeactivate guard");
                                                            a = fh(s(e, t, n, r))
                                                        }
                                                        return a.pipe(gc())
                                                    }))).pipe(Ef()) : Ul(!0)
                                                }(e.component, e.route, n, t, r)
                                            })), gc((function (e) {
                                                return !0 !== e
                                            }), !0))
                                        }(s, r, i, e).pipe(G((function (n) {
                                            return n && "boolean" == typeof n ? function (e, t, n, r) {
                                                return B(t).pipe(Ec((function (t) {
                                                    return B([Af(t.route.parent, r), Of(t.route, r), If(e, t.path, n), Tf(e, t.route, n)]).pipe(Ql(), gc((function (e) {
                                                        return !0 !== e
                                                    }), !0))
                                                })), gc((function (e) {
                                                    return !0 !== e
                                                }), !0))
                                            }(r, a, e, t) : Ul(n)
                                        })), U((function (e) {
                                            return Object.assign(Object.assign({}, n), {guardsResult: e})
                                        })))
                                    })))
                                }
                            }(t.ngModule.injector, (function (e) {
                                return t.triggerEvent(e)
                            })), Ac((function (e) {
                                if (cf(e.guardsResult)) {
                                    var n = eh('Redirecting to "'.concat(t.serializeUrl(e.guardsResult), '"'));
                                    throw n.url = e.guardsResult, n
                                }
                            })), Ac((function (e) {
                                var n = new Lc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
                                t.triggerEvent(n)
                            })), Jl((function (e) {
                                if (!e.guardsResult) {
                                    t.resetUrlToCurrentUrlTree();
                                    var r = new jc(e.id, t.serializeUrl(e.extractedUrl), "");
                                    return n.next(r), e.resolve(!1), !1
                                }
                                return !0
                            })), Lf((function (e) {
                                if (e.guards.canActivateChecks.length) return Ul(e).pipe(Ac((function (e) {
                                    var n = new zc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    t.triggerEvent(n)
                                })), (n = t.paramsInheritanceStrategy, r = t.ngModule.injector, function (e) {
                                    return e.pipe(G((function (e) {
                                        var t = e.targetSnapshot, i = e.guards.canActivateChecks;
                                        return i.length ? B(i).pipe(Ec((function (e) {
                                            return function (e, t, n, r) {
                                                return function (e, t, n, r) {
                                                    var i = Object.keys(e);
                                                    if (0 === i.length) return Ul({});
                                                    if (1 === i.length) {
                                                        var o = i[0];
                                                        return Hf(e[o], t, n, r).pipe(U((function (e) {
                                                            return _defineProperty({}, o, e)
                                                        })))
                                                    }
                                                    var a = {};
                                                    return B(i).pipe(G((function (i) {
                                                        return Hf(e[i], t, n, r).pipe(U((function (e) {
                                                            return a[i] = e, e
                                                        })))
                                                    }))).pipe(lc(), U((function () {
                                                        return a
                                                    })))
                                                }(e._resolve, e, t, r).pipe(U((function (t) {
                                                    return e._resolvedData = t, e.data = Object.assign(Object.assign({}, e.data), zh(e, n).resolve), null
                                                })))
                                            }(e.route, t, n, r)
                                        })), function (e, t) {
                                            return arguments.length >= 2 ? function (n) {
                                                return _(bc(e, t), Xl(1), ac(t))(n)
                                            } : function (t) {
                                                return _(bc((function (t, n, r) {
                                                    return e(t, n, r + 1)
                                                })), Xl(1))(t)
                                            }
                                        }((function (e, t) {
                                            return e
                                        })), U((function (t) {
                                            return e
                                        }))) : Ul(e)
                                    })))
                                }), Ac((function (e) {
                                    var n = new Bc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    t.triggerEvent(n)
                                })));
                                var n, r
                            })), Lf((function (e) {
                                var n = e.targetSnapshot, r = e.id, i = e.extractedUrl, o = e.rawUrl, a = e.extras,
                                    s = a.skipLocationChange, u = a.replaceUrl;
                                return t.hooks.afterPreactivation(n, {
                                    navigationId: r,
                                    appliedUrlTree: i,
                                    rawUrlTree: o,
                                    skipLocationChange: !!s,
                                    replaceUrl: !!u
                                })
                            })), U((function (e) {
                                var n = function (e, t, n) {
                                    var r = function e(t, n, r) {
                                        if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                                            var i = r.value;
                                            i._futureSnapshot = n.value;
                                            var o = function (t, n, r) {
                                                return n.children.map((function (n) {
                                                    var i, o = _createForOfIteratorHelper(r.children);
                                                    try {
                                                        for (o.s(); !(i = o.n()).done;) {
                                                            var a = i.value;
                                                            if (t.shouldReuseRoute(a.value.snapshot, n.value)) return e(t, n, a)
                                                        }
                                                    } catch (s) {
                                                        o.e(s)
                                                    } finally {
                                                        o.f()
                                                    }
                                                    return e(t, n)
                                                }))
                                            }(t, n, r);
                                            return new jh(i, o)
                                        }
                                        var a = t.retrieve(n.value);
                                        if (a) {
                                            var s = a.route;
                                            return function e(t, n) {
                                                if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                n.value._futureSnapshot = t.value;
                                                for (var r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r])
                                            }(n, s), s
                                        }
                                        var u,
                                            l = new Lh(new Hl((u = n.value).url), new Hl(u.params), new Hl(u.queryParams), new Hl(u.fragment), new Hl(u.data), u.outlet, u.component, u),
                                            c = n.children.map((function (n) {
                                                return e(t, n)
                                            }));
                                        return new jh(l, c)
                                    }(e, t._root, n ? n._root : void 0);
                                    return new Uh(r, t)
                                }(t.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                                return Object.assign(Object.assign({}, e), {targetRouterState: n})
                            })), Ac((function (e) {
                                t.currentUrlTree = e.urlAfterRedirects, t.rawUrlTree = t.urlHandlingStrategy.merge(t.currentUrlTree, e.rawUrl), t.routerState = e.targetRouterState, "deferred" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(t.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects)
                            })), (i = t.rootContexts, o = t.routeReuseStrategy, a = function (e) {
                                return t.triggerEvent(e)
                            }, U((function (e) {
                                return new sf(o, e.targetRouterState, e.currentRouterState, a).activate(i), e
                            }))), Ac({
                                next: function () {
                                    s = !0
                                }, complete: function () {
                                    s = !0
                                }
                            }), (r = function () {
                                if (!s && !u) {
                                    t.resetUrlToCurrentUrlTree();
                                    var r = new jc(e.id, t.serializeUrl(e.extractedUrl), "Navigation ID ".concat(e.id, " is not equal to the current navigation id ").concat(t.navigationId));
                                    n.next(r), e.resolve(!1)
                                }
                                t.currentNavigation = null
                            }, function (e) {
                                return e.lift(new Rc(r))
                            }), cc((function (r) {
                                if (u = !0, (s = r) && s.ngNavigationCancelingError) {
                                    var i = cf(r.url);
                                    i || (t.navigated = !0, t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                                    var o = new jc(e.id, t.serializeUrl(e.extractedUrl), r.message);
                                    n.next(o), i ? setTimeout((function () {
                                        var n = t.urlHandlingStrategy.merge(r.url, t.rawUrlTree);
                                        return t.scheduleNavigation(n, "imperative", null, {
                                            skipLocationChange: e.extras.skipLocationChange,
                                            replaceUrl: "eager" === t.urlUpdateStrategy
                                        }, {resolve: e.resolve, reject: e.reject, promise: e.promise})
                                    }), 0) : e.resolve(!1)
                                } else {
                                    t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                                    var a = new Fc(e.id, t.serializeUrl(e.extractedUrl), r);
                                    n.next(a);
                                    try {
                                        e.resolve(t.errorHandler(r))
                                    } catch (l) {
                                        e.reject(l)
                                    }
                                }
                                var s;
                                return ql
                            })))
                        })))
                    }
                }, {
                    key: "resetRootComponentType", value: function (e) {
                        this.rootComponentType = e, this.routerState.root.component = this.rootComponentType
                    }
                }, {
                    key: "getTransition", value: function () {
                        var e = this.transitions.value;
                        return e.urlAfterRedirects = this.browserUrlTree, e
                    }
                }, {
                    key: "setTransition", value: function (e) {
                        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), e))
                    }
                }, {
                    key: "initialNavigation", value: function () {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
                    }
                }, {
                    key: "setUpLocationChangeListener", value: function () {
                        var e = this;
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe((function (t) {
                            var n = e.parseUrl(t.url), r = "popstate" === t.type ? "popstate" : "hashchange",
                                i = t.state && t.state.navigationId ? t.state : null;
                            setTimeout((function () {
                                e.scheduleNavigation(n, r, i, {replaceUrl: !0})
                            }), 0)
                        })))
                    }
                }, {
                    key: "getCurrentNavigation", value: function () {
                        return this.currentNavigation
                    }
                }, {
                    key: "triggerEvent", value: function (e) {
                        this.events.next(e)
                    }
                }, {
                    key: "resetConfig", value: function (e) {
                        rh(e), this.config = e.map(ah), this.navigated = !1, this.lastSuccessfulId = -1
                    }
                }, {
                    key: "ngOnDestroy", value: function () {
                        this.dispose()
                    }
                }, {
                    key: "dispose", value: function () {
                        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                    }
                }, {
                    key: "createUrlTree", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.relativeTo,
                            r = t.queryParams, i = t.fragment, o = t.preserveQueryParams, a = t.queryParamsHandling,
                            s = t.preserveFragment;
                        or() && o && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                        var u = n || this.routerState.root, l = s ? this.currentUrlTree.fragment : i, c = null;
                        if (a) switch (a) {
                            case"merge":
                                c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                                break;
                            case"preserve":
                                c = this.currentUrlTree.queryParams;
                                break;
                            default:
                                c = r || null
                        } else c = o ? this.currentUrlTree.queryParams : r || null;
                        return null !== c && (c = this.removeEmptyProps(c)), function (e, t, n, r, i) {
                            if (0 === n.length) return Kh(t.root, t.root, t, r, i);
                            var o = function (e) {
                                if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new $h(!0, 0, e);
                                var t = 0, n = !1, r = e.reduce((function (e, r, i) {
                                    if ("object" == typeof r && null != r) {
                                        if (r.outlets) {
                                            var o = {};
                                            return hh(r.outlets, (function (e, t) {
                                                o[t] = "string" == typeof e ? e.split("/") : e
                                            })), [].concat(_toConsumableArray(e), [{outlets: o}])
                                        }
                                        if (r.segmentPath) return [].concat(_toConsumableArray(e), [r.segmentPath])
                                    }
                                    return "string" != typeof r ? [].concat(_toConsumableArray(e), [r]) : 0 === i ? (r.split("/").forEach((function (r, i) {
                                        0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r))
                                    })), e) : [].concat(_toConsumableArray(e), [r])
                                }), []);
                                return new $h(n, t, r)
                            }(n);
                            if (o.toRoot()) return Kh(t.root, new vh([], {}), t, r, i);
                            var a = function (e, t, n) {
                                    if (e.isAbsolute) return new Yh(t.root, !0, 0);
                                    if (-1 === n.snapshot._lastPathIndex) return new Yh(n.snapshot._urlSegment, !0, 0);
                                    var r = Jh(e.commands[0]) ? 0 : 1;
                                    return function (e, t, n) {
                                        for (var r = e, i = t, o = n; o > i;) {
                                            if (o -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                                            i = r.segments.length
                                        }
                                        return new Yh(r, !1, i - o)
                                    }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                                }(o, t, e),
                                s = a.processChildren ? tf(a.segmentGroup, a.index, o.commands) : ef(a.segmentGroup, a.index, o.commands);
                            return Kh(a.segmentGroup, s, t, r, i)
                        }(u, this.currentUrlTree, e, c, l)
                    }
                }, {
                    key: "navigateByUrl", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {skipLocationChange: !1};
                        or() && this.isNgZoneEnabled && !Ds.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                        var n = cf(e) ? e : this.parseUrl(e), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                        return this.scheduleNavigation(r, "imperative", null, t)
                    }
                }, {
                    key: "navigate", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {skipLocationChange: !1};
                        return function (e) {
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t];
                                if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(t))
                            }
                        }(e), this.navigateByUrl(this.createUrlTree(e, t), t)
                    }
                }, {
                    key: "serializeUrl", value: function (e) {
                        return this.urlSerializer.serialize(e)
                    }
                }, {
                    key: "parseUrl", value: function (e) {
                        var t;
                        try {
                            t = this.urlSerializer.parse(e)
                        } catch (n) {
                            t = this.malformedUriErrorHandler(n, this.urlSerializer, e)
                        }
                        return t
                    }
                }, {
                    key: "isActive", value: function (e, t) {
                        if (cf(e)) return dh(this.currentUrlTree, e, t);
                        var n = this.parseUrl(e);
                        return dh(this.currentUrlTree, n, t)
                    }
                }, {
                    key: "removeEmptyProps", value: function (e) {
                        return Object.keys(e).reduce((function (t, n) {
                            var r = e[n];
                            return null != r && (t[n] = r), t
                        }), {})
                    }
                }, {
                    key: "processNavigations", value: function () {
                        var e = this;
                        this.navigations.subscribe((function (t) {
                            e.navigated = !0, e.lastSuccessfulId = t.id, e.events.next(new Nc(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(e.currentUrlTree))), e.lastSuccessfulNavigation = e.currentNavigation, e.currentNavigation = null, t.resolve(!0)
                        }), (function (t) {
                            e.console.warn("Unhandled Navigation Error: ")
                        }))
                    }
                }, {
                    key: "scheduleNavigation", value: function (e, t, n, r, i) {
                        var o, a, s, u = this.getTransition();
                        if (u && "imperative" !== t && "imperative" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                        if (u && "hashchange" == t && "popstate" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                        if (u && "popstate" == t && "hashchange" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                        i ? (o = i.resolve, a = i.reject, s = i.promise) : s = new Promise((function (e, t) {
                            o = e, a = t
                        }));
                        var l = ++this.navigationId;
                        return this.setTransition({
                            id: l,
                            source: t,
                            restoredState: n,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: e,
                            extras: r,
                            resolve: o,
                            reject: a,
                            promise: s,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), s.catch((function (e) {
                            return Promise.reject(e)
                        }))
                    }
                }, {
                    key: "setBrowserUrl", value: function (e, t, n, r) {
                        var i = this.urlSerializer.serialize(e);
                        r = r || {}, this.location.isCurrentPathEqualTo(i) || t ? this.location.replaceState(i, "", Object.assign(Object.assign({}, r), {navigationId: n})) : this.location.go(i, "", Object.assign(Object.assign({}, r), {navigationId: n}))
                    }
                }, {
                    key: "resetStateAndUrl", value: function (e, t, n) {
                        this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                    }
                }, {
                    key: "resetUrlToCurrentUrlTree", value: function () {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
                    }
                }, {
                    key: "url", get: function () {
                        return this.serializeUrl(this.currentUrlTree)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                So()
            }, Jf.\u0275dir = yt({type: Jf}), Jf), ed = function e() {
                _classCallCheck(this, e), this.outlet = null, this.route = null, this.resolver = null, this.children = new td, this.attachRef = null
            }, td = function () {
                function e() {
                    _classCallCheck(this, e), this.contexts = new Map
                }

                return _createClass(e, [{
                    key: "onChildOutletCreated", value: function (e, t) {
                        var n = this.getOrCreateContext(e);
                        n.outlet = t, this.contexts.set(e, n)
                    }
                }, {
                    key: "onChildOutletDestroyed", value: function (e) {
                        var t = this.getContext(e);
                        t && (t.outlet = null)
                    }
                }, {
                    key: "onOutletDeactivated", value: function () {
                        var e = this.contexts;
                        return this.contexts = new Map, e
                    }
                }, {
                    key: "onOutletReAttached", value: function (e) {
                        this.contexts = e
                    }
                }, {
                    key: "getOrCreateContext", value: function (e) {
                        var t = this.getContext(e);
                        return t || (t = new ed, this.contexts.set(e, t)), t
                    }
                }, {
                    key: "getContext", value: function (e) {
                        return this.contexts.get(e) || null
                    }
                }]), e
            }(), nd = ((Kf = function () {
                function e(t, n, r, i, o) {
                    _classCallCheck(this, e), this.parentContexts = t, this.location = n, this.resolver = r, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new hs, this.deactivateEvents = new hs, this.name = i || "primary", t.onChildOutletCreated(this.name, this)
                }

                return _createClass(e, [{
                    key: "ngOnDestroy", value: function () {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }
                }, {
                    key: "ngOnInit", value: function () {
                        if (!this.activated) {
                            var e = this.parentContexts.getContext(this.name);
                            e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null))
                        }
                    }
                }, {
                    key: "detach", value: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        var e = this.activated;
                        return this.activated = null, this._activatedRoute = null, e
                    }
                }, {
                    key: "attach", value: function (e, t) {
                        this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView)
                    }
                }, {
                    key: "deactivate", value: function () {
                        if (this.activated) {
                            var e = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                        }
                    }
                }, {
                    key: "activateWith", value: function (e, t) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = e;
                        var n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                            r = this.parentContexts.getOrCreateContext(this.name).children,
                            i = new rd(e, r, this.location.injector);
                        this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }
                }, {
                    key: "isActivated", get: function () {
                        return !!this.activated
                    }
                }, {
                    key: "component", get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }
                }, {
                    key: "activatedRoute", get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }
                }, {
                    key: "activatedRouteData", get: function () {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Kf)(bo(td), bo(Ba), bo(ya), function (e, t) {
                    var n = e.attrs;
                    if (n) for (var r = n.length, i = 0; i < r;) {
                        var o = n[i];
                        if (bn(o)) break;
                        if (0 === o) i += 2; else if ("number" == typeof o) for (i++; i < r && "string" == typeof n[i];) i++; else {
                            if ("name" === o) return n[i + 1];
                            i += 2
                        }
                    }
                    return null
                }(Qt()), bo(zi))
            }, Kf.\u0275dir = yt({
                type: Kf,
                selectors: [["router-outlet"]],
                outputs: {activateEvents: "activate", deactivateEvents: "deactivate"},
                exportAs: ["outlet"]
            }), Kf), rd = function () {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.route = t, this.childContexts = n, this.parent = r
                }

                return _createClass(e, [{
                    key: "get", value: function (e, t) {
                        return e === Lh ? this.route : e === td ? this.childContexts : this.parent.get(e, t)
                    }
                }]), e
            }(), id = function e() {
                _classCallCheck(this, e)
            }, od = function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, [{
                    key: "preload", value: function (e, t) {
                        return Ul(null)
                    }
                }]), e
            }(), ad = ((Yf = function () {
                function e(t, n, r, i, o) {
                    _classCallCheck(this, e), this.router = t, this.injector = i, this.preloadingStrategy = o, this.loader = new Gf(n, r, (function (e) {
                        return t.triggerEvent(new Gc(e))
                    }), (function (e) {
                        return t.triggerEvent(new qc(e))
                    }))
                }

                return _createClass(e, [{
                    key: "setUpPreloading", value: function () {
                        var e = this;
                        this.subscription = this.router.events.pipe(Jl((function (e) {
                            return e instanceof Nc
                        })), Ec((function () {
                            return e.preload()
                        }))).subscribe((function () {
                        }))
                    }
                }, {
                    key: "preload", value: function () {
                        var e = this.injector.get(Xe);
                        return this.processRoutes(e, this.router.config)
                    }
                }, {
                    key: "ngOnDestroy", value: function () {
                        this.subscription.unsubscribe()
                    }
                }, {
                    key: "processRoutes", value: function (e, t) {
                        var n, r = [], i = _createForOfIteratorHelper(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var o = n.value;
                                if (o.loadChildren && !o.canLoad && o._loadedConfig) {
                                    var a = o._loadedConfig;
                                    r.push(this.processRoutes(a.module, a.routes))
                                } else o.loadChildren && !o.canLoad ? r.push(this.preloadConfig(e, o)) : o.children && r.push(this.processRoutes(e, o.children))
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                        return B(r).pipe(Z(), U((function (e) {
                        })))
                    }
                }, {
                    key: "preloadConfig", value: function (e, t) {
                        var n = this;
                        return this.preloadingStrategy.preload(t, (function () {
                            return n.loader.load(e.injector, t).pipe(G((function (e) {
                                return t._loadedConfig = e, n.processRoutes(e.module, e.routes)
                            })))
                        }))
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Yf)(Je(Xf), Je(nu), Je(Is), Je(io), Je(id))
            }, Yf.\u0275prov = he({token: Yf, factory: Yf.\u0275fac}), Yf), sd = (($f = function () {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    _classCallCheck(this, e), this.router = t, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled"
                }

                return _createClass(e, [{
                    key: "init", value: function () {
                        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                    }
                }, {
                    key: "createScrollEvents", value: function () {
                        var e = this;
                        return this.router.events.subscribe((function (t) {
                            t instanceof Vc ? (e.store[e.lastId] = e.viewportScroller.getScrollPosition(), e.lastSource = t.navigationTrigger, e.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof Nc && (e.lastId = t.id, e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment))
                        }))
                    }
                }, {
                    key: "consumeScrollEvents", value: function () {
                        var e = this;
                        return this.router.events.subscribe((function (t) {
                            t instanceof Kc && (t.position ? "top" === e.options.scrollPositionRestoration ? e.viewportScroller.scrollToPosition([0, 0]) : "enabled" === e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === e.options.anchorScrolling ? e.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition([0, 0]))
                        }))
                    }
                }, {
                    key: "scheduleScrollEvent", value: function (e, t) {
                        this.router.triggerEvent(new Kc(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t))
                    }
                }, {
                    key: "ngOnDestroy", value: function () {
                        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                    }
                }]), e
            }()).\u0275fac = function (e) {
                So()
            }, $f.\u0275dir = yt({type: $f}), $f), ud = new He("ROUTER_CONFIGURATION"), ld = new He("ROUTER_FORROOT_GUARD"),
            cd = [Mu, {provide: _h, useClass: kh}, {
                provide: Xf, useFactory: function (e, t, n, r, i, o, a) {
                    var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
                        u = arguments.length > 8 ? arguments[8] : void 0,
                        l = arguments.length > 9 ? arguments[9] : void 0, c = new Xf(null, e, t, n, r, i, o, lh(a));
                    if (u && (c.urlHandlingStrategy = u), l && (c.routeReuseStrategy = l), s.errorHandler && (c.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (c.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) {
                        var h = hu();
                        c.events.subscribe((function (e) {
                            h.logGroup("Router Event: ".concat(e.constructor.name)), h.log(e.toString()), h.log(e), h.logGroupEnd()
                        }))
                    }
                    return s.onSameUrlNavigation && (c.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (c.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (c.relativeLinkResolution = s.relativeLinkResolution), c
                }, deps: [_h, td, Mu, io, nu, Is, Bf, ud, [function () {
                    return function e() {
                        _classCallCheck(this, e)
                    }
                }(), new oe], [function () {
                    return function e() {
                        _classCallCheck(this, e)
                    }
                }(), new oe]]
            }, td, {
                provide: Lh, useFactory: function (e) {
                    return e.routerState.root
                }, deps: [Xf]
            }, {provide: nu, useClass: ou}, ad, od, function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, [{
                    key: "preload", value: function (e, t) {
                        return t().pipe(cc((function () {
                            return Ul(null)
                        })))
                    }
                }]), e
            }(), {provide: ud, useValue: {enableTracing: !1}}];

        function hd() {
            return new Qs("Router", Xf)
        }

        var fd, dd = ((fd = function () {
            function e(t, n) {
                _classCallCheck(this, e)
            }

            return _createClass(e, null, [{
                key: "forRoot", value: function (t, n) {
                    return {
                        ngModule: e,
                        providers: [cd, yd(t), {
                            provide: ld,
                            useFactory: gd,
                            deps: [[Xf, new oe, new se]]
                        }, {provide: ud, useValue: n || {}}, {
                            provide: xu,
                            useFactory: vd,
                            deps: [pu, [new ie(Iu), new oe], ud]
                        }, {provide: sd, useFactory: pd, deps: [Xf, al, ud]}, {
                            provide: id,
                            useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : od
                        }, {provide: Qs, multi: !0, useFactory: hd}, [_d, {
                            provide: fs,
                            multi: !0,
                            useFactory: kd,
                            deps: [_d]
                        }, {provide: bd, useFactory: Cd, deps: [_d]}, {provide: _s, multi: !0, useExisting: bd}]]
                    }
                }
            }, {
                key: "forChild", value: function (t) {
                    return {ngModule: e, providers: [yd(t)]}
                }
            }]), e
        }()).\u0275mod = vt({type: fd}), fd.\u0275inj = fe({
            factory: function (e) {
                return new (e || fd)(Je(ld, 8), Je(Xf, 8))
            }
        }), fd);

        function pd(e, t, n) {
            return n.scrollOffset && t.setOffset(n.scrollOffset), new sd(e, t, n)
        }

        function vd(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return n.useHash ? new Ru(e, t) : new Pu(e, t)
        }

        function gd(e) {
            if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded"
        }

        function yd(e) {
            return [{provide: oo, multi: !0, useValue: e}, {provide: Bf, multi: !0, useValue: e}]
        }

        var md, _d = ((md = function () {
            function e(t) {
                _classCallCheck(this, e), this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new A
            }

            return _createClass(e, [{
                key: "appInitializer", value: function () {
                    var e = this;
                    return this.injector.get(yu, Promise.resolve(null)).then((function () {
                        var t = null, n = new Promise((function (e) {
                            return t = e
                        })), r = e.injector.get(Xf), i = e.injector.get(ud);
                        if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i)) t(!0); else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), t(!0); else {
                            if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
                            r.hooks.afterPreactivation = function () {
                                return e.initNavigation ? Ul(null) : (e.initNavigation = !0, t(!0), e.resultOfPreactivationDone)
                            }, r.initialNavigation()
                        }
                        return n
                    }))
                }
            }, {
                key: "bootstrapListener", value: function (e) {
                    var t = this.injector.get(ud), n = this.injector.get(ad), r = this.injector.get(sd),
                        i = this.injector.get(Xf), o = this.injector.get(eu);
                    e === o.components[0] && (this.isLegacyEnabled(t) ? i.initialNavigation() : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }
            }, {
                key: "isLegacyEnabled", value: function (e) {
                    return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation
                }
            }, {
                key: "isLegacyDisabled", value: function (e) {
                    return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || md)(Je(io))
        }, md.\u0275prov = he({token: md, factory: md.\u0275fac}), md);

        function kd(e) {
            return e.appInitializer.bind(e)
        }

        function Cd(e) {
            return e.bootstrapListener.bind(e)
        }

        var wd, bd = new He("Router Initializer"), Sd = [], xd = ((wd = function e() {
            _classCallCheck(this, e)
        }).\u0275mod = vt({type: wd}), wd.\u0275inj = fe({
            factory: function (e) {
                return new (e || wd)
            }, imports: [[dd.forRoot(Sd)], dd]
        }), wd), Ed = function e() {
            _classCallCheck(this, e)
        }, Od = function e() {
            _classCallCheck(this, e)
        }, Ad = function () {
            function e(t) {
                var n = this;
                _classCallCheck(this, e), this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? function () {
                    n.headers = new Map, t.split("\n").forEach((function (e) {
                        var t = e.indexOf(":");
                        if (t > 0) {
                            var r = e.slice(0, t), i = r.toLowerCase(), o = e.slice(t + 1).trim();
                            n.maybeSetNormalizedName(r, i), n.headers.has(i) ? n.headers.get(i).push(o) : n.headers.set(i, [o])
                        }
                    }))
                } : function () {
                    n.headers = new Map, Object.keys(t).forEach((function (e) {
                        var r = t[e], i = e.toLowerCase();
                        "string" == typeof r && (r = [r]), r.length > 0 && (n.headers.set(i, r), n.maybeSetNormalizedName(e, i))
                    }))
                } : this.headers = new Map
            }

            return _createClass(e, [{
                key: "has", value: function (e) {
                    return this.init(), this.headers.has(e.toLowerCase())
                }
            }, {
                key: "get", value: function (e) {
                    this.init();
                    var t = this.headers.get(e.toLowerCase());
                    return t && t.length > 0 ? t[0] : null
                }
            }, {
                key: "keys", value: function () {
                    return this.init(), Array.from(this.normalizedNames.values())
                }
            }, {
                key: "getAll", value: function (e) {
                    return this.init(), this.headers.get(e.toLowerCase()) || null
                }
            }, {
                key: "append", value: function (e, t) {
                    return this.clone({name: e, value: t, op: "a"})
                }
            }, {
                key: "set", value: function (e, t) {
                    return this.clone({name: e, value: t, op: "s"})
                }
            }, {
                key: "delete", value: function (e, t) {
                    return this.clone({name: e, value: t, op: "d"})
                }
            }, {
                key: "maybeSetNormalizedName", value: function (e, t) {
                    this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
                }
            }, {
                key: "init", value: function () {
                    var t = this;
                    this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach((function (e) {
                        return t.applyUpdate(e)
                    })), this.lazyUpdate = null))
                }
            }, {
                key: "copyFrom", value: function (e) {
                    var t = this;
                    e.init(), Array.from(e.headers.keys()).forEach((function (n) {
                        t.headers.set(n, e.headers.get(n)), t.normalizedNames.set(n, e.normalizedNames.get(n))
                    }))
                }
            }, {
                key: "clone", value: function (t) {
                    var n = new e;
                    return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([t]), n
                }
            }, {
                key: "applyUpdate", value: function (e) {
                    var t = e.name.toLowerCase();
                    switch (e.op) {
                        case"a":
                        case"s":
                            var n = e.value;
                            if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                            this.maybeSetNormalizedName(e.name, t);
                            var r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                            r.push.apply(r, _toConsumableArray(n)), this.headers.set(t, r);
                            break;
                        case"d":
                            var i = e.value;
                            if (i) {
                                var o = this.headers.get(t);
                                if (!o) return;
                                0 === (o = o.filter((function (e) {
                                    return -1 === i.indexOf(e)
                                }))).length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, o)
                            } else this.headers.delete(t), this.normalizedNames.delete(t)
                    }
                }
            }, {
                key: "forEach", value: function (e) {
                    var t = this;
                    this.init(), Array.from(this.normalizedNames.keys()).forEach((function (n) {
                        return e(t.normalizedNames.get(n), t.headers.get(n))
                    }))
                }
            }]), e
        }(), Td = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "encodeKey", value: function (e) {
                    return Id(e)
                }
            }, {
                key: "encodeValue", value: function (e) {
                    return Id(e)
                }
            }, {
                key: "decodeKey", value: function (e) {
                    return decodeURIComponent(e)
                }
            }, {
                key: "decodeValue", value: function (e) {
                    return decodeURIComponent(e)
                }
            }]), e
        }();

        function Id(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }

        var Pd = function () {
            function e() {
                var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (_classCallCheck(this, e), this.updates = null, this.cloneFrom = null, this.encoder = n.encoder || new Td, n.fromString) {
                    if (n.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = function (e, t) {
                        var n = new Map;
                        return e.length > 0 && e.split("&").forEach((function (e) {
                            var r = e.indexOf("="),
                                i = _slicedToArray(-1 == r ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, r)), t.decodeValue(e.slice(r + 1))], 2),
                                o = i[0], a = i[1], s = n.get(o) || [];
                            s.push(a), n.set(o, s)
                        })), n
                    }(n.fromString, this.encoder)
                } else n.fromObject ? (this.map = new Map, Object.keys(n.fromObject).forEach((function (e) {
                    var r = n.fromObject[e];
                    t.map.set(e, Array.isArray(r) ? r : [r])
                }))) : this.map = null
            }

            return _createClass(e, [{
                key: "has", value: function (e) {
                    return this.init(), this.map.has(e)
                }
            }, {
                key: "get", value: function (e) {
                    this.init();
                    var t = this.map.get(e);
                    return t ? t[0] : null
                }
            }, {
                key: "getAll", value: function (e) {
                    return this.init(), this.map.get(e) || null
                }
            }, {
                key: "keys", value: function () {
                    return this.init(), Array.from(this.map.keys())
                }
            }, {
                key: "append", value: function (e, t) {
                    return this.clone({param: e, value: t, op: "a"})
                }
            }, {
                key: "set", value: function (e, t) {
                    return this.clone({param: e, value: t, op: "s"})
                }
            }, {
                key: "delete", value: function (e, t) {
                    return this.clone({param: e, value: t, op: "d"})
                }
            }, {
                key: "toString", value: function () {
                    var e = this;
                    return this.init(), this.keys().map((function (t) {
                        var n = e.encoder.encodeKey(t);
                        return e.map.get(t).map((function (t) {
                            return n + "=" + e.encoder.encodeValue(t)
                        })).join("&")
                    })).filter((function (e) {
                        return "" !== e
                    })).join("&")
                }
            }, {
                key: "clone", value: function (t) {
                    var n = new e({encoder: this.encoder});
                    return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat([t]), n
                }
            }, {
                key: "init", value: function () {
                    var e = this;
                    null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach((function (t) {
                        return e.map.set(t, e.cloneFrom.map.get(t))
                    })), this.updates.forEach((function (t) {
                        switch (t.op) {
                            case"a":
                            case"s":
                                var n = ("a" === t.op ? e.map.get(t.param) : void 0) || [];
                                n.push(t.value), e.map.set(t.param, n);
                                break;
                            case"d":
                                if (void 0 === t.value) {
                                    e.map.delete(t.param);
                                    break
                                }
                                var r = e.map.get(t.param) || [], i = r.indexOf(t.value);
                                -1 !== i && r.splice(i, 1), r.length > 0 ? e.map.set(t.param, r) : e.map.delete(t.param)
                        }
                    })), this.cloneFrom = this.updates = null)
                }
            }]), e
        }();

        function Rd(e) {
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
        }

        function Md(e) {
            return "undefined" != typeof Blob && e instanceof Blob
        }

        function Dd(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }

        var Vd = function () {
            function e(t, n, r, i) {
                var o;
                if (_classCallCheck(this, e), this.url = n, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (e) {
                    switch (e) {
                        case"DELETE":
                        case"GET":
                        case"HEAD":
                        case"OPTIONS":
                        case"JSONP":
                            return !1;
                        default:
                            return !0
                    }
                }(this.method) || i ? (this.body = void 0 !== r ? r : null, o = i) : o = r, o && (this.reportProgress = !!o.reportProgress, this.withCredentials = !!o.withCredentials, o.responseType && (this.responseType = o.responseType), o.headers && (this.headers = o.headers), o.params && (this.params = o.params)), this.headers || (this.headers = new Ad), this.params) {
                    var a = this.params.toString();
                    if (0 === a.length) this.urlWithParams = n; else {
                        var s = n.indexOf("?");
                        this.urlWithParams = n + (-1 === s ? "?" : s < n.length - 1 ? "&" : "") + a
                    }
                } else this.params = new Pd, this.urlWithParams = n
            }

            return _createClass(e, [{
                key: "serializeBody", value: function () {
                    return null === this.body ? null : Rd(this.body) || Md(this.body) || Dd(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Pd ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                }
            }, {
                key: "detectContentTypeHeader", value: function () {
                    return null === this.body || Dd(this.body) ? null : Md(this.body) ? this.body.type || null : Rd(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Pd ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
                }
            }, {
                key: "clone", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.method || this.method, r = t.url || this.url, i = t.responseType || this.responseType,
                        o = void 0 !== t.body ? t.body : this.body,
                        a = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
                        s = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress,
                        u = t.headers || this.headers, l = t.params || this.params;
                    return void 0 !== t.setHeaders && (u = Object.keys(t.setHeaders).reduce((function (e, n) {
                        return e.set(n, t.setHeaders[n])
                    }), u)), t.setParams && (l = Object.keys(t.setParams).reduce((function (e, n) {
                        return e.set(n, t.setParams[n])
                    }), l)), new e(n, r, o, {
                        params: l,
                        headers: u,
                        reportProgress: s,
                        responseType: i,
                        withCredentials: a
                    })
                }
            }]), e
        }(), Nd = function () {
            var e = {Sent: 0, UploadProgress: 1, ResponseHeader: 2, DownloadProgress: 3, Response: 4, User: 5};
            return e[e.Sent] = "Sent", e[e.UploadProgress] = "UploadProgress", e[e.ResponseHeader] = "ResponseHeader", e[e.DownloadProgress] = "DownloadProgress", e[e.Response] = "Response", e[e.User] = "User", e
        }(), jd = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "OK";
            _classCallCheck(this, e), this.headers = t.headers || new Ad, this.status = void 0 !== t.status ? t.status : n, this.statusText = t.statusText || r, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
        }, Fd = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return _classCallCheck(this, n), (e = t.call(this, r)).type = Nd.ResponseHeader, e
            }

            return _createClass(n, [{
                key: "clone", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new n({
                        headers: e.headers || this.headers,
                        status: void 0 !== e.status ? e.status : this.status,
                        statusText: e.statusText || this.statusText,
                        url: e.url || this.url || void 0
                    })
                }
            }]), n
        }(jd), Ud = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return _classCallCheck(this, n), (e = t.call(this, r)).type = Nd.Response, e.body = void 0 !== r.body ? r.body : null, e
            }

            return _createClass(n, [{
                key: "clone", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new n({
                        body: void 0 !== e.body ? e.body : this.body,
                        headers: e.headers || this.headers,
                        status: void 0 !== e.status ? e.status : this.status,
                        statusText: e.statusText || this.statusText,
                        url: e.url || this.url || void 0
                    })
                }
            }]), n
        }(jd), Hd = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                var r;
                return _classCallCheck(this, n), (r = t.call(this, e, 0, "Unknown Error")).name = "HttpErrorResponse", r.ok = !1, r.message = r.status >= 200 && r.status < 300 ? "Http failure during parsing for ".concat(e.url || "(unknown url)") : "Http failure response for ".concat(e.url || "(unknown url)", ": ").concat(e.status, " ").concat(e.statusText), r.error = e.error || null, r
            }

            return n
        }(jd);

        function Ld(e, t) {
            return {
                body: t,
                headers: e.headers,
                observe: e.observe,
                params: e.params,
                reportProgress: e.reportProgress,
                responseType: e.responseType,
                withCredentials: e.withCredentials
            }
        }

        var zd, Bd, Gd, qd, Wd, Zd, Qd, Jd, Kd, $d, Yd = ((zd = function () {
                function e(t) {
                    _classCallCheck(this, e), this.handler = t
                }

                return _createClass(e, [{
                    key: "request", value: function (e, t) {
                        var n, r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (e instanceof Vd) n = e; else {
                            var o = void 0;
                            o = i.headers instanceof Ad ? i.headers : new Ad(i.headers);
                            var a = void 0;
                            i.params && (a = i.params instanceof Pd ? i.params : new Pd({fromObject: i.params})), n = new Vd(e, t, void 0 !== i.body ? i.body : null, {
                                headers: o,
                                params: a,
                                reportProgress: i.reportProgress,
                                responseType: i.responseType || "json",
                                withCredentials: i.withCredentials
                            })
                        }
                        var s = Ul(n).pipe(Ec((function (e) {
                            return r.handler.handle(e)
                        })));
                        if (e instanceof Vd || "events" === i.observe) return s;
                        var u = s.pipe(Jl((function (e) {
                            return e instanceof Ud
                        })));
                        switch (i.observe || "body") {
                            case"body":
                                switch (n.responseType) {
                                    case"arraybuffer":
                                        return u.pipe(U((function (e) {
                                            if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                            return e.body
                                        })));
                                    case"blob":
                                        return u.pipe(U((function (e) {
                                            if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                            return e.body
                                        })));
                                    case"text":
                                        return u.pipe(U((function (e) {
                                            if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                                            return e.body
                                        })));
                                    case"json":
                                    default:
                                        return u.pipe(U((function (e) {
                                            return e.body
                                        })))
                                }
                            case"response":
                                return u;
                            default:
                                throw new Error("Unreachable: unhandled observe type ".concat(i.observe, "}"))
                        }
                    }
                }, {
                    key: "delete", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("DELETE", e, t)
                    }
                }, {
                    key: "get", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("GET", e, t)
                    }
                }, {
                    key: "head", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("HEAD", e, t)
                    }
                }, {
                    key: "jsonp", value: function (e, t) {
                        return this.request("JSONP", e, {
                            params: (new Pd).append(t, "JSONP_CALLBACK"),
                            observe: "body",
                            responseType: "json"
                        })
                    }
                }, {
                    key: "options", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("OPTIONS", e, t)
                    }
                }, {
                    key: "patch", value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("PATCH", e, Ld(n, t))
                    }
                }, {
                    key: "post", value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("POST", e, Ld(n, t))
                    }
                }, {
                    key: "put", value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("PUT", e, Ld(n, t))
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || zd)(Je(Ed))
            }, zd.\u0275prov = he({token: zd, factory: zd.\u0275fac}), zd), Xd = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this.next = t, this.interceptor = n
                }

                return _createClass(e, [{
                    key: "handle", value: function (e) {
                        return this.interceptor.intercept(e, this.next)
                    }
                }]), e
            }(), ep = new He("HTTP_INTERCEPTORS"), tp = ((Bd = function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, [{
                    key: "intercept", value: function (e, t) {
                        return t.handle(e)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Bd)
            }, Bd.\u0275prov = he({token: Bd, factory: Bd.\u0275fac}), Bd), np = /^\)\]\}',?\n/, rp = function e() {
                _classCallCheck(this, e)
            }, ip = ((qd = function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, [{
                    key: "build", value: function () {
                        return new XMLHttpRequest
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || qd)
            }, qd.\u0275prov = he({token: qd, factory: qd.\u0275fac}), qd), op = ((Gd = function () {
                function e(t) {
                    _classCallCheck(this, e), this.xhrFactory = t
                }

                return _createClass(e, [{
                    key: "handle", value: function (e) {
                        var t = this;
                        if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                        return new w((function (n) {
                            var r = t.xhrFactory.build();
                            if (r.open(e.method, e.urlWithParams), e.withCredentials && (r.withCredentials = !0), e.headers.forEach((function (e, t) {
                                return r.setRequestHeader(e, t.join(","))
                            })), e.headers.has("Accept") || r.setRequestHeader("Accept", "application/json, text/plain, */*"), !e.headers.has("Content-Type")) {
                                var i = e.detectContentTypeHeader();
                                null !== i && r.setRequestHeader("Content-Type", i)
                            }
                            if (e.responseType) {
                                var o = e.responseType.toLowerCase();
                                r.responseType = "json" !== o ? o : "text"
                            }
                            var a = e.serializeBody(), s = null, u = function () {
                                if (null !== s) return s;
                                var t = 1223 === r.status ? 204 : r.status, n = r.statusText || "OK",
                                    i = new Ad(r.getAllResponseHeaders()), o = function (e) {
                                        return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
                                    }(r) || e.url;
                                return s = new Fd({headers: i, status: t, statusText: n, url: o})
                            }, l = function () {
                                var t = u(), i = t.headers, o = t.status, a = t.statusText, s = t.url, l = null;
                                204 !== o && (l = void 0 === r.response ? r.responseText : r.response), 0 === o && (o = l ? 200 : 0);
                                var c = o >= 200 && o < 300;
                                if ("json" === e.responseType && "string" == typeof l) {
                                    var h = l;
                                    l = l.replace(np, "");
                                    try {
                                        l = "" !== l ? JSON.parse(l) : null
                                    } catch (f) {
                                        l = h, c && (c = !1, l = {error: f, text: l})
                                    }
                                }
                                c ? (n.next(new Ud({
                                    body: l,
                                    headers: i,
                                    status: o,
                                    statusText: a,
                                    url: s || void 0
                                })), n.complete()) : n.error(new Hd({
                                    error: l,
                                    headers: i,
                                    status: o,
                                    statusText: a,
                                    url: s || void 0
                                }))
                            }, c = function (e) {
                                var t = u().url, i = new Hd({
                                    error: e,
                                    status: r.status || 0,
                                    statusText: r.statusText || "Unknown Error",
                                    url: t || void 0
                                });
                                n.error(i)
                            }, h = !1, f = function (t) {
                                h || (n.next(u()), h = !0);
                                var i = {type: Nd.DownloadProgress, loaded: t.loaded};
                                t.lengthComputable && (i.total = t.total), "text" === e.responseType && r.responseText && (i.partialText = r.responseText), n.next(i)
                            }, d = function (e) {
                                var t = {type: Nd.UploadProgress, loaded: e.loaded};
                                e.lengthComputable && (t.total = e.total), n.next(t)
                            };
                            return r.addEventListener("load", l), r.addEventListener("error", c), e.reportProgress && (r.addEventListener("progress", f), null !== a && r.upload && r.upload.addEventListener("progress", d)), r.send(a), n.next({type: Nd.Sent}), function () {
                                r.removeEventListener("error", c), r.removeEventListener("load", l), e.reportProgress && (r.removeEventListener("progress", f), null !== a && r.upload && r.upload.removeEventListener("progress", d)), r.abort()
                            }
                        }))
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Gd)(Je(rp))
            }, Gd.\u0275prov = he({token: Gd, factory: Gd.\u0275fac}), Gd), ap = new He("XSRF_COOKIE_NAME"),
            sp = new He("XSRF_HEADER_NAME"), up = function e() {
                _classCallCheck(this, e)
            }, lp = (($d = function () {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.doc = t, this.platform = n, this.cookieName = r, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                }

                return _createClass(e, [{
                    key: "getToken", value: function () {
                        if ("server" === this.platform) return null;
                        var e = this.doc.cookie || "";
                        return e !== this.lastCookieString && (this.parseCount++, this.lastToken = Hu(e, this.cookieName), this.lastCookieString = e), this.lastToken
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || $d)(Je(du), Je(ms), Je(ap))
            }, $d.\u0275prov = he({token: $d, factory: $d.\u0275fac}), $d), cp = ((Kd = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this.tokenService = t, this.headerName = n
                }

                return _createClass(e, [{
                    key: "intercept", value: function (e, t) {
                        var n = e.url.toLowerCase();
                        if ("GET" === e.method || "HEAD" === e.method || n.startsWith("//index.html")) return t.handle(e);
                        var r = this.tokenService.getToken();
                        return null === r || e.headers.has(this.headerName) || (e = e.clone({headers: e.headers.set(this.headerName, r)})), t.handle(e)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Kd)(Je(up), Je(sp))
            }, Kd.\u0275prov = he({token: Kd, factory: Kd.\u0275fac}), Kd), hp = ((Jd = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this.backend = t, this.injector = n, this.chain = null
                }

                return _createClass(e, [{
                    key: "handle", value: function (e) {
                        if (null === this.chain) {
                            var t = this.injector.get(ep, []);
                            this.chain = t.reduceRight((function (e, t) {
                                return new Xd(e, t)
                            }), this.backend)
                        }
                        return this.chain.handle(e)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Jd)(Je(Od), Je(io))
            }, Jd.\u0275prov = he({token: Jd, factory: Jd.\u0275fac}), Jd), fp = ((Qd = function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, null, [{
                    key: "disable", value: function () {
                        return {ngModule: e, providers: [{provide: cp, useClass: tp}]}
                    }
                }, {
                    key: "withOptions", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            ngModule: e,
                            providers: [t.cookieName ? {
                                provide: ap,
                                useValue: t.cookieName
                            } : [], t.headerName ? {provide: sp, useValue: t.headerName} : []]
                        }
                    }
                }]), e
            }()).\u0275mod = vt({type: Qd}), Qd.\u0275inj = fe({
                factory: function (e) {
                    return new (e || Qd)
                },
                providers: [cp, {provide: ep, useExisting: cp, multi: !0}, {provide: up, useClass: lp}, {
                    provide: ap,
                    useValue: "XSRF-TOKEN"
                }, {provide: sp, useValue: "X-XSRF-TOKEN"}]
            }), Qd), dp = ((Zd = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = vt({type: Zd}), Zd.\u0275inj = fe({
                factory: function (e) {
                    return new (e || Zd)
                },
                providers: [Yd, {provide: Ed, useClass: hp}, op, {provide: Od, useExisting: op}, ip, {
                    provide: rp,
                    useExisting: ip
                }],
                imports: [[fp.withOptions({cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN"})]]
            }), Zd), pp = ((Wd = function e(t) {
                var n = this;
                _classCallCheck(this, e), this.http = t, this.spellit = [], this.getSpells = function (e) {
                    n.http.get(e, {responseType: "json"}).subscribe((function (e) {
                        n.spellit = e
                    }))
                }
            }).\u0275prov = he({
                token: Wd, factory: Wd.\u0275fac = function (e) {
                    return new (e || Wd)(Je(Yd))
                }
            }), Wd);

        function vp(e, t) {
            return new w((function (n) {
                var r = e.length;
                if (0 !== r) for (var i = new Array(r), o = 0, a = 0, s = function (s) {
                    var u = B(e[s]), l = !1;
                    n.add(u.subscribe({
                        next: function (e) {
                            l || (l = !0, a++), i[s] = e
                        }, error: function (e) {
                            return n.error(e)
                        }, complete: function () {
                            ++o !== r && l || (a === r && n.next(t ? t.reduce((function (e, t, n) {
                                return e[t] = i[n], e
                            }), {}) : i), n.complete())
                        }
                    }))
                }, u = 0; u < r; u++) s(u); else n.complete()
            }))
        }

        var gp, yp, mp, _p, kp = new He("NgValueAccessor"), Cp = {
            provide: kp, useExisting: Se((function () {
                return wp
            })), multi: !0
        }, wp = ((gp = function () {
            function e(t, n) {
                _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this.onChange = function (e) {
                }, this.onTouched = function () {
                }
            }

            return _createClass(e, [{
                key: "writeValue", value: function (e) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "checked", e)
                }
            }, {
                key: "registerOnChange", value: function (e) {
                    this.onChange = e
                }
            }, {
                key: "registerOnTouched", value: function (e) {
                    this.onTouched = e
                }
            }, {
                key: "setDisabledState", value: function (e) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || gp)(bo(wa), bo(ma))
        }, gp.\u0275dir = yt({
            type: gp,
            selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
            hostBindings: function (e, t) {
                1 & e && Mo("change", (function (e) {
                    return t.onChange(e.target.checked)
                }))("blur", (function () {
                    return t.onTouched()
                }))
            },
            features: [pa([Cp])]
        }), gp), bp = {
            provide: kp, useExisting: Se((function () {
                return xp
            })), multi: !0
        }, Sp = new He("CompositionEventMode"), xp = ((_p = function () {
            function e(t, n, r) {
                var i;
                _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._compositionMode = r, this.onChange = function (e) {
                }, this.onTouched = function () {
                }, this._composing = !1, null == this._compositionMode && (this._compositionMode = (i = hu() ? hu().getUserAgent() : "", !/android (\d+)/.test(i.toLowerCase())))
            }

            return _createClass(e, [{
                key: "writeValue", value: function (e) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "value", null == e ? "" : e)
                }
            }, {
                key: "registerOnChange", value: function (e) {
                    this.onChange = e
                }
            }, {
                key: "registerOnTouched", value: function (e) {
                    this.onTouched = e
                }
            }, {
                key: "setDisabledState", value: function (e) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                }
            }, {
                key: "_handleInput", value: function (e) {
                    (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e)
                }
            }, {
                key: "_compositionStart", value: function () {
                    this._composing = !0
                }
            }, {
                key: "_compositionEnd", value: function (e) {
                    this._composing = !1, this._compositionMode && this.onChange(e)
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || _p)(bo(wa), bo(ma), bo(Sp, 8))
        }, _p.\u0275dir = yt({
            type: _p,
            selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
            hostBindings: function (e, t) {
                1 & e && Mo("input", (function (e) {
                    return t._handleInput(e.target.value)
                }))("blur", (function () {
                    return t.onTouched()
                }))("compositionstart", (function () {
                    return t._compositionStart()
                }))("compositionend", (function (e) {
                    return t._compositionEnd(e.target.value)
                }))
            },
            features: [pa([bp])]
        }), _p), Ep = ((mp = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "reset", value: function (e) {
                    this.control && this.control.reset(e)
                }
            }, {
                key: "hasError", value: function (e, t) {
                    return !!this.control && this.control.hasError(e, t)
                }
            }, {
                key: "getError", value: function (e, t) {
                    return this.control ? this.control.getError(e, t) : null
                }
            }, {
                key: "value", get: function () {
                    return this.control ? this.control.value : null
                }
            }, {
                key: "valid", get: function () {
                    return this.control ? this.control.valid : null
                }
            }, {
                key: "invalid", get: function () {
                    return this.control ? this.control.invalid : null
                }
            }, {
                key: "pending", get: function () {
                    return this.control ? this.control.pending : null
                }
            }, {
                key: "disabled", get: function () {
                    return this.control ? this.control.disabled : null
                }
            }, {
                key: "enabled", get: function () {
                    return this.control ? this.control.enabled : null
                }
            }, {
                key: "errors", get: function () {
                    return this.control ? this.control.errors : null
                }
            }, {
                key: "pristine", get: function () {
                    return this.control ? this.control.pristine : null
                }
            }, {
                key: "dirty", get: function () {
                    return this.control ? this.control.dirty : null
                }
            }, {
                key: "touched", get: function () {
                    return this.control ? this.control.touched : null
                }
            }, {
                key: "status", get: function () {
                    return this.control ? this.control.status : null
                }
            }, {
                key: "untouched", get: function () {
                    return this.control ? this.control.untouched : null
                }
            }, {
                key: "statusChanges", get: function () {
                    return this.control ? this.control.statusChanges : null
                }
            }, {
                key: "valueChanges", get: function () {
                    return this.control ? this.control.valueChanges : null
                }
            }, {
                key: "path", get: function () {
                    return null
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || mp)
        }, mp.\u0275dir = yt({type: mp}), mp), Op = ((yp = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }

            return _createClass(n, [{
                key: "formDirective", get: function () {
                    return null
                }
            }, {
                key: "path", get: function () {
                    return null
                }
            }]), n
        }(Ep)).\u0275fac = function (e) {
            return Ap(e || yp)
        }, yp.\u0275dir = yt({type: yp, features: [Yo]}), yp), Ap = Yn(Op);

        function Tp() {
            throw new Error("unimplemented")
        }

        var Ip, Pp = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e;
                return _classCallCheck(this, n), (e = t.apply(this, arguments))._parent = null, e.name = null, e.valueAccessor = null, e._rawValidators = [], e._rawAsyncValidators = [], e
            }

            return _createClass(n, [{
                key: "validator", get: function () {
                    return Tp()
                }
            }, {
                key: "asyncValidator", get: function () {
                    return Tp()
                }
            }]), n
        }(Ep), Rp = ((Ip = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e) {
                return _classCallCheck(this, n), t.call(this, e)
            }

            return n
        }(function () {
            function e(t) {
                _classCallCheck(this, e), this._cd = t
            }

            return _createClass(e, [{
                key: "ngClassUntouched", get: function () {
                    return !!this._cd.control && this._cd.control.untouched
                }
            }, {
                key: "ngClassTouched", get: function () {
                    return !!this._cd.control && this._cd.control.touched
                }
            }, {
                key: "ngClassPristine", get: function () {
                    return !!this._cd.control && this._cd.control.pristine
                }
            }, {
                key: "ngClassDirty", get: function () {
                    return !!this._cd.control && this._cd.control.dirty
                }
            }, {
                key: "ngClassValid", get: function () {
                    return !!this._cd.control && this._cd.control.valid
                }
            }, {
                key: "ngClassInvalid", get: function () {
                    return !!this._cd.control && this._cd.control.invalid
                }
            }, {
                key: "ngClassPending", get: function () {
                    return !!this._cd.control && this._cd.control.pending
                }
            }]), e
        }())).\u0275fac = function (e) {
            return new (e || Ip)(bo(Pp, 2))
        }, Ip.\u0275dir = yt({
            type: Ip,
            selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
            hostVars: 14,
            hostBindings: function (e, t) {
                2 & e && zo("ng-untouched", t.ngClassUntouched)("ng-touched", t.ngClassTouched)("ng-pristine", t.ngClassPristine)("ng-dirty", t.ngClassDirty)("ng-valid", t.ngClassValid)("ng-invalid", t.ngClassInvalid)("ng-pending", t.ngClassPending)
            },
            features: [Yo]
        }), Ip);

        function Mp(e) {
            return null == e || 0 === e.length
        }

        var Dp = new He("NgValidators"), Vp = new He("NgAsyncValidators"),
            Np = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            jp = function () {
                function e() {
                    _classCallCheck(this, e)
                }

                return _createClass(e, null, [{
                    key: "min", value: function (e) {
                        return function (t) {
                            if (Mp(t.value) || Mp(e)) return null;
                            var n = parseFloat(t.value);
                            return !isNaN(n) && n < e ? {min: {min: e, actual: t.value}} : null
                        }
                    }
                }, {
                    key: "max", value: function (e) {
                        return function (t) {
                            if (Mp(t.value) || Mp(e)) return null;
                            var n = parseFloat(t.value);
                            return !isNaN(n) && n > e ? {max: {max: e, actual: t.value}} : null
                        }
                    }
                }, {
                    key: "required", value: function (e) {
                        return Mp(e.value) ? {required: !0} : null
                    }
                }, {
                    key: "requiredTrue", value: function (e) {
                        return !0 === e.value ? null : {required: !0}
                    }
                }, {
                    key: "email", value: function (e) {
                        return Mp(e.value) || Np.test(e.value) ? null : {email: !0}
                    }
                }, {
                    key: "minLength", value: function (e) {
                        return function (t) {
                            if (Mp(t.value)) return null;
                            var n = t.value ? t.value.length : 0;
                            return n < e ? {minlength: {requiredLength: e, actualLength: n}} : null
                        }
                    }
                }, {
                    key: "maxLength", value: function (e) {
                        return function (t) {
                            var n = t.value ? t.value.length : 0;
                            return n > e ? {maxlength: {requiredLength: e, actualLength: n}} : null
                        }
                    }
                }, {
                    key: "pattern", value: function (t) {
                        return t ? ("string" == typeof t ? (r = "", "^" !== t.charAt(0) && (r += "^"), r += t, "$" !== t.charAt(t.length - 1) && (r += "$"), n = new RegExp(r)) : (r = t.toString(), n = t), function (e) {
                            if (Mp(e.value)) return null;
                            var t = e.value;
                            return n.test(t) ? null : {pattern: {requiredPattern: r, actualValue: t}}
                        }) : e.nullValidator;
                        var n, r
                    }
                }, {
                    key: "nullValidator", value: function (e) {
                        return null
                    }
                }, {
                    key: "compose", value: function (e) {
                        if (!e) return null;
                        var t = e.filter(Fp);
                        return 0 == t.length ? null : function (e) {
                            return Hp(function (e, t) {
                                return t.map((function (t) {
                                    return t(e)
                                }))
                            }(e, t))
                        }
                    }
                }, {
                    key: "composeAsync", value: function (e) {
                        if (!e) return null;
                        var t = e.filter(Fp);
                        return 0 == t.length ? null : function (e) {
                            return function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                if (1 === t.length) {
                                    var r = t[0];
                                    if (u(r)) return vp(r, null);
                                    if (l(r) && Object.getPrototypeOf(r) === Object.prototype) {
                                        var i = Object.keys(r);
                                        return vp(i.map((function (e) {
                                            return r[e]
                                        })), i)
                                    }
                                }
                                if ("function" == typeof t[t.length - 1]) {
                                    var o = t.pop();
                                    return vp(t = 1 === t.length && u(t[0]) ? t[0] : t, null).pipe(U((function (e) {
                                        return o.apply(void 0, _toConsumableArray(e))
                                    })))
                                }
                                return vp(t, null)
                            }(function (e, t) {
                                return t.map((function (t) {
                                    return t(e)
                                }))
                            }(e, t).map(Up)).pipe(U(Hp))
                        }
                    }
                }]), e
            }();

        function Fp(e) {
            return null != e
        }

        function Up(e) {
            var t = Po(e) ? B(e) : e;
            if (!Ro(t)) throw new Error("Expected validator to return Promise or Observable.");
            return t
        }

        function Hp(e) {
            var t = {};
            return e.forEach((function (e) {
                t = null != e ? Object.assign(Object.assign({}, t), e) : t
            })), 0 === Object.keys(t).length ? null : t
        }

        function Lp(e) {
            return e.validate ? function (t) {
                return e.validate(t)
            } : e
        }

        function zp(e) {
            return e.validate ? function (t) {
                return e.validate(t)
            } : e
        }

        var Bp, Gp, qp, Wp, Zp = {
                provide: kp, useExisting: Se((function () {
                    return Qp
                })), multi: !0
            }, Qp = ((Bp = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this.onChange = function (e) {
                    }, this.onTouched = function () {
                    }
                }

                return _createClass(e, [{
                    key: "writeValue", value: function (e) {
                        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == e ? "" : e)
                    }
                }, {
                    key: "registerOnChange", value: function (e) {
                        this.onChange = function (t) {
                            e("" == t ? null : parseFloat(t))
                        }
                    }
                }, {
                    key: "registerOnTouched", value: function (e) {
                        this.onTouched = e
                    }
                }, {
                    key: "setDisabledState", value: function (e) {
                        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Bp)(bo(wa), bo(ma))
            }, Bp.\u0275dir = yt({
                type: Bp,
                selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
                hostBindings: function (e, t) {
                    1 & e && Mo("change", (function (e) {
                        return t.onChange(e.target.value)
                    }))("input", (function (e) {
                        return t.onChange(e.target.value)
                    }))("blur", (function () {
                        return t.onTouched()
                    }))
                },
                features: [pa([Zp])]
            }), Bp), Jp = {
                provide: kp, useExisting: Se((function () {
                    return $p
                })), multi: !0
            }, Kp = ((qp = function () {
                function e() {
                    _classCallCheck(this, e), this._accessors = []
                }

                return _createClass(e, [{
                    key: "add", value: function (e, t) {
                        this._accessors.push([e, t])
                    }
                }, {
                    key: "remove", value: function (e) {
                        for (var t = this._accessors.length - 1; t >= 0; --t) if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1)
                    }
                }, {
                    key: "select", value: function (e) {
                        var t = this;
                        this._accessors.forEach((function (n) {
                            t._isSameGroup(n, e) && n[1] !== e && n[1].fireUncheck(e.value)
                        }))
                    }
                }, {
                    key: "_isSameGroup", value: function (e, t) {
                        return !!e[0].control && e[0]._parent === t._control._parent && e[1].name === t.name
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || qp)
            }, qp.\u0275prov = he({token: qp, factory: qp.\u0275fac}), qp), $p = ((Gp = function () {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._registry = r, this._injector = i, this.onChange = function () {
                    }, this.onTouched = function () {
                    }
                }

                return _createClass(e, [{
                    key: "ngOnInit", value: function () {
                        this._control = this._injector.get(Pp), this._checkName(), this._registry.add(this._control, this)
                    }
                }, {
                    key: "ngOnDestroy", value: function () {
                        this._registry.remove(this)
                    }
                }, {
                    key: "writeValue", value: function (e) {
                        this._state = e === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
                    }
                }, {
                    key: "registerOnChange", value: function (e) {
                        var t = this;
                        this._fn = e, this.onChange = function () {
                            e(t.value), t._registry.select(t)
                        }
                    }
                }, {
                    key: "fireUncheck", value: function (e) {
                        this.writeValue(e)
                    }
                }, {
                    key: "registerOnTouched", value: function (e) {
                        this.onTouched = e
                    }
                }, {
                    key: "setDisabledState", value: function (e) {
                        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                    }
                }, {
                    key: "_checkName", value: function () {
                        this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
                    }
                }, {
                    key: "_throwNameError", value: function () {
                        throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Gp)(bo(wa), bo(ma), bo(Kp), bo(io))
            }, Gp.\u0275dir = yt({
                type: Gp,
                selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
                hostBindings: function (e, t) {
                    1 & e && Mo("change", (function () {
                        return t.onChange()
                    }))("blur", (function () {
                        return t.onTouched()
                    }))
                },
                inputs: {name: "name", formControlName: "formControlName", value: "value"},
                features: [pa([Jp])]
            }), Gp), Yp = {
                provide: kp, useExisting: Se((function () {
                    return Xp
                })), multi: !0
            }, Xp = ((Wp = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this.onChange = function (e) {
                    }, this.onTouched = function () {
                    }
                }

                return _createClass(e, [{
                    key: "writeValue", value: function (e) {
                        this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(e))
                    }
                }, {
                    key: "registerOnChange", value: function (e) {
                        this.onChange = function (t) {
                            e("" == t ? null : parseFloat(t))
                        }
                    }
                }, {
                    key: "registerOnTouched", value: function (e) {
                        this.onTouched = e
                    }
                }, {
                    key: "setDisabledState", value: function (e) {
                        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || Wp)(bo(wa), bo(ma))
            }, Wp.\u0275dir = yt({
                type: Wp,
                selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
                hostBindings: function (e, t) {
                    1 & e && Mo("change", (function (e) {
                        return t.onChange(e.target.value)
                    }))("input", (function (e) {
                        return t.onChange(e.target.value)
                    }))("blur", (function () {
                        return t.onTouched()
                    }))
                },
                features: [pa([Yp])]
            }), Wp),
            ev = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
            tv = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
            nv = {
                provide: kp, useExisting: Se((function () {
                    return av
                })), multi: !0
            };

        function rv(e, t) {
            return null == e ? "".concat(t) : (t && "object" == typeof t && (t = "Object"), "".concat(e, ": ").concat(t).slice(0, 50))
        }

        var iv, ov, av = ((ov = function () {
                function e(t, n) {
                    _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (e) {
                    }, this.onTouched = function () {
                    }, this._compareWith = fo
                }

                return _createClass(e, [{
                    key: "writeValue", value: function (e) {
                        this.value = e;
                        var t = this._getOptionId(e);
                        null == t && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
                        var n = rv(t, e);
                        this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
                    }
                }, {
                    key: "registerOnChange", value: function (e) {
                        var t = this;
                        this.onChange = function (n) {
                            t.value = t._getOptionValue(n), e(t.value)
                        }
                    }
                }, {
                    key: "registerOnTouched", value: function (e) {
                        this.onTouched = e
                    }
                }, {
                    key: "setDisabledState", value: function (e) {
                        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                    }
                }, {
                    key: "_registerOption", value: function () {
                        return (this._idCounter++).toString()
                    }
                }, {
                    key: "_getOptionId", value: function (e) {
                        for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                            var r = n[t];
                            if (this._compareWith(this._optionMap.get(r), e)) return r
                        }
                        return null
                    }
                }, {
                    key: "_getOptionValue", value: function (e) {
                        var t = function (e) {
                            return e.split(":")[0]
                        }(e);
                        return this._optionMap.has(t) ? this._optionMap.get(t) : e
                    }
                }, {
                    key: "compareWith", set: function (e) {
                        if ("function" != typeof e) throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(e)));
                        this._compareWith = e
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || ov)(bo(wa), bo(ma))
            }, ov.\u0275dir = yt({
                type: ov,
                selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
                hostBindings: function (e, t) {
                    1 & e && Mo("change", (function (e) {
                        return t.onChange(e.target.value)
                    }))("blur", (function () {
                        return t.onTouched()
                    }))
                },
                inputs: {compareWith: "compareWith"},
                features: [pa([nv])]
            }), ov), sv = ((iv = function () {
                function e(t, n, r) {
                    _classCallCheck(this, e), this._element = t, this._renderer = n, this._select = r, this._select && (this.id = this._select._registerOption())
                }

                return _createClass(e, [{
                    key: "_setElementValue", value: function (e) {
                        this._renderer.setProperty(this._element.nativeElement, "value", e)
                    }
                }, {
                    key: "ngOnDestroy", value: function () {
                        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
                    }
                }, {
                    key: "ngValue", set: function (e) {
                        null != this._select && (this._select._optionMap.set(this.id, e), this._setElementValue(rv(this.id, e)), this._select.writeValue(this._select.value))
                    }
                }, {
                    key: "value", set: function (e) {
                        this._setElementValue(e), this._select && this._select.writeValue(this._select.value)
                    }
                }]), e
            }()).\u0275fac = function (e) {
                return new (e || iv)(bo(ma), bo(wa), bo(av, 9))
            }, iv.\u0275dir = yt({type: iv, selectors: [["option"]], inputs: {ngValue: "ngValue", value: "value"}}), iv),
            uv = {
                provide: kp, useExisting: Se((function () {
                    return fv
                })), multi: !0
            };

        function lv(e, t) {
            return null == e ? "".concat(t) : ("string" == typeof t && (t = "'".concat(t, "'")), t && "object" == typeof t && (t = "Object"), "".concat(e, ": ").concat(t).slice(0, 50))
        }

        var cv, hv, fv = ((hv = function () {
            function e(t, n) {
                _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (e) {
                }, this.onTouched = function () {
                }, this._compareWith = fo
            }

            return _createClass(e, [{
                key: "writeValue", value: function (e) {
                    var t, n = this;
                    if (this.value = e, Array.isArray(e)) {
                        var r = e.map((function (e) {
                            return n._getOptionId(e)
                        }));
                        t = function (e, t) {
                            e._setSelected(r.indexOf(t.toString()) > -1)
                        }
                    } else t = function (e, t) {
                        e._setSelected(!1)
                    };
                    this._optionMap.forEach(t)
                }
            }, {
                key: "registerOnChange", value: function (e) {
                    var t = this;
                    this.onChange = function (n) {
                        var r = [];
                        if (n.hasOwnProperty("selectedOptions")) for (var i = n.selectedOptions, o = 0; o < i.length; o++) {
                            var a = i.item(o), s = t._getOptionValue(a.value);
                            r.push(s)
                        } else for (var u = n.options, l = 0; l < u.length; l++) {
                            var c = u.item(l);
                            if (c.selected) {
                                var h = t._getOptionValue(c.value);
                                r.push(h)
                            }
                        }
                        t.value = r, e(r)
                    }
                }
            }, {
                key: "registerOnTouched", value: function (e) {
                    this.onTouched = e
                }
            }, {
                key: "setDisabledState", value: function (e) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
                }
            }, {
                key: "_registerOption", value: function (e) {
                    var t = (this._idCounter++).toString();
                    return this._optionMap.set(t, e), t
                }
            }, {
                key: "_getOptionId", value: function (e) {
                    for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                        var r = n[t];
                        if (this._compareWith(this._optionMap.get(r)._value, e)) return r
                    }
                    return null
                }
            }, {
                key: "_getOptionValue", value: function (e) {
                    var t = function (e) {
                        return e.split(":")[0]
                    }(e);
                    return this._optionMap.has(t) ? this._optionMap.get(t)._value : e
                }
            }, {
                key: "compareWith", set: function (e) {
                    if ("function" != typeof e) throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(e)));
                    this._compareWith = e
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || hv)(bo(wa), bo(ma))
        }, hv.\u0275dir = yt({
            type: hv,
            selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
            hostBindings: function (e, t) {
                1 & e && Mo("change", (function (e) {
                    return t.onChange(e.target)
                }))("blur", (function () {
                    return t.onTouched()
                }))
            },
            inputs: {compareWith: "compareWith"},
            features: [pa([uv])]
        }), hv), dv = ((cv = function () {
            function e(t, n, r) {
                _classCallCheck(this, e), this._element = t, this._renderer = n, this._select = r, this._select && (this.id = this._select._registerOption(this))
            }

            return _createClass(e, [{
                key: "_setElementValue", value: function (e) {
                    this._renderer.setProperty(this._element.nativeElement, "value", e)
                }
            }, {
                key: "_setSelected", value: function (e) {
                    this._renderer.setProperty(this._element.nativeElement, "selected", e)
                }
            }, {
                key: "ngOnDestroy", value: function () {
                    this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
                }
            }, {
                key: "ngValue", set: function (e) {
                    null != this._select && (this._value = e, this._setElementValue(lv(this.id, e)), this._select.writeValue(this._select.value))
                }
            }, {
                key: "value", set: function (e) {
                    this._select ? (this._value = e, this._setElementValue(lv(this.id, e)), this._select.writeValue(this._select.value)) : this._setElementValue(e)
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || cv)(bo(ma), bo(wa), bo(fv, 9))
        }, cv.\u0275dir = yt({type: cv, selectors: [["option"]], inputs: {ngValue: "ngValue", value: "value"}}), cv);

        function pv(e, t) {
            return [].concat(_toConsumableArray(t.path), [e])
        }

        function vv(e, t) {
            e || yv(t, "Cannot find control with"), t.valueAccessor || yv(t, "No value accessor for form control with"), e.validator = jp.compose([e.validator, t.validator]), e.asyncValidator = jp.composeAsync([e.asyncValidator, t.asyncValidator]), t.valueAccessor.writeValue(e.value), function (e, t) {
                t.valueAccessor.registerOnChange((function (n) {
                    e._pendingValue = n, e._pendingChange = !0, e._pendingDirty = !0, "change" === e.updateOn && gv(e, t)
                }))
            }(e, t), function (e, t) {
                e.registerOnChange((function (e, n) {
                    t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e)
                }))
            }(e, t), function (e, t) {
                t.valueAccessor.registerOnTouched((function () {
                    e._pendingTouched = !0, "blur" === e.updateOn && e._pendingChange && gv(e, t), "submit" !== e.updateOn && e.markAsTouched()
                }))
            }(e, t), t.valueAccessor.setDisabledState && e.registerOnDisabledChange((function (e) {
                t.valueAccessor.setDisabledState(e)
            })), t._rawValidators.forEach((function (t) {
                t.registerOnValidatorChange && t.registerOnValidatorChange((function () {
                    return e.updateValueAndValidity()
                }))
            })), t._rawAsyncValidators.forEach((function (t) {
                t.registerOnValidatorChange && t.registerOnValidatorChange((function () {
                    return e.updateValueAndValidity()
                }))
            }))
        }

        function gv(e, t) {
            e._pendingDirty && e.markAsDirty(), e.setValue(e._pendingValue, {emitModelToViewChange: !1}), t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1
        }

        function yv(e, t) {
            var n;
            throw n = e.path.length > 1 ? "path: '".concat(e.path.join(" -> "), "'") : e.path[0] ? "name: '".concat(e.path, "'") : "unspecified name attribute", new Error("".concat(t, " ").concat(n))
        }

        function mv(e) {
            return null != e ? jp.compose(e.map(Lp)) : null
        }

        function _v(e) {
            return null != e ? jp.composeAsync(e.map(zp)) : null
        }

        var kv = [wp, Xp, Qp, av, fv, $p];

        function Cv(e) {
            var t = bv(e) ? e.validators : e;
            return Array.isArray(t) ? mv(t) : t || null
        }

        function wv(e, t) {
            var n = bv(t) ? t.asyncValidators : e;
            return Array.isArray(n) ? _v(n) : n || null
        }

        function bv(e) {
            return null != e && !Array.isArray(e) && "object" == typeof e
        }

        var Sv, xv, Ev, Ov, Av, Tv, Iv = function () {
            function e(t, n) {
                _classCallCheck(this, e), this.validator = t, this.asyncValidator = n, this._onCollectionChange = function () {
                }, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
            }

            return _createClass(e, [{
                key: "setValidators", value: function (e) {
                    this.validator = Cv(e)
                }
            }, {
                key: "setAsyncValidators", value: function (e) {
                    this.asyncValidator = wv(e)
                }
            }, {
                key: "clearValidators", value: function () {
                    this.validator = null
                }
            }, {
                key: "clearAsyncValidators", value: function () {
                    this.asyncValidator = null
                }
            }, {
                key: "markAsTouched", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.touched = !0, this._parent && !e.onlySelf && this._parent.markAsTouched(e)
                }
            }, {
                key: "markAllAsTouched", value: function () {
                    this.markAsTouched({onlySelf: !0}), this._forEachChild((function (e) {
                        return e.markAllAsTouched()
                    }))
                }
            }, {
                key: "markAsUntouched", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.touched = !1, this._pendingTouched = !1, this._forEachChild((function (e) {
                        e.markAsUntouched({onlySelf: !0})
                    })), this._parent && !e.onlySelf && this._parent._updateTouched(e)
                }
            }, {
                key: "markAsDirty", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.pristine = !1, this._parent && !e.onlySelf && this._parent.markAsDirty(e)
                }
            }, {
                key: "markAsPristine", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.pristine = !0, this._pendingDirty = !1, this._forEachChild((function (e) {
                        e.markAsPristine({onlySelf: !0})
                    })), this._parent && !e.onlySelf && this._parent._updatePristine(e)
                }
            }, {
                key: "markAsPending", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.status = "PENDING", !1 !== e.emitEvent && this.statusChanges.emit(this.status), this._parent && !e.onlySelf && this._parent.markAsPending(e)
                }
            }, {
                key: "disable", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this._parentMarkedDirty(e.onlySelf);
                    this.status = "DISABLED", this.errors = null, this._forEachChild((function (t) {
                        t.disable(Object.assign(Object.assign({}, e), {onlySelf: !0}))
                    })), this._updateValue(), !1 !== e.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, e), {skipPristineCheck: t})), this._onDisabledChange.forEach((function (e) {
                        return e(!0)
                    }))
                }
            }, {
                key: "enable", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this._parentMarkedDirty(e.onlySelf);
                    this.status = "VALID", this._forEachChild((function (t) {
                        t.enable(Object.assign(Object.assign({}, e), {onlySelf: !0}))
                    })), this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    }), this._updateAncestors(Object.assign(Object.assign({}, e), {skipPristineCheck: t})), this._onDisabledChange.forEach((function (e) {
                        return e(!1)
                    }))
                }
            }, {
                key: "_updateAncestors", value: function (e) {
                    this._parent && !e.onlySelf && (this._parent.updateValueAndValidity(e), e.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
                }
            }, {
                key: "setParent", value: function (e) {
                    this._parent = e
                }
            }, {
                key: "updateValueAndValidity", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(e.emitEvent)), !1 !== e.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e)
                }
            }, {
                key: "_updateTreeValidity", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {emitEvent: !0};
                    this._forEachChild((function (t) {
                        return t._updateTreeValidity(e)
                    })), this.updateValueAndValidity({onlySelf: !0, emitEvent: e.emitEvent})
                }
            }, {
                key: "_setInitialStatus", value: function () {
                    this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
                }
            }, {
                key: "_runValidator", value: function () {
                    return this.validator ? this.validator(this) : null
                }
            }, {
                key: "_runAsyncValidator", value: function (e) {
                    var t = this;
                    if (this.asyncValidator) {
                        this.status = "PENDING";
                        var n = Up(this.asyncValidator(this));
                        this._asyncValidationSubscription = n.subscribe((function (n) {
                            return t.setErrors(n, {emitEvent: e})
                        }))
                    }
                }
            }, {
                key: "_cancelExistingSubscription", value: function () {
                    this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
                }
            }, {
                key: "setErrors", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.errors = e, this._updateControlsErrors(!1 !== t.emitEvent)
                }
            }, {
                key: "get", value: function (e) {
                    return function (e, t, n) {
                        if (null == t) return null;
                        if (Array.isArray(t) || (t = t.split(".")), Array.isArray(t) && 0 === t.length) return null;
                        var r = e;
                        return t.forEach((function (e) {
                            r = r instanceof Rv ? r.controls.hasOwnProperty(e) ? r.controls[e] : null : r instanceof Mv && r.at(e) || null
                        })), r
                    }(this, e)
                }
            }, {
                key: "getError", value: function (e, t) {
                    var n = t ? this.get(t) : this;
                    return n && n.errors ? n.errors[e] : null
                }
            }, {
                key: "hasError", value: function (e, t) {
                    return !!this.getError(e, t)
                }
            }, {
                key: "_updateControlsErrors", value: function (e) {
                    this.status = this._calculateStatus(), e && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(e)
                }
            }, {
                key: "_initObservables", value: function () {
                    this.valueChanges = new hs, this.statusChanges = new hs
                }
            }, {
                key: "_calculateStatus", value: function () {
                    return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
                }
            }, {
                key: "_anyControlsHaveStatus", value: function (e) {
                    return this._anyControls((function (t) {
                        return t.status === e
                    }))
                }
            }, {
                key: "_anyControlsDirty", value: function () {
                    return this._anyControls((function (e) {
                        return e.dirty
                    }))
                }
            }, {
                key: "_anyControlsTouched", value: function () {
                    return this._anyControls((function (e) {
                        return e.touched
                    }))
                }
            }, {
                key: "_updatePristine", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.pristine = !this._anyControlsDirty(), this._parent && !e.onlySelf && this._parent._updatePristine(e)
                }
            }, {
                key: "_updateTouched", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.touched = this._anyControlsTouched(), this._parent && !e.onlySelf && this._parent._updateTouched(e)
                }
            }, {
                key: "_isBoxedValue", value: function (e) {
                    return "object" == typeof e && null !== e && 2 === Object.keys(e).length && "value" in e && "disabled" in e
                }
            }, {
                key: "_registerOnCollectionChange", value: function (e) {
                    this._onCollectionChange = e
                }
            }, {
                key: "_setUpdateStrategy", value: function (e) {
                    bv(e) && null != e.updateOn && (this._updateOn = e.updateOn)
                }
            }, {
                key: "_parentMarkedDirty", value: function (e) {
                    return !e && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
                }
            }, {
                key: "parent", get: function () {
                    return this._parent
                }
            }, {
                key: "valid", get: function () {
                    return "VALID" === this.status
                }
            }, {
                key: "invalid", get: function () {
                    return "INVALID" === this.status
                }
            }, {
                key: "pending", get: function () {
                    return "PENDING" == this.status
                }
            }, {
                key: "disabled", get: function () {
                    return "DISABLED" === this.status
                }
            }, {
                key: "enabled", get: function () {
                    return "DISABLED" !== this.status
                }
            }, {
                key: "dirty", get: function () {
                    return !this.pristine
                }
            }, {
                key: "untouched", get: function () {
                    return !this.touched
                }
            }, {
                key: "updateOn", get: function () {
                    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
                }
            }, {
                key: "root", get: function () {
                    for (var e = this; e._parent;) e = e._parent;
                    return e
                }
            }]), e
        }(), Pv = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0;
                return _classCallCheck(this, n), (e = t.call(this, Cv(i), wv(o, i)))._onChange = [], e._applyFormState(r), e._setUpdateStrategy(i), e.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }), e._initObservables(), e
            }

            return _createClass(n, [{
                key: "setValue", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.value = this._pendingValue = e, this._onChange.length && !1 !== n.emitModelToViewChange && this._onChange.forEach((function (e) {
                        return e(t.value, !1 !== n.emitViewToModelChange)
                    })), this.updateValueAndValidity(n)
                }
            }, {
                key: "patchValue", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.setValue(e, t)
                }
            }, {
                key: "reset", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._applyFormState(e), this.markAsPristine(t), this.markAsUntouched(t), this.setValue(this.value, t), this._pendingChange = !1
                }
            }, {
                key: "_updateValue", value: function () {
                }
            }, {
                key: "_anyControls", value: function (e) {
                    return !1
                }
            }, {
                key: "_allControlsDisabled", value: function () {
                    return this.disabled
                }
            }, {
                key: "registerOnChange", value: function (e) {
                    this._onChange.push(e)
                }
            }, {
                key: "_clearChangeFns", value: function () {
                    this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function () {
                    }
                }
            }, {
                key: "registerOnDisabledChange", value: function (e) {
                    this._onDisabledChange.push(e)
                }
            }, {
                key: "_forEachChild", value: function (e) {
                }
            }, {
                key: "_syncPendingControls", value: function () {
                    return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
                        onlySelf: !0,
                        emitModelToViewChange: !1
                    }), 0))
                }
            }, {
                key: "_applyFormState", value: function (e) {
                    this._isBoxedValue(e) ? (this.value = this._pendingValue = e.value, e.disabled ? this.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }) : this.enable({onlySelf: !0, emitEvent: !1})) : this.value = this._pendingValue = e
                }
            }]), n
        }(Iv), Rv = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, Cv(r), wv(i, r))).controls = e, o._initObservables(), o._setUpdateStrategy(r), o._setUpControls(), o.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }), o
            }

            return _createClass(n, [{
                key: "registerControl", value: function (e, t) {
                    return this.controls[e] ? this.controls[e] : (this.controls[e] = t, t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange), t)
                }
            }, {
                key: "addControl", value: function (e, t) {
                    this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange()
                }
            }, {
                key: "removeControl", value: function (e) {
                    this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {
                    })), delete this.controls[e], this.updateValueAndValidity(), this._onCollectionChange()
                }
            }, {
                key: "setControl", value: function (e, t) {
                    this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {
                    })), delete this.controls[e], t && this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange()
                }
            }, {
                key: "contains", value: function (e) {
                    return this.controls.hasOwnProperty(e) && this.controls[e].enabled
                }
            }, {
                key: "setValue", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._checkAllValuesPresent(e), Object.keys(e).forEach((function (r) {
                        t._throwIfControlMissing(r), t.controls[r].setValue(e[r], {
                            onlySelf: !0,
                            emitEvent: n.emitEvent
                        })
                    })), this.updateValueAndValidity(n)
                }
            }, {
                key: "patchValue", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object.keys(e).forEach((function (r) {
                        t.controls[r] && t.controls[r].patchValue(e[r], {onlySelf: !0, emitEvent: n.emitEvent})
                    })), this.updateValueAndValidity(n)
                }
            }, {
                key: "reset", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._forEachChild((function (n, r) {
                        n.reset(e[r], {onlySelf: !0, emitEvent: t.emitEvent})
                    })), this._updatePristine(t), this._updateTouched(t), this.updateValueAndValidity(t)
                }
            }, {
                key: "getRawValue", value: function () {
                    return this._reduceChildren({}, (function (e, t, n) {
                        return e[n] = t instanceof Pv ? t.value : t.getRawValue(), e
                    }))
                }
            }, {
                key: "_syncPendingControls", value: function () {
                    var e = this._reduceChildren(!1, (function (e, t) {
                        return !!t._syncPendingControls() || e
                    }));
                    return e && this.updateValueAndValidity({onlySelf: !0}), e
                }
            }, {
                key: "_throwIfControlMissing", value: function (e) {
                    if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    if (!this.controls[e]) throw new Error("Cannot find form control with name: ".concat(e, "."))
                }
            }, {
                key: "_forEachChild", value: function (e) {
                    var t = this;
                    Object.keys(this.controls).forEach((function (n) {
                        return e(t.controls[n], n)
                    }))
                }
            }, {
                key: "_setUpControls", value: function () {
                    var e = this;
                    this._forEachChild((function (t) {
                        t.setParent(e), t._registerOnCollectionChange(e._onCollectionChange)
                    }))
                }
            }, {
                key: "_updateValue", value: function () {
                    this.value = this._reduceValue()
                }
            }, {
                key: "_anyControls", value: function (e) {
                    var t = this, n = !1;
                    return this._forEachChild((function (r, i) {
                        n = n || t.contains(i) && e(r)
                    })), n
                }
            }, {
                key: "_reduceValue", value: function () {
                    var e = this;
                    return this._reduceChildren({}, (function (t, n, r) {
                        return (n.enabled || e.disabled) && (t[r] = n.value), t
                    }))
                }
            }, {
                key: "_reduceChildren", value: function (e, t) {
                    var n = e;
                    return this._forEachChild((function (e, r) {
                        n = t(n, e, r)
                    })), n
                }
            }, {
                key: "_allControlsDisabled", value: function () {
                    for (var e = 0, t = Object.keys(this.controls); e < t.length; e++) {
                        var n = t[e];
                        if (this.controls[n].enabled) return !1
                    }
                    return Object.keys(this.controls).length > 0 || this.disabled
                }
            }, {
                key: "_checkAllValuesPresent", value: function (e) {
                    this._forEachChild((function (t, n) {
                        if (void 0 === e[n]) throw new Error("Must supply a value for form control with name: '".concat(n, "'."))
                    }))
                }
            }]), n
        }(Iv), Mv = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this, Cv(r), wv(i, r))).controls = e, o._initObservables(), o._setUpdateStrategy(r), o._setUpControls(), o.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }), o
            }

            return _createClass(n, [{
                key: "at", value: function (e) {
                    return this.controls[e]
                }
            }, {
                key: "push", value: function (e) {
                    this.controls.push(e), this._registerControl(e), this.updateValueAndValidity(), this._onCollectionChange()
                }
            }, {
                key: "insert", value: function (e, t) {
                    this.controls.splice(e, 0, t), this._registerControl(t), this.updateValueAndValidity()
                }
            }, {
                key: "removeAt", value: function (e) {
                    this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {
                    })), this.controls.splice(e, 1), this.updateValueAndValidity()
                }
            }, {
                key: "setControl", value: function (e, t) {
                    this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {
                    })), this.controls.splice(e, 1), t && (this.controls.splice(e, 0, t), this._registerControl(t)), this.updateValueAndValidity(), this._onCollectionChange()
                }
            }, {
                key: "setValue", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._checkAllValuesPresent(e), e.forEach((function (e, r) {
                        t._throwIfControlMissing(r), t.at(r).setValue(e, {onlySelf: !0, emitEvent: n.emitEvent})
                    })), this.updateValueAndValidity(n)
                }
            }, {
                key: "patchValue", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.forEach((function (e, r) {
                        t.at(r) && t.at(r).patchValue(e, {onlySelf: !0, emitEvent: n.emitEvent})
                    })), this.updateValueAndValidity(n)
                }
            }, {
                key: "reset", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._forEachChild((function (n, r) {
                        n.reset(e[r], {onlySelf: !0, emitEvent: t.emitEvent})
                    })), this._updatePristine(t), this._updateTouched(t), this.updateValueAndValidity(t)
                }
            }, {
                key: "getRawValue", value: function () {
                    return this.controls.map((function (e) {
                        return e instanceof Pv ? e.value : e.getRawValue()
                    }))
                }
            }, {
                key: "clear", value: function () {
                    this.controls.length < 1 || (this._forEachChild((function (e) {
                        return e._registerOnCollectionChange((function () {
                        }))
                    })), this.controls.splice(0), this.updateValueAndValidity())
                }
            }, {
                key: "_syncPendingControls", value: function () {
                    var e = this.controls.reduce((function (e, t) {
                        return !!t._syncPendingControls() || e
                    }), !1);
                    return e && this.updateValueAndValidity({onlySelf: !0}), e
                }
            }, {
                key: "_throwIfControlMissing", value: function (e) {
                    if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    if (!this.at(e)) throw new Error("Cannot find form control at index ".concat(e))
                }
            }, {
                key: "_forEachChild", value: function (e) {
                    this.controls.forEach((function (t, n) {
                        e(t, n)
                    }))
                }
            }, {
                key: "_updateValue", value: function () {
                    var e = this;
                    this.value = this.controls.filter((function (t) {
                        return t.enabled || e.disabled
                    })).map((function (e) {
                        return e.value
                    }))
                }
            }, {
                key: "_anyControls", value: function (e) {
                    return this.controls.some((function (t) {
                        return t.enabled && e(t)
                    }))
                }
            }, {
                key: "_setUpControls", value: function () {
                    var e = this;
                    this._forEachChild((function (t) {
                        return e._registerControl(t)
                    }))
                }
            }, {
                key: "_checkAllValuesPresent", value: function (e) {
                    this._forEachChild((function (t, n) {
                        if (void 0 === e[n]) throw new Error("Must supply a value for form control at index: ".concat(n, "."))
                    }))
                }
            }, {
                key: "_allControlsDisabled", value: function () {
                    var e, t = _createForOfIteratorHelper(this.controls);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            if (e.value.enabled) return !1
                        }
                    } catch (n) {
                        t.e(n)
                    } finally {
                        t.f()
                    }
                    return this.controls.length > 0 || this.disabled
                }
            }, {
                key: "_registerControl", value: function (e) {
                    e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange)
                }
            }, {
                key: "length", get: function () {
                    return this.controls.length
                }
            }]), n
        }(Iv), Dv = {
            provide: Op, useExisting: Se((function () {
                return Nv
            }))
        }, Vv = Promise.resolve(null), Nv = ((xv = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this)).submitted = !1, i._directives = [], i.ngSubmit = new hs, i.form = new Rv({}, mv(e), _v(r)), i
            }

            return _createClass(n, [{
                key: "ngAfterViewInit", value: function () {
                    this._setUpdateStrategy()
                }
            }, {
                key: "addControl", value: function (e) {
                    var t = this;
                    Vv.then((function () {
                        var n = t._findContainer(e.path);
                        e.control = n.registerControl(e.name, e.control), vv(e.control, e), e.control.updateValueAndValidity({emitEvent: !1}), t._directives.push(e)
                    }))
                }
            }, {
                key: "getControl", value: function (e) {
                    return this.form.get(e.path)
                }
            }, {
                key: "removeControl", value: function (e) {
                    var t = this;
                    Vv.then((function () {
                        var n, r, i, o = t._findContainer(e.path);
                        o && o.removeControl(e.name), n = t._directives, r = e, (i = n.indexOf(r)) > -1 && n.splice(i, 1)
                    }))
                }
            }, {
                key: "addFormGroup", value: function (e) {
                    var t = this;
                    Vv.then((function () {
                        var n = t._findContainer(e.path), r = new Rv({});
                        (function (e, t) {
                            null == e && yv(t, "Cannot find control with"), e.validator = jp.compose([e.validator, t.validator]), e.asyncValidator = jp.composeAsync([e.asyncValidator, t.asyncValidator])
                        })(r, e), n.registerControl(e.name, r), r.updateValueAndValidity({emitEvent: !1})
                    }))
                }
            }, {
                key: "removeFormGroup", value: function (e) {
                    var t = this;
                    Vv.then((function () {
                        var n = t._findContainer(e.path);
                        n && n.removeControl(e.name)
                    }))
                }
            }, {
                key: "getFormGroup", value: function (e) {
                    return this.form.get(e.path)
                }
            }, {
                key: "updateModel", value: function (e, t) {
                    var n = this;
                    Vv.then((function () {
                        n.form.get(e.path).setValue(t)
                    }))
                }
            }, {
                key: "setValue", value: function (e) {
                    this.control.setValue(e)
                }
            }, {
                key: "onSubmit", value: function (e) {
                    return this.submitted = !0, t = this._directives, this.form._syncPendingControls(), t.forEach((function (e) {
                        var t = e.control;
                        "submit" === t.updateOn && t._pendingChange && (e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1)
                    })), this.ngSubmit.emit(e), !1;
                    var t
                }
            }, {
                key: "onReset", value: function () {
                    this.resetForm()
                }
            }, {
                key: "resetForm", value: function (e) {
                    this.form.reset(e), this.submitted = !1
                }
            }, {
                key: "_setUpdateStrategy", value: function () {
                    this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn)
                }
            }, {
                key: "_findContainer", value: function (e) {
                    return e.pop(), e.length ? this.form.get(e) : this.form
                }
            }, {
                key: "formDirective", get: function () {
                    return this
                }
            }, {
                key: "control", get: function () {
                    return this.form
                }
            }, {
                key: "path", get: function () {
                    return []
                }
            }, {
                key: "controls", get: function () {
                    return this.form.controls
                }
            }]), n
        }(Op)).\u0275fac = function (e) {
            return new (e || xv)(bo(Dp, 10), bo(Vp, 10))
        }, xv.\u0275dir = yt({
            type: xv,
            selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
            hostBindings: function (e, t) {
                1 & e && Mo("submit", (function (e) {
                    return t.onSubmit(e)
                }))("reset", (function () {
                    return t.onReset()
                }))
            },
            inputs: {options: ["ngFormOptions", "options"]},
            outputs: {ngSubmit: "ngSubmit"},
            exportAs: ["ngForm"],
            features: [pa([Dv]), Yo]
        }), xv), jv = ((Sv = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }

            return _createClass(n, [{
                key: "ngOnInit", value: function () {
                    this._checkParentType(), this.formDirective.addFormGroup(this)
                }
            }, {
                key: "ngOnDestroy", value: function () {
                    this.formDirective && this.formDirective.removeFormGroup(this)
                }
            }, {
                key: "_checkParentType", value: function () {
                }
            }, {
                key: "control", get: function () {
                    return this.formDirective.getFormGroup(this)
                }
            }, {
                key: "path", get: function () {
                    return pv(null == this.name ? this.name : this.name.toString(), this._parent)
                }
            }, {
                key: "formDirective", get: function () {
                    return this._parent ? this._parent.formDirective : null
                }
            }, {
                key: "validator", get: function () {
                    return mv(this._validators)
                }
            }, {
                key: "asyncValidator", get: function () {
                    return _v(this._asyncValidators)
                }
            }]), n
        }(Op)).\u0275fac = function (e) {
            return Fv(e || Sv)
        }, Sv.\u0275dir = yt({type: Sv, features: [Yo]}), Sv), Fv = Yn(jv), Uv = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, null, [{
                key: "modelParentException", value: function () {
                    throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ')
                }
            }, {
                key: "formGroupNameException", value: function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(ev, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(tv))
                }
            }, {
                key: "missingNameException", value: function () {
                    throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')
                }
            }, {
                key: "modelGroupParentException", value: function () {
                    throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(ev, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(tv))
                }
            }]), e
        }(), Hv = {
            provide: Op, useExisting: Se((function () {
                return Lv
            }))
        }, Lv = ((Ev = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i) {
                var o;
                return _classCallCheck(this, n), (o = t.call(this))._parent = e, o._validators = r, o._asyncValidators = i, o
            }

            return _createClass(n, [{
                key: "_checkParentType", value: function () {
                    this._parent instanceof n || this._parent instanceof Nv || Uv.modelGroupParentException()
                }
            }]), n
        }(jv)).\u0275fac = function (e) {
            return new (e || Ev)(bo(Op, 5), bo(Dp, 10), bo(Vp, 10))
        }, Ev.\u0275dir = yt({
            type: Ev,
            selectors: [["", "ngModelGroup", ""]],
            inputs: {name: ["ngModelGroup", "name"]},
            exportAs: ["ngModelGroup"],
            features: [pa([Hv]), Yo]
        }), Ev), zv = {
            provide: Pp, useExisting: Se((function () {
                return Gv
            }))
        }, Bv = Promise.resolve(null), Gv = ((Tv = function (e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r, i, o) {
                var a;
                return _classCallCheck(this, n), (a = t.call(this)).control = new Pv, a._registered = !1, a.update = new hs, a._parent = e, a._rawValidators = r || [], a._rawAsyncValidators = i || [], a.valueAccessor = function (e, t) {
                    if (!t) return null;
                    Array.isArray(t) || yv(e, "Value accessor was not provided as an array for form control with");
                    var n = void 0, r = void 0, i = void 0;
                    return t.forEach((function (t) {
                        var o;
                        t.constructor === xp ? n = t : (o = t, kv.some((function (e) {
                            return o.constructor === e
                        })) ? (r && yv(e, "More than one built-in value accessor matches form control with"), r = t) : (i && yv(e, "More than one custom value accessor matches form control with"), i = t))
                    })), i || r || n || (yv(e, "No valid value accessor for form control with"), null)
                }(_assertThisInitialized(a), o), a
            }

            return _createClass(n, [{
                key: "ngOnChanges", value: function (e) {
                    this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in e && this._updateDisabled(e), function (e, t) {
                        if (!e.hasOwnProperty("model")) return !1;
                        var n = e.model;
                        return !!n.isFirstChange() || !fo(t, n.currentValue)
                    }(e, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
                }
            }, {
                key: "ngOnDestroy", value: function () {
                    this.formDirective && this.formDirective.removeControl(this)
                }
            }, {
                key: "viewToModelUpdate", value: function (e) {
                    this.viewModel = e, this.update.emit(e)
                }
            }, {
                key: "_setUpControl", value: function () {
                    this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
                }
            }, {
                key: "_setUpdateStrategy", value: function () {
                    this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
                }
            }, {
                key: "_isStandalone", value: function () {
                    return !this._parent || !(!this.options || !this.options.standalone)
                }
            }, {
                key: "_setUpStandalone", value: function () {
                    vv(this.control, this), this.control.updateValueAndValidity({emitEvent: !1})
                }
            }, {
                key: "_checkForErrors", value: function () {
                    this._isStandalone() || this._checkParentType(), this._checkName()
                }
            }, {
                key: "_checkParentType", value: function () {
                    !(this._parent instanceof Lv) && this._parent instanceof jv ? Uv.formGroupNameException() : this._parent instanceof Lv || this._parent instanceof Nv || Uv.modelParentException()
                }
            }, {
                key: "_checkName", value: function () {
                    this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || Uv.missingNameException()
                }
            }, {
                key: "_updateValue", value: function (e) {
                    var t = this;
                    Bv.then((function () {
                        t.control.setValue(e, {emitViewToModelChange: !1})
                    }))
                }
            }, {
                key: "_updateDisabled", value: function (e) {
                    var t = this, n = e.isDisabled.currentValue, r = "" === n || n && "false" !== n;
                    Bv.then((function () {
                        r && !t.control.disabled ? t.control.disable() : !r && t.control.disabled && t.control.enable()
                    }))
                }
            }, {
                key: "path", get: function () {
                    return this._parent ? pv(this.name, this._parent) : [this.name]
                }
            }, {
                key: "formDirective", get: function () {
                    return this._parent ? this._parent.formDirective : null
                }
            }, {
                key: "validator", get: function () {
                    return mv(this._rawValidators)
                }
            }, {
                key: "asyncValidator", get: function () {
                    return _v(this._rawAsyncValidators)
                }
            }]), n
        }(Pp)).\u0275fac = function (e) {
            return new (e || Tv)(bo(Op, 9), bo(Dp, 10), bo(Vp, 10), bo(kp, 10))
        }, Tv.\u0275dir = yt({
            type: Tv,
            selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
            inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"]
            },
            outputs: {update: "ngModelChange"},
            exportAs: ["ngModel"],
            features: [pa([zv]), Yo, ia]
        }), Tv), qv = ((Av = function e() {
            _classCallCheck(this, e)
        }).\u0275mod = vt({type: Av}), Av.\u0275inj = fe({
            factory: function (e) {
                return new (e || Av)
            }
        }), Av), Wv = ((Ov = function e() {
            _classCallCheck(this, e)
        }).\u0275mod = vt({type: Ov}), Ov.\u0275inj = fe({
            factory: function (e) {
                return new (e || Ov)
            }, providers: [Kp], imports: [qv]
        }), Ov);

        function Zv(e, t) {
            if (1 & e && (Oo(0, "span"), Qo(1), Ao()), 2 & e) {
                var n = No();
                Cr(1), Jo(n._placeholder)
            }
        }

        function Qv(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "span", 14), Qo(1), Oo(2, "a", 15), Mo("click", (function (e) {
                    Zt(n);
                    var r = t.$implicit;
                    return No().onItemClick(e, r)
                })), Qo(3, "x"), Ao(), Ao()
            }
            if (2 & e) {
                var r = t.$implicit;
                xo("hidden", t.index > No()._settings.itemsShowLimit - 1), Cr(1), Ko(" ", r.text, " ")
            }
        }

        function Jv(e, t) {
            if (1 & e && (Oo(0, "span", 16), Qo(1), Ao()), 2 & e) {
                var n = No();
                Cr(1), Ko("+", n.itemShowRemaining(), "")
            }
        }

        function Kv(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "li", 17), Mo("click", (function () {
                    return Zt(n), No().toggleSelectAll()
                })), To(1, "input", 18), Oo(2, "div"), Qo(3), Ao(), Ao()
            }
            if (2 & e) {
                var r = No();
                Cr(1), xo("checked", r.isAllItemsSelected())("disabled", r.disabled || r.isLimitSelectionReached()), Cr(2), Jo(r.isAllItemsSelected() ? r._settings.unSelectAllText : r._settings.selectAllText)
            }
        }

        function $v(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "li", 19), Oo(1, "input", 20), Mo("ngModelChange", (function (e) {
                    return Zt(n), No().filter.text = e
                }))("ngModelChange", (function (e) {
                    return Zt(n), No().onFilterTextChange(e)
                })), Ao(), Ao()
            }
            if (2 & e) {
                var r = No();
                Cr(1), xo("readOnly", r.disabled)("placeholder", r._settings.searchPlaceholderText)("ngModel", r.filter.text)
            }
        }

        function Yv(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "li", 21), Mo("click", (function (e) {
                    Zt(n);
                    var r = t.$implicit;
                    return No().onItemClick(e, r)
                })), To(1, "input", 22), Oo(2, "div"), Qo(3), Ao(), Ao()
            }
            if (2 & e) {
                var r = t.$implicit, i = No();
                Cr(1), xo("checked", i.isSelected(r))("disabled", i.disabled || i.isLimitSelectionReached() && !i.isSelected(r) || r.isDisabled), Cr(2), Jo(r.text)
            }
        }

        function Xv(e, t) {
            if (1 & e && (Oo(0, "li", 23), Oo(1, "h5"), Qo(2), Ao(), Ao()), 2 & e) {
                var n = No();
                Cr(2), Jo(n._settings.noDataAvailablePlaceholderText)
            }
        }

        var eg, tg, ng, rg, ig, og, ag, sg, ug, lg, cg = function e(t) {
            _classCallCheck(this, e), "string" != typeof t && "number" != typeof t || (this.id = this.text = t, this.isDisabled = !1), "object" == typeof t && (this.id = t.id, this.text = t.text, this.isDisabled = t.isDisabled)
        }, hg = {
            provide: kp, useExisting: Se((function () {
                return dg
            })), multi: !0
        }, fg = function () {
        }, dg = ((ng = function () {
            function e(t) {
                _classCallCheck(this, e), this.cdr = t, this._data = [], this.selectedItems = [], this.isDropdownOpen = !0, this._placeholder = "Select", this._sourceDataType = null, this._sourceDataFields = [], this.filter = new cg(this.data), this.defaultSettings = {
                    singleSelection: !1,
                    idField: "id",
                    textField: "text",
                    disabledField: "isDisabled",
                    enableCheckAll: !0,
                    selectAllText: "Select All",
                    unSelectAllText: "UnSelect All",
                    allowSearchFilter: !1,
                    limitSelection: -1,
                    clearSearchFilter: !0,
                    maxHeight: 197,
                    itemsShowLimit: 999999999999,
                    searchPlaceholderText: "Search",
                    noDataAvailablePlaceholderText: "No data available",
                    closeDropDownOnSelection: !1,
                    showSelectedItemsAtTop: !1,
                    defaultOpen: !1,
                    allowRemoteDataSearch: !1
                }, this.disabled = !1, this.onFilterChange = new hs, this.onDropDownClose = new hs, this.onSelect = new hs, this.onDeSelect = new hs, this.onSelectAll = new hs, this.onDeSelectAll = new hs, this.onTouchedCallback = fg, this.onChangeCallback = fg
            }

            return _createClass(e, [{
                key: "onFilterTextChange", value: function (e) {
                    this.onFilterChange.emit(e)
                }
            }, {
                key: "onItemClick", value: function (e, t) {
                    if (this.disabled || t.isDisabled) return !1;
                    var n = this.isSelected(t),
                        r = -1 === this._settings.limitSelection || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;
                    n ? this.removeSelected(t) : r && this.addSelected(t), this._settings.singleSelection && this._settings.closeDropDownOnSelection && this.closeDropdown()
                }
            }, {
                key: "writeValue", value: function (e) {
                    var t = this;
                    if (null != e && e.length > 0) if (this._settings.singleSelection) try {
                        if (e.length >= 1) {
                            var n = e[0];
                            this.selectedItems = [new cg("string" == typeof n || "number" == typeof n ? n : {
                                id: n[this._settings.idField],
                                text: n[this._settings.textField],
                                isDisabled: n[this._settings.disabledField]
                            })]
                        }
                    } catch (i) {
                    } else {
                        var r = e.map((function (e) {
                            return new cg("string" == typeof e || "number" == typeof e ? e : {
                                id: e[t._settings.idField],
                                text: e[t._settings.textField],
                                isDisabled: e[t._settings.disabledField]
                            })
                        }));
                        this.selectedItems = this._settings.limitSelection > 0 ? r.splice(0, this._settings.limitSelection) : r
                    } else this.selectedItems = [];
                    this.onChangeCallback(e)
                }
            }, {
                key: "registerOnChange", value: function (e) {
                    this.onChangeCallback = e
                }
            }, {
                key: "registerOnTouched", value: function (e) {
                    this.onTouchedCallback = e
                }
            }, {
                key: "onTouched", value: function () {
                    this.closeDropdown(), this.onTouchedCallback()
                }
            }, {
                key: "trackByFn", value: function (e, t) {
                    return t.id
                }
            }, {
                key: "isSelected", value: function (e) {
                    var t = !1;
                    return this.selectedItems.forEach((function (n) {
                        e.id === n.id && (t = !0)
                    })), t
                }
            }, {
                key: "isLimitSelectionReached", value: function () {
                    return this._settings.limitSelection === this.selectedItems.length
                }
            }, {
                key: "isAllItemsSelected", value: function () {
                    var e = this._data.filter((function (e) {
                        return e.isDisabled
                    })).length;
                    return !((!this.data || 0 === this.data.length) && this._settings.allowRemoteDataSearch) && this._data.length === this.selectedItems.length + e
                }
            }, {
                key: "showButton", value: function () {
                    return !(this._settings.singleSelection || this._settings.limitSelection > 0)
                }
            }, {
                key: "itemShowRemaining", value: function () {
                    return this.selectedItems.length - this._settings.itemsShowLimit
                }
            }, {
                key: "addSelected", value: function (e) {
                    this._settings.singleSelection ? (this.selectedItems = [], this.selectedItems.push(e)) : this.selectedItems.push(e), this.onChangeCallback(this.emittedValue(this.selectedItems)), this.onSelect.emit(this.emittedValue(e))
                }
            }, {
                key: "removeSelected", value: function (e) {
                    var t = this;
                    this.selectedItems.forEach((function (n) {
                        e.id === n.id && t.selectedItems.splice(t.selectedItems.indexOf(n), 1)
                    })), this.onChangeCallback(this.emittedValue(this.selectedItems)), this.onDeSelect.emit(this.emittedValue(e))
                }
            }, {
                key: "emittedValue", value: function (e) {
                    var t = this, n = [];
                    if (Array.isArray(e)) e.map((function (e) {
                        n.push(t.objectify(e))
                    })); else if (e) return this.objectify(e);
                    return n
                }
            }, {
                key: "objectify", value: function (e) {
                    if ("object" === this._sourceDataType) {
                        var t = {};
                        return t[this._settings.idField] = e.id, t[this._settings.textField] = e.text, this._sourceDataFields.includes(this._settings.disabledField) && (t[this._settings.disabledField] = e.isDisabled), t
                    }
                    return "number" === this._sourceDataType ? Number(e.id) : e.text
                }
            }, {
                key: "toggleDropdown", value: function (e) {
                    e.preventDefault(), this.disabled && this._settings.singleSelection || (this._settings.defaultOpen = !this._settings.defaultOpen, this._settings.defaultOpen || this.onDropDownClose.emit())
                }
            }, {
                key: "closeDropdown", value: function () {
                    this._settings.defaultOpen = !1, this._settings.clearSearchFilter && (this.filter.text = ""), this.onDropDownClose.emit()
                }
            }, {
                key: "toggleSelectAll", value: function () {
                    if (this.disabled) return !1;
                    this.isAllItemsSelected() ? (this.selectedItems = [], this.onDeSelectAll.emit(this.emittedValue(this.selectedItems))) : (this.selectedItems = this._data.filter((function (e) {
                        return !e.isDisabled
                    })).slice(), this.onSelectAll.emit(this.emittedValue(this.selectedItems))), this.onChangeCallback(this.emittedValue(this.selectedItems))
                }
            }, {
                key: "getFields", value: function (e) {
                    var t = [];
                    if ("object" != typeof e) return t;
                    for (var n in e) t.push(n);
                    return t
                }
            }, {
                key: "placeholder", set: function (e) {
                    this._placeholder = e || "Select"
                }
            }, {
                key: "settings", set: function (e) {
                    this._settings = e ? Object.assign(this.defaultSettings, e) : Object.assign(this.defaultSettings)
                }
            }, {
                key: "data", set: function (e) {
                    var t = this;
                    if (e) {
                        var n = e[0];
                        this._sourceDataType = typeof n, this._sourceDataFields = this.getFields(n), this._data = e.map((function (e) {
                            return new cg("string" == typeof e || "number" == typeof e ? e : {
                                id: e[t._settings.idField],
                                text: e[t._settings.textField],
                                isDisabled: e[t._settings.disabledField]
                            })
                        }))
                    } else this._data = []
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || ng)(bo(zi))
        }, ng.\u0275cmp = ht({
            type: ng,
            selectors: [["ng-multiselect-dropdown"]],
            hostBindings: function (e, t) {
                1 & e && Mo("blur", (function () {
                    return t.onTouched()
                }))
            },
            inputs: {disabled: "disabled", placeholder: "placeholder", settings: "settings", data: "data"},
            outputs: {
                onFilterChange: "onFilterChange",
                onDropDownClose: "onDropDownClose",
                onSelect: "onSelect",
                onDeSelect: "onDeSelect",
                onSelectAll: "onSelectAll",
                onDeSelectAll: "onDeSelectAll"
            },
            features: [pa([hg])],
            decls: 16,
            vars: 17,
            consts: [["tabindex", "=0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px"], ["style", "padding-right: 6px;", 4, "ngIf"], [3, "ngClass"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-item", 3, "checked", "disabled"], [1, "no-data"]],
            template: function (e, t) {
                1 & e && (Oo(0, "div", 0), Mo("blur", (function () {
                    return t.onTouched()
                }))("clickOutside", (function () {
                    return t.closeDropdown()
                })), Oo(1, "div"), Oo(2, "span", 1), Mo("click", (function (e) {
                    return t.toggleDropdown(e)
                })), wo(3, Zv, 2, 1, "span", 2), wo(4, Qv, 4, 2, "span", 3), Oo(5, "span", 4), wo(6, Jv, 2, 1, "span", 5), To(7, "span", 6), Ao(), Ao(), Ao(), Oo(8, "div", 7), Oo(9, "ul", 8), wo(10, Kv, 4, 3, "li", 9), wo(11, $v, 2, 3, "li", 10), Ao(), Oo(12, "ul", 11), wo(13, Yv, 4, 3, "li", 12), ss(14, "multiSelectFilter"), wo(15, Xv, 3, 1, "li", 13), Ao(), Ao(), Ao()), 2 & e && (Cr(1), zo("disabled", t.disabled), Cr(2), xo("ngIf", 0 == t.selectedItems.length), Cr(1), xo("ngForOf", t.selectedItems)("ngForTrackBy", t.trackByFn), Cr(2), xo("ngIf", t.itemShowRemaining() > 0), Cr(1), xo("ngClass", t._settings.defaultOpen ? "dropdown-up" : "dropdown-down"), Cr(1), xo("hidden", !t._settings.defaultOpen), Cr(2), xo("ngIf", (t._data.length > 0 || t._settings.allowRemoteDataSearch) && !t._settings.singleSelection && t._settings.enableCheckAll && -1 === t._settings.limitSelection), Cr(1), xo("ngIf", (t._data.length > 0 || t._settings.allowRemoteDataSearch) && t._settings.allowSearchFilter), Cr(1), Lo("max-height", t._settings.maxHeight + "px"), Cr(1), xo("ngForOf", us(14, 14, t._data, t.filter)), Cr(2), xo("ngIf", 0 == t._data.length && !t._settings.allowRemoteDataSearch))
            },
            directives: function () {
                return [pg, Qu, Wu, Gu, xp, Rp, Gv]
            },
            pipes: function () {
                return [vg]
            },
            styles: ['.multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%]{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:"";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}'],
            changeDetection: 0
        }), ng), pg = ((tg = function () {
            function e(t) {
                _classCallCheck(this, e), this._elementRef = t, this.clickOutside = new hs
            }

            return _createClass(e, [{
                key: "onClick", value: function (e, t) {
                    t && (this._elementRef.nativeElement.contains(t) || this.clickOutside.emit(e))
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || tg)(bo(ma))
        }, tg.\u0275dir = yt({
            type: tg, selectors: [["", "clickOutside", ""]], hostBindings: function (e, t) {
                1 & e && Mo("click", (function (e) {
                    return t.onClick(e, e.target)
                }), !1, Vn)
            }, outputs: {clickOutside: "clickOutside"}
        }), tg), vg = ((eg = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (e, t) {
                    var n = this;
                    return e && t ? e.filter((function (e) {
                        return n.applyFilter(e, t)
                    })) : e
                }
            }, {
                key: "applyFilter", value: function (e, t) {
                    return "string" == typeof e.text && "string" == typeof t.text ? !(t.text && e.text && -1 === e.text.toLowerCase().indexOf(t.text.toLowerCase())) : !(t.text && e.text && -1 === e.text.toString().toLowerCase().indexOf(t.text.toString().toLowerCase()))
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || eg)
        }, eg.\u0275pipe = mt({name: "multiSelectFilter", type: eg, pure: !1}), eg), gg = ((lg = rg = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, null, [{
                key: "forRoot", value: function () {
                    return {ngModule: rg}
                }
            }]), e
        }()).\u0275mod = vt({type: lg}), lg.\u0275inj = fe({
            factory: function (e) {
                return new (e || lg)
            }, imports: [[ol, Wv]]
        }), lg), yg = ((ug = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (e, t) {
                    if (!e || t.Ver && t.Som && t.Mat || !t.Ver && !t.Som && !t.Mat) return e;
                    var n = [];
                    return e.forEach((function (e) {
                        e.componenets ? (t.Ver && -1 != e.componenets.indexOf("V") && (t.Som || t.Som || -1 != e.componenets.indexOf("S") || -1 != e.componenets.indexOf("M") ? (t.Som && -1 != e.componenets.indexOf("S") && !t.Mat && -1 == e.componenets.indexOf("M") || t.Mat && -1 != e.componenets.indexOf("M") && !t.Som && -1 == e.componenets.indexOf("S")) && n.push(e) : n.push(e)), t.Som && -1 != e.componenets.indexOf("S") && (t.Ver || t.Mat || -1 != e.componenets.indexOf("V") || -1 != e.componenets.indexOf("M") ? t.Mat && -1 != e.componenets.indexOf("M") && !t.Ver && -1 == e.componenets.indexOf("V") && n.push(e) : n.push(e)), t.Mat && -1 != e.componenets.indexOf("M") && (t.Ver || t.Som || -1 != e.componenets.indexOf("V") || -1 != e.componenets.indexOf("S") || n.push(e))) : n.push(e)
                    })), n
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || ug)
        }, ug.\u0275pipe = mt({name: "filter5", type: ug, pure: !0}), ug), mg = ((sg = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (e, t) {
                    if (e[0] && t.sphereSelection[0]) {
                        if (e[0].spheres) {
                            var n = function () {
                                for (var n = [], r = function (r) {
                                    var i = !1;
                                    t.sphereSelection.forEach((function (t) {
                                        -1 != e[r].spheres.indexOf(t.Name) && ("Major" == t.Access || "Minor" == t.Access && e[r].lvl < 4) && (i || (n.push(e[r]), i = !0))
                                    }))
                                }, i = 0; i < e.length; i++) r(i);
                                return {v: n}
                            }();
                            if ("object" == typeof n) return n.v
                        }
                        return e
                    }
                    return e
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || sg)
        }, sg.\u0275pipe = mt({name: "filter4", type: sg, pure: !0}), sg), _g = ((ag = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (e, t) {
                    if (!e || t.selectedSchools.length < 1) return e;
                    var n = [];
                    return t.selectedSchools.forEach((function (t) {
                        n = 0 == n.length ? e.filter((function (e) {
                            return -1 != e.schools.indexOf(t)
                        })) : n.concat(e.filter((function (e) {
                            return -1 != e.schools.indexOf(t)
                        })))
                    })), n
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || ag)
        }, ag.\u0275pipe = mt({name: "filter3", type: ag, pure: !0}), ag), kg = ((og = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (e, t) {
                    return e && t.level && 0 != t.level ? e.filter((function (e) {
                        return e.lvl == t.level
                    })) : e
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || og)
        }, og.\u0275pipe = mt({name: "filter2", type: og, pure: !0}), og), Cg = ((ig = function () {
            function e() {
                _classCallCheck(this, e)
            }

            return _createClass(e, [{
                key: "transform", value: function (e, t) {
                    return e && t ? e.filter((function (e) {
                        return -1 != e.name.toLowerCase().indexOf(t.hakusana.toLowerCase())
                    })) : e
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || ig)
        }, ig.\u0275pipe = mt({name: "filter", type: ig, pure: !1}), ig);

        function wg(e, t) {
            1 & e && (Oo(0, "option", 31), Qo(1, " Level 8 "), Ao())
        }

        function bg(e, t) {
            1 & e && (Oo(0, "option", 32), Qo(1, " Level 9 "), Ao())
        }

        function Sg(e, t) {
            1 & e && (Oo(0, "div", 25), Oo(1, "button", 33), Qo(2, "Sphere Filters"), Ao(), Ao())
        }

        function xg(e, t) {
            1 & e && To(0, "button", 53)
        }

        function Eg(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "button", 54), Mo("click", (function () {
                    Zt(n);
                    var e = No().index;
                    return No(2).sphereDunk("Major", e)
                })), Ao()
            }
        }

        function Og(e, t) {
            1 & e && To(0, "button", 55)
        }

        function Ag(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "button", 54), Mo("click", (function () {
                    Zt(n);
                    var e = No().index;
                    return No(2).sphereDunk("Minor", e)
                })), Ao()
            }
        }

        function Tg(e, t) {
            1 & e && To(0, "button", 56)
        }

        function Ig(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "button", 54), Mo("click", (function () {
                    Zt(n);
                    var e = No().index;
                    return No(2).sphereDunk("None", e)
                })), Ao()
            }
        }

        function Pg(e, t) {
            if (1 & e && (Oo(0, "div", 45), Oo(1, "div", 46), Oo(2, "label", 47), Qo(3), Ao(), Ao(), Oo(4, "div", 48), wo(5, xg, 1, 0, "button", 49), wo(6, Eg, 1, 0, "button", 50), wo(7, Og, 1, 0, "button", 51), wo(8, Ag, 1, 0, "button", 50), wo(9, Tg, 1, 0, "button", 52), wo(10, Ig, 1, 0, "button", 50), Ao(), Ao()), 2 & e) {
                var n = t.$implicit, r = t.index, i = No(2);
                Cr(2), xo("for", r + "napit"), Cr(1), Jo(n.Name), Cr(1), xo("id", r + "napit"), Cr(1), xo("ngIf", "Major" == i.haku.sphereSelection[r].Access), Cr(1), xo("ngIf", "Major" != i.haku.sphereSelection[r].Access), Cr(1), xo("ngIf", "Minor" == i.haku.sphereSelection[r].Access), Cr(1), xo("ngIf", "Minor" != i.haku.sphereSelection[r].Access), Cr(1), xo("ngIf", "None" == i.haku.sphereSelection[r].Access), Cr(1), xo("ngIf", "None" != i.haku.sphereSelection[r].Access)
            }
        }

        function Rg(e, t) {
            if (1 & e) {
                var n = Io();
                Oo(0, "div", 34), Oo(1, "div", 35), Oo(2, "div", 36), Oo(3, "div", 37), Oo(4, "div", 37), Qo(5, " SET EVERYTHING "), Ao(), Oo(6, "div", 38), Oo(7, "button", 39), Mo("click", (function () {
                    return Zt(n), No().sphereDunk("Major", 99)
                })), Qo(8, "Major"), Ao(), Oo(9, "button", 40), Mo("click", (function () {
                    return Zt(n), No().sphereDunk("Minor", 99)
                })), Qo(10, "Minor"), Ao(), Oo(11, "button", 41), Mo("click", (function () {
                    return Zt(n), No().sphereDunk("None", 99)
                })), Qo(12, "None"), Ao(), Ao(), Ao(), Ao(), Ao(), Oo(13, "div", 42), Oo(14, "div", 43), wo(15, Pg, 11, 9, "div", 44), Ao(), Ao(), Ao()
            }
            if (2 & e) {
                var r = No();
                Cr(15), xo("ngForOf", r.haku.sphereSelection)
            }
        }

        function Mg(e, t) {
            if (1 & e && (Oo(0, "div", 59), Oo(1, "div", 60), Oo(2, "div", 61), Oo(3, "h5", 62), Oo(4, "button", 63), Oo(5, "div", 64), Oo(6, "div", 65), Qo(7), Oo(8, "b"), Qo(9), Ao(), Ao(), Oo(10, "div", 66), Qo(11), Ao(), Ao(), Ao(), Ao(), Ao(), Oo(12, "div", 67), Oo(13, "div", 68), Oo(14, "div", 69), Oo(15, "div", 37), Oo(16, "h6"), Qo(17), Ao(), Ao(), Ao(), Oo(18, "div", 64), Oo(19, "div", 37), Oo(20, "b"), Qo(21, "Level:"), Ao(), Qo(22), Ao(), Oo(23, "div", 37), Oo(24, "b"), Qo(25, "Components:"), Ao(), Qo(26), Ao(), Ao(), Oo(27, "div", 64), Oo(28, "div", 37), Oo(29, "b"), Qo(30, "Range:"), Ao(), Qo(31), Ao(), Oo(32, "div", 37), Oo(33, "b"), Qo(34, "AoE"), Ao(), Qo(35), Ao(), Ao(), Oo(36, "div", 64), Oo(37, "div", 37), Oo(38, "b"), Qo(39, "Save"), Ao(), Qo(40), Ao(), Oo(41, "div", 37), Oo(42, "b"), Qo(43, "Casting Time :"), Ao(), Qo(44), Ao(), Ao(), Oo(45, "div", 64), Oo(46, "div", 37), Oo(47, "b"), Qo(48, "Duration:"), Ao(), Qo(49), Ao(), Ao(), Qo(50), Ao(), Ao(), Ao(), Ao()), 2 & e) {
                var n = t.$implicit, r = t.index;
                jo("id", "accordion", r, ""), Cr(4), ko("data-target", "#spel" + r)("aria-controls", "spel" + r), Cr(3), Ko("", r + 1, ". "), Cr(2), Jo(n.name), Cr(2), Jo(n.schools), Cr(1), xo("id", "spel" + r), Cr(5), Jo(n.name), Cr(5), Ko(" ", n.lvl, " "), Cr(4), Ko(" ", n.componenets, ""), Cr(5), Ko(" ", n.range, " "), Cr(4), Ko(": ", n.aoe, " "), Cr(5), Ko(": ", n.save, " "), Cr(4), Ko(" ", n.casting, " "), Cr(5), Ko(" ", n.duration, " "), Cr(1), Ko(" ", n.description, " ")
            }
        }

        function Dg(e, t) {
            if (1 & e && (Oo(0, "div", 57), wo(1, Mg, 51, 16, "div", 58), ss(2, "slice"), ss(3, "filter5"), ss(4, "filter4"), ss(5, "filter3"), ss(6, "filter2"), ss(7, "filter"), Ao()), 2 & e) {
                var n = No();
                Cr(1), xo("ngForOf", (r = us(3, 5, us(4, 8, us(5, 11, us(6, 14, us(7, 17, n.json.spellit, n.haku), n.haku), n.haku), n.haku), n.haku), i = n.minNumber, o = n.maxNumber, a = qt(), s = Nt(a, 2), cs(a, ls(a, 2) ? function (e, t, n, r, i, o, a, s) {
                    var u = t + 1;
                    return function (e, t, n, r, i) {
                        var o = _o(e, t, n, r);
                        return mo(e, t + 2, i) || o
                    }(e, u, i, o, a) ? yo(e, u + 3, s ? r.call(s, i, o, a) : r(i, o, a)) : as(e, u + 3)
                }(a, Xt(), 0, s.transform, r, i, o, s) : s.transform(r, i, o))))
            }
            var r, i, o, a, s
        }

        var Vg, Ng, jg = ((Ng = function () {
            function e(t) {
                var n = this;
                _classCallCheck(this, e), this.json = t, this.dropdownSettings = {
                    singleSelection: !1,
                    textField: "item_text",
                    unSelectAllText: "UnSelect All",
                    itemsShowLimit: 1,
                    allowSearchFilter: !1
                }, this.minNumber = 0, this.maxNumber = 30, this.haku = {
                    hakusana: "",
                    luokka: "assets/PriestSpells.json",
                    level: 0,
                    koulu: "",
                    selectedSchools: [],
                    Ver: !0,
                    Som: !0,
                    Mat: !0,
                    sphereSelection: [{Name: "All", Access: "Major"}, {
                        Name: "Animal",
                        Access: "Major"
                    }, {Name: "Astral", Access: "Major"}, {Name: "Chaos", Access: "Major"}, {
                        Name: "Charm",
                        Access: "Major"
                    }, {Name: "Combat", Access: "Major"}, {Name: "Creation", Access: "Major"}, {
                        Name: "Divination",
                        Access: "Major"
                    }, {Name: "Elemental Air", Access: "Major"}, {
                        Name: "Elemental Earth",
                        Access: "Major"
                    }, {Name: "Elemental Fire", Access: "Major"}, {
                        Name: "Elemental Water",
                        Access: "Major"
                    }, {Name: "Guardian", Access: "Major"}, {Name: "Healing", Access: "Major"}, {
                        Name: "Law",
                        Access: "Major"
                    }, {Name: "Necromantic", Access: "Major"}, {Name: "Numbers", Access: "Major"}, {
                        Name: "Plant",
                        Access: "Major"
                    }, {Name: "Protection", Access: "Major"}, {Name: "Summoning", Access: "Major"}, {
                        Name: "Sun",
                        Access: "Major"
                    }, {Name: "Thought", Access: "Major"}, {Name: "Time", Access: "Major"}, {
                        Name: "Travelers",
                        Access: "Major"
                    }, {Name: "War", Access: "Major"}, {Name: "Wards", Access: "Major"}, {
                        Name: "Weather",
                        Access: "Major"
                    }]
                }, this.spheres = ["All", "Animal", "Astral", "Chaos", "Charm", "Combat", "Creation", "Divination", "Elemntal Air", "Elemental Earth", "Elemental Fire", "Elemental Water", "Guardian", "Healing", "Law", "Necromantic", "Numbers", "Plant", "Protection", "Summoning", "Sun", "Thought", "Time", "Travelers", "War", "Wards", "Weather"], this.schools = ["Abjuration", "Alteration", "Conjuration", "Divination", "Evocation", "Illusion", "Necromancy", "Enchantment"], this.sphereDunk = function (e, t) {
                    99 == t ? n.haku.sphereSelection.forEach((function (t) {
                        t.Access = e
                    })) : (n.haku.sphereSelection[t].Access = e, n.saveHaku())
                }, this.saveCaster = function () {
                    n.json.getSpells(n.haku.luokka), n.saveHaku()
                }, this.saveHaku = function () {
                    localStorage.setItem("haku", JSON.stringify(n.haku))
                }, localStorage.getItem("haku") && (this.haku = JSON.parse(localStorage.getItem("haku"))), t.getSpells(this.haku.luokka)
            }

            return _createClass(e, [{
                key: "calculateScroll", value: function () {
                    console.log("I am Triggered")
                }
            }, {
                key: "onScrollEvent", value: function (e) {
                    var t = (window.scrollY + window.innerHeight) / document.body.clientHeight;
                    t > .9 && this.maxNumber < 1e3 ? this.maxNumber += 15 : t < .6 && this.maxNumber > 30 && (this.maxNumber -= 15)
                }
            }, {
                key: "onItemSelect", value: function (e) {
                    this.saveHaku()
                }
            }]), e
        }()).\u0275fac = function (e) {
            return new (e || Ng)(bo(pp))
        }, Ng.\u0275cmp = ht({
            type: Ng,
            selectors: [["app-root"]],
            hostBindings: function (e, t) {
                1 & e && Mo("scroll", (function (e) {
                    return t.onScrollEvent(e)
                }), !1, Dn)
            },
            decls: 54,
            vars: 15,
            consts: [[1, "container"], [2, "text-align", "center", "margin-top", "10px", "margin-bottom", "10px"], [2, "background-color", "rgba(255, 255, 255, 0.7)", "margin", "auto"], [1, "container", 2, "margin-bottom", "15px"], [1, "form-row"], [1, "col-lg", "mb-3"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "assets/WizardSpells.json"], ["value", "assets/PriestSpells.json"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "clearfix", "visible-sm"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8", 4, "ngIf"], ["value", "9", 4, "ngIf"], [1, "col-lg-3", "mb-3"], [3, "placeholder", "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onDropDownClose"], ["class", "col-xs", 4, "ngIf"], [1, "col-xs"], [1, "cboxcontainer"], ["type", "checkbox", 1, "customcheckbox", 3, "ngModel", "ngModelChange", "change"], [1, "checkmark"], ["style", "margin:auto;", "class", "collapse multi-collapse", "id", "multiCollapseExample2", 4, "ngIf"], ["class", "container", "style", "display:inline-block;", 4, "ngIf"], ["value", "8"], ["value", "9"], ["type", "button", "data-toggle", "collapse", "data-target", "#multiCollapseExample2", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "btn", "btn-link", 2, "margin", "auto"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse", 2, "margin", "auto"], [2, "display", "inline-block", "margin-bottom", "20px"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", 2, "margin", "auto"], [1, "col"], [1, "col", 2, "float", "left"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "container", 2, "float", "none", "margin", "auto", "overflow", "auto", "padding", "0"], [1, "mx-auto", 2, "text-align", "center", "overflow", "auto"], ["class", "col", "style", "width:150px; float:left;", 4, "ngFor", "ngForOf"], [1, "col", 2, "width", "150px", "float", "left"], [1, "row", 2, "text-align", "center", "margin", "auto"], [3, "for"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", 3, "id"], ["type", "button", "class", "btn btn-danger", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 4, "ngIf"], ["type", "button", "class", "btn btn-dark", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-dark"], [1, "container", 2, "display", "inline-block"], ["style", "float:none;", 3, "id", 4, "ngFor", "ngForOf"], [2, "float", "none", 3, "id"], [1, "card"], ["id", "heading", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "aria-expanded", "false", 1, "btn", "btn-link", 2, "color", "black", "width", "100%", "overflow", "hidden"], [1, "row"], [1, "col-md-6", 2, "text-align", "left"], [1, "col-md-6", 2, "text-align", "right"], [1, "collapse", 3, "id"], [1, "card-body"], [1, "row", 2, "text-align", "left"]],
            template: function (e, t) {
                1 & e && (Oo(0, "div", 0), Oo(1, "h3", 1), Qo(2, " AD&D 2nd Edition spells "), Ao(), Oo(3, "div", 2), Oo(4, "div", 3), Oo(5, "div", 4), Oo(6, "div", 5), Oo(7, "select", 6), Mo("ngModelChange", (function (e) {
                    return t.haku.luokka = e
                }))("change", (function () {
                    return t.saveCaster()
                })), Oo(8, "option", 7), Qo(9, " Wizard "), Ao(), Oo(10, "option", 8), Qo(11, " Priest "), Ao(), Ao(), Ao(), Oo(12, "div", 5), Oo(13, "input", 9), Mo("ngModelChange", (function (e) {
                    return t.haku.hakusana = e
                })), Ao(), Ao(), To(14, "div", 10), Oo(15, "div", 5), Oo(16, "select", 11), Mo("ngModelChange", (function (e) {
                    return t.haku.level = e
                })), Oo(17, "option", 12), Qo(18, " All (Levels) "), Ao(), Oo(19, "option", 13), Qo(20, " Level 1 "), Ao(), Oo(21, "option", 14), Qo(22, " Level 2 "), Ao(), Oo(23, "option", 15), Qo(24, " Level 3 "), Ao(), Oo(25, "option", 16), Qo(26, " Level 4 "), Ao(), Oo(27, "option", 17), Qo(28, " Level 5 "), Ao(), Oo(29, "option", 18), Qo(30, " Level 6 "), Ao(), Oo(31, "option", 19), Qo(32, " Level 7 "), Ao(), wo(33, wg, 2, 0, "option", 20), wo(34, bg, 2, 0, "option", 21), Ao(), Ao(), Oo(35, "div", 22), Oo(36, "ng-multiselect-dropdown", 23), Mo("ngModelChange", (function (e) {
                    return t.haku.selectedSchools = e
                }))("onSelect", (function (e) {
                    return t.onItemSelect(e)
                }))("onDeSelect", (function (e) {
                    return t.onItemSelect(e)
                }))("onSelectAll", (function (e) {
                    return t.onItemSelect(e)
                }))("onDeSelectAll", (function (e) {
                    return t.onItemSelect(e)
                }))("onDropDownClose", (function () {
                    return t.saveHaku()
                })), Ao(), Ao(), wo(37, Sg, 3, 0, "div", 24), Oo(38, "div", 25), Oo(39, "label", 26), Qo(40, "V: "), Oo(41, "input", 27), Mo("ngModelChange", (function (e) {
                    return t.haku.Ver = e
                }))("change", (function () {
                    return t.saveHaku()
                })), Ao(), To(42, "span", 28), Ao(), Oo(43, "label", 26), Qo(44, "S: "), Oo(45, "input", 27), Mo("ngModelChange", (function (e) {
                    return t.haku.Som = e
                }))("change", (function () {
                    return t.saveHaku()
                })), Ao(), To(46, "span", 28), Ao(), Oo(47, "label", 26), Qo(48, "M: "), Oo(49, "input", 27), Mo("ngModelChange", (function (e) {
                    return t.haku.Mat = e
                }))("change", (function () {
                    return t.saveHaku()
                })), Ao(), To(50, "span", 28), Ao(), Ao(), Ao(), wo(51, Rg, 16, 1, "div", 29), Ao(), Ao(), wo(52, Dg, 8, 20, "div", 30), Ao(), To(53, "router-outlet")), 2 & e && (Cr(7), xo("ngModel", t.haku.luokka), Cr(6), xo("ngModel", t.haku.hakusana), Cr(3), xo("ngModel", t.haku.level), Cr(17), xo("ngIf", "assets/WizardSpells.json" == t.haku.luokka), Cr(1), xo("ngIf", "assets/WizardSpells.json" == t.haku.luokka), Cr(2), xo("placeholder", "Schools")("data", t.schools)("ngModel", t.haku.selectedSchools)("settings", t.dropdownSettings), Cr(1), xo("ngIf", "assets/PriestSpells.json" == t.haku.luokka), Cr(4), xo("ngModel", t.haku.Ver), Cr(4), xo("ngModel", t.haku.Som), Cr(4), xo("ngModel", t.haku.Mat), Cr(2), xo("ngIf", "assets/PriestSpells.json" == t.haku.luokka), Cr(1), xo("ngIf", t.json.spellit))
            },
            directives: [av, Rp, Gv, sv, dv, xp, Qu, dg, wp, nd, Wu],
            pipes: [il, yg, mg, _g, kg, Cg],
            styles: ['.cboxcontainer[_ngcontent-%COMP%]{width:40px;position:relative;padding-left:5px;margin-bottom:10px;margin-top:7px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cboxcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer}.checkmark[_ngcontent-%COMP%]{position:absolute;top:0;left:5;height:25px;width:25px;background-color:#eee}.cboxcontainer[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ccc}.cboxcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#eee}.checkmark[_ngcontent-%COMP%]:after{content:"";position:absolute;display:none}.cboxcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.cboxcontainer[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{left:9px;top:5px;width:5px;height:10px;border:solid #000;border-width:0 3px 3px 0;transform:rotate(45deg)}']
        }), Ng), Fg = ((Vg = function e() {
            _classCallCheck(this, e)
        }).\u0275mod = vt({type: Vg, bootstrap: [jg]}), Vg.\u0275inj = fe({
            factory: function (e) {
                return new (e || Vg)
            }, providers: [pp], imports: [[gg.forRoot(), Fl, dp, xd, Wv]]
        }), Vg);
        (function () {
            if (ir) throw new Error("Cannot enable prod mode after platform setup.");
            rr = !1
        })(), Nl().bootstrapModule(Fg).catch((function (e) {
            return console.error(e)
        }))
    }, zn8P: function (e, t) {
        function n(e) {
            return Promise.resolve().then((function () {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }))
        }

        n.keys = function () {
            return []
        }, n.resolve = n, e.exports = n, n.id = "zn8P"
    }
}, [[0, 0]]]);