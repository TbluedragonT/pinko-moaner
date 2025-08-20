(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [60060],
  {
    /***/ 82986: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(914242);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var AM = __c.AM;
        var X = __c.X;
        var L = __c.L;
        var Ha = __c.Ha;
        var G4b, H4b, K4b, N4b, O4b, Q4b, P4b, S4b, V4b, U4b, Y4b, T5;
        __c.O5 = function (a) {
          return { type: 1, Component: a };
        };
        __c.P5 = function () {
          return (a) => a;
        };
        __c.Q5 = function (a, b, c) {
          return { key: a, AVa: b, type: "string", AJ: c, ASa: 0 };
        };
        __c.R5 = function (a) {
          return () => ({ ...E4b, ...a });
        };
        G4b = function ({ element: a }) {
          var b = F4b.get(a.Ula);
          if (!b) throw Error(`Blueprint ${a.Ula} not found`);
          b = b.variants.find((c) => c.VP === a.VP);
          if (!b)
            throw Error(`Variant ${a.VP} not found for blueprint ${a.Ula}`);
          return { Na: b.Na };
        };
        H4b = function (a) {
          return __c.P5()(() => ({ element: __c.O5(a) }));
        };
        K4b = function (a, b) {
          var c = I4b,
            d = J4b;
          a.handle("SET_CONFIG", async (e) => {
            if (e === void 0)
              throw new S5({
                code: "internal_error",
                message: "SET_CONFIG: request cannot be undefined.",
              });
            e = c.ad(e);
            e = await b(e);
            if (d) return d.wd(e);
          });
        };
        N4b = async function (a, b) {
          a = await a.EIa.request("RENDER_ELEMENT", L4b.wd(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"RENDER_ELEMENT"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("RENDER_ELEMENT: Result cannot be empty");
          return M4b.ad(a.value);
        };
        O4b = function (a) {
          K4b(a.EIa, (b) => a.handler.Hfb(b));
        };
        Q4b = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.Rl;
          const e = a.requestHandler.get(d);
          if (e) {
            a.w2.yY.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.w2.yY.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.w2.yY.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof S5) {
                var h = k;
                k.code === "internal_error"
                  ? a.H.Eb(k, {
                      re: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.spb));
              } else
                a.fqb
                  ? a.H.Eb(k, {
                      re: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.uab.error(k);
              g = P4b(a.w2, c, g, b);
              g.ok ||
                a.H.PL(g.error, {
                  re: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.qcb)
                try {
                  k(h);
                } catch (l) {
                  a.H.hQ(l, { re: "Error executing errorObserver" });
                }
          } else
            (h = P4b(
              a.w2,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.H.PL(h.error, {
                  re: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        P4b = function (a, b, c, d) {
          return a.yY.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        S4b = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return R4b;
          a = new URL(a).origin;
          return a === "null" ? R4b : { SCa: a, VXa: a };
        };
        V4b = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window
        ) {
          const f = new T4b(6e4),
            g = S4b(c),
            h = c.contentWindow;
          if (!h)
            throw new S5({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: k, source: l, origin: m }) => {
            var n;
            (k === null || k === void 0
              ? 0
              : (n = k.source) === null || n === void 0
              ? 0
              : n.startsWith("react-")) ||
              (m !== g.SCa
                ? U4b(m) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", g.SCa],
                      ["actual", m],
                    ]),
                  })
                : l !== h
                ? l !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([
                      [
                        "data.source",
                        k === null || k === void 0 ? void 0 : k.source,
                      ],
                    ]),
                  })
                : ((l = k
                    ? k.source
                      ? k.source !== "iframe"
                        ? Ha("invalid source")
                        : (0, __c.Ga)()
                      : Ha("'source' is missing in MessageEvent data object")
                    : Ha("missing 'data' field in MessageEvent")),
                  l.ok
                    ? (h.postMessage({ source: "parent" }, g.VXa, [a]),
                      f.resolve(void 0))
                    : b.HK(l.error, {
                        extra: new Map([
                          [
                            "data.source",
                            k === null || k === void 0 ? void 0 : k.source,
                          ],
                        ]),
                      })));
          };
          d("message", c);
          try {
            await f.promise();
          } finally {
            e("message", c);
          }
        };
        U4b = function (a) {
          return W4b.some((b) => a.endsWith(b));
        };
        Y4b = function ({ H: a }) {
          const b = new X4b(a);
          return H4b(({ data: { element: c }, sC: { p4a: d } }) =>
            T5(d, { url: c.url, wB: (e) => b.wB(e, c), BU: (e) => b.BU(e) })
          );
        };
        __c.rd.prototype.PL = __c.fa(3, function (a, b) {
          this.console.error(...__c.qd(this, "critical", a, b));
        });
        __c.bM.prototype.PL = __c.fa(2, function (a, b) {
          this.$s.PL(a, b);
          __c.$L(this, a, "critical", b);
        });
        __c.U5 = {};
        T5 = __webpack_require__(443763).jsx;
        var Z4b = __webpack_require__(446474).Pi;
        var $4b = __webpack_require__(875604).memo;
        var V5 = __webpack_require__(519427),
          a5b = V5.ObservableMap,
          b5b = V5.reaction,
          c5b = V5.runInAction;
        var E4b = Object.freeze({
          document: Object.freeze({}),
          element: Object.freeze({}),
        });
        var d5b = __c.R5({ element: __c.U5 }),
          e5b = {
            lH: __c.P5()(() => ({
              element: __c.O5(Z4b(() => T5("div", { children: "3D Widget" }))),
            })),
            mH: d5b,
          };
        var F4b = new a5b(),
          f5b = __c.R5({
            element: {
              Ula: __c.Q5("blueprintId", 0),
              VP: __c.Q5("variantId", 0),
            },
          });
        var g5b = {
          lH: __c.P5()(() => ({ element: { type: 0, vD: G4b } })),
          mH: f5b,
        };
        var h5b = __c.R5({
          element: { url: __c.Q5("url", 0), config: __c.Q5("config", 1) },
        });
        var S5 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.spb = a.message;
            Object.setPrototypeOf(this, S5.prototype);
          }
        };
        var L4b = L(() => ({ config: __c.Y(1) }));
        var i5b = L(() => ({ color: X(1) }));
        var j5b = L(() => ({
          type: __c.F("A?", 1, "RECOLORABLE"),
          id: X(1),
          value: __c.Sa(2, i5b),
        }));
        var k5b = L(() => ({ borderRadius: AM(1), borderWidth: AM(2) }));
        var l5b = L(() => ({
          type: __c.F("A?", 2, "BORDERABLE"),
          id: X(1),
          value: __c.Sa(2, k5b),
        }));
        var M4b = L(() => ({
          config: X(1),
          width: AM(2),
          height: AM(3),
          jV: __c.Ua(4, j5b),
          H7a: __c.Ua(5, l5b),
        }));
        var I4b = L(() => ({
          config: X(1),
          width: AM(2),
          height: AM(3),
          jV: __c.Ua(4, j5b),
          H7a: __c.Ua(5, l5b),
        }));
        var J4b = L(() => ({}));
        var m5b = class {
          constructor(a, b) {
            this.EIa = a;
            this.handler = b;
            O4b(this);
          }
        };
        var n5b = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.H = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Ga)();
              } catch (e) {
                return this.H.Eb(e), Ha(e);
              }
            };
            this.Qmb = (d) => {
              this.H.Eb(d);
            };
            this.onMessage = ({ data: d }) => {
              if (d)
                try {
                  this.handler.xpb(d);
                } catch (e) {
                  this.H.Eb(e);
                }
              else
                this.H.error(
                  new S5({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.onMessage;
            this.port.onmessageerror = this.Qmb;
          }
        };
        var o5b = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          T4b = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.Ld);
              this.oqb(a);
            }
            reject(a) {
              clearTimeout(this.Ld);
              this.AWa(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.Ld);
              this.Ld = setTimeout(() => {
                this.AWa(new o5b());
              }, this.timeoutMs);
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.oqb = b;
                this.AWa = c;
              });
              this.setTimeout();
            }
          };
        var p5b = class {
          request(a, b) {
            const c = this.dVa,
              d = new T4b(5e3),
              e = this.hqb(),
              f = (async function () {
                c.set(e, d);
                try {
                  const g = await d.promise();
                  return (0, __c.Ga)(g);
                } catch (g) {
                  return g instanceof o5b
                    ? Ha(
                        new S5({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ha(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.H.Eb(b.error, {
                re: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.H = b;
            this.hqb = __c.Zr;
            this.dVa = new Map();
          }
        };
        var q5b = class {
          handle(a, b) {
            if (this.requestHandler.has(a))
              throw new S5({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.requestHandler.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.w2 = a;
            this.H = b;
            this.fqb = !0;
            this.uab = c;
            this.requestHandler = new Map();
            this.qcb = new Set();
          }
        };
        var s5b = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.requestHandler.handle(c, d);
              a = new r5b(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        g = d.dVa.get(e);
                      if (g)
                        switch (f) {
                          case "response":
                            g.resolve(c.Rl);
                            break;
                          case "ack":
                            g.reset(2e4);
                            break;
                          case "error":
                            g.reject(
                              new S5({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new __c.E(c);
                        }
                      else
                        f !== "ack" &&
                          d.H.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      Q4b(this.requestHandler, c);
                      break;
                    default:
                      throw new __c.E(c);
                  }
                },
                a,
                b.tg("bus")
              );
              this.client = new p5b(a.bz, b.tg("client"));
              this.requestHandler = new q5b(a, b.tg("requestHandler"));
            }
          },
          r5b = class {
            constructor(a, b, c) {
              this.aba = a;
              this.bz = (d, e, f) =>
                this.yY.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.bnb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.aba({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.aba({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.aba({
                      type: "response",
                      requestId: d.requestId,
                      Rl: d.payload,
                    });
                    break;
                  case "request":
                    this.aba({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      Rl: d.payload,
                    });
                    break;
                  default:
                    throw new __c.E(d);
                }
              };
              this.yY = new n5b({ xpb: this.bnb }, b, c);
            }
          };
        var R4b = { SCa: "null", VXa: "*" };
        var W4b =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var X4b = class {
          async wB(a, b) {
            const { port1: c, port2: d } = new MessageChannel();
            var e = new s5b(c, this.H);
            await V4b(d, this.H, a, window);
            const f = new m5b(e, {
              Hfb: (g) => {
                c5b(() => (b.config = g.config));
                return new J4b();
              },
            });
            e = b5b(
              () => b.config,
              async (g) => {
                const h = await N4b(f, { config: g });
                h.config && h.config !== g && c5b(() => (b.config = h.config));
              },
              { fireImmediately: !0 }
            );
            this.hh.set(a, e);
          }
          BU(a) {
            var b;
            (b = this.hh.get(a)) === null || b === void 0 || b();
            this.hh.delete(a);
          }
          constructor(a) {
            this.H = a;
            this.hh = new Map();
          }
        };
        var t5b = __c.R5({ element: __c.U5 });
        var u5b = $4b(function () {
          return T5("div", {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundColor: "#fFfFfF",
              justifyContent: "center",
              alignItems: "center",
            },
            children: "FORM V2 Widget",
          });
        });
        var v5b = {
          lH: (function (a) {
            return __c.P5()(() => ({ element: __c.O5(a) }));
          })(Z4b(() => T5(u5b, { state: {} }))),
          mH: t5b,
        };
        __c.$Qa = {
          ghb: function (a) {
            function b(e, f) {
              const g = c.dhb(e, f.mH());
              f = d.chb(e, g, f.lH());
              return { id: e, kw: g, ZLb: f };
            }
            const c = a.xDa,
              d = a.K6;
            return {
              aAb: b("w:wnJF5T87v", g5b),
              PBb: a.Bbb
                ? Promise.all([
                    __webpack_require__.me(697956).then(() => __c.w5b),
                    __webpack_require__.me(411625).then(() => __c.x5b),
                    __webpack_require__.me(305660).then(() => __c.y5b),
                    __webpack_require__.me(696820).then(() => __c.z5b),
                  ]).then(([e, f, g, h]) => ({
                    LBb: b("w:cm9wgGptP", e),
                    MBb: b("w:yLMS4dWnl", f),
                    NBb: b("w:2flp30CGQ", g),
                    OBb: b("w:1Nv6K6Dtv", h),
                  }))
                : void 0,
              EAb: b("w:JR4G8hDDg", { mH: h5b, lH: Y4b({ H: a.H }) }),
              form: b("w:6JG6DxspF", v5b),
              aOb: a.Zbb ? b("w:2pbXJMtm1", e5b) : void 0,
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/990a4a8b9e7b960a.js.map
