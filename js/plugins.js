// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());


(function ($) {
	$.fn.bgLoaded = function (custom) {

		var self = this;

		// Default plugin settings
		var defaults = {
			afterLoaded: function () {
				this.addClass('bg-loaded');
			}
		};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);

		// Loop through element
		self.each(function () {
			var $this = $(this),
				bgImgs = $this.css('background-image').split(', ');
			$this.data('loaded-count', 0);
			$.each(bgImgs, function (key, value) {
				var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
				$('<img/>').attr('src', img).on('load', function () {
					$(this).remove(); // prevent memory leaks
					$this.data('loaded-count', $this.data('loaded-count') + 1);
					if ($this.data('loaded-count') >= bgImgs.length) {
						settings.afterLoaded.call($this);
					}
				});
			});

		});
	};
})(jQuery);

! function (t) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
	}
}(function () {
	return function t(e, i, n) {
		function o(r, a) {
			if (!i[r]) {
				if (!e[r]) {
					var l = "function" == typeof require && require;
					if (!a && l) return l(r, !0);
					if (s) return s(r, !0);
					var h = new Error("Cannot find module '" + r + "'");
					throw h.code = "MODULE_NOT_FOUND", h
				}
				var u = i[r] = {
					exports: {}
				};
				e[r][0].call(u.exports, function (t) {
					var i = e[r][1][t];
					return o(i || t)
				}, u, u.exports, t, e, i, n)
			}
			return i[r].exports
		}
		for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
		return o
	}({
		1: [function (t, e, i) {
			"use strict";

			function n(t) {
				if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
				return Object(t)
			}
			var o = Object.getOwnPropertySymbols,
				s = Object.prototype.hasOwnProperty,
				r = Object.prototype.propertyIsEnumerable;
			e.exports = function () {
				try {
					if (!Object.assign) return !1;
					var t = new String("abc");
					if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
					for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
					if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
							return e[t]
						}).join("")) return !1;
					var n = {};
					return "abcdefghijklmnopqrst".split("").forEach(function (t) {
						n[t] = t
					}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
				} catch (t) {
					return !1
				}
			}() ? Object.assign : function (t, e) {
				for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
					i = Object(arguments[h]);
					for (var u in i) s.call(i, u) && (l[u] = i[u]);
					if (o) {
						a = o(i);
						for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]])
					}
				}
				return l
			}
		}, {}],
		2: [function (t, e, i) {
			(function (t) {
				(function () {
					var i, n, o, s, r, a;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
						return performance.now()
					} : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
						return (i() - r) / 1e6
					}, n = t.hrtime, s = (i = function () {
						var t;
						return 1e9 * (t = n())[0] + t[1]
					})(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
						return Date.now() - o
					}, o = Date.now()) : (e.exports = function () {
						return (new Date).getTime() - o
					}, o = (new Date).getTime())
				}).call(this)
			}).call(this, t("_process"))
		}, {
			_process: 3
		}],
		3: [function (t, e, i) {
			function n() {
				throw new Error("setTimeout has not been defined")
			}

			function o() {
				throw new Error("clearTimeout has not been defined")
			}

			function s(t) {
				if (c === setTimeout) return setTimeout(t, 0);
				if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
				try {
					return c(t, 0)
				} catch (e) {
					try {
						return c.call(null, t, 0)
					} catch (e) {
						return c.call(this, t, 0)
					}
				}
			}

			function r(t) {
				if (d === clearTimeout) return clearTimeout(t);
				if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
				try {
					return d(t)
				} catch (e) {
					try {
						return d.call(null, t)
					} catch (e) {
						return d.call(this, t)
					}
				}
			}

			function a() {
				v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l())
			}

			function l() {
				if (!v) {
					var t = s(a);
					v = !0;
					for (var e = f.length; e;) {
						for (p = f, f = []; ++y < e;) p && p[y].run();
						y = -1, e = f.length
					}
					p = null, v = !1, r(t)
				}
			}

			function h(t, e) {
				this.fun = t, this.array = e
			}

			function u() {}
			var c, d, m = e.exports = {};
			! function () {
				try {
					c = "function" == typeof setTimeout ? setTimeout : n
				} catch (t) {
					c = n
				}
				try {
					d = "function" == typeof clearTimeout ? clearTimeout : o
				} catch (t) {
					d = o
				}
			}();
			var p, f = [],
				v = !1,
				y = -1;
			m.nextTick = function (t) {
				var e = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
				f.push(new h(t, e)), 1 !== f.length || v || s(l)
			}, h.prototype.run = function () {
				this.fun.apply(null, this.array)
			}, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
				return []
			}, m.binding = function (t) {
				throw new Error("process.binding is not supported")
			}, m.cwd = function () {
				return "/"
			}, m.chdir = function (t) {
				throw new Error("process.chdir is not supported")
			}, m.umask = function () {
				return 0
			}
		}, {}],
		4: [function (t, e, i) {
			(function (i) {
				for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
				if (!a || !l) {
					var u = 0,
						c = 0,
						d = [];
					a = function (t) {
						if (0 === d.length) {
							var e = n(),
								i = Math.max(0, 1e3 / 60 - (e - u));
							u = i + e, setTimeout(function () {
								var t = d.slice(0);
								d.length = 0;
								for (var e = 0; e < t.length; e++)
									if (!t[e].cancelled) try {
										t[e].callback(u)
									} catch (t) {
										setTimeout(function () {
											throw t
										}, 0)
									}
							}, Math.round(i))
						}
						return d.push({
							handle: ++c,
							callback: t,
							cancelled: !1
						}), c
					}, l = function (t) {
						for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0)
					}
				}
				e.exports = function (t) {
					return a.call(o, t)
				}, e.exports.cancel = function () {
					l.apply(o, arguments)
				}, e.exports.polyfill = function () {
					o.requestAnimationFrame = a, o.cancelAnimationFrame = l
				}
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"performance-now": 2
		}],
		5: [function (t, e, i) {
			"use strict";

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var o = function () {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var n = e[i];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
						}
					}
					return function (e, i, n) {
						return i && t(e.prototype, i), n && t(e, n), e
					}
				}(),
				s = t("raf"),
				r = t("object-assign"),
				a = {
					propertyCache: {},
					vendors: [null, ["-webkit-", "webkit"],
						["-moz-", "Moz"],
						["-o-", "O"],
						["-ms-", "ms"]
					],
					clamp: function (t, e, i) {
						return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
					},
					data: function (t, e) {
						return a.deserialize(t.getAttribute("data-" + e))
					},
					deserialize: function (t) {
						return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
					},
					camelCase: function (t) {
						return t.replace(/-+(.)?/g, function (t, e) {
							return e ? e.toUpperCase() : ""
						})
					},
					accelerate: function (t) {
						a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden")
					},
					transformSupport: function (t) {
						for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
							if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
								i = !0;
								break
							} switch (t) {
							case "2D":
								o = i;
								break;
							case "3D":
								if (i) {
									var u = document.body || document.createElement("body"),
										c = document.documentElement,
										d = c.style.overflow,
										m = !1;
									document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u))
								}
						}
						return o
					},
					css: function (t, e, i) {
						var n = a.propertyCache[e];
						if (!n)
							for (var o = 0, s = a.vendors.length; o < s; o++)
								if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
									a.propertyCache[e] = n;
									break
								} t.style[n] = i
					}
				},
				l = {
					relativeInput: !1,
					clipRelativeInput: !1,
					inputElement: null,
					hoverOnly: !1,
					calibrationThreshold: 100,
					calibrationDelay: 500,
					supportDelay: 500,
					calibrateX: !1,
					calibrateY: !0,
					invertX: !0,
					invertY: !0,
					limitX: !1,
					limitY: !1,
					scalarX: 10,
					scalarY: 10,
					frictionX: .1,
					frictionY: .1,
					originX: .5,
					originY: .5,
					pointerEvents: !1,
					precision: 1,
					onReady: null,
					selector: null
				},
				h = function () {
					function t(e, i) {
						n(this, t), this.element = e;
						var o = {
							calibrateX: a.data(this.element, "calibrate-x"),
							calibrateY: a.data(this.element, "calibrate-y"),
							invertX: a.data(this.element, "invert-x"),
							invertY: a.data(this.element, "invert-y"),
							limitX: a.data(this.element, "limit-x"),
							limitY: a.data(this.element, "limit-y"),
							scalarX: a.data(this.element, "scalar-x"),
							scalarY: a.data(this.element, "scalar-y"),
							frictionX: a.data(this.element, "friction-x"),
							frictionY: a.data(this.element, "friction-y"),
							originX: a.data(this.element, "origin-x"),
							originY: a.data(this.element, "origin-y"),
							pointerEvents: a.data(this.element, "pointer-events"),
							precision: a.data(this.element, "precision"),
							relativeInput: a.data(this.element, "relative-input"),
							clipRelativeInput: a.data(this.element, "clip-relative-input"),
							hoverOnly: a.data(this.element, "hover-only"),
							inputElement: document.querySelector(a.data(this.element, "input-element")),
							selector: a.data(this.element, "selector")
						};
						for (var s in o) null === o[s] && delete o[s];
						r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
					}
					return o(t, [{
						key: "initialise",
						value: function () {
							void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
						}
					}, {
						key: "doReadyCallback",
						value: function () {
							this.onReady && this.onReady()
						}
					}, {
						key: "updateLayers",
						value: function () {
							this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
							for (var t = 0; t < this.layers.length; t++) {
								var e = this.layers[t];
								this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
								var i = a.data(e, "depth") || 0;
								this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
							}
						}
					}, {
						key: "updateDimensions",
						value: function () {
							this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
						}
					}, {
						key: "updateBounds",
						value: function () {
							this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
						}
					}, {
						key: "queueCalibration",
						value: function (t) {
							clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
						}
					}, {
						key: "enable",
						value: function () {
							this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame))
						}
					}, {
						key: "disable",
						value: function () {
							this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf))
						}
					}, {
						key: "calibrate",
						value: function (t, e) {
							this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
						}
					}, {
						key: "invert",
						value: function (t, e) {
							this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
						}
					}, {
						key: "friction",
						value: function (t, e) {
							this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
						}
					}, {
						key: "scalar",
						value: function (t, e) {
							this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
						}
					}, {
						key: "limit",
						value: function (t, e) {
							this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
						}
					}, {
						key: "origin",
						value: function (t, e) {
							this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
						}
					}, {
						key: "setInputElement",
						value: function (t) {
							this.inputElement = t, this.updateDimensions()
						}
					}, {
						key: "setPosition",
						value: function (t, e, i) {
							e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
						}
					}, {
						key: "onOrientationTimer",
						value: function () {
							this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
						}
					}, {
						key: "onMotionTimer",
						value: function () {
							this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
						}
					}, {
						key: "onCalibrationTimer",
						value: function () {
							this.calibrationFlag = !0
						}
					}, {
						key: "onWindowResize",
						value: function () {
							this.updateDimensions()
						}
					}, {
						key: "onAnimationFrame",
						value: function () {
							this.updateBounds();
							var t = this.inputX - this.calibrationX,
								e = this.inputY - this.calibrationY;
							(Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
							for (var i = 0; i < this.layers.length; i++) {
								var n = this.layers[i],
									o = this.depthsX[i],
									r = this.depthsY[i],
									l = this.velocityX * (o * (this.invertX ? -1 : 1)),
									h = this.velocityY * (r * (this.invertY ? -1 : 1));
								this.setPosition(n, l, h)
							}
							this.raf = s(this.onAnimationFrame)
						}
					}, {
						key: "rotate",
						value: function (t, e) {
							var i = (t || 0) / 30,
								n = (e || 0) / 30,
								o = this.windowHeight > this.windowWidth;
							this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
						}
					}, {
						key: "onDeviceOrientation",
						value: function (t) {
							var e = t.beta,
								i = t.gamma;
							null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
						}
					}, {
						key: "onDeviceMotion",
						value: function (t) {
							var e = t.rotationRate.beta,
								i = t.rotationRate.gamma;
							null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
						}
					}, {
						key: "onMouseMove",
						value: function (t) {
							var e = t.clientX,
								i = t.clientY;
							if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
							this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
						}
					}, {
						key: "destroy",
						value: function () {
							this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
							for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
							delete this.element, delete this.layers
						}
					}, {
						key: "version",
						value: function () {
							return "3.1.0"
						}
					}]), t
				}();
			e.exports = h
		}, {
			"object-assign": 1,
			raf: 4
		}]
	}, {}, [5])(5)
});


