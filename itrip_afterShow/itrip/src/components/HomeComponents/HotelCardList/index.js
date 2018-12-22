import React from 'react'
import HotelCard from 'components/HomeComponents/HotelCard'
import './style.css'

export default class HotelListCard extends React.Component {
  static defaultProps = {
    hotelList: []
  }

  render () {
    const hotelList = this.props.hotelList
    return (
      <div className='HotelCardList'>
        {
          hotelList.map(item => (
            <a key={item.id} className='HotelCardList-item' href="#">
              <HotelCard hotel={item} />
            </a>
          ))
        }
      </div>
    )
  }
}
