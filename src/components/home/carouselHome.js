import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./carouselHome.css"
import "../../css/typography.css"
import { StaticImage } from "gatsby-plugin-image"
import useWindowSize from "../../hooks/useWindowSize"




function CarouselHome() {

    const windowSize = useWindowSize();

    return (windowSize > 480) ?  (
        <Carousel style={{zIndex: '1'}}>
                <Carousel.Item interval={9000}>
                    <div className="first-carousel-slide">
                        <h1>The Platform.</h1>
                        <div className="carousel-content">
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/platform/celular-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Smartphone accesible</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/platform/tuerca-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Flexible system architecture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel single-line-carousel-container">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/platform/efectivo-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Cost effective</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/platform/integracion-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Seamless integration</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/platform/info-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Precise information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <div className="second-carousel-slide">
                        <h1>The Results.</h1>
                        <div className="carousel-content">
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/results/personas-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Anyone can use it</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel three-lined">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/results/organizacion-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Easily integrates into organization</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/results/mundo-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Accesible to the masses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel three-lined">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/results/eficiente-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Efficient response coordination</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel">
                                <div>
                                    <div className='carousel-images-div'>
                                        <StaticImage src="../../icons/results/ambulancia-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div">
                                        <p>Quicker response time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
    ) : 
    (
        <Carousel style={{zIndex: '1'}}>
                <Carousel.Item interval={9000}>
                    <div className="first-carousel-slide-mobile">
                        <h1>The Platform.</h1>
                        <div className="carousel-content-mobile">
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/platform/celular-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Smartphone accesible</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/platform/tuerca-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Flexible system architecture</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <div className="second-carousel-slide-mobile">
                        <h1>The Results.</h1>
                        <div className="carousel-content-mobile">
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/results/personas-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Accesible to the masses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile three-lined-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/results/eficiente-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Efficient response coordination</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile three-lined-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/results/ambulancia-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Quicker response time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <div className="first-carousel-slide-mobile">
                        <h1>The Platform.</h1>
                        <div className="carousel-content-mobile">
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/platform/efectivo-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Cost effective</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/platform/integracion-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Seamless integration</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/platform/info-platform.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Precise information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <div className="second-carousel-slide-mobile">
                        <h1>The Results.</h1>
                        <div className="carousel-content-mobile">
                            <div className="container-carousel-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/results/personas-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Anyone can use it</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-carousel-mobile two-lined-mobile">
                                <div className="elements-div-mobile">
                                    <div className='carousel-images-div-mobile icon-car-mobile'>
                                        <StaticImage src="../../icons/results/organizacion-results.svg" alt='Celular Icon'/>
                                    </div>
                                    <div className="carousel-paragraph-div-mobile">
                                        <p>Easily integrates into organization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
    )
}

export default CarouselHome