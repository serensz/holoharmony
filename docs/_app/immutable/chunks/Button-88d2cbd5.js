import {
  a6 as m,
  S as p,
  i as v,
  s as y,
  a1 as w,
  l as k,
  m as S,
  n as N,
  h,
  p as _,
  b as T,
  I as B,
  a3 as C,
  a4 as I,
  a5 as j,
  f as O,
  t as q,
  a7 as E
} from './index-82e3b787.js';
import { w as M } from './index-950c601e.js';
const U = () => {
    const a = m('__svelte__');
    return {
      page: { subscribe: a.page.subscribe },
      navigating: { subscribe: a.navigating.subscribe },
      get preloading() {
        return (
          console.error('stores.preloading is deprecated; use stores.navigating instead'),
          { subscribe: a.navigating.subscribe }
        );
      },
      session: a.session,
      updated: a.updated
    };
  },
  J = {
    subscribe(a) {
      return U().page.subscribe(a);
    }
  },
  z = {
    duration: 4e3,
    initial: 1,
    next: 0,
    pausable: !1,
    dismissable: !0,
    reversed: !1,
    intro: { x: 256 }
  },
  A = () => {
    const { subscribe: a, update: s } = M([]);
    let i = 0;
    const l = {},
      u = e => e instanceof Object;
    return {
      subscribe: a,
      push: (e, n = {}) => {
        const c = { target: 'default', ...(u(e) ? e : { ...n, msg: e }) },
          o = l[c.target] || {},
          d = {
            ...z,
            ...o,
            ...c,
            theme: { ...o.theme, ...c.theme },
            classes: [...(o.classes || []), ...(c.classes || [])],
            id: ++i
          };
        return s(f => (d.reversed ? [...f, d] : [d, ...f])), i;
      },
      pop: e => {
        s(n => {
          if (!n.length || e === 0) return [];
          if (u(e)) return n.filter(o => e(o));
          const c = e || Math.max(...n.map(o => o.id));
          return n.filter(o => o.id !== c);
        });
      },
      set: (e, n = {}) => {
        const c = u(e) ? { ...e } : { ...n, id: e };
        s(o => {
          const d = o.findIndex(f => f.id === c.id);
          return d > -1 && (o[d] = { ...o[d], ...c }), o;
        });
      },
      _init: (e = 'default', n = {}) => ((l[e] = n), l)
    };
  },
  K = A();
function D(a) {
  let s, i, l, u, b;
  const g = a[5].default,
    r = w(g, a, a[4], null);
  return {
    c() {
      (s = k('button')), r && r.c(), this.h();
    },
    l(t) {
      s = S(t, 'BUTTON', { title: !0, class: !0 });
      var e = N(s);
      r && r.l(e), e.forEach(h), this.h();
    },
    h() {
      _(s, 'title', a[1]),
        _(
          s,
          'class',
          (i = `p-2 text-white ${a[2]} rounded-md shadow hover:shadow-lg transition-all duration-200 ${a[0]}`)
        );
    },
    m(t, e) {
      T(t, s, e), r && r.m(s, null), (l = !0), u || ((b = B(s, 'click', a[6])), (u = !0));
    },
    p(t, [e]) {
      r && r.p && (!l || e & 16) && C(r, g, t, t[4], l ? j(g, t[4], e, null) : I(t[4]), null),
        (!l || e & 2) && _(s, 'title', t[1]),
        (!l ||
          (e & 5 &&
            i !==
              (i = `p-2 text-white ${t[2]} rounded-md shadow hover:shadow-lg transition-all duration-200 ${t[0]}`))) &&
          _(s, 'class', i);
    },
    i(t) {
      l || (O(r, t), (l = !0));
    },
    o(t) {
      q(r, t), (l = !1);
    },
    d(t) {
      t && h(s), r && r.d(t), (u = !1), b();
    }
  };
}
function F(a, s, i) {
  let { $$slots: l = {}, $$scope: u } = s,
    { type: b } = s,
    { className: g = '' } = s,
    { title: r } = s,
    t;
  switch (b) {
    case 'primary':
      t = 'bg-blue-600 hover:bg-blue-500';
      break;
    case 'submit':
      t = 'bg-green-600 hover:bg-green-500';
      break;
    case 'warning':
      t = 'bg-orange-600 hover:bg-orange-500';
      break;
    case 'breaking':
      t = 'bg-red-600 hover:bg-red-500';
      break;
    case 'muted':
      t = 'bg-gray-600 hover:bg-gray-500';
      break;
    default:
      t = 'bg-blue-600 hover:bg-blue-500';
      break;
  }
  function e(n) {
    E.call(this, a, n);
  }
  return (
    (a.$$set = n => {
      'type' in n && i(3, (b = n.type)),
        'className' in n && i(0, (g = n.className)),
        'title' in n && i(1, (r = n.title)),
        '$$scope' in n && i(4, (u = n.$$scope));
    }),
    [g, r, t, b, u, l, e]
  );
}
class L extends p {
  constructor(s) {
    super(), v(this, s, F, D, y, { type: 3, className: 0, title: 1 });
  }
}
export { L as B, J as p, K as t };