!function(t,e){"object"==typeof exports?module.exports=e(window,document):t.SimpleScrollbar=e(window,document)}(this,function(t,e){function s(t){Object.prototype.hasOwnProperty.call(t,"data-simple-scrollbar")||Object.defineProperty(t,"data-simple-scrollbar",{value:new o(t)})}function i(t,s){function i(t){var e=t.pageY-a;a=t.pageY,n(function(){s.el.scrollTop+=e/s.scrollRatio})}function r(){t.classList.remove("ss-grabbed"),e.body.classList.remove("ss-grabbed"),e.removeEventListener("mousemove",i),e.removeEventListener("mouseup",r)}var a;t.addEventListener("mousedown",function(s){return a=s.pageY,t.classList.add("ss-grabbed"),e.body.classList.add("ss-grabbed"),e.addEventListener("mousemove",i),e.addEventListener("mouseup",r),!1})}function r(t){for(this.target=t,this.direction=window.getComputedStyle(this.target).direction,this.bar='<div class="ss-scroll">',this.wrapper=e.createElement("div"),this.wrapper.setAttribute("class","ss-wrapper"),this.el=e.createElement("div"),this.el.setAttribute("class","ss-content"),"rtl"===this.direction&&this.el.classList.add("rtl"),this.wrapper.appendChild(this.el);this.target.firstChild;)this.el.appendChild(this.target.firstChild);this.target.appendChild(this.wrapper),this.target.insertAdjacentHTML("beforeend",this.bar),this.bar=this.target.lastChild,i(this.bar,this),this.moveBar(),this.el.addEventListener("scroll",this.moveBar.bind(this)),this.el.addEventListener("mouseenter",this.moveBar.bind(this)),this.target.classList.add("ss-container");var s=window.getComputedStyle(t);"0px"===s.height&&"0px"!==s["max-height"]&&(t.style.height=s["max-height"])}function a(){for(var t=e.querySelectorAll("*[ss-container]"),i=0;i<t.length;i++)s(t[i])}var n=t.requestAnimationFrame||t.setImmediate||function(t){return setTimeout(t,0)};r.prototype={moveBar:function(t){var e=this.el.scrollHeight,s=this.el.clientHeight,i=this;this.scrollRatio=s/e;var r="rtl"===i.direction,a=r?i.target.clientWidth-i.bar.clientWidth+18:-1*(i.target.clientWidth-i.bar.clientWidth);n(function(){i.scrollRatio>=1?i.bar.classList.add("ss-hidden"):(i.bar.classList.remove("ss-hidden"),i.bar.style.cssText="height:"+Math.max(100*i.scrollRatio,10)+"%; top:"+i.el.scrollTop/e*100+"%;right:"+a+"px;")})}},e.addEventListener("DOMContentLoaded",a),r.initEl=s,r.initAll=a;var o=r;return o});

