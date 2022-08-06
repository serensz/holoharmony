import {
  S as x,
  i as w,
  s as D,
  l as p,
  m as _,
  n as $,
  h as m,
  b as g,
  t as u,
  d as I,
  f,
  K as E,
  o as G,
  g as V,
  w as v,
  a as F,
  x as b,
  c as L,
  p as k,
  H as S,
  y as h,
  B as y
} from '../chunks/index-82e3b787.js';
import { G as q, F as A, L as B } from '../chunks/Game-d358db62.js';
import { t as C, l as H, a as K } from '../chunks/util-4be2a3ca.js';
import '../chunks/Button-88d2cbd5.js';
import '../chunks/index-950c601e.js';
function M(l) {
  let e, r, t, o, i, s;
  return (
    (t = new q({ props: { custom: !1, random: !0 } })),
    (i = new A({ props: { custom: !0 } })),
    {
      c() {
        (e = p('div')), (r = p('div')), v(t.$$.fragment), (o = F()), v(i.$$.fragment), this.h();
      },
      l(a) {
        e = _(a, 'DIV', { class: !0 });
        var n = $(e);
        r = _(n, 'DIV', { class: !0 });
        var c = $(r);
        b(t.$$.fragment, c), c.forEach(m), n.forEach(m), (o = L(a)), b(i.$$.fragment, a), this.h();
      },
      h() {
        k(r, 'class', 'text-center p-3'), k(e, 'class', 'max-w-screen-md mx-auto');
      },
      m(a, n) {
        g(a, e, n), S(e, r), h(t, r, null), g(a, o, n), h(i, a, n), (s = !0);
      },
      i(a) {
        s || (f(t.$$.fragment, a), f(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        u(t.$$.fragment, a), u(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && m(e), y(t), a && m(o), y(i, a);
      }
    }
  );
}
function R(l) {
  let e, r;
  return (
    (e = new B({})),
    {
      c() {
        v(e.$$.fragment);
      },
      l(t) {
        b(e.$$.fragment, t);
      },
      m(t, o) {
        h(e, t, o), (r = !0);
      },
      i(t) {
        r || (f(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        u(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        y(e, t);
      }
    }
  );
}
function j(l) {
  let e, r, t, o;
  const i = [R, M],
    s = [];
  function a(n, c) {
    return n[0] ? 0 : 1;
  }
  return (
    (r = a(l)),
    (t = s[r] = i[r](l)),
    {
      c() {
        (e = p('div')), t.c();
      },
      l(n) {
        e = _(n, 'DIV', {});
        var c = $(e);
        t.l(c), c.forEach(m);
      },
      m(n, c) {
        g(n, e, c), s[r].m(e, null), (o = !0);
      },
      p(n, [c]) {
        let d = r;
        (r = a(n)),
          r !== d &&
            (V(),
            u(s[d], 1, 1, () => {
              s[d] = null;
            }),
            I(),
            (t = s[r]),
            t || ((t = s[r] = i[r](n)), t.c()),
            f(t, 1),
            t.m(e, null));
      },
      i(n) {
        o || (f(t), (o = !0));
      },
      o(n) {
        u(t), (o = !1);
      },
      d(n) {
        n && m(e), s[r].d();
      }
    }
  );
}
function z(l, e, r) {
  let t;
  return (
    E(l, K, o => r(0, (t = o))),
    G(async () => {
      C.set({ attempts: 0, type: 'random', guesses: [], date: new Date(), correct: !1 }),
        await H('', !0);
    }),
    [t]
  );
}
class T extends x {
  constructor(e) {
    super(), w(this, e, z, j, D, {});
  }
}
export { T as default };
