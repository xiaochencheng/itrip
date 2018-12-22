import React from 'react'
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import './style.css'

//订单详情动态组件
export default class OrderDetailDynamic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processDescribt: []
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
          if (e.data.processNode == 1) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          } else if (e.data.processNode == 2) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>预订已成功，请您支付您的订单</p>
                  </li>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          } else if (e.data.processNode == 3) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>您的订单已取消，您可以通过i旅行重新预订</p>
                  </li>
                  <li>
                    <p>预订已成功，请您支付您的订单</p>
                  </li>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          }

        } else {
          if (e.data.processNode == 1) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          } else if (e.data.processNode == 2) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>预订已成功，请您支付您的订单</p>
                  </li>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          } else if (e.data.processNode == 3) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>支付已成功，您的入住信息将在5-15分钟通过代理商发送至酒店</p>
                  </li>
                  <li>
                    <p>预订已成功，请您支付您的订单</p>
                  </li>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          } else if (e.data.processNode == 4) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>您的入住信息已核实</p>
                  </li>
                  <li>
                    <p>支付已成功，您的入住信息将在5-15分钟通过代理商发送至酒店</p>
                  </li>
                  <li>
                    <p>预订已成功，请您支付您的订单</p>
                  </li>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          } else if (e.data.processNode == 5) {
            this.setState({
              processDescribt: [
                <ul>
                  <li>
                    <p>感谢您的入住，欢迎点评该酒店</p>
                  </li>
                  <li>
                    <p>您的入住信息已核实</p>
                  </li>
                  <li>
                    <p>支付已成功，您的入住信息将在5-15分钟通过代理商发送至酒店</p>
                  </li>
                  <li>
                    <p>预订已成功，请您支付您的订单</p>
                  </li>
                  <li>
                    <p>订单已提交，请稍后刷新订单状态，专业服务，全程保障！</p>
                  </li>
                </ul>
              ]
            })
          }
        }
      }
    })

  }

  render() {
    return (
      <div className="detailDynamic">
        {this.state.processDescribt}
      </div>

    )
  }
}
