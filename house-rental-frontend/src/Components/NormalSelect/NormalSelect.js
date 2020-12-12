import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './NormalSelect.css';
import arrowDown from '../../Asset/Icon/downArrow.svg';
import arrowUp from '../../Asset/Icon/up-arrow.png';
import classNames from 'classnames';

const texts = [ 'New York', 'Tokio', 'Hanoi', 'Bejing', 'London' ].map((text, index) => {
	return { id: index, value: text };
});

function NormalSelect(props) {
	const { placeHolder } = props;

	const [ value, setValue ] = useState('');
	const [ listOption, setListOption ] = useState([ ...texts ]);
	const [ listFilterOption, setListFilterOption ] = useState([]);
	const [ activeSuggestion, setActiveSuggestion ] = useState(0);
	const [ isMouseOver, setMouseOver ] = useState(false);
	const [ showSuggestion, setShowSuggestion ] = useState(false);

	const onClickHandler = () => {
		setShowSuggestion(!showSuggestion);
	};

	const onPressArrowHandler = (event) => {
		if (listFilterOption.length === 0) return;
		if (event.keyCode === 13) {
			setValue(listFilterOption[activeSuggestion].value);
			setShowSuggestion(false);
			setActiveSuggestion(0);
		} else if (event.keyCode === 38) {
			const temp = activeSuggestion - 1 >= 0 ? activeSuggestion - 1 : listFilterOption.length - 1;
			setActiveSuggestion(temp);
		} else if (event.keyCode === 40) {
			setActiveSuggestion((activeSuggestion + 1) % listFilterOption.length);
		}
	};

	const clickOnSuggestionItem = (recommandtion) => {
		return () => {
			setValue(recommandtion.value);
			setShowSuggestion(false);
			setActiveSuggestion(0);
		};
	};

	const onMouseOverHandler = (evnet) => {
		setMouseOver(true);
	};

	const onMouseLeaveHandler = (evnet) => {
		setMouseOver(false);
	};

	const clickOutsideHandler = () => {
		setShowSuggestion(false);
		if (listOption.findIndex((option) => option.value === value) === -1) {
			setValue('');
		}
		setActiveSuggestion(0);
	};

	return (
		<div className="select-normal">
			<div className="select-normal-input" onClick={onClickHandler}>
				<OutsideClickHandler onOutsideClick={clickOutsideHandler}>
					<div className="select-normal-value">{value.length === 0 ? placeHolder : value}</div>
					{!showSuggestion && <img src={arrowDown} alt="" />}
					{showSuggestion && <img src={arrowUp} alt="" />}
					{showSuggestion && (
						<div className="options-box">
							{listOption.slice(0, 5).map((option, index) => {
								return (
									<li
										key={option.id}
										onClick={clickOnSuggestionItem(option)}
										onMouseOver={onMouseOverHandler}
										onMouseLeave={onMouseLeaveHandler}
										className={classNames({
											'highlight-item': index === activeSuggestion && !isMouseOver
										})}
									>
										<span>{option.value}</span>
									</li>
								);
							})}
						</div>
					)}
				</OutsideClickHandler>
			</div>
		</div>
	);
}

export default NormalSelect;
