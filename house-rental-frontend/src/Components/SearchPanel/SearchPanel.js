import React from 'react';
import './SearchPanel.css';

import mapLocationIcon from '../../Asset/Icon/map-locationpin.png';
import badroomIcon from '../../Asset/Icon/search-bed.png';
import houseIcon from '../../Asset/Icon/search-home.png';
import MoneyIcon from '../../Asset/Icon/dollar.png';
import CustomSelector from '../CustomSelectorWithInputText/CustomSelectorWithInput';
import NormalSelect from '../NormalSelect/NormalSelect';
import SearchBarAutoComplete from '../SearchBar/SearchBarAutoComplete';

function SearchPanel() {
	return (
		<div className="search-panel">
			<div className="search-top">
				<div className="input-place">
					<div className="search-input">
						<img src={mapLocationIcon} alt="" title="location" width="15" height="20" />
						<div className="display-inline-block max-w-200px">
							<SearchBarAutoComplete placeHolder="Địa điểm" />
						</div>
					</div>
					<div className="number-of-room-selector">
						<img src={badroomIcon} alt="" title="location" width="24" height="24" />
						<div className="display-inline-block max-w-200px">
							<CustomSelector placeHolder="Số lượng phòng" />
						</div>
					</div>
					<div className="type-of-accommod">
						<img src={houseIcon} alt="" title="location" width="18" height="18" />
						<div className="display-inline-block type-house-selector max-w-200px">
							<NormalSelect placeHolder="Kiểu nhà" />
						</div>
					</div>
					<div className="search-button margin-x-15px">
						<button>Search</button>
					</div>
				</div>
			</div>
			<div className="search-bottom">
				<div className="price-of-accommod">
					<img src={MoneyIcon} alt="" title="location" width="24" height="24" />
					<div className="min-price margin-x-15px">
						<div className="w-200px">
							<NormalSelect placeHolder="Kiểu nhà" />
						</div>
					</div>
					<div className="max-price margin-x-15px">
						<div className="w-200px">
							<NormalSelect placeHolder="Kiểu nhà" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchPanel;
