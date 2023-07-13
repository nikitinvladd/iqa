import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBox.css';

const CarouselBox = () => {
        return (
            <div>
                <Carousel pause={false} fade controls={false}>
                    <Carousel.Item interval={5000}>
                        <div className="carouselimg1"></div>
                    <Carousel.Caption className='carousel-h1 d-flex flex-column justify-content-center h-100'>
                    <div className="star">★★★★★</div>
                    <h1 className="carousel-h1">Przyciągamy 30% więcej zysków do twojej firmy korzystając z naszej tajnej formulę</h1>
                    <p className="p-gray">Uwolnij potencjał swoich branż cyfrowych</p>
                    <a className="carousel-a" href="/about">Read More →</a>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carouselimg2"></div>
                    <Carousel.Caption className='carousel-h1 d-flex flex-column justify-content-center h-100'>
                        <h1 className="carousel-h1">Wypróbuj naszą 4-etapową formułę IT już dziś</h1>
                        <p className='p-gray'>Dla świata definiowanego programowo</p>
                        <a className="carousel-a" href="#whoweare">Read More →</a>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carouselimg3"></div>
                    <Carousel.Caption className='carousel-h1 d-flex flex-column justify-content-center h-100'>
                        <h1 className="carousel-h1">Poczuj unikalny proces pracy z klientem</h1>
                        <a className="carousel-a" href="/about">Read More →</a>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }

export default CarouselBox;