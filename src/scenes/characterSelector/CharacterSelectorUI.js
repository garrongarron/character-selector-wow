import cache from "../../engine/basic/Cache"
import scene from "../../engine/basic/Scene"

class CharacterSelectorUI {
    constructor() {
        this.node = document.createElement('div')
        this.node.classList.add('character-selector')
    }
    start(list, theScene) {
        this.node.innerHTML = ''
        this.showTitle()
        this.showPictures(list, theScene)
        document.body.appendChild(this.node)
        this.buildContainer()

    }
    showTitle() {
        let title = document.createElement('div')
        title.classList.add('title')
        title.innerText = 'Character Selector'
        this.node.appendChild(title)
    }
    buildContainer() {
        let containerBG = document.createElement('div')
        containerBG.classList.add('container')
        let container = document.createElement('div')
        containerBG.appendChild(container)
        this.node.appendChild(containerBG)
    }
    showPictures(list, theScene) {
        let ul = document.createElement('ul')

        Object.keys(list).forEach(key => {
            let img = document.createElement('img')
            img.src = list[key].imgUrl
            img.addEventListener('click', () => {
                scene.remove(theScene.mesh)
                list[key].mesh.then(mesh => {
                    theScene.mesh = mesh
                    scene.add(mesh)
                })
                this.node.querySelector('.container').firstChild.innerHTML = list[key].info
            })


            let li = document.createElement('li')
            ul.appendChild(li)
            li.appendChild(img)

        })
        this.node.appendChild(ul)
    }
    stop() {
        cache.appendChild(this.node)
    }
}

const characterSelectorUI = new CharacterSelectorUI()

export default characterSelectorUI