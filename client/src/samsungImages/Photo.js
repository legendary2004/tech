export const IMAGES_DATA = (function () { 
    let arr = []
    for(let i = 1 ; i <= 30 ; i++ ){
        let tmpImg = require(`./img${i}.jpg`);
            arr.push(tmpImg)
    }
    return arr
})()