import renderer from "../../src/engine/basic/Renderer.js"
import machine from "../../src/engine/basic/Machine.js"
import scene from "../../src/engine/basic/Scene.js";
import cube from "../../src/engine/object/Box.js";
import camera from "../../src/engine/basic/Camera.js";
import MasterScene from "../../src/engine/scenes/MasterScene.js";
import directionalLight, { ambientLight, helper, hemiLight } from "../../src/engine/basic/Light.js";
import resize from "../../src/engine/basic/Resize.js";
import maw from "../characters/Maw/Maw.js";
import erika from "../characters/Erika/Erika";
import keyListener from "../engine/basic/KeyListener.js";
import skyTexture from "./SkyTexture.js";
import characterSelectorUI from "./characterSelector/CharacterSelectorUI.js";
import characterSelectorList from "./characterSelector/CharacterSelectorList.js";
import settings from '../characters/Maw/Settings.js'
import settings2 from '../characters/Erika/Settings.js'
import CharacterController from "../engine/controllers/CharacterController.js";
import directionNoneController from "../engine/controllers/DirectionNoneController.js";

class CharacterSelector extends MasterScene {
    constructor(instancename) {
        super(instancename)
        this.mesh = null
        this.callback = () => {
            renderer.render(scene, camera);
        }
    }

    open(that) {
        machine.addCallback(this.callback);
        machine.on();
        // keyListener.start()
        resize.open(renderer)
        characterSelectorUI.start(characterSelectorList, this)
        scene.add(directionalLight)
        scene.add(ambientLight)
        scene.add(hemiLight);
        scene.background = skyTexture;
        maw.getObject().then(mesh => {
            this.mesh = mesh
            this.characterController = new CharacterController(settings, directionNoneController)
            this.characterController.setMesh(mesh)
            this.characterController.start()
        });
        erika.getObject().then(mesh => {
            this.mesh = mesh
            this.characterController = new CharacterController(settings2, directionNoneController)
            this.characterController.setMesh(mesh)
            this.characterController.start()

        });
        camera.rotation.y = -15 * Math.PI / 180
    }

    close() {
        machine.removeCallback(this.callback);
        machine.pause();
        resize.close()
        scene.remove(directionalLight)
        scene.remove(ambientLight)
        scene.remove(hemiLight)
        scene.remove(cube)
    }
}

let characterSelector = new CharacterSelector()
export default characterSelector