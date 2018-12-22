import React from 'react'

import travelAd01 from './img/travel-ad-01.png'
import travelAd02 from './img/travel-ad-02.png'


export default class HomeAd extends React.Component {
  render() {
    return (
      <div>
        <div className="travel-ad-body " style={{ marginLeft: '-5px' }}>
          <img src={travelAd01} alt='' />
          <img src={travelAd02} alt='' />
        </div>

      </div>
    )
  }
}
