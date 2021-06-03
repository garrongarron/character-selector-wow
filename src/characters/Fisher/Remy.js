import Loader from "../Loader.js";
import fileList from './FileList.js'


let folder = 'src/characters/Fisher/'

let animaions = Object.keys(fileList)
    .filter(key => {
        return key !== 'remy'
    }).map(index => {
        return folder + fileList[index]
    })


let remy = new Loader(folder + fileList.remy, animaions)


export default remy