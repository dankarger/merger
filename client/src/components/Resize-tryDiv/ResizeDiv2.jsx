import * as React from "react";
import { render } from "react-dom";
import { Resizable } from "re-resizable";

// const style = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "solid 1px #ddd",
//     background: "#f0f0f0"
// } as const;

const App = () => {
    const [width, setWidth] = React.useState(300);
    const [height, setHeight] = React.useState(200);
    return (
        <Resizable
            style={style}
            size={{ width, height }}
            onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width);
                setHeight(height + d.height);
            }}
        >
            Sample with size
        </Resizable>
    );
};

render(<App />, document.getElementById("root"));
