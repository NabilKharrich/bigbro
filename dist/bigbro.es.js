const c = /* @__PURE__ */ new Map(), f = (o, e, t, s = !1) => {
  o.split(" ").forEach((n) => {
    var a;
    return t && typeof e != "function" ? e.addEventListener(n, t, s) : (a = c.set(n, /* @__PURE__ */ new Set()).get(n)) == null ? void 0 : a.add(e);
  });
}, i = (o, e, t) => {
  o.split(" ").forEach((s) => {
    var n;
    return t && typeof e != "function" ? e.removeEventListener(s, t) : (n = c.get(s)) == null ? void 0 : n.delete(e);
  });
}, p = (o, ...e) => {
  var t;
  (t = c.get(o)) == null || t.forEach((s) => s(...e));
}, r = (o, ...e) => Promise.all([...c.get(o) || []].map((t) => Promise.resolve(t(...e)))), l = (o) => {
  o.split(" ").forEach((e) => c.delete(e));
}, E = () => new Map(c);
export {
  p as emit,
  r as emitAsync,
  E as inspect,
  i as off,
  f as on,
  l as remove
};
//# sourceMappingURL=bigbro.es.js.map
