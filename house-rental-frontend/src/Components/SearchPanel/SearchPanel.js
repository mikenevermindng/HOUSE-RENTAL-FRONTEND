import React from 'react';
import './SearchPanel.css';
import SearchBarAutoComplete from '../SearchBar/SearchBarAutoComplete';
import mapLocationIcon from '../../Asset/Icon/map-locationpin.png';
import badroomIcon from '../../Asset/Icon/search-bed.png';

function SearchPanel() {
	return (
		<div className="search-panel">
			<div className="search-top">
				<div className="input-place">
					<div className="search-input">
						<img src={mapLocationIcon} alt="" title="location" width="15" height="20" />
						<SearchBarAutoComplete />
					</div>
					<div className="number-of-room-selector">
						<img src={badroomIcon} alt="" title="location" width="24" height="24" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchPanel;
