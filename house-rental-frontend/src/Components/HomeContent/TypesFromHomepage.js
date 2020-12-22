import React from 'react';
import Slider from 'react-slick';

export default function TypesFromHomepage() {
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
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div id="bottom-content">
            <h1 className="foreground-title">Dịch vụ nhà ở chúng tôi cung cấp bao gồm</h1>
            <h1 className="background-title">Dịch vụ nhà ở chúng tôi cung cấp bao gồm</h1>
            <Slider {...settings}>
                {types.map((type) => {
                    return (
                        <div className="types-item">
                            <div style = {{
                                backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.55), rgba(51, 51, 51, 0.55)), url(" + type.image + ")"
                            }}>
                                <h1>{type.name}</h1>
                            </div>
                        </div>
                    )
                }
                )}
            </Slider>
        </div>
    )
}