import cache from "../basic/Cache"

class Backpack {
    constructor() {
        this.node = document.createElement('div')
        let top = document.createElement('div')

        let title = document.createElement('div')
        title.innerText = 'Backpack'
        top.appendChild(title)
        let close = document.createElement('div')
        close.innerText = 'x'
        close.classList.add('close')
        close.addEventListener('click', () => {
            this.stop()
        })
        top.appendChild(close)
        this.node.appendChild(top);
        //------------------------------------

        let ul = document.createElement('ul')
        for (let index = 0; index < 20; index++) {
            let li = document.createElement('li')
            li.innerText = index
            ul.appendChild(li)
        }

        this.node.appendChild(ul)
        this.node.classList.add('backpack')
    }
    start() {
        document.body.appendChild(this.node)
    }
    stop() {
        cache.appendChild(this.node)
    }
}

const backpack = new Backpack()

export default backpack