import {
  S as x,
  i as w,
  s as I,
  l as _,
  m as p,
  n as $,
  h as f,
  b as g,
  t as m,
  d as D,
  f as u,
  K as E,
  o as G,
  g as V,
  w as v,
  a as F,
  x as b,
  c as L,
  p as y,
  H as S,
  y as h,
  B as k
} from '../chunks/index-82e3b787.js';
import { G as q, F as B, L as C } from '../chunks/Game-d358db62.js';
import { l as H, a as K } from '../chunks/util-4be2a3ca.js';
import '../chunks/Button-88d2cbd5.js';
import '../chunks/index-950c601e.js';
function M(c) {
  let t, a, e, o, i, s;
  return (
    (e = new q({ props: { custom: !1, random: !1 } })),
    (i = new B({ props: { custom: !1 } })),
    {
      c() {
        (t = _('div')), (a = _('div')), v(e.$$.fragment), (o = F()), v(i.$$.fragment), this.h();
      },
      l(r) {
        t = p(r, 'DIV', { class: !0 });
        var n = $(t);
        a = p(n, 'DIV', { class: !0 });
        var l = $(a);
        b(e.$$.fragment, l), l.forEach(f), n.forEach(f), (o = L(r)), b(i.$$.fragment, r), this.h();
      },
      h() {
        y(a, 'class', 'text-center p-3'), y(t, 'class', 'max-w-screen-md mx-auto');
      },
      m(r, n) {
        g(r, t, n), S(t, a), h(e, a, null), g(r, o, n), h(i, r, n), (s = !0);
      },
      i(r) {
        s || (u(e.$$.fragment, r), u(i.$$.fragment, r), (s = !0));
      },
      o(r) {
        m(e.$$.fragment, r), m(i.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && f(t), k(e), r && f(o), k(i, r);
      }
    }
  );
}
function R(c) {
  let t, a;
  return (
    (t = new C({})),
    {
      c() {
        v(t.$$.fragment);
      },
      l(e) {
        b(t.$$.fragment, e);
      },
      m(e, o) {
        h(t, e, o), (a = !0);
      },
      i(e) {
        a || (u(t.$$.fragment, e), (a = !0));
      },
      o(e) {
        m(t.$$.fragment, e), (a = !1);
      },
      d(e) {
        k(t, e);
      }
    }
  );
}
function j(c) {
  let t, a, e, o;
  const i = [R, M],
    s = [];
  function r(n, l) {
    return n[0] ? 0 : 1;
  }
  return (
    (a = r(c)),
    (e = s[a] = i[a](c)),
    {
      c() {
        (t = _('div')), e.c();
      },
      l(n) {
        t = p(n, 'DIV', {});
        var l = $(t);
        e.l(l), l.forEach(f);
      },
      m(n, l) {
        g(n, t, l), s[a].m(t, null), (o = !0);
      },
      p(n, [l]) {
        let d = a;
        (a = r(n)),
          a !== d &&
            (V(),
            m(s[d], 1, 1, () => {
              s[d] = null;
            }),
            D(),
            (e = s[a]),
            e || ((e = s[a] = i[a](n)), e.c()),
            u(e, 1),
            e.m(t, null));
      },
      i(n) {
        o || (u(e), (o = !0));
      },
      o(n) {
        m(e), (o = !1);
      },
      d(n) {
        n && f(t), s[a].d();
      }
    }
  );
}
function z(c, t, a) {
  let e;
  return (
    E(c, K, o => a(0, (e = o))),
    G(async () => {
      await H('', !1);
    }),
    [e]
  );
}
class Q extends x {
  constructor(t) {
    super(), w(this, t, z, j, I, {});
  }
}
export { Q as default };
