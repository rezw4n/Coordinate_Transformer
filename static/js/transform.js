var h,
  aa = aa || {},
  k = this;
function p(a) {
  return void 0 !== a;
}
function ba() {}
function q(a) {
  var b = typeof a;
  if ("object" == b)
    if (a) {
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if (
        "[object Array]" == c ||
        ("number" == typeof a.length &&
          "undefined" != typeof a.splice &&
          "undefined" != typeof a.propertyIsEnumerable &&
          !a.propertyIsEnumerable("splice"))
      )
        return "array";
      if (
        "[object Function]" == c ||
        ("undefined" != typeof a.call &&
          "undefined" != typeof a.propertyIsEnumerable &&
          !a.propertyIsEnumerable("call"))
      )
        return "function";
    } else return "null";
  else if ("function" == b && "undefined" == typeof a.call) return "object";
  return b;
}
function ca(a) {
  var b = q(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function r(a) {
  return "string" == typeof a;
}
function da(a) {
  return "number" == typeof a;
}
function ea(a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
}
var fa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  ga = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
}
function t(a, b, c) {
  t =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? ha
      : ia;
  return t.apply(null, arguments);
}
var ja =
  Date.now ||
  function () {
    return +new Date();
  };
function u(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.ha = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.qb = function (a, c, f) {
    for (var g = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
      g[l - 2] = arguments[l];
    return b.prototype[c].apply(a, g);
  };
}
var ka = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    };
function la(a) {
  if (!ma.test(a)) return a;
  -1 != a.indexOf("\x26") && (a = a.replace(na, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(oa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(pa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(qa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ra, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(sa, "\x26#0;"));
  return a;
}
var na = /&/g,
  oa = /</g,
  pa = />/g,
  qa = /"/g,
  ra = /'/g,
  sa = /\x00/g,
  ma = /[\x00&<>"']/;
function ta(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function ua(a) {
  var b = Number(a);
  return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b;
}
var va = Array.prototype.indexOf
    ? function (a, b, c) {
        return Array.prototype.indexOf.call(a, b, c);
      }
    : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
  v = Array.prototype.forEach
    ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
          f in e && b.call(c, e[f], f, a);
      },
  wa = Array.prototype.filter
    ? function (a, b, c) {
        return Array.prototype.filter.call(a, b, c);
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = [], f = 0, g = r(a) ? a.split("") : a, l = 0;
          l < d;
          l++
        )
          if (l in g) {
            var n = g[l];
            b.call(c, n, l, a) && (e[f++] = n);
          }
        return e;
      };
function xa(a, b, c) {
  a: {
    for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : r(a) ? a.charAt(b) : a[b];
}
function ya(a, b) {
  var c = va(a, b),
    d;
  (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
  return d;
}
function za(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
}
function Aa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
var w;
a: {
  var Ba = k.navigator;
  if (Ba) {
    var Ca = Ba.userAgent;
    if (Ca) {
      w = Ca;
      break a;
    }
  }
  w = "";
}
function Da(a, b) {
  for (var c in a) b.call(void 0, a[c], c, a);
}
function Ea(a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
}
function Fa(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
function Ga(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = d;
  return b;
}
function Ha(a) {
  return null !== a && "withCredentials" in a;
}
var Ia =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function Ja(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < Ia.length; f++)
      (c = Ia[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
var Ka = -1 != w.indexOf("Opera") || -1 != w.indexOf("OPR"),
  x = -1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE"),
  La = -1 != w.indexOf("Edge"),
  y =
    -1 != w.indexOf("Gecko") &&
    !(-1 != w.toLowerCase().indexOf("webkit") && -1 == w.indexOf("Edge")) &&
    !(-1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE")) &&
    -1 == w.indexOf("Edge"),
  z = -1 != w.toLowerCase().indexOf("webkit") && -1 == w.indexOf("Edge");
function Ma() {
  var a = w;
  if (y) return /rv\:([^\);]+)(\)|;)/.exec(a);
  if (La) return /Edge\/([\d\.]+)/.exec(a);
  if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  if (z) return /WebKit\/(\S+)/.exec(a);
}
function Na() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var Oa = (function () {
    if (Ka && k.opera) {
      var a;
      var b = k.opera.version;
      try {
        a = b();
      } catch (c) {
        a = b;
      }
      return a;
    }
    a = "";
    (b = Ma()) && (a = b ? b[1] : "");
    return x && ((b = Na()), b > parseFloat(a)) ? String(b) : a;
  })(),
  Pa = {};
function B(a) {
  var b;
  if (!(b = Pa[a])) {
    b = 0;
    for (
      var c = ka(String(Oa)).split("."),
        d = ka(String(a)).split("."),
        e = Math.max(c.length, d.length),
        f = 0;
      0 == b && f < e;
      f++
    ) {
      var g = c[f] || "",
        l = d[f] || "",
        n = RegExp("(\\d*)(\\D*)", "g"),
        E = RegExp("(\\d*)(\\D*)", "g");
      do {
        var m = n.exec(g) || ["", "", ""],
          U = E.exec(l) || ["", "", ""];
        if (0 == m[0].length && 0 == U[0].length) break;
        b =
          ta(
            0 == m[1].length ? 0 : parseInt(m[1], 10),
            0 == U[1].length ? 0 : parseInt(U[1], 10)
          ) ||
          ta(0 == m[2].length, 0 == U[2].length) ||
          ta(m[2], U[2]);
      } while (0 == b);
    }
    b = Pa[a] = 0 <= b;
  }
  return b;
}
var Qa = k.document,
  Ra =
    Qa && x
      ? Na() || ("CSS1Compat" == Qa.compatMode ? parseInt(Oa, 10) : 5)
      : void 0;
var Sa = !x || 9 <= Ra;
(!y && !x) || (x && 9 <= Ra) || (y && B("1.9.1"));
x && B("9");
var Ta = x || Ka || z;
function C(a) {
  return isFinite(a) && !isNaN(a);
}
function D(a) {
  var b = document;
  return r(a) ? b.getElementById(a) : a;
}
function Ua(a) {
  var b = document;
  a = a || b;
  a =
    a.querySelectorAll && a.querySelector
      ? a.querySelectorAll("LABEL")
      : a.getElementsByTagName("LABEL");
  return a;
}
function Va(a, b) {
  Da(b, function (b, d) {
    "style" == d
      ? (a.style.cssText = b)
      : "class" == d
      ? (a.className = b)
      : "for" == d
      ? (a.htmlFor = b)
      : Wa.hasOwnProperty(d)
      ? a.setAttribute(Wa[d], b)
      : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
      ? a.setAttribute(d, b)
      : (a[d] = b);
  });
}
var Wa = {
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  frameborder: "frameBorder",
  height: "height",
  maxlength: "maxLength",
  role: "role",
  rowspan: "rowSpan",
  type: "type",
  usemap: "useMap",
  valign: "vAlign",
  width: "width",
};
function F(a, b, c) {
  var d = arguments,
    e = document,
    f = d[0],
    g = d[1];
  if (!Sa && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', la(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', la(g.type), '"');
      var l = {};
      Ja(l, g);
      delete l.type;
      g = l;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  g &&
    (r(g)
      ? (f.className = g)
      : "array" == q(g)
      ? (f.className = g.join(" "))
      : Va(f, g));
  2 < d.length && Xa(e, f, d, 2);
  return f;
}
function Xa(a, b, c, d) {
  function e(c) {
    c && b.appendChild(r(c) ? a.createTextNode(c) : c);
  }
  for (; d < c.length; d++) {
    var f = c[d];
    !ca(f) || (ea(f) && 0 < f.nodeType) ? e(f) : v(Ya(f) ? Aa(f) : f, e);
  }
}
function Za(a, b) {
  a.appendChild(b);
}
function $a(a, b) {
  Xa(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1);
}
function ab(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function bb(a) {
  var b;
  if (
    Ta &&
    !(x && B("9") && !B("10") && k.SVGElement && a instanceof k.SVGElement) &&
    (b = a.parentElement)
  )
    return b;
  b = a.parentNode;
  return ea(b) && 1 == b.nodeType ? b : null;
}
function G(a, b) {
  if ("textContent" in a) a.textContent = b;
  else if (3 == a.nodeType) a.data = b;
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
    a.firstChild.data = b;
  } else {
    for (var c; (c = a.firstChild); ) a.removeChild(c);
    a.appendChild(
      (9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(
        String(b)
      )
    );
  }
}
function Ya(a) {
  if (a && "number" == typeof a.length) {
    if (ea(a)) return "function" == typeof a.item || "string" == typeof a.item;
    if ("function" == q(a)) return "function" == typeof a.item;
  }
  return !1;
}
function cb(a) {
  if (a.classList) return a.classList;
  a = a.className;
  return (r(a) && a.match(/\S+/g)) || [];
}
function db(a, b) {
  var c;
  a.classList
    ? (c = a.classList.contains(b))
    : ((c = cb(a)), (c = 0 <= va(c, b)));
  return c;
}
function eb(a, b) {
  a.classList
    ? a.classList.add(b)
    : db(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function fb(a, b) {
  a.classList
    ? a.classList.remove(b)
    : db(a, b) &&
      (a.className = wa(cb(a), function (a) {
        return a != b;
      }).join(" "));
}
function H(a, b, c) {
  c ? eb(a, b) : fb(a, b);
}
function gb(a, b) {
  var c = !db(a, b);
  H(a, b, c);
}
function hb() {
  0 != ib && (jb[this[fa] || (this[fa] = ++ga)] = this);
  this.V = this.V;
  this.fa = this.fa;
}
var ib = 0,
  jb = {};
hb.prototype.V = !1;
hb.prototype.U = function () {
  if (this.fa) for (; this.fa.length; ) this.fa.shift()();
};
var kb = !x || 9 <= Ra,
  lb = x && !B("9");
!z || B("528");
(y && B("1.9b")) || (x && B("8")) || (Ka && B("9.5")) || (z && B("528"));
(y && !B("8")) || (x && B("9"));
function I(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.J = !1;
  this.Ia = !0;
}
I.prototype.stopPropagation = function () {
  this.J = !0;
};
I.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
  this.Ia = !1;
};
function mb(a) {
  mb[" "](a);
  return a;
}
mb[" "] = ba;
function J(a, b) {
  I.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode =
    this.keyCode =
    this.button =
    this.screenY =
    this.screenX =
    this.clientY =
    this.clientX =
    this.offsetY =
    this.offsetX =
      0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.W = this.state = null;
  if (a) {
    var c = (this.type = a.type),
      d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
      if (y) {
        var f;
        a: {
          try {
            mb(e.nodeName);
            f = !0;
            break a;
          } catch (g) {}
          f = !1;
        }
        f || (e = null);
      }
    } else
      "mouseover" == c
        ? (e = a.fromElement)
        : "mouseout" == c && (e = a.toElement);
    this.relatedTarget = e;
    null === d
      ? ((this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0))
      : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.W = a;
    a.defaultPrevented && this.preventDefault();
  }
}
u(J, I);
J.prototype.stopPropagation = function () {
  J.ha.stopPropagation.call(this);
  this.W.stopPropagation
    ? this.W.stopPropagation()
    : (this.W.cancelBubble = !0);
};
J.prototype.preventDefault = function () {
  J.ha.preventDefault.call(this);
  var a = this.W;
  if (a.preventDefault) a.preventDefault();
  else if (((a.returnValue = !1), lb))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
    } catch (b) {}
};
var K = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  nb = 0;
function ob(a, b, c, d, e) {
  this.listener = a;
  this.ga = null;
  this.src = b;
  this.type = c;
  this.T = !!d;
  this.ca = e;
  this.key = ++nb;
  this.R = this.ba = !1;
}
function pb(a) {
  a.R = !0;
  a.listener = null;
  a.ga = null;
  a.src = null;
  a.ca = null;
}
function L(a) {
  this.src = a;
  this.g = {};
  this.$ = 0;
}
L.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || ((a = this.g[f] = []), this.$++);
  var g = qb(a, b, d, e);
  -1 < g
    ? ((b = a[g]), c || (b.ba = !1))
    : ((b = new ob(b, this.src, f, !!d, e)), (b.ba = c), a.push(b));
  return b;
};
L.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.g)) return !1;
  var e = this.g[a];
  b = qb(e, b, c, d);
  return -1 < b
    ? (pb(e[b]),
      Array.prototype.splice.call(e, b, 1),
      0 == e.length && (delete this.g[a], this.$--),
      !0)
    : !1;
};
function rb(a, b) {
  var c = b.type;
  if (!(c in a.g)) return !1;
  var d = ya(a.g[c], b);
  d && (pb(b), 0 == a.g[c].length && (delete a.g[c], a.$--));
  return d;
}
function sb(a, b) {
  var c = b && b.toString(),
    d = 0,
    e;
  for (e in a.g)
    if (!c || e == c) {
      for (var f = a.g[e], g = 0; g < f.length; g++) ++d, pb(f[g]);
      delete a.g[e];
      a.$--;
    }
  return d;
}
L.prototype.qa = function (a, b, c, d) {
  a = this.g[a.toString()];
  var e = -1;
  a && (e = qb(a, b, c, d));
  return -1 < e ? a[e] : null;
};
L.prototype.hasListener = function (a, b) {
  var c = p(a),
    d = c ? a.toString() : "",
    e = p(b);
  return Ea(this.g, function (a) {
    for (var g = 0; g < a.length; ++g)
      if (!((c && a[g].type != d) || (e && a[g].T != b))) return !0;
    return !1;
  });
};
function qb(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.R && f.listener == b && f.T == !!c && f.ca == d) return e;
  }
  return -1;
}
var tb = "closure_lm_" + ((1e6 * Math.random()) | 0),
  ub = {},
  vb = 0;
function M(a, b, c, d, e) {
  if ("array" == q(b)) for (var f = 0; f < b.length; f++) M(a, b[f], c, d, e);
  else if (((c = wb(c)), a && a[K])) a.l.add(String(b), c, !1, d, e);
  else {
    if (!b) throw Error("Invalid event type");
    var f = !!d,
      g = N(a);
    g || (a[tb] = g = new L(a));
    c = g.add(b, c, !1, d, e);
    if (!c.ga) {
      d = xb();
      c.ga = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) a.addEventListener(b.toString(), d, f);
      else if (a.attachEvent) a.attachEvent(yb(b.toString()), d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      vb++;
    }
  }
}
function xb() {
  var a = zb,
    b = kb
      ? function (c) {
          return a.call(b.src, b.listener, c);
        }
      : function (c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
  return b;
}
function Ab(a, b, c, d, e) {
  if ("array" == q(b)) for (var f = 0; f < b.length; f++) Ab(a, b[f], c, d, e);
  else
    (c = wb(c)),
      a && a[K]
        ? a.l.remove(String(b), c, d, e)
        : a && (a = N(a)) && (b = a.qa(b, c, !!d, e)) && Bb(b);
}
function Bb(a) {
  if (da(a) || !a || a.R) return !1;
  var b = a.src;
  if (b && b[K]) return rb(b.l, a);
  var c = a.type,
    d = a.ga;
  b.removeEventListener
    ? b.removeEventListener(c, d, a.T)
    : b.detachEvent && b.detachEvent(yb(c), d);
  vb--;
  (c = N(b)) ? (rb(c, a), 0 == c.$ && ((c.src = null), (b[tb] = null))) : pb(a);
  return !0;
}
function O(a, b) {
  if (!a) return 0;
  if (a && a[K]) return a.l ? sb(a.l, b) : 0;
  var c = N(a);
  if (!c) return 0;
  var d = 0,
    e = b && b.toString(),
    f;
  for (f in c.g)
    if (!e || f == e)
      for (var g = c.g[f].concat(), l = 0; l < g.length; ++l) Bb(g[l]) && ++d;
  return d;
}
function yb(a) {
  return a in ub ? ub[a] : (ub[a] = "on" + a);
}
function Cb(a, b, c, d) {
  var e = !0;
  if ((a = N(a)))
    if ((b = a.g[b.toString()]))
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.T == c && !f.R && ((f = Db(f, d)), (e = e && !1 !== f));
      }
  return e;
}
function Db(a, b) {
  var c = a.listener,
    d = a.ca || a.src;
  a.ba && Bb(a);
  return c.call(d, b);
}
function zb(a, b) {
  if (a.R) return !0;
  if (!kb) {
    var c;
    if (!(c = b))
      a: {
        c = ["window", "event"];
        for (var d = k, e; (e = c.shift()); )
          if (null != d[e]) d = d[e];
          else {
            c = null;
            break a;
          }
        c = d;
      }
    e = c;
    c = new J(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode)
          try {
            e.keyCode = -1;
            break a;
          } catch (n) {
            f = !0;
          }
        if (f || void 0 == e.returnValue) e.returnValue = !0;
      }
      e = [];
      for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
      for (var f = a.type, g = e.length - 1; !c.J && 0 <= g; g--) {
        c.currentTarget = e[g];
        var l = Cb(e[g], f, !0, c),
          d = d && l;
      }
      for (g = 0; !c.J && g < e.length; g++)
        (c.currentTarget = e[g]), (l = Cb(e[g], f, !1, c)), (d = d && l);
    }
    return d;
  }
  return Db(a, new J(b, this));
}
function N(a) {
  a = a[tb];
  return a instanceof L ? a : null;
}
var Eb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function wb(a) {
  if ("function" == q(a)) return a;
  a[Eb] ||
    (a[Eb] = function (b) {
      return a.handleEvent(b);
    });
  return a[Eb];
}
function P() {
  hb.call(this);
  this.l = new L(this);
  this.Pa = this;
  this.ua = null;
}
u(P, hb);
P.prototype[K] = !0;
h = P.prototype;
h.addEventListener = function (a, b, c, d) {
  M(this, a, b, c, d);
};
h.removeEventListener = function (a, b, c, d) {
  Ab(this, a, b, c, d);
};
h.dispatchEvent = function (a) {
  var b,
    c = this.ua;
  if (c) for (b = []; c; c = c.ua) b.push(c);
  var c = this.Pa,
    d = a.type || a;
  if (r(a)) a = new I(a, c);
  else if (a instanceof I) a.target = a.target || c;
  else {
    var e = a;
    a = new I(d, c);
    Ja(a, e);
  }
  var e = !0,
    f;
  if (b)
    for (var g = b.length - 1; !a.J && 0 <= g; g--)
      (f = a.currentTarget = b[g]), (e = Fb(f, d, !0, a) && e);
  a.J ||
    ((f = a.currentTarget = c),
    (e = Fb(f, d, !0, a) && e),
    a.J || (e = Fb(f, d, !1, a) && e));
  if (b)
    for (g = 0; !a.J && g < b.length; g++)
      (f = a.currentTarget = b[g]), (e = Fb(f, d, !1, a) && e);
  return e;
};
h.U = function () {
  P.ha.U.call(this);
  this.l && sb(this.l, void 0);
  this.ua = null;
};
function Gb(a, b, c, d, e) {
  a.l.add(String(b), c, !0, d, e);
}
function Fb(a, b, c, d) {
  b = a.l.g[String(b)];
  if (!b) return !0;
  b = b.concat();
  for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.R && g.T == c) {
      var l = g.listener,
        n = g.ca || g.src;
      g.ba && rb(a.l, g);
      e = !1 !== l.call(n, d) && e;
    }
  }
  return e && 0 != d.Ia;
}
h.qa = function (a, b, c, d) {
  return this.l.qa(String(a), b, c, d);
};
h.hasListener = function (a, b) {
  return this.l.hasListener(p(a) ? String(a) : void 0, b);
};
function Q(a, b, c, d, e) {
  this.Ba = F("DIV", "popup-content");
  this.aa = null;
  c = c ? F("A", "popup-close", "X") : null;
  this.H = F("DIV", "popup");
  e && eb(this.H, e);
  a && Za(this.H, F("DIV", "popup-title", a));
  c && this.H.appendChild(c);
  this.H.appendChild(this.Ba);
  this.Ja = b ? F("DIV", "popup-bg", this.H) : this.H;
  c &&
    M(
      c,
      "click",
      function (a) {
        R(this, !1);
        d && d();
        a.preventDefault();
      },
      !1,
      this
    );
}
function R(a, b) {
  b ? document.body.appendChild(a.Ja) : ab(a.Ja);
}
Q.prototype.append = function (a) {
  $a(this.Ba, arguments);
};
Q.prototype.Ra = function (a) {
  this.aa ||
    ((this.aa = F("DIV", "popup-actions")), this.H.appendChild(this.aa));
  $a(this.aa, arguments);
};
function Hb(a, b) {
  P.call(this);
  this.Wa = a;
  this.S = b;
  this.D = new Q("Coordinate reference system", !0, !0);
  this.Y = F("INPUT", "srsdialog-input");
  var c = F("INPUT", {
    type: "submit",
    class: "srsdialog-table",
    value: "Search",
  });
  this.N = F("TABLE", "srsdialog-table");
  var d = F(
    "TR",
    void 0,
    F("TH", void 0, "Code"),
    F("TH", void 0, "Name"),
    F("TH", void 0, "Area"),
    F("TH", void 0, "Accuracy")
  );
  this.N.appendChild(d);
  this.pa = F("FORM", "srsdialog-form");
  M(
    this.pa,
    "submit",
    function (a) {
      this.va();
      a.preventDefault();
    },
    !1,
    this
  );
  $a(this.pa, this.Y, c, this.N);
  this.D.append(this.pa);
  this.K = null;
  this.v = [];
  M(
    this.Y,
    "keydown",
    function (a) {
      27 == a.keyCode && R(this.D, !1);
      a.stopPropagation();
    },
    !1,
    this
  );
}
u(Hb, P);
h = Hb.prototype;
h.show = function () {
  R(this.D, !0);
  this.Y.value = "";
  this.Y.focus();
  this.O();
};
function Ib(a, b, c) {
  b = b.split("-");
  if (!(1 > b.length)) {
    var d = 1 < b.length ? parseInt(b[1], 10) : null,
      e = a.S,
      e = e.replace("{query}", encodeURI(b[0])),
      e = e + "\x26exports\x3d1\x26limit\x3d1";
    null === d || (e += "\x26transformations\x3d1");
    Jb(
      e,
      t(function (a) {
        a = a.target;
        Kb(a) || c(null);
        var b = S(a).results[0];
        null === d ||
          v(b.transformations, function (a) {
            a.id.code == d &&
              ((a.id.code = b.id.code + "-" + d), (a.name = b.name), (b = a));
          });
        c(b);
      }, a),
      "GET"
    );
  }
}
h.O = function () {
  v(this.v, ab);
  v(this.v, O);
  this.v = [];
  this.K = null;
};
h.va = function () {
  this.O();
  var a = this.Y.value,
    b = this.S;
  "" == a && (a = "*");
  b = b.replace("{query}", encodeURI(a));
  b += "\x26exports\x3d1";
  this.Wa && (b += "\x26transformations\x3d1");
  Jb(
    b,
    t(function (a) {
      a = S(a.target).results;
      var b = t(function (a, b, c, d) {
        var f = b.area,
          e = "";
        null !== b.accuracy && (e = b.accuracy.toString() + " m");
        var A = F(
          "TR",
          a,
          F("TD", void 0, c),
          F("TD", void 0, d),
          F("TD", void 0, f),
          F("TD", void 0, e)
        );
        this.v.push(A);
        this.N.appendChild(A);
        M(
          A,
          "click",
          function (a) {
            this.wa(A, b);
            a.preventDefault();
          },
          !1,
          this
        );
        return A;
      }, this);
      this.O();
      var e, f;
      v(
        a,
        function (a) {
          var c = [];
          if (null !== a.transformations)
            for (var n = 0; n < a.transformations.length; n++)
              a.transformations[n].usable && c.push(a.transformations[n]);
          var E = a.default_transformation,
            n = F(
              "SPAN",
              "srsdialog-transshower " + (0 < c.length ? " expandable" : ""),
              "\u25b6"
            );
          e = F(
            "SPAN",
            { title: "Show transformations" },
            n,
            a.id.code.toString()
          );
          f = a.name;
          b("system" + (0 < c.length ? " expandable" : ""), a, e, f);
          var m = [];
          v(
            c,
            function (c) {
              var f = c.id.code;
              c.id.code = a.id.code.toString() + "-" + f;
              c.name = a.name;
              e = "  " + f;
              E == f && (a.bbox = c.bbox);
              c = b("trans hidden" + (E == f ? " default" : ""), c, e, "");
              m.push(c);
            },
            this
          );
          M(
            n,
            "click",
            function (a) {
              a.stopPropagation();
              gb(a.target, "expanded");
              v(
                m,
                function (a) {
                  gb(a, "hidden");
                },
                this
              );
              a.preventDefault();
            },
            !1,
            this
          );
        },
        this
      );
    }, this)
  );
};
h.wa = function (a, b) {
  v(
    this.v,
    function (b) {
      H(b, "selected", b == a);
    },
    this
  );
  this.K = b;
  this.ra();
};
h.ra = function () {
  this.dispatchEvent({ type: Lb, data: this.K });
  R(this.D, !1);
};
var Lb = "selected";
function Mb(a, b, c) {
  if ("function" == q(a)) c && (a = t(a, c));
  else if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);
  else throw Error("Invalid listener argument");
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
}
function Nb(a) {
  a = String(a);
  if (
    /^\s*$/.test(a)
      ? 0
      : /^[\],:{}\s\u2028\u2029]*$/.test(
          a
            .replace(/\\["\\\/bfnrtu]/g, "@")
            .replace(
              /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
        )
  )
    try {
      return eval("(" + a + ")");
    } catch (b) {}
  throw Error("Invalid JSON string: " + a);
}
function Ob(a) {
  if (a.m && "function" == typeof a.m) return a.m();
  if (r(a)) return a.split("");
  if (ca(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  return Fa(a);
}
function Pb(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
  else if (ca(a) || r(a)) v(a, b, c);
  else {
    var d;
    if (a.w && "function" == typeof a.w) d = a.w();
    else if (a.m && "function" == typeof a.m) d = void 0;
    else if (ca(a) || r(a)) {
      d = [];
      for (var e = a.length, f = 0; f < e; f++) d.push(f);
    } else d = Ga(a);
    for (var e = Ob(a), f = e.length, g = 0; g < f; g++)
      b.call(c, e[g], d && d[g], a);
  }
}
function Qb(a, b) {
  this.A = {};
  this.i = [];
  this.h = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
}
h = Qb.prototype;
h.m = function () {
  Rb(this);
  for (var a = [], b = 0; b < this.i.length; b++) a.push(this.A[this.i[b]]);
  return a;
};
h.w = function () {
  Rb(this);
  return this.i.concat();
};
h.G = function (a) {
  return T(this.A, a);
};
h.clear = function () {
  this.A = {};
  this.h = this.i.length = 0;
};
h.remove = function (a) {
  return T(this.A, a)
    ? (delete this.A[a], this.h--, this.i.length > 2 * this.h && Rb(this), !0)
    : !1;
};
function Rb(a) {
  if (a.h != a.i.length) {
    for (var b = 0, c = 0; b < a.i.length; ) {
      var d = a.i[b];
      T(a.A, d) && (a.i[c++] = d);
      b++;
    }
    a.i.length = c;
  }
  if (a.h != a.i.length) {
    for (var e = {}, c = (b = 0); b < a.i.length; )
      (d = a.i[b]), T(e, d) || ((a.i[c++] = d), (e[d] = 1)), b++;
    a.i.length = c;
  }
}
h.get = function (a, b) {
  return T(this.A, a) ? this.A[a] : b;
};
h.set = function (a, b) {
  T(this.A, a) || (this.h++, this.i.push(a));
  this.A[a] = b;
};
h.addAll = function (a) {
  var b;
  a instanceof Qb ? ((b = a.w()), (a = a.m())) : ((b = Ga(a)), (a = Fa(a)));
  for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
};
h.forEach = function (a, b) {
  for (var c = this.w(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
h.clone = function () {
  return new Qb(this);
};
function T(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function Sb() {}
Sb.prototype.Aa = null;
function Tb(a) {
  var b;
  (b = a.Aa) || ((b = {}), Ub(a) && ((b[0] = !0), (b[1] = !0)), (b = a.Aa = b));
  return b;
}
var Vb;
function Wb() {}
u(Wb, Sb);
function Xb(a) {
  return (a = Ub(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
}
function Ub(a) {
  if (
    !a.Da &&
    "undefined" == typeof XMLHttpRequest &&
    "undefined" != typeof ActiveXObject
  ) {
    for (
      var b = [
          "MSXML2.XMLHTTP.6.0",
          "MSXML2.XMLHTTP.3.0",
          "MSXML2.XMLHTTP",
          "Microsoft.XMLHTTP",
        ],
        c = 0;
      c < b.length;
      c++
    ) {
      var d = b[c];
      try {
        return new ActiveXObject(d), (a.Da = d);
      } catch (e) {}
    }
    throw Error(
      "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
    );
  }
  return a.Da;
}
Vb = new Wb();
var Yb =
  /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Zb(a, b) {
  if (a)
    for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
      var e = c[d].indexOf("\x3d"),
        f = null,
        g = null;
      0 <= e
        ? ((f = c[d].substring(0, e)), (g = c[d].substring(e + 1)))
        : (f = c[d]);
      b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");
    }
}
function $b(a) {
  P.call(this);
  this.headers = new Qb();
  this.ma = a || null;
  this.B = !1;
  this.la = this.a = null;
  this.ta = "";
  this.P = 0;
  this.ea = "";
  this.I = this.sa = this.da = this.oa = !1;
  this.ja = 0;
  this.ia = null;
  this.Ha = ac;
  this.za = this.Va = this.ob = !1;
}
u($b, P);
var ac = "",
  bc = /^https?$/i,
  cc = ["POST", "PUT"],
  dc = [];
function Jb(a, b, c) {
  var d = new $b();
  dc.push(d);
  b && d.l.add("complete", b, !1, void 0, void 0);
  Gb(d, "ready", d.Sa);
  d.send(a, c, void 0, void 0);
}
h = $b.prototype;
h.Sa = function () {
  if (!this.V && ((this.V = !0), this.U(), 0 != ib)) {
    var a = this[fa] || (this[fa] = ++ga);
    delete jb[a];
  }
  ya(dc, this);
};
h.send = function (a, b, c, d) {
  if (this.a)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request\x3d" +
        this.ta +
        "; newUri\x3d" +
        a
    );
  b = b ? b.toUpperCase() : "GET";
  this.ta = a;
  this.ea = "";
  this.P = 0;
  this.oa = !1;
  this.B = !0;
  this.a = this.ma ? Xb(this.ma) : Xb(Vb);
  this.la = this.ma ? Tb(this.ma) : Tb(Vb);
  this.a.onreadystatechange = t(this.Ga, this);
  this.Va &&
    "onprogress" in this.a &&
    ((this.a.onprogress = t(function (a) {
      this.Fa(a, !0);
    }, this)),
    this.a.upload && (this.a.upload.onprogress = t(this.Fa, this)));
  try {
    (this.sa = !0), this.a.open(b, String(a), !0), (this.sa = !1);
  } catch (f) {
    ec(this, f);
    return;
  }
  a = c || "";
  var e = this.headers.clone();
  d &&
    Pb(d, function (a, b) {
      e.set(b, a);
    });
  d = xa(e.w(), fc);
  c = k.FormData && a instanceof k.FormData;
  !(0 <= va(cc, b)) ||
    d ||
    c ||
    e.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  e.forEach(function (a, b) {
    this.a.setRequestHeader(b, a);
  }, this);
  this.Ha && (this.a.responseType = this.Ha);
  Ha(this.a) && (this.a.withCredentials = this.ob);
  try {
    gc(this),
      0 < this.ja &&
        ((this.za = hc(this.a))
          ? ((this.a.timeout = this.ja), (this.a.ontimeout = t(this.Na, this)))
          : (this.ia = Mb(this.Na, this.ja, this))),
      (this.da = !0),
      this.a.send(a),
      (this.da = !1);
  } catch (f) {
    ec(this, f);
  }
};
function hc(a) {
  return x && B(9) && da(a.timeout) && p(a.ontimeout);
}
function fc(a) {
  return "content-type" == a.toLowerCase();
}
h.Na = function () {
  "undefined" != typeof aa &&
    this.a &&
    ((this.ea = "Timed out after " + this.ja + "ms, aborting"),
    (this.P = 8),
    this.dispatchEvent("timeout"),
    this.abort(8));
};
function ec(a, b) {
  a.B = !1;
  a.a && ((a.I = !0), a.a.abort(), (a.I = !1));
  a.ea = b;
  a.P = 5;
  ic(a);
  jc(a);
}
function ic(a) {
  a.oa || ((a.oa = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
h.abort = function (a) {
  this.a &&
    this.B &&
    ((this.B = !1),
    (this.I = !0),
    this.a.abort(),
    (this.I = !1),
    (this.P = a || 7),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    jc(this));
};
h.U = function () {
  this.a &&
    (this.B && ((this.B = !1), (this.I = !0), this.a.abort(), (this.I = !1)),
    jc(this, !0));
  $b.ha.U.call(this);
};
h.Ga = function () {
  this.V || (this.sa || this.da || this.I ? kc(this) : this.Ua());
};
h.Ua = function () {
  kc(this);
};
function kc(a) {
  if (a.B && "undefined" != typeof aa && (!a.la[1] || 4 != V(a) || 2 != lc(a)))
    if (a.da && 4 == V(a)) Mb(a.Ga, 0, a);
    else if ((a.dispatchEvent("readystatechange"), 4 == V(a))) {
      a.B = !1;
      try {
        if (Kb(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          a.P = 6;
          var b;
          try {
            b = 2 < V(a) ? a.a.statusText : "";
          } catch (c) {
            b = "";
          }
          a.ea = b + " [" + lc(a) + "]";
          ic(a);
        }
      } finally {
        jc(a);
      }
    }
}
h.Fa = function (a, b) {
  this.dispatchEvent(mc(a, "progress"));
  this.dispatchEvent(mc(a, b ? "downloadprogress" : "uploadprogress"));
};
function mc(a, b) {
  return {
    type: b,
    lengthComputable: a.lengthComputable,
    loaded: a.loaded,
    total: a.total,
  };
}
function jc(a, b) {
  if (a.a) {
    gc(a);
    var c = a.a,
      d = a.la[0] ? ba : null;
    a.a = null;
    a.la = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {}
  }
}
function gc(a) {
  a.a && a.za && (a.a.ontimeout = null);
  da(a.ia) && (k.clearTimeout(a.ia), (a.ia = null));
}
function Kb(a) {
  var b = lc(a),
    c;
  a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      c = !0;
      break a;
    default:
      c = !1;
  }
  if (!c) {
    if ((b = 0 === b))
      (a = String(a.ta).match(Yb)[1] || null),
        !a &&
          k.self &&
          k.self.location &&
          ((a = k.self.location.protocol), (a = a.substr(0, a.length - 1))),
        (b = !bc.test(a ? a.toLowerCase() : ""));
    c = b;
  }
  return c;
}
function V(a) {
  return a.a ? a.a.readyState : 0;
}
function lc(a) {
  try {
    return 2 < V(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function S(a) {
  if (a.a) return Nb(a.a.responseText);
}
h.getResponseHeader = function (a) {
  return this.a && 4 == V(this) ? this.a.getResponseHeader(a) : void 0;
};
h.getAllResponseHeaders = function () {
  return this.a && 4 == V(this) ? this.a.getAllResponseHeaders() : "";
};
function nc(a) {
  P.call(this);
  this.S = a;
  this.b = this.c = null;
  this.s = this.o = 0;
  this.D = new Q("Transformers", !0, !0);
  this.Ka = F("DIV", "transformerdialog-srs-in");
  this.La = F("DIV", "transformerdialog-srs-out");
  this.Qa = F("DIV", "transformerdialog-aoi");
  this.N = F("TABLE", "transformerdialog-table");
  a = F(
    "TR",
    void 0,
    F("TH", void 0, "Code"),
    F("TH", void 0, "Area of Usage"),
    F("TH", void 0, "Accuracy")
  );
  this.N.appendChild(a);
  this.K = null;
  this.v = [];
  this.D.append(this.Ka, this.La, this.Qa, this.N);
}
u(nc, P);
function oc(a) {
  for (var b = [], c = 0; c < a.length; c++)
    null != a[c] &&
      ("object" === typeof a[c]
        ? b.push("code:" + a[c].id.code)
        : b.push("code:" + a[c]));
  a = b.join(" OR ");
  0 < b.length && (a = "(" + a + ")");
  return a;
}
h = nc.prototype;
h.va = function () {
  this.O();
  var a = this.S,
    a = a.replace("{query}", encodeURI(oc([this.c, this.b]))),
    a = a + "\x26transformations\x3d1\x26limit\x3d2";
  Jb(
    a,
    t(function (a) {
      var c = S(a.target);
      a = t(function (a, b) {
        var c = b.area,
          d = "" != b.accuracy ? b.accuracy.toString() + " m" : "",
          f = { title: b.name, class: a };
        0 < b.grids.length && (c += " [grid]");
        b.deprecated && (c += " [deprecated]");
        b.reversed && (c += " [reversed]");
        var e = "";
        null != b.id && (e = b.id.code.toString());
        var A = F(
          "TR",
          f,
          F("TD", void 0, e),
          F("TD", void 0, c),
          F("TD", void 0, d)
        );
        this.v.push(A);
        this.N.appendChild(A);
        M(
          A,
          "click",
          function (a) {
            this.wa(A, b);
            a.preventDefault();
          },
          !1,
          this
        );
        return A;
      }, this);
      this.O();
      a("system", {
        id: null,
        name: "Automatically select a transformation based on the CRS and coordinates",
        area: "Use best available transformation",
        accuracy: "",
        grids: [],
      });
      for (var d = null, e = null, c = c.results, f = 0; f < c.length; f++)
        c[f].id.code == this.c.id.code
          ? (d = c[f])
          : c[f].id.code == this.b.id.code && (e = c[f]);
      if (null != d)
        for (c = 0; c < d.transformations.length; c++)
          (f = d.transformations[c]),
            f.target_crs.code == this.b.id.code && f.usable && a("system", f);
      if (null != d)
        for (c = 0; c < e.transformations.length; c++)
          (f = e.transformations[c]),
            f.target_crs.code == this.c.id.code &&
              f.reversible &&
              f.usable &&
              ((f.reversed = !0), a("system", f));
    }, this)
  );
};
function pc(a, b, c, d, e) {
  var f = a.S,
    f = f.replace("{query}", encodeURI(oc([c, d]))),
    f = f + "\x26transformations\x3d1\x26limit\x3d2";
  Jb(
    f,
    t(function (a) {
      var f = a.target;
      Kb(f) || e(null);
      a = !1;
      for (var n = null, E = null, f = S(f).results, m = 0; m < f.length; m++)
        f[m].id.code == c ? (n = f[m]) : f[m].id.code == d && (E = f[m]);
      if (null != n)
        for (f = 0; f < n.transformations.length; f++)
          if (
            ((m = n.transformations[f]),
            m.target_crs.code == d && m.usable && m.id.code == b)
          ) {
            e(m);
            a = !0;
            break;
          }
      if (null != E)
        for (f = 0; f < E.transformations.length; f++)
          if (
            ((m = E.transformations[f]),
            m.target_crs.code == c &&
              m.reversible &&
              m.usable &&
              m.id.code == b)
          ) {
            m.reversed = !0;
            e(m);
            a = !0;
            break;
          }
      a || e(null);
    }, a)
  );
}
h.O = function () {
  v(this.v, ab);
  v(this.v, O);
  this.v = [];
  this.K = null;
};
h.show = function (a, b, c, d) {
  R(this.D, !0);
  this.c = a;
  this.b = b;
  this.o = c;
  this.s = d;
  this.Ka.innerText =
    "From: " + a.id.authority + ": " + a.id.code + " " + a.name;
  this.La.innerText = "To: " + b.id.authority + ": " + b.id.code + " " + b.name;
  this.va();
};
h.wa = function (a, b) {
  v(
    this.v,
    function (b) {
      H(b, "selected", b == a);
    },
    this
  );
  null == b.id && (b = null);
  this.K = b;
  this.ra();
};
h.ra = function () {
  this.dispatchEvent({ type: qc, data: this.K });
  R(this.D, !1);
};
var qc = "selected";
function rc(a, b, c) {
  this.h = this.f = null;
  this.u = a || null;
  this.Ta = !!c;
}
function W(a) {
  a.f ||
    ((a.f = new Qb()),
    (a.h = 0),
    a.u &&
      Zb(a.u, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
}
h = rc.prototype;
h.add = function (a, b) {
  W(this);
  this.u = null;
  a = sc(this, a);
  var c = this.f.get(a);
  c || this.f.set(a, (c = []));
  c.push(b);
  this.h++;
  return this;
};
h.remove = function (a) {
  W(this);
  a = sc(this, a);
  return this.f.G(a)
    ? ((this.u = null), (this.h -= this.f.get(a).length), this.f.remove(a))
    : !1;
};
h.clear = function () {
  this.f = this.u = null;
  this.h = 0;
};
h.G = function (a) {
  W(this);
  a = sc(this, a);
  return this.f.G(a);
};
h.w = function () {
  W(this);
  for (var a = this.f.m(), b = this.f.w(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
h.m = function (a) {
  W(this);
  var b = [];
  if (r(a)) this.G(a) && (b = za(b, this.f.get(sc(this, a))));
  else {
    a = this.f.m();
    for (var c = 0; c < a.length; c++) b = za(b, a[c]);
  }
  return b;
};
h.set = function (a, b) {
  W(this);
  this.u = null;
  a = sc(this, a);
  this.G(a) && (this.h -= this.f.get(a).length);
  this.f.set(a, [b]);
  this.h++;
  return this;
};
h.get = function (a, b) {
  var c = a ? this.m(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
h.toString = function () {
  if (this.u) return this.u;
  if (!this.f) return "";
  for (var a = [], b = this.f.w(), c = 0; c < b.length; c++)
    for (
      var d = b[c], e = encodeURIComponent(String(d)), d = this.m(d), f = 0;
      f < d.length;
      f++
    ) {
      var g = e;
      "" !== d[f] && (g += "\x3d" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  return (this.u = a.join("\x26"));
};
h.clone = function () {
  var a = new rc();
  a.u = this.u;
  this.f && ((a.f = this.f.clone()), (a.h = this.h));
  return a;
};
function sc(a, b) {
  var c = String(b);
  a.Ta && (c = c.toLowerCase());
  return c;
}
h.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    Pb(
      arguments[b],
      function (a, b) {
        this.add(b, a);
      },
      this
    );
};
function tc(a) {
  this.na = a;
}
var uc = /\s*;\s*/;
h = tc.prototype;
h.isEnabled = function () {
  return navigator.cookieEnabled;
};
h.set = function (a, b, c, d, e, f) {
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  p(c) || (c = -1);
  e = e ? ";domain\x3d" + e : "";
  d = d ? ";path\x3d" + d : "";
  f = f ? ";secure" : "";
  c =
    0 > c
      ? ""
      : 0 == c
      ? ";expires\x3d" + new Date(1970, 1, 1).toUTCString()
      : ";expires\x3d" + new Date(ja() + 1e3 * c).toUTCString();
  this.na.cookie = a + "\x3d" + b + e + d + c + f;
};
h.get = function (a, b) {
  for (
    var c = a + "\x3d", d = (this.na.cookie || "").split(uc), e = 0, f;
    (f = d[e]);
    e++
  ) {
    if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
    if (f == a) return "";
  }
  return b;
};
h.remove = function (a, b, c) {
  var d = this.G(a);
  this.set(a, "", 0, b, c);
  return d;
};
h.w = function () {
  return vc(this).keys;
};
h.m = function () {
  return vc(this).values;
};
h.G = function (a) {
  return p(this.get(a));
};
h.clear = function () {
  for (var a = vc(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
};
function vc(a) {
  a = (a.na.cookie || "").split(uc);
  for (var b = [], c = [], d, e, f = 0; (e = a[f]); f++)
    (d = e.indexOf("\x3d")),
      -1 == d
        ? (b.push(""), c.push(e))
        : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  return { keys: b, values: c };
}
var wc = new tc(document);
wc.pb = 3950;
function xc(a, b) {
  a.style.display = b ? "" : "none";
}
function yc(a) {
  this.C = D(a);
  this.Z = xa(
    Ua(bb(this.C)),
    function (a) {
      return a.htmlFor == this.C.id;
    },
    this
  );
  this.X = !1;
  this.Ca = zc;
  Ac(this, !1);
}
var Bc = RegExp(
  "^\\s*(-?\\d+(\\.\\d*)?)\\s*([\u00b0|\\s]\\s*(\\d+(\\.\\d*)?)?)?\\s*(['|\\s]\\s*(\\d+(\\.\\d*)?)?)?\\s*\"?\\s*$"
);
function Ac(a, b) {
  var c = X(a);
  a.X = b;
  Y(a, c);
  a.C.placeholder =
    a.C.getAttribute(a.X ? "data-placeholder-degrees" : "data-placeholder") ||
    a.C.placeholder;
  H(a.C, "degrees", b);
  a.Z &&
    ((a.Z.innerHTML =
      a.Z.getAttribute(a.X ? "data-value-degrees" : "data-value") ||
      a.Z.innerHTML),
    H(a.Z, "degrees", b));
}
function Cc(a, b) {
  var c = X(a);
  a.Ca = b;
  Y(a, c);
}
function X(a) {
  var b = a.C.value;
  a.X
    ? (a = Bc.exec(b))
      ? ((b = ua(a[1]) || 0),
        (a =
          (0 > b ? -1 : 1) *
          (Math.abs(b) + (ua(a[4]) || 0) / 60 + (ua(a[7]) || 0) / 3600)))
      : (a = NaN)
    : (a = parseFloat(b));
  return a;
}
function Y(a, b) {
  var c = parseFloat(b),
    d = a.C;
  if (da(c) && C(c))
    if (a.X) {
      var e = c,
        f = a.Ca || zc,
        g = null,
        l = null,
        n = null,
        c = 0 > e ? "-" : "",
        e = Math.abs(e);
      f == Dc
        ? (g = e.toFixed(7).replace(/\.*0+$/, ""))
        : ((g = Math.floor(e)),
          (e = (e % 1) * 60),
          f == zc
            ? ((f = Math.floor(e)),
              (e = Math.round((e % 1) * 6e4) / 1e3),
              60 <= e && (f++, (e = 0)),
              (n = e.toFixed(3).replace(/\.*0+$/, "")))
            : (f = Math.round(1e5 * e) / 1e5),
          60 <= f && (g++, (f = 0)),
          (l = f.toFixed(5).replace(/\.*0+$/, "")),
          (g = g.toFixed(0)));
      c += g + "\u00b0";
      l && (c += l + "'");
      n && (c += n + '"');
    } else c = b;
  else c = "";
  d.value = c;
}
function Ec(a) {
  var b = X(a);
  Y(a, b);
}
var Dc = "dec",
  zc = "dms";
function Fc(a, b) {
  var c = new Q(b, !0);
  c.append(String(a));
  var d = F("DIV", "btn", "OK");
  c.Ra(d);
  M(d, "click", function (a) {
    R(c, !1);
    a.preventDefault();
  });
  R(c, !0);
}
function Gc(a) {
  var b = D("srs-in-map-link");
  a.c && C(X(a.o)) && C(X(a.s))
    ? ((b.href =
        "/map#srs\x3d" +
        a.c.id.code +
        "\x26x\x3d" +
        X(a.o) +
        "\x26y\x3d" +
        X(a.s)),
      (b.style.display = ""))
    : (b.style.display = "none");
  b = D("srs-out-map-link");
  a.b && C(X(a.L)) && C(X(a.M))
    ? ((b.href =
        "/map#srs\x3d" +
        a.b.id.code +
        "\x26x\x3d" +
        X(a.L) +
        "\x26y\x3d" +
        X(a.M)),
      (b.style.display = ""))
    : (b.style.display = "none");
}
function Hc(a) {
  if (a.c) {
    G(a.cb, a.c.id.authority + ":" + a.c.id.code + " " + a.c.name);
    var b = /^degree/.test(a.c.unit);
    Ac(a.o, b);
    Ac(a.s, b);
    xc(a.xa, b);
    a.$a.href = "/" + a.c.id.code;
    G(a.eb, a.c.unit);
    G(a.Ya, a.c.area);
    b = a.c.accuracy;
    G(a.Xa, b ? b + " m" : "Unknown");
  }
  xc(a.ab, a.c);
  a.b &&
    (G(a.kb, a.b.id.authority + ":" + a.b.id.code + " " + a.b.name),
    (b = /^degree/.test(a.b.unit)),
    Ac(a.L, b),
    Ac(a.M, b),
    xc(a.ya, b),
    (a.ib.href = "/" + a.b.id.code),
    G(a.lb, a.b.unit),
    G(a.gb, a.b.area),
    (b = a.b.accuracy),
    G(a.fb, b ? b + " m" : "Unknown"));
  xc(a.jb, a.b);
  a.Ma.disabled = !(a.c && a.b);
  Ic(a, !1);
}
function Jc(a) {
  a.j
    ? G(a.Oa, a.j.id.authority + ":" + a.j.id.code + " " + a.j.area)
    : G(a.Oa, "Using best available transformer");
}
function Ic(a, b) {
  Y(a.L, NaN);
  Y(a.M, NaN);
  if (a.c && a.b) {
    var c = X(a.o),
      d = X(a.s);
    if (C(c) && C(d)) {
      var e = a.mb,
        e = e.replace(
          "{coordinates}",
          encodeURI(c.toString() + "," + d.toString())
        ),
        e = e + ("\x26s_srs\x3d" + a.c.id.code.toString()),
        e = e + ("\x26t_srs\x3d" + a.b.id.code.toString());
      a.j && (e += "\x26ops\x3d" + a.j.id.code);
      Jb(
        e,
        t(function (a) {
          var c = a.target;
          if (Kb(c)) {
            if (((a = S(c)), 0 < a.results.length)) {
              var d = a.results[0].x;
              a = a.results[0].y;
              !b || (null !== d && null !== a)
                ? (Y(this.L, d), Y(this.M, a), Gc(this))
                : Fc("Coordinates out of bounds", "Error (OUT_OF_BOUNDS)");
            }
          } else if (b) {
            if (422 == lc(c) && ((a = S(c)), "detail" in a)) {
              d = a.detail[0].msg;
              Fc(d, "Error (VALIDATION_EXCEPTION)");
              return;
            }
            Fc(d, "Error (" + c.P + ")");
          }
        }, a)
      );
    } else b && Fc("Please enter valid input coordinates!", "Error");
  } else b && Fc("Select coordinate systems before transforming!", "Error");
  Kc(a);
  Gc(a);
  Ec(a.o);
  Ec(a.s);
}
function Kc(a) {
  if (!a.Ea) {
    var b = new rc();
    a.c && b.set("s_srs", a.c.id.code);
    a.b && (b.set("t_srs", a.b.id.code), wc.set("t_srs", a.b.id.code, 31536e3));
    a.j && (b.set("ops", a.j.id.code), wc.set("ops", a.j.id.code, 31536e3));
    var c = X(a.o);
    a = X(a.s);
    null !== c &&
      null !== a &&
      (b.set("x", c.toFixed(7)), b.set("y", a.toFixed(7)));
    window.location.hash = b.toString();
  }
}
function Lc(a, b) {
  var c = new rc(window.location.hash.substr(1)),
    d = c.get("s_srs"),
    e = c.get("t_srs") || wc.get("t_srs");
  e || d
    ? d
      ? e || (e = "4326" == d ? "3857" : "4326")
      : (d = "4326" == e ? "3857" : "4326")
    : ((d = "4326"), (e = "3857"));
  var f = c.get("ops") || wc.get("ops"),
    g = 3;
  f
    ? pc(
        a.ka,
        f,
        d,
        e,
        t(function (a) {
          a && ((this.j = a), Jc(this));
          0 >= --g && b();
        }, a)
      )
    : --g;
  Ib(
    a.F,
    d,
    t(function (a) {
      this.c = a;
      Hc(this);
      0 >= --g && b();
    }, a)
  );
  Ib(
    a.F,
    e,
    t(function (a) {
      this.b = a;
      Hc(this);
      0 >= --g && b();
    }, a)
  );
  d = parseFloat(c.get("x"));
  c = parseFloat(c.get("y"));
  C(d) && C(c) && (Y(a.o, d), Y(a.s, c));
}
function Mc(a, b) {
  this.mb = a;
  this.S = b;
  this.F = new Hb(!1, b);
  this.ka = new nc(b);
  this.cb = D("srs-in-name");
  this.Za = D("srs-in-change");
  this.ab = D("srs-in-details");
  this.$a = D("srs-in-details-link");
  this.eb = D("srs-in-unit");
  this.Ya = D("srs-in-area");
  this.Xa = D("srs-in-accuracy");
  this.kb = D("srs-out-name");
  this.hb = D("srs-out-change");
  this.jb = D("srs-out-details");
  this.ib = D("srs-out-details-link");
  this.lb = D("srs-out-unit");
  this.gb = D("srs-out-area");
  this.fb = D("srs-out-accuracy");
  this.b = this.c = null;
  this.nb = D("transformer-change");
  this.Oa = D("transformer-name");
  this.j = null;
  this.Ea = !0;
  M(
    this.Za,
    "click",
    function (a) {
      O(this.F);
      Gb(
        this.F,
        Lb,
        function (a) {
          a.data && ((this.j = null), Jc(this), (this.c = a.data), Hc(this));
        },
        !1,
        this
      );
      this.F.show();
      a.preventDefault();
    },
    !1,
    this
  );
  M(
    this.hb,
    "click",
    function (a) {
      O(this.F);
      Gb(
        this.F,
        Lb,
        function (a) {
          a.data && ((this.j = null), Jc(this), (this.b = a.data), Hc(this));
        },
        !1,
        this
      );
      this.F.show();
      a.preventDefault();
    },
    !1,
    this
  );
  this.o = new yc("srs-in-x");
  this.s = new yc("srs-in-y");
  this.L = new yc("srs-out-x");
  this.M = new yc("srs-out-y");
  this.bb = D("srs-in-form");
  M(
    this.bb,
    "submit",
    function (a) {
      Ic(this, !0);
      a.preventDefault();
    },
    !1,
    this
  );
  this.Ma = D("srs-swap");
  M(
    this.Ma,
    "click",
    function (a) {
      var b = this.b;
      this.b = this.c;
      this.c = b;
      this.j = null;
      Jc(this);
      Y(this.o, X(this.L));
      Y(this.s, X(this.M));
      Hc(this);
      a.preventDefault();
    },
    !1,
    this
  );
  var c = [zc, "dm", Dc],
    d = 0,
    e = 0;
  this.xa = D("srs-in-format");
  this.ya = D("srs-out-format");
  M(
    this.xa,
    "click",
    function (a) {
      d = (d + 1) % 3;
      var b = c[d];
      this.xa.value = "Format: " + b;
      Cc(this.o, b);
      Cc(this.s, b);
      a.preventDefault();
    },
    !1,
    this
  );
  M(
    this.ya,
    "click",
    function (a) {
      e = (e + 1) % 3;
      var b = c[e];
      this.ya.value = "Format: " + b;
      Cc(this.L, b);
      Cc(this.M, b);
      a.preventDefault();
    },
    !1,
    this
  );
  M(
    this.nb,
    "click",
    function (a) {
      O(this.ka);
      Gb(
        this.ka,
        qc,
        function (a) {
          this.j = a.data;
          Jc(this);
        },
        !1,
        this
      );
      this.ka.show(this.c, this.b, X(this.o), X(this.s));
      a.preventDefault();
    },
    !1,
    this
  );
  Lc(
    this,
    t(function () {
      this.Ea = !1;
      Kc(this);
    }, this)
  );
}
var Nc = ["TransformPage"],
  Z = k;
Nc[0] in Z || !Z.execScript || Z.execScript("var " + Nc[0]);
for (var Oc; Nc.length && (Oc = Nc.shift()); )
  !Nc.length && p(Mc) ? (Z[Oc] = Mc) : (Z = Z[Oc] ? Z[Oc] : (Z[Oc] = {}));
