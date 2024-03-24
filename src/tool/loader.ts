import { GLTFLoader } from "three/addons";

const loaderGlb = new GLTFLoader();

export default async function loadAssets(path: string) {
  const glb = await loaderGlb.loadAsync(path);
  const visuals: THREE.Mesh[] = [];
  const colliders: THREE.Mesh[] = [];
  const players: THREE.Mesh[] = [];

  for (const mesh of glb.scene.children) {
    if ((mesh as THREE.Mesh).isMesh) {
      const name = mesh.name;
      // console.log(mesh);
      if (name.includes("visual")) {
        visuals.push(mesh as THREE.Mesh);
      } else if (name.includes("collider")) {
        colliders.push(mesh as THREE.Mesh);
      } else if (name.includes("player")) {
        players.push(mesh as THREE.Mesh);
      }
    }
  }

  return { visuals, colliders, players };
}
