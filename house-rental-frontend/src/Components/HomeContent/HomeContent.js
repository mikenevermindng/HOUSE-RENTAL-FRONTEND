import React from 'react';
import './HomeContent.css';

function HomeContent({children}) {
    return (
        <div className="home-content">
            {children}
        </div>
    )
}

export default HomeContent;