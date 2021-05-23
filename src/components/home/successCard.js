import React from 'react'
import "./successCard.css"
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize"
import { Link } from "gatsby"

function SuccessCard(props) {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <div className="success-card">
        <div className="content-success-card">
            <div className="content-success-div">
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
                <Link to='/solution-verticals'>{props.read}</Link>
            </div>
        </div>
    </div>
    ) : (
        <div className="success-card-mobile">
        <div className="content-success-card-mobile">
            <div className="content-success-div-mobile">
                <h3>{props.title}</h3>
                <Link to='/solution-verticals' className='mobile-read-more-success-link'>{props.read}</Link>
            </div>
        </div>
    </div>
    )
}

export default SuccessCard


