import { Object3D } from "three";
import { createRigidBodyFixed } from "../tool/functions";
import Physic from "../engine/physic";

export default class World extends Object3D {
  constructor(
    visuals: THREE.Mesh[],
    colliders: THREE.Mesh[],
    physic: typeof Physic
  ) {
    super();
    this.initPhysic(colliders, physic);
    this.initVisual(visuals);
  }

  initPhysic(meshes: THREE.Mesh[], physic: typeof Physic) {
    for (const mesh of meshes) {
      createRigidBodyFixed(mesh, physic);
    }
  }

  initVisual(meshes: THREE.Mesh[]) {
    for (const mesh of meshes) {
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      this.add(mesh);
    }
  }
}
