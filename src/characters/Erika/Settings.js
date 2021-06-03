import normalActions from "./NormalActions.js"

let settings = {
    'normal': {
        transition: (input) => {
            let state = 'normal'
                // if (input[0] == 16 && input[1] == true) {
                //     return 'runner'
                // }
                // if (input[0] == 32 && input[1] == true) {
                //     return 'ninja'
                // }
            return state
        },
        actions: normalActions
    }
}

export default settings