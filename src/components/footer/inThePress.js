import React from 'react'
import styled from "styled-components"


const FooterPressDiv = styled.div`
    
    p {
        margin-bottom: 0;
    }
    
`

function InThePress(props) {
    return (
        <FooterPressDiv className="press-footer-div">
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p style={{fontFamily: "G Medium"}}>{props.date}</p>
        </FooterPressDiv>
    )
}

export default InThePress
