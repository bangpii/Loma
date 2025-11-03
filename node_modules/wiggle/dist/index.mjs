import { Vector3 as r, Mesh as a, SphereGeometry as h, MeshBasicMaterial as l, Quaternion as p } from "three";
const c = {
  velocity: 0.1,
  maxStretch: 0.1
}, o = new r(), d = new r(), s = new a(
  new h(0.03),
  new l({ transparent: !0 })
);
class f {
  constructor(t, e = {}, i = !1) {
    this.options = { ...c, ...e };
    const n = t.clone();
    t.parent.add(n), n.add(t), this.target = t, this.targetHelper = s.clone(), e.scene && e.scene.add(this.targetHelper), this.currentHelper = s.clone(), e.scene && e.scene.add(this.currentHelper), this.currentHelper.add(s.clone()), this.currentHelper.children[0].position.y = -0.1, this._isFirstStep = !0, this.originPosition = t.position.clone(), this.originRotation = t.rotation.clone(), this.oldBoneWorldPosition = new r(), this.oldBoneWorldRotation = new p(), this.target.getWorldPosition(this.oldBoneWorldPosition), this.target.getWorldQuaternion(this.oldBoneWorldRotation), this.restLength = this.target.parent.position.length();
  }
  reset() {
    this._isFirstStep = !0, this.target.position.copy(this.originPosition), this.target.rotation.copy(this.originRotation), this.target.updateMatrixWorld(!0, !1), this.target.getWorldPosition(this.oldBoneWorldPosition);
  }
  dispose() {
    this.reset();
    const t = this.target.parent, e = t.parent;
    e.remove(t), e.add(this.target);
  }
  update(t = null) {
    if (!t)
      if (this.ms) {
        const i = performance.now();
        t = i - this.ms, t /= 1e3, this.ms = i;
      } else
        this.ms = performance.now(), t = 16 / 1e3;
    let e = 1;
    if (t = Math.min(t, 100), t > 0.01 && (e = 2), t >= 100 && (e = 25), !(t < 6e-3))
      for (let i = 0; i < e; i++)
        this.step(85e-4 * 100);
  }
  step(t) {
    this.target.parent.updateMatrixWorld(!0, !1), this.targetHelper.position.copy(this.originPosition), this.target.parent.localToWorld(this.targetHelper.position), this._isFirstStep && (this._isFirstStep = !1, this.oldBoneWorldPosition.copy(this.targetHelper.position)), o.copy(this.oldBoneWorldPosition).lerp(
      this.targetHelper.position,
      Math.min(this.options.velocity * t, 0.99999)
    ), this.target.position.copy(o), this.target.parent.worldToLocal(this.target.position), this.oldBoneWorldPosition.copy(o);
    const e = this.target.parent.getWorldPosition(d);
    this.currentHelper.position.copy(o), this.currentHelper.updateMatrixWorld(!0, !1), this.currentHelper.lookAt(e);
    const i = this.target.position.clone();
    i.normalize(), this.target.up.set(0, 1, 0), this.target.quaternion.setFromUnitVectors(this.target.up, i), this.target.position.set(0, 0, 0), this.target.updateMatrix();
  }
}
export {
  f as WiggleBone
};
