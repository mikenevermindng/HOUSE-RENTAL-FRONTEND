import React from 'react';
import './SearchPanel.css';
import SearchBarAutoComplete from '../SearchBar/SearchBarAutoComplete';
import mapLocationIcon from '../../Asset/Icon/map-locationpin.png';
import badroomIcon from '../../Asset/Icon/search-bed.png';
import houseIcon from '../../Asset/Icon/search-home.png';
import CustomSelector from '../CustomSelectorWithInputText/CustomSelectorWithInput';
import NormalSelect from '../NormalSelect/NormalSelect';

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
						<CustomSelector />
					</div>
					<div className="type-of-accommod">
						<img src={houseIcon} alt="" title="location" width="18" height="18" />
						<NormalSelect />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchPanel;
