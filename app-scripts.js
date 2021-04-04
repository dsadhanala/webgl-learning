import { Engine, Scene, SceneLoader } from "@babylonjs/core";
// import { introModule } from './modules/intro';
import { solarSystem } from './modules/solar-system';

const onLoad = () => {
    const hour = (new Date()).getHours();
    const isNight = hour > 19;
    const texturesPath = "./textures/2k";

    const canvas = document.querySelector('#render-canvas');
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    // Babylon.js Basics
    // introModule({ canvas, scene });

    // Solar System Project
    solarSystem({ canvas, scene, isNight, texturesPath });

    // render on page
    engine.runRenderLoop(() => scene.render());

    // resize listener to resize engine
    window.addEventListener('resize', () => { engine.resize(); });
};

// initialize when DOM loaded
window.addEventListener('DOMContentLoaded', onLoad);
