import React from 'react'
import { Layout } from 'antd'
const { Sider, Content } = Layout
import Commentimg from './images/comment_img180180.jpg'
import StarComment from 'components/CommentPage/StarComment'
import TotalComment from 'components/CommentPage/TotalComment'
import CommentContent from 'components/CommentPage/CommentContent'
import PicUpload from 'components/CommentPage/PicUpload'
import CommentHolType from 'components/CommentPage/CommentHolType'
//星级
import DiamondIcon from 'components/HotelList/DiamondIcon'

import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'

import './style.css'

//评论页面 调用组件情况
export default class CommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetail: [],
      imgUrl: "",
      roomId: 0,
      totalParam: {}
    }
  }
  componentWillMount() {
    //获取订单id
    let hotelId = getUrlParam("hotelId");
    //根据订单ID查看个人订单详情
    fetchBiz({
      url: "/comment/gethoteldesc/" + hotelId,
      callback: (e) => {
        //得到后台的请求数据
        let arr = [];
        arr.push(e.data);
        this.setState({
          hotelDetail: arr
        })
      }
    })

    fetchBiz({
      url: "/hotelorder/getpersonalorderroominfo/" + hotelId,
      callback: (e) => {
        //得到后台的请求数据
        if (e.data) {
          this.state.roomId = e.data.roomId
        }
      }
    })

    //根据targetId查询酒店图片(type=0)
    fetchBiz({
      url: "/hotel/getimg/" + hotelId,
      callback: (e) => {
        //得到后台的请求数据
        this.setState({
          imgUrl: e.data[0].imgUrl
        })
      }
    })

    this.state.totalParam["hotelId"] = getUrlParam("hotelId");
    this.state.totalParam["orderId"] = getUrlParam("orderId");
    //通过接口获得房型Id
    this.state.totalParam["productId"] = this.state.roomId;
    //产品类型固定为 酒店产品
    this.state.totalParam["productType"] = 1;
    //是否含有图片
    this.state.totalParam["isHavingImg"] = 0;
    // 放置图片 URL 数组
    this.state.totalParam["itripImages"] = [];

    //拿到订单ID和酒店ID
    // console.log("totalParam=" + JSON.stringify(this.state.totalParam))
  }
  //接收star子组件参数
  handleStarChild = (paramstar) => {
    this.state.totalParam = eval('(' + (JSON.stringify(this.state.totalParam) + JSON.stringify(paramstar)).replace(/}{/, ',') + ')');
    // console.log("this.state.totalParam=" + JSON.stringify(this.state.totalParam))
  }
  //接收总体评价子组件参数
  handleTotalComment = (isOkValue) => {
    this.state.totalParam["isOk"] = isOkValue;
    // console.log("this.state.totalParam=" + JSON.stringify(this.state.totalParam))
  }
  //接收评价内容子组件的评价内容
  handleContentValue = (contentvalue) => {
    this.state.totalParam["content"] = contentvalue;
    // console.log("this.state.totalParam=" + JSON.stringify(this.state.totalParam))
  }
  //select下拉列表
  handleSelect = (selectValue) => {
    this.state.totalParam["tripMode"] = selectValue;
    // console.log("this.state.totalParam=" + JSON.stringify(this.state.totalParam))
  }
  //上传图片
  handlePic = (picparam) => {
    if (!picparam) {
      this.state.totalParam["isHavingImg"] = 0;
    } else {
      this.state.totalParam["isHavingImg"] = 1;
      this.state.totalParam["itripImages"].push({ imgUrl: picparam })
      //处理删除图片之后再次触发onChange事件
      //采取方式是，判断是否有相同的图片URl，如果有的话，把最后一个URL地址删除掉
      let arrTotalParam =  this.state.totalParam["itripImages"];
      for (var i = 0; i < arrTotalParam.length-1; i++){
      if (arrTotalParam[i].imgUrl == picparam){
         arrTotalParam.splice(arrTotalParam.length-1, 1);
      }
    }
     console.log("最后处理结果=" + JSON.stringify(this.state.totalParam))
    }
  }
  //删除图片
  handleRemovePic = (picremoveparam) => {
    let arrTotalParam =  this.state.totalParam["itripImages"];
    for (var i = 0; i < arrTotalParam.length; i++){
      if (arrTotalParam[i].imgUrl == picremoveparam){
         arrTotalParam.splice(i, 1);
      }
    }
    //console.log("this.state.totalParamremove=" + JSON.stringify(this.state.totalParam))
  }
  //提交评论
  submitComment = () => {

    fetchBiz({
      url: "/comment/add",
      type: "POST",
      param: this.state.totalParam,
      callback: e => {
        //得到后台的请求数据
        console.log("添加评论==" + JSON.stringify(e.data));
        if(e.data == null) {
        hashHistory.push('/myinfo?')
        }
        }
    })

  }
  render() {
    return (
      <div className="commentpage">
        {/*酒店圖片*/}
        <Layout style={{ height: 220, textAlign: 'center', marginBottom: 20 }}>

          <Sider style={{ background: '#fff', padding: 20 }}>
            <img src={this.state.imgUrl + "_180x180.jpg"} alt="" />
          </Sider>
          {
            this.state.hotelDetail.map(function (val, i) {
              return (
                <Content>
                  <h3 className="commentHotelName" key={i}>{val.hotelName}</h3>
                  <div className="diamondWrap">
                    <DiamondIcon iconSum={val.hotelLevel} />
                  </div>
                </Content>
              )
            })
          }
        </Layout>
        {/*总体评价*/}
        <Layout style={{ height: 240, textAlign: 'center', marginBottom: 10 }}>
          <Sider style={{ background: '#fff', padding: 35, borderRight: '2px dashed #ccc' }}>总体评价</Sider>
          <Content style={{ padding: '20px' }}>
            <div className="totalCommentLeft">
              <StarComment starLeval={this.handleStarChild} />
            </div>
            <div className="totalCommentRight">
              <TotalComment totalcomment={this.handleTotalComment} />
            </div>
          </Content>
        </Layout>
        {/*点评内容*/}
        <Layout style={{ height: 240, textAlign: 'center', marginBottom: 10 }}>
          <Sider style={{ background: '#fff', padding: 35, borderRight: '2px dashed #ccc' }}>点评内容</Sider>
          <Content style={{ padding: '20px' }}>
            <CommentContent contentvalue={this.handleContentValue} />
          </Content>
        </Layout>
        {/*上传图片*/}
        <Layout style={{ height: 270, textAlign: 'center', marginBottom: 10 }}>
          <Sider style={{ background: '#fff', padding: 35, borderRight: '2px dashed #ccc' }}>上传图片（选填）</Sider>
          <Content style={{ padding: '20px' }}>
            <PicUpload picValue={this.handlePic} picRemove={this.handleRemovePic} />
          </Content>
        </Layout>
        {/*优点不足（选填）*/}
        <Layout style={{ height: 260, textAlign: 'center', marginBottom: 30 }}>
          <Sider style={{ background: '#fff', padding: 35, borderRight: '2px dashed #ccc' }}>出游类型</Sider>
          <Content style={{ padding: '20px' }}>
            <CommentHolType selectValue={this.handleSelect} />
          </Content>
        </Layout>
        {/*提交按鈕*/}
        <button className="commentBtn" onClick={this.submitComment}>发表点评</button>
      </div>
    )
  }
}
