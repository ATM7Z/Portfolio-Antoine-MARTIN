function zt(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}
const {toString: vn} = Object.prototype, {getPrototypeOf: nt} = Object,
    De = (e => t => {
        const n = vn.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)),
    X = e => (e = e.toLowerCase(), t => De(t) === e),
    ke = e => t => typeof t === e, {isArray: de} = Array,
    be = ke("undefined");
function Pn(e) {
    return e !== null && !be(e) && e.constructor !== null && !be(e.constructor) && j(
        e.constructor.isBuffer
    ) && e
        .constructor
        .isBuffer(e)
}
const Gt = X("ArrayBuffer");
function Un(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? t = ArrayBuffer.isView(e)
        : t = e && e.buffer && Gt(e.buffer),
    t
}
const Fn = ke("string"),
    j = ke("function"),
    qt = ke("number"),
    ve = e => e !== null && typeof e == "object",
    Hn = e => e === !0 || e === !1,
    Ne = e => {
        if (De(e) !== "object") 
            return !1;
        const t = nt(e);
        return (
            t === null || t === Object.prototype || Object.getPrototypeOf(t) === null
        ) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    $n = X("Date"),
    zn = X("File"),
    Gn = X("Blob"),
    qn = X("FileList"),
    Kn = e => ve(e) && j(e.pipe),
    jn = e => {
        let t;
        return e && (
            typeof FormData == "function" && e instanceof FormData || j(e.append) && ((t = De(e)) === "formdata" || t === "object" && j(e.toString) && e.toString() === "[object FormData]")
        )
    },
    Wn = X("URLSearchParams"),
    [Jn, Zn, Vn, Xn] = ["ReadableStream", "Request", "Response", "Headers"].map(X),
    Yn = e => e.trim
        ? e.trim()
        : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _e(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") 
        return;
    let r,
        s;
    if (typeof e != "object" && (e = [e]), de(e)) 
        for (r = 0, s = e.length; r < s; r++) 
            t.call(null, e[r], r, e);
        else {
            const o = n
                    ? Object.getOwnPropertyNames(e)
                    : Object.keys(e),
                i = o.length;
        let a;
        for (r = 0; r < i; r++) 
            a = o[r],
            t.call(null, e[a], a, e)
    }
}
function Kt(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        s;
    for (; r-- > 0;) 
        if (s = n[r], t === s.toLowerCase()) 
            return s;
return null
}
const oe = (
        () => typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
                ? self
                : typeof window < "u"
                    ? window
                    : global
    )(),
    jt = e => !be(e) && e !== oe;
function Ze() {
    const {caseless: e} = jt(this) && this || {},
        t = {},
        n = (r, s) => {
            const o = e && Kt(t, s) || s;
            Ne(t[o]) && Ne(r)
                ? t[o] = Ze(t[o], r)
                : Ne(r)
                    ? t[o] = Ze({}, r)
                    : de(r)
                        ? t[o] = r.slice()
                        : t[o] = r
        };
    for (let r = 0, s = arguments.length; r < s; r++) 
        arguments[r] && _e(arguments[r], n);
    return t
}
const Qn = (e, t, n, {allOwnKeys: r} = {}) => (_e(t, (s, o) => {
        n && j(s)
            ? e[o] = zt(s, n)
            : e[o] = s
    }, {allOwnKeys: r}), e),
    er = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    tr = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r),
        e.prototype.constructor = e,
        Object.defineProperty(e, "super", {value: t.prototype}),
        n && Object.assign(e.prototype, n)
    },
    nr = (e, t, n, r) => {
        let s,
            o,
            i;
        const a = {};
        if (t = t || {}, e == null) 
            return t;
        do {
            for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;) 
                i = s[o],
                (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
            e = n !== !1 && nt(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    rr = (e, t, n) => {
        e = String(e),
        (n === void 0 || n > e.length) && (n = e.length),
        n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    sr = e => {
        if (!e) 
            return null;
        if (de(e)) 
            return e;
        let t = e.length;
        if (!qt(t)) 
            return null;
        const n = new Array(t);
        for (; t-- > 0;) 
            n[t] = e[t];
        return n
    },
    ir = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && nt(Uint8Array)),
    or = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let s;
        for (; (s = r.next()) && !s.done;) {
            const o = s.value;
            t.call(e, o[0], o[1])
        }
    },
    ar = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null;) 
            r.push(n);
        return r
    },
    cr = X("HTMLFormElement"),
    lr = e => e
        .toLowerCase()
        .replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
            return r.toUpperCase() + s
        }),
    mt = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype),
    ur = X("RegExp"),
    Wt = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        _e(n, (s, o) => {
            let i;
            (i = t(s, o, e)) !== !1 && (r[o] = i || s)
        }),
        Object.defineProperties(e, r)
    },
    fr = e => {
        Wt(e, (t, n) => {
            if (j(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) 
                return !1;
            const r = e[n];
            if (j(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    dr = (e, t) => {
        const n = {},
            r = s => {
                s.forEach(o => {
                    n[o] = !0
                })
            };
        return de(e)
            ? r(e)
            : r(String(e).split(t)),
        n
    },
    hr = () => {},
    pr = (e, t) => e != null && Number.isFinite(e = +e)
        ? e
        : t,
    qe = "abcdefghijklmnopqrstuvwxyz",
    _t = "0123456789",
    Jt = {
        DIGIT: _t,
        ALPHA: qe,
        ALPHA_DIGIT: qe + qe.toUpperCase() + _t
    },
    gr = (e = 16, t = Jt.ALPHA_DIGIT) => {
        let n = "";
        const {length: r} = t;
        for (; e--;) 
            n += t[Math.random() * r | 0];
        return n
    };
function br(e) {
    return !!(
        e && j(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]
    )
}
const Er = e => {
        const t = new Array(10),
            n = (r, s) => {
                if (ve(r)) {
                    if (t.indexOf(r) >= 0) 
                        return;
                    if (!("toJSON" in r)) {
                        t[s] = r;
                        const o = de(r)
                            ? []
                            : {};
                        return _e(r, (i, a) => {
                            const l = n(i, s + 1);
                            !be(l) && (o[a] = l)
                        }),
                        t[s] = void 0,
                        o
                    }
                }
                return r
            };
        return n(e, 0)
    },
    mr = X("AsyncFunction"),
    _r = e => e && (ve(e) || j(e)) && j(e.then) && j(e.catch),
    Zt = (
        (e, t) => e
            ? setImmediate
            : t
                ? ((n, r) => (oe.addEventListener("message", ({source: s, data: o}) => {
                    s === oe && o === n && r.length && r.shift()()
                }, !1), s => {
                    r.push(s),
                    oe.postMessage(n, "*")
                }))(`axios@${Math.random()}`, [])
                : n => setTimeout(n)
    )(typeof setImmediate == "function", j(oe.postMessage)),
    yr = typeof queueMicrotask < "u"
        ? queueMicrotask.bind(oe)
        : typeof process < "u" && process.nextTick || Zt,
    c = {
        isArray: de,
        isArrayBuffer: Gt,
        isBuffer: Pn,
        isFormData: jn,
        isArrayBufferView: Un,
        isString: Fn,
        isNumber: qt,
        isBoolean: Hn,
        isObject: ve,
        isPlainObject: Ne,
        isReadableStream: Jn,
        isRequest: Zn,
        isResponse: Vn,
        isHeaders: Xn,
        isUndefined: be,
        isDate: $n,
        isFile: zn,
        isBlob: Gn,
        isRegExp: ur,
        isFunction: j,
        isStream: Kn,
        isURLSearchParams: Wn,
        isTypedArray: ir,
        isFileList: qn,
        forEach: _e,
        merge: Ze,
        extend: Qn,
        trim: Yn,
        stripBOM: er,
        inherits: tr,
        toFlatObject: nr,
        kindOf: De,
        kindOfTest: X,
        endsWith: rr,
        toArray: sr,
        forEachEntry: or,
        matchAll: ar,
        isHTMLForm: cr,
        hasOwnProperty: mt,
        hasOwnProp: mt,
        reduceDescriptors: Wt,
        freezeMethods: fr,
        toObjectSet: dr,
        toCamelCase: lr,
        noop: hr,
        toFiniteNumber: pr,
        findKey: Kt,
        global: oe,
        isContextDefined: jt,
        ALPHABET: Jt,
        generateString: gr,
        isSpecCompliantForm: br,
        toJSONObject: Er,
        isAsyncFn: mr,
        isThenable: _r,
        setImmediate: Zt,
        asap: yr
    };
function N(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (
        this.response = s,
        this.status = s.status
            ? s.status
            : null
    )
}
c.inherits(N, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: c.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Vt = N.prototype,
    Xt = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach(e => {
    Xt[e] = {
        value: e
    }
});
Object.defineProperties(N, Xt);
Object.defineProperty(Vt, "isAxiosError", {
    value: !0
});
N.from = (e, t, n, r, s, o) => {
    const i = Object.create(Vt);
    return c.toFlatObject(e, i, function (l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"),
    N.call(i, e.message, t, n, r, s),
    i.cause = e,
    i.name = e.name,
    o && Object.assign(i, o),
    i
};
const Sr = null;
function Ve(e) {
    return c.isPlainObject(e) || c.isArray(e)
}
function Yt(e) {
    return c.endsWith(e, "[]")
        ? e.slice(0, -2)
        : e
}
function yt(e, t, n) {
    return e
        ? e
            .concat(t)
            .map(function (s, o) {
                return s = Yt(s),
                !n && o
                    ? "[" + s + "]"
                    : s
            })
            .join(
                n
                    ? "."
                    : ""
            )
        : t
}
function wr(e) {
    return c.isArray(e) && !e.some(Ve)
}
const Rr = c.toFlatObject(c, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});
function Pe(e, t, n) {
    if (!c.isObject(e)) 
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = c.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function (g, p) {
        return !c.isUndefined(p[g])
    });
    const r = n.metaTokens,
        s = n.visitor || f,
        o = n.dots,
        i = n.indexes,
        l = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
    if (!c.isFunction(s)) 
        throw new TypeError("visitor must be a function");
    function u(h) {
        if (h === null) 
            return "";
        if (c.isDate(h)) 
            return h.toISOString();
        if (!l && c.isBlob(h)) 
            throw new N("Blob is not supported. Use a Buffer instead.");
        return c.isArrayBuffer(h) || c.isTypedArray(h)
            ? l && typeof Blob == "function"
                ? new Blob([h])
                : Buffer.from(h)
            : h
    }
    function f(h, g, p) {
        let _ = h;
        if (h && !p && typeof h == "object") {
            if (c.endsWith(g, "{}")) 
                g = r
                    ? g
                    : g.slice(0, -2),
                h = JSON.stringify(h);
            else if (c.isArray(h) && wr(h) || (c.isFileList(h) || c.endsWith(g, "[]")) && (_ = c.toArray(h))) 
                return g = Yt(g),
                _.forEach(function (S, C) {
                    !(c.isUndefined(S) || S === null) && t.append(
                        i === !0
                            ? yt([g], C, o)
                            : i === null
                                ? g
                                : g + "[]",
                        u(S)
                    )
                }),
                !1
        }
        return Ve(h)
            ? !0
            : (t.append(yt(p, g, o), u(h)), !1)
    }
    const E = [],
        R = Object.assign(Rr, {
            defaultVisitor: f,
            convertValue: u,
            isVisitable: Ve
        });
    function d(h, g) {
        if (!c.isUndefined(h)) {
            if (E.indexOf(h) !== -1) 
                throw Error("Circular reference detected in " + g.join("."));
            E.push(h),
            c.forEach(h, function (_, A) {
                (!(c.isUndefined(_) || _ === null) && s.call(
                    t,
                    _,
                    c.isString(A)
                        ? A.trim()
                        : A,
                    g,
                    R
                )) === !0 && d(
                    _,
                    g
                        ? g.concat(A)
                        : [A]
                )
            }),
            E.pop()
        }
    }
    if (!c.isObject(e)) 
        throw new TypeError("data must be an object");
    return d(e),
    t
}
function St(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}
function rt(e, t) {
    this._pairs = [],
    e && Pe(e, this, t)
}
const Qt = rt.prototype;
Qt.append = function (t, n) {
    this
        ._pairs
        .push([t, n])
};
Qt.toString = function (t) {
    const n = t
        ? function (r) {
            return t.call(this, r, St)
        }
        : St;
    return this
        ._pairs
        .map(function (s) {
            return n(s[0]) + "=" + n(s[1])
        }, "")
        .join("&")
};
function Ar(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]")
}
function en(e, t, n) {
    if (!t) 
        return e;
    const r = n && n.encode || Ar,
        s = n && n.serialize;
    let o;
    if (
        s
            ? o = s(t, n)
            : o = c.isURLSearchParams(t)
                ? t.toString()
                : new rt(t, n).toString(r),
        o
    ) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (
            e.indexOf("?") === -1
                ? "?"
                : "&"
        ) + o
    }
    return e
}
class Or {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this
            .handlers
            .push({
                fulfilled: t,
                rejected: n,
                synchronous: r
                    ? r.synchronous
                    : !1,
                runWhen: r
                    ? r.runWhen
                    : null
            }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        c.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}
const wt = Or,
    tn = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    Tr = typeof URLSearchParams < "u"
        ? URLSearchParams
        : rt,
    Nr = typeof FormData < "u"
        ? FormData
        : null,
    Cr = typeof Blob < "u"
        ? Blob
        : null,
    xr = {
        isBrowser: !0,
        classes: {
            URLSearchParams: Tr,
            FormData: Nr,
            Blob: Cr
        },
        protocols: [
            "http",
            "https",
            "file",
            "blob",
            "url",
            "data"
        ]
    },
    st = typeof window < "u" && typeof document < "u",
    Xe = typeof navigator == "object" && navigator || void 0,
    Mr = st && (
        !Xe || ["ReactNative", "NativeScript", "NS"].indexOf(Xe.product) < 0
    ),
    Ir = (
        () => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
    )(),
    Lr = st && window.location.href || "http://localhost",
    Br = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: st,
        hasStandardBrowserEnv: Mr,
        hasStandardBrowserWebWorkerEnv: Ir,
        navigator: Xe,
        origin: Lr
    }, Symbol.toStringTag, {value: "Module"})),
    q = {
        ...Br,
        ...xr
    };
function Dr(e, t) {
    return Pe(e, new q.classes.URLSearchParams, Object.assign({
        visitor: function (n, r, s, o) {
            return q.isNode && c.isBuffer(n)
                ? (this.append(r, n.toString("base64")), !1)
                : o
                    .defaultVisitor
                    .apply(this, arguments)
        }
    }, t))
}
function kr(e) {
    return c
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map(
            t => t[0] === "[]"
                ? ""
                : t[1] || t[0]
        )
}
function vr(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++) 
        o = n[r],
        t[o] = e[o];
    return t
}
function nn(e) {
    function t(n, r, s, o) {
        let i = n[o++];
        if (i === "__proto__") 
            return !0;
        const a = Number.isFinite(+i),
            l = o >= n.length;
        return i = !i && c.isArray(s)
            ? s.length
            : i,
        l
            ? (
                c.hasOwnProp(s, i)
                    ? s[i] = [s[i], r]
                    : s[i] = r,
                !a
            )
            : (
                (!s[i] || !c.isObject(s[i])) && (s[i] = []),
                t(n, r, s[i], o) && c.isArray(s[i]) && (s[i] = vr(s[i])),
                !a
            )
    }
    if (c.isFormData(e) && c.isFunction(e.entries)) {
        const n = {};
        return c.forEachEntry(e, (r, s) => {
            t(kr(r), s, n, 0)
        }),
        n
    }
    return null
}
function Pr(e, t, n) {
    if (c.isString(e)) 
        try {
            return (t || JSON.parse)(e),
            c.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError") 
                throw r
        }
    return (n || JSON.stringify)(e)
}
const it = {
    transitional: tn,
    adapter: [
        "xhr", "http", "fetch"
    ],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || "",
                s = r.indexOf("application/json") > -1,
                o = c.isObject(t);
            if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t)) 
                return s
                    ? JSON.stringify(nn(t))
                    : t;
            if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t)) 
                return t;
            if (c.isArrayBufferView(t)) 
                return t.buffer;
            if (c.isURLSearchParams(t)) 
                return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                t.toString();
            let a;
            if (o) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1) 
                    return Dr(t, this.formSerializer).toString();
                if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                    const l = this.env && this.env.FormData;
                    return Pe(
                        a
                            ? {
                                "files[]": t
                            }
                            : t,
                        l && new l,
                        this.formSerializer
                    )
                }
            }
            return o || s
                ? (n.setContentType("application/json", !1), Pr(t))
                : t
        }
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || it.transitional,
                r = n && n.forcedJSONParsing,
                s = this.responseType === "json";
            if (c.isResponse(t) || c.isReadableStream(t)) 
                return t;
            if (t && c.isString(t) && (r && !this.responseType || s)) {
                const i = !(n && n.silentJSONParsing) && s;
                try {
                    return JSON.parse(t)
                } catch (a) {
                    if (i) 
                        throw a.name === "SyntaxError"
                            ? N.from(a, N.ERR_BAD_RESPONSE, this, null, this.response)
                            : a
                    }
            }
            return t
        }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: q.classes.FormData,
        Blob: q.classes.Blob
    },
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
c.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
], e => {
    it.headers[e] = {}
});
const ot = it,
    Ur = c.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
    ]),
    Fr = e => {
        const t = {};
        let n,
            r,
            s;
        return e && e
            .split(`
`)
            .forEach(function (i) {
                s = i.indexOf(":"),
                n = i
                    .substring(0, s)
                    .trim()
                    .toLowerCase(),
                r = i
                    .substring(s + 1)
                    .trim(),
                !(!n || t[n] && Ur[n]) && (
                    n === "set-cookie"
                        ? t[n]
                            ? t[n].push(r)
                            : t[n] = [r]
                        : t[n] = t[n]
                            ? t[n] + ", " + r
                            : r
                )
            }),
        t
    },
    Rt = Symbol("internals");
