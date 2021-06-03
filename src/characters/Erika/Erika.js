import Loader from "../../engine/characters/Loader.js"
import fileList from './FileList.js'


let folder = 'src/characters/Erika/animations/'

let animaions = []
let tmp = Object.assign({}, fileList)
delete tmp.erika
Object.keys(tmp).forEach(tmp => {
    animaions[tmp * 1] = folder + fileList[tmp]
})

let model = 'src/characters/Erika/' + fileList.erika

let scale = 0.005

let erika = new Loader(model, animaions, scale)


export default erika