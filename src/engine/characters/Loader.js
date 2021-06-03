import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


class Loader {
    constructor(name, urlList, scale) {
        let loader = new FBXLoader();
        let promises = []
        let animations = []
        let p1 = new Promise((res, rej) => {
            loader.load(name,
                function(object) {
                    object.scale.set(scale, scale, scale)
                    object.traverse(function(child) {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    object.castShadow = true;
                    object.receiveShadow = true; //default
                    res(object)
                })
        })

        urlList.forEach((element, index) => {
            promises[index] = new Promise((resolve, reject) => {
                loader.load(urlList[index],
                    function(object) {
                        object.scale.set(scale, scale, scale)
                        animations[index] = object.animations[0]
                        resolve(index)
                    })
            })
        });


        let p2 = Promise.all(promises)

        this.model = new Promise((res, rej) => {
            Promise.all([p1, p2]).then(data => {
                let object = data[0]
                if (animations.length > 0) {
                    object.animations = animations;
                }
                res(object)
            })
        })
    }

    getObject() {
        return this.model
    }
}

export default Loader