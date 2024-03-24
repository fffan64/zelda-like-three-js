import { Object3D, Object3DEventMap } from "three";
import Gamepad from "../control/gamepad";
import { createRigidBodyEntity } from "../tool/functions";
import Physic from "../engine/physic";
import { Collider, RigidBody } from "@dimforge/rapier3d-compat";

const SPEED = 3;

export default class Player extends Object3D {
  collider: Collider | null = null;
  rigidBody: RigidBody | null = null;
  ctrl: Gamepad | null = new Gamepad();

  constructor(mesh: Object3D<Object3DEventMap>, physic: typeof Physic) {
    super();
    this.position.copy(mesh.position);
    this.initPhysic(physic);
    this.initVisual(mesh);
  }

  initPhysic(physic: typeof Physic) {
    const { rigidBody, collider } = createRigidBodyEntity(
      this.position,
      physic
    );
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual(mesh: Object3D<Object3DEventMap>) {
    mesh.position.set(0, 0, 0);
    mesh.castShadow = true;
    this.add(mesh);
  }

  update() {
    this.updatePhysic();
    this.updateVisual();
  }

  updatePhysic() {
    const x = this.ctrl!.x * SPEED;
    const z = this.ctrl!.z * SPEED;
    const y = this.rigidBody!.linvel().y;
    this.rigidBody!.setLinvel({ x, y, z }, true);
  }

  updateVisual() {
    this.position.copy(this.rigidBody!.translation());
  }
}
