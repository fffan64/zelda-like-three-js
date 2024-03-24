interface Math {
  angle(x: number, z: number): number;
}

type MeshEx = {
  clips?: AnimationClip[];
} & THREE.Mesh;
