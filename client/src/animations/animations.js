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
    },animate2:{
        opacity: 1,
        transition:{
            duration:2,stiffness:12,delay:1
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
        // x:'-400px',
        opacity:0
    },
    animate:{
      x:0,
        opacity:1,
        transition:{
         stiffness:12,duration:.1
        }
    }
}

export const HomePageMenuVariants = {
    initial: {
        // x: 430,
        opacity: 0, scale: (0.5),

    },
    initial2: {
        x: 0,
        opacity: 0, scale: (0.5),

    },
    animate: {
        x: 0,
        opacity: 1,
        scale: (1),
        transition: {
            stiffness: 120, mass: 10, duration: 2
        }
    }, animate1: {
        x: 0,
        opacity: 1,
        scale: (1),
        transition: {
            stiffness: 120, mass: 10, duration: 1.8, delay: .2,
        }
    }, animate2: {
        x: 0,
        opacity: 1,
        scale: (1),
        transition: {
            stiffness: 100, mass: 15, duration: 1.5, delay: 0.8,
        }
    },
    animate3: {
        x: 0,
        opacity: 1,
        scale: (1),
        transition: {
            stiffness: 55, mass: 15, duration: 1.5, delay: 1.2,
        },
    },
        animate4: {
            x: 0,
            opacity: 1,
            scale: (1),
            transition: {
                stiffness: 100, mass: 15, duration: 2, delay: 1.7,
            },
            hover: {
                scale: (1.1),
                // backgroundColor:'rgba(66,152,149,0.6)',
                textShadow: " 0px 0px 8px rgb(255,255,255)",
                // boxShadow:" 1px 1px 1px 1px rgb(0,0,0)",
                transition: {
                    type: "spring",
                    stiffness: 121, mass: 1
                }
            }
        }

}
// Buttons
export const ButtonYoYoVariants = {
    hover: {
        scale:( 1.01),

        // textShadow:" 0px 0px 8px rgb(255,255,255)",
        // boxShadow:" 0px 0px 8px rgb(255,255,255)",
        transition:{
            repeat :Infinity,type:"spring",
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
        scale:( 0.95),
        // backgroundColor:'rgba(66,152,149,0.6)',
        // textShadow:" 0px 0px 8px rgb(255,255,255)",
        // boxShadow:" 1px 1px 1px 1px rgb(0,0,0)",
        transition:{
            type:"spring",ease:"easeInOut",
            // stiffness:11,mass:12,
            backgroundColor:'blue'
        },
    },
    tap:{
        scale:(0.85),
        color:'#2CBEDF',
        backgroundColor:'#21107E'
    }
}

export const svgVariants = {
    initial: {rotate: [-250],scale:(0),rotateZ:11,opacity:0 },
    animate: {
        opacity:[0,0.1,0.2,0.3],
        scale:(1.3),x:[-100,40],rotateZ:0,
        fontsize:50,
        rotate:0,
        transition: {
            duration: 1,stiffness:10,mass:100
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
        scale:(0)
    },
    animate:{
        scale:(1),
        x:0,
        opacity:1,
        transition:{
            stiffness:112, ease: "easeInOut"
        }
    },
    exit:{
        opacity:0,
        scale:(0),
        x:200
    }
}

