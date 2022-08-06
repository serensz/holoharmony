import {
  S as Ve,
  i as He,
  s as Le,
  l as m,
  F as T,
  a as V,
  r as D,
  m as _,
  n as f,
  G as N,
  h as c,
  c as H,
  u as B,
  p as t,
  b as G,
  H as l,
  I as we,
  E as _e,
  J as xt,
  K as Ee,
  o as $t,
  v as jt,
  L as Ze,
  M as At,
  C as Qe,
  N as Mt,
  O as Ct,
  P as Te,
  g as et,
  t as ue,
  d as tt,
  f as ce,
  Q as St,
  R as Tt,
  e as qe,
  T as Dt,
  w as xe,
  x as Ne,
  y as $e,
  z as Nt,
  A as Bt,
  B as Ie,
  U as Pt,
  V as kt,
  W as Vt,
  X as Ht,
  Y as Lt,
  Z as Ot,
  _ as Rt,
  $ as zt,
  a0 as Ut,
  a1 as qt,
  a2 as Gt,
  a3 as Ft,
  a4 as Jt,
  a5 as Kt
} from '../chunks/index-82e3b787.js';
import { i as De, p as Qt, t as Wt, l as Xt, r as Ge, e as vt } from '../chunks/util-4be2a3ca.js';
import { g as Pe } from '../chunks/navigation-75a744b1.js';
import { p as We, t as Xe, B as Yt } from '../chunks/Button-88d2cbd5.js';
import { w as Zt } from '../chunks/index-950c601e.js';
import '../chunks/singletons-eca981c1.js';
function er(n) {
  let e, r, o;
  return {
    c() {
      (e = m('span')), (r = D(n[0])), this.h();
    },
    l(s) {
      e = _(s, 'SPAN', { class: !0 });
      var i = f(e);
      (r = B(i, n[0])), i.forEach(c), this.h();
    },
    h() {
      t(
        e,
        'class',
        (o = `absolute rotate-45 text-${n[1]} text-sm -right-${n[0].length > 3 ? '7' : '2'}`)
      );
    },
    m(s, i) {
      G(s, e, i), l(e, r);
    },
    p(s, i) {
      i & 1 && jt(r, s[0]),
        i & 3 &&
          o !==
            (o = `absolute rotate-45 text-${s[1]} text-sm -right-${s[0].length > 3 ? '7' : '2'}`) &&
          t(e, 'class', o);
    },
    d(s) {
      s && c(e);
    }
  };
}
function tr(n) {
  let e, r;
  return {
    c() {
      (e = m('span')), (r = D('stats')), this.h();
    },
    l(o) {
      e = _(o, 'SPAN', { class: !0 });
      var s = f(e);
      (r = B(s, 'stats')), s.forEach(c), this.h();
    },
    h() {
      t(e, 'class', 'absolute rotate-45 text-amber-400 text-sm -right-7');
    },
    m(o, s) {
      G(o, e, s), l(e, r);
    },
    p: _e,
    d(o) {
      o && c(e);
    }
  };
}
function rr(n) {
  let e, r;
  return {
    c() {
      (e = m('span')), (r = D('shuffle')), this.h();
    },
    l(o) {
      e = _(o, 'SPAN', { class: !0 });
      var s = f(e);
      (r = B(s, 'shuffle')), s.forEach(c), this.h();
    },
    h() {
      t(e, 'class', 'absolute rotate-45 text-red-600 text-sm -right-9');
    },
    m(o, s) {
      G(o, e, s), l(e, r);
    },
    p: _e,
    d(o) {
      o && c(e);
    }
  };
}
function sr(n) {
  let e, r;
  return {
    c() {
      (e = m('span')), (r = D('custom')), this.h();
    },
    l(o) {
      e = _(o, 'SPAN', { class: !0 });
      var s = f(e);
      (r = B(s, 'custom')), s.forEach(c), this.h();
    },
    h() {
      t(e, 'class', 'absolute rotate-45 text-green-500 text-sm -right-9');
    },
    m(o, s) {
      G(o, e, s), l(e, r);
    },
    p: _e,
    d(o) {
      o && c(e);
    }
  };
}
function or(n) {
  let e, r, o, s, i;
  return {
    c() {
      (e = m('span')), (r = D('custom')), (o = V()), (s = m('span')), (i = D('shuffle')), this.h();
    },
    l(d) {
      e = _(d, 'SPAN', { class: !0 });
      var u = f(e);
      (r = B(u, 'custom')), u.forEach(c), (o = H(d)), (s = _(d, 'SPAN', { class: !0 }));
      var a = f(s);
      (i = B(a, 'shuffle')), a.forEach(c), this.h();
    },
    h() {
      t(e, 'class', 'absolute rotate-45 text-green-500 text-sm -right-12 -top-1'),
        t(s, 'class', 'absolute rotate-45 text-red-600 text-sm -right-10 top-2');
    },
    m(d, u) {
      G(d, e, u), l(e, r), G(d, o, u), G(d, s, u), l(s, i);
    },
    p: _e,
    d(d) {
      d && c(e), d && c(o), d && c(s);
    }
  };
}
function nr(n) {
  let e,
    r,
    o,
    s,
    i,
    d,
    u,
    a,
    h,
    p,
    k,
    v,
    y,
    g,
    w,
    E,
    x,
    Q,
    M,
    j,
    le,
    z,
    re,
    F,
    ae,
    A,
    L,
    I,
    b,
    $,
    C,
    O,
    Y,
    Z,
    se,
    de,
    ge,
    ye,
    je;
  function ke(S, P) {
    if (
      (P & 12 && (z = null),
      P & 4 && (re = null),
      P & 4 && (F = null),
      z == null && (z = !!(S[2].url.href.includes('custom') && S[3])),
      z)
    )
      return or;
    if ((re == null && (re = !!S[2].url.href.includes('custom')), re)) return sr;
    if (S[3]) return rr;
    if ((F == null && (F = !!S[2].url.href.includes('stats')), F)) return tr;
    if (S[0]) return er;
  }
  let fe = ke(n, -1),
    R = fe && fe(n);
  return {
    c() {
      (e = m('div')),
        (r = m('header')),
        (o = m('div')),
        (s = m('div')),
        (i = m('div')),
        (d = m('button')),
        (u = T('svg')),
        (a = T('path')),
        (h = V()),
        (p = m('button')),
        (k = T('svg')),
        (v = T('rect')),
        (y = T('path')),
        (g = T('polyline')),
        (w = T('polyline')),
        (E = T('path')),
        (x = T('path')),
        (Q = V()),
        (M = m('div')),
        (j = m('h1')),
        (le = D(`audial
                        `)),
        R && R.c(),
        (ae = V()),
        (A = m('div')),
        (L = m('button')),
        (I = T('svg')),
        (b = T('path')),
        ($ = V()),
        (C = m('button')),
        (O = T('svg')),
        (Y = T('circle')),
        (Z = T('path')),
        (se = T('line')),
        (de = V()),
        (ge = m('div')),
        this.h();
    },
    l(S) {
      e = _(S, 'DIV', {});
      var P = f(e);
      r = _(P, 'HEADER', { class: !0 });
      var oe = f(r);
      o = _(oe, 'DIV', { class: !0 });
      var Ae = f(o);
      s = _(Ae, 'DIV', { class: !0 });
      var he = f(s);
      i = _(he, 'DIV', { class: !0 });
      var ie = f(i);
      d = _(ie, 'BUTTON', { class: !0, title: !0 });
      var U = f(d);
      u = N(U, 'svg', {
        class: !0,
        fill: !0,
        stroke: !0,
        'stroke-width': !0,
        viewBox: !0,
        xmlns: !0
      });
      var pe = f(u);
      (a = N(pe, 'path', { d: !0, 'stroke-linecap': !0, 'stroke-linejoin': !0 })),
        f(a).forEach(c),
        pe.forEach(c),
        U.forEach(c),
        (h = H(ie)),
        (p = _(ie, 'BUTTON', { class: !0, title: !0 }));
      var ee = f(p);
      k = N(ee, 'svg', { fill: !0, height: !0, viewBox: !0, width: !0, xmlns: !0 });
      var q = f(k);
      (v = N(q, 'rect', { fill: !0, height: !0, width: !0 })),
        f(v).forEach(c),
        (y = N(q, 'path', {
          d: !0,
          fill: !0,
          stroke: !0,
          'stroke-linecap': !0,
          'stroke-linejoin': !0,
          'stroke-width': !0
        })),
        f(y).forEach(c),
        (g = N(q, 'polyline', {
          fill: !0,
          points: !0,
          stroke: !0,
          'stroke-linecap': !0,
          'stroke-linejoin': !0,
          'stroke-width': !0
        })),
        f(g).forEach(c),
        (w = N(q, 'polyline', {
          fill: !0,
          points: !0,
          stroke: !0,
          'stroke-linecap': !0,
          'stroke-linejoin': !0,
          'stroke-width': !0
        })),
        f(w).forEach(c),
        (E = N(q, 'path', {
          d: !0,
          fill: !0,
          stroke: !0,
          'stroke-linecap': !0,
          'stroke-linejoin': !0,
          'stroke-width': !0
        })),
        f(E).forEach(c),
        (x = N(q, 'path', {
          d: !0,
          fill: !0,
          stroke: !0,
          'stroke-linecap': !0,
          'stroke-linejoin': !0,
          'stroke-width': !0
        })),
        f(x).forEach(c),
        q.forEach(c),
        ee.forEach(c),
        ie.forEach(c),
        (Q = H(he)),
        (M = _(he, 'DIV', {}));
      var te = f(M);
      j = _(te, 'H1', { class: !0 });
      var W = f(j);
      (le = B(
        W,
        `audial
                        `
      )),
        R && R.l(W),
        W.forEach(c),
        te.forEach(c),
        (ae = H(he)),
        (A = _(he, 'DIV', { class: !0 }));
      var K = f(A);
      L = _(K, 'BUTTON', { class: !0, title: !0 });
      var Me = f(L);
      I = N(Me, 'svg', {
        fill: !0,
        height: !0,
        stroke: !0,
        'stroke-linecap': !0,
        'stroke-linejoin': !0,
        'stroke-width': !0,
        viewBox: !0,
        width: !0,
        xmlns: !0
      });
      var Ce = f(I);
      (b = N(Ce, 'path', { d: !0 })),
        f(b).forEach(c),
        Ce.forEach(c),
        Me.forEach(c),
        ($ = H(K)),
        (C = _(K, 'BUTTON', { class: !0, title: !0 }));
      var ve = f(C);
      O = N(ve, 'svg', {
        fill: !0,
        height: !0,
        stroke: !0,
        'stroke-linecap': !0,
        'stroke-linejoin': !0,
        'stroke-width': !0,
        viewBox: !0,
        width: !0,
        xmlns: !0
      });
      var X = f(O);
      (Y = N(X, 'circle', { cx: !0, cy: !0, r: !0 })),
        f(Y).forEach(c),
        (Z = N(X, 'path', { d: !0 })),
        f(Z).forEach(c),
        (se = N(X, 'line', { x1: !0, x2: !0, y1: !0, y2: !0 })),
        f(se).forEach(c),
        X.forEach(c),
        ve.forEach(c),
        K.forEach(c),
        he.forEach(c),
        Ae.forEach(c),
        (de = H(oe)),
        (ge = _(oe, 'DIV', { class: !0 })),
        f(ge).forEach(c),
        oe.forEach(c),
        P.forEach(c),
        this.h();
    },
    h() {
      t(
        a,
        'd',
        'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
      ),
        t(a, 'stroke-linecap', 'round'),
        t(a, 'stroke-linejoin', 'round'),
        t(u, 'class', 'h-6 w-6'),
        t(u, 'fill', 'none'),
        t(u, 'stroke', 'currentColor'),
        t(u, 'stroke-width', '2'),
        t(u, 'viewBox', '0 0 24 24'),
        t(u, 'xmlns', 'http://www.w3.org/2000/svg'),
        t(
          d,
          'class',
          'px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500'
        ),
        t(d, 'title', 'Custom Playlist'),
        t(v, 'fill', 'none'),
        t(v, 'height', '256'),
        t(v, 'width', '256'),
        t(y, 'd', 'M32,72H55.1a64,64,0,0,1,52,26.8l41.8,58.4a64,64,0,0,0,52,26.8H232'),
        t(y, 'fill', 'none'),
        t(y, 'stroke', 'currentColor'),
        t(y, 'stroke-linecap', 'round'),
        t(y, 'stroke-linejoin', 'round'),
        t(y, 'stroke-width', '24'),
        t(g, 'fill', 'none'),
        t(g, 'points', '208 48 232 72 208 96'),
        t(g, 'stroke', 'currentColor'),
        t(g, 'stroke-linecap', 'round'),
        t(g, 'stroke-linejoin', 'round'),
        t(g, 'stroke-width', '24'),
        t(w, 'fill', 'none'),
        t(w, 'points', '208 160 232 184 208 208'),
        t(w, 'stroke', 'currentColor'),
        t(w, 'stroke-linecap', 'round'),
        t(w, 'stroke-linejoin', 'round'),
        t(w, 'stroke-width', '24'),
        t(E, 'd', 'M152.8,93.9A63.7,63.7,0,0,1,200.9,72H232'),
        t(E, 'fill', 'none'),
        t(E, 'stroke', 'currentColor'),
        t(E, 'stroke-linecap', 'round'),
        t(E, 'stroke-linejoin', 'round'),
        t(E, 'stroke-width', '24'),
        t(x, 'd', 'M32,184H55.1a63.7,63.7,0,0,0,48.1-21.9'),
        t(x, 'fill', 'none'),
        t(x, 'stroke', 'currentColor'),
        t(x, 'stroke-linecap', 'round'),
        t(x, 'stroke-linejoin', 'round'),
        t(x, 'stroke-width', '24'),
        t(k, 'fill', 'currentColor'),
        t(k, 'height', '25'),
        t(k, 'viewBox', '0 0 256 256'),
        t(k, 'width', '25'),
        t(k, 'xmlns', 'http://www.w3.org/2000/svg'),
        t(
          p,
          'class',
          'px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500'
        ),
        t(p, 'title', 'Random Song'),
        t(i, 'class', 'flex flex-1'),
        t(
          j,
          'class',
          'text-3xl font-bold flex-grow text-center flex-1 cursor-pointer text-white relative hover:underline underline-offset-1 decoration-blue-500 hover:text-blue-500'
        ),
        t(b, 'd', 'M12 20v-6M6 20V10M18 20V4'),
        t(I, 'fill', 'none'),
        t(I, 'height', '24'),
        t(I, 'stroke', 'currentColor'),
        t(I, 'stroke-linecap', 'round'),
        t(I, 'stroke-linejoin', 'round'),
        t(I, 'stroke-width', '2'),
        t(I, 'viewBox', '0 0 24 24'),
        t(I, 'width', '24'),
        t(I, 'xmlns', 'http://www.w3.org/2000/svg'),
        t(
          L,
          'class',
          'px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-600'
        ),
        t(L, 'title', 'View Statistics'),
        t(Y, 'cx', '12'),
        t(Y, 'cy', '12'),
        t(Y, 'r', '10'),
        t(Z, 'd', 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'),
        t(se, 'x1', '12'),
        t(se, 'x2', '12.01'),
        t(se, 'y1', '17'),
        t(se, 'y2', '17'),
        t(O, 'fill', 'none'),
        t(O, 'height', '24'),
        t(O, 'stroke', 'currentColor'),
        t(O, 'stroke-linecap', 'round'),
        t(O, 'stroke-linejoin', 'round'),
        t(O, 'stroke-width', '2'),
        t(O, 'viewBox', '0 0 24 24'),
        t(O, 'width', '24'),
        t(O, 'xmlns', 'http://www.w3.org/2000/svg'),
        t(
          C,
          'class',
          'px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-600'
        ),
        t(C, 'title', 'View Instructions'),
        t(A, 'class', 'flex flex-1 justify-end'),
        t(s, 'class', 'flex justify-evenly p-3 items-center'),
        t(o, 'class', 'max-w-screen-md mx-auto '),
        t(
          ge,
          'class',
          'hidden text-indigo-500 text-yellow-400 text-teal-500 text-orange-500 text-purple-500 text-cyan-500 text-emerald-500'
        ),
        t(r, 'class', 'border-b border-gray-500');
    },
    m(S, P) {
      G(S, e, P),
        l(e, r),
        l(r, o),
        l(o, s),
        l(s, i),
        l(i, d),
        l(d, u),
        l(u, a),
        l(i, h),
        l(i, p),
        l(p, k),
        l(k, v),
        l(k, y),
        l(k, g),
        l(k, w),
        l(k, E),
        l(k, x),
        l(s, Q),
        l(s, M),
        l(M, j),
        l(j, le),
        R && R.m(j, null),
        l(s, ae),
        l(s, A),
        l(A, L),
        l(L, I),
        l(I, b),
        l(A, $),
        l(A, C),
        l(C, O),
        l(O, Y),
        l(O, Z),
        l(O, se),
        l(r, de),
        l(r, ge),
        ye ||
          ((je = [
            we(d, 'click', n[5]),
            we(p, 'click', n[4]),
            we(j, 'click', n[6]),
            we(L, 'click', n[7]),
            we(C, 'click', n[8])
          ]),
          (ye = !0));
    },
    p(S, [P]) {
      fe === (fe = ke(S, P)) && R
        ? R.p(S, P)
        : (R && R.d(1), (R = fe && fe(S)), R && (R.c(), R.m(j, null)));
    },
    i: _e,
    o: _e,
    d(S) {
      S && c(e), R && R.d(), (ye = !1), xt(je);
    }
  };
}
function lr(n, e, r) {
  let o, s, i;
  Ee(n, We, y => r(2, (o = y))), Ee(n, De, y => r(3, (s = y))), Ee(n, Qt, y => r(9, (i = y)));
  let d, u;
  return (
    $t(() => {
      switch (new Date().getDay()) {
        case 0:
          r(0, (d = '50s')), r(1, (u = 'yellow-400'));
          break;
        case 1:
          r(0, (d = '80s')), r(1, (u = 'teal-500'));
          break;
        case 2:
          r(0, (d = '2000s')), r(1, (u = 'purple-500'));
          break;
        case 3:
          r(0, (d = '70s')), r(1, (u = 'emerald-500'));
          break;
        case 4:
          r(0, (d = '60s')), r(1, (u = 'orange-500'));
          break;
        case 5:
          r(0, (d = '2010s')), r(1, (u = 'indigo-500'));
          break;
        case 6:
          r(0, (d = '90s')), r(1, (u = 'cyan-500'));
          break;
      }
    }),
    [
      d,
      u,
      o,
      s,
      async () => {
        De.set(!0),
          o.url.pathname.includes('/random')
            ? (Wt.set({ attempts: 0, type: 'random', guesses: [], date: new Date(), correct: !1 }),
              await Xt(i, s))
            : o.url.pathname.includes('/custom')
            ? (De.set(!0), await Pe(o.url.pathname + '/random' + o.url.search))
            : (De.set(!0), await Pe('/random'));
      },
      () => Pe('/custom'),
      () => Pe('/'),
      () => Pe('/stats'),
      () => Ge.set(!1)
    ]
  );
}
class ar extends Ve {
  constructor(e) {
    super(), He(this, e, lr, nr, Le, {});
  }
}
function It(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function ir(n, { delay: e = 0, duration: r = 400, easing: o = Ze } = {}) {
  const s = +getComputedStyle(n).opacity;
  return { delay: e, duration: r, easing: o, css: i => `opacity: ${i * s}` };
}
function ur(
  n,
  { delay: e = 0, duration: r = 400, easing: o = It, x: s = 0, y: i = 0, opacity: d = 0 } = {}
) {
  const u = getComputedStyle(n),
    a = +u.opacity,
    h = u.transform === 'none' ? '' : u.transform,
    p = a * (1 - d);
  return {
    delay: e,
    duration: r,
    easing: o,
    css: (k, v) => `
			transform: ${h} translate(${(1 - k) * s}px, ${(1 - k) * i}px);
			opacity: ${a - p * v}`
  };
}
function cr(n, { from: e, to: r }, o = {}) {
  const s = getComputedStyle(n),
    i = s.transform === 'none' ? '' : s.transform,
    [d, u] = s.transformOrigin.split(' ').map(parseFloat),
    a = e.left + (e.width * d) / r.width - (r.left + d),
    h = e.top + (e.height * u) / r.height - (r.top + u),
    { delay: p = 0, duration: k = y => Math.sqrt(y) * 120, easing: v = It } = o;
  return {
    delay: p,
    duration: At(k) ? k(Math.sqrt(a * a + h * h)) : k,
    easing: v,
    css: (y, g) => {
      const w = g * a,
        E = g * h,
        x = y + (g * e.width) / r.width,
        Q = y + (g * e.height) / r.height;
      return `transform: ${i} translate(${w}px, ${E}px) scale(${x}, ${Q});`;
    }
  };
}
function wt(n) {
  return Object.prototype.toString.call(n) === '[object Date]';
}
function Ye(n, e) {
  if (n === e || n !== n) return () => n;
  const r = typeof n;
  if (r !== typeof e || Array.isArray(n) !== Array.isArray(e))
    throw new Error('Cannot interpolate values of different type');
  if (Array.isArray(n)) {
    const o = e.map((s, i) => Ye(n[i], s));
    return s => o.map(i => i(s));
  }
  if (r === 'object') {
    if (!n || !e) throw new Error('Object cannot be null');
    if (wt(n) && wt(e)) {
      (n = n.getTime()), (e = e.getTime());
      const i = e - n;
      return d => new Date(n + d * i);
    }
    const o = Object.keys(e),
      s = {};
    return (
      o.forEach(i => {
        s[i] = Ye(n[i], e[i]);
      }),
      i => {
        const d = {};
        return (
          o.forEach(u => {
            d[u] = s[u](i);
          }),
          d
        );
      }
    );
  }
  if (r === 'number') {
    const o = e - n;
    return s => n + s * o;
  }
  throw new Error(`Cannot interpolate ${r} values`);
}
function dr(n, e = {}) {
  const r = Zt(n);
  let o,
    s = n;
  function i(d, u) {
    if (n == null) return r.set((n = d)), Promise.resolve();
    s = d;
    let a = o,
      h = !1,
      { delay: p = 0, duration: k = 400, easing: v = Ze, interpolate: y = Ye } = Qe(Qe({}, e), u);
    if (k === 0) return a && (a.abort(), (a = null)), r.set((n = s)), Promise.resolve();
    const g = Mt() + p;
    let w;
    return (
      (o = Ct(E => {
        if (E < g) return !0;
        h || ((w = y(n, d)), typeof k == 'function' && (k = k(n, d)), (h = !0)),
          a && (a.abort(), (a = null));
        const x = E - g;
        return x > k ? (r.set((n = d)), !1) : (r.set((n = w(v(x / k)))), !0);
      })),
      o.promise
    );
  }
  return { set: i, update: (d, u) => i(d(s, n), u), subscribe: r.subscribe };
}
function fr(n) {
  let e,
    r = n[0].msg + '',
    o;
  return {
    c() {
      (e = new Tt(!1)), (o = qe()), this.h();
    },
    l(s) {
      (e = Dt(s, !1)), (o = qe()), this.h();
    },
    h() {
      e.a = o;
    },
    m(s, i) {
      e.m(r, s, i), G(s, o, i);
    },
    p(s, i) {
      i & 1 && r !== (r = s[0].msg + '') && e.p(r);
    },
    i: _e,
    o: _e,
    d(s) {
      s && c(o), s && e.d();
    }
  };
}
function hr(n) {
  let e, r, o;
  const s = [n[6]()];
  var i = n[0].component.src;
  function d(u) {
    let a = {};
    for (let h = 0; h < s.length; h += 1) a = Qe(a, s[h]);
    return { props: a };
  }
  return (
    i && (e = new i(d())),
    {
      c() {
        e && xe(e.$$.fragment), (r = qe());
      },
      l(u) {
        e && Ne(e.$$.fragment, u), (r = qe());
      },
      m(u, a) {
        e && $e(e, u, a), G(u, r, a), (o = !0);
      },
      p(u, a) {
        const h = a & 64 ? Nt(s, [Bt(u[6]())]) : {};
        if (i !== (i = u[0].component.src)) {
          if (e) {
            et();
            const p = e;
            ue(p.$$.fragment, 1, 0, () => {
              Ie(p, 1);
            }),
              tt();
          }
          i
            ? ((e = new i(d())), xe(e.$$.fragment), ce(e.$$.fragment, 1), $e(e, r.parentNode, r))
            : (e = null);
        } else i && e.$set(h);
      },
      i(u) {
        o || (e && ce(e.$$.fragment, u), (o = !0));
      },
      o(u) {
        e && ue(e.$$.fragment, u), (o = !1);
      },
      d(u) {
        u && c(r), e && Ie(e, u);
      }
    }
  );
}
function yt(n) {
  let e, r, o, s;
  return {
    c() {
      (e = m('div')), (r = D('\u2715')), this.h();
    },
    l(i) {
      e = _(i, 'DIV', { class: !0, role: !0, tabindex: !0 });
      var d = f(e);
      (r = B(d, '\u2715')), d.forEach(c), this.h();
    },
    h() {
      t(e, 'class', '_toastBtn pe svelte-5er0t9'), t(e, 'role', 'button'), t(e, 'tabindex', '-1');
    },
    m(i, d) {
      G(i, e, d), l(e, r), o || ((s = we(e, 'click', n[3])), (o = !0));
    },
    p: _e,
    d(i) {
      i && c(e), (o = !1), s();
    }
  };
}
function pr(n) {
  let e, r, o, s, i, d, u, a, h, p;
  const k = [hr, fr],
    v = [];
  function y(w, E) {
    return w[0].component ? 0 : 1;
  }
  (o = y(n)), (s = v[o] = k[o](n));
  let g = n[0].dismissable && yt(n);
  return {
    c() {
      (e = m('div')),
        (r = m('div')),
        s.c(),
        (i = V()),
        g && g.c(),
        (d = V()),
        (u = m('progress')),
        this.h();
    },
    l(w) {
      e = _(w, 'DIV', { class: !0 });
      var E = f(e);
      r = _(E, 'DIV', { role: !0, class: !0 });
      var x = f(r);
      s.l(x),
        x.forEach(c),
        (i = H(E)),
        g && g.l(E),
        (d = H(E)),
        (u = _(E, 'PROGRESS', { class: !0 })),
        f(u).forEach(c),
        E.forEach(c),
        this.h();
    },
    h() {
      t(r, 'role', 'status'),
        t(r, 'class', '_toastMsg svelte-5er0t9'),
        Te(r, 'pe', n[0].component),
        t(u, 'class', '_toastBar svelte-5er0t9'),
        (u.value = n[1]),
        t(e, 'class', '_toastItem svelte-5er0t9'),
        Te(e, 'pe', n[0].pausable);
    },
    m(w, E) {
      G(w, e, E),
        l(e, r),
        v[o].m(r, null),
        l(e, i),
        g && g.m(e, null),
        l(e, d),
        l(e, u),
        (a = !0),
        h || ((p = [we(e, 'mouseenter', n[4]), we(e, 'mouseleave', n[5])]), (h = !0));
    },
    p(w, [E]) {
      let x = o;
      (o = y(w)),
        o === x
          ? v[o].p(w, E)
          : (et(),
            ue(v[x], 1, 1, () => {
              v[x] = null;
            }),
            tt(),
            (s = v[o]),
            s ? s.p(w, E) : ((s = v[o] = k[o](w)), s.c()),
            ce(s, 1),
            s.m(r, null)),
        E & 1 && Te(r, 'pe', w[0].component),
        w[0].dismissable
          ? g
            ? g.p(w, E)
            : ((g = yt(w)), g.c(), g.m(e, d))
          : g && (g.d(1), (g = null)),
        (!a || E & 2) && (u.value = w[1]),
        E & 1 && Te(e, 'pe', w[0].pausable);
    },
    i(w) {
      a || (ce(s), (a = !0));
    },
    o(w) {
      ue(s), (a = !1);
    },
    d(w) {
      w && c(e), v[o].d(), g && g.d(), (h = !1), xt(p);
    }
  };
}
function mr(n, e, r) {
  let o,
    { item: s } = e;
  const i = dr(s.initial, { duration: s.duration, easing: Ze });
  Ee(n, i, g => r(1, (o = g)));
  const d = () => Xe.pop(s.id),
    u = () => {
      (o === 1 || o === 0) && d();
    };
  let a = s.initial,
    h = a,
    p = !1;
  const k = () => {
      s.pausable && !p && o !== a && (i.set(o, { duration: 0 }), (p = !0));
    },
    v = () => {
      if (p) {
        const g = s.duration,
          w = g - g * ((o - h) / (a - h));
        i.set(a, { duration: w }).then(u), (p = !1);
      }
    },
    y = () => {
      const { props: g = {}, sendIdTo: w } = s.component;
      return w && (g[w] = s.id), g;
    };
  return (
    St(() => {
      typeof s.onpop == 'function' && s.onpop(s.id);
    }),
    (n.$$set = g => {
      'item' in g && r(0, (s = g.item));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1 && typeof s.progress < 'u' && r(0, (s.next = s.progress), s),
        n.$$.dirty & 131 &&
          a !== s.next &&
          (r(7, (a = s.next)), (h = o), (p = !1), i.set(a).then(u));
    }),
    [s, o, i, d, k, v, y, a]
  );
}
class _r extends Ve {
  constructor(e) {
    super(), He(this, e, mr, pr, Le, { item: 0 });
  }
}
function bt(n, e, r) {
  const o = n.slice();
  return (o[5] = e[r]), o;
}
function Et(n, e) {
  let r,
    o,
    s,
    i,
    d,
    u,
    a,
    h,
    p = _e,
    k;
  return (
    (o = new _r({ props: { item: e[5] } })),
    {
      key: n,
      first: null,
      c() {
        (r = m('li')), xe(o.$$.fragment), (s = V()), this.h();
      },
      l(v) {
        r = _(v, 'LI', { class: !0, style: !0 });
        var y = f(r);
        Ne(o.$$.fragment, y), (s = H(y)), y.forEach(c), this.h();
      },
      h() {
        t(r, 'class', (i = kt(e[5].classes.join(' ')) + ' svelte-yh90az')),
          t(r, 'style', (d = e[1](e[5].theme))),
          (this.first = r);
      },
      m(v, y) {
        G(v, r, y), $e(o, r, null), l(r, s), (k = !0);
      },
      p(v, y) {
        e = v;
        const g = {};
        y & 1 && (g.item = e[5]),
          o.$set(g),
          (!k || (y & 1 && i !== (i = kt(e[5].classes.join(' ')) + ' svelte-yh90az'))) &&
            t(r, 'class', i),
          (!k || (y & 1 && d !== (d = e[1](e[5].theme)))) && t(r, 'style', d);
      },
      r() {
        h = r.getBoundingClientRect();
      },
      f() {
        Vt(r), p(), Ht(r, h);
      },
      a() {
        p(), (p = Lt(r, h, cr, { duration: 200 }));
      },
      i(v) {
        k ||
          (ce(o.$$.fragment, v),
          Ot(() => {
            a && a.end(1), (u = Rt(r, ur, e[5].intro)), u.start();
          }),
          (k = !0));
      },
      o(v) {
        ue(o.$$.fragment, v), u && u.invalidate(), (a = zt(r, ir, {})), (k = !1);
      },
      d(v) {
        v && c(r), Ie(o), v && a && a.end();
      }
    }
  );
}
function gr(n) {
  let e,
    r = [],
    o = new Map(),
    s,
    i = n[0];
  const d = u => u[5].id;
  for (let u = 0; u < i.length; u += 1) {
    let a = bt(n, i, u),
      h = d(a);
    o.set(h, (r[u] = Et(h, a)));
  }
  return {
    c() {
      e = m('ul');
      for (let u = 0; u < r.length; u += 1) r[u].c();
      this.h();
    },
    l(u) {
      e = _(u, 'UL', { class: !0 });
      var a = f(e);
      for (let h = 0; h < r.length; h += 1) r[h].l(a);
      a.forEach(c), this.h();
    },
    h() {
      t(e, 'class', '_toastContainer svelte-yh90az');
    },
    m(u, a) {
      G(u, e, a);
      for (let h = 0; h < r.length; h += 1) r[h].m(e, null);
      s = !0;
    },
    p(u, [a]) {
      if (a & 3) {
        (i = u[0]), et();
        for (let h = 0; h < r.length; h += 1) r[h].r();
        r = Pt(r, a, d, 1, u, i, o, e, Ut, Et, null, bt);
        for (let h = 0; h < r.length; h += 1) r[h].a();
        tt();
      }
    },
    i(u) {
      if (!s) {
        for (let a = 0; a < i.length; a += 1) ce(r[a]);
        s = !0;
      }
    },
    o(u) {
      for (let a = 0; a < r.length; a += 1) ue(r[a]);
      s = !1;
    },
    d(u) {
      u && c(e);
      for (let a = 0; a < r.length; a += 1) r[a].d();
    }
  };
}
function kr(n, e, r) {
  let o;
  Ee(n, Xe, a => r(4, (o = a)));
  let { options: s = {} } = e,
    { target: i = 'default' } = e,
    d;
  const u = a => Object.keys(a).reduce((h, p) => `${h}${p}:${a[p]};`, '');
  return (
    (n.$$set = a => {
      'options' in a && r(2, (s = a.options)), 'target' in a && r(3, (i = a.target));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 12 && Xe._init(i, s),
        n.$$.dirty & 24 && r(0, (d = o.filter(a => a.target === i)));
    }),
    [d, u, s, i, o]
  );
}
class vr extends Ve {
  constructor(e) {
    super(), He(this, e, kr, gr, Le, { options: 2, target: 3 });
  }
}
function wr(n) {
  let e;
  return {
    c() {
      e = D('start listening');
    },
    l(r) {
      e = B(r, 'start listening');
    },
    m(r, o) {
      G(r, e, o);
    },
    d(r) {
      r && c(e);
    }
  };
}
function yr(n) {
  let e,
    r,
    o,
    s,
    i,
    d,
    u,
    a,
    h,
    p,
    k,
    v,
    y,
    g,
    w,
    E,
    x,
    Q,
    M,
    j,
    le,
    z,
    re,
    F,
    ae,
    A,
    L,
    I,
    b,
    $,
    C,
    O,
    Y,
    Z,
    se,
    de,
    ge,
    ye,
    je,
    ke,
    fe,
    R,
    S,
    P,
    oe,
    Ae,
    he,
    ie,
    U,
    pe,
    ee,
    q,
    te,
    W,
    K,
    Me,
    Ce,
    ve,
    X,
    Oe,
    Fe,
    rt;
  return (
    (X = new Yt({
      props: {
        className: 'mx-auto text-center block',
        title: 'Close Popup',
        type: 'primary',
        $$slots: { default: [wr] },
        $$scope: { ctx: n }
      }
    })),
    X.$on('click', n[2]),
    {
      c() {
        (e = m('div')),
          (r = m('div')),
          (o = V()),
          (s = m('div')),
          (i = m('div')),
          (d = m('h1')),
          (u = D('instructions')),
          (a = V()),
          (h = m('div')),
          (p = m('ul')),
          (k = m('li')),
          (v = m('span')),
          (y = D('listen to the song snippet and type the name of the song into the box')),
          (g = V()),
          (w = m('li')),
          (E = m('span')),
          (x = D('if you get the song incorrect or press skip, more of the song will be revealed')),
          (Q = V()),
          (M = m('li')),
          (j = m('span')),
          (le = D('a ')),
          (z = m('span')),
          (re = D('red result')),
          (F = D(' means you guessed incorrectly.')),
          (ae = V()),
          (A = m('li')),
          (L = m('span')),
          (I = D('a ')),
          (b = m('span')),
          ($ = D('yellow result')),
          (C = D(' means the artist was correct.')),
          (O = V()),
          (Y = m('li')),
          (Z = m('span')),
          (se = D('a ')),
          (de = m('span')),
          (ge = D('green result')),
          (ye = D(' means your guess was correct!')),
          (je = V()),
          (ke = m('li')),
          (fe = D('hint: the colored text on the header describes the current active playlist')),
          (R = V()),
          (S = m('li')),
          (P = T('svg')),
          (oe = T('path')),
          (Ae = D(`
            for a custom playlist.`)),
          (he = V()),
          (ie = m('li')),
          (U = T('svg')),
          (pe = T('rect')),
          (ee = T('path')),
          (q = T('polyline')),
          (te = T('polyline')),
          (W = T('path')),
          (K = T('path')),
          (Me = D(`
            for audial shuffle.`)),
          (Ce = V()),
          (ve = m('div')),
          xe(X.$$.fragment),
          this.h();
      },
      l(ne) {
        e = _(ne, 'DIV', {});
        var me = f(e);
        (r = _(me, 'DIV', { class: !0 })),
          f(r).forEach(c),
          (o = H(me)),
          (s = _(me, 'DIV', { class: !0 }));
        var Be = f(s);
        i = _(Be, 'DIV', { class: !0 });
        var Se = f(i);
        d = _(Se, 'H1', { class: !0 });
        var st = f(d);
        (u = B(st, 'instructions')), st.forEach(c), (a = H(Se)), (h = _(Se, 'DIV', { class: !0 }));
        var ot = f(h);
        p = _(ot, 'UL', { class: !0 });
        var J = f(p);
        k = _(J, 'LI', {});
        var nt = f(k);
        v = _(nt, 'SPAN', {});
        var lt = f(v);
        (y = B(lt, 'listen to the song snippet and type the name of the song into the box')),
          lt.forEach(c),
          nt.forEach(c),
          (g = H(J)),
          (w = _(J, 'LI', {}));
        var at = f(w);
        E = _(at, 'SPAN', {});
        var it = f(E);
        (x = B(
          it,
          'if you get the song incorrect or press skip, more of the song will be revealed'
        )),
          it.forEach(c),
          at.forEach(c),
          (Q = H(J)),
          (M = _(J, 'LI', {}));
        var ut = f(M);
        j = _(ut, 'SPAN', {});
        var Re = f(j);
        (le = B(Re, 'a ')), (z = _(Re, 'SPAN', { class: !0 }));
        var ct = f(z);
        (re = B(ct, 'red result')),
          ct.forEach(c),
          (F = B(Re, ' means you guessed incorrectly.')),
          Re.forEach(c),
          ut.forEach(c),
          (ae = H(J)),
          (A = _(J, 'LI', {}));
        var dt = f(A);
        L = _(dt, 'SPAN', {});
        var ze = f(L);
        (I = B(ze, 'a ')), (b = _(ze, 'SPAN', { class: !0 }));
        var ft = f(b);
        ($ = B(ft, 'yellow result')),
          ft.forEach(c),
          (C = B(ze, ' means the artist was correct.')),
          ze.forEach(c),
          dt.forEach(c),
          (O = H(J)),
          (Y = _(J, 'LI', {}));
        var ht = f(Y);
        Z = _(ht, 'SPAN', {});
        var Ue = f(Z);
        (se = B(Ue, 'a ')), (de = _(Ue, 'SPAN', { class: !0 }));
        var pt = f(de);
        (ge = B(pt, 'green result')),
          pt.forEach(c),
          (ye = B(Ue, ' means your guess was correct!')),
          Ue.forEach(c),
          ht.forEach(c),
          (je = H(J)),
          (ke = _(J, 'LI', { class: !0 }));
        var mt = f(ke);
        (fe = B(mt, 'hint: the colored text on the header describes the current active playlist')),
          mt.forEach(c),
          (R = H(J)),
          (S = _(J, 'LI', { class: !0 }));
        var Je = f(S);
        P = N(Je, 'svg', {
          class: !0,
          fill: !0,
          stroke: !0,
          'stroke-width': !0,
          viewBox: !0,
          xmlns: !0
        });
        var _t = f(P);
        (oe = N(_t, 'path', { d: !0, 'stroke-linecap': !0, 'stroke-linejoin': !0 })),
          f(oe).forEach(c),
          _t.forEach(c),
          (Ae = B(
            Je,
            `
            for a custom playlist.`
          )),
          Je.forEach(c),
          (he = H(J)),
          (ie = _(J, 'LI', {}));
        var Ke = f(ie);
        U = N(Ke, 'svg', { class: !0, fill: !0, height: !0, viewBox: !0, width: !0, xmlns: !0 });
        var be = f(U);
        (pe = N(be, 'rect', { fill: !0, height: !0, width: !0 })),
          f(pe).forEach(c),
          (ee = N(be, 'path', {
            d: !0,
            fill: !0,
            stroke: !0,
            'stroke-linecap': !0,
            'stroke-linejoin': !0,
            'stroke-width': !0
          })),
          f(ee).forEach(c),
          (q = N(be, 'polyline', {
            fill: !0,
            points: !0,
            stroke: !0,
            'stroke-linecap': !0,
            'stroke-linejoin': !0,
            'stroke-width': !0
          })),
          f(q).forEach(c),
          (te = N(be, 'polyline', {
            fill: !0,
            points: !0,
            stroke: !0,
            'stroke-linecap': !0,
            'stroke-linejoin': !0,
            'stroke-width': !0
          })),
          f(te).forEach(c),
          (W = N(be, 'path', {
            d: !0,
            fill: !0,
            stroke: !0,
            'stroke-linecap': !0,
            'stroke-linejoin': !0,
            'stroke-width': !0
          })),
          f(W).forEach(c),
          (K = N(be, 'path', {
            d: !0,
            fill: !0,
            stroke: !0,
            'stroke-linecap': !0,
            'stroke-linejoin': !0,
            'stroke-width': !0
          })),
          f(K).forEach(c),
          be.forEach(c),
          (Me = B(
            Ke,
            `
            for audial shuffle.`
          )),
          Ke.forEach(c),
          J.forEach(c),
          ot.forEach(c),
          (Ce = H(Se)),
          (ve = _(Se, 'DIV', { class: !0 }));
        var gt = f(ve);
        Ne(X.$$.fragment, gt), gt.forEach(c), Se.forEach(c), Be.forEach(c), me.forEach(c), this.h();
      },
      h() {
        t(
          r,
          'class',
          'flex overflow-y-auto overflow-x-hidden fixed absolute right-0 left-0 z-40 justify-center items-center h-modal md:h-full md:inset-0 bg-black opacity-50'
        ),
          t(d, 'class', 'text-3xl mx-auto text-center'),
          t(z, 'class', 'text-red-500'),
          t(b, 'class', 'text-amber-400'),
          t(de, 'class', 'text-green-500'),
          t(ke, 'class', 'text-gray-400'),
          t(
            oe,
            'd',
            'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
          ),
          t(oe, 'stroke-linecap', 'round'),
          t(oe, 'stroke-linejoin', 'round'),
          t(P, 'class', 'h-5 w-5 inline text-blue-500'),
          t(P, 'fill', 'none'),
          t(P, 'stroke', 'currentColor'),
          t(P, 'stroke-width', '2'),
          t(P, 'viewBox', '0 0 24 24'),
          t(P, 'xmlns', 'http://www.w3.org/2000/svg'),
          t(S, 'class', 'border-t border-white mt-1 pt-2'),
          t(pe, 'fill', 'none'),
          t(pe, 'height', '256'),
          t(pe, 'width', '256'),
          t(ee, 'd', 'M32,72H55.1a64,64,0,0,1,52,26.8l41.8,58.4a64,64,0,0,0,52,26.8H232'),
          t(ee, 'fill', 'none'),
          t(ee, 'stroke', 'currentColor'),
          t(ee, 'stroke-linecap', 'round'),
          t(ee, 'stroke-linejoin', 'round'),
          t(ee, 'stroke-width', '24'),
          t(q, 'fill', 'none'),
          t(q, 'points', '208 48 232 72 208 96'),
          t(q, 'stroke', 'currentColor'),
          t(q, 'stroke-linecap', 'round'),
          t(q, 'stroke-linejoin', 'round'),
          t(q, 'stroke-width', '24'),
          t(te, 'fill', 'none'),
          t(te, 'points', '208 160 232 184 208 208'),
          t(te, 'stroke', 'currentColor'),
          t(te, 'stroke-linecap', 'round'),
          t(te, 'stroke-linejoin', 'round'),
          t(te, 'stroke-width', '24'),
          t(W, 'd', 'M152.8,93.9A63.7,63.7,0,0,1,200.9,72H232'),
          t(W, 'fill', 'none'),
          t(W, 'stroke', 'currentColor'),
          t(W, 'stroke-linecap', 'round'),
          t(W, 'stroke-linejoin', 'round'),
          t(W, 'stroke-width', '24'),
          t(K, 'd', 'M32,184H55.1a63.7,63.7,0,0,0,48.1-21.9'),
          t(K, 'fill', 'none'),
          t(K, 'stroke', 'currentColor'),
          t(K, 'stroke-linecap', 'round'),
          t(K, 'stroke-linejoin', 'round'),
          t(K, 'stroke-width', '24'),
          t(U, 'class', 'inline text-blue-500'),
          t(U, 'fill', 'currentColor'),
          t(U, 'height', '20'),
          t(U, 'viewBox', '0 0 256 256'),
          t(U, 'width', '20'),
          t(U, 'xmlns', 'http://www.w3.org/2000/svg'),
          t(p, 'class', 'text-left'),
          t(h, 'class', 'p-4'),
          t(ve, 'class', 'w-full'),
          t(
            i,
            'class',
            'rounded-lg w-full max-w-2xl mx-auto mt-20 bg-gray-700 p-3 opacity-100 shadow'
          ),
          t(s, 'class', 'absolute px-4 w-full h-full md:h-auto mx-auto z-50'),
          Te(e, 'hidden', n[0]);
      },
      m(ne, me) {
        G(ne, e, me),
          l(e, r),
          l(e, o),
          l(e, s),
          l(s, i),
          l(i, d),
          l(d, u),
          l(i, a),
          l(i, h),
          l(h, p),
          l(p, k),
          l(k, v),
          l(v, y),
          l(p, g),
          l(p, w),
          l(w, E),
          l(E, x),
          l(p, Q),
          l(p, M),
          l(M, j),
          l(j, le),
          l(j, z),
          l(z, re),
          l(j, F),
          l(p, ae),
          l(p, A),
          l(A, L),
          l(L, I),
          l(L, b),
          l(b, $),
          l(L, C),
          l(p, O),
          l(p, Y),
          l(Y, Z),
          l(Z, se),
          l(Z, de),
          l(de, ge),
          l(Z, ye),
          l(p, je),
          l(p, ke),
          l(ke, fe),
          l(p, R),
          l(p, S),
          l(S, P),
          l(P, oe),
          l(S, Ae),
          l(p, he),
          l(p, ie),
          l(ie, U),
          l(U, pe),
          l(U, ee),
          l(U, q),
          l(U, te),
          l(U, W),
          l(U, K),
          l(ie, Me),
          l(i, Ce),
          l(i, ve),
          $e(X, ve, null),
          (Oe = !0),
          Fe || ((rt = we(r, 'click', n[1])), (Fe = !0));
      },
      p(ne, [me]) {
        const Be = {};
        me & 8 && (Be.$$scope = { dirty: me, ctx: ne }),
          X.$set(Be),
          me & 1 && Te(e, 'hidden', ne[0]);
      },
      i(ne) {
        Oe || (ce(X.$$.fragment, ne), (Oe = !0));
      },
      o(ne) {
        ue(X.$$.fragment, ne), (Oe = !1);
      },
      d(ne) {
        ne && c(e), Ie(X), (Fe = !1), rt();
      }
    }
  );
}
function br(n, e, r) {
  let { hidden: o = !0 } = e;
  const s = () => {
      r(0, (o = !0)), Ge.set(!0);
    },
    i = () => {
      r(0, (o = !0)), Ge.set(!0);
    };
  return (
    (n.$$set = d => {
      'hidden' in d && r(0, (o = d.hidden));
    }),
    [o, s, i]
  );
}
class Er extends Ve {
  constructor(e) {
    super(), He(this, e, br, yr, Le, { hidden: 0 });
  }
}
function xr(n) {
  let e, r, o, s, i, d, u, a, h, p, k, v, y, g, w, E, x, Q, M, j, le, z, re, F, ae, A;
  (document.title = e = `audial${n[0].routeId ? ` - ${n[0].routeId.replace('/', ' ')}` : ''}`),
    (j = new Er({ props: { hidden: n[1] } })),
    (z = new vr({})),
    (F = new ar({}));
  const L = n[3].default,
    I = qt(L, n, n[2], null);
  return {
    c() {
      (r = m('meta')),
        (s = m('meta')),
        (i = m('meta')),
        (d = m('meta')),
        (a = m('meta')),
        (h = m('meta')),
        (p = m('meta')),
        (k = m('meta')),
        (v = m('meta')),
        (g = m('meta')),
        (E = m('meta')),
        (x = m('meta')),
        (Q = V()),
        (M = m('main')),
        xe(j.$$.fragment),
        (le = V()),
        xe(z.$$.fragment),
        (re = V()),
        xe(F.$$.fragment),
        (ae = V()),
        I && I.c(),
        this.h();
    },
    l(b) {
      const $ = Gt('[data-svelte="svelte-1y9sn3x"]', document.head);
      (r = _($, 'META', { content: !0, name: !0 })),
        (s = _($, 'META', { content: !0, name: !0 })),
        (i = _($, 'META', { content: !0, property: !0 })),
        (d = _($, 'META', { content: !0, property: !0 })),
        (a = _($, 'META', { content: !0, property: !0 })),
        (h = _($, 'META', { content: !0, property: !0 })),
        (p = _($, 'META', { content: !0, property: !0 })),
        (k = _($, 'META', { content: !0, property: !0 })),
        (v = _($, 'META', { content: !0, property: !0 })),
        (g = _($, 'META', { content: !0, property: !0 })),
        (E = _($, 'META', { content: !0, property: !0 })),
        (x = _($, 'META', { content: !0, property: !0 })),
        $.forEach(c),
        (Q = H(b)),
        (M = _(b, 'MAIN', { class: !0 }));
      var C = f(M);
      Ne(j.$$.fragment, C),
        (le = H(C)),
        Ne(z.$$.fragment, C),
        (re = H(C)),
        Ne(F.$$.fragment, C),
        (ae = H(C)),
        I && I.l(C),
        C.forEach(c),
        this.h();
    },
    h() {
      t(r, 'content', (o = `audial${n[0].routeId ? ` - ${n[0].routeId.replace('/', ' ')}` : ''}`)),
        t(r, 'name', 'title'),
        t(
          s,
          'content',
          'listen to the daily song snippet and guess it on audial, a wordle style game.'
        ),
        t(s, 'name', 'description'),
        t(i, 'content', 'website'),
        t(i, 'property', 'og:type'),
        t(d, 'content', (u = n[0].url.toString())),
        t(d, 'property', 'og:url'),
        t(a, 'content', 'audial'),
        t(a, 'property', 'og:title'),
        t(
          h,
          'content',
          'listen to the daily song snippet and guess it on audial, a wordle style game.'
        ),
        t(h, 'property', 'og:description'),
        t(p, 'content', '/icons/android-chrome-512x512.png'),
        t(p, 'property', 'og:image'),
        t(k, 'content', 'summary_small_image'),
        t(k, 'property', 'twitter:card'),
        t(v, 'content', (y = n[0].url.toString())),
        t(v, 'property', 'twitter:url'),
        t(
          g,
          'content',
          (w = `audial${n[0].routeId ? ` - ${n[0].routeId.replace('/', ' ')}` : ''}`)
        ),
        t(g, 'property', 'twitter:title'),
        t(
          E,
          'content',
          'listen to the daily song snippet and guess it on audial, a wordle style game.'
        ),
        t(E, 'property', 'twitter:description'),
        t(x, 'content', '/icons/android-chrome-512x512.png'),
        t(x, 'property', 'twitter:image'),
        t(M, 'class', '');
    },
    m(b, $) {
      l(document.head, r),
        l(document.head, s),
        l(document.head, i),
        l(document.head, d),
        l(document.head, a),
        l(document.head, h),
        l(document.head, p),
        l(document.head, k),
        l(document.head, v),
        l(document.head, g),
        l(document.head, E),
        l(document.head, x),
        G(b, Q, $),
        G(b, M, $),
        $e(j, M, null),
        l(M, le),
        $e(z, M, null),
        l(M, re),
        $e(F, M, null),
        l(M, ae),
        I && I.m(M, null),
        (A = !0);
    },
    p(b, [$]) {
      (!A || $ & 1) &&
        e !== (e = `audial${b[0].routeId ? ` - ${b[0].routeId.replace('/', ' ')}` : ''}`) &&
        (document.title = e),
        (!A ||
          ($ & 1 &&
            o !== (o = `audial${b[0].routeId ? ` - ${b[0].routeId.replace('/', ' ')}` : ''}`))) &&
          t(r, 'content', o),
        (!A || ($ & 1 && u !== (u = b[0].url.toString()))) && t(d, 'content', u),
        (!A || ($ & 1 && y !== (y = b[0].url.toString()))) && t(v, 'content', y),
        (!A ||
          ($ & 1 &&
            w !== (w = `audial${b[0].routeId ? ` - ${b[0].routeId.replace('/', ' ')}` : ''}`))) &&
          t(g, 'content', w);
      const C = {};
      $ & 2 && (C.hidden = b[1]),
        j.$set(C),
        I && I.p && (!A || $ & 4) && Ft(I, L, b, b[2], A ? Kt(L, b[2], $, null) : Jt(b[2]), null);
    },
    i(b) {
      A || (ce(j.$$.fragment, b), ce(z.$$.fragment, b), ce(F.$$.fragment, b), ce(I, b), (A = !0));
    },
    o(b) {
      ue(j.$$.fragment, b), ue(z.$$.fragment, b), ue(F.$$.fragment, b), ue(I, b), (A = !1);
    },
    d(b) {
      c(r),
        c(s),
        c(i),
        c(d),
        c(a),
        c(h),
        c(p),
        c(k),
        c(v),
        c(g),
        c(E),
        c(x),
        b && c(Q),
        b && c(M),
        Ie(j),
        Ie(z),
        Ie(F),
        I && I.d(b);
    }
  };
}
function $r(n, e, r) {
  let o, s;
  Ee(n, We, a => r(0, (o = a))), Ee(n, Ge, a => r(1, (s = a)));
  let { $$slots: i = {}, $$scope: d } = e,
    u = '/';
  return (
    We.subscribe(a => {
      a.url.pathname !== u && vt.page(),
        De.set(a.url.pathname.includes('random')),
        (u = a.url.pathname);
    }),
    $t(() => {
      (u = o.url.pathname), De.set(o.url.pathname.includes('random')), vt.page();
    }),
    (n.$$set = a => {
      '$$scope' in a && r(2, (d = a.$$scope));
    }),
    [o, s, d, i]
  );
}
class Tr extends Ve {
  constructor(e) {
    super(), He(this, e, $r, xr, Le, {});
  }
}
export { Tr as default };
