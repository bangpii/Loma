import { Vector3 as v, Mesh as H, SphereGeometry as W, MeshBasicMaterial as L, Quaternion as P } from "three";
/**
 *  @license
 *  Copyright 2017 Adam Miskiewicz
 *
 *  Use of this source code is governed by a MIT-style license that can be found
 *  in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
function w(f, t) {
  if (!f)
    throw new Error(t);
}
function l(f, t) {
  return typeof f < "u" && f !== null ? f : t;
}
/**
 *  @license
 *  Copyright 2017 Adam Miskiewicz
 *
 *  Use of this source code is governed by a MIT-style license that can be found
 *  in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
const M = class M {
  constructor(t = {}) {
    this._listeners = [], this._currentAnimationStep = 0, this._currentTime = 0, this._springTime = 0, this._currentValue = 0, this._currentVelocity = 0, this._isAnimating = !1, this._oscillationVelocityPairs = [], this._config = {
      fromValue: l(t.fromValue, 0),
      toValue: l(t.toValue, 1),
      stiffness: l(t.stiffness, 100),
      damping: l(t.damping, 10),
      mass: l(t.mass, 1),
      initialVelocity: l(t.initialVelocity, 0),
      overshootClamping: l(t.overshootClamping, !1),
      allowsOverdamping: l(t.allowsOverdamping, !1),
      restVelocityThreshold: l(t.restVelocityThreshold, 1e-3),
      restDisplacementThreshold: l(
        t.restDisplacementThreshold,
        1e-4
      ),
      maxVelocity: l(t.maxVelocity, 1 / 0)
    }, this._currentValue = this._config.fromValue, this._currentVelocity = this._config.initialVelocity;
  }
  /**
   * If `fromValue` differs from `toValue`, or `initialVelocity` is non-zero,
   * start the simulation and call the `onStart` listeners.
   */
  start() {
    const { fromValue: t, toValue: i, initialVelocity: e } = this._config;
    return (t !== i || e !== 0) && (this._reset(), this._isAnimating = !0), this;
  }
  /**
   * If a simulation is in progress, stop it and call the `onStop` listeners.
   */
  stop() {
    return this._isAnimating ? (this._isAnimating = !1, this._notifyListeners("onStop"), this._currentAnimationStep && (cancelAnimationFrame(this._currentAnimationStep), this._currentAnimationStep = 0), this) : this;
  }
  /**
   * The spring's current position.
   */
  get currentValue() {
    return this._currentValue;
  }
  /**
   * The spring's current velocity in units / ms.
   */
  get currentVelocity() {
    return this._currentVelocity;
  }
  /**
   * If the spring has reached its `toValue`, or if its velocity is below the
   * `restVelocityThreshold`, it is considered at rest. If `stop()` is called
   * during a simulation, both `isAnimating` and `isAtRest` will be false.
   */
  get isAtRest() {
    return this._isSpringAtRest();
  }
  /**
   * Whether or not the spring is currently emitting values.
   *
   * Note: this is distinct from whether or not it is at rest.
   * See also `isAtRest`.
   */
  get isAnimating() {
    return this._isAnimating;
  }
  /**
   * Updates the spring config with the given values.  Values not explicitly
   * supplied will be reused from the existing config.
   */
  updateConfig(t) {
    this._advanceSpringToTime(Date.now());
    const i = {
      fromValue: this._currentValue,
      initialVelocity: this._currentVelocity
    };
    return this._config = {
      ...this._config,
      ...i,
      ...t
    }, this._reset(), this;
  }
  /**
   * The provided callback will be invoked when the simulation begins.
   */
  onStart(t) {
    return this._listeners.push({ onStart: t }), this;
  }
  /**
   * The provided callback will be invoked on each frame while the simulation is
   * running.
   */
  onUpdate(t) {
    return this._listeners.push({ onUpdate: t }), this;
  }
  /**
   * The provided callback will be invoked when the simulation ends.
   */
  onStop(t) {
    return this._listeners.push({ onStop: t }), this;
  }
  /**
   * Remove a single listener from this spring.
   */
  removeListener(t) {
    return this._listeners = this._listeners.reduce((i, e) => (Object.values(e).indexOf(t) !== -1 || i.push(e), i), []), this;
  }
  /**
   * Removes all listeners from this spring.
   */
  removeAllListeners() {
    return this._listeners = [], this;
  }
  _reset() {
    this._currentTime = Date.now(), this._springTime = 0, this._currentValue = this._config.fromValue, this._currentVelocity = this._config.initialVelocity;
  }
  _notifyListeners(t) {
    this._listeners.forEach((i) => {
      const e = i[t];
      typeof e == "function" && e(this);
    });
  }
  /**
   * `_step` is the main loop.  While the animation is running, it updates the
   * current state once per frame, and schedules the next frame if the spring is
   * not yet at rest.
   */
  _step(t) {
    this._advanceSpringToTime(t, !0);
  }
  _advanceSpringToTime(t, i = !1) {
    if (!this._isAnimating)
      return;
    let e = t - this._currentTime;
    e > M.MAX_DELTA_TIME_MS && (e = M.MAX_DELTA_TIME_MS), this._springTime += e;
    const h = this._config.damping, p = this._config.mass, m = this._config.stiffness, x = this._config.fromValue, d = this._config.toValue, g = -this._config.initialVelocity, A = this._config.maxVelocity;
    w(p > 0, "Mass value must be greater than 0"), w(m > 0, "Stiffness value must be greater than 0");
    let s = h / (2 * Math.sqrt(m * p));
    const r = Math.sqrt(m / p) / 1e3, u = r * Math.sqrt(1 - s * s), a = r * Math.sqrt(s * s - 1), o = d - x;
    s > 1 && !this._config.allowsOverdamping && (s = 1);
    let y = 0, _ = 0;
    const n = this._springTime;
    if (s < 1) {
      const c = Math.exp(-s * r * n);
      y = d - c * ((g + s * r * o) / u * Math.sin(u * n) + o * Math.cos(u * n)), _ = s * r * c * (Math.sin(u * n) * (g + s * r * o) / u + o * Math.cos(u * n)) - c * (Math.cos(u * n) * (g + s * r * o) - u * o * Math.sin(u * n));
    } else if (s === 1) {
      const c = Math.exp(-r * n);
      y = d - c * (o + (g + r * o) * n), _ = c * (g * (n * r - 1) + n * o * (r * r));
    } else {
      const c = Math.exp(-s * r * n);
      y = d - c * ((g + s * r * o) * Math.sinh(a * n) + a * o * Math.cosh(a * n)) / a, _ = c * s * r * (Math.sinh(a * n) * (g + s * r * o) + o * a * Math.cosh(a * n)) / a - c * (a * Math.cosh(a * n) * (g + s * r * o) + a * a * o * Math.sinh(a * n)) / a;
    }
    if (_ = Math.max(-A, Math.min(A, _)), this._currentTime = t, this._currentValue = y, this._currentVelocity = _, !!i && (this._notifyListeners("onUpdate"), !!this._isAnimating && (this._isSpringOvershooting() || this._isSpringAtRest()))) {
      m !== 0 && (this._currentValue = d, this._currentVelocity = 0, this._notifyListeners("onUpdate")), this.stop();
      return;
    }
  }
  _isSpringOvershooting() {
    const { stiffness: t, fromValue: i, toValue: e, overshootClamping: h } = this._config;
    let p = !1;
    return h && t !== 0 && (i < e ? p = this._currentValue > e : p = this._currentValue < e), p;
  }
  _isSpringAtRest() {
    const {
      stiffness: t,
      toValue: i,
      restDisplacementThreshold: e,
      restVelocityThreshold: h
    } = this._config, p = Math.abs(this._currentVelocity) <= h;
    return t !== 0 && Math.abs(i - this._currentValue) <= e && p;
  }
};
M.MAX_DELTA_TIME_MS = 1 / 60 * 1e3 * 4;
let V = M;
const D = {
  stiffness: 500,
  damping: 17
}, S = new v(), C = new v(), T = new H(
  new W(0.03),
  new L({ transparent: !0 })
);
class O {
  constructor(t, i = {}) {
    this.options = { ...D, ...i };
    const e = t.clone();
    t.parent.add(e), e.add(t), this.target = t, this.targetHelper = T.clone(), i.scene && i.scene.add(this.targetHelper), this.currentHelper = T.clone(), i.scene && i.scene.add(this.currentHelper), this.currentHelper.add(T.clone()), this.currentHelper.children[0].position.y = -0.1, this._isFirstStep = !0;
    const h = {
      stiffness: this.options.stiffness,
      damping: this.options.damping
    };
    this.springX = new V({ fromValue: 0, toValue: 0, ...h }), this.springY = new V({ fromValue: 0, toValue: 0, ...h }), this.springZ = new V({ fromValue: 0, toValue: 0, ...h }), this.originPosition = t.position.clone(), this.originRotation = t.rotation.clone(), this.oldBoneWorldPosition = new v(), this.oldBoneWorldRotation = new P(), this.target.getWorldPosition(this.oldBoneWorldPosition), this.target.getWorldQuaternion(this.oldBoneWorldRotation), this.restLength = this.target.parent.position.length(), this.reset();
  }
  reset() {
    this._isFirstStep = !0, this.target.position.copy(this.originPosition), this.target.rotation.copy(this.originRotation), this.target.updateMatrixWorld(!0, !1), this.target.getWorldPosition(this.oldBoneWorldPosition);
  }
  dispose() {
    this.reset();
    const t = this.target.parent, i = t.parent;
    i.remove(t), i.add(this.target);
  }
  update(t = null) {
    if (!t)
      if (this.ms) {
        const e = performance.now();
        t = e - this.ms, t /= 1e3, this.ms = e;
      } else
        this.ms = performance.now(), t = 16 / 1e3;
    let i = 1;
    if (t = Math.min(t, 100), t > 0.01 && (i = 2), t >= 100 && (i = 25), !(t < 6e-3))
      for (let e = 0; e < i; e++)
        this.step(85e-4 * 100);
  }
  step(t) {
    this.target.parent.updateMatrixWorld(!0, !1), this.targetHelper.position.copy(this.originPosition), this.target.parent.localToWorld(this.targetHelper.position), this._isFirstStep && (this._isFirstStep = !1, this.springX.updateConfig({ fromValue: this.targetHelper.position.x }), this.springY.updateConfig({ fromValue: this.targetHelper.position.y }), this.springZ.updateConfig({ fromValue: this.targetHelper.position.z })), this.springX.updateConfig({ toValue: this.targetHelper.position.x }).start(), this.springY.updateConfig({ toValue: this.targetHelper.position.y }).start(), this.springZ.updateConfig({ toValue: this.targetHelper.position.z }).start();
    const i = Date.now();
    this.springX._step(i), this.springY._step(i), this.springZ._step(i), this.target.position.set(
      this.springX.currentValue,
      this.springY.currentValue,
      this.springZ.currentValue
    ), this.target.parent.worldToLocal(this.target.position), this.oldBoneWorldPosition.copy(S);
    const e = this.target.parent.getWorldPosition(C);
    this.currentHelper.position.copy(S), this.currentHelper.updateMatrixWorld(!0, !1), this.currentHelper.lookAt(e);
    const h = this.target.position.clone();
    h.normalize(), this.target.up.set(0, 1, 0), this.target.quaternion.setFromUnitVectors(this.target.up, h), this.target.position.set(0, 0, 0), this.target.updateMatrix();
  }
}
export {
  O as WiggleBone
};
