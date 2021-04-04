import { FreeCamera, HemisphericLight, Mesh, Vector3, StandardMaterial, Color3, Texture } from "@babylonjs/core";

export const introModule = ({ canvas, scene }) => {
    const camera = new FreeCamera('FreeCamera', new Vector3(0,2, -15), scene);
    camera.attachControl(canvas);
    // light from above (sky)
    const light = new HemisphericLight('light1', new Vector3(0,1,0), scene);

    const sphereMaterial = new StandardMaterial('sphereMaterial', scene);
    sphereMaterial.diffuseColor = new Color3(1,0,0);
    // sphereMaterial.alpha = 0.5;
    sphereMaterial.specularColor = new Color3(0,0,1);
    sphereMaterial.specularPower = 5;

    const emissiveMaterial = new StandardMaterial('emissiveMaterial', scene);
    emissiveMaterial.emissiveColor = new Color3(0,1,0);

    const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;

    const sphere2 = Mesh.CreateSphere('sphere2', 16, 4, scene);
    sphere2.position = new Vector3(3,3,3);
    // sphere2.scaling = new Vector3(1,0.5,0.5);
    sphere2.material = sphereMaterial;

    const grass = new StandardMaterial('grass', scene);
    grass.diffuseTexture = new Texture('./textures/grass-texture.jpeg', scene);
    grass.diffuseTexture.uScale = 8;
    grass.diffuseTexture.vScale = 8;
    grass.specularColor = new Color3(0,0,0);

    const ground = Mesh.CreateGround('ground1', 20, 20, 2, scene);
    ground.material = grass;

    const box = Mesh.CreateBox('box', 1, scene);
    box.position = new Vector3(4,2,-5);
    box.scaling.y = 2;
    box.rotation.x = 45;
    box.material = sphereMaterial;

    const cylinder = Mesh.CreateCylinder('cyl', 5,1,3,30, scene);
    cylinder.material = emissiveMaterial;

    const lines = Mesh.CreateLines('lines', [
        new Vector3(0,5,0),
        new Vector3(1,5,0),
        new Vector3(0,5,1),
        new Vector3(2,2,0),
        new Vector3(1,5,-5)
    ], scene);
}
