import React from 'react';
import './HeroSearchSection.css';
import SearchBox from './SearchBox/SearchBox';

function HeroSearchSection(props) {
    return (
        <div className="hero-search">
            <SearchBox/>
            <div className="headline-container">
                <h1>{props.headline.title}</h1>
                <p>{props.headline.subtitle}</p>
            </div>
        </div>
    )
}

export default HeroSearchSection;