const c = /* @__PURE__ */ new Map(), f = (o, e, t, n) => {
  o.split(" ").forEach((s) => {
    var a;
    return t && typeof e != "function" ? e.addEventListener(s, t, n) : (a = c.set(s, /* @__PURE__ */ new Set()).get(s)) == null ? void 0 : a.add(e);
  });
}, i = (o, e, t) => {
  o.split(" ").forEach((n) => {
    var s;
    return t && typeof e != "function" ? e.removeEventListener(n, t) : (s = c.get(n)) == null ? void 0 : s.delete(e);
  });
}, p = (o, ...e) => {
  var t;
  (t = c.get(o)) == null || t.forEach((n) => n(...e));
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
