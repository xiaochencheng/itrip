import React from 'react'
import Video from './video.js'
import HouseList from './houseList.js'
import HotelDetail from './hotelDetail.js'
import HouseFacilities from './houseFacilities.js'
import HousePolicy from './housePolicy.js'
import HouseHotelassess from './houseHotelassess.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import { Affix } from 'antd';
import { getUrlParam } from '../../components/fetchUtils'
import './index.css'
/*
	导航头部数据信息， 显示头部数据展示
 */
class DetailMain extends React.Component {
  state={
    timeId:0
  }
  scrollToTop = (e) => {
    window.removeEventListener('scroll',this.handleScroll);
    let type = e.currentTarget.type;
    let map = {
      houseList: document.getElementById("houseList"),
      hotelDetail: document.getElementById("hotelDetail"),
      hotelassess: document.getElementById("hotelassess")
    }
    document.getElementsByTagName("body")[0].scrollTop = map[type].offsetTop;

    let mapDoc = document.getElementsByClassName("hotelDetail-title");
    for (var i = 0; i < mapDoc.length; i++) {
      mapDoc[i].className = 'hotelDetail-title'
    }
    e.currentTarget.className = 'hotelDetail-title i_current';
    // window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll = (e) => {
    clearTimeout(this.state.timeId);
    if (document.getElementById("houseList")) {
      let bodyDom = document.getElementsByTagName("body")[0];
      let houseList = document.getElementById("houseList");
      let hotelDetail = document.getElementById("hotelDetail");
      let hotelassess = document.getElementById("hotelassess");
      let mapDoc = document.getElementsByClassName("i_current");
      for (var i = 0; i < mapDoc.length; i++) {
        mapDoc[i].className = 'hotelDetail-title'
      }
      if (hotelDetail.offsetTop-10 > bodyDom.scrollTop && bodyDom.scrollTop >= houseList.offsetTop-70) {
        document.getElementById("houseListId").className = 'hotelDetail-title i_current';
      }
      if (hotelassess.offsetTop-10 > bodyDom.scrollTop && bodyDom.scrollTop >= hotelDetail.offsetTop-10) {
        document.getElementById("hotelDetailId").className = 'hotelDetail-title i_current';
      }
      if (bodyDom.scrollTop >= hotelassess.offsetTop-10) {
        document.getElementById("hotelassessId").className = 'hotelDetail-title i_current';
      }
    }
  //  this.setState({
  //    timeId:setTimeout(this.handleScroll,100)
  //  })
  }
  render() {
    return (
      <div className="i-main">
        <div className="i_cost_wrap">
          <div className="i_area">
            <Affix>
              <div className="i_title clearfix">
                <a type="houseList" id="houseListId" onClick={this.scrollToTop} className="hotelDetail-title i_current">房型列表</a>
                <a type="hotelDetail" id="hotelDetailId" onClick={this.scrollToTop} className="hotelDetail-title ">酒店详情</a>
                <a type="hotelassess" id="hotelassessId" onClick={this.scrollToTop} className="hotelDetail-title ">酒店点评{/*（<b>6258</b>）*/}</a>
              </div>
            </Affix>

            <div className="i_title fixTop clearfix">
              <a href="#houseList" className>房型列表</a>
              <a href="#hotelDetail" className="i_current">酒店详情</a>
              <a href="#hotelassess" className>酒店点评（<b>6258</b>）</a>
            </div>
            <div className="i_con">
              <HouseList param={this.props.param} hotelId={this.props.hotelId} />
              <HotelDetail hotelId={this.props.hotelId} />
              <HouseFacilities hotelId={this.props.hotelId} />
              <HousePolicy hotelId={this.props.hotelId} />
              <HouseHotelassess hotelId={this.props.hotelId} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default class App extends React.Component {
  state = {
    id: getUrlParam('hotelId'),
    startTime: parseInt(getUrlParam('startTime')),
    endTime: parseInt(getUrlParam('endTime'))
  }
  render() {
    return (
      <div>
        <Video hotelId={this.state.id} />
        <DetailMain hotelId={this.state.id} param={this.state} />
      </div>
    )
  }
}
