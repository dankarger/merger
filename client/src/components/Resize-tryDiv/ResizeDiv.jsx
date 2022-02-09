// import React,{useState, useCallback, useRef} from "react";
// import {ResizeDivStyled} from "../../styles/ResizeDiv.styled";
//
// export default function ResizeDiv({ children }) {
//     const [size, setSize] = useState({ x: 400, y: 300 });
//     const ref = useRef();
//
//     const handler = useCallback(() => {
//         function onMouseMove(e) {
//             setSize(currentSize => ({
//                 x: currentSize.x + e.movementX,
//                 y: currentSize.y + e.movementY
//             }));
//         }
//         function onMouseUp() {
//             ref.current.removeEventListener("mousemove", onMouseMove);
//             ref.current.removeEventListener("mouseup", onMouseUp);
//         }
//         ref.current.addEventListener("mousemove", onMouseMove);
//         ref.current.addEventListener("mouseup", onMouseUp);
//     }, []);
//
//     return (
//         <ResizeDivStyled width={size.x} height={size.y}>
//             <button ref={ref} onMouseDown={handler} />
//             {children}
//         </ResizeDivStyled>
//     );
// }