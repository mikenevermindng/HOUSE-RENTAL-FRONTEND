import React from 'react';
import './HeroSearchSection.css';
import SearchBox from './SearchBox/SearchBox';

function HeroSearchSection(props) {
    return (
        <div className="hero-search">
            <SearchBox/>
            <div className="headline-container">
                <h1>{props.headline}</h1>
            </div>
        </div>
    )
}

export default HeroSearchSection;