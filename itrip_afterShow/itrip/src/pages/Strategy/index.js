import React from 'react'
import { Carousel } from 'antd'
import './style.css'


import carousel1 from './imgs/strategy-05.JPG'
import carousel2 from './imgs/strategy-06.JPG'
import carousel3 from './imgs/strategy-07.JPG'
import carousel4 from './imgs/strategy-08.JPG'

import strategyList1 from './imgs/strategy-00.png'
import strategyList2 from './imgs/strategy-01.png'

import strategyList3 from './imgs/strategy-02.png'
import strategypic1 from './imgs/city/aomen.JPG'
import strategypic2 from './imgs/city/chongqing.jpg'
import strategypic3 from './imgs/city/dalian.jpg'
import strategypic4 from './imgs/city/daocheng.JPG'
import strategypic5 from './imgs/city/dunhuang.jpg'
import strategypic6 from './imgs/city/gaoxing.jpg'
import strategypic7 from './imgs/city/guilin.jpg'
import strategypic8 from './imgs/city/ningxia.jpg'
import strategypic9 from './imgs/city/guiyang.jpg'
import strategypic10 from './imgs/city/hangzhou.jpg'
import strategypic11 from './imgs/city/hulunbeier.jpg'
import strategypic12 from './imgs/city/guilin.jpg'
import strategypic13 from './imgs/city/lianyungang.jpg'
import strategypic14 from './imgs/city/lijiang.JPG'
import strategypic15 from './imgs/city/nanjing.jpg'
import strategypic16 from './imgs/city/ningbo.jpg'

import strategyList4 from './imgs/strategy-03.png'
import strategypic17 from './imgs/city/pingyao.jpg'
import strategypic18 from './imgs/city/rizhao.jpg'
import strategypic19 from './imgs/city/shanghai.jpg'
import strategypic20 from './imgs/city/suzhou.jpg'
import strategypic21 from './imgs/city/taibei.jpg'
import strategypic22 from './imgs/city/weihai.jpg'
import strategypic23 from './imgs/city/wuxi.jpg'
import strategypic24 from './imgs/city/wuzhen.jpg'
import strategypic25 from './imgs/city/xiamen.jpg'
import strategypic26 from './imgs/city/xian.jpg'
import strategypic27 from './imgs/city/xianggang.JPG'
import strategypic28 from './imgs/city/xining.jpg'
import strategypic29 from './imgs/city/yangshuo.jpg'
import strategypic30 from './imgs/city/yangzhou.jpg'
import strategypic31 from './imgs/city/yili.JPG'
import strategypic32 from './imgs/city/zhangjiajie.jpg'


