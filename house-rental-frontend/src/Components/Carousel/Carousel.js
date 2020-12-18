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
            variableWidth: true,
            adaptiveHeight: true
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    <div className="carousel-item"
                         style={{
                             backgroundImage: "url(\"https://www.w3schools.com/w3images/coffee.jpg\")"
                         }}
                    />
                    <div className="carousel-item"
                        style={{
                            backgroundImage: "url(\"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80\")"
                        }}
                    />
                    <div className="carousel-item"
                         style={{
                             backgroundImage: "url(\"https://www.w3schools.com/w3images/sound.jpg\")"
                         }}
                    />
                    <div className="carousel-item"
                         style={{
                             backgroundImage: "url(\"https://www.w3schools.com/w3images/coffee.jpg\")",
                         }}
                    />
                    <div className="carousel-item"
                         style={{
                             backgroundImage: "url(\"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80\")"
                         }}
                    />
                    <div className="carousel-item"
                         style={{
                             backgroundImage: "url(\"https://www.w3schools.com/w3images/sound.jpg\")"
                         }}
                    />
                    {/*<div className="carousel-item">*/}
                    {/*    <img src="https://www.w3schools.com/w3images/coffee.jpg" />*/}
                    {/*</div>*/}
                    {/*<div className="carousel-item">*/}
                    {/*    <img src="https://www.w3schools.com/w3images/workbench.jpg" />*/}
                    {/*</div>*/}
                    {/*<div className="carousel-item">*/}
                    {/*    <img src="https://www.w3schools.com/w3images/sound.jpg" />*/}
                    {/*</div>*/}
                </Slider>
            </div>
        );
    }
}