function ge(e) {
    return e && String(e)
        .trim()
        .toLowerCase()
}
function Ce(e) {
    return e === !1 || e == null
        ? e
        : c.isArray(e)
            ? e.map(Ce)
            : String(e)
}
function Hr(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) 
        t[r[1]] = r[2];
    return t
}
const $r = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ke(e, t, n, r, s) {
    if (c.isFunction(r)) 
        return r.call(this, t, n);
    if (s && (t = n), !!c.isString(t)) {
        if (c.isString(r)) 
            return t.indexOf(r) !== -1;
        if (c.isRegExp(r)) 
            return r.test(t)
    }
}
function zr(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Gr(e, t) {
    const n = c.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function (s, o, i) {
                return this[r].call(this, t, s, o, i)
            },
            configurable: !0
        })
    })
}
class Ue {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function o(a, l, u) {
            const f = ge(l);
            if (!f) 
                throw new Error("header name must be a non-empty string");
            const E = c.findKey(s, f);
            (!E || s[E] === void 0 || u === !0 || u === void 0 && s[E] !== !1) && (
                s[E || l] = Ce(a)
            )
        }
        const i = (a, l) => c.forEach(a, (u, f) => o(u, f, l));
        if (c.isPlainObject(t) || t instanceof this.constructor) 
            i(t, n);
        else if (c.isString(t) && (t = t.trim()) && !$r(t)) 
            i(Fr(t), n);
        else if (c.isHeaders(t)) 
            for (const [a, l] of t.entries()) 
                o(l, a, r);
    else 
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = ge(t), t) {
            const r = c.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n) 
                    return s;
                if (n === !0) 
                    return Hr(s);
                if (c.isFunction(n)) 
                    return n.call(this, s, r);
                if (c.isRegExp(n)) 
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ge(t), t) {
            const r = c.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Ke(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function o(i) {
            if (i = ge(i), i) {
                const a = c.findKey(r, i);
                a && (!n || Ke(r, r[a], a, n)) && (delete r[a], s = !0)
            }
        }
        return c.isArray(t)
            ? t.forEach(o)
            : o(t),
        s
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            s = !1;
        for (; r--;) {
            const o = n[r];
            (!t || Ke(this, this[o], o, t, !0)) && (delete this[o], s = !0)
        }
        return s
    }
    normalize(t) {
        const n = this,
            r = {};
        return c.forEach(this, (s, o) => {
            const i = c.findKey(r, o);
            if (i) {
                n[i] = Ce(s),
                delete n[o];
                return
            }
            const a = t
                ? zr(o)
                : String(o).trim();
            a !== o && delete n[o],
            n[a] = Ce(s),
            r[a] = !0
        }),
        this
    }
    concat(...t) {
        return this
            .constructor
            .concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return c.forEach(this, (r, s) => {
            r != null && r !== !1 && (
                n[s] = t && c.isArray(r)
                    ? r.join(", ")
                    : r
            )
        }),
        n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object
            .entries(this.toJSON())
            .map(([t, n]) => t + ": " + n)
            .join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this
            ? t
            : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[Rt] = this[Rt] = {
                accessors: {}
            }).accessors,
            s = this.prototype;
        function o(i) {
            const a = ge(i);
            r[a] || (Gr(s, i), r[a] = !0)
        }
        return c.isArray(t)
            ? t.forEach(o)
            : o(t),
        this
    }
}
Ue.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
c.reduceDescriptors(Ue.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
});
c.freezeMethods(Ue);
const V = Ue;
function je(e, t) {
    const n = this || ot,
        r = t || n,
        s = V.from(r.headers);
    let o = r.data;
    return c.forEach(e, function (a) {
        o = a.call(
            n,
            o,
            s.normalize(),
            t
                ? t.status
                : void 0
        )
    }),
    s.normalize(),
    o
}
function rn(e) {
    return !!(e && e.__CANCEL__)
}
function he(e, t, n) {
    N.call(this, e ?? "canceled", N.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
c.inherits(he, N, {
    __CANCEL__: !0
});
function sn(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? e(n)
        : t(new N(
            "Request failed with status code " + n.status,
            [N.ERR_BAD_REQUEST, N.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
            n.config,
            n.request,
            n
        ))
}
function qr(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Kr(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let s = 0,
        o = 0,
        i;
    return t = t !== void 0
        ? t
        : 1e3,
    function (l) {
        const u = Date.now(),
            f = r[o];
        i || (i = u),
        n[s] = l,
        r[s] = u;
        let E = o,
            R = 0;
        for (; E !== s;) 
            R += n[E++],
            E = E % e;
        if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t) 
            return;
        const d = f && u - f;
        return d
            ? Math.round(R * 1e3 / d)
            : void 0
    }
}
function jr(e, t) {
    let n = 0,
        r = 1e3 / t,
        s,
        o;
    const i = (u, f = Date.now()) => {
        n = f,
        s = null,
        o && (clearTimeout(o), o = null),
        e.apply(null, u)
    };
    return [
        (...u) => {
            const f = Date.now(),
                E = f - n;
            E >= r
                ? i(u, f)
                : (s = u, o || (o = setTimeout(() => {
                    o = null,
                    i(s)
                }, r - E)))
        },
        () => s && i(s)
    ]
}
const Me = (e, t, n = 3) => {
        let r = 0;
        const s = Kr(50, 250);
        return jr(o => {
            const i = o.loaded,
                a = o.lengthComputable
                    ? o.total
                    : void 0,
                l = i - r,
                u = s(l),
                f = i <= a;
            r = i;
            const E = {
                loaded: i,
                total: a,
                progress: a
                    ? i / a
                    : void 0,
                bytes: l,
                rate: u || void 0,
                estimated: u && a && f
                    ? (a - i) / u
                    : void 0,
                event: o,
                lengthComputable: a != null,
                [
                    t
                        ? "download"
                        : "upload"
                ]: !0
            };
            e(E)
        }, n)
    },
    At = (e, t) => {
        const n = e != null;
        return [
            r => t[0]({lengthComputable: n, total: e, loaded: r}),
            t[1]
        ]
    },
    Ot = e => (...t) => c.asap(() => e(...t)),
    Wr = q.hasStandardBrowserEnv
        ? function () {
            const t = q.navigator && /(msie|trident)/i.test(q.navigator.userAgent),
                n = document.createElement("a");
            let r;
            function s(o) {
                let i = o;
                return t && (n.setAttribute("href", i), i = n.href),
                n.setAttribute("href", i), {
                    href: n.href,
                    protocol: n.protocol
                        ? n
                            .protocol
                            .replace(/:$/, "")
                        : "",
                    host: n.host,
                    search: n.search
                        ? n
                            .search
                            .replace(/^\?/, "")
                        : "",
                    hash: n.hash
                        ? n
                            .hash
                            .replace(/^#/, "")
                        : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: n
                        .pathname
                        .charAt(0) === "/"
                            ? n.pathname
                            : "/" + n.pathname
                }
            }
            return r = s(window.location.href),
            function (i) {
                const a = c.isString(i)
                    ? s(i)
                    : i;
                return a.protocol === r.protocol && a.host === r.host
            }
        }()
        : function () {
            return function () {
                return !0
            }
        }(),
    Jr = q.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, s, o) {
                const i = [e + "=" + encodeURIComponent(t)];
                c.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                c.isString(r) && i.push("path=" + r),
                c.isString(s) && i.push("domain=" + s),
                o === !0 && i.push("secure"),
                document.cookie = i.join("; ")
            },
            read(e) {
                const t = document
                    .cookie
                    .match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t
                    ? decodeURIComponent(t[3])
                    : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
        : {
            write() {},
            read() {
                return null
            },
            remove() {}
        };
function Zr(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Vr(e, t) {
    return t
        ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
        : e
}
function on(e, t) {
    return e && !Zr(t)
        ? Vr(e, t)
        : t
}
const Tt = e => e instanceof V
    ? {
        ...e
    }
    : e;
function ce(e, t) {
    t = t || {};
    const n = {};
    function r(u, f, E) {
        return c.isPlainObject(u) && c.isPlainObject(f)
            ? c
                .merge
                .call({
                    caseless: E
                }, u, f)
            : c.isPlainObject(f)
                ? c.merge({}, f)
                : c.isArray(f)
                    ? f.slice()
                    : f
    }
    function s(u, f, E) {
        if (c.isUndefined(f)) {
            if (!c.isUndefined(u)) 
                return r(void 0, u, E)
        } else 
            return r(u, f, E)
    }
    function o(u, f) {
        if (!c.isUndefined(f)) 
            return r(void 0, f)
    }
    function i(u, f) {
        if (c.isUndefined(f)) {
            if (!c.isUndefined(u)) 
                return r(void 0, u)
        } else 
            return r(void 0, f)
    }
    function a(u, f, E) {
        if (E in t) 
            return r(u, f);
        if (E in e) 
            return r(void 0, u)
    }
    const l = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (u, f) => s(Tt(u), Tt(f), !0)
    };
    return c.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
        const E = l[f] || s,
            R = E(e[f], t[f], f);
        c.isUndefined(R) && E !== a || (n[f] = R)
    }),
    n
}
const an = e => {
        const t = ce({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: s,
            xsrfCookieName: o,
            headers: i,
            auth: a
        } = t;
        t.headers = i = V.from(i),
        t.url = en(on(t.baseURL, t.url), e.params, e.paramsSerializer),
        a && i.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (
            a.password
                ? unescape(encodeURIComponent(a.password))
                : ""
        )));
        let l;
        if (c.isFormData(n)) {
            if (q.hasStandardBrowserEnv || q.hasStandardBrowserWebWorkerEnv) 
                i.setContentType(void 0);
            else if ((l = i.getContentType()) !== !1) {
                const [
                    u, ...f
                ] = l
                    ? l
                        .split(";")
                        .map(E => E.trim())
                        .filter(Boolean)
                    : [];
                i.setContentType([
                    u || "multipart/form-data",
                    ...f
                ].join("; "))
            }
        }
        if (q.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || r !== !1 && Wr(t.url))) {
            const u = s && o && Jr.read(o);
            u && i.set(s, u)
        }
        return t
    },
    Xr = typeof XMLHttpRequest < "u",
    Yr = Xr && function (e) {
        return new Promise(function (n, r) {
            const s = an(e);
            let o = s.data;
            const i = V
                .from(s.headers)
                .normalize();
            let {responseType: a, onUploadProgress: l, onDownloadProgress: u} = s,
                f,
                E,
                R,
                d,
                h;
            function g() {
                d && d(),
                h && h(),
                s.cancelToken && s
                    .cancelToken
                    .unsubscribe(f),
                s.signal && s
                    .signal
                    .removeEventListener("abort", f)
            }
            let p = new XMLHttpRequest;
            p.open(s.method.toUpperCase(), s.url, !0),
            p.timeout = s.timeout;
            function _() {
                if (!p) 
                    return;
                const S = V.from("getAllResponseHeaders" in p && p.getAllResponseHeaders()),
                    I = {
                        data: !a || a === "text" || a === "json"
                            ? p.responseText
                            : p.response,
                        status: p.status,
                        statusText: p.statusText,
                        headers: S,
                        config: e,
                        request: p
                    };
                sn(function (D) {
                    n(D),
                    g()
                }, function (D) {
                    r(D),
                    g()
                }, I),
                p = null
            }
            "onloadend" in p
                ? p.onloadend = _
                : p.onreadystatechange = function () {
                    !p || p.readyState !== 4 || p.status === 0 && !(
                        p.responseURL && p.responseURL.indexOf("file:") === 0
                    ) || setTimeout(_)
                },
            p.onabort = function () {
                p && (r(new N("Request aborted", N.ECONNABORTED, e, p)), p = null)
            },
            p.onerror = function () {
                r(new N("Network Error", N.ERR_NETWORK, e, p)),
                p = null
            },
            p.ontimeout = function () {
                let C = s.timeout
                    ? "timeout of " + s.timeout + "ms exceeded"
                    : "timeout exceeded";
                const I = s.transitional || tn;
                s.timeoutErrorMessage && (C = s.timeoutErrorMessage),
                r(new N(
                    C,
                    I.clarifyTimeoutError
                        ? N.ETIMEDOUT
                        : N.ECONNABORTED,
                    e,
                    p
                )),
                p = null
            },
            o === void 0 && i.setContentType(null),
            "setRequestHeader" in p && c.forEach(i.toJSON(), function (C, I) {
                p.setRequestHeader(I, C)
            }),
            c.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials),
            a && a !== "json" && (p.responseType = s.responseType),
            u && ([R, h] = Me(u, !0), p.addEventListener("progress", R)),
            l && p.upload && (
                [E, d] = Me(l),
                p.upload.addEventListener("progress", E),
                p.upload.addEventListener("loadend", d)
            ),
            (s.cancelToken || s.signal) && (f = S => {
                p && (r(
                    !S || S.type
                        ? new he(null, e, p)
                        : S
                ), p.abort(), p = null)
            }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (
                s.signal.aborted
                    ? f()
                    : s.signal.addEventListener("abort", f)
            ));
            const A = qr(s.url);
            if (A && q.protocols.indexOf(A) === -1) {
                r(new N("Unsupported protocol " + A + ":", N.ERR_BAD_REQUEST, e));
                return
            }
            p.send(o || null)
        })
    },
    Qr = (e, t) => {
        const {length: n} = e = e
            ? e.filter(Boolean)
            : [];
        if (t || n) {
            let r = new AbortController,
                s;
            const o = function (u) {
                if (!s) {
                    s = !0,
                    a();
                    const f = u instanceof Error
                        ? u
                        : this.reason;
                    r.abort(
                        f instanceof N
                            ? f
                            : new he(
                                f instanceof Error
                                    ? f.message
                                    : f
                            )
                    )
                }
            };
            let i = t && setTimeout(() => {
                i = null,
                o(new N(`timeout ${t} of ms exceeded`, N.ETIMEDOUT))
            }, t);
            const a = () => {
                e && (i && clearTimeout(i), i = null, e.forEach(u => {
                    u.unsubscribe
                        ? u.unsubscribe(o)
                        : u.removeEventListener("abort", o)
                }), e = null)
            };
            e.forEach(u => u.addEventListener("abort", o));
            const {signal: l} = r;
            return l.unsubscribe = () => c.asap(a),
            l
        }
    },
    es = Qr,
    ts = function* (e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return
        }
        let r = 0,
            s;
        for (; r < n;) 
            s = r + t,
            yield e.slice(r, s),
            r = s
    },
    ns = async function* (e, t) {
        for await(const n of rs(e))yield* ts(n, t)},
    rs = async function* (e) {
    if(e[Symbol.asyncIterator]) {
        yield* e;
        return
    }
    const t = e.getReader();
    try {
        for (;;) {
            const {done: n, value: r} = await t.read();
            if (n) 
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
},
Nt = (e, t, n, r) => {
    const s = ns(e, t);
    let o = 0,
        i,
        a = l => {
            i || (i = !0, r && r(l))
        };
    return new ReadableStream({
        async pull(l) {
            try {
                const {done: u, value: f} = await s.next();
                if (u) {
                    a(),
                    l.close();
                    return
                }
                let E = f.byteLength;
                if (n) {
                    let R = o += E;
                    n(R)
                }
                l.enqueue(new Uint8Array(f))
            } catch (u) {
                throw a(u),
                u
            }
        },
        cancel(l) {
            return a(l),
            s.return ()
        }
    }, {highWaterMark: 2})
},
Fe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
cn = Fe && typeof ReadableStream == "function",
ss = Fe && (
    typeof TextEncoder == "function"
        ? (e => t => e.encode(t))(new TextEncoder)
        : async e => new Uint8Array(await new Response(e).arrayBuffer())
),
ln = (e, ...t) => {
    try {
        return !!e(...t)
    } catch  {
        return !1
    }
},
is = cn && ln(() => {
    let e = !1;
    const t = new Request(q.origin, {
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    })
        .headers
        .has("Content-Type");
    return e && !t
}),
Ct = 64 * 1024,
Ye = cn && ln(() => c.isReadableStream(new Response("").body)),
Ie = {
    stream: Ye && (e => e.body)
};
Fe && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Ie[t] && (
            Ie[t] = c.isFunction(e[t])
                ? n => n[t]()
                : (n, r) => {
                    throw new N(`Response type '${t}' is not supported`, N.ERR_NOT_SUPPORT, r)
                }
        )
    })
})(new Response);
const os = async e => {
        if (e == null) 
            return 0;
        if (c.isBlob(e)) 
            return e.size;
        if (c.isSpecCompliantForm(e)) 
            return (await new Request(q.origin, {
                method: "POST",
                body: e
            }).arrayBuffer()).byteLength;
        if (c.isArrayBufferView(e) || c.isArrayBuffer(e)) 
            return e.byteLength;
        if (c.isURLSearchParams(e) && (e = e + ""), c.isString(e)) 
            return (await ss(e)).byteLength
    },
    as = async (e, t) => {
        const n = c.toFiniteNumber(e.getContentLength());
        return n ?? os(t)
    },
    cs = Fe && (async e => {
        let {
            url: t,
            method: n,
            data: r,
            signal: s,
            cancelToken: o,
            timeout: i,
            onDownloadProgress: a,
            onUploadProgress: l,
            responseType: u,
            headers: f,
            withCredentials: E = "same-origin",
            fetchOptions: R
        } = an(e);
        u = u
            ? (u + "").toLowerCase()
            : "text";
        let d = es([
                s, o && o.toAbortSignal()
            ], i),
            h;
        const g = d && d.unsubscribe && (() => {
            d.unsubscribe()
        });
        let p;
        try {
            if (l && is && n !== "get" && n !== "head" && (p = await as(f, r)) !== 0) {
                let I = new Request(t, {
                        method: "POST",
                        body: r,
                        duplex: "half"
                    }),
                    M;
                if (
                    c.isFormData(r) && (M = I.headers.get("content-type")) && f.setContentType(M),
                    I.body
                ) {
                    const [D, U] = At(p, Me(Ot(l)));
                    r = Nt(I.body, Ct, D, U)
                }
            }
            c.isString(E) || (
                E = E
                    ? "include"
                    : "omit"
            );
            const _ = "credentials" in Request.prototype;
            h = new Request(t, {
                ...R,
                signal: d,
                method: n.toUpperCase(),
                headers: f
                    .normalize()
                    .toJSON(),
                body: r,
                duplex: "half",
                credentials: _
                    ? E
                    : void 0
            });
            let A = await fetch(h);
            const S = Ye && (u === "stream" || u === "response");
            if (Ye && (a || S && g)) {
                const I = {};
                ["status", "statusText", "headers"].forEach(F => {
                    I[F] = A[F]
                });
                const M = c.toFiniteNumber(A.headers.get("content-length")),
                    [D, U] = a && At(M, Me(Ot(a), !0)) || [];
                A = new Response(Nt(A.body, Ct, D, () => {
                    U && U(),
                    g && g()
                }), I)
            }
            u = u || "text";
            let C = await Ie[c.findKey(Ie, u) || "text"](A, e);
            return !S && g && g(),
            await new Promise((I, M) => {
                sn(I, M, {
                    data: C,
                    headers: V.from(A.headers),
                    status: A.status,
                    statusText: A.statusText,
                    config: e,
                    request: h
                })
            })
        } catch (_) {
            throw g && g(),
            _ && _.name === "TypeError" && /fetch/i.test(_.message)
                ? Object.assign(new N("Network Error", N.ERR_NETWORK, e, h), {
                    cause: _.cause || _
                })
                : N.from(_, _ && _.code, e, h)
        }
    }),
    Qe = {
        http: Sr,
        xhr: Yr,
        fetch: cs
    };
