import Loader from "../../engine/characters/Loader.js"
import fileList from './FileList.js'


let folder = 'src/characters/Maw/animations/'

let animaions = []
let tmp = Object.assign({}, fileList)
delete tmp.maw
Object.keys(tmp).forEach(tmp => {
    animaions[tmp * 1] = folder + fileList[tmp]
})

let model = 'src/characters/Maw/' + fileList.maw

let scale = 0.005

let maw = new Loader(model, animaions, scale)


export default maw