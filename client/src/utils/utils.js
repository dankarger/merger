export const convertPositionToCss=(position)=> {

    let positionsObject = {
        top:'none',
        left:'none',
        right:'none',
        bottom:'none'
    }

    if(position==='north') {
         positionsObject.top = 10;
    }
    if(position==='west') {
        positionsObject.left = 10;
    }
    if(position==='east') {
        positionsObject.right = 10;
    }
    if(position==='south') {
        positionsObject.bottom = 10;
    }

    console.log('posp',positionsObject)
    return positionsObject
}