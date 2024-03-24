import "./style.css";
import { Scene } from "three";
import Graphic from "./engine/graphic";
import Camera from "./engine/camera";
import Light from "./engine/light";
import loader from "./tool/loader";
import physic from "./engine/physic";
import World from "./entity/world";
import Player from "./entity/player";

// const meshes = await loader("./glb/DamagedHelmet.glb");
const meshes = await loader("./glb/world0.glb");

const scene = new Scene();
const camera = new Camera();
const world = new World(meshes.visuals, meshes.colliders, physic);
const player = new Player(meshes.players[0], physic);
const light = new Light();

scene.add(world);
scene.add(light);
scene.add(player);

const graphic = new Graphic(scene, camera);
graphic.onUpdate((dt) => {
  physic.step();
  player.update();

  // light.rotation.y += 0.01;

  camera.update(player);
  light.update(player);
});
