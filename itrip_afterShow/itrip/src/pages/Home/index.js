import React from 'react'
import { Row, Col, Spin, message } from 'antd'
import SearchHotelTravel from 'containers/SearchHotelTravel'
import HotelCarousel from 'components/HomeComponents/HotelCarousel'
import HomeHotel from 'components/HomeComponents/HomeHotel'
import HomeRecommend from 'components/HomeComponents/HomeRecommend'
import HomeAd from 'components/HomeComponents/HomeAd'
import { postRequest, getRequest } from 'common/js/fetch'
import { hotelCityUrl, foreignHotelCityUrl, featureHotelUrl} from 'constants/url'
import home from 'constants/home'
import './style.css'

const { hotDestination } = home.hotel

export default class Home extends React.Component {
 
  state = {
    loadding: true,
    foreignHotel: {
      title: '海外酒店',
      category: []
    },
    hotHotel: {
      title: '热门城市酒店',
      category: []
    },
    featureHotel: []
  }
  componentWillMount () {
    const { foreignHotel, hotHotel } = this.state

    // 酒店列表
    Promise.all([
      getRequest(foreignHotelCityUrl),
      getRequest(hotelCityUrl)
   ]) .then(resArray => {
     this.setState({
       loadding: false,
       foreignHotel: {
         ...foreignHotel,
         ...{
           category: resArray[0].data
         }
       },
       hotHotel: {
         ...hotHotel,
         ...{
           category: resArray[1].data
         }
       }
     })
    }).catch(err => {
      if (err.msg || err.message) {
        message.error(err.msg || err.message)
        return
      }
      console.log(err)
    })

    // 特色酒店
    getRequest(featureHotelUrl).then(res => {
      this.setState({
        featureHotel: res.data
      })
    }).catch(err => {
      if (err.msg || err.message) {
        message.error(err.msg || err.message)
        return
      }
      console.log(err)
    })
  }

  render() {
    const { loadding, foreignHotel, hotHotel, featureHotel } = this.state

    return (
      <div className='home'>
        <Row>
          <Col span={10}>
            <SearchHotelTravel />
          </Col>
          <Col span={14}>
            <div className='home-carousel'>
              <HotelCarousel />
            </div>
          </Col>
        </Row>

        <div className='home-homeHotel'>
          {loadding ? <Spin size="large" /> : <HomeHotel initData={foreignHotel} />}
        </div>
        
        <div className='home-homeHotel'>
          {loadding ? <Spin size="large" /> : <HomeHotel initData={hotHotel} />}
        </div>

        <div className='hmoe-ad'>
          <HomeAd />
        </div>

        <div className='home-hotDestination'>
          <HomeHotel initData={hotDestination} />
        </div>

        <div className='homr-recommend'>
          <HomeRecommend accordionTitles={featureHotel}/>
        </div>
      </div>
    )
  } 
}
