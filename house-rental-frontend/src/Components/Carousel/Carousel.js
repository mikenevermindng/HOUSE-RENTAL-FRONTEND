import React from "react";
import Slider from "react-slick";
import './Carousel.css';

export default function MultipleItems(props) {

    const { images } = props
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div>
            <h2> Multiple items </h2>
            <Slider {...settings}>
                {images.map((img, index) =>
                    <div key={'img' + index} className="carousel-item">
                        <img src={"http://localhost:3001/" + img} alt="" />
                    </div>
                )}
            </Slider>
        </div>
    );
}