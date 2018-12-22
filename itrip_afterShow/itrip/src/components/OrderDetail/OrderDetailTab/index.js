import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;

import OrderDetailInfo from 'components/OrderDetail/OrderDetailInfo'
import OrderDetailStep from 'components/OrderDetail/OrderDetailStep'
import OrderDetailDynamic from 'components/OrderDetail/OrderDetailDynamic'
import OrderDetailIntoRoom from 'components/OrderDetail/OrderDetailIntoRoom'
import OrderContactInfo from 'components/OrderDetail/OrderContactInfo'

import './style.css'

export default class OrderDetailTab extends React.Component {
  render() {
    return (
      <div className="orderdetailtabcc">

        <Anchor affix={false}>
          <Link href="#orderInfo" title="订单信息"></Link>
          <Link href="#roomInfo" title="入住信息"></Link>
          <Link href="#contactInfo" title="联系信息"></Link>
        </Anchor>

        <div id="orderInfo">
            <OrderDetailInfo />
            <OrderDetailStep />
            <OrderDetailDynamic />
          </div>
          <div id="roomInfo" style={{margin:"20px 0"}}>
            <OrderDetailIntoRoom />
          </div>
          <div id="contactInfo">
            <OrderContactInfo />
          </div>

      </div>
    )
  }
}