c.forEach(Qe, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch  {}
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const xt = e => `- ${e}`,
    ls = e => c.isFunction(e) || e === null || e === !1,
    un = {
        getAdapter: e => {
            e = c.isArray(e)
                ? e
                : [e];
            const {length: t} = e;
            let n,
                r;
            const s = {};
            for (let o = 0; o < t; o++) {
                n = e[o];
                let i;
                if (r = n, !ls(n) && (r = Qe[(i = String(n)).toLowerCase()], r === void 0)) 
                    throw new N(`Unknown adapter '${i}'`);
                if (r) 
                    break;
                s[i || "#" + o] = r
            }
            if (!r) {
                const o = Object
                    .entries(s)
                    .map(([a, l]) => `adapter ${a} ` + (
                        l === !1
                            ? "is not supported by the environment"
                            : "is not available in the build"
                    ));
                let i = t
                    ? o.length > 1
                        ? `since :
` + o
                            .map(xt)
                            .join(`
`)
                        : " " + xt(o[0])
                    : "as no adapter specified";
                throw new N(
                    "There is no suitable adapter to dispatch the request " + i,
                    "ERR_NOT_SUPPORT"
                )
            }
            return r
        },
        adapters: Qe
    };
function We(e) {
    if (
        e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted
    ) 
        throw new he(null, e)
}
function Mt(e) {
    return We(e),
    e.headers = V.from(e.headers),
    e.data = je.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e
        .headers
        .setContentType("application/x-www-form-urlencoded", !1),
    un
        .getAdapter(e.adapter || ot.adapter)(e)
        .then(function (r) {
            return We(e),
            r.data = je.call(e, e.transformResponse, r),
            r.headers = V.from(r.headers),
            r
        }, function (r) {
            return rn(r) || (We(e), r && r.response && (
                r.response.data = je.call(e, e.transformResponse, r.response),
                r.response.headers = V.from(r.response.headers)
            )),
            Promise.reject(r)
        })
}
const fn = "1.7.7",
    at = {};
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((e, t) => {
    at[e] = function (r) {
        return typeof r === e || "a" + (
            t < 1
                ? "n "
                : " "
        ) + e
    }
});
const It = {};
at.transitional = function (t, n, r) {
    function s(o, i) {
        return "[Axios v" + fn + "] Transitional option '" + o + "'" + i + (
            r
                ? ". " + r
                : ""
        )
    }
    return(o, i, a) => {
        if (t === !1) 
            throw new N(s(i, " has been removed" + (
                n
                    ? " in " + n
                    : ""
            )), N.ERR_DEPRECATED);
        return n && !It[i] && (It[i] = !0, console.warn(s(
            i,
            " has been deprecated since v" + n +
                    " and will be removed in the near future"
        ))),
        t
            ? t(o, i, a)
            : !0
    }
};
function us(e, t, n) {
    if (typeof e != "object") 
        throw new N("options must be an object", N.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0;) {
        const o = r[s],
            i = t[o];
        if (i) {
            const a = e[o],
                l = a === void 0 || i(a, o, e);
            if (l !== !0) 
                throw new N("option " + o + " must be " + l, N.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) 
            throw new N("Unknown option " + o, N.ERR_BAD_OPTION)
    }
}
const et = {
        assertOptions: us,
        validators: at
    },
    ne = et.validators;
class Le {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new wt,
            response: new wt
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let s;
                Error.captureStackTrace
                    ? Error.captureStackTrace(s = {})
                    : s = new Error;
                const o = s.stack
                    ? s
                        .stack
                        .replace(/^.+\n/, "")
                    : "";
                try {
                    r.stack
                        ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (
                            r.stack += `
` + o
                        )
                        : r.stack = o
                } catch  {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string"
            ? (n = n || {}, n.url = t)
            : n = t || {},
        n = ce(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && et.assertOptions(r, {
            silentJSONParsing: ne.transitional(ne.boolean),
            forcedJSONParsing: ne.transitional(ne.boolean),
            clarifyTimeoutError: ne.transitional(ne.boolean)
        }, !1),
        s != null && (
            c.isFunction(s)
                ? n.paramsSerializer = {
                    serialize: s
                }
                : et.assertOptions(s, {
                    encode: ne.function,
                    serialize: ne.function
                }, !0)
        ),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && c.merge(o.common, o[n.method]);
        o && c.forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], h => {
            delete o[h]
        }),
        n.headers = V.concat(i, o);
        const a = [];
        let l = !0;
        this
            .interceptors
            .request
            .forEach(function (g) {
                typeof g.runWhen == "function" && g.runWhen(n) === !1 || (
                    l = l && g.synchronous,
                    a.unshift(g.fulfilled, g.rejected)
                )
            });
        const u = [];
        this
            .interceptors
            .response
            .forEach(function (g) {
                u.push(g.fulfilled, g.rejected)
            });
        let f,
            E = 0,
            R;
        if (!l) {
            const h = [Mt.bind(this), void 0];
            for (
                h.unshift.apply(h, a),
                h.push.apply(h, u),
                R = h.length,
                f = Promise.resolve(n);
                E < R;
            ) 
                f = f.then(h[E++], h[E++]);
            return f
        }
        R = a.length;
        let d = n;
        for (E = 0; E < R;) {
            const h = a[E++],
                g = a[E++];
            try {
                d = h(d)
            } catch (p) {
                g.call(this, p);
                break
            }
        }
        try {
            f = Mt.call(this, d)
        } catch (h) {
            return Promise.reject(h)
        }
        for (E = 0, R = u.length; E < R;) 
            f = f.then(u[E++], u[E++]);
        return f
    }
    getUri(t) {
        t = ce(this.defaults, t);
        const n = on(t.baseURL, t.url);
        return en(n, t.params, t.paramsSerializer)
    }
}
c.forEach([
    "delete", "get", "head", "options"
], function (t) {
    Le.prototype[t] = function (n, r) {
        return this.request(ce(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
c.forEach([
    "post", "put", "patch"
], function (t) {
    function n(r) {
        return function (o, i, a) {
            return this.request(ce(a || {}, {
                method: t,
                headers: r
                    ? {
                        "Content-Type": "multipart/form-data"
                    }
                    : {},
                url: o,
                data: i
            }))
        }
    }
    Le.prototype[t] = n(),
    Le.prototype[t + "Form"] = n(!0)
});
const xe = Le;
class ct {
    constructor(t) {
        if (typeof t != "function") 
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (o) {
            n = o
        });
        const r = this;
        this
            .promise
            .then(s => {
                if (!r._listeners) 
                    return;
                let o = r._listeners.length;
                for (; o-- > 0;) 
                    r._listeners[o](s);
                r._listeners = null
            }),
        this.promise.then = s => {
            let o;
            const i = new Promise(a => {
                r.subscribe(a),
                o = a
            }).then(s);
            return i.cancel = function () {
                r.unsubscribe(o)
            },
            i
        },
        t(function (o, i, a) {
            r.reason || (r.reason = new he(o, i, a), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) 
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners
            ? this
                ._listeners
                .push(t)
            : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) 
            return;
        const n = this
            ._listeners
            .indexOf(t);
        n !== -1 && this
            ._listeners
            .splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController,
            n = r => {
                t.abort(r)
            };
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new ct(function (s) {
                t = s
            }),
            cancel: t
        }
    }
}
const fs = ct;
function ds(e) {
    return function (n) {
        return e.apply(null, n)
    }
}
function hs(e) {
    return c.isObject(e) && e.isAxiosError === !0
}
const tt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object
    .entries(tt)
    .forEach(([e, t]) => {
        tt[t] = e
    });
const ps = tt;
function dn(e) {
    const t = new xe(e),
        n = zt(xe.prototype.request, t);
    return c.extend(n, xe.prototype, t, {
        allOwnKeys: !0
    }),
    c.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function (s) {
        return dn(ce(e, s))
    },
    n
}
const P = dn(ot);
P.Axios = xe;
P.CanceledError = he;
P.CancelToken = fs;
P.isCancel = rn;
P.VERSION = fn;
P.toFormData = Pe;
P.AxiosError = N;
P.Cancel = P.CanceledError;
P.all = function (t) {
    return Promise.all(t)
};
P.spread = ds;
P.isAxiosError = hs;
P.mergeConfig = ce;
P.AxiosHeaders = V;
P.formToJSON = e => nn(
    c.isHTMLForm(e)
        ? new FormData(e)
        : e
);
P.getAdapter = un.getAdapter;
P.HttpStatusCode = ps;
P.default = P;
const yi = P;
var gs = {
        start() {
            if (document.readyState !== "complete") {
                document.addEventListener("DOMContentLoaded", this.observe);
                return
            }
            this.observe()
        },
        observe() {
            document
                .querySelectorAll(
                    '[class*=" intersect:"],[class*=":intersect:"],[class^="intersect:"],[class="in' +
                    'tersect"],[class*=" intersect "],[class^="intersect "],[class$=" intersect"]'
                )
                .forEach(e => {
                    let t = new IntersectionObserver(n => {
                        n.forEach(r => {
                            if (!r.isIntersecting) {
                                e.setAttribute("no-intersect", "");
                                return
                            }
                            e.removeAttribute("no-intersect"),
                            e
                                .classList
                                .contains("intersect-once") && t.disconnect()
                        })
                    });
                    t.observe(e)
                })
        }
    },
    Si = gs;
function hn(e) {
    return e && e.__esModule && Object
        .prototype
        .hasOwnProperty
        .call(e, "default")
            ? e.default
            : e
}
var bs = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.PowerGlitch = e.mergeOptions = void 0;
    const t = (d = "always") => ({
            playMode: d,
            createContainers: !0,
            hideOverflow: !1,
            timing: d === "always"
                ? {
                    duration: 2 * 1e3,
                    iterations: 1 / 0
                }
                : {
                    duration: 250,
                    iterations: 1
                },
            glitchTimeSpan: d === "always"
                ? {
                    start: .5,
                    end: .7
                }
                : {
                    start: 0,
                    end: 1
                },
            shake: {
                velocity: 15,
                amplitudeX: .2,
                amplitudeY: .2
            },
            slice: d === "click"
                ? {
                    count: 15,
                    velocity: 20,
                    minHeight: .02,
                    maxHeight: .15,
                    hueRotate: !0
                }
                : {
                    count: 6,
                    velocity: 15,
                    minHeight: .02,
                    maxHeight: .15,
                    hueRotate: !0
                },
            pulse: !1
        }),
        n = (d, h) => {
            if (!d.glitchTimeSpan) 
                return 1;
            const g = d.glitchTimeSpan.start,
                p = d.glitchTimeSpan.end;
            if (h < g || h > p) 
                return 0;
            const _ = g + (p - g) / 2;
            return h < _
                ? (h - g) / (_ - g)
                : (p - h) / (p - _)
        },
        r = (d, h) => (Math.random() - .5) * 2 * n(d, h),
        s = ({minHeight: d, maxHeight: h, minWidth: g, maxWidth: p}) => {
            const _ = Math.floor(Math.random() * ((h - d) * 100 + 1)) + d * 100,
                A = Math.floor(Math.random() * ((p - g) * 100 + 1)) + g * 100,
                S = Math.floor(Math.random() * (100 - _)),
                C = Math.floor(Math.random() * (100 - A)),
                I = `${C + A}% ${S}%`,
                M = `${C + A}% ${S + _}%`,
                D = `${C}% ${S + _}%`,
                U = `${C}% ${S}%`;
            return `polygon(${I},${M},${D},${U})`
        },
        o = d => {
            const h = Math.floor(d.slice.velocity * d.timing.duration / 1e3) + 1,
                g = [];
            for (let p = 0; p < h; ++p) {
                if (n(d, p / h) === 0) {
                    g.push({opacity: "0", transform: "none", clipPath: "unset"});
                    continue
                }
                const A = {
                    opacity: "1",
                    transform: `translate3d(${r(d, p / h) * 30}%,0,0)`,
                    clipPath: s(
                        {minHeight: d.slice.minHeight, maxHeight: d.slice.maxHeight, minWidth: 1, maxWidth: 1}
                    )
                };
                d.slice.hueRotate && (
                    A.filter = `hue-rotate(${Math.floor(r(d, p / h) * 360)}deg)`
                ),
                g.push(A)
            }
            return {
                steps: g,
                timing: Object.assign({
                    easing: `steps(${h},jump-start)`
                }, d.timing)
            }
        },
        i = d => d.pulse
            ? {
                steps: [
                    {
                        transform: "scale(1)",
                        opacity: "1"
                    }, {
                        transform: `scale(${d.pulse.scale})`,
                        opacity: "0"
                    }
                ],
                timing: Object.assign(Object.assign({}, d.timing), {
                    delay: (
                        d.glitchTimeSpan
                            ? d.glitchTimeSpan.start
                            : 0
                    ) * d.timing.duration,
                    easing: "ease-in-out"
                })
            }
            : null,
        a = d => {
            if (!d.shake) 
                return {steps: [], timing: {}};
            const h = Math.floor(d.shake.velocity * d.timing.duration / 1e3) + 1,
                g = [];
            for (let p = 0; p < h; ++p) {
                const _ = r(d, p / h) * d.shake.amplitudeX * 100,
                    A = r(d, p / h) * d.shake.amplitudeY * 100;
                g.push({transform: `translate3d(${_}%,${A}%,0)`})
            }
            return {
                steps: g,
                timing: Object.assign({
                    easing: `steps(${h},jump-start)`
                }, d.timing)
            }
        },
        l = d => [
            a(d), i(d), ...Array
                .from({length: d.slice.count})
                .map(() => o(d))
        ].filter(h => h !== null),
        u = (...d) => {
            const h = g => g && typeof g == "object";
            return d.reduce((g, p) => (Object.keys(p).forEach(_ => {
                h(g[_]) && h(p[_])
                    ? g[_] = (0, e.mergeOptions)(g[_], p[_])
                    : p[_] !== void 0 && (g[_] = p[_])
            }), g), {})
        };
    e.mergeOptions = u;
    const f = (d, h) => {
            var g,
                p;
            if (!h.createContainers) 
                return {container: d, layersContainer: d, glitched: d.firstElementChild};
            if (!d.dataset.glitched) {
                const S = document.createElement("div"),
                    C = document.createElement("div");
                return getComputedStyle(d)
                    .getPropertyValue("display")
                    .match(/^inline/) && (C.style.display = "inline-block"),
                C.appendChild(S),
                (g = d.parentElement) === null || g === void 0 || g.insertBefore(C, d),
                S.prepend(d), {
                    container: C,
                    layersContainer: S,
                    glitched: d
                }
            }
            const _ = d.parentElement,
                A = (p = d.parentElement) === null || p === void 0
                    ? void 0
                    : p.parentElement;
            for (; _.children.length > 1;) 
                _.removeChild(_.children[1]);
            return _
                .firstElementChild
                .getAnimations()
                .forEach(S => S.cancel()), {
                container: A,
                layersContainer: _,
                glitched: d
            }
        },
        E = (d, h, g) => {
            const {glitched: p, container: _, layersContainer: A} = f(d, g);
            A.style.display = "grid",
            g.hideOverflow && (_.style.overflow = "hidden"),
            g.html && (p.innerHTML = g.html),
            p.style.gridArea = "1/1/-1/-1";
            const S = p.cloneNode(!0);
            S.dataset.islayer = "true",
            S.style.gridArea = "1/1/-1/-1",
            S.style.userSelect = "none",
            S.style.pointerEvents = "none",
            S.style.opacity = "0";
            for (let M = 0; M < h.length - 1; ++M) {
                const D = S.cloneNode(!0);
                A.appendChild(D)
            }
            const C = () => {
                    h.forEach((M, D) => {
                        A
                            .children[D]
                            .animate(M.steps, M.timing)
                    })
                },
                I = () => {
                    h.forEach((M, D) => {
                        A
                            .children[D]
                            .getAnimations()
                            .forEach(U => {
                                U.cancel()
                            })
                    })
                };
            switch (
                _.onmouseenter = null,
                _.onmouseleave = null,
                _.onclick = null,
                g.playMode
            ) {
                case "always":
                    C();
                    break;
                case "hover":
                    _.onmouseenter = C,
                    _.onmouseleave = I;
                    break;
                case "click":
                    _.onclick = () => {
                        I(),
                        C()
                    };
                    break
            }
            return d.dataset.glitched = "1", {
                container: _,
                startGlitch: C,
                stopGlitch: I
            }
        },
        R = (d = ".powerglitch", h = {}) => {
            const g = (0, e.mergeOptions)(t(h.playMode), h);
            let p = [];
            typeof d == "string"
                ? p = Array.from(document.querySelectorAll(d))
                : d instanceof NodeList
                    ? p = Array.from(d)
                    : Array.isArray(d)
                        ? p = d
                        : d instanceof HTMLElement && (p = [d]);
            const _ = l(g),
                A = p
                    .filter(S => !S.dataset.islayer)
                    .map(S => E(S, _, g));
            return {
                containers: A.map(S => S.container),
                startGlitch: () => A.forEach(S => S.startGlitch()),
                stopGlitch: () => A.forEach(S => S.stopGlitch())
            }
        };
    e.PowerGlitch = {
        glitch: R,
        generateLayers: l,
        getDefaultOptions: t
    }
})(bs);
function pn(e) {
    return e instanceof Map
        ? e.clear = e.delete = e.set = function () {
            throw new Error("map is read-only")
        }
        : e instanceof Set && (e.add = e.clear = e.delete = function () {
            throw new Error("set is read-only")
        }),
    Object.freeze(e),
    Object
        .getOwnPropertyNames(e)
        .forEach(t => {
            const n = e[t],
                r = typeof n;
            (r === "object" || r === "function") && !Object.isFrozen(n) && pn(n)
        }),
    e
}
let Lt = class {
    constructor(t) {
        t.data === void 0 && (t.data = {}),
        this.data = t.data,
        this.isMatchIgnored = !1
    }
    ignoreMatch() {
        this.isMatchIgnored = !0
    }
};
function gn(e) {
    return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
}
function re(e, ...t) {
    const n = Object.create(null);
    for (const r in e) 
        n[r] = e[r];
    return t.forEach(function (r) {
        for (const s in r) 
            n[s] = r[s]
    }),
    n
}
const Es = "</span>",
    Bt = e => !!e.scope,
    ms = (e, {prefix: t}) => {
        if (e.startsWith("language:")) 
            return e.replace("language:", "language-");
        if (e.includes(".")) {
            const n = e.split(".");
            return [
                `${t}${n.shift()}`, ...n.map((r, s) => `${r}${ "_".repeat(s + 1)}`)
            ].join(" ")
        }
        return `${t}${e}`
    };
class _s {
    constructor(t, n) {
        this.buffer = "",
        this.classPrefix = n.classPrefix,
        t.walk(this)
    }
    addText(t) {
        this.buffer += gn(t)
    }
    openNode(t) {
        if (!Bt(t)) 
            return;
        const n = ms(t.scope, {prefix: this.classPrefix});
        this.span(n)
    }
    closeNode(t) {
        Bt(t) && (this.buffer += Es)
    }
    value() {
        return this.buffer
    }
    span(t) {
        this.buffer += `<span class="${t}">`
    }
}
const Dt = (e = {}) => {
    const t = {
        children: []
    };
    return Object.assign(t, e),
    t
};
class lt {
    constructor() {
        this.rootNode = Dt(),
        this.stack = [this.rootNode]
    }
    get top() {
        return this.stack[this.stack.length - 1]
    }
    get root() {
        return this.rootNode
    }
    add(t) {
        this
            .top
            .children
            .push(t)
    }
    openNode(t) {
        const n = Dt({scope: t});
        this.add(n),
        this
            .stack
            .push(n)
    }
    closeNode() {
        if (this.stack.length > 1) 
            return this
                .stack
                .pop()
        }
    closeAllNodes() {
        for (; this.closeNode();) ;
        }
    toJSON() {
        return JSON.stringify(this.rootNode, null, 4)
    }
    walk(t) {
        return this
            .constructor
            ._walk(t, this.rootNode)
    }
    static _walk(t, n) {
        return typeof n == "string"
            ? t.addText(n)
            : n.children && (
                t.openNode(n),
                n.children.forEach(r => this._walk(t, r)),
                t.closeNode(n)
            ),
        t
    }
    static _collapse(t) {
        typeof t != "string" && t.children && (
            t.children.every(n => typeof n == "string")
                ? t.children = [
                    t
                        .children
                        .join("")
                ]
                : t.children.forEach(n => {
                    lt._collapse(n)
                })
        )
    }
}
class ys extends lt {
    constructor(t) {
        super(),
        this.options = t
    }
    addText(t) {
        t !== "" && this.add(t)
    }
    startScope(t) {
        this.openNode(t)
    }
    endScope() {
        this.closeNode()
    }
    __addSublanguage(t, n) {
        const r = t.root;
        n && (r.scope = `language:${n}`),
        this.add(r)
    }
    toHTML() {
        return new _s(this, this.options).value()
    }
    finalize() {
        return this.closeAllNodes(),
        !0
    }
}
function Ee(e) {
    return e
        ? typeof e == "string"
            ? e
            : e.source
        : null
}
function bn(e) {
    return le("(?=", e, ")")
}
function Ss(e) {
    return le("(?:", e, ")*")
}
function ws(e) {
    return le("(?:", e, ")?")
}
function le(...e) {
    return e
        .map(n => Ee(n))
        .join("")
}
function Rs(e) {
    const t = e[e.length - 1];
    return typeof t == "object" && t.constructor === Object
        ? (e.splice(e.length - 1, 1), t)
        : {}
}
function ut(...e) {
    return "(" + (
        Rs(e).capture
            ? ""
            : "?:"
    ) + e
        .map(r => Ee(r))
        .join("|") + ")"
}
function En(e) {
    return new RegExp(e.toString() + "|")
        .exec("")
        .length - 1
}
function As(e, t) {
    const n = e && e.exec(t);
    return n && n.index === 0
}
const Os = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function ft(e, {joinWith: t}) {
    let n = 0;
    return e
        .map(r => {
            n += 1;
            const s = n;
            let o = Ee(r),
                i = "";
            for (; o.length > 0;) {
                const a = Os.exec(o);
                if (!a) {
                    i += o;
                    break
                }
                i += o.substring(0, a.index),
                o = o.substring(a.index + a[0].length),
                a[0][0] === "\\" && a[1]
                    ? i += "\\" + String(Number(a[1]) + s)
                    : (i += a[0], a[0] === "(" && n++)
            }
            return i
        })
        .map(r => `(${r})`)
        .join(t)
}
const Ts = /\b\B/,
    mn = "[a-zA-Z]\\w*",
    dt = "[a-zA-Z_]\\w*",
    _n = "\\b\\d+(\\.\\d+)?",
    yn = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    Sn = "\\b(0b[01]+)",
    Ns = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>" +
            ">>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    Cs = (e = {}) => {
        const t = /^#![ ]*\//;
        return e.binary && (e.begin = le(t, /.*\b/, e.binary, /\b.*/)),
        re({
            scope: "meta",
            begin: t,
            end: /$/,
            relevance: 0,
            "on:begin": (n, r) => {
                n.index !== 0 && r.ignoreMatch()
            }
        }, e)
    },
    me = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
    },
    xs = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [me]
    },
    Ms = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [me]
    },
    Is = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    He = function (e, t, n = {}) {
        const r = re({
            scope: "comment",
            begin: e,
            end: t,
            contains: []
        }, n);
        r
            .contains
            .push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0
            });
        const s = ut(
            "I",
            "a",
            "is",
            "so",
            "us",
            "to",
            "at",
            "if",
            "in",
            "it",
            "on",
            /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
            /[A-Za-z]+[-][a-z]+/,
            /[A-Za-z][a-z]{2,}/
        );
        return r
            .contains
            .push({
                begin: le(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}")
            }),
        r
    },
    Ls = He("//", "$"),
    Bs = He("/\\*", "\\*/"),
    Ds = He("#", "$"),
    ks = {
        scope: "number",
        begin: _n,
        relevance: 0
    },
    vs = {
        scope: "number",
        begin: yn,
        relevance: 0
    },
    Ps = {
        scope: "number",
        begin: Sn,
        relevance: 0
    },
    Us = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
            me, {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [me]
            }
        ]
    },
    Fs = {
        scope: "title",
        begin: mn,
        relevance: 0
    },
    Hs = {
        scope: "title",
        begin: dt,
        relevance: 0
    },
    $s = {
        begin: "\\.\\s*" + dt,
        relevance: 0
    },
    zs = function (e) {
        return Object.assign(e, {
            "on:begin": (t, n) => {
                n.data._beginMatch = t[1]
            },
            "on:end": (t, n) => {
                n.data._beginMatch !== t[1] && n.ignoreMatch()
            }
        })
    };
