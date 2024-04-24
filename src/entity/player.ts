import { Object3D, Object3DEventMap, Vector3 } from "three";
import Gamepad from "../control/gamepad";
import { createRigidBodyEntity, range } from "../tool/functions";
import Physic from "../engine/physic";
import { Collider, RigidBody } from "@dimforge/rapier3d-compat";
import Animator from "../engine/animator";
import Sound from "../engine/sound";
import Area from "../engine/area";

const SPEED = 3;
const ATTACK = "attack1";
const IDLE = "idle";
const RUN = "run";
const SHIELD = "idle_shield";

const YELL = "./sounds/attack[1-4].wav";
const SWORD = "./sounds/sword[1-2].wav";
const GRASS_R = "./sounds/step_grass[1-2].wav";
const GRASS_L = "./sounds/step_grass[3-4].wav";
const STONE_R = "./sounds/step_stone[1-2].wav";
const STONE_L = "./sounds/step_stone[3-4].wav";
const WOOD_R = "./sounds/step_wood1.wav";
const WOOD_L = "./sounds/step_wood2.wav";
const DIRT_R = "./sounds/step_dirt[1-2].wav";
const DIRT_L = "./sounds/step_dirt[3-4].wav";
const WARD = "./sounds/shield.wav";

const GRASS = "grass";
const STEP_R = { grass: GRASS_R, wood: WOOD_R, dirt: DIRT_R, stone: STONE_R };
const STEP_L = { grass: GRASS_L, wood: WOOD_L, dirt: DIRT_L, stone: STONE_L };

type Step_Sound = keyof typeof STEP_R;

export default class Player extends Object3D {
  collider: Collider | null = null;
  rigidBody: RigidBody | null = null;
  animator: Animator | null = null;
  sound: Sound | null = new Sound();
  ctrl: Gamepad | null = new Gamepad();
  ground: string = "";

  constructor(mesh: MeshEx, physic: typeof Physic) {
    super();
    const origin = new Vector3(0, 4, 0);
    this.initPhysic(physic, origin);
    this.initVisual(mesh);
    this.initAnimations(mesh);
    this.initSound();
    this.syncAnimSound();
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
    animator.load(SHIELD, 3);
    this.animator = animator;
  }

  initSound() {
    this.sound!.load(YELL);
    this.sound!.load(SWORD);
    this.sound!.load(GRASS_R);
    this.sound!.load(GRASS_L);
    this.sound!.load(STONE_R);
    this.sound!.load(STONE_L);
    this.sound!.load(WOOD_R);
    this.sound!.load(WOOD_L);
    this.sound!.load(DIRT_R);
    this.sound!.load(DIRT_L);
    this.sound!.load(WARD);
  }

  update(dt: number, areas: Area[]) {
    this.updatePhysic();
    this.updateVisual(dt);
    this.updateAnimation(dt);
    this.updateGround(areas);
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
    if (this.ctrl?.lock) {
      this.animator?.play(SHIELD);
    } else if (this.ctrl?.attack) {
      this.animator?.play(ATTACK);
    } else if (this.ctrl?.moving) {
      this.animator?.play(RUN);
    } else {
      this.animator?.play(IDLE);
    }
    this.animator?.update(dt);
  }

  updateGround(areas: Area[]) {
    this.ground = GRASS;
    for (let area of areas) {
      const type = area.in(this.position);
      if (type) {
        this.ground = type;
        break;
      }
    }
  }

  syncAnimSound() {
    this.animator?.on(ATTACK, "half", () => {
      this.sound?.play(YELL);
    });
    this.animator?.on(RUN, "loop", () => {
      this.sound?.play(STEP_R[this.ground as Step_Sound]);
    });
    this.animator?.on(RUN, "half", () => {
      this.sound?.play(STEP_L[this.ground as Step_Sound]);
    });
    this.animator?.on(SHIELD, "start", () => {
      this.sound?.play(WARD);
    });
  }
}
