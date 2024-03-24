import {
  ColliderDesc,
  RigidBody,
  RigidBodyDesc,
  Vector3,
} from "@dimforge/rapier3d-compat";
import Physic from "../engine/physic";

export function getCanvas() {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  return canvas;
}

function createColliderBall(
  radius: number,
  rigidBody: RigidBody,
  physic: typeof Physic
) {
  const colliderDesc = ColliderDesc.ball(radius);
  return physic.createCollider(colliderDesc, rigidBody);
}

function createColliderGeo(
  geo: THREE.BufferGeometry,
  rigidBody: RigidBody,
  physic: typeof Physic
) {
  const vertices = new Float32Array(geo.attributes.position.array);
  const indices = new Uint32Array(geo.index!.array);
  const colliderDesc = ColliderDesc.trimesh(vertices, indices);
  return physic.createCollider(colliderDesc, rigidBody);
}

export function createRigidBodyFixed(mesh: THREE.Mesh, physic: typeof Physic) {
  const rigidBodyDesc = RigidBodyDesc.fixed();
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  createColliderGeo(mesh.geometry, rigidBody, physic);
}

export function createRigidBodyEntity(
  position: Vector3,
  physic: typeof Physic
) {
  const rigidBodyDesc = RigidBodyDesc.dynamic();
  rigidBodyDesc.setTranslation(position.x, position.y, position.z);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  const collider = createColliderBall(0.25, rigidBody, physic);
  return { rigidBody, collider };
}

// export function createCollider(mesh: THREE.Mesh, physic: typeof Physic) {
//   const geo = mesh.geometry;
//   const vertices = new Float32Array(geo.attributes.position.array);
//   const indices = new Uint32Array(geo.index!.array);
//   const colliderDesc = ColliderDesc.trimesh(vertices, indices);
//   return physic.createCollider(colliderDesc);
// }

// export function createRigidBody(position: Vector3, physic: typeof Physic) {
//   const rigidBodyDesc = RigidBodyDesc.dynamic();
//   rigidBodyDesc.setTranslation(position.x, position.y, position.z);
//   const rigidBody = physic.createRigidBody(rigidBodyDesc);
//   const colliderDesc = ColliderDesc.ball(0.25);
//   const collider = physic.createCollider(colliderDesc, rigidBody);
//   return { rigidBody, collider };
// }

export function floor(float: number, max = 0.2) {
  return Math.abs(float) < max ? 0 : float;
}
