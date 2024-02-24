/*! This file is auto-generated */ ! function() {
    var t = {
            124: function(t, e, n) {
                var r;
                ! function() {
                    "use strict";
                    var i = {
                        not_string: /[^s]/,
                        not_bool: /[^t]/,
                        not_type: /[^T]/,
                        not_primitive: /[^v]/,
                        number: /[diefg]/,
                        numeric_arg: /[bcdiefguxX]/,
                        json: /[j]/,
                        not_json: /[^j]/,
                        text: /^[^\x25]+/,
                        modulo: /^\x25{2}/,
                        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                        key: /^([a-z_][a-z_\d]*)/i,
                        key_access: /^\.([a-z_][a-z_\d]*)/i,
                        index_access: /^\[(\d+)\]/,
                        sign: /^[+-]/
                    };

                    function o(t) {
                        return function(t, e) {
                            var n, r, a, s, u, l, c, p, f, d = 1,
                                h = t.length,
                                g = "";
                            for (r = 0; r < h; r++)
                                if ("string" == typeof t[r]) g += t[r];
                                else if ("object" == typeof t[r]) {
                                if ((s = t[r]).keys)
                                    for (n = e[d], a = 0; a < s.keys.length; a++) {
                                        if (null == n) throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"', s.keys[a], s.keys[a - 1]));
                                        n = n[s.keys[a]]
                                    } else n = s.param_no ? e[s.param_no] : e[d++];
                                if (i.not_type.test(s.type) && i.not_primitive.test(s.type) && n instanceof Function && (n = n()), i.numeric_arg.test(s.type) && "number" != typeof n && isNaN(n)) throw new TypeError(o("[sprintf] expecting number but found %T", n));
                                switch (i.number.test(s.type) && (p = n >= 0), s.type) {
                                    case "b":
                                        n = parseInt(n, 10).toString(2);
                                        break;
                                    case "c":
                                        n = String.fromCharCode(parseInt(n, 10));
                                        break;
                                    case "d":
                                    case "i":
                                        n = parseInt(n, 10);
                                        break;
                                    case "j":
                                        n = JSON.stringify(n, null, s.width ? parseInt(s.width) : 0);
                                        break;
                                    case "e":
                                        n = s.precision ? parseFloat(n).toExponential(s.precision) : parseFloat(n).toExponential();
                                        break;
                                    case "f":
                                        n = s.precision ? parseFloat(n).toFixed(s.precision) : parseFloat(n);
                                        break;
                                    case "g":
                                        n = s.precision ? String(Number(n.toPrecision(s.precision))) : parseFloat(n);
                                        break;
                                    case "o":
                                        n = (parseInt(n, 10) >>> 0).toString(8);
                                        break;
                                    case "s":
                                        n = String(n), n = s.precision ? n.substring(0, s.precision) : n;
                                        break;
                                    case "t":
                                        n = String(!!n), n = s.precision ? n.substring(0, s.precision) : n;
                                        break;
                                    case "T":
                                        n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase(), n = s.precision ? n.substring(0, s.precision) : n;
                                        break;
                                    case "u":
                                        n = parseInt(n, 10) >>> 0;
                                        break;
                                    case "v":
                                        n = n.valueOf(), n = s.precision ? n.substring(0, s.precision) : n;
                                        break;
                                    case "x":
                                        n = (parseInt(n, 10) >>> 0).toString(16);
                                        break;
                                    case "X":
                                        n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase()
                                }
                                i.json.test(s.type) ? g += n : (!i.number.test(s.type) || p && !s.sign ? f = "" : (f = p ? "+" : "-", n = n.toString().replace(i.sign, "")), l = s.pad_char ? "0" === s.pad_char ? "0" : s.pad_char.charAt(1) : " ", c = s.width - (f + n).length, u = s.width && c > 0 ? l.repeat(c) : "", g += s.align ? f + n + u : "0" === l ? f + u + n : u + f + n)
                            }
                            return g
                        }(function(t) {
                            if (s[t]) return s[t];
                            var e, n = t,
                                r = [],
                                o = 0;
                            for (; n;) {
                                if (null !== (e = i.text.exec(n))) r.push(e[0]);
                                else if (null !== (e = i.modulo.exec(n))) r.push("%");
                                else {
                                    if (null === (e = i.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                                    if (e[2]) {
                                        o |= 1;
                                        var a = [],
                                            u = e[2],
                                            l = [];
                                        if (null === (l = i.key.exec(u))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                        for (a.push(l[1]);
                                            "" !== (u = u.substring(l[0].length));)
                                            if (null !== (l = i.key_access.exec(u))) a.push(l[1]);
                                            else {
                                                if (null === (l = i.index_access.exec(u))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                                a.push(l[1])
                                            }
                                        e[2] = a
                                    } else o |= 2;
                                    if (3 === o) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                    r.push({
                                        placeholder: e[0],
                                        param_no: e[1],
                                        keys: e[2],
                                        sign: e[3],
                                        pad_char: e[4],
                                        align: e[5],
                                        width: e[6],
                                        precision: e[7],
                                        type: e[8]
                                    })
                                }
                                n = n.substring(e[0].length)
                            }
                            return s[t] = r
                        }(t), arguments)
                    }

                    function a(t, e) {
                        return o.apply(null, [t].concat(e || []))
                    }
                    var s = Object.create(null);
                    e.sprintf = o, e.vsprintf = a, "undefined" != typeof window && (window.sprintf = o, window.vsprintf = a, void 0 === (r = function() {
                        return {
                            sprintf: o,
                            vsprintf: a
                        }
                    }.call(e, n, e, t)) || (t.exports = r))
                }()
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r](o, o.exports, n), o.exports
    }
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, {
            a: e
        }), e
    }, n.d = function(t, e) {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var r = {};
    ! function() {
        "use strict";
        n.r(r), n.d(r, {
            __: function() {
                return F
            },
            _n: function() {
                return j
            },
            _nx: function() {
                return L
            },
            _x: function() {
                return S
            },
            createI18n: function() {
                return x
            },
            defaultI18n: function() {
                return _
            },
            getLocaleData: function() {
                return v
            },
            hasTranslation: function() {
                return D
            },
            isRTL: function() {
                return T
            },
            resetLocaleData: function() {
                return w
            },
            setLocaleData: function() {
                return m
            },
            sprintf: function() {
                return o
            },
            subscribe: function() {
                return k
            }
        });
        var t = n(124),
            e = n.n(t);
        const i = function(t, e) {
            var n, r, i = 0;

            function o() {
                var o, a, s = n,
                    u = arguments.length;
                t: for (; s;) {
                    if (s.args.length === arguments.length) {
                        for (a = 0; a < u; a++)
                            if (s.args[a] !== arguments[a]) {
                                s = s.next;
                                continue t
                            }
                        return s !== n && (s === r && (r = s.prev), s.prev.next = s.next, s.next && (s.next.prev = s.prev), s.next = n, s.prev = null, n.prev = s, n = s), s.val
                    }
                    s = s.next
                }
                for (o = new Array(u), a = 0; a < u; a++) o[a] = arguments[a];
                return s = {
                    args: o,
                    val: t.apply(null, o)
                }, n ? (n.prev = s, s.next = n) : r = s, i === e.maxSize ? (r = r.prev).next = null : i++, n = s, s.val
            }
            return e = e || {}, o.clear = function() {
                n = null, r = null, i = 0
            }, o
        }(console.error);

        function o(t, ...n) {
            try {
                return e().sprintf(t, ...n)
            } catch (e) {
                return e instanceof Error && i("sprintf error: \n\n" + e.toString()), t
            }
        }
        var a, s, u, l;
        a = {
            "(": 9,
            "!": 8,
            "*": 7,
            "/": 7,
            "%": 7,
            "+": 6,
            "-": 6,
            "<": 5,
            "<=": 5,
            ">": 5,
            ">=": 5,
            "==": 4,
            "!=": 4,
            "&&": 3,
            "||": 2,
            "?": 1,
            "?:": 1
        }, s = ["(", "?"], u = {
            ")": ["("],
            ":": ["?", "?:"]
        }, l = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
        var c = {
            "!": function(t) {
                return !t
            },
            "*": function(t, e) {
                return t * e
            },
            "/": function(t, e) {
                return t / e
            },
            "%": function(t, e) {
                return t % e
            },
            "+": function(t, e) {
                return t + e
            },
            "-": function(t, e) {
                return t - e
            },
            "<": function(t, e) {
                return t < e
            },
            "<=": function(t, e) {
                return t <= e
            },
            ">": function(t, e) {
                return t > e
            },
            ">=": function(t, e) {
                return t >= e
            },
            "==": function(t, e) {
                return t === e
            },
            "!=": function(t, e) {
                return t !== e
            },
            "&&": function(t, e) {
                return t && e
            },
            "||": function(t, e) {
                return t || e
            },
            "?:": function(t, e, n) {
                if (t) throw e;
                return n
            }
        };

        function p(t) {
            var e = function(t) {
                for (var e, n, r, i, o = [], c = []; e = t.match(l);) {
                    for (n = e[0], (r = t.substr(0, e.index).trim()) && o.push(r); i = c.pop();) {
                        if (u[n]) {
                            if (u[n][0] === i) {
                                n = u[n][1] || n;
                                break
                            }
                        } else if (s.indexOf(i) >= 0 || a[i] < a[n]) {
                            c.push(i);
                            break
                        }
                        o.push(i)
                    }
                    u[n] || c.push(n), t = t.substr(e.index + n.length)
                }
                return (t = t.trim()) && o.push(t), o.concat(c.reverse())
            }(t);
            return function(t) {
                return function(t, e) {
                    var n, r, i, o, a, s, u = [];
                    for (n = 0; n < t.length; n++) {
                        if (a = t[n], o = c[a]) {
                            for (r = o.length, i = Array(r); r--;) i[r] = u.pop();
                            try {
                                s = o.apply(null, i)
                            } catch (t) {
                                return t
                            }
                        } else s = e.hasOwnProperty(a) ? e[a] : +a;
                        u.push(s)
                    }
                    return u[0]
                }(e, t)
            }
        }
        var f = {
            contextDelimiter: "",
            onMissingKey: null
        };

        function d(t, e) {
            var n;
            for (n in this.data = t, this.pluralForms = {}, this.options = {}, f) this.options[n] = void 0 !== e && n in e ? e[n] : f[n]
        }
        d.prototype.getPluralForm = function(t, e) {
            var n, r, i, o = this.pluralForms[t];
            return o || ("function" != typeof(i = (n = this.data[t][""])["Plural-Forms"] || n["plural-forms"] || n.plural_forms) && (r = function(t) {
                var e, n, r;
                for (e = t.split(";"), n = 0; n < e.length; n++)
                    if (0 === (r = e[n].trim()).indexOf("plural=")) return r.substr(7)
            }(n["Plural-Forms"] || n["plural-forms"] || n.plural_forms), i = function(t) {
                var e = p(t);
                return function(t) {
                    return +e({
                        n: t
                    })
                }
            }(r)), o = this.pluralForms[t] = i), o(e)
        }, d.prototype.dcnpgettext = function(t, e, n, r, i) {
            var o, a, s;
            return o = void 0 === i ? 0 : this.getPluralForm(t, i), a = n, e && (a = e + this.options.contextDelimiter + n), (s = this.data[t][a]) && s[o] ? s[o] : (this.options.onMissingKey && this.options.onMissingKey(n, t), 0 === o ? n : r)
        };
        const h = {
                plural_forms(t) {
                    return 1 === t ? 0 : 1
                }
            },
            g = /^i18n\.(n?gettext|has_translation)(_|$)/,
            x = (t, e, n) => {
                const r = new d({}),
                    i = new Set,
                    o = () => {
                        i.forEach((t => t()))
                    },
                    a = (t, e = "default") => {
                        r.data[e] = { ...r.data[e],
                            ...t
                        }, r.data[e][""] = { ...h,
                            ...r.data[e] ? .[""]
                        }, delete r.pluralForms[e]
                    },
                    s = (t, e) => {
                        a(t, e), o()
                    },
                    u = (t = "default", e, n, i, o) => (r.data[t] || a(void 0, t), r.dcnpgettext(t, e, n, i, o)),
                    l = (t = "default") => t,
                    c = (t, e, r) => {
                        let i = u(r, e, t);
                        return n ? (i = n.applyFilters("i18n.gettext_with_context", i, t, e, r), n.applyFilters("i18n.gettext_with_context_" + l(r), i, t, e, r)) : i
                    };
                if (t && s(t, e), n) {
                    const t = t => {
                        g.test(t) && o()
                    };
                    n.addAction("hookAdded", "core/i18n", t), n.addAction("hookRemoved", "core/i18n", t)
                }
                return {
                    getLocaleData: (t = "default") => r.data[t],
                    setLocaleData: s,
                    addLocaleData: (t, e = "default") => {
                        r.data[e] = { ...r.data[e],
                            ...t,
                            "": { ...h,
                                ...r.data[e] ? .[""],
                                ...t ? .[""]
                            }
                        }, delete r.pluralForms[e], o()
                    },
                    resetLocaleData: (t, e) => {
                        r.data = {}, r.pluralForms = {}, s(t, e)
                    },
                    subscribe: t => (i.add(t), () => i.delete(t)),
                    __: (t, e) => {
                        let r = u(e, void 0, t);
                        return n ? (r = n.applyFilters("i18n.gettext", r, t, e), n.applyFilters("i18n.gettext_" + l(e), r, t, e)) : r
                    },
                    _x: c,
                    _n: (t, e, r, i) => {
                        let o = u(i, void 0, t, e, r);
                        return n ? (o = n.applyFilters("i18n.ngettext", o, t, e, r, i), n.applyFilters("i18n.ngettext_" + l(i), o, t, e, r, i)) : o
                    },
                    _nx: (t, e, r, i, o) => {
                        let a = u(o, i, t, e, r);
                        return n ? (a = n.applyFilters("i18n.ngettext_with_context", a, t, e, r, i, o), n.applyFilters("i18n.ngettext_with_context_" + l(o), a, t, e, r, i, o)) : a
                    },
                    isRTL: () => "rtl" === c("ltr", "text direction"),
                    hasTranslation: (t, e, i) => {
                        const o = e ? e + "" + t : t;
                        let a = !!r.data ? .[null != i ? i : "default"] ? .[o];
                        return n && (a = n.applyFilters("i18n.has_translation", a, t, e, i), a = n.applyFilters("i18n.has_translation_" + l(i), a, t, e, i)), a
                    }
                }
            };
        var y = window.wp.hooks;
        const b = x(void 0, void 0, y.defaultHooks);
        var _ = b;
        const v = b.getLocaleData.bind(b),
            m = b.setLocaleData.bind(b),
            w = b.resetLocaleData.bind(b),
            k = b.subscribe.bind(b),
            F = b.__.bind(b),
            S = b._x.bind(b),
            j = b._n.bind(b),
            L = b._nx.bind(b),
            T = b.isRTL.bind(b),
            D = b.hasTranslation.bind(b)
    }(), (window.wp = window.wp || {}).i18n = r
}();