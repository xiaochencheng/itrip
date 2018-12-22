/*
* @Author: zhzbin
* @Date:   2017-05-08 13:40:52
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:41:49
*/
import React from 'react'
import { DatePicker, Modal, Select, message } from 'antd';
import moment from 'moment';
import { fetchBiz } from '../../components/fetchUtils'
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
'use strict';
const Option = Select.Option;
export default class HouseList extends React.Component {
  state = {
    param: {
      "endDate": new Date(),
      "hotelId": this.props.hotelId,
      "isBook": null,
      "isHavingBreakfast": null,
      "isTimelyResponse": null,
      "roomBedTypeId": null,
      "payType": null,
      "isCancel": null,
      "startDate": new Date(),
    },
    data: [],
    roomTypeta: [],
    startRed: {},
    endRed: {}
  }
  componentWillMount() {
    let param = this.state.param;
    param.startDate = new Date(this.props.param.startTime || new Date());
    param.endDate = new Date(this.props.param.endTime || new Date().getTime() + (60 * 60 * 24 * 1000));
    this.setState({
      param: param
    })



    fetchBiz({
      url: "/hotelroom/queryhotelroombyhotel",
      type: "POST",
      param: this.state.param,
      callback: (data) => {
        this.setState({
          data: data.data
        })
      }
    })
    fetchBiz({
      url: "/hotelroom/queryhotelroombed",
      callback: (data) => {
        this.setState({
          roomTypeta: data.data
        })
      }
    })
  }
  changeSateParam = (data) => {
    if (data) {
      let stateParam = this.state.param;
      stateParam[data.key] = data.val;
      this.setState({
        param: stateParam
      })
    }
  }
  /*点击每个不同的按钮的时候出发时间操作*/
  serachClick = (data) => {
    this.changeSateParam(data);
    fetchBiz({
      url: "/hotelroom/queryhotelroombyhotel",
      type: "POST",
      param: this.state.param,
      callback: (data) => {
        this.setState({
          data: data.data
        })
        /**/
        alertDesc({
          type: 'success',
          desc: '数据获取成功！',
          time: 1
        });
      }
    })

  }
  bedType = (data) => {
    this.serachClick({ key: "roomBedTypeId", val: data })
  }
  payType = (data) => {
    this.serachClick({ key: "payType", val: data })
  }
  startDate = (data) => {
    // onChange data.toDate().getTime()
    this.changeSateParam({
      key: "startDate",
      val: data.toDate()
    })
    console.debug(data);
  }
  endDate = (data) => {
    this.changeSateParam({
      key: "endDate",
      val: data.toDate()
    })
  }
  changeState = (data) => {
    var state = this.state;
    state[data.key] = data.val;
    this.setState(state);
  }
  serachClickButton = (data) => {
    var param = this.state.param;
    if (!param.startDate) {
      this.changeState({
        key: "startRed",
        val: { border: '1px solid red' }
      })
    }
    if (!param.endDate) {
      this.changeState({
        key: "endDate",
        val: { border: '1px solid red' }
      })
    }
    if (param.startDate && param.endDate && param.startDate.getTime() < param.endDate.getTime()) {
      this.serachClick();
    }
  }

