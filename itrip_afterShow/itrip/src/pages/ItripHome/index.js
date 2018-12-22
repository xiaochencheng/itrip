import React from 'react'
import { Carousel } from 'antd'
import TabSearch from './componentsIndex'
import './style.css'

import carousel1 from './imgs/i_banner_01.jpg'
import carousel2 from './imgs/i_banner_02.jpg'
import carousel3 from './imgs/i_banner_03.jpg'

import list01 from './imgs/sale1129.jpg'
import list02 from './imgs/sale02_1212.jpg'
import list03 from './imgs/sale03_1212.jpg'
import list04 from './imgs/sale04_1212.jpg'
import list05 from './imgs/sale05_1212.jpg'
import list06 from './imgs/sale06_1212.jpg'
import rightList01 from './imgs/sale-t1129.jpg'

import hotelList01 from './imgs/hotel279174_01_xxx1213.jpg'
import hotelList02 from './imgs/hotel279174_02_xxx1213.jpg'
import hotelList03 from './imgs/hotel279174_03_xxx1213.jpg'
import hotelList04 from './imgs/hotel279174_04_xxx1213.jpg'
import hotelList05 from './imgs/hotel279174_05_xxx1213.jpg'
import hotelList06 from './imgs/hotel279174_06_xxx1213.jpg'
import rightList02 from './imgs/jiudian_t_278518_xxx1130.jpg'
import hotelList07 from './imgs/jiudian279174_xxx1130.jpg'

import adList01 from './imgs/jd_bottom_xxx1130_11.jpg'
import adList02 from './imgs/jd_bottom_xxx1130.jpg'

import rightList03 from './imgs/ticket278518-xxx1201.jpg'

import List07 from './imgs/lygl01_0314.jpg'
import List08 from './imgs/lygl02_0314.jpg'
import List09 from './imgs/lygl03_0314.jpg'
import List10 from './imgs/lygl04_0314.jpg'
import List11 from './imgs/lygl05_0314.jpg'
import List12 from './imgs/lygl06_0314.jpg'

import adList03 from './imgs/gl_bottom_xxx1130_07.jpg'
import adList04 from './imgs/gl_bottom_xxx1130.jpg'

import icon01 from './../../common/images/icon/Ireland.jpg'
import icon02 from './../../common/images/icon/jp_jiuzhou.jpg'
import icon03 from './../../common/images/icon/jiangsulogo.jpg'
import icon04 from './../../common/images/icon/Korea.jpg'
import icon05 from './../../common/images/icon/letianlogo.jpg'
import icon06 from './../../common/images/icon/liaoning.jpg'
import icon07 from './../../common/images/icon/Liuzhou.jpg'
import icon08 from './../../common/images/icon/Nanjing.jpg'
import icon09 from './../../common/images/icon/nantong.jpg'




