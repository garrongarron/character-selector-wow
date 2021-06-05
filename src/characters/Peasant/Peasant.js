import Loader from "../../engine/characters/Loader.js"
import fileList from './FileList.js'


let folder = 'src/characters/Peasant/animations/'

let animaions = []
let tmp = Object.assign({}, fileList)
delete tmp.peasant
Object.keys(tmp).forEach(tmp => {
    animaions[tmp * 1] = folder + fileList[tmp]
})

let model = 'src/characters/Peasant/' + fileList.peasant

let scale = 0.005

let peasant = new Loader(model, animaions, scale)


export default peasant