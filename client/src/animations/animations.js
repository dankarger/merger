export const navbarVariants = {
    initial:{
        opacity:0,
        y:'-100vh'

    },
    animate:{
        y:0,
        opacity: 1,
        transition:{
            duration:1,stiffness:12
        }
    }
}

export const fadeIn ={
    initial:{
        opacity:0,
    },
    animate:{
        opacity: 1,
        transition:{
            duration:0.4,stiffness:12
        }
    }
}

export const HeadingH1Variants = {
    initial:{
        opacity:0,


    },
    animate:{
        opacity: 1,
        transition:{
            duration:1,stiffness:12
        }
    }
}

export const MenuLeftVariants = {
    initial:{
        x:'-100vw'
    },
    animate:{
      x:0,
        transition:{
         stiffness:12,duration:.4
        }
    }
}

export const HomePageMenuVariants = {
    initial:{
        y:430,
        opacity:0, scale:(1.0),

    },
    animate:{
        y:0,
        opacity:1,
        scale:(1.1),
        transition:{
            stiffness:120,mass:10,duration:2
        }
    }
}

// Buttons

export const ButtonYoYoVariants = {
    hover: {
        scale:( 1.01),
        color:'rgba(37,112,101,0.71)',
        // textShadow:" 0px 0px 8px rgb(255,255,255)",
        // boxShadow:" 0px 0px 8px rgb(255,255,255)",
        transition:{
            yoyo :Infinity,type:"spring",
            stiffness:201,mass:12
        },
    }

}

export const HomeMenuButtonsVariants = {
    hover: {
        scale:( 1.1),
         // backgroundColor:'rgba(66,152,149,0.6)',
        textShadow:" 0px 0px 8px rgb(255,255,255)",
        // boxShadow:" 1px 1px 1px 1px rgb(0,0,0)",
        transition:{
            type:"spring",
            stiffness:121,mass:1
        },
    }

}

export const DownloadButtonVariants = {
    hover: {
        scale:( 1.2),
        // backgroundColor:'rgba(66,152,149,0.6)',
        textShadow:" 0px 0px 8px rgb(255,255,255)",
        // boxShadow:" 1px 1px 1px 1px rgb(0,0,0)",
        transition:{
            type:"spring",
            stiffness:110,mass:121,
            backgroundColor:'red'
        },
        color:'#333333',
    }

}


export const svgVariants = {
    initial: {rotate: -10},
    animate: {
        scale:(1.3),x:[0,50,80,40],y:[10,50,-80,-40],
        fontsize:50,
        rotate:0,
        transition: {
            duration: 10,stiffness:10,mass:100
        }
    }
}
export const pathVariants = {
    initial: {
        opacity:0,
        pathLength:0.2
    },
    animate:{opacity: 1,
        pathLength: 1,
        transition: {duration: 1,
            ease: "easeInOut"}
    }
}
export const GalleryContainerVariants = {
    initial:{
        x:'-20vw',
        opacity:0,
        scale:(0.8)
    },
    animate:{
        x:0,
        scale:(1),
        opacity:1,
        transition:{
            stiffness:124,duration:1,delay:0.5
        }
    }
}
export const GalleryStyleVariants = {
    initial:{
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            stiffness:124,duration:1,delay:1.5
        }
    }
}

export const DetailCardStyleVariants = {
    initial:{
        opacity:0,
        scale:0
    },
    animate:{
        scale:(1.1),
        x:0,
        opacity:1,
        transition:{
            stiffness:124,duration:.2,delay:.5
        }
    },
    exit:{
        opacity:0,
        scale:0
    }
}
