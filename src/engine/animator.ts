import { LoopOnce, AnimationMixer, AnimationClip } from "three";
import { findByName } from "../tool/functions";

export default class Animator {
  animations = new Map();
  mixer?: AnimationMixer;
  clips?: AnimationClip[];
  current: any = null;

  constructor(mesh: MeshEx) {
    this.mixer = new AnimationMixer(mesh);
    this.clips = mesh.clips;
  }

  load(name: string, duration: number, once?: boolean) {
    const clip = findByName(name, this.clips!);
    const animation = this.mixer!.clipAction(clip!);
    animation.setDuration(duration);
    if (once) animation.setLoop(LoopOnce, 0);
    this.animations.set(name, animation);
  }

  play(name: string) {
    const animation = this.animations.get(name);
    if (this.current && this.current !== animation) this.current.stop();
    this.current = animation;
    if (this.current.isRunning()) return;
    this.current.play();
  }

  isPlaying(name: string) {
    return this.animations.get(name).isRunning();
  }

  update(dt: number) {
    this.mixer!.update(dt);
  }
}
