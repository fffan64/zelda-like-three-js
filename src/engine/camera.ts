import { PerspectiveCamera } from "three";
import Player from "../entity/player";

export default class Camera extends PerspectiveCamera {
  constructor() {
    super(70, innerWidth / innerHeight);
    this.position.set(0, 5.4, 9);
    this.lookAt(0, 0, 1.8);
  }

  update(player: Player) {
    this.position.copy(player.position);
    this.position.y += 4;
    this.position.z += 4;
  }
}
