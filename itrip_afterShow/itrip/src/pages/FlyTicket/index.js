import React from 'react'
import { Carousel } from 'antd'
import TabSearch from '../ItripHome/componentsIndex'
import './style.css'

import carousel1 from './imgs/fly01_banner0315.jpg'
import carousel2 from './imgs/fly02_banner0315.jpg'
import carousel3 from './imgs/fly03_banner0315.jpg'
import carousel4 from './imgs/fly04_banner0315.jpg'

import flyList1 from './imgs/flyTicket_xxx1202_10.jpg'
import flyList2 from './imgs/ftyj01_0315_03.jpg'
import flyList3 from './imgs/ftyj01_0315_05.jpg'
import flyList4 from './imgs/ftyj01_0315_07.jpg'


//首页
export default class FlyTicket extends React.Component {
  componentDidMount() {
    window.runCitySelect()
    window.runCommon()
    window.runFlyTicket()
  }
  render() {
    return (
      <div className="FlyTicket">
        {/*轮播图和选项卡*/}
        <div className='FlyCont1'>
          <div className="banner clearfix">
            {/* 全屏轮播部分开始 */}
            <Carousel className='flyCarousel' autoplay>
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
            {/* 全屏轮播部分结束 */}

            {/* i-tab切换 */}
            <div className='TabSearch'>
              <TabSearch />
            </div>
          </div>
        </div>

        {/* 机票折线图开始 */}
        <article className="clearfix">
          <div className="i-brokenline">
            <i />
            <div className="i-brokenline-wrap">
              <h3>机票价格趋势查询</h3>
              <span />
            </div>
            <div className="i-brokenlinesearch">
              <form action>
                城市 <input type="text" id="citySelect_lineone" placeholder="出发城市" />-<input type="text" id="citySelect_linetwo" placeholder="达到城市" />
                <button>搜索</button>
              </form>
            </div>
          </div>
          <div className="flodline" id="flodline">
            {/* <div id="line" style="width:822px;height:492px;"></div> */}
          </div>
        </article>
        {/* 机票折线图结束 */}

        {/* 航空公司促销开始 */}
        <article className="promotion clearfix">
          <div className="i-brokenline i-fly-sale">
            <i />
            <div className="i-brokenline-wrap">
              <h3>航空公司促销</h3>
              <span />
            </div>
            <a href='javascript:;' className="i-fly-salemore">更多促销信息 &gt;</a>
          </div>
          <ul className="i-fly-salepro">
            <li>
              <a href="javascript:;"><img src={flyList1} height={174} width={281} alt='pic1' /></a>
            </li>
            <li>
              <a href="javascript:;"><img src={flyList2} height={174} width={281} alt='pic1' /></a>
            </li>
            <li>
              <a href="javascript:;"><img src={flyList3} height={174} width={281} alt='pic1' /></a>
            </li>
            <li className="flylastli">
              <a href="javascript:;"><img src={flyList4} height={174} width={281} alt='pic1' /></a>
            </li>
          </ul>
        </article>
        {/* 航空公司促销结束 */}

        {/* 特价机票汇总开始 */}
        <article className="flyPreferential clearfix">
          <div className="i-brokenline i-fly-sale-sum">
            <i />
            <div className="i-brokenline-wrap">
              <h3>特价机票汇总</h3>
              <span />
            </div>
            <div className="i-brokenline-wrap-right">
              <div className="i-fly-sum-des">
                <select name id>
                  <option selected="selected">北京出发</option>
                  <option>上海</option>
                  <option>广州</option>
                  <option>成都</option>
                  <option>昆明</option>
                  <option>杭州</option>
                  <option>厦门</option>
                  <option>港澳台</option>
                  <option>其他城市</option>
                </select>
              </div>
              <div className="i-fly-sum-month">
                <select name id>
                  <option selected="selected">全部月份</option>
                  <option>12月</option>
                  <option>1月</option>
                  <option>2月</option>
                  <option>3月</option>
                  <option>4月</option>
                  <option>5月</option>
                </select>
              </div>
              <div className="i-fly-sum-hot">
                <a href="javascript:;">热门</a>
                <a href="javascript:;">国内特价机票</a>
                <a href="javascript:;">国外特价机票</a>
                <a href="javascript:;">亚洲</a>
                <a href="javascript:;">欧洲</a>
                <a href="javascript:;">美洲</a>
                <a href="javascript:;">非洲</a>
              </div>
              <a className="i-fly-salemore">更多特价机票 &gt;</a>
            </div>
          </div>
          <div className="i-fly-sale-detail clearfix">
            <ul>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />吉隆坡</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.54折</span>
                </a>
                <span className="price">¥16166</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />札幌</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥869</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />马尼拉</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥914</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />香港</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥946</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />新加坡</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥1046</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />兰卡威</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥1059</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />甲米</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥1087</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />曼谷</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.6折</span>
                </a>
                <span className="price">¥1093</span>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />普吉</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1139</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />胡志明市</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1178</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />清迈</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1215</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />符拉迪沃斯托克</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1246</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />巴厘岛</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1263</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />暹粒</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1269</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />斗湖</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1360</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />福冈</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.8折</span>
                </a>
                <span className="price">¥1365</span>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />广州</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥763</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />深圳</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥792</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />三亚</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥625</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />乌鲁木齐</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥625</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />上海</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥430</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />青岛</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥220</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />成都</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥770</span>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="city">北京<i />大连</span>
                  <span className="data">04月15日</span>
                  <span className="sale">0.4折</span>
                </a>
                <span className="price">¥170</span>
              </li>
            </ul>
          </div>
        </article>
        {/* 特价机票汇总结束 */}


      </div>
    )
  }
}