var Ae = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: xs,
    BACKSLASH_ESCAPE: me,
    BINARY_NUMBER_MODE: Ps,
    BINARY_NUMBER_RE: Sn,
    COMMENT: He,
    C_BLOCK_COMMENT_MODE: Bs,
    C_LINE_COMMENT_MODE: Ls,
    C_NUMBER_MODE: vs,
    C_NUMBER_RE: yn,
    END_SAME_AS_BEGIN: zs,
    HASH_COMMENT_MODE: Ds,
    IDENT_RE: mn,
    MATCH_NOTHING_RE: Ts,
    METHOD_GUARD: $s,
    NUMBER_MODE: ks,
    NUMBER_RE: _n,
    PHRASAL_WORDS_MODE: Is,
    QUOTE_STRING_MODE: Ms,
    REGEXP_MODE: Us,
    RE_STARTERS_RE: Ns,
    SHEBANG: Cs,
    TITLE_MODE: Fs,
    UNDERSCORE_IDENT_RE: dt,
    UNDERSCORE_TITLE_MODE: Hs
});
function Gs(e, t) {
    e.input[e.index - 1] === "." && t.ignoreMatch()
}
function qs(e, t) {
    e.className !== void 0 && (e.scope = e.className, delete e.className)
}
function Ks(e, t) {
    t && e.beginKeywords && (
        e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") +
                    ")(?!\\.)(?=\\b|\\s)",
        e.__beforeBegin = Gs,
        e.keywords = e.keywords || e.beginKeywords,
        delete e.beginKeywords,
        e.relevance === void 0 && (e.relevance = 0)
    )
}
function js(e, t) {
    Array.isArray(e.illegal) && (e.illegal = ut(...e.illegal))
}
function Ws(e, t) {
    if (e.match) {
        if (e.begin || e.end) 
            throw new Error("begin & end are not supported with match");
        e.begin = e.match,
        delete e.match
    }
}
function Js(e, t) {
    e.relevance === void 0 && (e.relevance = 1)
}
const Zs = (e, t) => {
        if (!e.beforeMatch) 
            return;
        if (e.starts) 
            throw new Error("beforeMatch cannot be used with starts");
        const n = Object.assign({}, e);
        Object
            .keys(e)
            .forEach(r => {
                delete e[r]
            }),
        e.keywords = n.keywords,
        e.begin = le(n.beforeMatch, bn(n.begin)),
        e.starts = {
            relevance: 0,
            contains: [Object.assign(n, {
                    endsParent: !0
                })]
        },
        e.relevance = 0,
        delete n.beforeMatch
    },
    Vs = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        "list",
        "value"
    ],
    Xs = "keyword";
