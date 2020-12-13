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

	useEffect(() => {
		console.log('calling');
		setPosterInfo({ ...posterInfo, pricePerTimber: prices });
		console.log(posterInfo);
	}, []);

	return (
		<div>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Chủ đề</div>
				</Col>
				<Col span={18}>
					<Input placeholder="Ví dụ: Nhà trọ Thọ An số 3 Tây Hồ" name="title" onChange={onChangeHandler} />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Thể loại</div>
				</Col>
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
				<Col span={6}>
					<div className="input-label">Thành phố</div>
				</Col>
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
						{typeOfAccommodation.map((type, index) => {
							return (
								<Option value={type} key={'city' + index} name="city">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Quận/Huyện</div>
				</Col>
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
						{typeOfAccommodation.map((type, index) => {
							return (
								<Option value={type} key={'district-' + index} name="district">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Phường/Xã</div>
				</Col>
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
						{typeOfAccommodation.map((type, index) => {
							return (
								<Option value={type} key={'subDistrict-' + index} name="subDistrict">
									{type}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Tòa nhà, Tên đường</div>
				</Col>
				<Col span={18}>
					<Input placeholder="Tòa nhà, Tên đường" onChange={onChangeHandler} name="address" />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Diện tích</div>
				</Col>
				<Col span={18}>
					<Input placeholder="Diện tích (mét vuông)" type="number" name="area" onChange={onChangeHandler} />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Số lượng phòng</div>
				</Col>
				<Col span={18}>
					<Input placeholder="Số lượng phòng" type="number" name="numberOfRoom" onChange={onChangeHandler} />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Giá thuê</div>
				</Col>
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
