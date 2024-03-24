import { WebGLRenderer, Clock, Scene } from "three";
import { getCanvas } from "../tool/functions";
import Camera from "./camera";

export default class Graphic extends WebGLRenderer {
  scene: Scene;
  clock = new Clock();
  camera: Camera;
  cbUpdate?: Function;
  cbLoop: () => void;

  constructor(scene: Scene, camera: Camera) {
    super({ canvas: getCanvas(), antialias: true });
    this.scene = scene;
    this.camera = camera;
    this.cbLoop = this.loop.bind(this);
    this.shadowMap.enabled = true;
    window.addEventListener("resize", this.resize.bind(this), false);
    this.loop();
  }

  loop() {
    const dt = this.clock.getDelta();
    if (this.cbUpdate) this.cbUpdate(dt);
    this.render(this.scene, this.camera);
    requestAnimationFrame(this.cbLoop);
  }

  onUpdate(callback: (dt: number) => void) {
    this.cbUpdate = callback;
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.setSize(window.innerWidth, window.innerHeight);
  }
}
