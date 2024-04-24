
        function E(e, t={}, r, n) {
            let {as: i=r, children: o, refName: a="ref", ...s} = C(e, ["unmount", "static"])
              , l = void 0 !== e.ref ? {
                [a]: e.ref
            } : {}
              , u = "function" == typeof o ? o(t) : o;
            "className"in s && s.className && "function" == typeof s.className && (s.className = s.className(t));
            let c = {};
            if (t) {
                let e = !1
                  , r = [];
                for (let[n,i] of Object.entries(t))
                    "boolean" == typeof i && (e = !0),
                    !0 === i && r.push(n);
                e && (c["data-headlessui-state"] = r.join(" "))
            }
            if (i === g.Fragment && Object.keys(A(s)).length > 0) {
                if (!(0,
                g.isValidElement)(u) || Array.isArray(u) && u.length > 1)
                    throw Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(e=>`  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));
                let e = u.props
                  , t = "function" == typeof (null == e ? void 0 : e.className) ? (...t)=>b(null == e ? void 0 : e.className(...t), s.className) : b(null == e ? void 0 : e.className, s.className)
                  , r = t ? {
                    className: t
                } : {};
                return (0,
                g.cloneElement)(u, Object.assign({}, _(u.props, A(C(s, ["ref"]))), c, l, function(...e) {
                    return {
                        ref: e.every(e=>null == e) ? void 0 : t=>{
                            for (let r of e)
                                null != r && ("function" == typeof r ? r(t) : r.current = t)
                        }
                    }
                }(u.ref, l.ref), r))
            }
            return (0,
            g.createElement)(i, Object.assign({}, C(s, ["ref"]), i !== g.Fragment && l, i !== g.Fragment && c), u)
        }
        function _(...e) {
            if (0 === e.length)
                return {};
            if (1 === e.length)
                return e[0];
            let t = {}
              , r = {};
            for (let n of e)
                for (let e in n)
                    e.startsWith("on") && "function" == typeof n[e] ? (null != r[e] || (r[e] = []),
                    r[e].push(n[e])) : t[e] = n[e];
            if (t.disabled || t["aria-disabled"])
                return Object.assign(t, Object.fromEntries(Object.keys(r).map(e=>[e, void 0])));
            for (let e in r)
                Object.assign(t, {
                    [e](t, ...n) {
                        for (let i of r[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent)instanceof Event) && t.defaultPrevented)
                                return;
                            i(t, ...n)
                        }
                    }
                });
            return t
        }
        function S(e) {
            var t;
            return Object.assign((0,
            g.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function A(e) {
            let t = Object.assign({}, e);
            for (let e in t)
                void 0 === t[e] && delete t[e];
            return t
        }
        function C(e, t=[]) {
            let r = Object.assign({}, e);
            for (let e of t)
                e in r && delete r[e];
            return r
        }
        var O = Object.defineProperty
          , R = (e,t,r)=>t in e ? O(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , M = (e,t,r)=>(R(e, "symbol" != typeof t ? t + "" : t, r),
        r);
        let j = new class {
            constructor() {
                M(this, "current", this.detect()),
                M(this, "handoffState", "pending"),
                M(this, "currentId", 0)
            }
            set(e) {
                this.current !== e && (this.handoffState = "pending",
                this.currentId = 0,
                this.current = e)
            }
            reset() {
                this.set(this.detect())
            }
            nextId() {
                return ++this.currentId
            }
            get isServer() {
                return "server" === this.current
            }
            get isClient() {
                return "client" === this.current
            }
            detect() {
                return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
            }
            handoff() {
                "pending" === this.handoffState && (this.handoffState = "complete")
            }
            get isHandoffComplete() {
                return "complete" === this.handoffState
            }
        }
          , k = (e,t)=>{
            j.isServer ? (0,
            g.useEffect)(e, t) : (0,
            g.useLayoutEffect)(e, t)
        }
        ;
        function L(e) {
            let t = (0,
            g.useRef)(e);
            return k(()=>{
                t.current = e
            }
            , [e]),
            t
        }
        let T = function(e) {
            let t = L(e);
            return g.useCallback((...e)=>t.current(...e), [t])
        }
          , N = Symbol();
        function I(...e) {
            let t = (0,
            g.useRef)(e);
            (0,
            g.useEffect)(()=>{
                t.current = e
            }
            , [e]);
            let r = T(e=>{
                for (let r of t.current)
                    null != r && ("function" == typeof r ? r(e) : r.current = e)
            }
            );
            return e.every(e=>null == e || (null == e ? void 0 : e[N])) ? void 0 : r
        }
        let D = null != (v = g.useId) ? v : function() {
            let e = function() {
                let[e,t] = (0,
                g.useState)(j.isHandoffComplete);
                return e && !1 === j.isHandoffComplete && t(!1),
                (0,
                g.useEffect)(()=>{
                    !0 !== e && t(!0)
                }
                , [e]),
                (0,
                g.useEffect)(()=>j.handoff(), []),
                e
            }()
              , [t,r] = g.useState(e ? ()=>j.nextId() : null);
            return k(()=>{
                null === t && r(j.nextId())
            }
            , [t]),
            null != t ? "" + t : void 0
        }
        ;
        var V = ((o = V || {}).Space = " ",
        o.Enter = "Enter",
        o.Escape = "Escape",
        o.Backspace = "Backspace",
        o.Delete = "Delete",
        o.ArrowLeft = "ArrowLeft",
        o.ArrowUp = "ArrowUp",
        o.ArrowRight = "ArrowRight",
        o.ArrowDown = "ArrowDown",
        o.Home = "Home",
        o.End = "End",
        o.PageUp = "PageUp",
        o.PageDown = "PageDown",
        o.Tab = "Tab",
        o);
        function F(e) {
            let t = e.parentElement
              , r = null;
            for (; t && !(t instanceof HTMLFieldSetElement); )
                t instanceof HTMLLegendElement && (r = t),
                t = t.parentElement;
            let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
            return !(n && function(e) {
                if (!e)
                    return !1;
                let t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(r)) && n
        }
        function B(e) {
            return j.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
        }
        let U = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");
        var W = ((a = W || {})[a.First = 1] = "First",
        a[a.Previous = 2] = "Previous",
        a[a.Next = 4] = "Next",
        a[a.Last = 8] = "Last",
        a[a.WrapAround = 16] = "WrapAround",
        a[a.NoScroll = 32] = "NoScroll",
        a)
          , H = ((s = H || {})[s.Error = 0] = "Error",
        s[s.Overflow = 1] = "Overflow",
        s[s.Success = 2] = "Success",
        s[s.Underflow = 3] = "Underflow",
        s)
          , $ = ((l = $ || {})[l.Previous = -1] = "Previous",
        l[l.Next = 1] = "Next",
        l);
        function q(e=document.body) {
            return null == e ? [] : Array.from(e.querySelectorAll(U)).sort((e,t)=>Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
        }
        var z = ((u = z || {})[u.Strict = 0] = "Strict",
        u[u.Loose = 1] = "Loose",
        u);
        function K(e, t=0) {
            var r;
            return e !== (null == (r = B(e)) ? void 0 : r.body) && y(t, {
                0: ()=>e.matches(U),
                1() {
                    let t = e;
                    for (; null !== t; ) {
                        if (t.matches(U))
                            return !0;
                        t = t.parentElement
                    }
                    return !1
                }
            })
        }
        var X = ((c = X || {})[c.Keyboard = 0] = "Keyboard",
        c[c.Mouse = 1] = "Mouse",
        c);
        function G(e, t, {sorted: r=!0, relativeTo: n=null, skipElements: i=[]}={}) {
            var o, a, s;
            let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
              , u = Array.isArray(e) ? r ? function(e, t=e=>e) {
                return e.slice().sort((e,r)=>{
                    let n = t(e)
                      , i = t(r);
                    if (null === n || null === i)
                        return 0;
                    let o = n.compareDocumentPosition(i);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }
                )
            }(e) : e : q(e);
            i.length > 0 && u.length > 1 && (u = u.filter(e=>!i.includes(e))),
            n = null != n ? n : l.activeElement;
            let c = (()=>{
                if (5 & t)
                    return 1;
                if (10 & t)
                    return -1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), f = (()=>{
                if (1 & t)
                    return 0;
                if (2 & t)
                    return Math.max(0, u.indexOf(n)) - 1;
                if (4 & t)
                    return Math.max(0, u.indexOf(n)) + 1;
                if (8 & t)
                    return u.length - 1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), d = 32 & t ? {
                preventScroll: !0
            } : {}, h = 0, p = u.length, m;
            do {
                if (h >= p || h + p <= 0)
                    return 0;
                let e = f + h;
                if (16 & t)
                    e = (e + p) % p;
                else {
                    if (e < 0)
                        return 3;
                    if (e >= p)
                        return 1
                }
                null == (m = u[e]) || m.focus(d),
                h += c
            } while (m !== l.activeElement);
            return 6 & t && null != (s = null == (a = null == (o = m) ? void 0 : o.matches) ? void 0 : a.call(o, "textarea,input")) && s && m.select(),
            2
        }
        "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e=>{
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0),
        document.addEventListener("click", e=>{
            1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0));
        let Y = (0,
        g.createContext)(null);
        Y.displayName = "OpenClosedContext";
        var Z = ((f = Z || {})[f.Open = 1] = "Open",
        f[f.Closed = 2] = "Closed",
        f[f.Closing = 4] = "Closing",
        f[f.Opening = 8] = "Opening",
        f);
        function J() {
            return (0,
            g.useContext)(Y)
        }
        function Q({value: e, children: t}) {
            return g.createElement(Y.Provider, {
                value: e
            }, t)
        }
        function ee(e) {
            var t;
            if (e.type)
                return e.type;
            let r = null != (t = e.as) ? t : "button";
            if ("string" == typeof r && "button" === r.toLowerCase())
                return "button"
        }
        function et(e, t, r) {
            let n = L(t);
            (0,
            g.useEffect)(()=>{
                function t(e) {
                    n.current(e)
                }
                return document.addEventListener(e, t, r),
                ()=>document.removeEventListener(e, t, r)
            }
            , [e, r])
        }
        function er(...e) {
            return (0,
            g.useMemo)(()=>B(...e), [...e])
        }
        var en = ((d = en || {})[d.None = 1] = "None",
        d[d.Focusable = 2] = "Focusable",
        d[d.Hidden = 4] = "Hidden",
        d);
        let ei = S(function(e, t) {
            let {features: r=1, ...n} = e;
            return x({
                ourProps: {
                    ref: t,
                    "aria-hidden": (2 & r) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & r) == 4 && (2 & r) != 2 && {
                            display: "none"
                        }
                    }
                },
                theirProps: n,
                slot: {},
                defaultTag: "div",
                name: "Hidden"
            })
        });
        var eo = ((h = eo || {})[h.Forwards = 0] = "Forwards",
        h[h.Backwards = 1] = "Backwards",
        h);
        function ea() {
            var e;
            let t, r = (0,
            g.useRef)(0);
            return e = "keydown",
            t = L(e=>{
                "Tab" === e.key && (r.current = e.shiftKey ? 1 : 0)
            }
            ),
            (0,
            g.useEffect)(()=>{
                function r(e) {
                    t.current(e)
                }
                return window.addEventListener(e, r, !0),
                ()=>window.removeEventListener(e, r, !0)
            }
            , [e, !0]),
            r
        }
        var es = ((p = es || {})[p.Open = 0] = "Open",
        p[p.Closed = 1] = "Closed",
        p)
          , el = ((m = el || {})[m.TogglePopover = 0] = "TogglePopover",
        m[m.ClosePopover = 1] = "ClosePopover",
        m[m.SetButton = 2] = "SetButton",
        m[m.SetButtonId = 3] = "SetButtonId",
        m[m.SetPanel = 4] = "SetPanel",
        m[m.SetPanelId = 5] = "SetPanelId",
        m);
        let eu = {
            0: e=>({
                ...e,
                popoverState: y(e.popoverState, {
                    0: 1,
                    1: 0
                })
            }),
            1: e=>1 === e.popoverState ? e : {
                ...e,
                popoverState: 1
            },
            2: (e,t)=>e.button === t.button ? e : {
                ...e,
                button: t.button
            },
            3: (e,t)=>e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            4: (e,t)=>e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            },
            5: (e,t)=>e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , ec = (0,
        g.createContext)(null);
        function ef(e) {
            let t = (0,
            g.useContext)(ec);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, ef),
                t
            }
            return t
        }
        ec.displayName = "PopoverContext";
        let ed = (0,
        g.createContext)(null);
        function eh(e) {
            let t = (0,
            g.useContext)(ed);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, eh),
                t
            }
            return t
        }
        ed.displayName = "PopoverAPIContext";
        let ep = (0,
        g.createContext)(null);
        function em() {
            return (0,
            g.useContext)(ep)
        }
        ep.displayName = "PopoverGroupContext";
        let ev = (0,
        g.createContext)(null);
        function eg(e, t) {
            return y(t.type, eu, e, t)
        }
        ev.displayName = "PopoverPanelContext";
        let ey = P.RenderStrategy | P.Static
          , eb = P.RenderStrategy | P.Static
          , eP = Object.assign(S(function(e, t) {
            var r, n, i;
            let o;
            let a = (0,
            g.useRef)(null)
              , s = I(t, function(e, t=!0) {
                return Object.assign(e, {
                    [N]: t
                })
            }(e=>{
                a.current = e
            }
            ))
              , l = (0,
            g.useRef)([])
              , u = (0,
            g.useReducer)(eg, {
                popoverState: 1,
                buttons: l,
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: (0,
                g.createRef)(),
                afterPanelSentinel: (0,
                g.createRef)()
            })
              , [{popoverState: c, button: f, buttonId: d, panel: h, panelId: p, beforePanelSentinel: m, afterPanelSentinel: v},b] = u
              , P = er(null != (r = a.current) ? r : f)
              , w = (0,
            g.useMemo)(()=>{
                if (!f || !h)
                    return !1;
                for (let e of document.querySelectorAll("body > *"))
                    if (Number(null == e ? void 0 : e.contains(f)) ^ Number(null == e ? void 0 : e.contains(h)))
                        return !0;
                let e = q()
                  , t = e.indexOf(f)
                  , r = (t + e.length - 1) % e.length
                  , n = (t + 1) % e.length
                  , i = e[r]
                  , o = e[n];
                return !h.contains(i) && !h.contains(o)
            }
            , [f, h])
              , E = L(d)
              , _ = L(p)
              , S = (0,
            g.useMemo)(()=>({
                buttonId: E,
                panelId: _,
                close: ()=>b({
                    type: 1
                })
            }), [E, _, b])
              , A = em()
              , C = null == A ? void 0 : A.registerPopover
              , O = T(()=>{
                var e;
                return null != (e = null == A ? void 0 : A.isFocusWithinPopoverGroup()) ? e : (null == P ? void 0 : P.activeElement) && ((null == f ? void 0 : f.contains(P.activeElement)) || (null == h ? void 0 : h.contains(P.activeElement)))
            }
            );
            (0,
            g.useEffect)(()=>null == C ? void 0 : C(S), [C, S]),
            n = null == P ? void 0 : P.defaultView,
            i = "focus",
            o = L(e=>{
                var t, r, n, i;
                0 === c && (O() || f && h && e.target !== window && (null != (r = null == (t = m.current) ? void 0 : t.contains) && r.call(t, e.target) || null != (i = null == (n = v.current) ? void 0 : n.contains) && i.call(n, e.target) || b({
                    type: 1
                })))
            }
            ),
            (0,
            g.useEffect)(()=>{
                function e(e) {
                    o.current(e)
                }
                return (n = null != n ? n : window).addEventListener(i, e, !0),
                ()=>n.removeEventListener(i, e, !0)
            }
            , [n, i, !0]),
            function(e, t, r=!0) {
                let n = (0,
                g.useRef)(!1);
                function i(r, i) {
                    if (!n.current || r.defaultPrevented)
                        return;
                    let o = function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e)
                      , a = i(r);
                    if (null !== a && a.getRootNode().contains(a)) {
                        for (let e of o) {
                            if (null === e)
                                continue;
                            let t = e instanceof HTMLElement ? e : e.current;
                            if (null != t && t.contains(a) || r.composed && r.composedPath().includes(t))
                                return
                        }
                        return K(a, z.Loose) || -1 === a.tabIndex || r.preventDefault(),
                        t(r, a)
                    }
                }
                (0,
                g.useEffect)(()=>{
                    requestAnimationFrame(()=>{
                        n.current = r
                    }
                    )
                }
                , [r]);
                let o = (0,
                g.useRef)(null);
                et("mousedown", e=>{
                    var t, r;
                    n.current && (o.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target)
                }
                , !0),
                et("click", e=>{
                    o.current && (i(e, ()=>o.current),
                    o.current = null)
                }
                , !0),
                et("blur", e=>i(e, ()=>window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }([f, h], (e,t)=>{
                b({
                    type: 1
                }),
                K(t, z.Loose) || (e.preventDefault(),
                null == f || f.focus())
            }
            , 0 === c);
            let R = T(e=>{
                b({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : "current"in e && e.current instanceof HTMLElement ? e.current : f : f;
                null == t || t.focus()
            }
            )
              , M = (0,
            g.useMemo)(()=>({
                close: R,
                isPortalled: w
            }), [R, w])
              , j = (0,
            g.useMemo)(()=>({
                open: 0 === c,
                close: R
            }), [c, R]);
            return g.createElement(ev.Provider, {
                value: null
            }, g.createElement(ec.Provider, {
                value: u
            }, g.createElement(ed.Provider, {
                value: M
            }, g.createElement(Q, {
                value: y(c, {
                    0: Z.Open,
                    1: Z.Closed
                })
            }, x({
                ourProps: {
                    ref: s
                },
                theirProps: e,
                slot: j,
                defaultTag: "div",
                name: "Popover"
            })))))
        }), {
            Button: S(function(e, t) {
                let r = D()
                  , {id: n=`headlessui-popover-button-${r}`, ...i} = e
                  , [o,a] = ef("Popover.Button")
                  , {isPortalled: s} = eh("Popover.Button")
                  , l = (0,
                g.useRef)(null)
                  , u = `headlessui-focus-sentinel-${D()}`
                  , c = em()
                  , f = null == c ? void 0 : c.closeOthers
                  , d = null !== (0,
                g.useContext)(ev);
                (0,
                g.useEffect)(()=>{
                    if (!d)
                        return a({
                            type: 3,
                            buttonId: n
                        }),
                        ()=>{
                            a({
                                type: 3,
                                buttonId: null
                            })
                        }
                }
                , [d, n, a]);
                let[h] = (0,
                g.useState)(()=>Symbol())
                  , p = I(l, t, d ? null : e=>{
                    if (e)
                        o.buttons.current.push(h);
                    else {
                        let e = o.buttons.current.indexOf(h);
                        -1 !== e && o.buttons.current.splice(e, 1)
                    }
                    o.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),
                    e && a({
                        type: 2,
                        button: e
                    })
                }
                )
                  , m = I(l, t)
                  , v = er(l)
                  , b = T(e=>{
                    var t, r, n;
                    if (d) {
                        if (1 === o.popoverState)
                            return;
                        switch (e.key) {
                        case V.Space:
                        case V.Enter:
                            e.preventDefault(),
                            null == (r = (t = e.target).click) || r.call(t),
                            a({
                                type: 1
                            }),
                            null == (n = o.button) || n.focus()
                        }
                    } else
                        switch (e.key) {
                        case V.Space:
                        case V.Enter:
                            e.preventDefault(),
                            e.stopPropagation(),
                            1 === o.popoverState && (null == f || f(o.buttonId)),
                            a({
                                type: 0
                            });
                            break;
                        case V.Escape:
                            if (0 !== o.popoverState)
                                return null == f ? void 0 : f(o.buttonId);
                            if (!l.current || null != v && v.activeElement && !l.current.contains(v.activeElement))
                                return;
                            e.preventDefault(),
                            e.stopPropagation(),
                            a({
                                type: 1
                            })
                        }
                }
                )
                  , P = T(e=>{
                    d || e.key === V.Space && e.preventDefault()
                }
                )
                  , w = T(t=>{
                    var r, n;
                    F(t.currentTarget) || e.disabled || (d ? (a({
                        type: 1
                    }),
                    null == (r = o.button) || r.focus()) : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === o.popoverState && (null == f || f(o.buttonId)),
                    a({
                        type: 0
                    }),
                    null == (n = o.button) || n.focus()))
                }
                )
                  , E = T(e=>{
                    e.preventDefault(),
                    e.stopPropagation()
                }
                )
                  , _ = 0 === o.popoverState
                  , S = (0,
                g.useMemo)(()=>({
                    open: _
                }), [_])
                  , A = function(e, t) {
                    let[r,n] = (0,
                    g.useState)(()=>ee(e));
                    return k(()=>{
                        n(ee(e))
                    }
                    , [e.type, e.as]),
                    k(()=>{
                        r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button")
                    }
                    , [r, t]),
                    r
                }(e, l)
                  , C = d ? {
                    ref: m,
                    type: A,
                    onKeyDown: b,
                    onClick: w
                } : {
                    ref: p,
                    id: o.buttonId,
                    type: A,
                    "aria-expanded": e.disabled ? void 0 : 0 === o.popoverState,
                    "aria-controls": o.panel ? o.panelId : void 0,
                    onKeyDown: b,
                    onKeyUp: P,
                    onClick: w,
                    onMouseDown: E
                }
                  , O = ea()
                  , R = T(()=>{
                    let e = o.panel;
                    e && y(O.current, {
                        [eo.Forwards]: ()=>G(e, W.First),
                        [eo.Backwards]: ()=>G(e, W.Last)
                    }) === H.Error && G(q().filter(e=>"true" !== e.dataset.headlessuiFocusGuard), y(O.current, {
                        [eo.Forwards]: W.Next,
                        [eo.Backwards]: W.Previous
                    }), {
                        relativeTo: o.button
                    })
                }
                );
                return g.createElement(g.Fragment, null, x({
                    ourProps: C,
                    theirProps: i,
                    slot: S,
                    defaultTag: "button",
                    name: "Popover.Button"
                }), _ && !d && s && g.createElement(ei, {
                    id: u,
                    features: en.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: R
                }))
            }),
            Overlay: S(function(e, t) {
                let r = D()
                  , {id: n=`headlessui-popover-overlay-${r}`, ...i} = e
                  , [{popoverState: o},a] = ef("Popover.Overlay")
                  , s = I(t)
                  , l = J()
                  , u = null !== l ? (l & Z.Open) === Z.Open : 0 === o;
                return x({
                    ourProps: {
                        ref: s,
                        id: n,
                        "aria-hidden": !0,
                        onClick: T(e=>{
                            if (F(e.currentTarget))
                                return e.preventDefault();
                            a({
                                type: 1
                            })
                        }
                        )
                    },
                    theirProps: i,
                    slot: (0,
                    g.useMemo)(()=>({
                        open: 0 === o
                    }), [o]),
                    defaultTag: "div",
                    features: ey,
                    visible: u,
                    name: "Popover.Overlay"
                })
            }),
            Panel: S(function(e, t) {
                let r = D()
                  , {id: n=`headlessui-popover-panel-${r}`, focus: i=!1, ...o} = e
                  , [a,s] = ef("Popover.Panel")
                  , {close: l, isPortalled: u} = eh("Popover.Panel")
                  , c = `headlessui-focus-sentinel-before-${D()}`
                  , f = `headlessui-focus-sentinel-after-${D()}`
                  , d = (0,
                g.useRef)(null)
                  , h = I(d, t, e=>{
                    s({
                        type: 4,
                        panel: e
                    })
                }
                )
                  , p = er(d);
                k(()=>(s({
                    type: 5,
                    panelId: n
                }),
                ()=>{
                    s({
                        type: 5,
                        panelId: null
                    })
                }
                ), [n, s]);
                let m = J()
                  , v = null !== m ? (m & Z.Open) === Z.Open : 0 === a.popoverState
                  , b = T(e=>{
                    var t;
                    if (e.key === V.Escape) {
                        if (0 !== a.popoverState || !d.current || null != p && p.activeElement && !d.current.contains(p.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({
                            type: 1
                        }),
                        null == (t = a.button) || t.focus()
                    }
                }
                );
                (0,
                g.useEffect)(()=>{
                    var t;
                    e.static || 1 === a.popoverState && (null == (t = e.unmount) || t) && s({
                        type: 4,
                        panel: null
                    })
                }
                , [a.popoverState, e.unmount, e.static, s]),
                (0,
                g.useEffect)(()=>{
                    if (!i || 0 !== a.popoverState || !d.current)
                        return;
                    let e = null == p ? void 0 : p.activeElement;
                    d.current.contains(e) || G(d.current, W.First)
                }
                , [i, d, a.popoverState]);
                let P = (0,
                g.useMemo)(()=>({
                    open: 0 === a.popoverState,
                    close: l
                }), [a, l])
                  , w = {
                    ref: h,
                    id: n,
                    onKeyDown: b,
                    onBlur: i && 0 === a.popoverState ? e=>{
                        var t, r, n, i, o;
                        let l = e.relatedTarget;
                        l && d.current && (null != (t = d.current) && t.contains(l) || (s({
                            type: 1
                        }),
                        (null != (n = null == (r = a.beforePanelSentinel.current) ? void 0 : r.contains) && n.call(r, l) || null != (o = null == (i = a.afterPanelSentinel.current) ? void 0 : i.contains) && o.call(i, l)) && l.focus({
                            preventScroll: !0
                        })))
                    }
                    : void 0,
                    tabIndex: -1
                }
                  , E = ea()
                  , _ = T(()=>{
                    let e = d.current;
                    e && y(E.current, {
                        [eo.Forwards]: ()=>{
                            var t;
                            G(e, W.First) === H.Error && (null == (t = a.afterPanelSentinel.current) || t.focus())
                        }
                        ,
                        [eo.Backwards]: ()=>{
                            var e;
                            null == (e = a.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                )
                  , S = T(()=>{
                    let e = d.current;
                    e && y(E.current, {
                        [eo.Forwards]: ()=>{
                            var e;
                            if (!a.button)
                                return;
                            let t = q()
                              , r = t.indexOf(a.button)
                              , n = t.slice(0, r + 1)
                              , i = [...t.slice(r + 1), ...n];
                            for (let t of i.slice())
                                if ("true" === t.dataset.headlessuiFocusGuard || null != (e = a.panel) && e.contains(t)) {
                                    let e = i.indexOf(t);
                                    -1 !== e && i.splice(e, 1)
                                }
                            G(i, W.First, {
                                sorted: !1
                            })
                        }
                        ,
                        [eo.Backwards]: ()=>{
                            var t;
                            G(e, W.Previous) === H.Error && (null == (t = a.button) || t.focus())
                        }
                    })
                }
                );
                return g.createElement(ev.Provider, {
                    value: n
                }, v && u && g.createElement(ei, {
                    id: c,
                    ref: a.beforePanelSentinel,
                    features: en.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: _
                }), x({
                    ourProps: w,
                    theirProps: o,
                    slot: P,
                    defaultTag: "div",
                    features: eb,
                    visible: v,
                    name: "Popover.Panel"
                }), v && u && g.createElement(ei, {
                    id: f,
                    ref: a.afterPanelSentinel,
                    features: en.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: S
                }))
            }),
            Group: S(function(e, t) {
                let r = (0,
                g.useRef)(null)
                  , n = I(r, t)
                  , [i,o] = (0,
                g.useState)([])
                  , a = T(e=>{
                    o(t=>{
                        let r = t.indexOf(e);
                        if (-1 !== r) {
                            let e = t.slice();
                            return e.splice(r, 1),
                            e
                        }
                        return t
                    }
                    )
                }
                )
                  , s = T(e=>(o(t=>[...t, e]),
                ()=>a(e)))
                  , l = T(()=>{
                    var e;
                    let t = B(r);
                    if (!t)
                        return !1;
                    let n = t.activeElement;
                    return !!(null != (e = r.current) && e.contains(n)) || i.some(e=>{
                        var r, i;
                        return (null == (r = t.getElementById(e.buttonId.current)) ? void 0 : r.contains(n)) || (null == (i = t.getElementById(e.panelId.current)) ? void 0 : i.contains(n))
                    }
                    )
                }
                )
                  , u = T(e=>{
                    for (let t of i)
                        t.buttonId.current !== e && t.close()
                }
                )
                  , c = (0,
                g.useMemo)(()=>({
                    registerPopover: s,
                    unregisterPopover: a,
                    isFocusWithinPopoverGroup: l,
                    closeOthers: u
                }), [s, a, l, u])
                  , f = (0,
                g.useMemo)(()=>({}), []);
                return g.createElement(ep.Provider, {
                    value: c
                }, x({
                    ourProps: {
                        ref: n
                    },
                    theirProps: e,
                    slot: f,
                    defaultTag: "div",
                    name: "Popover.Group"
                }))
            })
        })
    
