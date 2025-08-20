(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 994944: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(59534);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var P = __c.P;
        var A0b = function (a, b = "medium") {
            if (a !== null && a !== void 0 && a.length) {
              var c = window.devicePixelRatio || 1,
                d = (typeof b === "number" ? b : z0b(b)) * c;
              return [...a].sort((e, f) => {
                e = e.width;
                f = f.width;
                return e > d && f < d
                  ? -1
                  : e < d && f > d
                  ? 1
                  : Math.abs(e - d) - Math.abs(f - d);
              })[0].url;
            }
          },
          G0b = function (a, b) {
            class c {
              static A(d) {
                P(d, { Ee: F4, Uka: F4 });
              }
              get Ee() {
                switch (this.Uka) {
                  case "date":
                    return new B0b(this.sn, b.language || "en-AU");
                  case "select":
                    return new C0b(this.sn);
                  case "mention":
                    return new D0b(this.sn);
                  case "embed":
                    return new E0b(this.sn);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new E(this.Uka);
                }
              }
              get Uka() {
                var d;
                return (d = this.sn.Jo) === null || d === void 0
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                this.context = d;
                this.sn = (c.A(this), void 0);
                this.sn = __c.D(a.yv(d.sheet, d.na, d.column));
              }
            }
            return F0b((d) => new c(d).Ee);
          },
          I0b = function () {
            const a = G4(() => new Map(), []);
            return {
              Ueb: (b) => {
                if (a.has(b)) return __c.D(a.get(b));
                const c = H0b();
                a.set(b, c);
                return c;
              },
            };
          },
          J0b = function (a, b) {
            return G4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.D(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          Q0b = function ({
            children: a,
            keyFrame: b,
            JZa: c,
            ariaLive: d,
            EPa: e = !1,
            y6a: f,
            rna: g,
            obb: h,
            TCb: k,
            SIa: l,
            QKa: m,
            RCb: n,
            Aub: p,
          }) {
            const { Ueb: q } = I0b(),
              { Udb: r, Opb: t } = K0b(b, a),
              v = J0b(
                (u) => () => {
                  (e === !1 || (typeof e === "function" && !e(u))) && t(u);
                },
                [t, e]
              );
            return H4("div", {
              className: I4(g, "_9GxJfQ", {
                KwB0XQ: l === "hidden",
                WV1Mmw: c === "fill-height",
                _2uSJxw: c === "flex-grow",
              }),
              children: H4("div", {
                className: I4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: u, element: x }) =>
                    H4(
                      L0b,
                      {
                        in: u === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(u),
                        onExited: v(u),
                        children: (y) =>
                          H4(M0b.Provider, {
                            value: y,
                            children: H4("div", {
                              className: I4("KxXR9g", n, {
                                KwB0XQ: m === "hidden",
                              }),
                              ref: q(u),
                              "aria-hidden":
                                y === N0b || y === O0b || y === P0b,
                              children: u === b ? a : x,
                            }),
                          }),
                      },
                      u
                    )
                  ),
                  r.every((u) => u.key !== b) &&
                    H4(
                      L0b,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : v(b),
                        children: (u) =>
                          H4(M0b.Provider, {
                            value: u,
                            children: H4("div", {
                              className: I4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                u === N0b || u === O0b || u === P0b,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          K0b = function (a, b) {
            const [c, d] = R0b(() => [{ key: a, element: b }]);
            S0b(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = J4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { Udb: c, Opb: e };
          },
          T0b = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new E(a);
            }
          },
          X0b = function (a, b) {
            switch (a.type) {
              case "mention":
                return H4(U0b, {
                  Fq: a.user ? b.O_(a.user) : void 0,
                  text: a.text,
                  backgroundColor: a.user ? b.keb(a.user).background : void 0,
                });
              case "embed":
                const c = !a.url;
                a = b.TKa.ZZ.get(a.url);
                return H4(V0b, { icon: a, eib: c });
              case "date":
                return a.text ? void 0 : H4(W0b, {});
              case "select":
                break;
              default:
                throw new E(a);
            }
          },
          Z0b = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return H4(Y0b, { selected: !!b.hXa });
              default:
                throw new E(a);
            }
          },
          K4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? a.key === "Meta" || ["91", "224"].includes(a.code)
              : !1;
          },
          $0b = function (a) {
            __c.w(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          a1b = function (a, b, c) {
            if (c) {
              var d = A0b(c.images, "medium"),
                e = A0b(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = L4(() => a.s6.set(b, e));
                f.onerror = L4(() => a.s6.set(b, void 0));
                !f.complete && c.complete ? a.s6.set(b, d) : (c.src = "");
              }
            } else a.s6.set(b, void 0);
          },
          c1b = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.Fg
                  ? a.Fg.SFb(new b1b({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.Hf.content.title;
                        h
                          ? (M4(() => a.X_a.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        M4(() => a.X_a.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          z0b = (a) =>
            a.endsWith("rem") ? parseFloat(a) * 10 : __c.ny * __c.HLb[a],
          N4 = __webpack_require__(519427),
          L4 = N4.action,
          d1b = N4.comparer,
          F4 = N4.computed,
          e1b = N4.observable,
          O4 = N4.ObservableMap,
          M4 = N4.runInAction;
        var F0b = __webpack_require__(635872).Om;
        var P4 = __webpack_require__(875604),
          f1b = P4.createContext,
          H0b = P4.createRef,
          g1b = P4.lazy,
          Q4 = P4.memo,
          J4 = P4.useCallback,
          S0b = P4.useEffect,
          h1b = P4.useLayoutEffect,
          G4 = P4.useMemo,
          R0b = P4.useState;
        var i1b = __webpack_require__(443763),
          H4 = i1b.jsx,
          j1b = i1b.jsxs;
        var k1b = __webpack_require__,
          l1b = k1b(993864),
          I4 = k1b.n_x(l1b)();
        var L0b = __webpack_require__(460876).Z;
        var R4 = __webpack_require__(223826),
          P0b = R4.Wj,
          N0b = R4.Ix,
          O0b = R4.$r;
        var S4 = __webpack_require__(446474).Pi;
        var m1b = class {
            static A(a) {
              P(a, { text: F4, user: F4, brand: F4 });
            }
            get text() {
              return this.Ee.text;
            }
            get user() {
              return this.Ee.user;
            }
            get brand() {
              return this.Ee.brand;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (m1b.A(this), "mention");
            }
          },
          n1b = class {
            static A(a) {
              P(a, { text: F4, url: F4 });
            }
            get text() {
              return this.Ee.text;
            }
            get url() {
              return this.Ee.url;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (n1b.A(this), "embed");
            }
          },
          o1b = class {
            static A(a) {
              P(a, { text: F4, language: F4, style: F4, date: F4 });
            }
            get text() {
              return this.Ee.text;
            }
            get language() {
              return this.Ee.language;
            }
            get style() {
              return this.Ee.style;
            }
            get date() {
              return this.Ee.date;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (o1b.A(this), "date");
            }
          },
          p1b = class {
            static A(a) {
              P(a, { text: F4, options: F4, gf: F4, PR: F4 });
            }
            get text() {
              return this.Ee.text;
            }
            get options() {
              return this.Ee.options.map((a) => a);
            }
            get gf() {
              return this.Ee.gf;
            }
            get PR() {
              var a;
              return (a = this.Ee.options.first((b) => b.id === this.Ee.gf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (p1b.A(this), "select");
            }
          },
          q1b = F0b((a) => {
            switch (a.type) {
              case "mention":
                return new m1b(a);
              case "embed":
                return new n1b(a);
              case "date":
                return new o1b(a);
              case "select":
                return new p1b(a);
              default:
                throw new E(a);
            }
          });
        var B0b = class {
            static A(a) {
              P(a, { style: F4, date: F4, text: F4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = this.no.hk.type === 2 ? this.no.hk.date : void 0) ||
                ((a = new Date()),
                (a = __c.Mz(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  agb: a.getHours(),
                  $kb: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.no.Wz;
            }
            constructor(a, b) {
              this.no = a;
              this.language = b;
              this.type = (B0b.A(this), "date");
            }
          },
          r1b = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          C0b = class {
            static A(a) {
              P(a, {
                options: F4,
                gf: F4,
                PR: F4,
                text: F4,
                oMa: F4({ equals: d1b.shallow }),
              });
            }
            get options() {
              return this.oMa.map((a, b) => new r1b(a, b));
            }
            get gf() {
              var a;
              return (a = this.options.find((b) => b.label === this.text)) ===
                null || a === void 0
                ? void 0
                : a.id;
            }
            get PR() {
              var a;
              return (a = this.options.find((b) => b.id === this.gf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.no.Wz;
            }
            get oMa() {
              var a, b;
              __c.C(
                ((a = this.no.Jo) === null || a === void 0
                  ? void 0
                  : a.type) === "select"
              );
              return (b = this.no.Jo) === null || b === void 0
                ? void 0
                : b.options;
            }
            constructor(a) {
              this.no = a;
              this.type = (C0b.A(this), "select");
            }
          },
          D0b = class {
            static A(a) {
              P(a, { pM: F4 });
            }
            get text() {
              return this.pM ? this.pM.text : "";
            }
            get user() {
              return this.pM ? this.pM.user : "";
            }
            get brand() {
              return this.pM ? this.pM.brand : "";
            }
            get pM() {
              if (this.no.hk.type !== 9)
                return (
                  __c.C(this.no.hk.type === 7),
                  this.no.hk ? this.no.hk.value[0] : void 0
                );
            }
            constructor(a) {
              this.no = a;
              this.type = (D0b.A(this), "mention");
            }
          },
          E0b = class {
            static A(a) {
              P(a, { u_: F4 });
            }
            get text() {
              return this.u_ ? this.u_.embed.text : "";
            }
            get url() {
              return this.u_ ? this.u_.embed.url : "";
            }
            get u_() {
              if (this.no.hk.type !== 9)
                return (
                  __c.C(this.no.hk.type === 8),
                  this.no.hk ? this.no.hk.value[0] : void 0
                );
            }
            constructor(a) {
              this.no = a;
              this.type = (E0b.A(this), "embed");
            }
          };
        var s1b = class {
          Jpa(a) {
            this.Jla.Jpa(a);
          }
          F4(a, b) {
            this.Jla.F4(a, b);
          }
          O_(a) {
            return this.Jla.O_(a);
          }
          Gpa(a) {
            this.TKa.Gpa(a);
          }
          constructor(a, b, c, d) {
            this.Jla = a;
            this.TKa = b;
            this.Qa = c;
            this.ut = d;
            this.PCa = new __c.rxb();
            this.keb = (e) => __c.wKa(this.PCa, e);
          }
        };
        var M0b = f1b(void 0);
        var t1b = Number.parseInt("300ms", 10),
          u1b = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          v1b = Q4(function ({
            yr: a = !1,
            children: b,
            keyFrame: c,
            JZa: d,
            SIa: e = "hidden",
            QKa: f = "hidden",
            ariaLive: g,
            EPa: h,
            wGb: k = "none",
          }) {
            a = __c.Db() && !a;
            return Q0b({
              children: b,
              keyFrame: c,
              JZa: d,
              ariaLive: g,
              SIa: e,
              QKa: f,
              EPa: h,
              y6a: a ? t1b : 0,
              obb: I4({
                _1niDPQ: a,
                Q6kGbg: k === "none",
                _9j7ODw: k === "layout",
              }),
              Aub: u1b,
            });
          });
        var w1b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var x1b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var y1b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
        var z1b =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var A1b = Q4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.PR,
              f = a.yab,
              g = a.S4a,
              h = a.s5a,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = I4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: a.text.length > 0 });
            a = a.text.length > 0 ? a.text : "\ufeff";
            return j1b("span", {
              className: I4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                H4("span", {
                  className: I4("_2Lr6pQ", p),
                  children: H4("span", { className: "Z_WvzQ", children: a }),
                }),
                j1b("span", {
                  className: I4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    H4("span", {
                      className: I4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? H4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          U0b = Q4((a) => {
            const b = a.backgroundColor,
              c = a.Fq;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return H4(v1b, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? H4(__c.LLb, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    Fq: c,
                    borderColor: c ? void 0 : b,
                  })
                : H4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: z1b },
                  }),
            });
          }),
          V0b = Q4((a) => {
            const b = a.icon;
            a = a.eib;
            return H4(v1b, {
              keyFrame: b ? "favicon" : "placeholder",
              children: b
                ? H4("span", {
                    className: "_tFJqA",
                    children: H4("img", { src: b, className: "qpbYdw" }),
                  })
                : H4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: a ? y1b : x1b },
                  }),
            });
          }),
          W0b = Q4(() =>
            H4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: w1b },
            })
          ),
          Y0b = Q4(({ selected: a }) =>
            H4("div", {
              className: I4("whph4A", { zgzjww: a }),
              children: H4(__c.zL, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          B1b = S4((a) => {
            const {
              Ee: b,
              hXa: c,
              jwa: d,
              mode: e = "viewable",
              measureRef: f,
              ep: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = b.type === "embed" ? d.Qa(b.url) : void 0,
              [l, m] = R0b(!1),
              n = J4((t) => m(K4(t)), [m]),
              p = J4((t) => m(!K4(t)), [m]),
              q = J4(
                (t) => {
                  m(K4(t.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = J4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            S0b(() => {
              M4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.Jpa(b.user);
                    break;
                  case "embed":
                    d.Gpa(b.url);
                }
              });
            }, [b, d]);
            h1b(() => {
              g === null || g === void 0 || g();
            }, [b.type, a, g]);
            return H4(A1b, {
              text: a,
              link: e === "viewable" || l ? k : void 0,
              yab: b.text.length === 0,
              ariaLabel: b.text || "",
              className: T0b(b),
              PR: b.PR,
              S4a: X0b(b, d),
              s5a: Z0b(b, { hXa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
              onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0,
            });
          });
        var C1b = __c.L(() => ({
          dHb: __c.IM(11),
          mode: __c.F("A?", 1, "BY_USER_IDS"),
          yvb: __c.HM(1),
        }));
        var D1b = class {
            static A(a) {
              P(a, { SP: e1b.shallow, FLa: L4 });
            }
            O_(a) {
              return this.ZGa.O_(a);
            }
            Jpa(a) {
              this.OCa.has(a) || this.SP.has(a) || (this.SP.add(a), this.$$a());
            }
            F4(a, b) {
              this.OCa.has(a) ||
                (this.OCa.set(a, b), this.SP.delete(a), a1b(this.ZGa, a, b));
            }
            async FLa() {
              if (this.SP.size !== 0) {
                var a = [...this.SP.values()];
                this.SP.clear();
                if (this.$Ga) {
                  var b = await this.$Ga;
                  await Promise.all(
                    $0b(a).map(async (c) => {
                      const d = new C1b({ yvb: c }),
                        { Szb: e } = await b.rFb(d);
                      M4(() => c.forEach((f) => this.F4(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.F4(c));
              }
            }
            constructor(a, b) {
              this.$Ga = a;
              this.OCa = (D1b.A(this), new O4());
              this.SP = new Set();
              this.ZGa = new E1b();
              this.$$a = __c.Xc(() => this.FLa(), 200);
              M4(() => {
                b === null ||
                  b === void 0 ||
                  b.forEach((c, d) => this.F4(d, c));
              });
            }
          },
          E1b = class {
            O_(a) {
              return this.s6.get(a);
            }
            constructor() {
              this.s6 = new O4();
            }
          };
        var b1b = __c.L(() => ({
          id: __c.X("id", 1),
          extension: __c.Y("extension", 3),
          aXa: __c.DM("revision", 5),
          version: __c.DM("version", 2),
          LGb: __c.DM("imagesetsLimit", 6),
        }));
        var F1b = class {
          static A(a) {
            P(a, { Tcb: L4 });
          }
          async Tcb(a) {
            if (this.Fg) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                c == null || c.length < 2
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await c1b(this, { url: a, ...b });
            }
          }
          constructor(a) {
            this.Fg = a;
            this.X_a = (F1b.A(this), new O4());
            this.promises = new Map();
          }
        };
        var G1b = class {
          static A(a) {
            P(a, { ZZ: e1b.shallow });
          }
          async Gpa(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await ((d = this.ut) === null || d === void 0
                ? void 0
                : d.O7(a));
              c = e === null || e === void 0 ? void 0 : e.Scb;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = L4(() => this.ZZ.set(a, c))),
                (b.onerror = L4(() => this.ZZ.set(a, void 0))))
              : M4(() => this.ZZ.set(a, void 0));
          }
          constructor(a) {
            this.ut = a;
            this.ZZ = (G1b.A(this), new Map());
          }
        };
        __c.fHa = {
          ahb: function (a) {
            const b = a.document,
              c = a.Fg,
              d = a.Qa,
              e = a.ut;
            var f = a.h8;
            const g = a.hd,
              h = a.vf,
              k = a.dz,
              l = a.QW;
            a = a.XGb;
            f = new D1b(a === null || a === void 0 ? void 0 : a(), f);
            a = new G1b(e);
            new F1b(c);
            const m = new s1b(f, a, d, e),
              n = G0b(l, b);
            g.Pp.gka = S4(({ item: q, measureRef: r }) => {
              const t = G4(() => q1b(q.Ee), [q.Ee]);
              return H4(B1b, { Ee: t, jwa: m, measureRef: r });
            });
            const p = S4(({ context: q, ep: r }) => {
              const t = G4(() => __c.D(n(q.container)), [q]);
              h1b(r, [r, q.container.column.width]);
              return H4(B1b, { Ee: t, jwa: m, ep: r });
            });
            k.iFa = ({ context: q, ep: r }) => ({
              type: "react",
              node: H4(p, { context: q, ep: r }),
            });
            h &&
              (h.Fja = g1b(() =>
                __webpack_require__
                  .me(365475)
                  .then(() => __c.y0b)
                  .then(({ d$a: q }) => ({ default: q() }))
              ));
            return { jwa: m };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/1bf6f7dc54f6f53c.js.map
