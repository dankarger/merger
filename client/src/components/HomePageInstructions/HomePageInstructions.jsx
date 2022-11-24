import React, {useEffect, useRef, useState} from 'react'
import {HomePageInstructionsStyled} from "../../styles/HomePageInstructions.styled";

const HomePageInstructions =() => {
    const [ isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)
    const videoRef = useRef(null)

    const callBackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)

    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold:1.0
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callBackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return ()=> {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }
    },[containerRef, options])
    useEffect(()=>{
        if(isVisible) videoRef.current.play()
        else {
            videoRef.current.pause()
        }
    },[isVisible])
    return (
        <HomePageInstructionsStyled>
            <div className="instructions">


                <div className="details">
                    <h2>✩ Add an image</h2>
                    <h2>✩ Add 2 Text layers</h2>
                    <h2>✩ Add background color</h2>
                    <h2>✩ Export to different formats and download</h2>
                    <h2>✩ Have a Gallery of your images</h2>
                    <h2>✩ Have fun :)</h2>
                </div>
                <div className="video-div" ref={containerRef}>
                    <video  width="100%" height="auto"  controls={"controls"} ref={videoRef} muted loop={true}>
                        <source src="https://res.cloudinary.com/meme3/video/upload/v1669280049/videos-merger/merger1-music3_tvjg3e.mp4" type="video/mp4" />

                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>

        </HomePageInstructionsStyled>
    )
}
export default HomePageInstructions