class EventBus {
    constructor() {
        this.event = {}
    }
    suscribe(eventName, callback) {
        if (!this.event[eventName]) {
            this.event[eventName] = []
        }
        this.event[eventName].push(callback)
    }
    dispatchEvent(eventName, params) {
        if (this.event[eventName]) {
            this.event[eventName].forEach(callback => {
                callback(params)
            });
        }
    }
}

let eventBus = new EventBus()
export default eventBus