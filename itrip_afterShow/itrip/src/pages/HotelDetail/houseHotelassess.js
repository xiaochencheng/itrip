/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
import { Tabs, Pagination } from 'antd';
import { fetchBiz } from '../../components/fetchUtils'
'use strict';
const TabPane = Tabs.TabPane;
/*主函数，显示点评信息和点评的头部切换数据界面信息*/
export default class HouseHotelassess extends React.Component {
  state = {
    score: {},
    comment: {
      isok: 0,
      havingimg: 0,
      improve: 0,
      allcomment: 0
    }
  }
  componentWillMount() {
    /*/comment/gethotelscore/1*/
    fetchBiz({
      url: "/comment/gethotelscore/" + this.props.hotelId,
      callback: (data) => {
        this.setState({
          score: data.data
        })
      }
    })
    fetchBiz({
      url: "/comment/getcount/" + this.props.hotelId,
      callback: (data) => {
        this.setState({
          comment: data.data
        })
      }
    })
    this.setState({
      data: {},
      recomData: {
      },
      gradget: {
        data: []
      }
    })
  }
  recommendClick(e) {
  }
  render() {
    return (
      <div className="i_cost_con i_comment_con" style={{ marginBottom: 70 }} id="hotelassess">
        <div className="i_cost clearfix">
          <span className="i_icon1">
            <h4>用户点评</h4>
            <i className="icon-user" />
          </span>
          <div className="i_grade">
            <div className="i_total_grade clearfix">
              <div className="i_left">
                <b>{this.state.score.avgScore}</b>
                <span>总体评分</span>
              </div>
              <div className="i_right">
                <ul className="process">
                  <li>
                    位置
                    <span className="num">{this.state.score.avgPositionScore}</span>
                    <span className="processbar">
                      <em style={{ width: this.state.score.avgPositionScore * 56 }} />
                    </span>
                  </li>
                  <li>
                    设施
                    <span className="num">{this.state.score.avgFacilitiesScore}</span>
                    <span className="processbar">
                      <em style={{ width: this.state.score.avgFacilitiesScore * 56 }} />
                    </span>
                  </li>
                  <li>
                    服务
                    <span className="num">{this.state.score.avgServiceScore}</span>
                    <span className="processbar">
                      <em style={{ width: this.state.score.avgServiceScore * 56 }} />
                    </span>
                  </li>
                  <li>
                    卫生
                    <span className="num">{this.state.score.avgHygieneScore}</span>
                    <span className="processbar">
                      <em style={{ width: this.state.score.avgHygieneScore * 56 }} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="i_grade_list">
              <div className="card-container">
                {/*tabs 点击回调函数由 Tabs 函数触发请求具体的tabs下的参数数据信息*/}
                <Tabs type="card" onTabClick={this.recommendClick.bind(this)} >
                  <TabPane tab={"全部评论（" + this.state.comment.allcomment + "）"} key="1">
                    <Pager data={this.state.data} param={{ "hotelId": this.props.hotelId, "isHavingImg": -1, "isOk": -1, "pageSize": 5, "pageNo": 1 }}></Pager>
                  </TabPane>
                  <TabPane tab={"值得推荐（" + this.state.comment.isok + "）"} key="2" >
                    <Pager data={this.state.data} param={{ "hotelId": this.props.hotelId, "isHavingImg": -1, "isOk": 1, "pageSize": 5, "pageNo": 1 }}></Pager>
                  </TabPane>
                  <TabPane tab={"有待改善（" + this.state.comment.improve + "）"} key="3">
                    <Pager data={this.state.data} param={{ "hotelId": this.props.hotelId, "isHavingImg": -1, "isOk": 0, "pageSize": 5, "pageNo": 1 }}></Pager></TabPane>
                  <TabPane tab={"有图片(" + this.state.comment.havingimg + "）"} key="4">
                    <Pager data={this.state.data} param={{ "hotelId": this.props.hotelId, "isHavingImg": 1, "isOk": -1, "pageSize": 5, "pageNo": 1 }}></Pager>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
/*生成分页数据和分页下表*/
class Pager extends React.Component {
  handlClickPager = (e) => {
    let param = this.state.param;
    param.pageNo = e;
    this.setState({
      param: param
    })
    this.getPageData();
  }
  state = {
    score: {},
    param: this.props.param
  }
  getPageData = (e) => {
    fetchBiz({
      url: "/comment/getcommentlist",
      type: "POST",
      param:  this.state.param,
      callback: (data) => {
        this.setState({
          score: data.data
        })
      }
    })
  }
  componentWillMount() {
    this.getPageData();
  }
  render() {
     
    return (
      <div>
        <HotelComment data={this.state.score.rows} />
        <Pagination style={{ float: 'right' }} pageSize={this.state.param.pageSize}
        onChange={this.handlClickPager}  defaultCurrent={1} current={this.state.score.curPage}  total={this.state.score.total} />
      </div>
    )
  }
}
/* 显示评论页面每一条数据信息*/
class HotelComment extends React.Component {

  render() {
    if (!this.props.data) {
      return <div className="all_data_cur"></div>;
    }
    let sef = this;
    return (
      <div className="all_data_cur">
        {
          this.props.data.map(function (data, i, arr) {
            let star = function (e) {
              let stars = [];
              for (var i = 0; i < e; i++) {
                stars.push(<i className="icon-star" />)
              }
              return stars;
            }(data.score);
            return (<ul className="comment_list">
              <li>
                <div className="author ">
                  <a href="javascript:;">
                    {star}
                  </a>
                  <strong>{data.score}分</strong>
                  <p> {data.userCode} </p>
                  <span>{data.tripModeName} </span>
                </div>
                <p className="comment_info">
                  <span>{data.tripModeName}    {data.checkInDate} 入住 </span>
                  <span>{data.roomTitle}</span>
                </p>
                <p className="comment_detail">
                  {data.content}
                </p>
                {/*<div className="comment_pic_list">*/}
                <ImageBox data={data}></ImageBox>
                {/*</div>*/}
                <p className="detail_comment_tips">
                  <a href="#"></a>
                  <a href="#">来自：i 旅行</a>
                </p>
              </li>
            </ul>)
          })
        }
      </div>
    )
  }
}
/* 生成评论界面的图片显示，并绑定点击事件*/
class ImageBox extends React.Component {
  state = {
    data: [],
    imgSize: "_200x200.jpg"
  }
  componentWillMount() {
    fetchBiz({
      url: "/comment/getimg/" + this.props.data.id,
      callback: (da) => {
        this.setState(
          {
            data: da.data
          }
        )
      }
    })
  }
  clickImage = (e) => {
    if (this.state.oldTarget) {
      this.state.oldTarget.style["width"] = 100 + 'px';
      this.state.oldTarget.style["height"] = 100 + 'px';
    }
    this.setState({
      oldTarget: e.currentTarget
    })
    e.currentTarget.style["width"] = 300 + 'px';
    e.currentTarget.style["height"] = 300 + 'px';
    this.setState({
      imgSize: "_500x500.jpg"
    })
  }
  render() {
    return (
      <div className="comment_pic_list">
        {
          this.state.data.map((data) => {
            return (
              <a>
                <img src={data.imgUrl + this.state.imgSize}
                  onClick={this.clickImage.bind(this)} height={100} width={100} alt />
              </a>
            )
          }
          )
        }

      </div>
    )
  }

}