//首页
export default class ItripHome extends React.Component {
  componentDidMount() {
    window.runCitySelect()
    window.runCommon()
    window.runIndex()
  }
  render() {
    return (
      <div className="ItripHome">

        <div className='HomeCont1'>
          <div className="banner clearfix">
            {/* 全屏轮播部分开始 */}
            <Carousel className='CarouselIndex' autoplay>
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
            </Carousel>
            {/* 全屏轮播部分结束 */}

            {/* i-tab切换 */}
            <div className='TabSearch'>
              <TabSearch />
            </div>
          </div>
        </div>

        {/* 特卖汇开始 */}
        <div className="i-sale clearfix">
          <ul>
            <li className="i-line sale-show i-sale-wrapone">
              <a href="javascript:;">特卖汇</a>
              <div className="i-sale-one">
                <div className="i-sale-top clearfix">
                  <a className="i-sale-cur" href="javascript:;">精选</a>
                  <a href="javascript:;">周边当地游</a>
                  <a href="javascript:;">当地玩乐</a>
                  <a className="i-sale-more" href="#">更多优惠特卖 &gt;</a>
                </div>
                {/* 1 */}
                <div className="sale-con i_show">
                  <ul className="i-sale-con clearfix">
                    <li>
                      <a href="javascript:;">
                        <img src={list01} height={255} width={279} alt />
                        <div className="i-sale-p">
                          <h3>台湾环岛8日7晚跟团游.有机会品尝哈根达斯冰激凌</h3>
                          <p>五星航空台湾环岛8日+3晚五花酒店+温泉酒店+特色酒店+苏花火车
                          全球五星级航空公司【港龙、国泰】专业承载，更有机会品尝哈根达斯冰激凌！</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img src={list02} height={255} width={279} alt />
                        <div className="i-sale-p">
                          <h3>巴厘岛7日5晚自由行</h3>
                          <p>【秒杀】五星豪庭，三星价格1月特惠。初冬的期盼，暖流的感动。</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img src={list03} height={255} width={279} alt />
                        <div className="i-sale-p">
                          <h3>韩国首尔5日4晚跟团游</h3>
                          <p>【好评如潮】寒假预售商圈五花，2整天自由，赠送乐天世界门票，八色烤肉</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img src={list04} height={255} width={279} alt />
                        <div className="i-sale-p">
                          <h3>马尔代夫6日自由行·6日4晚</h3>
                          <p>往返含税机票，全球顶级海岛蜜月婚纱圣地</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img src={list05} height={255} width={279} alt />
                        <div className="i-sale-p">
                          <h3>香港5日自由行·仅含往返机票</h3>
                          <p>星光大道+天星小轮+太平山顶+维多利亚港领略动感之都的魅力</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img src={list06} height={255} width={279} alt />
                        <div className="i-sale-p">
                          <h3>新加坡5日4晚自由行</h3>
                          <p>新加坡5日4晚自由行【错峰周末游】赠送价值800元机场往返专车接送，1晚金沙奢华体验，独享360°无边泳池，一场视觉饕餮盛宴。</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="i-sale-tg">
                    <a href="#"><img src={rightList01} alt /></a>
                  </div>
                </div>
               
              </div>
            </li>
            <li className="i-sale-wraptwo">
              <a href="javascript:;">出境旅游</a>
              
            </li>
            <li className="i-sale-wrapthree">
              <a href="javascript:;">国内旅游</a>
              
            </li>
          </ul>
        </div>

        {/* 酒店开始 */}
        <div className="i-sale i-hotel clearfix">
          <ul>
            <li className="i-line sale-show i-sale-wrapone">
              <a href="javascript:;">海外酒店</a>
              <div className="i-sale-one">
                <div className="i-sale-top clearfix">
                  <a className="i-sale-cur" href="javascript:;">热门城市</a>
                  <a href="javascript:;">上海</a>
                  <a href="javascript:;">深圳</a>
                </div>
                {/* 1 */}
                <div className="sale-con i_show">
                  <ul className="i-sale-con clearfix">
                    <li>
                      <a href="javascript:;">
                        <img className="lazy" src={hotelList01} height={174} width={279} alt />
                        <h4>【巴黎】卢浮宫凯悦酒店(Hotel Du Louvre, a Hyatt Hotel Paris)</h4>
                        <span className="i-price">
                          <em>¥</em>2908 <i className="i-price-info">起</i>
                        </span>
                        <span className="item-count">已售 689</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img className="lazy" src={hotelList02} height={174} width={279} alt />
                        <h4>【东京】威斯汀酒店(The Westin Tokyo)</h4>
                        <span className="i-price">
                          <em>¥</em>2105<i className="i-price-info">起</i>
                        </span>
                        <span className="item-count">已售 536</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img className="lazy" src={hotelList03} height={174} width={279} alt />
                        <h4>【吉隆坡】千禧大酒店(Grand Millennium Kuala Lumpur)</h4>
                        <span className="i-price">
                          <em>¥</em>459<i className="i-price-info">起</i>
                        </span>
                        <span className="item-count">已售 255</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img className="lazy" src={hotelList04} height={174} width={279} alt />
                        <h4>【曼谷】索菲特曼谷素坤逸酒店(Sofitel Bangkok Sukhumvit)</h4>
                        <span className="i-price">
                          <em>¥</em>1213<i className="i-price-info">起</i>
                        </span>
                        <span className="item-count">已售 632</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img className="lazy" src={hotelList05} height={174} width={279} alt />
                        <h4>【首尔】东大门天空花园帝宫店(Hotel Skypark Kingstown dongdaemun Seoul)</h4>
                        <span className="i-price">
                          <em>¥</em>889<i className="i-price-info">起</i>
                        </span>
                        <span className="item-count">已售 365</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <img className="lazy" src={hotelList06} height={174} width={279} alt />
                        <h4>【新加坡】文华东方酒店(Mandarin Oriental Singapore)</h4>
                        <span className="i-price">
                          <em>¥</em>1025<i className="i-price-info">起</i>
                        </span>
                        <span className="item-count">已售 269</span>
                      </a>
                    </li>
                  </ul>
                  <div className="i-sale-tg">
                    <a href="#"><img className="lazy" src={rightList02} height={518} width={278} alt /></a>
                  </div>
                </div>
               
              </div>
            </li>
            <li className="i-sale-wraptwo">
              <a href="javascript:;">热门城市酒店</a>
            </li>
            <li className="i-sale-wrapthree">
              <a href="javascript:;">当季热门目的地</a>
            </li>
            <li className="i-sale-wrapfour">
              <a href="javascript:;">特色酒店推荐</a>
            </li>
          </ul>
          <div className="i-sale-hotel">
            <a className="i-sale-more" href="javascript:;">更多酒店 &gt;</a>
          </div>
        </div>
        {/* 酒店结束 */}

        {/* 酒店下方推广广告开始 */}
        <div className="i-push clearfix">
          <div className="i-push-left"><a href="#"><img className="lazy" src={adList01} height={171} width={281} alt /></a></div>
          <div className="i-push-right"><a href="#"><img className="lazy" src={adList02} height={171} width={856} alt /></a></div>
        </div>
        {/* 酒店下方推广广告结束 */}

        {/* 机票开始 */}
        <div className="i-sale i-ticket i-ticketF clearfix">
          <ul>
            <li className="i-line sale-show i-sale-wrapone">
              <a href="javascript:;">国际特价机票</a>
              <div className="i-sale-one">
                <div className="i-sale-top clearfix">
                  <a className="i-sale-cur" href="javascript:;">北京</a>
                  <a href="javascript:;">上海</a>
                  <a href="javascript:;">深圳</a>
                </div>
                {/* 1 */}
                <div className="sale-con i_show">
                  <ul className="i-sale-con clearfix">
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />纽约</p>
                        <p className="item-time">
                          12月05日 - 12月12日
                      </p>
                        <p className="item-num">
                          仅剩 264 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>885<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />新加坡</p>
                        <p className="item-time">
                          12月23日 - 12月26日
                      </p>
                        <p className="item-num">
                          仅剩 562 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>562<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />莫斯科</p>
                        <p className="item-time">
                          1月04日 - 1月09日
                      </p>
                        <p className="item-num">
                          仅剩 231 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>1027<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li className="ticket-clr">
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />罗马</p>
                        <p className="item-time">
                          12月29日 - 1月05日
                      </p>
                        <p className="item-num">
                          仅剩 120 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>653<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />圣彼得堡</p>
                        <p className="item-time">
                          1月02日 - 1月08日
                      </p>
                        <p className="item-num">
                          仅剩 89 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>369<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />法兰克福</p>
                        <p className="item-time">
                          12月28日 - 1月06日
                      </p>
                        <p className="item-num">
                          仅剩 79 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>609<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />济州岛</p>
                        <p className="item-time">
                          12月16日 - 12月23日
                      </p>
                        <p className="item-num">
                          仅剩 201 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>800<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li className="ticket-clr">
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />普吉岛</p>
                        <p className="item-time">
                          1月04日 - 1月11日
                      </p>
                        <p className="item-num">
                          仅剩 306 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>929<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />旧金山</p>
                        <p className="item-time">
                          1月11日 - 1月15日
                      </p>
                        <p className="item-num">
                          仅剩 392 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>867<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />芝加哥</p>
                        <p className="item-time">
                          1月20日 - 1月27日
                      </p>
                        <p className="item-num">
                          仅剩 216 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>689<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />多伦多</p>
                        <p className="item-time">
                          12月25日 - 1月06日
                      </p>
                        <p className="item-num">
                          仅剩 119 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>1153<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                    <li className="ticket-clr">
                      <a href="javascript:;">
                        <p className="item-pos">北京<span className="ticket-arr" />开罗</p>
                        <p className="item-time">
                          12月15日 - 12月18日
                      </p>
                        <p className="item-num">
                          仅剩 203 席
                      </p>
                        <span className="i-price">
                          <em>¥</em>1598<i className="i-price-info">起</i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="i-sale-tg">
                    <a href="javascript:;"><img className="lazy" src={rightList03} height={518} width={278} alt /></a>
                  </div>
                </div>
              </div>
            </li>
            <li className="i-sale-wraptwo">
              <a href="javascript:;">国内特价机票</a>
            </li>
          </ul>
          <div className="i-sale-hotel">
            <a className="i-sale-more" href="#">更多特价机票 &gt;</a>
          </div>
        </div>
        {/* 机票结束 */}

        {/* 攻略开始 */}
        <div className="i-sale i-idea i-ideaF clearfix">
          <ul>
            <li className="i-line sale-show">
              <a href="javascript:;">旅游攻略</a>
              <div className="i-sale-one">
                {/* 1 */}
                <div className="sale-con i_show">
                  <div className="i-idea-left">
                    <dl className="i-idea-keyword">
                      <dt>热门城市</dt>
                      <dd><a href="#">西藏</a></dd>
                      <dd><a href="#">云南</a></dd>
                      <dd><a href="#">四川</a></dd>
                      <dd><a href="#">海南</a></dd>
                      <dd><a href="#">江苏</a></dd>
                      <dd><a href="#">浙江</a></dd>
                      <dd><a href="#">新疆</a></dd>
                      <dd><a href="#">陕西</a></dd>
                      <dd><a href="#">山西</a></dd>
                      <dd><a href="#">广西</a></dd>
                      <dd><a href="#">宁夏</a></dd>
                      <dd><a href="#">河南</a></dd>
                      <dd><a href="#">湖北</a></dd>
                      <dd><a href="#">湖南</a></dd>
                      <dd><a href="#">青海</a></dd>
                      <dd><a href="#">贵州</a></dd>
                      <dd><a href="#">内蒙古</a></dd>
                      <dd><a href="#">安徽</a></dd>
                      <dd><a href="#">山东</a></dd>
                      <dd><a href="#">广东</a></dd>
                      <dd><a href="#">江西</a></dd>
                      <dd><a href="#">河北</a></dd>
                      <dd><a href="#">甘肃</a></dd>
                      <dd><a href="#">福建</a></dd>
                      <dd><a href="#">辽宁</a></dd>
                      <dd><a href="#">黑龙江</a></dd>
                    </dl>
                    <dl className="i-idea-keyword i-idea-keywordtwo">
                      <dt>热门景点</dt>
                      <dd><a href="#">丽江</a></dd>
                      <dd><a href="#">马尔代夫</a></dd>
                      <dd><a href="#">三亚</a></dd>
                      <dd><a href="#">九寨沟</a></dd>
                      <dd><a href="#">普陀山</a></dd>
                      <dd><a href="#">少林寺</a></dd>
                      <dd><a href="#">乌镇</a></dd>
                      <dd><a href="#">鼓浪屿</a></dd>
                      <dd><a href="#">九华山</a></dd>
                      <dd><a href="#">五台山</a></dd>
                      <dd><a href="#">凤凰古城</a></dd>
                      <dd><a href="#">迪拜</a></dd>
                      <dd><a href="#">灵山大佛</a></dd>
                      <dd><a href="#">世纪欢乐园</a></dd>
                      <dd><a href="#">大同悬空寺</a></dd>
                      <dd><a href="#">西湖</a></dd>
                      <dd><a href="#">周庄</a></dd>
                      <dd><a href="#">爱琴海</a></dd>
                    </dl>
                  </div>
                  <ul className="i-sale-con clearfix">
                    <li>
                      <div className="i-idea-tj">
                        <span />
                        <a href="javascript:;">
                          <img className="lazy" src={List07} height={173} width={279} alt /></a>
                      </div>
                      <h4>稻城亚丁</h4>
                      <span className="item-count">1032人去过  987人想去</span>
                    </li>
                    <li>
                      <div className="i-idea-tj">
                        <span />
                        <a href="javascript:;">
                          <img className="lazy" src={List08} height={173} width={279} alt />
                        </a>
                      </div>
                      <h4>九寨沟</h4>
                      <span className="item-count">562人去过  876想去</span>
                    </li>
                    <li>
                      <div className="i-idea-tj">
                        <span />
                        <a href="javascript:;">
                          <img className="lazy" src={List09} height={173} width={279} alt />
                        </a>
                      </div>
                      <h4>青海湖</h4>
                      <span className="item-count">721人去过  560人想去</span>
                    </li>
                    <li>
                      <div className="i-idea-tj">
                        <span />
                        <a href="javascript:;">
                          <img className="lazy" src={List10} height={173} width={279} alt />
                        </a>
                      </div>
                      <h4>乌镇</h4>
                      <span className="item-count">902人去过  683人想去</span>
                    </li>
                    <li>
                      <div className="i-idea-tj">
                        <span />
                        <a href="javascript:;">
                          <img className="lazy" src={List11} height={173} width={279} alt />
                        </a>
                      </div>
                      <h4>婺源</h4>
                      <span className="item-count">896人去过  596人想去</span>
                    </li>
                    <li>
                      <div className="i-idea-tj">
                        <span />
                        <a href="javascript:;">
                          <img className="lazy" src={List12} height={173} width={279} alt />
                        </a>
                      </div>
                      <h4>香格里拉</h4>
                      <span className="item-count">632人去过  803人想去</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:;">旅游攻略</a>
            </li>
            <li>
              <a href="javascript:;">旅游攻略</a>
            </li>
          </ul>
          <div className="i-sale-hotel">
            <a className="i-sale-more" href="javascript:;">更多旅游攻略 &gt;</a>
          </div>
        </div>
        {/* 攻略结束 */}

        {/* 攻略下方推广广告开始 */}
        <div className="i-push clearfix">
          <div className="i-push-left"><a href="#"><img className="lazy" src={adList03} height={171} width={281} alt /></a></div>
          <div className="i-push-right"><a href="#"><img className="lazy" src={adList04} height={171} width={856} alt /></a></div>
        </div>
        {/* 攻略下方推广广告结束 */}

        {/* 旅游局合作开始 */}
        <div className="i_cooperation">
          <div className="i_area">
            <div className="i_tit clearfix">
              <h2>旅游局合作</h2>
              <span><a href="javascript:;">更多旅游局合作 &gt;</a></span>
            </div>
            <div className="i_organization">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <img src={icon01} height={40} width={100} alt />
                    <p>澳大利亚旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon02} height={40} width={100} alt />
                    <p>福建旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon02} height={40} width={100} alt />
                    <p>葡萄牙旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon03} height={40} width={100} alt />
                    <p>以色列旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon04} height={40} width={100} alt />
                    <p>海南省旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon05} height={40} width={100} alt />
                    <p>南通市旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon06} height={40} width={100} alt />
                    <p>柳州旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon07} height={40} width={100} alt />
                    <p>夏威夷旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon08} height={40} width={100} alt />
                    <p>洛杉矶旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon09} height={40} width={100} alt />
                    <p>德阳市旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon03} height={40} width={100} alt />
                    <p>新西兰旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon02} height={40} width={100} alt />
                    <p>澳大利亚旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon02} height={40} width={100} alt />
                    <p>澳大利亚旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon01} height={40} width={100} alt />
                    <p>柏林旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon04} height={40} width={100} alt />
                    <p>海南省旅游局</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={icon05} height={40} width={100} alt />
                    <p>南通市旅游局</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 旅游局合作结束 */}


      </div>
    )
  }
}

