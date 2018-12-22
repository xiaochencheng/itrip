/*
* @Author: zhzbin
* @Date:   2017-05-08 10:59:56
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:37:00
*/
import React from 'react'


import video_01 from '../../common/images/video/travel/video.mp4'
import video_02 from '../../common/images/video/travel/video.webm'
import video_03 from '../../common/images/video/travel/video1.mp4'
import { fetchBiz } from '../../components/fetchUtils'
export default class Video extends React.Component {
  render() {
    return (
      <div>
        <VideoModel url="" />
        <VideoHeader hotelId={this.props.hotelId}/>
      </div>
    )
  }
}
let imgSrc = "";
/* 视频显示组件， 用于加载视频头部数据信息*/

export class VideoHeader extends React.Component {
  state={
          title: "三亚喜来登度假酒店",
          desc: "Sheraton Sanya Resort",
          subDesc: "【 亚龙湾 】国家旅游度假区，亚龙湾高尔夫球场对面",
          descMap: ["东南亚风情12311", "休闲度假", "亲子时刻", "会议酒店"],
          video_01: video_01,
          video_02: video_02
        }
  constructor(props) {
    super(props); 
    // ES6 类中函数必须手动绑定
    // this.handleClick = this.handleClick.bind(this);
    imgSrc = video_03;

  }
  componentWillMount() {
    fetchBiz({
      url: "/hotel/getvideodesc/"+this.props.hotelId,
      callback: e=> { 
        let data=e.data;
        let state=this.state;
        state["title"]=data.hotelName;
        // state["descMap"]=e.hotelFeatureList;
        state["subDesc"]=data.tradingAreaNameList;
        state["descMap"]=data.hotelFeatureList;
        this.setState(state)
      }
    })
  }

  handleClick(event) {
    document.getElementsByClassName("travel-model")[0].style["display"] = "block";
    let vm = document.getElementById("videoMessage");
    vm.play();
    // alert(" ceshi dhushu ")
  }
  render() {
    if (!this.state.descMap) {
      return <div></div>;
    }
    return (
      <div className="i-tv">
        <div className="video-plugin ">
          <div className="video-mess-body">
            <div className="video-message">
              <div className="mes-title">{this.state.title}</div>
              <div className="mes-desc">{this.state.desc}</div>
              <div className="mes-button">{this.state.subDesc}
              </div>
              <div className="mes-button">
                {this.state.descMap.map(function (item, index, arry) {
                  return " ● " + item + "    ";
                })}
              </div>
              <div className="mes-play" ><i className=" icon-play-circle" onClick={this.handleClick} /><span>查看完整视频</span></div>
            </div>
          </div>
          <video className="video" autoPlay="autoplay" preload="auto" loop="loop">
            <source src={this.state.video_02} type="video/webm" alt="" />
            <source src={this.state.video_01} type="video/mp4" alt="" />
          </video>
        </div>
      </div>

    )
  }
}

/* 用于展示弹出的数据窗口信息*/
export class VideoModel extends React.Component {
  state = {
    source: ""
  }
  componentWillMount() {
    this.setState({
      source: imgSrc
    })
    // const map = 'map'
    // fetch('http://rapapi.org/mockjsdata/18171/api/todo/list')
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(res => {
    //         this.setState({
    //             source: imgSrc
    //         })
    //     })
  }
  hideWindow(e) {
    this.refs.videoModel.style["display"] = "none";
    this.refs.vm.pause();
    this.refs.vm.currentTime = 0;
  }
  render() {
    return (
      <div className="travel-model" ref="videoModel">
        <div className="bg" />
        <div className="model-panel">
          <div className="model-header">
            <h3 className="model-title"> 观看完整视频</h3>
            <a className="model-remove">
              <i className=" icon-remove" onClick={this.hideWindow.bind(this)} />
            </a>
          </div>
          <div className="model-body">
            <video ref="vm" id="videoMessage" className="video-js vjs-default-skin" controls="false" loop preload="auto"
              width={710} height={401} src={video_03}  >
              <source src={this.state.source} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    )
  }
}
