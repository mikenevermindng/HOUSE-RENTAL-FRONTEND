import React, { useState } from 'react';
import { Row, Col, Input, Select, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

function FacilityFromInput(props) {
	const { other, setOther, onChangeHandler } = props;

	return (
		<div className="facility-input-form">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Phòng tắm</Col>
				<Col span={18}>
					<Radio.Group name="bathroom" buttonStyle="solid" onChange={onChangeHandler}>
						<Radio.Button value="closed">Khép kín</Radio.Button>
						<Radio.Button value="shared">Dùng chung</Radio.Button>
					</Radio.Group>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Bình nước nóng</Col>
				<Col span={18}>
					<Radio.Group name="electricWaterHeater" buttonStyle="solid" onChange={onChangeHandler}>
						<Radio.Button value={true}>Có</Radio.Button>
						<Radio.Button value={false}>Không</Radio.Button>
					</Radio.Group>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Nhà bếp</Col>
				<Col span={18}>
					<Radio.Group name="kitchen" buttonStyle="solid" onChange={onChangeHandler}>
						<Radio.Button value="closed">Khép kín</Radio.Button>
						<Radio.Button value="shared">Dùng chung</Radio.Button>
						<Radio.Button value="none">Không</Radio.Button>
					</Radio.Group>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Điều hòa</Col>
				<Col span={18}>
					<Radio.Group name="airConditioner" buttonStyle="solid" onChange={onChangeHandler}>
						<Radio.Button value={true}>Có</Radio.Button>
						<Radio.Button value={false}>Không</Radio.Button>
					</Radio.Group>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Ban công</Col>
				<Col span={18}>
					<Radio.Group name="balcony" buttonStyle="solid" onChange={onChangeHandler}>
						<Radio.Button value={true}>Có</Radio.Button>
						<Radio.Button value={false}>Không</Radio.Button>
					</Radio.Group>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Giá điện</Col>
				<Col span={18}>
					<Input
						name="electricityPrice"
						placeholder="Giá điện (Đơn vị đồng)"
						type="number"
						onChange={onChangeHandler}
					/>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>Số lượng phòng</Col>
				<Col span={18}>
					<Input
						name="domesticWaterPrice"
						placeholder="Giá nước (Đơn vị đồng)"
						type="number"
						onChange={onChangeHandler}
					/>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={24}>Tiện ích khác</Col>
				{other.map((item, index) => (
					<React.Fragment key={'other-' + index}>
						<Col span={6}>
							<Input
								placeholder="Tiện ích"
								type="text"
								value={other.facility}
								onChange={(event) => {
									item.facility = event.target.value;
								}}
							/>
						</Col>
						<Col span={18}>
							<Input
								placeholder="Mô tả"
								type="text"
								value={other.description}
								onChange={(event) => {
									item.description = event.target.value;
								}}
							/>
						</Col>
					</React.Fragment>
				))}

				<Col span={24}>
					<div onClick={() => setOther([ ...other, { facility: '', description: '' } ])}>
						<PlusOutlined />
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default FacilityFromInput;
