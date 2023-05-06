!(function (t, e) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports
		? (module.exports = t.document
				? e(t, !0)
				: function (t) {
						if (!t.document)
							throw new Error("jQuery requires a window with a document");
						return e(t);
				  })
		: e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
	"use strict";
	var i = [],
		n = Object.getPrototypeOf,
		s = i.slice,
		o = i.flat
			? function (t) {
					return i.flat.call(t);
			  }
			: function (t) {
					return i.concat.apply([], t);
			  },
		r = i.push,
		a = i.indexOf,
		l = {},
		u = l.toString,
		c = l.hasOwnProperty,
		d = c.toString,
		h = d.call(Object),
		p = {},
		f = function (t) {
			return (
				"function" == typeof t &&
				"number" != typeof t.nodeType &&
				"function" != typeof t.item
			);
		},
		g = function (t) {
			return null != t && t === t.window;
		},
		m = t.document,
		v = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0,
		};

	function y(t, e, i) {
		var n,
			s,
			o = (i = i || m).createElement("script");
		if (((o.text = t), e))
			for (n in v)
				(s = e[n] || (e.getAttribute && e.getAttribute(n))) &&
					o.setAttribute(n, s);
		i.head.appendChild(o).parentNode.removeChild(o);
	}

	function _(t) {
		return null == t
			? t + ""
			: "object" == typeof t || "function" == typeof t
			? l[u.call(t)] || "object"
			: typeof t;
	}
	var b = "3.6.0",
		D = function (t, e) {
			return new D.fn.init(t, e);
		};

	function w(t) {
		var e = !!t && "length" in t && t.length,
			i = _(t);
		return (
			!f(t) &&
			!g(t) &&
			("array" === i ||
				0 === e ||
				("number" == typeof e && 0 < e && e - 1 in t))
		);
	}
	(D.fn = D.prototype =
		{
			jquery: b,
			constructor: D,
			length: 0,
			toArray: function () {
				return s.call(this);
			},
			get: function (t) {
				return null == t
					? s.call(this)
					: t < 0
					? this[t + this.length]
					: this[t];
			},
			pushStack: function (t) {
				var e = D.merge(this.constructor(), t);
				return (e.prevObject = this), e;
			},
			each: function (t) {
				return D.each(this, t);
			},
			map: function (t) {
				return this.pushStack(
					D.map(this, function (e, i) {
						return t.call(e, i, e);
					})
				);
			},
			slice: function () {
				return this.pushStack(s.apply(this, arguments));
			},
			first: function () {
				return this.eq(0);
			},
			last: function () {
				return this.eq(-1);
			},
			even: function () {
				return this.pushStack(
					D.grep(this, function (t, e) {
						return (e + 1) % 2;
					})
				);
			},
			odd: function () {
				return this.pushStack(
					D.grep(this, function (t, e) {
						return e % 2;
					})
				);
			},
			eq: function (t) {
				var e = this.length,
					i = +t + (t < 0 ? e : 0);
				return this.pushStack(0 <= i && i < e ? [this[i]] : []);
			},
			end: function () {
				return this.prevObject || this.constructor();
			},
			push: r,
			sort: i.sort,
			splice: i.splice,
		}),
		(D.extend = D.fn.extend =
			function () {
				var t,
					e,
					i,
					n,
					s,
					o,
					r = arguments[0] || {},
					a = 1,
					l = arguments.length,
					u = !1;
				for (
					"boolean" == typeof r && ((u = r), (r = arguments[a] || {}), a++),
						"object" == typeof r || f(r) || (r = {}),
						a === l && ((r = this), a--);
					a < l;
					a++
				)
					if (null != (t = arguments[a]))
						for (e in t)
							(n = t[e]),
								"__proto__" !== e &&
									r !== n &&
									(u && n && (D.isPlainObject(n) || (s = Array.isArray(n)))
										? ((i = r[e]),
										  (o =
												s && !Array.isArray(i)
													? []
													: s || D.isPlainObject(i)
													? i
													: {}),
										  (s = !1),
										  (r[e] = D.extend(u, o, n)))
										: void 0 !== n && (r[e] = n));
				return r;
			}),
		D.extend({
			expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (t) {
				throw new Error(t);
			},
			noop: function () {},
			isPlainObject: function (t) {
				var e, i;
				return !(
					!t ||
					"[object Object]" !== u.call(t) ||
					((e = n(t)) &&
						("function" !=
							typeof (i = c.call(e, "constructor") && e.constructor) ||
							d.call(i) !== h))
				);
			},
			isEmptyObject: function (t) {
				var e;
				for (e in t) return !1;
				return !0;
			},
			globalEval: function (t, e, i) {
				y(
					t,
					{
						nonce: e && e.nonce,
					},
					i
				);
			},
			each: function (t, e) {
				var i,
					n = 0;
				if (w(t))
					for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
				else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
				return t;
			},
			makeArray: function (t, e) {
				var i = e || [];
				return (
					null != t &&
						(w(Object(t))
							? D.merge(i, "string" == typeof t ? [t] : t)
							: r.call(i, t)),
					i
				);
			},
			inArray: function (t, e, i) {
				return null == e ? -1 : a.call(e, t, i);
			},
			merge: function (t, e) {
				for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
				return (t.length = s), t;
			},
			grep: function (t, e, i) {
				for (var n = [], s = 0, o = t.length, r = !i; s < o; s++)
					!e(t[s], s) !== r && n.push(t[s]);
				return n;
			},
			map: function (t, e, i) {
				var n,
					s,
					r = 0,
					a = [];
				if (w(t))
					for (n = t.length; r < n; r++)
						null != (s = e(t[r], r, i)) && a.push(s);
				else for (r in t) null != (s = e(t[r], r, i)) && a.push(s);
				return o(a);
			},
			guid: 1,
			support: p,
		}),
		"function" == typeof Symbol && (D.fn[Symbol.iterator] = i[Symbol.iterator]),
		D.each(
			"Boolean Number String Function Array Date RegExp Object Error Symbol".split(
				" "
			),
			function (t, e) {
				l["[object " + e + "]"] = e.toLowerCase();
			}
		);
	var x = (function (t) {
		var e,
			i,
			n,
			s,
			o,
			r,
			a,
			l,
			u,
			c,
			d,
			h,
			p,
			f,
			g,
			m,
			v,
			y,
			_,
			b = "sizzle" + 1 * new Date(),
			D = t.document,
			w = 0,
			x = 0,
			C = lt(),
			T = lt(),
			k = lt(),
			S = lt(),
			E = function (t, e) {
				return t === e && (d = !0), 0;
			},
			A = {}.hasOwnProperty,
			F = [],
			L = F.pop,
			O = F.push,
			$ = F.push,
			M = F.slice,
			N = function (t, e) {
				for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
				return -1;
			},
			P =
				"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			I = "[\\x20\\t\\r\\n\\f]",
			B =
				"(?:\\\\[\\da-fA-F]{1,6}" +
				I +
				"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			j =
				"\\[" +
				I +
				"*(" +
				B +
				")(?:" +
				I +
				"*([*^$|!~]?=)" +
				I +
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
				B +
				"))|)" +
				I +
				"*\\]",
			z =
				":(" +
				B +
				")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
				j +
				")*)|.*)\\)|)",
			q = new RegExp(I + "+", "g"),
			H = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
			R = new RegExp("^" + I + "*," + I + "*"),
			W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
			X = new RegExp(I + "|>"),
			Y = new RegExp(z),
			V = new RegExp("^" + B + "$"),
			U = {
				ID: new RegExp("^#(" + B + ")"),
				CLASS: new RegExp("^\\.(" + B + ")"),
				TAG: new RegExp("^(" + B + "|[*])"),
				ATTR: new RegExp("^" + j),
				PSEUDO: new RegExp("^" + z),
				CHILD: new RegExp(
					"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
						I +
						"*(even|odd|(([+-]|)(\\d*)n|)" +
						I +
						"*(?:([+-]|)" +
						I +
						"*(\\d+)|))" +
						I +
						"*\\)|)",
					"i"
				),
				bool: new RegExp("^(?:" + P + ")$", "i"),
				needsContext: new RegExp(
					"^" +
						I +
						"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
						I +
						"*((?:-\\d)?\\d*)" +
						I +
						"*\\)|)(?=[^-]|$)",
					"i"
				),
			},
			G = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			K = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			tt = /[+~]/,
			et = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
			it = function (t, e) {
				var i = "0x" + t.slice(1) - 65536;
				return (
					e ||
					(i < 0
						? String.fromCharCode(i + 65536)
						: String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
				);
			},
			nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			st = function (t, e) {
				return e
					? "\0" === t
						? "�"
						: t.slice(0, -1) +
						  "\\" +
						  t.charCodeAt(t.length - 1).toString(16) +
						  " "
					: "\\" + t;
			},
			ot = function () {
				h();
			},
			rt = bt(
				function (t) {
					return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
				},
				{
					dir: "parentNode",
					next: "legend",
				}
			);
		try {
			$.apply((F = M.call(D.childNodes)), D.childNodes),
				F[D.childNodes.length].nodeType;
		} catch (e) {
			$ = {
				apply: F.length
					? function (t, e) {
							O.apply(t, M.call(e));
					  }
					: function (t, e) {
							for (var i = t.length, n = 0; (t[i++] = e[n++]); );
							t.length = i - 1;
					  },
			};
		}

		function at(t, e, n, s) {
			var o,
				a,
				u,
				c,
				d,
				f,
				v,
				y = e && e.ownerDocument,
				D = e ? e.nodeType : 9;
			if (
				((n = n || []),
				"string" != typeof t || !t || (1 !== D && 9 !== D && 11 !== D))
			)
				return n;
			if (!s && (h(e), (e = e || p), g)) {
				if (11 !== D && (d = J.exec(t)))
					if ((o = d[1])) {
						if (9 === D) {
							if (!(u = e.getElementById(o))) return n;
							if (u.id === o) return n.push(u), n;
						} else if (y && (u = y.getElementById(o)) && _(e, u) && u.id === o)
							return n.push(u), n;
					} else {
						if (d[2]) return $.apply(n, e.getElementsByTagName(t)), n;
						if (
							(o = d[3]) &&
							i.getElementsByClassName &&
							e.getElementsByClassName
						)
							return $.apply(n, e.getElementsByClassName(o)), n;
					}
				if (
					i.qsa &&
					!S[t + " "] &&
					(!m || !m.test(t)) &&
					(1 !== D || "object" !== e.nodeName.toLowerCase())
				) {
					if (((v = t), (y = e), 1 === D && (X.test(t) || W.test(t)))) {
						for (
							((y = (tt.test(t) && vt(e.parentNode)) || e) === e && i.scope) ||
								((c = e.getAttribute("id"))
									? (c = c.replace(nt, st))
									: e.setAttribute("id", (c = b))),
								a = (f = r(t)).length;
							a--;

						)
							f[a] = (c ? "#" + c : ":scope") + " " + _t(f[a]);
						v = f.join(",");
					}
					try {
						return $.apply(n, y.querySelectorAll(v)), n;
					} catch (e) {
						S(t, !0);
					} finally {
						c === b && e.removeAttribute("id");
					}
				}
			}
			return l(t.replace(H, "$1"), e, n, s);
		}

		function lt() {
			var t = [];
			return function e(i, s) {
				return (
					t.push(i + " ") > n.cacheLength && delete e[t.shift()],
					(e[i + " "] = s)
				);
			};
		}

		function ut(t) {
			return (t[b] = !0), t;
		}

		function ct(t) {
			var e = p.createElement("fieldset");
			try {
				return !!t(e);
			} catch (t) {
				return !1;
			} finally {
				e.parentNode && e.parentNode.removeChild(e), (e = null);
			}
		}

		function dt(t, e) {
			for (var i = t.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = e;
		}

		function ht(t, e) {
			var i = e && t,
				n =
					i &&
					1 === t.nodeType &&
					1 === e.nodeType &&
					t.sourceIndex - e.sourceIndex;
			if (n) return n;
			if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
			return t ? 1 : -1;
		}

		function pt(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t;
			};
		}

		function ft(t) {
			return function (e) {
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t;
			};
		}

		function gt(t) {
			return function (e) {
				return "form" in e
					? e.parentNode && !1 === e.disabled
						? "label" in e
							? "label" in e.parentNode
								? e.parentNode.disabled === t
								: e.disabled === t
							: e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
						: e.disabled === t
					: "label" in e && e.disabled === t;
			};
		}

		function mt(t) {
			return ut(function (e) {
				return (
					(e = +e),
					ut(function (i, n) {
						for (var s, o = t([], i.length, e), r = o.length; r--; )
							i[(s = o[r])] && (i[s] = !(n[s] = i[s]));
					})
				);
			});
		}

		function vt(t) {
			return t && void 0 !== t.getElementsByTagName && t;
		}
		for (e in ((i = at.support = {}),
		(o = at.isXML =
			function (t) {
				var e = t && t.namespaceURI,
					i = t && (t.ownerDocument || t).documentElement;
				return !G.test(e || (i && i.nodeName) || "HTML");
			}),
		(h = at.setDocument =
			function (t) {
				var e,
					s,
					r = t ? t.ownerDocument || t : D;
				return (
					r != p &&
						9 === r.nodeType &&
						r.documentElement &&
						((f = (p = r).documentElement),
						(g = !o(p)),
						D != p &&
							(s = p.defaultView) &&
							s.top !== s &&
							(s.addEventListener
								? s.addEventListener("unload", ot, !1)
								: s.attachEvent && s.attachEvent("onunload", ot)),
						(i.scope = ct(function (t) {
							return (
								f.appendChild(t).appendChild(p.createElement("div")),
								void 0 !== t.querySelectorAll &&
									!t.querySelectorAll(":scope fieldset div").length
							);
						})),
						(i.attributes = ct(function (t) {
							return (t.className = "i"), !t.getAttribute("className");
						})),
						(i.getElementsByTagName = ct(function (t) {
							return (
								t.appendChild(p.createComment("")),
								!t.getElementsByTagName("*").length
							);
						})),
						(i.getElementsByClassName = Z.test(p.getElementsByClassName)),
						(i.getById = ct(function (t) {
							return (
								(f.appendChild(t).id = b),
								!p.getElementsByName || !p.getElementsByName(b).length
							);
						})),
						i.getById
							? ((n.filter.ID = function (t) {
									var e = t.replace(et, it);
									return function (t) {
										return t.getAttribute("id") === e;
									};
							  }),
							  (n.find.ID = function (t, e) {
									if (void 0 !== e.getElementById && g) {
										var i = e.getElementById(t);
										return i ? [i] : [];
									}
							  }))
							: ((n.filter.ID = function (t) {
									var e = t.replace(et, it);
									return function (t) {
										var i =
											void 0 !== t.getAttributeNode && t.getAttributeNode("id");
										return i && i.value === e;
									};
							  }),
							  (n.find.ID = function (t, e) {
									if (void 0 !== e.getElementById && g) {
										var i,
											n,
											s,
											o = e.getElementById(t);
										if (o) {
											if ((i = o.getAttributeNode("id")) && i.value === t)
												return [o];
											for (s = e.getElementsByName(t), n = 0; (o = s[n++]); )
												if ((i = o.getAttributeNode("id")) && i.value === t)
													return [o];
										}
										return [];
									}
							  })),
						(n.find.TAG = i.getElementsByTagName
							? function (t, e) {
									return void 0 !== e.getElementsByTagName
										? e.getElementsByTagName(t)
										: i.qsa
										? e.querySelectorAll(t)
										: void 0;
							  }
							: function (t, e) {
									var i,
										n = [],
										s = 0,
										o = e.getElementsByTagName(t);
									if ("*" === t) {
										for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
										return n;
									}
									return o;
							  }),
						(n.find.CLASS =
							i.getElementsByClassName &&
							function (t, e) {
								if (void 0 !== e.getElementsByClassName && g)
									return e.getElementsByClassName(t);
							}),
						(v = []),
						(m = []),
						(i.qsa = Z.test(p.querySelectorAll)) &&
							(ct(function (t) {
								var e;
								(f.appendChild(t).innerHTML =
									"<a id='" +
									b +
									"'></a><select id='" +
									b +
									"-\r\\' msallowcapture=''><option selected=''></option></select>"),
									t.querySelectorAll("[msallowcapture^='']").length &&
										m.push("[*^$]=" + I + "*(?:''|\"\")"),
									t.querySelectorAll("[selected]").length ||
										m.push("\\[" + I + "*(?:value|" + P + ")"),
									t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
									(e = p.createElement("input")).setAttribute("name", ""),
									t.appendChild(e),
									t.querySelectorAll("[name='']").length ||
										m.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
									t.querySelectorAll(":checked").length || m.push(":checked"),
									t.querySelectorAll("a#" + b + "+*").length ||
										m.push(".#.+[+~]"),
									t.querySelectorAll("\\\f"),
									m.push("[\\r\\n\\f]");
							}),
							ct(function (t) {
								t.innerHTML =
									"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
								var e = p.createElement("input");
								e.setAttribute("type", "hidden"),
									t.appendChild(e).setAttribute("name", "D"),
									t.querySelectorAll("[name=d]").length &&
										m.push("name" + I + "*[*^$|!~]?="),
									2 !== t.querySelectorAll(":enabled").length &&
										m.push(":enabled", ":disabled"),
									(f.appendChild(t).disabled = !0),
									2 !== t.querySelectorAll(":disabled").length &&
										m.push(":enabled", ":disabled"),
									t.querySelectorAll("*,:x"),
									m.push(",.*:");
							})),
						(i.matchesSelector = Z.test(
							(y =
								f.matches ||
								f.webkitMatchesSelector ||
								f.mozMatchesSelector ||
								f.oMatchesSelector ||
								f.msMatchesSelector)
						)) &&
							ct(function (t) {
								(i.disconnectedMatch = y.call(t, "*")),
									y.call(t, "[s!='']:x"),
									v.push("!=", z);
							}),
						(m = m.length && new RegExp(m.join("|"))),
						(v = v.length && new RegExp(v.join("|"))),
						(e = Z.test(f.compareDocumentPosition)),
						(_ =
							e || Z.test(f.contains)
								? function (t, e) {
										var i = 9 === t.nodeType ? t.documentElement : t,
											n = e && e.parentNode;
										return (
											t === n ||
											!(
												!n ||
												1 !== n.nodeType ||
												!(i.contains
													? i.contains(n)
													: t.compareDocumentPosition &&
													  16 & t.compareDocumentPosition(n))
											)
										);
								  }
								: function (t, e) {
										if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
										return !1;
								  }),
						(E = e
							? function (t, e) {
									if (t === e) return (d = !0), 0;
									var n =
										!t.compareDocumentPosition - !e.compareDocumentPosition;
									return (
										n ||
										(1 &
											(n =
												(t.ownerDocument || t) == (e.ownerDocument || e)
													? t.compareDocumentPosition(e)
													: 1) ||
										(!i.sortDetached && e.compareDocumentPosition(t) === n)
											? t == p || (t.ownerDocument == D && _(D, t))
												? -1
												: e == p || (e.ownerDocument == D && _(D, e))
												? 1
												: c
												? N(c, t) - N(c, e)
												: 0
											: 4 & n
											? -1
											: 1)
									);
							  }
							: function (t, e) {
									if (t === e) return (d = !0), 0;
									var i,
										n = 0,
										s = t.parentNode,
										o = e.parentNode,
										r = [t],
										a = [e];
									if (!s || !o)
										return t == p
											? -1
											: e == p
											? 1
											: s
											? -1
											: o
											? 1
											: c
											? N(c, t) - N(c, e)
											: 0;
									if (s === o) return ht(t, e);
									for (i = t; (i = i.parentNode); ) r.unshift(i);
									for (i = e; (i = i.parentNode); ) a.unshift(i);
									for (; r[n] === a[n]; ) n++;
									return n
										? ht(r[n], a[n])
										: r[n] == D
										? -1
										: a[n] == D
										? 1
										: 0;
							  })),
					p
				);
			}),
		(at.matches = function (t, e) {
			return at(t, null, null, e);
		}),
		(at.matchesSelector = function (t, e) {
			if (
				(h(t),
				i.matchesSelector &&
					g &&
					!S[e + " "] &&
					(!v || !v.test(e)) &&
					(!m || !m.test(e)))
			)
				try {
					var n = y.call(t, e);
					if (
						n ||
						i.disconnectedMatch ||
						(t.document && 11 !== t.document.nodeType)
					)
						return n;
				} catch (t) {
					S(e, !0);
				}
			return 0 < at(e, p, null, [t]).length;
		}),
		(at.contains = function (t, e) {
			return (t.ownerDocument || t) != p && h(t), _(t, e);
		}),
		(at.attr = function (t, e) {
			(t.ownerDocument || t) != p && h(t);
			var s = n.attrHandle[e.toLowerCase()],
				o = s && A.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
			return void 0 !== o
				? o
				: i.attributes || !g
				? t.getAttribute(e)
				: (o = t.getAttributeNode(e)) && o.specified
				? o.value
				: null;
		}),
		(at.escape = function (t) {
			return (t + "").replace(nt, st);
		}),
		(at.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t);
		}),
		(at.uniqueSort = function (t) {
			var e,
				n = [],
				s = 0,
				o = 0;
			if (
				((d = !i.detectDuplicates),
				(c = !i.sortStable && t.slice(0)),
				t.sort(E),
				d)
			) {
				for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
				for (; s--; ) t.splice(n[s], 1);
			}
			return (c = null), t;
		}),
		(s = at.getText =
			function (t) {
				var e,
					i = "",
					n = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
					} else if (3 === o || 4 === o) return t.nodeValue;
				} else for (; (e = t[n++]); ) i += s(e);
				return i;
			}),
		((n = at.selectors =
			{
				cacheLength: 50,
				createPseudo: ut,
				match: U,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0,
					},
					" ": {
						dir: "parentNode",
					},
					"+": {
						dir: "previousSibling",
						first: !0,
					},
					"~": {
						dir: "previousSibling",
					},
				},
				preFilter: {
					ATTR: function (t) {
						return (
							(t[1] = t[1].replace(et, it)),
							(t[3] = (t[3] || t[4] || t[5] || "").replace(et, it)),
							"~=" === t[2] && (t[3] = " " + t[3] + " "),
							t.slice(0, 4)
						);
					},
					CHILD: function (t) {
						return (
							(t[1] = t[1].toLowerCase()),
							"nth" === t[1].slice(0, 3)
								? (t[3] || at.error(t[0]),
								  (t[4] = +(t[4]
										? t[5] + (t[6] || 1)
										: 2 * ("even" === t[3] || "odd" === t[3]))),
								  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
								: t[3] && at.error(t[0]),
							t
						);
					},
					PSEUDO: function (t) {
						var e,
							i = !t[6] && t[2];
						return U.CHILD.test(t[0])
							? null
							: (t[3]
									? (t[2] = t[4] || t[5] || "")
									: i &&
									  Y.test(i) &&
									  (e = r(i, !0)) &&
									  (e = i.indexOf(")", i.length - e) - i.length) &&
									  ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
							  t.slice(0, 3));
					},
				},
				filter: {
					TAG: function (t) {
						var e = t.replace(et, it).toLowerCase();
						return "*" === t
							? function () {
									return !0;
							  }
							: function (t) {
									return t.nodeName && t.nodeName.toLowerCase() === e;
							  };
					},
					CLASS: function (t) {
						var e = C[t + " "];
						return (
							e ||
							((e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) &&
								C(t, function (t) {
									return e.test(
										("string" == typeof t.className && t.className) ||
											(void 0 !== t.getAttribute && t.getAttribute("class")) ||
											""
									);
								}))
						);
					},
					ATTR: function (t, e, i) {
						return function (n) {
							var s = at.attr(n, t);
							return null == s
								? "!=" === e
								: !e ||
										((s += ""),
										"=" === e
											? s === i
											: "!=" === e
											? s !== i
											: "^=" === e
											? i && 0 === s.indexOf(i)
											: "*=" === e
											? i && -1 < s.indexOf(i)
											: "$=" === e
											? i && s.slice(-i.length) === i
											: "~=" === e
											? -1 < (" " + s.replace(q, " ") + " ").indexOf(i)
											: "|=" === e &&
											  (s === i || s.slice(0, i.length + 1) === i + "-"));
						};
					},
					CHILD: function (t, e, i, n, s) {
						var o = "nth" !== t.slice(0, 3),
							r = "last" !== t.slice(-4),
							a = "of-type" === e;
						return 1 === n && 0 === s
							? function (t) {
									return !!t.parentNode;
							  }
							: function (e, i, l) {
									var u,
										c,
										d,
										h,
										p,
										f,
										g = o !== r ? "nextSibling" : "previousSibling",
										m = e.parentNode,
										v = a && e.nodeName.toLowerCase(),
										y = !l && !a,
										_ = !1;
									if (m) {
										if (o) {
											for (; g; ) {
												for (h = e; (h = h[g]); )
													if (
														a
															? h.nodeName.toLowerCase() === v
															: 1 === h.nodeType
													)
														return !1;
												f = g = "only" === t && !f && "nextSibling";
											}
											return !0;
										}
										if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
											for (
												_ =
													(p =
														(u =
															(c =
																(d = (h = m)[b] || (h[b] = {}))[h.uniqueID] ||
																(d[h.uniqueID] = {}))[t] || [])[0] === w &&
														u[1]) && u[2],
													h = p && m.childNodes[p];
												(h = (++p && h && h[g]) || (_ = p = 0) || f.pop());

											)
												if (1 === h.nodeType && ++_ && h === e) {
													c[t] = [w, p, _];
													break;
												}
										} else if (
											(y &&
												(_ = p =
													(u =
														(c =
															(d = (h = e)[b] || (h[b] = {}))[h.uniqueID] ||
															(d[h.uniqueID] = {}))[t] || [])[0] === w && u[1]),
											!1 === _)
										)
											for (
												;
												(h = (++p && h && h[g]) || (_ = p = 0) || f.pop()) &&
												((a
													? h.nodeName.toLowerCase() !== v
													: 1 !== h.nodeType) ||
													!++_ ||
													(y &&
														((c =
															(d = h[b] || (h[b] = {}))[h.uniqueID] ||
															(d[h.uniqueID] = {}))[t] = [w, _]),
													h !== e));

											);
										return (_ -= s) === n || (_ % n == 0 && 0 <= _ / n);
									}
							  };
					},
					PSEUDO: function (t, e) {
						var i,
							s =
								n.pseudos[t] ||
								n.setFilters[t.toLowerCase()] ||
								at.error("unsupported pseudo: " + t);
						return s[b]
							? s(e)
							: 1 < s.length
							? ((i = [t, t, "", e]),
							  n.setFilters.hasOwnProperty(t.toLowerCase())
									? ut(function (t, i) {
											for (var n, o = s(t, e), r = o.length; r--; )
												t[(n = N(t, o[r]))] = !(i[n] = o[r]);
									  })
									: function (t) {
											return s(t, 0, i);
									  })
							: s;
					},
				},
				pseudos: {
					not: ut(function (t) {
						var e = [],
							i = [],
							n = a(t.replace(H, "$1"));
						return n[b]
							? ut(function (t, e, i, s) {
									for (var o, r = n(t, null, s, []), a = t.length; a--; )
										(o = r[a]) && (t[a] = !(e[a] = o));
							  })
							: function (t, s, o) {
									return (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop();
							  };
					}),
					has: ut(function (t) {
						return function (e) {
							return 0 < at(t, e).length;
						};
					}),
					contains: ut(function (t) {
						return (
							(t = t.replace(et, it)),
							function (e) {
								return -1 < (e.textContent || s(e)).indexOf(t);
							}
						);
					}),
					lang: ut(function (t) {
						return (
							V.test(t || "") || at.error("unsupported lang: " + t),
							(t = t.replace(et, it).toLowerCase()),
							function (e) {
								var i;
								do {
									if (
										(i = g
											? e.lang
											: e.getAttribute("xml:lang") || e.getAttribute("lang"))
									)
										return (
											(i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
										);
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1;
							}
						);
					}),
					target: function (e) {
						var i = t.location && t.location.hash;
						return i && i.slice(1) === e.id;
					},
					root: function (t) {
						return t === f;
					},
					focus: function (t) {
						return (
							t === p.activeElement &&
							(!p.hasFocus || p.hasFocus()) &&
							!!(t.type || t.href || ~t.tabIndex)
						);
					},
					enabled: gt(!1),
					disabled: gt(!0),
					checked: function (t) {
						var e = t.nodeName.toLowerCase();
						return (
							("input" === e && !!t.checked) || ("option" === e && !!t.selected)
						);
					},
					selected: function (t) {
						return (
							t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
						);
					},
					empty: function (t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0;
					},
					parent: function (t) {
						return !n.pseudos.empty(t);
					},
					header: function (t) {
						return K.test(t.nodeName);
					},
					input: function (t) {
						return Q.test(t.nodeName);
					},
					button: function (t) {
						var e = t.nodeName.toLowerCase();
						return ("input" === e && "button" === t.type) || "button" === e;
					},
					text: function (t) {
						var e;
						return (
							"input" === t.nodeName.toLowerCase() &&
							"text" === t.type &&
							(null == (e = t.getAttribute("type")) ||
								"text" === e.toLowerCase())
						);
					},
					first: mt(function () {
						return [0];
					}),
					last: mt(function (t, e) {
						return [e - 1];
					}),
					eq: mt(function (t, e, i) {
						return [i < 0 ? i + e : i];
					}),
					even: mt(function (t, e) {
						for (var i = 0; i < e; i += 2) t.push(i);
						return t;
					}),
					odd: mt(function (t, e) {
						for (var i = 1; i < e; i += 2) t.push(i);
						return t;
					}),
					lt: mt(function (t, e, i) {
						for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n; ) t.push(n);
						return t;
					}),
					gt: mt(function (t, e, i) {
						for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
						return t;
					}),
				},
			}).pseudos.nth = n.pseudos.eq),
		{
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0,
		}))
			n.pseudos[e] = pt(e);
		for (e in {
			submit: !0,
			reset: !0,
		})
			n.pseudos[e] = ft(e);

		function yt() {}

		function _t(t) {
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n;
		}

		function bt(t, e, i) {
			var n = e.dir,
				s = e.next,
				o = s || n,
				r = i && "parentNode" === o,
				a = x++;
			return e.first
				? function (e, i, s) {
						for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, s);
						return !1;
				  }
				: function (e, i, l) {
						var u,
							c,
							d,
							h = [w, a];
						if (l) {
							for (; (e = e[n]); )
								if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
						} else
							for (; (e = e[n]); )
								if (1 === e.nodeType || r)
									if (
										((c =
											(d = e[b] || (e[b] = {}))[e.uniqueID] ||
											(d[e.uniqueID] = {})),
										s && s === e.nodeName.toLowerCase())
									)
										e = e[n] || e;
									else {
										if ((u = c[o]) && u[0] === w && u[1] === a)
											return (h[2] = u[2]);
										if (((c[o] = h)[2] = t(e, i, l))) return !0;
									}
						return !1;
				  };
		}

		function Dt(t) {
			return 1 < t.length
				? function (e, i, n) {
						for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
						return !0;
				  }
				: t[0];
		}

		function wt(t, e, i, n, s) {
			for (var o, r = [], a = 0, l = t.length, u = null != e; a < l; a++)
				(o = t[a]) && ((i && !i(o, n, s)) || (r.push(o), u && e.push(a)));
			return r;
		}

		function xt(t, e, i, n, s, o) {
			return (
				n && !n[b] && (n = xt(n)),
				s && !s[b] && (s = xt(s, o)),
				ut(function (o, r, a, l) {
					var u,
						c,
						d,
						h = [],
						p = [],
						f = r.length,
						g =
							o ||
							(function (t, e, i) {
								for (var n = 0, s = e.length; n < s; n++) at(t, e[n], i);
								return i;
							})(e || "*", a.nodeType ? [a] : a, []),
						m = !t || (!o && e) ? g : wt(g, h, t, a, l),
						v = i ? (s || (o ? t : f || n) ? [] : r) : m;
					if ((i && i(m, v, a, l), n))
						for (u = wt(v, p), n(u, [], a, l), c = u.length; c--; )
							(d = u[c]) && (v[p[c]] = !(m[p[c]] = d));
					if (o) {
						if (s || t) {
							if (s) {
								for (u = [], c = v.length; c--; )
									(d = v[c]) && u.push((m[c] = d));
								s(null, (v = []), u, l);
							}
							for (c = v.length; c--; )
								(d = v[c]) &&
									-1 < (u = s ? N(o, d) : h[c]) &&
									(o[u] = !(r[u] = d));
						}
					} else (v = wt(v === r ? v.splice(f, v.length) : v)), s ? s(null, r, v, l) : $.apply(r, v);
				})
			);
		}

		function Ct(t) {
			for (
				var e,
					i,
					s,
					o = t.length,
					r = n.relative[t[0].type],
					a = r || n.relative[" "],
					l = r ? 1 : 0,
					c = bt(
						function (t) {
							return t === e;
						},
						a,
						!0
					),
					d = bt(
						function (t) {
							return -1 < N(e, t);
						},
						a,
						!0
					),
					h = [
						function (t, i, n) {
							var s =
								(!r && (n || i !== u)) ||
								((e = i).nodeType ? c(t, i, n) : d(t, i, n));
							return (e = null), s;
						},
					];
				l < o;
				l++
			)
				if ((i = n.relative[t[l].type])) h = [bt(Dt(h), i)];
				else {
					if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
						for (s = ++l; s < o && !n.relative[t[s].type]; s++);
						return xt(
							1 < l && Dt(h),
							1 < l &&
								_t(
									t.slice(0, l - 1).concat({
										value: " " === t[l - 2].type ? "*" : "",
									})
								).replace(H, "$1"),
							i,
							l < s && Ct(t.slice(l, s)),
							s < o && Ct((t = t.slice(s))),
							s < o && _t(t)
						);
					}
					h.push(i);
				}
			return Dt(h);
		}
		return (
			(yt.prototype = n.filters = n.pseudos),
			(n.setFilters = new yt()),
			(r = at.tokenize =
				function (t, e) {
					var i,
						s,
						o,
						r,
						a,
						l,
						u,
						c = T[t + " "];
					if (c) return e ? 0 : c.slice(0);
					for (a = t, l = [], u = n.preFilter; a; ) {
						for (r in ((i && !(s = R.exec(a))) ||
							(s && (a = a.slice(s[0].length) || a), l.push((o = []))),
						(i = !1),
						(s = W.exec(a)) &&
							((i = s.shift()),
							o.push({
								value: i,
								type: s[0].replace(H, " "),
							}),
							(a = a.slice(i.length))),
						n.filter))
							!(s = U[r].exec(a)) ||
								(u[r] && !(s = u[r](s))) ||
								((i = s.shift()),
								o.push({
									value: i,
									type: r,
									matches: s,
								}),
								(a = a.slice(i.length)));
						if (!i) break;
					}
					return e ? a.length : a ? at.error(t) : T(t, l).slice(0);
				}),
			(a = at.compile =
				function (t, e) {
					var i,
						s,
						o,
						a,
						l,
						c,
						d = [],
						f = [],
						m = k[t + " "];
					if (!m) {
						for (e || (e = r(t)), i = e.length; i--; )
							(m = Ct(e[i]))[b] ? d.push(m) : f.push(m);
						(m = k(
							t,
							((s = f),
							(a = 0 < (o = d).length),
							(l = 0 < s.length),
							(c = function (t, e, i, r, c) {
								var d,
									f,
									m,
									v = 0,
									y = "0",
									_ = t && [],
									b = [],
									D = u,
									x = t || (l && n.find.TAG("*", c)),
									C = (w += null == D ? 1 : Math.random() || 0.1),
									T = x.length;
								for (
									c && (u = e == p || e || c);
									y !== T && null != (d = x[y]);
									y++
								) {
									if (l && d) {
										for (
											f = 0, e || d.ownerDocument == p || (h(d), (i = !g));
											(m = s[f++]);

										)
											if (m(d, e || p, i)) {
												r.push(d);
												break;
											}
										c && (w = C);
									}
									a && ((d = !m && d) && v--, t && _.push(d));
								}
								if (((v += y), a && y !== v)) {
									for (f = 0; (m = o[f++]); ) m(_, b, e, i);
									if (t) {
										if (0 < v) for (; y--; ) _[y] || b[y] || (b[y] = L.call(r));
										b = wt(b);
									}
									$.apply(r, b),
										c &&
											!t &&
											0 < b.length &&
											1 < v + o.length &&
											at.uniqueSort(r);
								}
								return c && ((w = C), (u = D)), _;
							}),
							a ? ut(c) : c)
						)).selector = t;
					}
					return m;
				}),
			(l = at.select =
				function (t, e, i, s) {
					var o,
						l,
						u,
						c,
						d,
						h = "function" == typeof t && t,
						p = !s && r((t = h.selector || t));
					if (((i = i || []), 1 === p.length)) {
						if (
							2 < (l = p[0] = p[0].slice(0)).length &&
							"ID" === (u = l[0]).type &&
							9 === e.nodeType &&
							g &&
							n.relative[l[1].type]
						) {
							if (!(e = (n.find.ID(u.matches[0].replace(et, it), e) || [])[0]))
								return i;
							h && (e = e.parentNode), (t = t.slice(l.shift().value.length));
						}
						for (
							o = U.needsContext.test(t) ? 0 : l.length;
							o-- && ((u = l[o]), !n.relative[(c = u.type)]);

						)
							if (
								(d = n.find[c]) &&
								(s = d(
									u.matches[0].replace(et, it),
									(tt.test(l[0].type) && vt(e.parentNode)) || e
								))
							) {
								if ((l.splice(o, 1), !(t = s.length && _t(l))))
									return $.apply(i, s), i;
								break;
							}
					}
					return (
						(h || a(t, p))(
							s,
							e,
							!g,
							i,
							!e || (tt.test(t) && vt(e.parentNode)) || e
						),
						i
					);
				}),
			(i.sortStable = b.split("").sort(E).join("") === b),
			(i.detectDuplicates = !!d),
			h(),
			(i.sortDetached = ct(function (t) {
				return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
			})),
			ct(function (t) {
				return (
					(t.innerHTML = "<a href='#'></a>"),
					"#" === t.firstChild.getAttribute("href")
				);
			}) ||
				dt("type|href|height|width", function (t, e, i) {
					if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
				}),
			(i.attributes &&
				ct(function (t) {
					return (
						(t.innerHTML = "<input/>"),
						t.firstChild.setAttribute("value", ""),
						"" === t.firstChild.getAttribute("value")
					);
				})) ||
				dt("value", function (t, e, i) {
					if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
				}),
			ct(function (t) {
				return null == t.getAttribute("disabled");
			}) ||
				dt(P, function (t, e, i) {
					var n;
					if (!i)
						return !0 === t[e]
							? e.toLowerCase()
							: (n = t.getAttributeNode(e)) && n.specified
							? n.value
							: null;
				}),
			at
		);
	})(t);
	(D.find = x),
		(D.expr = x.selectors),
		(D.expr[":"] = D.expr.pseudos),
		(D.uniqueSort = D.unique = x.uniqueSort),
		(D.text = x.getText),
		(D.isXMLDoc = x.isXML),
		(D.contains = x.contains),
		(D.escapeSelector = x.escape);
	var C = function (t, e, i) {
			for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
				if (1 === t.nodeType) {
					if (s && D(t).is(i)) break;
					n.push(t);
				}
			return n;
		},
		T = function (t, e) {
			for (var i = []; t; t = t.nextSibling)
				1 === t.nodeType && t !== e && i.push(t);
			return i;
		},
		k = D.expr.match.needsContext;

	function S(t, e) {
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
	}
	var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function A(t, e, i) {
		return f(e)
			? D.grep(t, function (t, n) {
					return !!e.call(t, n, t) !== i;
			  })
			: e.nodeType
			? D.grep(t, function (t) {
					return (t === e) !== i;
			  })
			: "string" != typeof e
			? D.grep(t, function (t) {
					return -1 < a.call(e, t) !== i;
			  })
			: D.filter(e, t, i);
	}
	(D.filter = function (t, e, i) {
		var n = e[0];
		return (
			i && (t = ":not(" + t + ")"),
			1 === e.length && 1 === n.nodeType
				? D.find.matchesSelector(n, t)
					? [n]
					: []
				: D.find.matches(
						t,
						D.grep(e, function (t) {
							return 1 === t.nodeType;
						})
				  )
		);
	}),
		D.fn.extend({
			find: function (t) {
				var e,
					i,
					n = this.length,
					s = this;
				if ("string" != typeof t)
					return this.pushStack(
						D(t).filter(function () {
							for (e = 0; e < n; e++) if (D.contains(s[e], this)) return !0;
						})
					);
				for (i = this.pushStack([]), e = 0; e < n; e++) D.find(t, s[e], i);
				return 1 < n ? D.uniqueSort(i) : i;
			},
			filter: function (t) {
				return this.pushStack(A(this, t || [], !1));
			},
			not: function (t) {
				return this.pushStack(A(this, t || [], !0));
			},
			is: function (t) {
				return !!A(this, "string" == typeof t && k.test(t) ? D(t) : t || [], !1)
					.length;
			},
		});
	var F,
		L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	((D.fn.init = function (t, e, i) {
		var n, s;
		if (!t) return this;
		if (((i = i || F), "string" == typeof t)) {
			if (
				!(n =
					"<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
						? [null, t, null]
						: L.exec(t)) ||
				(!n[1] && e)
			)
				return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
			if (n[1]) {
				if (
					((e = e instanceof D ? e[0] : e),
					D.merge(
						this,
						D.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : m, !0)
					),
					E.test(n[1]) && D.isPlainObject(e))
				)
					for (n in e) f(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
				return this;
			}
			return (
				(s = m.getElementById(n[2])) && ((this[0] = s), (this.length = 1)), this
			);
		}
		return t.nodeType
			? ((this[0] = t), (this.length = 1), this)
			: f(t)
			? void 0 !== i.ready
				? i.ready(t)
				: t(D)
			: D.makeArray(t, this);
	}).prototype = D.fn),
		(F = D(m));
	var O = /^(?:parents|prev(?:Until|All))/,
		$ = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0,
		};

	function M(t, e) {
		for (; (t = t[e]) && 1 !== t.nodeType; );
		return t;
	}
	D.fn.extend({
		has: function (t) {
			var e = D(t, this),
				i = e.length;
			return this.filter(function () {
				for (var t = 0; t < i; t++) if (D.contains(this, e[t])) return !0;
			});
		},
		closest: function (t, e) {
			var i,
				n = 0,
				s = this.length,
				o = [],
				r = "string" != typeof t && D(t);
			if (!k.test(t))
				for (; n < s; n++)
					for (i = this[n]; i && i !== e; i = i.parentNode)
						if (
							i.nodeType < 11 &&
							(r
								? -1 < r.index(i)
								: 1 === i.nodeType && D.find.matchesSelector(i, t))
						) {
							o.push(i);
							break;
						}
			return this.pushStack(1 < o.length ? D.uniqueSort(o) : o);
		},
		index: function (t) {
			return t
				? "string" == typeof t
					? a.call(D(t), this[0])
					: a.call(this, t.jquery ? t[0] : t)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
		},
		add: function (t, e) {
			return this.pushStack(D.uniqueSort(D.merge(this.get(), D(t, e))));
		},
		addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
		},
	}),
		D.each(
			{
				parent: function (t) {
					var e = t.parentNode;
					return e && 11 !== e.nodeType ? e : null;
				},
				parents: function (t) {
					return C(t, "parentNode");
				},
				parentsUntil: function (t, e, i) {
					return C(t, "parentNode", i);
				},
				next: function (t) {
					return M(t, "nextSibling");
				},
				prev: function (t) {
					return M(t, "previousSibling");
				},
				nextAll: function (t) {
					return C(t, "nextSibling");
				},
				prevAll: function (t) {
					return C(t, "previousSibling");
				},
				nextUntil: function (t, e, i) {
					return C(t, "nextSibling", i);
				},
				prevUntil: function (t, e, i) {
					return C(t, "previousSibling", i);
				},
				siblings: function (t) {
					return T((t.parentNode || {}).firstChild, t);
				},
				children: function (t) {
					return T(t.firstChild);
				},
				contents: function (t) {
					return null != t.contentDocument && n(t.contentDocument)
						? t.contentDocument
						: (S(t, "template") && (t = t.content || t),
						  D.merge([], t.childNodes));
				},
			},
			function (t, e) {
				D.fn[t] = function (i, n) {
					var s = D.map(this, e, i);
					return (
						"Until" !== t.slice(-5) && (n = i),
						n && "string" == typeof n && (s = D.filter(n, s)),
						1 < this.length &&
							($[t] || D.uniqueSort(s), O.test(t) && s.reverse()),
						this.pushStack(s)
					);
				};
			}
		);
	var N = /[^\x20\t\r\n\f]+/g;

	function P(t) {
		return t;
	}

	function I(t) {
		throw t;
	}

	function B(t, e, i, n) {
		var s;
		try {
			t && f((s = t.promise))
				? s.call(t).done(e).fail(i)
				: t && f((s = t.then))
				? s.call(t, e, i)
				: e.apply(void 0, [t].slice(n));
		} catch (t) {
			i.apply(void 0, [t]);
		}
	}
	(D.Callbacks = function (t) {
		var e, i;
		t =
			"string" == typeof t
				? ((e = t),
				  (i = {}),
				  D.each(e.match(N) || [], function (t, e) {
						i[e] = !0;
				  }),
				  i)
				: D.extend({}, t);
		var n,
			s,
			o,
			r,
			a = [],
			l = [],
			u = -1,
			c = function () {
				for (r = r || t.once, o = n = !0; l.length; u = -1)
					for (s = l.shift(); ++u < a.length; )
						!1 === a[u].apply(s[0], s[1]) &&
							t.stopOnFalse &&
							((u = a.length), (s = !1));
				t.memory || (s = !1), (n = !1), r && (a = s ? [] : "");
			},
			d = {
				add: function () {
					return (
						a &&
							(s && !n && ((u = a.length - 1), l.push(s)),
							(function e(i) {
								D.each(i, function (i, n) {
									f(n)
										? (t.unique && d.has(n)) || a.push(n)
										: n && n.length && "string" !== _(n) && e(n);
								});
							})(arguments),
							s && !n && c()),
						this
					);
				},
				remove: function () {
					return (
						D.each(arguments, function (t, e) {
							for (var i; -1 < (i = D.inArray(e, a, i)); )
								a.splice(i, 1), i <= u && u--;
						}),
						this
					);
				},
				has: function (t) {
					return t ? -1 < D.inArray(t, a) : 0 < a.length;
				},
				empty: function () {
					return a && (a = []), this;
				},
				disable: function () {
					return (r = l = []), (a = s = ""), this;
				},
				disabled: function () {
					return !a;
				},
				lock: function () {
					return (r = l = []), s || n || (a = s = ""), this;
				},
				locked: function () {
					return !!r;
				},
				fireWith: function (t, e) {
					return (
						r ||
							((e = [t, (e = e || []).slice ? e.slice() : e]),
							l.push(e),
							n || c()),
						this
					);
				},
				fire: function () {
					return d.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!o;
				},
			};
		return d;
	}),
		D.extend({
			Deferred: function (e) {
				var i = [
						[
							"notify",
							"progress",
							D.Callbacks("memory"),
							D.Callbacks("memory"),
							2,
						],
						[
							"resolve",
							"done",
							D.Callbacks("once memory"),
							D.Callbacks("once memory"),
							0,
							"resolved",
						],
						[
							"reject",
							"fail",
							D.Callbacks("once memory"),
							D.Callbacks("once memory"),
							1,
							"rejected",
						],
					],
					n = "pending",
					s = {
						state: function () {
							return n;
						},
						always: function () {
							return o.done(arguments).fail(arguments), this;
						},
						catch: function (t) {
							return s.then(null, t);
						},
						pipe: function () {
							var t = arguments;
							return D.Deferred(function (e) {
								D.each(i, function (i, n) {
									var s = f(t[n[4]]) && t[n[4]];
									o[n[1]](function () {
										var t = s && s.apply(this, arguments);
										t && f(t.promise)
											? t
													.promise()
													.progress(e.notify)
													.done(e.resolve)
													.fail(e.reject)
											: e[n[0] + "With"](this, s ? [t] : arguments);
									});
								}),
									(t = null);
							}).promise();
						},
						then: function (e, n, s) {
							var o = 0;

							function r(e, i, n, s) {
								return function () {
									var a = this,
										l = arguments,
										u = function () {
											var t, u;
											if (!(e < o)) {
												if ((t = n.apply(a, l)) === i.promise())
													throw new TypeError("Thenable self-resolution");
												(u =
													t &&
													("object" == typeof t || "function" == typeof t) &&
													t.then),
													f(u)
														? s
															? u.call(t, r(o, i, P, s), r(o, i, I, s))
															: (o++,
															  u.call(
																	t,
																	r(o, i, P, s),
																	r(o, i, I, s),
																	r(o, i, P, i.notifyWith)
															  ))
														: (n !== P && ((a = void 0), (l = [t])),
														  (s || i.resolveWith)(a, l));
											}
										},
										c = s
											? u
											: function () {
													try {
														u();
													} catch (t) {
														D.Deferred.exceptionHook &&
															D.Deferred.exceptionHook(t, c.stackTrace),
															o <= e + 1 &&
																(n !== I && ((a = void 0), (l = [t])),
																i.rejectWith(a, l));
													}
											  };
									e
										? c()
										: (D.Deferred.getStackHook &&
												(c.stackTrace = D.Deferred.getStackHook()),
										  t.setTimeout(c));
								};
							}
							return D.Deferred(function (t) {
								i[0][3].add(r(0, t, f(s) ? s : P, t.notifyWith)),
									i[1][3].add(r(0, t, f(e) ? e : P)),
									i[2][3].add(r(0, t, f(n) ? n : I));
							}).promise();
						},
						promise: function (t) {
							return null != t ? D.extend(t, s) : s;
						},
					},
					o = {};
				return (
					D.each(i, function (t, e) {
						var r = e[2],
							a = e[5];
						(s[e[1]] = r.add),
							a &&
								r.add(
									function () {
										n = a;
									},
									i[3 - t][2].disable,
									i[3 - t][3].disable,
									i[0][2].lock,
									i[0][3].lock
								),
							r.add(e[3].fire),
							(o[e[0]] = function () {
								return (
									o[e[0] + "With"](this === o ? void 0 : this, arguments), this
								);
							}),
							(o[e[0] + "With"] = r.fireWith);
					}),
					s.promise(o),
					e && e.call(o, o),
					o
				);
			},
			when: function (t) {
				var e = arguments.length,
					i = e,
					n = Array(i),
					o = s.call(arguments),
					r = D.Deferred(),
					a = function (t) {
						return function (i) {
							(n[t] = this),
								(o[t] = 1 < arguments.length ? s.call(arguments) : i),
								--e || r.resolveWith(n, o);
						};
					};
				if (
					e <= 1 &&
					(B(t, r.done(a(i)).resolve, r.reject, !e),
					"pending" === r.state() || f(o[i] && o[i].then))
				)
					return r.then();
				for (; i--; ) B(o[i], a(i), r.reject);
				return r.promise();
			},
		});
	var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	(D.Deferred.exceptionHook = function (e, i) {
		t.console &&
			t.console.warn &&
			e &&
			j.test(e.name) &&
			t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
	}),
		(D.readyException = function (e) {
			t.setTimeout(function () {
				throw e;
			});
		});
	var z = D.Deferred();

	function q() {
		m.removeEventListener("DOMContentLoaded", q),
			t.removeEventListener("load", q),
			D.ready();
	}
	(D.fn.ready = function (t) {
		return (
			z.then(t).catch(function (t) {
				D.readyException(t);
			}),
			this
		);
	}),
		D.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (t) {
				(!0 === t ? --D.readyWait : D.isReady) ||
					((D.isReady = !0) !== t && 0 < --D.readyWait) ||
					z.resolveWith(m, [D]);
			},
		}),
		(D.ready.then = z.then),
		"complete" === m.readyState ||
		("loading" !== m.readyState && !m.documentElement.doScroll)
			? t.setTimeout(D.ready)
			: (m.addEventListener("DOMContentLoaded", q),
			  t.addEventListener("load", q));
	var H = function (t, e, i, n, s, o, r) {
			var a = 0,
				l = t.length,
				u = null == i;
			if ("object" === _(i))
				for (a in ((s = !0), i)) H(t, e, a, i[a], !0, o, r);
			else if (
				void 0 !== n &&
				((s = !0),
				f(n) || (r = !0),
				u &&
					(r
						? (e.call(t, n), (e = null))
						: ((u = e),
						  (e = function (t, e, i) {
								return u.call(D(t), i);
						  }))),
				e)
			)
				for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
			return s ? t : u ? e.call(t) : l ? e(t[0], i) : o;
		},
		R = /^-ms-/,
		W = /-([a-z])/g;

	function X(t, e) {
		return e.toUpperCase();
	}

	function Y(t) {
		return t.replace(R, "ms-").replace(W, X);
	}
	var V = function (t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
	};

	function U() {
		this.expando = D.expando + U.uid++;
	}
	(U.uid = 1),
		(U.prototype = {
			cache: function (t) {
				var e = t[this.expando];
				return (
					e ||
						((e = {}),
						V(t) &&
							(t.nodeType
								? (t[this.expando] = e)
								: Object.defineProperty(t, this.expando, {
										value: e,
										configurable: !0,
								  }))),
					e
				);
			},
			set: function (t, e, i) {
				var n,
					s = this.cache(t);
				if ("string" == typeof e) s[Y(e)] = i;
				else for (n in e) s[Y(n)] = e[n];
				return s;
			},
			get: function (t, e) {
				return void 0 === e
					? this.cache(t)
					: t[this.expando] && t[this.expando][Y(e)];
			},
			access: function (t, e, i) {
				return void 0 === e || (e && "string" == typeof e && void 0 === i)
					? this.get(t, e)
					: (this.set(t, e, i), void 0 !== i ? i : e);
			},
			remove: function (t, e) {
				var i,
					n = t[this.expando];
				if (void 0 !== n) {
					if (void 0 !== e) {
						i = (e = Array.isArray(e)
							? e.map(Y)
							: (e = Y(e)) in n
							? [e]
							: e.match(N) || []).length;
						for (; i--; ) delete n[e[i]];
					}
					(void 0 === e || D.isEmptyObject(n)) &&
						(t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
				}
			},
			hasData: function (t) {
				var e = t[this.expando];
				return void 0 !== e && !D.isEmptyObject(e);
			},
		});
	var G = new U(),
		Q = new U(),
		K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Z = /[A-Z]/g;

	function J(t, e, i) {
		var n, s;
		if (void 0 === i && 1 === t.nodeType)
			if (
				((n = "data-" + e.replace(Z, "-$&").toLowerCase()),
				"string" == typeof (i = t.getAttribute(n)))
			) {
				try {
					i =
						"true" === (s = i) ||
						("false" !== s &&
							("null" === s
								? null
								: s === +s + ""
								? +s
								: K.test(s)
								? JSON.parse(s)
								: s));
				} catch (t) {}
				Q.set(t, e, i);
			} else i = void 0;
		return i;
	}
	D.extend({
		hasData: function (t) {
			return Q.hasData(t) || G.hasData(t);
		},
		data: function (t, e, i) {
			return Q.access(t, e, i);
		},
		removeData: function (t, e) {
			Q.remove(t, e);
		},
		_data: function (t, e, i) {
			return G.access(t, e, i);
		},
		_removeData: function (t, e) {
			G.remove(t, e);
		},
	}),
		D.fn.extend({
			data: function (t, e) {
				var i,
					n,
					s,
					o = this[0],
					r = o && o.attributes;
				if (void 0 === t) {
					if (
						this.length &&
						((s = Q.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))
					) {
						for (i = r.length; i--; )
							r[i] &&
								0 === (n = r[i].name).indexOf("data-") &&
								((n = Y(n.slice(5))), J(o, n, s[n]));
						G.set(o, "hasDataAttrs", !0);
					}
					return s;
				}
				return "object" == typeof t
					? this.each(function () {
							Q.set(this, t);
					  })
					: H(
							this,
							function (e) {
								var i;
								if (o && void 0 === e)
									return void 0 !== (i = Q.get(o, t))
										? i
										: void 0 !== (i = J(o, t))
										? i
										: void 0;
								this.each(function () {
									Q.set(this, t, e);
								});
							},
							null,
							e,
							1 < arguments.length,
							null,
							!0
					  );
			},
			removeData: function (t) {
				return this.each(function () {
					Q.remove(this, t);
				});
			},
		}),
		D.extend({
			queue: function (t, e, i) {
				var n;
				if (t)
					return (
						(e = (e || "fx") + "queue"),
						(n = G.get(t, e)),
						i &&
							(!n || Array.isArray(i)
								? (n = G.access(t, e, D.makeArray(i)))
								: n.push(i)),
						n || []
					);
			},
			dequeue: function (t, e) {
				e = e || "fx";
				var i = D.queue(t, e),
					n = i.length,
					s = i.shift(),
					o = D._queueHooks(t, e);
				"inprogress" === s && ((s = i.shift()), n--),
					s &&
						("fx" === e && i.unshift("inprogress"),
						delete o.stop,
						s.call(
							t,
							function () {
								D.dequeue(t, e);
							},
							o
						)),
					!n && o && o.empty.fire();
			},
			_queueHooks: function (t, e) {
				var i = e + "queueHooks";
				return (
					G.get(t, i) ||
					G.access(t, i, {
						empty: D.Callbacks("once memory").add(function () {
							G.remove(t, [e + "queue", i]);
						}),
					})
				);
			},
		}),
		D.fn.extend({
			queue: function (t, e) {
				var i = 2;
				return (
					"string" != typeof t && ((e = t), (t = "fx"), i--),
					arguments.length < i
						? D.queue(this[0], t)
						: void 0 === e
						? this
						: this.each(function () {
								var i = D.queue(this, t, e);
								D._queueHooks(this, t),
									"fx" === t && "inprogress" !== i[0] && D.dequeue(this, t);
						  })
				);
			},
			dequeue: function (t) {
				return this.each(function () {
					D.dequeue(this, t);
				});
			},
			clearQueue: function (t) {
				return this.queue(t || "fx", []);
			},
			promise: function (t, e) {
				var i,
					n = 1,
					s = D.Deferred(),
					o = this,
					r = this.length,
					a = function () {
						--n || s.resolveWith(o, [o]);
					};
				for (
					"string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
					r--;

				)
					(i = G.get(o[r], t + "queueHooks")) &&
						i.empty &&
						(n++, i.empty.add(a));
				return a(), s.promise(e);
			},
		});
	var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
		it = ["Top", "Right", "Bottom", "Left"],
		nt = m.documentElement,
		st = function (t) {
			return D.contains(t.ownerDocument, t);
		},
		ot = {
			composed: !0,
		};
	nt.getRootNode &&
		(st = function (t) {
			return (
				D.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
			);
		});
	var rt = function (t, e) {
		return (
			"none" === (t = e || t).style.display ||
			("" === t.style.display && st(t) && "none" === D.css(t, "display"))
		);
	};

	function at(t, e, i, n) {
		var s,
			o,
			r = 20,
			a = n
				? function () {
						return n.cur();
				  }
				: function () {
						return D.css(t, e, "");
				  },
			l = a(),
			u = (i && i[3]) || (D.cssNumber[e] ? "" : "px"),
			c =
				t.nodeType &&
				(D.cssNumber[e] || ("px" !== u && +l)) &&
				et.exec(D.css(t, e));
		if (c && c[3] !== u) {
			for (l /= 2, u = u || c[3], c = +l || 1; r--; )
				D.style(t, e, c + u),
					(1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (r = 0),
					(c /= o);
			(c *= 2), D.style(t, e, c + u), (i = i || []);
		}
		return (
			i &&
				((c = +c || +l || 0),
				(s = i[1] ? c + (i[1] + 1) * i[2] : +i[2]),
				n && ((n.unit = u), (n.start = c), (n.end = s))),
			s
		);
	}
	var lt = {};

	function ut(t, e) {
		for (var i, n, s, o, r, a, l, u = [], c = 0, d = t.length; c < d; c++)
			(n = t[c]).style &&
				((i = n.style.display),
				e
					? ("none" === i &&
							((u[c] = G.get(n, "display") || null),
							u[c] || (n.style.display = "")),
					  "" === n.style.display &&
							rt(n) &&
							(u[c] =
								((l = r = o = void 0),
								(r = (s = n).ownerDocument),
								(a = s.nodeName),
								(l = lt[a]) ||
									((o = r.body.appendChild(r.createElement(a))),
									(l = D.css(o, "display")),
									o.parentNode.removeChild(o),
									"none" === l && (l = "block"),
									(lt[a] = l)))))
					: "none" !== i && ((u[c] = "none"), G.set(n, "display", i)));
		for (c = 0; c < d; c++) null != u[c] && (t[c].style.display = u[c]);
		return t;
	}
	D.fn.extend({
		show: function () {
			return ut(this, !0);
		},
		hide: function () {
			return ut(this);
		},
		toggle: function (t) {
			return "boolean" == typeof t
				? t
					? this.show()
					: this.hide()
				: this.each(function () {
						rt(this) ? D(this).show() : D(this).hide();
				  });
		},
	});
	var ct,
		dt,
		ht = /^(?:checkbox|radio)$/i,
		pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		ft = /^$|^module$|\/(?:java|ecma)script/i;
	(ct = m.createDocumentFragment().appendChild(m.createElement("div"))),
		(dt = m.createElement("input")).setAttribute("type", "radio"),
		dt.setAttribute("checked", "checked"),
		dt.setAttribute("name", "t"),
		ct.appendChild(dt),
		(p.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked),
		(ct.innerHTML = "<textarea>x</textarea>"),
		(p.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue),
		(ct.innerHTML = "<option></option>"),
		(p.option = !!ct.lastChild);
	var gt = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""],
	};

	function mt(t, e) {
		var i;
		return (
			(i =
				void 0 !== t.getElementsByTagName
					? t.getElementsByTagName(e || "*")
					: void 0 !== t.querySelectorAll
					? t.querySelectorAll(e || "*")
					: []),
			void 0 === e || (e && S(t, e)) ? D.merge([t], i) : i
		);
	}

	function vt(t, e) {
		for (var i = 0, n = t.length; i < n; i++)
			G.set(t[i], "globalEval", !e || G.get(e[i], "globalEval"));
	}
	(gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
		(gt.th = gt.td),
		p.option ||
			(gt.optgroup = gt.option =
				[1, "<select multiple='multiple'>", "</select>"]);
	var yt = /<|&#?\w+;/;

	function _t(t, e, i, n, s) {
		for (
			var o,
				r,
				a,
				l,
				u,
				c,
				d = e.createDocumentFragment(),
				h = [],
				p = 0,
				f = t.length;
			p < f;
			p++
		)
			if ((o = t[p]) || 0 === o)
				if ("object" === _(o)) D.merge(h, o.nodeType ? [o] : o);
				else if (yt.test(o)) {
					for (
						r = r || d.appendChild(e.createElement("div")),
							a = (pt.exec(o) || ["", ""])[1].toLowerCase(),
							l = gt[a] || gt._default,
							r.innerHTML = l[1] + D.htmlPrefilter(o) + l[2],
							c = l[0];
						c--;

					)
						r = r.lastChild;
					D.merge(h, r.childNodes), ((r = d.firstChild).textContent = "");
				} else h.push(e.createTextNode(o));
		for (d.textContent = "", p = 0; (o = h[p++]); )
			if (n && -1 < D.inArray(o, n)) s && s.push(o);
			else if (
				((u = st(o)), (r = mt(d.appendChild(o), "script")), u && vt(r), i)
			)
				for (c = 0; (o = r[c++]); ) ft.test(o.type || "") && i.push(o);
		return d;
	}
	var bt = /^([^.]*)(?:\.(.+)|)/;

	function Dt() {
		return !0;
	}

	function wt() {
		return !1;
	}

	function xt(t, e) {
		return (
			(t ===
				(function () {
					try {
						return m.activeElement;
					} catch (t) {}
				})()) ==
			("focus" === e)
		);
	}

	function Ct(t, e, i, n, s, o) {
		var r, a;
		if ("object" == typeof e) {
			for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
				Ct(t, a, i, n, e[a], o);
			return t;
		}
		if (
			(null == n && null == s
				? ((s = i), (n = i = void 0))
				: null == s &&
				  ("string" == typeof i
						? ((s = n), (n = void 0))
						: ((s = n), (n = i), (i = void 0))),
			!1 === s)
		)
			s = wt;
		else if (!s) return t;
		return (
			1 === o &&
				((r = s),
				((s = function (t) {
					return D().off(t), r.apply(this, arguments);
				}).guid = r.guid || (r.guid = D.guid++))),
			t.each(function () {
				D.event.add(this, e, s, n, i);
			})
		);
	}

	function Tt(t, e, i) {
		i
			? (G.set(t, e, !1),
			  D.event.add(t, e, {
					namespace: !1,
					handler: function (t) {
						var n,
							o,
							r = G.get(this, e);
						if (1 & t.isTrigger && this[e]) {
							if (r.length)
								(D.event.special[e] || {}).delegateType && t.stopPropagation();
							else if (
								((r = s.call(arguments)),
								G.set(this, e, r),
								(n = i(this, e)),
								this[e](),
								r !== (o = G.get(this, e)) || n ? G.set(this, e, !1) : (o = {}),
								r !== o)
							)
								return (
									t.stopImmediatePropagation(), t.preventDefault(), o && o.value
								);
						} else
							r.length &&
								(G.set(this, e, {
									value: D.event.trigger(
										D.extend(r[0], D.Event.prototype),
										r.slice(1),
										this
									),
								}),
								t.stopImmediatePropagation());
					},
			  }))
			: void 0 === G.get(t, e) && D.event.add(t, e, Dt);
	}
	(D.event = {
		global: {},
		add: function (t, e, i, n, s) {
			var o,
				r,
				a,
				l,
				u,
				c,
				d,
				h,
				p,
				f,
				g,
				m = G.get(t);
			if (V(t))
				for (
					i.handler && ((i = (o = i).handler), (s = o.selector)),
						s && D.find.matchesSelector(nt, s),
						i.guid || (i.guid = D.guid++),
						(l = m.events) || (l = m.events = Object.create(null)),
						(r = m.handle) ||
							(r = m.handle =
								function (e) {
									return void 0 !== D && D.event.triggered !== e.type
										? D.event.dispatch.apply(t, arguments)
										: void 0;
								}),
						u = (e = (e || "").match(N) || [""]).length;
					u--;

				)
					(p = g = (a = bt.exec(e[u]) || [])[1]),
						(f = (a[2] || "").split(".").sort()),
						p &&
							((d = D.event.special[p] || {}),
							(p = (s ? d.delegateType : d.bindType) || p),
							(d = D.event.special[p] || {}),
							(c = D.extend(
								{
									type: p,
									origType: g,
									data: n,
									handler: i,
									guid: i.guid,
									selector: s,
									needsContext: s && D.expr.match.needsContext.test(s),
									namespace: f.join("."),
								},
								o
							)),
							(h = l[p]) ||
								(((h = l[p] = []).delegateCount = 0),
								(d.setup && !1 !== d.setup.call(t, n, f, r)) ||
									(t.addEventListener && t.addEventListener(p, r))),
							d.add &&
								(d.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)),
							s ? h.splice(h.delegateCount++, 0, c) : h.push(c),
							(D.event.global[p] = !0));
		},
		remove: function (t, e, i, n, s) {
			var o,
				r,
				a,
				l,
				u,
				c,
				d,
				h,
				p,
				f,
				g,
				m = G.hasData(t) && G.get(t);
			if (m && (l = m.events)) {
				for (u = (e = (e || "").match(N) || [""]).length; u--; )
					if (
						((p = g = (a = bt.exec(e[u]) || [])[1]),
						(f = (a[2] || "").split(".").sort()),
						p)
					) {
						for (
							d = D.event.special[p] || {},
								h = l[(p = (n ? d.delegateType : d.bindType) || p)] || [],
								a =
									a[2] &&
									new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
								r = o = h.length;
							o--;

						)
							(c = h[o]),
								(!s && g !== c.origType) ||
									(i && i.guid !== c.guid) ||
									(a && !a.test(c.namespace)) ||
									(n && n !== c.selector && ("**" !== n || !c.selector)) ||
									(h.splice(o, 1),
									c.selector && h.delegateCount--,
									d.remove && d.remove.call(t, c));
						r &&
							!h.length &&
							((d.teardown && !1 !== d.teardown.call(t, f, m.handle)) ||
								D.removeEvent(t, p, m.handle),
							delete l[p]);
					} else for (p in l) D.event.remove(t, p + e[u], i, n, !0);
				D.isEmptyObject(l) && G.remove(t, "handle events");
			}
		},
		dispatch: function (t) {
			var e,
				i,
				n,
				s,
				o,
				r,
				a = new Array(arguments.length),
				l = D.event.fix(t),
				u = (G.get(this, "events") || Object.create(null))[l.type] || [],
				c = D.event.special[l.type] || {};
			for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
			if (
				((l.delegateTarget = this),
				!c.preDispatch || !1 !== c.preDispatch.call(this, l))
			) {
				for (
					r = D.event.handlers.call(this, l, u), e = 0;
					(s = r[e++]) && !l.isPropagationStopped();

				)
					for (
						l.currentTarget = s.elem, i = 0;
						(o = s.handlers[i++]) && !l.isImmediatePropagationStopped();

					)
						(l.rnamespace &&
							!1 !== o.namespace &&
							!l.rnamespace.test(o.namespace)) ||
							((l.handleObj = o),
							(l.data = o.data),
							void 0 !==
								(n = (
									(D.event.special[o.origType] || {}).handle || o.handler
								).apply(s.elem, a)) &&
								!1 === (l.result = n) &&
								(l.preventDefault(), l.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, l), l.result;
			}
		},
		handlers: function (t, e) {
			var i,
				n,
				s,
				o,
				r,
				a = [],
				l = e.delegateCount,
				u = t.target;
			if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
						for (o = [], r = {}, i = 0; i < l; i++)
							void 0 === r[(s = (n = e[i]).selector + " ")] &&
								(r[s] = n.needsContext
									? -1 < D(s, this).index(u)
									: D.find(s, this, null, [u]).length),
								r[s] && o.push(n);
						o.length &&
							a.push({
								elem: u,
								handlers: o,
							});
					}
			return (
				(u = this),
				l < e.length &&
					a.push({
						elem: u,
						handlers: e.slice(l),
					}),
				a
			);
		},
		addProp: function (t, e) {
			Object.defineProperty(D.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: f(e)
					? function () {
							if (this.originalEvent) return e(this.originalEvent);
					  }
					: function () {
							if (this.originalEvent) return this.originalEvent[t];
					  },
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e,
					});
				},
			});
		},
		fix: function (t) {
			return t[D.expando] ? t : new D.Event(t);
		},
		special: {
			load: {
				noBubble: !0,
			},
			click: {
				setup: function (t) {
					var e = this || t;
					return (
						ht.test(e.type) && e.click && S(e, "input") && Tt(e, "click", Dt),
						!1
					);
				},
				trigger: function (t) {
					var e = this || t;
					return (
						ht.test(e.type) && e.click && S(e, "input") && Tt(e, "click"), !0
					);
				},
				_default: function (t) {
					var e = t.target;
					return (
						(ht.test(e.type) &&
							e.click &&
							S(e, "input") &&
							G.get(e, "click")) ||
						S(e, "a")
					);
				},
			},
			beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result &&
						t.originalEvent &&
						(t.originalEvent.returnValue = t.result);
				},
			},
		},
	}),
		(D.removeEvent = function (t, e, i) {
			t.removeEventListener && t.removeEventListener(e, i);
		}),
		(D.Event = function (t, e) {
			if (!(this instanceof D.Event)) return new D.Event(t, e);
			t && t.type
				? ((this.originalEvent = t),
				  (this.type = t.type),
				  (this.isDefaultPrevented =
						t.defaultPrevented ||
						(void 0 === t.defaultPrevented && !1 === t.returnValue)
							? Dt
							: wt),
				  (this.target =
						t.target && 3 === t.target.nodeType
							? t.target.parentNode
							: t.target),
				  (this.currentTarget = t.currentTarget),
				  (this.relatedTarget = t.relatedTarget))
				: (this.type = t),
				e && D.extend(this, e),
				(this.timeStamp = (t && t.timeStamp) || Date.now()),
				(this[D.expando] = !0);
		}),
		(D.Event.prototype = {
			constructor: D.Event,
			isDefaultPrevented: wt,
			isPropagationStopped: wt,
			isImmediatePropagationStopped: wt,
			isSimulated: !1,
			preventDefault: function () {
				var t = this.originalEvent;
				(this.isDefaultPrevented = Dt),
					t && !this.isSimulated && t.preventDefault();
			},
			stopPropagation: function () {
				var t = this.originalEvent;
				(this.isPropagationStopped = Dt),
					t && !this.isSimulated && t.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var t = this.originalEvent;
				(this.isImmediatePropagationStopped = Dt),
					t && !this.isSimulated && t.stopImmediatePropagation(),
					this.stopPropagation();
			},
		}),
		D.each(
			{
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: !0,
			},
			D.event.addProp
		),
		D.each(
			{
				focus: "focusin",
				blur: "focusout",
			},
			function (t, e) {
				D.event.special[t] = {
					setup: function () {
						return Tt(this, t, xt), !1;
					},
					trigger: function () {
						return Tt(this, t), !0;
					},
					_default: function () {
						return !0;
					},
					delegateType: e,
				};
			}
		),
		D.each(
			{
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout",
			},
			function (t, e) {
				D.event.special[t] = {
					delegateType: e,
					bindType: e,
					handle: function (t) {
						var i,
							n = t.relatedTarget,
							s = t.handleObj;
						return (
							(n && (n === this || D.contains(this, n))) ||
								((t.type = s.origType),
								(i = s.handler.apply(this, arguments)),
								(t.type = e)),
							i
						);
					},
				};
			}
		),
		D.fn.extend({
			on: function (t, e, i, n) {
				return Ct(this, t, e, i, n);
			},
			one: function (t, e, i, n) {
				return Ct(this, t, e, i, n, 1);
			},
			off: function (t, e, i) {
				var n, s;
				if (t && t.preventDefault && t.handleObj)
					return (
						(n = t.handleObj),
						D(t.delegateTarget).off(
							n.namespace ? n.origType + "." + n.namespace : n.origType,
							n.selector,
							n.handler
						),
						this
					);
				if ("object" == typeof t) {
					for (s in t) this.off(s, e, t[s]);
					return this;
				}
				return (
					(!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
					!1 === i && (i = wt),
					this.each(function () {
						D.event.remove(this, t, i, e);
					})
				);
			},
		});
	var kt = /<script|<style|<link/i,
		St = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function At(t, e) {
		return (
			(S(t, "table") &&
				S(11 !== e.nodeType ? e : e.firstChild, "tr") &&
				D(t).children("tbody")[0]) ||
			t
		);
	}

	function Ft(t) {
		return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
	}

	function Lt(t) {
		return (
			"true/" === (t.type || "").slice(0, 5)
				? (t.type = t.type.slice(5))
				: t.removeAttribute("type"),
			t
		);
	}

	function Ot(t, e) {
		var i, n, s, o, r, a;
		if (1 === e.nodeType) {
			if (G.hasData(t) && (a = G.get(t).events))
				for (s in (G.remove(e, "handle events"), a))
					for (i = 0, n = a[s].length; i < n; i++) D.event.add(e, s, a[s][i]);
			Q.hasData(t) && ((o = Q.access(t)), (r = D.extend({}, o)), Q.set(e, r));
		}
	}

	function $t(t, e, i, n) {
		e = o(e);
		var s,
			r,
			a,
			l,
			u,
			c,
			d = 0,
			h = t.length,
			g = h - 1,
			m = e[0],
			v = f(m);
		if (v || (1 < h && "string" == typeof m && !p.checkClone && St.test(m)))
			return t.each(function (s) {
				var o = t.eq(s);
				v && (e[0] = m.call(this, s, o.html())), $t(o, e, i, n);
			});
		if (
			h &&
			((r = (s = _t(e, t[0].ownerDocument, !1, t, n)).firstChild),
			1 === s.childNodes.length && (s = r),
			r || n)
		) {
			for (l = (a = D.map(mt(s, "script"), Ft)).length; d < h; d++)
				(u = s),
					d !== g &&
						((u = D.clone(u, !0, !0)), l && D.merge(a, mt(u, "script"))),
					i.call(t[d], u, d);
			if (l)
				for (c = a[a.length - 1].ownerDocument, D.map(a, Lt), d = 0; d < l; d++)
					(u = a[d]),
						ft.test(u.type || "") &&
							!G.access(u, "globalEval") &&
							D.contains(c, u) &&
							(u.src && "module" !== (u.type || "").toLowerCase()
								? D._evalUrl &&
								  !u.noModule &&
								  D._evalUrl(
										u.src,
										{
											nonce: u.nonce || u.getAttribute("nonce"),
										},
										c
								  )
								: y(u.textContent.replace(Et, ""), u, c));
		}
		return t;
	}

	function Mt(t, e, i) {
		for (var n, s = e ? D.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
			i || 1 !== n.nodeType || D.cleanData(mt(n)),
				n.parentNode &&
					(i && st(n) && vt(mt(n, "script")), n.parentNode.removeChild(n));
		return t;
	}
	D.extend({
		htmlPrefilter: function (t) {
			return t;
		},
		clone: function (t, e, i) {
			var n,
				s,
				o,
				r,
				a,
				l,
				u,
				c = t.cloneNode(!0),
				d = st(t);
			if (
				!(
					p.noCloneChecked ||
					(1 !== t.nodeType && 11 !== t.nodeType) ||
					D.isXMLDoc(t)
				)
			)
				for (r = mt(c), n = 0, s = (o = mt(t)).length; n < s; n++)
					(a = o[n]),
						"input" === (u = (l = r[n]).nodeName.toLowerCase()) &&
						ht.test(a.type)
							? (l.checked = a.checked)
							: ("input" !== u && "textarea" !== u) ||
							  (l.defaultValue = a.defaultValue);
			if (e)
				if (i)
					for (o = o || mt(t), r = r || mt(c), n = 0, s = o.length; n < s; n++)
						Ot(o[n], r[n]);
				else Ot(t, c);
			return (
				0 < (r = mt(c, "script")).length && vt(r, !d && mt(t, "script")), c
			);
		},
		cleanData: function (t) {
			for (var e, i, n, s = D.event.special, o = 0; void 0 !== (i = t[o]); o++)
				if (V(i)) {
					if ((e = i[G.expando])) {
						if (e.events)
							for (n in e.events)
								s[n] ? D.event.remove(i, n) : D.removeEvent(i, n, e.handle);
						i[G.expando] = void 0;
					}
					i[Q.expando] && (i[Q.expando] = void 0);
				}
		},
	}),
		D.fn.extend({
			detach: function (t) {
				return Mt(this, t, !0);
			},
			remove: function (t) {
				return Mt(this, t);
			},
			text: function (t) {
				return H(
					this,
					function (t) {
						return void 0 === t
							? D.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										(this.textContent = t);
							  });
					},
					null,
					t,
					arguments.length
				);
			},
			append: function () {
				return $t(this, arguments, function (t) {
					(1 !== this.nodeType &&
						11 !== this.nodeType &&
						9 !== this.nodeType) ||
						At(this, t).appendChild(t);
				});
			},
			prepend: function () {
				return $t(this, arguments, function (t) {
					if (
						1 === this.nodeType ||
						11 === this.nodeType ||
						9 === this.nodeType
					) {
						var e = At(this, t);
						e.insertBefore(t, e.firstChild);
					}
				});
			},
			before: function () {
				return $t(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this);
				});
			},
			after: function () {
				return $t(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
				});
			},
			empty: function () {
				for (var t, e = 0; null != (t = this[e]); e++)
					1 === t.nodeType && (D.cleanData(mt(t, !1)), (t.textContent = ""));
				return this;
			},
			clone: function (t, e) {
				return (
					(t = null != t && t),
					(e = null == e ? t : e),
					this.map(function () {
						return D.clone(this, t, e);
					})
				);
			},
			html: function (t) {
				return H(
					this,
					function (t) {
						var e = this[0] || {},
							i = 0,
							n = this.length;
						if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
						if (
							"string" == typeof t &&
							!kt.test(t) &&
							!gt[(pt.exec(t) || ["", ""])[1].toLowerCase()]
						) {
							t = D.htmlPrefilter(t);
							try {
								for (; i < n; i++)
									1 === (e = this[i] || {}).nodeType &&
										(D.cleanData(mt(e, !1)), (e.innerHTML = t));
								e = 0;
							} catch (t) {}
						}
						e && this.empty().append(t);
					},
					null,
					t,
					arguments.length
				);
			},
			replaceWith: function () {
				var t = [];
				return $t(
					this,
					arguments,
					function (e) {
						var i = this.parentNode;
						D.inArray(this, t) < 0 &&
							(D.cleanData(mt(this)), i && i.replaceChild(e, this));
					},
					t
				);
			},
		}),
		D.each(
			{
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith",
			},
			function (t, e) {
				D.fn[t] = function (t) {
					for (var i, n = [], s = D(t), o = s.length - 1, a = 0; a <= o; a++)
						(i = a === o ? this : this.clone(!0)),
							D(s[a])[e](i),
							r.apply(n, i.get());
					return this.pushStack(n);
				};
			}
		);
	var Nt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
		Pt = function (e) {
			var i = e.ownerDocument.defaultView;
			return (i && i.opener) || (i = t), i.getComputedStyle(e);
		},
		It = function (t, e, i) {
			var n,
				s,
				o = {};
			for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
			for (s in ((n = i.call(t)), e)) t.style[s] = o[s];
			return n;
		},
		Bt = new RegExp(it.join("|"), "i");

	function jt(t, e, i) {
		var n,
			s,
			o,
			r,
			a = t.style;
		return (
			(i = i || Pt(t)) &&
				("" !== (r = i.getPropertyValue(e) || i[e]) ||
					st(t) ||
					(r = D.style(t, e)),
				!p.pixelBoxStyles() &&
					Nt.test(r) &&
					Bt.test(e) &&
					((n = a.width),
					(s = a.minWidth),
					(o = a.maxWidth),
					(a.minWidth = a.maxWidth = a.width = r),
					(r = i.width),
					(a.width = n),
					(a.minWidth = s),
					(a.maxWidth = o))),
			void 0 !== r ? r + "" : r
		);
	}

	function zt(t, e) {
		return {
			get: function () {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get;
			},
		};
	}
	!(function () {
		function e() {
			if (c) {
				(u.style.cssText =
					"position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
					(c.style.cssText =
						"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
					nt.appendChild(u).appendChild(c);
				var e = t.getComputedStyle(c);
				(n = "1%" !== e.top),
					(l = 12 === i(e.marginLeft)),
					(c.style.right = "60%"),
					(r = 36 === i(e.right)),
					(s = 36 === i(e.width)),
					(c.style.position = "absolute"),
					(o = 12 === i(c.offsetWidth / 3)),
					nt.removeChild(u),
					(c = null);
			}
		}

		function i(t) {
			return Math.round(parseFloat(t));
		}
		var n,
			s,
			o,
			r,
			a,
			l,
			u = m.createElement("div"),
			c = m.createElement("div");
		c.style &&
			((c.style.backgroundClip = "content-box"),
			(c.cloneNode(!0).style.backgroundClip = ""),
			(p.clearCloneStyle = "content-box" === c.style.backgroundClip),
			D.extend(p, {
				boxSizingReliable: function () {
					return e(), s;
				},
				pixelBoxStyles: function () {
					return e(), r;
				},
				pixelPosition: function () {
					return e(), n;
				},
				reliableMarginLeft: function () {
					return e(), l;
				},
				scrollboxSize: function () {
					return e(), o;
				},
				reliableTrDimensions: function () {
					var e, i, n, s;
					return (
						null == a &&
							((e = m.createElement("table")),
							(i = m.createElement("tr")),
							(n = m.createElement("div")),
							(e.style.cssText =
								"position:absolute;left:-11111px;border-collapse:separate"),
							(i.style.cssText = "border:1px solid"),
							(i.style.height = "1px"),
							(n.style.height = "9px"),
							(n.style.display = "block"),
							nt.appendChild(e).appendChild(i).appendChild(n),
							(s = t.getComputedStyle(i)),
							(a =
								parseInt(s.height, 10) +
									parseInt(s.borderTopWidth, 10) +
									parseInt(s.borderBottomWidth, 10) ===
								i.offsetHeight),
							nt.removeChild(e)),
						a
					);
				},
			}));
	})();
	var qt = ["Webkit", "Moz", "ms"],
		Ht = m.createElement("div").style,
		Rt = {};

	function Wt(t) {
		return (
			D.cssProps[t] ||
			Rt[t] ||
			(t in Ht
				? t
				: (Rt[t] =
						(function (t) {
							for (
								var e = t[0].toUpperCase() + t.slice(1), i = qt.length;
								i--;

							)
								if ((t = qt[i] + e) in Ht) return t;
						})(t) || t))
		);
	}
	var Xt = /^(none|table(?!-c[ea]).+)/,
		Yt = /^--/,
		Vt = {
			position: "absolute",
			visibility: "hidden",
			display: "block",
		},
		Ut = {
			letterSpacing: "0",
			fontWeight: "400",
		};

	function Gt(t, e, i) {
		var n = et.exec(e);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
	}

	function Qt(t, e, i, n, s, o) {
		var r = "width" === e ? 1 : 0,
			a = 0,
			l = 0;
		if (i === (n ? "border" : "content")) return 0;
		for (; r < 4; r += 2)
			"margin" === i && (l += D.css(t, i + it[r], !0, s)),
				n
					? ("content" === i && (l -= D.css(t, "padding" + it[r], !0, s)),
					  "margin" !== i &&
							(l -= D.css(t, "border" + it[r] + "Width", !0, s)))
					: ((l += D.css(t, "padding" + it[r], !0, s)),
					  "padding" !== i
							? (l += D.css(t, "border" + it[r] + "Width", !0, s))
							: (a += D.css(t, "border" + it[r] + "Width", !0, s)));
		return (
			!n &&
				0 <= o &&
				(l +=
					Math.max(
						0,
						Math.ceil(
							t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5
						)
					) || 0),
			l
		);
	}

	function Kt(t, e, i) {
		var n = Pt(t),
			s =
				(!p.boxSizingReliable() || i) &&
				"border-box" === D.css(t, "boxSizing", !1, n),
			o = s,
			r = jt(t, e, n),
			a = "offset" + e[0].toUpperCase() + e.slice(1);
		if (Nt.test(r)) {
			if (!i) return r;
			r = "auto";
		}
		return (
			((!p.boxSizingReliable() && s) ||
				(!p.reliableTrDimensions() && S(t, "tr")) ||
				"auto" === r ||
				(!parseFloat(r) && "inline" === D.css(t, "display", !1, n))) &&
				t.getClientRects().length &&
				((s = "border-box" === D.css(t, "boxSizing", !1, n)),
				(o = a in t) && (r = t[a])),
			(r = parseFloat(r) || 0) +
				Qt(t, e, i || (s ? "border" : "content"), o, n, r) +
				"px"
		);
	}

	function Zt(t, e, i, n, s) {
		return new Zt.prototype.init(t, e, i, n, s);
	}
	D.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var i = jt(t, "opacity");
						return "" === i ? "1" : i;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
		},
		cssProps: {},
		style: function (t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var s,
					o,
					r,
					a = Y(e),
					l = Yt.test(e),
					u = t.style;
				if (
					(l || (e = Wt(a)), (r = D.cssHooks[e] || D.cssHooks[a]), void 0 === i)
				)
					return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : u[e];
				"string" == (o = typeof i) &&
					(s = et.exec(i)) &&
					s[1] &&
					((i = at(t, e, s)), (o = "number")),
					null != i &&
						i == i &&
						("number" !== o ||
							l ||
							(i += (s && s[3]) || (D.cssNumber[a] ? "" : "px")),
						p.clearCloneStyle ||
							"" !== i ||
							0 !== e.indexOf("background") ||
							(u[e] = "inherit"),
						(r && "set" in r && void 0 === (i = r.set(t, i, n))) ||
							(l ? u.setProperty(e, i) : (u[e] = i)));
			}
		},
		css: function (t, e, i, n) {
			var s,
				o,
				r,
				a = Y(e);
			return (
				Yt.test(e) || (e = Wt(a)),
				(r = D.cssHooks[e] || D.cssHooks[a]) &&
					"get" in r &&
					(s = r.get(t, !0, i)),
				void 0 === s && (s = jt(t, e, n)),
				"normal" === s && e in Ut && (s = Ut[e]),
				"" === i || i
					? ((o = parseFloat(s)), !0 === i || isFinite(o) ? o || 0 : s)
					: s
			);
		},
	}),
		D.each(["height", "width"], function (t, e) {
			D.cssHooks[e] = {
				get: function (t, i, n) {
					if (i)
						return !Xt.test(D.css(t, "display")) ||
							(t.getClientRects().length && t.getBoundingClientRect().width)
							? Kt(t, e, n)
							: It(t, Vt, function () {
									return Kt(t, e, n);
							  });
				},
				set: function (t, i, n) {
					var s,
						o = Pt(t),
						r = !p.scrollboxSize() && "absolute" === o.position,
						a = (r || n) && "border-box" === D.css(t, "boxSizing", !1, o),
						l = n ? Qt(t, e, n, a, o) : 0;
					return (
						a &&
							r &&
							(l -= Math.ceil(
								t["offset" + e[0].toUpperCase() + e.slice(1)] -
									parseFloat(o[e]) -
									Qt(t, e, "border", !1, o) -
									0.5
							)),
						l &&
							(s = et.exec(i)) &&
							"px" !== (s[3] || "px") &&
							((t.style[e] = i), (i = D.css(t, e))),
						Gt(0, i, l)
					);
				},
			};
		}),
		(D.cssHooks.marginLeft = zt(p.reliableMarginLeft, function (t, e) {
			if (e)
				return (
					(parseFloat(jt(t, "marginLeft")) ||
						t.getBoundingClientRect().left -
							It(
								t,
								{
									marginLeft: 0,
								},
								function () {
									return t.getBoundingClientRect().left;
								}
							)) + "px"
				);
		})),
		D.each(
			{
				margin: "",
				padding: "",
				border: "Width",
			},
			function (t, e) {
				(D.cssHooks[t + e] = {
					expand: function (i) {
						for (
							var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
							n < 4;
							n++
						)
							s[t + it[n] + e] = o[n] || o[n - 2] || o[0];
						return s;
					},
				}),
					"margin" !== t && (D.cssHooks[t + e].set = Gt);
			}
		),
		D.fn.extend({
			css: function (t, e) {
				return H(
					this,
					function (t, e, i) {
						var n,
							s,
							o = {},
							r = 0;
						if (Array.isArray(e)) {
							for (n = Pt(t), s = e.length; r < s; r++)
								o[e[r]] = D.css(t, e[r], !1, n);
							return o;
						}
						return void 0 !== i ? D.style(t, e, i) : D.css(t, e);
					},
					t,
					e,
					1 < arguments.length
				);
			},
		}),
		(((D.Tween = Zt).prototype = {
			constructor: Zt,
			init: function (t, e, i, n, s, o) {
				(this.elem = t),
					(this.prop = i),
					(this.easing = s || D.easing._default),
					(this.options = e),
					(this.start = this.now = this.cur()),
					(this.end = n),
					(this.unit = o || (D.cssNumber[i] ? "" : "px"));
			},
			cur: function () {
				var t = Zt.propHooks[this.prop];
				return t && t.get ? t.get(this) : Zt.propHooks._default.get(this);
			},
			run: function (t) {
				var e,
					i = Zt.propHooks[this.prop];
				return (
					this.options.duration
						? (this.pos = e =
								D.easing[this.easing](
									t,
									this.options.duration * t,
									0,
									1,
									this.options.duration
								))
						: (this.pos = e = t),
					(this.now = (this.end - this.start) * e + this.start),
					this.options.step &&
						this.options.step.call(this.elem, this.now, this),
					i && i.set ? i.set(this) : Zt.propHooks._default.set(this),
					this
				);
			},
		}).init.prototype = Zt.prototype),
		((Zt.propHooks = {
			_default: {
				get: function (t) {
					var e;
					return 1 !== t.elem.nodeType ||
						(null != t.elem[t.prop] && null == t.elem.style[t.prop])
						? t.elem[t.prop]
						: (e = D.css(t.elem, t.prop, "")) && "auto" !== e
						? e
						: 0;
				},
				set: function (t) {
					D.fx.step[t.prop]
						? D.fx.step[t.prop](t)
						: 1 !== t.elem.nodeType ||
						  (!D.cssHooks[t.prop] && null == t.elem.style[Wt(t.prop)])
						? (t.elem[t.prop] = t.now)
						: D.style(t.elem, t.prop, t.now + t.unit);
				},
			},
		}).scrollTop = Zt.propHooks.scrollLeft =
			{
				set: function (t) {
					t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
				},
			}),
		(D.easing = {
			linear: function (t) {
				return t;
			},
			swing: function (t) {
				return 0.5 - Math.cos(t * Math.PI) / 2;
			},
			_default: "swing",
		}),
		(D.fx = Zt.prototype.init),
		(D.fx.step = {});
	var Jt,
		te,
		ee,
		ie,
		ne = /^(?:toggle|show|hide)$/,
		se = /queueHooks$/;

	function oe() {
		te &&
			(!1 === m.hidden && t.requestAnimationFrame
				? t.requestAnimationFrame(oe)
				: t.setTimeout(oe, D.fx.interval),
			D.fx.tick());
	}

	function re() {
		return (
			t.setTimeout(function () {
				Jt = void 0;
			}),
			(Jt = Date.now())
		);
	}

	function ae(t, e) {
		var i,
			n = 0,
			s = {
				height: t,
			};
		for (e = e ? 1 : 0; n < 4; n += 2 - e)
			s["margin" + (i = it[n])] = s["padding" + i] = t;
		return e && (s.opacity = s.width = t), s;
	}

	function le(t, e, i) {
		for (
			var n,
				s = (ue.tweeners[e] || []).concat(ue.tweeners["*"]),
				o = 0,
				r = s.length;
			o < r;
			o++
		)
			if ((n = s[o].call(i, e, t))) return n;
	}

	function ue(t, e, i) {
		var n,
			s,
			o = 0,
			r = ue.prefilters.length,
			a = D.Deferred().always(function () {
				delete l.elem;
			}),
			l = function () {
				if (s) return !1;
				for (
					var e = Jt || re(),
						i = Math.max(0, u.startTime + u.duration - e),
						n = 1 - (i / u.duration || 0),
						o = 0,
						r = u.tweens.length;
					o < r;
					o++
				)
					u.tweens[o].run(n);
				return (
					a.notifyWith(t, [u, n, i]),
					n < 1 && r
						? i
						: (r || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
				);
			},
			u = a.promise({
				elem: t,
				props: D.extend({}, e),
				opts: D.extend(
					!0,
					{
						specialEasing: {},
						easing: D.easing._default,
					},
					i
				),
				originalProperties: e,
				originalOptions: i,
				startTime: Jt || re(),
				duration: i.duration,
				tweens: [],
				createTween: function (e, i) {
					var n = D.Tween(
						t,
						u.opts,
						e,
						i,
						u.opts.specialEasing[e] || u.opts.easing
					);
					return u.tweens.push(n), n;
				},
				stop: function (e) {
					var i = 0,
						n = e ? u.tweens.length : 0;
					if (s) return this;
					for (s = !0; i < n; i++) u.tweens[i].run(1);
					return (
						e
							? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
							: a.rejectWith(t, [u, e]),
						this
					);
				},
			}),
			c = u.props;
		for (
			(function (t, e) {
				var i, n, s, o, r;
				for (i in t)
					if (
						((s = e[(n = Y(i))]),
						(o = t[i]),
						Array.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
						i !== n && ((t[n] = o), delete t[i]),
						(r = D.cssHooks[n]) && ("expand" in r))
					)
						for (i in ((o = r.expand(o)), delete t[n], o))
							(i in t) || ((t[i] = o[i]), (e[i] = s));
					else e[n] = s;
			})(c, u.opts.specialEasing);
			o < r;
			o++
		)
			if ((n = ue.prefilters[o].call(u, t, c, u.opts)))
				return (
					f(n.stop) &&
						(D._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
					n
				);
		return (
			D.map(c, le, u),
			f(u.opts.start) && u.opts.start.call(t, u),
			u
				.progress(u.opts.progress)
				.done(u.opts.done, u.opts.complete)
				.fail(u.opts.fail)
				.always(u.opts.always),
			D.fx.timer(
				D.extend(l, {
					elem: t,
					anim: u,
					queue: u.opts.queue,
				})
			),
			u
		);
	}
	(D.Animation = D.extend(ue, {
		tweeners: {
			"*": [
				function (t, e) {
					var i = this.createTween(t, e);
					return at(i.elem, t, et.exec(e), i), i;
				},
			],
		},
		tweener: function (t, e) {
			f(t) ? ((e = t), (t = ["*"])) : (t = t.match(N));
			for (var i, n = 0, s = t.length; n < s; n++)
				(i = t[n]),
					(ue.tweeners[i] = ue.tweeners[i] || []),
					ue.tweeners[i].unshift(e);
		},
		prefilters: [
			function (t, e, i) {
				var n,
					s,
					o,
					r,
					a,
					l,
					u,
					c,
					d = "width" in e || "height" in e,
					h = this,
					p = {},
					f = t.style,
					g = t.nodeType && rt(t),
					m = G.get(t, "fxshow");
				for (n in (i.queue ||
					(null == (r = D._queueHooks(t, "fx")).unqueued &&
						((r.unqueued = 0),
						(a = r.empty.fire),
						(r.empty.fire = function () {
							r.unqueued || a();
						})),
					r.unqueued++,
					h.always(function () {
						h.always(function () {
							r.unqueued--, D.queue(t, "fx").length || r.empty.fire();
						});
					})),
				e))
					if (((s = e[n]), ne.test(s))) {
						if (
							(delete e[n],
							(o = o || "toggle" === s),
							s === (g ? "hide" : "show"))
						) {
							if ("show" !== s || !m || void 0 === m[n]) continue;
							g = !0;
						}
						p[n] = (m && m[n]) || D.style(t, n);
					}
				if ((l = !D.isEmptyObject(e)) || !D.isEmptyObject(p))
					for (n in (d &&
						1 === t.nodeType &&
						((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
						null == (u = m && m.display) && (u = G.get(t, "display")),
						"none" === (c = D.css(t, "display")) &&
							(u
								? (c = u)
								: (ut([t], !0),
								  (u = t.style.display || u),
								  (c = D.css(t, "display")),
								  ut([t]))),
						("inline" === c || ("inline-block" === c && null != u)) &&
							"none" === D.css(t, "float") &&
							(l ||
								(h.done(function () {
									f.display = u;
								}),
								null == u && ((c = f.display), (u = "none" === c ? "" : c))),
							(f.display = "inline-block"))),
					i.overflow &&
						((f.overflow = "hidden"),
						h.always(function () {
							(f.overflow = i.overflow[0]),
								(f.overflowX = i.overflow[1]),
								(f.overflowY = i.overflow[2]);
						})),
					(l = !1),
					p))
						l ||
							(m
								? "hidden" in m && (g = m.hidden)
								: (m = G.access(t, "fxshow", {
										display: u,
								  })),
							o && (m.hidden = !g),
							g && ut([t], !0),
							h.done(function () {
								for (n in (g || ut([t]), G.remove(t, "fxshow"), p))
									D.style(t, n, p[n]);
							})),
							(l = le(g ? m[n] : 0, n, h)),
							n in m ||
								((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
			},
		],
		prefilter: function (t, e) {
			e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
		},
	})),
		(D.speed = function (t, e, i) {
			var n =
				t && "object" == typeof t
					? D.extend({}, t)
					: {
							complete: i || (!i && e) || (f(t) && t),
							duration: t,
							easing: (i && e) || (e && !f(e) && e),
					  };
			return (
				D.fx.off
					? (n.duration = 0)
					: "number" != typeof n.duration &&
					  (n.duration in D.fx.speeds
							? (n.duration = D.fx.speeds[n.duration])
							: (n.duration = D.fx.speeds._default)),
				(null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
				(n.old = n.complete),
				(n.complete = function () {
					f(n.old) && n.old.call(this), n.queue && D.dequeue(this, n.queue);
				}),
				n
			);
		}),
		D.fn.extend({
			fadeTo: function (t, e, i, n) {
				return this.filter(rt).css("opacity", 0).show().end().animate(
					{
						opacity: e,
					},
					t,
					i,
					n
				);
			},
			animate: function (t, e, i, n) {
				var s = D.isEmptyObject(t),
					o = D.speed(e, i, n),
					r = function () {
						var e = ue(this, D.extend({}, t), o);
						(s || G.get(this, "finish")) && e.stop(!0);
					};
				return (
					(r.finish = r),
					s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
				);
			},
			stop: function (t, e, i) {
				var n = function (t) {
					var e = t.stop;
					delete t.stop, e(i);
				};
				return (
					"string" != typeof t && ((i = e), (e = t), (t = void 0)),
					e && this.queue(t || "fx", []),
					this.each(function () {
						var e = !0,
							s = null != t && t + "queueHooks",
							o = D.timers,
							r = G.get(this);
						if (s) r[s] && r[s].stop && n(r[s]);
						else for (s in r) r[s] && r[s].stop && se.test(s) && n(r[s]);
						for (s = o.length; s--; )
							o[s].elem !== this ||
								(null != t && o[s].queue !== t) ||
								(o[s].anim.stop(i), (e = !1), o.splice(s, 1));
						(!e && i) || D.dequeue(this, t);
					})
				);
			},
			finish: function (t) {
				return (
					!1 !== t && (t = t || "fx"),
					this.each(function () {
						var e,
							i = G.get(this),
							n = i[t + "queue"],
							s = i[t + "queueHooks"],
							o = D.timers,
							r = n ? n.length : 0;
						for (
							i.finish = !0,
								D.queue(this, t, []),
								s && s.stop && s.stop.call(this, !0),
								e = o.length;
							e--;

						)
							o[e].elem === this &&
								o[e].queue === t &&
								(o[e].anim.stop(!0), o.splice(e, 1));
						for (e = 0; e < r; e++)
							n[e] && n[e].finish && n[e].finish.call(this);
						delete i.finish;
					})
				);
			},
		}),
		D.each(["toggle", "show", "hide"], function (t, e) {
			var i = D.fn[e];
			D.fn[e] = function (t, n, s) {
				return null == t || "boolean" == typeof t
					? i.apply(this, arguments)
					: this.animate(ae(e, !0), t, n, s);
			};
		}),
		D.each(
			{
				slideDown: ae("show"),
				slideUp: ae("hide"),
				slideToggle: ae("toggle"),
				fadeIn: {
					opacity: "show",
				},
				fadeOut: {
					opacity: "hide",
				},
				fadeToggle: {
					opacity: "toggle",
				},
			},
			function (t, e) {
				D.fn[t] = function (t, i, n) {
					return this.animate(e, t, i, n);
				};
			}
		),
		(D.timers = []),
		(D.fx.tick = function () {
			var t,
				e = 0,
				i = D.timers;
			for (Jt = Date.now(); e < i.length; e++)
				(t = i[e])() || i[e] !== t || i.splice(e--, 1);
			i.length || D.fx.stop(), (Jt = void 0);
		}),
		(D.fx.timer = function (t) {
			D.timers.push(t), D.fx.start();
		}),
		(D.fx.interval = 13),
		(D.fx.start = function () {
			te || ((te = !0), oe());
		}),
		(D.fx.stop = function () {
			te = null;
		}),
		(D.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400,
		}),
		(D.fn.delay = function (e, i) {
			return (
				(e = (D.fx && D.fx.speeds[e]) || e),
				(i = i || "fx"),
				this.queue(i, function (i, n) {
					var s = t.setTimeout(i, e);
					n.stop = function () {
						t.clearTimeout(s);
					};
				})
			);
		}),
		(ee = m.createElement("input")),
		(ie = m.createElement("select").appendChild(m.createElement("option"))),
		(ee.type = "checkbox"),
		(p.checkOn = "" !== ee.value),
		(p.optSelected = ie.selected),
		((ee = m.createElement("input")).value = "t"),
		(ee.type = "radio"),
		(p.radioValue = "t" === ee.value);
	var ce,
		de = D.expr.attrHandle;
	D.fn.extend({
		attr: function (t, e) {
			return H(this, D.attr, t, e, 1 < arguments.length);
		},
		removeAttr: function (t) {
			return this.each(function () {
				D.removeAttr(this, t);
			});
		},
	}),
		D.extend({
			attr: function (t, e, i) {
				var n,
					s,
					o = t.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return void 0 === t.getAttribute
						? D.prop(t, e, i)
						: ((1 === o && D.isXMLDoc(t)) ||
								(s =
									D.attrHooks[e.toLowerCase()] ||
									(D.expr.match.bool.test(e) ? ce : void 0)),
						  void 0 !== i
								? null === i
									? void D.removeAttr(t, e)
									: s && "set" in s && void 0 !== (n = s.set(t, i, e))
									? n
									: (t.setAttribute(e, i + ""), i)
								: s && "get" in s && null !== (n = s.get(t, e))
								? n
								: null == (n = D.find.attr(t, e))
								? void 0
								: n);
			},
			attrHooks: {
				type: {
					set: function (t, e) {
						if (!p.radioValue && "radio" === e && S(t, "input")) {
							var i = t.value;
							return t.setAttribute("type", e), i && (t.value = i), e;
						}
					},
				},
			},
			removeAttr: function (t, e) {
				var i,
					n = 0,
					s = e && e.match(N);
				if (s && 1 === t.nodeType) for (; (i = s[n++]); ) t.removeAttribute(i);
			},
		}),
		(ce = {
			set: function (t, e, i) {
				return !1 === e ? D.removeAttr(t, i) : t.setAttribute(i, i), i;
			},
		}),
		D.each(D.expr.match.bool.source.match(/\w+/g), function (t, e) {
			var i = de[e] || D.find.attr;
			de[e] = function (t, e, n) {
				var s,
					o,
					r = e.toLowerCase();
				return (
					n ||
						((o = de[r]),
						(de[r] = s),
						(s = null != i(t, e, n) ? r : null),
						(de[r] = o)),
					s
				);
			};
		});
	var he = /^(?:input|select|textarea|button)$/i,
		pe = /^(?:a|area)$/i;

	function fe(t) {
		return (t.match(N) || []).join(" ");
	}

	function ge(t) {
		return (t.getAttribute && t.getAttribute("class")) || "";
	}

	function me(t) {
		return Array.isArray(t) ? t : ("string" == typeof t && t.match(N)) || [];
	}
	D.fn.extend({
		prop: function (t, e) {
			return H(this, D.prop, t, e, 1 < arguments.length);
		},
		removeProp: function (t) {
			return this.each(function () {
				delete this[D.propFix[t] || t];
			});
		},
	}),
		D.extend({
			prop: function (t, e, i) {
				var n,
					s,
					o = t.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return (
						(1 === o && D.isXMLDoc(t)) ||
							((e = D.propFix[e] || e), (s = D.propHooks[e])),
						void 0 !== i
							? s && "set" in s && void 0 !== (n = s.set(t, i, e))
								? n
								: (t[e] = i)
							: s && "get" in s && null !== (n = s.get(t, e))
							? n
							: t[e]
					);
			},
			propHooks: {
				tabIndex: {
					get: function (t) {
						var e = D.find.attr(t, "tabindex");
						return e
							? parseInt(e, 10)
							: he.test(t.nodeName) || (pe.test(t.nodeName) && t.href)
							? 0
							: -1;
					},
				},
			},
			propFix: {
				for: "htmlFor",
				class: "className",
			},
		}),
		p.optSelected ||
			(D.propHooks.selected = {
				get: function (t) {
					var e = t.parentNode;
					return e && e.parentNode && e.parentNode.selectedIndex, null;
				},
				set: function (t) {
					var e = t.parentNode;
					e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
				},
			}),
		D.each(
			[
				"tabIndex",
				"readOnly",
				"maxLength",
				"cellSpacing",
				"cellPadding",
				"rowSpan",
				"colSpan",
				"useMap",
				"frameBorder",
				"contentEditable",
			],
			function () {
				D.propFix[this.toLowerCase()] = this;
			}
		),
		D.fn.extend({
			addClass: function (t) {
				var e,
					i,
					n,
					s,
					o,
					r,
					a,
					l = 0;
				if (f(t))
					return this.each(function (e) {
						D(this).addClass(t.call(this, e, ge(this)));
					});
				if ((e = me(t)).length)
					for (; (i = this[l++]); )
						if (((s = ge(i)), (n = 1 === i.nodeType && " " + fe(s) + " "))) {
							for (r = 0; (o = e[r++]); )
								n.indexOf(" " + o + " ") < 0 && (n += o + " ");
							s !== (a = fe(n)) && i.setAttribute("class", a);
						}
				return this;
			},
			removeClass: function (t) {
				var e,
					i,
					n,
					s,
					o,
					r,
					a,
					l = 0;
				if (f(t))
					return this.each(function (e) {
						D(this).removeClass(t.call(this, e, ge(this)));
					});
				if (!arguments.length) return this.attr("class", "");
				if ((e = me(t)).length)
					for (; (i = this[l++]); )
						if (((s = ge(i)), (n = 1 === i.nodeType && " " + fe(s) + " "))) {
							for (r = 0; (o = e[r++]); )
								for (; -1 < n.indexOf(" " + o + " "); )
									n = n.replace(" " + o + " ", " ");
							s !== (a = fe(n)) && i.setAttribute("class", a);
						}
				return this;
			},
			toggleClass: function (t, e) {
				var i = typeof t,
					n = "string" === i || Array.isArray(t);
				return "boolean" == typeof e && n
					? e
						? this.addClass(t)
						: this.removeClass(t)
					: f(t)
					? this.each(function (i) {
							D(this).toggleClass(t.call(this, i, ge(this), e), e);
					  })
					: this.each(function () {
							var e, s, o, r;
							if (n)
								for (s = 0, o = D(this), r = me(t); (e = r[s++]); )
									o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
							else
								(void 0 !== t && "boolean" !== i) ||
									((e = ge(this)) && G.set(this, "__className__", e),
									this.setAttribute &&
										this.setAttribute(
											"class",
											e || !1 === t ? "" : G.get(this, "__className__") || ""
										));
					  });
			},
			hasClass: function (t) {
				var e,
					i,
					n = 0;
				for (e = " " + t + " "; (i = this[n++]); )
					if (1 === i.nodeType && -1 < (" " + fe(ge(i)) + " ").indexOf(e))
						return !0;
				return !1;
			},
		});
	var ve = /\r/g;
	D.fn.extend({
		val: function (t) {
			var e,
				i,
				n,
				s = this[0];
			return arguments.length
				? ((n = f(t)),
				  this.each(function (i) {
						var s;
						1 === this.nodeType &&
							(null == (s = n ? t.call(this, i, D(this).val()) : t)
								? (s = "")
								: "number" == typeof s
								? (s += "")
								: Array.isArray(s) &&
								  (s = D.map(s, function (t) {
										return null == t ? "" : t + "";
								  })),
							((e =
								D.valHooks[this.type] ||
								D.valHooks[this.nodeName.toLowerCase()]) &&
								"set" in e &&
								void 0 !== e.set(this, s, "value")) ||
								(this.value = s));
				  }))
				: s
				? (e = D.valHooks[s.type] || D.valHooks[s.nodeName.toLowerCase()]) &&
				  "get" in e &&
				  void 0 !== (i = e.get(s, "value"))
					? i
					: "string" == typeof (i = s.value)
					? i.replace(ve, "")
					: null == i
					? ""
					: i
				: void 0;
		},
	}),
		D.extend({
			valHooks: {
				option: {
					get: function (t) {
						var e = D.find.attr(t, "value");
						return null != e ? e : fe(D.text(t));
					},
				},
				select: {
					get: function (t) {
						var e,
							i,
							n,
							s = t.options,
							o = t.selectedIndex,
							r = "select-one" === t.type,
							a = r ? null : [],
							l = r ? o + 1 : s.length;
						for (n = o < 0 ? l : r ? o : 0; n < l; n++)
							if (
								((i = s[n]).selected || n === o) &&
								!i.disabled &&
								(!i.parentNode.disabled || !S(i.parentNode, "optgroup"))
							) {
								if (((e = D(i).val()), r)) return e;
								a.push(e);
							}
						return a;
					},
					set: function (t, e) {
						for (
							var i, n, s = t.options, o = D.makeArray(e), r = s.length;
							r--;

						)
							((n = s[r]).selected =
								-1 < D.inArray(D.valHooks.option.get(n), o)) && (i = !0);
						return i || (t.selectedIndex = -1), o;
					},
				},
			},
		}),
		D.each(["radio", "checkbox"], function () {
			(D.valHooks[this] = {
				set: function (t, e) {
					if (Array.isArray(e))
						return (t.checked = -1 < D.inArray(D(t).val(), e));
				},
			}),
				p.checkOn ||
					(D.valHooks[this].get = function (t) {
						return null === t.getAttribute("value") ? "on" : t.value;
					});
		}),
		(p.focusin = "onfocusin" in t);
	var ye = /^(?:focusinfocus|focusoutblur)$/,
		_e = function (t) {
			t.stopPropagation();
		};
	D.extend(D.event, {
		trigger: function (e, i, n, s) {
			var o,
				r,
				a,
				l,
				u,
				d,
				h,
				p,
				v = [n || m],
				y = c.call(e, "type") ? e.type : e,
				_ = c.call(e, "namespace") ? e.namespace.split(".") : [];
			if (
				((r = p = a = n = n || m),
				3 !== n.nodeType &&
					8 !== n.nodeType &&
					!ye.test(y + D.event.triggered) &&
					(-1 < y.indexOf(".") && ((y = (_ = y.split(".")).shift()), _.sort()),
					(u = y.indexOf(":") < 0 && "on" + y),
					((e = e[D.expando]
						? e
						: new D.Event(y, "object" == typeof e && e)).isTrigger = s ? 2 : 3),
					(e.namespace = _.join(".")),
					(e.rnamespace = e.namespace
						? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)")
						: null),
					(e.result = void 0),
					e.target || (e.target = n),
					(i = null == i ? [e] : D.makeArray(i, [e])),
					(h = D.event.special[y] || {}),
					s || !h.trigger || !1 !== h.trigger.apply(n, i)))
			) {
				if (!s && !h.noBubble && !g(n)) {
					for (
						l = h.delegateType || y, ye.test(l + y) || (r = r.parentNode);
						r;
						r = r.parentNode
					)
						v.push(r), (a = r);
					a === (n.ownerDocument || m) &&
						v.push(a.defaultView || a.parentWindow || t);
				}
				for (o = 0; (r = v[o++]) && !e.isPropagationStopped(); )
					(p = r),
						(e.type = 1 < o ? l : h.bindType || y),
						(d =
							(G.get(r, "events") || Object.create(null))[e.type] &&
							G.get(r, "handle")) && d.apply(r, i),
						(d = u && r[u]) &&
							d.apply &&
							V(r) &&
							((e.result = d.apply(r, i)),
							!1 === e.result && e.preventDefault());
				return (
					(e.type = y),
					s ||
						e.isDefaultPrevented() ||
						(h._default && !1 !== h._default.apply(v.pop(), i)) ||
						!V(n) ||
						(u &&
							f(n[y]) &&
							!g(n) &&
							((a = n[u]) && (n[u] = null),
							(D.event.triggered = y),
							e.isPropagationStopped() && p.addEventListener(y, _e),
							n[y](),
							e.isPropagationStopped() && p.removeEventListener(y, _e),
							(D.event.triggered = void 0),
							a && (n[u] = a))),
					e.result
				);
			}
		},
		simulate: function (t, e, i) {
			var n = D.extend(new D.Event(), i, {
				type: t,
				isSimulated: !0,
			});
			D.event.trigger(n, null, e);
		},
	}),
		D.fn.extend({
			trigger: function (t, e) {
				return this.each(function () {
					D.event.trigger(t, e, this);
				});
			},
			triggerHandler: function (t, e) {
				var i = this[0];
				if (i) return D.event.trigger(t, e, i, !0);
			},
		}),
		p.focusin ||
			D.each(
				{
					focus: "focusin",
					blur: "focusout",
				},
				function (t, e) {
					var i = function (t) {
						D.event.simulate(e, t.target, D.event.fix(t));
					};
					D.event.special[e] = {
						setup: function () {
							var n = this.ownerDocument || this.document || this,
								s = G.access(n, e);
							s || n.addEventListener(t, i, !0), G.access(n, e, (s || 0) + 1);
						},
						teardown: function () {
							var n = this.ownerDocument || this.document || this,
								s = G.access(n, e) - 1;
							s
								? G.access(n, e, s)
								: (n.removeEventListener(t, i, !0), G.remove(n, e));
						},
					};
				}
			);
	var be = t.location,
		De = {
			guid: Date.now(),
		},
		we = /\?/;
	D.parseXML = function (e) {
		var i, n;
		if (!e || "string" != typeof e) return null;
		try {
			i = new t.DOMParser().parseFromString(e, "text/xml");
		} catch (e) {}
		return (
			(n = i && i.getElementsByTagName("parsererror")[0]),
			(i && !n) ||
				D.error(
					"Invalid XML: " +
						(n
							? D.map(n.childNodes, function (t) {
									return t.textContent;
							  }).join("\n")
							: e)
				),
			i
		);
	};
	var xe = /\[\]$/,
		Ce = /\r?\n/g,
		Te = /^(?:submit|button|image|reset|file)$/i,
		ke = /^(?:input|select|textarea|keygen)/i;

	function Se(t, e, i, n) {
		var s;
		if (Array.isArray(e))
			D.each(e, function (e, s) {
				i || xe.test(t)
					? n(t, s)
					: Se(
							t + "[" + ("object" == typeof s && null != s ? e : "") + "]",
							s,
							i,
							n
					  );
			});
		else if (i || "object" !== _(e)) n(t, e);
		else for (s in e) Se(t + "[" + s + "]", e[s], i, n);
	}
	(D.param = function (t, e) {
		var i,
			n = [],
			s = function (t, e) {
				var i = f(e) ? e() : e;
				n[n.length] =
					encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
			};
		if (null == t) return "";
		if (Array.isArray(t) || (t.jquery && !D.isPlainObject(t)))
			D.each(t, function () {
				s(this.name, this.value);
			});
		else for (i in t) Se(i, t[i], e, s);
		return n.join("&");
	}),
		D.fn.extend({
			serialize: function () {
				return D.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var t = D.prop(this, "elements");
					return t ? D.makeArray(t) : this;
				})
					.filter(function () {
						var t = this.type;
						return (
							this.name &&
							!D(this).is(":disabled") &&
							ke.test(this.nodeName) &&
							!Te.test(t) &&
							(this.checked || !ht.test(t))
						);
					})
					.map(function (t, e) {
						var i = D(this).val();
						return null == i
							? null
							: Array.isArray(i)
							? D.map(i, function (t) {
									return {
										name: e.name,
										value: t.replace(Ce, "\r\n"),
									};
							  })
							: {
									name: e.name,
									value: i.replace(Ce, "\r\n"),
							  };
					})
					.get();
			},
		});
	var Ee = /%20/g,
		Ae = /#.*$/,
		Fe = /([?&])_=[^&]*/,
		Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Oe = /^(?:GET|HEAD)$/,
		$e = /^\/\//,
		Me = {},
		Ne = {},
		Pe = "*/".concat("*"),
		Ie = m.createElement("a");

	function Be(t) {
		return function (e, i) {
			"string" != typeof e && ((i = e), (e = "*"));
			var n,
				s = 0,
				o = e.toLowerCase().match(N) || [];
			if (f(i))
				for (; (n = o[s++]); )
					"+" === n[0]
						? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
						: (t[n] = t[n] || []).push(i);
		};
	}

	function je(t, e, i, n) {
		var s = {},
			o = t === Ne;

		function r(a) {
			var l;
			return (
				(s[a] = !0),
				D.each(t[a] || [], function (t, a) {
					var u = a(e, i, n);
					return "string" != typeof u || o || s[u]
						? o
							? !(l = u)
							: void 0
						: (e.dataTypes.unshift(u), r(u), !1);
				}),
				l
			);
		}
		return r(e.dataTypes[0]) || (!s["*"] && r("*"));
	}

	function ze(t, e) {
		var i,
			n,
			s = D.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
		return n && D.extend(!0, t, n), t;
	}
	(Ie.href = be.href),
		D.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: be.href,
				type: "GET",
				isLocal:
					/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						be.protocol
					),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Pe,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript",
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/,
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON",
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": D.parseXML,
				},
				flatOptions: {
					url: !0,
					context: !0,
				},
			},
			ajaxSetup: function (t, e) {
				return e ? ze(ze(t, D.ajaxSettings), e) : ze(D.ajaxSettings, t);
			},
			ajaxPrefilter: Be(Me),
			ajaxTransport: Be(Ne),
			ajax: function (e, i) {
				"object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
				var n,
					s,
					o,
					r,
					a,
					l,
					u,
					c,
					d,
					h,
					p = D.ajaxSetup({}, i),
					f = p.context || p,
					g = p.context && (f.nodeType || f.jquery) ? D(f) : D.event,
					v = D.Deferred(),
					y = D.Callbacks("once memory"),
					_ = p.statusCode || {},
					b = {},
					w = {},
					x = "canceled",
					C = {
						readyState: 0,
						getResponseHeader: function (t) {
							var e;
							if (u) {
								if (!r)
									for (r = {}; (e = Le.exec(o)); )
										r[e[1].toLowerCase() + " "] = (
											r[e[1].toLowerCase() + " "] || []
										).concat(e[2]);
								e = r[t.toLowerCase() + " "];
							}
							return null == e ? null : e.join(", ");
						},
						getAllResponseHeaders: function () {
							return u ? o : null;
						},
						setRequestHeader: function (t, e) {
							return (
								null == u &&
									((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
									(b[t] = e)),
								this
							);
						},
						overrideMimeType: function (t) {
							return null == u && (p.mimeType = t), this;
						},
						statusCode: function (t) {
							var e;
							if (t)
								if (u) C.always(t[C.status]);
								else for (e in t) _[e] = [_[e], t[e]];
							return this;
						},
						abort: function (t) {
							var e = t || x;
							return n && n.abort(e), T(0, e), this;
						},
					};
				if (
					(v.promise(C),
					(p.url = ((e || p.url || be.href) + "").replace(
						$e,
						be.protocol + "//"
					)),
					(p.type = i.method || i.type || p.method || p.type),
					(p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [""]),
					null == p.crossDomain)
				) {
					l = m.createElement("a");
					try {
						(l.href = p.url),
							(l.href = l.href),
							(p.crossDomain =
								Ie.protocol + "//" + Ie.host != l.protocol + "//" + l.host);
					} catch (e) {
						p.crossDomain = !0;
					}
				}
				if (
					(p.data &&
						p.processData &&
						"string" != typeof p.data &&
						(p.data = D.param(p.data, p.traditional)),
					je(Me, p, i, C),
					u)
				)
					return C;
				for (d in ((c = D.event && p.global) &&
					0 == D.active++ &&
					D.event.trigger("ajaxStart"),
				(p.type = p.type.toUpperCase()),
				(p.hasContent = !Oe.test(p.type)),
				(s = p.url.replace(Ae, "")),
				p.hasContent
					? p.data &&
					  p.processData &&
					  0 ===
							(p.contentType || "").indexOf(
								"application/x-www-form-urlencoded"
							) &&
					  (p.data = p.data.replace(Ee, "+"))
					: ((h = p.url.slice(s.length)),
					  p.data &&
							(p.processData || "string" == typeof p.data) &&
							((s += (we.test(s) ? "&" : "?") + p.data), delete p.data),
					  !1 === p.cache &&
							((s = s.replace(Fe, "$1")),
							(h = (we.test(s) ? "&" : "?") + "_=" + De.guid++ + h)),
					  (p.url = s + h)),
				p.ifModified &&
					(D.lastModified[s] &&
						C.setRequestHeader("If-Modified-Since", D.lastModified[s]),
					D.etag[s] && C.setRequestHeader("If-None-Match", D.etag[s])),
				((p.data && p.hasContent && !1 !== p.contentType) || i.contentType) &&
					C.setRequestHeader("Content-Type", p.contentType),
				C.setRequestHeader(
					"Accept",
					p.dataTypes[0] && p.accepts[p.dataTypes[0]]
						? p.accepts[p.dataTypes[0]] +
								("*" !== p.dataTypes[0] ? ", " + Pe + "; q=0.01" : "")
						: p.accepts["*"]
				),
				p.headers))
					C.setRequestHeader(d, p.headers[d]);
				if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || u))
					return C.abort();
				if (
					((x = "abort"),
					y.add(p.complete),
					C.done(p.success),
					C.fail(p.error),
					(n = je(Ne, p, i, C)))
				) {
					if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, p]), u))
						return C;
					p.async &&
						0 < p.timeout &&
						(a = t.setTimeout(function () {
							C.abort("timeout");
						}, p.timeout));
					try {
						(u = !1), n.send(b, T);
					} catch (e) {
						if (u) throw e;
						T(-1, e);
					}
				} else T(-1, "No Transport");

				function T(e, i, r, l) {
					var d,
						h,
						m,
						b,
						w,
						x = i;
					u ||
						((u = !0),
						a && t.clearTimeout(a),
						(n = void 0),
						(o = l || ""),
						(C.readyState = 0 < e ? 4 : 0),
						(d = (200 <= e && e < 300) || 304 === e),
						r &&
							(b = (function (t, e, i) {
								for (
									var n, s, o, r, a = t.contents, l = t.dataTypes;
									"*" === l[0];

								)
									l.shift(),
										void 0 === n &&
											(n = t.mimeType || e.getResponseHeader("Content-Type"));
								if (n)
									for (s in a)
										if (a[s] && a[s].test(n)) {
											l.unshift(s);
											break;
										}
								if (l[0] in i) o = l[0];
								else {
									for (s in i) {
										if (!l[0] || t.converters[s + " " + l[0]]) {
											o = s;
											break;
										}
										r || (r = s);
									}
									o = o || r;
								}
								if (o) return o !== l[0] && l.unshift(o), i[o];
							})(p, C, r)),
						!d &&
							-1 < D.inArray("script", p.dataTypes) &&
							D.inArray("json", p.dataTypes) < 0 &&
							(p.converters["text script"] = function () {}),
						(b = (function (t, e, i, n) {
							var s,
								o,
								r,
								a,
								l,
								u = {},
								c = t.dataTypes.slice();
							if (c[1])
								for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
							for (o = c.shift(); o; )
								if (
									(t.responseFields[o] && (i[t.responseFields[o]] = e),
									!l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
									(l = o),
									(o = c.shift()))
								)
									if ("*" === o) o = l;
									else if ("*" !== l && l !== o) {
										if (!(r = u[l + " " + o] || u["* " + o]))
											for (s in u)
												if (
													(a = s.split(" "))[1] === o &&
													(r = u[l + " " + a[0]] || u["* " + a[0]])
												) {
													!0 === r
														? (r = u[s])
														: !0 !== u[s] && ((o = a[0]), c.unshift(a[1]));
													break;
												}
										if (!0 !== r)
											if (r && t.throws) e = r(e);
											else
												try {
													e = r(e);
												} catch (t) {
													return {
														state: "parsererror",
														error: r
															? t
															: "No conversion from " + l + " to " + o,
													};
												}
									}
							return {
								state: "success",
								data: e,
							};
						})(p, b, C, d)),
						d
							? (p.ifModified &&
									((w = C.getResponseHeader("Last-Modified")) &&
										(D.lastModified[s] = w),
									(w = C.getResponseHeader("etag")) && (D.etag[s] = w)),
							  204 === e || "HEAD" === p.type
									? (x = "nocontent")
									: 304 === e
									? (x = "notmodified")
									: ((x = b.state), (h = b.data), (d = !(m = b.error))))
							: ((m = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
						(C.status = e),
						(C.statusText = (i || x) + ""),
						d ? v.resolveWith(f, [h, x, C]) : v.rejectWith(f, [C, x, m]),
						C.statusCode(_),
						(_ = void 0),
						c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, p, d ? h : m]),
						y.fireWith(f, [C, x]),
						c &&
							(g.trigger("ajaxComplete", [C, p]),
							--D.active || D.event.trigger("ajaxStop")));
				}
				return C;
			},
			getJSON: function (t, e, i) {
				return D.get(t, e, i, "json");
			},
			getScript: function (t, e) {
				return D.get(t, void 0, e, "script");
			},
		}),
		D.each(["get", "post"], function (t, e) {
			D[e] = function (t, i, n, s) {
				return (
					f(i) && ((s = s || n), (n = i), (i = void 0)),
					D.ajax(
						D.extend(
							{
								url: t,
								type: e,
								dataType: s,
								data: i,
								success: n,
							},
							D.isPlainObject(t) && t
						)
					)
				);
			};
		}),
		D.ajaxPrefilter(function (t) {
			var e;
			for (e in t.headers)
				"content-type" === e.toLowerCase() &&
					(t.contentType = t.headers[e] || "");
		}),
		(D._evalUrl = function (t, e, i) {
			return D.ajax({
				url: t,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: {
					"text script": function () {},
				},
				dataFilter: function (t) {
					D.globalEval(t, e, i);
				},
			});
		}),
		D.fn.extend({
			wrapAll: function (t) {
				var e;
				return (
					this[0] &&
						(f(t) && (t = t.call(this[0])),
						(e = D(t, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && e.insertBefore(this[0]),
						e
							.map(function () {
								for (var t = this; t.firstElementChild; )
									t = t.firstElementChild;
								return t;
							})
							.append(this)),
					this
				);
			},
			wrapInner: function (t) {
				return f(t)
					? this.each(function (e) {
							D(this).wrapInner(t.call(this, e));
					  })
					: this.each(function () {
							var e = D(this),
								i = e.contents();
							i.length ? i.wrapAll(t) : e.append(t);
					  });
			},
			wrap: function (t) {
				var e = f(t);
				return this.each(function (i) {
					D(this).wrapAll(e ? t.call(this, i) : t);
				});
			},
			unwrap: function (t) {
				return (
					this.parent(t)
						.not("body")
						.each(function () {
							D(this).replaceWith(this.childNodes);
						}),
					this
				);
			},
		}),
		(D.expr.pseudos.hidden = function (t) {
			return !D.expr.pseudos.visible(t);
		}),
		(D.expr.pseudos.visible = function (t) {
			return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
		}),
		(D.ajaxSettings.xhr = function () {
			try {
				return new t.XMLHttpRequest();
			} catch (t) {}
		});
	var qe = {
			0: 200,
			1223: 204,
		},
		He = D.ajaxSettings.xhr();
	(p.cors = !!He && "withCredentials" in He),
		(p.ajax = He = !!He),
		D.ajaxTransport(function (e) {
			var i, n;
			if (p.cors || (He && !e.crossDomain))
				return {
					send: function (s, o) {
						var r,
							a = e.xhr();
						if (
							(a.open(e.type, e.url, e.async, e.username, e.password),
							e.xhrFields)
						)
							for (r in e.xhrFields) a[r] = e.xhrFields[r];
						for (r in (e.mimeType &&
							a.overrideMimeType &&
							a.overrideMimeType(e.mimeType),
						e.crossDomain ||
							s["X-Requested-With"] ||
							(s["X-Requested-With"] = "XMLHttpRequest"),
						s))
							a.setRequestHeader(r, s[r]);
						(i = function (t) {
							return function () {
								i &&
									((i =
										n =
										a.onload =
										a.onerror =
										a.onabort =
										a.ontimeout =
										a.onreadystatechange =
											null),
									"abort" === t
										? a.abort()
										: "error" === t
										? "number" != typeof a.status
											? o(0, "error")
											: o(a.status, a.statusText)
										: o(
												qe[a.status] || a.status,
												a.statusText,
												"text" !== (a.responseType || "text") ||
													"string" != typeof a.responseText
													? {
															binary: a.response,
													  }
													: {
															text: a.responseText,
													  },
												a.getAllResponseHeaders()
										  ));
							};
						}),
							(a.onload = i()),
							(n = a.onerror = a.ontimeout = i("error")),
							void 0 !== a.onabort
								? (a.onabort = n)
								: (a.onreadystatechange = function () {
										4 === a.readyState &&
											t.setTimeout(function () {
												i && n();
											});
								  }),
							(i = i("abort"));
						try {
							a.send((e.hasContent && e.data) || null);
						} catch (s) {
							if (i) throw s;
						}
					},
					abort: function () {
						i && i();
					},
				};
		}),
		D.ajaxPrefilter(function (t) {
			t.crossDomain && (t.contents.script = !1);
		}),
		D.ajaxSetup({
			accepts: {
				script:
					"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
			},
			contents: {
				script: /\b(?:java|ecma)script\b/,
			},
			converters: {
				"text script": function (t) {
					return D.globalEval(t), t;
				},
			},
		}),
		D.ajaxPrefilter("script", function (t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
		}),
		D.ajaxTransport("script", function (t) {
			var e, i;
			if (t.crossDomain || t.scriptAttrs)
				return {
					send: function (n, s) {
						(e = D("<script>")
							.attr(t.scriptAttrs || {})
							.prop({
								charset: t.scriptCharset,
								src: t.url,
							})
							.on(
								"load error",
								(i = function (t) {
									e.remove(),
										(i = null),
										t && s("error" === t.type ? 404 : 200, t.type);
								})
							)),
							m.head.appendChild(e[0]);
					},
					abort: function () {
						i && i();
					},
				};
		});
	var Re,
		We = [],
		Xe = /(=)\?(?=&|$)|\?\?/;
	D.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var t = We.pop() || D.expando + "_" + De.guid++;
			return (this[t] = !0), t;
		},
	}),
		D.ajaxPrefilter("json jsonp", function (e, i, n) {
			var s,
				o,
				r,
				a =
					!1 !== e.jsonp &&
					(Xe.test(e.url)
						? "url"
						: "string" == typeof e.data &&
						  0 ===
								(e.contentType || "").indexOf(
									"application/x-www-form-urlencoded"
								) &&
						  Xe.test(e.data) &&
						  "data");
			if (a || "jsonp" === e.dataTypes[0])
				return (
					(s = e.jsonpCallback =
						f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
					a
						? (e[a] = e[a].replace(Xe, "$1" + s))
						: !1 !== e.jsonp &&
						  (e.url += (we.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
					(e.converters["script json"] = function () {
						return r || D.error(s + " was not called"), r[0];
					}),
					(e.dataTypes[0] = "json"),
					(o = t[s]),
					(t[s] = function () {
						r = arguments;
					}),
					n.always(function () {
						void 0 === o ? D(t).removeProp(s) : (t[s] = o),
							e[s] && ((e.jsonpCallback = i.jsonpCallback), We.push(s)),
							r && f(o) && o(r[0]),
							(r = o = void 0);
					}),
					"script"
				);
		}),
		(p.createHTMLDocument =
			(((Re = m.implementation.createHTMLDocument("").body).innerHTML =
				"<form></form><form></form>"),
			2 === Re.childNodes.length)),
		(D.parseHTML = function (t, e, i) {
			return "string" != typeof t
				? []
				: ("boolean" == typeof e && ((i = e), (e = !1)),
				  e ||
						(p.createHTMLDocument
							? (((n = (e =
									m.implementation.createHTMLDocument("")).createElement(
									"base"
							  )).href = m.location.href),
							  e.head.appendChild(n))
							: (e = m)),
				  (o = !i && []),
				  (s = E.exec(t))
						? [e.createElement(s[1])]
						: ((s = _t([t], e, o)),
						  o && o.length && D(o).remove(),
						  D.merge([], s.childNodes)));
			var n, s, o;
		}),
		(D.fn.load = function (t, e, i) {
			var n,
				s,
				o,
				r = this,
				a = t.indexOf(" ");
			return (
				-1 < a && ((n = fe(t.slice(a))), (t = t.slice(0, a))),
				f(e)
					? ((i = e), (e = void 0))
					: e && "object" == typeof e && (s = "POST"),
				0 < r.length &&
					D.ajax({
						url: t,
						type: s || "GET",
						dataType: "html",
						data: e,
					})
						.done(function (t) {
							(o = arguments),
								r.html(n ? D("<div>").append(D.parseHTML(t)).find(n) : t);
						})
						.always(
							i &&
								function (t, e) {
									r.each(function () {
										i.apply(this, o || [t.responseText, e, t]);
									});
								}
						),
				this
			);
		}),
		(D.expr.pseudos.animated = function (t) {
			return D.grep(D.timers, function (e) {
				return t === e.elem;
			}).length;
		}),
		(D.offset = {
			setOffset: function (t, e, i) {
				var n,
					s,
					o,
					r,
					a,
					l,
					u = D.css(t, "position"),
					c = D(t),
					d = {};
				"static" === u && (t.style.position = "relative"),
					(a = c.offset()),
					(o = D.css(t, "top")),
					(l = D.css(t, "left")),
					("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto")
						? ((r = (n = c.position()).top), (s = n.left))
						: ((r = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
					f(e) && (e = e.call(t, i, D.extend({}, a))),
					null != e.top && (d.top = e.top - a.top + r),
					null != e.left && (d.left = e.left - a.left + s),
					"using" in e ? e.using.call(t, d) : c.css(d);
			},
		}),
		D.fn.extend({
			offset: function (t) {
				if (arguments.length)
					return void 0 === t
						? this
						: this.each(function (e) {
								D.offset.setOffset(this, t, e);
						  });
				var e,
					i,
					n = this[0];
				return n
					? n.getClientRects().length
						? ((e = n.getBoundingClientRect()),
						  (i = n.ownerDocument.defaultView),
						  {
								top: e.top + i.pageYOffset,
								left: e.left + i.pageXOffset,
						  })
						: {
								top: 0,
								left: 0,
						  }
					: void 0;
			},
			position: function () {
				if (this[0]) {
					var t,
						e,
						i,
						n = this[0],
						s = {
							top: 0,
							left: 0,
						};
					if ("fixed" === D.css(n, "position")) e = n.getBoundingClientRect();
					else {
						for (
							e = this.offset(),
								i = n.ownerDocument,
								t = n.offsetParent || i.documentElement;
							t &&
							(t === i.body || t === i.documentElement) &&
							"static" === D.css(t, "position");

						)
							t = t.parentNode;
						t &&
							t !== n &&
							1 === t.nodeType &&
							(((s = D(t).offset()).top += D.css(t, "borderTopWidth", !0)),
							(s.left += D.css(t, "borderLeftWidth", !0)));
					}
					return {
						top: e.top - s.top - D.css(n, "marginTop", !0),
						left: e.left - s.left - D.css(n, "marginLeft", !0),
					};
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (
						var t = this.offsetParent;
						t && "static" === D.css(t, "position");

					)
						t = t.offsetParent;
					return t || nt;
				});
			},
		}),
		D.each(
			{
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset",
			},
			function (t, e) {
				var i = "pageYOffset" === e;
				D.fn[t] = function (n) {
					return H(
						this,
						function (t, n, s) {
							var o;
							if (
								(g(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
								void 0 === s)
							)
								return o ? o[e] : t[n];
							o
								? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset)
								: (t[n] = s);
						},
						t,
						n,
						arguments.length
					);
				};
			}
		),
		D.each(["top", "left"], function (t, e) {
			D.cssHooks[e] = zt(p.pixelPosition, function (t, i) {
				if (i)
					return (i = jt(t, e)), Nt.test(i) ? D(t).position()[e] + "px" : i;
			});
		}),
		D.each(
			{
				Height: "height",
				Width: "width",
			},
			function (t, e) {
				D.each(
					{
						padding: "inner" + t,
						content: e,
						"": "outer" + t,
					},
					function (i, n) {
						D.fn[n] = function (s, o) {
							var r = arguments.length && (i || "boolean" != typeof s),
								a = i || (!0 === s || !0 === o ? "margin" : "border");
							return H(
								this,
								function (e, i, s) {
									var o;
									return g(e)
										? 0 === n.indexOf("outer")
											? e["inner" + t]
											: e.document.documentElement["client" + t]
										: 9 === e.nodeType
										? ((o = e.documentElement),
										  Math.max(
												e.body["scroll" + t],
												o["scroll" + t],
												e.body["offset" + t],
												o["offset" + t],
												o["client" + t]
										  ))
										: void 0 === s
										? D.css(e, i, a)
										: D.style(e, i, s, a);
								},
								e,
								r ? s : void 0,
								r
							);
						};
					}
				);
			}
		),
		D.each(
			[
				"ajaxStart",
				"ajaxStop",
				"ajaxComplete",
				"ajaxError",
				"ajaxSuccess",
				"ajaxSend",
			],
			function (t, e) {
				D.fn[e] = function (t) {
					return this.on(e, t);
				};
			}
		),
		D.fn.extend({
			bind: function (t, e, i) {
				return this.on(t, null, e, i);
			},
			unbind: function (t, e) {
				return this.off(t, null, e);
			},
			delegate: function (t, e, i, n) {
				return this.on(e, t, i, n);
			},
			undelegate: function (t, e, i) {
				return 1 === arguments.length
					? this.off(t, "**")
					: this.off(e, t || "**", i);
			},
			hover: function (t, e) {
				return this.mouseenter(t).mouseleave(e || t);
			},
		}),
		D.each(
			"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
				" "
			),
			function (t, e) {
				D.fn[e] = function (t, i) {
					return 0 < arguments.length
						? this.on(e, null, t, i)
						: this.trigger(e);
				};
			}
		);
	var Ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	(D.proxy = function (t, e) {
		var i, n, o;
		if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), f(t)))
			return (
				(n = s.call(arguments, 2)),
				((o = function () {
					return t.apply(e || this, n.concat(s.call(arguments)));
				}).guid = t.guid =
					t.guid || D.guid++),
				o
			);
	}),
		(D.holdReady = function (t) {
			t ? D.readyWait++ : D.ready(!0);
		}),
		(D.isArray = Array.isArray),
		(D.parseJSON = JSON.parse),
		(D.nodeName = S),
		(D.isFunction = f),
		(D.isWindow = g),
		(D.camelCase = Y),
		(D.type = _),
		(D.now = Date.now),
		(D.isNumeric = function (t) {
			var e = D.type(t);
			return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
		}),
		(D.trim = function (t) {
			return null == t ? "" : (t + "").replace(Ye, "");
		}),
		"function" == typeof define &&
			define.amd &&
			define("jquery", [], function () {
				return D;
			});
	var Ve = t.jQuery,
		Ue = t.$;
	return (
		(D.noConflict = function (e) {
			return t.$ === D && (t.$ = Ue), e && t.jQuery === D && (t.jQuery = Ve), D;
		}),
		void 0 === e && (t.jQuery = t.$ = D),
		D
	);
}),
	(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? (module.exports = e(require("@popperjs/core")))
			: "function" == typeof define && define.amd
			? define(["@popperjs/core"], e)
			: ((t =
					"undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
					e(t.Popper));
	})(this, function (t) {
		"use strict";
		var e = (function (t) {
			if (t && t.__esModule) return t;
			var e = Object.create(null);
			return (
				t &&
					Object.keys(t).forEach(function (i) {
						if ("default" !== i) {
							var n = Object.getOwnPropertyDescriptor(t, i);
							Object.defineProperty(
								e,
								i,
								n.get
									? n
									: {
											enumerable: !0,
											get: function () {
												return t[i];
											},
									  }
							);
						}
					}),
				(e.default = t),
				Object.freeze(e)
			);
		})(t);
		const i = (t) => {
				do {
					t += Math.floor(1e6 * Math.random());
				} while (document.getElementById(t));
				return t;
			},
			n = (t) => {
				let e = t.getAttribute("data-bs-target");
				if (!e || "#" === e) {
					let i = t.getAttribute("href");
					if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
					i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
						(e = i && "#" !== i ? i.trim() : null);
				}
				return e;
			},
			s = (t) => {
				const e = n(t);
				return e && document.querySelector(e) ? e : null;
			},
			o = (t) => {
				const e = n(t);
				return e ? document.querySelector(e) : null;
			},
			r = (t) => {
				if (!t) return 0;
				let { transitionDuration: e, transitionDelay: i } =
					window.getComputedStyle(t);
				const n = Number.parseFloat(e),
					s = Number.parseFloat(i);
				return n || s
					? ((e = e.split(",")[0]),
					  (i = i.split(",")[0]),
					  1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
					: 0;
			},
			a = (t) => {
				t.dispatchEvent(new Event("transitionend"));
			},
			l = (t) => (t[0] || t).nodeType,
			u = (t, e) => {
				let i = !1;
				const n = e + 5;
				t.addEventListener("transitionend", function e() {
					(i = !0), t.removeEventListener("transitionend", e);
				}),
					setTimeout(() => {
						i || a(t);
					}, n);
			},
			c = (t, e, i) => {
				Object.keys(i).forEach((n) => {
					const s = i[n],
						o = e[n],
						r =
							o && l(o)
								? "element"
								: null == (a = o)
								? "" + a
								: {}.toString
										.call(a)
										.match(/\s([a-z]+)/i)[1]
										.toLowerCase();
					var a;
					if (!new RegExp(s).test(r))
						throw new TypeError(
							t.toUpperCase() +
								": " +
								`Option "${n}" provided type "${r}" ` +
								`but expected type "${s}".`
						);
				});
			},
			d = (t) => {
				if (!t) return !1;
				if (t.style && t.parentNode && t.parentNode.style) {
					const e = getComputedStyle(t),
						i = getComputedStyle(t.parentNode);
					return (
						"none" !== e.display &&
						"none" !== i.display &&
						"hidden" !== e.visibility
					);
				}
				return !1;
			},
			h = (t) =>
				!t ||
				t.nodeType !== Node.ELEMENT_NODE ||
				!!t.classList.contains("disabled") ||
				(void 0 !== t.disabled
					? t.disabled
					: t.hasAttribute("disabled") &&
					  "false" !== t.getAttribute("disabled")),
			p = (t) => {
				if (!document.documentElement.attachShadow) return null;
				if ("function" == typeof t.getRootNode) {
					const e = t.getRootNode();
					return e instanceof ShadowRoot ? e : null;
				}
				return t instanceof ShadowRoot
					? t
					: t.parentNode
					? p(t.parentNode)
					: null;
			},
			f = () => function () {},
			g = (t) => t.offsetHeight,
			m = () => {
				const { jQuery: t } = window;
				return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
			},
			v = () => "rtl" === document.documentElement.dir,
			y = (t, e) => {
				var i;
				(i = () => {
					const i = m();
					if (i) {
						const n = i.fn[t];
						(i.fn[t] = e.jQueryInterface),
							(i.fn[t].Constructor = e),
							(i.fn[t].noConflict = () => ((i.fn[t] = n), e.jQueryInterface));
					}
				}),
					"loading" === document.readyState
						? document.addEventListener("DOMContentLoaded", i)
						: i();
			},
			_ = new Map();
		var b = {
			set(t, e, i) {
				_.has(t) || _.set(t, new Map());
				const n = _.get(t);
				n.has(e) || 0 === n.size
					? n.set(e, i)
					: console.error(
							`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
								Array.from(n.keys())[0]
							}.`
					  );
			},
			get: (t, e) => (_.has(t) && _.get(t).get(e)) || null,
			remove(t, e) {
				if (!_.has(t)) return;
				const i = _.get(t);
				i.delete(e), 0 === i.size && _.delete(t);
			},
		};
		const D = /[^.]*(?=\..*)\.|.*/,
			w = /\..*/,
			x = /::\d+$/,
			C = {};
		let T = 1;
		const k = {
				mouseenter: "mouseover",
				mouseleave: "mouseout",
			},
			S = new Set([
				"click",
				"dblclick",
				"mouseup",
				"mousedown",
				"contextmenu",
				"mousewheel",
				"DOMMouseScroll",
				"mouseover",
				"mouseout",
				"mousemove",
				"selectstart",
				"selectend",
				"keydown",
				"keypress",
				"keyup",
				"orientationchange",
				"touchstart",
				"touchmove",
				"touchend",
				"touchcancel",
				"pointerdown",
				"pointermove",
				"pointerup",
				"pointerleave",
				"pointercancel",
				"gesturestart",
				"gesturechange",
				"gestureend",
				"focus",
				"blur",
				"change",
				"reset",
				"select",
				"submit",
				"focusin",
				"focusout",
				"load",
				"unload",
				"beforeunload",
				"resize",
				"move",
				"DOMContentLoaded",
				"readystatechange",
				"error",
				"abort",
				"scroll",
			]);

		function E(t, e) {
			return (e && `${e}::${T++}`) || t.uidEvent || T++;
		}

		function A(t) {
			const e = E(t);
			return (t.uidEvent = e), (C[e] = C[e] || {}), C[e];
		}

		function F(t, e, i = null) {
			const n = Object.keys(t);
			for (let s = 0, o = n.length; s < o; s++) {
				const o = t[n[s]];
				if (o.originalHandler === e && o.delegationSelector === i) return o;
			}
			return null;
		}

		function L(t, e, i) {
			const n = "string" == typeof e,
				s = n ? i : e;
			let o = t.replace(w, "");
			const r = k[o];
			return r && (o = r), S.has(o) || (o = t), [n, s, o];
		}

		function O(t, e, i, n, s) {
			if ("string" != typeof e || !t) return;
			i || ((i = n), (n = null));
			const [o, r, a] = L(e, i, n),
				l = A(t),
				u = l[a] || (l[a] = {}),
				c = F(u, r, o ? i : null);
			if (c) return void (c.oneOff = c.oneOff && s);
			const d = E(r, e.replace(D, "")),
				h = o
					? (function (t, e, i) {
							return function n(s) {
								const o = t.querySelectorAll(e);
								for (let { target: e } = s; e && e !== this; e = e.parentNode)
									for (let r = o.length; r--; )
										if (o[r] === e)
											return (
												(s.delegateTarget = e),
												n.oneOff && M.off(t, s.type, i),
												i.apply(e, [s])
											);
								return null;
							};
					  })(t, i, n)
					: (function (t, e) {
							return function i(n) {
								return (
									(n.delegateTarget = t),
									i.oneOff && M.off(t, n.type, e),
									e.apply(t, [n])
								);
							};
					  })(t, i);
			(h.delegationSelector = o ? i : null),
				(h.originalHandler = r),
				(h.oneOff = s),
				(h.uidEvent = d),
				(u[d] = h),
				t.addEventListener(a, h, o);
		}

		function $(t, e, i, n, s) {
			const o = F(e[i], n, s);
			o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
		}
		const M = {
			on(t, e, i, n) {
				O(t, e, i, n, !1);
			},
			one(t, e, i, n) {
				O(t, e, i, n, !0);
			},
			off(t, e, i, n) {
				if ("string" != typeof e || !t) return;
				const [s, o, r] = L(e, i, n),
					a = r !== e,
					l = A(t),
					u = e.startsWith(".");
				if (void 0 !== o) {
					if (!l || !l[r]) return;
					return void $(t, l, r, o, s ? i : null);
				}
				u &&
					Object.keys(l).forEach((i) => {
						!(function (t, e, i, n) {
							const s = e[i] || {};
							Object.keys(s).forEach((o) => {
								if (o.includes(n)) {
									const n = s[o];
									$(t, e, i, n.originalHandler, n.delegationSelector);
								}
							});
						})(t, l, i, e.slice(1));
					});
				const c = l[r] || {};
				Object.keys(c).forEach((i) => {
					const n = i.replace(x, "");
					if (!a || e.includes(n)) {
						const e = c[i];
						$(t, l, r, e.originalHandler, e.delegationSelector);
					}
				});
			},
			trigger(t, e, i) {
				if ("string" != typeof e || !t) return null;
				const n = m(),
					s = e.replace(w, ""),
					o = e !== s,
					r = S.has(s);
				let a,
					l = !0,
					u = !0,
					c = !1,
					d = null;
				return (
					o &&
						n &&
						((a = n.Event(e, i)),
						n(t).trigger(a),
						(l = !a.isPropagationStopped()),
						(u = !a.isImmediatePropagationStopped()),
						(c = a.isDefaultPrevented())),
					r
						? (d = document.createEvent("HTMLEvents")).initEvent(s, l, !0)
						: (d = new CustomEvent(e, {
								bubbles: l,
								cancelable: !0,
						  })),
					void 0 !== i &&
						Object.keys(i).forEach((t) => {
							Object.defineProperty(d, t, {
								get: () => i[t],
							});
						}),
					c && d.preventDefault(),
					u && t.dispatchEvent(d),
					d.defaultPrevented && void 0 !== a && a.preventDefault(),
					d
				);
			},
		};
		class N {
			constructor(t) {
				(t = "string" == typeof t ? document.querySelector(t) : t) &&
					((this._element = t),
					b.set(this._element, this.constructor.DATA_KEY, this));
			}
			dispose() {
				b.remove(this._element, this.constructor.DATA_KEY),
					(this._element = null);
			}
			static getInstance(t) {
				return b.get(t, this.DATA_KEY);
			}
			static get VERSION() {
				return "5.0.0-beta3";
			}
		}
		class P extends N {
			static get DATA_KEY() {
				return "bs.alert";
			}
			close(t) {
				const e = t ? this._getRootElement(t) : this._element,
					i = this._triggerCloseEvent(e);
				null === i || i.defaultPrevented || this._removeElement(e);
			}
			_getRootElement(t) {
				return o(t) || t.closest(".alert");
			}
			_triggerCloseEvent(t) {
				return M.trigger(t, "close.bs.alert");
			}
			_removeElement(t) {
				if ((t.classList.remove("show"), !t.classList.contains("fade")))
					return void this._destroyElement(t);
				const e = r(t);
				M.one(t, "transitionend", () => this._destroyElement(t)), u(t, e);
			}
			_destroyElement(t) {
				t.parentNode && t.parentNode.removeChild(t),
					M.trigger(t, "closed.bs.alert");
			}
			static jQueryInterface(t) {
				return this.each(function () {
					let e = b.get(this, "bs.alert");
					e || (e = new P(this)), "close" === t && e[t](this);
				});
			}
			static handleDismiss(t) {
				return function (e) {
					e && e.preventDefault(), t.close(this);
				};
			}
		}
		M.on(
			document,
			"click.bs.alert.data-api",
			'[data-bs-dismiss="alert"]',
			P.handleDismiss(new P())
		),
			y("alert", P);
		class I extends N {
			static get DATA_KEY() {
				return "bs.button";
			}
			toggle() {
				this._element.setAttribute(
					"aria-pressed",
					this._element.classList.toggle("active")
				);
			}
			static jQueryInterface(t) {
				return this.each(function () {
					let e = b.get(this, "bs.button");
					e || (e = new I(this)), "toggle" === t && e[t]();
				});
			}
		}

		function B(t) {
			return (
				"true" === t ||
				("false" !== t &&
					(t === Number(t).toString()
						? Number(t)
						: "" === t || "null" === t
						? null
						: t))
			);
		}

		function j(t) {
			return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
		}
		M.on(
			document,
			"click.bs.button.data-api",
			'[data-bs-toggle="button"]',
			(t) => {
				t.preventDefault();
				const e = t.target.closest('[data-bs-toggle="button"]');
				let i = b.get(e, "bs.button");
				i || (i = new I(e)), i.toggle();
			}
		),
			y("button", I);
		const z = {
				setDataAttribute(t, e, i) {
					t.setAttribute("data-bs-" + j(e), i);
				},
				removeDataAttribute(t, e) {
					t.removeAttribute("data-bs-" + j(e));
				},
				getDataAttributes(t) {
					if (!t) return {};
					const e = {};
					return (
						Object.keys(t.dataset)
							.filter((t) => t.startsWith("bs"))
							.forEach((i) => {
								let n = i.replace(/^bs/, "");
								(n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
									(e[n] = B(t.dataset[i]));
							}),
						e
					);
				},
				getDataAttribute: (t, e) => B(t.getAttribute("data-bs-" + j(e))),
				offset(t) {
					const e = t.getBoundingClientRect();
					return {
						top: e.top + document.body.scrollTop,
						left: e.left + document.body.scrollLeft,
					};
				},
				position: (t) => ({
					top: t.offsetTop,
					left: t.offsetLeft,
				}),
			},
			q = {
				find: (t, e = document.documentElement) =>
					[].concat(...Element.prototype.querySelectorAll.call(e, t)),
				findOne: (t, e = document.documentElement) =>
					Element.prototype.querySelector.call(e, t),
				children: (t, e) =>
					[].concat(...t.children).filter((t) => t.matches(e)),
				parents(t, e) {
					const i = [];
					let n = t.parentNode;
					for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
						n.matches(e) && i.push(n), (n = n.parentNode);
					return i;
				},
				prev(t, e) {
					let i = t.previousElementSibling;
					for (; i; ) {
						if (i.matches(e)) return [i];
						i = i.previousElementSibling;
					}
					return [];
				},
				next(t, e) {
					let i = t.nextElementSibling;
					for (; i; ) {
						if (i.matches(e)) return [i];
						i = i.nextElementSibling;
					}
					return [];
				},
			},
			H = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0,
			},
			R = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean",
			},
			W = "next",
			X = "prev",
			Y = "left",
			V = "right";
		class U extends N {
			constructor(t, e) {
				super(t),
					(this._items = null),
					(this._interval = null),
					(this._activeElement = null),
					(this._isPaused = !1),
					(this._isSliding = !1),
					(this.touchTimeout = null),
					(this.touchStartX = 0),
					(this.touchDeltaX = 0),
					(this._config = this._getConfig(e)),
					(this._indicatorsElement = q.findOne(
						".carousel-indicators",
						this._element
					)),
					(this._touchSupported =
						"ontouchstart" in document.documentElement ||
						navigator.maxTouchPoints > 0),
					(this._pointerEvent = Boolean(window.PointerEvent)),
					this._addEventListeners();
			}
			static get Default() {
				return H;
			}
			static get DATA_KEY() {
				return "bs.carousel";
			}
			next() {
				this._isSliding || this._slide(W);
			}
			nextWhenVisible() {
				!document.hidden && d(this._element) && this.next();
			}
			prev() {
				this._isSliding || this._slide(X);
			}
			pause(t) {
				t || (this._isPaused = !0),
					q.findOne(
						".carousel-item-next, .carousel-item-prev",
						this._element
					) && (a(this._element), this.cycle(!0)),
					clearInterval(this._interval),
					(this._interval = null);
			}
			cycle(t) {
				t || (this._isPaused = !1),
					this._interval &&
						(clearInterval(this._interval), (this._interval = null)),
					this._config &&
						this._config.interval &&
						!this._isPaused &&
						(this._updateInterval(),
						(this._interval = setInterval(
							(document.visibilityState
								? this.nextWhenVisible
								: this.next
							).bind(this),
							this._config.interval
						)));
			}
			to(t) {
				this._activeElement = q.findOne(".active.carousel-item", this._element);
				const e = this._getItemIndex(this._activeElement);
				if (t > this._items.length - 1 || t < 0) return;
				if (this._isSliding)
					return void M.one(this._element, "slid.bs.carousel", () =>
						this.to(t)
					);
				if (e === t) return this.pause(), void this.cycle();
				const i = t > e ? W : X;
				this._slide(i, this._items[t]);
			}
			dispose() {
				M.off(this._element, ".bs.carousel"),
					(this._items = null),
					(this._config = null),
					(this._interval = null),
					(this._isPaused = null),
					(this._isSliding = null),
					(this._activeElement = null),
					(this._indicatorsElement = null),
					super.dispose();
			}
			_getConfig(t) {
				return (t = { ...H, ...t }), c("carousel", t, R), t;
			}
			_handleSwipe() {
				const t = Math.abs(this.touchDeltaX);
				if (t <= 40) return;
				const e = t / this.touchDeltaX;
				(this.touchDeltaX = 0), e && this._slide(e > 0 ? V : Y);
			}
			_addEventListeners() {
				this._config.keyboard &&
					M.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
					"hover" === this._config.pause &&
						(M.on(this._element, "mouseenter.bs.carousel", (t) =>
							this.pause(t)
						),
						M.on(this._element, "mouseleave.bs.carousel", (t) =>
							this.cycle(t)
						)),
					this._config.touch &&
						this._touchSupported &&
						this._addTouchEventListeners();
			}
			_addTouchEventListeners() {
				const t = (t) => {
						!this._pointerEvent ||
						("pen" !== t.pointerType && "touch" !== t.pointerType)
							? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
							: (this.touchStartX = t.clientX);
					},
					e = (t) => {
						this.touchDeltaX =
							t.touches && t.touches.length > 1
								? 0
								: t.touches[0].clientX - this.touchStartX;
					},
					i = (t) => {
						!this._pointerEvent ||
							("pen" !== t.pointerType && "touch" !== t.pointerType) ||
							(this.touchDeltaX = t.clientX - this.touchStartX),
							this._handleSwipe(),
							"hover" === this._config.pause &&
								(this.pause(),
								this.touchTimeout && clearTimeout(this.touchTimeout),
								(this.touchTimeout = setTimeout(
									(t) => this.cycle(t),
									500 + this._config.interval
								)));
					};
				q.find(".carousel-item img", this._element).forEach((t) => {
					M.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
				}),
					this._pointerEvent
						? (M.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
						  M.on(this._element, "pointerup.bs.carousel", (t) => i(t)),
						  this._element.classList.add("pointer-event"))
						: (M.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
						  M.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
						  M.on(this._element, "touchend.bs.carousel", (t) => i(t)));
			}
			_keydown(t) {
				/input|textarea/i.test(t.target.tagName) ||
					("ArrowLeft" === t.key
						? (t.preventDefault(), this._slide(Y))
						: "ArrowRight" === t.key && (t.preventDefault(), this._slide(V)));
			}
			_getItemIndex(t) {
				return (
					(this._items =
						t && t.parentNode ? q.find(".carousel-item", t.parentNode) : []),
					this._items.indexOf(t)
				);
			}
			_getItemByOrder(t, e) {
				const i = t === W,
					n = t === X,
					s = this._getItemIndex(e),
					o = this._items.length - 1;
				if (((n && 0 === s) || (i && s === o)) && !this._config.wrap) return e;
				const r = (s + (n ? -1 : 1)) % this._items.length;
				return -1 === r ? this._items[this._items.length - 1] : this._items[r];
			}
			_triggerSlideEvent(t, e) {
				const i = this._getItemIndex(t),
					n = this._getItemIndex(
						q.findOne(".active.carousel-item", this._element)
					);
				return M.trigger(this._element, "slide.bs.carousel", {
					relatedTarget: t,
					direction: e,
					from: n,
					to: i,
				});
			}
			_setActiveIndicatorElement(t) {
				if (this._indicatorsElement) {
					const e = q.findOne(".active", this._indicatorsElement);
					e.classList.remove("active"), e.removeAttribute("aria-current");
					const i = q.find("[data-bs-target]", this._indicatorsElement);
					for (let e = 0; e < i.length; e++)
						if (
							Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
							this._getItemIndex(t)
						) {
							i[e].classList.add("active"),
								i[e].setAttribute("aria-current", "true");
							break;
						}
				}
			}
			_updateInterval() {
				const t =
					this._activeElement ||
					q.findOne(".active.carousel-item", this._element);
				if (!t) return;
				const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
				e
					? ((this._config.defaultInterval =
							this._config.defaultInterval || this._config.interval),
					  (this._config.interval = e))
					: (this._config.interval =
							this._config.defaultInterval || this._config.interval);
			}
			_slide(t, e) {
				const i = this._directionToOrder(t),
					n = q.findOne(".active.carousel-item", this._element),
					s = this._getItemIndex(n),
					o = e || this._getItemByOrder(i, n),
					a = this._getItemIndex(o),
					l = Boolean(this._interval),
					c = i === W,
					d = c ? "carousel-item-start" : "carousel-item-end",
					h = c ? "carousel-item-next" : "carousel-item-prev",
					p = this._orderToDirection(i);
				if (o && o.classList.contains("active")) this._isSliding = !1;
				else if (!this._triggerSlideEvent(o, p).defaultPrevented && n && o) {
					if (
						((this._isSliding = !0),
						l && this.pause(),
						this._setActiveIndicatorElement(o),
						(this._activeElement = o),
						this._element.classList.contains("slide"))
					) {
						o.classList.add(h), g(o), n.classList.add(d), o.classList.add(d);
						const t = r(n);
						M.one(n, "transitionend", () => {
							o.classList.remove(d, h),
								o.classList.add("active"),
								n.classList.remove("active", h, d),
								(this._isSliding = !1),
								setTimeout(() => {
									M.trigger(this._element, "slid.bs.carousel", {
										relatedTarget: o,
										direction: p,
										from: s,
										to: a,
									});
								}, 0);
						}),
							u(n, t);
					} else
						n.classList.remove("active"),
							o.classList.add("active"),
							(this._isSliding = !1),
							M.trigger(this._element, "slid.bs.carousel", {
								relatedTarget: o,
								direction: p,
								from: s,
								to: a,
							});
					l && this.cycle();
				}
			}
			_directionToOrder(t) {
				return [V, Y].includes(t)
					? v()
						? t === V
							? X
							: W
						: t === V
						? W
						: X
					: t;
			}
			_orderToDirection(t) {
				return [W, X].includes(t)
					? v()
						? t === W
							? Y
							: V
						: t === W
						? V
						: Y
					: t;
			}
			static carouselInterface(t, e) {
				let i = b.get(t, "bs.carousel"),
					n = { ...H, ...z.getDataAttributes(t) };
				"object" == typeof e && (n = { ...n, ...e });
				const s = "string" == typeof e ? e : n.slide;
				if ((i || (i = new U(t, n)), "number" == typeof e)) i.to(e);
				else if ("string" == typeof s) {
					if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
					i[s]();
				} else n.interval && n.ride && (i.pause(), i.cycle());
			}
			static jQueryInterface(t) {
				return this.each(function () {
					U.carouselInterface(this, t);
				});
			}
			static dataApiClickHandler(t) {
				const e = o(this);
				if (!e || !e.classList.contains("carousel")) return;
				const i = { ...z.getDataAttributes(e), ...z.getDataAttributes(this) },
					n = this.getAttribute("data-bs-slide-to");
				n && (i.interval = !1),
					U.carouselInterface(e, i),
					n && b.get(e, "bs.carousel").to(n),
					t.preventDefault();
			}
		}
		M.on(
			document,
			"click.bs.carousel.data-api",
			"[data-bs-slide], [data-bs-slide-to]",
			U.dataApiClickHandler
		),
			M.on(window, "load.bs.carousel.data-api", () => {
				const t = q.find('[data-bs-ride="carousel"]');
				for (let e = 0, i = t.length; e < i; e++)
					U.carouselInterface(t[e], b.get(t[e], "bs.carousel"));
			}),
			y("carousel", U);
		const G = {
				toggle: !0,
				parent: "",
			},
			Q = {
				toggle: "boolean",
				parent: "(string|element)",
			};
		class K extends N {
			constructor(t, e) {
				super(t),
					(this._isTransitioning = !1),
					(this._config = this._getConfig(e)),
					(this._triggerArray = q.find(
						`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
					));
				const i = q.find('[data-bs-toggle="collapse"]');
				for (let t = 0, e = i.length; t < e; t++) {
					const e = i[t],
						n = s(e),
						o = q.find(n).filter((t) => t === this._element);
					null !== n &&
						o.length &&
						((this._selector = n), this._triggerArray.push(e));
				}
				(this._parent = this._config.parent ? this._getParent() : null),
					this._config.parent ||
						this._addAriaAndCollapsedClass(this._element, this._triggerArray),
					this._config.toggle && this.toggle();
			}
			static get Default() {
				return G;
			}
			static get DATA_KEY() {
				return "bs.collapse";
			}
			toggle() {
				this._element.classList.contains("show") ? this.hide() : this.show();
			}
			show() {
				if (this._isTransitioning || this._element.classList.contains("show"))
					return;
				let t, e;
				this._parent &&
					0 ===
						(t = q
							.find(".show, .collapsing", this._parent)
							.filter((t) =>
								"string" == typeof this._config.parent
									? t.getAttribute("data-bs-parent") === this._config.parent
									: t.classList.contains("collapse")
							)).length &&
					(t = null);
				const i = q.findOne(this._selector);
				if (t) {
					const n = t.find((t) => i !== t);
					if ((e = n ? b.get(n, "bs.collapse") : null) && e._isTransitioning)
						return;
				}
				if (M.trigger(this._element, "show.bs.collapse").defaultPrevented)
					return;
				t &&
					t.forEach((t) => {
						i !== t && K.collapseInterface(t, "hide"),
							e || b.set(t, "bs.collapse", null);
					});
				const n = this._getDimension();
				this._element.classList.remove("collapse"),
					this._element.classList.add("collapsing"),
					(this._element.style[n] = 0),
					this._triggerArray.length &&
						this._triggerArray.forEach((t) => {
							t.classList.remove("collapsed"),
								t.setAttribute("aria-expanded", !0);
						}),
					this.setTransitioning(!0);
				const s = "scroll" + (n[0].toUpperCase() + n.slice(1)),
					o = r(this._element);
				M.one(this._element, "transitionend", () => {
					this._element.classList.remove("collapsing"),
						this._element.classList.add("collapse", "show"),
						(this._element.style[n] = ""),
						this.setTransitioning(!1),
						M.trigger(this._element, "shown.bs.collapse");
				}),
					u(this._element, o),
					(this._element.style[n] = this._element[s] + "px");
			}
			hide() {
				if (this._isTransitioning || !this._element.classList.contains("show"))
					return;
				if (M.trigger(this._element, "hide.bs.collapse").defaultPrevented)
					return;
				const t = this._getDimension();
				(this._element.style[t] =
					this._element.getBoundingClientRect()[t] + "px"),
					g(this._element),
					this._element.classList.add("collapsing"),
					this._element.classList.remove("collapse", "show");
				const e = this._triggerArray.length;
				if (e > 0)
					for (let t = 0; t < e; t++) {
						const e = this._triggerArray[t],
							i = o(e);
						i &&
							!i.classList.contains("show") &&
							(e.classList.add("collapsed"),
							e.setAttribute("aria-expanded", !1));
					}
				this.setTransitioning(!0), (this._element.style[t] = "");
				const i = r(this._element);
				M.one(this._element, "transitionend", () => {
					this.setTransitioning(!1),
						this._element.classList.remove("collapsing"),
						this._element.classList.add("collapse"),
						M.trigger(this._element, "hidden.bs.collapse");
				}),
					u(this._element, i);
			}
			setTransitioning(t) {
				this._isTransitioning = t;
			}
			dispose() {
				super.dispose(),
					(this._config = null),
					(this._parent = null),
					(this._triggerArray = null),
					(this._isTransitioning = null);
			}
			_getConfig(t) {
				return (
					((t = { ...G, ...t }).toggle = Boolean(t.toggle)),
					c("collapse", t, Q),
					t
				);
			}
			_getDimension() {
				return this._element.classList.contains("width") ? "width" : "height";
			}
			_getParent() {
				let { parent: t } = this._config;
				l(t)
					? (void 0 === t.jquery && void 0 === t[0]) || (t = t[0])
					: (t = q.findOne(t));
				const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
				return (
					q.find(e, t).forEach((t) => {
						const e = o(t);
						this._addAriaAndCollapsedClass(e, [t]);
					}),
					t
				);
			}
			_addAriaAndCollapsedClass(t, e) {
				if (!t || !e.length) return;
				const i = t.classList.contains("show");
				e.forEach((t) => {
					i ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
						t.setAttribute("aria-expanded", i);
				});
			}
			static collapseInterface(t, e) {
				let i = b.get(t, "bs.collapse");
				const n = {
					...G,
					...z.getDataAttributes(t),
					...("object" == typeof e && e ? e : {}),
				};
				if (
					(!i &&
						n.toggle &&
						"string" == typeof e &&
						/show|hide/.test(e) &&
						(n.toggle = !1),
					i || (i = new K(t, n)),
					"string" == typeof e)
				) {
					if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
					i[e]();
				}
			}
			static jQueryInterface(t) {
				return this.each(function () {
					K.collapseInterface(this, t);
				});
			}
		}
		M.on(
			document,
			"click.bs.collapse.data-api",
			'[data-bs-toggle="collapse"]',
			function (t) {
				("A" === t.target.tagName ||
					(t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
					t.preventDefault();
				const e = z.getDataAttributes(this),
					i = s(this);
				q.find(i).forEach((t) => {
					const i = b.get(t, "bs.collapse");
					let n;
					i
						? (null === i._parent &&
								"string" == typeof e.parent &&
								((i._config.parent = e.parent), (i._parent = i._getParent())),
						  (n = "toggle"))
						: (n = e),
						K.collapseInterface(t, n);
				});
			}
		),
			y("collapse", K);
		const Z = new RegExp("ArrowUp|ArrowDown|Escape"),
			J = v() ? "top-end" : "top-start",
			tt = v() ? "top-start" : "top-end",
			et = v() ? "bottom-end" : "bottom-start",
			it = v() ? "bottom-start" : "bottom-end",
			nt = v() ? "left-start" : "right-start",
			st = v() ? "right-start" : "left-start",
			ot = {
				offset: [0, 2],
				boundary: "clippingParents",
				reference: "toggle",
				display: "dynamic",
				popperConfig: null,
			},
			rt = {
				offset: "(array|string|function)",
				boundary: "(string|element)",
				reference: "(string|element|object)",
				display: "string",
				popperConfig: "(null|object|function)",
			};
		class at extends N {
			constructor(t, e) {
				super(t),
					(this._popper = null),
					(this._config = this._getConfig(e)),
					(this._menu = this._getMenuElement()),
					(this._inNavbar = this._detectNavbar()),
					this._addEventListeners();
			}
			static get Default() {
				return ot;
			}
			static get DefaultType() {
				return rt;
			}
			static get DATA_KEY() {
				return "bs.dropdown";
			}
			toggle() {
				if (
					this._element.disabled ||
					this._element.classList.contains("disabled")
				)
					return;
				const t = this._element.classList.contains("show");
				at.clearMenus(), t || this.show();
			}
			show() {
				if (
					this._element.disabled ||
					this._element.classList.contains("disabled") ||
					this._menu.classList.contains("show")
				)
					return;
				const t = at.getParentFromElement(this._element),
					i = {
						relatedTarget: this._element,
					};
				if (!M.trigger(this._element, "show.bs.dropdown", i).defaultPrevented) {
					if (this._inNavbar) z.setDataAttribute(this._menu, "popper", "none");
					else {
						if (void 0 === e)
							throw new TypeError(
								"Bootstrap's dropdowns require Popper (https://popper.js.org)"
							);
						let i = this._element;
						"parent" === this._config.reference
							? (i = t)
							: l(this._config.reference)
							? ((i = this._config.reference),
							  void 0 !== this._config.reference.jquery &&
									(i = this._config.reference[0]))
							: "object" == typeof this._config.reference &&
							  (i = this._config.reference);
						const n = this._getPopperConfig(),
							s = n.modifiers.find(
								(t) => "applyStyles" === t.name && !1 === t.enabled
							);
						(this._popper = e.createPopper(i, this._menu, n)),
							s && z.setDataAttribute(this._menu, "popper", "static");
					}
					"ontouchstart" in document.documentElement &&
						!t.closest(".navbar-nav") &&
						[]
							.concat(...document.body.children)
							.forEach((t) => M.on(t, "mouseover", null, function () {})),
						this._element.focus(),
						this._element.setAttribute("aria-expanded", !0),
						this._menu.classList.toggle("show"),
						this._element.classList.toggle("show"),
						M.trigger(this._element, "shown.bs.dropdown", i);
				}
			}
			hide() {
				if (
					this._element.disabled ||
					this._element.classList.contains("disabled") ||
					!this._menu.classList.contains("show")
				)
					return;
				const t = {
					relatedTarget: this._element,
				};
				M.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
					(this._popper && this._popper.destroy(),
					this._menu.classList.toggle("show"),
					this._element.classList.toggle("show"),
					z.removeDataAttribute(this._menu, "popper"),
					M.trigger(this._element, "hidden.bs.dropdown", t));
			}
			dispose() {
				M.off(this._element, ".bs.dropdown"),
					(this._menu = null),
					this._popper && (this._popper.destroy(), (this._popper = null)),
					super.dispose();
			}
			update() {
				(this._inNavbar = this._detectNavbar()),
					this._popper && this._popper.update();
			}
			_addEventListeners() {
				M.on(this._element, "click.bs.dropdown", (t) => {
					t.preventDefault(), this.toggle();
				});
			}
			_getConfig(t) {
				if (
					((t = {
						...this.constructor.Default,
						...z.getDataAttributes(this._element),
						...t,
					}),
					c("dropdown", t, this.constructor.DefaultType),
					"object" == typeof t.reference &&
						!l(t.reference) &&
						"function" != typeof t.reference.getBoundingClientRect)
				)
					throw new TypeError(
						"dropdown".toUpperCase() +
							': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
					);
				return t;
			}
			_getMenuElement() {
				return q.next(this._element, ".dropdown-menu")[0];
			}
			_getPlacement() {
				const t = this._element.parentNode;
				if (t.classList.contains("dropend")) return nt;
				if (t.classList.contains("dropstart")) return st;
				const e =
					"end" ===
					getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
				return t.classList.contains("dropup") ? (e ? tt : J) : e ? it : et;
			}
			_detectNavbar() {
				return null !== this._element.closest(".navbar");
			}
			_getOffset() {
				const { offset: t } = this._config;
				return "string" == typeof t
					? t.split(",").map((t) => Number.parseInt(t, 10))
					: "function" == typeof t
					? (e) => t(e, this._element)
					: t;
			}
			_getPopperConfig() {
				const t = {
					placement: this._getPlacement(),
					modifiers: [
						{
							name: "preventOverflow",
							options: {
								boundary: this._config.boundary,
							},
						},
						{
							name: "offset",
							options: {
								offset: this._getOffset(),
							},
						},
					],
				};
				return (
					"static" === this._config.display &&
						(t.modifiers = [
							{
								name: "applyStyles",
								enabled: !1,
							},
						]),
					{
						...t,
						...("function" == typeof this._config.popperConfig
							? this._config.popperConfig(t)
							: this._config.popperConfig),
					}
				);
			}
			static dropdownInterface(t, e) {
				let i = b.get(t, "bs.dropdown");
				if (
					(i || (i = new at(t, "object" == typeof e ? e : null)),
					"string" == typeof e)
				) {
					if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
					i[e]();
				}
			}
			static jQueryInterface(t) {
				return this.each(function () {
					at.dropdownInterface(this, t);
				});
			}
			static clearMenus(t) {
				if (t) {
					if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
					if (/input|select|textarea|form/i.test(t.target.tagName)) return;
				}
				const e = q.find('[data-bs-toggle="dropdown"]');
				for (let i = 0, n = e.length; i < n; i++) {
					const n = b.get(e[i], "bs.dropdown"),
						s = {
							relatedTarget: e[i],
						};
					if ((t && "click" === t.type && (s.clickEvent = t), !n)) continue;
					const o = n._menu;
					if (e[i].classList.contains("show")) {
						if (t) {
							if ([n._element].some((e) => t.composedPath().includes(e)))
								continue;
							if ("keyup" === t.type && "Tab" === t.key && o.contains(t.target))
								continue;
						}
						M.trigger(e[i], "hide.bs.dropdown", s).defaultPrevented ||
							("ontouchstart" in document.documentElement &&
								[]
									.concat(...document.body.children)
									.forEach((t) => M.off(t, "mouseover", null, function () {})),
							e[i].setAttribute("aria-expanded", "false"),
							n._popper && n._popper.destroy(),
							o.classList.remove("show"),
							e[i].classList.remove("show"),
							z.removeDataAttribute(o, "popper"),
							M.trigger(e[i], "hidden.bs.dropdown", s));
					}
				}
			}
			static getParentFromElement(t) {
				return o(t) || t.parentNode;
			}
			static dataApiKeydownHandler(t) {
				if (
					/input|textarea/i.test(t.target.tagName)
						? "Space" === t.key ||
						  ("Escape" !== t.key &&
								(("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
									t.target.closest(".dropdown-menu")))
						: !Z.test(t.key)
				)
					return;
				if (
					(t.preventDefault(),
					t.stopPropagation(),
					this.disabled || this.classList.contains("disabled"))
				)
					return;
				const e = at.getParentFromElement(this),
					i = this.classList.contains("show");
				if ("Escape" === t.key)
					return (
						(this.matches('[data-bs-toggle="dropdown"]')
							? this
							: q.prev(this, '[data-bs-toggle="dropdown"]')[0]
						).focus(),
						void at.clearMenus()
					);
				if (!i && ("ArrowUp" === t.key || "ArrowDown" === t.key))
					return void (
						this.matches('[data-bs-toggle="dropdown"]')
							? this
							: q.prev(this, '[data-bs-toggle="dropdown"]')[0]
					).click();
				if (!i || "Space" === t.key) return void at.clearMenus();
				const n = q
					.find(
						".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
						e
					)
					.filter(d);
				if (!n.length) return;
				let s = n.indexOf(t.target);
				"ArrowUp" === t.key && s > 0 && s--,
					"ArrowDown" === t.key && s < n.length - 1 && s++,
					n[(s = -1 === s ? 0 : s)].focus();
			}
		}
		M.on(
			document,
			"keydown.bs.dropdown.data-api",
			'[data-bs-toggle="dropdown"]',
			at.dataApiKeydownHandler
		),
			M.on(
				document,
				"keydown.bs.dropdown.data-api",
				".dropdown-menu",
				at.dataApiKeydownHandler
			),
			M.on(document, "click.bs.dropdown.data-api", at.clearMenus),
			M.on(document, "keyup.bs.dropdown.data-api", at.clearMenus),
			M.on(
				document,
				"click.bs.dropdown.data-api",
				'[data-bs-toggle="dropdown"]',
				function (t) {
					t.preventDefault(), at.dropdownInterface(this);
				}
			),
			y("dropdown", at);
		const lt = {
				backdrop: !0,
				keyboard: !0,
				focus: !0,
			},
			ut = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
			};
		class ct extends N {
			constructor(t, e) {
				super(t),
					(this._config = this._getConfig(e)),
					(this._dialog = q.findOne(".modal-dialog", this._element)),
					(this._backdrop = null),
					(this._isShown = !1),
					(this._isBodyOverflowing = !1),
					(this._ignoreBackdropClick = !1),
					(this._isTransitioning = !1),
					(this._scrollbarWidth = 0);
			}
			static get Default() {
				return lt;
			}
			static get DATA_KEY() {
				return "bs.modal";
			}
			toggle(t) {
				return this._isShown ? this.hide() : this.show(t);
			}
			show(t) {
				if (this._isShown || this._isTransitioning) return;
				this._isAnimated() && (this._isTransitioning = !0);
				const e = M.trigger(this._element, "show.bs.modal", {
					relatedTarget: t,
				});
				this._isShown ||
					e.defaultPrevented ||
					((this._isShown = !0),
					this._checkScrollbar(),
					this._setScrollbar(),
					this._adjustDialog(),
					this._setEscapeEvent(),
					this._setResizeEvent(),
					M.on(
						this._element,
						"click.dismiss.bs.modal",
						'[data-bs-dismiss="modal"]',
						(t) => this.hide(t)
					),
					M.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
						M.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
							t.target === this._element && (this._ignoreBackdropClick = !0);
						});
					}),
					this._showBackdrop(() => this._showElement(t)));
			}
			hide(t) {
				if ((t && t.preventDefault(), !this._isShown || this._isTransitioning))
					return;
				if (M.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
				this._isShown = !1;
				const e = this._isAnimated();
				if (
					(e && (this._isTransitioning = !0),
					this._setEscapeEvent(),
					this._setResizeEvent(),
					M.off(document, "focusin.bs.modal"),
					this._element.classList.remove("show"),
					M.off(this._element, "click.dismiss.bs.modal"),
					M.off(this._dialog, "mousedown.dismiss.bs.modal"),
					e)
				) {
					const t = r(this._element);
					M.one(this._element, "transitionend", (t) => this._hideModal(t)),
						u(this._element, t);
				} else this._hideModal();
			}
			dispose() {
				[window, this._element, this._dialog].forEach((t) =>
					M.off(t, ".bs.modal")
				),
					super.dispose(),
					M.off(document, "focusin.bs.modal"),
					(this._config = null),
					(this._dialog = null),
					(this._backdrop = null),
					(this._isShown = null),
					(this._isBodyOverflowing = null),
					(this._ignoreBackdropClick = null),
					(this._isTransitioning = null),
					(this._scrollbarWidth = null);
			}
			handleUpdate() {
				this._adjustDialog();
			}
			_getConfig(t) {
				return (t = { ...lt, ...t }), c("modal", t, ut), t;
			}
			_showElement(t) {
				const e = this._isAnimated(),
					i = q.findOne(".modal-body", this._dialog);
				(this._element.parentNode &&
					this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
					document.body.appendChild(this._element),
					(this._element.style.display = "block"),
					this._element.removeAttribute("aria-hidden"),
					this._element.setAttribute("aria-modal", !0),
					this._element.setAttribute("role", "dialog"),
					(this._element.scrollTop = 0),
					i && (i.scrollTop = 0),
					e && g(this._element),
					this._element.classList.add("show"),
					this._config.focus && this._enforceFocus();
				const n = () => {
					this._config.focus && this._element.focus(),
						(this._isTransitioning = !1),
						M.trigger(this._element, "shown.bs.modal", {
							relatedTarget: t,
						});
				};
				if (e) {
					const t = r(this._dialog);
					M.one(this._dialog, "transitionend", n), u(this._dialog, t);
				} else n();
			}
			_enforceFocus() {
				M.off(document, "focusin.bs.modal"),
					M.on(document, "focusin.bs.modal", (t) => {
						document === t.target ||
							this._element === t.target ||
							this._element.contains(t.target) ||
							this._element.focus();
					});
			}
			_setEscapeEvent() {
				this._isShown
					? M.on(this._element, "keydown.dismiss.bs.modal", (t) => {
							this._config.keyboard && "Escape" === t.key
								? (t.preventDefault(), this.hide())
								: this._config.keyboard ||
								  "Escape" !== t.key ||
								  this._triggerBackdropTransition();
					  })
					: M.off(this._element, "keydown.dismiss.bs.modal");
			}
			_setResizeEvent() {
				this._isShown
					? M.on(window, "resize.bs.modal", () => this._adjustDialog())
					: M.off(window, "resize.bs.modal");
			}
			_hideModal() {
				(this._element.style.display = "none"),
					this._element.setAttribute("aria-hidden", !0),
					this._element.removeAttribute("aria-modal"),
					this._element.removeAttribute("role"),
					(this._isTransitioning = !1),
					this._showBackdrop(() => {
						document.body.classList.remove("modal-open"),
							this._resetAdjustments(),
							this._resetScrollbar(),
							M.trigger(this._element, "hidden.bs.modal");
					});
			}
			_removeBackdrop() {
				this._backdrop.parentNode.removeChild(this._backdrop),
					(this._backdrop = null);
			}
			_showBackdrop(t) {
				const e = this._isAnimated();
				if (this._isShown && this._config.backdrop) {
					if (
						((this._backdrop = document.createElement("div")),
						(this._backdrop.className = "modal-backdrop"),
						e && this._backdrop.classList.add("fade"),
						document.body.appendChild(this._backdrop),
						M.on(this._element, "click.dismiss.bs.modal", (t) => {
							this._ignoreBackdropClick
								? (this._ignoreBackdropClick = !1)
								: t.target === t.currentTarget &&
								  ("static" === this._config.backdrop
										? this._triggerBackdropTransition()
										: this.hide());
						}),
						e && g(this._backdrop),
						this._backdrop.classList.add("show"),
						!e)
					)
						return void t();
					const i = r(this._backdrop);
					M.one(this._backdrop, "transitionend", t), u(this._backdrop, i);
				} else if (!this._isShown && this._backdrop) {
					this._backdrop.classList.remove("show");
					const i = () => {
						this._removeBackdrop(), t();
					};
					if (e) {
						const t = r(this._backdrop);
						M.one(this._backdrop, "transitionend", i), u(this._backdrop, t);
					} else i();
				} else t();
			}
			_isAnimated() {
				return this._element.classList.contains("fade");
			}
			_triggerBackdropTransition() {
				if (M.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
					return;
				const t =
					this._element.scrollHeight > document.documentElement.clientHeight;
				t || (this._element.style.overflowY = "hidden"),
					this._element.classList.add("modal-static");
				const e = r(this._dialog);
				M.off(this._element, "transitionend"),
					M.one(this._element, "transitionend", () => {
						this._element.classList.remove("modal-static"),
							t ||
								(M.one(this._element, "transitionend", () => {
									this._element.style.overflowY = "";
								}),
								u(this._element, e));
					}),
					u(this._element, e),
					this._element.focus();
			}
			_adjustDialog() {
				const t =
					this._element.scrollHeight > document.documentElement.clientHeight;
				((!this._isBodyOverflowing && t && !v()) ||
					(this._isBodyOverflowing && !t && v())) &&
					(this._element.style.paddingLeft = this._scrollbarWidth + "px"),
					((this._isBodyOverflowing && !t && !v()) ||
						(!this._isBodyOverflowing && t && v())) &&
						(this._element.style.paddingRight = this._scrollbarWidth + "px");
			}
			_resetAdjustments() {
				(this._element.style.paddingLeft = ""),
					(this._element.style.paddingRight = "");
			}
			_checkScrollbar() {
				const t = document.body.getBoundingClientRect();
				(this._isBodyOverflowing =
					Math.round(t.left + t.right) < window.innerWidth),
					(this._scrollbarWidth = this._getScrollbarWidth());
			}
			_setScrollbar() {
				this._isBodyOverflowing &&
					(this._setElementAttributes(
						".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
						"paddingRight",
						(t) => t + this._scrollbarWidth
					),
					this._setElementAttributes(
						".sticky-top",
						"marginRight",
						(t) => t - this._scrollbarWidth
					),
					this._setElementAttributes(
						"body",
						"paddingRight",
						(t) => t + this._scrollbarWidth
					)),
					document.body.classList.add("modal-open");
			}
			_setElementAttributes(t, e, i) {
				q.find(t).forEach((t) => {
					if (
						t !== document.body &&
						window.innerWidth > t.clientWidth + this._scrollbarWidth
					)
						return;
					const n = t.style[e],
						s = window.getComputedStyle(t)[e];
					z.setDataAttribute(t, e, n),
						(t.style[e] = i(Number.parseFloat(s)) + "px");
				});
			}
			_resetScrollbar() {
				this._resetElementAttributes(
					".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
					"paddingRight"
				),
					this._resetElementAttributes(".sticky-top", "marginRight"),
					this._resetElementAttributes("body", "paddingRight");
			}
			_resetElementAttributes(t, e) {
				q.find(t).forEach((t) => {
					const i = z.getDataAttribute(t, e);
					void 0 === i && t === document.body
						? (t.style[e] = "")
						: (z.removeDataAttribute(t, e), (t.style[e] = i));
				});
			}
			_getScrollbarWidth() {
				const t = document.createElement("div");
				(t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
				const e = t.getBoundingClientRect().width - t.clientWidth;
				return document.body.removeChild(t), e;
			}
			static jQueryInterface(t, e) {
				return this.each(function () {
					let i = b.get(this, "bs.modal");
					const n = {
						...lt,
						...z.getDataAttributes(this),
						...("object" == typeof t && t ? t : {}),
					};
					if ((i || (i = new ct(this, n)), "string" == typeof t)) {
						if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
						i[t](e);
					}
				});
			}
		}
		M.on(
			document,
			"click.bs.modal.data-api",
			'[data-bs-toggle="modal"]',
			function (t) {
				const e = o(this);
				("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault(),
					M.one(e, "show.bs.modal", (t) => {
						t.defaultPrevented ||
							M.one(e, "hidden.bs.modal", () => {
								d(this) && this.focus();
							});
					});
				let i = b.get(e, "bs.modal");
				if (!i) {
					const t = { ...z.getDataAttributes(e), ...z.getDataAttributes(this) };
					i = new ct(e, t);
				}
				i.toggle(this);
			}
		),
			y("modal", ct);
		const dt = () => {
				const t = document.documentElement.clientWidth;
				return Math.abs(window.innerWidth - t);
			},
			ht = (t, e, i) => {
				const n = dt();
				q.find(t).forEach((t) => {
					if (t !== document.body && window.innerWidth > t.clientWidth + n)
						return;
					const s = t.style[e],
						o = window.getComputedStyle(t)[e];
					z.setDataAttribute(t, e, s),
						(t.style[e] = i(Number.parseFloat(o)) + "px");
				});
			},
			pt = (t, e) => {
				q.find(t).forEach((t) => {
					const i = z.getDataAttribute(t, e);
					void 0 === i && t === document.body
						? t.style.removeProperty(e)
						: (z.removeDataAttribute(t, e), (t.style[e] = i));
				});
			},
			ft = {
				backdrop: !0,
				keyboard: !0,
				scroll: !1,
			},
			gt = {
				backdrop: "boolean",
				keyboard: "boolean",
				scroll: "boolean",
			};
		class mt extends N {
			constructor(t, e) {
				super(t),
					(this._config = this._getConfig(e)),
					(this._isShown = !1),
					this._addEventListeners();
			}
			static get Default() {
				return ft;
			}
			static get DATA_KEY() {
				return "bs.offcanvas";
			}
			toggle(t) {
				return this._isShown ? this.hide() : this.show(t);
			}
			show(t) {
				this._isShown ||
					M.trigger(this._element, "show.bs.offcanvas", {
						relatedTarget: t,
					}).defaultPrevented ||
					((this._isShown = !0),
					(this._element.style.visibility = "visible"),
					this._config.backdrop &&
						document.body.classList.add("offcanvas-backdrop"),
					this._config.scroll ||
						((t = dt()) => {
							(document.body.style.overflow = "hidden"),
								ht(
									".fixed-top, .fixed-bottom, .is-fixed",
									"paddingRight",
									(e) => e + t
								),
								ht(".sticky-top", "marginRight", (e) => e - t),
								ht("body", "paddingRight", (e) => e + t);
						})(),
					this._element.classList.add("offcanvas-toggling"),
					this._element.removeAttribute("aria-hidden"),
					this._element.setAttribute("aria-modal", !0),
					this._element.setAttribute("role", "dialog"),
					this._element.classList.add("show"),
					setTimeout(() => {
						this._element.classList.remove("offcanvas-toggling"),
							M.trigger(this._element, "shown.bs.offcanvas", {
								relatedTarget: t,
							}),
							this._enforceFocusOnElement(this._element);
					}, r(this._element)));
			}
			hide() {
				this._isShown &&
					(M.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
						(this._element.classList.add("offcanvas-toggling"),
						M.off(document, "focusin.bs.offcanvas"),
						this._element.blur(),
						(this._isShown = !1),
						this._element.classList.remove("show"),
						setTimeout(() => {
							this._element.setAttribute("aria-hidden", !0),
								this._element.removeAttribute("aria-modal"),
								this._element.removeAttribute("role"),
								(this._element.style.visibility = "hidden"),
								this._config.backdrop &&
									document.body.classList.remove("offcanvas-backdrop"),
								this._config.scroll ||
									((document.body.style.overflow = "auto"),
									pt(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"),
									pt(".sticky-top", "marginRight"),
									pt("body", "paddingRight")),
								M.trigger(this._element, "hidden.bs.offcanvas"),
								this._element.classList.remove("offcanvas-toggling");
						}, r(this._element))));
			}
			_getConfig(t) {
				return (
					(t = {
						...ft,
						...z.getDataAttributes(this._element),
						...("object" == typeof t ? t : {}),
					}),
					c("offcanvas", t, gt),
					t
				);
			}
			_enforceFocusOnElement(t) {
				M.off(document, "focusin.bs.offcanvas"),
					M.on(document, "focusin.bs.offcanvas", (e) => {
						document === e.target ||
							t === e.target ||
							t.contains(e.target) ||
							t.focus();
					}),
					t.focus();
			}
			_addEventListeners() {
				M.on(
					this._element,
					"click.dismiss.bs.offcanvas",
					'[data-bs-dismiss="offcanvas"]',
					() => this.hide()
				),
					M.on(document, "keydown", (t) => {
						this._config.keyboard && "Escape" === t.key && this.hide();
					}),
					M.on(document, "click.bs.offcanvas.data-api", (t) => {
						const e = q.findOne(s(t.target));
						this._element.contains(t.target) ||
							e === this._element ||
							this.hide();
					});
			}
			static jQueryInterface(t) {
				return this.each(function () {
					const e =
						b.get(this, "bs.offcanvas") ||
						new mt(this, "object" == typeof t ? t : {});
					if ("string" == typeof t) {
						if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
							throw new TypeError(`No method named "${t}"`);
						e[t](this);
					}
				});
			}
		}
		M.on(
			document,
			"click.bs.offcanvas.data-api",
			'[data-bs-toggle="offcanvas"]',
			function (t) {
				const e = o(this);
				if (
					(["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this))
				)
					return;
				M.one(e, "hidden.bs.offcanvas", () => {
					d(this) && this.focus();
				});
				const i = q.findOne(".offcanvas.show, .offcanvas-toggling");
				(i && i !== e) || (b.get(e, "bs.offcanvas") || new mt(e)).toggle(this);
			}
		),
			M.on(window, "load.bs.offcanvas.data-api", () => {
				q.find(".offcanvas.show").forEach((t) =>
					(b.get(t, "bs.offcanvas") || new mt(t)).show()
				);
			}),
			y("offcanvas", mt);
		const vt = new Set([
				"background",
				"cite",
				"href",
				"itemtype",
				"longdesc",
				"poster",
				"src",
				"xlink:href",
			]),
			yt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&\/:?]*(?:[#\/?]|$))/i,
			_t =
				/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+\/a-z]+=*$/i,
			bt = (t, e) => {
				const i = t.nodeName.toLowerCase();
				if (e.includes(i))
					return (
						!vt.has(i) || Boolean(yt.test(t.nodeValue) || _t.test(t.nodeValue))
					);
				const n = e.filter((t) => t instanceof RegExp);
				for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
				return !1;
			};

		function Dt(t, e, i) {
			if (!t.length) return t;
			if (i && "function" == typeof i) return i(t);
			const n = new window.DOMParser().parseFromString(t, "text/html"),
				s = Object.keys(e),
				o = [].concat(...n.body.querySelectorAll("*"));
			for (let t = 0, i = o.length; t < i; t++) {
				const i = o[t],
					n = i.nodeName.toLowerCase();
				if (!s.includes(n)) {
					i.parentNode.removeChild(i);
					continue;
				}
				const r = [].concat(...i.attributes),
					a = [].concat(e["*"] || [], e[n] || []);
				r.forEach((t) => {
					bt(t, a) || i.removeAttribute(t.nodeName);
				});
			}
			return n.body.innerHTML;
		}
		const wt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
			xt = new Set(["sanitize", "allowList", "sanitizeFn"]),
			Ct = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(array|string|function)",
				container: "(string|element|boolean)",
				fallbackPlacements: "array",
				boundary: "(string|element)",
				customClass: "(string|function)",
				sanitize: "boolean",
				sanitizeFn: "(null|function)",
				allowList: "object",
				popperConfig: "(null|object|function)",
			},
			Tt = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: v() ? "left" : "right",
				BOTTOM: "bottom",
				LEFT: v() ? "right" : "left",
			},
			kt = {
				animation: !0,
				template:
					'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: [0, 0],
				container: !1,
				fallbackPlacements: ["top", "right", "bottom", "left"],
				boundary: "clippingParents",
				customClass: "",
				sanitize: !0,
				sanitizeFn: null,
				allowList: {
					"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
					a: ["target", "href", "title", "rel"],
					area: [],
					b: [],
					br: [],
					col: [],
					code: [],
					div: [],
					em: [],
					hr: [],
					h1: [],
					h2: [],
					h3: [],
					h4: [],
					h5: [],
					h6: [],
					i: [],
					img: ["src", "srcset", "alt", "title", "width", "height"],
					li: [],
					ol: [],
					p: [],
					pre: [],
					s: [],
					small: [],
					span: [],
					sub: [],
					sup: [],
					strong: [],
					u: [],
					ul: [],
				},
				popperConfig: null,
			},
			St = {
				HIDE: "hide.bs.tooltip",
				HIDDEN: "hidden.bs.tooltip",
				SHOW: "show.bs.tooltip",
				SHOWN: "shown.bs.tooltip",
				INSERTED: "inserted.bs.tooltip",
				CLICK: "click.bs.tooltip",
				FOCUSIN: "focusin.bs.tooltip",
				FOCUSOUT: "focusout.bs.tooltip",
				MOUSEENTER: "mouseenter.bs.tooltip",
				MOUSELEAVE: "mouseleave.bs.tooltip",
			};
		class Et extends N {
			constructor(t, i) {
				if (void 0 === e)
					throw new TypeError(
						"Bootstrap's tooltips require Popper (https://popper.js.org)"
					);
				super(t),
					(this._isEnabled = !0),
					(this._timeout = 0),
					(this._hoverState = ""),
					(this._activeTrigger = {}),
					(this._popper = null),
					(this.config = this._getConfig(i)),
					(this.tip = null),
					this._setListeners();
			}
			static get Default() {
				return kt;
			}
			static get NAME() {
				return "tooltip";
			}
			static get DATA_KEY() {
				return "bs.tooltip";
			}
			static get Event() {
				return St;
			}
			static get EVENT_KEY() {
				return ".bs.tooltip";
			}
			static get DefaultType() {
				return Ct;
			}
			enable() {
				this._isEnabled = !0;
			}
			disable() {
				this._isEnabled = !1;
			}
			toggleEnabled() {
				this._isEnabled = !this._isEnabled;
			}
			toggle(t) {
				if (this._isEnabled)
					if (t) {
						const e = this._initializeOnDelegatedTarget(t);
						(e._activeTrigger.click = !e._activeTrigger.click),
							e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
					} else {
						if (this.getTipElement().classList.contains("show"))
							return void this._leave(null, this);
						this._enter(null, this);
					}
			}
			dispose() {
				clearTimeout(this._timeout),
					M.off(this._element, this.constructor.EVENT_KEY),
					M.off(
						this._element.closest(".modal"),
						"hide.bs.modal",
						this._hideModalHandler
					),
					this.tip &&
						this.tip.parentNode &&
						this.tip.parentNode.removeChild(this.tip),
					(this._isEnabled = null),
					(this._timeout = null),
					(this._hoverState = null),
					(this._activeTrigger = null),
					this._popper && this._popper.destroy(),
					(this._popper = null),
					(this.config = null),
					(this.tip = null),
					super.dispose();
			}
			show() {
				if ("none" === this._element.style.display)
					throw new Error("Please use show on visible elements");
				if (!this.isWithContent() || !this._isEnabled) return;
				const t = M.trigger(this._element, this.constructor.Event.SHOW),
					n = p(this._element),
					s =
						null === n
							? this._element.ownerDocument.documentElement.contains(
									this._element
							  )
							: n.contains(this._element);
				if (t.defaultPrevented || !s) return;
				const o = this.getTipElement(),
					a = i(this.constructor.NAME);
				o.setAttribute("id", a),
					this._element.setAttribute("aria-describedby", a),
					this.setContent(),
					this.config.animation && o.classList.add("fade");
				const l =
						"function" == typeof this.config.placement
							? this.config.placement.call(this, o, this._element)
							: this.config.placement,
					c = this._getAttachment(l);
				this._addAttachmentClass(c);
				const d = this._getContainer();
				b.set(o, this.constructor.DATA_KEY, this),
					this._element.ownerDocument.documentElement.contains(this.tip) ||
						(d.appendChild(o),
						M.trigger(this._element, this.constructor.Event.INSERTED)),
					this._popper
						? this._popper.update()
						: (this._popper = e.createPopper(
								this._element,
								o,
								this._getPopperConfig(c)
						  )),
					o.classList.add("show");
				const h =
					"function" == typeof this.config.customClass
						? this.config.customClass()
						: this.config.customClass;
				h && o.classList.add(...h.split(" ")),
					"ontouchstart" in document.documentElement &&
						[].concat(...document.body.children).forEach((t) => {
							M.on(t, "mouseover", function () {});
						});
				const f = () => {
					const t = this._hoverState;
					(this._hoverState = null),
						M.trigger(this._element, this.constructor.Event.SHOWN),
						"out" === t && this._leave(null, this);
				};
				if (this.tip.classList.contains("fade")) {
					const t = r(this.tip);
					M.one(this.tip, "transitionend", f), u(this.tip, t);
				} else f();
			}
			hide() {
				if (!this._popper) return;
				const t = this.getTipElement(),
					e = () => {
						this._isWithActiveTrigger() ||
							("show" !== this._hoverState &&
								t.parentNode &&
								t.parentNode.removeChild(t),
							this._cleanTipClass(),
							this._element.removeAttribute("aria-describedby"),
							M.trigger(this._element, this.constructor.Event.HIDDEN),
							this._popper && (this._popper.destroy(), (this._popper = null)));
					};
				if (
					!M.trigger(this._element, this.constructor.Event.HIDE)
						.defaultPrevented
				) {
					if (
						(t.classList.remove("show"),
						"ontouchstart" in document.documentElement &&
							[]
								.concat(...document.body.children)
								.forEach((t) => M.off(t, "mouseover", f)),
						(this._activeTrigger.click = !1),
						(this._activeTrigger.focus = !1),
						(this._activeTrigger.hover = !1),
						this.tip.classList.contains("fade"))
					) {
						const i = r(t);
						M.one(t, "transitionend", e), u(t, i);
					} else e();
					this._hoverState = "";
				}
			}
			update() {
				null !== this._popper && this._popper.update();
			}
			isWithContent() {
				return Boolean(this.getTitle());
			}
			getTipElement() {
				if (this.tip) return this.tip;
				const t = document.createElement("div");
				return (
					(t.innerHTML = this.config.template),
					(this.tip = t.children[0]),
					this.tip
				);
			}
			setContent() {
				const t = this.getTipElement();
				this.setElementContent(q.findOne(".tooltip-inner", t), this.getTitle()),
					t.classList.remove("fade", "show");
			}
			setElementContent(t, e) {
				if (null !== t)
					return "object" == typeof e && l(e)
						? (e.jquery && (e = e[0]),
						  void (this.config.html
								? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
								: (t.textContent = e.textContent)))
						: void (this.config.html
								? (this.config.sanitize &&
										(e = Dt(e, this.config.allowList, this.config.sanitizeFn)),
								  (t.innerHTML = e))
								: (t.textContent = e));
			}
			getTitle() {
				let t = this._element.getAttribute("data-bs-original-title");
				return (
					t ||
						(t =
							"function" == typeof this.config.title
								? this.config.title.call(this._element)
								: this.config.title),
					t
				);
			}
			updateAttachment(t) {
				return "right" === t ? "end" : "left" === t ? "start" : t;
			}
			_initializeOnDelegatedTarget(t, e) {
				const i = this.constructor.DATA_KEY;
				return (
					(e = e || b.get(t.delegateTarget, i)) ||
						((e = new this.constructor(
							t.delegateTarget,
							this._getDelegateConfig()
						)),
						b.set(t.delegateTarget, i, e)),
					e
				);
			}
			_getOffset() {
				const { offset: t } = this.config;
				return "string" == typeof t
					? t.split(",").map((t) => Number.parseInt(t, 10))
					: "function" == typeof t
					? (e) => t(e, this._element)
					: t;
			}
			_getPopperConfig(t) {
				const e = {
					placement: t,
					modifiers: [
						{
							name: "flip",
							options: {
								altBoundary: !0,
								fallbackPlacements: this.config.fallbackPlacements,
							},
						},
						{
							name: "offset",
							options: {
								offset: this._getOffset(),
							},
						},
						{
							name: "preventOverflow",
							options: {
								boundary: this.config.boundary,
							},
						},
						{
							name: "arrow",
							options: {
								element: `.${this.constructor.NAME}-arrow`,
							},
						},
						{
							name: "onChange",
							enabled: !0,
							phase: "afterWrite",
							fn: (t) => this._handlePopperPlacementChange(t),
						},
					],
					onFirstUpdate: (t) => {
						t.options.placement !== t.placement &&
							this._handlePopperPlacementChange(t);
					},
				};
				return {
					...e,
					...("function" == typeof this.config.popperConfig
						? this.config.popperConfig(e)
						: this.config.popperConfig),
				};
			}
			_addAttachmentClass(t) {
				this.getTipElement().classList.add(
					"bs-tooltip-" + this.updateAttachment(t)
				);
			}
			_getContainer() {
				return !1 === this.config.container
					? document.body
					: l(this.config.container)
					? this.config.container
					: q.findOne(this.config.container);
			}
			_getAttachment(t) {
				return Tt[t.toUpperCase()];
			}
			_setListeners() {
				this.config.trigger.split(" ").forEach((t) => {
					if ("click" === t)
						M.on(
							this._element,
							this.constructor.Event.CLICK,
							this.config.selector,
							(t) => this.toggle(t)
						);
					else if ("manual" !== t) {
						const e =
								"hover" === t
									? this.constructor.Event.MOUSEENTER
									: this.constructor.Event.FOCUSIN,
							i =
								"hover" === t
									? this.constructor.Event.MOUSELEAVE
									: this.constructor.Event.FOCUSOUT;
						M.on(this._element, e, this.config.selector, (t) => this._enter(t)),
							M.on(this._element, i, this.config.selector, (t) =>
								this._leave(t)
							);
					}
				}),
					(this._hideModalHandler = () => {
						this._element && this.hide();
					}),
					M.on(
						this._element.closest(".modal"),
						"hide.bs.modal",
						this._hideModalHandler
					),
					this.config.selector
						? (this.config = {
								...this.config,
								trigger: "manual",
								selector: "",
						  })
						: this._fixTitle();
			}
			_fixTitle() {
				const t = this._element.getAttribute("title"),
					e = typeof this._element.getAttribute("data-bs-original-title");
				(t || "string" !== e) &&
					(this._element.setAttribute("data-bs-original-title", t || ""),
					!t ||
						this._element.getAttribute("aria-label") ||
						this._element.textContent ||
						this._element.setAttribute("aria-label", t),
					this._element.setAttribute("title", ""));
			}
			_enter(t, e) {
				(e = this._initializeOnDelegatedTarget(t, e)),
					t &&
						(e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
					e.getTipElement().classList.contains("show") ||
					"show" === e._hoverState
						? (e._hoverState = "show")
						: (clearTimeout(e._timeout),
						  (e._hoverState = "show"),
						  e.config.delay && e.config.delay.show
								? (e._timeout = setTimeout(() => {
										"show" === e._hoverState && e.show();
								  }, e.config.delay.show))
								: e.show());
			}
			_leave(t, e) {
				(e = this._initializeOnDelegatedTarget(t, e)),
					t &&
						(e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
							e._element.contains(t.relatedTarget)),
					e._isWithActiveTrigger() ||
						(clearTimeout(e._timeout),
						(e._hoverState = "out"),
						e.config.delay && e.config.delay.hide
							? (e._timeout = setTimeout(() => {
									"out" === e._hoverState && e.hide();
							  }, e.config.delay.hide))
							: e.hide());
			}
			_isWithActiveTrigger() {
				for (const t in this._activeTrigger)
					if (this._activeTrigger[t]) return !0;
				return !1;
			}
			_getConfig(t) {
				const e = z.getDataAttributes(this._element);
				return (
					Object.keys(e).forEach((t) => {
						xt.has(t) && delete e[t];
					}),
					t &&
						"object" == typeof t.container &&
						t.container.jquery &&
						(t.container = t.container[0]),
					"number" ==
						typeof (t = {
							...this.constructor.Default,
							...e,
							...("object" == typeof t && t ? t : {}),
						}).delay &&
						(t.delay = {
							show: t.delay,
							hide: t.delay,
						}),
					"number" == typeof t.title && (t.title = t.title.toString()),
					"number" == typeof t.content && (t.content = t.content.toString()),
					c("tooltip", t, this.constructor.DefaultType),
					t.sanitize &&
						(t.template = Dt(t.template, t.allowList, t.sanitizeFn)),
					t
				);
			}
			_getDelegateConfig() {
				const t = {};
				if (this.config)
					for (const e in this.config)
						this.constructor.Default[e] !== this.config[e] &&
							(t[e] = this.config[e]);
				return t;
			}
			_cleanTipClass() {
				const t = this.getTipElement(),
					e = t.getAttribute("class").match(wt);
				null !== e &&
					e.length > 0 &&
					e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
			}
			_handlePopperPlacementChange(t) {
				const { state: e } = t;
				e &&
					((this.tip = e.elements.popper),
					this._cleanTipClass(),
					this._addAttachmentClass(this._getAttachment(e.placement)));
			}
			static jQueryInterface(t) {
				return this.each(function () {
					let e = b.get(this, "bs.tooltip");
					const i = "object" == typeof t && t;
					if (
						(e || !/dispose|hide/.test(t)) &&
						(e || (e = new Et(this, i)), "string" == typeof t)
					) {
						if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				});
			}
		}
		y("tooltip", Et);
		const At = new RegExp("(^|\\s)bs-popover\\S+", "g"),
			Ft = {
				...Et.Default,
				placement: "right",
				offset: [0, 8],
				trigger: "click",
				content: "",
				template:
					'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			},
			Lt = { ...Et.DefaultType, content: "(string|element|function)" },
			Ot = {
				HIDE: "hide.bs.popover",
				HIDDEN: "hidden.bs.popover",
				SHOW: "show.bs.popover",
				SHOWN: "shown.bs.popover",
				INSERTED: "inserted.bs.popover",
				CLICK: "click.bs.popover",
				FOCUSIN: "focusin.bs.popover",
				FOCUSOUT: "focusout.bs.popover",
				MOUSEENTER: "mouseenter.bs.popover",
				MOUSELEAVE: "mouseleave.bs.popover",
			};
		class $t extends Et {
			static get Default() {
				return Ft;
			}
			static get NAME() {
				return "popover";
			}
			static get DATA_KEY() {
				return "bs.popover";
			}
			static get Event() {
				return Ot;
			}
			static get EVENT_KEY() {
				return ".bs.popover";
			}
			static get DefaultType() {
				return Lt;
			}
			isWithContent() {
				return this.getTitle() || this._getContent();
			}
			setContent() {
				const t = this.getTipElement();
				this.setElementContent(
					q.findOne(".popover-header", t),
					this.getTitle()
				);
				let e = this._getContent();
				"function" == typeof e && (e = e.call(this._element)),
					this.setElementContent(q.findOne(".popover-body", t), e),
					t.classList.remove("fade", "show");
			}
			_addAttachmentClass(t) {
				this.getTipElement().classList.add(
					"bs-popover-" + this.updateAttachment(t)
				);
			}
			_getContent() {
				return (
					this._element.getAttribute("data-bs-content") || this.config.content
				);
			}
			_cleanTipClass() {
				const t = this.getTipElement(),
					e = t.getAttribute("class").match(At);
				null !== e &&
					e.length > 0 &&
					e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
			}
			static jQueryInterface(t) {
				return this.each(function () {
					let e = b.get(this, "bs.popover");
					const i = "object" == typeof t ? t : null;
					if (
						(e || !/dispose|hide/.test(t)) &&
						(e || ((e = new $t(this, i)), b.set(this, "bs.popover", e)),
						"string" == typeof t)
					) {
						if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				});
			}
		}
		y("popover", $t);
		const Mt = {
				offset: 10,
				method: "auto",
				target: "",
			},
			Nt = {
				offset: "number",
				method: "string",
				target: "(string|element)",
			};
		class Pt extends N {
			constructor(t, e) {
				super(t),
					(this._scrollElement =
						"BODY" === this._element.tagName ? window : this._element),
					(this._config = this._getConfig(e)),
					(this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
					(this._offsets = []),
					(this._targets = []),
					(this._activeTarget = null),
					(this._scrollHeight = 0),
					M.on(this._scrollElement, "scroll.bs.scrollspy", () =>
						this._process()
					),
					this.refresh(),
					this._process();
			}
			static get Default() {
				return Mt;
			}
			static get DATA_KEY() {
				return "bs.scrollspy";
			}
			refresh() {
				const t =
						this._scrollElement === this._scrollElement.window
							? "offset"
							: "position",
					e = "auto" === this._config.method ? t : this._config.method,
					i = "position" === e ? this._getScrollTop() : 0;
				(this._offsets = []),
					(this._targets = []),
					(this._scrollHeight = this._getScrollHeight()),
					q
						.find(this._selector)
						.map((t) => {
							const n = s(t),
								o = n ? q.findOne(n) : null;
							if (o) {
								const t = o.getBoundingClientRect();
								if (t.width || t.height) return [z[e](o).top + i, n];
							}
							return null;
						})
						.filter((t) => t)
						.sort((t, e) => t[0] - e[0])
						.forEach((t) => {
							this._offsets.push(t[0]), this._targets.push(t[1]);
						});
			}
			dispose() {
				super.dispose(),
					M.off(this._scrollElement, ".bs.scrollspy"),
					(this._scrollElement = null),
					(this._config = null),
					(this._selector = null),
					(this._offsets = null),
					(this._targets = null),
					(this._activeTarget = null),
					(this._scrollHeight = null);
			}
			_getConfig(t) {
				if (
					"string" !=
						typeof (t = { ...Mt, ...("object" == typeof t && t ? t : {}) })
							.target &&
					l(t.target)
				) {
					let { id: e } = t.target;
					e || ((e = i("scrollspy")), (t.target.id = e)), (t.target = "#" + e);
				}
				return c("scrollspy", t, Nt), t;
			}
			_getScrollTop() {
				return this._scrollElement === window
					? this._scrollElement.pageYOffset
					: this._scrollElement.scrollTop;
			}
			_getScrollHeight() {
				return (
					this._scrollElement.scrollHeight ||
					Math.max(
						document.body.scrollHeight,
						document.documentElement.scrollHeight
					)
				);
			}
			_getOffsetHeight() {
				return this._scrollElement === window
					? window.innerHeight
					: this._scrollElement.getBoundingClientRect().height;
			}
			_process() {
				const t = this._getScrollTop() + this._config.offset,
					e = this._getScrollHeight(),
					i = this._config.offset + e - this._getOffsetHeight();
				if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
					const t = this._targets[this._targets.length - 1];
					this._activeTarget !== t && this._activate(t);
				} else {
					if (
						this._activeTarget &&
						t < this._offsets[0] &&
						this._offsets[0] > 0
					)
						return (this._activeTarget = null), void this._clear();
					for (let e = this._offsets.length; e--; )
						this._activeTarget !== this._targets[e] &&
							t >= this._offsets[e] &&
							(void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
							this._activate(this._targets[e]);
				}
			}
			_activate(t) {
				(this._activeTarget = t), this._clear();
				const e = this._selector
						.split(",")
						.map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
					i = q.findOne(e.join(","));
				i.classList.contains("dropdown-item")
					? (q
							.findOne(".dropdown-toggle", i.closest(".dropdown"))
							.classList.add("active"),
					  i.classList.add("active"))
					: (i.classList.add("active"),
					  q.parents(i, ".nav, .list-group").forEach((t) => {
							q
								.prev(t, ".nav-link, .list-group-item")
								.forEach((t) => t.classList.add("active")),
								q.prev(t, ".nav-item").forEach((t) => {
									q.children(t, ".nav-link").forEach((t) =>
										t.classList.add("active")
									);
								});
					  })),
					M.trigger(this._scrollElement, "activate.bs.scrollspy", {
						relatedTarget: t,
					});
			}
			_clear() {
				q.find(this._selector)
					.filter((t) => t.classList.contains("active"))
					.forEach((t) => t.classList.remove("active"));
			}
			static jQueryInterface(t) {
				return this.each(function () {
					let e = b.get(this, "bs.scrollspy");
					if (
						(e || (e = new Pt(this, "object" == typeof t && t)),
						"string" == typeof t)
					) {
						if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				});
			}
		}
		M.on(window, "load.bs.scrollspy.data-api", () => {
			q.find('[data-bs-spy="scroll"]').forEach(
				(t) => new Pt(t, z.getDataAttributes(t))
			);
		}),
			y("scrollspy", Pt);
		class It extends N {
			static get DATA_KEY() {
				return "bs.tab";
			}
			show() {
				if (
					(this._element.parentNode &&
						this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
						this._element.classList.contains("active")) ||
					h(this._element)
				)
					return;
				let t;
				const e = o(this._element),
					i = this._element.closest(".nav, .list-group");
				if (i) {
					const e =
						"UL" === i.nodeName || "OL" === i.nodeName
							? ":scope > li > .active"
							: ".active";
					t = (t = q.find(e, i))[t.length - 1];
				}
				const n = t
					? M.trigger(t, "hide.bs.tab", {
							relatedTarget: this._element,
					  })
					: null;
				if (
					M.trigger(this._element, "show.bs.tab", {
						relatedTarget: t,
					}).defaultPrevented ||
					(null !== n && n.defaultPrevented)
				)
					return;
				this._activate(this._element, i);
				const s = () => {
					M.trigger(t, "hidden.bs.tab", {
						relatedTarget: this._element,
					}),
						M.trigger(this._element, "shown.bs.tab", {
							relatedTarget: t,
						});
				};
				e ? this._activate(e, e.parentNode, s) : s();
			}
			_activate(t, e, i) {
				const n = (
						!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
							? q.children(e, ".active")
							: q.find(":scope > li > .active", e)
					)[0],
					s = i && n && n.classList.contains("fade"),
					o = () => this._transitionComplete(t, n, i);
				if (n && s) {
					const t = r(n);
					n.classList.remove("show"), M.one(n, "transitionend", o), u(n, t);
				} else o();
			}
			_transitionComplete(t, e, i) {
				if (e) {
					e.classList.remove("active");
					const t = q.findOne(":scope > .dropdown-menu .active", e.parentNode);
					t && t.classList.remove("active"),
						"tab" === e.getAttribute("role") &&
							e.setAttribute("aria-selected", !1);
				}
				t.classList.add("active"),
					"tab" === t.getAttribute("role") &&
						t.setAttribute("aria-selected", !0),
					g(t),
					t.classList.contains("fade") && t.classList.add("show"),
					t.parentNode &&
						t.parentNode.classList.contains("dropdown-menu") &&
						(t.closest(".dropdown") &&
							q
								.find(".dropdown-toggle")
								.forEach((t) => t.classList.add("active")),
						t.setAttribute("aria-expanded", !0)),
					i && i();
			}
			static jQueryInterface(t) {
				return this.each(function () {
					const e = b.get(this, "bs.tab") || new It(this);
					if ("string" == typeof t) {
						if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				});
			}
		}
		M.on(
			document,
			"click.bs.tab.data-api",
			'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
			function (t) {
				t.preventDefault(), (b.get(this, "bs.tab") || new It(this)).show();
			}
		),
			y("tab", It);
		const Bt = {
				animation: "boolean",
				autohide: "boolean",
				delay: "number",
			},
			jt = {
				animation: !0,
				autohide: !0,
				delay: 5e3,
			};
		class zt extends N {
			constructor(t, e) {
				super(t),
					(this._config = this._getConfig(e)),
					(this._timeout = null),
					this._setListeners();
			}
			static get DefaultType() {
				return Bt;
			}
			static get Default() {
				return jt;
			}
			static get DATA_KEY() {
				return "bs.toast";
			}
			show() {
				if (M.trigger(this._element, "show.bs.toast").defaultPrevented) return;
				this._clearTimeout(),
					this._config.animation && this._element.classList.add("fade");
				const t = () => {
					this._element.classList.remove("showing"),
						this._element.classList.add("show"),
						M.trigger(this._element, "shown.bs.toast"),
						this._config.autohide &&
							(this._timeout = setTimeout(() => {
								this.hide();
							}, this._config.delay));
				};
				if (
					(this._element.classList.remove("hide"),
					g(this._element),
					this._element.classList.add("showing"),
					this._config.animation)
				) {
					const e = r(this._element);
					M.one(this._element, "transitionend", t), u(this._element, e);
				} else t();
			}
			hide() {
				if (!this._element.classList.contains("show")) return;
				if (M.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
				const t = () => {
					this._element.classList.add("hide"),
						M.trigger(this._element, "hidden.bs.toast");
				};
				if ((this._element.classList.remove("show"), this._config.animation)) {
					const e = r(this._element);
					M.one(this._element, "transitionend", t), u(this._element, e);
				} else t();
			}
			dispose() {
				this._clearTimeout(),
					this._element.classList.contains("show") &&
						this._element.classList.remove("show"),
					M.off(this._element, "click.dismiss.bs.toast"),
					super.dispose(),
					(this._config = null);
			}
			_getConfig(t) {
				return (
					(t = {
						...jt,
						...z.getDataAttributes(this._element),
						...("object" == typeof t && t ? t : {}),
					}),
					c("toast", t, this.constructor.DefaultType),
					t
				);
			}
			_setListeners() {
				M.on(
					this._element,
					"click.dismiss.bs.toast",
					'[data-bs-dismiss="toast"]',
					() => this.hide()
				);
			}
			_clearTimeout() {
				clearTimeout(this._timeout), (this._timeout = null);
			}
			static jQueryInterface(t) {
				return this.each(function () {
					let e = b.get(this, "bs.toast");
					if (
						(e || (e = new zt(this, "object" == typeof t && t)),
						"string" == typeof t)
					) {
						if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
						e[t](this);
					}
				});
			}
		}
		return (
			y("toast", zt),
			{
				Alert: P,
				Button: I,
				Carousel: U,
				Collapse: K,
				Dropdown: at,
				Modal: ct,
				Offcanvas: mt,
				Popover: $t,
				ScrollSpy: Pt,
				Tab: It,
				Toast: zt,
				Tooltip: Et,
			}
		);
	}),
	(function (t) {
		"use strict";
		"function" == typeof define && define.amd
			? define(["jquery"], t)
			: "undefined" != typeof exports
			? (module.exports = t(require("jquery")))
			: t(jQuery);
	})(function (t) {
		"use strict";
		var e = window.Slick || {};
		((e = (function () {
			var e = 0;
			return function (i, n) {
				var s,
					o = this;
				(o.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: t(i),
					appendDots: t(i),
					arrows: !0,
					asNavFor: null,
					prevArrow:
						'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
					nextArrow:
						'<button class="slick-next" aria-label="Next" type="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function (e, i) {
						return t('<button type="button" />').text(i + 1);
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: 0.35,
					fade: !1,
					focusOnSelect: !1,
					focusOnChange: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3,
				}),
					(o.initials = {
						animating: !1,
						dragging: !1,
						autoPlayTimer: null,
						currentDirection: 0,
						currentLeft: null,
						currentSlide: 0,
						direction: 1,
						$dots: null,
						listWidth: null,
						listHeight: null,
						loadIndex: 0,
						$nextArrow: null,
						$prevArrow: null,
						scrolling: !1,
						slideCount: null,
						slideWidth: null,
						$slideTrack: null,
						$slides: null,
						sliding: !1,
						slideOffset: 0,
						swipeLeft: null,
						swiping: !1,
						$list: null,
						touchObject: {},
						transformsEnabled: !1,
						unslicked: !1,
					}),
					t.extend(o, o.initials),
					(o.activeBreakpoint = null),
					(o.animType = null),
					(o.animProp = null),
					(o.breakpoints = []),
					(o.breakpointSettings = []),
					(o.cssTransitions = !1),
					(o.focussed = !1),
					(o.interrupted = !1),
					(o.hidden = "hidden"),
					(o.paused = !0),
					(o.positionProp = null),
					(o.respondTo = null),
					(o.rowCount = 1),
					(o.shouldClick = !0),
					(o.$slider = t(i)),
					(o.$slidesCache = null),
					(o.transformType = null),
					(o.transitionType = null),
					(o.visibilityChange = "visibilitychange"),
					(o.windowWidth = 0),
					(o.windowTimer = null),
					(s = t(i).data("slick") || {}),
					(o.options = t.extend({}, o.defaults, n, s)),
					(o.currentSlide = o.options.initialSlide),
					(o.originalSettings = o.options),
					void 0 !== document.mozHidden
						? ((o.hidden = "mozHidden"),
						  (o.visibilityChange = "mozvisibilitychange"))
						: void 0 !== document.webkitHidden &&
						  ((o.hidden = "webkitHidden"),
						  (o.visibilityChange = "webkitvisibilitychange")),
					(o.autoPlay = t.proxy(o.autoPlay, o)),
					(o.autoPlayClear = t.proxy(o.autoPlayClear, o)),
					(o.autoPlayIterator = t.proxy(o.autoPlayIterator, o)),
					(o.changeSlide = t.proxy(o.changeSlide, o)),
					(o.clickHandler = t.proxy(o.clickHandler, o)),
					(o.selectHandler = t.proxy(o.selectHandler, o)),
					(o.setPosition = t.proxy(o.setPosition, o)),
					(o.swipeHandler = t.proxy(o.swipeHandler, o)),
					(o.dragHandler = t.proxy(o.dragHandler, o)),
					(o.keyHandler = t.proxy(o.keyHandler, o)),
					(o.instanceUid = e++),
					(o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
					o.registerBreakpoints(),
					o.init(!0);
			};
		})()).prototype.activateADA = function () {
			this.$slideTrack
				.find(".slick-active")
				.attr({
					"aria-hidden": "false",
				})
				.find("a, input, button, select")
				.attr({
					tabindex: "0",
				});
		}),
			(e.prototype.addSlide = e.prototype.slickAdd =
				function (e, i, n) {
					var s = this;
					if ("boolean" == typeof i) (n = i), (i = null);
					else if (i < 0 || i >= s.slideCount) return !1;
					s.unload(),
						"number" == typeof i
							? 0 === i && 0 === s.$slides.length
								? t(e).appendTo(s.$slideTrack)
								: n
								? t(e).insertBefore(s.$slides.eq(i))
								: t(e).insertAfter(s.$slides.eq(i))
							: !0 === n
							? t(e).prependTo(s.$slideTrack)
							: t(e).appendTo(s.$slideTrack),
						(s.$slides = s.$slideTrack.children(this.options.slide)),
						s.$slideTrack.children(this.options.slide).detach(),
						s.$slideTrack.append(s.$slides),
						s.$slides.each(function (e, i) {
							t(i).attr("data-slick-index", e);
						}),
						(s.$slidesCache = s.$slides),
						s.reinit();
				}),
			(e.prototype.animateHeight = function () {
				var t = this;
				if (
					1 === t.options.slidesToShow &&
					!0 === t.options.adaptiveHeight &&
					!1 === t.options.vertical
				) {
					var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
					t.$list.animate(
						{
							height: e,
						},
						t.options.speed
					);
				}
			}),
			(e.prototype.animateSlide = function (e, i) {
				var n = {},
					s = this;
				s.animateHeight(),
					!0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
					!1 === s.transformsEnabled
						? !1 === s.options.vertical
							? s.$slideTrack.animate(
									{
										left: e,
									},
									s.options.speed,
									s.options.easing,
									i
							  )
							: s.$slideTrack.animate(
									{
										top: e,
									},
									s.options.speed,
									s.options.easing,
									i
							  )
						: !1 === s.cssTransitions
						? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
						  t({
								animStart: s.currentLeft,
						  }).animate(
								{
									animStart: e,
								},
								{
									duration: s.options.speed,
									easing: s.options.easing,
									step: function (t) {
										(t = Math.ceil(t)),
											!1 === s.options.vertical
												? ((n[s.animType] = "translate(" + t + "px, 0px)"),
												  s.$slideTrack.css(n))
												: ((n[s.animType] = "translate(0px," + t + "px)"),
												  s.$slideTrack.css(n));
									},
									complete: function () {
										i && i.call();
									},
								}
						  ))
						: (s.applyTransition(),
						  (e = Math.ceil(e)),
						  !1 === s.options.vertical
								? (n[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
								: (n[s.animType] = "translate3d(0px," + e + "px, 0px)"),
						  s.$slideTrack.css(n),
						  i &&
								setTimeout(function () {
									s.disableTransition(), i.call();
								}, s.options.speed));
			}),
			(e.prototype.getNavTarget = function () {
				var e = this.options.asNavFor;
				return e && null !== e && (e = t(e).not(this.$slider)), e;
			}),
			(e.prototype.asNavFor = function (e) {
				var i = this.getNavTarget();
				null !== i &&
					"object" == typeof i &&
					i.each(function () {
						var i = t(this).slick("getSlick");
						i.unslicked || i.slideHandler(e, !0);
					});
			}),
			(e.prototype.applyTransition = function (t) {
				var e = this,
					i = {};
				!1 === e.options.fade
					? (i[e.transitionType] =
							e.transformType +
							" " +
							e.options.speed +
							"ms " +
							e.options.cssEase)
					: (i[e.transitionType] =
							"opacity " + e.options.speed + "ms " + e.options.cssEase),
					!1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
			}),
			(e.prototype.autoPlay = function () {
				var t = this;
				t.autoPlayClear(),
					t.slideCount > t.options.slidesToShow &&
						(t.autoPlayTimer = setInterval(
							t.autoPlayIterator,
							t.options.autoplaySpeed
						));
			}),
			(e.prototype.autoPlayClear = function () {
				this.autoPlayTimer && clearInterval(this.autoPlayTimer);
			}),
			(e.prototype.autoPlayIterator = function () {
				var t = this,
					e = t.currentSlide + t.options.slidesToScroll;
				t.paused ||
					t.interrupted ||
					t.focussed ||
					(!1 === t.options.infinite &&
						(1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
							? (t.direction = 0)
							: 0 === t.direction &&
							  ((e = t.currentSlide - t.options.slidesToScroll),
							  t.currentSlide - 1 == 0 && (t.direction = 1))),
					t.slideHandler(e));
			}),
			(e.prototype.buildArrows = function () {
				var e = this;
				!0 === e.options.arrows &&
					((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
					(e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
					e.slideCount > e.options.slidesToShow
						? (e.$prevArrow
								.removeClass("slick-hidden")
								.removeAttr("aria-hidden tabindex"),
						  e.$nextArrow
								.removeClass("slick-hidden")
								.removeAttr("aria-hidden tabindex"),
						  e.htmlExpr.test(e.options.prevArrow) &&
								e.$prevArrow.prependTo(e.options.appendArrows),
						  e.htmlExpr.test(e.options.nextArrow) &&
								e.$nextArrow.appendTo(e.options.appendArrows),
						  !0 !== e.options.infinite &&
								e.$prevArrow
									.addClass("slick-disabled")
									.attr("aria-disabled", "true"))
						: e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
								"aria-disabled": "true",
								tabindex: "-1",
						  }));
			}),
			(e.prototype.buildDots = function () {
				var e,
					i,
					n = this;
				if (!0 === n.options.dots) {
					for (
						n.$slider.addClass("slick-dotted"),
							i = t("<ul />").addClass(n.options.dotsClass),
							e = 0;
						e <= n.getDotCount();
						e += 1
					)
						i.append(
							t("<li />").append(n.options.customPaging.call(this, n, e))
						);
					(n.$dots = i.appendTo(n.options.appendDots)),
						n.$dots.find("li").first().addClass("slick-active");
				}
			}),
			(e.prototype.buildOut = function () {
				var e = this;
				(e.$slides = e.$slider
					.children(e.options.slide + ":not(.slick-cloned)")
					.addClass("slick-slide")),
					(e.slideCount = e.$slides.length),
					e.$slides.each(function (e, i) {
						t(i)
							.attr("data-slick-index", e)
							.data("originalStyling", t(i).attr("style") || "");
					}),
					e.$slider.addClass("slick-slider"),
					(e.$slideTrack =
						0 === e.slideCount
							? t('<div class="slick-track"/>').appendTo(e.$slider)
							: e.$slides.wrapAll('<div class="slick-track"/>').parent()),
					(e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
					e.$slideTrack.css("opacity", 0),
					(!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
						(e.options.slidesToScroll = 1),
					t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
					e.setupInfinite(),
					e.buildArrows(),
					e.buildDots(),
					e.updateDots(),
					e.setSlideClasses(
						"number" == typeof e.currentSlide ? e.currentSlide : 0
					),
					!0 === e.options.draggable && e.$list.addClass("draggable");
			}),
			(e.prototype.buildRows = function () {
				var t,
					e,
					i,
					n,
					s,
					o,
					r,
					a = this;
				if (
					((n = document.createDocumentFragment()),
					(o = a.$slider.children()),
					a.options.rows > 1)
				) {
					for (
						r = a.options.slidesPerRow * a.options.rows,
							s = Math.ceil(o.length / r),
							t = 0;
						t < s;
						t++
					) {
						var l = document.createElement("div");
						for (e = 0; e < a.options.rows; e++) {
							var u = document.createElement("div");
							for (i = 0; i < a.options.slidesPerRow; i++) {
								var c = t * r + (e * a.options.slidesPerRow + i);
								o.get(c) && u.appendChild(o.get(c));
							}
							l.appendChild(u);
						}
						n.appendChild(l);
					}
					a.$slider.empty().append(n),
						a.$slider
							.children()
							.children()
							.children()
							.css({
								width: 100 / a.options.slidesPerRow + "%",
								display: "inline-block",
							});
				}
			}),
			(e.prototype.checkResponsive = function (e, i) {
				var n,
					s,
					o,
					r = this,
					a = !1,
					l = r.$slider.width(),
					u = window.innerWidth || t(window).width();
				if (
					("window" === r.respondTo
						? (o = u)
						: "slider" === r.respondTo
						? (o = l)
						: "min" === r.respondTo && (o = Math.min(u, l)),
					r.options.responsive &&
						r.options.responsive.length &&
						null !== r.options.responsive)
				) {
					for (n in ((s = null), r.breakpoints))
						r.breakpoints.hasOwnProperty(n) &&
							(!1 === r.originalSettings.mobileFirst
								? o < r.breakpoints[n] && (s = r.breakpoints[n])
								: o > r.breakpoints[n] && (s = r.breakpoints[n]));
					null !== s
						? null !== r.activeBreakpoint
							? (s !== r.activeBreakpoint || i) &&
							  ((r.activeBreakpoint = s),
							  "unslick" === r.breakpointSettings[s]
									? r.unslick(s)
									: ((r.options = t.extend(
											{},
											r.originalSettings,
											r.breakpointSettings[s]
									  )),
									  !0 === e && (r.currentSlide = r.options.initialSlide),
									  r.refresh(e)),
							  (a = s))
							: ((r.activeBreakpoint = s),
							  "unslick" === r.breakpointSettings[s]
									? r.unslick(s)
									: ((r.options = t.extend(
											{},
											r.originalSettings,
											r.breakpointSettings[s]
									  )),
									  !0 === e && (r.currentSlide = r.options.initialSlide),
									  r.refresh(e)),
							  (a = s))
						: null !== r.activeBreakpoint &&
						  ((r.activeBreakpoint = null),
						  (r.options = r.originalSettings),
						  !0 === e && (r.currentSlide = r.options.initialSlide),
						  r.refresh(e),
						  (a = s)),
						e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
				}
			}),
			(e.prototype.changeSlide = function (e, i) {
				var n,
					s,
					o = this,
					r = t(e.currentTarget);
				switch (
					(r.is("a") && e.preventDefault(),
					r.is("li") || (r = r.closest("li")),
					(n =
						o.slideCount % o.options.slidesToScroll != 0
							? 0
							: (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
					e.data.message)
				) {
					case "previous":
						(s =
							0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n),
							o.slideCount > o.options.slidesToShow &&
								o.slideHandler(o.currentSlide - s, !1, i);
						break;
					case "next":
						(s = 0 === n ? o.options.slidesToScroll : n),
							o.slideCount > o.options.slidesToShow &&
								o.slideHandler(o.currentSlide + s, !1, i);
						break;
					case "index":
						var a =
							0 === e.data.index
								? 0
								: e.data.index || r.index() * o.options.slidesToScroll;
						o.slideHandler(o.checkNavigable(a), !1, i),
							r.children().trigger("focus");
						break;
					default:
						return;
				}
			}),
			(e.prototype.checkNavigable = function (t) {
				var e, i;
				if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1]))
					t = e[e.length - 1];
				else
					for (var n in e) {
						if (t < e[n]) {
							t = i;
							break;
						}
						i = e[n];
					}
				return t;
			}),
			(e.prototype.cleanUpEvents = function () {
				var e = this;
				e.options.dots &&
					null !== e.$dots &&
					(t("li", e.$dots)
						.off("click.slick", e.changeSlide)
						.off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
						.off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
					!0 === e.options.accessibility &&
						e.$dots.off("keydown.slick", e.keyHandler)),
					e.$slider.off("focus.slick blur.slick"),
					!0 === e.options.arrows &&
						e.slideCount > e.options.slidesToShow &&
						(e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
						e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
						!0 === e.options.accessibility &&
							(e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
							e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
					e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
					e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
					e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
					e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
					e.$list.off("click.slick", e.clickHandler),
					t(document).off(e.visibilityChange, e.visibility),
					e.cleanUpSlideEvents(),
					!0 === e.options.accessibility &&
						e.$list.off("keydown.slick", e.keyHandler),
					!0 === e.options.focusOnSelect &&
						t(e.$slideTrack).children().off("click.slick", e.selectHandler),
					t(window).off(
						"orientationchange.slick.slick-" + e.instanceUid,
						e.orientationChange
					),
					t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
					t("[draggable!=true]", e.$slideTrack).off(
						"dragstart",
						e.preventDefault
					),
					t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
			}),
			(e.prototype.cleanUpSlideEvents = function () {
				var e = this;
				e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
					e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
			}),
			(e.prototype.cleanUpRows = function () {
				var t,
					e = this;
				e.options.rows > 1 &&
					((t = e.$slides.children().children()).removeAttr("style"),
					e.$slider.empty().append(t));
			}),
			(e.prototype.clickHandler = function (t) {
				!1 === this.shouldClick &&
					(t.stopImmediatePropagation(),
					t.stopPropagation(),
					t.preventDefault());
			}),
			(e.prototype.destroy = function (e) {
				var i = this;
				i.autoPlayClear(),
					(i.touchObject = {}),
					i.cleanUpEvents(),
					t(".slick-cloned", i.$slider).detach(),
					i.$dots && i.$dots.remove(),
					i.$prevArrow &&
						i.$prevArrow.length &&
						(i.$prevArrow
							.removeClass("slick-disabled slick-arrow slick-hidden")
							.removeAttr("aria-hidden aria-disabled tabindex")
							.css("display", ""),
						i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
					i.$nextArrow &&
						i.$nextArrow.length &&
						(i.$nextArrow
							.removeClass("slick-disabled slick-arrow slick-hidden")
							.removeAttr("aria-hidden aria-disabled tabindex")
							.css("display", ""),
						i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
					i.$slides &&
						(i.$slides
							.removeClass(
								"slick-slide slick-active slick-center slick-visible slick-current"
							)
							.removeAttr("aria-hidden")
							.removeAttr("data-slick-index")
							.each(function () {
								t(this).attr("style", t(this).data("originalStyling"));
							}),
						i.$slideTrack.children(this.options.slide).detach(),
						i.$slideTrack.detach(),
						i.$list.detach(),
						i.$slider.append(i.$slides)),
					i.cleanUpRows(),
					i.$slider.removeClass("slick-slider"),
					i.$slider.removeClass("slick-initialized"),
					i.$slider.removeClass("slick-dotted"),
					(i.unslicked = !0),
					e || i.$slider.trigger("destroy", [i]);
			}),
			(e.prototype.disableTransition = function (t) {
				var e = this,
					i = {};
				(i[e.transitionType] = ""),
					!1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
			}),
			(e.prototype.fadeSlide = function (t, e) {
				var i = this;
				!1 === i.cssTransitions
					? (i.$slides.eq(t).css({
							zIndex: i.options.zIndex,
					  }),
					  i.$slides.eq(t).animate(
							{
								opacity: 1,
							},
							i.options.speed,
							i.options.easing,
							e
					  ))
					: (i.applyTransition(t),
					  i.$slides.eq(t).css({
							opacity: 1,
							zIndex: i.options.zIndex,
					  }),
					  e &&
							setTimeout(function () {
								i.disableTransition(t), e.call();
							}, i.options.speed));
			}),
			(e.prototype.fadeSlideOut = function (t) {
				var e = this;
				!1 === e.cssTransitions
					? e.$slides.eq(t).animate(
							{
								opacity: 0,
								zIndex: e.options.zIndex - 2,
							},
							e.options.speed,
							e.options.easing
					  )
					: (e.applyTransition(t),
					  e.$slides.eq(t).css({
							opacity: 0,
							zIndex: e.options.zIndex - 2,
					  }));
			}),
			(e.prototype.filterSlides = e.prototype.slickFilter =
				function (t) {
					var e = this;
					null !== t &&
						((e.$slidesCache = e.$slides),
						e.unload(),
						e.$slideTrack.children(this.options.slide).detach(),
						e.$slidesCache.filter(t).appendTo(e.$slideTrack),
						e.reinit());
				}),
			(e.prototype.focusHandler = function () {
				var e = this;
				e.$slider
					.off("focus.slick blur.slick")
					.on("focus.slick blur.slick", "*", function (i) {
						i.stopImmediatePropagation();
						var n = t(this);
						setTimeout(function () {
							e.options.pauseOnFocus &&
								((e.focussed = n.is(":focus")), e.autoPlay());
						}, 0);
					});
			}),
			(e.prototype.getCurrent = e.prototype.slickCurrentSlide =
				function () {
					return this.currentSlide;
				}),
			(e.prototype.getDotCount = function () {
				var t = this,
					e = 0,
					i = 0,
					n = 0;
				if (!0 === t.options.infinite)
					if (t.slideCount <= t.options.slidesToShow) ++n;
					else
						for (; e < t.slideCount; )
							++n,
								(e = i + t.options.slidesToScroll),
								(i +=
									t.options.slidesToScroll <= t.options.slidesToShow
										? t.options.slidesToScroll
										: t.options.slidesToShow);
				else if (!0 === t.options.centerMode) n = t.slideCount;
				else if (t.options.asNavFor)
					for (; e < t.slideCount; )
						++n,
							(e = i + t.options.slidesToScroll),
							(i +=
								t.options.slidesToScroll <= t.options.slidesToShow
									? t.options.slidesToScroll
									: t.options.slidesToShow);
				else
					n =
						1 +
						Math.ceil(
							(t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
						);
				return n - 1;
			}),
			(e.prototype.getLeft = function (t) {
				var e,
					i,
					n,
					s,
					o = this,
					r = 0;
				return (
					(o.slideOffset = 0),
					(i = o.$slides.first().outerHeight(!0)),
					!0 === o.options.infinite
						? (o.slideCount > o.options.slidesToShow &&
								((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
								(s = -1),
								!0 === o.options.vertical &&
									!0 === o.options.centerMode &&
									(2 === o.options.slidesToShow
										? (s = -1.5)
										: 1 === o.options.slidesToShow && (s = -2)),
								(r = i * o.options.slidesToShow * s)),
						  o.slideCount % o.options.slidesToScroll != 0 &&
								t + o.options.slidesToScroll > o.slideCount &&
								o.slideCount > o.options.slidesToShow &&
								(t > o.slideCount
									? ((o.slideOffset =
											(o.options.slidesToShow - (t - o.slideCount)) *
											o.slideWidth *
											-1),
									  (r =
											(o.options.slidesToShow - (t - o.slideCount)) * i * -1))
									: ((o.slideOffset =
											(o.slideCount % o.options.slidesToScroll) *
											o.slideWidth *
											-1),
									  (r = (o.slideCount % o.options.slidesToScroll) * i * -1))))
						: t + o.options.slidesToShow > o.slideCount &&
						  ((o.slideOffset =
								(t + o.options.slidesToShow - o.slideCount) * o.slideWidth),
						  (r = (t + o.options.slidesToShow - o.slideCount) * i)),
					o.slideCount <= o.options.slidesToShow &&
						((o.slideOffset = 0), (r = 0)),
					!0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
						? (o.slideOffset =
								(o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 -
								(o.slideWidth * o.slideCount) / 2)
						: !0 === o.options.centerMode && !0 === o.options.infinite
						? (o.slideOffset +=
								o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
								o.slideWidth)
						: !0 === o.options.centerMode &&
						  ((o.slideOffset = 0),
						  (o.slideOffset +=
								o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
					(e =
						!1 === o.options.vertical
							? t * o.slideWidth * -1 + o.slideOffset
							: t * i * -1 + r),
					!0 === o.options.variableWidth &&
						((n =
							o.slideCount <= o.options.slidesToShow ||
							!1 === o.options.infinite
								? o.$slideTrack.children(".slick-slide").eq(t)
								: o.$slideTrack
										.children(".slick-slide")
										.eq(t + o.options.slidesToShow)),
						(e =
							!0 === o.options.rtl
								? n[0]
									? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
									: 0
								: n[0]
								? -1 * n[0].offsetLeft
								: 0),
						!0 === o.options.centerMode &&
							((n =
								o.slideCount <= o.options.slidesToShow ||
								!1 === o.options.infinite
									? o.$slideTrack.children(".slick-slide").eq(t)
									: o.$slideTrack
											.children(".slick-slide")
											.eq(t + o.options.slidesToShow + 1)),
							(e =
								!0 === o.options.rtl
									? n[0]
										? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
										: 0
									: n[0]
									? -1 * n[0].offsetLeft
									: 0),
							(e += (o.$list.width() - n.outerWidth()) / 2))),
					e
				);
			}),
			(e.prototype.getOption = e.prototype.slickGetOption =
				function (t) {
					return this.options[t];
				}),
			(e.prototype.getNavigableIndexes = function () {
				var t,
					e = this,
					i = 0,
					n = 0,
					s = [];
				for (
					!1 === e.options.infinite
						? (t = e.slideCount)
						: ((i = -1 * e.options.slidesToScroll),
						  (n = -1 * e.options.slidesToScroll),
						  (t = 2 * e.slideCount));
					i < t;

				)
					s.push(i),
						(i = n + e.options.slidesToScroll),
						(n +=
							e.options.slidesToScroll <= e.options.slidesToShow
								? e.options.slidesToScroll
								: e.options.slidesToShow);
				return s;
			}),
			(e.prototype.getSlick = function () {
				return this;
			}),
			(e.prototype.getSlideCount = function () {
				var e,
					i,
					n = this;
				return (
					(i =
						!0 === n.options.centerMode
							? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
							: 0),
					!0 === n.options.swipeToSlide
						? (n.$slideTrack.find(".slick-slide").each(function (s, o) {
								if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft)
									return (e = o), !1;
						  }),
						  Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1)
						: n.options.slidesToScroll
				);
			}),
			(e.prototype.goTo = e.prototype.slickGoTo =
				function (t, e) {
					this.changeSlide(
						{
							data: {
								message: "index",
								index: parseInt(t),
							},
						},
						e
					);
				}),
			(e.prototype.init = function (e) {
				var i = this;
				t(i.$slider).hasClass("slick-initialized") ||
					(t(i.$slider).addClass("slick-initialized"),
					i.buildRows(),
					i.buildOut(),
					i.setProps(),
					i.startLoad(),
					i.loadSlider(),
					i.initializeEvents(),
					i.updateArrows(),
					i.updateDots(),
					i.checkResponsive(!0),
					i.focusHandler()),
					e && i.$slider.trigger("init", [i]),
					!0 === i.options.accessibility && i.initADA(),
					i.options.autoplay && ((i.paused = !1), i.autoPlay());
			}),
			(e.prototype.initADA = function () {
				var e = this,
					i = Math.ceil(e.slideCount / e.options.slidesToShow),
					n = e.getNavigableIndexes().filter(function (t) {
						return t >= 0 && t < e.slideCount;
					});
				e.$slides
					.add(e.$slideTrack.find(".slick-cloned"))
					.attr({
						"aria-hidden": "true",
						tabindex: "-1",
					})
					.find("a, input, button, select")
					.attr({
						tabindex: "-1",
					}),
					null !== e.$dots &&
						(e.$slides
							.not(e.$slideTrack.find(".slick-cloned"))
							.each(function (i) {
								var s = n.indexOf(i);
								t(this).attr({
									role: "tabpanel",
									id: "slick-slide" + e.instanceUid + i,
									tabindex: -1,
								}),
									-1 !== s &&
										t(this).attr({
											"aria-describedby":
												"slick-slide-control" + e.instanceUid + s,
										});
							}),
						e.$dots
							.attr("role", "tablist")
							.find("li")
							.each(function (s) {
								var o = n[s];
								t(this).attr({
									role: "presentation",
								}),
									t(this)
										.find("button")
										.first()
										.attr({
											role: "tab",
											id: "slick-slide-control" + e.instanceUid + s,
											"aria-controls": "slick-slide" + e.instanceUid + o,
											"aria-label": s + 1 + " of " + i,
											"aria-selected": null,
											tabindex: "-1",
										});
							})
							.eq(e.currentSlide)
							.find("button")
							.attr({
								"aria-selected": "true",
								tabindex: "0",
							})
							.end());
				for (var s = e.currentSlide, o = s + e.options.slidesToShow; s < o; s++)
					e.$slides.eq(s).attr("tabindex", 0);
				e.activateADA();
			}),
			(e.prototype.initArrowEvents = function () {
				var t = this;
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					(t.$prevArrow.off("click.slick").on(
						"click.slick",
						{
							message: "previous",
						},
						t.changeSlide
					),
					t.$nextArrow.off("click.slick").on(
						"click.slick",
						{
							message: "next",
						},
						t.changeSlide
					),
					!0 === t.options.accessibility &&
						(t.$prevArrow.on("keydown.slick", t.keyHandler),
						t.$nextArrow.on("keydown.slick", t.keyHandler)));
			}),
			(e.prototype.initDotEvents = function () {
				var e = this;
				!0 === e.options.dots &&
					(t("li", e.$dots).on(
						"click.slick",
						{
							message: "index",
						},
						e.changeSlide
					),
					!0 === e.options.accessibility &&
						e.$dots.on("keydown.slick", e.keyHandler)),
					!0 === e.options.dots &&
						!0 === e.options.pauseOnDotsHover &&
						t("li", e.$dots)
							.on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
							.on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
			}),
			(e.prototype.initSlideEvents = function () {
				var e = this;
				e.options.pauseOnHover &&
					(e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
					e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
			}),
			(e.prototype.initializeEvents = function () {
				var e = this;
				e.initArrowEvents(),
					e.initDotEvents(),
					e.initSlideEvents(),
					e.$list.on(
						"touchstart.slick mousedown.slick",
						{
							action: "start",
						},
						e.swipeHandler
					),
					e.$list.on(
						"touchmove.slick mousemove.slick",
						{
							action: "move",
						},
						e.swipeHandler
					),
					e.$list.on(
						"touchend.slick mouseup.slick",
						{
							action: "end",
						},
						e.swipeHandler
					),
					e.$list.on(
						"touchcancel.slick mouseleave.slick",
						{
							action: "end",
						},
						e.swipeHandler
					),
					e.$list.on("click.slick", e.clickHandler),
					t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
					!0 === e.options.accessibility &&
						e.$list.on("keydown.slick", e.keyHandler),
					!0 === e.options.focusOnSelect &&
						t(e.$slideTrack).children().on("click.slick", e.selectHandler),
					t(window).on(
						"orientationchange.slick.slick-" + e.instanceUid,
						t.proxy(e.orientationChange, e)
					),
					t(window).on(
						"resize.slick.slick-" + e.instanceUid,
						t.proxy(e.resize, e)
					),
					t("[draggable!=true]", e.$slideTrack).on(
						"dragstart",
						e.preventDefault
					),
					t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
					t(e.setPosition);
			}),
			(e.prototype.initUI = function () {
				var t = this;
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					(t.$prevArrow.show(), t.$nextArrow.show()),
					!0 === t.options.dots &&
						t.slideCount > t.options.slidesToShow &&
						t.$dots.show();
			}),
			(e.prototype.keyHandler = function (t) {
				var e = this;
				t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
					(37 === t.keyCode && !0 === e.options.accessibility
						? e.changeSlide({
								data: {
									message: !0 === e.options.rtl ? "next" : "previous",
								},
						  })
						: 39 === t.keyCode &&
						  !0 === e.options.accessibility &&
						  e.changeSlide({
								data: {
									message: !0 === e.options.rtl ? "previous" : "next",
								},
						  }));
			}),
			(e.prototype.lazyLoad = function () {
				function e(e) {
					t("img[data-lazy]", e).each(function () {
						var e = t(this),
							i = t(this).attr("data-lazy"),
							n = t(this).attr("data-srcset"),
							s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
							r = document.createElement("img");
						(r.onload = function () {
							e.animate(
								{
									opacity: 0,
								},
								100,
								function () {
									n && (e.attr("srcset", n), s && e.attr("sizes", s)),
										e.attr("src", i).animate(
											{
												opacity: 1,
											},
											200,
											function () {
												e.removeAttr(
													"data-lazy data-srcset data-sizes"
												).removeClass("slick-loading");
											}
										),
										o.$slider.trigger("lazyLoaded", [o, e, i]);
								}
							);
						}),
							(r.onerror = function () {
								e
									.removeAttr("data-lazy")
									.removeClass("slick-loading")
									.addClass("slick-lazyload-error"),
									o.$slider.trigger("lazyLoadError", [o, e, i]);
							}),
							(r.src = i);
					});
				}
				var i,
					n,
					s,
					o = this;
				if (
					(!0 === o.options.centerMode
						? !0 === o.options.infinite
							? (s =
									(n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
									o.options.slidesToShow +
									2)
							: ((n = Math.max(
									0,
									o.currentSlide - (o.options.slidesToShow / 2 + 1)
							  )),
							  (s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
						: ((n = o.options.infinite
								? o.options.slidesToShow + o.currentSlide
								: o.currentSlide),
						  (s = Math.ceil(n + o.options.slidesToShow)),
						  !0 === o.options.fade &&
								(n > 0 && n--, s <= o.slideCount && s++)),
					(i = o.$slider.find(".slick-slide").slice(n, s)),
					"anticipated" === o.options.lazyLoad)
				)
					for (
						var r = n - 1, a = s, l = o.$slider.find(".slick-slide"), u = 0;
						u < o.options.slidesToScroll;
						u++
					)
						r < 0 && (r = o.slideCount - 1),
							(i = (i = i.add(l.eq(r))).add(l.eq(a))),
							r--,
							a++;
				e(i),
					o.slideCount <= o.options.slidesToShow
						? e(o.$slider.find(".slick-slide"))
						: o.currentSlide >= o.slideCount - o.options.slidesToShow
						? e(
								o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)
						  )
						: 0 === o.currentSlide &&
						  e(
								o.$slider
									.find(".slick-cloned")
									.slice(-1 * o.options.slidesToShow)
						  );
			}),
			(e.prototype.loadSlider = function () {
				var t = this;
				t.setPosition(),
					t.$slideTrack.css({
						opacity: 1,
					}),
					t.$slider.removeClass("slick-loading"),
					t.initUI(),
					"progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
			}),
			(e.prototype.next = e.prototype.slickNext =
				function () {
					this.changeSlide({
						data: {
							message: "next",
						},
					});
				}),
			(e.prototype.orientationChange = function () {
				this.checkResponsive(), this.setPosition();
			}),
			(e.prototype.pause = e.prototype.slickPause =
				function () {
					this.autoPlayClear(), (this.paused = !0);
				}),
			(e.prototype.play = e.prototype.slickPlay =
				function () {
					var t = this;
					t.autoPlay(),
						(t.options.autoplay = !0),
						(t.paused = !1),
						(t.focussed = !1),
						(t.interrupted = !1);
				}),
			(e.prototype.postSlide = function (e) {
				var i = this;
				i.unslicked ||
					(i.$slider.trigger("afterChange", [i, e]),
					(i.animating = !1),
					i.slideCount > i.options.slidesToShow && i.setPosition(),
					(i.swipeLeft = null),
					i.options.autoplay && i.autoPlay(),
					!0 === i.options.accessibility &&
						(i.initADA(),
						i.options.focusOnChange &&
							t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
			}),
			(e.prototype.prev = e.prototype.slickPrev =
				function () {
					this.changeSlide({
						data: {
							message: "previous",
						},
					});
				}),
			(e.prototype.preventDefault = function (t) {
				t.preventDefault();
			}),
			(e.prototype.progressiveLazyLoad = function (e) {
				e = e || 1;
				var i,
					n,
					s,
					o,
					r,
					a = this,
					l = t("img[data-lazy]", a.$slider);
				l.length
					? ((i = l.first()),
					  (n = i.attr("data-lazy")),
					  (s = i.attr("data-srcset")),
					  (o = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
					  ((r = document.createElement("img")).onload = function () {
							s && (i.attr("srcset", s), o && i.attr("sizes", o)),
								i
									.attr("src", n)
									.removeAttr("data-lazy data-srcset data-sizes")
									.removeClass("slick-loading"),
								!0 === a.options.adaptiveHeight && a.setPosition(),
								a.$slider.trigger("lazyLoaded", [a, i, n]),
								a.progressiveLazyLoad();
					  }),
					  (r.onerror = function () {
							e < 3
								? setTimeout(function () {
										a.progressiveLazyLoad(e + 1);
								  }, 500)
								: (i
										.removeAttr("data-lazy")
										.removeClass("slick-loading")
										.addClass("slick-lazyload-error"),
								  a.$slider.trigger("lazyLoadError", [a, i, n]),
								  a.progressiveLazyLoad());
					  }),
					  (r.src = n))
					: a.$slider.trigger("allImagesLoaded", [a]);
			}),
			(e.prototype.refresh = function (e) {
				var i,
					n,
					s = this;
				(n = s.slideCount - s.options.slidesToShow),
					!s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
					s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
					(i = s.currentSlide),
					s.destroy(!0),
					t.extend(s, s.initials, {
						currentSlide: i,
					}),
					s.init(),
					e ||
						s.changeSlide(
							{
								data: {
									message: "index",
									index: i,
								},
							},
							!1
						);
			}),
			(e.prototype.registerBreakpoints = function () {
				var e,
					i,
					n,
					s = this,
					o = s.options.responsive || null;
				if ("array" === t.type(o) && o.length) {
					for (e in ((s.respondTo = s.options.respondTo || "window"), o))
						if (((n = s.breakpoints.length - 1), o.hasOwnProperty(e))) {
							for (i = o[e].breakpoint; n >= 0; )
								s.breakpoints[n] &&
									s.breakpoints[n] === i &&
									s.breakpoints.splice(n, 1),
									n--;
							s.breakpoints.push(i), (s.breakpointSettings[i] = o[e].settings);
						}
					s.breakpoints.sort(function (t, e) {
						return s.options.mobileFirst ? t - e : e - t;
					});
				}
			}),
			(e.prototype.reinit = function () {
				var e = this;
				(e.$slides = e.$slideTrack
					.children(e.options.slide)
					.addClass("slick-slide")),
					(e.slideCount = e.$slides.length),
					e.currentSlide >= e.slideCount &&
						0 !== e.currentSlide &&
						(e.currentSlide = e.currentSlide - e.options.slidesToScroll),
					e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
					e.registerBreakpoints(),
					e.setProps(),
					e.setupInfinite(),
					e.buildArrows(),
					e.updateArrows(),
					e.initArrowEvents(),
					e.buildDots(),
					e.updateDots(),
					e.initDotEvents(),
					e.cleanUpSlideEvents(),
					e.initSlideEvents(),
					e.checkResponsive(!1, !0),
					!0 === e.options.focusOnSelect &&
						t(e.$slideTrack).children().on("click.slick", e.selectHandler),
					e.setSlideClasses(
						"number" == typeof e.currentSlide ? e.currentSlide : 0
					),
					e.setPosition(),
					e.focusHandler(),
					(e.paused = !e.options.autoplay),
					e.autoPlay(),
					e.$slider.trigger("reInit", [e]);
			}),
			(e.prototype.resize = function () {
				var e = this;
				t(window).width() !== e.windowWidth &&
					(clearTimeout(e.windowDelay),
					(e.windowDelay = window.setTimeout(function () {
						(e.windowWidth = t(window).width()),
							e.checkResponsive(),
							e.unslicked || e.setPosition();
					}, 50)));
			}),
			(e.prototype.removeSlide = e.prototype.slickRemove =
				function (t, e, i) {
					var n = this;
					if (
						((t =
							"boolean" == typeof t
								? !0 === (e = t)
									? 0
									: n.slideCount - 1
								: !0 === e
								? --t
								: t),
						n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
					)
						return !1;
					n.unload(),
						!0 === i
							? n.$slideTrack.children().remove()
							: n.$slideTrack.children(this.options.slide).eq(t).remove(),
						(n.$slides = n.$slideTrack.children(this.options.slide)),
						n.$slideTrack.children(this.options.slide).detach(),
						n.$slideTrack.append(n.$slides),
						(n.$slidesCache = n.$slides),
						n.reinit();
				}),
			(e.prototype.setCSS = function (t) {
				var e,
					i,
					n = this,
					s = {};
				!0 === n.options.rtl && (t = -t),
					(e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
					(i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
					(s[n.positionProp] = t),
					!1 === n.transformsEnabled
						? n.$slideTrack.css(s)
						: ((s = {}),
						  !1 === n.cssTransitions
								? ((s[n.animType] = "translate(" + e + ", " + i + ")"),
								  n.$slideTrack.css(s))
								: ((s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"),
								  n.$slideTrack.css(s)));
			}),
			(e.prototype.setDimensions = function () {
				var t = this;
				!1 === t.options.vertical
					? !0 === t.options.centerMode &&
					  t.$list.css({
							padding: "0px " + t.options.centerPadding,
					  })
					: (t.$list.height(
							t.$slides.first().outerHeight(!0) * t.options.slidesToShow
					  ),
					  !0 === t.options.centerMode &&
							t.$list.css({
								padding: t.options.centerPadding + " 0px",
							})),
					(t.listWidth = t.$list.width()),
					(t.listHeight = t.$list.height()),
					!1 === t.options.vertical && !1 === t.options.variableWidth
						? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
						  t.$slideTrack.width(
								Math.ceil(
									t.slideWidth * t.$slideTrack.children(".slick-slide").length
								)
						  ))
						: !0 === t.options.variableWidth
						? t.$slideTrack.width(5e3 * t.slideCount)
						: ((t.slideWidth = Math.ceil(t.listWidth)),
						  t.$slideTrack.height(
								Math.ceil(
									t.$slides.first().outerHeight(!0) *
										t.$slideTrack.children(".slick-slide").length
								)
						  ));
				var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
				!1 === t.options.variableWidth &&
					t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
			}),
			(e.prototype.setFade = function () {
				var e,
					i = this;
				i.$slides.each(function (n, s) {
					(e = i.slideWidth * n * -1),
						!0 === i.options.rtl
							? t(s).css({
									position: "relative",
									right: e,
									top: 0,
									zIndex: i.options.zIndex - 2,
									opacity: 0,
							  })
							: t(s).css({
									position: "relative",
									left: e,
									top: 0,
									zIndex: i.options.zIndex - 2,
									opacity: 0,
							  });
				}),
					i.$slides.eq(i.currentSlide).css({
						zIndex: i.options.zIndex - 1,
						opacity: 1,
					});
			}),
			(e.prototype.setHeight = function () {
				var t = this;
				if (
					1 === t.options.slidesToShow &&
					!0 === t.options.adaptiveHeight &&
					!1 === t.options.vertical
				) {
					var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
					t.$list.css("height", e);
				}
			}),
			(e.prototype.setOption = e.prototype.slickSetOption =
				function () {
					var e,
						i,
						n,
						s,
						o,
						r = this,
						a = !1;
					if (
						("object" === t.type(arguments[0])
							? ((n = arguments[0]), (a = arguments[1]), (o = "multiple"))
							: "string" === t.type(arguments[0]) &&
							  ((n = arguments[0]),
							  (s = arguments[1]),
							  (a = arguments[2]),
							  "responsive" === arguments[0] &&
							  "array" === t.type(arguments[1])
									? (o = "responsive")
									: void 0 !== arguments[1] && (o = "single")),
						"single" === o)
					)
						r.options[n] = s;
					else if ("multiple" === o)
						t.each(n, function (t, e) {
							r.options[t] = e;
						});
					else if ("responsive" === o)
						for (i in s)
							if ("array" !== t.type(r.options.responsive))
								r.options.responsive = [s[i]];
							else {
								for (e = r.options.responsive.length - 1; e >= 0; )
									r.options.responsive[e].breakpoint === s[i].breakpoint &&
										r.options.responsive.splice(e, 1),
										e--;
								r.options.responsive.push(s[i]);
							}
					a && (r.unload(), r.reinit());
				}),
			(e.prototype.setPosition = function () {
				var t = this;
				t.setDimensions(),
					t.setHeight(),
					!1 === t.options.fade
						? t.setCSS(t.getLeft(t.currentSlide))
						: t.setFade(),
					t.$slider.trigger("setPosition", [t]);
			}),
			(e.prototype.setProps = function () {
				var t = this,
					e = document.body.style;
				(t.positionProp = !0 === t.options.vertical ? "top" : "left"),
					"top" === t.positionProp
						? t.$slider.addClass("slick-vertical")
						: t.$slider.removeClass("slick-vertical"),
					(void 0 === e.WebkitTransition &&
						void 0 === e.MozTransition &&
						void 0 === e.msTransition) ||
						(!0 === t.options.useCSS && (t.cssTransitions = !0)),
					t.options.fade &&
						("number" == typeof t.options.zIndex
							? t.options.zIndex < 3 && (t.options.zIndex = 3)
							: (t.options.zIndex = t.defaults.zIndex)),
					void 0 !== e.OTransform &&
						((t.animType = "OTransform"),
						(t.transformType = "-o-transform"),
						(t.transitionType = "OTransition"),
						void 0 === e.perspectiveProperty &&
							void 0 === e.webkitPerspective &&
							(t.animType = !1)),
					void 0 !== e.MozTransform &&
						((t.animType = "MozTransform"),
						(t.transformType = "-moz-transform"),
						(t.transitionType = "MozTransition"),
						void 0 === e.perspectiveProperty &&
							void 0 === e.MozPerspective &&
							(t.animType = !1)),
					void 0 !== e.webkitTransform &&
						((t.animType = "webkitTransform"),
						(t.transformType = "-webkit-transform"),
						(t.transitionType = "webkitTransition"),
						void 0 === e.perspectiveProperty &&
							void 0 === e.webkitPerspective &&
							(t.animType = !1)),
					void 0 !== e.msTransform &&
						((t.animType = "msTransform"),
						(t.transformType = "-ms-transform"),
						(t.transitionType = "msTransition"),
						void 0 === e.msTransform && (t.animType = !1)),
					void 0 !== e.transform &&
						!1 !== t.animType &&
						((t.animType = "transform"),
						(t.transformType = "transform"),
						(t.transitionType = "transition")),
					(t.transformsEnabled =
						t.options.useTransform && null !== t.animType && !1 !== t.animType);
			}),
			(e.prototype.setSlideClasses = function (t) {
				var e,
					i,
					n,
					s,
					o = this;
				if (
					((i = o.$slider
						.find(".slick-slide")
						.removeClass("slick-active slick-center slick-current")
						.attr("aria-hidden", "true")),
					o.$slides.eq(t).addClass("slick-current"),
					!0 === o.options.centerMode)
				) {
					var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
					(e = Math.floor(o.options.slidesToShow / 2)),
						!0 === o.options.infinite &&
							(t >= e && t <= o.slideCount - 1 - e
								? o.$slides
										.slice(t - e + r, t + e + 1)
										.addClass("slick-active")
										.attr("aria-hidden", "false")
								: ((n = o.options.slidesToShow + t),
								  i
										.slice(n - e + 1 + r, n + e + 2)
										.addClass("slick-active")
										.attr("aria-hidden", "false")),
							0 === t
								? i
										.eq(i.length - 1 - o.options.slidesToShow)
										.addClass("slick-center")
								: t === o.slideCount - 1 &&
								  i.eq(o.options.slidesToShow).addClass("slick-center")),
						o.$slides.eq(t).addClass("slick-center");
				} else
					t >= 0 && t <= o.slideCount - o.options.slidesToShow
						? o.$slides
								.slice(t, t + o.options.slidesToShow)
								.addClass("slick-active")
								.attr("aria-hidden", "false")
						: i.length <= o.options.slidesToShow
						? i.addClass("slick-active").attr("aria-hidden", "false")
						: ((s = o.slideCount % o.options.slidesToShow),
						  (n = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
						  o.options.slidesToShow == o.options.slidesToScroll &&
						  o.slideCount - t < o.options.slidesToShow
								? i
										.slice(n - (o.options.slidesToShow - s), n + s)
										.addClass("slick-active")
										.attr("aria-hidden", "false")
								: i
										.slice(n, n + o.options.slidesToShow)
										.addClass("slick-active")
										.attr("aria-hidden", "false"));
				("ondemand" !== o.options.lazyLoad &&
					"anticipated" !== o.options.lazyLoad) ||
					o.lazyLoad();
			}),
			(e.prototype.setupInfinite = function () {
				var e,
					i,
					n,
					s = this;
				if (
					(!0 === s.options.fade && (s.options.centerMode = !1),
					!0 === s.options.infinite &&
						!1 === s.options.fade &&
						((i = null), s.slideCount > s.options.slidesToShow))
				) {
					for (
						n =
							!0 === s.options.centerMode
								? s.options.slidesToShow + 1
								: s.options.slidesToShow,
							e = s.slideCount;
						e > s.slideCount - n;
						e -= 1
					)
						(i = e - 1),
							t(s.$slides[i])
								.clone(!0)
								.attr("id", "")
								.attr("data-slick-index", i - s.slideCount)
								.prependTo(s.$slideTrack)
								.addClass("slick-cloned");
					for (e = 0; e < n + s.slideCount; e += 1)
						(i = e),
							t(s.$slides[i])
								.clone(!0)
								.attr("id", "")
								.attr("data-slick-index", i + s.slideCount)
								.appendTo(s.$slideTrack)
								.addClass("slick-cloned");
					s.$slideTrack
						.find(".slick-cloned")
						.find("[id]")
						.each(function () {
							t(this).attr("id", "");
						});
				}
			}),
			(e.prototype.interrupt = function (t) {
				t || this.autoPlay(), (this.interrupted = t);
			}),
			(e.prototype.selectHandler = function (e) {
				var i = this,
					n = t(e.target).is(".slick-slide")
						? t(e.target)
						: t(e.target).parents(".slick-slide"),
					s = parseInt(n.attr("data-slick-index"));
				s || (s = 0),
					i.slideCount <= i.options.slidesToShow
						? i.slideHandler(s, !1, !0)
						: i.slideHandler(s);
			}),
			(e.prototype.slideHandler = function (t, e, i) {
				var n,
					s,
					o,
					r,
					a,
					l = null,
					u = this;
				if (
					((e = e || !1),
					!(
						(!0 === u.animating && !0 === u.options.waitForAnimate) ||
						(!0 === u.options.fade && u.currentSlide === t)
					))
				)
					if (
						(!1 === e && u.asNavFor(t),
						(n = t),
						(l = u.getLeft(n)),
						(r = u.getLeft(u.currentSlide)),
						(u.currentLeft = null === u.swipeLeft ? r : u.swipeLeft),
						!1 === u.options.infinite &&
							!1 === u.options.centerMode &&
							(t < 0 || t > u.getDotCount() * u.options.slidesToScroll))
					)
						!1 === u.options.fade &&
							((n = u.currentSlide),
							!0 !== i
								? u.animateSlide(r, function () {
										u.postSlide(n);
								  })
								: u.postSlide(n));
					else if (
						!1 === u.options.infinite &&
						!0 === u.options.centerMode &&
						(t < 0 || t > u.slideCount - u.options.slidesToScroll)
					)
						!1 === u.options.fade &&
							((n = u.currentSlide),
							!0 !== i
								? u.animateSlide(r, function () {
										u.postSlide(n);
								  })
								: u.postSlide(n));
					else {
						if (
							(u.options.autoplay && clearInterval(u.autoPlayTimer),
							(s =
								n < 0
									? u.slideCount % u.options.slidesToScroll != 0
										? u.slideCount - (u.slideCount % u.options.slidesToScroll)
										: u.slideCount + n
									: n >= u.slideCount
									? u.slideCount % u.options.slidesToScroll != 0
										? 0
										: n - u.slideCount
									: n),
							(u.animating = !0),
							u.$slider.trigger("beforeChange", [u, u.currentSlide, s]),
							(o = u.currentSlide),
							(u.currentSlide = s),
							u.setSlideClasses(u.currentSlide),
							u.options.asNavFor &&
								(a = (a = u.getNavTarget()).slick("getSlick")).slideCount <=
									a.options.slidesToShow &&
								a.setSlideClasses(u.currentSlide),
							u.updateDots(),
							u.updateArrows(),
							!0 === u.options.fade)
						)
							return (
								!0 !== i
									? (u.fadeSlideOut(o),
									  u.fadeSlide(s, function () {
											u.postSlide(s);
									  }))
									: u.postSlide(s),
								void u.animateHeight()
							);
						!0 !== i
							? u.animateSlide(l, function () {
									u.postSlide(s);
							  })
							: u.postSlide(s);
					}
			}),
			(e.prototype.startLoad = function () {
				var t = this;
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					(t.$prevArrow.hide(), t.$nextArrow.hide()),
					!0 === t.options.dots &&
						t.slideCount > t.options.slidesToShow &&
						t.$dots.hide(),
					t.$slider.addClass("slick-loading");
			}),
			(e.prototype.swipeDirection = function () {
				var t,
					e,
					i,
					n,
					s = this;
				return (
					(t = s.touchObject.startX - s.touchObject.curX),
					(e = s.touchObject.startY - s.touchObject.curY),
					(i = Math.atan2(e, t)),
					(n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
					n <= 45 && n >= 0
						? !1 === s.options.rtl
							? "left"
							: "right"
						: n <= 360 && n >= 315
						? !1 === s.options.rtl
							? "left"
							: "right"
						: n >= 135 && n <= 225
						? !1 === s.options.rtl
							? "right"
							: "left"
						: !0 === s.options.verticalSwiping
						? n >= 35 && n <= 135
							? "down"
							: "up"
						: "vertical"
				);
			}),
			(e.prototype.swipeEnd = function (t) {
				var e,
					i,
					n = this;
				if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
					return (n.scrolling = !1), !1;
				if (
					((n.interrupted = !1),
					(n.shouldClick = !(n.touchObject.swipeLength > 10)),
					void 0 === n.touchObject.curX)
				)
					return !1;
				if (
					(!0 === n.touchObject.edgeHit &&
						n.$slider.trigger("edge", [n, n.swipeDirection()]),
					n.touchObject.swipeLength >= n.touchObject.minSwipe)
				) {
					switch ((i = n.swipeDirection())) {
						case "left":
						case "down":
							(e = n.options.swipeToSlide
								? n.checkNavigable(n.currentSlide + n.getSlideCount())
								: n.currentSlide + n.getSlideCount()),
								(n.currentDirection = 0);
							break;
						case "right":
						case "up":
							(e = n.options.swipeToSlide
								? n.checkNavigable(n.currentSlide - n.getSlideCount())
								: n.currentSlide - n.getSlideCount()),
								(n.currentDirection = 1);
					}
					"vertical" != i &&
						(n.slideHandler(e),
						(n.touchObject = {}),
						n.$slider.trigger("swipe", [n, i]));
				} else
					n.touchObject.startX !== n.touchObject.curX &&
						(n.slideHandler(n.currentSlide), (n.touchObject = {}));
			}),
			(e.prototype.swipeHandler = function (t) {
				var e = this;
				if (
					!(
						!1 === e.options.swipe ||
						("ontouchend" in document && !1 === e.options.swipe) ||
						(!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
					)
				)
					switch (
						((e.touchObject.fingerCount =
							t.originalEvent && void 0 !== t.originalEvent.touches
								? t.originalEvent.touches.length
								: 1),
						(e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
						!0 === e.options.verticalSwiping &&
							(e.touchObject.minSwipe =
								e.listHeight / e.options.touchThreshold),
						t.data.action)
					) {
						case "start":
							e.swipeStart(t);
							break;
						case "move":
							e.swipeMove(t);
							break;
						case "end":
							e.swipeEnd(t);
					}
			}),
			(e.prototype.swipeMove = function (t) {
				var e,
					i,
					n,
					s,
					o,
					r,
					a = this;
				return (
					(o = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
					!(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
						((e = a.getLeft(a.currentSlide)),
						(a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
						(a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
						(a.touchObject.swipeLength = Math.round(
							Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
						)),
						(r = Math.round(
							Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
						)),
						!a.options.verticalSwiping && !a.swiping && r > 4
							? ((a.scrolling = !0), !1)
							: (!0 === a.options.verticalSwiping &&
									(a.touchObject.swipeLength = r),
							  (i = a.swipeDirection()),
							  void 0 !== t.originalEvent &&
									a.touchObject.swipeLength > 4 &&
									((a.swiping = !0), t.preventDefault()),
							  (s =
									(!1 === a.options.rtl ? 1 : -1) *
									(a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
							  !0 === a.options.verticalSwiping &&
									(s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
							  (n = a.touchObject.swipeLength),
							  (a.touchObject.edgeHit = !1),
							  !1 === a.options.infinite &&
									((0 === a.currentSlide && "right" === i) ||
										(a.currentSlide >= a.getDotCount() && "left" === i)) &&
									((n = a.touchObject.swipeLength * a.options.edgeFriction),
									(a.touchObject.edgeHit = !0)),
							  !1 === a.options.vertical
									? (a.swipeLeft = e + n * s)
									: (a.swipeLeft =
											e + n * (a.$list.height() / a.listWidth) * s),
							  !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s),
							  !0 !== a.options.fade &&
									!1 !== a.options.touchMove &&
									(!0 === a.animating
										? ((a.swipeLeft = null), !1)
										: void a.setCSS(a.swipeLeft))))
				);
			}),
			(e.prototype.swipeStart = function (t) {
				var e,
					i = this;
				if (
					((i.interrupted = !0),
					1 !== i.touchObject.fingerCount ||
						i.slideCount <= i.options.slidesToShow)
				)
					return (i.touchObject = {}), !1;
				void 0 !== t.originalEvent &&
					void 0 !== t.originalEvent.touches &&
					(e = t.originalEvent.touches[0]),
					(i.touchObject.startX = i.touchObject.curX =
						void 0 !== e ? e.pageX : t.clientX),
					(i.touchObject.startY = i.touchObject.curY =
						void 0 !== e ? e.pageY : t.clientY),
					(i.dragging = !0);
			}),
			(e.prototype.unfilterSlides = e.prototype.slickUnfilter =
				function () {
					var t = this;
					null !== t.$slidesCache &&
						(t.unload(),
						t.$slideTrack.children(this.options.slide).detach(),
						t.$slidesCache.appendTo(t.$slideTrack),
						t.reinit());
				}),
			(e.prototype.unload = function () {
				var e = this;
				t(".slick-cloned", e.$slider).remove(),
					e.$dots && e.$dots.remove(),
					e.$prevArrow &&
						e.htmlExpr.test(e.options.prevArrow) &&
						e.$prevArrow.remove(),
					e.$nextArrow &&
						e.htmlExpr.test(e.options.nextArrow) &&
						e.$nextArrow.remove(),
					e.$slides
						.removeClass("slick-slide slick-active slick-visible slick-current")
						.attr("aria-hidden", "true")
						.css("width", "");
			}),
			(e.prototype.unslick = function (t) {
				var e = this;
				e.$slider.trigger("unslick", [e, t]), e.destroy();
			}),
			(e.prototype.updateArrows = function () {
				var t = this;
				Math.floor(t.options.slidesToShow / 2),
					!0 === t.options.arrows &&
						t.slideCount > t.options.slidesToShow &&
						!t.options.infinite &&
						(t.$prevArrow
							.removeClass("slick-disabled")
							.attr("aria-disabled", "false"),
						t.$nextArrow
							.removeClass("slick-disabled")
							.attr("aria-disabled", "false"),
						0 === t.currentSlide
							? (t.$prevArrow
									.addClass("slick-disabled")
									.attr("aria-disabled", "true"),
							  t.$nextArrow
									.removeClass("slick-disabled")
									.attr("aria-disabled", "false"))
							: t.currentSlide >= t.slideCount - t.options.slidesToShow &&
							  !1 === t.options.centerMode
							? (t.$nextArrow
									.addClass("slick-disabled")
									.attr("aria-disabled", "true"),
							  t.$prevArrow
									.removeClass("slick-disabled")
									.attr("aria-disabled", "false"))
							: t.currentSlide >= t.slideCount - 1 &&
							  !0 === t.options.centerMode &&
							  (t.$nextArrow
									.addClass("slick-disabled")
									.attr("aria-disabled", "true"),
							  t.$prevArrow
									.removeClass("slick-disabled")
									.attr("aria-disabled", "false")));
			}),
			(e.prototype.updateDots = function () {
				var t = this;
				null !== t.$dots &&
					(t.$dots.find("li").removeClass("slick-active").end(),
					t.$dots
						.find("li")
						.eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
						.addClass("slick-active"));
			}),
			(e.prototype.visibility = function () {
				var t = this;
				t.options.autoplay &&
					(document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
			}),
			(t.fn.slick = function () {
				var t,
					i,
					n = this,
					s = arguments[0],
					o = Array.prototype.slice.call(arguments, 1),
					r = n.length;
				for (t = 0; t < r; t++)
					if (
						("object" == typeof s || void 0 === s
							? (n[t].slick = new e(n[t], s))
							: (i = n[t].slick[s].apply(n[t].slick, o)),
						void 0 !== i)
					)
						return i;
				return n;
			});
	}),
	(function (t) {
		"use strict";

		function e(e, n) {
			(this.elmt = e),
				(this.settings = t.extend({}, i, t.vegas.defaults, n)),
				(this.slide = this.settings.slide),
				(this.total = this.settings.slides.length),
				(this.noshow = this.total < 2),
				(this.paused = !this.settings.autoplay || this.noshow),
				(this.ended = !1),
				(this.$elmt = t(e)),
				(this.$timer = null),
				(this.$overlay = null),
				(this.$slide = null),
				(this.timeout = null),
				(this.first = !0),
				(this.transitions = [
					"fade",
					"fade2",
					"blur",
					"blur2",
					"flash",
					"flash2",
					"negative",
					"negative2",
					"burn",
					"burn2",
					"slideLeft",
					"slideLeft2",
					"slideRight",
					"slideRight2",
					"slideUp",
					"slideUp2",
					"slideDown",
					"slideDown2",
					"zoomIn",
					"zoomIn2",
					"zoomOut",
					"zoomOut2",
					"swirlLeft",
					"swirlLeft2",
					"swirlRight",
					"swirlRight2",
				]),
				(this.animations = [
					"kenburns",
					"kenburnsLeft",
					"kenburnsRight",
					"kenburnsUp",
					"kenburnsUpLeft",
					"kenburnsUpRight",
					"kenburnsDown",
					"kenburnsDownLeft",
					"kenburnsDownRight",
				]),
				this.settings.transitionRegister instanceof Array ||
					(this.settings.transitionRegister = [
						this.settings.transitionRegister,
					]),
				this.settings.animationRegister instanceof Array ||
					(this.settings.animationRegister = [this.settings.animationRegister]),
				(this.transitions = this.transitions.concat(
					this.settings.transitionRegister
				)),
				(this.animations = this.animations.concat(
					this.settings.animationRegister
				)),
				(this.support = {
					objectFit: "objectFit" in document.body.style,
					transition:
						"transition" in document.body.style ||
						"WebkitTransition" in document.body.style,
					video: t.vegas.isVideoCompatible(),
				}),
				!0 === this.settings.shuffle && this.shuffle(),
				this._init();
		}
		var i = {
				slide: 0,
				delay: 5e3,
				loop: !0,
				preload: !1,
				preloadImage: !1,
				preloadVideo: !1,
				timer: !0,
				overlay: !1,
				autoplay: !0,
				shuffle: !1,
				cover: !0,
				color: null,
				align: "center",
				valign: "center",
				firstTransition: null,
				firstTransitionDuration: null,
				transition: "fade",
				transitionDuration: 1e3,
				transitionRegister: [],
				animation: null,
				animationDuration: "auto",
				animationRegister: [],
				slidesToKeep: 1,
				init: function () {},
				play: function () {},
				pause: function () {},
				walk: function () {},
				slides: [],
			},
			n = {};
		(e.prototype = {
			_init: function () {
				var e,
					i,
					n,
					s,
					o = "BODY" === this.elmt.tagName,
					r = this.settings.timer,
					a = this.settings.overlay,
					l = this;
				this._preload(),
					o ||
						((i = t('<div class="vegas-content-scrollable">')),
						(e = t('<div class="vegas-content">')
							.css("overflow", this.$elmt.css("overflow"))
							.css("padding", this.$elmt.css("padding"))),
						this.$elmt.css("padding") ||
							e
								.css("padding-top", this.$elmt.css("padding-top"))
								.css("padding-bottom", this.$elmt.css("padding-bottom"))
								.css("padding-left", this.$elmt.css("padding-left"))
								.css("padding-right", this.$elmt.css("padding-right")),
						this.$elmt.css("padding", 0),
						this.$elmt.clone(!0).children().appendTo(e),
						(this.elmt.innerHTML = "")),
					r &&
						this.support.transition &&
						((s = t(
							'<div class="vegas-timer"><div class="vegas-timer-progress">'
						)),
						(this.$timer = s),
						this.$elmt.prepend(s)),
					a &&
						((n = t('<div class="vegas-overlay">')),
						"string" == typeof a && n.css("background-image", "url(" + a + ")"),
						(this.$overlay = n),
						this.$elmt.prepend(n)),
					this.$elmt.addClass("vegas-container"),
					o || (this.$elmt.append(i), i.append(e)),
					setTimeout(function () {
						l.trigger("init"),
							l._goto(l.slide),
							l.settings.autoplay && l.trigger("play");
					}, 1);
			},
			_preload: function () {
				var t;
				for (t = 0; t < this.settings.slides.length; t++)
					(this.settings.preload || this.settings.preloadImages) &&
						this.settings.slides[t].src &&
						(new Image().src = this.settings.slides[t].src),
						(this.settings.preload || this.settings.preloadVideos) &&
							this.support.video &&
							this.settings.slides[t].video &&
							(this.settings.slides[t].video instanceof Array
								? this._video(this.settings.slides[t].video)
								: this._video(this.settings.slides[t].video.src));
			},
			_random: function (t) {
				return t[Math.floor(Math.random() * t.length)];
			},
			_slideShow: function () {
				var t = this;
				1 < this.total &&
					!this.ended &&
					!this.paused &&
					!this.noshow &&
					(this.timeout = setTimeout(function () {
						t.next();
					}, this._options("delay")));
			},
			_timer: function (t) {
				var e = this;
				clearTimeout(this.timeout),
					this.$timer &&
						(this.$timer
							.removeClass("vegas-timer-running")
							.find("div")
							.css("transition-duration", "0ms"),
						this.ended ||
							this.paused ||
							this.noshow ||
							(t &&
								setTimeout(function () {
									e.$timer
										.addClass("vegas-timer-running")
										.find("div")
										.css(
											"transition-duration",
											e._options("delay") - 100 + "ms"
										);
								}, 100)));
			},
			_video: function (t) {
				var e,
					i,
					s = t.toString();
				return n[s]
					? n[s]
					: (t instanceof Array || (t = [t]),
					  ((e = document.createElement("video")).preload = !0),
					  t.forEach(function (t) {
							((i = document.createElement("source")).src = t),
								e.appendChild(i);
					  }),
					  (n[s] = e));
			},
			_fadeOutSound: function (t, e) {
				var i = this,
					n = e / 10,
					s = t.volume - 0.09;
				0 < s
					? ((t.volume = s),
					  setTimeout(function () {
							i._fadeOutSound(t, e);
					  }, n))
					: t.pause();
			},
			_fadeInSound: function (t, e) {
				var i = this,
					n = e / 10,
					s = t.volume + 0.09;
				s < 1 &&
					((t.volume = s),
					setTimeout(function () {
						i._fadeInSound(t, e);
					}, n));
			},
			_options: function (t, e) {
				return (
					void 0 === e && (e = this.slide),
					void 0 !== this.settings.slides[e][t]
						? this.settings.slides[e][t]
						: this.settings[t]
				);
			},
			_goto: function (e) {
				void 0 === this.settings.slides[e] && (e = 0), (this.slide = e);
				var i,
					n,
					s,
					o,
					r,
					a = this.$elmt.children(".vegas-slide"),
					l = this.settings.slides[e].src,
					u = this.settings.slides[e].video,
					c = this._options("delay"),
					d = this._options("align"),
					h = this._options("valign"),
					p = this._options("cover"),
					f = this._options("color") || this.$elmt.css("background-color"),
					g = this,
					m = a.length,
					v = this._options("transition"),
					y = this._options("transitionDuration"),
					_ = this._options("animation"),
					b = this._options("animationDuration");

				function D() {
					g._timer(!0),
						setTimeout(function () {
							v &&
								(g.support.transition
									? (a
											.css("transition", "all " + y + "ms")
											.addClass("vegas-transition-" + v + "-out"),
									  a.each(function () {
											var t = a.find("video").get(0);
											t && ((t.volume = 1), g._fadeOutSound(t, y));
									  }),
									  i
											.css("transition", "all " + y + "ms")
											.addClass("vegas-transition-" + v + "-in"))
									: i.fadeIn(y));
							for (var t = 0; t < a.length - g.settings.slidesToKeep; t++)
								a.eq(t).remove();
							g.trigger("walk"), g._slideShow();
						}, 100);
				}
				this.settings.firstTransition &&
					this.first &&
					(v = this.settings.firstTransition || v),
					this.settings.firstTransitionDuration &&
						this.first &&
						(y = this.settings.firstTransitionDuration || y),
					this.first && (this.first = !1),
					"repeat" !== p &&
						(!0 === p ? (p = "cover") : !1 === p && (p = "contain")),
					("random" === v || v instanceof Array) &&
						(v =
							v instanceof Array
								? this._random(v)
								: this._random(this.transitions)),
					("random" === _ || _ instanceof Array) &&
						(_ =
							_ instanceof Array
								? this._random(_)
								: this._random(this.animations)),
					("auto" === y || c < y) && (y = c),
					"auto" === b && (b = c),
					(i = t('<div class="vegas-slide"></div>')),
					this.support.transition && v && i.addClass("vegas-transition-" + v),
					this.support.video && u
						? (((o =
								u instanceof Array ? this._video(u) : this._video(u.src)).loop =
								void 0 === u.loop || u.loop),
						  (o.muted = void 0 === u.mute || u.mute),
						  !1 === o.muted
								? ((o.volume = 0), this._fadeInSound(o, y))
								: o.pause(),
						  (s = t(o).addClass("vegas-video").css("background-color", f)),
						  this.support.objectFit
								? s
										.css("object-position", d + " " + h)
										.css("object-fit", p)
										.css("width", "100%")
										.css("height", "100%")
								: "contain" === p &&
								  s.css("width", "100%").css("height", "100%"),
						  i.append(s))
						: ((r = new Image()),
						  (n = t('<div class="vegas-slide-inner"></div>')
								.css("background-image", 'url("' + l + '")')
								.css("background-color", f)
								.css("background-position", d + " " + h)),
						  "repeat" === p
								? n.css("background-repeat", "repeat")
								: n.css("background-size", p),
						  this.support.transition &&
								_ &&
								n
									.addClass("vegas-animation-" + _)
									.css("animation-duration", b + "ms"),
						  i.append(n)),
					this.support.transition || i.css("display", "none"),
					m ? a.eq(m - 1).after(i) : this.$elmt.prepend(i),
					a.css("transition", "all 0ms").each(function () {
						(this.className = "vegas-slide"),
							"VIDEO" === this.tagName && (this.className += " vegas-video"),
							v &&
								((this.className += " vegas-transition-" + v),
								(this.className += " vegas-transition-" + v + "-in"));
					}),
					g._timer(!1),
					o
						? (4 === o.readyState && (o.currentTime = 0), o.play(), D())
						: ((r.src = l), r.complete ? D() : (r.onload = D));
			},
			_end: function () {
				(this.ended = !this.settings.autoplay),
					this._timer(!1),
					this.trigger("end");
			},
			shuffle: function () {
				for (var t, e, i = this.total - 1; 0 < i; i--)
					(e = Math.floor(Math.random() * (i + 1))),
						(t = this.settings.slides[i]),
						(this.settings.slides[i] = this.settings.slides[e]),
						(this.settings.slides[e] = t);
			},
			play: function () {
				this.paused && ((this.paused = !1), this.next(), this.trigger("play"));
			},
			pause: function () {
				this._timer(!1), (this.paused = !0), this.trigger("pause");
			},
			toggle: function () {
				this.paused ? this.play() : this.pause();
			},
			playing: function () {
				return !this.paused && !this.noshow;
			},
			current: function (t) {
				return t
					? {
							slide: this.slide,
							data: this.settings.slides[this.slide],
					  }
					: this.slide;
			},
			jump: function (t) {
				t < 0 ||
					t > this.total - 1 ||
					t === this.slide ||
					((this.slide = t), this._goto(this.slide));
			},
			next: function () {
				if ((this.slide++, this.slide >= this.total)) {
					if (!this.settings.loop) return this._end();
					this.slide = 0;
				}
				this._goto(this.slide);
			},
			previous: function () {
				if ((this.slide--, this.slide < 0)) {
					if (!this.settings.loop) return void this.slide++;
					this.slide = this.total - 1;
				}
				this._goto(this.slide);
			},
			trigger: function (t) {
				var e;
				(e =
					"init" === t
						? [this.settings]
						: [this.slide, this.settings.slides[this.slide]]),
					this.$elmt.trigger("vegas" + t, e),
					"function" == typeof this.settings[t] &&
						this.settings[t].apply(this.$elmt, e);
			},
			options: function (e, n) {
				var s = this.settings.slides.slice();
				if ("object" == typeof e)
					this.settings = t.extend({}, i, t.vegas.defaults, e);
				else {
					if ("string" != typeof e) return this.settings;
					if (void 0 === n) return this.settings[e];
					this.settings[e] = n;
				}
				this.settings.slides !== s &&
					((this.total = this.settings.slides.length),
					(this.noshow = this.total < 2),
					this._preload());
			},
			destroy: function () {
				clearTimeout(this.timeout),
					this.$elmt.removeClass("vegas-container"),
					this.$elmt.find("> .vegas-slide").remove(),
					this.$elmt
						.find("> .vegas-wrapper")
						.clone(!0)
						.children()
						.appendTo(this.$elmt),
					this.$elmt.find("> .vegas-wrapper").remove(),
					this.settings.timer && this.$timer.remove(),
					this.settings.overlay && this.$overlay.remove(),
					(this.elmt._vegas = null);
			},
		}),
			(t.fn.vegas = function (t) {
				var i,
					n = arguments,
					s = !1;
				if (void 0 === t || "object" == typeof t)
					return this.each(function () {
						this._vegas || (this._vegas = new e(this, t));
					});
				if ("string" == typeof t) {
					if (
						(this.each(function () {
							var e = this._vegas;
							if (!e) throw new Error("No Vegas applied to this element.");
							"function" == typeof e[t] && "_" !== t[0]
								? (i = e[t].apply(e, [].slice.call(n, 1)))
								: (s = !0);
						}),
						s)
					)
						throw new Error('No method "' + t + '" in Vegas.');
					return void 0 !== i ? i : this;
				}
			}),
			(t.vegas = {}),
			(t.vegas.defaults = i),
			(t.vegas.isVideoCompatible = function () {
				return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(
					navigator.userAgent
				);
			});
	})(window.jQuery || window.Zepto || window.m4q),
	(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? e(exports)
			: "function" == typeof define && define.amd
			? define(["exports"], e)
			: e(((t = t || self).window = t.window || {}));
	})(this, function (t) {
		"use strict";

		function e(t, e) {
			(t.prototype = Object.create(e.prototype)),
				((t.prototype.constructor = t).__proto__ = e);
		}

		function i(t) {
			if (void 0 === t)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return t;
		}

		function n(t) {
			return "string" == typeof t;
		}

		function s(t) {
			return "function" == typeof t;
		}

		function o(t) {
			return "number" == typeof t;
		}

		function r(t) {
			return void 0 === t;
		}

		function a(t) {
			return "object" == typeof t;
		}

		function l(t) {
			return !1 !== t;
		}

		function u() {
			return "undefined" != typeof window;
		}

		function c(t) {
			return s(t) || n(t);
		}

		function d(t) {
			return (gt = ae(t, Zt)) && oi;
		}

		function h(t, e) {
			return console.warn(
				"Invalid property",
				t,
				"set to",
				e,
				"Missing plugin? gsap.registerPlugin()"
			);
		}

		function p(t, e) {
			return !e && console.warn(t);
		}

		function f(t, e) {
			return (t && (Zt[t] = e) && gt && (gt[t] = e)) || Zt;
		}

		function g() {
			return 0;
		}

		function m(t) {
			var e,
				i,
				n = t[0];
			if ((a(n) || s(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
				for (i = oe.length; i-- && !oe[i].targetTest(n); );
				e = oe[i];
			}
			for (i = t.length; i--; )
				(t[i] && (t[i]._gsap || (t[i]._gsap = new Ae(t[i], e)))) ||
					t.splice(i, 1);
			return t;
		}

		function v(t) {
			return t._gsap || m(he(t))[0]._gsap;
		}

		function y(t, e) {
			var i = t[e];
			return s(i) ? t[e]() : (r(i) && t.getAttribute(e)) || i;
		}

		function _(t, e) {
			return (t = t.split(",")).forEach(e) || t;
		}

		function b(t) {
			return Math.round(1e5 * t) / 1e5 || 0;
		}

		function D(t, e) {
			for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
			return n < i;
		}

		function w(t, e, i) {
			var n,
				s = o(t[1]),
				r = (s ? 2 : 1) + (e < 2 ? 0 : 1),
				a = t[r];
			if ((s && (a.duration = t[1]), (a.parent = i), e)) {
				for (n = a; i && !("immediateRender" in n); )
					(n = i.vars.defaults || {}), (i = l(i.vars.inherit) && i.parent);
				(a.immediateRender = l(n.immediateRender)),
					e < 2 ? (a.runBackwards = 1) : (a.startAt = t[r - 1]);
			}
			return a;
		}

		function x() {
			var t,
				e,
				i = te.length,
				n = te.slice(0);
			for (ee = {}, t = te.length = 0; t < i; t++)
				(e = n[t]) &&
					e._lazy &&
					(e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
		}

		function C(t, e, i, n) {
			te.length && x(), t.render(e, i, n), te.length && x();
		}

		function T(t) {
			var e = parseFloat(t);
			return (e || 0 === e) && (t + "").match(Kt).length < 2 ? e : t;
		}

		function k(t) {
			return t;
		}

		function S(t, e) {
			for (var i in e) i in t || (t[i] = e[i]);
			return t;
		}

		function E(t, e) {
			for (var i in e)
				i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
		}

		function A(t, e) {
			for (var i in e) t[i] = a(e[i]) ? A(t[i] || (t[i] = {}), e[i]) : e[i];
			return t;
		}

		function F(t, e) {
			var i,
				n = {};
			for (i in t) i in e || (n[i] = t[i]);
			return n;
		}

		function L(t) {
			var e = t.parent || dt,
				i = t.keyframes ? E : S;
			if (l(t.inherit)) for (; e; ) i(t, e.vars.defaults), (e = e.parent);
			return t;
		}

		function O(t, e, i, n) {
			void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
			var s = e._prev,
				o = e._next;
			s ? (s._next = o) : t[i] === e && (t[i] = o),
				o ? (o._prev = s) : t[n] === e && (t[n] = s),
				(e._next = e._prev = e.parent = null);
		}

		function $(t, e) {
			!t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
				(t._act = 0);
		}

		function M(t) {
			for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
			return t;
		}

		function N(t) {
			return t._repeat ? le(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
		}

		function P(t, e) {
			return (
				(t - e._start) * e._ts +
				(0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
			);
		}

		function I(t) {
			return (t._end = b(
				t._start + (t._tDur / Math.abs(t._ts || t._rts || It) || 0)
			));
		}

		function B(t, e) {
			var i;
			if (
				((e._time || (e._initted && !e._dur)) &&
					((i = P(t.rawTime(), e)),
					(!e._dur || ce(0, e.totalDuration(), i) - e._tTime > It) &&
						e.render(i, !0)),
				M(t)._dp && t._initted && t._time >= t._dur && t._ts)
			) {
				if (t._dur < t.duration())
					for (i = t; i._dp; )
						0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
				t._zTime = -It;
			}
		}

		function j(t, e, i, n) {
			return (
				e.parent && $(e),
				(e._start = b(i + e._delay)),
				(e._end = b(
					e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
				)),
				(function (t, e, i, n, s) {
					void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
					var o,
						r = t[n];
					if (s) for (o = e[s]; r && r[s] > o; ) r = r._prev;
					r
						? ((e._next = r._next), (r._next = e))
						: ((e._next = t[i]), (t[i] = e)),
						e._next ? (e._next._prev = e) : (t[n] = e),
						(e._prev = r),
						(e.parent = e._dp = t);
				})(t, e, "_first", "_last", t._sort ? "_start" : 0),
				(t._recent = e),
				n || B(t, e),
				t
			);
		}

		function z(t, e, i, n) {
			return (
				Pe(t, e),
				t._initted
					? !i &&
					  t._pt &&
					  ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
					  vt !== _e.frame
						? (te.push(t), (t._lazy = [e, n]), 1)
						: void 0
					: 1
			);
		}

		function q(t, e, i) {
			var n = t._repeat,
				s = b(e) || 0;
			return (
				(t._dur = s),
				(t._tDur = n ? (n < 0 ? 1e12 : b(s * (n + 1) + t._rDelay * n)) : s),
				t._time > s &&
					((t._time = s), (t._tTime = Math.min(t._tTime, t._tDur))),
				i || M(t.parent),
				t.parent && I(t),
				t
			);
		}

		function H(t) {
			return t instanceof Oe ? M(t) : q(t, t._dur);
		}

		function R(t, e) {
			var i,
				s,
				o = t.labels,
				r = t._recent || ue,
				a = t.duration() >= Pt ? r.endTime(!1) : t._dur;
			return n(e) && (isNaN(e) || e in o)
				? "<" === (i = e.charAt(0)) || ">" === i
					? ("<" === i ? r._start : r.endTime(0 <= r._repeat)) +
					  (parseFloat(e.substr(1)) || 0)
					: (i = e.indexOf("=")) < 0
					? (e in o || (o[e] = a), o[e])
					: ((s = +(e.charAt(i - 1) + e.substr(i + 1))),
					  1 < i ? R(t, e.substr(0, i - 1)) + s : a + s)
				: null == e
				? a
				: +e;
		}

		function W(t, e) {
			return t || 0 === t ? e(t) : e;
		}

		function X(t) {
			return (t + "").substr((parseFloat(t) + "").length);
		}

		function Y(t, e) {
			return (
				t &&
				a(t) &&
				"length" in t &&
				((!e && !t.length) || (t.length - 1 in t && a(t[0]))) &&
				!t.nodeType &&
				t !== ht
			);
		}

		function V(t) {
			return t.sort(function () {
				return 0.5 - Math.random();
			});
		}

		function U(t) {
			if (s(t)) return t;
			var e = a(t)
					? t
					: {
							each: t,
					  },
				i = Te(e.ease),
				o = e.from || 0,
				r = parseFloat(e.base) || 0,
				l = {},
				u = 0 < o && o < 1,
				c = isNaN(o) || u,
				d = e.axis,
				h = o,
				p = o;
			return (
				n(o)
					? (h = p =
							{
								center: 0.5,
								edges: 0.5,
								end: 1,
							}[o] || 0)
					: !u && c && ((h = o[0]), (p = o[1])),
				function (t, n, s) {
					var a,
						u,
						f,
						g,
						m,
						v,
						y,
						_,
						D,
						w = (s || e).length,
						x = l[w];
					if (!x) {
						if (!(D = "auto" === e.grid ? 0 : (e.grid || [1, Pt])[1])) {
							for (
								y = -Pt;
								y < (y = s[D++].getBoundingClientRect().left) && D < w;

							);
							D--;
						}
						for (
							x = l[w] = [],
								a = c ? Math.min(D, w) * h - 0.5 : o % D,
								u = c ? (w * p) / D - 0.5 : (o / D) | 0,
								_ = Pt,
								v = y = 0;
							v < w;
							v++
						)
							(f = (v % D) - a),
								(g = u - ((v / D) | 0)),
								(x[v] = m =
									d ? Math.abs("y" === d ? g : f) : qt(f * f + g * g)),
								y < m && (y = m),
								m < _ && (_ = m);
						"random" === o && V(x),
							(x.max = y - _),
							(x.min = _),
							(x.v = w =
								(parseFloat(e.amount) ||
									parseFloat(e.each) *
										(w < D
											? w - 1
											: d
											? "y" === d
												? w / D
												: D
											: Math.max(D, w / D)) ||
									0) * ("edges" === o ? -1 : 1)),
							(x.b = w < 0 ? r - w : r),
							(x.u = X(e.amount || e.each) || 0),
							(i = i && w < 0 ? Ce(i) : i);
					}
					return (
						(w = (x[t] - x.min) / x.max || 0),
						b(x.b + (i ? i(w) : w) * x.v) + x.u
					);
				}
			);
		}

		function G(t) {
			var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
			return function (i) {
				return (
					~~(Math.round(parseFloat(i) / t) * t * e) / e + (o(i) ? 0 : X(i))
				);
			};
		}

		function Q(t, e) {
			var i,
				n,
				r = Wt(t);
			return (
				!r &&
					a(t) &&
					((i = r = t.radius || Pt),
					t.values
						? ((t = he(t.values)), (n = !o(t[0])) && (i *= i))
						: (t = G(t.increment))),
				W(
					e,
					r
						? s(t)
							? function (e) {
									return (n = t(e)), Math.abs(n - e) <= i ? n : e;
							  }
							: function (e) {
									for (
										var s,
											r,
											a = parseFloat(n ? e.x : e),
											l = parseFloat(n ? e.y : 0),
											u = Pt,
											c = 0,
											d = t.length;
										d--;

									)
										(s = n
											? (s = t[d].x - a) * s + (r = t[d].y - l) * r
											: Math.abs(t[d] - a)) < u && ((u = s), (c = d));
									return (
										(c = !i || u <= i ? t[c] : e),
										n || c === e || o(e) ? c : c + X(e)
									);
							  }
						: G(t)
				)
			);
		}

		function K(t, e, i, n) {
			return W(Wt(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
				return Wt(t)
					? t[~~(Math.random() * t.length)]
					: (i = i || 1e-5) &&
							(n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
							~~(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n;
			});
		}

		function Z(t, e, i) {
			return W(i, function (i) {
				return t[~~e(i)];
			});
		}

		function J(t) {
			for (var e, i, n, s, o = 0, r = ""; ~(e = t.indexOf("random(", o)); )
				(n = t.indexOf(")", e)),
					(s = "[" === t.charAt(e + 7)),
					(i = t.substr(e + 7, n - e - 7).match(s ? Kt : Xt)),
					(r += t.substr(o, e - o) + K(s ? i : +i[0], +i[1], +i[2] || 1e-5)),
					(o = n + 1);
			return r + t.substr(o, t.length - o);
		}

		function tt(t, e, i) {
			var n,
				s,
				o,
				r = t.labels,
				a = Pt;
			for (n in r)
				(s = r[n] - e) < 0 == !!i &&
					s &&
					a > (s = Math.abs(s)) &&
					((o = n), (a = s));
			return o;
		}

		function et(t) {
			return $(t), t.progress() < 1 && fe(t, "onInterrupt"), t;
		}

		function it(t, e, i) {
			return (
				((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
					? e + (i - e) * t * 6
					: t < 0.5
					? i
					: 3 * t < 2
					? e + (i - e) * (2 / 3 - t) * 6
					: e) *
					ge +
					0.5) |
				0
			);
		}

		function nt(t, e, i) {
			var n,
				s,
				r,
				a,
				l,
				u,
				c,
				d,
				h,
				p,
				f = t ? (o(t) ? [t >> 16, (t >> 8) & ge, t & ge] : 0) : me.black;
			if (!f) {
				if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]))
					f = me[t];
				else if ("#" === t.charAt(0))
					4 === t.length &&
						(t =
							"#" +
							(n = t.charAt(1)) +
							n +
							(s = t.charAt(2)) +
							s +
							(r = t.charAt(3)) +
							r),
						(f = [
							(t = parseInt(t.substr(1), 16)) >> 16,
							(t >> 8) & ge,
							t & ge,
						]);
				else if ("hsl" === t.substr(0, 3))
					if (((f = p = t.match(Xt)), e)) {
						if (~t.indexOf("="))
							return (f = t.match(Yt)), i && f.length < 4 && (f[3] = 1), f;
					} else
						(a = (+f[0] % 360) / 360),
							(l = f[1] / 100),
							(n =
								2 * (u = f[2] / 100) -
								(s = u <= 0.5 ? u * (l + 1) : u + l - u * l)),
							3 < f.length && (f[3] *= 1),
							(f[0] = it(a + 1 / 3, n, s)),
							(f[1] = it(a, n, s)),
							(f[2] = it(a - 1 / 3, n, s));
				else f = t.match(Xt) || me.transparent;
				f = f.map(Number);
			}
			return (
				e &&
					!p &&
					((n = f[0] / ge),
					(s = f[1] / ge),
					(r = f[2] / ge),
					(u = ((c = Math.max(n, s, r)) + (d = Math.min(n, s, r))) / 2),
					c === d
						? (a = l = 0)
						: ((h = c - d),
						  (l = 0.5 < u ? h / (2 - c - d) : h / (c + d)),
						  (a =
								c === n
									? (s - r) / h + (s < r ? 6 : 0)
									: c === s
									? (r - n) / h + 2
									: (n - s) / h + 4),
						  (a *= 60)),
					(f[0] = ~~(a + 0.5)),
					(f[1] = ~~(100 * l + 0.5)),
					(f[2] = ~~(100 * u + 0.5))),
				i && f.length < 4 && (f[3] = 1),
				f
			);
		}

		function st(t) {
			var e = [],
				i = [],
				n = -1;
			return (
				t.split(ve).forEach(function (t) {
					var s = t.match(Vt) || [];
					e.push.apply(e, s), i.push((n += s.length + 1));
				}),
				(e.c = i),
				e
			);
		}

		function ot(t, e, i) {
			var n,
				s,
				o,
				r,
				a = "",
				l = (t + a).match(ve),
				u = e ? "hsla(" : "rgba(",
				c = 0;
			if (!l) return t;
			if (
				((l = l.map(function (t) {
					return (
						(t = nt(t, e, 1)) &&
						u +
							(e
								? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
								: t.join(",")) +
							")"
					);
				})),
				i && ((o = st(t)), (n = i.c).join(a) !== o.c.join(a)))
			)
				for (r = (s = t.replace(ve, "1").split(Vt)).length - 1; c < r; c++)
					a +=
						s[c] +
						(~n.indexOf(c)
							? l.shift() || u + "0,0,0,0)"
							: (o.length ? o : l.length ? l : i).shift());
			if (!s)
				for (r = (s = t.split(ve)).length - 1; c < r; c++) a += s[c] + l[c];
			return a + s[r];
		}

		function rt(t) {
			var e,
				i = t.join(" ");
			if (((ve.lastIndex = 0), ve.test(i)))
				return (
					(e = ye.test(i)),
					(t[1] = ot(t[1], e)),
					(t[0] = ot(t[0], e, st(t[1]))),
					!0
				);
		}

		function at(t, e, i, n) {
			void 0 === i &&
				(i = function (t) {
					return 1 - e(1 - t);
				}),
				void 0 === n &&
					(n = function (t) {
						return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
					});
			var s,
				o = {
					easeIn: e,
					easeOut: i,
					easeInOut: n,
				};
			return (
				_(t, function (t) {
					for (var e in ((De[t] = Zt[t] = o),
					(De[(s = t.toLowerCase())] = i),
					o))
						De[
							s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
						] = De[t + "." + e] = o[e];
				}),
				o
			);
		}

		function lt(t) {
			return function (e) {
				return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
			};
		}

		function ut(t, e, i) {
			function n(t) {
				return 1 === t ? 1 : s * Math.pow(2, -10 * t) * Rt((t - r) * o) + 1;
			}
			var s = 1 <= e ? e : 1,
				o = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
				r = (o / Bt) * (Math.asin(1 / s) || 0),
				a =
					"out" === t
						? n
						: "in" === t
						? function (t) {
								return 1 - n(1 - t);
						  }
						: lt(n);
			return (
				(o = Bt / o),
				(a.config = function (e, i) {
					return ut(t, e, i);
				}),
				a
			);
		}

		function ct(t, e) {
			function i(t) {
				return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
			}
			void 0 === e && (e = 1.70158);
			var n =
				"out" === t
					? i
					: "in" === t
					? function (t) {
							return 1 - i(1 - t);
					  }
					: lt(i);
			return (
				(n.config = function (e) {
					return ct(t, e);
				}),
				n
			);
		}
		var dt,
			ht,
			pt,
			ft,
			gt,
			mt,
			vt,
			yt,
			_t,
			bt,
			Dt,
			wt,
			xt,
			Ct,
			Tt,
			kt,
			St,
			Et,
			At,
			Ft,
			Lt,
			Ot,
			$t,
			Mt = {
				autoSleep: 120,
				force3D: "auto",
				nullTargetWarn: 1,
				units: {
					lineHeight: "",
				},
			},
			Nt = {
				duration: 0.5,
				overwrite: !1,
				delay: 0,
			},
			Pt = 1e8,
			It = 1 / Pt,
			Bt = 2 * Math.PI,
			jt = Bt / 4,
			zt = 0,
			qt = Math.sqrt,
			Ht = Math.cos,
			Rt = Math.sin,
			Wt = Array.isArray,
			Xt = /(?:-?\.?\d|\.)+/gi,
			Yt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
			Vt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
			Ut = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
			Gt = /\(([^()]+)\)/i,
			Qt = /[+-]=-?[\.\d]+/,
			Kt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
			Zt = {},
			Jt = {},
			te = [],
			ee = {},
			ie = {},
			ne = {},
			se = 30,
			oe = [],
			re = "",
			ae = function (t, e) {
				for (var i in e) t[i] = e[i];
				return t;
			},
			le = function (t, e) {
				return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
			},
			ue = {
				_start: 0,
				endTime: g,
			},
			ce = function (t, e, i) {
				return i < t ? t : e < i ? e : i;
			},
			de = [].slice,
			he = function (t, e) {
				return !n(t) || e || (!pt && be())
					? Wt(t)
						? (function (t, e, i) {
								return (
									void 0 === i && (i = []),
									t.forEach(function (t) {
										return (n(t) && !e) || Y(t, 1)
											? i.push.apply(i, he(t))
											: i.push(t);
									}) || i
								);
						  })(t, e)
						: Y(t)
						? de.call(t, 0)
						: t
						? [t]
						: []
					: de.call(ft.querySelectorAll(t), 0);
			},
			pe = function (t, e, i, n, s) {
				var o = e - t,
					r = n - i;
				return W(s, function (e) {
					return i + ((e - t) / o) * r;
				});
			},
			fe = function (t, e, i) {
				var n,
					s,
					o = t.vars,
					r = o[e];
				if (r)
					return (
						(n = o[e + "Params"]),
						(s = o.callbackScope || t),
						i && te.length && x(),
						n ? r.apply(s, n) : r.call(s)
					);
			},
			ge = 255,
			me = {
				aqua: [0, ge, ge],
				lime: [0, ge, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, ge],
				navy: [0, 0, 128],
				white: [ge, ge, ge],
				olive: [128, 128, 0],
				yellow: [ge, ge, 0],
				orange: [ge, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [ge, 0, 0],
				pink: [ge, 192, 203],
				cyan: [0, ge, ge],
				transparent: [ge, ge, ge, 0],
			},
			ve = (function () {
				var t,
					e =
						"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (t in me) e += "|" + t + "\\b";
				return new RegExp(e + ")", "gi");
			})(),
			ye = /hsl[a]?\(/,
			_e =
				((Ct = Date.now),
				(Tt = 500),
				(kt = 33),
				(St = Ct()),
				(Et = St),
				(Ft = At = 1 / 240),
				(xt = {
					time: 0,
					frame: 0,
					tick: function () {
						ke(!0);
					},
					wake: function () {
						mt &&
							(!pt &&
								u() &&
								((ht = pt = window),
								(ft = ht.document || {}),
								(Zt.gsap = oi),
								(ht.gsapVersions || (ht.gsapVersions = [])).push(oi.version),
								d(gt || ht.GreenSockGlobals || (!ht.gsap && ht) || {}),
								(wt = ht.requestAnimationFrame)),
							bt && xt.sleep(),
							(Dt =
								wt ||
								function (t) {
									return setTimeout(t, (1e3 * (Ft - xt.time) + 1) | 0);
								}),
							(_t = 1),
							ke(2));
					},
					sleep: function () {
						(wt ? ht.cancelAnimationFrame : clearTimeout)(bt),
							(_t = 0),
							(Dt = g);
					},
					lagSmoothing: function (t, e) {
						(Tt = t || 1e8), (kt = Math.min(e, Tt, 0));
					},
					fps: function (t) {
						(At = 1 / (t || 240)), (Ft = xt.time + At);
					},
					add: function (t) {
						Lt.indexOf(t) < 0 && Lt.push(t), be();
					},
					remove: function (t) {
						var e;
						~(e = Lt.indexOf(t)) && Lt.splice(e, 1);
					},
					_listeners: (Lt = []),
				})),
			be = function () {
				return !_t && _e.wake();
			},
			De = {},
			we = /^[\d.\-M][\d.\-,\s]/,
			xe = /["']/g,
			Ce = function (t) {
				return function (e) {
					return 1 - t(1 - e);
				};
			},
			Te = function (t, e) {
				return (
					(t &&
						(s(t)
							? t
							: De[t] ||
							  (function (t) {
									var e = (t + "").split("("),
										i = De[e[0]];
									return i && 1 < e.length && i.config
										? i.config.apply(
												null,
												~t.indexOf("{")
													? [
															(function (t) {
																for (
																	var e,
																		i,
																		n,
																		s = {},
																		o = t.substr(1, t.length - 3).split(":"),
																		r = o[0],
																		a = 1,
																		l = o.length;
																	a < l;
																	a++
																)
																	(i = o[a]),
																		(e =
																			a !== l - 1
																				? i.lastIndexOf(",")
																				: i.length),
																		(n = i.substr(0, e)),
																		(s[r] = isNaN(n)
																			? n.replace(xe, "").trim()
																			: +n),
																		(r = i.substr(e + 1).trim());
																return s;
															})(e[1]),
													  ]
													: Gt.exec(t)[1].split(",").map(T)
										  )
										: De._CE && we.test(t)
										? De._CE("", t)
										: i;
							  })(t))) ||
					e
				);
			};

		function ke(t) {
			var e,
				i,
				n = Ct() - Et,
				s = !0 === t;
			Tt < n && (St += n - kt),
				(Et += n),
				(xt.time = (Et - St) / 1e3),
				(0 < (e = xt.time - Ft) || s) &&
					(xt.frame++, (Ft += e + (At <= e ? 0.004 : At - e)), (i = 1)),
				s || (bt = Dt(ke)),
				i &&
					Lt.forEach(function (e) {
						return e(xt.time, n, xt.frame, t);
					});
		}

		function Se(t) {
			return t < $t
				? Ot * t * t
				: t < 0.7272727272727273
				? Ot * Math.pow(t - 1.5 / 2.75, 2) + 0.75
				: t < 0.9090909090909092
				? Ot * (t -= 2.25 / 2.75) * t + 0.9375
				: Ot * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
		}
		_("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
			var i = e < 5 ? e + 1 : e;
			at(
				t + ",Power" + (i - 1),
				e
					? function (t) {
							return Math.pow(t, i);
					  }
					: function (t) {
							return t;
					  },
				function (t) {
					return 1 - Math.pow(1 - t, i);
				},
				function (t) {
					return t < 0.5
						? Math.pow(2 * t, i) / 2
						: 1 - Math.pow(2 * (1 - t), i) / 2;
				}
			);
		}),
			(De.Linear.easeNone = De.none = De.Linear.easeIn),
			at("Elastic", ut("in"), ut("out"), ut()),
			(Ot = 7.5625),
			($t = 1 / 2.75),
			at(
				"Bounce",
				function (t) {
					return 1 - Se(1 - t);
				},
				Se
			),
			at("Expo", function (t) {
				return t ? Math.pow(2, 10 * (t - 1)) : 0;
			}),
			at("Circ", function (t) {
				return -(qt(1 - t * t) - 1);
			}),
			at("Sine", function (t) {
				return 1 - Ht(t * jt);
			}),
			at("Back", ct("in"), ct("out"), ct()),
			(De.SteppedEase =
				De.steps =
				Zt.SteppedEase =
					{
						config: function (t, e) {
							void 0 === t && (t = 1);
							var i = 1 / t,
								n = t + (e ? 0 : 1),
								s = e ? 1 : 0;
							return function (t) {
								return (((n * ce(0, 0.99999999, t)) | 0) + s) * i;
							};
						},
					}),
			(Nt.ease = De["quad.out"]),
			_(
				"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
				function (t) {
					return (re += t + "," + t + "Params,");
				}
			);
		var Ee,
			Ae = function (t, e) {
				(this.id = zt++),
					((t._gsap = this).target = t),
					(this.harness = e),
					(this.get = e ? e.get : y),
					(this.set = e ? e.getSetter : Ye);
			},
			Fe =
				(((Ee = Le.prototype).delay = function (t) {
					return t || 0 === t
						? (this.parent &&
								this.parent.smoothChildTiming &&
								this.startTime(this._start + t - this._delay),
						  (this._delay = t),
						  this)
						: this._delay;
				}),
				(Ee.duration = function (t) {
					return arguments.length
						? this.totalDuration(
								0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
						  )
						: this.totalDuration() && this._dur;
				}),
				(Ee.totalDuration = function (t) {
					return arguments.length
						? ((this._dirty = 0),
						  q(
								this,
								this._repeat < 0
									? t
									: (t - this._repeat * this._rDelay) / (this._repeat + 1)
						  ))
						: this._tDur;
				}),
				(Ee.totalTime = function (t, e) {
					if ((be(), !arguments.length)) return this._tTime;
					var i = this.parent || this._dp;
					if (i && i.smoothChildTiming && this._ts) {
						for (
							this._start = b(
								i._time -
									(0 < this._ts
										? t / this._ts
										: ((this._dirty ? this.totalDuration() : this._tDur) - t) /
										  -this._ts)
							),
								I(this),
								i._dirty || M(i);
							i.parent;

						)
							i.parent._time !==
								i._start +
									(0 <= i._ts
										? i._tTime / i._ts
										: (i.totalDuration() - i._tTime) / -i._ts) &&
								i.totalTime(i._tTime, !0),
								(i = i.parent);
						!this.parent &&
							this._dp.autoRemoveChildren &&
							j(this._dp, this, this._start - this._delay);
					}
					return (
						(this._tTime !== t ||
							(!this._dur && !e) ||
							(this._initted && Math.abs(this._zTime) === It)) &&
							(this._ts || (this._pTime = t), C(this, t, e)),
						this
					);
				}),
				(Ee.time = function (t, e) {
					return arguments.length
						? this.totalTime(
								Math.min(this.totalDuration(), t + N(this)) % this._dur ||
									(t ? this._dur : 0),
								e
						  )
						: this._time;
				}),
				(Ee.totalProgress = function (t, e) {
					return arguments.length
						? this.totalTime(this.totalDuration() * t, e)
						: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.ratio;
				}),
				(Ee.progress = function (t, e) {
					return arguments.length
						? this.totalTime(
								this.duration() *
									(!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
									N(this),
								e
						  )
						: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.ratio;
				}),
				(Ee.iteration = function (t, e) {
					var i = this.duration() + this._rDelay;
					return arguments.length
						? this.totalTime(this._time + (t - 1) * i, e)
						: this._repeat
						? le(this._tTime, i) + 1
						: 1;
				}),
				(Ee.timeScale = function (t) {
					if (!arguments.length) return this._rts === -It ? 0 : this._rts;
					if (this._rts === t) return this;
					var e =
						this.parent && this._ts ? P(this.parent._time, this) : this._tTime;
					return (
						(this._rts = +t || 0),
						(this._ts = this._ps || t === -It ? 0 : this._rts),
						(function (t) {
							for (var e = t.parent; e && e.parent; )
								(e._dirty = 1), e.totalDuration(), (e = e.parent);
							return t;
						})(this.totalTime(ce(0, this._tDur, e), !0))
					);
				}),
				(Ee.paused = function (t) {
					return arguments.length
						? (this._ps !== t &&
								((this._ps = t)
									? ((this._pTime =
											this._tTime || Math.max(-this._delay, this.rawTime())),
									  (this._ts = this._act = 0))
									: (be(),
									  (this._ts = this._rts),
									  this.totalTime(
											this.parent && !this.parent.smoothChildTiming
												? this.rawTime()
												: this._tTime || this._pTime,
											1 === this.progress() &&
												(this._tTime -= It) &&
												Math.abs(this._zTime) !== It
									  ))),
						  this)
						: this._ps;
				}),
				(Ee.startTime = function (t) {
					if (arguments.length) {
						this._start = t;
						var e = this.parent || this._dp;
						return (
							!e || (!e._sort && this.parent) || j(e, this, t - this._delay),
							this
						);
					}
					return this._start;
				}),
				(Ee.endTime = function (t) {
					return (
						this._start +
						(l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
					);
				}),
				(Ee.rawTime = function (t) {
					var e = this.parent || this._dp;
					return e
						? t &&
						  (!this._ts ||
								(this._repeat && this._time && this.totalProgress() < 1))
							? this._tTime % (this._dur + this._rDelay)
							: this._ts
							? P(e.rawTime(t), this)
							: this._tTime
						: this._tTime;
				}),
				(Ee.repeat = function (t) {
					return arguments.length
						? ((this._repeat = t), H(this))
						: this._repeat;
				}),
				(Ee.repeatDelay = function (t) {
					return arguments.length
						? ((this._rDelay = t), H(this))
						: this._rDelay;
				}),
				(Ee.yoyo = function (t) {
					return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
				}),
				(Ee.seek = function (t, e) {
					return this.totalTime(R(this, t), l(e));
				}),
				(Ee.restart = function (t, e) {
					return this.play().totalTime(t ? -this._delay : 0, l(e));
				}),
				(Ee.play = function (t, e) {
					return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
				}),
				(Ee.reverse = function (t, e) {
					return (
						null != t && this.seek(t || this.totalDuration(), e),
						this.reversed(!0).paused(!1)
					);
				}),
				(Ee.pause = function (t, e) {
					return null != t && this.seek(t, e), this.paused(!0);
				}),
				(Ee.resume = function () {
					return this.paused(!1);
				}),
				(Ee.reversed = function (t) {
					return arguments.length
						? (!!t !== this.reversed() &&
								this.timeScale(-this._rts || (t ? -It : 0)),
						  this)
						: this._rts < 0;
				}),
				(Ee.invalidate = function () {
					return (this._initted = 0), (this._zTime = -It), this;
				}),
				(Ee.isActive = function (t) {
					var e,
						i = this.parent || this._dp,
						n = this._start;
					return !(
						i &&
						!(
							this._ts &&
							(this._initted || !t) &&
							i.isActive(t) &&
							(e = i.rawTime(!0)) >= n &&
							e < this.endTime(!0) - It
						)
					);
				}),
				(Ee.eventCallback = function (t, e, i) {
					var n = this.vars;
					return 1 < arguments.length
						? (e
								? ((n[t] = e),
								  i && (n[t + "Params"] = i),
								  "onUpdate" === t && (this._onUpdate = e))
								: delete n[t],
						  this)
						: n[t];
				}),
				(Ee.then = function (t) {
					var e = this;
					return new Promise(function (i) {
						function n() {
							var t = e.then;
							(e.then = null),
								s(o) && (o = o(e)) && (o.then || o === e) && (e.then = t),
								i(o),
								(e.then = t);
						}
						var o = s(t) ? t : k;
						(e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
						(!e._tTime && e._ts < 0)
							? n()
							: (e._prom = n);
					});
				}),
				(Ee.kill = function () {
					et(this);
				}),
				Le);

		function Le(t, e) {
			var i = t.parent || dt;
			(this.vars = t),
				(this._delay = +t.delay || 0),
				(this._repeat = t.repeat || 0) &&
					((this._rDelay = t.repeatDelay || 0),
					(this._yoyo = !!t.yoyo || !!t.yoyoEase)),
				(this._ts = 1),
				q(this, +t.duration, 1),
				(this.data = t.data),
				_t || _e.wake(),
				i && j(i, this, e || 0 === e ? e : i._time, 1),
				t.reversed && this.reverse(),
				t.paused && this.paused(!0);
		}
		S(Fe.prototype, {
			_time: 0,
			_start: 0,
			_end: 0,
			_tTime: 0,
			_tDur: 0,
			_dirty: 0,
			_repeat: 0,
			_yoyo: !1,
			parent: null,
			_initted: !1,
			_rDelay: 0,
			_ts: 1,
			_dp: 0,
			ratio: 0,
			_zTime: -It,
			_prom: 0,
			_ps: !1,
			_rts: 1,
		});
		var Oe = (function (t) {
			function r(e, n) {
				var s;
				return (
					void 0 === e && (e = {}),
					((s = t.call(this, e, n) || this).labels = {}),
					(s.smoothChildTiming = !!e.smoothChildTiming),
					(s.autoRemoveChildren = !!e.autoRemoveChildren),
					(s._sort = l(e.sortChildren)),
					s.parent && B(s.parent, i(s)),
					s
				);
			}
			e(r, t);
			var a = r.prototype;
			return (
				(a.to = function (t, e, i, n) {
					return new ze(t, w(arguments, 0, this), R(this, o(e) ? n : i)), this;
				}),
				(a.from = function (t, e, i, n) {
					return new ze(t, w(arguments, 1, this), R(this, o(e) ? n : i)), this;
				}),
				(a.fromTo = function (t, e, i, n, s) {
					return new ze(t, w(arguments, 2, this), R(this, o(e) ? s : n)), this;
				}),
				(a.set = function (t, e, i) {
					return (
						(e.duration = 0),
						(e.parent = this),
						L(e).repeatDelay || (e.repeat = 0),
						(e.immediateRender = !!e.immediateRender),
						new ze(t, e, R(this, i), 1),
						this
					);
				}),
				(a.call = function (t, e, i) {
					return j(this, ze.delayedCall(0, t, e), R(this, i));
				}),
				(a.staggerTo = function (t, e, i, n, s, o, r) {
					return (
						(i.duration = e),
						(i.stagger = i.stagger || n),
						(i.onComplete = o),
						(i.onCompleteParams = r),
						(i.parent = this),
						new ze(t, i, R(this, s)),
						this
					);
				}),
				(a.staggerFrom = function (t, e, i, n, s, o, r) {
					return (
						(i.runBackwards = 1),
						(L(i).immediateRender = l(i.immediateRender)),
						this.staggerTo(t, e, i, n, s, o, r)
					);
				}),
				(a.staggerFromTo = function (t, e, i, n, s, o, r, a) {
					return (
						(n.startAt = i),
						(L(n).immediateRender = l(n.immediateRender)),
						this.staggerTo(t, e, n, s, o, r, a)
					);
				}),
				(a.render = function (t, e, i) {
					var n,
						s,
						o,
						r,
						a,
						l,
						u,
						c,
						d,
						h,
						p,
						f,
						g = this._time,
						m = this._dirty ? this.totalDuration() : this._tDur,
						v = this._dur,
						y = this !== dt && m - It < t && 0 <= t ? m : t < It ? 0 : t,
						_ = this._zTime < 0 != t < 0 && (this._initted || !v);
					if (y !== this._tTime || i || _) {
						if (
							(g !== this._time &&
								v &&
								((y += this._time - g), (t += this._time - g)),
							(n = y),
							(d = this._start),
							(l = !(c = this._ts)),
							_ && (v || (g = this._zTime), (!t && e) || (this._zTime = t)),
							this._repeat &&
								((p = this._yoyo),
								(v < (n = b(y % (a = v + this._rDelay))) || m === y) && (n = v),
								(r = ~~(y / a)) && r === y / a && ((n = v), r--),
								p && 1 & r && ((n = v - n), (f = 1)),
								r !== (h = le(this._tTime, a)) && !this._lock))
						) {
							var D = p && 1 & h,
								w = D === (p && 1 & r);
							if (
								(r < h && (D = !D),
								(g = D ? 0 : v),
								(this._lock = 1),
								(this.render(g, e, !v)._lock = 0),
								!e && this.parent && fe(this, "onRepeat"),
								this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
								g !== this._time || l != !this._ts)
							)
								return this;
							if (
								(w &&
									((this._lock = 2),
									(g = D ? v + 1e-4 : -1e-4),
									this.render(g, !0),
									this.vars.repeatRefresh && !f && this.invalidate()),
								(this._lock = 0),
								!this._ts && !l)
							)
								return this;
						}
						if (
							(this._hasPause &&
								!this._forcing &&
								this._lock < 2 &&
								(u = (function (t, e, i) {
									var n;
									if (e < i)
										for (n = t._first; n && n._start <= i; ) {
											if (!n._dur && "isPause" === n.data && n._start > e)
												return n;
											n = n._next;
										}
									else
										for (n = t._last; n && n._start >= i; ) {
											if (!n._dur && "isPause" === n.data && n._start < e)
												return n;
											n = n._prev;
										}
								})(this, b(g), b(n))) &&
								(y -= n - (n = u._start)),
							(this._tTime = y),
							(this._time = n),
							(this._act = !c),
							this._initted ||
								((this._onUpdate = this.vars.onUpdate),
								(this._initted = 1),
								(this._zTime = t)),
							g || !n || e || fe(this, "onStart"),
							g <= n && 0 <= t)
						)
							for (s = this._first; s; ) {
								if (
									((o = s._next), (s._act || n >= s._start) && s._ts && u !== s)
								) {
									if (s.parent !== this) return this.render(t, e, i);
									if (
										(s.render(
											0 < s._ts
												? (n - s._start) * s._ts
												: (s._dirty ? s.totalDuration() : s._tDur) +
														(n - s._start) * s._ts,
											e,
											i
										),
										n !== this._time || (!this._ts && !l))
									) {
										(u = 0), o && (y += this._zTime = -It);
										break;
									}
								}
								s = o;
							}
						else {
							s = this._last;
							for (var x = t < 0 ? t : n; s; ) {
								if (
									((o = s._prev), (s._act || x <= s._end) && s._ts && u !== s)
								) {
									if (s.parent !== this) return this.render(t, e, i);
									if (
										(s.render(
											0 < s._ts
												? (x - s._start) * s._ts
												: (s._dirty ? s.totalDuration() : s._tDur) +
														(x - s._start) * s._ts,
											e,
											i
										),
										n !== this._time || (!this._ts && !l))
									) {
										(u = 0), o && (y += this._zTime = x ? -It : It);
										break;
									}
								}
								s = o;
							}
						}
						if (
							u &&
							!e &&
							(this.pause(),
							(u.render(g <= n ? 0 : -It)._zTime = g <= n ? 1 : -1),
							this._ts)
						)
							return (this._start = d), I(this), this.render(t, e, i);
						this._onUpdate && !e && fe(this, "onUpdate", !0),
							((y === m && m >= this.totalDuration()) ||
								(!y && this._ts < 0)) &&
								((d !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
									this._lock ||
									((!t && v) ||
										!((t && 0 < this._ts) || (!y && this._ts < 0)) ||
										$(this, 1),
									e ||
										(t < 0 && !g) ||
										(fe(this, y === m ? "onComplete" : "onReverseComplete", !0),
										this._prom && this._prom())));
					}
					return this;
				}),
				(a.add = function (t, e) {
					var i = this;
					if ((o(e) || (e = R(this, e)), !(t instanceof Fe))) {
						if (Wt(t))
							return (
								t.forEach(function (t) {
									return i.add(t, e);
								}),
								M(this)
							);
						if (n(t)) return this.addLabel(t, e);
						if (!s(t)) return this;
						t = ze.delayedCall(0, t);
					}
					return this !== t ? j(this, t, e) : this;
				}),
				(a.getChildren = function (t, e, i, n) {
					void 0 === t && (t = !0),
						void 0 === e && (e = !0),
						void 0 === i && (i = !0),
						void 0 === n && (n = -Pt);
					for (var s = [], o = this._first; o; )
						o._start >= n &&
							(o instanceof ze
								? e && s.push(o)
								: (i && s.push(o),
								  t && s.push.apply(s, o.getChildren(!0, e, i)))),
							(o = o._next);
					return s;
				}),
				(a.getById = function (t) {
					for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
						if (e[i].vars.id === t) return e[i];
				}),
				(a.remove = function (t) {
					return n(t)
						? this.removeLabel(t)
						: s(t)
						? this.killTweensOf(t)
						: (O(this, t),
						  t === this._recent && (this._recent = this._last),
						  M(this));
				}),
				(a.totalTime = function (e, i) {
					return arguments.length
						? ((this._forcing = 1),
						  this.parent ||
								this._dp ||
								!this._ts ||
								(this._start = b(
									_e.time -
										(0 < this._ts
											? e / this._ts
											: (this.totalDuration() - e) / -this._ts)
								)),
						  t.prototype.totalTime.call(this, e, i),
						  (this._forcing = 0),
						  this)
						: this._tTime;
				}),
				(a.addLabel = function (t, e) {
					return (this.labels[t] = R(this, e)), this;
				}),
				(a.removeLabel = function (t) {
					return delete this.labels[t], this;
				}),
				(a.addPause = function (t, e, i) {
					var n = ze.delayedCall(0, e || g, i);
					return (
						(n.data = "isPause"), (this._hasPause = 1), j(this, n, R(this, t))
					);
				}),
				(a.removePause = function (t) {
					var e = this._first;
					for (t = R(this, t); e; )
						e._start === t && "isPause" === e.data && $(e), (e = e._next);
				}),
				(a.killTweensOf = function (t, e, i) {
					for (var n = this.getTweensOf(t, i), s = n.length; s--; )
						Me !== n[s] && n[s].kill(t, e);
					return this;
				}),
				(a.getTweensOf = function (t, e) {
					for (var i, n = [], s = he(t), o = this._first; o; )
						o instanceof ze
							? !D(o._targets, s) ||
							  (e && !o.isActive("started" === e)) ||
							  n.push(o)
							: (i = o.getTweensOf(s, e)).length && n.push.apply(n, i),
							(o = o._next);
					return n;
				}),
				(a.tweenTo = function (t, e) {
					e = e || {};
					var i = this,
						n = R(i, t),
						s = e.startAt,
						o = e.onStart,
						r = e.onStartParams,
						a = ze.to(
							i,
							S(e, {
								ease: "none",
								lazy: !1,
								time: n,
								duration:
									e.duration ||
									Math.abs(
										(n - (s && "time" in s ? s.time : i._time)) / i.timeScale()
									) ||
									It,
								onStart: function () {
									i.pause();
									var t = e.duration || Math.abs((n - i._time) / i.timeScale());
									a._dur !== t && q(a, t).render(a._time, !0, !0),
										o && o.apply(a, r || []);
								},
							})
						);
					return a;
				}),
				(a.tweenFromTo = function (t, e, i) {
					return this.tweenTo(
						e,
						S(
							{
								startAt: {
									time: R(this, t),
								},
							},
							i
						)
					);
				}),
				(a.recent = function () {
					return this._recent;
				}),
				(a.nextLabel = function (t) {
					return void 0 === t && (t = this._time), tt(this, R(this, t));
				}),
				(a.previousLabel = function (t) {
					return void 0 === t && (t = this._time), tt(this, R(this, t), 1);
				}),
				(a.currentLabel = function (t) {
					return arguments.length
						? this.seek(t, !0)
						: this.previousLabel(this._time + It);
				}),
				(a.shiftChildren = function (t, e, i) {
					void 0 === i && (i = 0);
					for (var n, s = this._first, o = this.labels; s; )
						s._start >= i && (s._start += t), (s = s._next);
					if (e) for (n in o) o[n] >= i && (o[n] += t);
					return M(this);
				}),
				(a.invalidate = function () {
					var e = this._first;
					for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
					return t.prototype.invalidate.call(this);
				}),
				(a.clear = function (t) {
					void 0 === t && (t = !0);
					for (var e, i = this._first; i; )
						(e = i._next), this.remove(i), (i = e);
					return (
						(this._time = this._tTime = 0), t && (this.labels = {}), M(this)
					);
				}),
				(a.totalDuration = function (t) {
					var e,
						i,
						n,
						s,
						o = 0,
						r = this,
						a = r._last,
						l = Pt;
					if (arguments.length)
						return r.timeScale(
							(r._repeat < 0 ? r.duration() : r.totalDuration()) /
								(r.reversed() ? -t : t)
						);
					if (r._dirty) {
						for (s = r.parent; a; )
							(e = a._prev),
								a._dirty && a.totalDuration(),
								l < (n = a._start) && r._sort && a._ts && !r._lock
									? ((r._lock = 1), (j(r, a, n - a._delay, 1)._lock = 0))
									: (l = n),
								n < 0 &&
									a._ts &&
									((o -= n),
									((!s && !r._dp) || (s && s.smoothChildTiming)) &&
										((r._start += n / r._ts), (r._time -= n), (r._tTime -= n)),
									r.shiftChildren(-n, !1, -1e20),
									(l = 0)),
								o < (i = I(a)) && a._ts && (o = i),
								(a = e);
						q(r, r === dt && r._time > o ? r._time : Math.min(Pt, o), 1),
							(r._dirty = 0);
					}
					return r._tDur;
				}),
				(r.updateRoot = function (t) {
					if ((dt._ts && (C(dt, P(t, dt)), (vt = _e.frame)), _e.frame >= se)) {
						se += Mt.autoSleep || 120;
						var e = dt._first;
						if ((!e || !e._ts) && Mt.autoSleep && _e._listeners.length < 2) {
							for (; e && !e._ts; ) e = e._next;
							e || _e.sleep();
						}
					}
				}),
				r
			);
		})(Fe);

		function $e(t, e, i, o, r, l) {
			var u, c, d, h;
			if (
				ie[t] &&
				!1 !==
					(u = new ie[t]()).init(
						r,
						u.rawVars
							? e[t]
							: (function (t, e, i, o, r) {
									if (
										(s(t) && (t = Ie(t, r, e, i, o)),
										!a(t) || (t.style && t.nodeType) || Wt(t))
									)
										return n(t) ? Ie(t, r, e, i, o) : t;
									var l,
										u = {};
									for (l in t) u[l] = Ie(t[l], r, e, i, o);
									return u;
							  })(e[t], o, r, l, i),
						i,
						o,
						l
					) &&
				((i._pt = c = new ti(i._pt, r, t, 0, 1, u.render, u, 0, u.priority)),
				i !== yt)
			)
				for (d = i._ptLookup[i._targets.indexOf(r)], h = u._props.length; h--; )
					d[u._props[h]] = c;
			return u;
		}
		S(Oe.prototype, {
			_lock: 0,
			_hasPause: 0,
			_forcing: 0,
		});
		var Me,
			Ne = function (t, e, i, o, r, a, l, u, c) {
				s(o) && (o = o(r || 0, t, a));
				var d,
					p = t[e],
					f =
						"get" !== i
							? i
							: s(p)
							? c
								? t[
										e.indexOf("set") || !s(t["get" + e.substr(3)])
											? e
											: "get" + e.substr(3)
								  ](c)
								: t[e]()
							: p,
					g = s(p) ? (c ? Xe : We) : Re;
				if (
					(n(o) &&
						(~o.indexOf("random(") && (o = J(o)),
						"=" === o.charAt(1) &&
							(o =
								parseFloat(f) +
								parseFloat(o.substr(2)) * ("-" === o.charAt(0) ? -1 : 1) +
								(X(f) || 0))),
					f !== o)
				)
					return isNaN(f + o)
						? (p || e in t || h(e, o),
						  function (t, e, i, n, s, o, r) {
								var a,
									l,
									u,
									c,
									d,
									h,
									p,
									f,
									g = new ti(this._pt, t, e, 0, 1, Ge, null, s),
									m = 0,
									v = 0;
								for (
									g.b = i,
										g.e = n,
										i += "",
										(p = ~(n += "").indexOf("random(")) && (n = J(n)),
										o && (o((f = [i, n]), t, e), (i = f[0]), (n = f[1])),
										l = i.match(Ut) || [];
									(a = Ut.exec(n));

								)
									(c = a[0]),
										(d = n.substring(m, a.index)),
										u ? (u = (u + 1) % 5) : "rgba(" === d.substr(-5) && (u = 1),
										c !== l[v++] &&
											((h = parseFloat(l[v - 1]) || 0),
											(g._pt = {
												_next: g._pt,
												p: d || 1 === v ? d : ",",
												s: h,
												c:
													"=" === c.charAt(1)
														? parseFloat(c.substr(2)) *
														  ("-" === c.charAt(0) ? -1 : 1)
														: parseFloat(c) - h,
												m: u && u < 4 ? Math.round : 0,
											}),
											(m = Ut.lastIndex));
								return (
									(g.c = m < n.length ? n.substring(m, n.length) : ""),
									(g.fp = r),
									(Qt.test(n) || p) && (g.e = 0),
									(this._pt = g)
								);
						  }.call(this, t, e, f, o, g, u || Mt.stringFilter, c))
						: ((d = new ti(
								this._pt,
								t,
								e,
								+f || 0,
								o - (f || 0),
								"boolean" == typeof p ? Ue : Ve,
								0,
								g
						  )),
						  c && (d.fp = c),
						  l && d.modifier(l, this, t),
						  (this._pt = d));
			},
			Pe = function t(e, i) {
				var n,
					s,
					o,
					r,
					a,
					u,
					c,
					d,
					h,
					p,
					f,
					g,
					y = e.vars,
					_ = y.ease,
					b = y.startAt,
					D = y.immediateRender,
					w = y.lazy,
					C = y.onUpdate,
					T = y.onUpdateParams,
					k = y.callbackScope,
					E = y.runBackwards,
					A = y.yoyoEase,
					L = y.keyframes,
					O = y.autoRevert,
					M = e._dur,
					N = e._startAt,
					P = e._targets,
					I = e.parent,
					B = I && "nested" === I.data ? I.parent._targets : P,
					j = "auto" === e._overwrite,
					z = e.timeline;
				if (
					(!z || (L && _) || (_ = "none"),
					(e._ease = Te(_, Nt.ease)),
					(e._yEase = A ? Ce(Te(!0 === A ? _ : A, Nt.ease)) : 0),
					A &&
						e._yoyo &&
						!e._repeat &&
						((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
					!z)
				) {
					if ((N && N.render(-1, !0).kill(), b)) {
						if (
							($(
								(e._startAt = ze.set(
									P,
									S(
										{
											data: "isStart",
											overwrite: !1,
											parent: I,
											immediateRender: !0,
											lazy: l(w),
											startAt: null,
											delay: 0,
											onUpdate: C,
											onUpdateParams: T,
											callbackScope: k,
											stagger: 0,
										},
										b
									)
								))
							),
							D)
						)
							if (0 < i) O || (e._startAt = 0);
							else if (M) return;
					} else if (E && M)
						if (N) O || (e._startAt = 0);
						else if (
							(i && (D = !1),
							$(
								(e._startAt = ze.set(
									P,
									ae(F(y, Jt), {
										overwrite: !1,
										data: "isFromStart",
										lazy: D && l(w),
										immediateRender: D,
										stagger: 0,
										parent: I,
									})
								))
							),
							D)
						) {
							if (!i) return;
						} else t(e._startAt, It);
					for (
						n = F(y, Jt),
							g = (d = P[(e._pt = 0)] ? v(P[0]).harness : 0) && y[d.prop],
							w = (M && l(w)) || (w && !M),
							s = 0;
						s < P.length;
						s++
					) {
						if (
							((c = (a = P[s])._gsap || m(P)[s]._gsap),
							(e._ptLookup[s] = p = {}),
							ee[c.id] && x(),
							(f = B === P ? s : B.indexOf(a)),
							d &&
								!1 !== (h = new d()).init(a, g || n, e, f, B) &&
								((e._pt = r =
									new ti(e._pt, a, h.name, 0, 1, h.render, h, 0, h.priority)),
								h._props.forEach(function (t) {
									p[t] = r;
								}),
								h.priority && (u = 1)),
							!d || g)
						)
							for (o in n)
								ie[o] && (h = $e(o, n, e, f, a, B))
									? h.priority && (u = 1)
									: (p[o] = r =
											Ne.call(e, a, o, "get", n[o], f, B, 0, y.stringFilter));
						e._op && e._op[s] && e.kill(a, e._op[s]),
							j &&
								e._pt &&
								((Me = e), dt.killTweensOf(a, p, "started"), (Me = 0)),
							e._pt && w && (ee[c.id] = 1);
					}
					u && Je(e), e._onInit && e._onInit(e);
				}
				(e._from = !z && !!y.runBackwards), (e._onUpdate = C), (e._initted = 1);
			},
			Ie = function (t, e, i, o, r) {
				return s(t)
					? t.call(e, i, o, r)
					: n(t) && ~t.indexOf("random(")
					? J(t)
					: t;
			},
			Be = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
			je = (Be + ",id,stagger,delay,duration,paused").split(","),
			ze = (function (t) {
				function s(e, n, s, r) {
					var u;
					"number" == typeof n && ((s.duration = n), (n = s), (s = null));
					var d,
						h,
						f,
						v,
						y,
						_,
						b,
						D,
						w = (u = t.call(this, r ? n : L(n), s) || this).vars,
						x = w.duration,
						C = w.delay,
						T = w.immediateRender,
						k = w.stagger,
						E = w.overwrite,
						A = w.keyframes,
						F = w.defaults,
						O = u.parent,
						$ = (Wt(e) ? o(e[0]) : "length" in n) ? [e] : he(e);
					if (
						((u._targets = $.length
							? m($)
							: p(
									"GSAP target " + e + " not found. https://greensock.com",
									!Mt.nullTargetWarn
							  ) || []),
						(u._ptLookup = []),
						(u._overwrite = E),
						A || k || c(x) || c(C))
					) {
						if (
							((n = u.vars),
							(d = u.timeline =
								new Oe({
									data: "nested",
									defaults: F || {},
								})).kill(),
							(d.parent = i(u)),
							A)
						)
							S(d.vars.defaults, {
								ease: "none",
							}),
								A.forEach(function (t) {
									return d.to($, t, ">");
								});
						else {
							if (((v = $.length), (b = k ? U(k) : g), a(k)))
								for (y in k) ~Be.indexOf(y) && ((D = D || {})[y] = k[y]);
							for (h = 0; h < v; h++) {
								for (y in ((f = {}), n)) je.indexOf(y) < 0 && (f[y] = n[y]);
								(f.stagger = 0),
									D && ae(f, D),
									n.yoyoEase && !n.repeat && (f.yoyoEase = n.yoyoEase),
									(_ = $[h]),
									(f.duration = +Ie(x, i(u), h, _, $)),
									(f.delay = (+Ie(C, i(u), h, _, $) || 0) - u._delay),
									!k &&
										1 === v &&
										f.delay &&
										((u._delay = C = f.delay), (u._start += C), (f.delay = 0)),
									d.to(_, f, b(h, _, $));
							}
							x = C = 0;
						}
						x || u.duration((x = d.duration()));
					} else u.timeline = 0;
					return (
						!0 === E && ((Me = i(u)), dt.killTweensOf($), (Me = 0)),
						O && B(O, i(u)),
						(T ||
							(!x &&
								!A &&
								u._start === O._time &&
								l(T) &&
								(function t(e) {
									return !e || (e._ts && t(e.parent));
								})(i(u)) &&
								"nested" !== O.data)) &&
							((u._tTime = -It), u.render(Math.max(0, -C))),
						u
					);
				}
				e(s, t);
				var r = s.prototype;
				return (
					(r.render = function (t, e, i) {
						var n,
							s,
							o,
							r,
							a,
							l,
							u,
							c,
							d,
							h = this._time,
							p = this._tDur,
							f = this._dur,
							g = p - It < t && 0 <= t ? p : t < It ? 0 : t;
						if (f) {
							if (
								g !== this._tTime ||
								!t ||
								i ||
								(this._startAt && this._zTime < 0 != t < 0)
							) {
								if (((n = g), (c = this.timeline), this._repeat)) {
									if (
										((f < (n = b(g % (r = f + this._rDelay))) || p === g) &&
											(n = f),
										(o = ~~(g / r)) && o === g / r && ((n = f), o--),
										(l = this._yoyo && 1 & o) &&
											((d = this._yEase), (n = f - n)),
										(a = le(this._tTime, r)),
										n === h && !i && this._initted)
									)
										return this;
									o !== a &&
										(!this.vars.repeatRefresh ||
											l ||
											this._lock ||
											((this._lock = i = 1),
											(this.render(r * o, !0).invalidate()._lock = 0)));
								}
								if (!this._initted) {
									if (z(this, n, i, e)) return (this._tTime = 0), this;
									if (f !== this._dur) return this.render(t, e, i);
								}
								for (
									this._tTime = g,
										this._time = n,
										!this._act &&
											this._ts &&
											((this._act = 1), (this._lazy = 0)),
										this.ratio = u = (d || this._ease)(n / f),
										this._from && (this.ratio = u = 1 - u),
										h || !n || e || fe(this, "onStart"),
										s = this._pt;
									s;

								)
									s.r(u, s.d), (s = s._next);
								(c && c.render(t < 0 ? t : !n && l ? -It : c._dur * u, e, i)) ||
									(this._startAt && (this._zTime = t)),
									this._onUpdate &&
										!e &&
										(t < 0 && this._startAt && this._startAt.render(t, !0, i),
										fe(this, "onUpdate")),
									this._repeat &&
										o !== a &&
										this.vars.onRepeat &&
										!e &&
										this.parent &&
										fe(this, "onRepeat"),
									(g !== this._tDur && g) ||
										this._tTime !== g ||
										(t < 0 &&
											this._startAt &&
											!this._onUpdate &&
											this._startAt.render(t, !0, i),
										(!t && f) ||
											!((t && 0 < this._ts) || (!g && this._ts < 0)) ||
											$(this, 1),
										e ||
											(t < 0 && !h) ||
											(g < p && 0 < this.timeScale()) ||
											(fe(
												this,
												g === p ? "onComplete" : "onReverseComplete",
												!0
											),
											this._prom && this._prom()));
							}
						} else
							!(function (t, e, i, n) {
								var s,
									o = t._zTime < 0 ? 0 : 1,
									r = e < 0 ? 0 : 1,
									a = t._rDelay,
									l = 0;
								if (
									(a &&
										t._repeat &&
										((l = ce(0, t._tDur, e)),
										le(l, a) !== le(t._tTime, a) &&
											((o = 1 - r),
											t.vars.repeatRefresh && t._initted && t.invalidate())),
									(t._initted || !z(t, e, n, i)) &&
										(r !== o || n || t._zTime === It || (!e && t._zTime)))
								) {
									for (
										t._zTime = e || (i ? It : 0),
											t.ratio = r,
											t._from && (r = 1 - r),
											t._time = 0,
											t._tTime = l,
											i || fe(t, "onStart"),
											s = t._pt;
										s;

									)
										s.r(r, s.d), (s = s._next);
									!r &&
										t._startAt &&
										!t._onUpdate &&
										t._start &&
										t._startAt.render(e, !0, n),
										t._onUpdate && (i || fe(t, "onUpdate")),
										l && t._repeat && !i && t.parent && fe(t, "onRepeat"),
										(e >= t._tDur || e < 0) &&
											t.ratio === r &&
											(t.ratio && $(t, 1),
											i ||
												(fe(
													t,
													t.ratio ? "onComplete" : "onReverseComplete",
													!0
												),
												t._prom && t._prom()));
								}
							})(this, t, e, i);
						return this;
					}),
					(r.targets = function () {
						return this._targets;
					}),
					(r.invalidate = function () {
						return (
							(this._pt =
								this._op =
								this._startAt =
								this._onUpdate =
								this._act =
								this._lazy =
									0),
							(this._ptLookup = []),
							this.timeline && this.timeline.invalidate(),
							t.prototype.invalidate.call(this)
						);
					}),
					(r.kill = function (t, e) {
						if (
							(void 0 === e && (e = "all"),
							!(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
						)
							return et(this);
						if (this.timeline)
							return (
								this.timeline.killTweensOf(
									t,
									e,
									Me && !0 !== Me.vars.overwrite
								),
								this
							);
						var i,
							s,
							o,
							r,
							a,
							l,
							u,
							c = this._targets,
							d = t ? he(t) : c,
							h = this._ptLookup,
							p = this._pt;
						if (
							(!e || "all" === e) &&
							(function (t, e) {
								for (
									var i = t.length, n = i === e.length;
									n && i-- && t[i] === e[i];

								);
								return i < 0;
							})(c, d)
						)
							return et(this);
						for (
							i = this._op = this._op || [],
								"all" !== e &&
									(n(e) &&
										((a = {}),
										_(e, function (t) {
											return (a[t] = 1);
										}),
										(e = a)),
									(e = (function (t, e) {
										var i,
											n,
											s,
											o,
											r = t[0] ? v(t[0]).harness : 0,
											a = r && r.aliases;
										if (!a) return e;
										for (n in ((i = ae({}, e)), a))
											if ((n in i))
												for (s = (o = a[n].split(",")).length; s--; )
													i[o[s]] = i[n];
										return i;
									})(c, e))),
								u = c.length;
							u--;

						)
							if (~d.indexOf(c[u]))
								for (a in ((s = h[u]),
								"all" === e
									? ((i[u] = e), (r = s), (o = {}))
									: ((o = i[u] = i[u] || {}), (r = e)),
								r))
									(l = s && s[a]) &&
										(("kill" in l.d && !0 !== l.d.kill(a)) || O(this, l, "_pt"),
										delete s[a]),
										"all" !== o && (o[a] = 1);
						return this._initted && !this._pt && p && et(this), this;
					}),
					(s.to = function (t, e, i) {
						return new s(t, e, i);
					}),
					(s.from = function (t, e) {
						return new s(t, w(arguments, 1));
					}),
					(s.delayedCall = function (t, e, i, n) {
						return new s(e, 0, {
							immediateRender: !1,
							lazy: !1,
							overwrite: !1,
							delay: t,
							onComplete: e,
							onReverseComplete: e,
							onCompleteParams: i,
							onReverseCompleteParams: i,
							callbackScope: n,
						});
					}),
					(s.fromTo = function (t, e, i) {
						return new s(t, w(arguments, 2));
					}),
					(s.set = function (t, e) {
						return (
							(e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e)
						);
					}),
					(s.killTweensOf = function (t, e, i) {
						return dt.killTweensOf(t, e, i);
					}),
					s
				);
			})(Fe);

		function qe(t, e, i) {
			return t.setAttribute(e, i);
		}

		function He(t, e, i, n) {
			n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
		}
		S(ze.prototype, {
			_targets: [],
			_lazy: 0,
			_startAt: 0,
			_op: 0,
			_onInit: 0,
		}),
			_("staggerTo,staggerFrom,staggerFromTo", function (t) {
				ze[t] = function () {
					var e = new Oe(),
						i = de.call(arguments, 0);
					return (
						i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
					);
				};
			});
		var Re = function (t, e, i) {
				return (t[e] = i);
			},
			We = function (t, e, i) {
				return t[e](i);
			},
			Xe = function (t, e, i, n) {
				return t[e](n.fp, i);
			},
			Ye = function (t, e) {
				return s(t[e]) ? We : r(t[e]) && t.setAttribute ? qe : Re;
			},
			Ve = function (t, e) {
				return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
			},
			Ue = function (t, e) {
				return e.set(e.t, e.p, !!(e.s + e.c * t), e);
			},
			Ge = function (t, e) {
				var i = e._pt,
					n = "";
				if (!t && e.b) n = e.b;
				else if (1 === t && e.e) n = e.e;
				else {
					for (; i; )
						(n =
							i.p +
							(i.m
								? i.m(i.s + i.c * t)
								: Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
							n),
							(i = i._next);
					n += e.c;
				}
				e.set(e.t, e.p, n, e);
			},
			Qe = function (t, e) {
				for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
			},
			Ke = function (t, e, i, n) {
				for (var s, o = this._pt; o; )
					(s = o._next), o.p === n && o.modifier(t, e, i), (o = s);
			},
			Ze = function (t) {
				for (var e, i, n = this._pt; n; )
					(i = n._next),
						(n.p === t && !n.op) || n.op === t
							? O(this, n, "_pt")
							: n.dep || (e = 1),
						(n = i);
				return !e;
			},
			Je = function (t) {
				for (var e, i, n, s, o = t._pt; o; ) {
					for (e = o._next, i = n; i && i.pr > o.pr; ) i = i._next;
					(o._prev = i ? i._prev : s) ? (o._prev._next = o) : (n = o),
						(o._next = i) ? (i._prev = o) : (s = o),
						(o = e);
				}
				t._pt = n;
			},
			ti =
				((ei.prototype.modifier = function (t, e, i) {
					(this.mSet = this.mSet || this.set),
						(this.set = He),
						(this.m = t),
						(this.mt = i),
						(this.tween = e);
				}),
				ei);

		function ei(t, e, i, n, s, o, r, a, l) {
			(this.t = e),
				(this.s = n),
				(this.c = s),
				(this.p = i),
				(this.r = o || Ve),
				(this.d = r || this),
				(this.set = a || Re),
				(this.pr = l || 0),
				(this._next = t) && (t._prev = this);
		}
		_(
			re +
				"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
			function (t) {
				return (Jt[t] = 1);
			}
		),
			(Zt.TweenMax = Zt.TweenLite = ze),
			(Zt.TimelineLite = Zt.TimelineMax = Oe),
			(dt = new Oe({
				sortChildren: !1,
				defaults: Nt,
				autoRemoveChildren: !0,
				id: "root",
				smoothChildTiming: !0,
			})),
			(Mt.stringFilter = rt);
		var ii = {
			registerPlugin: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
					e[i] = arguments[i];
				e.forEach(function (t) {
					return (function (t) {
						var e = (t = (!t.name && t.default) || t).name,
							i = s(t),
							n =
								e && !i && t.init
									? function () {
											this._props = [];
									  }
									: t,
							o = {
								init: g,
								render: Qe,
								add: Ne,
								kill: Ze,
								modifier: Ke,
								rawVars: 0,
							},
							r = {
								targetTest: 0,
								get: 0,
								getSetter: Ye,
								aliases: {},
								register: 0,
							};
						if ((be(), t !== n)) {
							if (ie[e]) return;
							S(n, S(F(t, o), r)),
								ae(n.prototype, ae(o, F(t, r))),
								(ie[(n.prop = e)] = n),
								t.targetTest && (oe.push(n), (Jt[e] = 1)),
								(e =
									("css" === e
										? "CSS"
										: e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
						}
						f(e, n), t.register && t.register(oi, n, ti);
					})(t);
				});
			},
			timeline: function (t) {
				return new Oe(t);
			},
			getTweensOf: function (t, e) {
				return dt.getTweensOf(t, e);
			},
			getProperty: function (t, e, i, s) {
				n(t) && (t = he(t)[0]);
				var o = v(t || {}).get,
					r = i ? k : T;
				return (
					"native" === i && (i = ""),
					t
						? e
							? r(((ie[e] && ie[e].get) || o)(t, e, i, s))
							: function (e, i, n) {
									return r(((ie[e] && ie[e].get) || o)(t, e, i, n));
							  }
						: t
				);
			},
			quickSetter: function (t, e, i) {
				if (1 < (t = he(t)).length) {
					var n = t.map(function (t) {
							return oi.quickSetter(t, e, i);
						}),
						s = n.length;
					return function (t) {
						for (var e = s; e--; ) n[e](t);
					};
				}
				t = t[0] || {};
				var o = ie[e],
					r = v(t),
					a = o
						? function (e) {
								var n = new o();
								(yt._pt = 0),
									n.init(t, i ? e + i : e, yt, 0, [t]),
									n.render(1, n),
									yt._pt && Qe(1, yt);
						  }
						: r.set(t, e);
				return o
					? a
					: function (n) {
							return a(t, e, i ? n + i : n, r, 1);
					  };
			},
			isTweening: function (t) {
				return 0 < dt.getTweensOf(t, !0).length;
			},
			defaults: function (t) {
				return t && t.ease && (t.ease = Te(t.ease, Nt.ease)), A(Nt, t || {});
			},
			config: function (t) {
				return A(Mt, t || {});
			},
			registerEffect: function (t) {
				var e = t.name,
					i = t.effect,
					n = t.plugins,
					s = t.defaults,
					o = t.extendTimeline;
				(n || "").split(",").forEach(function (t) {
					return (
						t && !ie[t] && !Zt[t] && p(e + " effect requires " + t + " plugin.")
					);
				}),
					(ne[e] = function (t, e, n) {
						return i(he(t), S(e || {}, s), n);
					}),
					o &&
						(Oe.prototype[e] = function (t, i, n) {
							return this.add(ne[e](t, a(i) ? i : (n = i) && {}, this), n);
						});
			},
			registerEase: function (t, e) {
				De[t] = Te(e);
			},
			parseEase: function (t, e) {
				return arguments.length ? Te(t, e) : De;
			},
			getById: function (t) {
				return dt.getById(t);
			},
			exportRoot: function (t, e) {
				void 0 === t && (t = {});
				var i,
					n,
					s = new Oe(t);
				for (
					s.smoothChildTiming = l(t.smoothChildTiming),
						dt.remove(s),
						s._dp = 0,
						s._time = s._tTime = dt._time,
						i = dt._first;
					i;

				)
					(n = i._next),
						(!e &&
							!i._dur &&
							i instanceof ze &&
							i.vars.onComplete === i._targets[0]) ||
							j(s, i, i._start - i._delay),
						(i = n);
				return j(dt, s, 0), s;
			},
			utils: {
				wrap: function t(e, i, n) {
					var s = i - e;
					return Wt(e)
						? Z(e, t(0, e.length), i)
						: W(n, function (t) {
								return ((s + ((t - e) % s)) % s) + e;
						  });
				},
				wrapYoyo: function t(e, i, n) {
					var s = i - e,
						o = 2 * s;
					return Wt(e)
						? Z(e, t(0, e.length - 1), i)
						: W(n, function (t) {
								return e + (s < (t = (o + ((t - e) % o)) % o) ? o - t : t);
						  });
				},
				distribute: U,
				random: K,
				snap: Q,
				normalize: function (t, e, i) {
					return pe(t, e, 0, 1, i);
				},
				getUnit: X,
				clamp: function (t, e, i) {
					return W(i, function (i) {
						return ce(t, e, i);
					});
				},
				splitColor: nt,
				toArray: he,
				mapRange: pe,
				pipe: function () {
					for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
						e[i] = arguments[i];
					return function (t) {
						return e.reduce(function (t, e) {
							return e(t);
						}, t);
					};
				},
				unitize: function (t, e) {
					return function (i) {
						return t(parseFloat(i)) + (e || X(i));
					};
				},
				interpolate: function t(e, i, s, o) {
					var r = isNaN(e + i)
						? 0
						: function (t) {
								return (1 - t) * e + t * i;
						  };
					if (!r) {
						var a,
							l,
							u,
							c,
							d,
							h = n(e),
							p = {};
						if ((!0 === s && (o = 1) && (s = null), h))
							(e = {
								p: e,
							}),
								(i = {
									p: i,
								});
						else if (Wt(e) && !Wt(i)) {
							for (u = [], c = e.length, d = c - 2, l = 1; l < c; l++)
								u.push(t(e[l - 1], e[l]));
							c--,
								(r = function (t) {
									t *= c;
									var e = Math.min(d, ~~t);
									return u[e](t - e);
								}),
								(s = i);
						} else o || (e = ae(Wt(e) ? [] : {}, e));
						if (!u) {
							for (a in i) Ne.call(p, e, a, "get", i[a]);
							r = function (t) {
								return Qe(t, p) || (h ? e.p : e);
							};
						}
					}
					return W(s, r);
				},
				shuffle: V,
			},
			install: d,
			effects: ne,
			ticker: _e,
			updateRoot: Oe.updateRoot,
			plugins: ie,
			globalTimeline: dt,
			core: {
				PropTween: ti,
				globals: f,
				Tween: ze,
				Timeline: Oe,
				Animation: Fe,
				getCache: v,
				_removeLinkedListItem: O,
			},
		};

		function ni(t, e) {
			for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
				i = i._next;
			return i;
		}

		function si(t, e) {
			return {
				name: t,
				rawVars: 1,
				init: function (t, i, s) {
					s._onInit = function (t) {
						var s, o;
						if (
							(n(i) &&
								((s = {}),
								_(i, function (t) {
									return (s[t] = 1);
								}),
								(i = s)),
							e)
						) {
							for (o in ((s = {}), i)) s[o] = e(i[o]);
							i = s;
						}
						!(function (t, e) {
							var i,
								n,
								s,
								o = t._targets;
							for (i in e)
								for (n = o.length; n--; )
									(s = (s = t._ptLookup[n][i]) && s.d) &&
										(s._pt && (s = ni(s, i)),
										s && s.modifier && s.modifier(e[i], t, o[n], i));
						})(t, i);
					};
				},
			};
		}
		_("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
			return (ii[t] = ze[t]);
		}),
			_e.add(Oe.updateRoot),
			(yt = ii.to(
				{},
				{
					duration: 0,
				}
			));
		var oi =
			ii.registerPlugin(
				{
					name: "attr",
					init: function (t, e, i, n, s) {
						for (var o in e)
							this.add(
								t,
								"setAttribute",
								(t.getAttribute(o) || 0) + "",
								e[o],
								n,
								s,
								0,
								0,
								o
							),
								this._props.push(o);
					},
				},
				{
					name: "endArray",
					init: function (t, e) {
						for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
					},
				},
				si("roundProps", G),
				si("modifiers"),
				si("snap", Q)
			) || ii;

		function ri(t, e) {
			return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
		}

		function ai(t, e) {
			return e.set(
				e.t,
				e.p,
				1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
				e
			);
		}

		function li(t, e) {
			return e.set(
				e.t,
				e.p,
				t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
				e
			);
		}

		function ui(t, e) {
			var i = e.s + e.c * t;
			e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
		}

		function ci(t, e) {
			return e.set(e.t, e.p, t ? e.e : e.b, e);
		}

		function di(t, e) {
			return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
		}

		function hi(t, e, i) {
			return (t.style[e] = i);
		}

		function pi(t, e, i) {
			return t.style.setProperty(e, i);
		}

		function fi(t, e, i) {
			return (t._gsap[e] = i);
		}

		function gi(t, e, i) {
			return (t._gsap.scaleX = t._gsap.scaleY = i);
		}

		function mi(t, e, i, n, s) {
			var o = t._gsap;
			(o.scaleX = o.scaleY = i), o.renderTransform(s, o);
		}

		function vi(t, e, i, n, s) {
			var o = t._gsap;
			(o[e] = i), o.renderTransform(s, o);
		}

		function yi(t, e) {
			var i = zi.createElementNS
				? zi.createElementNS(
						(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
						t
				  )
				: zi.createElement(t);
			return i.style ? i : zi.createElement(t);
		}

		function _i(t, e, i) {
			var n = getComputedStyle(t);
			return (
				n[e] ||
				n.getPropertyValue(e.replace(mn, "-$1").toLowerCase()) ||
				n.getPropertyValue(e) ||
				(!i && _i(t, xn(e) || e, 1)) ||
				""
			);
		}

		function bi() {
			"undefined" == typeof window ||
				((ji = window),
				(zi = ji.document),
				(qi = zi.documentElement),
				(Ri = yi("div") || {
					style: {},
				}),
				(Wi = yi("div")),
				(bn = xn(bn)),
				(Dn = xn(Dn)),
				(Ri.style.cssText =
					"border-width:0;line-height:0;position:absolute;padding:0"),
				(Yi = !!xn("perspective")),
				(Hi = 1));
		}

		function Di(t) {
			var e,
				i = yi(
					"svg",
					(this.ownerSVGElement &&
						this.ownerSVGElement.getAttribute("xmlns")) ||
						"http://www.w3.org/2000/svg"
				),
				n = this.parentNode,
				s = this.nextSibling,
				o = this.style.cssText;
			if (
				(qi.appendChild(i),
				i.appendChild(this),
				(this.style.display = "block"),
				t)
			)
				try {
					(e = this.getBBox()),
						(this._gsapBBox = this.getBBox),
						(this.getBBox = Di);
				} catch (t) {}
			else this._gsapBBox && (e = this._gsapBBox());
			return (
				n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
				qi.removeChild(i),
				(this.style.cssText = o),
				e
			);
		}

		function wi(t, e) {
			for (var i = e.length; i--; )
				if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
		}

		function xi(t) {
			var e;
			try {
				e = t.getBBox();
			} catch (i) {
				e = Di.call(t, !0);
			}
			return (
				(e && (e.width || e.height)) ||
					t.getBBox === Di ||
					(e = Di.call(t, !0)),
				!e || e.width || e.x || e.y
					? e
					: {
							x: +wi(t, ["x", "cx", "x1"]) || 0,
							y: +wi(t, ["y", "cy", "y1"]) || 0,
							width: 0,
							height: 0,
					  }
			);
		}

		function Ci(t) {
			return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !xi(t));
		}

		function Ti(t, e) {
			if (e) {
				var i = t.style;
				e in hn && (e = bn),
					i.removeProperty
						? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
								(e = "-" + e),
						  i.removeProperty(e.replace(mn, "-$1").toLowerCase()))
						: i.removeAttribute(e);
			}
		}

		function ki(t, e, i, n, s, o) {
			var r = new ti(t._pt, e, i, 0, 1, o ? di : ci);
			return ((t._pt = r).b = n), (r.e = s), t._props.push(i), r;
		}

		function Si(t, e, i, n) {
			var s,
				o,
				r,
				a,
				l = parseFloat(i) || 0,
				u = (i + "").trim().substr((l + "").length) || "px",
				c = Ri.style,
				d = vn.test(e),
				h = "svg" === t.tagName.toLowerCase(),
				p = (h ? "client" : "offset") + (d ? "Width" : "Height"),
				f = "px" === n,
				g = "%" === n;
			return n === u || !l || Cn[n] || Cn[u]
				? l
				: ("px" === u || f || (l = Si(t, e, i, "px")),
				  (a = t.getCTM && Ci(t)),
				  g && (hn[e] || ~e.indexOf("adius"))
						? b((l / (a ? t.getBBox()[d ? "width" : "height"] : t[p])) * 100)
						: ((c[d ? "width" : "height"] = 100 + (f ? u : n)),
						  (o =
								~e.indexOf("adius") || ("em" === n && t.appendChild && !h)
									? t
									: t.parentNode),
						  a && (o = (t.ownerSVGElement || {}).parentNode),
						  (o && o !== zi && o.appendChild) || (o = zi.body),
						  (r = o._gsap) && g && r.width && d && r.time === _e.time
								? b((l / r.width) * 100)
								: ((!g && "%" !== u) || (c.position = _i(t, "position")),
								  o === t && (c.position = "static"),
								  o.appendChild(Ri),
								  (s = Ri[p]),
								  o.removeChild(Ri),
								  (c.position = "absolute"),
								  d && g && (((r = v(o)).time = _e.time), (r.width = o[p])),
								  b(f ? (s * l) / 100 : s && l ? (100 / s) * l : 0))));
		}

		function Ei(t, e, i, n) {
			var s;
			return (
				Hi || bi(),
				e in _n &&
					"transform" !== e &&
					~(e = _n[e]).indexOf(",") &&
					(e = e.split(",")[0]),
				hn[e] && "transform" !== e
					? ((s = An(t, n)),
					  (s =
							"transformOrigin" !== e
								? s[e]
								: Fn(_i(t, Dn)) + " " + s.zOrigin + "px"))
					: ((s = t.style[e]) &&
							"auto" !== s &&
							!n &&
							!~(s + "").indexOf("calc(")) ||
					  (s =
							(kn[e] && kn[e](t, e, i)) ||
							_i(t, e) ||
							y(t, e) ||
							("opacity" === e ? 1 : 0)),
				i && !~(s + "").indexOf(" ") ? Si(t, e, s, i) + i : s
			);
		}

		function Ai(t, e, i, n) {
			if (!i || "none" === i) {
				var s = xn(e, t, 1),
					o = s && _i(t, s, 1);
				o && o !== i && ((e = s), (i = o));
			}
			var r,
				a,
				l,
				u,
				c,
				d,
				h,
				p,
				f,
				g,
				m,
				v,
				y = new ti(this._pt, t.style, e, 0, 1, Ge),
				_ = 0,
				b = 0;
			if (
				((y.b = i),
				(y.e = n),
				(i += ""),
				"auto" == (n += "") &&
					((t.style[e] = n), (n = _i(t, e) || n), (t.style[e] = i)),
				rt((r = [i, n])),
				(n = r[1]),
				(l = (i = r[0]).match(Vt) || []),
				(n.match(Vt) || []).length)
			) {
				for (; (a = Vt.exec(n)); )
					(h = a[0]),
						(f = n.substring(_, a.index)),
						c
							? (c = (c + 1) % 5)
							: ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
							  (c = 1),
						h !== (d = l[b++] || "") &&
							((u = parseFloat(d) || 0),
							(m = d.substr((u + "").length)),
							(v = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) &&
								(h = h.substr(2)),
							(p = parseFloat(h)),
							(g = h.substr((p + "").length)),
							(_ = Vt.lastIndex - g.length),
							g ||
								((g = g || Mt.units[e] || m),
								_ === n.length && ((n += g), (y.e += g))),
							m !== g && (u = Si(t, e, d, g) || 0),
							(y._pt = {
								_next: y._pt,
								p: f || 1 === b ? f : ",",
								s: u,
								c: v ? v * p : p - u,
								m: c && c < 4 ? Math.round : 0,
							}));
				y.c = _ < n.length ? n.substring(_, n.length) : "";
			} else y.r = "display" === e && "none" === n ? di : ci;
			return Qt.test(n) && (y.e = 0), (this._pt = y);
		}

		function Fi(t) {
			var e = t.split(" "),
				i = e[0],
				n = e[1] || "50%";
			return (
				("top" !== i && "bottom" !== i && "left" !== n && "right" !== n) ||
					((t = i), (i = n), (n = t)),
				(e[0] = Tn[i] || i),
				(e[1] = Tn[n] || n),
				e.join(" ")
			);
		}

		function Li(t, e) {
			if (e.tween && e.tween._time === e.tween._dur) {
				var i,
					n,
					s,
					o = e.t,
					r = o.style,
					a = e.u,
					l = o._gsap;
				if ("all" === a || !0 === a) (r.cssText = ""), (n = 1);
				else
					for (s = (a = a.split(",")).length; -1 < --s; )
						(i = a[s]),
							hn[i] && ((n = 1), (i = "transformOrigin" === i ? Dn : bn)),
							Ti(o, i);
				n &&
					(Ti(o, bn),
					l &&
						(l.svg && o.removeAttribute("transform"),
						An(o, 1),
						(l.uncache = 1)));
			}
		}

		function Oi(t) {
			return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
		}

		function $i(t) {
			var e = _i(t, bn);
			return Oi(e) ? Sn : e.substr(7).match(Yt).map(b);
		}

		function Mi(t, e) {
			var i,
				n,
				s,
				o,
				r = t._gsap || v(t),
				a = t.style,
				l = $i(t);
			return r.svg && t.getAttribute("transform")
				? "1,0,0,1,0,0" ===
				  (l = [
						(s = t.transform.baseVal.consolidate().matrix).a,
						s.b,
						s.c,
						s.d,
						s.e,
						s.f,
				  ]).join(",")
					? Sn
					: l
				: (l !== Sn ||
						t.offsetParent ||
						t === qi ||
						r.svg ||
						((s = a.display),
						(a.display = "block"),
						((i = t.parentNode) && t.offsetParent) ||
							((o = 1), (n = t.nextSibling), qi.appendChild(t)),
						(l = $i(t)),
						s ? (a.display = s) : Ti(t, "display"),
						o &&
							(n
								? i.insertBefore(t, n)
								: i
								? i.appendChild(t)
								: qi.removeChild(t))),
				  e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
		}

		function Ni(t, e, i, n, s, o) {
			var r,
				a,
				l,
				u = t._gsap,
				c = s || Mi(t, !0),
				d = u.xOrigin || 0,
				h = u.yOrigin || 0,
				p = u.xOffset || 0,
				f = u.yOffset || 0,
				g = c[0],
				m = c[1],
				v = c[2],
				y = c[3],
				_ = c[4],
				b = c[5],
				D = e.split(" "),
				w = parseFloat(D[0]) || 0,
				x = parseFloat(D[1]) || 0;
			i
				? c !== Sn &&
				  (a = g * y - m * v) &&
				  ((l = w * (-m / a) + x * (g / a) - (g * b - m * _) / a),
				  (w = w * (y / a) + x * (-v / a) + (v * b - y * _) / a),
				  (x = l))
				: ((w = (r = xi(t)).x + (~D[0].indexOf("%") ? (w / 100) * r.width : w)),
				  (x =
						r.y + (~(D[1] || D[0]).indexOf("%") ? (x / 100) * r.height : x))),
				n || (!1 !== n && u.smooth)
					? ((_ = w - d),
					  (b = x - h),
					  (u.xOffset = p + (_ * g + b * v) - _),
					  (u.yOffset = f + (_ * m + b * y) - b))
					: (u.xOffset = u.yOffset = 0),
				(u.xOrigin = w),
				(u.yOrigin = x),
				(u.smooth = !!n),
				(u.origin = e),
				(u.originIsAbsolute = !!i),
				(t.style[Dn] = "0px 0px"),
				o &&
					(ki(o, u, "xOrigin", d, w),
					ki(o, u, "yOrigin", h, x),
					ki(o, u, "xOffset", p, u.xOffset),
					ki(o, u, "yOffset", f, u.yOffset)),
				t.setAttribute("data-svg-origin", w + " " + x);
		}

		function Pi(t, e, i) {
			var n = X(e);
			return b(parseFloat(e) + parseFloat(Si(t, "x", i + "px", n))) + n;
		}

		function Ii(t, e, i, s, o, r) {
			var a,
				l,
				u = 360,
				c = n(o),
				d = parseFloat(o) * (c && ~o.indexOf("rad") ? pn : 1),
				h = r ? d * r : d - s,
				p = s + h + "deg";
			return (
				c &&
					("short" === (a = o.split("_")[1]) &&
						(h %= u) != h % 180 &&
						(h += h < 0 ? u : -u),
					"cw" === a && h < 0
						? (h = ((h + 36e9) % u) - ~~(h / u) * u)
						: "ccw" === a && 0 < h && (h = ((h - 36e9) % u) - ~~(h / u) * u)),
				(t._pt = l = new ti(t._pt, e, i, s, h, ai)),
				(l.e = p),
				(l.u = "deg"),
				t._props.push(i),
				l
			);
		}

		function Bi(t, e, i) {
			var n,
				s,
				o,
				r,
				a,
				l,
				u,
				c = Wi.style,
				d = i._gsap;
			for (s in ((c.cssText =
				getComputedStyle(i).cssText + ";position:absolute;display:block;"),
			(c[bn] = e),
			zi.body.appendChild(Wi),
			(n = An(Wi, 1)),
			hn))
				(o = d[s]) !== (r = n[s]) &&
					"perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 &&
					((a = X(o) !== (u = X(r)) ? Si(i, s, o, u) : parseFloat(o)),
					(l = parseFloat(r)),
					(t._pt = new ti(t._pt, d, s, a, l - a, ri)),
					(t._pt.u = u || 0),
					t._props.push(s));
			zi.body.removeChild(Wi);
		}
		(ze.version = Oe.version = oi.version = "3.2.6"), (mt = 1), u() && be();
		var ji,
			zi,
			qi,
			Hi,
			Ri,
			Wi,
			Xi,
			Yi,
			Vi = De.Power0,
			Ui = De.Power1,
			Gi = De.Power2,
			Qi = De.Power3,
			Ki = De.Power4,
			Zi = De.Linear,
			Ji = De.Quad,
			tn = De.Cubic,
			en = De.Quart,
			nn = De.Quint,
			sn = De.Strong,
			on = De.Elastic,
			rn = De.Back,
			an = De.SteppedEase,
			ln = De.Bounce,
			un = De.Sine,
			cn = De.Expo,
			dn = De.Circ,
			hn = {},
			pn = 180 / Math.PI,
			fn = Math.PI / 180,
			gn = Math.atan2,
			mn = /([A-Z])/g,
			vn = /(?:left|right|width|margin|padding|x)/i,
			yn = /[\s,\(]\S/,
			_n = {
				autoAlpha: "opacity,visibility",
				scale: "scaleX,scaleY",
				alpha: "opacity",
			},
			bn = "transform",
			Dn = bn + "Origin",
			wn = "O,Moz,ms,Ms,Webkit".split(","),
			xn = function (t, e, i) {
				var n = (e || Ri).style,
					s = 5;
				if (t in n && !i) return t;
				for (
					t = t.charAt(0).toUpperCase() + t.substr(1);
					s-- && !(wn[s] + t in n);

				);
				return s < 0 ? null : (3 === s ? "ms" : 0 <= s ? wn[s] : "") + t;
			},
			Cn = {
				deg: 1,
				rad: 1,
				turn: 1,
			},
			Tn = {
				top: "0%",
				bottom: "100%",
				left: "0%",
				right: "100%",
				center: "50%",
			},
			kn = {
				clearProps: function (t, e, i, n, s) {
					if ("isFromStart" !== s.data) {
						var o = (t._pt = new ti(t._pt, e, i, 0, 0, Li));
						return (o.u = n), (o.pr = -10), (o.tween = s), t._props.push(i), 1;
					}
				},
			},
			Sn = [1, 0, 0, 1, 0, 0],
			En = {},
			An = function (t, e) {
				var i = t._gsap || new Ae(t);
				if ("x" in i && !e && !i.uncache) return i;
				var n,
					s,
					o,
					r,
					a,
					l,
					u,
					c,
					d,
					h,
					p,
					f,
					g,
					m,
					v,
					y,
					_,
					D,
					w,
					x,
					C,
					T,
					k,
					S,
					E,
					A,
					F,
					L,
					O,
					$,
					M,
					N,
					P = t.style,
					I = i.scaleX < 0,
					B = "deg",
					j = _i(t, Dn) || "0";
				return (
					(n = s = o = l = u = c = d = h = p = 0),
					(r = a = 1),
					(i.svg = !(!t.getCTM || !Ci(t))),
					(m = Mi(t, i.svg)),
					i.svg &&
						((S = !i.uncache && t.getAttribute("data-svg-origin")),
						Ni(t, S || j, !!S || i.originIsAbsolute, !1 !== i.smooth, m)),
					(f = i.xOrigin || 0),
					(g = i.yOrigin || 0),
					m !== Sn &&
						((D = m[0]),
						(w = m[1]),
						(x = m[2]),
						(C = m[3]),
						(n = T = m[4]),
						(s = k = m[5]),
						6 === m.length
							? ((r = Math.sqrt(D * D + w * w)),
							  (a = Math.sqrt(C * C + x * x)),
							  (l = D || w ? gn(w, D) * pn : 0),
							  (d = x || C ? gn(x, C) * pn + l : 0) && (a *= Math.cos(d * fn)),
							  i.svg &&
									((n -= f - (f * D + g * x)), (s -= g - (f * w + g * C))))
							: ((N = m[6]),
							  ($ = m[7]),
							  (F = m[8]),
							  (L = m[9]),
							  (O = m[10]),
							  (M = m[11]),
							  (n = m[12]),
							  (s = m[13]),
							  (o = m[14]),
							  (u = (v = gn(N, O)) * pn),
							  v &&
									((S = T * (y = Math.cos(-v)) + F * (_ = Math.sin(-v))),
									(E = k * y + L * _),
									(A = N * y + O * _),
									(F = T * -_ + F * y),
									(L = k * -_ + L * y),
									(O = N * -_ + O * y),
									(M = $ * -_ + M * y),
									(T = S),
									(k = E),
									(N = A)),
							  (c = (v = gn(-x, O)) * pn),
							  v &&
									((y = Math.cos(-v)),
									(M = C * (_ = Math.sin(-v)) + M * y),
									(D = S = D * y - F * _),
									(w = E = w * y - L * _),
									(x = A = x * y - O * _)),
							  (l = (v = gn(w, D)) * pn),
							  v &&
									((S = D * (y = Math.cos(v)) + w * (_ = Math.sin(v))),
									(E = T * y + k * _),
									(w = w * y - D * _),
									(k = k * y - T * _),
									(D = S),
									(T = E)),
							  u &&
									359.9 < Math.abs(u) + Math.abs(l) &&
									((u = l = 0), (c = 180 - c)),
							  (r = b(Math.sqrt(D * D + w * w + x * x))),
							  (a = b(Math.sqrt(k * k + N * N))),
							  (v = gn(T, k)),
							  (d = 2e-4 < Math.abs(v) ? v * pn : 0),
							  (p = M ? 1 / (M < 0 ? -M : M) : 0)),
						i.svg &&
							((m = t.getAttribute("transform")),
							(i.forceCSS = t.setAttribute("transform", "") || !Oi(_i(t, bn))),
							m && t.setAttribute("transform", m))),
					90 < Math.abs(d) &&
						Math.abs(d) < 270 &&
						(I
							? ((r *= -1),
							  (d += l <= 0 ? 180 : -180),
							  (l += l <= 0 ? 180 : -180))
							: ((a *= -1), (d += d <= 0 ? 180 : -180))),
					(i.x =
						((i.xPercent =
							n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
							? 0
							: n) + "px"),
					(i.y =
						((i.yPercent =
							s && Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0)
							? 0
							: s) + "px"),
					(i.z = o + "px"),
					(i.scaleX = b(r)),
					(i.scaleY = b(a)),
					(i.rotation = b(l) + B),
					(i.rotationX = b(u) + B),
					(i.rotationY = b(c) + B),
					(i.skewX = d + B),
					(i.skewY = h + B),
					(i.transformPerspective = p + "px"),
					(i.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (P[Dn] = Fn(j)),
					(i.xOffset = i.yOffset = 0),
					(i.force3D = Mt.force3D),
					(i.renderTransform = i.svg ? Pn : Yi ? Nn : Ln),
					(i.uncache = 0),
					i
				);
			},
			Fn = function (t) {
				return (t = t.split(" "))[0] + " " + t[1];
			},
			Ln = function (t, e) {
				(e.z = "0px"),
					(e.rotationY = e.rotationX = "0deg"),
					(e.force3D = 0),
					Nn(t, e);
			},
			On = "0deg",
			$n = "0px",
			Mn = ") ",
			Nn = function (t, e) {
				var i = e || this,
					n = i.xPercent,
					s = i.yPercent,
					o = i.x,
					r = i.y,
					a = i.z,
					l = i.rotation,
					u = i.rotationY,
					c = i.rotationX,
					d = i.skewX,
					h = i.skewY,
					p = i.scaleX,
					f = i.scaleY,
					g = i.transformPerspective,
					m = i.force3D,
					v = i.target,
					y = i.zOrigin,
					_ = "",
					b = ("auto" === m && t && 1 !== t) || !0 === m;
				if (y && (c !== On || u !== On)) {
					var D,
						w = parseFloat(u) * fn,
						x = Math.sin(w),
						C = Math.cos(w);
					(w = parseFloat(c) * fn),
						(o = Pi(v, o, x * (D = Math.cos(w)) * -y)),
						(r = Pi(v, r, -Math.sin(w) * -y)),
						(a = Pi(v, a, C * D * -y + y));
				}
				g !== $n && (_ += "perspective(" + g + Mn),
					(n || s) && (_ += "translate(" + n + "%, " + s + "%) "),
					(!b && o === $n && r === $n && a === $n) ||
						(_ +=
							a !== $n || b
								? "translate3d(" + o + ", " + r + ", " + a + ") "
								: "translate(" + o + ", " + r + Mn),
					l !== On && (_ += "rotate(" + l + Mn),
					u !== On && (_ += "rotateY(" + u + Mn),
					c !== On && (_ += "rotateX(" + c + Mn),
					(d === On && h === On) || (_ += "skew(" + d + ", " + h + Mn),
					(1 === p && 1 === f) || (_ += "scale(" + p + ", " + f + Mn),
					(v.style[bn] = _ || "translate(0, 0)");
			},
			Pn = function (t, e) {
				var i,
					n,
					s,
					o,
					r,
					a = e || this,
					l = a.xPercent,
					u = a.yPercent,
					c = a.x,
					d = a.y,
					h = a.rotation,
					p = a.skewX,
					f = a.skewY,
					g = a.scaleX,
					m = a.scaleY,
					v = a.target,
					y = a.xOrigin,
					_ = a.yOrigin,
					D = a.xOffset,
					w = a.yOffset,
					x = a.forceCSS,
					C = parseFloat(c),
					T = parseFloat(d);
				(h = parseFloat(h)),
					(p = parseFloat(p)),
					(f = parseFloat(f)) && ((p += f = parseFloat(f)), (h += f)),
					h || p
						? ((h *= fn),
						  (p *= fn),
						  (i = Math.cos(h) * g),
						  (n = Math.sin(h) * g),
						  (s = Math.sin(h - p) * -m),
						  (o = Math.cos(h - p) * m),
						  p &&
								((f *= fn),
								(r = Math.tan(p - f)),
								(s *= r = Math.sqrt(1 + r * r)),
								(o *= r),
								f &&
									((r = Math.tan(f)),
									(i *= r = Math.sqrt(1 + r * r)),
									(n *= r))),
						  (i = b(i)),
						  (n = b(n)),
						  (s = b(s)),
						  (o = b(o)))
						: ((i = g), (o = m), (n = s = 0)),
					((C && !~(c + "").indexOf("px")) ||
						(T && !~(d + "").indexOf("px"))) &&
						((C = Si(v, "x", c, "px")), (T = Si(v, "y", d, "px"))),
					(y || _ || D || w) &&
						((C = b(C + y - (y * i + _ * s) + D)),
						(T = b(T + _ - (y * n + _ * o) + w))),
					(l || u) &&
						((C = b(C + (l / 100) * (r = v.getBBox()).width)),
						(T = b(T + (u / 100) * r.height))),
					(r =
						"matrix(" +
						i +
						"," +
						n +
						"," +
						s +
						"," +
						o +
						"," +
						C +
						"," +
						T +
						")"),
					v.setAttribute("transform", r),
					x && (v.style[bn] = r);
			};
		_("padding,margin,Width,Radius", function (t, e) {
			var i = "Right",
				n = "Bottom",
				s = "Left",
				o = (
					e < 3 ? ["Top", i, n, s] : ["Top" + s, "Top" + i, n + i, n + s]
				).map(function (i) {
					return e < 2 ? t + i : "border" + i + t;
				});
			kn[1 < e ? "border" + t : t] = function (t, e, i, n, s) {
				var r, a;
				if (arguments.length < 4)
					return (
						(r = o.map(function (e) {
							return Ei(t, e, i);
						})),
						5 === (a = r.join(" ")).split(r[0]).length ? r[0] : a
					);
				(r = (n + "").split(" ")),
					(a = {}),
					o.forEach(function (t, e) {
						return (a[t] = r[e] = r[e] || r[((e - 1) / 2) | 0]);
					}),
					t.init(e, a, s);
			};
		});
		var In,
			Bn,
			jn = {
				name: "css",
				register: bi,
				targetTest: function (t) {
					return t.style && t.nodeType;
				},
				init: function (t, e, i, n, s) {
					var o,
						r,
						a,
						l,
						u,
						c,
						d,
						p,
						f,
						g,
						m,
						v,
						y,
						_,
						b,
						D = this._props,
						w = t.style;
					for (d in (Hi || bi(), e))
						if (
							"autoRound" !== d &&
							((r = e[d]), !ie[d] || !$e(d, e, i, n, t, s))
						)
							if (
								((u = typeof r),
								(c = kn[d]),
								"function" === u && (u = typeof (r = r.call(i, n, t, s))),
								"string" === u && ~r.indexOf("random(") && (r = J(r)),
								c)
							)
								c(this, t, d, r, i) && (b = 1);
							else if ("--" === d.substr(0, 2))
								this.add(
									w,
									"setProperty",
									getComputedStyle(t).getPropertyValue(d) + "",
									r + "",
									n,
									s,
									0,
									0,
									d
								);
							else {
								if (
									((o = Ei(t, d)),
									(l = parseFloat(o)),
									(g =
										"string" === u && "=" === r.charAt(1)
											? +(r.charAt(0) + "1")
											: 0) && (r = r.substr(2)),
									(a = parseFloat(r)),
									d in _n &&
										("autoAlpha" === d &&
											(1 === l &&
												"hidden" === Ei(t, "visibility") &&
												a &&
												(l = 0),
											ki(
												this,
												w,
												"visibility",
												l ? "inherit" : "hidden",
												a ? "inherit" : "hidden",
												!a
											)),
										"scale" !== d &&
											"transform" !== d &&
											~(d = _n[d]).indexOf(",") &&
											(d = d.split(",")[0])),
									(m = d in hn))
								)
									if (
										(v ||
											((y = t._gsap).renderTransform || An(t),
											(_ = !1 !== e.smoothOrigin && y.smooth),
											((v = this._pt =
												new ti(
													this._pt,
													w,
													bn,
													0,
													1,
													y.renderTransform,
													y,
													0,
													-1
												)).dep = 1)),
										"scale" === d)
									)
										(this._pt = new ti(
											this._pt,
											y,
											"scaleY",
											y.scaleY,
											g ? g * a : a - y.scaleY
										)),
											D.push("scaleY", d),
											(d += "X");
									else {
										if ("transformOrigin" === d) {
											(r = Fi(r)),
												y.svg
													? Ni(t, r, 0, _, 0, this)
													: ((f = parseFloat(r.split(" ")[2]) || 0) !==
															y.zOrigin && ki(this, y, "zOrigin", y.zOrigin, f),
													  ki(this, w, d, Fn(o), Fn(r)));
											continue;
										}
										if ("svgOrigin" === d) {
											Ni(t, r, 1, _, 0, this);
											continue;
										}
										if (d in En) {
											Ii(this, y, d, l, r, g);
											continue;
										}
										if ("smoothOrigin" === d) {
											ki(this, y, "smooth", y.smooth, r);
											continue;
										}
										if ("force3D" === d) {
											y[d] = r;
											continue;
										}
										if ("transform" === d) {
											Bi(this, r, t);
											continue;
										}
									}
								else d in w || (d = xn(d) || d);
								if (
									m ||
									((a || 0 === a) && (l || 0 === l) && !yn.test(r) && d in w)
								)
									(p = (o + "").substr((l + "").length)) !==
										(f =
											(r + "").substr(((a = a || 0) + "").length) ||
											(d in Mt.units ? Mt.units[d] : p)) &&
										(l = Si(t, d, o, f)),
										(this._pt = new ti(
											this._pt,
											m ? y : w,
											d,
											l,
											g ? g * a : a - l,
											"px" !== f || !1 === e.autoRound || m ? ri : ui
										)),
										(this._pt.u = f || 0),
										p !== f && ((this._pt.b = o), (this._pt.r = li));
								else if (d in w) Ai.call(this, t, d, o, r);
								else {
									if (!(d in t)) {
										h(d, r);
										continue;
									}
									this.add(t, d, t[d], r, n, s);
								}
								D.push(d);
							}
					b && Je(this);
				},
				get: Ei,
				aliases: _n,
				getSetter: function (t, e, i) {
					var n = _n[e];
					return (
						n && n.indexOf(",") < 0 && (e = n),
						e in hn && e !== Dn && (t._gsap.x || Ei(t, "x"))
							? i && Xi === i
								? "scale" === e
									? gi
									: fi
								: (Xi = i || {}) && ("scale" === e ? mi : vi)
							: t.style && !r(t.style[e])
							? hi
							: ~e.indexOf("-")
							? pi
							: Ye(t, e)
					);
				},
				core: {
					_removeProperty: Ti,
					_getMatrix: Mi,
				},
			};
		(oi.utils.checkPrefix = xn),
			(Bn = _(
				"x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
					"," +
					(In = "rotation,rotationX,rotationY,skewX,skewY") +
					",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
				function (t) {
					hn[t] = 1;
				}
			)),
			_(In, function (t) {
				(Mt.units[t] = "deg"), (En[t] = 1);
			}),
			(_n[Bn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + In),
			_(
				"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
				function (t) {
					var e = t.split(":");
					_n[e[1]] = Bn[e[0]];
				}
			),
			_(
				"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
				function (t) {
					Mt.units[t] = "px";
				}
			),
			oi.registerPlugin(jn);
		var zn = oi.registerPlugin(jn) || oi,
			qn = zn.core.Tween;
		(t.Back = rn),
			(t.Bounce = ln),
			(t.CSSPlugin = jn),
			(t.Circ = dn),
			(t.Cubic = tn),
			(t.Elastic = on),
			(t.Expo = cn),
			(t.Linear = Zi),
			(t.Power0 = Vi),
			(t.Power1 = Ui),
			(t.Power2 = Gi),
			(t.Power3 = Qi),
			(t.Power4 = Ki),
			(t.Quad = Ji),
			(t.Quart = en),
			(t.Quint = nn),
			(t.Sine = un),
			(t.SteppedEase = an),
			(t.Strong = sn),
			(t.TimelineLite = Oe),
			(t.TimelineMax = Oe),
			(t.TweenLite = ze),
			(t.TweenMax = qn),
			(t.default = zn),
			(t.gsap = zn),
			"undefined" == typeof window || window !== t
				? Object.defineProperty(t, "__esModule", {
						value: !0,
				  })
				: delete t.default;
	}),
	(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? e(exports)
			: "function" == typeof define && define.amd
			? define(["exports"], e)
			: e(((t = t || self).window = t.window || {}));
	})(this, function (t) {
		"use strict";
		var e =
			/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

		function i(t) {
			return m.getComputedStyle(t);
		}

		function n(t, e) {
			var i;
			return D(t)
				? t
				: "string" == (i = typeof t) && !e && t
				? w.call(g.querySelectorAll(t), 0)
				: t && "object" == i && "length" in t
				? w.call(t, 0)
				: t
				? [t]
				: [];
		}

		function s(t) {
			return "absolute" === t.position || !0 === t.absolute;
		}

		function o(t, e) {
			for (var i, n = e.length; -1 < --n; )
				if (((i = e[n]), t.substr(0, i.length) === i)) return i.length;
		}

		function r(t, e) {
			void 0 === t && (t = "");
			var i = ~t.indexOf("++"),
				n = 1;
			return (
				i && (t = t.split("++").join("")),
				function () {
					return (
						"<" +
						e +
						" style='position:relative;display:inline-block;'" +
						(t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
					);
				}
			);
		}

		function a(t, e, i) {
			var n = t.nodeType;
			if (1 === n || 9 === n || 11 === n)
				for (t = t.firstChild; t; t = t.nextSibling) a(t, e, i);
			else (3 !== n && 4 !== n) || (t.nodeValue = t.nodeValue.split(e).join(i));
		}

		function l(t, e) {
			for (var i = e.length; -1 < --i; ) t.push(e[i]);
		}

		function u(t, e, i) {
			for (var n; t && t !== e; ) {
				if ((n = t._next || t.nextSibling))
					return n.textContent.charAt(0) === i;
				t = t.parentNode || t._parent;
			}
		}

		function c(t) {
			var e,
				i,
				s = n(t.childNodes),
				o = s.length;
			for (e = 0; e < o; e++)
				(i = s[e])._isSplit
					? c(i)
					: (e && 3 === i.previousSibling.nodeType
							? (i.previousSibling.nodeValue +=
									3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue)
							: 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
					  t.removeChild(i));
		}

		function d(t, e) {
			return parseFloat(e[t]) || 0;
		}

		function h(t, e, n, o, r, h, p) {
			var f,
				m,
				v,
				y,
				_,
				b,
				D,
				w,
				x,
				C,
				T,
				k,
				S = i(t),
				E = d("paddingLeft", S),
				A = -999,
				F = d("borderBottomWidth", S) + d("borderTopWidth", S),
				L = d("borderLeftWidth", S) + d("borderRightWidth", S),
				O = d("paddingTop", S) + d("paddingBottom", S),
				$ = d("paddingLeft", S) + d("paddingRight", S),
				M = 0.2 * d("fontSize", S),
				N = S.textAlign,
				P = [],
				I = [],
				B = [],
				j = e.wordDelimiter || " ",
				z = e.tag ? e.tag : e.span ? "span" : "div",
				q = e.type || e.split || "chars,words,lines",
				H = r && ~q.indexOf("lines") ? [] : null,
				R = ~q.indexOf("words"),
				W = ~q.indexOf("chars"),
				X = s(e),
				Y = e.linesClass,
				V = ~(Y || "").indexOf("++"),
				U = [];
			for (
				V && (Y = Y.split("++").join("")),
					v = (m = t.getElementsByTagName("*")).length,
					_ = [],
					f = 0;
				f < v;
				f++
			)
				_[f] = m[f];
			if (H || X)
				for (f = 0; f < v; f++)
					((b = (y = _[f]).parentNode === t) || X || (W && !R)) &&
						((k = y.offsetTop),
						H &&
							b &&
							Math.abs(k - A) > M &&
							("BR" !== y.nodeName || 0 === f) &&
							((D = []), H.push(D), (A = k)),
						X &&
							((y._x = y.offsetLeft),
							(y._y = k),
							(y._w = y.offsetWidth),
							(y._h = y.offsetHeight)),
						H &&
							(((y._isSplit && b) ||
								(!W && b) ||
								(R && b) ||
								(!R &&
									y.parentNode.parentNode === t &&
									!y.parentNode._isSplit)) &&
								(D.push(y), (y._x -= E), u(y, t, j) && (y._wordEnd = !0)),
							"BR" === y.nodeName &&
								((y.nextSibling && "BR" === y.nextSibling.nodeName) ||
									0 === f) &&
								H.push([])));
			for (f = 0; f < v; f++)
				(b = (y = _[f]).parentNode === t),
					"BR" !== y.nodeName
						? (X &&
								((x = y.style),
								R ||
									b ||
									((y._x += y.parentNode._x), (y._y += y.parentNode._y)),
								(x.left = y._x + "px"),
								(x.top = y._y + "px"),
								(x.position = "absolute"),
								(x.display = "block"),
								(x.width = y._w + 1 + "px"),
								(x.height = y._h + "px")),
						  !R && W
								? y._isSplit
									? ((y._next = y.nextSibling), y.parentNode.appendChild(y))
									: y.parentNode._isSplit
									? ((y._parent = y.parentNode),
									  !y.previousSibling &&
											y.firstChild &&
											(y.firstChild._isFirst = !0),
									  y.nextSibling &&
											" " === y.nextSibling.textContent &&
											!y.nextSibling.nextSibling &&
											U.push(y.nextSibling),
									  (y._next =
											y.nextSibling && y.nextSibling._isFirst
												? null
												: y.nextSibling),
									  y.parentNode.removeChild(y),
									  _.splice(f--, 1),
									  v--)
									: b ||
									  ((k = !y.nextSibling && u(y.parentNode, t, j)),
									  y.parentNode._parent && y.parentNode._parent.appendChild(y),
									  k && y.parentNode.appendChild(g.createTextNode(" ")),
									  "span" === z && (y.style.display = "inline"),
									  P.push(y))
								: y.parentNode._isSplit && !y._isSplit && "" !== y.innerHTML
								? I.push(y)
								: W &&
								  !y._isSplit &&
								  ("span" === z && (y.style.display = "inline"), P.push(y)))
						: H || X
						? (y.parentNode && y.parentNode.removeChild(y),
						  _.splice(f--, 1),
						  v--)
						: R || t.appendChild(y);
			for (f = U.length; -1 < --f; ) U[f].parentNode.removeChild(U[f]);
			if (H) {
				for (
					X &&
						((C = g.createElement(z)),
						t.appendChild(C),
						(T = C.offsetWidth + "px"),
						(k = C.offsetParent === t ? 0 : t.offsetLeft),
						t.removeChild(C)),
						x = t.style.cssText,
						t.style.cssText = "display:none;";
					t.firstChild;

				)
					t.removeChild(t.firstChild);
				for (w = " " === j && (!X || (!R && !W)), f = 0; f < H.length; f++) {
					for (
						D = H[f],
							(C = g.createElement(z)).style.cssText =
								"display:block;text-align:" +
								N +
								";position:" +
								(X ? "absolute;" : "relative;"),
							Y && (C.className = Y + (V ? f + 1 : "")),
							B.push(C),
							v = D.length,
							m = 0;
						m < v;
						m++
					)
						"BR" !== D[m].nodeName &&
							((y = D[m]),
							C.appendChild(y),
							w && y._wordEnd && C.appendChild(g.createTextNode(" ")),
							X &&
								(0 === m &&
									((C.style.top = y._y + "px"), (C.style.left = E + k + "px")),
								(y.style.top = "0px"),
								k && (y.style.left = y._x - k + "px")));
					0 === v
						? (C.innerHTML = "&nbsp;")
						: R || W || (c(C), a(C, String.fromCharCode(160), " ")),
						X && ((C.style.width = T), (C.style.height = y._h + "px")),
						t.appendChild(C);
				}
				t.style.cssText = x;
			}
			X &&
				(p > t.clientHeight &&
					((t.style.height = p - O + "px"),
					t.clientHeight < p && (t.style.height = p + F + "px")),
				h > t.clientWidth &&
					((t.style.width = h - $ + "px"),
					t.clientWidth < h && (t.style.width = h + L + "px"))),
				l(n, P),
				R && l(o, I),
				l(r, B);
		}

		function p(t, i, n, r) {
			var l,
				u,
				c,
				d,
				h,
				p,
				f,
				m,
				v = i.tag ? i.tag : i.span ? "span" : "div",
				y = ~(i.type || i.split || "chars,words,lines").indexOf("chars"),
				D = s(i),
				w = i.wordDelimiter || " ",
				x = " " !== w ? "" : D ? "&#173; " : " ",
				C = "</" + v + ">",
				T = 1,
				k = i.specialChars
					? "function" == typeof i.specialChars
						? i.specialChars
						: o
					: null,
				S = g.createElement("div"),
				E = t.parentNode;
			for (
				E.insertBefore(S, t),
					S.textContent = t.nodeValue,
					E.removeChild(t),
					f =
						-1 !==
						(l = (function t(e) {
							var i = e.nodeType,
								n = "";
							if (1 === i || 9 === i || 11 === i) {
								if ("string" == typeof e.textContent) return e.textContent;
								for (e = e.firstChild; e; e = e.nextSibling) n += t(e);
							} else if (3 === i || 4 === i) return e.nodeValue;
							return n;
						})((t = S))).indexOf("<"),
					!1 !== i.reduceWhiteSpace && (l = l.replace(b, " ").replace(_, "")),
					f && (l = l.split("<").join("{{LT}}")),
					h = l.length,
					u = (" " === l.charAt(0) ? x : "") + n(),
					c = 0;
				c < h;
				c++
			)
				if (((p = l.charAt(c)), k && (m = k(l.substr(c), i.specialChars))))
					(p = l.substr(c, m || 1)),
						(u += y && " " !== p ? r() + p + "</" + v + ">" : p),
						(c += m - 1);
				else if (p === w && l.charAt(c - 1) !== w && c) {
					for (u += T ? C : "", T = 0; l.charAt(c + 1) === w; ) (u += x), c++;
					c === h - 1
						? (u += x)
						: ")" !== l.charAt(c + 1) && ((u += x + n()), (T = 1));
				} else
					"{" === p && "{{LT}}" === l.substr(c, 6)
						? ((u += y ? r() + "{{LT}}</" + v + ">" : "{{LT}}"), (c += 5))
						: (55296 <= p.charCodeAt(0) && p.charCodeAt(0) <= 56319) ||
						  (65024 <= l.charCodeAt(c + 1) && l.charCodeAt(c + 1) <= 65039)
						? ((d = ((l.substr(c, 12).split(e) || [])[1] || "").length || 2),
						  (u +=
								y && " " !== p
									? r() + l.substr(c, d) + "</" + v + ">"
									: l.substr(c, d)),
						  (c += d - 1))
						: (u += y && " " !== p ? r() + p + "</" + v + ">" : p);
			(t.outerHTML = u + (T ? C : "")), f && a(E, "{{LT}}", "<");
		}

		function f(t, e, o, r) {
			var a,
				l,
				u = n(t.childNodes),
				c = u.length,
				d = s(e);
			if (3 !== t.nodeType || 1 < c) {
				for (e.absolute = !1, a = 0; a < c; a++)
					(3 === (l = u[a]).nodeType && !/\S+/.test(l.nodeValue)) ||
						(d &&
							3 !== l.nodeType &&
							"inline" === i(l).display &&
							((l.style.display = "inline-block"),
							(l.style.position = "relative")),
						(l._isSplit = !0),
						f(l, e, o, r));
				return (e.absolute = d), void (t._isSplit = !0);
			}
			p(t, e, o, r);
		}
		var g,
			m,
			v,
			y,
			_ = /(?:\r|\n|\t\t)/g,
			b = /(?:\s\s+)/g,
			D = Array.isArray,
			w = [].slice,
			x =
				(((y = C.prototype).split = function (t) {
					this.isSplit && this.revert(),
						(this.vars = t = t || this.vars),
						(this._originals.length =
							this.chars.length =
							this.words.length =
							this.lines.length =
								0);
					for (
						var e,
							i,
							n,
							s = this.elements.length,
							o = t.tag ? t.tag : t.span ? "span" : "div",
							a = r(t.wordsClass, o),
							l = r(t.charsClass, o);
						-1 < --s;

					)
						(n = this.elements[s]),
							(this._originals[s] = n.innerHTML),
							(e = n.clientHeight),
							(i = n.clientWidth),
							f(n, t, a, l),
							h(n, t, this.chars, this.words, this.lines, i, e);
					return (
						this.chars.reverse(),
						this.words.reverse(),
						this.lines.reverse(),
						(this.isSplit = !0),
						this
					);
				}),
				(y.revert = function () {
					var t = this._originals;
					if (!t) throw "revert() call wasn't scoped properly.";
					return (
						this.elements.forEach(function (e, i) {
							return (e.innerHTML = t[i]);
						}),
						(this.chars = []),
						(this.words = []),
						(this.lines = []),
						(this.isSplit = !1),
						this
					);
				}),
				(C.create = function (t, e) {
					return new C(t, e);
				}),
				C);

		function C(t, e) {
			v || ((g = document), (m = window), (v = 1)),
				(this.elements = n(t)),
				(this.chars = []),
				(this.words = []),
				(this.lines = []),
				(this._originals = []),
				(this.vars = e || {}),
				this.split(e);
		}
		(x.version = "3.2.6"),
			(t.SplitText = x),
			(t.default = x),
			"undefined" == typeof window || window !== t
				? Object.defineProperty(t, "__esModule", {
						value: !0,
				  })
				: delete t.default;
	}),
	(function (t, e, i, n) {
		"use strict";

		function s(e, i) {
			(this.element = e),
				(this.settings = t.extend({}, r, i)),
				(this._defaults = r),
				(this._name = o),
				this.init();
		}
		var o = "mgGlitch",
			r = {
				destroy: !1,
				glitch: !0,
				scale: !0,
				blend: !0,
				blendModeType: "hue",
				glitch1TimeMin: 600,
				glitch1TimeMax: 900,
				glitch2TimeMin: 10,
				glitch2TimeMax: 115,
				zIndexStart: 5,
			};
		t.extend(s.prototype, {
			init: function () {
				this.glitch();
			},
			glitch: function () {
				function e(t, e) {
					return Math.floor(Math.random() * (e - t + 1)) + t;
				}
				var i = this.element,
					n = this.settings.scale,
					s = this.settings.glitch1TimeMin,
					o = this.settings.glitch1TimeMax,
					r = this.settings.glitch2TimeMin,
					a = this.settings.glitch2TimeMax,
					l = this.settings.zIndexStart;
				if (!0 === this.settings.destroy)
					(t(i).hasClass("el-front-1") ||
						t(i).hasClass("front-3") ||
						t(i).hasClass("front-2")) &&
						t(".front-1, .front-2, .front-3").remove(),
						t(".back").removeClass("back");
				else if (!1 === this.settings.destroy) {
					if (
						(t(i).clone().insertBefore(i).addClass("back").css({
							"z-index": l,
						}),
						!0 === this.settings.blend)
					)
						t(i)
							.clone()
							.insertAfter(i)
							.addClass("front-3")
							.css({
								"z-index": l + 3,
								"mix-blend-mode": this.settings.blendModeType,
							}),
							(function s() {
								var o = e(10, 1900),
									l = e(10, 1300),
									u = e(0, 40),
									c = e(0, 40),
									d = e(r, a);
								if (!0 === n)
									var h = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
								else !1 === n && (h = 1);
								t(i)
									.next()
									.next()
									.css({
										clip: "rect(" + o + "px, 9999px, " + l + "px,0px)",
										left: u,
										right: c,
										"-webkit-transform": "scale(" + h + ")",
										"-ms-transform": "scale(" + h + ")",
										transform: "scale(" + h + ")",
									}),
									setTimeout(s, d);
							})();
					if (!0 === this.settings.glitch)
						t(i)
							.clone()
							.insertAfter(i)
							.addClass("front-2")
							.css({
								"z-index": l + 2,
							}),
							t(".back")
								.next()
								.addClass("front-1")
								.css({
									"z-index": l + 1,
								}),
							(function n() {
								var r = e(10, 1900),
									a = e(10, 1300),
									l = e(0, 16),
									u = e(0, 16),
									c = e(s, o);
								t(i).css({
									clip: "rect(" + r + "px, 9999px, " + a + "px,0px)",
									right: u,
									left: l,
								}),
									setTimeout(n, c);
							})(),
							(function s() {
								var o = e(10, 1900),
									l = e(10, 1300),
									u = e(0, 40),
									c = e(0, 40),
									d = e(r, a);
								if (!0 === n)
									var h = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
								else !1 === n && (h = 1);
								t(i)
									.next()
									.css({
										clip: "rect(" + o + "px, 9999px, " + l + "px,0px)",
										left: u,
										right: c,
										"-webkit-transform": "scale(" + h + ")",
										"-ms-transform": "scale(" + h + ")",
										transform: "scale(" + h + ")",
									}),
									setTimeout(s, d);
							})();
				}
			},
		}),
			(t.fn[o] = function (t) {
				return this.each(function () {
					new s(this, t);
				});
			});
	})(jQuery, window, document),
	(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? (module.exports = e())
			: "function" == typeof define && define.amd
			? define(e)
			: ((t = t || self).GLightbox = e());
	})(this, function () {
		"use strict";

		function t(e) {
			return (t =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (t) {
							return typeof t;
					  }
					: function (t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t;
					  })(e);
		}

		function e(t, e) {
			if (!(t instanceof e))
				throw new TypeError("Cannot call a class as a function");
		}

		function i(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n);
			}
		}

		function n(t, e, n) {
			return e && i(t.prototype, e), n && i(t, n), t;
		}
		var s = Date.now();

		function o() {
			var t = {},
				e = !0,
				i = 0,
				n = arguments.length;
			"[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
				((e = arguments[0]), i++);
			for (
				var s = function (i) {
					for (var n in i)
						Object.prototype.hasOwnProperty.call(i, n) &&
							(e && "[object Object]" === Object.prototype.toString.call(i[n])
								? (t[n] = o(!0, t[n], i[n]))
								: (t[n] = i[n]));
				};
				i < n;
				i++
			)
				s(arguments[i]);
			return t;
		}

		function r(t, e) {
			if (
				((C(t) || t === window || t === document) && (t = [t]),
				k(t) || S(t) || (t = [t]),
				0 != F(t))
			)
				if (k(t) && !S(t))
					for (
						var i = t.length, n = 0;
						n < i && !1 !== e.call(t[n], t[n], n, t);
						n++
					);
				else if (S(t))
					for (var s in t)
						if (A(t, s) && !1 === e.call(t[s], t[s], s, t)) break;
		}

		function a(t) {
			var e =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
				i =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
				n = (t[s] = t[s] || []),
				o = {
					all: n,
					evt: null,
					found: null,
				};
			return (
				e &&
					i &&
					F(n) > 0 &&
					r(n, function (t, n) {
						if (t.eventName == e && t.fn.toString() == i.toString())
							return (o.found = !0), (o.evt = n), !1;
					}),
				o
			);
		}

		function l(t) {
			var e =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				i = e.onElement,
				n = e.withCallback,
				s = e.avoidDuplicate,
				o = void 0 === s || s,
				l = e.once,
				u = void 0 !== l && l,
				c = e.useCapture,
				d = void 0 !== c && c,
				h = arguments.length > 2 ? arguments[2] : void 0,
				p = i || [];

			function f(t) {
				w(n) && n.call(h, t, this), u && f.destroy();
			}
			return (
				x(p) && (p = document.querySelectorAll(p)),
				(f.destroy = function () {
					r(p, function (e) {
						var i = a(e, t, f);
						i.found && i.all.splice(i.evt, 1),
							e.removeEventListener && e.removeEventListener(t, f, d);
					});
				}),
				r(p, function (e) {
					var i = a(e, t, f);
					((e.addEventListener && o && !i.found) || !o) &&
						(e.addEventListener(t, f, d),
						i.all.push({
							eventName: t,
							fn: f,
						}));
				}),
				f
			);
		}

		function u(t, e) {
			r(e.split(" "), function (e) {
				return t.classList.add(e);
			});
		}

		function c(t, e) {
			r(e.split(" "), function (e) {
				return t.classList.remove(e);
			});
		}

		function d(t, e) {
			return t.classList.contains(e);
		}

		function h(t, e) {
			for (; t !== document.body; ) {
				if (!(t = t.parentElement)) return !1;
				if (
					"function" == typeof t.matches ? t.matches(e) : t.msMatchesSelector(e)
				)
					return t;
			}
		}

		function p(t) {
			var e =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
				i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			if (!t || "" === e) return !1;
			if ("none" == e) return w(i) && i(), !1;
			var n = (function () {
					var t,
						e = document.createElement("fakeelement"),
						i = {
							animation: "animationend",
							OAnimation: "oAnimationEnd",
							MozAnimation: "animationend",
							WebkitAnimation: "webkitAnimationEnd",
						};
					for (t in i) if (void 0 !== e.style[t]) return i[t];
				})(),
				s = e.split(" ");
			r(s, function (e) {
				u(t, "g" + e);
			}),
				l(n, {
					onElement: t,
					avoidDuplicate: !1,
					once: !0,
					withCallback: function (t, e) {
						r(s, function (t) {
							c(e, "g" + t);
						}),
							w(i) && i();
					},
				});
		}

		function f(t) {
			var e =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
			if ("" == e)
				return (
					(t.style.webkitTransform = ""),
					(t.style.MozTransform = ""),
					(t.style.msTransform = ""),
					(t.style.OTransform = ""),
					(t.style.transform = ""),
					!1
				);
			(t.style.webkitTransform = e),
				(t.style.MozTransform = e),
				(t.style.msTransform = e),
				(t.style.OTransform = e),
				(t.style.transform = e);
		}

		function g(t) {
			t.style.display = "block";
		}

		function m(t) {
			t.style.display = "none";
		}

		function v(t) {
			var e = document.createDocumentFragment(),
				i = document.createElement("div");
			for (i.innerHTML = t; i.firstChild; ) e.appendChild(i.firstChild);
			return e;
		}

		function y() {
			return {
				width:
					window.innerWidth ||
					document.documentElement.clientWidth ||
					document.body.clientWidth,
				height:
					window.innerHeight ||
					document.documentElement.clientHeight ||
					document.body.clientHeight,
			};
		}

		function _(t, e, i, n) {
			if (t()) e();
			else {
				var s;
				i || (i = 100);
				var o = setInterval(function () {
					t() && (clearInterval(o), s && clearTimeout(s), e());
				}, i);
				n &&
					(s = setTimeout(function () {
						clearInterval(o);
					}, n));
			}
		}

		function b(t, e, i) {
			if (E(t)) console.error("Inject assets error");
			else if ((w(e) && ((i = e), (e = !1)), x(e) && e in window)) w(i) && i();
			else {
				var n;
				if (-1 !== t.indexOf(".css")) {
					if (
						(n = document.querySelectorAll('link[href="' + t + '"]')) &&
						n.length > 0
					)
						return void (w(i) && i());
					var s = document.getElementsByTagName("head")[0],
						o = s.querySelectorAll('link[rel="stylesheet"]'),
						r = document.createElement("link");
					return (
						(r.rel = "stylesheet"),
						(r.type = "text/css"),
						(r.href = t),
						(r.media = "all"),
						o ? s.insertBefore(r, o[0]) : s.appendChild(r),
						void (w(i) && i())
					);
				}
				if (
					(n = document.querySelectorAll('script[src="' + t + '"]')) &&
					n.length > 0
				) {
					if (w(i)) {
						if (x(e))
							return (
								_(
									function () {
										return void 0 !== window[e];
									},
									function () {
										i();
									}
								),
								!1
							);
						i();
					}
				} else {
					var a = document.createElement("script");
					(a.type = "text/javascript"),
						(a.src = t),
						(a.onload = function () {
							if (w(i)) {
								if (x(e))
									return (
										_(
											function () {
												return void 0 !== window[e];
											},
											function () {
												i();
											}
										),
										!1
									);
								i();
							}
						}),
						document.body.appendChild(a);
				}
			}
		}

		function D() {
			return (
				"navigator" in window &&
				window.navigator.userAgent.match(
					/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
				)
			);
		}

		function w(t) {
			return "function" == typeof t;
		}

		function x(t) {
			return "string" == typeof t;
		}

		function C(t) {
			return !(!t || !t.nodeType || 1 != t.nodeType);
		}

		function T(t) {
			return Array.isArray(t);
		}

		function k(t) {
			return t && t.length && isFinite(t.length);
		}

		function S(e) {
			return "object" === t(e) && null != e && !w(e) && !T(e);
		}

		function E(t) {
			return null == t;
		}

		function A(t, e) {
			return null !== t && hasOwnProperty.call(t, e);
		}

		function F(t) {
			if (S(t)) {
				if (t.keys) return t.keys().length;
				var e = 0;
				for (var i in t) A(t, i) && e++;
				return e;
			}
			return t.length;
		}

		function L(t) {
			return !isNaN(parseFloat(t)) && isFinite(t);
		}

		function O() {
			var t =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
				e = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
			if (!e.length) return !1;
			if (1 == e.length) return e[0];
			"string" == typeof t && (t = parseInt(t));
			var i = t < 0 ? 1 : t + 1;
			i > e.length && (i = "1");
			var n = [];
			r(e, function (t) {
				n.push(t.getAttribute("data-taborder"));
			});
			var s = n
				.filter(function (t) {
					return t >= parseInt(i);
				})
				.sort()[0];
			return document.querySelector('.gbtn[data-taborder="'.concat(s, '"]'));
		}

		function $(t) {
			return Math.sqrt(t.x * t.x + t.y * t.y);
		}
		var M = (function () {
			function t(i) {
				e(this, t), (this.handlers = []), (this.el = i);
			}
			return (
				n(t, [
					{
						key: "add",
						value: function (t) {
							this.handlers.push(t);
						},
					},
					{
						key: "del",
						value: function (t) {
							t || (this.handlers = []);
							for (var e = this.handlers.length; e >= 0; e--)
								this.handlers[e] === t && this.handlers.splice(e, 1);
						},
					},
					{
						key: "dispatch",
						value: function () {
							for (var t = 0, e = this.handlers.length; t < e; t++) {
								var i = this.handlers[t];
								"function" == typeof i && i.apply(this.el, arguments);
							}
						},
					},
				]),
				t
			);
		})();

		function N(t, e) {
			var i = new M(t);
			return i.add(e), i;
		}
		var P = (function () {
			function t(i, n) {
				e(this, t),
					(this.element = "string" == typeof i ? document.querySelector(i) : i),
					(this.start = this.start.bind(this)),
					(this.move = this.move.bind(this)),
					(this.end = this.end.bind(this)),
					(this.cancel = this.cancel.bind(this)),
					this.element.addEventListener("touchstart", this.start, !1),
					this.element.addEventListener("touchmove", this.move, !1),
					this.element.addEventListener("touchend", this.end, !1),
					this.element.addEventListener("touchcancel", this.cancel, !1),
					(this.preV = {
						x: null,
						y: null,
					}),
					(this.pinchStartLen = null),
					(this.zoom = 1),
					(this.isDoubleTap = !1);
				var s = function () {};
				(this.rotate = N(this.element, n.rotate || s)),
					(this.touchStart = N(this.element, n.touchStart || s)),
					(this.multipointStart = N(this.element, n.multipointStart || s)),
					(this.multipointEnd = N(this.element, n.multipointEnd || s)),
					(this.pinch = N(this.element, n.pinch || s)),
					(this.swipe = N(this.element, n.swipe || s)),
					(this.tap = N(this.element, n.tap || s)),
					(this.doubleTap = N(this.element, n.doubleTap || s)),
					(this.longTap = N(this.element, n.longTap || s)),
					(this.singleTap = N(this.element, n.singleTap || s)),
					(this.pressMove = N(this.element, n.pressMove || s)),
					(this.twoFingerPressMove = N(
						this.element,
						n.twoFingerPressMove || s
					)),
					(this.touchMove = N(this.element, n.touchMove || s)),
					(this.touchEnd = N(this.element, n.touchEnd || s)),
					(this.touchCancel = N(this.element, n.touchCancel || s)),
					(this._cancelAllHandler = this.cancelAll.bind(this)),
					window.addEventListener("scroll", this._cancelAllHandler),
					(this.delta = null),
					(this.last = null),
					(this.now = null),
					(this.tapTimeout = null),
					(this.singleTapTimeout = null),
					(this.longTapTimeout = null),
					(this.swipeTimeout = null),
					(this.x1 = this.x2 = this.y1 = this.y2 = null),
					(this.preTapPosition = {
						x: null,
						y: null,
					});
			}
			return (
				n(t, [
					{
						key: "start",
						value: function (t) {
							if (t.touches) {
								(this.now = Date.now()),
									(this.x1 = t.touches[0].pageX),
									(this.y1 = t.touches[0].pageY),
									(this.delta = this.now - (this.last || this.now)),
									this.touchStart.dispatch(t, this.element),
									null !== this.preTapPosition.x &&
										((this.isDoubleTap =
											this.delta > 0 &&
											this.delta <= 250 &&
											Math.abs(this.preTapPosition.x - this.x1) < 30 &&
											Math.abs(this.preTapPosition.y - this.y1) < 30),
										this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
									(this.preTapPosition.x = this.x1),
									(this.preTapPosition.y = this.y1),
									(this.last = this.now);
								var e = this.preV;
								if (t.touches.length > 1) {
									this._cancelLongTap(), this._cancelSingleTap();
									var i = {
										x: t.touches[1].pageX - this.x1,
										y: t.touches[1].pageY - this.y1,
									};
									(e.x = i.x),
										(e.y = i.y),
										(this.pinchStartLen = $(e)),
										this.multipointStart.dispatch(t, this.element);
								}
								(this._preventTap = !1),
									(this.longTapTimeout = setTimeout(
										function () {
											this.longTap.dispatch(t, this.element),
												(this._preventTap = !0);
										}.bind(this),
										750
									));
							}
						},
					},
					{
						key: "move",
						value: function (t) {
							if (t.touches) {
								var e = this.preV,
									i = t.touches.length,
									n = t.touches[0].pageX,
									s = t.touches[0].pageY;
								if (((this.isDoubleTap = !1), i > 1)) {
									var o = t.touches[1].pageX,
										r = t.touches[1].pageY,
										a = {
											x: t.touches[1].pageX - n,
											y: t.touches[1].pageY - s,
										};
									null !== e.x &&
										(this.pinchStartLen > 0 &&
											((t.zoom = $(a) / this.pinchStartLen),
											this.pinch.dispatch(t, this.element)),
										(t.angle = (function (t, e) {
											var i = (function (t, e) {
												var i = $(t) * $(e);
												if (0 === i) return 0;
												var n =
													(function (t, e) {
														return t.x * e.x + t.y * e.y;
													})(t, e) / i;
												return n > 1 && (n = 1), Math.acos(n);
											})(t, e);
											return (
												(function (t, e) {
													return t.x * e.y - e.x * t.y;
												})(t, e) > 0 && (i *= -1),
												(180 * i) / Math.PI
											);
										})(a, e)),
										this.rotate.dispatch(t, this.element)),
										(e.x = a.x),
										(e.y = a.y),
										null !== this.x2 && null !== this.sx2
											? ((t.deltaX = (n - this.x2 + o - this.sx2) / 2),
											  (t.deltaY = (s - this.y2 + r - this.sy2) / 2))
											: ((t.deltaX = 0), (t.deltaY = 0)),
										this.twoFingerPressMove.dispatch(t, this.element),
										(this.sx2 = o),
										(this.sy2 = r);
								} else {
									if (null !== this.x2) {
										(t.deltaX = n - this.x2), (t.deltaY = s - this.y2);
										var l = Math.abs(this.x1 - this.x2),
											u = Math.abs(this.y1 - this.y2);
										(l > 10 || u > 10) && (this._preventTap = !0);
									} else (t.deltaX = 0), (t.deltaY = 0);
									this.pressMove.dispatch(t, this.element);
								}
								this.touchMove.dispatch(t, this.element),
									this._cancelLongTap(),
									(this.x2 = n),
									(this.y2 = s),
									i > 1 && t.preventDefault();
							}
						},
					},
					{
						key: "end",
						value: function (t) {
							if (t.changedTouches) {
								this._cancelLongTap();
								var e = this;
								t.touches.length < 2 &&
									(this.multipointEnd.dispatch(t, this.element),
									(this.sx2 = this.sy2 = null)),
									(this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
									(this.y2 && Math.abs(this.y1 - this.y2) > 30)
										? ((t.direction = this._swipeDirection(
												this.x1,
												this.x2,
												this.y1,
												this.y2
										  )),
										  (this.swipeTimeout = setTimeout(function () {
												e.swipe.dispatch(t, e.element);
										  }, 0)))
										: ((this.tapTimeout = setTimeout(function () {
												e._preventTap || e.tap.dispatch(t, e.element),
													e.isDoubleTap &&
														(e.doubleTap.dispatch(t, e.element),
														(e.isDoubleTap = !1));
										  }, 0)),
										  e.isDoubleTap ||
												(e.singleTapTimeout = setTimeout(function () {
													e.singleTap.dispatch(t, e.element);
												}, 250))),
									this.touchEnd.dispatch(t, this.element),
									(this.preV.x = 0),
									(this.preV.y = 0),
									(this.zoom = 1),
									(this.pinchStartLen = null),
									(this.x1 = this.x2 = this.y1 = this.y2 = null);
							}
						},
					},
					{
						key: "cancelAll",
						value: function () {
							(this._preventTap = !0),
								clearTimeout(this.singleTapTimeout),
								clearTimeout(this.tapTimeout),
								clearTimeout(this.longTapTimeout),
								clearTimeout(this.swipeTimeout);
						},
					},
					{
						key: "cancel",
						value: function (t) {
							this.cancelAll(), this.touchCancel.dispatch(t, this.element);
						},
					},
					{
						key: "_cancelLongTap",
						value: function () {
							clearTimeout(this.longTapTimeout);
						},
					},
					{
						key: "_cancelSingleTap",
						value: function () {
							clearTimeout(this.singleTapTimeout);
						},
					},
					{
						key: "_swipeDirection",
						value: function (t, e, i, n) {
							return Math.abs(t - e) >= Math.abs(i - n)
								? t - e > 0
									? "Left"
									: "Right"
								: i - n > 0
								? "Up"
								: "Down";
						},
					},
					{
						key: "on",
						value: function (t, e) {
							this[t] && this[t].add(e);
						},
					},
					{
						key: "off",
						value: function (t, e) {
							this[t] && this[t].del(e);
						},
					},
					{
						key: "destroy",
						value: function () {
							return (
								this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
								this.tapTimeout && clearTimeout(this.tapTimeout),
								this.longTapTimeout && clearTimeout(this.longTapTimeout),
								this.swipeTimeout && clearTimeout(this.swipeTimeout),
								this.element.removeEventListener("touchstart", this.start),
								this.element.removeEventListener("touchmove", this.move),
								this.element.removeEventListener("touchend", this.end),
								this.element.removeEventListener("touchcancel", this.cancel),
								this.rotate.del(),
								this.touchStart.del(),
								this.multipointStart.del(),
								this.multipointEnd.del(),
								this.pinch.del(),
								this.swipe.del(),
								this.tap.del(),
								this.doubleTap.del(),
								this.longTap.del(),
								this.singleTap.del(),
								this.pressMove.del(),
								this.twoFingerPressMove.del(),
								this.touchMove.del(),
								this.touchEnd.del(),
								this.touchCancel.del(),
								(this.preV =
									this.pinchStartLen =
									this.zoom =
									this.isDoubleTap =
									this.delta =
									this.last =
									this.now =
									this.tapTimeout =
									this.singleTapTimeout =
									this.longTapTimeout =
									this.swipeTimeout =
									this.x1 =
									this.x2 =
									this.y1 =
									this.y2 =
									this.preTapPosition =
									this.rotate =
									this.touchStart =
									this.multipointStart =
									this.multipointEnd =
									this.pinch =
									this.swipe =
									this.tap =
									this.doubleTap =
									this.longTap =
									this.singleTap =
									this.pressMove =
									this.touchMove =
									this.touchEnd =
									this.touchCancel =
									this.twoFingerPressMove =
										null),
								window.removeEventListener("scroll", this._cancelAllHandler),
								null
							);
						},
					},
				]),
				t
			);
		})();

		function I(t) {
			var e = (function () {
					var t,
						e = document.createElement("fakeelement"),
						i = {
							transition: "transitionend",
							OTransition: "oTransitionEnd",
							MozTransition: "transitionend",
							WebkitTransition: "webkitTransitionEnd",
						};
					for (t in i) if (void 0 !== e.style[t]) return i[t];
				})(),
				i = d(t, "gslide-media") ? t : t.querySelector(".gslide-media"),
				n = t.querySelector(".gslide-description");
			u(i, "greset"),
				f(i, "translate3d(0, 0, 0)"),
				l(e, {
					onElement: i,
					once: !0,
					withCallback: function (t, e) {
						c(i, "greset");
					},
				}),
				(i.style.opacity = ""),
				n && (n.style.opacity = "");
		}
		var B = (function () {
				function t(i, n) {
					var s = this,
						o =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: null;
					if (
						(e(this, t),
						(this.img = i),
						(this.slide = n),
						(this.onclose = o),
						this.img.setZoomEvents)
					)
						return !1;
					(this.active = !1),
						(this.zoomedIn = !1),
						(this.dragging = !1),
						(this.currentX = null),
						(this.currentY = null),
						(this.initialX = null),
						(this.initialY = null),
						(this.xOffset = 0),
						(this.yOffset = 0),
						this.img.addEventListener(
							"mousedown",
							function (t) {
								return s.dragStart(t);
							},
							!1
						),
						this.img.addEventListener(
							"mouseup",
							function (t) {
								return s.dragEnd(t);
							},
							!1
						),
						this.img.addEventListener(
							"mousemove",
							function (t) {
								return s.drag(t);
							},
							!1
						),
						this.img.addEventListener(
							"click",
							function (t) {
								return s.slide.classList.contains("dragging-nav")
									? (s.zoomOut(), !1)
									: s.zoomedIn
									? void (s.zoomedIn && !s.dragging && s.zoomOut())
									: s.zoomIn();
							},
							!1
						),
						(this.img.setZoomEvents = !0);
				}
				return (
					n(t, [
						{
							key: "zoomIn",
							value: function () {
								var t = this.widowWidth();
								if (!(this.zoomedIn || t <= 768)) {
									var e = this.img;
									if (
										(e.setAttribute("data-style", e.getAttribute("style")),
										(e.style.maxWidth = e.naturalWidth + "px"),
										(e.style.maxHeight = e.naturalHeight + "px"),
										e.naturalWidth > t)
									) {
										var i = t / 2 - e.naturalWidth / 2;
										this.setTranslate(this.img.parentNode, i, 0);
									}
									this.slide.classList.add("zoomed"), (this.zoomedIn = !0);
								}
							},
						},
						{
							key: "zoomOut",
							value: function () {
								this.img.parentNode.setAttribute("style", ""),
									this.img.setAttribute(
										"style",
										this.img.getAttribute("data-style")
									),
									this.slide.classList.remove("zoomed"),
									(this.zoomedIn = !1),
									(this.currentX = null),
									(this.currentY = null),
									(this.initialX = null),
									(this.initialY = null),
									(this.xOffset = 0),
									(this.yOffset = 0),
									this.onclose &&
										"function" == typeof this.onclose &&
										this.onclose();
							},
						},
						{
							key: "dragStart",
							value: function (t) {
								t.preventDefault(),
									this.zoomedIn
										? ("touchstart" === t.type
												? ((this.initialX =
														t.touches[0].clientX - this.xOffset),
												  (this.initialY = t.touches[0].clientY - this.yOffset))
												: ((this.initialX = t.clientX - this.xOffset),
												  (this.initialY = t.clientY - this.yOffset)),
										  t.target === this.img &&
												((this.active = !0),
												this.img.classList.add("dragging")))
										: (this.active = !1);
							},
						},
						{
							key: "dragEnd",
							value: function (t) {
								var e = this;
								t.preventDefault(),
									(this.initialX = this.currentX),
									(this.initialY = this.currentY),
									(this.active = !1),
									setTimeout(function () {
										(e.dragging = !1),
											(e.img.isDragging = !1),
											e.img.classList.remove("dragging");
									}, 100);
							},
						},
						{
							key: "drag",
							value: function (t) {
								this.active &&
									(t.preventDefault(),
									"touchmove" === t.type
										? ((this.currentX = t.touches[0].clientX - this.initialX),
										  (this.currentY = t.touches[0].clientY - this.initialY))
										: ((this.currentX = t.clientX - this.initialX),
										  (this.currentY = t.clientY - this.initialY)),
									(this.xOffset = this.currentX),
									(this.yOffset = this.currentY),
									(this.img.isDragging = !0),
									(this.dragging = !0),
									this.setTranslate(this.img, this.currentX, this.currentY));
							},
						},
						{
							key: "onMove",
							value: function (t) {
								if (this.zoomedIn) {
									var e = t.clientX - this.img.naturalWidth / 2,
										i = t.clientY - this.img.naturalHeight / 2;
									this.setTranslate(this.img, e, i);
								}
							},
						},
						{
							key: "setTranslate",
							value: function (t, e, i) {
								t.style.transform = "translate3d(" + e + "px, " + i + "px, 0)";
							},
						},
						{
							key: "widowWidth",
							value: function () {
								return (
									window.innerWidth ||
									document.documentElement.clientWidth ||
									document.body.clientWidth
								);
							},
						},
					]),
					t
				);
			})(),
			j = (function () {
				function t() {
					var i = this,
						n =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
					e(this, t);
					var s = n.dragEl,
						o = n.toleranceX,
						r = void 0 === o ? 40 : o,
						a = n.toleranceY,
						l = void 0 === a ? 65 : a,
						u = n.slide,
						c = void 0 === u ? null : u,
						d = n.instance,
						h = void 0 === d ? null : d;
					(this.el = s),
						(this.active = !1),
						(this.dragging = !1),
						(this.currentX = null),
						(this.currentY = null),
						(this.initialX = null),
						(this.initialY = null),
						(this.xOffset = 0),
						(this.yOffset = 0),
						(this.direction = null),
						(this.lastDirection = null),
						(this.toleranceX = r),
						(this.toleranceY = l),
						(this.toleranceReached = !1),
						(this.dragContainer = this.el),
						(this.slide = c),
						(this.instance = h),
						this.el.addEventListener(
							"mousedown",
							function (t) {
								return i.dragStart(t);
							},
							!1
						),
						this.el.addEventListener(
							"mouseup",
							function (t) {
								return i.dragEnd(t);
							},
							!1
						),
						this.el.addEventListener(
							"mousemove",
							function (t) {
								return i.drag(t);
							},
							!1
						);
				}
				return (
					n(t, [
						{
							key: "dragStart",
							value: function (t) {
								if (this.slide.classList.contains("zoomed")) this.active = !1;
								else {
									"touchstart" === t.type
										? ((this.initialX = t.touches[0].clientX - this.xOffset),
										  (this.initialY = t.touches[0].clientY - this.yOffset))
										: ((this.initialX = t.clientX - this.xOffset),
										  (this.initialY = t.clientY - this.yOffset));
									var e = t.target.nodeName.toLowerCase();
									t.target.classList.contains("nodrag") ||
									h(t.target, ".nodrag") ||
									-1 !==
										["input", "select", "textarea", "button", "a"].indexOf(e)
										? (this.active = !1)
										: (t.preventDefault(),
										  (t.target === this.el ||
												("img" !== e && h(t.target, ".gslide-inline"))) &&
												((this.active = !0),
												this.el.classList.add("dragging"),
												(this.dragContainer = h(
													t.target,
													".ginner-container"
												))));
								}
							},
						},
						{
							key: "dragEnd",
							value: function (t) {
								var e = this;
								t && t.preventDefault(),
									(this.initialX = 0),
									(this.initialY = 0),
									(this.currentX = null),
									(this.currentY = null),
									(this.initialX = null),
									(this.initialY = null),
									(this.xOffset = 0),
									(this.yOffset = 0),
									(this.active = !1),
									this.doSlideChange &&
										((this.instance.preventOutsideClick = !0),
										"right" == this.doSlideChange && this.instance.prevSlide(),
										"left" == this.doSlideChange && this.instance.nextSlide()),
									this.doSlideClose && this.instance.close(),
									this.toleranceReached ||
										this.setTranslate(this.dragContainer, 0, 0, !0),
									setTimeout(function () {
										(e.instance.preventOutsideClick = !1),
											(e.toleranceReached = !1),
											(e.lastDirection = null),
											(e.dragging = !1),
											(e.el.isDragging = !1),
											e.el.classList.remove("dragging"),
											e.slide.classList.remove("dragging-nav"),
											(e.dragContainer.style.transform = ""),
											(e.dragContainer.style.transition = "");
									}, 100);
							},
						},
						{
							key: "drag",
							value: function (t) {
								if (this.active) {
									t.preventDefault(),
										this.slide.classList.add("dragging-nav"),
										"touchmove" === t.type
											? ((this.currentX = t.touches[0].clientX - this.initialX),
											  (this.currentY = t.touches[0].clientY - this.initialY))
											: ((this.currentX = t.clientX - this.initialX),
											  (this.currentY = t.clientY - this.initialY)),
										(this.xOffset = this.currentX),
										(this.yOffset = this.currentY),
										(this.el.isDragging = !0),
										(this.dragging = !0),
										(this.doSlideChange = !1),
										(this.doSlideClose = !1);
									var e = Math.abs(this.currentX),
										i = Math.abs(this.currentY);
									if (
										e > 0 &&
										e >= Math.abs(this.currentY) &&
										(!this.lastDirection || "x" == this.lastDirection)
									) {
										(this.yOffset = 0),
											(this.lastDirection = "x"),
											this.setTranslate(this.dragContainer, this.currentX, 0);
										var n = this.shouldChange();
										if (
											(!this.instance.settings.dragAutoSnap &&
												n &&
												(this.doSlideChange = n),
											this.instance.settings.dragAutoSnap && n)
										)
											return (
												(this.instance.preventOutsideClick = !0),
												(this.toleranceReached = !0),
												(this.active = !1),
												(this.instance.preventOutsideClick = !0),
												this.dragEnd(null),
												"right" == n && this.instance.prevSlide(),
												void ("left" == n && this.instance.nextSlide())
											);
									}
									if (
										this.toleranceY > 0 &&
										i > 0 &&
										i >= e &&
										(!this.lastDirection || "y" == this.lastDirection)
									) {
										(this.xOffset = 0),
											(this.lastDirection = "y"),
											this.setTranslate(this.dragContainer, 0, this.currentY);
										var s = this.shouldClose();
										return (
											!this.instance.settings.dragAutoSnap &&
												s &&
												(this.doSlideClose = !0),
											void (
												this.instance.settings.dragAutoSnap &&
												s &&
												this.instance.close()
											)
										);
									}
								}
							},
						},
						{
							key: "shouldChange",
							value: function () {
								var t = !1;
								if (Math.abs(this.currentX) >= this.toleranceX) {
									var e = this.currentX > 0 ? "right" : "left";
									(("left" == e &&
										this.slide !== this.slide.parentNode.lastChild) ||
										("right" == e &&
											this.slide !== this.slide.parentNode.firstChild)) &&
										(t = e);
								}
								return t;
							},
						},
						{
							key: "shouldClose",
							value: function () {
								var t = !1;
								return (
									Math.abs(this.currentY) >= this.toleranceY && (t = !0), t
								);
							},
						},
						{
							key: "setTranslate",
							value: function (t, e, i) {
								var n =
									arguments.length > 3 &&
									void 0 !== arguments[3] &&
									arguments[3];
								(t.style.transition = n ? "all .2s ease" : ""),
									(t.style.transform = "translate3d("
										.concat(e, "px, ")
										.concat(i, "px, 0)"));
							},
						},
					]),
					t
				);
			})();

		function z(t) {
			var e = h(t.target, ".gslide-media");
			"enterfullscreen" == t.type && u(e, "fullscreen"),
				"exitfullscreen" == t.type && c(e, "fullscreen");
		}
		var q = (function () {
				function t() {
					var i =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					e(this, t),
						(this.defaults = {
							href: "",
							title: "",
							type: "",
							description: "",
							descPosition: "bottom",
							effect: "",
							width: "",
							height: "",
							content: !1,
							zoomable: !0,
							draggable: !0,
						}),
						S(i) && (this.defaults = o(this.defaults, i));
				}
				return (
					n(t, [
						{
							key: "sourceType",
							value: function (t) {
								var e = t;
								return null !==
									(t = t.toLowerCase()).match(
										/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/
									)
									? "image"
									: t.match(
											/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
									  ) ||
									  t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
									  t.match(
											/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
									  )
									? "video"
									: t.match(/vimeo\.com\/([0-9]*)/)
									? "video"
									: null !== t.match(/\.(mp4|ogg|webm|mov)$/)
									? "video"
									: null !== t.match(/\.(mp3|wav|wma|aac|ogg)$/)
									? "audio"
									: t.indexOf("#") > -1 && "" !== e.split("#").pop().trim()
									? "inline"
									: t.indexOf("goajax=true") > -1
									? "ajax"
									: "external";
							},
						},
						{
							key: "parseConfig",
							value: function (t, e) {
								var i = this,
									n = o(
										{
											descPosition: e.descPosition,
										},
										this.defaults
									);
								if (S(t) && !C(t)) {
									A(t, "type") ||
										(A(t, "content") && t.content
											? (t.type = "inline")
											: A(t, "href") && (t.type = this.sourceType(t.href)));
									var s = o(n, t);
									return this.setSize(s, e), s;
								}
								var a = "",
									l = t.getAttribute("data-glightbox"),
									u = t.nodeName.toLowerCase();
								if (
									("a" === u && (a = t.href),
									"img" === u && (a = t.src),
									(n.href = a),
									r(n, function (s, o) {
										A(e, o) && "width" !== o && (n[o] = e[o]);
										var r = t.dataset[o];
										E(r) || (n[o] = i.sanitizeValue(r));
									}),
									n.content && (n.type = "inline"),
									!n.type && a && (n.type = this.sourceType(a)),
									E(l))
								) {
									if (!n.title && "a" == u) {
										var c = t.title;
										E(c) || "" === c || (n.title = c);
									}
									if (!n.title && "img" == u) {
										var d = t.alt;
										E(d) || "" === d || (n.title = d);
									}
								} else {
									var h = [];
									r(n, function (t, e) {
										h.push(";\\s?" + e);
									}),
										(h = h.join("\\s?:|")),
										"" !== l.trim() &&
											r(n, function (t, e) {
												var s = l,
													o = new RegExp(
														"s?" + e + "s?:s?(.*?)(" + h + "s?:|$)"
													),
													r = s.match(o);
												if (r && r.length && r[1]) {
													var a = r[1].trim().replace(/;\s*$/, "");
													n[e] = i.sanitizeValue(a);
												}
											});
								}
								if (
									n.description &&
									"." == n.description.substring(0, 1) &&
									document.querySelector(n.description)
								)
									n.description = document.querySelector(
										n.description
									).innerHTML;
								else {
									var p = t.querySelector(".glightbox-desc");
									p && (n.description = p.innerHTML);
								}
								return this.setSize(n, e), (this.slideConfig = n), n;
							},
						},
						{
							key: "setSize",
							value: function (t, e) {
								var i =
										"video" == t.type
											? this.checkSize(e.videosWidth)
											: this.checkSize(e.width),
									n = this.checkSize(e.height);
								return (
									(t.width =
										A(t, "width") && "" !== t.width
											? this.checkSize(t.width)
											: i),
									(t.height =
										A(t, "height") && "" !== t.height
											? this.checkSize(t.height)
											: n),
									t
								);
							},
						},
						{
							key: "checkSize",
							value: function (t) {
								return L(t) ? "".concat(t, "px") : t;
							},
						},
						{
							key: "sanitizeValue",
							value: function (t) {
								return "true" !== t && "false" !== t ? t : "true" === t;
							},
						},
					]),
					t
				);
			})(),
			H = (function () {
				function t(i, n, s) {
					e(this, t), (this.element = i), (this.instance = n), (this.index = s);
				}
				return (
					n(t, [
						{
							key: "setContent",
							value: function () {
								var t = this,
									e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: null,
									i =
										arguments.length > 1 &&
										void 0 !== arguments[1] &&
										arguments[1];
								if (d(e, "loaded")) return !1;
								var n = this.instance.settings,
									s = this.slideConfig,
									o = D();
								w(n.beforeSlideLoad) &&
									n.beforeSlideLoad({
										index: this.index,
										slide: e,
										player: !1,
									});
								var r = s.type,
									a = s.descPosition,
									c = e.querySelector(".gslide-media"),
									h = e.querySelector(".gslide-title"),
									p = e.querySelector(".gslide-desc"),
									f = e.querySelector(".gdesc-inner"),
									g = i,
									m = "gSlideTitle_" + this.index,
									y = "gSlideDesc_" + this.index;
								if (
									(w(n.afterSlideLoad) &&
										(g = function () {
											w(i) && i(),
												n.afterSlideLoad({
													index: t.index,
													slide: e,
													player: t.instance.getSlidePlayerInstance(t.index),
												});
										}),
									"" == s.title && "" == s.description
										? f && f.parentNode.parentNode.removeChild(f.parentNode)
										: (h && "" !== s.title
												? ((h.id = m), (h.innerHTML = s.title))
												: h.parentNode.removeChild(h),
										  p && "" !== s.description
												? ((p.id = y),
												  o && n.moreLength,
												  (p.innerHTML = s.description))
												: p.parentNode.removeChild(p),
										  u(c.parentNode, "desc-".concat(a)),
										  u(f.parentNode, "description-".concat(a))),
									u(c, "gslide-".concat(r)),
									u(e, "loaded"),
									"video" !== r)
								) {
									if ("external" !== r)
										return "inline" === r
											? (function (t, e, i, n) {
													var s,
														o = this,
														r = t.querySelector(".gslide-media"),
														a =
															!(!A(e, "href") || !e.href) &&
															e.href.split("#").pop().trim(),
														c = !(!A(e, "content") || !e.content) && e.content;
													if (
														c &&
														(x(c) &&
															(s = v(
																'<div class="ginlined-content">'.concat(
																	c,
																	"</div>"
																)
															)),
														C(c))
													) {
														"none" == c.style.display &&
															(c.style.display = "block");
														var d = document.createElement("div");
														(d.className = "ginlined-content"),
															d.appendChild(c),
															(s = d);
													}
													if (a) {
														var h = document.getElementById(a);
														if (!h) return !1;
														var p = h.cloneNode(!0);
														(p.style.height = e.height),
															(p.style.maxWidth = e.width),
															u(p, "ginlined-content"),
															(s = p);
													}
													if (!s)
														return (
															console.error(
																"Unable to append inline slide content",
																e
															),
															!1
														);
													(r.style.height = e.height),
														(r.style.width = e.width),
														r.appendChild(s),
														(this.events["inlineclose" + a] = l("click", {
															onElement: r.querySelectorAll(".gtrigger-close"),
															withCallback: function (t) {
																t.preventDefault(), o.close();
															},
														})),
														w(n) && n();
											  }.apply(this.instance, [e, s, this.index, g]),
											  void (
													n.draggable &&
													new j({
														dragEl: e.querySelector(".gslide-inline"),
														toleranceX: n.dragToleranceX,
														toleranceY: n.dragToleranceY,
														slide: e,
														instance: this.instance,
													})
											  ))
											: void ("image" !== r
													? w(g) && g()
													: (function (t, e, i, n) {
															var s = t.querySelector(".gslide-media"),
																o = new Image(),
																r = "gSlideTitle_" + i,
																a = "gSlideDesc_" + i;
															o.addEventListener(
																"load",
																function () {
																	w(n) && n();
																},
																!1
															),
																(o.src = e.href),
																(o.alt = ""),
																"" !== e.title &&
																	o.setAttribute("aria-labelledby", r),
																"" !== e.description &&
																	o.setAttribute("aria-describedby", a),
																s.insertBefore(o, s.firstChild);
													  })(e, s, this.index, function () {
															var i = e.querySelector("img");
															n.draggable &&
																new j({
																	dragEl: i,
																	toleranceX: n.dragToleranceX,
																	toleranceY: n.dragToleranceY,
																	slide: e,
																	instance: t.instance,
																}),
																s.zoomable &&
																	i.naturalWidth > i.offsetWidth &&
																	(u(i, "zoomable"),
																	new B(i, e, function () {
																		t.instance.resize();
																	})),
																w(g) && g();
													  }));
									(function (t, e, i, n) {
										var s = t.querySelector(".gslide-media"),
											o = (function (t) {
												var e = t.url,
													i = t.allow,
													n = t.callback,
													s = t.appendTo,
													o = document.createElement("iframe");
												return (
													(o.className = "vimeo-video gvideo"),
													(o.src = e),
													(o.style.width = "100%"),
													(o.style.height = "100%"),
													i && o.setAttribute("allow", i),
													(o.onload = function () {
														u(o, "node-ready"), w(n) && n();
													}),
													s && s.appendChild(o),
													o
												);
											})({
												url: e.href,
												callback: n,
											});
										(s.parentNode.style.maxWidth = e.width),
											(s.parentNode.style.height = e.height),
											s.appendChild(o);
									}.apply(this, [e, s, this.index, g]));
								} else
									(function (t, e, i, n) {
										var s = this,
											o = t.querySelector(".ginner-container"),
											r = "gvideo" + i,
											a = t.querySelector(".gslide-media"),
											l = this.getAllPlayers();
										u(o, "gvideo-container"),
											a.insertBefore(
												v('<div class="gvideo-wrapper"></div>'),
												a.firstChild
											);
										var c = t.querySelector(".gvideo-wrapper");
										b(this.settings.plyr.css, "Plyr");
										var d = e.href,
											h = location.protocol.replace(":", ""),
											p = "",
											f = "",
											g = !1;
										"file" == h && (h = "http"),
											(a.style.maxWidth = e.width),
											b(this.settings.plyr.js, "Plyr", function () {
												if (d.match(/vimeo\.com\/([0-9]*)/)) {
													var o = /vimeo.*\/(\d+)/i.exec(d);
													(p = "vimeo"), (f = o[1]);
												}
												if (
													d.match(
														/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
													) ||
													d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
													d.match(
														/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
													)
												) {
													var a = (function (t) {
														return void 0 !==
															(t = t
																.replace(/(>|<)/gi, "")
																.split(
																	/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
																))[2]
															? t[2].split(/[^0-9a-z_\-]/i)[0]
															: t;
													})(d);
													(p = "youtube"), (f = a);
												}
												if (null !== d.match(/\.(mp4|ogg|webm|mov)$/)) {
													p = "local";
													var h = '<video id="' + r + '" ';
													(h += 'style="background:#000; max-width: '.concat(
														e.width,
														';" '
													)),
														(h += 'preload="metadata" '),
														(h += 'x-webkit-airplay="allow" '),
														(h += 'webkit-playsinline="" '),
														(h += "controls "),
														(h += 'class="gvideo-local">');
													var m = d.toLowerCase().split(".").pop(),
														y = {
															mp4: "",
															ogg: "",
															webm: "",
														};
													for (var b in ((y[(m = "mov" == m ? "mp4" : m)] = d),
													y))
														if (y.hasOwnProperty(b)) {
															var D = y[b];
															e.hasOwnProperty(b) && (D = e[b]),
																"" !== D &&
																	(h += '<source src="'
																		.concat(D, '" type="video/')
																		.concat(b, '">'));
														}
													g = v((h += "</video>"));
												}
												var x =
													g ||
													v(
														'<div id="'
															.concat(r, '" data-plyr-provider="')
															.concat(p, '" data-plyr-embed-id="')
															.concat(f, '"></div>')
													);
												u(c, "".concat(p, "-video gvideo")),
													c.appendChild(x),
													c.setAttribute("data-id", r),
													c.setAttribute("data-index", i);
												var C = A(s.settings.plyr, "config")
														? s.settings.plyr.config
														: {},
													T = new Plyr("#" + r, C);
												T.on("ready", function (t) {
													var e = t.detail.plyr;
													(l[r] = e), w(n) && n();
												}),
													_(
														function () {
															return (
																t.querySelector("iframe") &&
																"true" ==
																	t.querySelector("iframe").dataset.ready
															);
														},
														function () {
															s.resize(t);
														}
													),
													T.on("enterfullscreen", z),
													T.on("exitfullscreen", z);
											});
									}.apply(this.instance, [e, s, this.index, g]));
							},
						},
						{
							key: "slideShortDesc",
							value: function (t) {
								var e =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: 50,
									i =
										arguments.length > 2 &&
										void 0 !== arguments[2] &&
										arguments[2],
									n = document.createElement("div");
								n.innerHTML = t;
								var s = i;
								if ((t = n.innerText.trim()).length <= e) return t;
								var o = t.substr(0, e - 1);
								return s
									? ((n = null),
									  o + '... <a href="#" class="desc-more">' + i + "</a>")
									: o;
							},
						},
						{
							key: "descriptionEvents",
							value: function (t, e) {
								var i = this,
									n = t.querySelector(".desc-more");
								if (!n) return !1;
								l("click", {
									onElement: n,
									withCallback: function (t, n) {
										t.preventDefault();
										var s = document.body,
											o = h(n, ".gslide-desc");
										if (!o) return !1;
										(o.innerHTML = e.description), u(s, "gdesc-open");
										var r = l("click", {
											onElement: [s, h(o, ".gslide-description")],
											withCallback: function (t, n) {
												"a" !== t.target.nodeName.toLowerCase() &&
													(c(s, "gdesc-open"),
													u(s, "gdesc-closed"),
													(o.innerHTML = e.smallDescription),
													i.descriptionEvents(o, e),
													setTimeout(function () {
														c(s, "gdesc-closed");
													}, 400),
													r.destroy());
											},
										});
									},
								});
							},
						},
						{
							key: "create",
							value: function () {
								return v(this.instance.settings.slideHTML);
							},
						},
						{
							key: "getConfig",
							value: function () {
								var t = new q(this.instance.settings.slideExtraAttributes);
								return (
									(this.slideConfig = t.parseConfig(
										this.element,
										this.instance.settings
									)),
									this.slideConfig
								);
							},
						},
					]),
					t
				);
			})(),
			R = D(),
			W =
				null !== D() ||
				void 0 !== document.createTouch ||
				"ontouchstart" in window ||
				"onmsgesturechange" in window ||
				navigator.msMaxTouchPoints,
			X = document.getElementsByTagName("html")[0],
			Y = {
				selector: ".glightbox",
				elements: null,
				skin: "clean",
				theme: "clean",
				closeButton: !0,
				startAt: null,
				autoplayVideos: !0,
				autofocusVideos: !0,
				descPosition: "bottom",
				width: "900px",
				height: "506px",
				videosWidth: "960px",
				beforeSlideChange: null,
				afterSlideChange: null,
				beforeSlideLoad: null,
				afterSlideLoad: null,
				slideInserted: null,
				slideRemoved: null,
				slideExtraAttributes: null,
				onOpen: null,
				onClose: null,
				loop: !1,
				zoomable: !0,
				draggable: !0,
				dragAutoSnap: !1,
				dragToleranceX: 40,
				dragToleranceY: 65,
				preload: !0,
				oneSlidePerOpen: !1,
				touchNavigation: !0,
				touchFollowAxis: !0,
				keyboardNavigation: !0,
				closeOnOutsideClick: !0,
				plugins: !1,
				plyr: {
					css: "https://cdn.plyr.io/3.6.3/plyr.css",
					js: "https://cdn.plyr.io/3.6.3/plyr.js",
					config: {
						ratio: "16:9",
						fullscreen: {
							enabled: !0,
							iosNative: !0,
						},
						youtube: {
							noCookie: !0,
							rel: 0,
							showinfo: 0,
							iv_load_policy: 3,
						},
						vimeo: {
							byline: !1,
							portrait: !1,
							title: !1,
							transparent: !1,
						},
					},
				},
				openEffect: "zoom",
				closeEffect: "zoom",
				slideEffect: "slide",
				moreText: "See more",
				moreLength: 60,
				cssEfects: {
					fade: { in: "fadeIn", out: "fadeOut" },
					zoom: { in: "zoomIn", out: "zoomOut" },
					slide: { in: "slideInRight", out: "slideOutLeft" },
					slideBack: { in: "slideInLeft", out: "slideOutRight" },
					none: { in: "none", out: "none" },
				},
				svg: {
					close:
						'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
					next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
					prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
				},
				slideHTML:
					'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
				lightboxHTML:
					'<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
			},
			V = (function () {
				function t() {
					var i =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					e(this, t),
						(this.settings = o(Y, i)),
						(this.effectsClasses = this.getAnimationClasses()),
						(this.videoPlayers = {}),
						(this.apiEvents = []),
						(this.fullElementsList = !1);
				}
				return (
					n(t, [
						{
							key: "init",
							value: function () {
								var t = this,
									e = this.getSelector();
								e &&
									(this.baseEvents = l("click", {
										onElement: e,
										withCallback: function (e, i) {
											e.preventDefault(), t.open(i);
										},
									})),
									(this.elements = this.getElements());
							},
						},
						{
							key: "open",
							value: function () {
								var t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: null,
									e =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: null;
								if (0 == this.elements.length) return !1;
								(this.activeSlide = null),
									(this.prevActiveSlideIndex = null),
									(this.prevActiveSlide = null);
								var i = L(e) ? e : this.settings.startAt;
								if (C(t)) {
									var n = t.getAttribute("data-gallery");
									n &&
										((this.fullElementsList = this.elements),
										(this.elements = this.getGalleryElements(
											this.elements,
											n
										))),
										E(i) && (i = this.getElementIndex(t)) < 0 && (i = 0);
								}
								L(i) || (i = 0),
									this.build(),
									p(
										this.overlay,
										"none" == this.settings.openEffect
											? "none"
											: this.settings.cssEfects.fade.in
									);
								var s = document.body,
									o = window.innerWidth - document.documentElement.clientWidth;
								if (o > 0) {
									var r = document.createElement("style");
									(r.type = "text/css"),
										(r.className = "gcss-styles"),
										(r.innerText = ".gscrollbar-fixer {margin-right: ".concat(
											o,
											"px}"
										)),
										document.head.appendChild(r),
										u(s, "gscrollbar-fixer");
								}
								u(s, "glightbox-open"),
									u(X, "glightbox-open"),
									R &&
										(u(document.body, "glightbox-mobile"),
										(this.settings.slideEffect = "slide")),
									this.showSlide(i, !0),
									1 == this.elements.length
										? (u(this.prevButton, "glightbox-button-hidden"),
										  u(this.nextButton, "glightbox-button-hidden"))
										: (c(this.prevButton, "glightbox-button-hidden"),
										  c(this.nextButton, "glightbox-button-hidden")),
									(this.lightboxOpen = !0),
									this.trigger("open"),
									w(this.settings.onOpen) && this.settings.onOpen(),
									W &&
										this.settings.touchNavigation &&
										(function (t) {
											if (t.events.hasOwnProperty("touch")) return !1;
											var e,
												i,
												n,
												s = y(),
												o = s.width,
												r = s.height,
												a = !1,
												l = null,
												p = null,
												g = null,
												m = !1,
												v = 1,
												_ = 1,
												b = !1,
												D = !1,
												w = null,
												x = null,
												C = null,
												T = null,
												k = 0,
												S = 0,
												E = !1,
												A = !1,
												F = {},
												L = {},
												O = 0,
												$ = 0,
												M = document.getElementById("glightbox-slider"),
												N = document.querySelector(".goverlay"),
												B = new P(M, {
													touchStart: function (e) {
														if (
															((a = !0),
															(d(
																e.targetTouches[0].target,
																"ginner-container"
															) ||
																h(e.targetTouches[0].target, ".gslide-desc") ||
																"a" ==
																	e.targetTouches[0].target.nodeName.toLowerCase()) &&
																(a = !1),
															h(e.targetTouches[0].target, ".gslide-inline") &&
																!d(
																	e.targetTouches[0].target.parentNode,
																	"gslide-inline"
																) &&
																(a = !1),
															a)
														) {
															if (
																((L = e.targetTouches[0]),
																(F.pageX = e.targetTouches[0].pageX),
																(F.pageY = e.targetTouches[0].pageY),
																(O = e.targetTouches[0].clientX),
																($ = e.targetTouches[0].clientY),
																(l = t.activeSlide),
																(p = l.querySelector(".gslide-media")),
																(n = l.querySelector(".gslide-inline")),
																(g = null),
																d(p, "gslide-image") &&
																	(g = p.querySelector("img")),
																c(N, "greset"),
																e.pageX > 20 &&
																	e.pageX < window.innerWidth - 20)
															)
																return;
															e.preventDefault();
														}
													},
													touchMove: function (s) {
														if (a && ((L = s.targetTouches[0]), !b && !D)) {
															if (n && n.offsetHeight > r) {
																var l = F.pageX - L.pageX;
																if (Math.abs(l) <= 13) return !1;
															}
															m = !0;
															var u,
																c = s.targetTouches[0].clientX,
																d = s.targetTouches[0].clientY,
																h = O - c,
																v = $ - d;
															if (
																(Math.abs(h) > Math.abs(v)
																	? ((E = !1), (A = !0))
																	: ((A = !1), (E = !0)),
																(e = L.pageX - F.pageX),
																(k = (100 * e) / o),
																(i = L.pageY - F.pageY),
																(S = (100 * i) / r),
																E &&
																	g &&
																	((u = 1 - Math.abs(i) / r),
																	(N.style.opacity = u),
																	t.settings.touchFollowAxis && (k = 0)),
																A &&
																	((u = 1 - Math.abs(e) / o),
																	(p.style.opacity = u),
																	t.settings.touchFollowAxis && (S = 0)),
																!g)
															)
																return f(
																	p,
																	"translate3d(".concat(k, "%, 0, 0)")
																);
															f(
																p,
																"translate3d("
																	.concat(k, "%, ")
																	.concat(S, "%, 0)")
															);
														}
													},
													touchEnd: function () {
														if (a) {
															if (((m = !1), D || b))
																return (C = w), void (T = x);
															var e = Math.abs(parseInt(S)),
																i = Math.abs(parseInt(k));
															if (!(e > 29 && g))
																return e < 29 && i < 25
																	? (u(N, "greset"),
																	  (N.style.opacity = 1),
																	  I(p))
																	: void 0;
															t.close();
														}
													},
													multipointEnd: function () {
														setTimeout(function () {
															b = !1;
														}, 50);
													},
													multipointStart: function () {
														(b = !0), (v = _ || 1);
													},
													pinch: function (t) {
														if (!g || m) return !1;
														(b = !0), (g.scaleX = g.scaleY = v * t.zoom);
														var e = v * t.zoom;
														if (((D = !0), e <= 1))
															return (
																(D = !1),
																(e = 1),
																(T = null),
																(C = null),
																(w = null),
																(x = null),
																void g.setAttribute("style", "")
															);
														e > 4.5 && (e = 4.5),
															(g.style.transform = "scale3d("
																.concat(e, ", ")
																.concat(e, ", 1)")),
															(_ = e);
													},
													pressMove: function (t) {
														if (D && !b) {
															var e = L.pageX - F.pageX,
																i = L.pageY - F.pageY;
															C && (e += C), T && (i += T), (w = e), (x = i);
															var n = "translate3d("
																.concat(e, "px, ")
																.concat(i, "px, 0)");
															_ &&
																(n += " scale3d("
																	.concat(_, ", ")
																	.concat(_, ", 1)")),
																f(g, n);
														}
													},
													swipe: function (e) {
														if (!D)
															if (b) b = !1;
															else {
																if ("Left" == e.direction) {
																	if (t.index == t.elements.length - 1)
																		return I(p);
																	t.nextSlide();
																}
																if ("Right" == e.direction) {
																	if (0 == t.index) return I(p);
																	t.prevSlide();
																}
															}
													},
												});
											t.events.touch = B;
										})(this),
									this.settings.keyboardNavigation &&
										(function (t) {
											if (t.events.hasOwnProperty("keyboard")) return !1;
											t.events.keyboard = l("keydown", {
												onElement: window,
												withCallback: function (e, i) {
													var n = (e = e || window.event).keyCode;
													if (9 == n) {
														var s = document.querySelector(".gbtn.focused");
														if (!s) {
															var o =
																!(
																	!document.activeElement ||
																	!document.activeElement.nodeName
																) &&
																document.activeElement.nodeName.toLocaleLowerCase();
															if (
																"input" == o ||
																"textarea" == o ||
																"button" == o
															)
																return;
														}
														e.preventDefault();
														var r = document.querySelectorAll(
															".gbtn[data-taborder]"
														);
														if (!r || r.length <= 0) return;
														if (!s) {
															var a = O();
															return void (a && (a.focus(), u(a, "focused")));
														}
														var l = O(s.getAttribute("data-taborder"));
														c(s, "focused"), l && (l.focus(), u(l, "focused"));
													}
													39 == n && t.nextSlide(),
														37 == n && t.prevSlide(),
														27 == n && t.close();
												},
											});
										})(this);
							},
						},
						{
							key: "openAt",
							value: function () {
								var t =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: 0;
								this.open(null, t);
							},
						},
						{
							key: "showSlide",
							value: function () {
								var t = this,
									e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 0,
									i =
										arguments.length > 1 &&
										void 0 !== arguments[1] &&
										arguments[1];
								g(this.loader), (this.index = parseInt(e));
								var n = this.slidesContainer.querySelector(".current");
								n && c(n, "current"), this.slideAnimateOut();
								var s = this.slidesContainer.querySelectorAll(".gslide")[e];
								if (d(s, "loaded")) this.slideAnimateIn(s, i), m(this.loader);
								else {
									g(this.loader);
									var o = this.elements[e],
										r = {
											index: this.index,
											slide: s,
											slideNode: s,
											slideConfig: o.slideConfig,
											slideIndex: this.index,
											trigger: o.node,
											player: null,
										};
									this.trigger("slide_before_load", r),
										o.instance.setContent(s, function () {
											m(t.loader),
												t.resize(),
												t.slideAnimateIn(s, i),
												t.trigger("slide_after_load", r);
										});
								}
								(this.slideDescription = s.querySelector(
									".gslide-description"
								)),
									(this.slideDescriptionContained =
										this.slideDescription &&
										d(this.slideDescription.parentNode, "gslide-media")),
									this.settings.preload &&
										(this.preloadSlide(e + 1), this.preloadSlide(e - 1)),
									this.updateNavigationClasses(),
									(this.activeSlide = s);
							},
						},
						{
							key: "preloadSlide",
							value: function (t) {
								var e = this;
								if (t < 0 || t > this.elements.length - 1) return !1;
								if (E(this.elements[t])) return !1;
								var i = this.slidesContainer.querySelectorAll(".gslide")[t];
								if (d(i, "loaded")) return !1;
								var n = this.elements[t],
									s = n.type,
									o = {
										index: t,
										slide: i,
										slideNode: i,
										slideConfig: n.slideConfig,
										slideIndex: t,
										trigger: n.node,
										player: null,
									};
								this.trigger("slide_before_load", o),
									"video" == s || "external" == s
										? setTimeout(function () {
												n.instance.setContent(i, function () {
													e.trigger("slide_after_load", o);
												});
										  }, 200)
										: n.instance.setContent(i, function () {
												e.trigger("slide_after_load", o);
										  });
							},
						},
						{
							key: "prevSlide",
							value: function () {
								this.goToSlide(this.index - 1);
							},
						},
						{
							key: "nextSlide",
							value: function () {
								this.goToSlide(this.index + 1);
							},
						},
						{
							key: "goToSlide",
							value: function () {
								var t =
									arguments.length > 0 &&
									void 0 !== arguments[0] &&
									arguments[0];
								if (
									((this.prevActiveSlide = this.activeSlide),
									(this.prevActiveSlideIndex = this.index),
									!this.loop() && (t < 0 || t > this.elements.length - 1))
								)
									return !1;
								t < 0
									? (t = this.elements.length - 1)
									: t >= this.elements.length && (t = 0),
									this.showSlide(t);
							},
						},
						{
							key: "insertSlide",
							value: function () {
								var t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: {},
									e =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: -1;
								e < 0 && (e = this.elements.length);
								var i = new H(t, this, e),
									n = i.getConfig(),
									s = o({}, n),
									r = i.create(),
									a = this.elements.length - 1;
								(s.index = e),
									(s.node = !1),
									(s.instance = i),
									(s.slideConfig = n),
									this.elements.splice(e, 0, s);
								var l = null,
									u = null;
								if (this.slidesContainer) {
									if (e > a) this.slidesContainer.appendChild(r);
									else {
										var c = this.slidesContainer.querySelectorAll(".gslide")[e];
										this.slidesContainer.insertBefore(r, c);
									}
									((this.settings.preload && 0 == this.index && 0 == e) ||
										this.index - 1 == e ||
										this.index + 1 == e) &&
										this.preloadSlide(e),
										0 == this.index && 0 == e && (this.index = 1),
										this.updateNavigationClasses(),
										(l = this.slidesContainer.querySelectorAll(".gslide")[e]),
										(u = this.getSlidePlayerInstance(e)),
										(s.slideNode = l);
								}
								this.trigger("slide_inserted", {
									index: e,
									slide: l,
									slideNode: l,
									slideConfig: n,
									slideIndex: e,
									trigger: null,
									player: u,
								}),
									w(this.settings.slideInserted) &&
										this.settings.slideInserted({
											index: e,
											slide: l,
											player: u,
										});
							},
						},
						{
							key: "removeSlide",
							value: function () {
								var t =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: -1;
								if (t < 0 || t > this.elements.length - 1) return !1;
								var e =
									this.slidesContainer &&
									this.slidesContainer.querySelectorAll(".gslide")[t];
								e &&
									(this.getActiveSlideIndex() == t &&
										(t == this.elements.length - 1
											? this.prevSlide()
											: this.nextSlide()),
									e.parentNode.removeChild(e)),
									this.elements.splice(t, 1),
									this.trigger("slide_removed", t),
									w(this.settings.slideRemoved) &&
										this.settings.slideRemoved(t);
							},
						},
						{
							key: "slideAnimateIn",
							value: function (t, e) {
								var i = this,
									n = t.querySelector(".gslide-media"),
									s = t.querySelector(".gslide-description"),
									o = {
										index: this.prevActiveSlideIndex,
										slide: this.prevActiveSlide,
										slideNode: this.prevActiveSlide,
										slideIndex: this.prevActiveSlide,
										slideConfig: E(this.prevActiveSlideIndex)
											? null
											: this.elements[this.prevActiveSlideIndex].slideConfig,
										trigger: E(this.prevActiveSlideIndex)
											? null
											: this.elements[this.prevActiveSlideIndex].node,
										player: this.getSlidePlayerInstance(
											this.prevActiveSlideIndex
										),
									},
									r = {
										index: this.index,
										slide: this.activeSlide,
										slideNode: this.activeSlide,
										slideConfig: this.elements[this.index].slideConfig,
										slideIndex: this.index,
										trigger: this.elements[this.index].node,
										player: this.getSlidePlayerInstance(this.index),
									};
								if (
									(n.offsetWidth > 0 && s && (m(s), (s.style.display = "")),
									c(t, this.effectsClasses),
									e)
								)
									p(
										t,
										this.settings.cssEfects[this.settings.openEffect].in,
										function () {
											i.settings.autoplayVideos && i.slidePlayerPlay(t),
												i.trigger("slide_changed", {
													prev: o,
													current: r,
												}),
												w(i.settings.afterSlideChange) &&
													i.settings.afterSlideChange.apply(i, [o, r]);
										}
									);
								else {
									var a = this.settings.slideEffect,
										l = "none" !== a ? this.settings.cssEfects[a].in : a;
									this.prevActiveSlideIndex > this.index &&
										"slide" == this.settings.slideEffect &&
										(l = this.settings.cssEfects.slideBack.in),
										p(t, l, function () {
											i.settings.autoplayVideos && i.slidePlayerPlay(t),
												i.trigger("slide_changed", {
													prev: o,
													current: r,
												}),
												w(i.settings.afterSlideChange) &&
													i.settings.afterSlideChange.apply(i, [o, r]);
										});
								}
								setTimeout(function () {
									i.resize(t);
								}, 100),
									u(t, "current");
							},
						},
						{
							key: "slideAnimateOut",
							value: function () {
								if (!this.prevActiveSlide) return !1;
								var t = this.prevActiveSlide;
								c(t, this.effectsClasses), u(t, "prev");
								var e = this.settings.slideEffect,
									i = "none" !== e ? this.settings.cssEfects[e].out : e;
								this.slidePlayerPause(t),
									this.trigger("slide_before_change", {
										prev: {
											index: this.prevActiveSlideIndex,
											slide: this.prevActiveSlide,
											slideNode: this.prevActiveSlide,
											slideIndex: this.prevActiveSlideIndex,
											slideConfig: E(this.prevActiveSlideIndex)
												? null
												: this.elements[this.prevActiveSlideIndex].slideConfig,
											trigger: E(this.prevActiveSlideIndex)
												? null
												: this.elements[this.prevActiveSlideIndex].node,
											player: this.getSlidePlayerInstance(
												this.prevActiveSlideIndex
											),
										},
										current: {
											index: this.index,
											slide: this.activeSlide,
											slideNode: this.activeSlide,
											slideIndex: this.index,
											slideConfig: this.elements[this.index].slideConfig,
											trigger: this.elements[this.index].node,
											player: this.getSlidePlayerInstance(this.index),
										},
									}),
									w(this.settings.beforeSlideChange) &&
										this.settings.beforeSlideChange.apply(this, [
											{
												index: this.prevActiveSlideIndex,
												slide: this.prevActiveSlide,
												player: this.getSlidePlayerInstance(
													this.prevActiveSlideIndex
												),
											},
											{
												index: this.index,
												slide: this.activeSlide,
												player: this.getSlidePlayerInstance(this.index),
											},
										]),
									this.prevActiveSlideIndex > this.index &&
										"slide" == this.settings.slideEffect &&
										(i = this.settings.cssEfects.slideBack.out),
									p(t, i, function () {
										var e = t.querySelector(".gslide-media"),
											i = t.querySelector(".gslide-description");
										(e.style.transform = ""),
											c(e, "greset"),
											(e.style.opacity = ""),
											i && (i.style.opacity = ""),
											c(t, "prev");
									});
							},
						},
						{
							key: "getAllPlayers",
							value: function () {
								return this.videoPlayers;
							},
						},
						{
							key: "getSlidePlayerInstance",
							value: function (t) {
								var e = "gvideo" + t,
									i = this.getAllPlayers();
								return !(!A(i, e) || !i[e]) && i[e];
							},
						},
						{
							key: "stopSlideVideo",
							value: function (t) {
								if (C(t)) {
									var e = t.querySelector(".gvideo-wrapper");
									e && (t = e.getAttribute("data-index"));
								}
								console.log(
									"stopSlideVideo is deprecated, use slidePlayerPause"
								);
								var i = this.getSlidePlayerInstance(t);
								i && i.playing && i.pause();
							},
						},
						{
							key: "slidePlayerPause",
							value: function (t) {
								if (C(t)) {
									var e = t.querySelector(".gvideo-wrapper");
									e && (t = e.getAttribute("data-index"));
								}
								var i = this.getSlidePlayerInstance(t);
								i && i.playing && i.pause();
							},
						},
						{
							key: "playSlideVideo",
							value: function (t) {
								if (C(t)) {
									var e = t.querySelector(".gvideo-wrapper");
									e && (t = e.getAttribute("data-index"));
								}
								console.log(
									"playSlideVideo is deprecated, use slidePlayerPlay"
								);
								var i = this.getSlidePlayerInstance(t);
								i && !i.playing && i.play();
							},
						},
						{
							key: "slidePlayerPlay",
							value: function (t) {
								if (C(t)) {
									var e = t.querySelector(".gvideo-wrapper");
									e && (t = e.getAttribute("data-index"));
								}
								var i = this.getSlidePlayerInstance(t);
								i &&
									!i.playing &&
									(i.play(),
									this.settings.autofocusVideos &&
										i.elements.container.focus());
							},
						},
						{
							key: "setElements",
							value: function (t) {
								var e = this;
								this.settings.elements = !1;
								var i = [];
								t &&
									t.length &&
									r(t, function (t, n) {
										var s = new H(t, e, n),
											r = s.getConfig(),
											a = o({}, r);
										(a.slideConfig = r),
											(a.instance = s),
											(a.index = n),
											i.push(a);
									}),
									(this.elements = i),
									this.lightboxOpen &&
										((this.slidesContainer.innerHTML = ""),
										this.elements.length &&
											(r(this.elements, function () {
												var t = v(e.settings.slideHTML);
												e.slidesContainer.appendChild(t);
											}),
											this.showSlide(0, !0)));
							},
						},
						{
							key: "getElementIndex",
							value: function (t) {
								var e = !1;
								return (
									r(this.elements, function (i, n) {
										if (A(i, "node") && i.node == t) return (e = n), !0;
									}),
									e
								);
							},
						},
						{
							key: "getElements",
							value: function () {
								var t = this,
									e = [];
								(this.elements = this.elements ? this.elements : []),
									!E(this.settings.elements) &&
										T(this.settings.elements) &&
										this.settings.elements.length &&
										r(this.settings.elements, function (i, n) {
											var s = new H(i, t, n),
												r = s.getConfig(),
												a = o({}, r);
											(a.node = !1),
												(a.index = n),
												(a.instance = s),
												(a.slideConfig = r),
												e.push(a);
										});
								var i = !1;
								return (
									this.getSelector() &&
										(i = document.querySelectorAll(this.getSelector())),
									i
										? (r(i, function (i, n) {
												var s = new H(i, t, n),
													r = s.getConfig(),
													a = o({}, r);
												(a.node = i),
													(a.index = n),
													(a.instance = s),
													(a.slideConfig = r),
													(a.gallery = i.getAttribute("data-gallery")),
													e.push(a);
										  }),
										  e)
										: e
								);
							},
						},
						{
							key: "getGalleryElements",
							value: function (t, e) {
								return t.filter(function (t) {
									return t.gallery == e;
								});
							},
						},
						{
							key: "getSelector",
							value: function () {
								return (
									!this.settings.elements &&
									(this.settings.selector &&
									"data-" == this.settings.selector.substring(0, 5)
										? "*[".concat(this.settings.selector, "]")
										: this.settings.selector)
								);
							},
						},
						{
							key: "getActiveSlide",
							value: function () {
								return this.slidesContainer.querySelectorAll(".gslide")[
									this.index
								];
							},
						},
						{
							key: "getActiveSlideIndex",
							value: function () {
								return this.index;
							},
						},
						{
							key: "getAnimationClasses",
							value: function () {
								var t = [];
								for (var e in this.settings.cssEfects)
									if (this.settings.cssEfects.hasOwnProperty(e)) {
										var i = this.settings.cssEfects[e];
										t.push("g".concat(i.in)), t.push("g".concat(i.out));
									}
								return t.join(" ");
							},
						},
						{
							key: "build",
							value: function () {
								var t = this;
								if (this.built) return !1;
								var e = document.body.childNodes,
									i = [];
								r(e, function (t) {
									t.parentNode == document.body &&
										"#" !== t.nodeName.charAt(0) &&
										t.hasAttribute &&
										!t.hasAttribute("aria-hidden") &&
										(i.push(t), t.setAttribute("aria-hidden", "true"));
								});
								var n = A(this.settings.svg, "next")
										? this.settings.svg.next
										: "",
									s = A(this.settings.svg, "prev")
										? this.settings.svg.prev
										: "",
									o = A(this.settings.svg, "close")
										? this.settings.svg.close
										: "",
									a = this.settings.lightboxHTML;
								(a = v(
									(a = (a = (a = a.replace(/{nextSVG}/g, n)).replace(
										/{prevSVG}/g,
										s
									)).replace(/{closeSVG}/g, o))
								)),
									document.body.appendChild(a);
								var c = document.getElementById("glightbox-body");
								this.modal = c;
								var p = c.querySelector(".gclose");
								(this.prevButton = c.querySelector(".gprev")),
									(this.nextButton = c.querySelector(".gnext")),
									(this.overlay = c.querySelector(".goverlay")),
									(this.loader = c.querySelector(".gloader")),
									(this.slidesContainer =
										document.getElementById("glightbox-slider")),
									(this.bodyHiddenChildElms = i),
									(this.events = {}),
									u(this.modal, "glightbox-" + this.settings.skin),
									this.settings.closeButton &&
										p &&
										(this.events.close = l("click", {
											onElement: p,
											withCallback: function (e, i) {
												e.preventDefault(), t.close();
											},
										})),
									p &&
										!this.settings.closeButton &&
										p.parentNode.removeChild(p),
									this.nextButton &&
										(this.events.next = l("click", {
											onElement: this.nextButton,
											withCallback: function (e, i) {
												e.preventDefault(), t.nextSlide();
											},
										})),
									this.prevButton &&
										(this.events.prev = l("click", {
											onElement: this.prevButton,
											withCallback: function (e, i) {
												e.preventDefault(), t.prevSlide();
											},
										})),
									this.settings.closeOnOutsideClick &&
										(this.events.outClose = l("click", {
											onElement: c,
											withCallback: function (e, i) {
												t.preventOutsideClick ||
													d(document.body, "glightbox-mobile") ||
													h(e.target, ".ginner-container") ||
													h(e.target, ".gbtn") ||
													d(e.target, "gnext") ||
													d(e.target, "gprev") ||
													t.close();
											},
										})),
									r(this.elements, function (e, i) {
										t.slidesContainer.appendChild(e.instance.create()),
											(e.slideNode =
												t.slidesContainer.querySelectorAll(".gslide")[i]);
									}),
									W && u(document.body, "glightbox-touch"),
									(this.events.resize = l("resize", {
										onElement: window,
										withCallback: function () {
											t.resize();
										},
									})),
									(this.built = !0);
							},
						},
						{
							key: "resize",
							value: function () {
								var t =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: null;
								if ((t = t || this.activeSlide) && !d(t, "zoomed")) {
									var e = y(),
										i = t.querySelector(".gvideo-wrapper"),
										n = t.querySelector(".gslide-image"),
										s = this.slideDescription,
										o = e.width,
										r = e.height;
									if (
										(o <= 768
											? u(document.body, "glightbox-mobile")
											: c(document.body, "glightbox-mobile"),
										i || n)
									) {
										var a = !1;
										if (
											(s &&
												(d(s, "description-bottom") ||
													d(s, "description-top")) &&
												!d(s, "gabsolute") &&
												(a = !0),
											n)
										)
											if (o <= 768)
												n.querySelector("img").setAttribute("style", "");
											else if (a) {
												var l = s.offsetHeight,
													h = n.querySelector("img");
												h.setAttribute(
													"style",
													"max-height: calc(100vh - ".concat(l, "px)")
												),
													s.setAttribute(
														"style",
														"max-width: ".concat(h.offsetWidth, "px;")
													);
											}
										if (i) {
											var p = A(this.settings.plyr.config, "ratio")
												? this.settings.plyr.config.ratio
												: "";
											if (!p) {
												var f = i.clientWidth,
													g = i.clientHeight,
													m = f / g;
												p = "".concat(f / m, ":").concat(g / m);
											}
											var v = p.split(":"),
												_ = this.settings.videosWidth,
												b = this.settings.videosWidth,
												D =
													(b =
														L(_) || -1 !== _.indexOf("px")
															? parseInt(_)
															: -1 !== _.indexOf("vw")
															? (o * parseInt(_)) / 100
															: -1 !== _.indexOf("vh")
															? (r * parseInt(_)) / 100
															: -1 !== _.indexOf("%")
															? (o * parseInt(_)) / 100
															: parseInt(i.clientWidth)) /
													(parseInt(v[0]) / parseInt(v[1]));
											if (
												((D = Math.floor(D)),
												a && (r -= s.offsetHeight),
												b > o || D > r || (r < D && o > b))
											) {
												var w = i.offsetWidth,
													x = i.offsetHeight,
													C = r / x,
													T = {
														width: w * C,
														height: x * C,
													};
												i.parentNode.setAttribute(
													"style",
													"max-width: ".concat(T.width, "px")
												),
													a &&
														s.setAttribute(
															"style",
															"max-width: ".concat(T.width, "px;")
														);
											} else
												(i.parentNode.style.maxWidth = "".concat(b)),
													a &&
														s.setAttribute(
															"style",
															"max-width: ".concat(b, ";")
														);
										}
									}
								}
							},
						},
						{
							key: "reload",
							value: function () {
								this.init();
							},
						},
						{
							key: "updateNavigationClasses",
							value: function () {
								var t = this.loop();
								c(this.nextButton, "disabled"),
									c(this.prevButton, "disabled"),
									0 == this.index && this.elements.length - 1 == 0
										? (u(this.prevButton, "disabled"),
										  u(this.nextButton, "disabled"))
										: 0 !== this.index || t
										? this.index !== this.elements.length - 1 ||
										  t ||
										  u(this.nextButton, "disabled")
										: u(this.prevButton, "disabled");
							},
						},
						{
							key: "loop",
							value: function () {
								var t = A(this.settings, "loopAtEnd")
									? this.settings.loopAtEnd
									: null;
								return (t = A(this.settings, "loop") ? this.settings.loop : t);
							},
						},
						{
							key: "close",
							value: function () {
								var t = this;
								if (!this.lightboxOpen) {
									if (this.events) {
										for (var e in this.events)
											this.events.hasOwnProperty(e) && this.events[e].destroy();
										this.events = null;
									}
									return !1;
								}
								if (this.closing) return !1;
								(this.closing = !0),
									this.slidePlayerPause(this.activeSlide),
									this.fullElementsList &&
										(this.elements = this.fullElementsList),
									this.bodyHiddenChildElms.length &&
										r(this.bodyHiddenChildElms, function (t) {
											t.removeAttribute("aria-hidden");
										}),
									u(this.modal, "glightbox-closing"),
									p(
										this.overlay,
										"none" == this.settings.openEffect
											? "none"
											: this.settings.cssEfects.fade.out
									),
									p(
										this.activeSlide,
										this.settings.cssEfects[this.settings.closeEffect].out,
										function () {
											if (
												((t.activeSlide = null),
												(t.prevActiveSlideIndex = null),
												(t.prevActiveSlide = null),
												(t.built = !1),
												t.events)
											) {
												for (var e in t.events)
													t.events.hasOwnProperty(e) && t.events[e].destroy();
												t.events = null;
											}
											var i = document.body;
											c(X, "glightbox-open"),
												c(
													i,
													"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
												),
												t.modal.parentNode.removeChild(t.modal),
												t.trigger("close"),
												w(t.settings.onClose) && t.settings.onClose();
											var n = document.querySelector(".gcss-styles");
											n && n.parentNode.removeChild(n),
												(t.lightboxOpen = !1),
												(t.closing = null);
										}
									);
							},
						},
						{
							key: "destroy",
							value: function () {
								this.close(),
									this.clearAllEvents(),
									this.baseEvents && this.baseEvents.destroy();
							},
						},
						{
							key: "on",
							value: function (t, e) {
								var i =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2];
								if (!t || !w(e))
									throw new TypeError(
										"Event name and callback must be defined"
									);
								this.apiEvents.push({
									evt: t,
									once: i,
									callback: e,
								});
							},
						},
						{
							key: "once",
							value: function (t, e) {
								this.on(t, e, !0);
							},
						},
						{
							key: "trigger",
							value: function (t) {
								var e = this,
									i =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: null,
									n = [];
								r(this.apiEvents, function (e, s) {
									var o = e.evt,
										r = e.once,
										a = e.callback;
									o == t && (a(i), r && n.push(s));
								}),
									n.length &&
										r(n, function (t) {
											return e.apiEvents.splice(t, 1);
										});
							},
						},
						{
							key: "clearAllEvents",
							value: function () {
								this.apiEvents.splice(0, this.apiEvents.length);
							},
						},
						{
							key: "version",
							value: function () {
								return "3.0.8";
							},
						},
					]),
					t
				);
			})();
		return function () {
			var t =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				e = new V(t);
			return e.init(), e;
		};
	});
var option_hero_background_mode = "image",
	option_hero_background_color = "#6d6d6e",
	option_hero_background_image_path = "assets/images/image.jpg",
	option_hero_background_image_overlay_opacity = "0.5",
	option_hero_background_image_overlay_color = "#000",
	option_hero_background_slider_path = [
		{
			src: "assets/images/slider-1.jpg",
		},
		{
			src: "assets/images/slider-2.jpg",
		},
		{
			src: "assets/images/slider-3.jpg",
		},
	],
	option_hero_background_slider_transition = "fade",
	option_hero_background_slider_transitionDuration = 1e3,
	option_hero_background_slider_delay = 8e3,
	option_hero_background_slider_overlay_opacity = "0.6",
	option_hero_background_slider_overlay_color = "#000",
	option_hero_background_video_source = "assets/videos/1.mp4",
	option_hero_background_video_overlay_opacity = "0.6",
	option_hero_background_video_overlay_color = "#000",
	option_hero_background_mesh_color = "#222",
	option_hero_background_mesh_background_color = "#0a0a0a",
	option_hero_background_space_star_amount = 500,
	option_hero_background_space_star_speed = 0.3,
	option_hero_background_star_star_color = "#ffffff",
	option_hero_background_star_background_color = "#000",
	option_hero_background_glitch_image = "assets/images/image.jpg",
	option_hero_background_glitch_overlay_opacity = "0.4",
	option_hero_background_glitch_overlay_color = "#000",
	option_hero_background_field_bg_color = "#030303",
	option_hero_background_field_fill_color = "#6d6d6e",
	option_hero_background_field_x_multi = 3,
	option_hero_background_field_y_multi = 3,
	option_hero_background_sphere_distance = 100,
	option_hero_background_sphere_rotation_speed = 0.15,
	option_hero_background_sphere_line_color = "#666",
	option_hero_background_sphere_dot_color = "#666",
	option_hero_background_sphere_background_color = "#000",
	option_hero_background_abstract_speed = 7,
	option_hero_background_abstract_mesh_ambient = "#666",
	option_hero_background_abstract_mesh_diffuse = "#fff",
	option_hero_background_abstract_light_ambient = "#fff",
	option_hero_background_abstract_light_diffuse = "#b3b3b3";

function section_system() {
	var t,
		e = {
			section_animation: "fade",
			section_animation_duration: 0.6,
			section_animation_ease: "power2.inOut",
			replay_content_animations: !0,
			navigation_dots: !0,
			navigation_buttons: !0,
		},
		i = $("#main").find(".section"),
		n = 0,
		s = 1,
		o = i.length - 1,
		r = {},
		a = [],
		l = gsap.timeline(),
		u = gsap.timeline(),
		c = gsap.timeline();

	function d() {
		0 != e.navigation_dots &&
			($("#main .dot-nav .dot").removeClass("active"),
			$("#main .dot-nav .dot").eq(s).addClass("active"));
	}

	function h() {
		$(".button-nav").removeClass("hide-button"),
			0 == s && $(".button-nav.prev-section").addClass("hide-button"),
			s == o && $(".button-nav.next-section").addClass("hide-button");
	}

	function p(t) {
		switch (e.section_animation) {
			case "slide":
				"next" == t &&
					(u.set(i.eq(s), {
						y: "100%",
					}),
					u.to(i.eq(n), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						y: "-100%",
					}),
					u.to(i.eq(s), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						y: "0%",
						delay: -(e.section_animation_duration + 0.005),
					})),
					"prev" == t &&
						(l.set(i.eq(s), {
							y: "-100%",
						}),
						l.to(i.eq(n), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							y: "100%",
						}),
						l.to(i.eq(s), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							y: "0%",
							delay: -(e.section_animation_duration + 0.005),
						}));
				break;
			case "fade":
				"next" == t &&
					(u.set(i.eq(s), {
						zIndex: 2,
					}),
					u.set(i.eq(n), {
						zIndex: 0,
					}),
					u.to(i.eq(n), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						opacity: 0,
					}),
					u.to(i.eq(s), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						opacity: 1,
						delay: -e.section_animation_duration,
					})),
					"prev" == t &&
						(l.set(i.eq(s), {
							zIndex: 2,
						}),
						l.set(i.eq(n), {
							zIndex: 0,
						}),
						l.to(i.eq(n), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							opacity: 0,
						}),
						l.to(i.eq(s), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							opacity: 1,
							delay: -e.section_animation_duration,
						}));
				break;
			case "stack":
				"next" == t &&
					(u.set(i, {
						zIndex: 0,
					}),
					u.set(i.eq(n), {
						zIndex: 1,
					}),
					u.set(i.eq(s), {
						zIndex: 2,
						y: "100%",
					}),
					u.to(i.eq(s), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						y: "0%",
					})),
					"prev" == t &&
						(l.set(i, {
							zIndex: 0,
						}),
						l.set(i.eq(n), {
							zIndex: 1,
						}),
						l.set(i.eq(s), {
							zIndex: 2,
							y: "-100%",
						}),
						l.to(i.eq(s), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							y: "0%",
						}));
				break;
			case "parallax":
				"next" == t &&
					(u.set(i.eq(s), {
						y: "100%",
						opacity: 1,
						zIndex: 2,
					}),
					u.set(i.eq(n), {
						zIndex: 0,
					}),
					u.to(i.eq(n), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						opacity: 0,
						y: "-40%",
					}),
					u.to(i.eq(s), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						y: "0%",
						delay: -e.section_animation_duration,
					})),
					"prev" == t &&
						(l.set(i.eq(s), {
							y: "-100%",
							opacity: 1,
							zIndex: 2,
						}),
						l.set(i.eq(n), {
							zIndex: 0,
						}),
						l.to(i.eq(n), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							opacity: 0,
							y: "40%",
						}),
						l.to(i.eq(s), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							y: "0%",
							delay: -e.section_animation_duration,
						}));
				break;
			case "scale":
				"next" == t &&
					(u.set(i, {
						scale: 1,
					}),
					u.set(i.eq(s), {
						y: "100%",
						opacity: 1,
						zIndex: 2,
					}),
					u.set(i.eq(n), {
						zIndex: 0,
					}),
					u.to(i.eq(n), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						opacity: 0,
						scale: 0.86,
					}),
					u.to(i.eq(s), {
						ease: e.section_animation_ease,
						duration: e.section_animation_duration,
						y: "0%",
						delay: -e.section_animation_duration,
					})),
					"prev" == t &&
						(l.set(i, {
							scale: 1,
						}),
						l.set(i.eq(s), {
							y: "-100%",
							opacity: 1,
							zIndex: 2,
						}),
						l.set(i.eq(n), {
							zIndex: 0,
						}),
						l.to(i.eq(n), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							opacity: 0,
							scale: 0.86,
						}),
						l.to(i.eq(s), {
							ease: e.section_animation_ease,
							duration: e.section_animation_duration,
							y: "0%",
							delay: -e.section_animation_duration,
						}));
		}
	}

	function f(o) {
		(c = a[s]),
			(i.eq(n).hasClass("content-animation-played") &&
				1 != e.replay_content_animations) ||
				c.seek(0).pause(),
			"next" == o &&
				(u.clear(),
				p("next"),
				u.add(function () {
					d(),
						h(),
						c.play(),
						i.eq(s).hasClass("content-animation-played") &&
						1 != e.replay_content_animations
							? ((n = s), (t = !1))
							: c.add(function () {
									i.eq(s).addClass("content-animation-played"),
										(n = s),
										(t = !1);
							  });
				})),
			"prev" == o &&
				(l.clear(),
				p("prev"),
				l.add(function () {
					d(),
						h(),
						c.play(),
						i.eq(s).hasClass("content-animation-played") &&
						1 != e.replay_content_animations
							? ((n = s), (t = !1))
							: c.add(function () {
									i.eq(s).addClass("content-animation-played"),
										(n = s),
										(t = !1);
							  });
				}));
	}

	function g(e) {
		if (1 != t)
			if ("prev" == e) {
				if (n <= 0) return;
				(t = !0), (s = n - 1), f("prev");
			} else if ("next" == e) {
				if (n >= o) return;
				(t = !0), (s = n + 1), f("next");
			} else if (!isNaN(e)) {
				if (n == e) return;
				(t = !0), (s = e), e < n ? f("prev") : e > n && f("next");
			}
	}
	!(function () {
		let t = 0;
		$(".text-splitt").each(function () {
			let e = "words";
			"words" == $(this).data("splitt-text-type") && (e = "words"),
				"lines" == $(this).data("splitt-text-type") && (e = "lines"),
				"chars" == $(this).data("splitt-text-type") && (e = "chars"),
				(r[t] = new SplitText($(this), {
					type: e,
				})),
				$(this).attr("data-splitt-text-id", t),
				(t += 1);
		});
	})(),
		$("#main .section").each(function () {
			let t = gsap.timeline().pause().seek(0);
			$(this)
				.find(".content-animate")
				.each(function () {
					let e = {};
					if (
						((e.ease = $(this).data("ease")),
						(e.delay = $(this).data("delay")),
						(e.duration = $(this).data("duration")),
						(function (t, e) {
							switch (t) {
								case "zoom_out":
									return (e.scale = 1.5), (e.opacity = 0), e;
								case "zoom_in":
									return (e.scale = 0), e;
								case "blur_in":
									return (e.filter = "blur(100px)"), e;
								case "rotate_down":
									return (
										(e.opacity = 0),
										(e.y = -50),
										(e.rotate = 8),
										(e.transformOrigin = "0% 100%"),
										e
									);
								case "rotate_up":
									return (
										(e.opacity = 0),
										(e.y = 50),
										(e.rotate = 8),
										(e.transformOrigin = "0% 100%"),
										e
									);
								case "fade_in":
									return (e.opacity = 0), e;
								case "fade_in_from_bottom":
									return (e.opacity = 0), (e.y = 100), e;
								case "fade_in_from_top":
									return (e.opacity = 0), (e.y = -100), e;
								case "fade_in_from_left":
									return (e.opacity = 0), (e.x = -100), e;
								case "fade_in_from_right":
									(e.opacity = 0), (e.x = 100);
							}
						})($(this).data("animation-type"), e),
						$(this).hasClass("text-splitt"))
					) {
						e.stagger = $(this).data("stagger");
						let i = "words";
						"words" == $(this).data("splitt-text-type") && (i = "words"),
							"lines" == $(this).data("splitt-text-type") && (i = "lines"),
							"chars" == $(this).data("splitt-text-type") && (i = "chars");
						let n = r[$(this).attr("data-splitt-text-id")];
						t = t.from(n[i], e, 0);
					} else t = t.from($(this), e, 0);
				}),
				a.push(t);
		}),
		(function () {
			switch (e.section_animation) {
				case "slide":
					gsap.set(i, {
						y: "-100%",
					}),
						gsap.set(i.eq(n), {
							y: "0%",
						});
					break;
				case "fade":
					gsap.set(i, {
						opacity: 0,
						zIndex: 0,
					}),
						gsap.set(i.eq(n), {
							opacity: 1,
							zIndex: 2,
						});
					break;
				case "stack":
					gsap.set(i, {
						y: "100%",
					}),
						gsap.set(i.eq(n), {
							y: "0%",
						});
					break;
				case "parallax":
					gsap.set(i, {
						y: "-100%",
						zIndex: 2,
					}),
						gsap.set(i.eq(n), {
							y: "0%",
							zIndex: 0,
						});
					break;
				case "scale":
					gsap.set(i, {
						y: "-100%",
						zIndex: 2,
						scale: 1,
					}),
						gsap.set(i.eq(n), {
							y: "0%",
							zIndex: 0,
						});
					break;
				default:
					console.log(
						"________ERROR________: Selected section animation is not valid!"
					);
			}
		})(),
		(c = a[n]),
		(t = !0),
		gsap.to([".loading-screen p", ".loading-screen .line"], {
			ease: "power3.in",
			duration: 0.4,
			opacity: 0,
			y: "100%",
			onComplete: function () {
				gsap.to(".loading-screen", {
					ease: "power3.inOut",
					duration: 1,
					opacity: 0,
					zIndex: -100,
					delay: 0.3,
					onComplete: function () {
						$("#main").addClass("loaded"),
							$("#main").removeClass("not-loaded"),
							c.add(function () {
								i.eq(n).addClass("content-animation-played"), (t = !1);
							}),
							c.play();
					},
				});
			},
		}),
		0 != e.navigation_dots &&
			($("#main").append('<div class="dot-nav"></div>'),
			$(".section").each(function () {
				void 0 !== $(this).data("section-name")
					? $("#main .dot-nav").append(
							'<div class="dot"><div class="name-tag">' +
								$(this).data("section-name") +
								'</div><div class="line"></div></div>'
					  )
					: $("#main .dot-nav").append('<div class="dot"></div>');
			}),
			$("#main .dot-nav .dot").eq(n).addClass("active")),
		0 != e.navigation_buttons &&
			($("#main").append(
				'<div class="button-nav next-section change-section-on-click" data-section-change="next"><p>Next Section</p><div class="line"></div>'
			),
			$("#main").append(
				'<div class="button-nav prev-section change-section-on-click hide-button" data-section-change="prev"><div class="line"></div><p>Previous Section</p></div>'
			)),
		window.addEventListener("wheel", function (t) {
			t.deltaY < 0 ? g("prev") : t.deltaY > 0 && g("next");
		}),
		(document.onkeydown = function (t) {
			switch (t.key) {
				case "ArrowUp":
					g("prev");
					break;
				case "ArrowDown":
					g("next");
			}
		}),
		$(".dot-nav .dot").click(function () {
			g($(this).index(".dot"));
		}),
		$(".change-section-on-click").click(function () {
			g($(this).data("section-change"));
		});
}

function carousel_setup() {
	$(".testimonial-carousel").slick({
		dots: !0,
		infinite: !1,
		speed: 450,
		centerMode: !0,
		variableWidth: !1,
		nextArrow:
			'<div class="icon-button button-animation-right arrow-next d-none d-md-block"><span class="ti-arrow-right"></span><span class="ti-arrow-right"></span></div>',
		prevArrow:
			'<div class="icon-button button-animation-left arrow-prev d-none d-md-block"><span class="ti-arrow-left"></span><span class="ti-arrow-left"></span></div>',
		arrows: !1,
		edgeFriction: 0.5,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
}

function lightbox_setup() {
	var t = GLightbox({
		selector: ".work-lightbox-1",
		touchNavigation: !0,
		loop: !1,
		zoomable: !1,
		slideHTML:
			'<div class="gslide">\n\t\t<div class="gslide-inner-content">\n\t\t\t<div class="ginner-container">\n\n\t\t\t<div class="container">\n\t\t\t\t<div class="row justify-content-center">\n\t\t\t\t<div class="col-10">\n\t\t\t\t<div class="gslide-content-frame">\n\n\t\t\t\t<div class="gslide-media">\n\t\t\t\t<div class="gslide-description">\n\t\t\t\t\t<div class="gdesc-inner">\n\t\t\t\t\t\t<h4 class="gslide-title"></h4>\n\t\t\t\t\t\t<div class="gslide-desc"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="info-button"><p>Info</p><div class="line"></div></div>\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>',
		lightboxHTML:
			'<div id="glightbox-body" class="glightbox-container hide-nav"><div class="gloader visible"></div><div class="goverlay"></div><div class="gcontainer"><div id="glightbox-slider" class="gslider"></div><button class="gnext gbtn" tabindex="0" aria-label="Next"><p>Next</p><div class="line"></div></button><button class="gprev gbtn" tabindex="1" aria-label="Previous"><div class="line"></div><p>Prev</p></button><button class="gclose gbtn" tabindex="2" aria-label="Close"><div class="line"></div><p>Back</p></button></div></div>',
	});
	t.on("open", () => {
		setTimeout(function () {
			$(".glightbox-container ").removeClass("hide-nav");
		}, 300);
		var t = !1;
		$(".gslide .info-button").on("click touchend", function () {
			if (1 != t) {
				t = !0;
				var e = $(this).closest(".gslide");
				e.hasClass("show-desc")
					? (e.removeClass("show-desc"), $(this).find("p").text("Info"))
					: (e.addClass("show-desc"), $(this).find("p").text("Close")),
					setTimeout(function () {
						t = !1;
					}, 500);
			}
		});
	}),
		t.on("slide_before_change", () => {
			$(".gslide").removeClass("show-desc"),
				$(".gslide .info-button p").text("Info");
		});
}

function form_setup() {
	$("#contact-form").submit(function (t) {
		t.preventDefault();
		for (var e = $(this).serializeArray(), i = e.length, n = 0; n < i; n++)
			"true" ==
			$("#contact-form input[name='" + e[n].name + "']").attr(
				"data-require-filling"
			)
				? e.push({
						name: e[n].name + "_required",
						value: !0,
				  })
				: e.push({
						name: e[n].name + "_required",
						value: !1,
				  });
		$.ajax({
			type: "POST",
			url: "assets/php/contact.php",
			data: e,
			dataType: "json",
			success: function (t) {
				$("#contact-form .error").removeClass("error"),
					setTimeout(function () {
						"" !== t.nameMessage && $("#contact-form-name").addClass("error"),
							"" !== t.emailMessage &&
								$("#contact-form-email").addClass("error"),
							"" !== t.messageMessage &&
								$("#contact-form-message").addClass("error");
					}, 25),
					"" !== t.succesMessage &&
						($("#contact-form").addClass("success"),
						$("#contact-form button span")
							.removeClass("ti-angle-right")
							.addClass("ti-check"),
						$("#contact-form button p").text(t.succesMessage),
						$("#contact-form input,#contact-form textarea,#contact-form button")
							.val("")
							.prop("disabled", !0));
			},
		});
	});
}

function hover_interaction_setup() {
	$(".img-hover-box").each(function () {
		var t = $(this);

		function e(e, i, n) {
			var s = e.pageX - t.offset().left,
				o = e.pageY - t.offset().top;
			gsap.to(i, 0.4, {
				x: ((s - t.width() / 2) / t.width()) * n,
				y: ((o - t.height() / 2) / t.height()) * n,
			});
		}
		$(this)
			.closest(".section")
			.on("mousemove touchmove", function (i) {
				e(i, t.find(".img-wrapper"), 30),
					e(i, t.find(".img-wrapper .img"), -10);
			});
	}),
		$(".work-grid .item").each(function () {
			var t = $(this);

			function e(e, i, n) {
				var s = e.pageX - t.offset().left,
					o = e.pageY - t.offset().top;
				gsap.to(i, 0.3, {
					x: ((s - t.width() / 2) / t.width()) * n,
					y: ((o - t.height() / 2) / t.height()) * n,
				});
			}
			$(t).on("mousemove", function (i) {
				e(i, t.find(".hover-reveal"), 60),
					e(i, t.find(".hover-reveal-img"), -25);
			});
		});
}

function colorBackground() {
	$("body").append(
		'<div class="bg-color" style="background-color:' +
			option_hero_background_color +
			'"></div>'
	);
}

function imageBackground() {
	$("body").append(
		'<div class="bg-image" style="background-image:url(' +
			option_hero_background_image_path +
			')"></div>'
	),
		$("body").append(
			'<div class="bg-overlay" style="background:' +
				option_hero_background_image_overlay_color +
				";opacity:" +
				option_hero_background_image_overlay_opacity +
				';"></div>'
		);
}

function sliderBackground() {
	$("body").append('<div class="bg-slider"></div>'),
		$("body").append(
			'<div class="bg-overlay" style="background:' +
				option_hero_background_slider_overlay_color +
				";opacity:" +
				option_hero_background_slider_overlay_opacity +
				';"></div>'
		),
		$(".bg-slider").vegas({
			slides: option_hero_background_slider_path,
			transition: option_hero_background_slider_transition,
			delay: option_hero_background_slider_delay,
			transitionDuration: option_hero_background_slider_transitionDuration,
			timer: !1,
		});
}

function videoBackground() {
	$("body").append(
		'<div class="bg-overlay" style="background:' +
			option_hero_background_video_overlay_color +
			";opacity:" +
			option_hero_background_video_overlay_opacity +
			';"></div>'
	),
		$("body").append(
			'<div class="bg-video"><video autoplay muted loop><source src="' +
				option_hero_background_video_source +
				'" type="video/mp4"></video></div>'
		);
}

function meshBackground() {
	var t, e, i, n, s, o, r, a, l, u, c, d, h, p, f;

	function g(t) {
		(this.x = t.x),
			(this.y = t.y),
			(this.xBase = this.x),
			(this.yBase = this.y),
			(this.offset = m(0, 1e3)),
			(this.duration = m(20, 60)),
			(this.range = m(5, 5)),
			(this.dir = m(0, 1) > 0.5 ? 1 : -1),
			(this.rad = m(2, 4));
	}

	function m(t, e) {
		return Math.random() * (e - t) + t;
	}

	function v() {
		(i = $("#main").width()),
			(n = $("#main").height()),
			(t.width = i),
			(t.height = n),
			(u.x = i / 2),
			(u.y = n / 2),
			(c = !1),
			(d = 0),
			(h = 0),
			(p.length = 0),
			(f = 0),
			(function () {
				for (var t = -s / 2; t < i + s; t += s) {
					d++;
					for (var e = -s / 2; e < n + s; e += s)
						t == -s / 2 && h++,
							p.push(
								new g({
									x: ~~(t + m(-o, o)),
									y: ~~(e + m(-o, o)),
								})
							);
				}
			})(),
			(e.strokeStyle = option_hero_background_mesh_color),
			(e.lineWidth = 2);
	}

	function y() {
		requestAnimationFrame(y),
			c ||
				((u.x = i / 2 + 90 * Math.cos(f / 40)),
				(u.y = n / 2 + 90 * Math.sin(f / 40))),
			p.forEach(function (t) {
				t.step();
			}),
			f++,
			(function () {
				e.clearRect(0, 0, i, n), e.beginPath();
				for (var t = 0; t < d; t++)
					for (var s = 0; s < h; s++)
						(r = p[t * h + s]),
							(a = t === d - 1 ? null : p[(t + 1) * h + s]),
							(l = s === h - 1 ? null : p[t * h + s + 1]),
							a && (e.moveTo(r.x, r.y), e.lineTo(a.x, a.y)),
							l && (e.moveTo(r.x, r.y), e.lineTo(l.x, l.y));
				e.stroke(),
					(e.fillStyle = "#000"),
					p.forEach(function (t) {
						e.save(),
							e.beginPath(),
							e.translate(t.x, t.y),
							e.rotate(Math.PI / 4),
							e.rect(0, 0, 0, 0),
							e.fill(),
							e.stroke(),
							e.restore();
					});
				var o = e.createRadialGradient(u.x, u.y, 0, u.x, u.y, 9e4);
				o.addColorStop(0, "hsla(0, 0%, 0%, 0)"),
					o.addColorStop(1, "hsla(0, 0%, 0%, 0.93)"),
					(e.fillStyle = o),
					e.fillRect(0, 0, i, n);
			})();
	}
	$("body").append('<div id="canvas"></div>'),
		(g.prototype.step = function () {
			(this.x =
				this.xBase +
				this.dir * Math.sin((f + this.offset) / this.duration) * this.range),
				(this.y =
					this.yBase +
					this.dir * Math.cos((f + this.offset) / this.duration) * this.range);
			var t,
				e,
				i,
				n,
				s =
					((e = u),
					(i = (t = this).x - e.x),
					(n = t.y - e.y),
					Math.atan2(n, i));
			(this.x = this.x + 100 * Math.cos(s)),
				(this.y = this.y + 100 * Math.sin(s));
		}),
		window.addEventListener("resize", v),
		window.addEventListener("mousemove", function (t) {
			(c = !0), (u.x = t.pageX), (u.y = t.pageY);
		}),
		(t = document.createElement("canvas")),
		(e = t.getContext("2d")),
		(u = {
			x: 0,
			y: 0,
		}),
		(p = []),
		(o = 0.25 * (s = 180)),
		document.getElementById("canvas").appendChild(t),
		v(),
		y(),
		$("#canvas canvas").css(
			"background-color",
			option_hero_background_mesh_background_color
		);
}

function spaceBackground() {
	!(function (t, e, i, n) {
		var s,
			o,
			r,
			a = function (e, i) {
				(this.el = e), (this.$el = t(e)), (this.options = i), (r = this);
			},
			l = !1,
			u = !1;
		!(function () {
			for (
				var t = 0, i = ["ms", "moz", "webkit", "o"], n = 0;
				n < i.length && !e.requestAnimationFrame;
				++n
			)
				(e.requestAnimationFrame = e[i[n] + "RequestAnimationFrame"]),
					(e.cancelAnimationFrame =
						e[i[n] + "CancelAnimationFrame"] ||
						e[i[n] + "CancelRequestAnimationFrame"]);
			e.requestAnimationFrame ||
				(e.requestAnimationFrame = function (i, n) {
					var s = new Date().getTime(),
						o = Math.max(0, 16 - (s - t)),
						r = e.setTimeout(function () {
							i(s + o);
						}, o);
					return (t = s + o), r;
				}),
				e.cancelAnimationFrame ||
					(e.cancelAnimationFrame = function (t) {
						clearTimeout(t);
					});
		})(),
			(a.defaults = (a.prototype = {
				defaults: {
					starColor: option_hero_background_star_star_color,
					bgColor: option_hero_background_star_background_color,
					mouseMove: !0,
					mouseColor: "rgba(0,0,0,0.2)",
					mouseSpeed: 15,
					speed: option_hero_background_space_star_speed,
					quantity: option_hero_background_space_star_amount,
					ratio: option_hero_background_space_star_amount / 2,
					divclass: "starfield",
				},
				resizer: function () {
					var t = this.star,
						e = this.context.canvas.width,
						i = this.context.canvas.height;
					(this.w = this.$el.width()),
						(this.h = this.$el.height()),
						(this.x = Math.round(this.w / 2)),
						(this.y = Math.round(this.h / 2));
					var n = this.w / e,
						s = this.h / i;
					(this.context.canvas.width = this.w),
						(this.context.canvas.height = this.h);
					for (var o = 0; o < this.n; o++)
						(this.star[o][0] = t[o][0] * n),
							(this.star[o][1] = t[o][1] * s),
							(this.star[o][3] =
								this.x + (this.star[o][0] / this.star[o][2]) * this.star_ratio),
							(this.star[o][4] =
								this.y + (this.star[o][1] / this.star[o][2]) * this.star_ratio);
					(r.context.fillStyle = r.settings.bgColor),
						(this.context.strokeStyle = this.settings.starColor);
				},
				init: function () {
					this.settings = t.extend({}, this.defaults, this.options);
					var n = i.location.href;
					(this.n = parseInt(
						-1 != n.indexOf("n=")
							? n.substring(
									n.indexOf("n=") + 2,
									-1 != n.substring(n.indexOf("n=") + 2, n.length).indexOf("&")
										? n.indexOf("n=") +
												2 +
												n.substring(n.indexOf("n=") + 2, n.length).indexOf("&")
										: n.length
							  )
							: this.settings.quantity
					)),
						(this.flag = !0),
						(this.test = !0),
						(this.w = 0),
						(this.h = 0),
						(this.x = 0),
						(this.y = 0),
						(this.z = 0),
						(this.star_color_ratio = 0),
						(this.star_x_save = 0),
						(this.star_y_save = 0),
						(this.star_ratio = this.settings.ratio),
						(this.star_speed = this.settings.speed),
						(this.star_speed_save = 0),
						(this.star = new Array(this.n)),
						(this.color = this.settings.starColor),
						(this.opacity = 0.1),
						(this.cursor_x = 0),
						(this.cursor_y = 0),
						(this.mouse_x = 0),
						(this.mouse_y = 0),
						(this.canvas_x = 0),
						(this.canvas_y = 0),
						(this.canvas_w = 0),
						(this.canvas_h = 0),
						(this.fps = this.settings.fps),
						(this.desktop = !navigator.userAgent.match(
							/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/
						)),
						(this.orientationSupport = void 0 !== e.DeviceOrientationEvent),
						(this.portrait = null);
					(r.w = r.$el.width()),
						(r.h = r.$el.height()),
						(r.initW = r.w),
						(r.initH = r.h),
						(r.portrait = r.w < r.h),
						(r.wrapper = t("<canvas />").addClass(r.settings.divclass)),
						r.wrapper.appendTo(r.el),
						(r.starz = t("canvas", r.el)),
						r.starz[0].getContext &&
							((r.context = r.starz[0].getContext("2d")), (u = !0)),
						(r.context.canvas.width = r.w),
						(r.context.canvas.height = r.h);
					!(function () {
						if (u) {
							(r.x = Math.round(r.w / 2)),
								(r.y = Math.round(r.h / 2)),
								(r.z = (r.w + r.h) / 2),
								(r.star_color_ratio = 1 / r.z),
								(r.cursor_x = r.x),
								(r.cursor_y = r.y);
							for (var t = 0; t < r.n; t++)
								(r.star[t] = new Array(5)),
									(r.star[t][0] = Math.random() * r.w * 2 - 2 * r.x),
									(r.star[t][1] = Math.random() * r.h * 2 - 2 * r.y),
									(r.star[t][2] = Math.round(Math.random() * r.z)),
									(r.star[t][3] = 0),
									(r.star[t][4] = 0);
							(r.context.fillStyle = r.settings.bgColor),
								(r.context.strokeStyle = r.settings.starColor);
						}
					})(),
						(l = !0);
				},
				anim: function () {
					(this.mouse_x = this.cursor_x - this.x),
						(this.mouse_y = this.cursor_y - this.y),
						this.context.fillRect(0, 0, this.w, this.h);
					for (var t = 0; t < this.n; t++)
						(this.test = !0),
							(this.star_x_save = this.star[t][3]),
							(this.star_y_save = this.star[t][4]),
							(this.star[t][0] += this.mouse_x >> 4),
							this.star[t][0] > this.x << 1 &&
								((this.star[t][0] -= this.w << 1), (this.test = !1)),
							this.star[t][0] < -this.x << 1 &&
								((this.star[t][0] += this.w << 1), (this.test = !1)),
							(this.star[t][1] += this.mouse_y >> 4),
							this.star[t][1] > this.y << 1 &&
								((this.star[t][1] -= this.h << 1), (this.test = !1)),
							this.star[t][1] < -this.y << 1 &&
								((this.star[t][1] += this.h << 1), (this.test = !1)),
							(this.star[t][2] -= this.star_speed),
							this.star[t][2] > this.z &&
								((this.star[t][2] -= this.z), (this.test = !1)),
							this.star[t][2] < 0 &&
								((this.star[t][2] += this.z), (this.test = !1)),
							(this.star[t][3] =
								this.x + (this.star[t][0] / this.star[t][2]) * this.star_ratio),
							(this.star[t][4] =
								this.y + (this.star[t][1] / this.star[t][2]) * this.star_ratio),
							this.star_x_save > 0 &&
								this.star_x_save < this.w &&
								this.star_y_save > 0 &&
								this.star_y_save < this.h &&
								this.test &&
								((this.context.lineWidth =
									2 * (1 - this.star_color_ratio * this.star[t][2])),
								this.context.beginPath(),
								this.context.moveTo(this.star_x_save, this.star_y_save),
								this.context.lineTo(this.star[t][3], this.star[t][4]),
								this.context.stroke(),
								this.context.closePath());
				},
				loop: function () {
					this.anim(),
						(o = e.requestAnimationFrame(function () {
							r.loop();
						}));
				},
				move: function () {
					var t = i.documentElement;
					this.orientationSupport && !this.desktop
						? e.addEventListener(
								"deviceorientation",
								function (t) {
									if (null !== t.beta && null !== t.gamma) {
										var e = t.gamma,
											i = t.beta;
										r.portrait || ((e = -1 * t.beta), (i = t.gamma)),
											(r.cursor_x = r.w / 2 + 5 * e),
											(r.cursor_y = r.h / 2 + 5 * i);
									}
								},
								!1
						  )
						: e.addEventListener(
								"mousemove",
								function (e) {
									(r.cursor_x =
										e.pageX || e.clientX + t.scrollLeft - t.clientLeft),
										(r.cursor_y =
											e.pageY || e.clientY + t.scrollTop - t.clientTop);
								},
								!1
						  );
				},
				stop: function () {
					e.cancelAnimationFrame(o), (s = !1);
				},
				start: function () {
					return (
						l || ((l = !0), this.init()),
						s || ((s = !0), this.loop()),
						e.addEventListener(
							"resize",
							function () {
								r.resizer();
							},
							!1
						),
						e.addEventListener(
							"orientationchange",
							function () {
								r.resizer();
							},
							!1
						),
						this.settings.mouseMove && this.move(),
						this
					);
				},
			}).defaults),
			(t.fn.starfield = function (t) {
				return this.each(function () {
					new a(this, t).start();
				});
			}),
			(e.Starfield = a);
	})(jQuery, window, document),
		$("body").append('<div id="canvas"></div>'),
		$("#canvas").starfield();
}

function glitchBackground() {
	var t =
		"background-image: url('" + option_hero_background_glitch_image + "')";
	$("body").append(
		'<div class="bg-glitch"><div class="bg-image" style="' +
			t +
			'"></div></div>'
	),
		$("body").append(
			'<div class="bg-overlay" style="background:' +
				option_hero_background_glitch_overlay_color +
				";opacity:" +
				option_hero_background_glitch_overlay_opacity +
				';"></div>'
		),
		$(".bg-image").mgGlitch({
			destroy: !1,
			glitch: !0,
			scale: !0,
			blend: !0,
			blendModeType: "hue",
			glitch1TimeMin: 600,
			glitch1TimeMax: 900,
			glitch2TimeMin: 10,
			glitch2TimeMax: 115,
			zIndexStart: 8,
		});
}

function fieldBackground() {
	$("body").append("<canvas></canvas>"),
		$("body").append(
			'<div class="bg-color" style="background:' +
				option_hero_background_field_bg_color +
				';"></div>'
		);
	const t = document.querySelector("canvas"),
		e = t.getContext("2d"),
		i = 12345,
		n = 1103515245,
		s = Math.pow(2, 31),
		o = 24,
		r = 24,
		a = 1,
		l = 1,
		u = 0,
		c = 0,
		d = 0,
		h = 0;
	let p;
	const f = (function (t = 0) {
		let e = t;
		return {
			get currentSeed() {
				return e;
			},
			reset(t) {
				e = t;
			},
			get: () =>
				(e = (function (t, e = i, o = n, r = s) {
					return (o * t + e) % r;
				})(e)) / s,
		};
	})();

	function g(t) {
		e.clearRect(0, 0, e.canvas.width, e.canvas.height);
		for (let i = u; i < e.canvas.height - c; i += r) {
			f.reset(i);
			for (let n = d; n < e.canvas.width - h; n += o) {
				const s = f.get(),
					o = s * option_hero_background_field_x_multi,
					r = s * option_hero_background_field_y_multi,
					u = s * Math.PI * 2;
				(e.fillStyle = option_hero_background_field_fill_color),
					e.fillRect(
						n,
						i,
						a + Math.sin(u + t / 1e3) * o,
						l + Math.cos(u + t / 1e3) * r
					);
			}
		}
		p = window.requestAnimationFrame(g);
	}

	function m() {
		(t.width = t.clientWidth), (t.height = t.clientHeight);
	}
	window.addEventListener("resize", m),
		window.dispatchEvent(new Event("resize")),
		(p = window.requestAnimationFrame(g));
}

function abstractBackground() {
	$("body").append('<div id="canvas"></div>');
	var t,
		e,
		i,
		n,
		s,
		o,
		r,
		a = {
			width: 1.4,
			height: 1.6,
			depth: 60,
			segments: 9,
			slices: 8,
			xRange: 0.4,
			yRange: 0.1,
			zRange: 1.2,
			ambient: option_hero_background_abstract_mesh_ambient,
			diffuse: option_hero_background_abstract_mesh_diffuse,
			speed: option_hero_background_abstract_speed / 1e4,
		},
		l = {
			count: 2,
			xyScalar: 1,
			zOffset: 100,
			ambient: option_hero_background_abstract_light_ambient,
			diffuse: option_hero_background_abstract_light_diffuse,
			speed: 2e-4,
			gravity: 500,
			dampening: 0.95,
			minLimit: 10,
			maxLimit: null,
			minDistance: 20,
			maxDistance: 400,
			autopilot: !0,
			draw: !1,
			bounds: FSS.Vector3.create(),
			step: FSS.Vector3.create(
				Math.randomInRange(0.2, 1),
				Math.randomInRange(0.2, 1),
				Math.randomInRange(0.2, 1)
			),
		},
		u = {
			renderer: "canvas",
		},
		c = Date.now(),
		d = FSS.Vector3.create(),
		h = FSS.Vector3.create(),
		p = document.getElementById("canvas"),
		f = document.getElementById("canvas");

	function g() {
		var t, r;
		for (
			i.remove(n),
				e.clear(),
				s = new FSS.Plane(
					a.width * e.width,
					a.height * e.height,
					a.segments,
					a.slices
				),
				o = new FSS.Material(a.ambient, a.diffuse),
				n = new FSS.Mesh(s, o),
				i.add(n),
				t = s.vertices.length - 1;
			t >= 0;
			t--
		)
			((r = s.vertices[t]).anchor = FSS.Vector3.clone(r.position)),
				(r.step = FSS.Vector3.create(
					Math.randomInRange(0.2, 1),
					Math.randomInRange(0.2, 1),
					Math.randomInRange(0.2, 1)
				)),
				(r.time = Math.randomInRange(0, Math.PIM2));
	}

	function m(t, i) {
		e.setSize(t, i), FSS.Vector3.set(d, e.halfWidth, e.halfHeight), g();
	}

	function v() {
		(t = Date.now() - c),
			(function () {
				var e,
					n,
					o,
					r,
					u,
					c,
					p,
					f = a.depth / 2;
				FSS.Vector3.copy(l.bounds, d),
					FSS.Vector3.multiplyScalar(l.bounds, l.xyScalar),
					FSS.Vector3.setZ(h, l.zOffset),
					l.autopilot &&
						((e = Math.sin(l.step[0] * t * l.speed)),
						(n = Math.cos(l.step[1] * t * l.speed)),
						FSS.Vector3.set(h, l.bounds[0] * e, l.bounds[1] * n, l.zOffset));
				for (r = i.lights.length - 1; r >= 0; r--) {
					(u = i.lights[r]), FSS.Vector3.setZ(u.position, l.zOffset);
					var g = Math.clamp(
							FSS.Vector3.distanceSquared(u.position, h),
							l.minDistance,
							l.maxDistance
						),
						m = (l.gravity * u.mass) / g;
					FSS.Vector3.subtractVectors(u.force, h, u.position),
						FSS.Vector3.normalise(u.force),
						FSS.Vector3.multiplyScalar(u.force, m),
						FSS.Vector3.set(u.acceleration),
						FSS.Vector3.add(u.acceleration, u.force),
						FSS.Vector3.add(u.velocity, u.acceleration),
						FSS.Vector3.multiplyScalar(u.velocity, l.dampening),
						FSS.Vector3.limit(u.velocity, l.minLimit, l.maxLimit),
						FSS.Vector3.add(u.position, u.velocity);
				}
				for (c = s.vertices.length - 1; c >= 0; c--)
					(p = s.vertices[c]),
						(e = Math.sin(p.time + p.step[0] * t * a.speed)),
						(n = Math.cos(p.time + p.step[1] * t * a.speed)),
						(o = Math.sin(p.time + p.step[2] * t * a.speed)),
						FSS.Vector3.set(
							p.position,
							a.xRange * s.segmentWidth * e,
							a.yRange * s.sliceHeight * n,
							a.zRange * f * o - f
						),
						FSS.Vector3.add(p.position, p.anchor);
				s.dirty = !0;
			})(),
			y(),
			requestAnimationFrame(v);
	}

	function y() {
		var t, n, s, o;
		if ((e.render(i), l.draw))
			for (t = i.lights.length - 1; t >= 0; t--)
				(n = (o = i.lights[t]).position[0]),
					(s = o.position[1]),
					(e.context.lineWidth = 0.5),
					e.context.beginPath(),
					e.context.arc(n, s, 10, 0, Math.PIM2),
					(e.context.strokeStyle = o.ambientHex),
					e.context.stroke(),
					e.context.beginPath(),
					e.context.arc(n, s, 4, 0, Math.PIM2),
					(e.context.fillStyle = o.diffuseHex),
					e.context.fill();
	}

	function _(t) {
		m(p.offsetWidth, p.offsetHeight), y();
	}
	if (
		((r = new FSS.CanvasRenderer()),
		u.renderer,
		e && f.removeChild(e.element),
		(e = r).setSize(p.offsetWidth, p.offsetHeight),
		f.appendChild(e.element),
		(i = new FSS.Scene()),
		g(),
		(function () {
			var t, n;
			for (t = i.lights.length - 1; t >= 0; t--) (n = i.lights[t]), i.remove(n);
			for (e.clear(), t = 0; t < l.count; t++)
				((n = new FSS.Light(l.ambient, l.diffuse)).ambientHex =
					n.ambient.format()),
					(n.diffuseHex = n.diffuse.format()),
					i.add(n),
					(n.mass = Math.randomInRange(0.5, 1)),
					(n.velocity = FSS.Vector3.create()),
					(n.acceleration = FSS.Vector3.create()),
					(n.force = FSS.Vector3.create()),
					(n.ring = document.createElementNS(FSS.SVGNS, "circle")),
					n.ring.setAttributeNS(null, "stroke", n.ambientHex),
					n.ring.setAttributeNS(null, "stroke-width", "0.5"),
					n.ring.setAttributeNS(null, "fill", "none"),
					n.ring.setAttributeNS(null, "r", "10"),
					(n.core = document.createElementNS(FSS.SVGNS, "circle")),
					n.core.setAttributeNS(null, "fill", n.diffuseHex),
					n.core.setAttributeNS(null, "r", "4");
		})(),
		window.addEventListener("resize", _),
		m(p.offsetWidth, p.offsetHeight),
		v(),
		canvas.getContext)
	) {
		var b = canvas.getContext("2d"),
			D = !0;
		(canvas.height = screen.height - 60),
			(canvas.width = screen.width + 20),
			initialize(),
			initialize();
		setInterval(function () {
			for (var t = 1; t <= 1e3; t++)
				b.beginPath(),
					D
						? (b.moveTo(0, randomize(canvas.height + 10)), (D = !1))
						: (b.moveTo(randomize(canvas.width + 10), 0), (D = !0)),
					b.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50)),
					b.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50)),
					(b.fillStyle = getRndColor()),
					b.fill();
		}, 5e3);
	}
}

function sphereBackground() {
	$("body").append('<div id="canvas"></div>');
	var t,
		e,
		i,
		n = $(window).width(),
		s = $(window).height(),
		o = 0,
		r = 0,
		a = window.innerWidth / 2,
		l = window.innerHeight / 2;

	function u() {
		var e = $(window).width(),
			n = $(window).height();
		(a = e / 2),
			(l = n / 2),
			(t.aspect = e / n),
			t.updateProjectionMatrix(),
			i.setSize(e, n);
	}

	function c(t) {
		(o = t.clientX - a), (r = t.clientY - l);
	}

	function d(t) {
		t.touches.length > 1 &&
			(t.preventDefault(),
			(o = t.touches[0].pageX - a),
			(r = t.touches[0].pageY - l));
	}

	function h(t) {
		1 === t.touches.length &&
			(t.preventDefault(),
			(o = t.touches[0].pageX - a),
			(r = t.touches[0].pageY - l));
	}
	!(function () {
		var o, r;
		(o = document.createElement("div")),
			document.getElementById("canvas").appendChild(o),
			((t = new THREE.PerspectiveCamera(75, n / s, 1, 1e4)).position.z =
				option_hero_background_sphere_distance),
			(e = new THREE.Scene()),
			(i = new THREE.CanvasRenderer()).setPixelRatio(window.devicePixelRatio),
			i.setSize(n, s),
			o.appendChild(i.domElement),
			i.setClearColor(option_hero_background_sphere_background_color);
		for (
			var a = 2 * Math.PI,
				l = new THREE.SpriteCanvasMaterial({
					color: option_hero_background_sphere_dot_color,
					program: function (t) {
						t.beginPath(), t.arc(0, 0, 0.5, 0, a, !0), t.fill();
					},
				}),
				p = 0;
			p < 1e3;
			p++
		)
			((r = new THREE.Sprite(l)).position.x = 2 * Math.random() - 1),
				(r.position.y = 2 * Math.random() - 1),
				(r.position.z = 2 * Math.random() - 1),
				r.position.normalize(),
				r.position.multiplyScalar(10 * Math.random() + 450),
				r.scale.multiplyScalar(2),
				e.add(r);
		for (var p = 0; p < 300; p++) {
			var f = new THREE.Geometry(),
				g = new THREE.Vector3(
					2 * Math.random() - 1,
					2 * Math.random() - 1,
					2 * Math.random() - 1
				);
			g.normalize(), g.multiplyScalar(450), f.vertices.push(g);
			var m = g.clone();
			m.multiplyScalar(0.3 * Math.random() + 1), f.vertices.push(m);
			var v = new THREE.Line(
				f,
				new THREE.LineBasicMaterial({
					color: option_hero_background_sphere_line_color,
					opacity: Math.random(),
				})
			);
			e.add(v);
		}
		document.addEventListener("mousemove", c, !1),
			document.addEventListener("touchstart", d, !1),
			document.addEventListener("touchmove", h, !1),
			window.addEventListener("resize", u, !1);
	})(),
		(function n() {
			requestAnimationFrame(n);
			(t.position.x += 0.05 * (o - t.position.x)),
				(t.position.y += 0.05 * (200 - r - t.position.y)),
				t.lookAt(e.position),
				(e.rotation.y += option_hero_background_sphere_rotation_speed / 100),
				i.render(e, t);
		})();
}

function loadScript(t, e) {
	var i = document.createElement("script");
	(i.type = "text/javascript"),
		i.readyState
			? (i.onreadystatechange = function () {
					("loaded" != i.readyState && "complete" != i.readyState) ||
						((i.onreadystatechange = null), e());
			  })
			: (i.onload = function () {
					e();
			  }),
		(i.src = t),
		document.getElementsByTagName("head")[0].appendChild(i);
}

function demo_only() {
	let t = new URLSearchParams(window.location.search);
	t.has("bg") && (option_hero_background_mode = t.get("bg"));
}
switch (
	(carousel_setup(),
	lightbox_setup(),
	form_setup(),
	hover_interaction_setup(),
	$("#main .section").each(function () {
		($(this).height() < $(this).find(".container").height() ||
			$(window).width() < 600) &&
			$("body").addClass("classic-setup");
	}),
	(window.onload = function () {
		$("body").hasClass("classic-setup")
			? gsap.to([".loading-screen p", ".loading-screen .line"], {
					ease: "power3.in",
					duration: 0.6,
					opacity: 0,
					y: "100%",
					onComplete: function () {
						gsap.to(".loading-screen", {
							ease: "power3.inOut",
							duration: 1,
							opacity: 0,
							delay: 0.3,
							zIndex: -100,
							onComplete: function () {
								$("#main").addClass("loaded"),
									$("#main").removeClass("not-loaded");
							},
						});
					},
			  })
			: section_system();
	}),
	demo_only(),
	option_hero_background_mode)
) {
	case "color":
		colorBackground();
		break;
	case "image":
		imageBackground();
		break;
	case "slider":
		sliderBackground();
		break;
	case "video":
		videoBackground();
		break;
	case "mesh":
		meshBackground();
		break;
	case "space":
		spaceBackground();
		break;
	case "glitch":
		glitchBackground();
		break;
	case "field":
		fieldBackground();
		break;
	case "abstract":
		loadScript("assets/js/fss.min.js", function () {
			abstractBackground();
		});
		break;
	case "sphere":
		loadScript("assets/js/three.min.js", function () {
			sphereBackground();
		});
		break;
	default:
		alert("Error! No background is set or something went wrong"),
			console.log("Error! No background is set or something went wrong");
}
