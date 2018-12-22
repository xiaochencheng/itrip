import React from 'react'
import { Icon, message, Spin } from 'antd'
import HotelCardList from 'components/HomeComponents/HotelCardList'
import { postRequest, getRequest } from 'common/js/fetch'
import { hotelListUrl } from 'constants/url'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'
import './style.css'

import longImg from './haiwai.png'


export default class HomeHotel extends React.Component {
  state = {
    loading: true,
    selectedIndex: 0,
    hotelList: []
  }

  componentWillMount() {
    const { initData } = this.props
    const { selectedIndex } = this.state

    if (!initData.category.length) return

    const cityId = initData.category[selectedIndex].id

    if (initData.hotelList) {
      this.staticFlag = true
      this.setState({
        loading: false,
        hotelList: initData.hotelList
      })
      return
    }

    this.getHotelList(cityId, selectedIndex)
  }

  handleSwitchCity(cityId, selectedIndex) {
    if (this.staticFlag) return
    this.getHotelList(cityId, selectedIndex)
  }

  getHotelList(cityId, selectedIndex) {
    this.setState({
      loading: true
    })
    postRequest(hotelListUrl, {
      cityId,
      count: 6
    }).then(res => {
      if (res.success === 'true') {
        this.setState({
          loading: false,
          selectedIndex,
          hotelList: res.data
        })
      }
    }).catch(err => {
      this.setState({
        loading: false
      })
      if (err.msg || err.message) {
        message.error(err.msg || err.message)
        return
      }
      console.log(err)
    })
  }

  renderItem() {
    const { initData } = this.props
    const { selectedIndex } = this.state
    const { category } = initData

    return category.map((item, i) => (
      <li
        key={item.id}
        onClick={this.handleSwitchCity.bind(this, item.id, i)}
        className={i === selectedIndex ? 'hotelClsOn' : ''}>
        {item.name}
      </li>
    ))
  }

  handleSikpPage() {
    const { initData } = this.props
    const { selectedIndex } = this.state
    const { category } = initData

    console.log(initData);
    console.log(selectedIndex);
    console.log(category);

    /*http://localhost:3000/#/hotellist?destination=3661&checkInDate=&checkOutDate=&hotelLevel=&
    keywords=&destinationLabel=%25E8%25B4%25B9%25E5%259F%258E&category=2&_k=zg26b4*/
    if (initData.title == "热门目的地") {
      hashHistory.push('/buildingpage?');
    } else if (initData.title == "海外酒店" || initData.title == "热门城市酒店") {
      // 跳转页面 获得跳转参数 并跳转
      const query = stringify({
        destination: category[selectedIndex].id,
        destinationLabel: encodeURIComponent(category[selectedIndex].name)
      })
      hashHistory.push('/hotellist?' + query);
    }
  }

  render() {
    const { initData } = this.props
    const { hotelList, loading } = this.state

    return (
      <section className='HomeHotel'>
        <div className='HomeHotel-title'>
          <h3>{initData.title}</h3>
          <ul className='hotelCls'>
            {this.renderItem()}
          </ul>
          <a className='HomeHotel-more' href="javascript:;" onClick={this.handleSikpPage.bind(this)}>
            更多{initData.title}
            <Icon style={{ fontSize: '10px' }} type="double-right" />
          </a>
        </div>
        <div className='HomeHotel-hotelList'>
          <div className='HomeHotel-left'>
            <a href="#">
              <img width='178' height='518' src={longImg} alt="" />
            </a>
          </div>
          <div className='HomeHotel-right'>
            <Spin spinning={loading}>
              <HotelCardList hotelList={hotelList} />
            </Spin>
          </div>
        </div>
      </section>
    )
  }
}
