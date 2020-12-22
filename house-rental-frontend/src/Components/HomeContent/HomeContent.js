import React from 'react';
import './HomeContent.css';
import Slider from 'react-slick';

function HomeContent({children}) {
    const types = [
        {
            name: 'Phòng trọ',
            image: "https://bom.to/jub9mDnf"
        },
        {
            name: 'Chung cư mini',
            image: "https://bom.to/vQoePLqy"
        },
        {
            name: 'Nhà nguyên căn',
            image: "https://bom.to/Bbt2OL32"
        },
        {
            name: 'Chung cư nguyên căn',
            image: "https://bom.to/x6ldjEc3"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        speed: 5000,
        autoPlaySpeed: 5000,
        cssEase: "linear",
        lazyLoad: true,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="home-content">
                {children}
            </div>

            <div id="bottom-content">

                <h1 className="foreground-title">Dịch vụ nhà ở chúng tôi cung cấp bao gồm</h1>
                <h1 className="background-title">Dịch vụ nhà ở chúng tôi cung cấp bao gồm</h1>

                <Slider {...settings}>
                    {types.map((type) => {
                            return (
                                <div className="types-item-wrapper">
                                    <div className="types-item" style = {{
                                        backgroundImage: "url(" + type.image + ")",
                                    }}/>
                                    <h1>{type.name}</h1>
                                </div>
                            )
                        }
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default HomeContent;