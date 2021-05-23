import React from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize";
import "./footer.css"
import InThePress from "./inThePress"
import Video from "../video"
import Location from "../../icons/footer/ios-pin.svg"
import Email from "../../icons/footer/email.svg"
import Phone from "../../icons/footer/phone.svg"
import {Link} from 'gatsby'

const MobileFooter = styled.footer`
    padding: 10%;
    background-color: black;
    color: white;

    p {
        font-family: "G Light";
        line-height: 150%;
    }
`

const DesktopFooter = styled.footer`
    padding: 5% 10% 5% 10%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    p {
        font-family: "G Light";
        line-height: 150%;
    }
`

const Footer = () => {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
    
    <DesktopFooter>
        <section className="footer-section">
            
            <div className="footer-mob-img-container-desktop">
                <StaticImage src="../../images/footerlogo.png" alt='Logo'/>
            </div>
            

            <p className="footer-first-p-desktop">SayVU strives to minimize the response time of emergency services and other authorities, and make sure the user gets relevant and effective assistance as quickly as possible. Our world-leading platform tells the story of whats's going on –while it's going on– allowing for faster, more efficient responses to a situation, ultimately saving more lives.</p>
            <p>We are here to make sure everyone has the power to save lives.</p>

            <div className="info-footer" style={{marginTop: "10%"}}>
                <div className="map-marker-div">
                    <img style={{width: '1vw'}} src={Location} alt="location"/>
                </div>
                <p>Tel Aviv, Israel</p>
            </div>
            <div className="info-footer">
                <div className="map-marker-div">
                    <img style={{width: '1vw'}} src={Phone} alt="phone"/>
                </div>
                <p>+972 50-484-1981</p>
            </div>
            <div className="info-footer">
                <div className="map-marker-div">
                    <img style={{width: '1vw'}} src={Email} alt="email"/>
                </div>
                <p>contact@sayvu.com</p>
            </div>        
        </section>

        <section className="footer-section">
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <h2 style={{fontFamily: "G Medium", color: 'white'}}>IN THE PRESS</h2>            
            </div>
            <a href="" style={{color: 'white'}}>
                <InThePress title="Get to know the apps that can save lives" author="(Network 13) (HE)" date="September 3, 2020"/>
            </a>
            <br/>
            <InThePress title="Municipality of Curicó implemented 'Panic Button'" author="(Radiortl) (ES)" date="January 10, 2020"/>
            <br/>
            <InThePress title="Woman obtains arrest using panic button" author="(Vivimos La Noticia) (ES)" date="September 24, 2019"/>
            <br/>
            <InThePress title="Israeli Startup’s Revolutionary Tech" author="(Jewish Business News) (EN)" date="July 15, 2019"/>
        </section>

        <section className="footer-section">
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <h3 style={{fontFamily: "G Medium", color: 'white'}}>DOWNLOAD THE APP</h3>            
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className="footer-stores">
                    <a href="https://apps.apple.com/cl/app/sayvu/id1081148815" target="_blank">
                        <StaticImage src="../../images/app-store.png" alt='Logo Play Store'/>
                    </a>
                </div>
                <div className="footer-stores">
                    <a href="https://play.google.com/store/apps/details?id=com.sayvu" target="_blank">
                        <StaticImage src="../../images/play-store.png" alt='Logo App Store'/>
                    </a>
                </div>
            </div>

        <div style={{display: "flex", justifyContent: "center", margin: "8% 0 8% 0"}}>
            <Video videoSrcURL="https://www.youtube.com/embed/_3p0TPA0muI" videoTitle="Elmo"/>
        </div>

        <div className="all-icons-footer-div">
            <div className="icon-footer-div">
                <a href="https://www.facebook.com/SayVUtech" target="_blank">
                <StaticImage src="../../icons/facebook.svg"/>
                </a>
            </div>
            <div className="icon-footer-div">
                <a href="https://wa.me/972504841981" target="_blank">
                <StaticImage src="../../icons/whatsapp.svg"/>
                </a>
            </div>
            <div className="icon-footer-div">
                <a href="https://www.linkedin.com/company/sayvu-technologies/" target="_blank">
                <StaticImage src="../../icons/linkedin.svg"/>
                </a>
            </div>
            <div className="icon-footer-div">
                <a href="https://www.instagram.com/sayvutech/" target="_blank">
                <StaticImage src="../../icons/instagram.svg"/>
                </a>
            </div>
            <div className="icon-footer-div">
                <a href="https://twitter.com/SayvUtech" target="_blank">
                <StaticImage src="../../icons/twitter.svg"/>
                </a>
            </div>
            <div className="icon-footer-div">
                <a href="https://www.youtube.com/channel/UCUYTCKQGr21XC5YBJtNj2SA" target="_blank">
                <StaticImage src="../../icons/youtube.svg"/>
                </a>
            </div>
        </div>
        <div style={{marginTop: '2vw'}}>
            <Link to='/privacy-policy' 
            style={{color: 'white', fontFamily: 'G Book', fontSize: '1.2vw'}}>Privacy Policy</Link>
        </div>
        </section>
    </DesktopFooter>
) : (
    <MobileFooter>
        <div className="footer-mob-img-div">
            <div className="footer-mob-img-container">
                <StaticImage src="../../images/footerlogo.png" alt='Logo'/>
            </div>
        </div>

        <div>
            <p>SayVU strives to minimize the response time of emergency services and other authorities, and make sure the user gets relevant and effective assistance as quickly as possible. Our world-leading platform tells the story of whats's going on –while it's going on– allowing for faster, more efficient responses to a situation, ultimately saving more lives.</p>
            <p className="footer-second-p">We are here to make sure everyone has the power to save lives.</p>
        </div>

        <div className="info-footer" style={{marginTop: "0"}}>
            <div className="map-marker-div">
                <img style={{width: '3vw'}} src={Location} alt="location"/>
            </div>
            <p>Tel Aviv, Israel</p>
        </div><div className="info-footer">
            <div className="map-marker-div">
                <img style={{width: '3vw'}} src={Phone} alt="phone"/>
            </div>
            <p>+972 50-484-1981</p>
        </div>
        <div className="info-footer">
            <div className="map-marker-div">
                <img style={{width: '3vw'}} src={Email} alt="email"/>
            </div>
            <p>contact@sayvu.com</p>
        </div>

        <div style={{display: "flex", justifyContent: "center", marginTop: "10%", marginBottom: "-5%"}}>
            <h2 style={{fontFamily: "G Medium", marginBottom: '10%', color: 'white', fontSize: '7vw'}}>IN THE PRESS</h2>
        </div>
        
        <InThePress title="Get to know the apps that can save lives" author="(Network 13) (HE)" date="September 3, 2020"/>
        <InThePress title="Municipality of Curicó implemented 'Panic Button'" author="(Radiortl) (ES)" date="January 10, 2020"/>
        <InThePress title="Woman obtains arrest using panic button" author="(Vivimos La Noticia) (ES)" date="September 24, 2019"/>
        <InThePress title="Israeli Startup’s Revolutionary Tech" author="(Jewish Business News) (EN)" date="July 15, 2019"/>

        <div style={{display: "flex", justifyContent: "center", marginTop: "10%"}}>
            <h3 style={{fontFamily: "G Medium", color: 'white', fontSize: '5vw', marginBottom: '5%'}}>DOWNLOAD THE APP</h3>
        </div>

        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="footer-stores">
                <a href="https://apps.apple.com/cl/app/sayvu/id1081148815" target="_blank">
                    <StaticImage src="../../images/app-store.png" alt='Logo Play Store'/>
                </a>
            </div>
            <div className="footer-stores">
                <a href="https://play.google.com/store/apps/details?id=com.sayvu" target="_blank">
                    <StaticImage src="../../images/play-store.png" alt='Logo App Store'/>
                </a>
            </div>
        </div>

        <div style={{display: "flex", justifyContent: "center", margin: "8% 0 8% 0"}}>
            <Video videoSrcURL="https://www.youtube.com/embed/_3p0TPA0muI" videoTitle="Elmo"/>
        </div>

        <div className="all-icons-footer-div-mobile">
            <div className="icon-footer-div-mobile">
                <a href="https://www.facebook.com/SayVUtech" target="_blank">
                <StaticImage src="../../icons/facebook.svg"/>
                </a>
            </div>
            <div className="icon-footer-div-mobile">
                <a href="https://wa.me/972504841981" target="_blank">
                <StaticImage src="../../icons/whatsapp.svg"/>
                </a>
            </div>
            <div className="icon-footer-div-mobile">
                <a href="https://www.linkedin.com/company/sayvu-technologies/" target="_blank">
                <StaticImage src="../../icons/linkedin.svg"/>
                </a>
            </div>
            <div className="icon-footer-div-mobile">
                <a href="https://www.instagram.com/sayvutech/" target="_blank">
                <StaticImage src="../../icons/instagram.svg"/>
                </a>
            </div>
            <div className="icon-footer-div-mobile">
                <a href="https://twitter.com/SayvUtech" target="_blank">
                <StaticImage src="../../icons/twitter.svg"/>
                </a>
            </div>
            <div className="icon-footer-div-mobile">
                <a href="https://www.youtube.com/channel/UCUYTCKQGr21XC5YBJtNj2SA" target="_blank">
                <StaticImage src="../../icons/youtube.svg"/>
                </a>
            </div>
        </div>
        <div style={{marginTop: '5vw'}}>
            <Link to='/privacy-policy' 
            style={{color: 'white', fontFamily: 'G Book', fontSize: '4vw'}}>Privacy Policy</Link>
        </div>
        
    </MobileFooter>
    )
}

export default Footer
