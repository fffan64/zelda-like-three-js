import {
  ColliderDesc,
  RigidBody,
  RigidBodyDesc,
  Vector3,
} from "@dimforge/rapier3d-compat";
import Physic from "../engine/physic";
import { AnimationClip } from "three";

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

export function floor(float: number, max = 0.2) {
  return Math.abs(float) < max ? 0 : float;
}

export function findByName(name: string, list: AnimationClip[]) {
  return list.find((a) => name === a.name);
}

export function browse(
  object: THREE.Mesh,
  callback: (obj: THREE.Mesh) => void
) {
  if (object.isMesh) callback(object);
  const children = object.children;
  for (let i = 0; i < children.length; i++) {
    browse(children[i] as THREE.Mesh, callback);
  }
}

Math.angle = function angle(x, z) {
  return Math.atan2(-z, x) + Math.PI / 2;
};

export function range(angle1: number, angle2: number) {
  let angle = ((angle1 - angle2 + Math.PI) % (Math.PI * 2)) - Math.PI;
  angle < -Math.PI ? angle + Math.PI * 2 : angle;
  return angle;
}

const reg = /\[(.*?)\]/;
export function getSrc(src: string) {
  const match = src.match(reg);
  if (match !== null) {
    const range = match[1].split("-");
    const iBegin = parseInt(range[0], 10);
    const iEnd = parseInt(range[1], 10);
    const size = iEnd - iBegin + 1;
    const source = src.split("[")[0];
    const ext = src.split("]")[1];
    return new Array(size)
      .fill(null)
      .map((_, i) => source + (i + iBegin) + ext);
  }
  return [src];
}

export function randomInt(range = 1) {
  return Math.floor(Math.random() * range);
}
