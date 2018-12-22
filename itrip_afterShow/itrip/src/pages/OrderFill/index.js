import React from 'react'
import { Steps, Icon, Layout, Input, Checkbox, Button, Select, Radio, Form, DatePicker, message } from 'antd';
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import Modal from '../../components/MyInfo/linkerUser/'
import moment from 'moment';
import { hashHistory } from 'react-router'
import { fetchBiz, getUrlParam } from '../../components/fetchUtils'
import Cookie from 'js-cookie'

const alertDesc = (param) => {
  message[param.type](param.desc, param.time);
  //   message.success(content, duration, onClose)
  // message.error(content, duration, onClose)
  // message.info(content, duration, onClose)
  // message.warning(content, duration, onClose)
  // message.warn(content, duration, onClose)  
  // message.loading(content, duration, onClose)
};
// import stp from '../../components/OrderPage/'
const { Sider, Content } = Layout;
const Step = Steps.Step;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const dateFormat = 'YYYY-MM-DD';
function getDateDiff(startDate,endDate)  
{  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);     
    return  dates;    
}
export default class App extends React.Component {
  state = {
    visible: false,
    data: {
      title: '添加用户信息',
      url: '/userinfo/adduserlinkuser',
      type: 'add',//modfiy
      userMess: {
        userName: "",
        phone: '',
        card: ''
      }
    },
    callback: (data) => {
      console.debug(data);
    },/*查询房间接口的参数信息数据*/
    param: {
      "checkInDate": new Date(getUrlParam("startDate") || new Date()),
      "checkOutDate": new Date(getUrlParam("endDate") || new Date().getTime() + (1000 * 60 * 60 * 24)),
      "count": null,
      "hotelId": null,
      "roomId": null
    },/* 保存添加信息数据*/
    addParam: JSON.parse(window.localStorage.getItem(getUrlParam("orderId"))) || {
      "checkInDate": new Date(getUrlParam("startDate") || new Date()),
      "checkOutDate": new Date(getUrlParam("endDate") || new Date().getTime() + (1000 * 60 * 60 * 24)),
      "count": null,
      "hotelId": null,
      "hotelName": null,
      "invoiceHead": null,
      "invoiceType": 1,
      "isNeedInvoice": null,
      "linkUser": null,
      "noticeEmail": null,
      "noticePhone": null,
      "orderType": 1,
      "roomId": 1,
      "specialRequirement": ""
    },/*根据查询房间接口返回的数据信息*/
    backMess: {},
    /* 返回的联系人数据信息*/
    linkman: [],
    status: {
      /* error, success ,'' */
      time: '',
      check: '',
      phone: '',
      email: '',
      bill: '',
      billMessage: '',
      specialSver: '',
      showBill: 'none',
      isNeedInvoice: false
    },
    roomCount: 1,
    size: 3,
    timeCount:getDateDiff(new Date(getUrlParam("endDate") || new Date().getTime() + (1000 * 60 * 60 * 24)).Format('yyyy-MM-dd'),
      new Date(getUrlParam("startDate") || new Date()).Format('yyyy-MM-dd'))
  }
  /*改变状态中的参数信息*/
  changeSateParam = (data) => {
    if (data) {
      let stateParam = this.state.param;
      stateParam[data.key] = data.val;
      this.setState({
        param: stateParam
      })
    }
  }
  /*改变状态信息*/
  changeState = (data) => {
    var state = this.state;
    state[data.key] = data.val;
    this.setState(state);
  }
  showModal = () => {
    this.setState({
      visible: true,
      data: {
        title: '添加用户信息',
        url: '/userinfo/adduserlinkuser',
        type: 'add',//modfiy
        userMess: {
          userName: "",
          phone: '',
          card: ''
        }
      },
      callback: (data) => {
        fetchBiz({
          url: "/userinfo/queryuserlinkuser",
          type: "POST",
          param: this.state.param,
          callback: e => {
            this.setState({
              visible: false
            })
            this.setState({
              linkman: e.data
            })
          }
        })

      },
      setState: (data) => {
        console.debug(data);
        this.setState({
          visible: false
        })
      }
    });
  }
  changeEve = {
    changestate: false,
    changeParams: (data) => {
      /*改变状态中的参数信息*/
      if (data) {
        let stateParam = this.state[data.type];
        stateParam[data.key] = data.val;
        this.changeState({
          key: data.type,
          val: stateParam
        })
      }
    },
    changeTime: (e) => {
      if (e[0].toDate().getTime() >=
        new Date(new Date().Format('yyyy-MM-dd') + " 00:00:00").getTime()) {
        this.changeEve.changeParams({
          key: 'checkInDate',
          val: e[0].toDate(),
          type: 'addParam'
        })
        this.changeEve.changeParams({
          key: 'checkOutDate',
          val: e[1].toDate(),
          type: 'addParam'
        })
        this.changeEve.changeParams({
          key: 'time',
          val: '',
          type: 'status'
        })
        this.changeEve.changeParams({
          key: 'checkInDate',
          val: e[0].toDate(),
          type: 'param'
        })
        this.changeEve.changeParams({
          key: 'checkOutDate',
          val: e[1].toDate(),
          type: 'param'
        })
        this.changeState({
          key: 'timeCount',
          val:getDateDiff( e[1].toDate().Format('yyyy-MM-dd'),e[0].toDate().Format('yyyy-MM-dd')) 
        })
        // alert(this.state.timeCount)
        fetchBiz({
          url: "/hotelorder/getpreorderinfo",
          type: "POST",
          param: this.state.param,
          callback: e => {
            this.setState({
              backMess: e.data
            })
          }
        })

      } else {
        this.changeEve.changeParams({
          key: 'time',
          val: 'error',
          type: 'status'
        })
      }

    },
    changeRoomCount: (e) => {
      this.changeState({
        key: 'roomCount',
        val: e
      })
      this.changeEve.changeParams({
        key: 'count',
        val: e,
        type: 'addParam'
      })
      console.debug(this.state.addParam);
    },
    changeCheckBox: (e) => {
      
        let linkmanMap = {};
        this.state.linkman.map((val) => {
          linkmanMap[val.id] = val;
        })
        let changeMan = []
        e.map((val) => {
          changeMan.push({
            id: linkmanMap[val].id,
            linkUserName: linkmanMap[val].linkUserName,
          })
        })
        this.changeEve.changeParams({
          key: 'linkUser',
          val: changeMan,
          type: 'addParam'
        })
        this.changeEve.changeParams({
          key: 'check',
          val: '',
          type: 'status'
        })
      if (e.length > this.state.roomCount * this.state.size) {
        this.changeEve.changeParams({
          key: 'check',
          val: 'error',
          type: 'status'
        })
      }

      // console.debug(this.state.addParam);
    },
    changePhone: (e) => {
      let val = e.currentTarget.value;
      function validator(mobile) {
        // 请输入手机号，手机号为11位
        return /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(mobile) ? true : false;
      }
      this.changeEve.changeParams({
          key: 'noticePhone',
          val: val,
          type: 'addParam'
        })
        this.changeEve.changeParams({
          key: 'phone',
          val: '',
          type: 'status'
        }) 
      if (!validator(val)) {
        
        this.changeEve.changeParams({
          key: 'phone',
          val: 'error',
          type: 'status'
        })
      }
      // console.debug(this.state.addParam);
    },
    changeEmail: (e) => {
      let val = e.currentTarget.value;
      function validator(mail) {
        // 请输入邮箱，格式必须为邮箱格式
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail) ? true : false;
      }
       this.changeEve.changeParams({
          key: 'noticeEmail',
          val: val,
          type: 'addParam'
        })
        this.changeEve.changeParams({
          key: 'email',
          val: '',
          type: 'status'
        })
      if (!validator(val)) {
        this.changeEve.changeParams({
          key: 'email',
          val: 'error',
          type: 'status'
        })
      }
      // console.debug(this.state.addParam);
    },
    changeBill: (e) => {
      let status = "none";
      let need = 0;
      if (e.target.checked) {
        status = "block";
        need = 1;
      }
      this.changeEve.changeParams({
        key: 'isNeedInvoice',
        val: need,
        type: 'addParam'
      })
      this.changeEve.changeParams({
        key: 'showBill',
        val: status,
        type: 'status'
      })
    },
    changeBillType: (e) => {
      this.changeEve.changeParams({
        key: 'invoiceType',
        val: e.target.value,
        type: 'addParam'
      })
      console.debug(e);
    },
    changeBillMessage: (e) => {
      this.changeEve.changeParams({
        key: 'invoiceHead',
        val: e.currentTarget.value,
        type: 'addParam'
      })
    },
    changeSpecialSver: (e) => {
      this.changeEve.changeParams({
        key: 'specialRequirement',
        val: e.currentTarget.value,
        type: 'addParam'
      })
    },
    submitForOrder: (e) => {
      let map = this.state.addParam;
      let keyMap = {
        "checkInDate": "time",
        "checkOutDate": "time",
        "linkUser": "check",
        "noticeEmail": "email",
        "noticePhone": "phone",
      }
      this.changeEve.changestate = true;
      for (let key of Object.keys(keyMap)) {
        if (!map[key]) {
          this.changeEve.changeParams({
            key: keyMap[key],
            val: 'error',
            type: 'status'
          })
          this.changeEve.changestate = false;
        }
        if (key == 'checkInDate') {
          if (new Date(map[key]).getTime() <
            new Date(new Date().Format('yyyy-MM-dd') + " 00:00:00").getTime()) {
            this.changeEve.changestate = false;
            this.changeEve.changeParams({
              key: keyMap[key],
              val: 'error',
              type: 'status'
            })
          }
        }

        if (key == 'linkUser') {
          if (map[key] && map[key].length > this.state.roomCount * this.state.size) {
            this.changeEve.changestate = false;
            this.changeEve.changeParams({
              key: keyMap[key],
              val: 'error',
              type: 'status'
            })
          }
        }
      }
      if (this.changeEve.changestate) {
        fetchBiz({
          url: "/hotelorder/addhotelorder",
          type: "POST",
          param: this.state.addParam,
          callback: e => {

            // hashHistory.push('/hotellist?' + query)
            hashHistory.push('/orderpay?orderNo=' + e.data.orderNo + '&id=' + e.data.id)
          }
        })
      } else {
        alertDesc({
          type: 'warning',
          desc: '输入信息有误，请根据提示重新输入！',
          time: 3
        });
      }
    }
  }
  /*获得初始化对象信息*/
  constructor(props) {
    super(props);
    var param = {
      "checkInDate": "2017-05-25",
      "checkOutDate": "2017-05-25",
      "count": 1,
      "hotelId": null,
      "roomId": null
    }
// alert(this.state.timeCount)
    param["hotelId"] = getUrlParam("hotel");
    param["roomId"] = getUrlParam("room");
    param["checkInDate"] = this.state.param.checkInDate || new Date();
    param["checkOutDate"] = this.state.param.checkOutDate || new Date().getTime() + 1000 * 60 * 60 * 24;
    this.changeState({ key: "param", val: param })
    if (!getUrlParam("orderId")) {

      this.changeEve.changeParams({
        key: 'checkInDate',
        val: param["checkInDate"],
        type: 'addParam'
      })
      this.changeEve.changeParams({
        key: 'checkOutDate',
        val: param["checkOutDate"],
        type: 'addParam'
      })
      this.changeEve.changeParams({
        key: 'roomId',
        val: param["roomId"],
        type: 'addParam'
      })
      this.changeEve.changeParams({
        key: 'hotelId',
        val: param["hotelId"],
        type: 'addParam'
      })
      this.changeEve.changeParams({
        key: 'count',
        val: 1,
        type: 'addParam'
      })
    } else {

      if (this.state.addParam.isNeedInvoice == 1) {
        this.changeEve.changeParams({
          key: 'showBill',
          val: 'block',
          type: 'status'
        })
        this.changeEve.changeParams({
          key: 'isNeedInvoice',
          val: true,
          type: 'status'
        })
      }

    }
  }
  componentDidMount() {
    const token = Cookie.get('token')
    if (!token) {
      alertDesc({
        type: 'warning',
        desc: '请先登录，3s后跳转！',
        time: 3
      });
      setTimeout(() => {
        window.location.hash = "#login"
      }, 3000);
    }
  }
  componentWillMount() {

    fetchBiz({
      url: "/hotelorder/getpreorderinfo",
      type: "POST",
      param: this.state.param,
      callback: e => {
         this.setState({
          backMess: e.data
        })
        this.changeEve.changeParams({
          key: 'hotelName',
          val: e.data.hotelName,
          type: 'addParam'
        })
      }
    })

    fetchBiz({
      url: "/userinfo/queryuserlinkuser",
      type: "POST",
      param: this.state.param,
      callback: e => {
        this.setState({
          linkman: e.data
        })
      }
    })
  }
  render() {
    let option = []
    if (this.state.backMess) {
      for (var i = 1; i <= this.state.backMess.store; i++) {
        option.push(<Select.Option key={i}>{i}</Select.Option>)
      }
    }

    return (
      <div className="order order-fill" >
        <Steps current={0}  >
          <Step title="填写" />
          <Step title="支付" />
          <Step title="成功" />
        </Steps>
        <div width={200} height={30} style={{ fontSize: 30, color: '#1448ad' }}>
          <h1>{this.state.backMess.hotelName}</h1>
        </div>
        <div className="headerMessage">
          <ul>
            <li><Icon type="credit-card" /><span>仅需2分钟即可轻松完成预订</span></li>
            <li><Icon type="clock-circle" /><span>房源紧张！请尽快预订</span></li>
          </ul>
        </div>
        <div className="order-message">
          <Form onSubmit={this.handleSubmit}>
            <Layout style={{ height: 240, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>订单信息</Sider>
              <Content style={{ background: '#f2fcff', paddingTop: 20 }}>
                <FormItem
                  {...formItemLayout}
                  label="入离日期"
                  validateStatus={this.state.status.time}
                  help="入住时间不能小于当前时间！ 离开时间必须大于入住时间！" >
                  <RangePicker onChange={this.changeEve.changeTime}
                    defaultValue={[moment(this.state.addParam.checkInDate, dateFormat),
                    moment(this.state.addParam.checkOutDate, dateFormat)]} format={dateFormat} />
                </FormItem><br />
                <FormItem
                  {...formItemLayout}
                  label="房间数量">
                  <Select defaultValue={this.state.addParam.count} onChange={this.changeEve.changeRoomCount} style={{ width: 120 }}  >
                    {
                      option
                    }
                  </Select>
                  <a style={{ marginLeft: 20 }}>房费￥{
                    this.state.backMess.price * this.state.roomCount*this.state.timeCount
                  }</a><span style={{ marginLeft: 20, color: 'red', fontSize: 18 }}>仅剩{
                    this.state.backMess.store
                  }间</span>
                </FormItem> <br />
                <FormItem
                  {...formItemLayout}
                  label="住客信息"
                  validateStatus={this.state.status.check}
                  help={"每间房间最多允许居住" + this.state.size + "人！"}
                >
                  <Checkbox.Group onChange={this.changeEve.changeCheckBox.bind(this)} >
                    {
                      this.state.linkman.map((val) => {
                        return <Checkbox value={val.id}>{val.linkUserName}</Checkbox>
                      })
                    }
                    <Button type="primary" onClick={this.showModal.bind(this)}>添加用户</Button>
                  </Checkbox.Group>
                  <Modal data={this.state} footer={""} ></Modal>
                </FormItem>
              </Content>
            </Layout>
            <Layout style={{ height: 180, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>联系信息</Sider>
              <Content style={{ background: '#f2fcff', textAlign: 'left', paddingTop: 20 }}>
                <FormItem
                  {...formItemLayout}
                  label="手机号码"
                  validateStatus={this.state.status.phone}
                  help="请输入正确的手机号！"
                >
                  <Input addonBefore="+86" defaultValue={this.state.addParam.noticePhone} onBlur={this.changeEve.changePhone.bind(this)} style={{ width: 235 }} placeholder='' id="warning" />
                </FormItem><br />
                <FormItem
                  {...formItemLayout}
                  label="Email"
                  validateStatus={this.state.status.email}
                  help="请输入正确的邮箱信息！"
                >
                  <Input style={{ width: 270 }} defaultValue={this.state.addParam.noticeEmail} onBlur={this.changeEve.changeEmail} placeholder='' id="warning" />
                </FormItem>
              </Content>
            </Layout>
            <Layout style={{ height: 132, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>发票信息</Sider>
              <Content style={{ background: '#f2fcff', position: 'relative' }}>
                <Checkbox onChange={this.changeEve.changeBill} defaultChecked={this.state.status.isNeedInvoice}
                  style={{ marginTop: '30', position: 'absolute', left: 20, top: 0 }}>需要发票</Checkbox>
                <span style={{ marginTop: '60', fontSize: 14, color: '#ccc', fontWeight: 500, position: 'absolute', left: 20, top: 0 }}>可开具电子发票，纸质发票。订单成交后3个月内可补开。</span>
                <br />
                <RadioGroup defaultValue={this.state.addParam.invoiceType} onChange={this.changeEve.changeBillType.bind(this)}
                  style={{ position: 'absolute', display: this.state.status.showBill, left: 20, bottom: 0 }}> {/*onChange={this.onChange} value={this.state.value}*/}
                  <Radio value={1}>个人</Radio>
                  <Radio value={2}>单位:<Input defaultValue={this.state.addParam.invoiceHead} onBlur={this.changeEve.changeBillMessage} placeholder="选填"
                    style={{ width: 200, height: 30 }} /></Radio>
                </RadioGroup>
              </Content>
            </Layout>
            <Layout style={{ height: 92, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>特殊服务</Sider>
              <Content style={{ background: '#f2fcff' }}>
                <Input placeholder="选填" onBlur={this.changeEve.changeSpecialSver}
                  defaultValue={this.state.addParam.specialRequirement}
                  style={{ width: 200, height: 30, marginTop: 30, marginLeft: 30 }} />
              </Content>
            </Layout>
            <Layout style={{ height: 74, border: '1px solid #1ab2db' }}>
              <Sider style={{ background: '#fff', textAlign: 'center', padding: 20, }}>酒店提示</Sider>
              <Content className="last-content" style={{ background: '#f2fcff', lineHeight: 5 }}>为响应禁烟条例，保护您和他人的健康，酒店均为无烟房。   </Content>
            </Layout>
          </Form>
        </div>
        <div className="order-footer">
          <ul>
            <li>
              <Icon type="exclamation-circle" />
              <strong>订单确认时长：</strong>此为向代理商申请的特殊价格，并在2017-05-01 16:50前 提供预订结果，请您耐心等待，到达酒店前台后请
            </li>
            <li>
              <Icon type="exclamation-circle" />
              <strong>取消修改说明：</strong>i旅行会根据您的付款方式进行预授权或扣除房费，如订单不确认讲解除预授权或全额退款至您的付款账户。该订单 确认后不
            </li>
          </ul>
        </div>
        <div className="order-button" style={{ height: 50, padding: 10 }}>
          <div style={{ float: 'left', display: 'inline-block' }}><a href="" style={{ color: '#1ab2db', fontSize: 14, marginTop: 3, fontWeight: 900 }}>&lt; 重现选择</a></div>
          <div style={{ float: 'right', display: 'inline-block' }}> <Button type="danger" onClick={this.changeEve.submitForOrder.bind(this)}>下一步，支付</Button></div>
          <div></div>
        </div>
      </div >
    )
  }
}
