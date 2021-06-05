import cache from "../basic/Cache"

class Quest {
    constructor() {
        this.node = document.createElement('div')
        let top = document.createElement('div')

        let title = document.createElement('div')
        title.innerText = 'Quest'
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

        let quest = document.createElement('div')
        quest.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam debitis, quis, vel repudiandae repellat natus voluptatibus itaque illo reiciendis ratione non. Sed similique dolores maiores vitae eligendi nemo tempora ducimus?' +
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam debitis, quis, vel repudiandae repellat natus voluptatibus itaque illo reiciendis ratione non. Sed similique dolores maiores vitae eligendi nemo tempora ducimus?'
        quest.classList.add('page')
        this.node.appendChild(quest)

        //--------------------------
        let footer = document.createElement('div')
        let accept = document.createElement('button')
        accept.innerText = 'Accept'
        accept.addEventListener('click', () => {
            this.stop()
        })
        let decline = document.createElement('button')
        decline.innerText = 'Decline'
        decline.addEventListener('click', () => {
            this.stop()
        })
        footer.appendChild(accept)
        footer.appendChild(decline)
        footer.classList.add('footer')
        this.node.appendChild(footer)
        this.node.classList.add('quest')
    }
    start() {
        document.body.appendChild(this.node)
    }
    stop() {
        cache.appendChild(this.node)
    }
}

const quest = new Quest()

export default quest