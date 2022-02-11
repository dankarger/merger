import React from "react";
import ToolBar from "../ToolBar/ToolBar";
import {MenuLeftStyled} from "../../styles/MenuLeft.styled";
import {motion} from 'framer-motion'
import {MenuLeftVariants} from "../../animations/animations";

const MenuLeft=({imageCallback,
                    isMenuOpen,
                    isTextMenuOpen,
                    textCallback,
                    backgroundColor,
                    setIsBackGroundMenuOpen,
                    download,
                    isDownloadLinkReady,
                    handleMergeButton,
                    backgroundImage,
                    textCallbackSecond,
                    isDownloadLoader,
                    overlayText,
                    setIsBackgroundShadow
                }) => {


    return (
        <MenuLeftStyled as={motion.div}
        variants={MenuLeftVariants}
                        initial='initial'
                        animate='animate'
        >
            <ToolBar imageCallback={imageCallback}
                     isMenuOpen={isMenuOpen}
                     textCallback={textCallback}
                     isTextMenuOpen={isTextMenuOpen}
                     backgroundColor={backgroundColor}
                     setIsBackGroundMenuOpen={setIsBackGroundMenuOpen}
                     download={download}
                     isDownloadLinkReady={isDownloadLinkReady}
                     handleMergeButton={handleMergeButton}
                     backgroundImage={backgroundImage}
                     overlayText={overlayText}
                     textCallbackSecond={textCallbackSecond}
                     isDownloadLoader={isDownloadLoader}

            />
        </MenuLeftStyled>
    )
}
export default MenuLeft