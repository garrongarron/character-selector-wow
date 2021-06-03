class ContextMenu {
    constructor(contextMenu) {
        this.contextMenu = contextMenu
        this.section = document.querySelector('canvas')
    }
    open() {
        this.section.addEventListener('contextmenu', this.callback.bind(this))
    }
    close() {
        this.section.removeEventListener('contextmenu', this.callback.bind(this))
    }
    callback(ev) {
        ev.preventDefault();
        this.contextMenu.show(ev)
    }
}

export default ContextMenu