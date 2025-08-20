(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 738083: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var NH = __c.NH;
        var Sc = __c.Sc;
        var P = __c.P;
        var xu = __c.xu;
        var O = __c.O;
        var kx = __c.kx;
        var $t = __c.$t;
        var D = __c.D;
        var E = __c.E;
        var U4 = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.NR(b.reference.$h);
                a = a.uV(b.reference.ki);
                return c != null && a != null;
              case 1:
                return a.NR(b.reference.$h) != null;
              case 2:
                return a.uV(b.reference.ki) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          c2b = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.ea.length > 0) return !1;
                a = a.bF(c.DY.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.QD(new __c.TD(), a.iH).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return U4(b, d);
                        case 1:
                          return U4(b, d.start) && U4(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          d2b = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.na;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.Qb === c : g.span.Uc === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.ra
                        : c === null || c === void 0
                        ? void 0
                        : c.Fa))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: D(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.rpa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.kXa),
                      (h = h.na === k.na && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.kc === c.kc &&
                    g.kc === 0
                      ? (g.rpa = f)
                      : e.push({
                          kXa: k,
                          Psb: l,
                          rpa: f,
                          color: c.color,
                          weight: c.weight,
                          kc: c.kc,
                        });
                  }
              }
            return e;
          },
          e2b = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.na,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.Mb === h : d.span.Gc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.qa
                        : d === null || d === void 0
                        ? void 0
                        : d.Ka) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { na: g, boundary: "start" }
                      : { na: D(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.rIa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.vpa),
                      (k = k.na === m.na && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.kc === d.kc &&
                    h.kc === 0
                      ? (h.vpa = g)
                      : f.push({
                          rIa: l,
                          $sb: m,
                          vpa: g,
                          color: d.color,
                          weight: d.weight,
                          kc: d.kc,
                        });
                  }
              }
            return f;
          },
          f2b = function (a, b, c, d, e) {
            const f = a.cZa.R9a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                v = f.get(r) || 0;
              return t <= v ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.Ub(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.Ub(d[0].na)) &&
              e.push({ na: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].na)) &&
              e.push({ na: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.Ub(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.na : void 0;
                k = l ? b.layout.rows.Ub(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.Ka
                    : m === null || m === void 0
                    ? void 0
                    : m.qa;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.Fa
                    : m === null || m === void 0
                    ? void 0
                    : m.ra;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Ka
                    : n === null || n === void 0
                    ? void 0
                    : n.qa;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Fa
                    : l === null || l === void 0
                    ? void 0
                    : l.ra;
                p = __c.iEa({ ra: n, Fa: k, qa: l, Ka: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: v, width: u } =
                  (t === null || t === void 0 ? void 0 : t.kc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(V4(q, r), __c.sE(p, v / 2, u / 2));
              }
            }
            return g;
          },
          g2b = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = d2b(b, c, d, e);
            f = e2b(b, c, d, e, f);
            const h = f2b(a, b, c, d, e),
              k = a.Xeb(b),
              l = a.qeb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.Psb,
                  t = n.rpa,
                  v = n.kXa;
                const u = n.color,
                  x = n.weight;
                n = n.kc;
                const y = m ? -1 : 1,
                  A =
                    (p = h.get(V4(r, v))) === null || p === void 0
                      ? void 0
                      : p.Ka;
                p =
                  (q = h.get(V4(t, v))) === null || q === void 0
                    ? void 0
                    : q.qa;
                if (A != null && p != null) {
                  q = D(k.get(v.na));
                  var z = D(l.get(r.column));
                  r = D(l.get(t.column));
                  v = v.boundary === "start" ? q.start : q.end;
                  q = z.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: u,
                    weight: x,
                    kc: n,
                    p1: new $t(q + A * y, v),
                    p2: new $t(t + p * y, v),
                    ...__c.xE((t - q) * y, n * x, A),
                  };
                }
              })
              .filter(__c.Ib);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.rIa,
                    t = n.$sb,
                    v = n.vpa;
                  const u = n.color,
                    x = n.weight;
                  n = n.kc;
                  const y =
                    (p = h.get(V4(r, t))) === null || p === void 0
                      ? void 0
                      : p.Fa;
                  p =
                    (q = h.get(V4(r, v))) === null || q === void 0
                      ? void 0
                      : q.ra;
                  if (y != null && p != null) {
                    q = D(l.get(r.column));
                    var A = D(k.get(t.na));
                    t = D(k.get(v.na));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = A.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: u,
                      weight: x,
                      kc: n,
                      p1: new $t(r, q + y),
                      p2: new $t(r, v + p),
                      ...__c.xE(v - q, n * x, y),
                    };
                  }
                })
                .filter(__c.Ib),
              ...a,
            ];
          },
          h2b = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.vd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.vd(d, (e) => `${e.ck}_${e.dk}`);
              for (const [, e] of a) {
                const { dk: f, ck: g } = e[0];
                a = __c.vd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, ck: g, dk: f });
              }
            }
            return b;
          },
          i2b = function (a, b, c, d) {
            var e = __c.Uub;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { na: k, boundary: "start" },
                      { na: k, boundary: "end" },
                    ]
                  : [{ na: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.cZa.nqb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = g2b(e, a, h, f, g, d);
            return h2b(c);
          },
          W4 = function () {
            const [a] = (0, __c.xb)(() => kx());
            return a;
          },
          j2b = function (a) {
            switch (a) {
              case 2:
                return O("ibdecg");
              case 7:
                return O("446quA");
              case 5:
                return O("j1fbqg");
              case 1:
                return O("O5i4AQ");
              case 6:
                return O("C0VHsg");
              case 4:
                return O("9ND0kg");
              case -1:
                return O("RWqnLA");
              case 9:
                return O("nQR/7w");
              case -2:
                return O("P23rtA");
              case 3:
                return O("+IXmVg");
              default:
                throw new E(a);
            }
          },
          k2b = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          l2b = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.Xub)(a) / 2
                  : -(0, __c.Vub)(a) / 2,
              c = -(0, __c.Wub)(a) / 2,
              d = a.width + (0, __c.Vub)(a) / 2 + (0, __c.Xub)(a) / 2;
            a = a.height + (0, __c.Wub)(a) / 2 + (0, __c.Yub)(a) / 2;
            return xu({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          m2b = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          o2b = function (a) {
            var b;
            const c = a.dz;
            var d = a.content;
            const e = a.context;
            a = a.ep;
            __c.C(
              (d === null || d === void 0
                ? void 0
                : (b = d.eg) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.hk;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.eka) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.re(__c.R7a, {
                          ...__c.beb,
                          value: b.value,
                        }),
                        context: e,
                        ep: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = n2b(c, e, d.Wz, d.hk.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: X4(__c.JR, {
                    label: j2b(b.error),
                    children: X4(__c.my, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: X4(__c.bFb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          n2b = function (a, b, c, d) {
            var e;
            return (e = a.hka) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          r2b = function (a) {
            const b = a.dz,
              c = a.Ef,
              d = a.Jtb,
              e = a.Qa;
            b.hka = (f) => __c.qLa({ ...f, Qa: e });
            b.hFa = (f) => o2b({ ...f, dz: b });
            b.eka = m2b(p2b({ Ef: c, CQ: void 0 }));
            b.jFa = q2b(d, e);
            b.kFa = m2b((f) => X4(Y4, { ...f, Qa: e }));
          },
          s2b = function ({
            label: a,
            Ua: b,
            width: c,
            height: d,
            scale: e,
            AIa: f,
          }) {
            return X4("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: Z4(__c.jy, {
                className: $4("ivlMMQ", a5(f)),
                size: "small",
                alignment: "center",
                children: [b && X4(b, { size: "small" }), a],
              }),
            });
          },
          a5 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          u2b = function ({ ud: a, HNa: b, scale: c, Po: d, Qo: e, L2a: f }) {
            const g = b5(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.hE(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return X4(__c.ky, {
              Xp: "light",
              light: "light",
              Vs: "light",
              dark: "light",
              children: (m) =>
                X4("div", {
                  className: $4("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: X4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: $4("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.Yl,
                    children: X4(__c.NR, {
                      className: $4("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: O("ruWN9A"),
                      children: X4(t2b, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          w2b = function () {
            const a = new v2b(),
              b = new __c.oS(),
              c = c5((f) => {
                const {
                    scale: g = 1,
                    CNa: h,
                    size: k = "small",
                    L2a: l = !0,
                  } = f,
                  m = d5((n) => a.Qo({ scale: n, size: k, Rta: h }), [k, h]);
                return X4(u2b, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  ud: f.sheet.direction === "rtl",
                  HNa: f.selection != null && a.lib(f.sheet, f.selection),
                  Qo: m,
                  L2a: l,
                });
              }),
              d = c5((f) => {
                const {
                    scale: g = 1,
                    CNa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Tqb: n,
                  } = f,
                  p = d5((u) => a.Qo({ scale: u, size: k, Rta: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = d5((u) => m != null && a.Yxa(m).has(u), [m]),
                  t = d5((u) => m != null && a.Xfb(l, m).has(u), [l, m]),
                  v = d5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.cols.Ie(u, n.Mb) >= 0 &&
                        l.layout.cols.Ie(u, n.Gc) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return X4(e5, { ...f, kd: g, Ad: q, Qo: p, bE: v, OE: b });
              }),
              e = c5((f) => {
                const {
                    scale: g = 1,
                    CNa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Tqb: n,
                  } = f,
                  p = d5((u) => a.Qo({ scale: u, size: k, Rta: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = d5((u) => m != null && a.$xa(m).has(u), [m]),
                  t = d5((u) => m != null && a.Yfb(l, m).has(u), [l, m]),
                  v = d5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.rows.Ie(u, n.Qb) >= 0 &&
                        l.layout.rows.Ie(u, n.Uc) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return X4(f5, { ...f, kd: q, Ad: g, Qo: p, bE: v, OE: b });
              });
            return { m3a: c, l3a: d, n3a: e };
          },
          x2b = function (a) {
            const b = a.Ip,
              c = () => null;
            return __c.ux((d) => X4(g5, { ...d, Ip: b, Ch: c }));
          },
          y2b = function ({ sheet: a, Y: b, range: c, Fd: d }) {
            h5(
              () =>
                i5(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1;
                    e = a.direction === "rtl";
                    e = c ? a.qa(c.Mb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.ra(c.Qb) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          B2b = function ({ onScroll: a }) {
            const b = new z2b(a);
            return {
              UB: b,
              Lja: c5((c) =>
                X4(A2b, { sheet: c.sheet, UB: b, children: c.children })
              ),
            };
          },
          E2b = function (a) {
            const b = a.Ip,
              c = a.le,
              d = a.eZa,
              e = ({ children: k }) => k,
              { UB: f, Lja: g } = B2b({ onScroll: a.onScroll });
            class h extends C2b {
              get TK() {
                const k = this.props.fa.qv;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentDidMount() {
                d.NYa(this.props.item, {
                  xb: this.props.xb,
                  fa: this.props.fa,
                });
              }
              componentWillUnmount() {
                d.F8a(this.props.item, {
                  xb: this.props.xb,
                  fa: this.props.fa,
                });
              }
              render() {
                d.NYa(this.props.item, {
                  xb: this.props.xb,
                  fa: this.props.fa,
                });
                return X4(D2b, {
                  ...this.props,
                  Y: this.Y,
                  Ip: b,
                  TK: this.TK,
                  Ch: this.Ch,
                  eZa: d,
                  UB: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.Y = j5(() => {
                  const l = this.props.item;
                  var m = this.props.fa,
                    n = m.qv;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.afb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.HE(l, n.xb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
                this.Ch = c5((l) =>
                  X4("div", {
                    className: "wKvivQ",
                    children: X4(__c.yLa, { ...this.props, ...l, le: c }),
                  })
                );
              }
            }
            return { Rja: h, UB: f };
          },
          F2b = function (a, b) {
            if (
              b != null &&
              b.Mb != null &&
              b.Qb != null &&
              b.Gc != null &&
              b.Uc != null
            ) {
              var c = a.qa(b.Mb),
                d = a.ra(b.Qb),
                e = a.qa(b.Gc) + b.Gc.width - c;
              a = a.ra(b.Uc) + b.Uc.height - d;
              return xu({ top: d, left: c, width: e, height: a });
            }
          },
          H2b = function (a) {
            const b = a.Ip,
              c = () => null;
            return (d) => X4(G2b, { ...d, Ip: b, Ch: c });
          },
          L2b = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { QHa: b, hv: b, Ha: {}, sn: {} },
              d = k5(
                () => a.lz.style || c,
                (h) => {
                  var k;
                  Object.assign(a.M8.style, h.QHa);
                  Object.assign(a.pL.style, h.hv);
                  Object.assign(a.kD.style, h.Ha);
                  Object.assign(a.pD.style, h.sn);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Ha) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.kD.classList.toggle("OQx3PQ", h === "underline");
                  a.kD.classList.toggle("_99ezUA", h === "line-through");
                  a.kD.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: I2b }
              ),
              e = k5(
                () => a.Lsa,
                (h) => {
                  a.kD.classList.toggle("_84KvRA", !h);
                  a.M8.classList.toggle("_84KvRA", !h);
                  a.pL.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = k5(
                () => a.renderer,
                (h) => {
                  a.z9 &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.z9 = void 0), a.H3.remove())
                    : (a.pD.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.z9 = J2b(h.node, a.H3);
                      a.pD.appendChild(a.H3);
                      break;
                    case "dom":
                      h.render(a.pD);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.Mua();
                },
                { fireImmediately: !0 }
              ),
              g = K2b
                ? k5(
                    () => a.hra,
                    (h) => {
                      a.kD.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g === null || g === void 0 || g();
            };
          },
          I2b = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          N2b = function (a) {
            const b = a.ez,
              c = a.aC,
              d = a.zC,
              e = a.g2a,
              f = a.Nx,
              g = new M2b(c),
              h = (k, l) => (f ? c2b(f, k, l) : !1);
            return (k) =>
              X4(l5, {
                ...k,
                hN: h,
                zC: d,
                aC: c,
                ez: b,
                hsa: g,
                g2a: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          V4 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
          p2b =
            ({ Ef: a, CQ: b }) =>
            (c) =>
              (0, __c.N)(__c.$ub, { ...c, Ef: a, CQ: b }),
          m5 = __webpack_require__(443763),
          O2b = m5.Fragment,
          X4 = m5.jsx,
          Z4 = m5.jsxs;
        var P2b = __webpack_require__(358579).Z;
        var Q2b = __webpack_require__,
          R2b = Q2b(993864),
          $4 = Q2b.n_x(R2b)();
        var c5 = __webpack_require__(446474).Pi;
        var n5 = __webpack_require__(875604),
          o5 = n5.Component,
          C2b = n5.PureComponent,
          d5 = n5.useCallback,
          h5 = n5.useEffect,
          S2b = n5.useLayoutEffect,
          b5 = n5.useMemo,
          p5 = n5.useRef,
          T2b = n5.useState;
        var q5 = __webpack_require__(635872),
          r5 = q5.Om,
          U2b = q5.kq,
          V2b = q5.YN;
        var s5 = __webpack_require__(519427),
          t5 = s5.action,
          i5 = s5.autorun,
          u5 = s5.comparer,
          j5 = s5.computed,
          W2b = s5.createAtom,
          v5 = s5.observable,
          k5 = s5.reaction,
          X2b = s5.untracked;
        var w5 = __webpack_require__(937763)._;
        var x5 = __webpack_require__(161563)._;
        var J2b = __webpack_require__(36281).createPortal;
        var Y2b = c5((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const [e] = T2b(() => kx()),
              f = {
                get: d5(() => {
                  var g;
                  const h =
                    e === null || e === void 0
                      ? void 0
                      : (g = e.current) === null || g === void 0
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      (k = h === null || h === void 0 ? void 0 : h.width) !==
                        null && k !== void 0
                        ? k
                        : 0,
                    height:
                      (l = h === null || h === void 0 ? void 0 : h.height) !==
                        null && l !== void 0
                        ? l
                        : 0,
                  };
                  return xu(g);
                }, [e]),
              };
            return Z4("div", {
              className: $4("nMvVqA", d),
              children: [
                Z4("div", {
                  ref: P2b(a.Fd, e),
                  className: "_0YOFPg",
                  children: [
                    X4(a.Ip, { ...a, viewport: f }),
                    X4("div", {
                      className: $4("Gdl7fQ", d),
                      children:
                        (c = a.CEa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((g, h) => X4(g, {}, h)),
                    }),
                  ],
                }),
                a.vGb === "visible" &&
                  Z4(O2b, {
                    children: [
                      X4("div", {
                        className: $4("_32sKQw", d),
                        children: X4(a.i5a, { ...a }),
                      }),
                      X4("div", {
                        className: $4("xdIsTQ", d),
                        children: X4(a.l5a, { ...a }),
                      }),
                      X4("div", {
                        className: $4("rsTRSA", d),
                        children: X4(a.k5a, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          Z2b = c5((a) => {
            a = a.content;
            __c.w(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.aa;
              case "text3":
                return __c.$q.ka(a.value).cells.aa();
              default:
                throw new E(a);
            }
          });
        var q2b = (a, b) =>
            __c.cLa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Pg: c } = __c.tg(__c.ah, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    nb: void 0,
                    writingMode: 1,
                    rd: "start",
                    Cf: $2b(e, c),
                    Qa: b,
                  });
            }),
          $2b = r5(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.aa.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: u5.structural }
          );
        var a3b, b3b, c3b, Y4;
        new ((a3b = class extends w5 {
          constructor() {
            super(Y4);
            b3b();
          }
        }),
        (() => {
          class a extends (c3b = o5) {
            static A(b) {
              P(b, { Pg: j5 });
            }
            get Pg() {
              return __c.tg(__c.ah, this.props.context.attrs).Pg;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = X4(this.props.Ch, {
                content: b,
                na: c.container.na,
                col: c.container.column,
                Pg: this.Pg,
              });
              return this.Pg === "wrap"
                ? X4("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.A(this);
            }
          }
          ({
            c: [Y4, b3b],
          } = x5(a, [], [Sc], c3b));
        })(),
        a3b)();
        var v2b = class {
          Qo({ size: a, scale: b, Rta: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.SV * b : __c.SDb * b;
          }
          constructor() {
            this.lib = r5((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.Yxa = U2b(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.Hr }
            );
            this.$xa = U2b(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.Hr }
            );
            this.Xfb = r5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.$xa(b).size > 0) return new Set(a.layout.cols);
                b = this.Yxa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.na, e.column);
                  for (const f of k2b(
                    c ? c.span.Mb : e.column,
                    c ? c.span.Gc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Hr }
            );
            this.Yfb = r5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.Yxa(b).size > 0) return new Set(a.layout.rows);
                b = this.$xa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.na, e.column);
                  for (const f of k2b(
                    c ? c.span.Qb : e.na,
                    c ? c.span.Uc : e.na,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Hr }
            );
          }
        };
        var d3b,
          e3b,
          f3b,
          g3b,
          h3b,
          i3b,
          j3b = parseInt("4px", 10) || 4,
          e5;
        new ((d3b = class extends w5 {
          constructor() {
            super(e5);
            f3b();
          }
        }),
        (() => {
          class a extends (g3b = o5) {
            static A(b) {
              P(b, { ud: j5, lq: j5, g5: j5 });
            }
            get ud() {
              return this.props.sheet.direction === "rtl";
            }
            get lq() {
              var b;
              const c =
                (b = this.props.Po) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.hE(c);
            }
            get g5() {
              var b, c, d;
              return (c = (d = this.props).Dqa) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return X4(__c.ky, {
                Xp: "light",
                light: "light",
                Vs: "light",
                dark: "light",
                children: this.W8a,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (e5.A(this),
                t5((c) => {
                  const { onMouseMove: d, sheet: e, kd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "column", f);
                }));
              this.onMouseLeave = t5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.HWa = (c, d, e) => {
                const {
                    sheet: f,
                    Qo: g,
                    bE: h,
                    FGb: k,
                    kd: l = 1,
                    Ad: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.ud, gtA7Dw: this.ud },
                  p = (e === null || e === void 0 ? 0 : e.sticky)
                    ? this.ud
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var q;
                const r = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (q = this.g5) !== null && q !== void 0
                    ? q
                    : p
                  : void 0;
                let t = -1;
                return Z4("div", {
                  style: r,
                  className: $4("Vt2_4w", n, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((v) => {
                      var u;
                      t++;
                      if (
                        !(
                          (c && f.layout.cols.Ie(v, c) < 0) ||
                          (d && f.layout.cols.Ie(v, d) > 0)
                        )
                      )
                        return X4(
                          k3b,
                          {
                            col: v,
                            label: __c.JA(t),
                            Ua:
                              k === null || k === void 0
                                ? void 0
                                : (u = k.get()) === null || u === void 0
                                ? void 0
                                : u.get(v),
                            Qo: g,
                            bE: h,
                            kd: l,
                            Ad: m,
                          },
                          v.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      X4("div", {
                        style: { width: j3b * l },
                        className: $4("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.W8a = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.VG
                    ? e.layout.Nd.get(e.view.freeze.VG)
                    : void 0,
                  g = { jNbTIg: !this.ud, gtA7Dw: this.ud };
                return Z4("div", {
                  ref: (d = this.lq) === null || d === void 0 ? void 0 : d.Yl,
                  className: $4("xhBZaw", g, c.className),
                  children: [
                    f && this.HWa(void 0, f, { sticky: !0 }),
                    this.HWa(f ? e.cols.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [e5, f3b],
          } = x5(a, [], [Sc], g3b));
        })(),
        d3b)();
        var f5;
        new ((e3b = class extends w5 {
          constructor() {
            super(f5);
            h3b();
          }
        }),
        (() => {
          class a extends (i3b = o5) {
            static A(b) {
              P(b, { ud: j5, lq: j5, g5: j5 });
            }
            get ud() {
              return this.props.sheet.direction === "rtl";
            }
            get lq() {
              var b;
              const c =
                (b = this.props.Po) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.hE(c);
            }
            get g5() {
              var b, c, d;
              return (c = (d = this.props).Dqa) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return X4(__c.ky, {
                Xp: "light",
                light: "light",
                Vs: "light",
                dark: "light",
                children: this.Dqb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (f5.A(this),
                t5((c) => {
                  const { onMouseMove: d, sheet: e, Ad: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "row", f);
                }));
              this.onMouseLeave = t5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.NWa = (c, d, e) => {
                const {
                    sheet: f,
                    Qo: g,
                    bE: h,
                    kd: k = 1,
                    Ad: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.ud, gtA7Dw: this.ud },
                  n = (e === null || e === void 0 ? 0 : e.sticky)
                    ? { top: 0 }
                    : void 0;
                var p;
                const q = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (p = this.g5) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1;
                return Z4("div", {
                  style: q,
                  className: $4("_93roJg", m, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.rows.map((t) => {
                      r++;
                      if (
                        !(
                          (c && f.rows.Ie(t, c) < 0) ||
                          (d && f.rows.Ie(t, d) > 0)
                        )
                      )
                        return X4(
                          l3b,
                          {
                            na: t,
                            label: `${r + 1}`,
                            bE: h,
                            Qo: g,
                            kd: k,
                            Ad: l,
                          },
                          t.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      X4("div", {
                        style: { height: j3b * l },
                        className: $4("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.Dqb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.vV
                    ? e.layout.$d.get(e.view.freeze.vV)
                    : void 0,
                  g = { jNbTIg: !this.ud, gtA7Dw: this.ud };
                return Z4("div", {
                  ref: (d = this.lq) === null || d === void 0 ? void 0 : d.Yl,
                  className: $4("An9VeA", g, c.className),
                  children: [
                    f && this.NWa(void 0, f, { sticky: !0 }),
                    this.NWa(f ? e.rows.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [f5, h3b],
          } = x5(a, [], [Sc], i3b));
        })(),
        e3b)();
        var k3b = c5((a) => {
            const b = a.label,
              c = a.Ua,
              d = a.col,
              e = a.bE,
              f = a.Qo,
              g = a.kd;
            a = a.Ad;
            const h = f(a),
              k = V2b(() => e(d));
            return X4("div", {
              className: $4("_83Rssw", "d2uLIA", a5(k)),
              style: { width: d.width * g, height: h },
              children: X4(s2b, {
                label: b,
                Ua: c,
                width: d.width,
                height: f(1),
                scale: a,
                AIa: k,
              }),
            });
          }),
          l3b = c5((a) => {
            const b = a.label,
              c = a.na,
              d = a.Qo,
              e = a.bE,
              f = a.kd;
            a = a.Ad;
            const g = d(f),
              h = V2b(() => e(c));
            return X4("div", {
              className: $4("_83Rssw", "JhBzyw", a5(h)),
              style: { width: g, height: c.height * a },
              children: X4(s2b, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                AIa: h,
              }),
            });
          });
        var m3b =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var n3b =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var t2b = __c.CR({ io: m3b, medium: n3b });
        var o3b, p3b, q3b, g5;
        new ((o3b = class extends w5 {
          constructor() {
            super(g5);
            p3b();
          }
        }),
        (() => {
          class a extends (q3b = o5) {
            static A(b) {
              P(b, { ne: j5.struct });
            }
            render() {
              const b = this.props.element;
              return X4(this.props.Ip, {
                sheet: b.ha.config,
                container: b,
                r8: "visible",
                Po: this.props.Po,
                Ct: this.props.Ct,
                Gt: this.props.Gt,
                Y: this.props.Y,
                ne: this.ne,
                Ch: this.props.Ch,
                rG: void 0,
              });
            }
            get ne() {
              return __c.RA(this.props.element.ha.Ma, this.props.Ge);
            }
            constructor(...b) {
              super(...b);
              a.A(this);
            }
          }
          ({
            c: [g5, p3b],
          } = x5(a, [], [Sc], q3b));
        })(),
        o3b)();
        var r3b = class {
          constructor() {
            this.zga = new WeakMap();
            this.afb = (a) => this.zga.get(a);
            this.NYa = (a, b) => {
              this.zga.set(a, b);
            };
            this.F8a = (a, b) => {
              const c = this.zga.get(a);
              c && c.fa === b.fa && c.xb === b.xb && this.zga.delete(a);
            };
          }
        };
        var y5 = parseInt("4px", 10) || 4,
          s3b = c5(({ sheet: a, Y: b, range: c, wv: d, xv: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.ra(c.Uc) + c.Uc.height),
                  (a = a.qa(c.Gc) + c.Gc.width),
                  X4("div", {
                    style: { top: d * b, width: a * b, height: y5 * b },
                    className: $4("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.qa(c.Gc) + c.Gc.width),
                  X4("div", {
                    style: {
                      width: y5 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: $4("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.ra(c.Uc) + c.Uc.height),
                  X4("div", {
                    style: { top: c * b, width: a.width * b, height: y5 * b },
                    className: $4("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var z5 = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = W4();
            y2b({ sheet: a, Y: c, range: b, Fd: e });
            return X4("div", {
              ref: e,
              className: $4(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          t3b = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = W4();
            y2b({ sheet: a, Y: c, range: b, Fd: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return X4("div", {
              className: $4("nstn2A", a, "_9sodyg"),
              children: X4("div", {
                ref: e,
                className: $4("nstn2A", a),
                children: d,
              }),
            });
          };
        var A2b = c5(({ sheet: a, children: b, UB: c }) => {
            const d = d5(
                (f) => {
                  c.vya(a, f);
                },
                [c, a]
              ),
              e = d5(
                (f) => {
                  f != null ? c.VB.set(a, f) : c.VB.delete(a);
                },
                [c, a]
              );
            return X4(__c.Lyb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              mu: e,
              children: b,
            });
          }),
          z2b = class {
            vya(a, b) {
              this.onScroll && this.onScroll(a);
              this.q4.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.VB = new WeakMap();
              this.q4 = v5.map(new Map(), { deep: !1 });
              this.scrollTo = t5((b, c) => {
                b = this.VB.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var D2b = c5((a) => {
          const b = a.item,
            c = a.Po,
            d = a.Lf,
            e = a.measureRef,
            f = a.Y,
            g = a.FOa,
            h = a.xb,
            k = a.Ct,
            l = a.Gt,
            m = a.Ip,
            n = a.TK,
            p = a.Ch,
            q = a.Ge,
            r = a.UB;
          a = b5(() => __c.RA(b.Ma, q), [b, q]);
          const t = b5(
              () =>
                c5(({ sheet: y, range: A, wv: z, xv: B }) =>
                  X4(z5, {
                    sheet: y,
                    range: A,
                    Y: f,
                    children: X4(s3b, {
                      sheet: y,
                      Y: f,
                      range: A,
                      wv: z,
                      xv: B,
                    }),
                  })
                ),
              [f]
            ),
            v = l2b(b.config),
            u = f.get(),
            x = Math.min(v.width * u, h.width);
          h5(
            () =>
              i5(() => {
                var y = b.config.view.freeze.VG
                  ? b.config.layout.Nd.get(b.config.view.freeze.VG)
                  : void 0;
                if (y != null)
                  if (b.config.qa(y) + y.width > x) {
                    if ((y = r.VB.get(b))) y.style.overflowX = "hidden";
                  } else if ((y = r.VB.get(b))) y.style.overflowX = "scroll";
              }),
            [b, h.width, r, u, x]
          );
          return X4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: X4(n, {
              sheet: b,
              children: X4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: v.width * u, height: v.height * u },
                children: X4("div", {
                  className: "W1ir5A",
                  children: X4(m, {
                    container: d.yj(b),
                    sheet: b.config,
                    r8: "visible",
                    Po: c,
                    Y: f,
                    Ct: k,
                    Gt: l,
                    ne: a,
                    Ch: p,
                    rG: t,
                  }),
                }),
              }),
            }),
          });
        });
        var u3b = c5(({ page: a, range: b, OB: c }) => {
          const d = F2b(a.sheet, b);
          return X4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.vu(xu(e)).Uo(d) && c(e, f)
            ),
          });
        });
        var v3b = new __c.oS(),
          A5 = (a) => __c.SV * a,
          w3b = () => "primary-default",
          G2b = c5(
            ({
              container: a,
              Po: b,
              Ct: c,
              Gt: d,
              Z_: e,
              Y: f,
              viewport: g,
              rsb: h,
              Ip: k,
              Ch: l,
              OB: m,
              Lfa: n,
              Dyb: p,
              qxb: q,
              pxb: r,
            }) => {
              const t = a.page,
                v = b5(
                  () =>
                    c5(({ sheet: u, range: x, wv: y, xv: A }) =>
                      Z4(O2b, {
                        children: [
                          X4(z5, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: X4(s3b, {
                              sheet: u,
                              Y: f,
                              range: x,
                              wv: y,
                              xv: A,
                            }),
                          }),
                          Z4(t3b, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: [
                              p && X4(p, {}),
                              m && X4(u3b, { page: t, OB: m, range: x }),
                              r && X4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            X4(z5, {
                              sheet: t.sheet,
                              range: x,
                              Y: f,
                              children: X4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? X4(x3b, {
                    container: a,
                    viewport: g,
                    Y: f,
                    Po: b,
                    Ct: c,
                    Gt: d,
                    Ip: k,
                    Ch: l,
                    rG: v,
                  })
                : X4(k, {
                    sheet: t.sheet,
                    container: a,
                    r8: "hidden",
                    Po: b,
                    Ct: c,
                    Gt: d,
                    Z_: e,
                    Y: f,
                    viewport: g,
                    Ch: l,
                    rG: v,
                  });
            }
          ),
          x3b = c5((a) => {
            const b = a.container,
              c = a.Y,
              d = a.viewport,
              e = a.Po,
              f = a.Ct,
              g = a.Gt,
              h = a.Ip,
              k = a.Ch;
            a = a.rG;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = p5(null),
              p = p5(null),
              q = p5(null);
            h5(() => {
              const y = B5({
                sheet: l.sheet,
                bha: !0,
                cha: !0,
                Y: c,
                viewport: d,
              });
              return k5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = n.current;
                  if (A && z) {
                    var B = l.sheet.direction === "rtl",
                      G;
                    z.style.position =
                      (G = A.position) !== null && G !== void 0 ? G : "sticky";
                    var H;
                    z.style.top =
                      (H = A.top) !== null && H !== void 0 ? H : "0px";
                    var I, K;
                    B
                      ? (z.style.right =
                          (I = A.right) !== null && I !== void 0 ? I : "0px")
                      : (z.style.left =
                          (K = A.left) !== null && K !== void 0 ? K : "0px");
                    var M;
                    z.style.transform =
                      (M = A.transform) !== null && M !== void 0 ? M : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            h5(() => {
              const y = B5({
                sheet: l.sheet,
                bha: !1,
                cha: !0,
                Y: c,
                viewport: d,
              });
              return k5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = q.current;
                  if (A && z) {
                    var B;
                    z.style.position =
                      (B = A.position) !== null && B !== void 0 ? B : "sticky";
                    var G;
                    z.style.top =
                      (G = A.top) !== null && G !== void 0 ? G : "0px";
                    var H;
                    z.style.transform =
                      (H = A.transform) !== null && H !== void 0 ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            h5(() => {
              const y = B5({
                sheet: l.sheet,
                bha: !0,
                cha: !1,
                Y: c,
                viewport: d,
              });
              return k5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = p.current;
                  if (A && z) {
                    var B = l.sheet.direction === "rtl",
                      G;
                    z.style.position =
                      (G = A.position) !== null && G !== void 0 ? G : "sticky";
                    var H, I;
                    B
                      ? (z.style.right =
                          (H = A.right) !== null && H !== void 0 ? H : "0px")
                      : (z.style.left =
                          (I = A.left) !== null && I !== void 0 ? I : "0px");
                    var K;
                    z.style.transform =
                      (K = A.transform) !== null && K !== void 0 ? K : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = d5(
                (y, A, z) =>
                  B5({ sheet: y, bha: A, cha: z, Y: c, viewport: d }),
                [c, d]
              ),
              t = b5(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              v = b5(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var u;
            const x =
              (u = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              u !== void 0
                ? u
                : 1;
            return Z4("div", {
              className: $4("OsKKIQ", "cbOp6Q"),
              children: [
                X4("div", {
                  className: "VDFv_A",
                  children: X4(h, {
                    sheet: l.sheet,
                    container: b,
                    r8: "hidden",
                    Po: e,
                    Ct: f,
                    Gt: g,
                    Z_: r,
                    Y: c,
                    viewport: d,
                    Ch: k,
                    rG: a,
                  }),
                }),
                X4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: X4(u2b, { ud: m, HNa: !1, Qo: A5, scale: x }),
                }),
                X4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: X4(e5, {
                    sheet: l.sheet,
                    kd: x,
                    Ad: x,
                    Qo: A5,
                    bE: w3b,
                    OE: v3b,
                    Dqa: t,
                  }),
                }),
                X4("div", {
                  ref: p,
                  className: "zm537g",
                  children: X4(f5, {
                    sheet: l.sheet,
                    kd: x,
                    Ad: x,
                    Qo: A5,
                    bE: w3b,
                    OE: v3b,
                    Dqa: v,
                  }),
                }),
              ],
            });
          }),
          B5 = ({ sheet: a, bha: b, cha: c, Y: d, viewport: e }) =>
            j5(() => {
              var f = e === null || e === void 0 ? void 0 : __c.Fu(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new $t(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var M2b = class {
          constructor(a) {
            this.aC = a;
            this.q8a = __c.dU;
            this.Geb = r5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.Aeb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !NH(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !NH(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !NH(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !NH(b, c, k)) continue;
                      break;
                    default:
                      throw new E(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.q8a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.qa(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.qa(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.qa(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new E(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || NH(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || NH(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.qa(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = NH(b, c, l)))
                          (m = h), (n = k), (p = b.qa(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.Aeb = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Aa.ref) &&
                g.span.Qb === g.span.Uc &&
                g.span.Mb === g.span.Gc
              ) {
                var h = this.aC.yv(b, c, d);
                b = this.aC.xqa(
                  b,
                  c,
                  d,
                  __c.bh({ Pg: void 0, textAlign: void 0 })
                );
                var { Pg: k, textAlign: l } = __c.tg(__c.ah, b);
                if (k === "overflow")
                  return __c.dLa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Aa.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.hk.type : void 0
                  );
              }
            };
          }
        };
        var y3b = c5(function (a) {
          const b = a.sheet;
          var c = a.ah;
          const d = a.Uvb,
            e = a.Y,
            f = a.hsa,
            g = a.oeb;
          a = a.overflow;
          const h = W4();
          S2b(
            () =>
              i5(() => {
                const p = D(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = d5((p) => f.Geb(b, p, d, g), [f, b, d, g]);
          var l = d5(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = i2b(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return X4("svg", {
            ref: h,
            role: "presentation",
            className: $4("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, ck: t, dk: v }) =>
              X4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: u, p2: x }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var z3b;
        z3b = Symbol.iterator;
        var A3b = class {
          get size() {
            return this.Lga;
          }
          get([a, b]) {
            return (a = this.AE.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.AE.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.AE.get(a);
            d == null && ((d = new Map()), this.AE.set(a, d));
            d.set(b, c);
            this.Lga++;
            return this;
          }
          clear() {
            this.AE.clear();
            this.Lga = 0;
          }
          delete([a, b]) {
            const c = this.AE.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.Lga--;
            c.size === 0 && this.AE.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.AE) for (const [d, e] of c) a([b, d], e);
          }
          *[z3b]() {
            for (const [a, b] of this.AE)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Lga = 0;
            this.AE = new Map();
          }
        };
        var B3b,
          C3b,
          D3b,
          E3b,
          F3b,
          G3b,
          H3b,
          K2b = __c.Fw("285688d5", !1),
          I3b,
          J3b = class extends o5 {
            render() {
              const { Daa: a, ...b } = this.props,
                c = this.props.sheet;
              return Z4("div", {
                ref: this.gZa,
                className: $4(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  (a === null || a === void 0 ? void 0 : a.gHa) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.gHa.range,
                      wv: !0,
                      xv: !0,
                      className: "_0C8M3w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.q2a) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.q2a.range,
                      wv: !1,
                      xv: !0,
                      className: "_7n44yg",
                    }),
                  (a === null || a === void 0 ? void 0 : a.KNa) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.KNa.range,
                      wv: !0,
                      xv: !1,
                      className: "fF5r6w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.d1a) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.d1a.range,
                      wv: !1,
                      xv: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = i5(() => {
                var b = this.props,
                  c = b.Y;
                b = b.sheet;
                const d = this.gZa.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.Cc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.gZa = kx();
            }
          };
        ({
          c: [I3b, D3b],
        } = x5(J3b, [], [Sc], o5));
        D3b();
        var C5;
        new ((B3b = class extends w5 {
          constructor() {
            super(C5);
            E3b();
          }
        }),
        (() => {
          class a extends (F3b = o5) {
            static A(b) {
              P(b, { Jya: j5, bounds: j5 });
            }
            get Jya() {
              const b = this.props.viewport,
                c = this.props.wv,
                d = this.props.xv;
              return b == null || (!c && !d)
                ? b
                : j5(() => {
                    const e = __c.Fu(b.get());
                    return xu({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.hN,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.rG,
                g = this.props.wv,
                h = this.props.xv;
              return Z4("div", {
                ref: this.Wva,
                className: $4("i0YQww", this.props.className),
                children: [
                  X4("div", {
                    ref: this.PUa,
                    className: "vUKoKg",
                    children: X4("div", {
                      ref: this.QUa,
                      children: X4(D5, {
                        hN: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Po: this.props.Po,
                        zC: this.props.zC,
                        Ch: this.props.Ch,
                        lZ: this.props.lZ,
                        Y: this.props.Y,
                        ah: this.ah,
                        F6: this.F6,
                        YR: this.YR,
                      }),
                    }),
                  }),
                  X4(this.Pja, {}),
                  f && X4(f, { sheet: c, range: e, wv: g, xv: h }),
                ],
              });
            }
            componentDidMount() {
              const b = i5(() => {
                  var h = this.props,
                    k = h.Y,
                    l = h.sheet;
                  const m = h.range;
                  var n = this.Wva.current;
                  const p = this.PUa.current;
                  h = this.QUa.current;
                  k = k ? k.get() : 1;
                  const q = m ? l.qa(m.Gc) + m.Gc.width - l.qa(m.Mb) : l.width,
                    r = m ? l.ra(m.Uc) + m.Uc.height - l.ra(m.Qb) : l.height;
                  n &&
                    ((n.style.width = `${q * k}px`),
                    (n.style.height = `${r * k}px`));
                  p &&
                    ((p.style.width = `${q * k}px`),
                    (p.style.height = `${r * k}px`));
                  n = l.direction === "rtl";
                  n = m ? l.qa(m.Mb) * k * (n ? 1 : -1) : 0;
                  l = m ? -l.ra(m.Qb) * k : 0;
                  h && (h.style.transform = `translate(${n}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.Z_;
              const e = this.props.wv,
                f = this.props.xv,
                g =
                  e || f
                    ? d === null || d === void 0
                      ? void 0
                      : d(c, e, f)
                    : void 0;
              d = i5(() => {
                const h = this.Wva.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const x = g.get();
                    var q;
                    h.style.position =
                      (q = x.position) !== null && q !== void 0 ? q : k;
                    var r;
                    h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                    var t;
                    h.style.left = p
                      ? "unset"
                      : (t = x.left) !== null && t !== void 0
                      ? t
                      : m;
                    var v;
                    h.style.right = p
                      ? (v = x.right) !== null && v !== void 0
                        ? v
                        : n
                      : "unset";
                    var u;
                    h.style.transform =
                      (u = x.transform) !== null && u !== void 0 ? u : "unset";
                  }
                }
              });
              __c.Cc(this, [b, d]);
            }
            get bounds() {
              const b = this.props.sheet,
                c = this.props.range;
              if (b.layout.cols.empty || b.layout.rows.empty)
                return { Mb: void 0, Gc: void 0, Qb: void 0, Uc: void 0 };
              var d, e, f, g;
              return {
                Mb:
                  (d = c === null || c === void 0 ? void 0 : c.Mb) !== null &&
                  d !== void 0
                    ? d
                    : b.layout.cols.first(),
                Gc:
                  (e = c === null || c === void 0 ? void 0 : c.Gc) !== null &&
                  e !== void 0
                    ? e
                    : b.layout.cols.last(),
                Qb:
                  (f = c === null || c === void 0 ? void 0 : c.Qb) !== null &&
                  f !== void 0
                    ? f
                    : b.layout.rows.first(),
                Uc:
                  (g = c === null || c === void 0 ? void 0 : c.Uc) !== null &&
                  g !== void 0
                    ? g
                    : b.layout.rows.last(),
              };
            }
            constructor(...b) {
              super(...b);
              this.Wva = (C5.A(this), kx());
              this.PUa = kx();
              this.QUa = kx();
              this.YR = new K3b();
              this.Vvb = j5(
                () =>
                  [...this.ah.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.rows.Ie(c, d)
                  ),
                { equals: __c.Ir() }
              );
              this.Tvb = j5(
                () =>
                  [...this.F6.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.cols.Ie(c, d)
                  ),
                { equals: __c.Ir() }
              );
              this.Pja = c5(() =>
                X4(this.props.h5a, {
                  ah: this.Vvb,
                  Uvb: this.Tvb,
                  oeb: this.YR.xeb,
                  range: this.props.range,
                })
              );
              this.ah = j5(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.Y,
                    f =
                      (c = this.Jya) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.la.y - g : c.Qb ? d.ra(c.Qb) : 0;
                  f = f ? f.br.y + g : c.Uc ? d.ra(c.Uc) + c.Uc.height : 0;
                  g = new Map();
                  for (
                    let k = c.Qb;
                    k != null && c.Uc != null && d.layout.rows.Ie(k, c.Uc) <= 0;
                    k = d.layout.rows.next(k)
                  ) {
                    const l = d.ra(k);
                    if (!(l + k.height < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: u5.shallow }
              );
              this.F6 = j5(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.Y,
                    f =
                      (c = this.Jya) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.la.x - g : c.Mb ? d.qa(c.Mb) : 0;
                  f = f ? f.br.x + g : c.Gc ? d.qa(c.Gc) + c.Gc.width : 0;
                  g = new Map();
                  for (
                    let k = c.Mb;
                    k != null && c.Gc != null && d.layout.cols.Ie(k, c.Gc) <= 0;
                    k = d.layout.cols.next(k)
                  ) {
                    const l = d.qa(k);
                    if (!(l + k.width < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: u5.shallow }
              );
            }
          }
          ({
            c: [C5, E3b],
          } = x5(a, [], [Sc], F3b));
        })(),
        B3b)();
        var K3b = class {
            constructor() {
              this.cells = new A3b();
              this.dxa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = v5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.xeb = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = v5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.$Ia;
              };
            }
          },
          D5;
        new ((C3b = class extends w5 {
          constructor() {
            super(D5);
            G3b();
          }
        }),
        (() => {
          class a extends (H3b = o5) {
            static A(b) {
              P(b, { CK: v5.shallow, lq: j5, KGa: t5, I9: t5.bound });
            }
            get lq() {
              var b;
              const c =
                (b = this.props.Po) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.hE(c);
            }
            render() {
              var b;
              return Z4("div", {
                ref: P2b(
                  this.Fd,
                  (b = this.lq) === null || b === void 0 ? void 0 : b.Yl
                ),
                children: [
                  X4("div", { ref: this.Fma, className: "_5YlOqQ" }),
                  X4("div", { ref: this.Hma, className: "_XCmKw" }),
                  this.CK.map((c) => c.Mob),
                ],
              });
            }
            componentDidMount() {
              const b = k5(
                  () => [
                    this.props.sheet,
                    this.props.F6.get(),
                    this.props.ah.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.G8a();
                    this.KGa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = i5(() => {
                  var e = this.props,
                    f = e.Y;
                  e = e.sheet;
                  const g = this.Fd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.CK.map((e) => L2b(e));
              __c.Cc(this, [c, b, ...d]);
            }
            G8a() {
              const b = D(this.Fma.current),
                c = D(this.Hma.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.fDa.length = 0;
              this.CK.length = 0;
            }
            KGa(b, c) {
              const d = D(this.Fma.current),
                e = D(this.Hma.current),
                f = [],
                g = new Map();
              for (const h of this.fDa)
                c.has(h.na) ? g.set(h.na, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new L3b(this.I9, h)),
                    d.appendChild(c.N8),
                    e.appendChild(c.P8),
                    this.fDa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            I9(b, c) {
              const d = this.props.lZ,
                e = this.props.sheet,
                f = this.props.container,
                g = this.props.YR;
              b = new M3b(
                this.props.hN,
                this.props.zC,
                this.props.Ch,
                d(b, c),
                e,
                b,
                c,
                f,
                g.dxa,
                this.Uaa,
                this.Taa
              );
              __c.Cc(this, L2b(b));
              this.CK.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Fd = (D5.A(this), kx());
              this.Fma = kx();
              this.Hma = kx();
              this.fDa = [];
              this.CK = [];
              this.Uaa = r5((c) => {
                const d = this.props.ah.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.Taa = r5((c) => {
                const d = this.props.F6.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [D5, G3b],
          } = x5(a, [], [Sc], H3b));
        })(),
        C3b)();
        var L3b = class {
            static A(a) {
              P(a, { update: t5 });
            }
            update(a, b, c) {
              [this.N8, this.P8].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.na = b;
              for (const [d] of c)
                (c = this.CK.get(d)),
                  c ||
                    ((c = this.I9(d, b)),
                    this.CK.set(d, c),
                    this.N8.appendChild(c.M8),
                    this.P8.appendChild(c.pL)),
                  c.update(b);
            }
            hide() {
              [this.N8, this.P8].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.I9 = a;
              this.na = b;
              this.N8 = (L3b.A(this), document.createElement("div"));
              this.P8 = document.createElement("div");
              this.CK = new Map();
            }
          },
          M3b = class {
            static A(a) {
              P(a, {
                z9: v5.ref,
                na: v5.ref,
                hra: j5,
                update: t5,
                Ts: j5,
                attrs: j5.struct,
                Lsa: j5,
                hv: j5,
                renderer: j5,
                $Ia: j5.struct,
              });
            }
            get hra() {
              if (!K2b) return !1;
              const a = this.Ts;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.hN(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.na &&
                ((this.na = a),
                (this.lz.na = a),
                this.Coa && this.Coa(),
                (this.Coa = this.dxa(this.na, this.col, this)));
            }
            get Mob() {
              return this.z9;
            }
            get Ts() {
              const a = this.sheet.layout.cells.get(this.na, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.lz.attrs;
              return {
                Pg: a === null || a === void 0 ? void 0 : a.Pg,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get Lsa() {
              var a = this.lz.span;
              if (!a) return !1;
              if (a.Qb === a.Uc && a.Mb === a.Gc) return !0;
              var b = this.Uaa("first");
              const c = this.Uaa("last"),
                d = this.Taa("first"),
                e = this.Taa("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.Ie(a.Qb, b) >= 0 &&
                this.sheet.layout.rows.Ie(a.Qb, c) <= 0
                  ? a.Qb
                  : b;
              a =
                this.sheet.layout.cols.Ie(a.Mb, d) >= 0 &&
                this.sheet.layout.cols.Ie(a.Mb, e) <= 0
                  ? a.Mb
                  : d;
              return b === this.na && a === this.col;
            }
            get hv() {
              const a = this.sheet,
                b = this.na,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, na: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.aob.Hd(c, b);
                case "sheet-item":
                  return this.container.Iya.Hd(c, b);
                case "sheet-element":
                  return this.container.gsb.Hd(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.Ts;
              if (a && this.Lsa && (a.content.ref || a.Aa.ref))
                return this.zC({
                  context: { container: this.hv, attrs: this.attrs },
                  ep: this.Mua,
                  Ch: this.Ch,
                });
            }
            get $Ia() {
              this.aJa.reportObserved();
              var a = X2b(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.H3 : this.pD),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, v;
              this.hN = a;
              this.zC = b;
              this.lz = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.dxa = k;
              this.Uaa = l;
              this.Taa = m;
              this.M8 = (M3b.A(this), document.createElement("div"));
              this.pL = document.createElement("div");
              this.kD = document.createElement("div");
              this.pD = document.createElement("div");
              this.H3 = document.createElement("div");
              this.aJa = W2b("content size atom");
              this.Mua = t5(() => this.aJa.reportChanged());
              this.na = g;
              this.M8.className = "_2JFriw";
              this.pL.className = "imy9ug";
              this.kD.className = $4("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.Ts) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.Ts) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((v = this.Ts) === null || v === void 0
                    ? void 0
                    : (t = v.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.hra,
              });
              this.pD.className = "_30B9pw";
              this.kD.appendChild(this.pD);
              this.pL.appendChild(this.kD);
              this.H3.className = "G7zH2w";
              this.Coa = k(this.na, this.col, this);
              this.Ch = (u) => X4(c, { ...u, ep: this.Mua });
            }
          };
        var N3b, O3b, P3b, l5;
        new ((N3b = class extends w5 {
          constructor() {
            super(l5);
            O3b();
          }
        }),
        (() => {
          class a extends (P3b = o5) {
            static A(b) {
              P(b, { Daa: j5 });
            }
            render() {
              const {
                hN: b,
                sheet: c,
                container: d,
                Po: e,
                Z_: f,
                zC: g,
                ne: h,
                Ch: k,
                viewport: l,
                rG: m,
                g2a: n = !1,
              } = this.props;
              if (!c.layout.cols.empty && !c.layout.rows.empty)
                return X4("div", {
                  className: $4(
                    "SNkrHw",
                    c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                    { RaA0Nw: n }
                  ),
                  ...h,
                  children: X4(I3b, {
                    hN: b,
                    zC: g,
                    Ch: k,
                    h5a: this.Pja,
                    lZ: this.lZ,
                    sheet: c,
                    container: d,
                    Po: e,
                    Z_: f,
                    Y: this.Y,
                    viewport: l,
                    rG: m,
                    Daa: this.Daa,
                  }),
                });
            }
            get Daa() {
              var b = this.props.sheet;
              const c = {},
                d = b.view.freeze.vV
                  ? b.layout.$d.get(b.view.freeze.vV)
                  : void 0,
                e = b.view.freeze.VG
                  ? b.layout.Nd.get(b.view.freeze.VG)
                  : void 0,
                f = b.layout.rows.first(),
                g = b.layout.rows.last(),
                h = b.layout.cols.first(),
                k = b.layout.cols.last();
              if (f != null && g != null && h != null && k != null) {
                var l = e ? b.layout.cols.next(e) : h;
                b = d ? b.layout.rows.next(d) : f;
                d && e && (c.gHa = { range: { Mb: h, Qb: f, Gc: e, Uc: d } });
                d && l && (c.q2a = { range: { Mb: l, Qb: f, Gc: k, Uc: d } });
                e && b && (c.KNa = { range: { Mb: h, Qb: b, Gc: e, Uc: g } });
                b && l && (c.d1a = { range: { Mb: l, Qb: b, Gc: k, Uc: g } });
                return c;
              }
            }
            get Y() {
              return this.props.Y ? this.props.Y : j5(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.Pja =
                (l5.A(this),
                c5((c) => {
                  const {
                    sheet: d,
                    hsa: e,
                    Y: f,
                    r8: g = "hidden",
                  } = this.props;
                  return X4(z5, {
                    sheet: d,
                    range: c.range,
                    Y: f,
                    children: X4(y3b, {
                      ...c,
                      sheet: d,
                      Y: this.Y,
                      hsa: e,
                      overflow: g,
                    }),
                  });
                }));
              this.lZ = (c, d) =>
                new __c.wLa(
                  this.props.aC,
                  this.props.ez,
                  this.props.sheet,
                  c,
                  d,
                  this.Y,
                  this.Ct,
                  this.Gt
                );
              this.Ct = (c, d) => {
                var e, f;
                return (e = (f = this.props).Ct) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
              this.Gt = (c, d) => {
                var e, f;
                return (e = (f = this.props).Gt) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
            }
          }
          ({
            c: [l5, O3b],
          } = x5(a, [], [Sc], P3b));
        })(),
        N3b)();
        __c.DLa = {
          ehb: function (a) {
            const b = a.An,
              c = a.Gd,
              d = a.hd,
              e = a.Wl,
              f = a.aC,
              g = a.ez,
              h = a.kX;
            r2b({ dz: a.dz, Ef: a.Ef, Jtb: a.PO, Qa: a.Qa });
            const k = N2b({ zC: h, aC: f, ez: g, Nx: void 0 });
            b.lka = H2b({ Ip: k });
            c.Qja = x2b({ Ip: k });
            ({ Rja: a } = E2b({ Ip: k, le: e(), eZa: new r3b() }));
            d.Pp.kka = a;
            const { m3a: l, n3a: m, l3a: n } = w2b();
            return {
              VEa: c5((p) =>
                X4(Y2b, {
                  ...p,
                  container: void 0,
                  Ip: k,
                  k5a: l,
                  l5a: m,
                  i5a: n,
                  Ch: Z2b,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/621d4baa45df2264.js.map
