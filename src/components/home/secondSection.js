import React from 'react'
import "./secondSection.css"
import "../../css/typography.css"
import { StaticImage } from "gatsby-plugin-image"
import useWindowSize from "../../hooks/useWindowSize";



function SecondSection() {

    const windowSize = useWindowSize();


    return (windowSize > 480) ? (
        <section className="second-section-home">
            <div>
            <iframe
                src="https://www.youtube.com/embed/_3p0TPA0muI"
                title="LandingVideo"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{height: "33vw", width: "45vw"}}
            />
            </div>

            <div className="next-to-video">
                <h3 className="video-h3">Personal & Public Safety</h3>
                <h2 className="video-h2">Anytime, anywhere</h2>
                <div className="video-divider"></div>

                <div className="next-to-video-icons">
                    <div>
                        <div className="icons-div-video-section">
                            <StaticImage src="../../icons/landing/celular.svg" alt="lock-icon"/>
                        </div>
                        <p className="icons-video-p">Your personal 911 on mobile platform</p>
                    </div>
                    <div>
                        <div className="icons-div-video-section">
                            <StaticImage src="../../icons/landing/lock.svg" alt="lock-icon"/>
                        </div>
                        <p className="icons-video-p">Reliable and Secure, your privacy above all</p>
                    </div>
                </div>

            </div>
        </section>
    ) :
    (
        <section className="second-section-home-mobile">
            <div className="next-to-video-mobile">
                <h3 className="video-h3-mobile">Personal & Public Safety</h3>
                <h2 className="video-h2-mobile">Anytime, anywhere</h2>
                <div className="video-divider-mobile"></div>

                <div className="next-to-video-icons-mobile">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="icons-div-video-section-mobile">
                            <StaticImage src="../../icons/landing/celular.svg" alt="lock-icon"/>
                        </div>
                        <p className="icons-video-p-mobile">Your personal 911 on mobile platform</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="icons-div-video-section-mobile">
                            <StaticImage src="../../icons/landing/lock.svg" alt="lock-icon"/>
                        </div>
                        <p className="icons-video-p-mobile">Reliable and Secure, your privacy above all</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop: '10%'}}>
            <iframe
                src="https://www.youtube.com/embed/_3p0TPA0muI"
                title="LandingVideo"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{height: "53vw", width: "65vw"}}
            />
            </div>
        </section>
    )
}

export default SecondSection
