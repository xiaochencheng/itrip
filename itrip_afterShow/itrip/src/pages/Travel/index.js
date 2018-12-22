import React from 'react'
import { Carousel } from 'antd'
import './style.css'


import carousel1 from './imgs/1.jpg'
import carousel2 from './imgs/2.jpg'
import carousel3 from './imgs/3.jpg'
import carousel4 from './imgs/4.jpg'

import logoTab01 from './imgs/chujing-01.png'
import logoTab02 from './imgs/chujing-02.png'
import leftList01 from './imgs/travel-exit.png'
import picList01 from './imgs/jizhoudao.jpg'
import picList02 from './imgs/fadigang.jpg'
import picList03 from './imgs/batiya.jpg'
import picList04 from './imgs/mangu.jpg'
import picList05 from './imgs/mgda.jpg'
import picList06 from './imgs/travel-scenic-spot-01.png'

import logoTab03 from './imgs/guonei.png'
import logoTab04 from './imgs/guoneides.png'
import leftList02 from './imgs/guonei1.png'
import picList07 from './imgs/wuzhen.jpg'
import picList08 from './imgs/ermeishan.jpg'
import picList09 from './imgs/taishan.jpg'
import picList10 from './imgs/qingdao.jpg'
import picList11 from './imgs/xiamen.jpg'
import picList12 from './imgs/dishini.png'

import ad01 from './imgs/travel-ad-01.png'
import ad02 from './imgs/travel-ad-02.png'

import logoTab05 from './imgs/zhoubian-01.png'
import logoTab06 from './imgs/zhoubian-02.png'
import leftList03 from './imgs/zhoubian.png'
import picList13 from './imgs/wts.jpg'
import picList14 from './imgs/gbsz.jpg'
import picList15 from './imgs/txsz.jpg'
import picList16 from './imgs/hbbdh.jpg'
import picList17 from './imgs/ysp.jpg'
import picList18 from './imgs/chengde.png'

import logoTab07 from './imgs/dangdi-01.png'
import logoTab08 from './imgs/dangdi-02.png'
import leftList04 from './imgs/dangdi.png'
import picList19 from './imgs/ncslf.jpg'
import picList20 from './imgs/ggmz.jpg'
import picList21 from './imgs/yhy.jpg'
import picList22 from './imgs/tgy.jpg'
import picList23 from './imgs/mty.jpg'
import picList24 from './imgs/changc.png'

import ad03 from './imgs/guanggao-21.png'
import ad04 from './imgs/guanggao-22.png'



