import React from 'react'
import { Row, Col, Button } from 'antd'
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import './style.css'
//订单详细信息头部组件
export default class OrderDetailIntoRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomInfo: [],
    }
  }
  componentWillMount() {
    //获取订单id
    let orderId = getUrlParam("orderId");

    //根据订单ID查看个人订单详情-房型相关信息
    fetchBiz({
      url: "/hotelorder/getpersonalorderroominfo/" + orderId,
      callback: (e) => {
        //得到后台的请求数据
        //转换 星期几
        var weekArray = new Array("", "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var havingBreakFast = new Array("无早餐","含早餐")
        if (e.data) {
          //字符转换为星期几
          e.data.checkInWeek = weekArray[e.data.checkInWeek];
          e.data.checkOutWeek = weekArray[e.data.checkOutWeek];
          //日期做对应修改，以供页面使用
          var checkInDateArr= new Array();
          var checkOutDateArr= new Array();
          var checkInDate = e.data.checkInDate;
          var checkOutDate = e.data.checkOutDate;
          checkInDateArr = checkInDate.split('-');
          checkOutDateArr = checkOutDate.split('-');

          e.data.checkInDate = checkInDateArr;
          e.data.checkOutDate = checkOutDateArr;

          //是否还有早餐
          e.data.isHavingBreakfast = havingBreakFast[e.data.isHavingBreakfast]

          //特殊要求
          if(e.data.specialRequirement == "" || "string"){
            e.data.specialRequirement = "无"
          }
        }


        let arr = [];
        arr.push(e.data);
        this.setState({
          roomInfo: arr
        }, () => { console.log("this.state.roomInfo=" + JSON.stringify(this.state.roomInfo)) })
      }
    })

  }

  render() {
    if (!this.state.roomInfo) return;
    return (
      <div className="orderdetailintoroom">
        <Row>
          <Col span={24}>
            <h4 className="detailTile">
              入住信息
            </h4>
          </Col>
        </Row>
        <Row>

          {
            this.state.roomInfo.map(function (val) {
              return (
                <span>
                  <Col span={12}>
                    <h5 className="intoHotelName">{val.hotelName}</h5>
                    <span className="intoMap">{val.address}<a href="javascript:;">查看酒店地图</a></span>
                    <p><span className="orderDetailname">房型</span><em className="roomType">{val.roomTitle}</em></p>
                    <p><span className="orderDetailname">床型</span>{val.roomBedTypeName}</p>
                    <p>
                      <span className="orderDetailname">入离日期</span>
                      <div className="roomDate">
                        <span className="dateD bigNum">{val.checkInDate[2]}</span>
                        <span className="dateYearMon">{val.checkInDate[0]} - {val.checkInDate[1]}</span>
                        <span className="dateWon">{val.checkInWeek}</span>
                      </div>
                      <span className="connect">-</span>
                      <div className="roomDate">
                        <span className="dateD bigNum">{val.checkOutDate[2]}</span>
                        <span className="dateYearMon">{val.checkOutDate[0]} - {val.checkOutDate[1]}</span>
                        <span className="dateWon">{val.checkOutWeek}</span>
                      </div>
                    </p>
                    <p><span className="orderDetailname">间数</span>
                      <div className="roomNum">
                        <span className="bigNum">{val.count}</span>间
                        </div>
                    </p>
                    <p><span className="orderDetailname">早餐</span>{val.isHavingBreakfast}</p>
                    <p><span className="orderDetailname">住客信息</span>{val.linkUserName}</p>
                    <p><span className="orderDetailname">到店时间</span>{val.checkInDate[0]}-{val.checkInDate[1]}-{val.checkInDate[2]} 14:00 - {val.checkOutDate[0]}-{val.checkOutDate[1]}-{val.checkOutDate[2]} 16:00</p>
                    <p><span className="orderDetailname">特殊要求</span>{val.specialRequirement}</p>
                  </Col>
                  <Col span={8}>
                    <div className="detailPrice">￥ <strong>{val.payAmount}</strong> 起</div>
                    <span className="detailTip">共 <i className="totalTime">{val.bookingDays}</i> 晚</span>
                    <span className="detailTip">房费／早餐</span>
                  </Col>
                </span>
              )
            })

          }

          <Col span={4} className="detailButton">
            <Button type="primary" disabled>修改入住信息</Button>
          </Col>
        </Row>

      </div>
    )
  }
}