function wn(e, t, n = Xs) {
    const r = Object.create(null);
    return typeof e == "string"
        ? s(n, e.split(" "))
        : Array.isArray(e)
            ? s(n, e)
            : Object
                .keys(e)
                .forEach(function (o) {
                    Object.assign(r, wn(e[o], t, o))
                }),
    r;
    function s(o, i) {
        t && (i = i.map(a => a.toLowerCase())),
        i.forEach(function (a) {
            const l = a.split("|");
            r[l[0]] = [
                o,
                Ys(l[0], l[1])
            ]
        })
    }
}
function Ys(e, t) {
    return t
        ? Number(t)
        : Qs(e)
            ? 0
            : 1
}
function Qs(e) {
    return Vs.includes(e.toLowerCase())
}
const kt = {},
    ae = e => {
        console.error(e)
    },
    vt = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t)
    },
    ue = (e, t) => {
        kt[`${e}/${t}`] || (
            console.log(`Deprecated as of ${e}. ${t}`),
            kt[`${e}/${t}`] = !0
        )
    },
    Be = new Error;
function Rn(e, t, {key: n}) {
    let r = 0;
    const s = e[n],
        o = {},
        i = {};
    for (let a = 1; a <= t.length; a++) 
        i[a + r] = s[a],
        o[a + r] = !0,
        r += En(t[a - 1]);
    e[n] = i,
    e[n]._emit = o,
    e[n]._multi = !0
}
function ei(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) 
            throw ae("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
            Be;
        if (typeof e.beginScope != "object" || e.beginScope === null) 
            throw ae("beginScope must be object"),
            Be;
        Rn(e, e.begin, {key: "beginScope"}),
        e.begin = ft(e.begin, {joinWith: ""})
    }
}
function ti(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) 
            throw ae("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
            Be;
        if (typeof e.endScope != "object" || e.endScope === null) 
            throw ae("endScope must be object"),
            Be;
        Rn(e, e.end, {key: "endScope"}),
        e.end = ft(e.end, {joinWith: ""})
    }
}
function ni(e) {
    e.scope && typeof e.scope == "object" && e.scope !== null && (
        e.beginScope = e.scope,
        delete e.scope
    )
}
function ri(e) {
    ni(e),
    typeof e.beginScope == "string" && (e.beginScope = {
        _wrap: e.beginScope
    }),
    typeof e.endScope == "string" && (e.endScope = {
        _wrap: e.endScope
    }),
    ei(e),
    ti(e)
}
function si(e) {
    function t(i, a) {
        return new RegExp(Ee(i), "m" + (
            e.case_insensitive
                ? "i"
                : ""
        ) + (
            e.unicodeRegex
                ? "u"
                : ""
        ) + (
            a
                ? "g"
                : ""
        ))
    }
    class n {
        constructor() {
            this.matchIndexes = {},
            this.regexes = [],
            this.matchAt = 1,
            this.position = 0
        }
        addRule(a, l) {
            l.position = this.position++,
            this.matchIndexes[this.matchAt] = l,
            this
                .regexes
                .push([l, a]),
            this.matchAt += En(a) + 1
        }
        compile() {
            this.regexes.length === 0 && (this.exec = () => null);
            const a = this
                .regexes
                .map(l => l[1]);
            this.matcherRe = t(ft(a, {joinWith: "|"}), !0),
            this.lastIndex = 0
        }
        exec(a) {
            this.matcherRe.lastIndex = this.lastIndex;
            const l = this
                .matcherRe
                .exec(a);
            if (!l) 
                return null;
            const u = l.findIndex((E, R) => R > 0 && E !== void 0),
                f = this.matchIndexes[u];
            return l.splice(0, u),
            Object.assign(l, f)
        }
    }
    class r {
        constructor() {
            this.rules = [],
            this.multiRegexes = [],
            this.count = 0,
            this.lastIndex = 0,
            this.regexIndex = 0
        }
        getMatcher(a) {
            if (this.multiRegexes[a]) 
                return this.multiRegexes[a];
            const l = new n;
            return this
                .rules
                .slice(a)
                .forEach(([u, f]) => l.addRule(u, f)),
            l.compile(),
            this.multiRegexes[a] = l,
            l
        }
        resumingScanAtSamePosition() {
            return this.regexIndex !== 0
        }
        considerAll() {
            this.regexIndex = 0
        }
        addRule(a, l) {
            this
                .rules
                .push([a, l]),
            l.type === "begin" && this.count++
        }
        exec(a) {
            const l = this.getMatcher(this.regexIndex);
            l.lastIndex = this.lastIndex;
            let u = l.exec(a);
            if (this.resumingScanAtSamePosition() && !(u && u.index === this.lastIndex)) {
                const f = this.getMatcher(0);
                f.lastIndex = this.lastIndex + 1,
                u = f.exec(a)
            }
            return u && (
                this.regexIndex += u.position + 1,
                this.regexIndex === this.count && this.considerAll()
            ),
            u
        }
    }
    function s(i) {
        const a = new r;
        return i
            .contains
            .forEach(l => a.addRule(l.begin, {
                rule: l,
                type: "begin"
            })),
        i.terminatorEnd && a.addRule(i.terminatorEnd, {type: "end"}),
        i.illegal && a.addRule(i.illegal, {type: "illegal"}),
        a
    }
    function o(i, a) {
        const l = i;
        if (i.isCompiled) 
            return l;
        [qs, Ws, ri, Zs].forEach(f => f(i, a)),
        e
            .compilerExtensions
            .forEach(f => f(i, a)),
        i.__beforeBegin = null,
        [Ks, js, Js].forEach(f => f(i, a)),
        i.isCompiled = !0;
        let u = null;
        return typeof i.keywords == "object" && i.keywords.$pattern && (
            i.keywords = Object.assign({}, i.keywords),
            u = i.keywords.$pattern,
            delete i.keywords.$pattern
        ),
        u = u || /\w+/,
        i.keywords && (i.keywords = wn(i.keywords, e.case_insensitive)),
        l.keywordPatternRe = t(u, !0),
        a && (
            i.begin || (i.begin = /\B|\b/),
            l.beginRe = t(l.begin),
            !i.end && !i.endsWithParent && (i.end = /\B|\b/),
            i.end && (l.endRe = t(l.end)),
            l.terminatorEnd = Ee(l.end) || "",
            i.endsWithParent && a.terminatorEnd && (l.terminatorEnd += (
                i.end
                    ? "|"
                    : ""
            ) + a.terminatorEnd)
        ),
        i.illegal && (l.illegalRe = t(i.illegal)),
        i.contains || (i.contains = []),
        i.contains = [].concat(...i.contains.map(function (f) {
            return ii(
                f === "self"
                    ? i
                    : f
            )
        })),
        i
            .contains
            .forEach(function (f) {
                o(f, l)
            }),
        i.starts && o(i.starts, a),
        l.matcher = s(l),
        l
    }
    if (
        e.compilerExtensions || (e.compilerExtensions = []),
        e.contains && e.contains.includes("self")
    ) 
        throw new Error(
            "ERR: contains `self` is not supported at the top-level of a language.  See doc" +
            "umentation."
        );
    return e.classNameAliases = re(e.classNameAliases || {}),
    o(e)
}
function An(e) {
    return e
        ? e.endsWithParent || An(e.starts)
        : !1
}
function ii(e) {
    return e.variants && !e.cachedVariants && (
        e.cachedVariants = e.variants.map(function (t) {
            return re(e, {
                variants: null
            }, t)
        })
    ),
    e.cachedVariants
        ? e.cachedVariants
        : An(e)
            ? re(e, {
                starts: e.starts
                    ? re(e.starts)
                    : null
            })
            : Object.isFrozen(e)
                ? re(e)
                : e
}
var oi = "11.10.0";
class ai extends Error {
    constructor(t, n) {
        super(t),
        this.name = "HTMLInjectionError",
        this.html = n
    }
}
const Je = gn,
    Pt = re,
    Ut = Symbol("nomatch"),
    ci = 7,
    On = function (e) {
        const t = Object.create(null),
            n = Object.create(null),
            r = [];
        let s = !0;
        const o = "Could not find the language '{}', did you forget to load/include a language mo" +
                    "dule?",
            i = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            };
        let a = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: "hljs-",
            cssSelector: "pre code",
            languages: null,
            __emitter: ys
        };
        function l(b) {
            return a
                .noHighlightRe
                .test(b)
        }
        function u(b) {
            let y = b.className + " ";
            y += b.parentNode
                ? b.parentNode.className
                : "";
            const T = a
                .languageDetectRe
                .exec(y);
            if (T) {
                const L = F(T[1]);
                return L || (
                    vt(o.replace("{}", T[1])),
                    vt("Falling back to no-highlight mode for this block.", b)
                ),
                L
                    ? T[1]
                    : "no-highlight"
            }
            return y
                .split(/\s+/)
                .find(L => l(L) || F(L))
        }
        function f(b, y, T) {
            let L = "",
                v = "";
            typeof y == "object"
                ? (L = b, T = y.ignoreIllegals, v = y.language)
                : (ue("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ue(
                    "10.7.0",
                    `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
                ), v = b, L = y),
            T === void 0 && (T = !0);
            const G = {
                code: L,
                language: v
            };
            J("before:highlight", G);
            const Z = G.result
                ? G.result
                : E(G.language, G.code, T);
            return Z.code = G.code,
            J("after:highlight", Z),
            Z
        }
        function E(b, y, T, L) {
            const v = Object.create(null);
            function G(m, w) {
                return m.keywords[w]
            }
            function Z() {
                if (!O.keywords) {
                    H.addText(k);
                    return
                }
                let m = 0;
                O.keywordPatternRe.lastIndex = 0;
                let w = O
                        .keywordPatternRe
                        .exec(k),
                    x = "";
                for (; w;) {
                    x += k.substring(m, w.index);
                    const B = Q.case_insensitive
                            ? w[0].toLowerCase()
                            : w[0],
                        $ = G(O, B);
                    if ($) {
                        const [te, Dn] = $;
                        if (
                            H.addText(x),
                            x = "",
                            v[B] = (v[B] || 0) + 1,
                            v[B] <= ci && (Re += Dn),
                            te.startsWith("_")
                        ) 
                            x += w[0];
                        else {
                            const kn = Q.classNameAliases[te] || te;
                            Y(w[0], kn)
                        }
                    } else 
                        x += w[0];
                    m = O.keywordPatternRe.lastIndex,
                    w = O
                        .keywordPatternRe
                        .exec(k)
                }
                x += k.substring(m),
                H.addText(x)
            }
            function Se() {
                if (k === "") 
                    return;
                let m = null;
                if (typeof O.subLanguage == "string") {
                    if (!t[O.subLanguage]) {
                        H.addText(k);
                        return
                    }
                    m = E(O.subLanguage, k, !0, Et[O.subLanguage]),
                    Et[O.subLanguage] = m._top
                } else 
                    m = d(
                        k,
                        O.subLanguage.length
                            ? O.subLanguage
                            : null
                    );
                O.relevance > 0 && (Re += m.relevance),
                H.__addSublanguage(m._emitter, m.language)
            }
            function K() {
                O.subLanguage != null
                    ? Se()
                    : Z(),
                k = ""
            }
            function Y(m, w) {
                m !== "" && (H.startScope(w), H.addText(m), H.endScope())
            }
            function ht(m, w) {
                let x = 1;
                const B = w.length - 1;
                for (; x <= B;) {
                    if (!m._emit[x]) {
                        x++;
                        continue
                    }
                    const $ = Q.classNameAliases[m[x]] || m[x],
                        te = w[x];
                    $
                        ? Y(te, $)
                        : (k = te, Z(), k = ""),
                    x++
                }
            }
            function pt(m, w) {
                return m.scope && typeof m.scope == "string" && H.openNode(
                    Q.classNameAliases[m.scope] || m.scope
                ),
                m.beginScope && (
                    m.beginScope._wrap
                        ? (Y(k, Q.classNameAliases[m.beginScope._wrap] || m.beginScope._wrap), k = "")
                        : m.beginScope._multi && (ht(m.beginScope, w), k = "")
                ),
                O = Object.create(m, {
                    parent: {
                        value: O
                    }
                }),
                O
            }
            function gt(m, w, x) {
                let B = As(m.endRe, x);
                if (B) {
                    if (m["on:end"]) {
                        const $ = new Lt(m);
                        m["on:end"](w, $),
                        $.isMatchIgnored && (B = !1)
                    }
                    if (B) {
                        for (; m.endsParent && m.parent;) 
                            m = m.parent;
                        return m
                    }
                }
                if (m.endsWithParent) 
                    return gt(m.parent, w, x)
            }
            function xn(m) {
                return O.matcher.regexIndex === 0
                    ? (k += m[0], 1)
                    : (Ge = !0, 0)
            }
            function Mn(m) {
                const w = m[0],
                    x = m.rule,
                    B = new Lt(x),
                    $ = [
                        x.__beforeBegin, x["on:begin"]
                    ];
                for (const te of $) 
                    if (te && (te(m, B), B.isMatchIgnored)) 
                        return xn(w);
            return x.skip
                    ? k += w
                    : (
                        x.excludeBegin && (k += w),
                        K(),
                        !x.returnBegin && !x.excludeBegin && (k = w)
                    ),
                pt(x, m),
                x.returnBegin
                    ? 0
                    : w.length
            }
            function In(m) {
                const w = m[0],
                    x = y.substring(m.index),
                    B = gt(O, m, x);
                if (!B) 
                    return Ut;
                const $ = O;
                O.endScope && O.endScope._wrap
                    ? (K(), Y(w, O.endScope._wrap))
                    : O.endScope && O.endScope._multi
                        ? (K(), ht(O.endScope, m))
                        : $.skip
                            ? k += w
                            : ($.returnEnd || $.excludeEnd || (k += w), K(), $.excludeEnd && (k = w));
                do 
                    O.scope && H.closeNode(),
                    !O.skip && !O.subLanguage && (Re += O.relevance),
                    O = O.parent;
                while (O !== B.parent);
                return B.starts && pt(B.starts, m),
                $.returnEnd
                    ? 0
                    : w.length
            }
            function Ln() {
                const m = [];
                for (let w = O; w !== Q; w = w.parent) 
                    w.scope && m.unshift(w.scope);
                m.forEach(w => H.openNode(w))
            }
            let we = {};
            function bt(m, w) {
                const x = w && w[0];
                if (k += m, x == null) 
                    return K(),
                    0;
                if (we.type === "begin" && w.type === "end" && we.index === w.index && x === "") {
                    if (k += y.slice(w.index, w.index + 1), !s) {
                        const B = new Error(`0 width match regex (${b})`);
                        throw B.languageName = b,
                        B.badRule = we.rule,
                        B
                    }
                    return 1
                }
                if (we = w, w.type === "begin") 
                    return Mn(w);
                if (w.type === "illegal" && !T) {
                    const B = new Error('Illegal lexeme "' + x + '" for mode "' + (
                        O.scope || "<unnamed>"
                    ) + '"');
                    throw B.mode = O,
                    B
                } else if (w.type === "end") {
                    const B = In(w);
                    if (B !== Ut) 
                        return B
                }
                if (w.type === "illegal" && x === "") 
                    return 1;
                if (ze > 1e5 && ze > w.index * 3) 
                    throw new Error("potential infinite loop, way more iterations than matches");
                return k += x,
                x.length
            }
            const Q = F(b);
            if (!Q) 
                throw ae(o.replace("{}", b)),
                new Error('Unknown language: "' + b + '"');
            const Bn = si(Q);
            let $e = "",
                O = L || Bn;
            const Et = {},
                H = new a.__emitter(a);
            Ln();
            let k = "",
                Re = 0,
                ie = 0,
                ze = 0,
                Ge = !1;
            try {
                if (Q.__emitTokens) 
                    Q.__emitTokens(y, H);
                else {
                    for (O.matcher.considerAll();;) {
                        ze++,
                        Ge
                            ? Ge = !1
                            : O
                                .matcher
                                .considerAll(),
                        O.matcher.lastIndex = ie;
                        const m = O
                            .matcher
                            .exec(y);
                        if (!m) 
                            break;
                        const w = y.substring(ie, m.index),
                            x = bt(w, m);
                        ie = m.index + x
                    }
                    bt(y.substring(ie))
                }
                return H.finalize(),
                $e = H.toHTML(), {
                    language: b,
                    value: $e,
                    relevance: Re,
                    illegal: !1,
                    _emitter: H,
                    _top: O
                }
            } catch (m) {
                if (m.message && m.message.includes("Illegal")) 
                    return {
                        language: b,
                        value: Je(y),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: m.message,
                            index: ie,
                            context: y.slice(ie - 100, ie + 100),
                            mode: m.mode,
                            resultSoFar: $e
                        },
                        _emitter: H
                    };
                if (s) 
                    return {
                        language: b,
                        value: Je(y),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: m,
                        _emitter: H,
                        _top: O
                    };
                throw m
            }
        }
        function R(b) {
            const y = {
                value: Je(b),
                illegal: !1,
                relevance: 0,
                _top: i,
                _emitter: new a.__emitter(a)
            };
            return y
                ._emitter
                .addText(b),
            y
        }
        function d(b, y) {
            y = y || a.languages || Object.keys(t);
            const T = R(b),
                L = y
                    .filter(F)
                    .filter(se)
                    .map(K => E(K, b, !1));
            L.unshift(T);
            const v = L.sort((K, Y) => {
                    if (K.relevance !== Y.relevance) 
                        return Y.relevance - K.relevance;
                    if (K.language && Y.language) {
                        if (F(K.language).supersetOf === Y.language) 
                            return 1;
                        if (F(Y.language).supersetOf === K.language) 
                            return -1
                    }
                    return 0
                }),
                [G, Z] = v,
                Se = G;
            return Se.secondBest = Z,
            Se
        }
        function h(b, y, T) {
            const L = y && n[y] || T;
            b
                .classList
                .add("hljs"),
            b
                .classList
                .add(`language-${L}`)
        }
        function g(b) {
            let y = null;
            const T = u(b);
            if (l(T)) 
                return;
            if (J("before:highlightElement", {
                el: b,
                language: T
            }), b.dataset.highlighted) {
                console.log(
                    "Element previously highlighted. To highlight again, first unset `dataset.highl" +
                            "ighted`.",
                    b
                );
                return
            }
            if (b.children.length > 0 && (
                a.ignoreUnescapedHTML || (
                    console.warn(
                        "One of your code blocks includes unescaped HTML. This is a potentially serious" +
                        " security risk."
                    ),
                    console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                    console.warn("The element with unescaped HTML:"),
                    console.warn(b)
                ),
                a.throwUnescapedHTML
            )) 
                throw new ai("One of your code blocks includes unescaped HTML.", b.innerHTML);
            y = b;
            const L = y.textContent,
                v = T
                    ? f(L, {
                        language: T,
                        ignoreIllegals: !0
                    })
                    : d(L);
            b.innerHTML = v.value,
            b.dataset.highlighted = "yes",
            h(b, T, v.language),
            b.result = {
                language: v.language,
                re: v.relevance,
                relevance: v.relevance
            },
            v.secondBest && (b.secondBest = {
                language: v.secondBest.language,
                relevance: v.secondBest.relevance
            }),
            J("after:highlightElement", {
                el: b,
                result: v,
                text: L
            })
        }
        function p(b) {
            a = Pt(a, b)
        }
        const _ = () => {
            C(),
            ue("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
        };
        function A() {
            C(),
            ue("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
        }
        let S = !1;
        function C() {
            if (document.readyState === "loading") {
                S = !0;
                return
            }
            document
                .querySelectorAll(a.cssSelector)
                .forEach(g)
        }
        function I() {
            S && C()
        }
        typeof window < "u" && window.addEventListener && window.addEventListener(
            "DOMContentLoaded",
            I,
            !1
        );
        function M(b, y) {
            let T = null;
            try {
                T = y(e)
            } catch (L) {
                if (
                    ae("Language definition for '{}' could not be registered.".replace("{}", b)),
                    s
                ) 
                    ae(L);
                else 
                    throw L;
                T = i
            }
            T.name || (T.name = b),
            t[b] = T,
            T.rawDefinition = y.bind(null, e),
            T.aliases && ee(T.aliases, {languageName: b})
        }
        function D(b) {
            delete t[b];
            for (const y of Object.keys(n)) 
                n[y] === b && delete n[y]
        }
        function U() {
            return Object.keys(t)
        }
        function F(b) {
            return b = (b || "").toLowerCase(),
            t[b] || t[n[b]]
        }
        function ee(b, {languageName: y}) {
            typeof b == "string" && (b = [b]),
            b.forEach(T => {
                n[T.toLowerCase()] = y
            })
        }
        function se(b) {
            const y = F(b);
            return y && !y.disableAutodetect
        }
        function pe(b) {
            b["before:highlightBlock"] && !b["before:highlightElement"] && (
                b["before:highlightElement"] = y => {
                    b["before:highlightBlock"](Object.assign({
                        block: y.el
                    }, y))
                }
            ),
            b["after:highlightBlock"] && !b["after:highlightElement"] && (
                b["after:highlightElement"] = y => {
                    b["after:highlightBlock"](Object.assign({
                        block: y.el
                    }, y))
                }
            )
        }
        function W(b) {
            pe(b),
            r.push(b)
        }
        function z(b) {
            const y = r.indexOf(b);
            y !== -1 && r.splice(y, 1)
        }
        function J(b, y) {
            const T = b;
            r.forEach(function (L) {
                L[T] && L[T](y)
            })
        }
        function ye(b) {
            return ue("10.7.0", "highlightBlock will be removed entirely in v12.0"),
            ue("10.7.0", "Please use highlightElement now."),
            g(b)
        }
        Object.assign(e, {
            highlight: f,
            highlightAuto: d,
            highlightAll: C,
            highlightElement: g,
            highlightBlock: ye,
            configure: p,
            initHighlighting: _,
            initHighlightingOnLoad: A,
            registerLanguage: M,
            unregisterLanguage: D,
            listLanguages: U,
            getLanguage: F,
            registerAliases: ee,
            autoDetection: se,
            inherit: Pt,
            addPlugin: W,
            removePlugin: z
        }),
        e.debugMode = function () {
            s = !1
        },
        e.safeMode = function () {
            s = !0
        },
        e.versionString = oi,
        e.regex = {
            concat: le,
            lookahead: bn,
            either: ut,
            optional: ws,
            anyNumberOfTimes: Ss
        };
        for (const b in Ae) 
            typeof Ae[b] == "object" && pn(Ae[b]);
        return Object.assign(e, Ae),
        e
    },
    fe = On({});
fe.newInstance = () => On({});
var li = fe;
fe.HighlightJS = fe;
fe.default = fe;
const Ri = hn(li);
var ui = Object.defineProperty,
    fi = Object.defineProperties,
    di = Object.getOwnPropertyDescriptors,
    Ft = Object.getOwnPropertySymbols,
    hi = Object.prototype.hasOwnProperty,
    pi = Object.prototype.propertyIsEnumerable,
    Ht = (e, t, n) => t in e
        ? ui(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        })
        : e[t] = n,
    Oe = (e, t) => {
        for (var n in t || (t = {})) 
            hi.call(t, n) && Ht(e, n, t[n]);
        if (Ft) 
            for (var n of Ft(t)) 
                pi.call(t, n) && Ht(e, n, t[n]);
    return e
    },
    Te = (e, t) => fi(e, di(t)),
    gi = function (t) {
        function n(r, s) {
            if (!s.language.startsWith("diff:")) 
                return t.highlight(r, s);
            const o = s
                    .language
                    .slice(5),
                i = r.split(`
`),
                a = i
                    .map(E => E.slice(1))
                    .join(`
`),
                l = t.highlight(a, Te(Oe({}, s), {language: o})),
                u = l
                    .value
                    .split(`
`);
            if (u.length !== i.length) 
                return console.warn(
                    "[highlightjs-code-diff] failed to highlight because of line count mismatch"
                ),
                t.highlight(r, Te(Oe({}, s), {language: "diff"}));
            const f = u
                .map((E, R) => {
                    const d = i[R].slice(0, 1);
                    switch (d) {
                        case "+":
                            return `<span class="hljs-addition">+${E}</span>`;
                        case "-":
                            return `<span class="hljs-deletion">-${E}</span>`;
                        default:
                            return `${d}${E}`
                    }
                })
                .join(`
`);
            return Te(Oe({}, l), {
                code: r,
                value: f,
                language: s.language
            })
        }
        return Te(Oe({}, t), {
            highlight(r, s, o) {
                return typeof s == "string"
                    ? n(s, {
                        language: r,
                        ignoreIllegals: o
                    })
                    : n(r, s)
            }
        })
    };
