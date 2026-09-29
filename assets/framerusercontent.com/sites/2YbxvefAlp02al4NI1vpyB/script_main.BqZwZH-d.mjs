import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  l as _,
  m as ee,
  n as v,
  o as y,
  p as te,
  r as ne,
  t as re,
  u as b,
  v as x,
  w as S,
  z as C,
} from "./react.DwDJOhmk.mjs";
import { S as w, a as T, r as E, t as D } from "./motion.ClIzWdXQ.mjs";
import {
  $ as ie,
  B as ae,
  C as O,
  D as k,
  F as A,
  G as oe,
  H as j,
  I as se,
  J as ce,
  L as le,
  O as ue,
  S as M,
  U as de,
  V as fe,
  X as pe,
  Y as me,
  Z as he,
  _t as ge,
  at as _e,
  b as N,
  c as ve,
  dt as ye,
  et as be,
  f as xe,
  ft as P,
  g as Se,
  h as Ce,
  i as we,
  it as Te,
  k as Ee,
  l as De,
  lt as Oe,
  m as ke,
  n as Ae,
  nt as je,
  ot as F,
  p as I,
  q as Me,
  r as L,
  rt as Ne,
  t as R,
  tt as Pe,
  u as Fe,
  v as Ie,
  w as z,
  y as B,
  yt as Le,
} from "./framer.C_LViZYJ.mjs";
import {
  C as Re,
  D as ze,
  E as Be,
  O as Ve,
  S as He,
  T as Ue,
  w as We,
  x as Ge,
} from "./shared-lib.KSjyA0rH.mjs";
function V({ blur: e, borderRadius: t, direction: n, transition: r }) {
  return f(`div`, {
    style: { position: `absolute`, inset: 0, overflow: `hidden` },
    children: g(
      () => [
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
        },
        {
          blur: `${e / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
        },
        {
          blur: `${e / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
        },
        {
          blur: `${e / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
        {
          blur: `${e}px`,
          gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
      ],
      [e],
    ).map((e, i) =>
      f(
        w.div,
        {
          transition: r,
          initial: { backdropFilter: `blur(${e.blur})` },
          animate: { backdropFilter: `blur(${e.blur})` },
          style: {
            opacity: 1,
            position: `absolute`,
            inset: 0,
            zIndex: i + 1,
            maskImage: `linear-gradient(${n}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${n}, ${e.gradient})`,
            borderRadius: t,
            pointerEvents: `none`,
          },
        },
        i,
      ),
    ),
  });
}
var Ke = e(() => {
  (y(),
    S(),
    D(),
    j(),
    (V.defaultProps = {
      blur: 10,
      borderRadius: `0px`,
      direction: `toBottom`,
      transition: { duration: 0.3 },
    }),
    z(V, {
      blur: {
        title: `Blur`,
        type: L.Number,
        defaultValue: 10,
        min: 0,
        max: 100,
        step: 1,
        description: `Large blur values (10<) can impact performance.`,
      },
      borderRadius: {
        title: `Radius`,
        type: L.BorderRadius,
        defaultValue: `0px`,
        description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
      },
      direction: {
        title: `Direction`,
        type: L.SegmentedEnum,
        options: [`to bottom`, `to top`, `to left`, `to right`],
        optionTitles: [`↓`, `↑`, `←`, `→`],
        defaultValue: `to bottom`,
      },
      transition: {
        type: L.Transition,
        defaultValue: { duration: 0.3 },
        title: `Transition`,
        description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`,
      },
    }),
    (V.displayName = `Blur Gradient`));
});
function qe(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et = e(() => {
    (r(),
      (Je = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = qe(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          {
            lerp: n = 0.1,
            duration: r = 1,
            easing: i = (e) => e,
            onStart: a,
            onUpdate: o,
          },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (Ye = class {
        constructor({
          wrapper: e,
          content: t,
          autoResize: n = !0,
          debounce: r = 250,
        } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === C
                ? C.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            C.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === C
            ? ((this.width = C.innerWidth), (this.height = C.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === C
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }),
      (Xe = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Ze = 100 / 6),
      (Qe = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new Xe()),
            C.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, {
              passive: !1,
            }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            C.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, {
              passive: !1,
            }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? Ze : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? Ze : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = C.innerWidth),
            (this.windowHeight = C.innerHeight));
        };
      }),
      ($e = class {
        constructor({
          wrapper: e = C,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = !c && 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _ = !1,
          __experimental__naiveDimensions: ee = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching =
                  n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r &&
                      e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i &&
                      e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) &&
                      !e.classList?.contains(`lenis-stopped`)),
                )
              )
                return;
              if (this.isStopped || this.isLocked)
                return void n.preventDefault();
              if (
                !(
                  (this.options.syncTouch && r) ||
                  (this.options.smoothWheel && i)
                )
              )
                return (
                  (this.isScrolling = `native`),
                  void this.animate.stop()
                );
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        },
                  ),
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (
                !1 === this.isScrolling ||
                this.isScrolling === `native`
              ) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (C.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = C),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              __experimental__naiveDimensions: ee,
            }),
            (this.animate = new Je()),
            (this.emitter = new Xe()),
            (this.dimensions = new Ye({
              wrapper: e,
              content: t,
              autoResize: g,
            })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              `scroll`,
              this.onNativeScroll,
              !1,
            ),
            (this.virtualScroll = new Qe(r, {
              touchMultiplier: m,
              wheelMultiplier: h,
            })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              `scroll`,
              this.onNativeScroll,
              !1,
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = e)
            : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e),
            this.emitter.emit(`scroll`, this),
            (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== C) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = qe(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (c == null || c(this))
                );
              e !== this.targetScroll &&
                (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0),
                      (this.isScrolling = `smooth`),
                      s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit({ userData: d }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: d }),
                        c?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === C
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e &&
            ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e &&
            ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e &&
            ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function tt(e) {
  let { intensity: t } = e,
    n = o(null);
  return (
    a(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    a(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: [`style`],
            })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    a(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = C.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    a(() => {
      try {
        if (typeof $e != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new $e({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    a(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(C.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = C.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n),
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var H,
  nt = e(() => {
    (r(),
      y(),
      j(),
      et(),
      S(),
      (H = P(
        tt,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``,
      )),
      (H.displayName = `Smooth Scroll`),
      z(H, {
        intensity: {
          title: `Intensity`,
          type: L.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  rt,
  it,
  at,
  ot = e(() => {
    (j(),
      ue.loadFonts([]),
      (rt = [{ explicitInter: !0, fonts: [] }]),
      (it = [
        `.framer-4nWKm .framer-styles-preset-1hhvtw7:not(.rich-text-wrapper), .framer-4nWKm .framer-styles-preset-1hhvtw7.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-24c53615-8b7e-45eb-8641-dad0d83e7e4f, rgba(255, 255, 255, 0.5)); --framer-link-text-color: var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, #f7f7f7); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (at = `framer-4nWKm`));
  });
function st(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  U,
  vt = e(() => {
    (y(),
      j(),
      D(),
      S(),
      ot(),
      (ct = { bSM6MnxqE: { hover: !0 } }),
      (lt = [`bSM6MnxqE`, `yIOt0AzSt`]),
      (ut = `framer-YWsiM`),
      (dt = { bSM6MnxqE: `framer-v-skwxvn`, yIOt0AzSt: `framer-v-1nzpc70` }),
      (ft = {
        delay: 0,
        duration: 0.3,
        ease: [0.12, 0.23, 0.5, 1],
        type: `tween`,
      }),
      (pt = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (mt = { Black: `yIOt0AzSt`, Main: `bSM6MnxqE` }),
      (ht = w.create(s)),
      (gt = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        AMjohtCcB: n ?? i.AMjohtCcB ?? `Get a quote`,
        variant: mt[i.variant] ?? i.variant ?? `bSM6MnxqE`,
      })),
      (_t = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (U = P(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = x(),
            { activeLocale: a, setLocale: c } = F();
          Pe();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              AMjohtCcB: m,
              ...h
            } = gt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: ee,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: b,
            } = ye({
              cycleOrder: lt,
              defaultVariant: `bSM6MnxqE`,
              enabledGestures: ct,
              ref: r,
              variant: p,
              variantClassNames: dt,
            }),
            S = _t(e, b),
            C = k(ut, at);
          return f(E, {
            id: d ?? i,
            children: f(ht, {
              animate: b,
              initial: !1,
              children: f(pt, {
                value: ft,
                children: f(I, {
                  href: `https://wa.me/5511988273116`,
                  motionChild: !0,
                  nodeId: `bSM6MnxqE`,
                  openInNewTab: !0,
                  scopeId: `G4mEC3ved`,
                  smoothScroll: !0,
                  children: f(w.a, {
                    ...h,
                    ...v,
                    className: `${k(C, `framer-skwxvn`, u, _)} framer-3b4us6`,
                    "data-framer-name": `Main`,
                    layoutDependency: S,
                    layoutId: `bSM6MnxqE`,
                    ref: r,
                    style: {
                      backdropFilter: `blur(4px)`,
                      backgroundColor: `rgb(255, 183, 0)`,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                      WebkitBackdropFilter: `blur(4px)`,
                      ...l,
                    },
                    variants: {
                      "bSM6MnxqE-hover": {
                        backgroundColor: `var(--token-845110a2-2c36-43c0-8456-c6dfa74587c5, rgba(255, 255, 255, 0.25))`,
                      },
                      yIOt0AzSt: {
                        backgroundColor: `var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0))`,
                      },
                    },
                    ...st(
                      {
                        "bSM6MnxqE-hover": { "data-framer-name": void 0 },
                        yIOt0AzSt: { "data-framer-name": `Black` },
                      },
                      g,
                      y,
                    ),
                    children: f(N, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(w.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7TWFucm9wZS1tZWRpdW0=`,
                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                            "--framer-font-weight": `500`,
                            "--framer-line-height": `1.5em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8fd90ca4-c550-4090-aa6d-9cd7923a0b09, rgb(237, 233, 229)))`,
                          },
                          children: `Get a quote`,
                        }),
                      }),
                      className: `framer-gt1e6m`,
                      "data-framer-name": `Button Text`,
                      fonts: [`FS;Manrope-medium`],
                      layoutDependency: S,
                      layoutId: `wzVKFJULy`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-8fd90ca4-c550-4090-aa6d-9cd7923a0b09, rgb(237, 233, 229))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...st(
                        {
                          yIOt0AzSt: {
                            children: f(s, {
                              children: f(w.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS1tZWRpdW0=`,
                                  "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `1.5em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8fd90ca4-c550-4090-aa6d-9cd7923a0b09, rgb(237, 233, 229)))`,
                                },
                                children: f(I, {
                                  href: `https://wa.me/5511990241032`,
                                  motionChild: !0,
                                  nodeId: `wzVKFJULy`,
                                  openInNewTab: !0,
                                  relValues: [],
                                  scopeId: `G4mEC3ved`,
                                  smoothScroll: !1,
                                  children: f(w.a, {
                                    className: `framer-styles-preset-1hhvtw7`,
                                    "data-styles-preset": `CwOux5tGb`,
                                    children: `Get a quote`,
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        g,
                        y,
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-YWsiM.framer-3b4us6, .framer-YWsiM .framer-3b4us6 { display: block; }`,
          `.framer-YWsiM.framer-skwxvn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-YWsiM .framer-gt1e6m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-YWsiM.framer-v-1nzpc70.framer-skwxvn { cursor: unset; }`,
          ...it,
        ],
        `framer-YWsiM`,
      )),
      (U.displayName = `Secondary`),
      (U.defaultProps = { height: 40, width: 127 }),
      z(U, {
        variant: {
          options: [`bSM6MnxqE`, `yIOt0AzSt`],
          optionTitles: [`Main`, `Black`],
          title: `Variant`,
          type: L.Enum,
        },
        AMjohtCcB: {
          defaultValue: `Get a quote`,
          displayTextArea: !1,
          title: `Text`,
          type: L.String,
        },
        onAMjohtCcBChange: { changes: `AMjohtCcB`, type: L.ChangeHandler },
      }),
      O(
        U,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BNWG6MUI4RTC6WEND2VPDH4MHMIVU3XZ/R5YXY5FMVG6PXU36GNEEA24MIPMEPGSM/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
                weight: `500`,
              },
            ],
          },
          ...se(rt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function yt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  W,
  At = e(() => {
    (y(),
      j(),
      D(),
      S(),
      (bt = { dJiHpZ_Mx: { hover: !0 }, teQrrvpHV: { hover: !0 } }),
      (xt = [`dJiHpZ_Mx`, `teQrrvpHV`]),
      (St = `framer-snaQH`),
      (Ct = { dJiHpZ_Mx: `framer-v-csrngt`, teQrrvpHV: `framer-v-6167on` }),
      (wt = { bounce: 0.1, delay: 0, duration: 1, type: `spring` }),
      (Tt = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (Et = { Black: `teQrrvpHV`, White: `dJiHpZ_Mx` }),
      (Dt = w.create(s)),
      (Ot = ({
        click: e,
        height: t,
        id: n,
        link: r,
        linkText: i,
        width: a,
        ...o
      }) => ({
        ...o,
        dXossDT6I: e ?? o.dXossDT6I,
        FGUgjcVxV: i ?? o.FGUgjcVxV ?? `Home`,
        UNjvstQy8: r ?? o.UNjvstQy8,
        variant: Et[o.variant] ?? o.variant ?? `dJiHpZ_Mx`,
      })),
      (kt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (W = P(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = x(),
            { activeLocale: a, setLocale: c } = F();
          Pe();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              FGUgjcVxV: m,
              UNjvstQy8: h,
              dXossDT6I: g,
              ...ee
            } = Ot(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: re,
              isLoading: b,
              setGestureState: S,
              setVariant: C,
              variants: T,
            } = ye({
              cycleOrder: xt,
              defaultVariant: `dJiHpZ_Mx`,
              enabledGestures: bt,
              ref: r,
              variant: p,
              variantClassNames: Ct,
            }),
            D = kt(e, T),
            ie = [],
            { activeVariantCallback: ae, delay: O } = be(v),
            A = ae(async (...e) => {
              if ((S({ isPressed: !1 }), g && (await g(...e)) === !1))
                return !1;
            }),
            oe = k(St, ...ie);
          return f(E, {
            id: d ?? i,
            children: f(Dt, {
              animate: T,
              initial: !1,
              children: f(Tt, {
                value: wt,
                children: f(I, {
                  href: h,
                  motionChild: !0,
                  nodeId: `dJiHpZ_Mx`,
                  openInNewTab: !1,
                  scopeId: `wkwx4WS1C`,
                  children: _(w.a, {
                    ...ee,
                    ...ne,
                    className: `${k(oe, `framer-csrngt`, u, y)} framer-ihopij`,
                    "data-framer-name": `White`,
                    "data-highlight": !0,
                    layoutDependency: D,
                    layoutId: `dJiHpZ_Mx`,
                    onTap: A,
                    ref: r,
                    style: { ...l },
                    ...yt(
                      {
                        "dJiHpZ_Mx-hover": { "data-framer-name": void 0 },
                        "teQrrvpHV-hover": { "data-framer-name": void 0 },
                        teQrrvpHV: { "data-framer-name": `Black` },
                      },
                      v,
                      re,
                    ),
                    children: [
                      f(N, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(w.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                              "--framer-line-height": `1.3em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-274d0eea-6729-4932-80e0-95f4de1fa6d4, rgb(255, 255, 255)))`,
                            },
                            children: `Home.`,
                          }),
                        }),
                        className: `framer-16o2i7j`,
                        fonts: [`GF;Geist-regular`],
                        layoutDependency: D,
                        layoutId: `bskTC6OVh`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-274d0eea-6729-4932-80e0-95f4de1fa6d4, rgb(255, 255, 255))`,
                        },
                        text: m,
                        variants: {
                          teQrrvpHV: {
                            "--extracted-r6o4lv": `var(--token-e9caeb4d-5c62-4604-9964-95860fbbaaf1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...yt(
                          {
                            teQrrvpHV: {
                              children: f(s, {
                                children: f(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-line-height": `1.3em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e9caeb4d-5c62-4604-9964-95860fbbaaf1, rgb(0, 0, 0)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                          },
                          v,
                          re,
                        ),
                      }),
                      f(w.div, {
                        className: `framer-1c15m4z`,
                        "data-framer-name": `line`,
                        layoutDependency: D,
                        layoutId: `WMzCrKAmf`,
                        style: {
                          backgroundColor: `var(--token-274d0eea-6729-4932-80e0-95f4de1fa6d4, rgb(255, 255, 255))`,
                        },
                        variants: {
                          teQrrvpHV: {
                            backgroundColor: `var(--token-e9caeb4d-5c62-4604-9964-95860fbbaaf1, rgb(0, 0, 0))`,
                          },
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-snaQH.framer-ihopij, .framer-snaQH .framer-ihopij { display: block; }`,
          `.framer-snaQH.framer-csrngt { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-snaQH .framer-16o2i7j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-snaQH .framer-1c15m4z { bottom: 0px; flex: none; height: 1px; left: -200px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 100%; z-index: 1; }`,
          `.framer-snaQH.framer-v-csrngt.hover .framer-1c15m4z, .framer-snaQH.framer-v-6167on.hover .framer-1c15m4z { left: 0px; }`,
        ],
        `framer-snaQH`,
      )),
      (W.displayName = `Link`),
      (W.defaultProps = { height: 21, width: 43 }),
      z(W, {
        variant: {
          options: [`dJiHpZ_Mx`, `teQrrvpHV`],
          optionTitles: [`White`, `Black`],
          title: `Variant`,
          type: L.Enum,
        },
        FGUgjcVxV: {
          defaultValue: `Home`,
          displayTextArea: !1,
          title: `Link text`,
          type: L.String,
        },
        onFGUgjcVxVChange: { changes: `FGUgjcVxV`, type: L.ChangeHandler },
        UNjvstQy8: { title: `Link`, type: L.Link },
        dXossDT6I: { title: `Click`, type: L.EventHandler },
      }),
      O(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  K,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  q,
  Ut = e(() => {
    (y(),
      j(),
      D(),
      S(),
      vt(),
      At(),
      (jt = A(W)),
      (Mt = A(U)),
      (Nt = [`pujkiXxjf`, `C8sz394qo`, `AFnq6wmma`]),
      (Pt = `framer-ZFYaK`),
      (Ft = {
        AFnq6wmma: `framer-v-1sab241`,
        C8sz394qo: `framer-v-msd5gy`,
        pujkiXxjf: `framer-v-1d6eib6`,
      }),
      (It = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Rt = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (zt = {
        "Tablet / Mobile Open": `AFnq6wmma`,
        "Tablet / Mobile": `C8sz394qo`,
        Desktop: `pujkiXxjf`,
      }),
      (Bt = w.create(s)),
      (Vt = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        aotkfSZrY: n ?? i.aotkfSZrY ?? `12px 40px 12px 40px`,
        variant: zt[i.variant] ?? i.variant ?? `pujkiXxjf`,
      })),
      (Ht = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (q = P(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = x(),
            { activeLocale: a, setLocale: s } = F();
          Pe();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              aotkfSZrY: p,
              ...m
            } = Vt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: ee,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: b,
            } = ye({
              cycleOrder: Nt,
              defaultVariant: `pujkiXxjf`,
              ref: r,
              variant: d,
              variantClassNames: Ft,
            }),
            S = Ht(e, b),
            C = k(Pt),
            T = () => h !== `C8sz394qo`;
          return (
            Oe(),
            f(E, {
              id: u ?? i,
              children: f(Bt, {
                animate: b,
                initial: !1,
                children: f(Rt, {
                  value: Lt,
                  children: f(w.nav, {
                    ...m,
                    ...v,
                    className: k(C, `framer-1d6eib6`, l, g),
                    "data-framer-name": `Desktop`,
                    layoutDependency: S,
                    layoutId: `pujkiXxjf`,
                    ref: r,
                    style: {
                      "--1mcemng": It(p),
                      backdropFilter: `blur(10px)`,
                      WebkitBackdropFilter: `blur(10px)`,
                      ...c,
                    },
                    ...G(
                      {
                        AFnq6wmma: {
                          "data-framer-name": `Tablet / Mobile Open`,
                        },
                        C8sz394qo: { "data-framer-name": `Tablet / Mobile` },
                      },
                      h,
                      y,
                    ),
                    children: _(w.div, {
                      className: `framer-19ydayd`,
                      "data-framer-name": `Container`,
                      layoutDependency: S,
                      layoutId: `eKY5bxJQ3`,
                      children: [
                        _(w.div, {
                          className: `framer-1equhyp`,
                          "data-framer-name": `Nav Items`,
                          layoutDependency: S,
                          layoutId: `cC5zjTMZm`,
                          children: [
                            f(w.div, {
                              className: `framer-14vauvq`,
                              "data-framer-name": `Logo And menu`,
                              layoutDependency: S,
                              layoutId: `NMia9V3hv`,
                              children: f(I, {
                                href: {
                                  hash: `:oBUwvI1Tt`,
                                  webPageId: `augiA20Il`,
                                },
                                motionChild: !0,
                                nodeId: `GmLgFxmnQ`,
                                openInNewTab: !1,
                                scopeId: `eCE_Fd_n7`,
                                children: f(Fe, {
                                  as: `a`,
                                  background: {
                                    alt: `logo`,
                                    fit: `fit`,
                                    intrinsicHeight: 724,
                                    intrinsicWidth: 2172,
                                    pixelHeight: 724,
                                    pixelWidth: 2172,
                                    positionX: `left`,
                                    positionY: `top`,
                                    sizes: `279px`,
                                    src: `https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?width=2172&height=724`,
                                    srcSet: `https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=512&width=2172&height=724 512w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=1024&width=2172&height=724 1024w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=2048&width=2172&height=724 2048w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?width=2172&height=724 2172w`,
                                  },
                                  className: `framer-1rxbedd framer-13n8qkb`,
                                  "data-framer-name": `Brand Logo`,
                                  layoutDependency: S,
                                  layoutId: `GmLgFxmnQ`,
                                  ...G(
                                    {
                                      C8sz394qo: {
                                        background: {
                                          alt: `logo`,
                                          fit: `fit`,
                                          intrinsicHeight: 724,
                                          intrinsicWidth: 2172,
                                          pixelHeight: 724,
                                          pixelWidth: 2172,
                                          positionX: `left`,
                                          positionY: `top`,
                                          sizes: `175px`,
                                          src: `https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?width=2172&height=724`,
                                          srcSet: `https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=512&width=2172&height=724 512w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=1024&width=2172&height=724 1024w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=2048&width=2172&height=724 2048w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?width=2172&height=724 2172w`,
                                        },
                                      },
                                    },
                                    h,
                                    y,
                                  ),
                                }),
                              }),
                            }),
                            T() &&
                              _(w.div, {
                                className: `framer-axnqmh`,
                                "data-framer-name": `navigation link`,
                                layoutDependency: S,
                                layoutId: `eMwZlkLR1`,
                                children: [
                                  f(B, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:K7zYKy1_5`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:K7zYKy1_5`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 21,
                                        children: f(M, {
                                          className: `framer-gikhw8-container`,
                                          layoutDependency: S,
                                          layoutId: `yHwuHFx4b-container`,
                                          nodeId: `yHwuHFx4b`,
                                          rendersWithMotion: !0,
                                          scopeId: `eCE_Fd_n7`,
                                          children: f(W, {
                                            FGUgjcVxV: `Soluções`,
                                            height: `100%`,
                                            id: `yHwuHFx4b`,
                                            layoutId: `yHwuHFx4b`,
                                            UNjvstQy8: e[0],
                                            variant: K(`dJiHpZ_Mx`),
                                            width: `100%`,
                                            ...G(
                                              {
                                                AFnq6wmma: { UNjvstQy8: e[1] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(B, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:KbuQeHpgr`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:KbuQeHpgr`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 21,
                                        children: f(M, {
                                          className: `framer-6u7ixw-container`,
                                          layoutDependency: S,
                                          layoutId: `bdzKkpiOw-container`,
                                          nodeId: `bdzKkpiOw`,
                                          rendersWithMotion: !0,
                                          scopeId: `eCE_Fd_n7`,
                                          children: f(W, {
                                            FGUgjcVxV: `expertise`,
                                            height: `100%`,
                                            id: `bdzKkpiOw`,
                                            layoutId: `bdzKkpiOw`,
                                            UNjvstQy8: e[0],
                                            variant: K(`dJiHpZ_Mx`),
                                            width: `100%`,
                                            ...G(
                                              {
                                                AFnq6wmma: { UNjvstQy8: e[1] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(B, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:FfZ0uW57s`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:FfZ0uW57s`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 21,
                                        children: f(M, {
                                          className: `framer-errccm-container`,
                                          layoutDependency: S,
                                          layoutId: `OkD5nJ5Xt-container`,
                                          nodeId: `OkD5nJ5Xt`,
                                          rendersWithMotion: !0,
                                          scopeId: `eCE_Fd_n7`,
                                          children: f(W, {
                                            FGUgjcVxV: `Cases`,
                                            height: `100%`,
                                            id: `OkD5nJ5Xt`,
                                            layoutId: `OkD5nJ5Xt`,
                                            UNjvstQy8: e[0],
                                            variant: K(`dJiHpZ_Mx`),
                                            width: `100%`,
                                            ...G(
                                              {
                                                AFnq6wmma: { UNjvstQy8: e[1] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(B, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:KqSLPYmyU`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:KqSLPYmyU`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 21,
                                        children: f(M, {
                                          className: `framer-110yfy9-container`,
                                          layoutDependency: S,
                                          layoutId: `SjVz2p_Pt-container`,
                                          nodeId: `SjVz2p_Pt`,
                                          rendersWithMotion: !0,
                                          scopeId: `eCE_Fd_n7`,
                                          children: f(W, {
                                            FGUgjcVxV: `Upgoal `,
                                            height: `100%`,
                                            id: `SjVz2p_Pt`,
                                            layoutId: `SjVz2p_Pt`,
                                            UNjvstQy8: e[0],
                                            variant: K(`dJiHpZ_Mx`),
                                            width: `100%`,
                                            ...G(
                                              {
                                                AFnq6wmma: { UNjvstQy8: e[1] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(B, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:erhEQKnnF`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:erhEQKnnF`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 21,
                                        children: f(M, {
                                          className: `framer-1wamasd-container`,
                                          layoutDependency: S,
                                          layoutId: `HB8YBDJ1s-container`,
                                          nodeId: `HB8YBDJ1s`,
                                          rendersWithMotion: !0,
                                          scopeId: `eCE_Fd_n7`,
                                          children: f(W, {
                                            FGUgjcVxV: `faq`,
                                            height: `100%`,
                                            id: `HB8YBDJ1s`,
                                            layoutId: `HB8YBDJ1s`,
                                            UNjvstQy8: e[0],
                                            variant: K(`dJiHpZ_Mx`),
                                            width: `100%`,
                                            ...G(
                                              {
                                                AFnq6wmma: { UNjvstQy8: e[1] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(B, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:n0VZEt7a2`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:n0VZEt7a2`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 21,
                                        children: f(M, {
                                          className: `framer-1mir2ma-container`,
                                          layoutDependency: S,
                                          layoutId: `FtReW9oIE-container`,
                                          nodeId: `FtReW9oIE`,
                                          rendersWithMotion: !0,
                                          scopeId: `eCE_Fd_n7`,
                                          children: f(W, {
                                            FGUgjcVxV: `Contato`,
                                            height: `100%`,
                                            id: `FtReW9oIE`,
                                            layoutId: `FtReW9oIE`,
                                            UNjvstQy8: e[0],
                                            variant: K(`dJiHpZ_Mx`),
                                            width: `100%`,
                                            ...G(
                                              {
                                                AFnq6wmma: { UNjvstQy8: e[1] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        f(R, {
                          height: 40,
                          ...G(
                            { C8sz394qo: { height: 30, width: `120px` } },
                            h,
                            y,
                          ),
                          children: f(M, {
                            className: `framer-6har76-container`,
                            layoutDependency: S,
                            layoutId: `HlOPtUnDW-container`,
                            nodeId: `HlOPtUnDW`,
                            rendersWithMotion: !0,
                            scopeId: `eCE_Fd_n7`,
                            children: f(U, {
                              AMjohtCcB: `Fale conosco`,
                              height: `100%`,
                              id: `HlOPtUnDW`,
                              layoutId: `HlOPtUnDW`,
                              style: { height: `100%` },
                              variant: K(`bSM6MnxqE`),
                              width: `100%`,
                              ...G(
                                {
                                  C8sz394qo: {
                                    style: { height: `100%`, width: `100%` },
                                  },
                                },
                                h,
                                y,
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-ZFYaK.framer-13n8qkb, .framer-ZFYaK .framer-13n8qkb { display: block; }`,
          `.framer-ZFYaK.framer-1d6eib6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--1mcemng); position: relative; width: 1200px; }`,
          `.framer-ZFYaK .framer-19ydayd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-end; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-ZFYaK .framer-1equhyp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 72px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-ZFYaK .framer-14vauvq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 70px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 340px; }`,
          `.framer-ZFYaK .framer-1rxbedd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 76px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 279px; }`,
          `.framer-ZFYaK .framer-axnqmh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-ZFYaK .framer-gikhw8-container, .framer-ZFYaK .framer-6u7ixw-container, .framer-ZFYaK .framer-errccm-container, .framer-ZFYaK .framer-110yfy9-container, .framer-ZFYaK .framer-1wamasd-container, .framer-ZFYaK .framer-1mir2ma-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-ZFYaK .framer-6har76-container { flex: none; height: 40px; position: relative; width: auto; }`,
          `.framer-ZFYaK.framer-v-msd5gy.framer-1d6eib6 { height: 72px; overflow: hidden; width: 390px; }`,
          `.framer-ZFYaK.framer-v-msd5gy .framer-14vauvq { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }`,
          `.framer-ZFYaK.framer-v-msd5gy .framer-1rxbedd { align-content: flex-start; align-items: flex-start; height: 53px; width: 175px; }`,
          `.framer-ZFYaK.framer-v-msd5gy .framer-6har76-container { height: 30px; width: 120px; }`,
          `.framer-ZFYaK.framer-v-1sab241.framer-1d6eib6 { overflow: hidden; width: 390px; }`,
        ],
        `framer-ZFYaK`,
      )),
      (q.displayName = `Navigation`),
      (q.defaultProps = { height: 96, width: 1200 }),
      z(q, {
        variant: {
          options: [`pujkiXxjf`, `C8sz394qo`, `AFnq6wmma`],
          optionTitles: [`Desktop`, `Tablet / Mobile`, `Tablet / Mobile Open`],
          title: `Variant`,
          type: L.Enum,
        },
        aotkfSZrY: {
          defaultValue: `12px 40px 12px 40px`,
          title: `Padding`,
          type: L.Padding,
        },
      }),
      O(q, [{ explicitInter: !0, fonts: [] }, ...jt, ...Mt], {
        supportsExplicitInterCodegen: !0,
      }),
      (q.loader = {
        load: (e, t) => me([() => Ee(W, {}, t), () => Ee(U, {}, t)], t),
      }));
  }),
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (j(),
      ue.loadFonts([
        `FS;Manrope-regular`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-Italic`,
      ]),
      (Wt = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/2TYFCBHUANEXS6QGR5EQDUNAFH6LSWM3/AYNOU3VEA4LRTDNKJQUFNVNUTYSGOUOP/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Gt = [
        `.framer-nLEvV .framer-styles-preset-1mh83m9:not(.rich-text-wrapper), .framer-nLEvV .framer-styles-preset-1mh83m9.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e2686594-ca22-44ca-868b-74a2f3b57992, #19191c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-nLEvV .framer-styles-preset-1mh83m9:not(.rich-text-wrapper), .framer-nLEvV .framer-styles-preset-1mh83m9.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e2686594-ca22-44ca-868b-74a2f3b57992, #19191c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-nLEvV .framer-styles-preset-1mh83m9:not(.rich-text-wrapper), .framer-nLEvV .framer-styles-preset-1mh83m9.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e2686594-ca22-44ca-868b-74a2f3b57992, #19191c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Kt = `framer-nLEvV`));
  }),
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    (j(),
      ue.loadFonts([]),
      (Jt = [{ explicitInter: !0, fonts: [] }]),
      (Yt = [
        `.framer-khrEH .framer-styles-preset-13kbk2b:not(.rich-text-wrapper), .framer-khrEH .framer-styles-preset-13kbk2b.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-24b482cd-f7b7-40f1-aaab-e525496592c2, #ffffff); --framer-link-text-color: var(--token-24c53615-8b7e-45eb-8641-dad0d83e7e4f, rgba(255, 255, 255, 0.5)); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Xt = `framer-khrEH`));
  }),
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  J,
  on = e(() => {
    (y(),
      j(),
      D(),
      S(),
      (Qt = `framer-UwZb9`),
      ($t = { MbNf4gJyd: `framer-v-1owzdfv` }),
      (en = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (tn = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (nn = w.create(s)),
      (rn = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        x_AxrREis: n ?? i.x_AxrREis,
      })),
      (an = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = P(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = x(),
            { activeLocale: a, setLocale: s } = F(),
            c = Pe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              x_AxrREis: m,
              ...h
            } = rn(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: ee,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: b,
            } = ye({
              defaultVariant: `MbNf4gJyd`,
              ref: r,
              variant: p,
              variantClassNames: $t,
            }),
            S = an(e, b),
            C = k(Qt);
          return f(E, {
            id: d ?? i,
            children: f(nn, {
              animate: b,
              initial: !1,
              children: f(tn, {
                value: en,
                children: f(I, {
                  href: m,
                  motionChild: !0,
                  nodeId: `MbNf4gJyd`,
                  openInNewTab: !1,
                  scopeId: `OeZT8tdrG`,
                  smoothScroll: !0,
                  children: f(w.a, {
                    ...h,
                    ...v,
                    className: `${k(C, `framer-1owzdfv`, u, _)} framer-1u6saa1`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: S,
                    layoutId: `MbNf4gJyd`,
                    ref: r,
                    style: { ...l },
                    children: f(Fe, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 804.4444657549452,
                        intrinsicWidth: 2413.3333972648356,
                        loading: le(
                          (c?.y || 0) + (0 + ((c?.height || 73) - 0 - 73) / 2),
                        ),
                        pixelHeight: 724,
                        pixelWidth: 2172,
                        sizes: `220px`,
                        src: `https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?width=2172&height=724`,
                        srcSet: `https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=512&width=2172&height=724 512w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=1024&width=2172&height=724 1024w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?scale-down-to=2048&width=2172&height=724 2048w,https://framerusercontent.com/images/XVbqpMzS34ykhpH2Ke0jl7WtY.png?width=2172&height=724 2172w`,
                      },
                      className: `framer-1q8b8lc`,
                      "data-framer-name": `ChatGPT Image 24 de set. de 2026, 21 27_11`,
                      layoutDependency: S,
                      layoutId: `YgTKIScM9`,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-UwZb9.framer-1u6saa1, .framer-UwZb9 .framer-1u6saa1 { display: block; }`,
          `.framer-UwZb9.framer-1owzdfv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-UwZb9 .framer-1q8b8lc { aspect-ratio: 3 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 220px; }`,
        ],
        `framer-UwZb9`,
      )),
      (J.displayName = `Logo`),
      (J.defaultProps = { height: 73, width: 220 }),
      z(J, { x_AxrREis: { title: `Link`, type: L.Link } }),
      O(J, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function sn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  Y,
  vn = e(() => {
    (y(),
      j(),
      D(),
      S(),
      Ve(),
      qt(),
      Zt(),
      We(),
      on(),
      (cn = A(J)),
      (ln = [`nqGQOK4jU`, `bGwHAFN1y`, `nUwi7Ne5z`]),
      (un = `framer-hIdsc`),
      (dn = {
        bGwHAFN1y: `framer-v-1c05ar5`,
        nqGQOK4jU: `framer-v-1bh882i`,
        nUwi7Ne5z: `framer-v-7tc6m6`,
      }),
      (fn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (pn = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (mn = { Desktop: `nqGQOK4jU`, Mobile: `nUwi7Ne5z`, Tablet: `bGwHAFN1y` }),
      (hn = w.create(s)),
      (gn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: mn[r.variant] ?? r.variant ?? `nqGQOK4jU`,
      })),
      (_n = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = P(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = x(),
            { activeLocale: a, setLocale: c } = F(),
            l = Pe(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = gn(e),
            {
              baseVariant: g,
              classNames: ee,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: re,
              setVariant: b,
              variants: S,
            } = ye({
              cycleOrder: ln,
              defaultVariant: `nqGQOK4jU`,
              ref: r,
              variant: m,
              variantClassNames: dn,
            }),
            C = _n(e, S),
            T = k(un, Ge, Ue, Kt, Xt);
          return (
            Oe(),
            f(E, {
              id: p ?? i,
              children: f(hn, {
                animate: S,
                initial: !1,
                children: f(pn, {
                  value: fn,
                  children: f(w.footer, {
                    ...h,
                    ...y,
                    className: k(T, `framer-1bh882i`, d, ee),
                    "data-framer-name": `Desktop`,
                    layoutDependency: C,
                    layoutId: `nqGQOK4jU`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-cb6b9a2a-93f1-4530-b536-1c95f4cd675c, rgb(18, 18, 18))`,
                      ...u,
                    },
                    ...sn(
                      {
                        bGwHAFN1y: { "data-framer-name": `Tablet` },
                        nUwi7Ne5z: { "data-framer-name": `Mobile` },
                      },
                      g,
                      te,
                    ),
                    children: _(w.div, {
                      className: `framer-17xekf1`,
                      "data-framer-name": `Container`,
                      layoutDependency: C,
                      layoutId: `UB94St0yf`,
                      children: [
                        _(w.div, {
                          className: `framer-xa9y09`,
                          "data-framer-name": `Row`,
                          layoutDependency: C,
                          layoutId: `cA7TLIH_1`,
                          children: [
                            f(w.div, {
                              className: `framer-rvvei2`,
                              "data-framer-name": `Left`,
                              layoutDependency: C,
                              layoutId: `voFndoUaa`,
                              children: _(w.div, {
                                className: `framer-hymgbt`,
                                "data-framer-name": `Logo & Text`,
                                layoutDependency: C,
                                layoutId: `HlkgwQuLN`,
                                children: [
                                  f(B, {
                                    links: [
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(R, {
                                        height: 73,
                                        y:
                                          (l?.y || 0) +
                                          (100 +
                                            ((l?.height || 200) - 180 - 384.8) /
                                              2) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                        ...sn(
                                          {
                                            bGwHAFN1y: {
                                              y:
                                                (l?.y || 0) +
                                                (80 +
                                                  ((l?.height || 525) -
                                                    140 -
                                                    384.8) /
                                                    2) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            nUwi7Ne5z: {
                                              y:
                                                (l?.y || 0) +
                                                (60 +
                                                  ((l?.height || 628) -
                                                    112 -
                                                    592.8) /
                                                    2) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          g,
                                          te,
                                        ),
                                        children: f(M, {
                                          className: `framer-mf4ju3-container`,
                                          layoutDependency: C,
                                          layoutId: `MAHsPh4HJ-container`,
                                          nodeId: `MAHsPh4HJ`,
                                          rendersWithMotion: !0,
                                          scopeId: `X5F0gRJPy`,
                                          children: f(J, {
                                            height: `100%`,
                                            id: `MAHsPh4HJ`,
                                            layoutId: `MAHsPh4HJ`,
                                            width: `100%`,
                                            x_AxrREis: e[0],
                                            ...sn(
                                              {
                                                bGwHAFN1y: { x_AxrREis: e[1] },
                                                nUwi7Ne5z: { x_AxrREis: e[2] },
                                              },
                                              g,
                                              te,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(N, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: _(w.p, {
                                        className: `framer-styles-preset-5np2z3`,
                                        "data-styles-preset": `rhST_ZvFU`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-24c53615-8b7e-45eb-8641-dad0d83e7e4f, rgba(255, 255, 255, 0.5)))`,
                                        },
                                        children: [
                                          `Estratégia, tecnologia e execução`,
                                          f(w.br, {}),
                                          `para transformar desafios em resultados.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1gzaypg`,
                                    fonts: [`Inter`],
                                    layoutDependency: C,
                                    layoutId: `oFth2W8vs`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-24c53615-8b7e-45eb-8641-dad0d83e7e4f, rgba(255, 255, 255, 0.5))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            _(w.div, {
                              className: `framer-11s588c`,
                              "data-framer-name": `Right`,
                              layoutDependency: C,
                              layoutId: `V6Sk0s5YQ`,
                              children: [
                                _(w.div, {
                                  className: `framer-1naq3cl`,
                                  "data-framer-name": `Navigation`,
                                  layoutDependency: C,
                                  layoutId: `xFzYkNl3A`,
                                  children: [
                                    f(N, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(w.p, {
                                          className: `framer-styles-preset-4wrmj6`,
                                          "data-styles-preset": `hvYWBRe5U`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-24b482cd-f7b7-40f1-aaab-e525496592c2, rgb(255, 255, 255)))`,
                                          },
                                          children: `Navegação`,
                                        }),
                                      }),
                                      className: `framer-cq236x`,
                                      "data-framer-name": `Heading`,
                                      fonts: [`Inter`],
                                      layoutDependency: C,
                                      layoutId: `IRW5YyD4Y`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-24b482cd-f7b7-40f1-aaab-e525496592c2, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(w.div, {
                                      className: `framer-fbve59`,
                                      "data-framer-name": `Links`,
                                      layoutDependency: C,
                                      layoutId: `pxU8vTOzR`,
                                      children: [
                                        f(N, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(w.p, {
                                              className: `framer-styles-preset-1mh83m9`,
                                              "data-styles-preset": `k0OSRZ7OG`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-24b482cd-f7b7-40f1-aaab-e525496592c2, rgb(255, 255, 255)))`,
                                              },
                                              children: f(I, {
                                                href: {
                                                  hash: `:K7zYKy1_5`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `b8FZUFgr4`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `X5F0gRJPy`,
                                                smoothScroll: !0,
                                                children: f(w.a, {
                                                  className: `framer-styles-preset-13kbk2b`,
                                                  "data-styles-preset": `QihPj3XkC`,
                                                  children: `Soluções`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-grlu0m`,
                                          fonts: [`Inter`],
                                          layoutDependency: C,
                                          layoutId: `b8FZUFgr4`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-24b482cd-f7b7-40f1-aaab-e525496592c2, rgb(255, 255, 255))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(N, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(w.p, {
                                              className: `framer-styles-preset-1mh83m9`,
                                              "data-styles-preset": `k0OSRZ7OG`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                              },
                                              children: f(I, {
                                                href: {
                                                  hash: `:U90fzhJhP`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `MXqbivlm8`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `X5F0gRJPy`,
                                                smoothScroll: !0,
                                                children: f(w.a, {
                                                  className: `framer-styles-preset-13kbk2b`,
                                                  "data-styles-preset": `QihPj3XkC`,
                                                  children: `Expertise`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-111p015`,
                                          fonts: [`Inter`],
                                          layoutDependency: C,
                                          layoutId: `MXqbivlm8`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(N, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(w.p, {
                                              className: `framer-styles-preset-1mh83m9`,
                                              "data-styles-preset": `k0OSRZ7OG`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                              },
                                              children: f(I, {
                                                href: {
                                                  hash: `:FfZ0uW57s`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `pb0ohRakz`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `X5F0gRJPy`,
                                                smoothScroll: !0,
                                                children: f(w.a, {
                                                  className: `framer-styles-preset-13kbk2b`,
                                                  "data-styles-preset": `QihPj3XkC`,
                                                  children: `Cases`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-ei1yn4`,
                                          fonts: [`Inter`],
                                          layoutDependency: C,
                                          layoutId: `pb0ohRakz`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(N, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(w.p, {
                                              className: `framer-styles-preset-1mh83m9`,
                                              "data-styles-preset": `k0OSRZ7OG`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                              },
                                              children: f(I, {
                                                href: {
                                                  hash: `:KqSLPYmyU`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `qVTzsUiUK`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `X5F0gRJPy`,
                                                smoothScroll: !0,
                                                children: f(w.a, {
                                                  className: `framer-styles-preset-13kbk2b`,
                                                  "data-styles-preset": `QihPj3XkC`,
                                                  children: `Upgoal`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-14qdep9`,
                                          fonts: [`Inter`],
                                          layoutDependency: C,
                                          layoutId: `qVTzsUiUK`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(N, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(w.p, {
                                              className: `framer-styles-preset-1mh83m9`,
                                              "data-styles-preset": `k0OSRZ7OG`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                              },
                                              children: f(I, {
                                                href: {
                                                  hash: `:erhEQKnnF`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `px7VggHjo`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `X5F0gRJPy`,
                                                smoothScroll: !1,
                                                children: f(w.a, {
                                                  className: `framer-styles-preset-13kbk2b`,
                                                  "data-styles-preset": `QihPj3XkC`,
                                                  children: `FAQ`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-xj9vl`,
                                          fonts: [`Inter`],
                                          layoutDependency: C,
                                          layoutId: `px7VggHjo`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(N, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(w.p, {
                                              className: `framer-styles-preset-1mh83m9`,
                                              "data-styles-preset": `k0OSRZ7OG`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                              },
                                              children: f(I, {
                                                href: {
                                                  hash: `:n0VZEt7a2`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `uRlLA17Yy`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `X5F0gRJPy`,
                                                smoothScroll: !1,
                                                children: f(w.a, {
                                                  className: `framer-styles-preset-13kbk2b`,
                                                  "data-styles-preset": `QihPj3XkC`,
                                                  children: `Contato`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1urasoe`,
                                          fonts: [`Inter`],
                                          layoutDependency: C,
                                          layoutId: `uRlLA17Yy`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                _(w.div, {
                                  className: `framer-tqabn5`,
                                  "data-framer-name": `Socials`,
                                  layoutDependency: C,
                                  layoutId: `yoOrcmYfL`,
                                  children: [
                                    f(N, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(w.p, {
                                          className: `framer-styles-preset-4wrmj6`,
                                          "data-styles-preset": `hvYWBRe5U`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                          },
                                          children: `Conecte-se`,
                                        }),
                                      }),
                                      className: `framer-g38krg`,
                                      "data-framer-name": `Heading`,
                                      fonts: [`Inter`],
                                      layoutDependency: C,
                                      layoutId: `YQcljr5q7`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(w.div, {
                                      className: `framer-1l4vr8b`,
                                      "data-framer-name": `Links`,
                                      layoutDependency: C,
                                      layoutId: `ug5FIKq_n`,
                                      children: f(N, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(w.p, {
                                            className: `framer-styles-preset-5np2z3`,
                                            "data-styles-preset": `rhST_ZvFU`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247)))`,
                                            },
                                            children: f(I, {
                                              href: `https://www.linkedin.com/company/upgoal-solutions`,
                                              motionChild: !0,
                                              nodeId: `ZUtrPCLYK`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `X5F0gRJPy`,
                                              smoothScroll: !1,
                                              children: f(w.a, {
                                                className: `framer-styles-preset-13kbk2b`,
                                                "data-styles-preset": `QihPj3XkC`,
                                                children: `Linkedin`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1m66xq2`,
                                        fonts: [`Inter`],
                                        layoutDependency: C,
                                        layoutId: `ZUtrPCLYK`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(247, 247, 247))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(w.div, {
                          className: `framer-gdyedj`,
                          "data-framer-name": `Divider`,
                          layoutDependency: C,
                          layoutId: `I9IKaUBDW`,
                          style: {
                            backgroundColor: `var(--token-054f9a57-d713-4acf-997a-8dd3de74d2ab, rgb(59, 57, 48))`,
                          },
                        }),
                        f(w.div, {
                          className: `framer-yoy2r3`,
                          "data-framer-name": `Row`,
                          layoutDependency: C,
                          layoutId: `a9FSkOUUZ`,
                          children: f(N, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(w.p, {
                                className: `framer-styles-preset-1mh83m9`,
                                "data-styles-preset": `k0OSRZ7OG`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-24c53615-8b7e-45eb-8641-dad0d83e7e4f, rgba(255, 255, 255, 0.5)))`,
                                },
                                children: `© 2026 UPGOAL. Todos os direitos reservados.`,
                              }),
                            }),
                            className: `framer-1qlleje`,
                            fonts: [`Inter`],
                            layoutDependency: C,
                            layoutId: `oSpkrP8GZ`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-24c53615-8b7e-45eb-8641-dad0d83e7e4f, rgba(255, 255, 255, 0.5))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-hIdsc.framer-1lgxb2q, .framer-hIdsc .framer-1lgxb2q { display: block; }`,
          `.framer-hIdsc.framer-1bh882i { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 40px 80px 40px; position: relative; width: 1200px; }`,
          `.framer-hIdsc .framer-17xekf1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1120px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-hIdsc .framer-xa9y09, .framer-hIdsc .framer-yoy2r3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-hIdsc .framer-rvvei2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-hIdsc .framer-hymgbt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-hIdsc .framer-mf4ju3-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-hIdsc .framer-1gzaypg { flex: none; height: auto; max-width: 37%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-hIdsc .framer-11s588c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 0px 18px 0px; position: relative; width: min-content; }`,
          `.framer-hIdsc .framer-1naq3cl, .framer-hIdsc .framer-tqabn5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-hIdsc .framer-cq236x, .framer-hIdsc .framer-grlu0m, .framer-hIdsc .framer-111p015, .framer-hIdsc .framer-ei1yn4, .framer-hIdsc .framer-14qdep9, .framer-hIdsc .framer-xj9vl, .framer-hIdsc .framer-1urasoe, .framer-hIdsc .framer-g38krg, .framer-hIdsc .framer-1m66xq2, .framer-hIdsc .framer-1qlleje { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-hIdsc .framer-fbve59, .framer-hIdsc .framer-1l4vr8b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-hIdsc .framer-gdyedj { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-hIdsc.framer-v-1c05ar5.framer-1bh882i { padding: 80px 32px 60px 32px; width: 810px; }`,
          `.framer-hIdsc.framer-v-1c05ar5 .framer-1gzaypg { max-width: 68%; }`,
          `.framer-hIdsc.framer-v-7tc6m6.framer-1bh882i { padding: 60px 16px 52px 16px; width: 390px; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-17xekf1 { gap: 21px; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-xa9y09 { flex-direction: column; gap: 9px; justify-content: center; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-rvvei2 { flex: none; width: 100%; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-hymgbt { gap: 0px; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-1gzaypg { max-width: 90%; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-11s588c { padding: 36px 0px 36px 0px; }`,
          `.framer-hIdsc.framer-v-7tc6m6 .framer-yoy2r3 { flex-direction: column; gap: 10px; justify-content: flex-start; }`,
          ...He,
          ...Be,
          ...Gt,
          ...Yt,
        ],
        `framer-hIdsc`,
      )),
      (Y.displayName = `Footer`),
      (Y.defaultProps = { height: 565, width: 1200 }),
      z(Y, {
        variant: {
          options: [`nqGQOK4jU`, `bGwHAFN1y`, `nUwi7Ne5z`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: L.Enum,
        },
      }),
      O(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...cn,
          ...se(Re),
          ...se(ze),
          ...se(Wt),
          ...se(Jt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Y.loader = { load: (e, t) => me([() => Ee(J, {}, t)], t) }));
  }),
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  X,
  Z,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Q,
  Pn = e(() => {
    (y(),
      j(),
      D(),
      S(),
      Ke(),
      nt(),
      Ut(),
      vn(),
      (yn = A(H)),
      (bn = A(q)),
      (xn = A(V)),
      (Sn = A(Y)),
      (Cn = {
        kj4yf8rlE: `(min-width: 1200px)`,
        oZVxZzxgf: `(min-width: 810px) and (max-width: 1199.98px)`,
        u4aDhWKvR: `(max-width: 809.98px)`,
      }),
      (wn = `framer-TLjNH`),
      (Tn = {
        kj4yf8rlE: `framer-v-4uz6t7`,
        oZVxZzxgf: `framer-v-jb7sx4`,
        u4aDhWKvR: `framer-v-1o0dz7t`,
      }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Z = {}),
      (En = Object.keys(Z)),
      (Dn = [
        `.framer-TLjNH.framer-1812cxg, .framer-TLjNH .framer-1812cxg { display: block; }`,
        `.framer-TLjNH.framer-4uz6t7 { align-content: center; align-items: center; background-color: var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, #f5f0e8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-TLjNH .framer-1u5g50o-container { flex: none; height: auto; order: -1000; position: relative; width: auto; z-index: 0; }`,
        `.framer-TLjNH .framer-1r1s5pf-container { flex: none; height: 75px; left: 0px; order: -999; position: absolute; right: 0px; top: 0px; z-index: 8; }`,
        `.framer-TLjNH .framer-ba86fo { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-TLjNH .framer-il77db-container { -webkit-user-select: none; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: 150px; left: calc(50.00000000000002% - 100% / 2); order: 1003; pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); user-select: none; width: 100%; z-index: 7; }`,
        `.framer-TLjNH .framer-4gbrvg-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (On = {
        kj4yf8rlE: `(min-width: 1200px)`,
        oZVxZzxgf: `(min-width: 810px) and (max-width: 1199.98px)`,
        u4aDhWKvR: `(max-width: 809.98px)`,
      }),
      (kn = { Desktop: `kj4yf8rlE`, Phone: `u4aDhWKvR`, Tablet: `oZVxZzxgf` }),
      (An = ({ value: e }) =>
        _e()
          ? null
          : f(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (jn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kn[r.variant] ?? r.variant ?? `kj4yf8rlE`,
      })),
      (Mn = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = x(),
          { activeLocale: a, setLocale: s } = F(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            children: p,
            ...m
          } = jn(e),
          [h, g] = Te(d, Cn, !1),
          ee = k(wn);
        return (
          Ne({}),
          f(ve.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: kn,
              isLayoutTemplate: !0,
              primaryVariantId: `kj4yf8rlE`,
              variantClassNames: Tn,
            },
            children: _(E, {
              id: u ?? i,
              children: [
                f(An, {
                  value: `:root body { background: var(--token-f781079c-c80f-4a08-99cf-d7cc187402d8, rgb(245, 240, 232)); }`,
                }),
                _(w.div, {
                  ...m,
                  className: k(ee, `framer-4uz6t7`, l),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    f(R, {
                      children: f(Ae, {
                        className: `framer-1u5g50o-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `JQr38mLyU`,
                        scopeId: `wwQ9bGhqM`,
                        children: f(H, {
                          height: `100%`,
                          id: `JQr38mLyU`,
                          intensity: 8,
                          layoutId: `JQr38mLyU`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(R, {
                      height: 75,
                      width: `100vw`,
                      y: 0,
                      children: f(Ae, {
                        className: `framer-1r1s5pf-container`,
                        nodeId: `tMsX4Hu16`,
                        scopeId: `wwQ9bGhqM`,
                        children: f(Se, {
                          breakpoint: h,
                          overrides: {
                            oZVxZzxgf: {
                              aotkfSZrY: `12px 24px 12px 24px`,
                              variant: X(`C8sz394qo`),
                            },
                            u4aDhWKvR: {
                              aotkfSZrY: `12px 16px 12px 16px`,
                              variant: X(`C8sz394qo`),
                            },
                          },
                          children: f(q, {
                            aotkfSZrY: `12px 40px 12px 40px`,
                            height: `100%`,
                            id: `tMsX4Hu16`,
                            layoutId: `tMsX4Hu16`,
                            style: { height: `100%`, width: `100%` },
                            variant: X(`pujkiXxjf`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    p,
                    f(`div`, { className: `framer-ba86fo` }),
                    f(R, {
                      children: f(Ae, {
                        className: `framer-il77db-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutScroll: !0,
                        nodeId: `kbcozaWaJ`,
                        scopeId: `wwQ9bGhqM`,
                        children: f(V, {
                          blur: 8,
                          borderRadius: `0px`,
                          direction: `to bottom`,
                          height: `100%`,
                          id: `kbcozaWaJ`,
                          layoutId: `kbcozaWaJ`,
                          style: { height: `100%`, width: `100%` },
                          transition: {
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            type: `tween`,
                          },
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(R, {
                      height: 565,
                      width: `100vw`,
                      y: 1200,
                      children: f(Ae, {
                        className: `framer-4gbrvg-container`,
                        nodeId: `V8Uei_Cpl`,
                        scopeId: `wwQ9bGhqM`,
                        children: f(Se, {
                          breakpoint: h,
                          overrides: {
                            oZVxZzxgf: { variant: X(`bGwHAFN1y`) },
                            u4aDhWKvR: { variant: X(`nUwi7Ne5z`) },
                          },
                          children: f(Y, {
                            height: `100%`,
                            id: `V8Uei_Cpl`,
                            layoutId: `V8Uei_Cpl`,
                            style: { width: `100%` },
                            variant: X(`nqGQOK4jU`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Nn = (e) =>
        e === Ie.canvas || e === Ie.export
          ? [
              ...Dn,
              ...En.flatMap((e) => {
                let t = Z[e];
                return Z[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Dn, ...En.map((e) => `@media ${On[e]} { ${Z[e].join(` `)} }`)]),
      (Q = P(Mn, Nn, `framer-TLjNH`)),
      (Q.displayName = `Main`),
      (Q.defaultProps = { height: 1e3, width: 1200 }),
      O(Q, [{ explicitInter: !0, fonts: [] }, ...yn, ...bn, ...xn, ...Sn], {
        supportsExplicitInterCodegen: !0,
      }),
      (Q.loader = {
        load: (e, t) => me([() => Ee(q, {}, t), () => Ee(Y, {}, t)], t),
      }));
  });
function Fn({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `yxmZKz1iB`:
      return b(Q, { ...i, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function In(e) {
  switch (e) {
    case `augiA20Il`:
    case `yxmZKz1iB`:
      return [
        { hash: `4uz6t7`, mediaQuery: `(min-width: 1200px)` },
        {
          hash: `jb7sx4`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
        },
        { hash: `1o0dz7t`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Ln({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: r,
  localeId: c,
  collectionItemId: u,
  contentLocaleId: d,
  shouldResolveInitialRouteContentState: f = !1,
}) {
  let p = $[e].page.preload();
  (he({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    pe(Un));
  let g = b(ke, {
    children: b(De, {
      children: b(Ce, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: r,
        routes: $,
        collectionUtils: Vn,
        serverDatabaseClient: Hn,
        framerSiteId: Un,
        notFoundPage: de(
          () =>
            import(
              `./i_UII_fc6LztJhUHJjam52aAYS5PPn_iFA0XK-_kut8.BeNtsZLr.mjs`
            ),
        ),
        isReducedMotion: void 0,
        localeId: c,
        locales: Bn,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://plain-methods-033532.framer.app`,
        EditorBar:
          C === void 0
            ? void 0
            : (() => {
                if (Gn) {
                  console.log(
                    `[Framer On-Page Editing] Unavailable because navigator is bot`,
                  );
                  return;
                }
                return de(async () => {
                  C.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: {
                      useCurrentRoute: je,
                      useLocaleInfo: F,
                      useRouter: Oe,
                    },
                    react: {
                      createElement: b,
                      Fragment: s,
                      memo: m,
                      useCallback: i,
                      useEffect: a,
                      useRef: o,
                      useState: n,
                      useLayoutEffect: l,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `../../../../assets/framer.com/edit/init.mjs`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: Fn,
        loadSnippetsModule: new xe(
          () =>
            import(
              `./aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.dObCGW41.mjs`
            ),
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: d,
      }),
    }),
    value: { routes: {} },
  });
  return (await p, g);
}
function Rn() {
  Wn && C.__framer_events.push(arguments);
}
async function zn(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || C.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    Rn(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let r, i, a, o, s, c, l;
    if (e)
      ((l = JSON.parse(t.dataset.framerHydrateV2)),
        (r = l.routeId),
        (i = l.localeId),
        (a = l.contentLocaleId),
        (o = l.pathVariables),
        (s = l.canonicalPathVariables),
        (c = l.breakpoints),
        (r = Me($, r)));
    else {
      Me($, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ae($, decodeURIComponent(location.pathname), !0, Bn);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let d = Ln({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? l?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    C !== void 0 &&
      (async () => {
        let e = $[r],
          t = Bn.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = l?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Vn) {
          let r = await Vn[e.collectionId]?.(),
            [i] = Object.values(o);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          C.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Un,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: C.location.href,
              hostname: C.location.hostname || null,
              pathname: C.location.pathname || null,
              hash: C.location.hash || null,
              search: C.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await Le({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            }),
          ));
      })();
    let f = await d;
    e
      ? (ge(`framer-rewrite-breakpoints`, () => {
          (ce(c), C.__framer_onRewriteBreakpoints?.(c));
        }),
        (Gn ? (e) => e() : u)(() => {
          (oe(), ie(), re(t, f, { onRecoverableError: n }));
        }))
      : ne(t, { onRecoverableError: n }).render(f);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var $, Bn, Vn, Hn, Un, Wn, Gn;
e(() => {
  if (
    (r(),
    j(),
    S(),
    d(),
    v(),
    Pn(),
    ($ = {
      augiA20Il: {
        elements: {
          erhEQKnnF: `faq`,
          FfZ0uW57s: `cases`,
          IwMNOecm6: `client-result-3`,
          K7zYKy1_5: `solucoes`,
          KbuQeHpgr: `expertise`,
          KqSLPYmyU: `upgoal`,
          LjsN_fNYq: `client-result-2`,
          lspSUYKWB: `step-1`,
          n0VZEt7a2: `contato`,
          n3TnSvnr_: `client-result-1`,
          OtzuAkHsV: `step-2`,
          raMTciCtJ: `step-4`,
          ygzLrb7il: `step-3`,
        },
        page: de(
          () =>
            import(
              `./WdA-juP_s2IlbZrDYlpOaXPVclJnbU7kUNbsduhbaDY.CliQC5tq.mjs`
            ),
        ),
        path: `/`,
      },
      yxmZKz1iB: {
        elements: {},
        page: de(
          () =>
            import(
              `./i_UII_fc6LztJhUHJjam52aAYS5PPn_iFA0XK-_kut8.BeNtsZLr.mjs`
            ),
        ),
        path: `/404`,
      },
    }),
    (Bn = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    (Vn = {}),
    (Hn = void 0),
    (Un = `d83385c8ccf8817b1b623c10c397c476ab3c0dac424691813abee3180a075779`),
    (Wn = typeof document < `u`),
    (Gn =
      Wn &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        c.userAgent,
      )),
    Wn)
  ) {
    ((C.__framer_importFromPackage = (e, t) => () =>
      b(we, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (C.__framer_events = C.__framer_events || []),
      fe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? zn(!0, e) : zn(!1, e);
  }
  (function () {
    Wn &&
      u(() => {
        re(
          document.getElementById(`__framer-badge-container`),
          b(ee, {}, b(te(() => import(`./PX9hIOIVM.CBMZzM8O.mjs`)))),
        );
      });
  })();
})();
export { In as getLayoutTemplateBreakpoints, Ln as getPageRoot };
//# sourceMappingURL=script_main.BqZwZH-d.mjs.map
