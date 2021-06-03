import Loader from "../../engine/characters/Loader.js"
// import fileList from '../Flay/FileList.js'


// let folder = 'src/characters/Maw/animations/'

// let animaions = []
// let tmp = Object.assign({}, fileList)
// delete tmp.maw
// Object.keys(tmp).forEach(tmp => {
//     animaions[tmp * 1] = folder + fileList[tmp]
// })

let model = 'src/characters/Flai/Flai_MC3_OldRob.fbx'

let scale = 0.005

let flai = new Loader(model, [], scale)


export default flai