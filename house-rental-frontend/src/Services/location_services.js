import http from './http';
import _ from 'lodash';

let apiGetAllLocationData = async () => {
	try {
		const response = await http.get('location/');
		const locationUnitData = response.data.locations;
		const { cities, districts, subDistricts } = locationUnitData;
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

		console.log('result');

		return [...subDistrictAddresses, ...districtAddresses, ...cityAddress];
	} catch (error) {
		return [];
	}
};

const getAreaData = async () => {
	try {
		const response = await http.get('location/');
		return response.data;
	} catch (error) {
		return [];
	}
}

export { apiGetAllLocationData, getAreaData };
