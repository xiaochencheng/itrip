import React from 'react'

import icon1126_11 from './imgs/icon1126_11.jpg'
import icon1126_13 from './imgs/icon1126_13.jpg'
import icon1126_15 from './imgs/icon1126_15.jpg'
import icon1126_17 from './imgs/icon1126_17.jpg'
import icon1126_19 from './imgs/icon1126_19.jpg'
import icon1126_21 from './imgs/icon1126_21.jpg'
import icon1126_23 from './imgs/icon1126_23.jpg'
import icon1126_25 from './imgs/icon1126_25.jpg'
import icon1126_27 from './imgs/icon1126_27.jpg'

import i_wechat_11 from '../../common/images/icon/i_wechat_11.jpg'
import i_APP_11 from '../../common/images/icon/i_APP_11.jpg'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="i_download">
          <div className="i_area clearfix">
            <div className="i_downleft">
              <h2>下载<i />手机客户端</h2>
              <p>
                特价机票、一折酒店、出行安全保障、预约担保<br />
                最佳旅行路线、吃喝玩乐享在手
            </p>
              <a href="#">立刻下载</a>
            </div>
            <div className="i_downright">
              <div className="i_wechat">
                <img src={i_wechat_11} alt='' />
                <span>微信公众平台</span>
              </div>
              <div className="i_APP">
                <img src={i_APP_11} alt='' />
                <span>APP下载</span>
              </div>
            </div>
          </div>
        </div>

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
    )
  }
}
