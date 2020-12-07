import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import http from '../../Services/http';
import axios from 'axios';
import _ from 'lodash';
import lunr from 'lunr';

function LocationAutocompleteInput() {
	const [ value, setValue ] = useState('');

	const [ recommandations, setRecommandation ] = useState([]);

	const [ textList, setTextList ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/location/').then((result) => {
			const { cities, districts, subDistricts } = result.data.locations;
			const t1 = performance.now();
			const districtMap = _.keyBy(districts, 'districtId');
			const cityMap = _.keyBy(cities, 'cityId');

			const subDistrictAddresses = subDistricts.map((subDistrict) => {
				const district = districtMap[subDistrict.districtId];
				const city = cityMap[district.cityId];
				return {
					id: 'subDistrict-' + subDistrict.subDistrictId,
					label: subDistrict.subDistrict + ', ' + district.district + ', ' + city.city
				};
			});

			const districtAddresses = districts.map((district) => {
				const city = cityMap[district.cityId];
				return { id: 'district-' + district.districtId, label: district.district + ', ' + city.city };
			});

			const cityAddress = cities.map((city) => {
				return { id: 'city-' + city.cityId, label: city.city };
			});
			setTextList([ ...subDistrictAddresses, ...districtAddresses, ...cityAddress ]);
			console.log(performance.now() - t1);
		});
	}, []);

	useEffect(
		() => {
			const t1 = performance.now();
			if (value === '') {
				setRecommandation([]);
			} else {
				const listRecommand = textList.filter((text) => {
					return (
						text.label
							.toLowerCase()
							.split(',')
							.join('')
							.indexOf(value.toLowerCase().split(',').join('')) !== -1
					);
				});
				console.log(listRecommand);
				setRecommandation(listRecommand.sort((a, b) => a.label.length - b.label.length));
			}
			console.log(performance.now() - t1);
		},
		[ value ]
	);

	return (
		<div>
			<input onChange={(event) => setValue(event.target.value)} />
			<div>
				{recommandations
					.slice(0, 10)
					.map((recommandation) => <p key={recommandation.id}>{recommandation.label}</p>)}
			</div>
		</div>
	);
}

export default LocationAutocompleteInput;
