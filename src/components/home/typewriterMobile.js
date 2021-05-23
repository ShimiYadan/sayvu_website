import React from 'react'
import styled from "styled-components"
import "../../css/typography.css"
import Typewriter from "typewriter-effect"

const TypewriterDivMobile = styled.div`
    font-family: 'G Medium';
    font-size: 8vw;
    width: 70vw;
    height: 25vw;
`


function TypeEffect() {
    return (
        <TypewriterDivMobile>
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
        </TypewriterDivMobile>
            
        
    )
}

export default TypeEffect
