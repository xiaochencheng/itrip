import React from 'react'
import { Tabs } from 'antd';

import SearchOrder from 'components/OrderPage/SearchOrder'
import OrderListTable from 'components/OrderPage/OrderListTable'
import OrderListItem from 'components/OrderPage/OrderListItem'
import { fetchBiz } from 'components/fetchUtils'

const TabPane = Tabs.TabPane;
import './style.css'


/*订单页 Tab 切换 组件*/
export default class OrderTab extends React.Component {
  /* state = {
     order: {
       orderall: -1,
       notravel: 2,
       nopayment: 0,
       nocomment: 3,
       canceled: 1
     },
     initialparam: {
       "endDate": "2018-04-02",
       "orderStatus": -1,
       "orderType": -1,
       "pageNo": 1,
       "pageSize": 5,
       "startDate": "2016-06-02"
     },
     param: {},
     paramdef: {},
   }*/
  constructor(props) {
    super(props);
    // 父页面传递的数据 
    this.state = {

    }
  }


  componentWillMount() {
    /*fetchBiz({
      url: "/hotelorder/getpersonalorderlist",
      type: "POST",
      param: this.state.initialparam,
      callback: e => {
        //得到后台的请求数据
        console.log("连接价格==" + JSON.stringify(e.data));
      }
    })*/

    this.setState({
      "data": {
        "beginPos": 0,
        "curPage": 1,
        "pageCount": 60,
        "pageSize": 1,
        "rows": [],
        "total": 60
      },

    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      orderTypeIndex: nextProps.dataType
    });
  }


  fn(searchparam) {
    // 使用闭包保存父组件的 this 值
    var self = this;
    return (searchparam) => self.setState({
      formparam: searchparam
    }, function () { this.forceUpdate(); })
  }

  render() {
    var fn = this.fn();
    return (
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="全部订单" key="-1">
            <SearchOrder searchData={fn} />
            <OrderListItem data={this.state.data} param={{ "orderStatus": -1, "orderType": -1, "pageSize": 6, "pageNo": 1 }} paramMenu={{ "orderStatus": -1, "orderType": this.state.orderTypeIndex, "pageSize": 6, "pageNo": 1 }} searchparam={this.state.formparam} />
          </TabPane>
          <TabPane tab="未出行" key="2">
            {/*<OrderListItem data={this.state.data} param={{ "orderStatus": 2, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />*/}
            <OrderListTable data={this.state.data} param={{ "orderStatus": 2, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
          <TabPane tab="待付款" key="0">
            {/*<OrderListItem data={this.state.data} param={{ "orderStatus": 0, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />*/}
            <OrderListTable data={this.state.data} param={{ "orderStatus": 0, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
          <TabPane tab="待评价" key="3">
            {/*<OrderListItem data={this.state.data} param={{ "orderStatus": 3, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />*/}
            <OrderListTable data={this.state.data} param={{ "orderStatus": 3, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
          <TabPane tab="已取消" key="1">
            {/*<OrderListItem data={this.state.data} param={{ "orderStatus": 1, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />*/}
            <OrderListTable data={this.state.data} param={{ "orderStatus": 1, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