export default class Travel extends React.Component {
  render() {
    return (
      <div className='Travel'>
        <div className="travel">
          {/*主题旅游和轮播图*/}
          <div className="travel-head">
            <div className="travel-head-left">
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">主题旅游</div>
                  <div className="menu-sub">
                    <a>爸妈游</a>
                    <a>上海迪士尼</a>
                    <a>蜜月游</a>
                    <a>徒步</a>
                    <a>越野自驾</a>
                  </div>
                  <span>&gt;</span>
                  <div className="list-menu-border" />
                  <div className="menu-more">
                    <div className="menu-list">
                      <div className="menu-theme">周边旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">国内旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">国外旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">热门旅游</div>
                  <div className="menu-sub">
                    <a>北京</a>
                    <a>天津</a>
                    <a>五台山</a>
                    <a>承德</a>
                    <a>平遥</a>
                  </div>
                  <span>&gt;</span>
                  <div className="list-menu-border" />
                  <div className="menu-more">
                    <div className="menu-list">
                      <div className="menu-theme">交通方式</div>
                      <div className="menu-sub">
                        <a>巴士游 </a>|
                      <a>火车游</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">旅游天数</div>
                      <div className="menu-sub">
                        <a> 一日游 </a> |<a> 二日游 </a> |<a> 三日游 </a> |<a> 三日以上</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">特色旅游</div>
                      <div className="menu-sub">
                        温泉  |<a> 草原越野 </a> |<a> 森林氧吧 </a> |<a> 摄影之旅 </a> |<br /> <a> 亲子博物馆 </a> |<a> 海鲜美食 </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">主题公园</div>
                  <div className="menu-sub">
                    <a>上海迪士尼</a>
                    <a>北京动物园</a>
                    <a>苏州园林</a>
                  </div>
                  <span>&gt;</span>
                  <div className="list-menu-border" />
                  <div className="menu-more">
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">周边旅游</div>
                  <div className="menu-sub">
                    <a>密云</a>
                    <a>保定</a>
                    <a>怀柔</a>
                    <a>固安</a>
                    <a>燕郊</a>
                  </div>
                  <span>&gt;</span>
                  <div className="list-menu-border" />
                  <div className="menu-more">
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">国内旅游</div>
                  <div className="menu-sub">
                    <a>天津</a>
                    <a>上海</a>
                    <a>青岛</a>
                    <a>潍坊</a>
                    <a>淄博</a>
                  </div>
                  <span>&gt;</span>
                  <div className="list-menu-border" />
                  <div className="menu-more">
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">国外旅游</div>
                  <div className="menu-sub">
                    <a>美国</a>
                    <a>加拿大</a>
                    <a>新加坡</a>
                    <a>澳大利亚</a>
                    <a>非洲</a>
                  </div>
                  <span>&gt;</span>
                  <div className="list-menu-border" />
                  <div className="menu-more">
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">主题旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                        <a>徒步</a>
                        <a>越野自驾</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="travel-head-right">
              <div className="travel-search">
                <div className="search">
                  <input type="text" placeholder="景点\地区\关键词..." />
                  <button className=" icon-search" />
                </div>

                <div className="travel-shortcut">
                  热门搜索:&nbsp;&nbsp;<a>景点活动</a>&nbsp;&nbsp;&nbsp;<a>香山</a>&nbsp;&nbsp;&nbsp;<a>八达岭</a>&nbsp;&nbsp;&nbsp;<a>凤凰岭</a>&nbsp;&nbsp;&nbsp;<a>野生动物园</a>
                </div>
              </div>

              {/*轮播图*/}
              <Carousel className='travelCarousel' autoplay>
                <div>
                  <a href="javascript:;">
                    <img src={carousel1} alt="" />
                  </a>
                </div>
                <div>
                  <a href="javascript:;">
                    <img src={carousel2} alt="" />
                  </a>
                </div>
                <div>
                  <a href="javascript:;">
                    <img src={carousel3} alt="" />
                  </a>
                </div>
                <div>
                  <a href="javascript:;">
                    <img src={carousel4} alt="" />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>

          <div className="travel-body">
            {/*出境旅游*/}
            <div className="travel-overseas-body points-list">
              <div className="points-list-header">
                <div className="header-list-left">
                  <span className="icon-inland">
                    <img src={logoTab01} />
                  </span>
                  <div className="list-title">
                    出境旅游
                </div>
                  <span className="list-dis">
                    <img src={logoTab02} />
                  </span>
                </div>
                <div className="header-list-right">
                  <span>更多出境旅游 &gt;</span>
                </div>
              </div>
              <div className="points-list-body">
                {/*1*/}
                <div className="list-body-column ">
                  <div className="left-column">
                    <img src={leftList01} width='278' height='520' />
                  </div>
                </div>
                {/*2*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList01} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="韩国济州岛+首尔6日5晚跟团游(4钻)  ">
                          韩国济州岛+首尔6日5晚跟团游
                      </div>
                        <div className="cell-money">
                          ￥<span>3399</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>

                      <div className="column-image">
                        <img src={picList02} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="意大利+梵蒂冈+瑞士+法国+锡耶纳+维罗纳13日跟团游">
                          意大利+梵蒂冈+瑞士+法国...
                      </div>
                        <div className="cell-money">
                          ￥<span>13999</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                </div>
                {/*3*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList03} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="日本东京+大阪7日自由行 ">
                          日本东京+大阪7日自由行
                      </div>
                        <div className="cell-money">
                          ￥<span>5353</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList04} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="曼谷+芭提雅6日5晚自由行">
                          曼谷+芭提雅6日5晚自由行
                      </div>
                        <div className="cell-money">
                          ￥<span>3060</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
                {/*4*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList05} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="美国东西海岸+夏威夷+波士顿+纽约+华盛顿+拉斯维加斯+尼亚加拉瀑布14日11晚跟团游  ">
                          美国东西海岸+夏威夷+波士顿…
                      </div>
                        <div className="cell-money">
                          ￥<span>12187</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column column-gray">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList06} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="普吉岛7日5晚跟团游 全程5惠尽情享受！">
                          普吉岛7日5晚跟团游 全程5…
                      </div>
                        <div className="cell-money">
                          ￥<span>2669</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
              </div>
            </div>
            {/*国内旅游*/}
            <div className="travel-churchyard-body points-list">
              <div className="points-list-header">
                <div className="header-list-left">
                  <span className="icon-inland">
                    <img src={logoTab03} />
                  </span>
                  <div className="list-title">
                    国内旅游
                </div>
                  <span className="list-dis">
                    <img src={logoTab04} />
                  </span>
                </div>
                <div className="header-list-right">
                  <span>更多国内旅游 &gt;</span>
                </div>
              </div>

              <div className="points-list-body">
                {/*1*/}
                <div className="list-body-column ">
                  <div className="left-column">
                    <img src={leftList02} />
                  </div>
                </div>
                {/*2*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList07} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="上海+苏州+杭州+乌镇5日4晚跟团游    ">
                          上海+苏州+杭州+乌镇5日4…
                      </div>
                        <div className="cell-money">
                          ￥<span>3709</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList08} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="成都+九寨沟+黄龙+乐山+峨眉山7日6晚跟团游 ">
                          成都+九寨沟+黄龙+乐山+峨…
                      </div>
                        <div className="cell-money">
                          ￥<span>3563 </span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                </div>
                {/*3*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList09} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="曲阜三孔+泰山3日2晚跟团游(3钻)·6项专享 ">
                          曲阜三孔+泰山3日2晚跟团游…
                      </div>
                        <div className="cell-money">
                          ￥<span>1608</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList10} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="青岛+烟台5日自由行·青岛进烟台">
                          青岛+烟台5日自由行·青岛…
                      </div>
                        <div className="cell-money">
                          ￥<span>1520</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
                {/*4*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList11} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="鼓浪屿+厦门5日自由行·2晚鼓浪屿+2晚厦门 ">
                          鼓浪屿+厦门5日自由行…
                      </div>
                        <div className="cell-money">
                          ￥<span>1689</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column column-gray">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList12} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="上海迪士尼（Disney）3日自由行">
                          上海迪士尼（Disney）3日自由行
                      </div>
                        <div className="cell-money">
                          ￥<span>8889</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
              </div>
            </div>

            {/*广告*/}
            <div className="travel-ad-body   travelAd">
              <img src={ad01} alt='ad1' />
              <img src={ad02} alt='ad2' />
            </div>

            {/*周边当地游*/}
            <div className="travel-rim-body points-list">
              <div className="points-list-header">
                <div className="header-list-left">
                  <span className="icon-inland">
                    <img src={logoTab05} />
                  </span>
                  <div className="list-title">
                    周边当地游
                </div>
                  <span className="list-dis">
                    <img src={logoTab06} />
                  </span>
                </div>
                <div className="header-list-right">
                  <span>更多周边当地游 &gt;</span>
                </div>
              </div>
              <div className="points-list-body">
                {/*1*/}
                <div className="list-body-column ">
                  <div className="left-column">
                    <img src={leftList03} />
                  </div>
                </div>
                {/*2*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList13} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="五台山+平遥3-7日自由行·高铁往返 一次游两大世界文化遗产">
                          五台山+平遥3-7日自由行…
                      </div>
                        <div className="cell-money">
                          ￥<span>655</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList14} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="古北水镇2日1晚跟团游(4钻)·【立减！赠温泉】">
                          古北水镇2日1晚跟团游…
                      </div>
                        <div className="cell-money">
                          ￥<span>469</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                </div>
                {/*3*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList15} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="易县2日跟团游·荆轲塔、太行水镇 、易水湖  ">
                          易县2日跟团游·荆轲塔…
                      </div>
                        <div className="cell-money">
                          ￥<span>203</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList16} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="河北北戴河2日1晚跟团游·北戴河+山海关+鸽子窝火车双座火车二日游">
                          河北北戴河2日1晚跟团游…
                      </div>
                        <div className="cell-money">
                          ￥<span>501</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
                {/*4*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList17} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="野三坡2日1晚跟团游·百里峡+东湖港+玻璃栈道+十渡纯玩巴士2日 ">
                          野三坡2日1晚跟团游…
                      </div>
                        <div className="cell-money">
                          ￥<span>399</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column column-gray">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList18} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="承德避暑山庄 2日跟团游">
                          承德避暑山庄 2日跟团游…
                      </div>
                        <div className="cell-money">
                          ￥<span>665</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
              </div>
            </div>

            {/*当地旅游*/}
            <div className="travel-local-body points-list">
              <div className="points-list-header">
                <div className="header-list-left">
                  <span className="icon-inland">
                    <img src={logoTab07} />
                  </span>
                  <div className="list-title">
                    当地旅游
                </div>
                  <span className="list-dis">
                    <img src={logoTab08} />
                  </span>
                </div>
                <div className="header-list-right">
                  <span>更多当地旅游 &gt;</span>
                </div>
              </div>
              <div className="points-list-body">
                {/*1*/}
                <div className="list-body-column ">
                  <div className="left-column">
                    <img src={leftList04} />
                  </div>
                </div>
                {/*2*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList19} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="北京+鸟巢（国家体育场）+水立方（国家游泳中心）半日游">
                          北京+鸟巢（国家体育场...
                      </div>
                        <div className="cell-money">
                          ￥<span>99</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList20} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="北京1日自由行·天安门毛主席纪念堂 故宫 胡同四合院一日游">
                          北京1日自由行·天安门…
                      </div>
                        <div className="cell-money">
                          ￥<span>189</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
                {/*3*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList21} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="北京1日自由行·颐和园 圆明园 天坛公园 清华大学一日游 ">
                          北京1日自由行·颐和园…
                      </div>
                        <div className="cell-money">
                          ￥<span>169</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column ">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList22} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="天安门广场+故宫+颐和园一日游【送珍宝馆 吃海碗居老北京炸酱面】">
                          天安门广场+故宫+颐和园…
                      </div>
                        <div className="cell-money">
                          ￥<span>198</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
                {/*4*/}
                <div className="list-body-column">
                  <div className="column">
                    <div className="column-ele column-ele-first">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList23} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="慕田峪长城一日游【天天发团 成团保障 三环内上门接】 ">
                          慕田峪长城一日游…
                      </div>
                        <div className="cell-money">
                          ￥<span>170</span>起
                      </div>
                      </div>
                    </div>
                    <div className="travel-shouqing" />
                  </div>
                  <div className="column-padding" />
                  <div className="column column-gray">
                    <div className="column-ele">
                      <div className="recommend">
                        <span className="text">力推</span>
                      </div>
                      <div className="column-image">
                        <img src={picList24} />
                      </div>
                      <div className="column-desc">
                        <div className="cell-desc" title="北京八达岭长城纯玩一日游">
                          北京八达岭长城纯玩一日游…
                      </div>
                        <div className="cell-money">
                          ￥<span>336</span>起
                      </div>
                      </div>
                    </div>
                    <div className="points-shouqing" />
                  </div>
                </div>
              </div>
            </div>
            {/*广告*/}
            <div className="travel-ad-body  travelAd">
              <img src={ad03} />
              <img src={ad04} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
