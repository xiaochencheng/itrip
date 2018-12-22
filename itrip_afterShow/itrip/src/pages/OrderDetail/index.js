import React from 'react'
import OrderDetailTab from 'components/OrderDetail/OrderDetailTab'
import { hashHistory } from 'react-router'
import './style.css'
//订单详情页面主页 调用组件情况
export default class OrderDetail extends React.Component {
  //跳转到订单页面
  backMyInfo = () => {
    hashHistory.push('/myinfo?')
  }
  render() {
    return (
      <div className="orderdetail">
        <h3>
          <a href="javascript:;">我的i旅游</a> >
          <a onClick={this.backMyInfo.bind(this)} href="javascript:;">酒店订单</a> > 订单详情
        </h3>
        <OrderDetailTab />
      </div>
    )
  }
}
