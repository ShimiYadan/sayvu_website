import React from 'react'
import "./threeLinedCard.css"
import "../../css/typography.css"

function ThreeLinedCard(props) {
    return (
        <div className="press-card-div-3">
            <img src={props.image} alt="press-image-3"/>
            <p>{props.title}</p>
            <p>{props.date}</p>
            <a href={props.link} target="_blank" className='press-card-a'><button className="press-card-button-3">Read more</button></a>
        </div>
    )
}

export default ThreeLinedCard
