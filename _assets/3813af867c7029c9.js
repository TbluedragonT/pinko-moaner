(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 59534: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var vLb = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.at(a),
                d = c instanceof __c.bt ? c.Dp() : c;
              return __c.Qr(b, (e) => {
                e = __c.at(e);
                e = e instanceof __c.bt ? __c.JH(e, d) : e;
                return Math.abs(__c.pt(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          wLb = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.ws(b)[0])
              .join("");
          },
          zLb = function (a = "") {
            a = xLb(a);
            a = Math.floor(a() * yLb.length);
            return yLb[a];
          },
          ALb = __webpack_require__(875604),
          BLb = ALb.memo,
          CLb = ALb.useId;
        var xLb = __webpack_require__(503216);
        var DLb = __webpack_require__(443763),
          CZ = DLb.jsx,
          ELb = DLb.jsxs;
        var FLb = __webpack_require__,
          GLb = FLb(993864),
          DZ = FLb.n_x(GLb)();
        __c.HLb = {
          xxsmall: 2,
          xsmall: 3,
          small: 4,
          medium: 5,
          large: 6,
          xlarge: 8,
          xxlarge: 10,
          xxxlarge: 20,
        };
        var yLb = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.ct(__c.Ws(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var ILb = BLb((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            qR: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          if (d) {
            a = __c.at(d);
            var n = a instanceof __c.bt ? __c.dt(a) : __c.ct(a);
          } else n = e ? zLb(e) : "#8e8e8e";
          var p = CLb();
          switch (l) {
            case "circle":
              a = CZ("defs", {
                children: CZ("clipPath", {
                  id: p,
                  children: CZ("circle", {
                    id: `${p}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              a = CZ("defs", {
                children: CZ("clipPath", {
                  id: p,
                  children: CZ("rect", {
                    id: `${p}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          switch (l) {
            case "circle":
              p = CZ("circle", {
                cx: "50%",
                cy: "50%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: DZ("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              p = CZ("rect", {
                width: "100%",
                height: "100%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: DZ("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          n = vLb(n);
          return CZ("span", {
            role: f,
            "aria-label": g,
            className: DZ("VaW8_A", { cUFFRA: l === "square" }),
            style: { "--pDK9Gw": n },
            ...m,
            children: ELb("svg", {
              className: h,
              style: k,
              children: [
                a,
                p,
                CZ("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: n,
                  fontWeight: "500",
                  fontSize: "50%",
                  dominantBaseline: "central",
                  letterSpacing: "0.01rem",
                  dy: "-0.04em",
                  children: wLb(b).toUpperCase(),
                }),
              ],
            }),
          });
        });
        var JLb =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var KLb = ({
          borderColor: a,
          lVa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          CZ("span", {
            className: DZ(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": f === "img" ? c : void 0,
            ...g,
          });
        __c.LLb = ({
          name: a,
          N6a: b,
          ariaLabel: c,
          qR: d,
          backgroundColor: e,
          borderColor: f,
          Fq: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = DZ("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: l === "square" });
          b = b || "presentation";
          return g
            ? CZ(KLb, {
                className: h,
                style: k,
                borderColor: f,
                lVa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? CZ(ILb, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                qR: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : CZ(KLb, {
                className: h,
                style: k,
                borderColor: f,
                lVa: JLb,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/3813af867c7029c9.js.map