export default class Strategy extends React.Component {
  componentDidMount() {
    try {
      window.runCitySelect()
      window.runCommon()
      window.runStrategy()
    } catch(e) {console.log(e)}
  }
  render() {
    return (
      <div className='Strategy'>
        <div className="travel strategy">

          <div className="travel-head">
            <div className="travel-head-left">
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">主题旅游</div>
                  <div className="menu-sub">
                    <a>爸妈游</a>
                    <a>上海迪士尼</a>
                    <a>蜜月游</a>
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
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">国内旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="menu-theme">国外旅游</div>
                      <div className="menu-sub">
                        <a>爸妈游</a>
                        <a>上海迪士尼</a>
                        <a>蜜月游</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head-list-menu">
                <div className="border-hover">
                  <div className="menu-theme">热门旅游</div>
                  <div className="menu-sub">
                    <a>爸妈游</a>
                    <a>上海迪士尼</a>
                    <a>蜜月游</a>
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
                  <div className="menu-theme">主题公园</div>
                  <div className="menu-sub">
                    <a>爸妈游</a>
                    <a>上海迪士尼</a>
                    <a>蜜月游</a>
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
                    <a>爸妈游</a>
                    <a>上海迪士尼</a>
                    <a>蜜月游</a>
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
            <div className="travel-head-right strategy-center">
              <div className="travel-search">
                <div className="search">
                  <input type="text" placeholder="景点\地区\关键词..." />
                  <button className=" icon-search" />
                </div>
              </div>
              <div className='CarouselPic'>
                {/*轮播图*/}

                <div className='strategyCarousel'>
                  <Carousel autoplay>
                    <div>
                      <a href="javascript:;">
                        <img src={carousel1} alt="图片1" />
                      </a>
                    </div>
                    <div>
                      <a href="javascript:;">
                        <img src={carousel2} alt="图片2" />
                      </a>
                    </div>
                    <div>
                      <a href="javascript:;">
                        <img src={carousel3} alt="图片3" />
                      </a>
                    </div>
                    <div>
                      <a href="javascript:;">
                        <img src={carousel4} alt="图片4" />
                      </a>
                    </div>
                  </Carousel>
                </div>
                {/*轮播图右边的两张小图*/}
                <div className="strategy-right">
                  <img src={strategyList1} />
                  <br />
                  <img src={strategyList2} />
                </div>
              </div>
            </div>
          </div>

          <div className="travel-body">
            {/*地图*/}
            <div className="strategy-map">
              <div id="linkForChina" style={{ width: 740, height: 600 }} />
              <div className="localtion-mes">
                <strong>青 海</strong>
                <br />
                预计游玩人数： 1.6w人次/天   拥堵 <br />
                建议游玩：4-10天
              <br />
                <br />
                茶卡盐湖   可可西里   孟达天池   互助北山   金银滩
              <br />
                <br />
                年保玉则   同仁   三江源
              <br />
                <br />
                <p>
                  青海省为我国青藏高原上的重要省份之一，因境内有全国最大的内陆咸水湖──青海湖，而得省名。
              </p>
                <br />
                <br />
                <p>
                  青海湖是中国最大的内陆咸水湖，面积4573平方公里，湖面高出海平面3,260米，是泰山顶峰的2倍。
              </p>
                <br />
                <br />
                <p>
                  最佳季节：5月-10月适宜。青海是高原大陆性气候，春秋两季有沙尘污染，形成扬尘天气。7月的青海湖边有大片油菜花，黄色的花海和一望无际的蓝色湖水，景色美不胜收，那时的气温不超过18摄氏度，气候舒适宜人。
              </p>
              </div>
            </div>
            {/*月度推荐*/}
            <div className="strategy-list">
              <div className="strategy-list-header">
                <div>
                  月度推荐 <span> ● </span><span>开启滑雪之旅，这个冬天不太冷</span>
                </div>
                <img src={strategyList3} />
              </div>

              <div className="strategy-list-body">
                <div className="strategy-tabs">
                  <ul className="tabs-header">
                    <li><span>一月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>二月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>三月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>四月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li className="active"><span>五月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>六月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>七月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>八月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>九月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>十月</span> <span className=" icon-tra" /><span>●</span></li>
                    <li><span>十一月</span> <span className="icon-tra" /><span>●</span></li>
                    <li><span>十二月</span> <span className="icon-tra" /><span>●</span></li>
                  </ul>
                  <div className="tabs-body">
                    <a href='javascript:;'><img src={strategypic1}/><div>澳门</div></a>
                    <a href='javascript:;'><img src={strategypic2} /><div>重庆</div></a>
                    <a href='javascript:;'><img src={strategypic3} /><div>大连</div></a>
                    <a href='javascript:;'><img src={strategypic4}  /><div>稻城</div></a>
                    <a href='javascript:;'><img src={strategypic5}  /><div>敦煌</div></a>
                    <a href='javascript:;'><img src={strategypic6}  /><div>高雄</div></a>
                    <a href='javascript:;'><img src={strategypic7} /><div>桂林</div></a>
                    <a href='javascript:;'><img src={strategypic8} /><div>宁夏</div></a>
                    <br />
                    <a href='javascript:;'><img src={strategypic9} /><div>贵阳</div></a>
                    <a href='javascript:;'><img src={strategypic10} /><div>杭州</div></a>
                    <a href='javascript:;'><img src={strategypic11} /><div>呼伦贝尔</div></a>
                    <a href='javascript:;'><img src={strategypic12} /><div>吉林</div></a>
                    <a href='javascript:;'><img src={strategypic13} /><div>连云港</div></a>
                    <a href='javascript:;'><img src={strategypic14} /><div>丽江</div></a>
                    <a href='javascript:;'><img src={strategypic15} /><div>南京</div></a>
                    <a href='javascript:;'><img src={strategypic16} /><div>宁波</div></a>
                  </div>
                </div>
              </div>
            </div>
            {/*热门目的地*/}
            <div className="strategy-list">
              <div className="strategy-list-header">
                <div>
                  热门目的地 <span> ● </span><span>走过多少地方 最美的还是这里</span>
                </div>
                <img src={strategyList4} />
              </div>
              <div className="strategy-list-body localtion">
                <div className="strategy-tabs">
                  <ul className="tabs-header">
                    <li className="active"><span>当季游玩</span> </li>
                    <li><span>温馨蜜月</span> </li>
                    <li><span>海岛撒欢</span> </li>
                    <li><span>血拼购物</span> </li>
                  </ul>
                  <div className="tabs-body">
                    <a href='javascript:;'><img src={strategypic17} /><div>平遥</div></a>
                    <a href='javascript:;'><img src={strategypic18} /><div>日照</div></a>
                    <a href='javascript:;'><img src={strategypic19} /><div>上海</div></a>
                    <a href='javascript:;'><img src={strategypic20} /><div>苏州</div></a>
                    <a href='javascript:;'><img src={strategypic21} /><div>台北</div></a>
                    <a href='javascript:;'><img src={strategypic22} /><div>威海</div></a>
                    <a href='javascript:;'><img src={strategypic23} /><div>无锡</div></a>
                    <a href='javascript:;'><img src={strategypic24} /><div>乌镇</div></a>
                    <br />
                    <a href='javascript:;'><img src={strategypic25} /><div>厦门</div></a>
                    <a href='javascript:;'><img src={strategypic26} /><div>西安</div></a>
                    <a href='javascript:;'><img src={strategypic27} /><div>香港</div></a>
                    <a href='javascript:;'><img src={strategypic28} /><div>西宁</div></a>
                    <a href='javascript:;'><img src={strategypic29} /><div>阳朔</div></a>
                    <a href='javascript:;'><img src={strategypic30}/><div>扬州</div></a>
                    <a href='javascript:;'><img src={strategypic31} /><div>伊犁</div></a>
                    <a href='javascript:;'><img src={strategypic32} /><div>张家界</div></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
