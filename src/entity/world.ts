import { Object3D } from "three";
import { createRigidBodyFixed } from "../tool/functions";
import Physic from "../engine/physic";
import Area from "../engine/area";

export default class World extends Object3D {
  areas: Area[] = [];

  constructor(
    visuals: THREE.Mesh[],
    colliders: THREE.Mesh[],
    areas: THREE.Mesh[],
    physic: typeof Physic
  ) {
    super();
    this.initPhysic(colliders, physic);
    this.initVisual(visuals);
    this.initArea(areas);
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

  initArea(areas: THREE.Mesh[]) {
    for (const area of areas) {
      this.areas.push(new Area(area));
    }
  }
}