  render() {

    function disabledDate(current) {
      return current && current.valueOf() < (Date.now() - 24 * 60 * 60 * 1000);
    }
    return (
      <div className="house_list" id="houseList">
        <div className="line">
          <div style={this.state.startRed} className="hotel_detail_item hotel_detail_clder">
            <span>入住</span>
            {/*disabledDate={disabledDate}*/}
            <DatePicker defaultValue={moment(this.props.param.startTime || new Date())} onChange={this.startDate} size="small" />
          </div>
          <div style={this.state.endRed} className="hotel_detail_item hotel_detail_clder hotel_detail_cldertwo">
            <span>退房</span>
            {/*disabledDate={disabledDate}*/}
            <DatePicker defaultValue={moment(this.props.param.endTime || new Date().getTime() + (60 * 60 * 24 * 1000))} onChange={this.endDate} size="small" />
          </div>
          <button className="btn-serach" onClick={this.serachClickButton.bind(this)}>重新搜索</button>
        </div>
        <div className="hotel_detail-sort clearfix">
          <BtnsSearchList contextName="含早餐" datakey="isHavingBreakfast" clickBtn={this.serachClick.bind(this)} />
          <BtnsSearchList contextName="立刻确认" datakey="isTimelyResponse" clickBtn={this.serachClick.bind(this)} />
          <BtnsSearchList contextName="免费取消" datakey="isCancel" clickBtn={this.serachClick.bind(this)} />
          <BtnsSearchList contextName="可预订" datakey="isBook" clickBtn={this.serachClick.bind(this)} />
          <div className="select-group">
            <Select defaultValue="" onChange={this.bedType.bind(this)} style={{ width: 83, height: 38 }}>
              <Option value="">床型</Option>
              {
                this.state.roomTypeta.map((val, i) => {
                  return (
                    <Option key={val.id + ""}>{val.name}</Option>
                  )
                })
              }
            </Select> &nbsp;
            <Select defaultValue="" onChange={this.payType.bind(this)} style={{ width: 83, height: 38 }}>
              <Option value="" Select>支付类型</Option>
              <Option value="1">在线支付</Option>
              <Option value="2">到店付</Option>
              <Option value="3">不限</Option>
            </Select>

          </div>
        </div>
        <HotelTables dataRow={this.state.data} param={this.state.param} />
      </div>
    )
  }
}

class BtnsSearchList extends React.Component {
  state = {
    clName: "btn-serach-div"
  }
  serachClick(e) {
    this.setState(
      {
        clName: e.currentTarget.classList.length > 1 ? "btn-serach-div " : "btn-serach-div act"
      }
    )
    this.props.clickBtn({
      key: this.props.datakey,
      val: e.currentTarget.classList.length > 1 ? null : 1
    });
  }
  render() {
    return (
      <div className={this.state.clName}
        onClick={this.serachClick.bind(this)} >
        {this.props.contextName} <span />
        <i className=" icon-ok" /></div>
    )
  }
}
class HotelTables extends React.Component {
  state = {
    roomTypeta: []
  }
  componentWillMount() {
    fetchBiz({
      url: "/hotelroom/queryhotelroombed",
      callback: (data) => {
        let type = {};
        data.data.map((val) => {
          type[val.id] = val.name
        })
        this.setState({
          roomTypeta: type
        })
      }
    })
  }
  render() {
    if (this.props.dataRow) {
      const sef = this;

      return (
        <div className="table-list">
          <table>
            <thead>
              <tr className="th">
                <th className="col1" style={{ paddingLeft: 10 }}>房型</th>
                <th className="col3">床型</th>
                <th className="col4">早餐</th>
                <th className="col5">宽带</th>
                <th className="col_policy">政策</th>
                <th className="col6">房价（含服务费）</th>
                <th className="col7">
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.dataRow.map((val, index) => {
                  return val.map((d, i, a) => {
                    let hidden = i > 5 ? 'hidden' : "";
                    let breakfast = { 1: "有早", 0: "无早" }
                    let isCancel = { 0: "不可取消", 1: "可取消" }
                    if (i == 0) {
                      return (
                        <TableTr a={a} d={d} sef={sef} i={i} param={this.props.param}></TableTr>
                      )
                    } else {
                      <tr className="unexpanded">
                        <td>{sef.state.roomTypeta[d.roomBedTypeId]}</td>
                        <td>{breakfast[d.isHavingBreakfast]}</td>
                        <td><span>免费</span>
                        </td>
                        <td><span>{isCancel[d.isCancel]}</span></td>
                        <td>
                          <span className="rom_unit_label"><dfn>¥</dfn><em>{d.roomPrice}</em><span>起</span></span>
                        </td>
                      </tr>
                    }
                  })
                })
              }
              <tr className="unexpanded hidden last_room" >
                <td className="fold_bold_r" />
                <td className="child_name" />
                <td className="col3" />
                <td className="col4" />
                <td className="col5" />
                <td />
                <td className="col_policy" />
                <td className="room_detail_fold"><a data-id="first_room_01" data-hidedata={1} data-status={0}>展开全部房型 <i className=" icon-chevron-down" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      // alert(this.props.dataRow);
    }
  }
}

