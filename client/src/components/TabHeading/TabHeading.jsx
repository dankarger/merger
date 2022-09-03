import React from "react";
import {TabHeadingStyle} from "../../styles/TaHeading.styled";

const TabHeading = ({heading})=> {

    return (
        <TabHeadingStyle>
            <h1>{heading}</h1>
        </TabHeadingStyle>
    )
}
export default TabHeading;