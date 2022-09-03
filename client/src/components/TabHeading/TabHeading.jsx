import React from "react";
import {TabHeadingStyle} from "../../styles/TaHeading.styled";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";

const TabHeading = ({heading, icon}) => {
    const injectIcon = () => {
        if (icon) {
            return icon === 1 ? <LooksOneIcon/> : <LooksTwoIcon/>;
        } else {
            return null
        }
    }
    return (
        <TabHeadingStyle>
            <h1>{heading}<span className={'icon-number'}>{injectIcon()}</span></h1>
        </TabHeadingStyle>
    )
}
export default TabHeading;