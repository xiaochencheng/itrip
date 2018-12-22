import React from 'react'
import { Cascader } from 'antd';
import "./style.css"

const options = [{
    value: 'F',
    label: '以F开头',
    children: [{
        "value": 3661,
        "label": "费城",
    }],
}, {
    value: 'L',
    label: 'L',
    children: [{
        "value": 3657,
        "label": "洛杉矶",
    }],
}, {
    value: 'N',
    label: 'N',
    children: [{
        "value": 3658,
        "label": "纽约",
    }],
}, {
    value: 'X',
    label: 'X',
    children: [{
        "value": 3660,
        "label": "休斯顿",
    }],
}, {
    value: 'Z',
    label: 'Z',
    children: [
        {
            "value": 3659,
            "label": "芝加哥",
        }
    ],
}
];

export default class CitySwitcherForeign extends React.Component {
    static defaultProps = {
        onChange: () => { },
        changeCityName: () => { }
    }
    displayRender = (label) => {
        return label[label.length - 1];
    }
    onChange = (value, label) => {
        /*console.log(label[1].value);//城市ID
        console.log(label[1].label);//城市名称*/

        this.props.changeCityName(label[1].label, label[1].value);
        this.props.onChange(label[1].value, label[1].label)
    }


    render() {
        return (
            <span className="CascaderCity">
                <Cascader options={options} size="small" displayRender={this.displayRender} onChange={this.onChange} placeholder={this.props.destination} />
            </span>

        )
    }
}








