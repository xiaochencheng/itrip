import React from 'react'
import { Carousel } from 'antd'
import './style.css'

// temp
import carousel1 from './imgs/1.jpg'
import carousel2 from './imgs/2.jpg'
import carousel3 from './imgs/3.jpg'

export default class HotelCarousel extends React.Component {
  render () {
    return (
      <div className='HotelCarousel'>
        <Carousel autoplay>
          <div>
            <a href="#">
              <img src={carousel1} alt=""/>
            </a>
          </div>
          <div>
            <a href="#">
              <img src={carousel2} alt=""/>
            </a>
          </div>
          <div>
            <a href="#">
              <img src={carousel3} alt=""/>
            </a>
          </div>
        </Carousel>
      </div>
    )
  }
}
