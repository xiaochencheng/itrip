import React from 'react'
import { Row, Col, Button } from 'antd';
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'

import './style.css'
//订单详细信息头部组件
export default class OrderDetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetail: [],
      hotelId: 1,
      commentNode: [],
      nodeFlag: {}
    }
  }
  componentWillMount() {
    //获取订单id
    let orderId = getUrlParam("orderId");
    //根据订单ID查看个人订单详情
    fetchBiz({
      url: "/hotelorder/getpersonalorderinfo/" + orderId,
      callback: (e) => {

         console.log ("e.data="+ JSON.stringify(e.data) )
        // console.log("订单详情aaa="+JSON.stringify(e.data)  )
        if (e.data.processNode == 4 || e.data.processNode == 5) {
          this.state.commentNode = <Button type="primary" onClick={this.toComment.bind(this)}>我要点评</Button>
        } else {
          this.state.commentNode = <Button type="primary" disabled>我要点评</Button>;
        }
        //得到后台的请求数据0：待支付 1:已取消 2:支付成功 3:已消费
        var orderStatusConver = new Array("待支付", "已取消", "支付成功", "已消费");
        var roomPayTypeConver = new Array("", "在线付", "线下付", "不限");
        if (e.data) {
          //转换订单状态标识码为相应的文字介绍
          e.data.orderStatus = orderStatusConver[e.data.orderStatus];
          //转换订单类型标识码为相应的文字{"1":"在线付","2":"线下付","3":"不限"}
          e.data.roomPayType = roomPayTypeConver[e.data.roomPayType];
        }
        let arr = [];
        arr.push(e.data);
        this.setState({
          orderDetail: arr
        })
      }
    })
    //根据订单ID查看个人订单详情-房型相关信息
    fetchBiz({
      url: "/hotelorder/getpersonalorderroominfo/" + orderId,
      callback: (e) => {
        //得到后台的请求数据
        this.setState({
          hotelId: e.data.hotelId
        })
      }
    })

  }
  //再次预订
  againBook = () => {
    // 跳转到酒店详情页面
    let myDate = new Date();
    let startTime = myDate.getTime();
    let endTime = (startTime+24*60*60*1000);
    const query = stringify({
      hotelId: this.state.hotelId,
      startTime: startTime,
      endTime: endTime
    })
    hashHistory.push('/hoteldetail?' + query);
  }
  //我要点评
  toComment = () => {
    // 跳转到酒店详情页面
    const query = stringify({
      hotelId: this.state.hotelId,
      orderId: getUrlParam("orderId")
    })
    hashHistory.push('/commentpage?' + query);
  }
  render() {
    if (!this.state.orderDetail) return;
    return (
      <div className="orderdetailinfo">
        <Row>
          <Col span={24}>
            <h4 className="detailTile">
              订单详情
            </h4>
          </Col>
        </Row>
        <Row>
          {
            this.state.orderDetail.map(function (val, i, array) {
              return (
                <span>
                  <Col span={8}>
                    <p><span className="orderDetailname">订单号</span>{val.orderNo}</p>
                    <p><span className="orderDetailname">预订日期</span>{val.creationDate}</p>
                    <p><span className="orderDetailname">支付方式</span>{val.roomPayType}</p>
                    <p><span className="orderDetailname">订单状态</span>{val.orderStatus}</p>
                  </Col>
                  <Col span={12}>
                    <div className="detailPrice">￥ <strong>{val.payAmount}</strong> 起</div>
                    <span className="detailTip">已包含税费服务费</span>
                    <span className="detailTip">不包含城市建设费</span>
                  </Col>
                </span>
              )

            })
          } {/**/}
          <Col span={4} className="detailButton">
            <p>您可以</p>
            <Button type="primary" onClick={this.againBook.bind(this)}>再次预订</Button>
            <br />
            {this.state.commentNode}
          </Col>
        </Row>
      </div>
    )
  }
}

