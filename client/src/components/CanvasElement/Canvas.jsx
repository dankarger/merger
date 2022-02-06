import React from 'react'
import useCanvas from './useCanvas'
import {CanvasStyled} from "../../styles/Canvas.styled";
const Canvas = props => {

    const { draw, ...rest } = props
    const canvasRef = useCanvas(draw)

    return (

        <CanvasStyled ref={canvasRef} {...rest} width={'612'} height={'408'} style={{border:'1px solid #000000'}}/>
    )
}

export default Canvas