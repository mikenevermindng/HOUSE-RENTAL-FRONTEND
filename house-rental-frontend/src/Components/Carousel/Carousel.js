import React from "react";
import Slider from "react-slick";
import './Carousel.css';

export default class MultipleItems extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            widthVariable: true
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/w3images/coffee.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/w3images/workbench.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/w3images/sound.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/w3images/coffee.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/w3images/workbench.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/w3images/sound.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}