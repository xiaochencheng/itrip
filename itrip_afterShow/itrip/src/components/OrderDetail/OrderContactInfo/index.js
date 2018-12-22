import React from 'react'
import { Row, Col, Button } from 'antd'
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import './style.css'

//订单联系信息组件
export default class OrderContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: ""
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
        if (e.data) {
          let tel = e.data.noticePhone;
          let reg = /^(\d{3})\d{4}(\d{4})$/;
          e.data.noticePhone = tel.replace(reg, "$1****$2");
        }
        this.setState({
          phoneNum: e.data.noticePhone
        })
      }
    })

  }
  render() {
    return (
      <div className="contactInfo">
        <Row>
          <Col span={24}>
            <h4 className="detailTile">
              联系信息
            </h4>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <p>
              <span className="contactPhone">联系手机</span>
              <span className="phoneNum">+86 {this.state.phoneNum}</span>
            </p>
          </Col>
          <Col span={8}>

          </Col>
        </Row>
      </div>


    )
  }
}

