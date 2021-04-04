import { ArcRotateCamera, HemisphericLight, Vector3, Mesh, StandardMaterial, Texture, Color3, PointLight, CubeTexture, Space, MeshBuilder } from "@babylonjs/core";

export const solarSystem = ({ canvas, scene, isNight, texturesPath }) => {
    scene.clearColor = new Color3(0,0,0);
    const camera = new ArcRotateCamera('camera', 0, 0, 15, Vector3.Zero(), scene);
    camera.attachControl(canvas); // user should be able to control from canvas
    camera.upperRadiusLimit = 50;

    const light = new HemisphericLight('light1', new Vector3(0,1,0), scene);
    light.intensity = 0.5;
    light.groundColor = new Color3(0,0,1); // blue light

    //  sun
    const sunMaterial = new StandardMaterial('sunMaterial', scene);
    sunMaterial.emissiveTexture = new Texture (`${texturesPath}/sun.jpg`, scene);
    sunMaterial.diffuseColor = new Color3(0,0,0);
    sunMaterial.specularColor = new Color3(0,0,0);

    const sunLight = new PointLight('sunLight', Vector3.Zero(), scene);
    sunLight.intensity = 1;

    const sun = Mesh.CreateSphere('sun', 16, 2, scene);
    sun.material = sunMaterial;

    // // moon material
    // const moonMaterial = new StandardMaterial('moonMaterial', scene);
    // moonMaterial.diffuseTexture = new Texture(`${texturesPath}/moon.jpg`, scene);
    // moonMaterial.specularColor = new Color3(0,0,0);

    // // moon
    // const moon = Mesh.CreateSphere('moon', 16, 1, scene);
    // moon.position.x = 2;
    // moon.material = moonMaterial;
    // moon.orbit = {
    //     radius: moon.position.x,
    //     speed: 0.002,
    //     angle: 0
    // };

    // 1. mercury material
    const mercuryMaterial = new StandardMaterial('mercuryMaterial', scene);
    mercuryMaterial.diffuseTexture = new Texture(`${texturesPath}/mercury.jpg`, scene);
    mercuryMaterial.specularColor = new Color3(0,0,0);

    // mercury
    const mercury = Mesh.CreateSphere('mercury', 16, 1, scene);
    mercury.position.x = 1.5;
    mercury.scaling = new Vector3(0.5,0.5,0.5);
    mercury.material = mercuryMaterial;
    mercury.orbit = {
        radius: mercury.position.x,
        speed: 0.009,
        angle: 0
    };

    // 2. venus material
    const venusMaterial = new StandardMaterial('venusMaterial', scene);
    venusMaterial.diffuseTexture = new Texture(`${texturesPath}/venus.jpg`, scene);
    venusMaterial.specularColor = new Color3(0,0,0);

    // venus
    const venus = Mesh.CreateSphere('venus', 16, 1, scene);
    venus.position.x = 2.25;
    venus.material = venusMaterial;
    venus.scaling = new Vector3(0.75,0.75,0.75);
    venus.orbit = {
        radius: venus.position.x,
        speed: 0.008,
        angle: 0
    };

    // 3. earth material
    const earthTexture = isNight ? 'night' : 'day';
    const earthMaterial = new StandardMaterial('earthMaterial', scene);
    earthMaterial.diffuseTexture = new Texture(`${texturesPath}/earth_${earthTexture}.jpg`, scene);
    earthMaterial.diffuseTexture.vScale = -1;
    earthMaterial.specularColor = new Color3(0,0,0);

    // earth
    const earth = Mesh.CreateSphere('earth', 16, 1, scene);
    const angle = 0.01;
    var earthAxis = new Vector3(Math.sin(23 * Math.PI/180), Math.cos(23 * Math.PI/180), 0);

    earth.position.x = 3.25;
    earth.material = earthMaterial;
    // var axisLine = MeshBuilder.CreateLines("axis", {points:[earthAxis.scale(-5), earthAxis.scale(5)]}, scene);
    earth.rotate(earthAxis, angle, Space.WORLD);
    earth.orbit = {
        radius: earth.position.x,
        speed: 0.007,
        angle: 0.01
    };

    // 4. mars material
    const marsMaterial = new StandardMaterial('marsMaterial', scene);
    marsMaterial.diffuseTexture = new Texture(`${texturesPath}/mars.jpg`, scene);
    marsMaterial.specularColor = new Color3(0,0,0);

    // mars
    const mars = Mesh.CreateSphere('mars', 16, 1, scene);
    mars.position.x = 4.2;
    mars.material = marsMaterial;
    mars.scaling = new Vector3(0.5,0.5,0.5);
    mars.orbit = {
        radius: mars.position.x,
        speed: 0.006,
        angle: 0
    };

    // 5. jupiter material
    const jupiterMaterial = new StandardMaterial('jupiterMaterial', scene);
    jupiterMaterial.diffuseTexture = new Texture(`${texturesPath}/jupiter.jpg`, scene);
    jupiterMaterial.specularColor = new Color3(0,0,0);

    // jupiter
    const jupiter = Mesh.CreateSphere('jupiter', 16, 1, scene);
    jupiter.position.x = 5.3;
    jupiter.material = jupiterMaterial;
    jupiter.scaling = new Vector3(1.25,1.25,1.25);
    jupiter.orbit = {
        radius: jupiter.position.x,
        speed: 0.007,
        angle: 0
    };

    // 6. saturn material
    const saturnMaterial = new StandardMaterial('saturnMaterial', scene);
    saturnMaterial.diffuseTexture = new Texture(`${texturesPath}/saturn.jpg`, scene);
    saturnMaterial.specularColor = new Color3(0,0,0);

    // saturn
    const saturn = Mesh.CreateSphere('saturn', 16, 1, scene);
    saturn.position.x = 6.7;
    saturn.material = saturnMaterial;
    saturn.scaling = new Vector3(1.05,1.05,1.05);
    saturn.orbit = {
        radius: saturn.position.x,
        speed: 0.008,
        angle: 0
    };

    // 7. uranus material
    const uranusMaterial = new StandardMaterial('uranusMaterial', scene);
    uranusMaterial.diffuseTexture = new Texture(`${texturesPath}/uranus.jpg`, scene);
    uranusMaterial.specularColor = new Color3(0,0,0);

    // uranus
    const uranus = Mesh.CreateSphere('uranus', 16, 1, scene);
    uranus.position.x = 7.9;
    uranus.material = uranusMaterial;
    uranus.scaling = new Vector3(0.85,0.85,0.85);
    uranus.orbit = {
        radius: uranus.position.x,
        speed: 0.008,
        angle: 0
    };

    // 8. neptune material
    const neptuneMaterial = new StandardMaterial('neptuneMaterial', scene);
    neptuneMaterial.diffuseTexture = new Texture(`${texturesPath}/neptune.jpg`, scene);
    neptuneMaterial.specularColor = new Color3(0,0,0);

    // neptune
    const neptune = Mesh.CreateSphere('neptune', 16, 1, scene);
    neptune.position.x = 9;
    neptune.material = neptuneMaterial;
    neptune.orbit = {
        radius: neptune.position.x,
        speed: 0.009,
        angle: 0
    };

    // sky box
    const skybox = Mesh.CreateBox('skybox', 1000, scene);
    const skyboxMaterial = new StandardMaterial('skyboxMaterial', scene);
    skyboxMaterial.diffuseColor = new Color3(0,0,0);
    skyboxMaterial.specularColor = new Color3(0,0,0);
    // don't render what we don't see
    skyboxMaterial.backFaceCulling = false;
    // move with camera
    skybox.infiniteDistance = true;
    skybox.material = skyboxMaterial;
    // texture of the cube
    skyboxMaterial.reflectionTexture = new CubeTexture(`${texturesPath}/stars_milky_way`);
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;

    // animate planet
    scene.beforeRender = () => {
        // moon.position.x = moon.orbit.radius * Math.sin(moon.orbit.angle);
        // moon.position.z = moon.orbit.radius * Math.cos(moon.orbit.angle);
        // moon.orbit.angle += moon.orbit.speed;

        mercury.position.x = mercury.orbit.radius * Math.sin(mercury.orbit.angle);
        mercury.position.z = mercury.orbit.radius * Math.cos(mercury.orbit.angle);
        mercury.orbit.angle += mercury.orbit.speed;

        venus.position.x = venus.orbit.radius * Math.sin(venus.orbit.angle);
        venus.position.z = venus.orbit.radius * Math.cos(venus.orbit.angle);
        venus.orbit.angle += venus.orbit.speed;

        earth.position.x = earth.orbit.radius * Math.sin(earth.orbit.angle);
        earth.position.z = earth.orbit.radius * Math.cos(earth.orbit.angle);
        earth.orbit.angle += earth.orbit.speed;

        mars.position.x = mars.orbit.radius * Math.sin(mars.orbit.angle);
        mars.position.z = mars.orbit.radius * Math.cos(mars.orbit.angle);
        mars.orbit.angle += mars.orbit.speed;

        jupiter.position.x = jupiter.orbit.radius * Math.sin(jupiter.orbit.angle);
        jupiter.position.z = jupiter.orbit.radius * Math.cos(jupiter.orbit.angle);
        jupiter.orbit.angle += jupiter.orbit.speed;

        saturn.position.x = saturn.orbit.radius * Math.sin(saturn.orbit.angle);
        saturn.position.z = saturn.orbit.radius * Math.cos(saturn.orbit.angle);
        saturn.orbit.angle += saturn.orbit.speed;

        uranus.position.x = uranus.orbit.radius * Math.sin(uranus.orbit.angle);
        uranus.position.z = uranus.orbit.radius * Math.cos(uranus.orbit.angle);
        uranus.orbit.angle += uranus.orbit.speed;

        neptune.position.x = neptune.orbit.radius * Math.sin(neptune.orbit.angle);
        neptune.position.z = neptune.orbit.radius * Math.cos(neptune.orbit.angle);
        neptune.orbit.angle += neptune.orbit.speed;
    };
};