class TableTr extends React.Component {
  state = {
    imgUrl: [],
    display: "none",
    showImg: "",
    visible: false,
    imgSize:'_500x500.jpg',
    smallImgSize:'_50x50.jpg'
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  componentWillMount() {
    fetchBiz({
      url: "/hotelroom/getimg/" + this.props.d.id,
      callback: (data) => {

        let img = "";
        if (data.data[0]) {
          img = (<a>
            <img src={data.data[0].imgUrl+this.state.smallImgSize}
              height={350} width={500} />
          </a>
          )
          this.setState({
            showImg: data.data[0].imgUrl+this.state.imgSize,
            img: img
          })

        }
        this.setState({
          imgUrl: data.data
        })
      }
    })
  }
  changeImg = (data) => {
    // console.debug(data.currentTarget);
    this.setState({
      showImg: data.currentTarget.src,
    })
  }
  clickReserve = (e) => {
    const token = Cookie.get('token')
    if (token) {
      window.location.hash =
        "#orderfill?hotel=" + this.props.d.hotelId + "&room=" + this.props.d.id +
        "&startDate=" + this.props.param.startDate.toDateString() +
        "&endDate=" + this.props.param.endDate.toDateString()
    } else {
      alertDesc({
        type: 'warning',
        desc: '请先登录，3s后跳转！',
        time: 3
      });
      setTimeout(() => {
        window.location.hash =
          "#login?hotelId=" + this.props.d.hotelId + "&room=" + this.props.d.id +
          "&startTime=" + this.props.param.startDate.getTime() +
          "&endTime=" + this.props.param.endDate.getTime() + '&skipPage=hoteldetail';
      }, 3000);
    }

  }
  render() {
    let a = this.props.a;
    let d = this.props.d;
    let i = this.props.i;
    let sef = this.props.sef;
    let rowSpan = a.length > 5 ? a.length - 5 : 0;
    let type=rowSpan>=0?"rowSpan="+rowSpan:"";
    let hidden = i > 5 ? 'hidden' : "";
    let breakfast = { 1: "有早", 0: "无早" }
    let isCancel = { 0: "不可取消", 1: "可取消" }
    return (
      <tr className="first_room">
        <td  >{/*去掉合并行数据信息*/}
          <div className="room_img_ms">
            {this.state.img}
            <br />
            <a> {d.roomTitle} <br /><span style={{ marginTop: "3px" }}
              onClick={this.showModal}>查看详情</span></a>
          </div>
          <Modal className="" footer={null} title={d.roomTitle}
            visible={this.state.visible}
            onCancel={this.handleCancel}
          >
            <div className="rom-show-image " style={{ display: "block" }}>
              {/* <div className="left-tran" />
              <a className="model-remove" onClick={this.clickHideMassage}>
                <i className=" icon-remove" />
              </a>*/}
              <img className="big-img" src={this.state.showImg} height={350} width={500} alt />
              <div className="small-img">
                {
                  this.state.imgUrl.map((data,index,arry) => {
                    if(arry.length<=4){ 
                       let wid=(500-arry.length*5)/arry.length;
                      return <img src={data.imgUrl+this.state.imgSize} style={{width:wid}} onClick={this.changeImg} alt="" />
                    }else if(index<4){
                        let wid=(500-4*5)/4;
                      return <img src={data.imgUrl+this.state.imgSize} style={{width:wid}} onClick={this.changeImg} alt="" />
                    }
                  })
                }
              </div>
            </div>
          </Modal>

        </td>
        <td>{sef.state.roomTypeta[d.roomBedTypeId]}</td>
        <td>{breakfast[d.isHavingBreakfast]}</td>
        <td><span>免费</span>
        </td>
        <td><span>{isCancel[d.isCancel]}</span></td>
        <td>
          <span className="rom_unit_label"><dfn>¥</dfn><em>{d.roomPrice}</em><span>起</span></span>
        </td>
        <td className="col7">
          <button className="room_by" onClick={this.clickReserve.bind(this)}>预订</button>
        </td>
      </tr>
    )
  }
}
