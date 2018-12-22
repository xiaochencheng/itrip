import React from 'react'
import './style.css'

import icon1126_11 from './imgs/icon1126_11.jpg'
import icon1126_13 from './imgs/icon1126_13.jpg'
import icon1126_15 from './imgs/icon1126_15.jpg'
import icon1126_17 from './imgs/icon1126_17.jpg'
import icon1126_19 from './imgs/icon1126_19.jpg'
import icon1126_21 from './imgs/icon1126_21.jpg'
import icon1126_23 from './imgs/icon1126_23.jpg'
import icon1126_25 from './imgs/icon1126_25.jpg'
import icon1126_27 from './imgs/icon1126_27.jpg'



export default class LoginFooter extends React.Component {
  render() {
    return (
      <div>
      <div className='LoginFooter'>
        <div className="i-footer clearfix">
          <div className="i-footer-wrap">
            <p>Copyright©1999-2016, ctrip.com. All rights reserved. | <a href="#">ICP证：沪B2</a></p>
            <p><span className="i-footer-hui" />沪公网备310105020000xx号</p>
            <p>旅游违法行为举报电话12318 丨服务质量投诉电话 962020 丨<a href="#">北京市旅游网站落实诚信建设主体责任承诺书</a></p>
            <ul>
              <li><a href="#"><img src={icon1126_11} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_13} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_15} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_17} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_19} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_21} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_23} height={32} width={88} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_25} height={32} width={128} alt="" /></a></li>
              <li><a href="#"><img src={icon1126_27} height={32} width={102} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
