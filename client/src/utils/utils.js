export const convertPositionToCss=(position)=> {
    console.log('posp',position)
    if(position==='north') return ({top: 0})
    if(position==='west') return ({left:0})
    if(position==='east') return ({right:0})
    if(position==='south') return ({bottom:0})

}