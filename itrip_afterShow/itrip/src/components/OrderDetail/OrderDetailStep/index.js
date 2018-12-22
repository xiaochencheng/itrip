import React from 'react'
import { Steps } from 'antd';
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
const Step = Steps.Step;

import './style.css'


export default class OrderDetailStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processNode: "1",
      stepNode: []
    }
  }
  componentWillMount() {
    //获取订单id
    let orderId = getUrlParam("orderId");
    //根据订单ID查看个人订单详情
    fetchBiz({
      url: "/hotelorder/getpersonalorderinfo/" + orderId,
      callback: (e) => {
        //得到后台的请求数据
        if (e.data.orderStatus == 1) {
          this.setState({
            stepNode: [
              <Step title="订单提交" />,
              <Step title="订单支付" />,
              <Step title="订单取消" />]
          })
        } else {
          this.setState({
            stepNode: [
              <Step title="订单提交" />,
              <Step title="订单支付" />,
              <Step title="支付成功" />,
              <Step title="入住" />,
              <Step title="订单点评" />,
              <Step title="已完成" />]
          })
        }
        this.setState({
          processNode: e.data.processNode
        })

      }
    })

  }
  //订单状态(除了 1:已取消)的流程： {"1":"订单提交","2":"订单支付","3":"支付成功","4":"入住","5":"订单点评"}
  //订单状态(1:已取消)的流程：{"1":"订单提交","2":"订单支付","3":"订单取消"}
  render() {
    return (
      <div className="orderdetailstep">
        <Steps current={this.state.processNode - 1}>
          {this.state.stepNode}
        </Steps>
      </div>
    )
  }
}
