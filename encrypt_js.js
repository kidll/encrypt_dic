

window = global

var sm3 = function(r) {
    function n(u) {
        if (t[u])
            return t[u].exports;
        var e = t[u] = {
            i: u,
            l: !1,
            exports: {}
        };
        return r[u].call(e.exports, e, e.exports, n),
        e.l = !0,
        e.exports
    }
    var t = {};
    return n.m = r,
    n.c = t,
    n.d = function(r, t, u) {
        n.o(r, t) || Object.defineProperty(r, t, {
            configurable: !1,
            enumerable: !0,
            get: u
        })
    }
    ,
    n.n = function(r) {
        var t = r && r.__esModule ? function() {
            return r.default
        }
        : function() {
            return r
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n)
    }
    ,
    n.p = "",
    n(n.s = 7)
}({
    7: function(r, n, t) {
        "use strict";
        function u(r, n) {
            return r.length >= n ? r : new Array(n - r.length + 1).join("0") + r
        }
        function e(r) {
            for (var n = "", t = 0; t < r.length / 8; t++)
                n += u(parseInt(r.substr(8 * t, 8), 2).toString(16), 2);
            return n
        }
        function o(r) {
            for (var n = "", t = 0; t < r.length / 2; t++)
                n += u(parseInt(r.substr(2 * t, 2), 16).toString(2), 8);
            return n
        }
        function i(r) {
            var n = ""
              , t = !0
              , e = !1
              , o = void 0;
            try {
                for (var i, f = r[Symbol.iterator](); !(t = (i = f.next()).done); t = !0) {
                    n += u(i.value.codePointAt(0).toString(2), 8)
                }
            } catch (r) {
                e = !0,
                o = r
            } finally {
                try {
                    !t && f.return && f.return()
                } finally {
                    if (e)
                        throw o
                }
            }
            return n
        }
        function f(r, n) {
            return r.substring(n % r.length) + r.substr(0, n % r.length)
        }
        function c(r, n, t) {
            for (var u = r || "", e = n || "", o = [], i = void 0, f = u.length - 1; f >= 0; f--)
                i = t(u[f], e[f], i),
                o[f] = i[0];
            return o.join("")
        }
        function a(r, n) {
            return c(r, n, function(r, n) {
                return [r === n ? "0" : "1"]
            })
        }
        function s(r, n) {
            return c(r, n, function(r, n) {
                return ["1" === r && "1" === n ? "1" : "0"]
            })
        }
        function l(r, n) {
            return c(r, n, function(r, n) {
                return ["1" === r || "1" === n ? "1" : "0"]
            })
        }
        function v(r, n) {
            return c(r, n, function(r, n, t) {
                var u = t ? t[1] : "0";
                return r !== n ? ["0" === u ? "1" : "0", u] : [u, r]
            })
        }
        function d(r) {
            return c(r, void 0, function(r) {
                return ["1" === r ? "0" : "1"]
            })
        }
        function b(r) {
            return function() {
                for (var n = arguments.length, t = Array(n), u = 0; u < n; u++)
                    t[u] = arguments[u];
                return t.reduce(function(n, t) {
                    return r(n, t)
                })
            }
        }
        function g(r) {
            return b(a)(r, f(r, 9), f(r, 17))
        }
        function p(r) {
            return b(a)(r, f(r, 15), f(r, 23))
        }
        function h(r, n, t, u) {
            return u >= 0 && u <= 15 ? b(a)(r, n, t) : b(l)(s(r, n), s(r, t), s(n, t))
        }
        function y(r, n, t, u) {
            return u >= 0 && u <= 15 ? b(a)(r, n, t) : l(s(r, n), s(d(r), t))
        }
        function x(r) {
            return o(r >= 0 && r <= 15 ? "79cc4519" : "7a879d8a")
        }
        function S(r, n) {
            for (var t = [], u = [], e = 0; e < 16; e++)
                t.push(n.substr(32 * e, 32));
            for (var o = 16; o < 68; o++)
                t.push(b(a)(p(b(a)(t[o - 16], t[o - 9], f(t[o - 3], 15))), f(t[o - 13], 7), t[o - 6]));
            for (var i = 0; i < 64; i++)
                u.push(a(t[i], t[i + 4]));
            for (var c = [], s = 0; s < 8; s++)
                c.push(r.substr(32 * s, 32));
            for (var l = c[0], d = c[1], S = c[2], j = c[3], w = c[4], m = c[5], A = c[6], O = c[7], P = void 0, I = void 0, _ = void 0, M = void 0, k = 0; k < 64; k++)
                P = f(b(v)(f(l, 12), w, f(x(k), k)), 7),
                I = a(P, f(l, 12)),
                _ = b(v)(h(l, d, S, k), j, I, u[k]),
                M = b(v)(y(w, m, A, k), O, P, t[k]),
                j = S,
                S = f(d, 9),
                d = l,
                l = _,
                O = A,
                A = f(m, 19),
                m = w,
                w = g(M);
            return a([l, d, S, j, w, m, A, O].join(""), r)
        }
        r.exports = function(r) {
            var n = i(r)
              , t = n.length
              , f = t % 512;
            f = f >= 448 ? 512 - f % 448 - 1 : 448 - f - 1;
            for (var c = (n + "1" + u("", f) + u(t.toString(2), 64)).toString(), a = (t + f + 65) / 512, s = o("7380166f4914b2b9172442d7da8a0600a96f30bc163138aae38dee4db0fb0e4e"), l = 0; l <= a - 1; l++) {
                s = S(s, c.substr(512 * l, 512))
            }
            return e(s)
        }
    }
});


function name(pass) {

    return sm3(pass + "12@$@4&#%^$*23g$%^lc&&^f((ey*#)xe@*!e&#@ew%@!sew&#d^$")


}

console.log(name('123456'))