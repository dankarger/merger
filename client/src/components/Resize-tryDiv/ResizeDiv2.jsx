import * as React from "react";
import { render } from "react-dom";
import { Resizable } from "re-resizable";
import {ResizeDivStyled} from "../../styles/ResizeDiv.styled";
import {motion} from 'framer-motion'

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
}

const ResizeDiv2 = ({children}) => {
    const [width, setWidth] = React.useState(300);
    const [height, setHeight] = React.useState(200);
    return (
        <Resizable as={motion.div}

            style={style}
            size={{ width, height }}
            onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width);
                setHeight(height + d.height);
            }}
        >
            {children}
        </Resizable>
    );
};

export default ResizeDiv2
