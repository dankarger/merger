export const convertPositionToCss=(position)=> {

    let positionsObject = {
        top:'none',
        left:'none',
        right:'none',
        bottom:'none'
    }
    if(position==='center') {
        positionsObject.top = '50%';
        positionsObject.bottom = '50%';
        positionsObject.left = '50%';
        positionsObject.right = '50%';
    }
    if(position==='north') {
         positionsObject.top = 0;
        positionsObject.left = '50%';
        positionsObject.right = '50%';
    }
    if(position==='west') {
        positionsObject.left = 0;
    }
    if(position==='east') {
        positionsObject.right = 0;
    }
    if(position==='south') {
        positionsObject.bottom = 0;
        positionsObject.left = '50%';
        positionsObject.right = '50%';
    }


    console.log('posp',positionsObject)
    return positionsObject
}