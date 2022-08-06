import {
  S as De,
  i as Ae,
  s as qe,
  l as S,
  F as he,
  m as E,
  n as v,
  G as me,
  h as m,
  p as c,
  q as xe,
  b as D,
  H as w,
  E as de,
  a as j,
  c as U,
  w as Be,
  x as Ke,
  y as Me,
  I as X,
  f as P,
  t as J,
  B as ze,
  J as _t,
  K as gt,
  o as El,
  r as V,
  u as B,
  v as te,
  P as Ne,
  a8 as Yt,
  g as ye,
  d as Se,
  e as W,
  a9 as Oe,
  a1 as Pe,
  a3 as Re,
  a4 as je,
  a5 as Ue,
  aa as dt,
  ab as tn,
  M as ln,
  R as Fl,
  T as Cl,
  ac as nn,
  ad as sn
} from './index-82e3b787.js';
import {
  t as Z,
  c as Q,
  b as be,
  s as Ve,
  e as Ie,
  d as Tl,
  f as on,
  g as $e,
  h as Qt
} from './util-4be2a3ca.js';
import { p as ht, B as Nl, t as rn } from './Button-88d2cbd5.js';
function an(n) {
  let e, t, s;
  return {
    c() {
      (e = S('div')), (t = he('svg')), (s = he('circle')), this.h();
    },
    l(l) {
      e = E(l, 'DIV', { class: !0 });
      var o = v(e);
      t = me(o, 'svg', {
        class: !0,
        height: !0,
        preserveAspectRatio: !0,
        style: !0,
        viewBox: !0,
        width: !0,
        xmlns: !0
      });
      var i = v(t);
      (s = me(i, 'circle', {
        cx: !0,
        cy: !0,
        fill: !0,
        r: !0,
        stroke: !0,
        'stroke-dasharray': !0,
        'stroke-width': !0
      })),
        v(s).forEach(m),
        i.forEach(m),
        o.forEach(m),
        this.h();
    },
    h() {
      c(s, 'cx', '50'),
        c(s, 'cy', '50'),
        c(s, 'fill', 'none'),
        c(s, 'r', '38'),
        c(s, 'stroke', 'currentColor'),
        c(s, 'stroke-dasharray', '179.0707812546182 61.690260418206066'),
        c(s, 'stroke-width', '7'),
        c(t, 'class', 'animate-spin'),
        c(t, 'height', '100px'),
        c(t, 'preserveAspectRatio', 'xMidYMid'),
        xe(t, 'margin', 'auto'),
        xe(t, 'background', 'transparent'),
        xe(t, 'display', 'block'),
        xe(t, 'shape-rendering', 'auto'),
        c(t, 'viewBox', '0 0 100 100'),
        c(t, 'width', '100px'),
        c(t, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'class', 'w-full mx-auto text-center mt-20 text-blue-600');
    },
    m(l, o) {
      D(l, e, o), w(e, t), w(t, s);
    },
    p: de,
    i: de,
    o: de,
    d(l) {
      l && m(e);
    }
  };
}
class es extends De {
  constructor(e) {
    super(), Ae(this, e, null, an, qe, {});
  }
}
function un(n) {
  let e, t, s, l, o, i, r, u, f, h, d, g, p, b, _, I, L, A;
  return {
    c() {
      (e = S('div')),
        (t = S('div')),
        (l = j()),
        (o = S('div')),
        (r = j()),
        (u = S('div')),
        (h = j()),
        (d = S('div')),
        (p = j()),
        (b = S('div')),
        (I = j()),
        (L = S('div')),
        this.h();
    },
    l(M) {
      e = E(M, 'DIV', { class: !0 });
      var K = v(e);
      (t = E(K, 'DIV', { class: !0 })),
        v(t).forEach(m),
        (l = U(K)),
        (o = E(K, 'DIV', { class: !0 })),
        v(o).forEach(m),
        (r = U(K)),
        (u = E(K, 'DIV', { class: !0 })),
        v(u).forEach(m),
        (h = U(K)),
        (d = E(K, 'DIV', { class: !0 })),
        v(d).forEach(m),
        (p = U(K)),
        (b = E(K, 'DIV', { class: !0 })),
        v(b).forEach(m),
        (I = U(K)),
        (L = E(K, 'DIV', { class: !0 })),
        v(L).forEach(m),
        K.forEach(m),
        this.h();
    },
    h() {
      c(t, 'class', (s = `w-2/12 ${n[1](0, n[0].attempts)} border-r border-l`)),
        c(o, 'class', (i = `w-2/12 ${n[1](1, n[0].attempts)} border-r border-l`)),
        c(u, 'class', (f = `w-4/12 ${n[1](2, n[0].attempts)} border-r border-l`)),
        c(d, 'class', (g = `w-4/12 ${n[1](3, n[0].attempts)} border-r border-l`)),
        c(b, 'class', (_ = `w-6/12 ${n[1](4, n[0].attempts)} border-r border-l`)),
        c(L, 'class', (A = `w-6/12 ${n[1](5, n[0].attempts)} border-r border-l`)),
        c(e, 'class', 'max-w-3xl mx-auto flex h-3');
    },
    m(M, K) {
      D(M, e, K),
        w(e, t),
        w(e, l),
        w(e, o),
        w(e, r),
        w(e, u),
        w(e, h),
        w(e, d),
        w(e, p),
        w(e, b),
        w(e, I),
        w(e, L);
    },
    p(M, [K]) {
      K & 1 && s !== (s = `w-2/12 ${M[1](0, M[0].attempts)} border-r border-l`) && c(t, 'class', s),
        K & 1 &&
          i !== (i = `w-2/12 ${M[1](1, M[0].attempts)} border-r border-l`) &&
          c(o, 'class', i),
        K & 1 &&
          f !== (f = `w-4/12 ${M[1](2, M[0].attempts)} border-r border-l`) &&
          c(u, 'class', f),
        K & 1 &&
          g !== (g = `w-4/12 ${M[1](3, M[0].attempts)} border-r border-l`) &&
          c(d, 'class', g),
        K & 1 &&
          _ !== (_ = `w-6/12 ${M[1](4, M[0].attempts)} border-r border-l`) &&
          c(b, 'class', _),
        K & 1 &&
          A !== (A = `w-6/12 ${M[1](5, M[0].attempts)} border-r border-l`) &&
          c(L, 'class', A);
    },
    i: de,
    o: de,
    d(M) {
      M && m(e);
    }
  };
}
function fn(n, e, t) {
  let { attempt: s } = e;
  const l = (o, i) => {
    let r = 'bg-black opacity-40';
    return (
      i === o && !s.correct
        ? (r = 'bg-blue-500')
        : i === o + 1 && s.correct
        ? (r = 'bg-green-600')
        : i > o && s.guesses[o].artistCorrect
        ? (r = 'bg-amber-400')
        : i > o && !s.guesses[o].song
        ? (r = 'bg-gray-500')
        : i > o && (r = 'bg-red-600'),
      r
    );
  };
  return (
    (n.$$set = o => {
      'attempt' in o && t(0, (s = o.attempt));
    }),
    [s, l]
  );
}
class cn extends De {
  constructor(e) {
    super(), Ae(this, e, fn, un, qe, { attempt: 0 });
  }
}
function Xt(n) {
  let e, t;
  return {
    c() {
      (e = S('div')), (t = V(n[4])), this.h();
    },
    l(s) {
      e = E(s, 'DIV', { class: !0 });
      var l = v(e);
      (t = B(l, n[4])), l.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'flex flex-1 justify-start font-mono');
    },
    m(s, l) {
      D(s, e, l), w(e, t);
    },
    p(s, l) {
      l & 16 && te(t, s[4]);
    },
    d(s) {
      s && m(e);
    }
  };
}
function Zt(n) {
  let e,
    t =
      Math.floor(n[3] / 60) +
      ':' +
      (Math.round(n[3] % 60) < 10 ? '0' + Math.round(n[3] % 60) : Math.round(n[3] % 60)),
    s;
  return {
    c() {
      (e = S('div')), (s = V(t)), this.h();
    },
    l(l) {
      e = E(l, 'DIV', { class: !0 });
      var o = v(e);
      (s = B(o, t)), o.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'flex flex-1 justify-end font-mono');
    },
    m(l, o) {
      D(l, e, o), w(e, s);
    },
    p(l, o) {
      o & 8 &&
        t !==
          (t =
            Math.floor(l[3] / 60) +
            ':' +
            (Math.round(l[3] % 60) < 10 ? '0' + Math.round(l[3] % 60) : Math.round(l[3] % 60))) &&
        te(s, t);
    },
    d(l) {
      l && m(e);
    }
  };
}
function dn(n) {
  let e, t, s, l, o, i, r, u, f, h, d, g, p, b, _, I, L, A, M, K, oe, le, H;
  s = new cn({ props: { attempt: n[1] } });
  let q = n[0] && Xt(n),
    N = n[0] && Zt(n);
  return {
    c() {
      (e = S('footer')),
        (t = S('div')),
        Be(s.$$.fragment),
        (l = j()),
        (o = S('div')),
        (i = S('div')),
        q && q.c(),
        (r = j()),
        (u = S('div')),
        (f = S('button')),
        (h = he('svg')),
        (d = he('path')),
        (g = he('path')),
        (b = j()),
        (_ = S('button')),
        (I = he('svg')),
        (L = he('path')),
        (A = he('path')),
        (K = j()),
        N && N.c(),
        this.h();
    },
    l(G) {
      e = E(G, 'FOOTER', { class: !0 });
      var R = v(e);
      t = E(R, 'DIV', { class: !0 });
      var ae = v(t);
      Ke(s.$$.fragment, ae), ae.forEach(m), (l = U(R)), (o = E(R, 'DIV', { class: !0 }));
      var k = v(o);
      i = E(k, 'DIV', { class: !0 });
      var C = v(i);
      q && q.l(C), (r = U(C)), (u = E(C, 'DIV', { class: !0 }));
      var $ = v(u);
      f = E($, 'BUTTON', { class: !0, title: !0 });
      var ne = v(f);
      h = me(ne, 'svg', { class: !0, fill: !0, stroke: !0, viewBox: !0, xmlns: !0 });
      var ue = v(h);
      (d = me(ue, 'path', {
        d: !0,
        'stroke-linecap': !0,
        'stroke-linejoin': !0,
        'stroke-width': !0
      })),
        v(d).forEach(m),
        (g = me(ue, 'path', {
          d: !0,
          'stroke-linecap': !0,
          'stroke-linejoin': !0,
          'stroke-width': !0
        })),
        v(g).forEach(m),
        ue.forEach(m),
        ne.forEach(m),
        (b = U($)),
        (_ = E($, 'BUTTON', { class: !0, title: !0 }));
      var we = v(_);
      I = me(we, 'svg', {
        class: !0,
        fill: !0,
        stroke: !0,
        'stroke-width': !0,
        viewBox: !0,
        xmlns: !0
      });
      var ke = v(I);
      (L = me(ke, 'path', { d: !0, 'stroke-linecap': !0, 'stroke-linejoin': !0 })),
        v(L).forEach(m),
        (A = me(ke, 'path', { d: !0, 'stroke-linecap': !0, 'stroke-linejoin': !0 })),
        v(A).forEach(m),
        ke.forEach(m),
        we.forEach(m),
        $.forEach(m),
        (K = U(C)),
        N && N.l(C),
        C.forEach(m),
        k.forEach(m),
        R.forEach(m),
        this.h();
    },
    h() {
      c(t, 'class', 'border-b'),
        c(
          d,
          'd',
          'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
        ),
        c(d, 'stroke-linecap', 'round'),
        c(d, 'stroke-linejoin', 'round'),
        c(d, 'stroke-width', '2'),
        c(g, 'd', 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z'),
        c(g, 'stroke-linecap', 'round'),
        c(g, 'stroke-linejoin', 'round'),
        c(g, 'stroke-width', '2'),
        c(h, 'class', 'w-14 h-14 mx-auto'),
        c(h, 'fill', 'none'),
        c(h, 'stroke', 'currentColor'),
        c(h, 'viewBox', '0 0 24 24'),
        c(h, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(
          f,
          'class',
          (p = `hover:text-blue-600 transition-colors duration-200 ${n[2] ? '' : 'hidden'}`)
        ),
        c(f, 'title', 'Play Song'),
        c(L, 'd', 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z'),
        c(L, 'stroke-linecap', 'round'),
        c(L, 'stroke-linejoin', 'round'),
        c(A, 'd', 'M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'),
        c(A, 'stroke-linecap', 'round'),
        c(A, 'stroke-linejoin', 'round'),
        c(I, 'class', 'w-14 h-14 mx-auto'),
        c(I, 'fill', 'none'),
        c(I, 'stroke', 'currentColor'),
        c(I, 'stroke-width', '2'),
        c(I, 'viewBox', '0 0 24 24'),
        c(I, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(
          _,
          'class',
          (M = `hover:text-blue-600 transition-colors duration-200 ${n[2] ? 'hidden' : ''}`)
        ),
        c(_, 'title', 'Pause Song'),
        c(u, 'class', 'text-center flex-1 justify-center'),
        c(i, 'class', 'flex justify-evenly items-center w-full'),
        c(o, 'class', 'max-w-screen-md mx-auto p-3'),
        c(e, 'class', 'border-t border-white bottom-0 w-full fixed bg-gray-800');
    },
    m(G, R) {
      D(G, e, R),
        w(e, t),
        Me(s, t, null),
        w(e, l),
        w(e, o),
        w(o, i),
        q && q.m(i, null),
        w(i, r),
        w(i, u),
        w(u, f),
        w(f, h),
        w(h, d),
        w(h, g),
        w(u, b),
        w(u, _),
        w(_, I),
        w(I, L),
        w(I, A),
        w(i, K),
        N && N.m(i, null),
        (oe = !0),
        le || ((H = [X(f, 'click', n[5]), X(_, 'click', n[6])]), (le = !0));
    },
    p(G, [R]) {
      const ae = {};
      R & 2 && (ae.attempt = G[1]),
        s.$set(ae),
        G[0] ? (q ? q.p(G, R) : ((q = Xt(G)), q.c(), q.m(i, r))) : q && (q.d(1), (q = null)),
        (!oe ||
          (R & 4 &&
            p !==
              (p = `hover:text-blue-600 transition-colors duration-200 ${
                G[2] ? '' : 'hidden'
              }`))) &&
          c(f, 'class', p),
        (!oe ||
          (R & 4 &&
            M !==
              (M = `hover:text-blue-600 transition-colors duration-200 ${
                G[2] ? 'hidden' : ''
              }`))) &&
          c(_, 'class', M),
        G[0] ? (N ? N.p(G, R) : ((N = Zt(G)), N.c(), N.m(i, null))) : N && (N.d(1), (N = null));
    },
    i(G) {
      oe || (P(s.$$.fragment, G), (oe = !0));
    },
    o(G) {
      J(s.$$.fragment, G), (oe = !1);
    },
    d(G) {
      G && m(e), ze(s), q && q.d(), N && N.d(), (le = !1), _t(H);
    }
  };
}
function hn(n, e, t) {
  let s;
  gt(n, ht, _ => t(11, (s = _)));
  let l,
    o = { attempts: 0, guesses: [], correct: !1, date: new Date() },
    i = !0,
    r = 0,
    u = '0:00',
    f,
    h,
    { custom: d = !1 } = e,
    g = '/';
  ht.subscribe(_ => {
    _.url.pathname !== g && l && (clearTimeout(h), l.pause(), l.remove()), (g = _.url.pathname);
  }),
    El(() => {
      (g = s.url.pathname),
        d
          ? (t(1, (o = Z.get())), Z.listen(_ => t(1, (o = _))))
          : (t(1, (o = Q.get())), Q.listen(_ => t(1, (o = _)))),
        t(0, (l = new Audio(be.get().preview))),
        l.addEventListener('loadedmetadata', () => t(3, (r = l.duration))),
        navigator.mediaSession &&
          (navigator.mediaSession.setActionHandler('play', () => null),
          navigator.mediaSession.setActionHandler('pause', () => null),
          navigator.mediaSession.setActionHandler('seekbackward', null),
          navigator.mediaSession.setActionHandler('seekforward', () => null));
    }),
    be.listen(_ => {
      l.remove(), t(0, (l = new Audio(_.preview)));
    }),
    Ve.listen(_ => t(2, (i = _)));
  const p = () => {
      Ie.track('play-song'), Ve.set(!1), l.play(), t(4, (u = '0:00'));
      let _;
      const I = 0.08333333;
      switch (o.attempts) {
        case 0:
          _ = I;
          break;
        case 1:
          _ = I * 2;
          break;
        case 2:
          _ = I * 4;
          break;
        case 3:
          _ = 0.5;
          break;
        case 4:
          _ = 0.75;
          break;
        default:
          _ = 1;
          break;
      }
      const L = o.correct ? l.duration * 1e3 : (l.duration / 2) * 1e3 * _;
      (h = setTimeout(() => {
        l.pause(), t(0, (l.currentTime = 0), l), Ve.set(!0), clearInterval(f);
      }, L)),
        (f = setInterval(() => {
          t(
            4,
            (u = `${Math.floor(l.currentTime / 60)}:${
              l.currentTime % 60 < 10
                ? '0' + Math.round(l.currentTime % 60)
                : Math.round(l.currentTime % 60)
            }`)
          );
        }, 1e3));
    },
    b = () => {
      l.pause(), t(0, (l.currentTime = 0), l), Ve.set(!0);
    };
  return (
    (n.$$set = _ => {
      'custom' in _ && t(7, (d = _.custom));
    }),
    [l, o, i, r, u, p, b, d]
  );
}
class ts extends De {
  constructor(e) {
    super(), Ae(this, e, hn, dn, qe, { custom: 7 });
  }
}
const mn = n => ({ noResultsText: n[0] & 2048 }),
  xt = n => ({ noResultsText: n[11] }),
  _n = n => ({ createText: n[0] & 16384 }),
  $t = n => ({ createText: n[14] }),
  gn = n => ({ loadingText: n[0] & 4096 }),
  el = n => ({ loadingText: n[12] });
function tl(n, e, t) {
  const s = n.slice();
  return (s[116] = e[t]), (s[118] = t), s;
}
const bn = n => ({ item: n[1] & 1, label: n[1] & 1 }),
  ll = n => ({ item: n[116].item, label: n[116].highlighted ? n[116].highlighted : n[116].label });
function nl(n, e, t) {
  const s = n.slice();
  return (s[119] = e[t]), s;
}
const wn = n => ({ label: n[0] & 2, item: n[0] & 2 }),
  sl = n => ({ label: n[38](n[119]), item: n[119], unselectItem: n[45] });
function ol(n, e, t) {
  const s = n.slice();
  return (s[118] = e[t]), s;
}
function kn(n) {
  let e,
    t = n[1],
    s = [];
  for (let l = 0; l < t.length; l += 1) s[l] = il(ol(n, t, l));
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = W();
    },
    l(l) {
      for (let o = 0; o < s.length; o += 1) s[o].l(l);
      e = W();
    },
    m(l, o) {
      for (let i = 0; i < s.length; i += 1) s[i].m(l, o);
      D(l, e, o);
    },
    p(l, o) {
      if ((o[0] & 18) | (o[1] & 128)) {
        t = l[1];
        let i;
        for (i = 0; i < t.length; i += 1) {
          const r = ol(l, t, i);
          s[i] ? s[i].p(r, o) : ((s[i] = il(r)), s[i].c(), s[i].m(e.parentNode, e));
        }
        for (; i < s.length; i += 1) s[i].d(1);
        s.length = t.length;
      }
    },
    d(l) {
      Oe(s, l), l && m(e);
    }
  };
}
function pn(n) {
  let e, t;
  return {
    c() {
      (e = S('option')), (t = V(n[3])), this.h();
    },
    l(s) {
      e = E(s, 'OPTION', { class: !0 });
      var l = v(e);
      (t = B(l, n[3])), l.forEach(m), this.h();
    },
    h() {
      (e.__value = n[2]), (e.value = e.__value), (e.selected = !0), c(e, 'class', 'svelte-1nqq7zl');
    },
    m(s, l) {
      D(s, e, l), w(e, t);
    },
    p(s, l) {
      l[0] & 8 && te(t, s[3]), l[0] & 4 && ((e.__value = s[2]), (e.value = e.__value));
    },
    d(s) {
      s && m(e);
    }
  };
}
function il(n) {
  let e,
    t = n[38](n[118]) + '',
    s,
    l,
    o;
  return {
    c() {
      (e = S('option')), (s = V(t)), (l = j()), this.h();
    },
    l(i) {
      e = E(i, 'OPTION', { class: !0 });
      var r = v(e);
      (s = B(r, t)), (l = U(r)), r.forEach(m), this.h();
    },
    h() {
      (e.__value = o = n[4](n[118], !0)),
        (e.value = e.__value),
        (e.selected = !0),
        c(e, 'class', 'svelte-1nqq7zl');
    },
    m(i, r) {
      D(i, e, r), w(e, s), w(e, l);
    },
    p(i, r) {
      r[0] & 2 && t !== (t = i[38](i[118]) + '') && te(s, t),
        r[0] & 18 && o !== (o = i[4](i[118], !0)) && ((e.__value = o), (e.value = e.__value));
    },
    d(i) {
      i && m(e);
    }
  };
}
function rl(n) {
  let e,
    t,
    s = n[1],
    l = [];
  for (let i = 0; i < s.length; i += 1) l[i] = al(nl(n, s, i));
  const o = i =>
    J(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      for (let i = 0; i < l.length; i += 1) l[i].c();
      e = W();
    },
    l(i) {
      for (let r = 0; r < l.length; r += 1) l[r].l(i);
      e = W();
    },
    m(i, r) {
      for (let u = 0; u < l.length; u += 1) l[u].m(i, r);
      D(i, e, r), (t = !0);
    },
    p(i, r) {
      if ((r[0] & 2) | (r[1] & 16512) | (r[2] & 1048576)) {
        s = i[1];
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = nl(i, s, u);
          l[u]
            ? (l[u].p(f, r), P(l[u], 1))
            : ((l[u] = al(f)), l[u].c(), P(l[u], 1), l[u].m(e.parentNode, e));
        }
        for (ye(), u = s.length; u < l.length; u += 1) o(u);
        Se();
      }
    },
    i(i) {
      if (!t) {
        for (let r = 0; r < s.length; r += 1) P(l[r]);
        t = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let r = 0; r < l.length; r += 1) J(l[r]);
      t = !1;
    },
    d(i) {
      Oe(l, i), i && m(e);
    }
  };
}
function vn(n) {
  let e,
    t,
    s = n[38](n[119]) + '',
    l,
    o,
    i,
    r,
    u,
    f;
  return {
    c() {
      (e = S('div')), (t = S('span')), (l = V(s)), (o = j()), (i = S('span')), (r = j()), this.h();
    },
    l(h) {
      e = E(h, 'DIV', { class: !0 });
      var d = v(e);
      t = E(d, 'SPAN', { class: !0 });
      var g = v(t);
      (l = B(g, s)),
        g.forEach(m),
        (o = U(d)),
        (i = E(d, 'SPAN', { class: !0 })),
        v(i).forEach(m),
        d.forEach(m),
        (r = U(h)),
        this.h();
    },
    h() {
      c(t, 'class', 'tag svelte-1nqq7zl'),
        c(i, 'class', 'tag is-delete svelte-1nqq7zl'),
        c(e, 'class', 'tags has-addons svelte-1nqq7zl');
    },
    m(h, d) {
      D(h, e, d),
        w(e, t),
        w(t, l),
        w(e, o),
        w(e, i),
        D(h, r, d),
        u ||
          ((f = X(
            i,
            'click',
            tn(function () {
              ln(n[45](n[119])) && n[45](n[119]).apply(this, arguments);
            })
          )),
          (u = !0));
    },
    p(h, d) {
      (n = h), d[0] & 2 && s !== (s = n[38](n[119]) + '') && te(l, s);
    },
    d(h) {
      h && m(e), h && m(r), (u = !1), f();
    }
  };
}
function al(n) {
  let e;
  const t = n[83].tag,
    s = Pe(t, n, n[82], sl),
    l = s || vn(n);
  return {
    c() {
      l && l.c();
    },
    l(o) {
      l && l.l(o);
    },
    m(o, i) {
      l && l.m(o, i), (e = !0);
    },
    p(o, i) {
      s
        ? s.p &&
          (!e || (i[0] & 2) | (i[2] & 1048576)) &&
          Re(s, t, o, o[82], e ? Ue(t, o[82], i, wn) : je(o[82]), sl)
        : l && l.p && (!e || i[0] & 2) && l.p(o, e ? i : [-1, -1, -1, -1]);
    },
    i(o) {
      e || (P(l, o), (e = !0));
    },
    o(o) {
      J(l, o), (e = !1);
    },
    d(o) {
      l && l.d(o);
    }
  };
}
function ul(n) {
  let e, t, s, l;
  return {
    c() {
      (e = S('span')), (t = V('\u2716')), this.h();
    },
    l(o) {
      e = E(o, 'SPAN', { class: !0 });
      var i = v(e);
      (t = B(i, '\u2716')), i.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'autocomplete-clear-button svelte-1nqq7zl');
    },
    m(o, i) {
      D(o, e, i), w(e, t), s || ((l = X(e, 'click', n[49])), (s = !0));
    },
    p: de,
    d(o) {
      o && m(e), (s = !1), l();
    }
  };
}
function In(n) {
  let e, t;
  const s = n[83]['no-results'],
    l = Pe(s, n, n[82], xt),
    o = l || Fn(n);
  return {
    c() {
      (e = S('div')), o && o.c(), this.h();
    },
    l(i) {
      e = E(i, 'DIV', { class: !0 });
      var r = v(e);
      o && o.l(r), r.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'autocomplete-list-item-no-results svelte-1nqq7zl');
    },
    m(i, r) {
      D(i, e, r), o && o.m(e, null), (t = !0);
    },
    p(i, r) {
      l
        ? l.p &&
          (!t || (r[0] & 2048) | (r[2] & 1048576)) &&
          Re(l, s, i, i[82], t ? Ue(s, i[82], r, mn) : je(i[82]), xt)
        : o && o.p && (!t || r[0] & 2048) && o.p(i, t ? r : [-1, -1, -1, -1]);
    },
    i(i) {
      t || (P(o, i), (t = !0));
    },
    o(i) {
      J(o, i), (t = !1);
    },
    d(i) {
      i && m(e), o && o.d(i);
    }
  };
}
function yn(n) {
  let e, t, s, l;
  const o = n[83].create,
    i = Pe(o, n, n[82], $t),
    r = i || Cn(n);
  return {
    c() {
      (e = S('div')), r && r.c(), this.h();
    },
    l(u) {
      e = E(u, 'DIV', { class: !0 });
      var f = v(e);
      r && r.l(f), f.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'autocomplete-list-item-create svelte-1nqq7zl');
    },
    m(u, f) {
      D(u, e, f), r && r.m(e, null), (t = !0), s || ((l = X(e, 'click', n[39])), (s = !0));
    },
    p(u, f) {
      i
        ? i.p &&
          (!t || (f[0] & 16384) | (f[2] & 1048576)) &&
          Re(i, o, u, u[82], t ? Ue(o, u[82], f, _n) : je(u[82]), $t)
        : r && r.p && (!t || f[0] & 16384) && r.p(u, t ? f : [-1, -1, -1, -1]);
    },
    i(u) {
      t || (P(r, u), (t = !0));
    },
    o(u) {
      J(r, u), (t = !1);
    },
    d(u) {
      u && m(e), r && r.d(u), (s = !1), l();
    }
  };
}
function Sn(n) {
  let e, t;
  const s = n[83].loading,
    l = Pe(s, n, n[82], el),
    o = l || Tn(n);
  return {
    c() {
      (e = S('div')), o && o.c(), this.h();
    },
    l(i) {
      e = E(i, 'DIV', { class: !0 });
      var r = v(e);
      o && o.l(r), r.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'autocomplete-list-item-loading svelte-1nqq7zl');
    },
    m(i, r) {
      D(i, e, r), o && o.m(e, null), (t = !0);
    },
    p(i, r) {
      l
        ? l.p &&
          (!t || (r[0] & 4096) | (r[2] & 1048576)) &&
          Re(l, s, i, i[82], t ? Ue(s, i[82], r, gn) : je(i[82]), el)
        : o && o.p && (!t || r[0] & 4096) && o.p(i, t ? r : [-1, -1, -1, -1]);
    },
    i(i) {
      t || (P(o, i), (t = !0));
    },
    o(i) {
      J(o, i), (t = !1);
    },
    d(i) {
      i && m(e), o && o.d(i);
    }
  };
}
function En(n) {
  let e,
    t,
    s,
    l = n[31],
    o = [];
  for (let u = 0; u < l.length; u += 1) o[u] = cl(tl(n, l, u));
  const i = u =>
    J(o[u], 1, 1, () => {
      o[u] = null;
    });
  let r = n[5] > 0 && n[31].length > n[5] && dl(n);
  return {
    c() {
      for (let u = 0; u < o.length; u += 1) o[u].c();
      (e = j()), r && r.c(), (t = W());
    },
    l(u) {
      for (let f = 0; f < o.length; f += 1) o[f].l(u);
      (e = U(u)), r && r.l(u), (t = W());
    },
    m(u, f) {
      for (let h = 0; h < o.length; h += 1) o[h].m(u, f);
      D(u, e, f), r && r.m(u, f), D(u, t, f), (s = !0);
    },
    p(u, f) {
      if ((f[0] & 1073741856) | (f[1] & 524801) | (f[2] & 1048576)) {
        l = u[31];
        let h;
        for (h = 0; h < l.length; h += 1) {
          const d = tl(u, l, h);
          o[h]
            ? (o[h].p(d, f), P(o[h], 1))
            : ((o[h] = cl(d)), o[h].c(), P(o[h], 1), o[h].m(e.parentNode, e));
        }
        for (ye(), h = l.length; h < o.length; h += 1) i(h);
        Se();
      }
      u[5] > 0 && u[31].length > u[5]
        ? r
          ? r.p(u, f)
          : ((r = dl(u)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    i(u) {
      if (!s) {
        for (let f = 0; f < l.length; f += 1) P(o[f]);
        s = !0;
      }
    },
    o(u) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1) J(o[f]);
      s = !1;
    },
    d(u) {
      Oe(o, u), u && m(e), r && r.d(u), u && m(t);
    }
  };
}
function Fn(n) {
  let e;
  return {
    c() {
      e = V(n[11]);
    },
    l(t) {
      e = B(t, n[11]);
    },
    m(t, s) {
      D(t, e, s);
    },
    p(t, s) {
      s[0] & 2048 && te(e, t[11]);
    },
    d(t) {
      t && m(e);
    }
  };
}
function Cn(n) {
  let e;
  return {
    c() {
      e = V(n[14]);
    },
    l(t) {
      e = B(t, n[14]);
    },
    m(t, s) {
      D(t, e, s);
    },
    p(t, s) {
      s[0] & 16384 && te(e, t[14]);
    },
    d(t) {
      t && m(e);
    }
  };
}
function Tn(n) {
  let e;
  return {
    c() {
      e = V(n[12]);
    },
    l(t) {
      e = B(t, n[12]);
    },
    m(t, s) {
      D(t, e, s);
    },
    p(t, s) {
      s[0] & 4096 && te(e, t[12]);
    },
    d(t) {
      t && m(e);
    }
  };
}
function fl(n) {
  let e, t, s, l, o;
  const i = n[83].item,
    r = Pe(i, n, n[82], ll),
    u = r || An(n);
  function f() {
    return n[86](n[116]);
  }
  function h() {
    return n[87](n[118]);
  }
  return {
    c() {
      (e = S('div')), u && u.c(), this.h();
    },
    l(d) {
      e = E(d, 'DIV', { class: !0 });
      var g = v(e);
      u && u.l(g), g.forEach(m), this.h();
    },
    h() {
      c(
        e,
        'class',
        (t = 'autocomplete-list-item ' + (n[118] === n[30] ? 'selected' : '') + ' svelte-1nqq7zl')
      ),
        Ne(e, 'confirmed', n[50](n[116].item));
    },
    m(d, g) {
      D(d, e, g),
        u && u.m(e, null),
        (s = !0),
        l || ((o = [X(e, 'click', f), X(e, 'pointerenter', h)]), (l = !0));
    },
    p(d, g) {
      (n = d),
        r
          ? r.p &&
            (!s || (g[1] & 1) | (g[2] & 1048576)) &&
            Re(r, i, n, n[82], s ? Ue(i, n[82], g, bn) : je(n[82]), ll)
          : u && u.p && (!s || g[1] & 1) && u.p(n, s ? g : [-1, -1, -1, -1]),
        (!s ||
          (g[0] & 1073741824 &&
            t !==
              (t =
                'autocomplete-list-item ' +
                (n[118] === n[30] ? 'selected' : '') +
                ' svelte-1nqq7zl'))) &&
          c(e, 'class', t),
        (g[0] & 1073741824) | (g[1] & 524289) && Ne(e, 'confirmed', n[50](n[116].item));
    },
    i(d) {
      s || (P(u, d), (s = !0));
    },
    o(d) {
      J(u, d), (s = !1);
    },
    d(d) {
      d && m(e), u && u.d(d), (l = !1), _t(o);
    }
  };
}
function Nn(n) {
  let e,
    t = n[116].label + '',
    s;
  return {
    c() {
      (e = new Fl(!1)), (s = W()), this.h();
    },
    l(l) {
      (e = Cl(l, !1)), (s = W()), this.h();
    },
    h() {
      e.a = s;
    },
    m(l, o) {
      e.m(t, l, o), D(l, s, o);
    },
    p(l, o) {
      o[1] & 1 && t !== (t = l[116].label + '') && e.p(t);
    },
    d(l) {
      l && m(s), l && e.d();
    }
  };
}
function Dn(n) {
  let e,
    t = n[116].highlighted + '',
    s;
  return {
    c() {
      (e = new Fl(!1)), (s = W()), this.h();
    },
    l(l) {
      (e = Cl(l, !1)), (s = W()), this.h();
    },
    h() {
      e.a = s;
    },
    m(l, o) {
      e.m(t, l, o), D(l, s, o);
    },
    p(l, o) {
      o[1] & 1 && t !== (t = l[116].highlighted + '') && e.p(t);
    },
    d(l) {
      l && m(s), l && e.d();
    }
  };
}
function An(n) {
  let e;
  function t(o, i) {
    return o[116].highlighted ? Dn : Nn;
  }
  let s = t(n),
    l = s(n);
  return {
    c() {
      l.c(), (e = W());
    },
    l(o) {
      l.l(o), (e = W());
    },
    m(o, i) {
      l.m(o, i), D(o, e, i);
    },
    p(o, i) {
      s === (s = t(o)) && l ? l.p(o, i) : (l.d(1), (l = s(o)), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(o) {
      l.d(o), o && m(e);
    }
  };
}
function cl(n) {
  let e,
    t,
    s = n[116] && (n[5] <= 0 || n[118] < n[5]) && fl(n);
  return {
    c() {
      s && s.c(), (e = W());
    },
    l(l) {
      s && s.l(l), (e = W());
    },
    m(l, o) {
      s && s.m(l, o), D(l, e, o), (t = !0);
    },
    p(l, o) {
      l[116] && (l[5] <= 0 || l[118] < l[5])
        ? s
          ? (s.p(l, o), (o[0] & 32) | (o[1] & 1) && P(s, 1))
          : ((s = fl(l)), s.c(), P(s, 1), s.m(e.parentNode, e))
        : s &&
          (ye(),
          J(s, 1, 1, () => {
            s = null;
          }),
          Se());
    },
    i(l) {
      t || (P(s), (t = !0));
    },
    o(l) {
      J(s), (t = !1);
    },
    d(l) {
      s && s.d(l), l && m(e);
    }
  };
}
function dl(n) {
  let e,
    t = n[13] && hl(n);
  return {
    c() {
      t && t.c(), (e = W());
    },
    l(s) {
      t && t.l(s), (e = W());
    },
    m(s, l) {
      t && t.m(s, l), D(s, e, l);
    },
    p(s, l) {
      s[13]
        ? t
          ? t.p(s, l)
          : ((t = hl(s)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    d(s) {
      t && t.d(s), s && m(e);
    }
  };
}
function hl(n) {
  let e,
    t,
    s = n[31].length - n[5] + '',
    l,
    o,
    i;
  return {
    c() {
      (e = S('div')), (t = V('...')), (l = V(s)), (o = j()), (i = V(n[13])), this.h();
    },
    l(r) {
      e = E(r, 'DIV', { class: !0 });
      var u = v(e);
      (t = B(u, '...')), (l = B(u, s)), (o = U(u)), (i = B(u, n[13])), u.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'autocomplete-list-item-no-results svelte-1nqq7zl');
    },
    m(r, u) {
      D(r, e, u), w(e, t), w(e, l), w(e, o), w(e, i);
    },
    p(r, u) {
      (u[0] & 32) | (u[1] & 1) && s !== (s = r[31].length - r[5] + '') && te(l, s),
        u[0] & 8192 && te(i, r[13]);
    },
    d(r) {
      r && m(e);
    }
  };
}
function qn(n) {
  let e, t, s, l, o, i, r, u, f, h, d, g, p, b, _, I, L, A, M, K;
  function oe(k, C) {
    if (!k[6] && k[2]) return pn;
    if (k[6] && k[1]) return kn;
  }
  let le = oe(n),
    H = le && le(n),
    q = n[6] && n[1] && rl(n),
    N = n[35] && ul(n);
  const G = [En, Sn, yn, In],
    R = [];
  function ae(k, C) {
    return k[31] && k[31].length > 0 ? 0 : k[34] && k[12] ? 1 : k[7] ? 2 : k[11] ? 3 : -1;
  }
  return (
    ~(b = ae(n)) && (_ = R[b] = G[b](n)),
    {
      c() {
        (e = S('div')),
          (t = S('select')),
          H && H.c(),
          (s = j()),
          (l = S('div')),
          q && q.c(),
          (o = j()),
          (i = S('input')),
          (d = j()),
          N && N.c(),
          (g = j()),
          (p = S('div')),
          _ && _.c(),
          this.h();
      },
      l(k) {
        e = E(k, 'DIV', { class: !0 });
        var C = v(e);
        t = E(C, 'SELECT', { name: !0, id: !0, class: !0 });
        var $ = v(t);
        H && H.l($), $.forEach(m), (s = U(C)), (l = E(C, 'DIV', { class: !0 }));
        var ne = v(l);
        q && q.l(ne),
          (o = U(ne)),
          (i = E(ne, 'INPUT', {
            type: !0,
            class: !0,
            id: !0,
            autocomplete: !0,
            placeholder: !0,
            name: !0,
            title: !0,
            tabindex: !0
          })),
          (d = U(ne)),
          N && N.l(ne),
          ne.forEach(m),
          (g = U(C)),
          (p = E(C, 'DIV', { class: !0 }));
        var ue = v(p);
        _ && _.l(ue), ue.forEach(m), C.forEach(m), this.h();
      },
      h() {
        c(t, 'name', n[20]),
          c(t, 'id', n[21]),
          (t.multiple = n[6]),
          c(t, 'class', 'svelte-1nqq7zl'),
          c(i, 'type', 'text'),
          c(
            i,
            'class',
            (r =
              (n[17] ? n[17] : '') +
              ' ' +
              (n[27] ? '' : 'input autocomplete-input') +
              ' svelte-1nqq7zl')
          ),
          c(i, 'id', (u = n[18] ? n[18] : '')),
          c(i, 'autocomplete', (f = n[23] ? 'on' : 'off')),
          c(i, 'placeholder', n[15]),
          c(i, 'name', n[19]),
          (i.disabled = n[26]),
          (i.required = n[28]),
          c(i, 'title', n[22]),
          (i.readOnly = h = n[24] || (n[8] && n[1])),
          c(i, 'tabindex', n[29]),
          c(l, 'class', 'input-container svelte-1nqq7zl'),
          c(
            p,
            'class',
            (I =
              (n[25] ? n[25] : '') +
              ' autocomplete-list ' +
              (n[36] ? '' : 'hidden') +
              ' is-fullwidth svelte-1nqq7zl')
          ),
          c(
            e,
            'class',
            (L =
              (n[16] ? n[16] : '') +
              ' ' +
              (n[9] || !n[0].length ? 'hide-arrow' : '') +
              ' ' +
              (n[6] ? 'is-multiple' : '') +
              ' autocomplete select is-fullwidth ' +
              n[37] +
              ' svelte-1nqq7zl')
          ),
          Ne(e, 'show-clear', n[35]),
          Ne(e, 'is-loading', n[10] && n[34]);
      },
      m(k, C) {
        D(k, e, C),
          w(e, t),
          H && H.m(t, null),
          w(e, s),
          w(e, l),
          q && q.m(l, null),
          w(l, o),
          w(l, i),
          n[84](i),
          Yt(i, n[3]),
          w(l, d),
          N && N.m(l, null),
          w(e, g),
          w(e, p),
          ~b && R[b].m(p, null),
          n[88](p),
          (A = !0),
          M ||
            ((K = [
              X(window, 'click', n[41]),
              X(i, 'input', n[85]),
              X(i, 'input', n[44]),
              X(i, 'focus', n[47]),
              X(i, 'blur', n[48]),
              X(i, 'keydown', n[42]),
              X(i, 'click', n[46]),
              X(i, 'keypress', n[43])
            ]),
            (M = !0));
      },
      p(k, C) {
        le === (le = oe(k)) && H
          ? H.p(k, C)
          : (H && H.d(1), (H = le && le(k)), H && (H.c(), H.m(t, null))),
          (!A || C[0] & 1048576) && c(t, 'name', k[20]),
          (!A || C[0] & 2097152) && c(t, 'id', k[21]),
          (!A || C[0] & 64) && (t.multiple = k[6]),
          k[6] && k[1]
            ? q
              ? (q.p(k, C), C[0] & 66 && P(q, 1))
              : ((q = rl(k)), q.c(), P(q, 1), q.m(l, o))
            : q &&
              (ye(),
              J(q, 1, 1, () => {
                q = null;
              }),
              Se()),
          (!A ||
            (C[0] & 134348800 &&
              r !==
                (r =
                  (k[17] ? k[17] : '') +
                  ' ' +
                  (k[27] ? '' : 'input autocomplete-input') +
                  ' svelte-1nqq7zl'))) &&
            c(i, 'class', r),
          (!A || (C[0] & 262144 && u !== (u = k[18] ? k[18] : ''))) && c(i, 'id', u),
          (!A || (C[0] & 8388608 && f !== (f = k[23] ? 'on' : 'off'))) && c(i, 'autocomplete', f),
          (!A || C[0] & 32768) && c(i, 'placeholder', k[15]),
          (!A || C[0] & 524288) && c(i, 'name', k[19]),
          (!A || C[0] & 67108864) && (i.disabled = k[26]),
          (!A || C[0] & 268435456) && (i.required = k[28]),
          (!A || C[0] & 4194304) && c(i, 'title', k[22]),
          (!A || (C[0] & 16777474 && h !== (h = k[24] || (k[8] && k[1])))) && (i.readOnly = h),
          (!A || C[0] & 536870912) && c(i, 'tabindex', k[29]),
          C[0] & 8 && i.value !== k[3] && Yt(i, k[3]),
          k[35] ? (N ? N.p(k, C) : ((N = ul(k)), N.c(), N.m(l, null))) : N && (N.d(1), (N = null));
        let $ = b;
        (b = ae(k)),
          b === $
            ? ~b && R[b].p(k, C)
            : (_ &&
                (ye(),
                J(R[$], 1, 1, () => {
                  R[$] = null;
                }),
                Se()),
              ~b
                ? ((_ = R[b]), _ ? _.p(k, C) : ((_ = R[b] = G[b](k)), _.c()), P(_, 1), _.m(p, null))
                : (_ = null)),
          (!A ||
            ((C[0] & 33554432) | (C[1] & 32) &&
              I !==
                (I =
                  (k[25] ? k[25] : '') +
                  ' autocomplete-list ' +
                  (k[36] ? '' : 'hidden') +
                  ' is-fullwidth svelte-1nqq7zl'))) &&
            c(p, 'class', I),
          (!A ||
            (C[0] & 66113 &&
              L !==
                (L =
                  (k[16] ? k[16] : '') +
                  ' ' +
                  (k[9] || !k[0].length ? 'hide-arrow' : '') +
                  ' ' +
                  (k[6] ? 'is-multiple' : '') +
                  ' autocomplete select is-fullwidth ' +
                  k[37] +
                  ' svelte-1nqq7zl'))) &&
            c(e, 'class', L),
          (C[0] & 66113) | (C[1] & 16) && Ne(e, 'show-clear', k[35]),
          (C[0] & 67137) | (C[1] & 8) && Ne(e, 'is-loading', k[10] && k[34]);
      },
      i(k) {
        A || (P(q), P(_), (A = !0));
      },
      o(k) {
        J(q), J(_), (A = !1);
      },
      d(k) {
        k && m(e),
          H && H.d(),
          q && q.d(),
          n[84](null),
          N && N.d(),
          ~b && R[b].d(),
          n[88](null),
          (M = !1),
          _t(K);
      }
    }
  );
}
function Ln(n, e) {
  if (typeof n != 'function') {
    console.error('Not a function: ' + n + ', argument: ' + e);
    return;
  }
  let t;
  try {
    t = n(e);
  } catch {
    console.warn('Error executing Autocomplete function on value: ' + e + ' function: ' + n);
  }
  return t;
}
function et(n, e) {
  let t = Ln(n, e);
  return t == null && (t = ''), typeof t != 'string' && (t = t.toString()), t;
}
function mt(n, e) {
  if (!n) return 0;
  const t = n.keywords;
  let s = 0;
  return (
    e.forEach(l => {
      t.includes(l) && s++;
    }),
    s
  );
}
function Vn(n, e, t) {
  return mt(e, t) - mt(n, t);
}
function tt(n) {
  return n.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function Bn(n, e, t) {
  let s,
    l,
    { $$slots: o = {}, $$scope: i } = e,
    { items: r = [] } = e,
    { searchFunction: u = !1 } = e,
    { labelFieldName: f = void 0 } = e,
    { keywordsFieldName: h = f } = e,
    { valueFieldName: d = void 0 } = e,
    {
      labelFunction: g = function (a) {
        return a == null ? '' : f ? a[f] : a;
      }
    } = e,
    {
      keywordsFunction: p = function (a) {
        return a == null ? '' : h ? a[h] : g(a);
      }
    } = e,
    {
      valueFunction: b = function (a, y = !1) {
        return a == null ? a : !N || y ? (d ? a[d] : a) : a.map(F => (d ? F[d] : F));
      }
    } = e,
    {
      keywordsCleanFunction: _ = function (a) {
        return a;
      }
    } = e,
    {
      textCleanFunction: I = function (a) {
        return a;
      }
    } = e,
    {
      beforeChange: L = function (a, y) {
        return !0;
      }
    } = e,
    { onChange: A = function (a) {} } = e,
    { onFocus: M = function () {} } = e,
    { onBlur: K = function () {} } = e,
    {
      onCreate: oe = function (a) {
        T && console.log('onCreate: ' + a);
      }
    } = e,
    { selectFirstIfEmpty: le = !1 } = e,
    { minCharactersToSearch: H = 1 } = e,
    { maxItemsToShowInList: q = 0 } = e,
    { multiple: N = !1 } = e,
    { create: G = !1 } = e,
    { ignoreAccents: R = !0 } = e,
    { matchAllKeywords: ae = !0 } = e,
    { sortByMatchedKeywords: k = !1 } = e,
    { itemFilterFunction: C = void 0 } = e,
    { itemSortFunction: $ = void 0 } = e,
    { lock: ne = !1 } = e,
    { delay: ue = 0 } = e,
    { localFiltering: we = !0 } = e,
    { localSorting: ke = !0 } = e,
    { cleanUserText: lt = !0 } = e,
    { closeOnBlur: nt = !1 } = e,
    { hideArrow: bt = !1 } = e,
    { showClear: st = !1 } = e,
    { showLoadingIndicator: wt = !1 } = e,
    { noResultsText: kt = 'No results found' } = e,
    { loadingText: pt = 'Loading results...' } = e,
    { moreItemsText: vt = 'items not shown' } = e,
    { createText: It = 'Not found, add anyway?' } = e,
    { placeholder: yt = void 0 } = e,
    { className: St = void 0 } = e,
    { inputClassName: Et = void 0 } = e,
    { inputId: Ee = void 0 } = e,
    { name: Ft = void 0 } = e,
    { selectName: Ct = void 0 } = e,
    { selectId: Tt = void 0 } = e,
    { title: Nt = void 0 } = e,
    { html5autocomplete: Dt = void 0 } = e,
    { readonly: At = void 0 } = e,
    { dropdownClassName: qt = void 0 } = e,
    { disabled: Lt = !1 } = e,
    { noInputStyles: Vt = !1 } = e,
    { required: Bt = null } = e,
    { debug: T = !1 } = e,
    { tabindex: Kt = 0 } = e,
    { selectedItem: z = N ? [] : void 0 } = e,
    { value: ot = void 0 } = e,
    { highlightedItem: it = void 0 } = e;
  const Mt = 'sautocomplete-' + Math.floor(Math.random() * 1e3);
  let ge,
    Fe,
    pe = !1,
    He = !1,
    Y = -1,
    { text: se } = e,
    Ge = 0,
    x,
    ie = [],
    rt = 0,
    ve = 0,
    at;
  function ut(a) {
    return et(g, a);
  }
  function Dl(a) {
    const y = et(p, a);
    let F = et(_, y);
    return (
      (F = F.toLowerCase().trim()),
      R && (F = tt(F)),
      T && console.log("Extracted keywords: '" + F + "' from item: " + JSON.stringify(a)),
      F
    );
  }
  function Je() {
    let a;
    T &&
      ((a = `Autocomplete prepare list ${Ee ? `(id: ${Ee})` : ''}`),
      console.time(a),
      console.log('Prepare items to search'),
      console.log('items: ' + JSON.stringify(r))),
      Array.isArray(r) ||
        (console.warn('Autocomplete items / search function did not return array but', r),
        t(0, (r = [])));
    const y = r ? r.length : 0;
    (ie = new Array(y)),
      y > 0 &&
        r.forEach((F, O) => {
          const ee = Al(F);
          ee === void 0 && console.log('Undefined item for: ', F), (ie[O] = ee);
        }),
      t(31, (x = ie)),
      T && (console.log(ie.length + ' items to search'), console.timeEnd(a));
  }
  function Al(a) {
    return { keywords: we ? Dl(a) : [], label: ut(a), item: a };
  }
  function ql() {
    t(2, (ot = b(z))), t(3, (se = N ? '' : ut(z))), t(31, (x = ie)), A(z);
  }
  function Ll(a) {
    if (a == null) return '';
    if (!lt) return a;
    const y = a.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ' ').trim();
    return et(I, y).toLowerCase().trim();
  }
  async function zt() {
    let a;
    T &&
      ((a = `Autocomplete search ${Ee ? `(id: ${Ee})` : ''}`),
      console.time(a),
      console.log("Searching user entered text: '" + se + "'"));
    let y = Ll(se);
    if (
      (H > 1 && y.length < H && (y = ''),
      t(81, (Ge = y.length)),
      T && console.log("Changed user entered text '" + se + "' into '" + y + "'"),
      y === '')
    ) {
      u
        ? (t(0, (r = [])), T && console.log('User entered text is empty clear list of items'))
        : (t(31, (x = ie)),
          T && console.log('User entered text is empty set the list of items to all items')),
        Jt(),
        T && console.timeEnd(a);
      return;
    }
    if (!u) We(y);
    else {
      rt = rt + 1;
      const F = rt;
      if ((t(34, (He = !0)), u.constructor.name === 'AsyncGeneratorFunction')) {
        for await (const O of u(y, q)) {
          if (F < ve) return !1;
          F > ve && t(0, (r = [])), (ve = F), t(0, (r = [...r, ...O])), We(y);
        }
        ve < F && ((ve = F), t(0, (r = [])), We(y));
      } else {
        let O = await u(y, q);
        if (F < ve) return !1;
        (ve = F), t(0, (r = O)), We(y);
      }
      t(34, (He = !1));
    }
    T && (console.timeEnd(a), console.log('Search found ' + x.length + ' items'));
  }
  function Vl(a, y) {
    const F = mt(a, y);
    return ae ? F >= y.length : F > 0;
  }
  function We(a) {
    Je();
    const F = (R ? tt(a) : a).split(/\s+/g).filter(re => re !== '');
    let O;
    we
      ? (C ? (O = ie.filter(re => C(re.item, F))) : (O = ie.filter(re => Vl(re, F))),
        ke &&
          ($
            ? (O = O.sort((re, Le) => $(re.item, Le.item, F)))
            : k && (O = O.sort((re, Le) => Vn(re, Le, F)))))
      : (O = ie);
    const ee = Wt(F, 'label');
    return t(31, (x = O.map(ee))), Jt(), !0;
  }
  function Ot(a) {
    let y;
    if ((T && console.log('createdItem', a), typeof a < 'u')) {
      Je(), t(31, (x = ie));
      let F = Ht(a, x);
      F <= 0 && (t(0, (r = [a])), Je(), t(31, (x = ie)), (F = 0)),
        F >= 0 && (t(30, (Y = F)), (y = x[Y]));
    }
    return y;
  }
  function ft(a) {
    if ((T && console.log('selectListItem', a), typeof a > 'u' && G)) {
      const F = oe(se);
      if (typeof F < 'u') {
        if (typeof F.then == 'function')
          return (
            F.then(O => {
              if (typeof O < 'u') {
                const ee = Ot(O);
                typeof ee < 'u' && ft(ee);
              }
            }),
            !0
          );
        a = Ot(F);
      }
    }
    if (typeof a > 'u') return T && console.log('listItem is undefined. Can not select.'), !1;
    if (ne && z) return !0;
    const y = a.item;
    return (
      L(z, y) &&
        (N
          ? z
            ? z.includes(y)
              ? t(1, (z = z.filter(F => F !== y)))
              : t(1, (z = [...z, y]))
            : t(1, (z = [y]))
          : (t(1, (z = void 0)), t(1, (z = y)))),
      !0
    );
  }
  function ct() {
    T && console.log('selectItem', Y);
    const a = x[Y];
    ft(a)
      ? (T && console.log('selectListItem true, closing'), _e(), N && ge.focus())
      : T && console.log('selectListItem false, not closing');
  }
  function Bl() {
    T && console.log('up'), Qe(), Y > 0 && t(30, Y--, Y), Ye();
  }
  function Kl() {
    T && console.log('down'), Qe(), Y < x.length - 1 && t(30, Y++, Y), Ye();
  }
  function Ye() {
    T && console.log('highlight');
    const a = '.selected';
    T && console.log('Seaching DOM element: ' + a + ' in ' + Fe);
    const y = Fe && Fe.querySelector(a);
    y
      ? typeof y.scrollIntoViewIfNeeded == 'function'
        ? (T && console.log('Scrolling selected item into view'), y.scrollIntoViewIfNeeded())
        : y.scrollIntoView === 'function'
        ? (T && console.log('Scrolling selected item into view'), y.scrollIntoView())
        : T &&
          console.warn(
            'Could not scroll selected item into view, scrollIntoViewIfNeeded not supported'
          )
      : T && console.warn('Selected item not found to scroll into view');
  }
  function Pt(a) {
    T && console.log('onListItemClick'), ft(a) && (_e(), N && ge.focus());
  }
  function Ml(a) {
    T && console.log('onDocumentClick'),
      a.composedPath().some(y => y.classList && y.classList.contains(Mt))
        ? (T && console.log('onDocumentClick inside'), Ye())
        : (T && console.log('onDocumentClick outside'), _e());
  }
  function zl(a) {
    T && console.log('onKeyDown');
    let y = a.key;
    y === 'Tab' && a.shiftKey && (y = 'ShiftTab');
    const O = {
      Tab: pe ? _e() : null,
      ShiftTab: pe ? _e() : null,
      ArrowDown: Kl.bind(this),
      ArrowUp: Bl.bind(this),
      Escape: Ul.bind(this),
      Backspace: N && z && z.length && !se ? Hl.bind(this) : null
    }[y];
    typeof O == 'function' && O(a);
  }
  function Ol(a) {
    T && console.log('onKeyPress'), a.key === 'Enter' && (a.preventDefault(), Pl());
  }
  function Pl() {
    ct();
  }
  function Rl(a) {
    T && console.log('onInput'),
      t(3, (se = a.target.value)),
      at && clearTimeout(at),
      ue ? (at = setTimeout(jt, ue)) : jt();
  }
  function Rt(a) {
    T && console.log('unselectItem', a), t(1, (z = z.filter(y => y !== a))), ge.focus();
  }
  function jt() {
    zt() && (t(30, (Y = 0)), Qe());
  }
  function jl() {
    T && console.log('onInputClick'), Ut();
  }
  function Ul(a) {
    T && console.log('onEsc'), a.stopPropagation(), pe && (ge.focus(), _e());
  }
  function Hl(a) {
    T && console.log('onBackspace'), Rt(z[z.length - 1]);
  }
  function Gl() {
    T && console.log('onFocus'), M(), Ut();
  }
  function Jl() {
    T && console.log('onBlur'), nt && _e(), K();
  }
  function Ut() {
    if (
      (T && console.log('resetListToAllItemsAndOpen'),
      se ? !ie.length && z && u && zt() : t(31, (x = ie)),
      Qe(),
      z)
    ) {
      T && console.log('Searching currently selected item: ' + JSON.stringify(z));
      const a = Ht(z, x);
      a >= 0 && (t(30, (Y = a)), Ye());
    }
  }
  function Ht(a, y) {
    T && console.log('Finding index for item', a);
    let F = -1;
    for (let O = 0; O < y.length; O++) {
      const ee = y[O];
      if (typeof ee > 'u') {
        T && console.log(`listItem ${O} is undefined. Skipping.`);
        continue;
      }
      if ((T && console.log('Item ' + O + ': ' + JSON.stringify(ee)), a === ee.item)) {
        F = O;
        break;
      }
    }
    return (
      T &&
        (F >= 0
          ? console.log('Found index for item: ' + F)
          : console.warn('Not found index for item: ' + a)),
      F
    );
  }
  function Qe() {
    T && console.log('open'), !Gt() && t(80, (pe = !0));
  }
  function _e() {
    T && console.log('close'),
      t(80, (pe = !1)),
      t(34, (He = !1)),
      !se && le && (t(30, (Y = 0)), ct());
  }
  function Gt() {
    return H > 1 && Ge < H;
  }
  function Jt() {
    Gt() && _e();
  }
  function Wl() {
    T && console.log('clear'),
      t(3, (se = '')),
      t(1, (z = N ? [] : void 0)),
      setTimeout(() => {
        ge.focus(), _e();
      });
  }
  function Wt(a, y) {
    return F => {
      let O = F[y];
      const ee = Object.assign({ highlighted: void 0 }, F);
      ee.highlighted = O;
      const re = O.toLowerCase(),
        Le = R ? tt(re) : re;
      if (a && a.length) {
        const Xe = [];
        for (let Ce = 0; Ce < a.length; Ce++) {
          let fe = a[Ce];
          R && (fe = tt(fe));
          const Te = fe.length;
          let ce = 0;
          do
            if (((ce = Le.indexOf(fe, ce)), ce >= 0)) {
              let Ze = ce + Te;
              Xe.push([ce, Ze]), (ce = Ze);
            }
          while (ce !== -1);
        }
        if (Xe.length > 0) {
          const Ce = new Set();
          for (let fe = 0; fe < Xe.length; fe++) {
            const Te = Xe[fe],
              ce = Te[0],
              Ze = Te[1],
              en = re.substring(ce, Ze);
            Ce.add(en);
          }
          for (let fe of Ce) {
            if (fe === 'b') continue;
            const Te = new RegExp('(' + fe + ')', 'ig'),
              ce = ee.highlighted.replace(Te, '<b>$1</b>');
            ee.highlighted = ce;
          }
        }
      }
      return ee;
    };
  }
  function Yl(a) {
    return z ? (N ? z.includes(a) : a === z) : !1;
  }
  function Ql(a) {
    dt[a ? 'unshift' : 'push'](() => {
      (ge = a), t(32, ge);
    });
  }
  function Xl() {
    (se = this.value), t(3, se);
  }
  const Zl = a => Pt(a),
    xl = a => {
      t(30, (Y = a));
    };
  function $l(a) {
    dt[a ? 'unshift' : 'push'](() => {
      (Fe = a), t(33, Fe);
    });
  }
  return (
    (n.$$set = a => {
      'items' in a && t(0, (r = a.items)),
        'searchFunction' in a && t(52, (u = a.searchFunction)),
        'labelFieldName' in a && t(53, (f = a.labelFieldName)),
        'keywordsFieldName' in a && t(54, (h = a.keywordsFieldName)),
        'valueFieldName' in a && t(55, (d = a.valueFieldName)),
        'labelFunction' in a && t(56, (g = a.labelFunction)),
        'keywordsFunction' in a && t(57, (p = a.keywordsFunction)),
        'valueFunction' in a && t(4, (b = a.valueFunction)),
        'keywordsCleanFunction' in a && t(58, (_ = a.keywordsCleanFunction)),
        'textCleanFunction' in a && t(59, (I = a.textCleanFunction)),
        'beforeChange' in a && t(60, (L = a.beforeChange)),
        'onChange' in a && t(61, (A = a.onChange)),
        'onFocus' in a && t(62, (M = a.onFocus)),
        'onBlur' in a && t(63, (K = a.onBlur)),
        'onCreate' in a && t(64, (oe = a.onCreate)),
        'selectFirstIfEmpty' in a && t(65, (le = a.selectFirstIfEmpty)),
        'minCharactersToSearch' in a && t(66, (H = a.minCharactersToSearch)),
        'maxItemsToShowInList' in a && t(5, (q = a.maxItemsToShowInList)),
        'multiple' in a && t(6, (N = a.multiple)),
        'create' in a && t(7, (G = a.create)),
        'ignoreAccents' in a && t(67, (R = a.ignoreAccents)),
        'matchAllKeywords' in a && t(68, (ae = a.matchAllKeywords)),
        'sortByMatchedKeywords' in a && t(69, (k = a.sortByMatchedKeywords)),
        'itemFilterFunction' in a && t(70, (C = a.itemFilterFunction)),
        'itemSortFunction' in a && t(71, ($ = a.itemSortFunction)),
        'lock' in a && t(8, (ne = a.lock)),
        'delay' in a && t(72, (ue = a.delay)),
        'localFiltering' in a && t(73, (we = a.localFiltering)),
        'localSorting' in a && t(74, (ke = a.localSorting)),
        'cleanUserText' in a && t(75, (lt = a.cleanUserText)),
        'closeOnBlur' in a && t(76, (nt = a.closeOnBlur)),
        'hideArrow' in a && t(9, (bt = a.hideArrow)),
        'showClear' in a && t(77, (st = a.showClear)),
        'showLoadingIndicator' in a && t(10, (wt = a.showLoadingIndicator)),
        'noResultsText' in a && t(11, (kt = a.noResultsText)),
        'loadingText' in a && t(12, (pt = a.loadingText)),
        'moreItemsText' in a && t(13, (vt = a.moreItemsText)),
        'createText' in a && t(14, (It = a.createText)),
        'placeholder' in a && t(15, (yt = a.placeholder)),
        'className' in a && t(16, (St = a.className)),
        'inputClassName' in a && t(17, (Et = a.inputClassName)),
        'inputId' in a && t(18, (Ee = a.inputId)),
        'name' in a && t(19, (Ft = a.name)),
        'selectName' in a && t(20, (Ct = a.selectName)),
        'selectId' in a && t(21, (Tt = a.selectId)),
        'title' in a && t(22, (Nt = a.title)),
        'html5autocomplete' in a && t(23, (Dt = a.html5autocomplete)),
        'readonly' in a && t(24, (At = a.readonly)),
        'dropdownClassName' in a && t(25, (qt = a.dropdownClassName)),
        'disabled' in a && t(26, (Lt = a.disabled)),
        'noInputStyles' in a && t(27, (Vt = a.noInputStyles)),
        'required' in a && t(28, (Bt = a.required)),
        'debug' in a && t(78, (T = a.debug)),
        'tabindex' in a && t(29, (Kt = a.tabindex)),
        'selectedItem' in a && t(1, (z = a.selectedItem)),
        'value' in a && t(2, (ot = a.value)),
        'highlightedItem' in a && t(51, (it = a.highlightedItem)),
        'text' in a && t(3, (se = a.text)),
        '$$scope' in a && t(82, (i = a.$$scope));
    }),
    (n.$$.update = () => {
      (n.$$.dirty[0] & 1) | (n.$$.dirty[1] & 2097152) && (u || Je()),
        n.$$.dirty[0] & 2 && ql(),
        (n.$$.dirty[0] & 1073741824) | (n.$$.dirty[1] & 1) &&
          t(51, (it = x && Y && Y >= 0 && Y < x.length ? x[Y].item : null)),
        (n.$$.dirty[0] & 1) | (n.$$.dirty[2] & 786432) &&
          t(36, (s = pe && ((r && r.length > 0) || Ge > 0))),
        (n.$$.dirty[0] & 322) | (n.$$.dirty[2] & 32768) && t(35, (l = st || ((ne || N) && z)));
    }),
    [
      r,
      z,
      ot,
      se,
      b,
      q,
      N,
      G,
      ne,
      bt,
      wt,
      kt,
      pt,
      vt,
      It,
      yt,
      St,
      Et,
      Ee,
      Ft,
      Ct,
      Tt,
      Nt,
      Dt,
      At,
      qt,
      Lt,
      Vt,
      Bt,
      Kt,
      Y,
      x,
      ge,
      Fe,
      He,
      l,
      s,
      Mt,
      ut,
      ct,
      Pt,
      Ml,
      zl,
      Ol,
      Rl,
      Rt,
      jl,
      Gl,
      Jl,
      Wl,
      Yl,
      it,
      u,
      f,
      h,
      d,
      g,
      p,
      _,
      I,
      L,
      A,
      M,
      K,
      oe,
      le,
      H,
      R,
      ae,
      k,
      C,
      $,
      ue,
      we,
      ke,
      lt,
      nt,
      st,
      T,
      Wt,
      pe,
      Ge,
      i,
      o,
      Ql,
      Xl,
      Zl,
      xl,
      $l
    ]
  );
}
class Kn extends De {
  constructor(e) {
    super(),
      Ae(
        this,
        e,
        Bn,
        qn,
        qe,
        {
          items: 0,
          searchFunction: 52,
          labelFieldName: 53,
          keywordsFieldName: 54,
          valueFieldName: 55,
          labelFunction: 56,
          keywordsFunction: 57,
          valueFunction: 4,
          keywordsCleanFunction: 58,
          textCleanFunction: 59,
          beforeChange: 60,
          onChange: 61,
          onFocus: 62,
          onBlur: 63,
          onCreate: 64,
          selectFirstIfEmpty: 65,
          minCharactersToSearch: 66,
          maxItemsToShowInList: 5,
          multiple: 6,
          create: 7,
          ignoreAccents: 67,
          matchAllKeywords: 68,
          sortByMatchedKeywords: 69,
          itemFilterFunction: 70,
          itemSortFunction: 71,
          lock: 8,
          delay: 72,
          localFiltering: 73,
          localSorting: 74,
          cleanUserText: 75,
          closeOnBlur: 76,
          hideArrow: 9,
          showClear: 77,
          showLoadingIndicator: 10,
          noResultsText: 11,
          loadingText: 12,
          moreItemsText: 13,
          createText: 14,
          placeholder: 15,
          className: 16,
          inputClassName: 17,
          inputId: 18,
          name: 19,
          selectName: 20,
          selectId: 21,
          title: 22,
          html5autocomplete: 23,
          readonly: 24,
          dropdownClassName: 25,
          disabled: 26,
          noInputStyles: 27,
          required: 28,
          debug: 78,
          tabindex: 29,
          selectedItem: 1,
          value: 2,
          highlightedItem: 51,
          text: 3,
          highlightFilter: 79
        },
        null,
        [-1, -1, -1, -1]
      );
  }
  get highlightFilter() {
    return this.$$.ctx[79];
  }
}
function ml(n) {
  let e,
    t = be.get().name + '',
    s,
    l,
    o = be.get().artist + '',
    i,
    r,
    u;
  return {
    c() {
      (e = S('div')), (s = V(t)), (l = V(' by ')), (i = V(o)), this.h();
    },
    l(f) {
      e = E(f, 'DIV', { title: !0, class: !0 });
      var h = v(e);
      (s = B(h, t)), (l = B(h, ' by ')), (i = B(h, o)), h.forEach(m), this.h();
    },
    h() {
      c(e, 'title', 'Open in Spotify'),
        c(
          e,
          'class',
          'cursor-pointer border-blue-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden'
        );
    },
    m(f, h) {
      D(f, e, h), w(e, s), w(e, l), w(e, i), r || ((u = X(e, 'click', n[6])), (r = !0));
    },
    p: de,
    d(f) {
      f && m(e), (r = !1), u();
    }
  };
}
function _l(n) {
  let e,
    t = n[1] ? 'custom ' : '',
    s,
    l,
    o = Tl(new Date(), n[3]) + '',
    i;
  return {
    c() {
      (e = S('span')), (s = V(t)), (l = V('audial #')), (i = V(o)), this.h();
    },
    l(r) {
      e = E(r, 'SPAN', { class: !0 });
      var u = v(e);
      (s = B(u, t)), (l = B(u, 'audial #')), (i = B(u, o)), u.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'my-2');
    },
    m(r, u) {
      D(r, e, u), w(e, s), w(e, l), w(e, i);
    },
    p(r, u) {
      u & 2 && t !== (t = r[1] ? 'custom ' : '') && te(s, t);
    },
    d(r) {
      r && m(e);
    }
  };
}
function gl(n) {
  let e, t, s, l, o, i, r;
  return (
    (t = new Nl({
      props: {
        title: 'Share Score',
        className: 'block mx-auto',
        type: 'submit',
        $$slots: { default: [Mn] },
        $$scope: { ctx: n }
      }
    })),
    t.$on('click', n[5]),
    {
      c() {
        (e = S('div')),
          Be(t.$$.fragment),
          (s = j()),
          (l = S('p')),
          (o = V('copied to clipboard.')),
          this.h();
      },
      l(u) {
        e = E(u, 'DIV', { class: !0 });
        var f = v(e);
        Ke(t.$$.fragment, f), (s = U(f)), (l = E(f, 'P', { class: !0 }));
        var h = v(l);
        (o = B(h, 'copied to clipboard.')), h.forEach(m), f.forEach(m), this.h();
      },
      h() {
        c(
          l,
          'class',
          (i = `${
            n[2] ? 'opacity-100' : 'opacity-0'
          } text-blue-100 font-semibold transition-all duration-500 my-2`)
        ),
          c(e, 'class', 'w-full mx-auto my-2');
      },
      m(u, f) {
        D(u, e, f), Me(t, e, null), w(e, s), w(e, l), w(l, o), (r = !0);
      },
      p(u, f) {
        const h = {};
        f & 256 && (h.$$scope = { dirty: f, ctx: u }),
          t.$set(h),
          (!r ||
            (f & 4 &&
              i !==
                (i = `${
                  u[2] ? 'opacity-100' : 'opacity-0'
                } text-blue-100 font-semibold transition-all duration-500 my-2`))) &&
            c(l, 'class', i);
      },
      i(u) {
        r || (P(t.$$.fragment, u), (r = !0));
      },
      o(u) {
        J(t.$$.fragment, u), (r = !1);
      },
      d(u) {
        u && m(e), ze(t);
      }
    }
  );
}
function Mn(n) {
  let e;
  return {
    c() {
      e = V('share');
    },
    l(t) {
      e = B(t, 'share');
    },
    m(t, s) {
      D(t, e, s);
    },
    d(t) {
      t && m(e);
    }
  };
}
function zn(n) {
  let e,
    t = n[1] || n[0] ? !Z.get().correct : !Q.get().correct,
    s,
    l,
    o,
    i = n[4]() + '',
    r,
    u,
    f,
    h = t && ml(n),
    d = !n[0] && _l(n),
    g = !n[0] && gl(n);
  return {
    c() {
      (e = S('div')),
        h && h.c(),
        (s = j()),
        d && d.c(),
        (l = j()),
        (o = S('span')),
        (r = V(i)),
        (u = j()),
        g && g.c(),
        this.h();
    },
    l(p) {
      e = E(p, 'DIV', { class: !0 });
      var b = v(e);
      h && h.l(b), (s = U(b)), d && d.l(b), (l = U(b)), (o = E(b, 'SPAN', {}));
      var _ = v(o);
      (r = B(_, i)), _.forEach(m), (u = U(b)), g && g.l(b), b.forEach(m), this.h();
    },
    h() {
      c(e, 'class', 'py-3');
    },
    m(p, b) {
      D(p, e, b),
        h && h.m(e, null),
        w(e, s),
        d && d.m(e, null),
        w(e, l),
        w(e, o),
        w(o, r),
        w(e, u),
        g && g.m(e, null),
        (f = !0);
    },
    p(p, [b]) {
      b & 3 && (t = p[1] || p[0] ? !Z.get().correct : !Q.get().correct),
        t ? (h ? h.p(p, b) : ((h = ml(p)), h.c(), h.m(e, s))) : h && (h.d(1), (h = null)),
        p[0] ? d && (d.d(1), (d = null)) : d ? d.p(p, b) : ((d = _l(p)), d.c(), d.m(e, l)),
        p[0]
          ? g &&
            (ye(),
            J(g, 1, 1, () => {
              g = null;
            }),
            Se())
          : g
          ? (g.p(p, b), b & 1 && P(g, 1))
          : ((g = gl(p)), g.c(), P(g, 1), g.m(e, null));
    },
    i(p) {
      f || (P(g), (f = !0));
    },
    o(p) {
      J(g), (f = !1);
    },
    d(p) {
      p && m(e), h && h.d(), d && d.d(), g && g.d();
    }
  };
}
function On(n, e, t) {
  let s;
  gt(n, ht, d => t(7, (s = d)));
  let { random: l } = e,
    { custom: o } = e,
    i = !1;
  const r = new Date('4/12/2022'),
    u = () => {
      let d = '';
      for (const g of (o || l ? Z.get().guesses : Q.get().guesses) || [])
        g.correct
          ? (d += '\u{1F7E9} ')
          : g.artistCorrect
          ? (d += '\u{1F7E8} ')
          : g.song
          ? (d += '\u{1F7E5} ')
          : (d += '\u2B1C ');
      for (let g = 0; g < 6 - (o || l ? Z.get().attempts : Q.get().attempts); g++) d += '\u2B1B ';
      return d;
    },
    f = () => {
      let d = `${o ? 'custom ' : ''}audial #` + Tl(new Date(), r);
      (d +=
        `
` + u()),
        (d +=
          `
` + s.url.toString()),
        navigator.clipboard.writeText(d),
        t(2, (i = !0)),
        Ie.track('share-score', { result: u(), custom: o });
    },
    h = () => {
      window.open(`https://open.spotify.com/track/${be.get().id}`, '_blank').focus();
    };
  return (
    (n.$$set = d => {
      'random' in d && t(0, (l = d.random)), 'custom' in d && t(1, (o = d.custom));
    }),
    [l, o, i, r, u, f, h]
  );
}
class Pn extends De {
  constructor(e) {
    super(), Ae(this, e, On, zn, qe, { random: 0, custom: 1 });
  }
}
function bl(n, e, t) {
  const s = n.slice();
  return (s[12] = e[t]), s;
}
function wl(n, e, t) {
  const s = n.slice();
  return (s[12] = e[t]), s;
}
function kl(n) {
  let e, t, s;
  return {
    c() {
      (e = S('div')),
        (t = S('span')),
        (s = V('listen to the song and try to guess it correctly. you have 6 attempts.')),
        this.h();
    },
    l(l) {
      e = E(l, 'DIV', { class: !0 });
      var o = v(e);
      t = E(o, 'SPAN', { class: !0 });
      var i = v(t);
      (s = B(i, 'listen to the song and try to guess it correctly. you have 6 attempts.')),
        i.forEach(m),
        o.forEach(m),
        this.h();
    },
    h() {
      c(t, 'class', 'text-center mx-auto w-full text-blue-100'),
        c(e, 'class', 'w-full px-0 sm:px-20 transition-all duration-200');
    },
    m(l, o) {
      D(l, e, o), w(e, t), w(t, s);
    },
    d(l) {
      l && m(e);
    }
  };
}
function pl(n) {
  let e,
    t,
    s = n[2].guesses.filter(yl),
    l = [];
  for (let r = 0; r < s.length; r += 1) l[r] = vl(wl(n, s, r));
  let o = n[2].guesses.filter(Sl),
    i = [];
  for (let r = 0; r < o.length; r += 1) i[r] = Il(bl(n, o, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1) l[r].c();
      e = j();
      for (let r = 0; r < i.length; r += 1) i[r].c();
      t = W();
    },
    l(r) {
      for (let u = 0; u < l.length; u += 1) l[u].l(r);
      e = U(r);
      for (let u = 0; u < i.length; u += 1) i[u].l(r);
      t = W();
    },
    m(r, u) {
      for (let f = 0; f < l.length; f += 1) l[f].m(r, u);
      D(r, e, u);
      for (let f = 0; f < i.length; f += 1) i[f].m(r, u);
      D(r, t, u);
    },
    p(r, u) {
      if (u & 4) {
        s = r[2].guesses.filter(yl);
        let f;
        for (f = 0; f < s.length; f += 1) {
          const h = wl(r, s, f);
          l[f] ? l[f].p(h, u) : ((l[f] = vl(h)), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1) l[f].d(1);
        l.length = s.length;
      }
      if (u & 4) {
        o = r[2].guesses.filter(Sl);
        let f;
        for (f = 0; f < o.length; f += 1) {
          const h = bl(r, o, f);
          i[f] ? i[f].p(h, u) : ((i[f] = Il(h)), i[f].c(), i[f].m(t.parentNode, t));
        }
        for (; f < i.length; f += 1) i[f].d(1);
        i.length = o.length;
      }
    },
    d(r) {
      Oe(l, r), r && m(e), Oe(i, r), r && m(t);
    }
  };
}
function Rn(n) {
  let e, t;
  return {
    c() {
      (e = S('div')), (t = V('song guess skipped')), this.h();
    },
    l(s) {
      e = E(s, 'DIV', { class: !0 });
      var l = v(e);
      (t = B(l, 'song guess skipped')), l.forEach(m), this.h();
    },
    h() {
      c(
        e,
        'class',
        'border-gray-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden'
      );
    },
    m(s, l) {
      D(s, e, l), w(e, t);
    },
    p: de,
    d(s) {
      s && m(e);
    }
  };
}
function jn(n) {
  let e,
    t = n[12].song.name + '',
    s,
    l,
    o = n[12].song.artist + '',
    i,
    r,
    u,
    f;
  function h() {
    return n[7](n[12]);
  }
  return {
    c() {
      (e = S('div')), (s = V(t)), (l = V(' by ')), (i = V(o)), this.h();
    },
    l(d) {
      e = E(d, 'DIV', { title: !0, class: !0 });
      var g = v(e);
      (s = B(g, t)), (l = B(g, ' by ')), (i = B(g, o)), g.forEach(m), this.h();
    },
    h() {
      c(e, 'title', 'Open in Spotify'),
        c(
          e,
          'class',
          (r = `cursor-pointer ${
            n[12].artistCorrect ? 'border-amber-400' : 'border-red-600'
          } border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`)
        );
    },
    m(d, g) {
      D(d, e, g), w(e, s), w(e, l), w(e, i), u || ((f = X(e, 'click', h)), (u = !0));
    },
    p(d, g) {
      (n = d),
        g & 4 && t !== (t = n[12].song.name + '') && te(s, t),
        g & 4 && o !== (o = n[12].song.artist + '') && te(i, o),
        g & 4 &&
          r !==
            (r = `cursor-pointer ${
              n[12].artistCorrect ? 'border-amber-400' : 'border-red-600'
            } border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`) &&
          c(e, 'class', r);
    },
    d(d) {
      d && m(e), (u = !1), f();
    }
  };
}
function vl(n) {
  let e;
  function t(o, i) {
    return o[12].song ? jn : Rn;
  }
  let s = t(n),
    l = s(n);
  return {
    c() {
      l.c(), (e = W());
    },
    l(o) {
      l.l(o), (e = W());
    },
    m(o, i) {
      l.m(o, i), D(o, e, i);
    },
    p(o, i) {
      s === (s = t(o)) && l ? l.p(o, i) : (l.d(1), (l = s(o)), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(o) {
      l.d(o), o && m(e);
    }
  };
}
function Il(n) {
  let e,
    t = n[12].song.name + '',
    s,
    l,
    o = n[12].song.artist + '',
    i,
    r,
    u,
    f;
  function h() {
    return n[8](n[12]);
  }
  return {
    c() {
      (e = S('div')), (s = V(t)), (l = V(' by ')), (i = V(o)), (r = j()), this.h();
    },
    l(d) {
      e = E(d, 'DIV', { title: !0, class: !0 });
      var g = v(e);
      (s = B(g, t)), (l = B(g, ' by ')), (i = B(g, o)), (r = U(g)), g.forEach(m), this.h();
    },
    h() {
      c(e, 'title', 'Open in Spotify'),
        c(
          e,
          'class',
          'cursor-pointer border-green-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden'
        );
    },
    m(d, g) {
      D(d, e, g), w(e, s), w(e, l), w(e, i), w(e, r), u || ((f = X(e, 'click', h)), (u = !0));
    },
    p(d, g) {
      (n = d),
        g & 4 && t !== (t = n[12].song.name + '') && te(s, t),
        g & 4 && o !== (o = n[12].song.artist + '') && te(i, o);
    },
    d(d) {
      d && m(e), (u = !1), f();
    }
  };
}
function Un(n) {
  let e, t;
  return (
    (e = new Pn({ props: { custom: n[1], random: n[0] } })),
    {
      c() {
        Be(e.$$.fragment);
      },
      l(s) {
        Ke(e.$$.fragment, s);
      },
      m(s, l) {
        Me(e, s, l), (t = !0);
      },
      p(s, l) {
        const o = {};
        l & 2 && (o.custom = s[1]), l & 1 && (o.random = s[0]), e.$set(o);
      },
      i(s) {
        t || (P(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        J(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ze(e, s);
      }
    }
  );
}
function Hn(n) {
  let e, t, s, l, o, i, r, u, f, h, d, g;
  function p(_) {
    n[9](_);
  }
  let b = {
    name: 'song-selection',
    className: 'w-10/12',
    inputClassName:
      'border-gray-600 border-2 w-full h-8 px-2 py-5 rounded-sm bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200',
    dropdownClassName: 'p-0 bg-gray-900',
    placeholder: `${6 - n[2].attempts} ${6 - n[2].attempts !== 1 ? 'attempts' : 'attempt'} left`,
    minCharactersToSearch: 2,
    searchFunction: n[6],
    labelFieldName: 'name',
    valueFieldName: 'id',
    showLoadingIndicator: !0,
    noInputStyles: !0,
    hideArrow: !0,
    $$slots: {
      loading: [Wn],
      'no-results': [Jn],
      item: [Gn, ({ item: _ }) => ({ 11: _ }), ({ item: _ }) => (_ ? 2048 : 0)]
    },
    $$scope: { ctx: n }
  };
  return (
    n[3] !== void 0 && (b.selectedItem = n[3]),
    (t = new Kn({ props: b })),
    dt.push(() => nn(t, 'selectedItem', p)),
    (i = new Nl({
      props: {
        title: 'Submit Song Guess',
        type: 'primary',
        className: 'w-full',
        $$slots: { default: [Yn] },
        $$scope: { ctx: n }
      }
    })),
    i.$on('click', n[4]),
    {
      c() {
        (e = S('div')),
          Be(t.$$.fragment),
          (l = j()),
          (o = S('div')),
          Be(i.$$.fragment),
          (r = j()),
          (u = S('div')),
          (f = V('skip')),
          this.h();
      },
      l(_) {
        e = E(_, 'DIV', { class: !0, title: !0 });
        var I = v(e);
        Ke(t.$$.fragment, I), (l = U(I)), (o = E(I, 'DIV', { class: !0, title: !0 }));
        var L = v(o);
        Ke(i.$$.fragment, L), (r = U(L)), (u = E(L, 'DIV', { class: !0 }));
        var A = v(u);
        (f = B(A, 'skip')), A.forEach(m), L.forEach(m), I.forEach(m), this.h();
      },
      h() {
        c(u, 'class', 'text-gray-400 cursor-pointer text-center underline underline-offset-1'),
          c(o, 'class', 'w-2/12 pl-4 mt-0.5'),
          c(o, 'title', 'guess selected song'),
          c(e, 'class', 'flex mt-6 mb-2'),
          c(e, 'title', 'guess a song');
      },
      m(_, I) {
        D(_, e, I),
          Me(t, e, null),
          w(e, l),
          w(e, o),
          Me(i, o, null),
          w(o, r),
          w(o, u),
          w(u, f),
          (h = !0),
          d || ((g = X(u, 'click', n[5])), (d = !0));
      },
      p(_, I) {
        const L = {};
        I & 4 &&
          (L.placeholder = `${6 - _[2].attempts} ${
            6 - _[2].attempts !== 1 ? 'attempts' : 'attempt'
          } left`),
          I & 133120 && (L.$$scope = { dirty: I, ctx: _ }),
          !s && I & 8 && ((s = !0), (L.selectedItem = _[3]), sn(() => (s = !1))),
          t.$set(L);
        const A = {};
        I & 131072 && (A.$$scope = { dirty: I, ctx: _ }), i.$set(A);
      },
      i(_) {
        h || (P(t.$$.fragment, _), P(i.$$.fragment, _), (h = !0));
      },
      o(_) {
        J(t.$$.fragment, _), J(i.$$.fragment, _), (h = !1);
      },
      d(_) {
        _ && m(e), ze(t), ze(i), (d = !1), g();
      }
    }
  );
}
function Gn(n) {
  let e,
    t,
    s = n[11].name + '',
    l;
  return {
    c() {
      (e = S('div')), (t = S('span')), (l = V(s)), this.h();
    },
    l(o) {
      e = E(o, 'DIV', { slot: !0, class: !0 });
      var i = v(e);
      t = E(i, 'SPAN', {});
      var r = v(t);
      (l = B(r, s)), r.forEach(m), i.forEach(m), this.h();
    },
    h() {
      c(e, 'slot', 'item'),
        c(
          e,
          'class',
          'border-2 h-10 px-2 py-3 w-full text-left rounded-sm bg-gray-900 text-white hover:text-blue-500 hover:border-blue-500 overflow-ellipsis whitespace-nowrap overflow-hidden transition-colors duration-150'
        );
    },
    m(o, i) {
      D(o, e, i), w(e, t), w(t, l);
    },
    p(o, i) {
      i & 2048 && s !== (s = o[11].name + '') && te(l, s);
    },
    d(o) {
      o && m(e);
    }
  };
}
function Jn(n) {
  let e, t, s;
  return {
    c() {
      (e = S('div')),
        (t = S('span')),
        (s = V('could not find this song in the playlist.')),
        this.h();
    },
    l(l) {
      e = E(l, 'DIV', { slot: !0, class: !0 });
      var o = v(e);
      t = E(o, 'SPAN', {});
      var i = v(t);
      (s = B(i, 'could not find this song in the playlist.')), i.forEach(m), o.forEach(m), this.h();
    },
    h() {
      c(e, 'slot', 'no-results'), c(e, 'class', 'py-1');
    },
    m(l, o) {
      D(l, e, o), w(e, t), w(t, s);
    },
    p: de,
    d(l) {
      l && m(e);
    }
  };
}
function Wn(n) {
  let e, t, s;
  return {
    c() {
      (e = S('div')), (t = S('span')), (s = V('searching for songs...')), this.h();
    },
    l(l) {
      e = E(l, 'DIV', { slot: !0, class: !0 });
      var o = v(e);
      t = E(o, 'SPAN', {});
      var i = v(t);
      (s = B(i, 'searching for songs...')), i.forEach(m), o.forEach(m), this.h();
    },
    h() {
      c(e, 'slot', 'loading'), c(e, 'class', 'py-1');
    },
    m(l, o) {
      D(l, e, o), w(e, t), w(t, s);
    },
    p: de,
    d(l) {
      l && m(e);
    }
  };
}
function Yn(n) {
  let e, t;
  return {
    c() {
      (e = he('svg')), (t = he('path')), this.h();
    },
    l(s) {
      e = me(s, 'svg', {
        xmlns: !0,
        class: !0,
        fill: !0,
        viewBox: !0,
        stroke: !0,
        'stroke-width': !0
      });
      var l = v(e);
      (t = me(l, 'path', { 'stroke-linecap': !0, 'stroke-linejoin': !0, d: !0 })),
        v(t).forEach(m),
        l.forEach(m),
        this.h();
    },
    h() {
      c(t, 'stroke-linecap', 'round'),
        c(t, 'stroke-linejoin', 'round'),
        c(t, 'd', 'M13 7l5 5m0 0l-5 5m5-5H6'),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'class', 'h-6 w-6 mx-auto'),
        c(e, 'fill', 'none'),
        c(e, 'viewBox', '0 0 24 24'),
        c(e, 'stroke', 'currentColor'),
        c(e, 'stroke-width', '2');
    },
    m(s, l) {
      D(s, e, l), w(e, t);
    },
    p: de,
    d(s) {
      s && m(e);
    }
  };
}
function Qn(n) {
  let e,
    t,
    s,
    l,
    o,
    i,
    r,
    u = n[2].attempts === 0 && kl(),
    f = n[2].guesses && pl(n);
  const h = [Hn, Un],
    d = [];
  function g(p, b) {
    return p[2].attempts < 6 && !p[2].correct ? 0 : 1;
  }
  return (
    (o = g(n)),
    (i = d[o] = h[o](n)),
    {
      c() {
        (e = S('div')),
          u && u.c(),
          (t = j()),
          (s = S('div')),
          f && f.c(),
          (l = j()),
          i.c(),
          this.h();
      },
      l(p) {
        e = E(p, 'DIV', {});
        var b = v(e);
        u && u.l(b), (t = U(b)), (s = E(b, 'DIV', { class: !0 }));
        var _ = v(s);
        f && f.l(_), (l = U(_)), i.l(_), _.forEach(m), b.forEach(m), this.h();
      },
      h() {
        c(s, 'class', 'w-full px-0 transition-all sm:px-20 items-center game');
      },
      m(p, b) {
        D(p, e, b),
          u && u.m(e, null),
          w(e, t),
          w(e, s),
          f && f.m(s, null),
          w(s, l),
          d[o].m(s, null),
          (r = !0);
      },
      p(p, [b]) {
        p[2].attempts === 0 ? u || ((u = kl()), u.c(), u.m(e, t)) : u && (u.d(1), (u = null)),
          p[2].guesses
            ? f
              ? f.p(p, b)
              : ((f = pl(p)), f.c(), f.m(s, l))
            : f && (f.d(1), (f = null));
        let _ = o;
        (o = g(p)),
          o === _
            ? d[o].p(p, b)
            : (ye(),
              J(d[_], 1, 1, () => {
                d[_] = null;
              }),
              Se(),
              (i = d[o]),
              i ? i.p(p, b) : ((i = d[o] = h[o](p)), i.c()),
              P(i, 1),
              i.m(s, null));
      },
      i(p) {
        r || (P(i), (r = !0));
      },
      o(p) {
        J(i), (r = !1);
      },
      d(p) {
        p && m(e), u && u.d(), f && f.d(), d[o].d();
      }
    }
  );
}
const yl = n => !n.correct,
  Sl = n => n.correct;
function Xn(n, e, t) {
  let s;
  gt(n, on, b => t(10, (s = b)));
  let { random: l = !1 } = e,
    o = {},
    { custom: i = !1 } = e;
  El(async () => {
    (new Date(Q.get().date).toLocaleDateString() !== new Date().toLocaleDateString() || !Q) &&
      Q.set({ guesses: [], date: new Date(), correct: !1, attempts: 0 }),
      i || l
        ? (t(2, (o = Z.get())), Z.listen(b => t(2, (o = b))))
        : (t(2, (o = Q.get())), Q.listen(b => t(2, (o = b)))),
      l && i
        ? Z.setKey('type', 'custom_random')
        : l
        ? Z.setKey('type', 'random')
        : i
        ? Z.setKey('type', 'custom')
        : Q.setKey('type', 'default');
  });
  let r = {};
  const u = () => {
      if (!r || !r.id) {
        rn.push('Please select a valid song from the list.', {
          theme: {
            '--toastWidth': '20rem',
            '--toastBackground': '#e64949',
            '--toastBarBackground': '#C53030'
          }
        });
        return;
      }
      const b = [...(o.guesses || [])];
      if (r.id === be.get().id)
        b.push({ song: be.get(), correct: !0, artistCorrect: !0 }),
          i || l
            ? (Z.setKey('guesses', b),
              Z.setKey('correct', !0),
              Z.setKey('attempts', o.attempts + 1))
            : (Q.setKey('guesses', b),
              Q.setKey('correct', !0),
              Q.setKey('attempts', o.attempts + 1)),
          Ie.track('guess-song', { correct: !0, custom: i, random: l }),
          Ie.track('attempt-correct', { custom: i, random: l }),
          $e.set({ array: [...$e.get().array, o] });
      else {
        const _ = s.find(I => I.id == r.id);
        b.push({ song: Qt(_), correct: !1, artistCorrect: r.artist.includes(be.get().artist) }),
          i || l
            ? (Z.setKey('guesses', b), Z.setKey('attempts', o.attempts + 1))
            : (Q.setKey('guesses', b), Q.setKey('attempts', o.attempts + 1)),
          Ie.track('guess-song', { correct: !1, custom: i, random: l });
      }
      o.attempts === 6 &&
        !o.correct &&
        (Ie.track('attempt-fail', { custom: i, random: l }),
        $e.set({ array: [...$e.get().array, o] })),
        t(3, (r = void 0)),
        Ve.set(!0);
    },
    f = () => {
      const b = [...(o.guesses || [])];
      b.push({ song: null, correct: !1, artistCorrect: !1 }),
        i || l
          ? (Z.setKey('guesses', b), Z.setKey('attempts', o.attempts + 1))
          : (Q.setKey('guesses', b), Q.setKey('attempts', o.attempts + 1)),
        Ie.track('skip-song', { custom: i, random: l });
    },
    h = async b => {
      let _ = s.filter(I =>
        (I.name + ' ' + I.artists[0].name).toLowerCase().includes(b.toLowerCase())
      );
      return (
        (_ = _.map(I => Qt(I))),
        (_ = _.map(I => ({
          name: I.name + ' by ' + I.artist,
          id: I.id,
          artist: I.artist,
          preview: I.preview
        }))),
        _
      );
    },
    d = b => {
      window.open(`https://open.spotify.com/track/${b.song.id}`, '_blank').focus();
    },
    g = b => {
      window.open(`https://open.spotify.com/track/${b.song.id}`, '_blank').focus();
    };
  function p(b) {
    (r = b), t(3, r);
  }
  return (
    (n.$$set = b => {
      'random' in b && t(0, (l = b.random)), 'custom' in b && t(1, (i = b.custom));
    }),
    [l, i, o, r, u, f, h, d, g, p]
  );
}
class ls extends De {
  constructor(e) {
    super(), Ae(this, e, Xn, Qn, qe, { random: 0, custom: 1 });
  }
}
export { ts as F, ls as G, es as L };
