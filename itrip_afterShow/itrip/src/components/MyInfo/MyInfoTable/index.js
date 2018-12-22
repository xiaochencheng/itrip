import React from 'react'
import { Table, Input, Button, Layout } from 'antd';
import './style.css'
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import Modal from 'components/MyInfo/linkerUser/'
const { Content, Sider } = Layout;

export default class MyInfoTable extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    rows: [],
    visible: false,
    param: {
      linkUserName: ""
    },
    linkerUserMap: {},
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
      this.querylinkuser({
        param: this.state.param,
        callback: e => {
          this.setState({
            visible: false
          })
        }
      })
    },
    setState: (data) => {
      this.setState({
        visible: false
      })
    }
  };
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRowKeys });
    this.setState({
      ids: selectedRows.map(val => {
        return 'ids=' + val.id;
      })
    });
    console.log('selectedRows: ', selectedRows);
  }
  querylinkuser = (param) => {
    fetchBiz({
      url: param.url || '/userinfo/queryuserlinkuser',
      type: "POST",
      // ContentType:"text/plain",
      param:param.param || this.state.param,
      callback: e => {
        let rowMap = {};
        e.data.map(val => {
          rowMap[val.id] = val;
        })
        this.setState({
          rows: e.data,
          linkerUserMap: rowMap
        })
        if (typeof param.callback == "function") {
          param.callback(e)
        }

      }
    })
  }
  componentWillMount() {
    this.querylinkuser({
      param: this.state.param
    })
  }
  addLinkerUser = (e) => {
    console.debug(e);
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
      }
    })
  }
  modifyLinkerUser = (e) => {
    let row = this.state.linkerUserMap[e.target.getAttribute("data-id")];
    this.setState({
      visible: true,
      data: {
        title: '编辑用户信息',
        url: '/userinfo/modifyuserlinkuser',
        type: 'add',//modfiy
        userMess: {
          userName: row.linkUserName,
          phone: row.linkPhone,
          card: row.linkIdCard,
          id: row.id
        }
      }
    })
  }
  removeLinkerUser = (e) => {
    let id = 'ids='+e.target.getAttribute("data-id");
    id=e.target.type != "button"?id:this.state.ids.join("&");
    fetchBiz({
      url: '/userinfo/deluserlinkuser?' + id,
      callback: e => {
        this.querylinkuser({
          param:""
        });
      }
    })
  }
  inputChange = (e) => {
    this.setState({
      param: {
        linkUserName: e.target.value
      }
    })
  }
  searchRowDatas = (e) => {
    this.querylinkuser({
      param: this.state.param
    })
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const columns = [
      {
        title: '姓名',
        dataIndex: 'linkUserName'
      }, {
        title: '手机/电话',
        dataIndex: 'linkPhone',
      }, {
        title: '证件类型',
        dataIndex: 'linkIdCardType',
        render: (e) => {
          let map = { 0: '身份证', 1: '护照', 2: '学生证', 3: '军人证', 4: '驾驶证', 5: '旅行证' }
          return map[e];
        }
      }, {
        title: '证件号码',
        dataIndex: 'linkIdCard'

      }, {
        title: '操作',
        dataIndex: 'id',
        render: text => <span>
          {/*<a onClick={this.addLinkerUser.bind(this)} style={{ color: "#1ab2db" }}>查看</a>*/}
          <a onClick={this.modifyLinkerUser.bind(this)} data-id={text} style={{ margin: "0 10px 0 -15px", color: "#1ab2db" }}>编辑</a>
          <a onClick={this.removeLinkerUser.bind(this)} data-id={text} style={{ color: "#1ab2db" }}>删除</a>
        </span>,
      }
    ];
    return (
      <Content>
        <div className="myinfosearch">
          <span>旅客姓名</span><Input onChange={this.inputChange.bind(this)} placeholder="中文名/英文名" />
          <Button style={{ marginRight: "10px" }} type="primary" onClick={this.searchRowDatas.bind(this)}>查询</Button>
          <Button style={{ marginRight: "10px" }} type="primary" onClick={this.addLinkerUser.bind(this)}>新增</Button>
          <Button type="primary" onClick={this.removeLinkerUser.bind(this)}>删除</Button>
        </div>
        <Modal data={this.state} footer={""} ></Modal>
        <div className="OrderListItemcc myinfotablecc">
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.rows} />
        </div>
      </Content>

    );
  }
}
