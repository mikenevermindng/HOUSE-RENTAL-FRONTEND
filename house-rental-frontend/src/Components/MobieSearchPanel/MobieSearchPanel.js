import React from 'react';
import './MobieSearchPanel.css';
import SearchBarAutoComplete from '../SearchBar/SearchBarAutoComplete';
import NormalSelect from '../NormalSelect/NormalSelect';

function MobieSearchPanel() {
	return (
		<div className="mobie-searching-panel">
			<div className="mobie-searching-form">
				<div className="selector">
					<SearchBarAutoComplete />
				</div>
				<div className="selector">
					<NormalSelect />
				</div>
				<div className="selector">
					<NormalSelect />
				</div>
				<div className="selector">
					<NormalSelect />
				</div>
				<div className="selector">
					<NormalSelect />
				</div>
			</div>
		</div>
	);
}

export default MobieSearchPanel;