/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.2.1
*/
"use strict";function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,o=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){a=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw s}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var SimpleLightbox=function(){function n(t,e){var i=this;_classCallCheck(this,n),_defineProperty(this,"a",{sourceAttr:"href",overlay:!0,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1}),_defineProperty(this,"b",void 0),_defineProperty(this,"c",!1),_defineProperty(this,"d","ontouchstart"in window),_defineProperty(this,"e",void 0),_defineProperty(this,"f","pushState"in history),_defineProperty(this,"g",!1),_defineProperty(this,"h",!1),_defineProperty(this,"i",!1),_defineProperty(this,"j",!1),_defineProperty(this,"k",!1),_defineProperty(this,"l",!1),_defineProperty(this,"m",null),_defineProperty(this,"n",void 0),_defineProperty(this,"o","simplelightbox"),_defineProperty(this,"p",{}),_defineProperty(this,"q",[]),_defineProperty(this,"r",0),_defineProperty(this,"s",0),_defineProperty(this,"t",null),_defineProperty(this,"u",0),_defineProperty(this,"v",{a:0,b:0,c:0,d:0,e:0,f:0,g:!1,h:0,i:!1,j:0,k:0,l:0,m:0,n:0,o:0,p:!1,q:0,r:0,s:0,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:!1,N:0}),this.options=Object.assign(this.a,e),"string"==typeof t?(this.t=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&0<t.length?Array.from(t):[t],this.relatedElements=[],this.b=this.calculateTransitionPrefix(),this.c=!1!==this.b,this.e=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.createDomNodes(),this.options.close&&this.p.a.appendChild(this.p.b),this.options.nav&&this.p.a.appendChild(this.p.c),this.options.spinner&&this.p.a.appendChild(this.p.d),this.addEventListener(this.elements,"click."+this.o,function(t){if(i.isValidLink(t.currentTarget)){if(t.preventDefault(),i.h)return!1;i.r=i.elements.indexOf(t.currentTarget),i.openImage(t.currentTarget)}}),this.options.docClose&&this.addEventListener(this.p.e,["click."+this.o,"touchstart."+this.o],function(t){i.g&&i.close()}),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.o,function(t){t.target.classList.contains("sl-overlay")&&t.preventDefault()}),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.o,this.throttle(function(t){if(i.v.a=0,i.h&&"Escape"===t.key)return i.n.setAttribute("src",""),i.h=!1,i.close();i.g&&(t.preventDefault(),"Escape"===t.key&&i.close(),!i.h&&-1<["ArrowLeft","ArrowRight"].indexOf(t.key)&&i.loadImage("ArrowRight"===t.key?1:-1))},this.options.throttleInterval)),this.addEvents()}return _createClass(n,[{key:"createDomNodes",value:function(){this.p.e=document.createElement("div"),this.p.e.classList.add("sl-overlay"),this.p.e.dataset.opacityTarget=".7",this.p.b=document.createElement("button"),this.p.b.classList.add("sl-close"),this.p.b.innerHTML=this.options.closeText,this.p.d=document.createElement("div"),this.p.d.classList.add("sl-spinner"),this.p.d.innerHTML="<div></div>",this.p.c=document.createElement("div"),this.p.c.classList.add("sl-navigation"),this.p.c.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.p.f=document.createElement("div"),this.p.f.classList.add("sl-counter"),this.p.f.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.p.g=document.createElement("div"),this.p.g.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass&&this.p.g.classList.add(this.options.captionClass),this.p.h=document.createElement("div"),this.p.h.classList.add("sl-image"),this.p.a=document.createElement("div"),this.p.a.classList.add("sl-wrapper"),this.options.className&&this.p.a.classList.add(this.options.className),this.options.rtl&&this.p.a.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(t,e){var i;return function(){i||(t.apply(this,arguments),i=!0,setTimeout(function(){return i=!1},e))}}},{key:"isValidLink",value:function(t){return!this.options.fileExt||"pathname"in t&&new RegExp("("+this.options.fileExt+")$","i").test(t.pathname)}},{key:"calculateTransitionPrefix",value:function(){var t=(document.body||document.documentElement).style;return"transition"in t?"":"WebkitTransition"in t?"-webkit-":"MozTransition"in t?"-moz-":"OTransition"in t&&"-o"}},{key:"toggleScrollbar",value:function(t){var e=0;if("hide"===t){var i=window.innerWidth;if(!i){var n=document.documentElement.getBoundingClientRect();i=n.right-Math.abs(n.left)}if(document.body.clientWidth<i){var s=document.createElement("div"),o=parseInt(document.body.style.paddingRight||0,10);s.classList.add("sl-scrollbar-measure"),document.body.appendChild(s),e=s.offsetWidth-s.clientWidth,document.body.removeChild(s),document.body.dataset.originalPaddingRight=o,0<e&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=o+e+"px")}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight;return e}},{key:"close",value:function(){var t=this;if(!this.g||this.h||this.i)return!1;this.i=!0;var e=this.relatedElements[this.nIndex];for(var i in e.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.l=!1,this.k||this.resetHash()),this.fadeOut(document.querySelectorAll(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),300,function(){t.options.disableScroll&&t.toggleScrollbar("show"),t.options.htmlClass&&""!==t.options.htmlClass&&document.querySelector("html").classList.remove(t.options.htmlClass),document.body.removeChild(t.p.a),document.body.removeChild(t.p.e),t.p.i=null,e.dispatchEvent(new Event("closed.simplelightbox")),t.i=!1}),this.n=null,this.g=!1,this.h=!1,this.v)this.v[i]=0;this.v.g=!1,this.v.i=!1,this.v.p=!1,this.v.w=this.minMax(1,1,this.options.maxZoom),this.v.M=!1}},{key:"preload",value:function(){var i=this,n=this.nIndex,t=this.relatedElements.length,e=n+1<0?t-1:t-1<=n+1?0:n+1,s=n-1<0?t-1:t-1<=n-1?0:n-1,o=new Image,a=new Image;o.addEventListener("load",function(t){var e=t.target.getAttribute("src");-1===i.q.indexOf(e)&&i.q.push(e),i.relatedElements[n].dispatchEvent(new Event("nextImageLoaded."+i.o))}),o.setAttribute("src",this.relatedElements[e].getAttribute(this.options.sourceAttr)),a.addEventListener("load",function(t){var e=t.target.getAttribute("src");-1===i.q.indexOf(e)&&i.q.push(e),i.relatedElements[n].dispatchEvent(new Event("prevImageLoaded."+i.o))}),a.setAttribute("src",this.relatedElements[s].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(t){var e=this,i=t;this.options.rtl&&(t=-t),this.relatedElements[this.nIndex].dispatchEvent(new Event("change."+this.o)),this.relatedElements[this.nIndex].dispatchEvent(new Event((1===t?"next":"prev")+"."+this.o));var n=this.nIndex+t;if(this.h||(n<0||n>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.nIndex=n<0?this.relatedElements.length-1:n>this.relatedElements.length-1?0:n,this.p.f.querySelector(".sl-current").innerHTML=this.nIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*i-this.v.a+"px"),this.fadeOut(this.p.h,300,function(){e.h=!0,setTimeout(function(){var t=e.relatedElements[e.nIndex];e.n.setAttribute("src",t.getAttribute(e.options.sourceAttr)),-1===e.q.indexOf(t.getAttribute(e.options.sourceAttr))&&e.show(e.p.d),e.p.h.contains(e.p.g)&&e.p.h.removeChild(e.p.g),e.adjustImage(i),e.options.preloading&&e.preload()},100)})}},{key:"adjustImage",value:function(a){var r=this;if(!this.n)return!1;var t=new Image,l=window.innerWidth*this.options.widthRatio,h=window.innerHeight*this.options.heightRatio;t.setAttribute("src",this.n.getAttribute("src")),this.n.dataset.scale=1,this.n.dataset.translateX=0,this.n.dataset.translateY=0,this.zoomPanElement(0,0,1),t.addEventListener("error",function(t){r.relatedElements[r.nIndex].dispatchEvent(new Event("error."+r.o)),r.h=!1,r.g=!1,r.p.d.style.display="none";var e=1===a||-1===a;if(r.r===r.nIndex&&e)return r.close();r.options.alertError&&alert(r.options.alertErrorMessage),r.loadImage(e?a:1)}),t.addEventListener("load",function(t){void 0!==a&&(r.relatedElements[r.nIndex].dispatchEvent(new Event("changed."+r.o)),r.relatedElements[r.nIndex].dispatchEvent(new Event((1===a?"nextDone":"prevDone")+"."+r.o))),r.options.history&&r.updateURL(),-1===r.q.indexOf(r.n.getAttribute("src"))&&r.q.push(r.n.getAttribute("src"));var e=t.target.width,i=t.target.height;if(r.options.scaleImageToRatio||l<e||h<i){var n=l/h<e/i?e/l:i/h;e/=n,i/=n}r.p.h.style.top=(window.innerHeight-i)/2+"px",r.p.h.style.left=(window.innerWidth-e-r.u)/2+"px",r.p.h.style.width=e+"px",r.p.h.style.height=i+"px",r.p.d.style.display="none",r.fadeIn(r.n,300),r.g=!0;var s,o="self"===r.options.captionSelector?r.relatedElements[r.nIndex]:r.relatedElements[r.nIndex].querySelector(r.options.captionSelector);r.options.captions&&o&&(s="data"===r.options.captionType?o.dataset[r.options.captionsData]:"text"===r.options.captionType?o.innerHTML:o.getAttribute(r.options.captionsData)),r.options.loop||(0===r.nIndex&&r.hide(r.p.c.querySelector(".sl-prev")),r.nIndex>=r.relatedElements.length-1&&r.hide(r.p.c.querySelector(".sl-next")),0<r.nIndex&&r.show(r.p.c.querySelector(".sl-prev")),r.nIndex<r.relatedElements.length-1&&r.show(r.p.c.querySelector(".sl-next"))),1===r.relatedElements.length?r.hide(r.p.c.querySelectorAll(".sl-prev, .sl-next")):r.show(r.p.c.querySelectorAll(".sl-prev, .sl-next")),1===a||-1===a?(r.options.animationSlide&&(r.slide(0,100*a+"px"),setTimeout(function(){r.slide(r.options.animationSpeed/1e3,"0px")},50)),r.fadeIn(r.p.h,300,function(){r.h=!1,r.setCaption(s,e)})):(r.h=!1,r.setCaption(s,e)),r.options.additionalHtml&&!r.p.i&&(r.p.i=document.createElement("div"),r.p.i.classList.add("sl-additional-html"),r.p.i.innerHTML=r.options.additionalHtml,r.p.h.appendChild(r.p.i))})}},{key:"zoomPanElement",value:function(t,e,i){this.n.style[this.b+"transform"]="translate("+t+","+e+") scale("+i+")"}},{key:"minMax",value:function(t,e,i){return t<e?e:i<t?i:t}},{key:"setZoomData",value:function(t,e,i){this.n.dataset.scale=t,this.n.dataset.translateX=e,this.n.dataset.translateY=i}},{key:"hashchangeHandler",value:function(){this.g&&this.hash===this.e&&(this.k=!0,this.close())}},{key:"addEvents",value:function(){var i=this;this.addEventListener(window,"resize."+this.o,function(t){i.g&&i.adjustImage()}),this.addEventListener(this.p.b,["click."+this.o,"touchstart."+this.o],this.close.bind(this)),this.options.history&&setTimeout(function(){i.addEventListener(window,"hashchange."+i.o,function(t){i.g&&i.hashchangeHandler()})},40),this.addEventListener(this.p.c.getElementsByTagName("button"),"click."+this.o,function(t){if(!t.currentTarget.tagName.match(/button/i))return!0;t.preventDefault(),i.v.a=0,i.loadImage(t.currentTarget.classList.contains("sl-next")?1:-1)}),this.addEventListener(this.p.h,["touchstart."+this.o,"mousedown."+this.o],function(t){if("A"===t.target.tagName&&"touchstart"===t.type)return!0;if("mousedown"===t.type)i.v.s=t.clientX,i.v.t=t.clientY,i.v.j=i.getDimensions(i.p.h).height,i.v.k=i.getDimensions(i.p.h).width,i.v.n=i.getDimensions(i.n).height,i.v.o=i.getDimensions(i.n).width,i.v.l=i.p.h.offsetLeft,i.v.m=i.p.h.offsetTop,i.v.q=parseFloat(i.n.dataset.translateX),i.v.r=parseFloat(i.n.dataset.translateY),i.v.p=!0;else{if(i.v.L=t.touches.length,i.v.s=t.touches[0].clientX,i.v.t=t.touches[0].clientY,i.v.j=i.getDimensions(i.p.h).height,i.v.k=i.getDimensions(i.p.h).width,i.v.n=i.getDimensions(i.n).height,i.v.o=i.getDimensions(i.n).width,i.v.l=i.p.h.offsetLeft,i.v.m=i.p.h.offsetTop,1===i.v.L){if(i.v.M)return i.n.classList.add("sl-transition"),i.v.i?(i.v.w=1,i.setZoomData(i.v.w,0,0),i.zoomPanElement("0px","0px",i.v.w),i.v.i=!1):(i.v.w=i.options.doubleTapZoom,i.setZoomData(i.v.w,0,0),i.zoomPanElement("0px","0px",i.v.w),i.p.g.style.opacity||"none"===i.p.g.style.display||i.fadeOut(i.p.g,200),i.v.i=!0),setTimeout(function(){i.n&&i.n.classList.remove("sl-transition")},200),!1;i.v.M=!0,setTimeout(function(){i.v.M=!1},300),i.v.q=parseFloat(i.n.dataset.translateX),i.v.r=parseFloat(i.n.dataset.translateY)}else 2===i.v.L&&(i.v.s2=t.touches[1].clientX,i.v.t2=t.touches[1].clientY,i.v.q=parseFloat(i.n.dataset.translateX),i.v.r=parseFloat(i.n.dataset.translateY),i.v.F=(i.v.s+i.v.s2)/2,i.v.G=(i.v.t+i.v.t2)/2,i.v.x=Math.sqrt((i.v.s-i.v.s2)*(i.v.s-i.v.s2)+(i.v.t-i.v.t2)*(i.v.t-i.v.t2)));i.v.p=!0}return!!i.v.g||(i.c&&(i.v.h=parseInt(i.p.h.style.left,10)),i.v.g=!0,i.v.a=0,i.v.b=0,i.v.c=t.pageX||t.touches[0].pageX,i.v.e=t.pageY||t.touches[0].pageY,!1)}),this.addEventListener(this.p.h,["touchmove."+this.o,"mousemove."+this.o,"MSPointerMove"],function(t){if(!i.v.g)return!0;if(t.preventDefault(),"touchmove"===t.type){if(!1===i.v.p)return!1;i.v.y=t.touches[0].clientX,i.v.z=t.touches[0].clientY,i.v.L=t.touches.length,i.v.N++,1<i.v.L?(i.v.y2=t.touches[1].clientX,i.v.z2=t.touches[1].clientY,i.v.K=Math.sqrt((i.v.y-i.v.y2)*(i.v.y-i.v.y2)+(i.v.z-i.v.z2)*(i.v.z-i.v.z2)),null===i.v.x&&(i.v.x=i.v.K),1<=Math.abs(i.v.x-i.v.K)&&(i.v.E=i.minMax(i.v.K/i.v.x*i.v.w,1,i.options.maxZoom),i.v.H=(i.v.o*i.v.E-i.v.k)/2,i.v.I=(i.v.n*i.v.E-i.v.j)/2,i.v.J=i.v.E-i.v.w,i.v.C=i.v.o*i.v.E<=i.v.k?0:i.minMax(i.v.q-(i.v.F-i.v.l-i.v.k/2-i.v.q)/(i.v.E-i.v.J)*i.v.J,-1*i.v.H,i.v.H),i.v.D=i.v.n*i.v.E<=i.v.j?0:i.minMax(i.v.r-(i.v.G-i.v.m-i.v.j/2-i.v.r)/(i.v.E-i.v.J)*i.v.J,-1*i.v.I,i.v.I),i.zoomPanElement(i.v.C+"px",i.v.D+"px",i.v.E),1<i.v.E&&(i.v.i=!0,i.p.g.style.opacity||"none"===i.p.g.style.display||i.fadeOut(i.p.g,200)),i.v.x=i.v.K,i.v.w=i.v.E,i.v.q=i.v.C,i.v.r=i.v.D)):(i.v.E=i.v.w,i.v.H=(i.v.o*i.v.E-i.v.k)/2,i.v.I=(i.v.n*i.v.E-i.v.j)/2,i.v.C=i.v.o*i.v.E<=i.v.k?0:i.minMax(i.v.y-(i.v.s-i.v.q),-1*i.v.H,i.v.H),i.v.D=i.v.n*i.v.E<=i.v.j?0:i.minMax(i.v.z-(i.v.t-i.v.r),-1*i.v.I,i.v.I),Math.abs(i.v.C)===Math.abs(i.v.H)&&(i.v.q=i.v.C,i.v.s=i.v.y),Math.abs(i.v.D)===Math.abs(i.v.I)&&(i.v.r=i.v.D,i.v.t=i.v.z),i.setZoomData(i.v.w,i.v.C,i.v.D),i.zoomPanElement(i.v.C+"px",i.v.D+"px",i.v.E))}if("mousemove"===t.type&&i.v.g){if("touchmove"==t.type)return!0;if(!1===i.v.p)return!1;i.v.y=t.clientX,i.v.z=t.clientY,i.v.E=i.v.w,i.v.H=(i.v.o*i.v.E-i.v.k)/2,i.v.I=(i.v.n*i.v.E-i.v.j)/2,i.v.C=i.v.o*i.v.E<=i.v.k?0:i.minMax(i.v.y-(i.v.s-i.v.q),-1*i.v.H,i.v.H),i.v.D=i.v.n*i.v.E<=i.v.j?0:i.minMax(i.v.z-(i.v.t-i.v.r),-1*i.v.I,i.v.I),Math.abs(i.v.C)===Math.abs(i.v.H)&&(i.v.q=i.v.C,i.v.s=i.v.y),Math.abs(i.v.D)===Math.abs(i.v.I)&&(i.v.r=i.v.D,i.v.t=i.v.z),i.setZoomData(i.v.w,i.v.C,i.v.D),i.zoomPanElement(i.v.C+"px",i.v.D+"px",i.v.E)}i.v.i||(i.v.d=t.pageX||t.touches[0].pageX,i.v.f=t.pageY||t.touches[0].pageY,i.v.a=i.v.c-i.v.d,i.v.b=i.v.e-i.v.f,i.options.animationSlide&&i.slide(0,-i.v.a+"px"))}),this.addEventListener(this.p.h,["touchend."+this.o,"mouseup."+this.o,"touchcancel."+this.o,"mouseleave."+this.o,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],function(t){if(i.d&&"touchend"===t.type&&(i.v.L=t.touches.length,0===i.v.L?(i.n&&i.setZoomData(i.v.w,i.v.C,i.v.D),1===i.v.w&&(i.v.i=!1,"none"===i.p.g.style.display&&i.fadeIn(i.p.g,200)),i.v.x=null,i.v.p=!1):1===i.v.L?(i.v.s=t.touches[0].clientX,i.v.t=t.touches[0].clientY):1<i.v.L&&(i.v.x=null)),i.v.g){var e=!(i.v.g=!1);i.options.loop||(0===i.nIndex&&i.v.a<0&&(e=!1),i.nIndex>=i.relatedElements.length-1&&0<i.v.a&&(e=!1)),Math.abs(i.v.a)>i.options.swipeTolerance&&e?i.loadImage(0<i.v.a?1:-1):i.options.animationSlide&&i.slide(i.options.animationSpeed/1e3,"0px"),i.options.swipeClose&&50<Math.abs(i.v.b)&&Math.abs(i.v.a)<i.options.swipeTolerance&&i.close()}}),this.addEventListener(this.p.h,["dblclick"],function(t){if(!i.d)return i.v.s=t.clientX,i.v.t=t.clientY,i.v.j=i.getDimensions(i.p.h).height,i.v.k=i.getDimensions(i.p.h).width,i.v.n=i.getDimensions(i.n).height,i.v.o=i.getDimensions(i.n).width,i.v.l=i.p.h.offsetLeft,i.v.m=i.p.h.offsetTop,i.n.classList.add("sl-transition"),i.v.i?(i.v.w=1,i.setZoomData(i.v.w,0,0),i.zoomPanElement("0px","0px",i.v.w),i.v.i=!1,"none"===i.p.g.style.display&&i.fadeIn(i.p.g,200)):(i.v.w=i.options.doubleTapZoom,i.setZoomData(i.v.w,0,0),i.zoomPanElement("0px","0px",i.v.w),i.p.g.style.opacity||"none"===i.p.g.style.display||i.fadeOut(i.p.g,200),i.v.i=!0),setTimeout(function(){i.n&&i.n.classList.remove("sl-transition")},200),!(i.v.p=!0)})}},{key:"getDimensions",value:function(t){var e=window.getComputedStyle(t),i=t.offsetHeight,n=t.offsetWidth,s=parseFloat(e.borderTopWidth);return{height:i-parseFloat(e.borderBottomWidth)-s-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom),width:n-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)}}},{key:"updateHash",value:function(){var t="pid="+(this.nIndex+1),e=window.location.href.split("#")[0]+"#"+t;this.k=!1,this.f?window.history[this.l?"replaceState":"pushState"]("",document.title,e):this.l?window.location.replace(e):window.location.hash=t,this.l||(this.j=!0),this.l=!0}},{key:"resetHash",value:function(){this.k=!0,this.j?history.back():this.f?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.m)}},{key:"updateURL",value:function(){clearTimeout(this.m),this.l?this.m=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(t,e){var i=this;this.options.captions&&t&&""!==t&&void 0!==t&&(this.hide(this.p.g),this.p.g.style.width=e+"px",this.p.g.innerHTML=t,this.p.h.appendChild(this.p.g),setTimeout(function(){i.fadeIn(i.p.g,300)},this.options.captionDelay))}},{key:"slide",value:function(t,e){if(!this.c)return this.p.h.style.left=e;this.p.h.style[this.b+"transform"]="translateX("+e+")",this.p.h.style[this.b+"transition"]=this.b+"transform "+t+"s linear"}},{key:"getRelated",value:function(e){return e&&!1!==e&&"nofollow"!==e?Array.from(this.elements).filter(function(t){return t.getAttribute("rel")===e}):this.elements}},{key:"openImage",value:function(t){var e=this;t.dispatchEvent(new Event("show."+this.o)),this.options.disableScroll&&(this.u=this.toggleScrollbar("hide")),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.p.a),this.p.a.appendChild(this.p.h),this.options.overlay&&document.body.appendChild(this.p.e),this.relatedElements=this.getRelated(t.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.p.a.contains(this.p.f)?this.p.a.removeChild(this.p.f):1<this.relatedElements.length&&!this.p.a.contains(this.p.f)&&this.p.a.appendChild(this.p.f)),this.h=!0,this.nIndex=this.relatedElements.indexOf(t);var i=t.getAttribute(this.options.sourceAttr);this.n=document.createElement("img"),this.n.style.display="none",this.n.setAttribute("src",i),this.n.dataset.scale=1,this.n.dataset.translateX=0,this.n.dataset.translateY=0,-1===this.q.indexOf(i)&&this.q.push(i),this.p.h.innerHTML="",this.p.h.setAttribute("style",""),this.p.h.appendChild(this.n),this.fadeIn(this.p.e,300),this.fadeIn([this.p.f,this.p.c,this.p.b],300),this.show(this.p.d),this.p.f.querySelector(".sl-current").innerHTML=this.nIndex+1,this.p.f.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout(function(){t.dispatchEvent(new Event("shown."+e.o))},this.options.animationSpeed)}},{key:"addEventListener",value:function(t,e,i,n){t=this.wrap(t),e=this.wrap(e);var s,o=_createForOfIteratorHelper(t);try{for(o.s();!(s=o.n()).done;){var a=s.value;a.namespaces||(a.namespaces={});var r,l=_createForOfIteratorHelper(e);try{for(l.s();!(r=l.n()).done;){var h=r.value,v=n||!1;a.namespaces[h]=i,a.addEventListener(h.split(".")[0],i,v)}}catch(t){l.e(t)}finally{l.f()}}}catch(t){o.e(t)}finally{o.f()}}},{key:"removeEventListener",value:function(t,e){t=this.wrap(t),e=this.wrap(e);var i,n=_createForOfIteratorHelper(t);try{for(n.s();!(i=n.n()).done;){var s,o=i.value,a=_createForOfIteratorHelper(e);try{for(a.s();!(s=a.n()).done;){var r=s.value;o.removeEventListener(r.split(".")[0],o.namespaces[r]),delete o.namespaces[r]}}catch(t){a.e(t)}finally{a.f()}}}catch(t){n.e(t)}finally{n.f()}}},{key:"fadeOut",value:function(r,t,l){var e,h=this,i=_createForOfIteratorHelper(r=this.wrap(r));try{for(i.s();!(e=i.n()).done;){e.value.style.opacity=1}}catch(t){i.e(t)}finally{i.f()}var v=16.66666/(t||300);!function t(){var e=parseFloat(r[0].style.opacity);if((e-=v)<0){var i,n=_createForOfIteratorHelper(r);try{for(n.s();!(i=n.n()).done;){var s=i.value;s.style.display="none",s.style.opacity=""}}catch(t){n.e(t)}finally{n.f()}l&&l.call(h,r)}else{var o,a=_createForOfIteratorHelper(r);try{for(a.s();!(o=a.n()).done;){o.value.style.opacity=e}}catch(t){a.e(t)}finally{a.f()}requestAnimationFrame(t)}}()}},{key:"fadeIn",value:function(a,t,r,e){var i,l=this,n=_createForOfIteratorHelper(a=this.wrap(a));try{for(n.s();!(i=n.n()).done;){var s=i.value;s.style.opacity=0,s.style.display=e||"block"}}catch(t){n.e(t)}finally{n.f()}var h=parseFloat(a[0].dataset.opacityTarget||1),v=16.66666*h/(t||300);!function t(){var e=parseFloat(a[0].style.opacity);if((e+=v)>h){var i,n=_createForOfIteratorHelper(a);try{for(n.s();!(i=n.n()).done;){i.value.style.opacity=""}}catch(t){n.e(t)}finally{n.f()}r&&r.call(l,a)}else{var s,o=_createForOfIteratorHelper(a);try{for(o.s();!(s=o.n()).done;){s.value.style.opacity=e}}catch(t){o.e(t)}finally{o.f()}requestAnimationFrame(t)}}()}},{key:"hide",value:function(t){var e,i=_createForOfIteratorHelper(t=this.wrap(t));try{for(i.s();!(e=i.n()).done;){var n=e.value;n.dataset.initialDisplay=n.style.display,n.style.display="none"}}catch(t){i.e(t)}finally{i.f()}}},{key:"show",value:function(t,e){var i,n=_createForOfIteratorHelper(t=this.wrap(t));try{for(n.s();!(i=n.n()).done;){var s=i.value;s.style.display=s.dataset.initialDisplay||e||"block"}}catch(t){n.e(t)}finally{n.f()}}},{key:"wrap",value:function(t){return"function"==typeof t[Symbol.iterator]&&"string"!=typeof t?t:[t]}},{key:"on",value:function(t,e){t=this.wrap(t);var i,n=_createForOfIteratorHelper(this.elements);try{for(n.s();!(i=n.n()).done;){var s=i.value;s.fullyNamespacedEvents||(s.fullyNamespacedEvents={});var o,a=_createForOfIteratorHelper(t);try{for(a.s();!(o=a.n()).done;){var r=o.value;s.fullyNamespacedEvents[r]=e,s.addEventListener(r,e)}}catch(t){a.e(t)}finally{a.f()}}}catch(t){n.e(t)}finally{n.f()}return this}},{key:"off",value:function(t){t=this.wrap(t);var e,i=_createForOfIteratorHelper(this.elements);try{for(i.s();!(e=i.n()).done;){var n,s=e.value,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;void 0!==s.fullyNamespacedEvents&&a in s.fullyNamespacedEvents&&s.removeEventListener(a,s.fullyNamespacedEvents[a])}}catch(t){o.e(t)}finally{o.f()}}}catch(t){i.e(t)}finally{i.f()}return this}},{key:"open",value:function(t){t=t||this.elements[0],"undefined"!=typeof jQuery&&t instanceof jQuery&&(t=t.get(0)),this.r=this.elements.indexOf(t),-1<this.r&&this.openImage(t)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"destroy",value:function(){this.off(["close."+this.o,"closed."+this.o,"nextImageLoaded."+this.o,"prevImageLoaded."+this.o,"change."+this.o,"nextDone."+this.o,"prevDone."+this.o,"error."+this.o,"changed."+this.o,"next."+this.o,"prev."+this.o,"show."+this.o,"shown."+this.o]),this.removeEventListener(this.elements,"click."+this.o),this.removeEventListener(document.body,"contextmenu."+this.o),this.removeEventListener(document.body,"keyup."+this.o),this.removeEventListener(this.p.c.getElementsByTagName("button"),"click."+this.o),this.removeEventListener(this.p.b,"click."+this.o),this.removeEventListener(window,"resize."+this.o),this.removeEventListener(window,"hashchange."+this.o),this.close(),this.g&&(document.body.removeChild(this.p.a),document.body.removeChild(this.p.e)),this.elements=null}},{key:"refresh",value:function(){if(!this.t)throw"refreshing only works when you initialize using a selector!";var t=this.options,e=this.t;return this.destroy(),this.constructor(e,t),this}},{key:"hash",get:function(){return window.location.hash.substring(1)}}]),n}();!function(t){t.fn.simpleLightbox=function(t){return new SimpleLightbox(this.get(),t)}}(jQuery,(window,document));