const Ai = hn(gi);
function Oi(e) {
    const t = e.regex,
        n = /(?![A-Za-z0-9])(?![$])/,
        r = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
        s = t.concat(
            /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
            n
        ),
        o = {
            scope: "variable",
            match: "\\$+" + r
        },
        i = {
            scope: "meta",
            variants: [
                {
                    begin: /<\?php/,
                    relevance: 10
                }, {
                    begin: /<\?=/
                }, {
                    begin: /<\?/,
                    relevance: .1
                }, {
                    begin: /\?>/
                }
            ]
        },
        a = {
            scope: "subst",
            variants: [
                {
                    begin: /\$\w+/
                }, {
                    begin: /\{\$/,
                    end: /\}/
                }
            ]
        },
        l = e.inherit(e.APOS_STRING_MODE, {illegal: null}),
        u = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            contains: e
                .QUOTE_STRING_MODE
                .contains
                .concat(a)
        }),
        f = {
            begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
            end: /[ \t]*(\w+)\b/,
            contains: e
                .QUOTE_STRING_MODE
                .contains
                .concat(a),
            "on:begin": (W, z) => {
                z.data._beginMatch = W[1] || W[2]
            },
            "on:end": (W, z) => {
                z.data._beginMatch !== W[1] && z.ignoreMatch()
            }
        },
        E = e.END_SAME_AS_BEGIN({begin: /<<<[ \t]*'(\w+)'\n/, end: /[ \t]*(\w+)\b/}),
        R = `[ 	
]`,
        d = {
            scope: "string",
            variants: [u, l, f, E]
        },
        h = {
            scope: "number",
            variants: [
                {
                    begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
                }, {
                    begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                }, {
                    begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                }, {
                    begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                }
            ],
            relevance: 0
        },
        g = [
            "false", "null", "true"
        ],
        p = [
            "__CLASS__",
            "__DIR__",
            "__FILE__",
            "__FUNCTION__",
            "__COMPILER_HALT_OFFSET__",
            "__LINE__",
            "__METHOD__",
            "__NAMESPACE__",
            "__TRAIT__",
            "die",
            "echo",
            "exit",
            "include",
            "include_once",
            "print",
            "require",
            "require_once",
            "array",
            "abstract",
            "and",
            "as",
            "binary",
            "bool",
            "boolean",
            "break",
            "callable",
            "case",
            "catch",
            "class",
            "clone",
            "const",
            "continue",
            "declare",
            "default",
            "do",
            "double",
            "else",
            "elseif",
            "empty",
            "enddeclare",
            "endfor",
            "endforeach",
            "endif",
            "endswitch",
            "endwhile",
            "enum",
            "eval",
            "extends",
            "final",
            "finally",
            "float",
            "for",
            "foreach",
            "from",
            "global",
            "goto",
            "if",
            "implements",
            "instanceof",
            "insteadof",
            "int",
            "integer",
            "interface",
            "isset",
            "iterable",
            "list",
            "match|0",
            "mixed",
            "new",
            "never",
            "object",
            "or",
            "private",
            "protected",
            "public",
            "readonly",
            "real",
            "return",
            "string",
            "switch",
            "throw",
            "trait",
            "try",
            "unset",
            "use",
            "var",
            "void",
            "while",
            "xor",
            "yield"
        ],
        _ = [
            "Error|0",
            "AppendIterator",
            "ArgumentCountError",
            "ArithmeticError",
            "ArrayIterator",
            "ArrayObject",
            "AssertionError",
            "BadFunctionCallException",
            "BadMethodCallException",
            "CachingIterator",
            "CallbackFilterIterator",
            "CompileError",
            "Countable",
            "DirectoryIterator",
            "DivisionByZeroError",
            "DomainException",
            "EmptyIterator",
            "ErrorException",
            "Exception",
            "FilesystemIterator",
            "FilterIterator",
            "GlobIterator",
            "InfiniteIterator",
            "InvalidArgumentException",
            "IteratorIterator",
            "LengthException",
            "LimitIterator",
            "LogicException",
            "MultipleIterator",
            "NoRewindIterator",
            "OutOfBoundsException",
            "OutOfRangeException",
            "OuterIterator",
            "OverflowException",
            "ParentIterator",
            "ParseError",
            "RangeException",
            "RecursiveArrayIterator",
            "RecursiveCachingIterator",
            "RecursiveCallbackFilterIterator",
            "RecursiveDirectoryIterator",
            "RecursiveFilterIterator",
            "RecursiveIterator",
            "RecursiveIteratorIterator",
            "RecursiveRegexIterator",
            "RecursiveTreeIterator",
            "RegexIterator",
            "RuntimeException",
            "SeekableIterator",
            "SplDoublyLinkedList",
            "SplFileInfo",
            "SplFileObject",
            "SplFixedArray",
            "SplHeap",
            "SplMaxHeap",
            "SplMinHeap",
            "SplObjectStorage",
            "SplObserver",
            "SplPriorityQueue",
            "SplQueue",
            "SplStack",
            "SplSubject",
            "SplTempFileObject",
            "TypeError",
            "UnderflowException",
            "UnexpectedValueException",
            "UnhandledMatchError",
            "ArrayAccess",
            "BackedEnum",
            "Closure",
            "Fiber",
            "Generator",
            "Iterator",
            "IteratorAggregate",
            "Serializable",
            "Stringable",
            "Throwable",
            "Traversable",
            "UnitEnum",
            "WeakReference",
            "WeakMap",
            "Directory",
            "__PHP_Incomplete_Class",
            "parent",
            "php_user_filter",
            "self",
            "static",
            "stdClass"
        ],
        S = {
            keyword: p,
            literal: (W => {
                const z = [];
                return W.forEach(J => {
                    z.push(J),
                    J.toLowerCase() === J
                        ? z.push(J.toUpperCase())
                        : z.push(J.toLowerCase())
                }),
                z
            })(g),
            built_in: _
        },
        C = W => W.map(z => z.replace(/\|\d+$/, "")),
        I = {
            variants: [
                {
                    match: [
                        /new/,
                        t.concat(R, "+"),
                        t.concat("(?!", C(_).join("\\b|"), "\\b)"),
                        s
                    ],
                    scope: {
                        1: "keyword",
                        4: "title.class"
                    }
                }
            ]
        },
        M = t.concat(r, "\\b(?!\\()"),
        D = {
            variants: [
                {
                    match: [
                        t.concat(/::/, t.lookahead(/(?!class\b)/)),
                        M
                    ],
                    scope: {
                        2: "variable.constant"
                    }
                }, {
                    match: [
                        /::/, /class/
                    ],
                    scope: {
                        2: "variable.language"
                    }
                }, {
                    match: [
                        s,
                        t.concat(/::/, t.lookahead(/(?!class\b)/)),
                        M
                    ],
                    scope: {
                        1: "title.class",
                        3: "variable.constant"
                    }
                }, {
                    match: [
                        s,
                        t.concat("::", t.lookahead(/(?!class\b)/))
                    ],
                    scope: {
                        1: "title.class"
                    }
                }, {
                    match: [
                        s, /::/, /class/
                    ],
                    scope: {
                        1: "title.class",
                        3: "variable.language"
                    }
                }
            ]
        },
        U = {
            scope: "attr",
            match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
        },
        F = {
            relevance: 0,
            begin: /\(/,
            end: /\)/,
            keywords: S,
            contains: [
                U,
                o,
                D,
                e.C_BLOCK_COMMENT_MODE,
                d,
                h,
                I
            ]
        },
        ee = {
            relevance: 0,
            match: [
                /\b/,
                t.concat(
                    "(?!fn\\b|function\\b|",
                    C(p).join("\\b|"),
                    "|",
                    C(_).join("\\b|"),
                    "\\b)"
                ),
                r,
                t.concat(R, "*"),
                t.lookahead(/(?=\()/)
            ],
            scope: {
                3: "title.function.invoke"
            },
            contains: [F]
        };
    F
        .contains
        .push(ee);
    const se = [
            U,
            D,
            e.C_BLOCK_COMMENT_MODE,
            d,
            h,
            I
        ],
        pe = {
            begin: t.concat(/#\[\s*/, s),
            beginScope: "meta",
            end: /]/,
            endScope: "meta",
            keywords: {
                literal: g,
                keyword: ["new", "array"]
            },
            contains: [
                {
                    begin: /\[/,
                    end: /]/,
                    keywords: {
                        literal: g,
                        keyword: ["new", "array"]
                    },
                    contains: [
                        "self", ...se
                    ]
                },
                ...se, {
                    scope: "meta",
                    match: s
                }
            ]
        };
    return {
        case_insensitive: !1,
        keywords: S,
        contains: [
            pe,
            e.HASH_COMMENT_MODE,
            e.COMMENT("//", "$"),
            e.COMMENT("/\\*", "\\*/", {
                contains: [
                    {
                        scope: "doctag",
                        match: "@[A-Za-z]+"
                    }
                ]
            }), {
                match: /__halt_compiler\(\);/,
                keywords: "__halt_compiler",
                starts: {
                    scope: "comment",
                    end: e.MATCH_NOTHING_RE,
                    contains: [
                        {
                            match: /\?>/,
                            scope: "meta",
                            endsParent: !0
                        }
                    ]
                }
            },
            i, {
                scope: "variable.language",
                match: /\$this\b/
            },
            o,
            ee,
            D, {
                match: [
                    /const/, /\s/, r
                ],
                scope: {
                    1: "keyword",
                    3: "variable.constant"
                }
            },
            I, {
                scope: "function",
                relevance: 0,
                beginKeywords: "fn function",
                end: /[;{]/,
                excludeEnd: !0,
                illegal: "[$%\\[]",
                contains: [
                    {
                        beginKeywords: "use"
                    },
                    e.UNDERSCORE_TITLE_MODE, {
                        begin: "=>",
                        endsParent: !0
                    }, {
                        scope: "params",
                        begin: "\\(",
                        end: "\\)",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: S,
                        contains: [
                            "self",
                            o,
                            D,
                            e.C_BLOCK_COMMENT_MODE,
                            d,
                            h
                        ]
                    }
                ]
            }, {
                scope: "class",
                variants: [
                    {
                        beginKeywords: "enum",
                        illegal: /[($"]/
                    }, {
                        beginKeywords: "class interface trait",
                        illegal: /[:($"]/
                    }
                ],
                relevance: 0,
                end: /\{/,
                excludeEnd: !0,
                contains: [
                    {
                        beginKeywords: "extends implements"
                    },
                    e.UNDERSCORE_TITLE_MODE
                ]
            }, {
                beginKeywords: "namespace",
                relevance: 0,
                end: ";",
                illegal: /[.']/,
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {scope: "title.class"})]
            }, {
                beginKeywords: "use",
                relevance: 0,
                end: ";",
                contains: [
                    {
                        match: /\b(as|const|function)\b/,
                        scope: "keyword"
                    },
                    e.UNDERSCORE_TITLE_MODE
                ]
            },
            d,
            h
        ]
    }
}
const $t = "[A-Za-z$_][0-9A-Za-z$_]*",
    bi = [
        "as",
        "in",
        "of",
        "if",
        "for",
        "while",
        "finally",
        "var",
        "new",
        "function",
        "do",
        "return",
        "void",
        "else",
        "break",
        "catch",
        "instanceof",
        "with",
        "throw",
        "case",
        "default",
        "try",
        "switch",
        "continue",
        "typeof",
        "delete",
        "let",
        "yield",
        "const",
        "class",
        "debugger",
        "async",
        "await",
        "static",
        "import",
        "from",
        "export",
        "extends"
    ],
    Ei = [
        "true",
        "false",
        "null",
        "undefined",
        "NaN",
        "Infinity"
    ],
    Tn = [
        "Object",
        "Function",
        "Boolean",
        "Symbol",
        "Math",
        "Date",
        "Number",
        "BigInt",
        "String",
        "RegExp",
        "Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Int32Array",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array",
        "Set",
        "Map",
        "WeakSet",
        "WeakMap",
        "ArrayBuffer",
        "SharedArrayBuffer",
        "Atomics",
        "DataView",
        "JSON",
        "Promise",
        "Generator",
        "GeneratorFunction",
        "AsyncFunction",
        "Reflect",
        "Proxy",
        "Intl",
        "WebAssembly"
    ],
    Nn = [
        "Error",
        "EvalError",
        "InternalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError"
    ],
    Cn = [
        "setInterval",
        "setTimeout",
        "clearInterval",
        "clearTimeout",
        "require",
        "exports",
        "eval",
        "isFinite",
        "isNaN",
        "parseFloat",
        "parseInt",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "unescape"
    ],
    mi = [
        "arguments",
        "this",
        "super",
        "console",
        "window",
        "document",
        "localStorage",
        "sessionStorage",
        "module",
        "global"
    ],
    _i = [].concat(Cn, Tn, Nn);
function Ti(e) {
    const t = e.regex,
        n = (y, {after: T}) => {
            const L = "</" + y[0].slice(1);
            return y
                .input
                .indexOf(L, T) !== -1
        },
        r = $t,
        s = {
            begin: "<>",
            end: "</>"
        },
        o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
        i = {
            begin: /<[A-Za-z0-9\\._:-]+/,
            end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
            isTrulyOpeningTag: (y, T) => {
                const L = y[0].length + y.index,
                    v = y.input[L];
                if (v === "<" || v === ",") {
                    T.ignoreMatch();
                    return
                }
                v === ">" && (n(y, {after: L}) || T.ignoreMatch());
                let G;
                const Z = y
                    .input
                    .substring(L);
                if (G = Z.match(/^\s*=/)) {
                    T.ignoreMatch();
                    return
                }
                if ((G = Z.match(/^\s+extends\s+/)) && G.index === 0) {
                    T.ignoreMatch();
                    return
                }
            }
        },
        a = {
            $pattern: $t,
            keyword: bi,
            literal: Ei,
            built_in: _i,
            "variable.language": mi
        },
        l = "[0-9](_?[0-9])*",
        u = `\\.(${l})`,
        f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        E = {
            className: "number",
            variants: [
                {
                    begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b`
                }, {
                    begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b`
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                }, {
                    begin: "\\b0[0-7]+n?\\b"
                }
            ],
            relevance: 0
        },
        R = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: a,
            contains: []
        },
        d = {
            begin: ".?html`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [
                    e.BACKSLASH_ESCAPE, R
                ],
                subLanguage: "xml"
            }
        },
        h = {
            begin: ".?css`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [
                    e.BACKSLASH_ESCAPE, R
                ],
                subLanguage: "css"
            }
        },
        g = {
            begin: ".?gql`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [
                    e.BACKSLASH_ESCAPE, R
                ],
                subLanguage: "graphql"
            }
        },
        p = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE, R]
        },
        A = {
            className: "comment",
            variants: [
                e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [
                        {
                            begin: "(?=@[A-Za-z]+)",
                            relevance: 0,
                            contains: [
                                {
                                    className: "doctag",
                                    begin: "@[A-Za-z]+"
                                }, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: r + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }
                            ]
                        }
                    ]
                }),
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE
            ]
        },
        S = [
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            d,
            h,
            g,
            p, {
                match: /\$\d+/
            },
            E
        ];
    R.contains = S.concat(
        {begin: /\{/, end: /\}/, keywords: a, contains: ["self"].concat(S)}
    );
    const C = [].concat(A, R.contains),
        I = C.concat([
            {
                begin: /(\s*)\(/,
                end: /\)/,
                keywords: a,
                contains: ["self"].concat(C)
            }
        ]),
        M = {
            className: "params",
            begin: /(\s*)\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: a,
            contains: I
        },
        D = {
            variants: [
                {
                    match: [
                        /class/,
                        /\s+/,
                        r,
                        /\s+/,
                        /extends/,
                        /\s+/,
                        t.concat(r, "(", t.concat(/\./, r), ")*")
                    ],
                    scope: {
                        1: "keyword",
                        3: "title.class",
                        5: "keyword",
                        7: "title.class.inherited"
                    }
                }, {
                    match: [
                        /class/, /\s+/, r
                    ],
                    scope: {
                        1: "keyword",
                        3: "title.class"
                    }
                }
            ]
        },
        U = {
            relevance: 0,
            match: t.either(
                /\bJSON/,
                /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
                /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
                /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
            ),
            className: "title.class",
            keywords: {
                _: [
                    ...Tn,
                    ...Nn
                ]
            }
        },
        F = {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
        },
        ee = {
            variants: [
                {
                    match: [/function/, /\s+/, r, /(?=\s*\()/]
                }, {
                    match: [/function/, /\s*(?=\()/]
                }
            ],
            className: {
                1: "keyword",
                3: "title.function"
            },
            label: "func.def",
            contains: [M],
            illegal: /%/
        },
        se = {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: "variable.constant"
        };
    function pe(y) {
        return t.concat("(?!", y.join("|"), ")")
    }
    const W = {
            match: t.concat(/\b/, pe([
                ...Cn,
                "super",
                "import"
            ].map(y => `${y}\\s*\\(`)), r, t.lookahead(/\s*\(/)),
            className: "title.function",
            relevance: 0
        },
        z = {
            begin: t.concat(/\./, t.lookahead(t.concat(r, /(?![0-9A-Za-z$_(])/))),
            end: r,
            excludeBegin: !0,
            keywords: "prototype",
            className: "property",
            relevance: 0
        },
        J = {
            match: [
                /get|set/, /\s+/, r, /(?=\()/
            ],
            className: {
                1: "keyword",
                3: "title.function"
            },
            contains: [
                {
                    begin: /\(\)/
                },
                M
            ]
        },
        ye = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE +
                ")\\s*=>",
        b = {
            match: [
                /const|var|let/,
                /\s+/,
                r,
                /\s*/,
                /=\s*/,
                /(async\s*)?/,
                t.lookahead(ye)
            ],
            keywords: "async",
            className: {
                1: "keyword",
                3: "title.function"
            },
            contains: [M]
        };
    return {
        name: "JavaScript",
        aliases: [
            "js", "jsx", "mjs", "cjs"
        ],
        keywords: a,
        exports: {
            PARAMS_CONTAINS: I,
            CLASS_REFERENCE: U
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            e.SHEBANG({label: "shebang", binary: "node", relevance: 5}),
            F,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            d,
            h,
            g,
            p,
            A, {
                match: /\$\d+/
            },
            E,
            U, {
                className: "attr",
                begin: r + t.lookahead(":"),
                relevance: 0
            },
            b, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [
                    A,
                    e.REGEXP_MODE, {
                        className: "function",
                        begin: ye,
                        returnBegin: !0,
                        end: "\\s*=>",
                        contains: [
                            {
                                className: "params",
                                variants: [
                                    {
                                        begin: e.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    }, {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: !0
                                    }, {
                                        begin: /(\s*)\(/,
                                        end: /\)/,
                                        excludeBegin: !0,
                                        excludeEnd: !0,
                                        keywords: a,
                                        contains: I
                                    }
                                ]
                            }
                        ]
                    }, {
                        begin: /,/,
                        relevance: 0
                    }, {
                        match: /\s+/,
                        relevance: 0
                    }, {
                        variants: [
                            {
                                begin: s.begin,
                                end: s.end
                            }, {
                                match: o
                            }, {
                                begin: i.begin,
                                "on:begin": i.isTrulyOpeningTag,
                                end: i.end
                            }
                        ],
                        subLanguage: "xml",
                        contains: [
                            {
                                begin: i.begin,
                                end: i.end,
                                skip: !0,
                                contains: ["self"]
                            }
                        ]
                    }
                ]
            },
            ee, {
                beginKeywords: "while if switch catch for"
            }, {
                begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^" +
                        "()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                label: "func.def",
                contains: [
                    M,
                    e.inherit(e.TITLE_MODE, {
                        begin: r,
                        className: "title.function"
                    })
                ]
            }, {
                match: /\.\.\./,
                relevance: 0
            },
            z, {
                match: "\\$" + r,
                relevance: 0
            }, {
                match: [/\bconstructor(?=\s*\()/],
                className: {
                    1: "title.function"
                },
                contains: [M]
            },
            W,
            se,
            D,
            J, {
                match: /\$[(.]/
            }
        ]
    }
}
function Ni(e) {
    const t = e.regex,
        n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[" +
                "\\]=?)",
        r = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
        s = t.concat(r, /(::\w+)*/),
        i = {
            "variable.constant": [
                "__FILE__", "__LINE__", "__ENCODING__"
            ],
            "variable.language": [
                "self", "super"
            ],
            keyword: [
                "alias",
                "and",
                "begin",
                "BEGIN",
                "break",
                "case",
                "class",
                "defined",
                "do",
                "else",
                "elsif",
                "end",
                "END",
                "ensure",
                "for",
                "if",
                "in",
                "module",
                "next",
                "not",
                "or",
                "redo",
                "require",
                "rescue",
                "retry",
                "return",
                "then",
                "undef",
                "unless",
                "until",
                "when",
                "while",
                "yield",
                ...[
                    "include",
                    "extend",
                    "prepend",
                    "public",
                    "private",
                    "protected",
                    "raise",
                    "throw"
                ]
            ],
            built_in: [
                "proc",
                "lambda",
                "attr_accessor",
                "attr_reader",
                "attr_writer",
                "define_method",
                "private_constant",
                "module_function"
            ],
            literal: ["true", "false", "nil"]
        },
        a = {
            className: "doctag",
            begin: "@[A-Za-z]+"
        },
        l = {
            begin: "#<",
            end: ">"
        },
        u = [
            e.COMMENT("#", "$", {contains: [a]}),
            e.COMMENT("^=begin", "^=end", {
                contains: [a],
                relevance: 10
            }),
            e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
        ],
        f = {
            className: "subst",
            begin: /#\{/,
            end: /\}/,
            keywords: i
        },
        E = {
            className: "string",
            contains: [
                e.BACKSLASH_ESCAPE, f
            ],
            variants: [
                {
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /`/,
                    end: /`/
                }, {
                    begin: /%[qQwWx]?\(/,
                    end: /\)/
                }, {
                    begin: /%[qQwWx]?\[/,
                    end: /\]/
                }, {
                    begin: /%[qQwWx]?\{/,
                    end: /\}/
                }, {
                    begin: /%[qQwWx]?</,
                    end: />/
                }, {
                    begin: /%[qQwWx]?\//,
                    end: /\//
                }, {
                    begin: /%[qQwWx]?%/,
                    end: /%/
                }, {
                    begin: /%[qQwWx]?-/,
                    end: /-/
                }, {
                    begin: /%[qQwWx]?\|/,
                    end: /\|/
                }, {
                    begin: /\B\?(\\\d{1,3})/
                }, {
                    begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                }, {
                    begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                }, {
                    begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\(c|C-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\?\S/
                }, {
                    begin: t.concat(
                        /<<[-~]?'?/,
                        t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
                    ),
                    contains: [e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/,
                            end: /(\w+)/,
                            contains: [e.BACKSLASH_ESCAPE, f]
                        })]
                }
            ]
        },
        R = "[1-9](_?[0-9])*|0",
        d = "[0-9](_?[0-9])*",
        h = {
            className: "number",
            relevance: 0,
            variants: [
                {
                    begin: `\\b(${R})(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`
                }, {
                    begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                }, {
                    begin: "\\b0(_?[0-7])+r?i?\\b"
                }
            ]
        },
        g = {
            variants: [
                {
                    match: /\(\)/
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /(?=\))/,
                    excludeBegin: !0,
                    endsParent: !0,
                    keywords: i
                }
            ]
        },
        M = [
            E, {
                variants: [
                    {
                        match: [/class\s+/, s, /\s+<\s+/, s]
                    }, {
                        match: [/\b(class|module)\s+/, s]
                    }
                ],
                scope: {
                    2: "title.class",
                    4: "title.class.inherited"
                },
                keywords: i
            }, {
                match: [
                    /(include|extend)\s+/, s
                ],
                scope: {
                    2: "title.class"
                },
                keywords: i
            }, {
                relevance: 0,
                match: [
                    s, /\.new[. (]/
                ],
                scope: {
                    1: "title.class"
                }
            }, {
                relevance: 0,
                match: /\b[A-Z][A-Z_0-9]+\b/,
                className: "variable.constant"
            }, {
                relevance: 0,
                match: r,
                scope: "title.class"
            }, {
                match: [
                    /def/, /\s+/, n
                ],
                scope: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [g]
            }, {
                begin: e.IDENT_RE + "::"
            }, {
                className: "symbol",
                begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                relevance: 0
            }, {
                className: "symbol",
                begin: ":(?!\\s)",
                contains: [
                    E, {
                        begin: n
                    }
                ],
                relevance: 0
            },
            h, {
                className: "variable",
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
            }, {
                className: "params",
                begin: /\|/,
                end: /\|/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                keywords: i
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                keywords: "unless",
                contains: [
                    {
                        className: "regexp",
                        contains: [
                            e.BACKSLASH_ESCAPE, f
                        ],
                        illegal: /\n/,
                        variants: [
                            {
                                begin: "/",
                                end: "/[a-z]*"
                            }, {
                                begin: /%r\{/,
                                end: /\}[a-z]*/
                            }, {
                                begin: "%r\\(",
                                end: "\\)[a-z]*"
                            }, {
                                begin: "%r!",
                                end: "![a-z]*"
                            }, {
                                begin: "%r\\[",
                                end: "\\][a-z]*"
                            }
                        ]
                    }
                ].concat(l, u),
                relevance: 0
            }
        ].concat(l, u);
    f.contains = M,
    g.contains = M;
    const D = "[>?]>",
        U = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",
        F = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
        ee = [
            {
                begin: /^\s*=>/,
                starts: {
                    end: "$",
                    contains: M
                }
            }, {
                className: "meta.prompt",
                begin: "^(" + D + "|" + U + "|" + F + ")(?=[ ])",
                starts: {
                    end: "$",
                    keywords: i,
                    contains: M
                }
            }
        ];
    return u.unshift(l), {
        name: "Ruby",
        aliases: [
            "rb", "gemspec", "podspec", "thor", "irb"
        ],
        keywords: i,
        illegal: /\/\*/,
        contains: [e.SHEBANG({binary: "ruby"})]
            .concat(ee)
            .concat(u)
            .concat(M)
    }
}
function Ci(e) {
    const t = e.regex,
        n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
        r = [
            "and",
            "as",
            "assert",
            "async",
            "await",
            "break",
            "case",
            "class",
            "continue",
            "def",
            "del",
            "elif",
            "else",
            "except",
            "finally",
            "for",
            "from",
            "global",
            "if",
            "import",
            "in",
            "is",
            "lambda",
            "match",
            "nonlocal|10",
            "not",
            "or",
            "pass",
            "raise",
            "return",
            "try",
            "while",
            "with",
            "yield"
        ],
        a = {
            $pattern: /[A-Za-z]\w+|__\w+__/,
            keyword: r,
            built_in: [
                "__import__",
                "abs",
                "all",
                "any",
                "ascii",
                "bin",
                "bool",
                "breakpoint",
                "bytearray",
                "bytes",
                "callable",
                "chr",
                "classmethod",
                "compile",
                "complex",
                "delattr",
                "dict",
                "dir",
                "divmod",
                "enumerate",
                "eval",
                "exec",
                "filter",
                "float",
                "format",
                "frozenset",
                "getattr",
                "globals",
                "hasattr",
                "hash",
                "help",
                "hex",
                "id",
                "input",
                "int",
                "isinstance",
                "issubclass",
                "iter",
                "len",
                "list",
                "locals",
                "map",
                "max",
                "memoryview",
                "min",
                "next",
                "object",
                "oct",
                "open",
                "ord",
                "pow",
                "print",
                "property",
                "range",
                "repr",
                "reversed",
                "round",
                "set",
                "setattr",
                "slice",
                "sorted",
                "staticmethod",
                "str",
                "sum",
                "super",
                "tuple",
                "type",
                "vars",
                "zip"
            ],
            literal: [
                "__debug__",
                "Ellipsis",
                "False",
                "None",
                "NotImplemented",
                "True"
            ],
            type: [
                "Any",
                "Callable",
                "Coroutine",
                "Dict",
                "List",
                "Literal",
                "Generic",
                "Optional",
                "Sequence",
                "Set",
                "Tuple",
                "Type",
                "Union"
            ]
        },
        l = {
            className: "meta",
            begin: /^(>>>|\.\.\.) /
        },
        u = {
            className: "subst",
            begin: /\{/,
            end: /\}/,
            keywords: a,
            illegal: /#/
        },
        f = {
            begin: /\{\{/,
            relevance: 0
        },
        E = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                    end: /'''/,
                    contains: [
                        e.BACKSLASH_ESCAPE, l
                    ],
                    relevance: 10
                }, {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                    end: /"""/,
                    contains: [
                        e.BACKSLASH_ESCAPE, l
                    ],
                    relevance: 10
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, l, f, u]
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, l, f, u]
                }, {
                    begin: /([uU]|[rR])'/,
                    end: /'/,
                    relevance: 10
                }, {
                    begin: /([uU]|[rR])"/,
                    end: /"/,
                    relevance: 10
                }, {
                    begin: /([bB]|[bB][rR]|[rR][bB])'/,
                    end: /'/
                }, {
                    begin: /([bB]|[bB][rR]|[rR][bB])"/,
                    end: /"/
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])'/,
                    end: /'/,
                    contains: [e.BACKSLASH_ESCAPE, f, u]
                }, {
                    begin: /([fF][rR]|[rR][fF]|[fF])"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, f, u]
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE
            ]
        },
        R = "[0-9](_?[0-9])*",
        d = `(\\b(${R}))?\\.(${R})|\\b(${R})\\.`,
        h = `\\b|${r.join("|")}`,
        g = {
            className: "number",
            relevance: 0,
            variants: [
                {
                    begin: `(\\b(${R})|(${d}))[eE][+-]?(${R})[jJ]?(?=${h})`
                }, {
                    begin: `(${d})[jJ]?`
                }, {
                    begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${h})`
                }, {
                    begin: `\\b0[bB](_?[01])+[lL]?(?=${h})`
                }, {
                    begin: `\\b0[oO](_?[0-7])+[lL]?(?=${h})`
                }, {
                    begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${h})`
                }, {
                    begin: `\\b(${R})[jJ](?=${h})`
                }
            ]
        },
        p = {
            className: "comment",
            begin: t.lookahead(/# type:/),
            end: /$/,
            keywords: a,
            contains: [
                {
                    begin: /# type:/
                }, {
                    begin: /#/,
                    end: /\b\B/,
                    endsWithParent: !0
                }
            ]
        },
        _ = {
            className: "params",
            variants: [
                {
                    className: "",
                    begin: /\(\s*\)/,
                    skip: !0
                }, {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: ["self", l, g, E, e.HASH_COMMENT_MODE]
                }
            ]
        };
    return u.contains = [
        E, g, l
    ], {
        name: "Python",
        aliases: [
            "py", "gyp", "ipython"
        ],
        unicodeRegex: !0,
        keywords: a,
        illegal: /(<\/|\?)|=>/,
        contains: [
            l,
            g, {
                scope: "variable.language",
                match: /\bself\b/
            }, {
                beginKeywords: "if",
                relevance: 0
            }, {
                match: /\bor\b/,
                scope: "keyword"
            },
            E,
            p,
            e.HASH_COMMENT_MODE, {
                match: [
                    /\bdef/, /\s+/, n
                ],
                scope: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [_]
            }, {
                variants: [
                    {
                        match: [
                            /\bclass/,
                            /\s+/,
                            n,
                            /\s*/,
                            /\(\s*/,
                            n,
                            /\s*\)/
                        ]
                    }, {
                        match: [/\bclass/, /\s+/, n]
                    }
                ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    6: "title.class.inherited"
                }
            }, {
                className: "meta",
                begin: /^[\t ]*@/,
                end: /(?=#)|$/,
                contains: [g, _, E]
            }
        ]
    }
}
function xi(e) {
    const t = e.regex,
        n = {},
        r = {
            begin: /\$\{/,
            end: /\}/,
            contains: [
                "self", {
                    begin: /:-/,
                    contains: [n]
                }
            ]
        };
    Object.assign(n, {
        className: "variable",
        variants: [
            {
                begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
            },
            r
        ]
    });
    const s = {
            className: "subst",
            begin: /\$\(/,
            end: /\)/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        o = e.inherit(e.COMMENT(), {
            match: [
                /(^|\s)/, /#.*$/
            ],
            scope: {
                2: "comment"
            }
        }),
        i = {
            begin: /<<-?\s*(?=\w+)/,
            starts: {
                contains: [e.END_SAME_AS_BEGIN({begin: /(\w+)/, end: /(\w+)/, className: "string"})]
            }
        },
        a = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, n, s]
        };
    s
        .contains
        .push(a);
    const l = {
            match: /\\"/
        },
        u = {
            className: "string",
            begin: /'/,
            end: /'/
        },
        f = {
            match: /\\'/
        },
        E = {
            begin: /\$?\(\(/,
            end: /\)\)/,
            contains: [
                {
                    begin: /\d+#[0-9a-f]+/,
                    className: "number"
                },
                e.NUMBER_MODE,
                n
            ]
        },
        R = [
            "fish",
            "bash",
            "zsh",
            "sh",
            "csh",
            "ksh",
            "tcsh",
            "dash",
            "scsh"
        ],
        d = e.SHEBANG({binary: `(${R.join("|")})`, relevance: 10}),
        h = {
            className: "function",
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: !0,
            contains: [e.inherit(e.TITLE_MODE, {begin: /\w[\w\d_]*/})],
            relevance: 0
        },
        g = [
            "if",
            "then",
            "else",
            "elif",
            "fi",
            "for",
            "while",
            "until",
            "in",
            "do",
            "done",
            "case",
            "esac",
            "function",
            "select"
        ],
        p = [
            "true", "false"
        ],
        _ = {
            match: /(\/[a-z._-]+)+/
        },
        A = [
            "break",
            "cd",
            "continue",
            "eval",
            "exec",
            "exit",
            "export",
            "getopts",
            "hash",
            "pwd",
            "readonly",
            "return",
            "shift",
            "test",
            "times",
            "trap",
            "umask",
            "unset"
        ],
        S = [
            "alias",
            "bind",
            "builtin",
            "caller",
            "command",
            "declare",
            "echo",
            "enable",
            "help",
            "let",
            "local",
            "logout",
            "mapfile",
            "printf",
            "read",
            "readarray",
            "source",
            "sudo",
            "type",
            "typeset",
            "ulimit",
            "unalias"
        ],
        C = [
            "autoload",
            "bg",
            "bindkey",
            "bye",
            "cap",
            "chdir",
            "clone",
            "comparguments",
            "compcall",
            "compctl",
            "compdescribe",
            "compfiles",
            "compgroups",
            "compquote",
            "comptags",
            "comptry",
            "compvalues",
            "dirs",
            "disable",
            "disown",
            "echotc",
            "echoti",
            "emulate",
            "fc",
            "fg",
            "float",
            "functions",
            "getcap",
            "getln",
            "history",
            "integer",
            "jobs",
            "kill",
            "limit",
            "log",
            "noglob",
            "popd",
            "print",
            "pushd",
            "pushln",
            "rehash",
            "sched",
            "setcap",
            "setopt",
            "stat",
            "suspend",
            "ttyctl",
            "unfunction",
            "unhash",
            "unlimit",
            "unsetopt",
            "vared",
            "wait",
            "whence",
            "where",
            "which",
            "zcompile",
            "zformat",
            "zftp",
            "zle",
            "zmodload",
            "zparseopts",
            "zprof",
            "zpty",
            "zregexparse",
            "zsocket",
            "zstyle",
            "ztcp"
        ],
        I = [
            "chcon",
            "chgrp",
            "chown",
            "chmod",
            "cp",
            "dd",
            "df",
            "dir",
            "dircolors",
            "ln",
            "ls",
            "mkdir",
            "mkfifo",
            "mknod",
            "mktemp",
            "mv",
            "realpath",
            "rm",
            "rmdir",
            "shred",
            "sync",
            "touch",
            "truncate",
            "vdir",
            "b2sum",
            "base32",
            "base64",
            "cat",
            "cksum",
            "comm",
            "csplit",
            "cut",
            "expand",
            "fmt",
            "fold",
            "head",
            "join",
            "md5sum",
            "nl",
            "numfmt",
            "od",
            "paste",
            "ptx",
            "pr",
            "sha1sum",
            "sha224sum",
            "sha256sum",
            "sha384sum",
            "sha512sum",
            "shuf",
            "sort",
            "split",
            "sum",
            "tac",
            "tail",
            "tr",
            "tsort",
            "unexpand",
            "uniq",
            "wc",
            "arch",
            "basename",
            "chroot",
            "date",
            "dirname",
            "du",
            "echo",
            "env",
            "expr",
            "factor",
            "groups",
            "hostid",
            "id",
            "link",
            "logname",
            "nice",
            "nohup",
            "nproc",
            "pathchk",
            "pinky",
            "printenv",
            "printf",
            "pwd",
            "readlink",
            "runcon",
            "seq",
            "sleep",
            "stat",
            "stdbuf",
            "stty",
            "tee",
            "test",
            "timeout",
            "tty",
            "uname",
            "unlink",
            "uptime",
            "users",
            "who",
            "whoami",
            "yes"
        ];
    return {
        name: "Bash",
        aliases: [
            "sh", "zsh"
        ],
        keywords: {
            $pattern: /\b[a-z][a-z0-9._-]+\b/,
            keyword: g,
            literal: p,
            built_in: [
                ...A,
                ...S,
                "set",
                "shopt",
                ...C,
                ...I
            ]
        },
        contains: [
            d,
            e.SHEBANG(),
            h,
            E,
            o,
            i,
            _,
            a,
            l,
            u,
            f,
            n
        ]
    }
}
function Mi(e) {
    return {
        name: "Shell Session",
        aliases: [
            "console", "shellsession"
        ],
        contains: [
            {
                className: "meta.prompt",
                begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                starts: {
                    end: /[^\\](?=\s*$)/,
                    subLanguage: "bash"
                }
            }
        ]
    }
}
export {
    Ri as H,
    yi as a,
    Ci as b,
    xi as c,
    Mi as d,
    Ai as h,
    Ti as j,
    Si as o,
    Oi as p,
    Ni as r,
    bs as s
};
