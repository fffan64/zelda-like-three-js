import "./style.css";
import { Scene } from "three";
import Graphic from "./engine/graphic";
import Camera from "./engine/camera";
import Light from "./engine/light";
import { loadWorld, loadEntity } from "./tool/loader";
import physic from "./engine/physic";
import World from "./entity/world";
import Player from "./entity/player";

const assetW = await loadWorld("./glb/world2.glb");
const assetP = await loadEntity("./glb/character.glb");

const scene = new Scene();
const camera = new Camera();
const world = new World(assetW.visuals, assetW.colliders, assetW.areas, physic);
const player = new Player(assetP, physic);
const light = new Light();

scene.add(world);
scene.add(light);
scene.add(player);

const graphic = new Graphic(scene, camera);
graphic.onUpdate((dt) => {
  physic.step();
  player.update(dt, world.areas);
  camera.update(player);
  light.update(player);
});
