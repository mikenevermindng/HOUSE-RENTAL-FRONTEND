import React, { useState } from 'react';
import {Row, Col, Input, Select, InputNumber} from 'antd';
import { PlusOutlined, CloseSquareFilled } from '@ant-design/icons';

const { Option } = Select;

function FacilityFromInput(props) {
	const typeOfAccommodation = [ 'Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn' ];
	const typeOfBathroom = [ { type: 'close', label: 'Khép kín' }, { type: 'share', label: 'Dùng chung' } ];
	const { other, setOther, onChangeHandler, facilityFormOnSelectHandler, facilityFormOnRemoveHandler } = props;

	return (
		<div className="facility-input-form">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Phòng tắm</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Phòng tắm"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						{typeOfBathroom.map((type, index) => {
							return (
								<Option value={type.label} key={'typeOfBathroom-' + index} name="typeOfBathroom">
									{type.label}
								</Option>
							);
						})}
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Bình nước nóng</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Bình nước nóng"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="electricWaterHeater">
							Có
						</Option>
						<Option value={false} name="electricWaterHeater">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Nhà bếp</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Nhà bếp"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value="closed" name="kitchen">
							Khép kín
						</Option>
						<Option value="shared" name="kitchen">
							Dùng chung
						</Option>
						<Option value="none" name="kitchen">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Điều hòa</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Điều hòa"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="airConditioner">
							Có
						</Option>
						<Option value={false} name="airConditioner">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Ban công</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Ban công"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="balcony">
							Có
						</Option>
						<Option value={false} name="balcony">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Tủ lạnh</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Tủ lạnh"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="fridge">
							Có
						</Option>
						<Option value={false} name="fridge">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Máy giặt</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Máy giặt"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="washingMachine">
							Có
						</Option>
						<Option value={false} name="washingMachine">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Giường</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Giường"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="bed">
							Có
						</Option>
						<Option value={false} name="bed">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Tủ</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						allowClear
						placeholder="Tủ"
						optionFilterProp="children"
						onChange={(value, label) => facilityFormOnSelectHandler(label)}
					>
						<Option value={true} name="wardrobe">
							Có
						</Option>
						<Option value={false} name="wardrobe">
							Không
						</Option>
					</Select>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Giá điện (đồng)</div>
				</Col>
				<Col span={18}>
					{/*<Input*/}
					{/*	name="electricityPrice"*/}
					{/*	placeholder="Giá điện (Đơn vị đồng)"*/}
					{/*	type="number"*/}
					{/*	onChange={onChangeHandler}*/}
					{/*/>*/}
					<InputNumber placeholder="Giá điện" min="1" />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Giá nước (đồng)</div>
				</Col>
				<Col span={18}>
					{/*<Input*/}
					{/*	name="domesticWaterPrice"*/}
					{/*	placeholder="Giá nước (Đơn vị đồng)"*/}
					{/*	type="number"*/}
					{/*	onChange={onChangeHandler}*/}
					{/*/>*/}
					<InputNumber placeholder="Giá nước" min="1" />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={24}>
					<div className="input-label">Tiện ích khác</div>
				</Col>
			</Row>
			{other.map((item, index) => (
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={'other-' + index}>
					<Col span={6}>
						<Input
							placeholder="Tiện ích"
							type="text"
							value={other.facility}
							onChange={(event) => {
								console.log(other);
								item.facility = event.target.value;
							}}
						/>
					</Col>
					<Col span={16}>
						<Input
							placeholder="Mô tả"
							type="text"
							value={other.description}
							onChange={(event) => {
								item.description = event.target.value;
							}}
						/>
					</Col>
					<Col span={2}>
						<div
							className="remove-action"
							onClick={() => setOther([ ...other.slice(0, index), ...other.slice(index + 1) ])}
						>
							<CloseSquareFilled />
						</div>
					</Col>
				</Row>
			))}
			<Row>
				<Col span={24}>
					<div onClick={() => setOther([ ...other, { facility: '', description: '' } ])} id="add">
						<PlusOutlined />
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default FacilityFromInput;
