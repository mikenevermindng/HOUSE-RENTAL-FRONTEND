import React, { useState, useEffect } from 'react';
import http from '../../Services/http';
import axios from 'axios';
import _ from 'lodash';
import { AutoComplete } from 'antd';

function LocationAutocompleteInput() {
	const [ value, setValue ] = useState('');

	const [ recommandations, setRecommandation ] = useState([]);

	const [ textList, setTextList ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/location/').then((result) => {
			const { cities, districts, subDistricts } = result.data.locations;
			const districtMap = _.keyBy(districts, 'districtId');
			const cityMap = _.keyBy(cities, 'cityId');

			const subDistrictAddresses = subDistricts.map((subDistrict) => {
				const district = districtMap[subDistrict.districtId];
				const city = cityMap[district.cityId];
				return {
					id: 'subDistrict-' + subDistrict.subDistrictId,
					value: subDistrict.subDistrict + ', ' + district.district + ', ' + city.city
				};
			});

			const districtAddresses = districts.map((district) => {
				const city = cityMap[district.cityId];
				return { id: 'district-' + district.districtId, value: district.district + ', ' + city.city };
			});

			const cityAddress = cities.map((city) => {
				return { id: 'city-' + city.cityId, value: city.city };
			});
			setTextList([ ...subDistrictAddresses, ...districtAddresses, ...cityAddress ]);
		});
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

	const onSelect = (data) => {
		setValue(data);
		console.log(data);
	};

	const onChange = (data) => {
		console.log(value);
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
