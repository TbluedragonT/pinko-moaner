(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 78999: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(841629);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var C = __c.C;
        var W3b = function (a, b, c, d) {
            c = new V3b(c, d);
            C(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            C(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.Eia(a, b);
          },
          Y3b = function (a) {
            return {
              ...__c.oeb,
              ...E5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.zia.width,
                height: a.zia.height,
              },
              lb: a.lb.map(X3b),
            };
          },
          Z3b = function (a) {
            switch (a.lC) {
              case 0:
                var b = __c.Dk.vc().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.dg("color", a.color);
                b = b
                  .bc(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.OK,
                  ...F5,
                  ...E5,
                  Ia: (c = a.Ia) !== null && c !== void 0 ? c : 0,
                  text: b,
                  Mg: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.OK, ...F5, ...E5, text: b, Mg: 2 }
                );
              default:
                throw new E(a);
            }
          },
          J5 = function ({ content: a, fill: b, border: c, X: d }) {
            b = { ...__c.$db, fill: G5(b), border: H5(c), X: I5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: Y3b(a) };
              case "text":
                return { ...b, element: Z3b(a) };
              case "layout":
                return { ...b, element: $3b(a) };
              default:
                throw new E(a);
            }
          },
          $3b = function ({
            cells: a,
            border: b,
            fill: c,
            X: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.aeb,
              ...F5,
              ...E5,
              J: F5.width,
              W: F5.height,
              fill: G5(c),
              border: H5(b),
              direction: 1,
              X: I5(d),
              cells: new Map(a.map((k) => [k.id, J5(k)])),
              behavior: {
                rules: [
                  {
                    Ng: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      eh: a4b(a),
                    },
                  },
                ],
              },
              Te: void 0,
            };
          },
          a4b = function (a) {
            return new Map(a.map((b) => [b.id, b4b(b)]));
          },
          b4b = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.$Ca,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.XQ,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          H5 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.$D,
              all: a
                ? {
                    ...__c.MQ,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    Tf: !0,
                  }
                : void 0,
            };
          },
          I5 = function (a) {
            return {
              ...__c.WQ,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          X3b = function (a) {
            return {
              ...__c.peb,
              ...a,
              fill: G5(a.fill),
              stroke: c4b(a.stroke),
            };
          },
          c4b = function (a) {
            return a ? { ...__c.MQ, color: a.color, weight: a.weight } : void 0;
          },
          G5 = function (a) {
            var b;
            const c = {
              ...__c.zv,
              Ia:
                (b = a === null || a === void 0 ? void 0 : a.Ia) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, eb: a.eb };
              case void 0:
                return c;
              default:
                throw new E(a);
            }
          },
          i4b = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            d4b(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                e4b(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, J5(f));
                  g = !0;
                });
                g ||
                  (K5(e.fill, f.fill), f4b(e.border, f.border), g4b(e.X, f.X));
              },
              (e) => J5(e)
            );
            h4b(a.behavior, b, c);
            K5(a.fill, b.fill);
            g4b(a.X, b.X);
            f4b(a.border, b.border);
            var d;
            a.Ia = (d = b.Ia) !== null && d !== void 0 ? d : 0;
          },
          h4b = function (a, b, c) {
            L5(
              a.rules,
              [b],
              (d) => {
                j4b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                j4b(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                d4b(
                  d.grid.eh,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.ra =
                          k === null || k === void 0 ? void 0 : k.ra),
                        (g.padding.Fa =
                          k === null || k === void 0 ? void 0 : k.Fa),
                        (g.padding.qa =
                          k === null || k === void 0 ? void 0 : k.qa),
                        (g.padding.Ka =
                          k === null || k === void 0 ? void 0 : k.Ka));
                    g.alignSelf = p;
                  },
                  (g) => b4b(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Ng: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    eh: a4b(d.cells),
                  },
                };
              }
            );
          },
          k4b = function (a, b) {
            L5(
              a.lb,
              b.lb,
              (e, f) => {
                e.d = f.d;
                K5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(c4b(f.stroke));
              },
              (e) => X3b(e)
            );
            const { viewBox: c, width: d } = Y3b(b);
            a.width = d;
            __c.xu(a.viewBox).equals(__c.xu(c)) || (a.viewBox = c);
          },
          e4b = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? k4b(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Dk.domain.Nb(__c.Dk.ka(a.text), Z3b(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? i4b(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          d4b = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          L5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          K5 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.eb.set(void 0);
                var c;
                a.Ia = (c = b.Ia) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.eb.ref && __c.p4a.domain.Nb(a.eb.ref, b.eb)) break;
                a.color = void 0;
                a.eb.set(b.eb);
                var d;
                a.Ia = (d = b.Ia) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.eb.set(void 0);
            }
          },
          g4b = function (a, b) {
            b = I5(b);
            a.all = b.all;
            a.dD = b.dD;
            a.bD = b.bD;
            a.cD = b.cD;
            a.aD = b.aD;
          },
          f4b = function (a, b) {
            b = H5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.aE.domain.Nb(__c.aE.ka(c), b) : !c && !b));
            c && a.all.set(b);
          },
          j4b = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          m4b = function (a, b, c, d) {
            let e = a.JWa.get(b);
            if (e) return e;
            e = {
              ux: new l4b(c.kw, b, d, c.Nra),
              DGa: void 0,
              sQa: void 0,
              rSa: __c.MV.mode,
            };
            a.JWa.set(b, e);
            return e;
          },
          o4b = function (a, b, c, d, e) {
            var f, g;
            e = m4b(a, c, b, e);
            const h = e.ux,
              k = e.sQa,
              l = e.DGa,
              m = e.rSa;
            c = __c.PP.ka(c);
            const n =
              ((f = (g = a.Gz).Vqa) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.MV;
            (h.Ej === k && n4b.structural(c, l) && n.mode === m) ||
              ((e.DGa = c),
              (e.sQa = h.Ej),
              (e.rSa = n.mode),
              (b = b.render(h, n)),
              a.dlb.update(d, b),
              W3b(
                d,
                b,
                (p, q) => a.YP.dsa.set(p, q),
                (p, q, r) => a.YP.refs.set(p, { ref: q, key: r })
              ));
          },
          r4b = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.Rlb());
            c.push(
              p4b(
                () => {
                  a: {
                    var e = new q4b();
                    for (const f of b)
                      if ((e.cQ(f), e.Rpa)) {
                        e = e.Rpa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.Xb.isLoaded(e) || a.$sa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) C(f.type === "layout"), a.xk.Afa(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          s4b = function (a, b) {
            return {
              vD: ({ Vi: c }) => {
                var d;
                const { ux: e } = m4b(a.renderer, c, b, a.Z1),
                  f = __c.RP.create([]),
                  g = [];
                g.push(r4b(a.xdb, f));
                g.push(
                  p4b(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.Gz).Vqa) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.PP.ka(c),
                        e.Ej,
                      ];
                    },
                    () => {
                      o4b(a.renderer, b, c, f, a.Z1);
                    },
                    { fireImmediately: !0, equals: n4b.structural }
                  )
                );
                const h =
                  (d = b.Eua) === null || d === void 0
                    ? void 0
                    : d.call(b, { ux: e });
                h && g.push(h);
                return {
                  Na: f,
                  bu: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          M5 = __webpack_require__(519427),
          n4b = M5.comparer,
          t4b = M5.computed,
          N5 = M5.observable,
          p4b = M5.reaction,
          u4b = M5.runInAction;
        var v4b = class {
          static A(a) {
            __c.P(a, { Cnb: N5.ref, Neb: N5.ref });
          }
          constructor() {
            this.Vqa = (v4b.A(this), void 0);
          }
        };
        var w4b = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          l4b = class {
            static A(a) {
              __c.P(a, { Oe: t4b });
            }
            get tQa() {
              var a = this.Z1,
                b = this.Vi,
                c = this.Nra;
              let d = a.sources.get(b);
              d || ((d = N5.box(c)), a.sources.set(b, d));
              return d;
            }
            get Ej() {
              return this.tQa.get();
            }
            get Oe() {
              return this.kw.Du({ type: "dict", value: this.Vi });
            }
            Xl(a) {
              this.tQa.set(
                a instanceof Function
                  ? { ...this.Ej, ...a() }
                  : { ...this.Ej, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.kw = a;
              this.Vi = b;
              this.Z1 = c;
              this.Nra = d;
              l4b.A(this);
            }
          };
        var V3b = class {
          H6(a, b) {
            this.xWa(a, b);
            b.ref && this.exa(a, b.ref, b.key);
          }
          fQ(a, b) {
            b.ref && this.exa(a.text, b.ref, b.key);
          }
          rDa(a, b) {
            switch (b.content.type) {
              case "shape":
                C(a.element.type === "shape");
                this.H6(a.element, b.content);
                break;
              case "text":
                C(a.element.type === "text");
                this.fQ(a.element, b.content);
                break;
              case "layout":
                C(a.element.type === "layout");
                this.Eia(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          Eia(a, b) {
            this.xWa(a, b);
            b.ref && this.exa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                C(!!d && !!a),
                this.rDa(d, a);
          }
          constructor(a, b) {
            this.xWa = a;
            this.exa = b;
          }
        };
        var E5 = { locked: !0, Ck: { eZ: !1, hW: !1 }, hi: !0 },
          F5 = { top: 0, left: 0, width: 1, height: 1 };
        var x4b = class {
          constructor(a) {
            this.xk = a;
            this.update = (b, c) => {
              L5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      i4b(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...$3b(d),
                        ...E5,
                        width: d.minWidth,
                        height: d.minHeight,
                        J: d.minWidth,
                        W: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                C(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.J = c.minWidth),
                  (d.W = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.xk.Afa(d);
            };
          }
        };
        var y4b = class {
          constructor(a, b, c) {
            this.dlb = a;
            this.YP = b;
            this.Gz = c;
            this.JWa = new WeakMap();
          }
        };
        var z4b = class {
            static A(a) {
              __c.P(a, { $sa: N5.shallow });
            }
            constructor(a, b) {
              this.Xb = a;
              this.xk = b;
              this.$sa = (z4b.A(this), new Set());
              this.bqa = new Set();
              this.Rlb = () => {
                this.taa ||
                  (this.taa = __c.Zga(this.Xb).subscribe((d) => {
                    u4b(() => {
                      this.$sa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.bqa.add(c);
                return () => {
                  this.bqa.delete(c);
                  this.bqa.size <= 0 &&
                    this.taa &&
                    (this.taa.unsubscribe(), (this.taa = void 0));
                };
              };
            }
          },
          q4b = class extends __c.yC {
            cQ(a, b) {
              this.Rpa || super.cQ(a, b);
            }
            fQ(a) {
              this.Rpa =
                (a = a.text
                  .Ox("font-family")
                  ["font-family"].values()
                  .next().value) && __c.Vr(a).id;
            }
          };
        var A4b = !1,
          B4b = class {
            register(a, b) {
              this.oD.has(a) ||
                (this.oD.set(a, b),
                A4b || (__c.QP.set(a, s4b(this, b)), (A4b = !0)));
            }
            get(a) {
              return this.oD.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.Z1 = b;
              this.Gz = c;
              this.Xb = d;
              this.xk = e;
              this.oD = new Map();
              this.xdb = new z4b(this.Xb, this.xk);
            }
          };
        var C4b = class {
            constructor() {
              this.dsa = new __c.WF();
              this.refs = new __c.WF();
            }
          },
          D4b = class {
            getContext(a) {
              return this.YP.refs.get(a);
            }
            BM(a) {
              return this.YP.dsa.get(a);
            }
            constructor(a, b, c) {
              this.YP = a;
              this.Z1 = b;
              this.renderer = c;
            }
          };
        __c.VQa = {
          jhb: function (a) {
            const b = new v4b(),
              c = new C4b(),
              d = new y4b(new x4b(a.xk), c, b),
              e = new w4b();
            a = new B4b(d, e, b, a.Xb, a.xk);
            return { Gz: b, BPb: new D4b(c, e, d), K6: a, YP: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/2405bcb903c522ad.js.map
