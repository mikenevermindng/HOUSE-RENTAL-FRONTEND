import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './CustomSelector.css';
import arrowDown from '../../Asset/Icon/downArrow.svg';
import loupe from '../../Asset/Icon/loupe.svg';
import classNames from 'classnames';

const texts = [ 'New York', 'Tokio', 'Hanoi', 'Bejing', 'London' ].map((text, index) => {
	return { id: index, value: text };
});

function CustomSelector(props) {
	const { placeHolder } = props;

	const [ value, setValue ] = useState('');
	const [ isFocusing, setFocusing ] = useState(false);
	const [ listOption, setListOption ] = useState([ ...texts ]);
	const [ listFilterOption, setListFilterOption ] = useState([]);
	const [ activeSuggestion, setActiveSuggestion ] = useState(0);
	const [ isMouseOver, setMouseOver ] = useState(false);
	const [ showSuggestion, setShowSuggestion ] = useState(false);

	const onChangeHandler = (event) => {
		event.preventDefault();
		setValue(event.target.value);
		setShowSuggestion(true);
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
		setFocusing(false);
		setShowSuggestion(false);
		if (listOption.findIndex((option) => option.value === value) === -1) {
			setValue('');
		}
		setActiveSuggestion(0);
	};

	const onFocusHandler = () => {
		setFocusing(true);
		setShowSuggestion(true);
	};

	useEffect(
		() => {
			if (value.length === 0) {
				setListFilterOption(listOption);
			} else {
				const listRecommand = texts.filter((text) => {
					return (
						text.value
							.toLowerCase()
							.split(',')
							.join('')
							.indexOf(value.toLowerCase().split(',').join('')) !== -1
					);
				});
				setListFilterOption([ ...listRecommand.sort((a, b) => a.value.length - b.value.length) ]);
			}
		},
		[ value ]
	);

	return (
		<div className="select-custom">
			<div className="select-custom-input">
				<OutsideClickHandler onOutsideClick={clickOutsideHandler}>
					<input
						type="text"
						placeholder={placeHolder}
						onFocus={onFocusHandler}
						onChange={onChangeHandler}
						onKeyUp={onPressArrowHandler}
						value={value}
					/>
					{!isFocusing && <img src={arrowDown} alt="" />}
					{isFocusing && <img src={loupe} alt="" />}
					{showSuggestion && (
						<div className="options-box">
							{listFilterOption.slice(0, 5).map((recommandtion, index) => {
								return (
									<li
										key={recommandtion.id}
										onClick={clickOnSuggestionItem(recommandtion)}
										onMouseOver={onMouseOverHandler}
										onMouseLeave={onMouseLeaveHandler}
										className={classNames({
											'highlight-item': index === activeSuggestion && !isMouseOver
										})}
									>
										<span>{recommandtion.value}</span>
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

export default CustomSelector;
