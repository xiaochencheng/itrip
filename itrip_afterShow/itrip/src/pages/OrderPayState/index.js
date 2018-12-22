import React from 'react'
import { Icon, Tabs, Layout, Button } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import './index.css';
import { fetchBiz, getUrlParam } from '../../components/fetchUtils'
import { hashHistory } from 'react-router'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      state: true,
      icon: 'check-circle',//  失败的按钮样式
      color: '#00cc33',
      id: getUrlParam("id"),
      orderNo: getUrlParam("orderNo"),
      orderMess: {},
      message: ""
    };

    fetchBiz({
      url: '/hotelorder/getpersonalorderinfo/' + this.state.id,
      callback: e => {
        this.setState({orderMess: e.data});
        let status = this.state.orderMess.orderStatus >= 2 ? true : false;
        this.setState({
          icon: status ? 'check-circle' : 'close-circle',
          color: status ? '#00cc33' : '#ff4401',
          message:status ?  "您的预订已成功！":"您的预订未成功！"
        })
        console.debug(e.data);
      }
    })
  }
  handleClick=(e)=>{
    hashHistory.push("/orderdetail?orderId="+this.state.id)
  }
  cancelOrder=(e)=>{
    hashHistory.push("/orderdetail?orderId="+this.state.id)
  }
  render() {
    return (
      <div className="order state-message" style={{ width: 1000 }} >
        <Layout style={{ height: 200, margin: 30 }}>
          <Layout.Sider style={{ background: '#fff' }}>
            <Icon type={this.state.icon} style={{ fontSize: 50, margin: 20, color: this.state.color, float: 'right' }}></Icon>
          </Layout.Sider>
          <Layout.Content style={{ background: '#fff', fontSize: 14, color: '#b3b3b3' }}>
            <div className="state-div" style={{ fontSize: 24, marginTop: 20, color: '#000' }}>
              {this.state.message}
             </div>
            <div className="state-div" >
              <span>订单号：</span>
              <strong >{this.state.orderMess.orderNo}</strong>|
               <a style={{ color: '#1448ad' }} onClick={this.handleClick.bind(this)}>  查看订单  </a>
              {/*  <Icon type="heart"></Icon>
              <a style={{ color: '#1448ad' }}> 加入收藏</a>*/}
            </div>
            <div className="state-div" >
              <span>总价：</span><strong style={{ color: '#ff4401' }}>{this.state.orderMess.payAmount}</strong> 元
              { this.state.orderMess.roomPayType==2?'酒店前台付款':""}
            </div>
            <div className="state-div" >请确保您的手机号码填写正确，无效手机号可能会导致订单取消或异常。</div>
            <div className="state-line"  style={{display:'none'}} >
              其他操作： {/*<a>新增订单  </a>*/}{/*<a> 复制订单</a>*/}<a onClick={this.handleClick.bind(this)}>   修改入住信息 </a>{/* <a>  取消订单 </a> <a>  订单操作注意事项</a>*/}
            </div>
          </Layout.Content>
        </Layout>
      </div >
    )
  }
}
