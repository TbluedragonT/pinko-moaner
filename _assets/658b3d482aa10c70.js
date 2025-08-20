(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [86783],
  {
    /***/ 910906: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var I7b = function (a) {
            a.VK && (a.VK(), (a.VK = null));
            const b = a.props.Tab;
            b.forEach((c) => {
              window.addEventListener(c, a.xFa);
            });
            a.VK = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.xFa);
              });
            };
          },
          O7b = function (a) {
            return J7b((b) => {
              const [{ store: c, va: d }] = K7b(() => {
                const e = new L7b(),
                  f = new M7b(e);
                return { store: e, va: f };
              });
              return C6(N7b, {
                S2: d.reset,
                children: C6(__c.uqb, {
                  khb: d,
                  lhb: c,
                  lPa: a.uv.contains(b.url),
                  children: ({ uo: e }) =>
                    C6(__c.aC, {
                      url: b.url,
                      store: a.uv,
                      Yn: a.ut,
                      Gx: a.Gx,
                      Um: a.Um,
                      uo: e,
                      wB: b.wB,
                      BU: b.BU,
                    }),
                }),
              });
            });
          },
          Q7b = function (a) {
            return P7b(function (b) {
              return C6("div", {
                style: { width: "100%", height: "100%", all: "initial" },
                children: C6(a.le, {
                  text: b.text,
                  animation: void 0,
                  rd: void 0,
                  nb: void 0,
                  Qa: void 0,
                  Cf: [],
                  writingMode: 1,
                }),
              });
            });
          },
          C6 = __webpack_require__(443763).jsx;
        var D6 = __webpack_require__(875604),
          R7b = D6.Component,
          P7b = D6.memo,
          K7b = D6.useState;
        var S7b = __webpack_require__(519427),
          E6 = S7b.action,
          T7b = S7b.observable;
        var J7b = __webpack_require__(446474).Pi;
        var U7b = class extends R7b {
          render() {
            const {
              children: a,
              component: b = "div",
              tpb: c,
              Vda: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.N5a;
                return f;
              }, {}));
            return C6(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Vda && I7b(this);
          }
          componentDidUpdate() {
            this.props.Vda && I7b(this);
          }
          componentWillUnmount() {
            this.VK && (this.VK(), (this.VK = null));
          }
          constructor(...a) {
            super(...a);
            this.Aka = this.VK = null;
            this.N5a = (b) => {
              this.Aka = b.nativeEvent;
            };
            this.xFa = (b) => {
              const c = this.props.Vda,
                d = this.Aka === b;
              c && !d && c(b);
              this.Aka = null;
            };
          }
        };
        var N7b = (a) =>
          C6(U7b, {
            tpb: ["onMouseDown", "onTouchStart"],
            Tab: ["mousedown", "touchstart"],
            Vda: a.S2,
            children: a.children,
          });
        var L7b = class {
            static A(a) {
              __c.P(a, { uo: T7b.ref });
            }
            constructor() {
              this.uo = (L7b.A(this), !0);
            }
          },
          M7b = class {
            static A(a) {
              __c.P(a, {
                onDoubleClick: E6.bound,
                onTouchEnd: E6.bound,
                reset: E6.bound,
              });
            }
            onDoubleClick() {
              this.store.uo = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.wP
                  ? (window.clearTimeout(this.wP),
                    (this.wP = void 0),
                    (this.store.uo = !1))
                  : (this.wP = window.setTimeout(
                      () => (this.wP = void 0),
                      300
                    )));
            }
            reset() {
              this.store.uo = !0;
            }
            IR() {
              this.wP && window.clearTimeout(this.wP);
            }
            constructor(a) {
              this.store = a;
              this.wP = (M7b.A(this), void 0);
            }
          };
        __c.YQa = {
          hhb: function (a) {
            const b = O7b({
                Gx: (d, e) =>
                  a.H.error(d, {
                    re: "widget: ",
                    extra: new Map(Object.entries(e)),
                  }),
                Um: a.Um,
                uv: a.uv,
                ut: a.ut,
              }),
              c = Q7b({ le: a.le });
            return { p4a: b, a5a: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/658b3d482aa10c70.js.map
