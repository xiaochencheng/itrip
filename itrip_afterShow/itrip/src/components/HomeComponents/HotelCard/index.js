import React from 'react'
import { hashHistory } from 'react-router'
import './style.css'

export default class HotelCard extends React.Component {

  addSuffix(imgUrl) {
    // return imgUrl.replace(/\.(jpe?g|gif)$/, '_500x500.$1')
    return imgUrl + '_276x180.jpg'
  }

  handleClick = (e, id) => {
    e.preventDefault();
    hashHistory.push('/hoteldetail?hotelId=' + id)
  }

  render () {
    const hotel = this.props.hotel
    
    return (
      <div className="HotelCard" onClick={e => this.handleClick(e, hotel.id)}>
        <div className='HotelCard-img'>
          <img src={hotel.staticImgUrl ? require(hotel.imgUrl) : this.addSuffix(hotel.imgUrl)} alt=""/>
          {/*<i className='iconfont icon-sanjiao'/>
          <span>返现</span>*/}
        </div>
        <div className='HotelCard-desc'>
          <p className='hotelPName'>{hotel.hotelName}</p>
          <p>
            <span>￥</span>
            <b>{hotel.minPrice}</b>
            <span>起</span>
          </p>
        </div>
      </div>
    )
  }
}