/*!
* jQueryTouch v0.0.6
* https://github.com/a-fung/jQueryTouch
*
* Copyright 2012 Man Kwan Liu
* Released under the Apache License Version 2.0
* http://www.apache.org/licenses/
*
* Date: Wed Oct 2012 23:14:09 GMT-0700 (Pacific Daylight Time)
*/
(function ($) {
    // initiate touch handler on jQuery objects
    $.fn.touchInit = function (options) {
        if (!options || typeof (options) != "object") {
            options = {};
        }

        // default options
        options = $.extend(
            {
                // prevent default click/touch handlers
                preventDefault: true,

                // handle mouse event
                mouse: true,

                // handle pen event (IE 10 only)
                pen: true,

                // max number of touch (mouse) point to handle
                // more touch events at the same time will be ignored
                // -1 means unlimited
                maxtouch: -1,

                // add prefix to the touch events triggered
                // useful when you want to add handlers with different options
                prefix: ""
            },
            options);

        // nothing to do
        if (options.maxtouch == 0) return this;

        if (window.navigator.msPointerEnabled) { // IE10 with touch
            if (options.preventDefault) {
                var cssNeeded = this.data("_touchtrack-ms-touch-action");
                if (cssNeeded == undefined || cssNeeded == null) {
                    cssNeeded = [];
                }

                cssNeeded[options.prefix + "_track"] = true;
                this.data("_touchtrack-ms-touch-action", cssNeeded);

                // make default pan and zoom disabled
                this.css("-ms-touch-action", "none");
            }
        }

        this.each(function () {
            var _this = this,
                _touch_handler = null,
                touches = null;

            // an array to store the touches we are handling
            $(this).data(options.prefix + "_touches", []);

            _touch_handler = function (event) {
                var touchArray = [];

                if (event.pointerType) {
                    // check if mouse/pen event should be ignored
                    if ((event.pointerType == event.MSPOINTER_TYPE_MOUSE && !options.mouse) || (event.pointerType == event.MSPOINTER_TYPE_PEN && !options.pen)) {
                        return;
                    }

                    touchArray[0] = {
                        id: event.pointerId,
                        clientX: event.clientX,
                        clientY: event.clientY,
                        pageX: event.pageX,
                        pageY: event.pageY,
                        screenX: event.screenX,
                        screenY: event.screenY
                    };
                } else if (event.changedTouches) {
                    // there might be more than 1 touch points in one native event in webkit browsers
                    // loop thru the changedTouches list
                    for (var i = 0; i < event.changedTouches.length; i++) {
                        touchArray[i] = {
                            id: event.changedTouches[i].identifier,
                            clientX: event.changedTouches[i].clientX,
                            clientY: event.changedTouches[i].clientY,
                            pageX: event.changedTouches[i].pageX,
                            pageY: event.changedTouches[i].pageY,
                            screenX: event.changedTouches[i].screenX,
                            screenY: event.changedTouches[i].screenY
                        };
                    }
                } else {
                    // This is a mouse event
                    // Give it an ID of -1
                    touchArray[0] = {
                        id: -1,
                        clientX: event.clientX,
                        clientY: event.clientY,
                        pageX: event.pageX,
                        pageY: event.pageY,
                        screenX: event.screenX,
                        screenY: event.screenY
                    };
                }

                // loop thru the touches in this event
                for (var i = 0; i < touchArray.length; i++) {
                    var touch = touchArray[i],
                        currentTouchIndex = null,
                        newTouch = true,
                        eventType;

                    touches = $(_this).data(options.prefix + "_touches");

                    // search the touch array to see if this is a touch we're handling
                    for (var j = 0; j < touches.length; j++) {
                        if (touches[j].id == touch.id) {
                            newTouch = false;
                            touches[j] = touch; // update the touch object
                            $(_this).data(options.prefix + "_touches", touches);
                            currentTouchIndex = j;
                            break;
                        }
                    }

                    // this is not a touch we're handling
                    if (newTouch && this != _this) {
                        continue;
                    }

                    if (event.type == "touchstart" || event.type == "MSPointerDown" || event.type == "mousedown") { // "start" of a touch/click
                        if (newTouch) {
                            if (options.maxtouch < 0 || options.maxtouch > touches.length) { // check to see if we have quota to handle this touch
                                // add the touch to touch array
                                touches[touches.length] = touch;
                                $(this).data(options.prefix + "_touches", touches);
                            } else {
                                // ignore
                                continue;
                            }

                            // add "move", "end" and "cancel" event listeners only after a "start" event
                            if (event.pointerType) {
                                document.addEventListener("MSPointerMove", _touch_handler, false);
                                document.addEventListener("MSPointerUp", _touch_handler, false);
                                document.addEventListener("MSPointerCancel", _touch_handler, false);
                            } else {
                                document.addEventListener("touchmove", _touch_handler, false);
                                document.addEventListener("touchend", _touch_handler, false);
                                document.addEventListener("touchcancel", _touch_handler, false);

                                if (options.mouse) { // ignore mouse?
                                    $(document).on("mousemove", _touch_handler);
                                    $(document).on("mouseup", _touch_handler);
                                }
                            }
                        }

                        eventType = "start";
                    } else if (event.type == "touchmove" || event.type == "MSPointerMove" || event.type == "mousemove") { // "move" event
                        eventType = "move";
                    } else if (event.type == "touchend" || event.type == "touchcancel" || event.type == "MSPointerUp" || event.type == "MSPointerCancel" || event.type == "mouseup") { // "end"/"cancel" event
                        // remove the current touch from touch array
                        if (touches.length - 1 != currentTouchIndex) {
                            touches[currentTouchIndex] = touches[touches.length - 1];
                        }

                        touches.pop();
                        $(_this).data(options.prefix + "_touches", touches);

                        // if the array is empty, removing the "move", "end" and "cancel" event listeners
                        if (touches.length == 0) {
                            if (event.pointerType) {
                                document.removeEventListener("MSPointerMove", _touch_handler, false);
                                document.removeEventListener("MSPointerUp", _touch_handler, false);
                                document.removeEventListener("MSPointerCancel", _touch_handler, false);
                            } else {
                                document.removeEventListener("touchmove", _touch_handler, false);
                                document.removeEventListener("touchend", _touch_handler, false);
                                document.removeEventListener("touchcancel", _touch_handler, false);

                                if (options.mouse) { // ignore mouse?
                                    $(document).off("mousemove", _touch_handler);
                                    $(document).off("mouseup", _touch_handler);
                                }
                            }
                        }

                        eventType = "end";
                    } else { // Unknown event
                        continue;
                    }

                    // the event we are triggering
                    var tEvent = $.Event(options.prefix + "touch_" + eventType);

                    // get the touch coordinates from the touch object
                    tEvent = $.extend(
                        tEvent,
                        {
                            originalType: event.type,
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            pageX: touch.pageX,
                            pageY: touch.pageY,
                            screenX: touch.screenX,
                            screenY: touch.screenY,
                            touches: touches
                        });

                    // trigger the event in a try/catch block
                    // because we do not want any exception to stop the current function
                    try { $(_this).trigger(tEvent); } catch (error) { console.log(error); }
                }

                // prevent default handlers
                if (options.preventDefault) {
                    event.preventDefault && event.preventDefault();
                    return false;
                }
            };

            // only add "start" handlers
            if (window.navigator.msPointerEnabled) {
                this.addEventListener("MSPointerDown", _touch_handler, false);
            } else {
                this.addEventListener("touchstart", _touch_handler, false);
                options.mouse && $(this).on("mousedown", _touch_handler);
            }

            // store the event handler for dispose method
            $(this).data(options.prefix + "_touch_handler", _touch_handler);
        });

        return this;
    };

    // dispose all the touch handlers
    $.fn.touchDispose = function (prefix) {
        if (!prefix || typeof (prefix) != "string") {
            prefix = "";
        }

        if (window.navigator.msPointerEnabled) { // IE10 with touch
            var cssNeeded = this.data("_touchtrack-ms-touch-action");
            if (cssNeeded == undefined || cssNeeded == null) {
                cssNeeded = [];
            }

            delete cssNeeded[options.prefix + "_track"];
            this.data("_touchtrack-ms-touch-action", cssNeeded);

            var i = 0;
            for (j in cssNeeded) i++;
            if (i == 0) this.css("-ms-touch-action", "");
        }

        this.each(function () {
            // remove all handlers
            var _touch_handler = $(this).data(prefix + "_touch_handler");

            this.removeEventListener("MSPointerDown", _touch_handler, false);
            this.removeEventListener("touchstart", _touch_handler, false);
            $(this).off("mousedown", _touch_handler);

            document.removeEventListener("MSPointerMove", _touch_handler, false);
            document.removeEventListener("MSPointerUp", _touch_handler, false);
            document.removeEventListener("MSPointerCancel", _touch_handler, false);

            document.removeEventListener("touchmove", _touch_handler, false);
            document.removeEventListener("touchend", _touch_handler, false);
            document.removeEventListener("touchcancel", _touch_handler, false);

            $(this).off("mousemove", _touch_handler);
            $(this).off("mouseup", _touch_handler);

            $(this).removeData(prefix + "_touch_handler");
            $(this).removeData(prefix + "_touches");
        });

        return this;
    };
})(jQuery);

