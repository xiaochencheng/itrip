import React from 'react'
import { Tabs, Radio } from 'antd'

const TabPane = Tabs.TabPane;



export default class TabSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  render() {
    const { mode } = this.state;
    return (
      <div className="i_area">
        <ol class="lb" >
          <li class="li_1 cur"></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
        <div className="i_tab">
          <ul className="i_tab_l ">
            <li className="cur show  clearfix">
              <a href="javascript:;">旅游</a>
              <div className="i_tab_r">
                <div className="i_box">
                  <div className="ititle">
                    <a href="javascript:;" className="line">特卖汇</a>
                    <a href="javascript:;">出境旅游</a>
                    <a href="javascript:;">国内旅游</a>
                  </div>
                  {/*1*/}
                  <div className="discount i_show">
                    <form action>
                      <div className="i_destin">目的地  <input type="text" id="citySelect_one" placeholder="三亚" /></div>
                      <div className="i_live">
                        入住时间  <input className="Wdate" type="text" placeholder="2016.12待定" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                        退房时间  <input type="text" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank">
                        酒店级别  <select name id>
                          <option selected="selected" value={0}>不限</option>
                          <option value={5}>五星级/豪华</option>
                          <option value={4}>四星级/高档</option>
                          <option value={3}>三星级/舒适</option>
                          <option value={2}>二星级以下/经济</option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                        <div className="i_key">
                          <a href>温泉</a>、<a href>亲子</a>、<a href>自由行</a>、<a href>名胜古迹</a>、<a href>都市购物</a>
                        </div>
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*2*/}
                  <div className="discount">
                    <form action>
                      <div className="i_destin">目的地  <input type="text" id="citySelect_two" placeholder="三亚" /></div>
                      <div className="i_live">
                        入住时间  <input type="text" placeholder="2016.12待定" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                        退房时间  <input type="text" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank">
                        酒店级别  <select name id>
                          <option selected="selected">不限</option>
                          <option>五星级/豪华</option>
                          <option>四星级/高档</option>
                          <option>三星级/舒适</option>
                          <option>二星级以下/经济</option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                        <div className="i_key">
                          <a href="#">泰国</a>、<a href="#">马尔代夫</a>、<a href="#">夏威夷</a>、<a href="#">美国</a>、<a href="#">东南亚</a>
                        </div>
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*3*/}
                  <div className="discount">
                    <form action>
                      <div className="i_destin">目的地  <input type="text" id="citySelect_three" placeholder="三亚" /></div>
                      <div className="i_live">
                        入住时间  <input type="text" placeholder="2016.12待定" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                        退房时间  <input type="text" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank">
                        酒店级别  <select name id>
                          <option selected="selected">不限</option>
                          <option>五星级/豪华</option>
                          <option>四星级/高档</option>
                          <option>三星级/舒适</option>
                          <option>二星级以下/经济</option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                        <div className="i_key">
                          <a href="#">三亚</a>、<a href="#">厦门</a>、<a href="#">山东</a>、<a href="#">桂林</a>、<a href="#">东北</a>
                        </div>
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
            <li className="hotel clearfix">
              <a href="javascript:;">酒店</a>
              <div className="i_tab_r">
                <div className="i_box">
                  <div className="ititle">
                    <a href="javascript:;" className="line">国内酒店</a>
                    <a href="javascript:;">海外酒店</a>
                    <a href="javascript:;">酒店团购</a>
                  </div>
                  {/*1*/}
                  <div className="discount i_show">
                    <form action>
                      <div className="i_destin">目的地  <input type="text" id="citySelect_four" placeholder="三亚" /></div>
                      <div className="i_live">
                        入住时间  <input type="text" placeholder="2016.12待定" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                        退房时间  <input type="text" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank">
                        酒店级别  <select name id>
                          <option selected="selected">不限</option>
                          <option>五星级/豪华</option>
                          <option>四星级/高档</option>
                          <option>三星级/舒适</option>
                          <option>二星级以下/经济</option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                        <div className="i_key">
                          <a href>温泉</a>、<a href>亲子</a>、<a href>自由行</a>、<a href>名胜古迹</a>、<a href>都市购物</a>
                        </div>
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*2*/}
                  <div className="discount">
                    <form action>
                      <div className="i_destin">目的地  <input type="text" id="citySelect_five" placeholder="三亚" /></div>
                      <div className="i_live">
                        入住时间  <input type="text" placeholder="2016.12待定" />
                        退房时间  <input type="text" />
                      </div>
                      <div className="i_rank">
                        每间住客数  <select name id>
                          <option value={1}> 1成人 </option>
                          <option value={2} selected="selected"> 2成人 </option>
                          <option value={3}> 3成人 </option>
                          <option value={4}> 4成人 </option>
                          <option value={5}> 5成人 </option>
                          <option value={6}> 6成人 </option>
                          <option value={7}> 7成人 </option>
                          <option value={8}> 8成人 </option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                      </div>
                      <button className="i_btn i_btn_hai">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*3*/}
                  <div className="discount">
                    <form action>
                      <div className="i-city">
                        <p>
                          <span>热门城市：</span>
                          <a href="#">上海</a>
                          <a href="#">广州</a>
                          <a href="#">深圳</a>
                          <a href="#">北京</a>
                          <a href="#">成都</a>
                          <a href="#">杭州</a>
                          <a href="#">苏州</a>
                          <a href="#">青岛</a>
                        </p>
                        <p>
                          <span>热门团购：</span>
                          <a href="#">度假公寓</a>
                          <a href="#">别墅轰趴</a>
                          <a href="#">住店游玩</a>
                          <a href="#">情侣酒店</a>
                          <a href="#">火车票专享</a>
                        </p>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="(选填)商圈/景区/酒店品牌/酒店名称/关键字" />
                      </div>
                      <div className="keyword">
                        目的地 <input type="text" />
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
            <li className="fly clearfix">
              <a href="javascript:;">机票</a>
              <div className="i_tab_r">
                <div className="i_box">
                  <div className="ititle">
                    <a href="javascript:;" className="line">国内机票</a>
                    <a href="javascript:;">国际机票</a>
                    <a href="javascript:;">发现低价</a>
                  </div>
                  {/*1*/}
                  <div className="discount i_show">
                    <form action>
                      <div className="i_destin i_hang">航程类型
                        <label>
                          <input name="flightway" defaultChecked="checked" type="radio" />单程
                        </label>
                        <label>
                          <input name="flightway" type="radio" />往返
                        </label>
                        <label>
                          <input name="flightway" type="radio" />多程
                        </label>
                      </div>
                      <div className="i_live">
                        出发城市  <input type="text" placeholder="北京" />第一程日期  <input type="text" placeholder="yy-mm-dd" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank i_live">
                        中转城市  <input type="text" placeholder="上海" />第二程日期  <input type="text" placeholder="yy-mm-dd" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="keyword i-fly-keyword">
                        到达城市 <input type="text" placeholder="广州" />
                        <div className="i_key">
                          <a href>温泉</a>、<a href>亲子</a>、<a href>自由行</a>、<a href>名胜古迹</a>、<a href>都市购物</a>
                        </div>
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*2*/}
                  <div className="discount">
                    <form action>
                      <div className="i_destin i_hang">航程类型
                        <label>
                          <input name="flightway" defaultChecked="checked" type="radio" />单程
                        </label>
                        <label>
                          <input name="flightway" type="radio" />往返
                        </label>
                        <label>
                          <input name="flightway" type="radio" />多程
                        </label>
                      </div>
                      <div className="i_live">
                        入住时间  <input type="text" placeholder="2016.12待定" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                        退房时间  <input type="text" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank">
                        每间住客数  <select name id>
                          <option value={1}> 1成人 </option>
                          <option value={2} selected="selected"> 2成人 </option>
                          <option value={3}> 3成人 </option>
                          <option value={4}> 4成人 </option>
                          <option value={5}> 5成人 </option>
                          <option value={6}> 6成人 </option>
                          <option value={7}> 7成人 </option>
                          <option value={8}> 8成人 </option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                      </div>
                      <button className="i_btn i_btn_hai">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*3*/}
                  <div className="discount">
                    <form action>
                      <div className="i-city">
                        <p>
                          <span>热门城市：</span>
                          <a href="#">上海</a>
                          <a href="#">广州</a>
                          <a href="#">深圳</a>
                          <a href="#">北京</a>
                          <a href="#">成都</a>
                          <a href="#">杭州</a>
                          <a href="#">苏州</a>
                          <a href="#">青岛</a>
                        </p>
                        <p>
                          <span>热门团购：</span>
                          <a href="#">度假公寓</a>
                          <a href="#">别墅轰趴</a>
                          <a href="#">住店游玩</a>
                          <a href="#">情侣酒店</a>
                          <a href="#">火车票专享</a>
                        </p>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="(选填)商圈/景区/酒店品牌/酒店名称/关键字" />
                      </div>
                      <div className="keyword">
                        目的地 <input type="text" />
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
            <li className="ticket clearfix">
              <a href="javascript:;">门票</a>
              <div className="i_tab_r">
                <div className="discount i-ticket">
                  <form action>
                    <div className="i-city">
                      <p>
                        <span>热门城市：</span>
                        <a href="#">上海</a>
                        <a href="#">广州</a>
                        <a href="#">深圳</a>
                        <a href="#">北京</a>
                        <a href="#">成都</a>
                        <a href="#">杭州</a>
                        <a href="#">苏州</a>
                        <a href="#">青岛</a>
                      </p>
                      <p>
                        <span>热门活动: </span>
                        <a href="#">门票特权日</a>
                        <a href="#">早秋赏景</a>
                        <a href="#">国庆提前订</a>
                        <a href="#">旅行WiFi</a>
                        <a href="#">日本旅行卡</a>
                      </p>
                      <p>
                        <span>热门团购：</span>
                        <a href="#">度假公寓</a>
                        <a href="#">别墅轰趴</a>
                        <a href="#">住店游玩</a>
                        <a href="#">情侣酒店</a>
                        <a href="#">火车票专享</a>
                      </p>
                      <p>
                        <span>热门推荐: </span>
                        <a href="#">东方盐湖城</a>
                        <a href="#">长隆海洋王国</a>
                        <a href="#">圆明园</a>
                        <a href="#">印象武隆</a>
                      </p>
                    </div>
                    <div className="keyword">
                      关键词 <input type="text" placeholder="(选填)商圈/景区/酒店品牌/酒店名称/关键字" />
                    </div>
                    <div className="keyword">
                      目的地 <input type="text" id="citySelect_six" />
                    </div>
                    <button className="i_btn">搜索行程 &gt;</button>
                  </form>
                </div>
              </div>
            </li>
            <li className="idea clearfix">
              <a href="javascript:;">攻略</a>
              <div className="i_tab_r">
                <div className="i_box">
                  <div className="ititle">
                    <a href="javascript:;" className="line">热门游记</a>
                    <a href="javascript:;">精华游记</a>
                    <a href="javascript:;">行程计划</a>
                  </div>
                  {/*1*/}
                  <div className="discount i_show">
                    <form action>
                      <div className="i-city i-idea">
                        <p>
                          <span>热门城市：</span>
                          <a href="#">上海</a>
                          <a href="#">广州</a>
                          <a href="#">深圳</a>
                          <a href="#">北京</a>
                          <a href="#">成都</a>
                          <a href="#">杭州</a>
                          <a href="#">苏州</a>
                          <a href="#">青岛</a>
                        </p>
                        <p>
                          <span>热门活动: </span>
                          <a href="#">门票特权日</a>
                          <a href="#">早秋赏景</a>
                          <a href="#">国庆提前订</a>
                          <a href="#">旅行WiFi</a>
                          <a href="#">日本旅行卡</a>
                        </p>
                        <p>
                          <span>热门团购：</span>
                          <a href="#">度假公寓</a>
                          <a href="#">别墅轰趴</a>
                          <a href="#">住店游玩</a>
                          <a href="#">情侣酒店</a>
                          <a href="#">火车票专享</a>
                        </p>
                        <p>
                          <span>热门推荐: </span>
                          <a href="#">东方盐湖城</a>
                          <a href="#">长隆海洋王国</a>
                          <a href="#">圆明园</a>
                          <a href="#">印象武隆</a>
                        </p>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="(选填)商圈/景区/酒店品牌/酒店名称/关键字" />
                      </div>
                      <div className="keyword">
                        目的地 <input type="text" id="citySelect_six" />
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*2*/}
                  <div className="discount">
                    <form action>
                      <div className="i_destin">目的地  <input type="text" id="citySelect_five" placeholder="三亚" /></div>
                      <div className="i_live">
                        入住时间  <input type="text" placeholder="2016.12待定" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                        退房时间  <input type="text" className="Wdate" onfocus="WdatePicker({doubleCalendar:true,dateFmt:'yyyy-MM-dd'})" />
                      </div>
                      <div className="i_rank">
                        每间住客数  <select name id>
                          <option value={1}> 1成人 </option>
                          <option value={2} selected="selected"> 2成人 </option>
                          <option value={3}> 3成人 </option>
                          <option value={4}> 4成人 </option>
                          <option value={5}> 5成人 </option>
                          <option value={6}> 6成人 </option>
                          <option value={7}> 7成人 </option>
                          <option value={8}> 8成人 </option>
                        </select>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="海岛" />
                      </div>
                      <button className="i_btn i_btn_hai">搜索行程 &gt;</button>
                    </form>
                  </div>
                  {/*3*/}
                  <div className="discount">
                    <form action>
                      <div className="i-city">
                        <p>
                          <span>热门城市：</span>
                          <a href="#">上海</a>
                          <a href="#">广州</a>
                          <a href="#">深圳</a>
                          <a href="#">北京</a>
                          <a href="#">成都</a>
                          <a href="#">杭州</a>
                          <a href="#">苏州</a>
                          <a href="#">青岛</a>
                        </p>
                        <p>
                          <span>热门团购：</span>
                          <a href="#">度假公寓</a>
                          <a href="#">别墅轰趴</a>
                          <a href="#">住店游玩</a>
                          <a href="#">情侣酒店</a>
                          <a href="#">火车票专享</a>
                        </p>
                      </div>
                      <div className="keyword">
                        关键词 <input type="text" placeholder="(选填)商圈/景区/酒店品牌/酒店名称/关键字" />
                      </div>
                      <div className="keyword">
                        目的地 <input type="text" />
                      </div>
                      <button className="i_btn">搜索行程 &gt;</button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
