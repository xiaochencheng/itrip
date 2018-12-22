import React from 'react'
import { Table, Pagination } from 'antd';
import { fetchBiz, fetchSearch } from 'components/fetchUtils'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'
import './style.css'


/*订单列表组件*/
// var filteredInfo = filteredInfo || {};



export default class OrderListItem extends React.Component {

  constructor(props) {
    super(props);
    // 父页面传递的数据 
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      filteredInfo: null,
      //Tab导航参数
      orderlist: this.props.data,
      param: this.props.param
    };

  }
  //当组件传入的 props 发生变化时调用，例如：父组件状态改变，
  //给子组件传入了新的prop值。用于组件 props 变化后，更新state。
  componentWillReceiveProps(nextProps) {
    const paramMenu = nextProps.paramMenu;
    const searchparam = nextProps.searchparam;

    console.log("this.state.param之前=" + JSON.stringify(this.state.param));
    // 判断是搜索属性的变化还是左menu的变化，根据不同的变化，去请求数据
    if (JSON.stringify(paramMenu) != JSON.stringify(this.props.paramMenu)) {
      this.setState({
        param: paramMenu
      }/*, () => { this.forceUpdate(); }*/);

    } else if (JSON.stringify(searchparam) != JSON.stringify(this.props.searchparam)) {
      this.setState({
        param: searchparam
      });

    }
    //外部属性发生变化的时候，调用请求后台数据函数
    //等待接收参数之后 再去后台接收数据
    var self = this;
    setTimeout(function () {
      self.getPageData();
    }, 300);
  }

  // 分页函数
  handlClickPager = (e) => {
    let param = this.state.param;
    param.pageNo = e;
    this.setState({
      param: param
    })
    this.getPageData();
  }

  // 后台请求数据的函数
  getPageData = (e) => {
    console.log("this.state.param之后=" + JSON.stringify(this.state.param));
    fetchBiz({
      url: "/hotelorder/getpersonalorderlist",
      type: "POST",
      param: this.state.param,
      callback: e => {
        //得到后台的请求数据
        //console.log("之后e.data=="+JSON.stringify(e.data))
        if (e.data) {
          for (var i = 0; i < e.data.rows.length; i++) {
            //转换订单状态标识码为相应的文字介绍
            if (e.data.rows[i].orderStatus == 1) {
              e.data.rows[i].orderStatus = "已取消";
              e.data.rows[i]["operate"] = " ";
            } else if (e.data.rows[i].orderStatus == 0) {
              e.data.rows[i].orderStatus = "待付款";
              e.data.rows[i]["operate"] = "继续提交";
            } else if (e.data.rows[i].orderStatus == 2) {
              e.data.rows[i].orderStatus = "未出行";
            } else if (e.data.rows[i].orderStatus == 3) {
              e.data.rows[i].orderStatus = "已成交";
              e.data.rows[i]["operate"] = "点评酒店";
            } else if (e.data.rows[i].orderStatus == 4) {
              e.data.rows[i].orderStatus = "已点评";
              e.data.rows[i]["operate"] = "追加点评";
            }

            //转换订单类型标识码为相应的文字介绍0:旅游订单 1:酒店订单 2：机票订单
            if (e.data.rows[i].orderType == 0) {
              e.data.rows[i].orderType = "旅游";
              e.data.rows[i]["operate"] = " ";
            } else if (e.data.rows[i].orderType == 1) {
              e.data.rows[i].orderType = "酒店";
              e.data.rows[i]["book"] = "再次预订";
            } else if (e.data.rows[i].orderType == 2) {
              e.data.rows[i].orderType = "机票";
              e.data.rows[i]["operate"] = " ";
            }

            //隐藏orderNo的前8位
            //e.data.rows[i].orderNo = e.data.rows[i].orderNo.slice(8);
          }
        }

        //根据请求的后台数据改变状态值
        this.setState({
          orderlist: e.data
        })
      }
    })

  }

  //耗时操作放在这里面
  componentWillMount() {
    //search参数改变param值
    this.getPageData();
  }
  /*排序筛选*/
  handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    /*this.setState({
      param: filters.orderStatus[0]
    },()=>{console.log("排序="+ JSON.stringify(this.state.param) )});*/

    this.state.param["orderStatus"] = filters.orderStatus[0];
    this.state.param["orderType"] = -1;
    this.state.param["pageSize"] = 6;
    this.state.param["pageNo"] = 1;
    //console.log("排序="+ JSON.stringify(this.state.param) )
    //search参数改变param值
    this.getPageData();
  }
  

  /* onSelectChange = (selectedRowKeys) => {
     console.log('selectedRowKeys changed: ', selectedRowKeys);
     this.setState({ selectedRowKeys });
   }*/
  render() {
    /*const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelection: this.onSelection,
    };*/
    let { filteredInfo } = this.state;
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '订单号',
      dataIndex: 'orderNo',
      render: (text, record) => <span>
        订单号:<i className="selectNum">{text}</i>
        <div className="orderHotelName"><a href="javascript:;">{record.hotelName}</a></div>
      </span>,
      onCellClick: (record) => {
        // 根据订单Id跳转到详情页面
        // console.log(record.id)
        // 跳转页面
        let myDate = new Date();
        let startTime = myDate.toLocaleDateString();
        let endTime = "";

        const query = stringify({
          hotelId: record.hotelId,
          startTime: startTime,
          endTime: endTime
        })
        hashHistory.push('/hoteldetail?' + query);
      }
    }, {
      title: '类型',
      dataIndex: 'checkInDate',
      filters: [
        { text: '酒店', value: 'jiuDian' },
        { text: '火车票', value: 'guoNeiHuoChePiao' },
        { text: '门票', value: 'menPiao' },
        { text: '汽车票', value: 'qiChePiao' },
      ],
      filterMultiple: false,
      render: (text, record) => <span>
        预订日期:<i className="reserveDate">{text}</i>
        <div className="ordertype"><span>{record.orderType}</span></div>
      </span>,
    }, {
      title: '旅客',
      dataIndex: 'linkUserName',
    }, {
      title: '行程/有效日期',
      dataIndex: 'creationDate',
    }, {
      title: '总金额',
      dataIndex: 'payAmount',
      render: text => <span>
        <i className="orderTotal">￥{text}</i>
      </span>,
    }, {
      title: '',
      dataIndex: 'book',
      render: text => <span className="orderoperate">
        <a href="javascript:;" >{text}</a>
      </span>,
      onCellClick: (record) => {
        // 根据订单Id跳转到详情页面
        // console.log(record.id)
        // 跳转页面
        let myDate = new Date();
        let startTime = myDate.getTime();
        let endTime = (startTime + 24 * 60 * 60 * 1000);
        const query = stringify({
          hotelId: record.hotelId,
          startTime: startTime,
          endTime: endTime
        })
        hashHistory.push('/hoteldetail?' + query);
      }
    }, {
      title: '订单状态',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      filters: [
        { text: '全部', value: '-1' },
        { text: '待付款', value: '0' },
        { text: '已取消', value: '1' },
        { text: '未出行', value: '2' },
        { text: '待评价', value: '3' },
        { text: '已点评', value: '4' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      filterMultiple: false,
      render: (text, record) => <span>
        <i className="orderState">{text}</i>
        <div className="orderdesc">
          <a id={record.id} href="javascript:;" >订单详情</a>
        </div>
      </span>,
      onCellClick: (record) => {
        // 根据订单Id跳转到详情页面
        // console.log(record.id)
        // 跳转页面
        const query = stringify({
          orderId: record.id
        })
        hashHistory.push('/orderdetail?' + query);
      }
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: text => <span className="orderoperate">
        <a href="javascript:;">{text}</a>
      </span>,
      onCellClick: (record) => {
        // 根据订单Id和酒店Id跳转到评论页面
        /* console.log(record.id)
         console.log(record.hotelId)*/
        // 跳转评论页面
        if (record.orderStatus == "已成交" || record.orderStatus == "已点评") {
          const query = stringify({
            hotelId: record.hotelId,
            orderId: record.id
          })
          hashHistory.push('/commentpage?' + query);
        } else if (record.orderStatus == "待付款") {
          const query = stringify({
            orderNo: record.orderNo,
            id: record.id
          })
          hashHistory.push('/orderpay?' + query);
        }

      }

    }
    ];



    return (
      <div className="OrderListItemcc">
        <Table columns={columns} dataSource={this.state.orderlist.rows} pagination={false} onChange={this.handleChange} />
        <Pagination style={{ float: 'right', marginTop: '20px' }} pageSize={this.state.param.pageSize} onChange={this.handlClickPager}
          defaultCurrent={1} current={this.state.orderlist.curPage} total={this.state.orderlist.total} />
      </div>
    );
  }



}