/*!
* jQueryTouch v0.0.6
* https://github.com/a-fung/jQueryTouch
*
* Copyright 2012 Man Kwan Liu
* Released under the Apache License Version 2.0
* http://www.apache.org/licenses/
*
* Date: Wed Oct 2012 23:14:09 GMT-0700 (Pacific Daylight Time)
*/
(function ($) {
    // an easy to use swipe function
    $.fn.swipe = function (handler, options) {
        if (typeof (handler) != "function") return this;

        if (!options || typeof (options) != "object") {
            options = {};
        }

        // default options
        options = $.extend(
            {
                preventDefault: true,
                mouse: true,
                pen: true,
                distance: 50 // default distance to trigger a swipe
            },
            options);

        // touch init options
        var tOptions = {
            preventDefault: options.preventDefault,
            mouse: options.mouse,
            pen: options.pen,
            maxtouch: 1, // swipe needs only 1 touch point
            prefix: "_swipe_"
        };

        var in_swipe, original_x, original_y,
            sqr = function (n) { return n * n; };

        var _handler = function (event) {
            if (event.type == "_swipe_touch_start") {
                in_swipe = true;
                original_x = event.pageX;
                original_y = event.pageY;
            } else {
                if (in_swipe) {
                    if (Math.sqrt(sqr(event.pageX - original_x) + sqr(event.pageY - original_y)) >= options.distance) {
                        in_swipe = false;
                        var direction,
                            angle = Math.atan2(event.pageY - original_y, event.pageX - original_x) / Math.PI * 8;

                        if (angle < -7) {
                            direction = "left";
                        } else if (angle < -5) {
                            direction = "upleft";
                        } else if (angle < -3) {
                            direction = "up";
                        } else if (angle < -1) {
                            direction = "upright";
                        } else if (angle < 1) {
                            direction = "right";
                        } else if (angle < 3) {
                            direction = "downright";
                        } else if (angle < 5) {
                            direction = "down";
                        } else if (angle < 7) {
                            direction = "downleft";
                        } else {
                            direction = "left";
                        }

                        try { handler(direction); } catch (error) { console.log(error); }
                    }
                }

                if (event.type == "_swipe_touch_end") {
                    in_swipe = false;
                }
            }
        };

        // touch init and handlers adding
        this.touchInit(tOptions);
        this.on("_swipe_touch_start", _handler);
        this.on("_swipe_touch_move", _handler);
        this.on("_swipe_touch_end", _handler);

        return this;
    };
})(jQuery);