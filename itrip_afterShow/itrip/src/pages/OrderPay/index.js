import React from 'react'
import { Icon, Tabs, Layout, Button, Steps } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import './index.css';
import onlineZf from '../../common/images/icon/payzhifubao.png'
import offline from '../../common/images/icon/offonline.png'
import { fetchBiz, getUrlParam } from '../../components/fetchUtils'
import { hashHistory } from 'react-router'
const Step = Steps.Step;
const { Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      hideOrShow: 'none',
      btnMs: '订单概要',
      btnIcon: 'down',
      id: getUrlParam("id"),
      orderNo: getUrlParam("orderNo"),
      orderMess: {},
      payType: 1
    };
    fetchBiz({
      url: '/hotelorder/getpersonalorderinfo/' + this.state.id,
      callback: e => {
        if (e.data.orderStatus >= 2) {
          hashHistory.push('/')
        }
      }
    })
    fetchBiz({
      url: '/hotelorder/getpersonalorderroominfo/' + this.state.id,
      callback: e => {
        this.setState({
          orderMess: e.data
        })
        console.debug(e.data)
      }
    })
    fetchBiz({
      url: "/hotelorder/queryOrderById/" + this.state.id,
      callback: e => {
        window.localStorage.setItem(this.state.id, JSON.stringify(e.data));
      }
    })

  }
  hideOrShowMessage(e) {
    let dom = e.currentTarget;
    this.setState({
      hideOrShow: this.state.hideOrShow == "none" ? 'block' : 'none',
      btnMs: this.state.hideOrShow == "none" ? '收齐订单详情' : '订单概要',
      btnIcon: this.state.hideOrShow == "none" ? 'up' : 'down'
    })
  }
  changePayType = (e) => {
    this.setState({
      payType: e
    })
    console.debug(e);
    // hashHistory.push('/orderpay?orderNo='+e.data.orderNo+'&id='+e.data.id)
  }
  backModifyOrder = (e) => {
    // hashHistory.goBack("&id=123123");
    console.debug(this.state);//?hotel=1&room=2&_k=2lboj2

    hashHistory.push('/orderfill?orderId=' + this.state.id + '&hotel=' + this.state.orderMess.hotelId + '&room=' + this.state.orderMess.roomId)
  }
  handleClick = (e) => {
    if (this.state.payType == 1) {
      // hashHistory.push('/orderpay?orderNo='+e.data.orderNo+'&id='+e.data.id)
      window.location = 'http://itrip.test.com/trade/api/prepay/' + this.state.orderNo
    } else {
      fetchBiz({
        url: '/hotelorder/updateorderstatusandpaytype',
        type: "POST",
        param: {
          "id": this.state.id,
          "payType": this.state.payType
        },
        callback: e => {
          if (e.success) {
            hashHistory.push('/orderpaystate?id=' + this.state.id + '&orderNo=' + this.state.orderNo)
          }
        }
      })
      // hotelorder/updateorderstatusandpaytype
    }
  }

  render() {
    return (
      <div className="order" style={{ width: 1000 }} >
        <Steps current={1} style={{ margin: '10px' }}>
          <Step title="填写" />
          <Step title="支付" />
          <Step title="成功" />
        </Steps>
        <Layout style={{ background: '#f2fcff', padding: 20 }}>
          <Content>
            <div style={{ width: 300, display: 'inline-block' }}>
              <span style={{ fontSize: '18', marginRight: 10 }} >
                订单金额</span><strong style={{ color: 'red', fontSize: '30' }}>￥{this.state.orderMess.payAmount}</strong>
              <div style={{ margin: '20px' }}>费用明细:房费</div>
            </div>
            <div style={{ width: 500, display: 'inline-block', padding: 10 }}>
              <span style={{ fontSize: '18', marginRight: 10 }} >{this.state.orderMess.hotelName}</span>
              <br />
              <p> {this.state.orderMess.roomTitle} {this.state.orderMess.count}间    入住：{this.state.orderMess.checkInDate}    退房：{this.state.orderMess.checkOutDate}    入住{this.state.orderMess.bookingDays}  晚 ￥{this.state.orderMess.payAmount}</p>
              {/*<strong style={{ color: 'red', fontSize: '30' }}>￥1087.00</strong>*/}
            </div>
            <Button type="dashed" style={{ border: 0, background: '#f2fcff' }} onClick={this.hideOrShowMessage.bind(this)} >
              {this.state.btnMs} <Icon type={this.state.btnIcon} /></Button>
          </Content>
          <Layout.Footer style={{ display: this.state.hideOrShow }}>i旅行会根据您的付款方式进行预授权或扣除房费，如订单不确认将解除预授权或全额退款至您的付款账户。该订单确认后不可被取消修改，若未入住将收取您全额房费
            ¥{this.state.orderMess.payAmount} </Layout.Footer>
        </Layout>
        <Layout style={{ border: '#9bddf1 1px solid', marginBottom: 30 }}>
          <Layout.Header style={{ background: '#fff' }} >
            <div><span style={{ fontSize: 18 }}>需要支付：</span><strong style={{ color: 'red', fontSize: '30' }}>￥{this.state.orderMess.payAmount}</strong></div>
          </Layout.Header>
          <Content className="payTabs">
            <Tabs type="card" onChange={this.changePayType.bind(this)}>
              {
                this.state.orderMess.roomPayType == 1 ? "" : (
                  <TabPane tab="第三方支付" key="1" >
                    <div className='payType'>
                      <a ><img src={onlineZf} style={{ border: '1px solid orangered' }} alt="" /></a>
                    </div>
                  </TabPane>
                )
              }
              {
                this.state.orderMess.roomPayType == 2 ? "" : (
                  <TabPane tab="线下支付" key="2" >
                    <div className='payType'>
                      <a ><img src={offline} style={{ border: '1px solid orangered' }} alt="" /></a>
                    </div>
                  </TabPane>
                )
              }

            </Tabs>
          </Content>
        </Layout>
        <div className="order-button" style={{ height: 50, padding: 10 }}>
          <div style={{ float: 'left', display: 'inline-block' }}><a onClick={this.backModifyOrder.bind(this)}
            style={{ color: '#1ab2db', fontSize: 14, marginTop: 3, fontWeight: 900 }}>&lt; 返回修改订单</a></div>
          <div style={{ float: 'right', display: 'inline-block' }}> <Button type="danger" onClick={this.handleClick.bind(this)}>下一步，支付</Button></div>
          <div></div>
        </div>
      </div >
    )
  }
}
