import React, { useState, useEffect } from 'react';
import './SearchBarAuto.css';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';

const texts = ['New York', 'Tokio', 'Hanoi', 'Bejing', 'London'].map((text, index) => {
	return { id: index, value: text };
});

function SearchBarAutoComplete(props) {
	const { placeHolder } = props;

	const [value, setValue] = useState('');
	const [recommendations, setRecommendationList] = useState([...texts]);
	const [activeSuggestion, setActiveSuggestion] = useState(0);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const [isMouseOver, setMouseOver] = useState(false);

	const onChangeHandler = (event) => {
		event.preventDefault();
		setValue(event.target.value);
		setShowSuggestion(true);
	};

	const onPressArrowHandler = (event) => {
		if (recommendations.length === 0) return;
		if (event.keyCode === 13) {
			setValue(recommendations[activeSuggestion].value);
			setShowSuggestion(false);
			setActiveSuggestion(0);
		} else if (event.keyCode === 38) {
			const temp = activeSuggestion - 1 >= 0 ? activeSuggestion - 1 : recommendations.length - 1;
			setActiveSuggestion(temp);
		} else if (event.keyCode === 40) {
			setActiveSuggestion((activeSuggestion + 1) % recommendations.length);
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

	useEffect(
		() => {
			if (value === '') {
				setRecommendationList([]);
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
				setRecommendationList([...listRecommand.sort((a, b) => a.value.length - b.value.length)]);
			}
		},
		[value]
	);

	return (
		<div className="wrapper">
			<div className="search-input">
				<OutsideClickHandler onOutsideClick={() => setRecommendationList([])}>
					<input
						type="text"
						placeholder={placeHolder}
						onChange={onChangeHandler}
						value={value}
						onKeyUp={onPressArrowHandler}
					/>
					{showSuggestion && (
						<div className="autocom-box">
							{recommendations.map((recommandtion, index) => {
								return (
									<li
										key={recommandtion.id}
										onClick={clickOnSuggestionItem(recommandtion)}
										onMouseOver={onMouseOverHandler}
										onMouseLeave={onMouseLeaveHandler}
										className={classNames({
											'hightlight-item': index === activeSuggestion && !isMouseOver
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

export default SearchBarAutoComplete;
