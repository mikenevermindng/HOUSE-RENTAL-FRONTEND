import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Select } from 'antd';

const { Option } = Select;

function PosterFromInput(props) {
	const typeOfAccommodation = [ 'Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn' ];

	const { onChangeHandler, setPosterInfo, posterInfo, posterInfoFormOnSelectHandler } = props;

	const [ prices, setPrices ] = useState([]);

	const priceChangeHandler = (event) => {
		const priceList = prices;
		const timberPrice = priceList.find((p) => p.timber === event.target.name);
		if (timberPrice) {
			timberPrice.price = event.target.value;
		} else {
			priceList.push({
				timber: event.target.name,
				price: event.target.value
			});
		}
		setPrices(priceList);
	};

	useEffect(
		() => {
			setPosterInfo({ ...posterInfo, pricePerTimber: prices });
			console.log(posterInfo);
		},
		[ prices ]
	);

	return (
		<div style={{ maxWidth: '600px' }}>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Chủ đề</Col>
				<Col span={18}>
					<Input placeholder="Ví dụ: Nhà trọ Thọ An số 3 Tây Hồ" name="title" onChange={onChangeHandler} />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Thể loại</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						showSearch
						placeholder="Thể loại"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
						onChange={(value, label) => posterInfoFormOnSelectHandler(label)}
					>
						{typeOfAccommodation.map((type, index) => {
							return (
								<Option value={type} key={'typeOfAccommodation-' + index} name="typeOfAccommodation">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Thành phố</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						showSearch
						placeholder="Thành phố"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
						onChange={(value, label) => posterInfoFormOnSelectHandler(label)}
					>
						{typeOfAccommodation.map((type) => {
							return (
								<Option value={type} name="city">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Quận/Huyện</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						showSearch
						placeholder="Quận/Huyện"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
						onChange={(value, label) => posterInfoFormOnSelectHandler(label)}
					>
						{typeOfAccommodation.map((type) => {
							return (
								<Option value={type} name="district">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Phường/Xã</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						showSearch
						placeholder="Phường/Xã"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
						onChange={(value, label) => posterInfoFormOnSelectHandler(label)}
					>
						{typeOfAccommodation.map((type) => {
							return (
								<Option value={type} name="subDistrict">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Tòa nhà, Tên đường</Col>
				<Col span={18}>
					<Input placeholder="Tòa nhà, Tên đường" onChange={onChangeHandler} name="address" />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Diện tích</Col>
				<Col span={18}>
					<Input placeholder="Diện tích (mét vuông)" type="number" name="area" onChange={onChangeHandler} />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Số lượng phòng</Col>
				<Col span={18}>
					<Input placeholder="Số lượng phòng" type="number" name="numberOfRoom" onChange={onChangeHandler} />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Giá thuê</Col>
				<Col span={6}>
					<label name="month">Tháng</label>
					<Input placeholder="Tháng (Đồng)" type="number" name="month" onChange={priceChangeHandler} />
				</Col>
				<Col span={6}>
					<label name="quarter">Quý</label>
					<Input placeholder="Quý (Đồng)" type="number" name="quarter" onChange={priceChangeHandler} />
				</Col>
				<Col span={6}>
					<label name="year">Năm</label>
					<Input placeholder="Năm (Đồng)" type="number" name="year" onChange={priceChangeHandler} />
				</Col>
			</Row>
		</div>
	);
}

export default PosterFromInput;
