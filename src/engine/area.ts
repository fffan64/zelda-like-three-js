import { Box3, Vector3 } from "three";

export default class Area extends Box3 {
  type: string | null = null;

  constructor(mesh: THREE.Mesh) {
    super();
    this.type = mesh.name.split("_")[1];
    this.copy(mesh.geometry.boundingBox!);
  }

  in(position: Vector3) {
    const col = this.containsPoint(position);
    if (col) return this.type;
  }
}
