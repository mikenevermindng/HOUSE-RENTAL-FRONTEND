import React, { useState } from 'react';
import './Slider.css';
import classNames from 'classnames';

function Slider(props) {
	const { slides } = props;

	const [activeSlide, setActiveSlide] = useState(0);

	const prevSlide = () => {
		let slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
		setActiveSlide(slide);
	};

	const nextSlide = () => {
		let slide = activeSlide + 1 < slides.length ? activeSlide + 1 : 0;
		setActiveSlide(slide);
	};

	return (
		<div>
			<div className="slideshow-container">
				{slides.map((slide, index) => {
					return (
						<div key={"slider-" + index} className={classNames('mySlides fade', { 'display-block': activeSlide === index })}>
							<div style={{
								width: "100%",
								height: "200px",
								backgroundImage: "url(" + slide.background + ")",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}}/>
						</div>
					);
				})}
				<span className="prev" onClick={prevSlide}>
					&#10094;
				</span>
				<span className="next" onClick={nextSlide}>
					&#10095;
				</span>
			</div>
		</div>
	);
}

export default Slider;