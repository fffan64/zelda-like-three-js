import { GLTFLoader } from "three/addons";
import { browse } from "./functions";
import { Object3D, Object3DEventMap } from "three";

const loaderGlb = new GLTFLoader();

export async function loadWorld(path: string) {
  const glb = await loaderGlb.loadAsync(path);
  const visuals: THREE.Mesh[] = [];
  const colliders: THREE.Mesh[] = [];
  const areas: THREE.Mesh[] = [];

  for (const mesh of glb.scene.children) {
    if ((mesh as THREE.Mesh).isMesh) {
      const name = mesh.name;
      if (name.includes("area")) {
        areas.push(mesh as THREE.Mesh);
      } else if (name.includes("collider")) {
        colliders.push(mesh as THREE.Mesh);
      } else {
        visuals.push(mesh as THREE.Mesh);
      }
    }
  }

  return { visuals, colliders, areas };
}

export async function loadEntity(path: string) {
  const glb = await loaderGlb.loadAsync(path);
  const mesh: MeshEx = glb.scene.children[0] as THREE.Mesh;
  browse(mesh, (m: Object3D<Object3DEventMap>) => {
    m.castShadow = true;
  });
  mesh.clips = glb.animations;
  return mesh;
}
