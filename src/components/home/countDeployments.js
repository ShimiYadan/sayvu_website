import React from 'react'
import { useCountUp } from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize";

function CountDeployments() {

    const { countUp, start, reset } = useCountUp({ end: 85, start: 0, delay: 0, duration: 10 });
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <ScrollTrigger onEnter={start} onExit={reset}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{alignSelf: 'center', fontFamily: 'G Medium', fontSize: '6vw'}}>{countUp}</span>
                <p style={{textAlign: 'center', fontFamily: 'G Book', color: 'black', fontSize: '1.5vw'}}>Deployments</p>
            </div>
        </ScrollTrigger>
    ) : (
        <ScrollTrigger onEnter={start} onExit={reset}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{alignSelf: 'center', fontFamily: 'G Medium', fontSize: '11vw'}}>{countUp}</span>
                <p style={{textAlign: 'center', fontFamily: 'G Book', color: 'black', fontSize: '4vw'}}>Deployments</p>
            </div>
        </ScrollTrigger>
    )
}

export default CountDeployments
