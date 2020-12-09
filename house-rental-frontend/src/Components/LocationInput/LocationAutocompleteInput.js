import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import { apiGetAllLocationData } from '../../Services/location_services';
import _ from 'lodash';

function LocationAutocompleteInput() {
	const [ value, setValue ] = useState('');

	const [ recommandations, setRecommandation ] = useState([]);

	const [ textList, setTextList ] = useState([]);
	useEffect(() => {
		const loadLocationData = async () => {
			const locations = await apiGetAllLocationData();
			setTextList(locations);
		};
		loadLocationData();
	}, []);

	useEffect(
		() => {
			if (value === '') {
				setRecommandation([]);
			} else {
				const listRecommand = textList.filter((text) => {
					return (
						text.value
							.toLowerCase()
							.split(',')
							.join('')
							.indexOf(value.toLowerCase().split(',').join('')) !== -1
					);
				});
				setRecommandation(listRecommand.sort((a, b) => a.value.length - b.value.length));
			}
		},
		[ value ]
	);

	useEffect(
		() => {
			if (value === '') {
				setRecommandation([]);
			} else {
				const listRecommand = textList.filter((text) => {
					return (
						text.value
							.toLowerCase()
							.split(',')
							.join('')
							.indexOf(value.toLowerCase().split(',').join('')) !== -1
					);
				});
				setRecommandation(listRecommand.sort((a, b) => a.value.length - b.value.length));
			}
		},
		[ value ]
	);

	const onSelect = (data) => {
		setValue(data);
	};

	const onChange = (data) => {
		setValue(data);
	};

	return (
		<React.Fragment>
			<AutoComplete
				options={recommandations.slice(0, 5)}
				style={{
					width: 200
				}}
				onSelect={onSelect}
				onChange={onChange}
				placeholder="input here"
				value={value}
			/>
		</React.Fragment>
	);
}

export default LocationAutocompleteInput;
