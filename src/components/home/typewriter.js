import React from 'react'
import styled from "styled-components"
import "../../css/typography.css"
import Typewriter from "typewriter-effect"
import "./typewriter.css"

const TypewriterDiv = styled.div`
    font-family: 'G Medium';
    font-size: 5vw;
    width: 40vw;
    height: 18vw;
`


function TypeEffect() {
    return (
        <TypewriterDiv>
            <Typewriter 
            onInit={(typewriter) => {
                typewriter.typeString("Let's make the world a safer place, <span style='color: #c4132a'>together</span>")
                .pauseFor(2000)
                .deleteAll()
                .typeString("We make saving lives <span style='color: #c4132a'>easier</span>")
                .pauseFor(2000)
                .deleteAll()
                .start()
            }}

            options={{
                loop: true,
            }}
            />
        </TypewriterDiv>
            
        
    )
}

export default TypeEffect
