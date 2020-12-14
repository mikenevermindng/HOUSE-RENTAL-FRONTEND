import React, { useState } from 'react';
import './MobileSearchPanel.css';
import CustomSelectorWithInput from '../CustomSelectorWithInputText/CustomSelectorWithInput';
import NormalSelect from '../NormalSelect/NormalSelect';
import Modal from 'react-awesome-modal';

function MobileSearchPanel() {
	const [ visible, setVisible ] = useState(false);

	const openModal = () => {
		setVisible(true);
	};

	const closeModal = () => {
		setVisible(false);
	};

	return (
		<React.Fragment>
			<input type="button" value="Open" onClick={openModal} />
			<Modal visible={visible} width="400" effect="fadeInUp" onClickAway={closeModal}>
				<div className="mobile-searching-panel">
					<div className="cancel-button" onClick={closeModal}>
						<div className="x-button-1" />
						<div className="x-button-2" />
						<div className="x-button-3" />
					</div>
					<div className="mobile-searching-form">
						<div className="selector">
							<CustomSelectorWithInput placeHolder="Địa điểm" />
						</div>
						<div className="selector">
							<NormalSelect placeHolder="Số lượng phòng" />
						</div>
						<div className="selector">
							<NormalSelect placeHolder="Kiểu nhà" />
						</div>
						<div className="selector">
							<NormalSelect placeHolder="Giá thấp nhất" />
						</div>
						<div className="selector">
							<NormalSelect placeHolder="Giá cao nhất" />
						</div>
						<div className="mobile-form-submit-button">
							<button>Tìm kiếm</button>
						</div>
					</div>
				</div>
			</Modal>
		</React.Fragment>
	);
}

export default MobileSearchPanel;
