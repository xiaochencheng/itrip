import React from 'react'
import {Icon } from 'antd';



export default class OrderDownLoad extends React.Component {
    render() {
        return(
            <span className="orderDown">
	          <input type="checkbox" />全选
              <Icon type="arrow-down" />下载
            </span>
        )
    }

}