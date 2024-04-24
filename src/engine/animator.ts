import { LoopOnce, AnimationMixer, AnimationClip } from "three";
import { findByName } from "../tool/functions";
import "../tool/overwrite";

type EventAnimator = "loop" | "half" | "start";

export default class Animator {
  animations = new Map();
  mixer?: AnimationMixer;
  clips?: AnimationClip[];
  current: any = null;
  listeners = new Map();

  constructor(mesh: MeshEx) {
    this.mixer = new AnimationMixer(mesh);
    this.clips = mesh.clips;
    this.initListeners();
  }

  initListeners() {
    this.mixer?.addEventListener("loop", () => {
      this.fireListener(this.current._clip.name, "loop");
    });
    this.mixer?.addEventListener("half", () => {
      this.fireListener(this.current._clip.name, "half");
    });
  }

  load(name: string, duration: number, once?: boolean) {
    const clip = findByName(name, this.clips!);
    const animation = this.mixer!.clipAction(clip!);
    animation.setDuration(duration);
    if (once) animation.setLoop(LoopOnce, 0);
    this.animations.set(name, animation);
    this.listeners.set(name, new Map());
  }

  play(name: string) {
    const animation = this.animations.get(name);
    if (this.current && this.current !== animation) this.current.stop();
    this.current = animation;
    if (this.current.isRunning()) return;
    this.fireListener(this.current._clip.name, "start");
    this.current.play();
  }

  isPlaying(name: string) {
    return this.animations.get(name).isRunning();
  }

  update(dt: number) {
    this.mixer!.update(dt);
  }

  fireListener(name: string, event: EventAnimator) {
    const listener = this.listeners.get(name);
    if (listener.get(event)) listener.get(event)();
  }

  on(name: string, event: EventAnimator, callback: Function) {
    this.listeners.get(name).set(event, callback);
  }
}
