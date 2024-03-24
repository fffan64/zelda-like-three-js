import { Object3D, Object3DEventMap, Vector3 } from "three";
import Gamepad from "../control/gamepad";
import { createRigidBodyEntity, range } from "../tool/functions";
import Physic from "../engine/physic";
import { Collider, RigidBody } from "@dimforge/rapier3d-compat";
import Animator from "../engine/animator";

const SPEED = 3;
const ATTACK = "attack1";
const IDLE = "idle";
const RUN = "run";

export default class Player extends Object3D {
  collider: Collider | null = null;
  rigidBody: RigidBody | null = null;
  animator: Animator | null = null;
  ctrl: Gamepad | null = new Gamepad();

  constructor(mesh: MeshEx, physic: typeof Physic) {
    super();
    const origin = new Vector3(0, 4, 0);
    this.position.copy(mesh.position);
    this.initPhysic(physic, origin);
    this.initVisual(mesh);
    this.initAnimations(mesh);
  }

  initPhysic(physic: typeof Physic, origin: Vector3) {
    const { rigidBody, collider } = createRigidBodyEntity(origin, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual(mesh: Object3D<Object3DEventMap>) {
    this.add(mesh);
  }

  initAnimations(mesh: MeshEx) {
    const animator = new Animator(mesh);
    animator.load(ATTACK, 0.3);
    animator.load(IDLE, 3);
    animator.load(RUN, 0.5);
    this.animator = animator;
  }

  update(dt: number) {
    this.updatePhysic();
    this.updateVisual(dt);
    this.updateAnimation(dt);
  }

  updatePhysic() {
    const attack = this.ctrl!.attack;
    let x = attack ? 0 : this.ctrl!.x * SPEED;
    let z = attack ? 0 : this.ctrl!.z * SPEED;
    let y = this.rigidBody!.linvel().y;
    this.rigidBody!.setLinvel({ x, y, z }, true);
  }

  updateVisual(dt: number) {
    this.position.copy(this.rigidBody!.translation());
    if (this.ctrl!.moving) {
      this.rotation.y += range(this.ctrl!.angle, this.rotation.y) * dt * 10;
    }
  }

  updateAnimation(dt: number) {
    if (this.ctrl!.attack) {
      this.animator!.play(ATTACK);
    } else if (this.ctrl!.moving) {
      this.animator!.play(RUN);
    } else {
      this.animator!.play(IDLE);
    }
    this.animator!.update(dt);
  }
}
