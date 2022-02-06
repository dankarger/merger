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