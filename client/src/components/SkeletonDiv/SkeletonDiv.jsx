import React from "react";
import {Skeleton} from "@mui/material";

const SkeletonDiv = () => {

    return(
        <div>
            {/*<h3>Upload an Image</h3>*/}
            <Skeleton  animation="wave" variant="rectangular" width={510} height={318} />
        </div>
    )
}
export default SkeletonDiv