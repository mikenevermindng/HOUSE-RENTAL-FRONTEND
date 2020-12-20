import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function Description(props) {
    const desc = props.data.props;

    return (
        <div className="info-box">
            <div className="info-input">
                <p>Mô tả về nơi ở của bạn</p>
                <TextArea rows={20} maxLength={3000} defaultValue={desc.description}/>
            </div>
        </div>
    )
}

export default Description;