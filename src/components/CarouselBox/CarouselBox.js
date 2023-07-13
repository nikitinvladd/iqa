import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import CarouselImg1 from './a_call_to_action_for_generative_ai_cs_4.jpg';
// import CarouselImg2 from './canadian_tire_corporation_and_microsoft_partner_to_advance_retail_innovation_in_canada_1920.jpg';
// import CarouselImg3 from './canadian_tire_corporation_and_microsoft_partner_to_advance_retail_innovation_in_canada_1920.jpg';
import './CarouselBox.css';

const CarouselBox = () => {
        return (
            <div>
                <Carousel pause={false} fade controls={false}>
                    <Carousel.Item interval={5000}>
                        <div className="carouselimg1"></div>
                    <Carousel.Caption className='carousel-h1 d-flex flex-column justify-content-center h-100'>
                    <div className="star">★★★★★</div>
                    <h1 className="carousel-h1">Jesteśmy gotowi zaoferować Państwu sekretną formułę sukcesu</h1>
                    <p className="p-gray">Uwolnij potencjał swoich branż cyfrowych</p>
                    <a className="carousel-a" href="/about">Read More →</a>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carouselimg2"></div>
                    <Carousel.Caption className='carousel-h1 d-flex flex-column justify-content-center h-100'>
                        <h1 className="carousel-h1">Dla świata definiowanego programowo</h1>
                        <p className='p-gray'>Zapewniamy cyfrową przewagę organizacjom opartym na oprogramowaniu</p>
                        <a className="carousel-a" href="#whoweare">Read More →</a>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carouselimg3"></div>
                    <Carousel.Caption className='carousel-h1 d-flex flex-column justify-content-center h-100'>
                        <h1 className="carousel-h1">IQA Announces Strategic Global Partnership with Google Cloud</h1>
                        <a className="carousel-a" href="/about">Read More →</a>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }

export default CarouselBox;