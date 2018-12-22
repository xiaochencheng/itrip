import React from 'react'
import { Radio, Checkbox } from 'antd';
const RadioGroup = Radio.Group;
import { fetchBiz, fetchSearch } from 'components/fetchUtils'
import SearchHotelItem from 'components/HotelList/SearchHotelItem'
import './style.css'


const options = [
  { label: '¥150以下', value: '150' },
  { label: '¥150-300', value: '300' },
  { label: '¥301-450', value: '450' },
  { label: '¥451以上', value: '451' },
  { label: '不限', value: '0' }
];
const optionsWithDisabled = [
  { label: '一星级/经济', value: '1' },
  { label: '二星级/舒适', value: '2' },
  { label: '三星级/舒适', value: '3' },
  { label: '四星级/高档', value: '4' },
  { label: '五星级/高档', value: '5' },
   { label: '不限', value: '' }
];
//列表页导航下方 搜索选项组件
export default class ListOption extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      hotelFeature: {},
      requestData: {},
      paramForm: {},
      paramArea: {},
      tradeAreaSearchData: {},
      priceSearchData: {},
      hotelLevelSearhData: {},
      hotelFeatureSearchData: {},
      handleSearchChild: (datas, values, tradeAreaValue) => {
        /*console.log("datas=" + JSON.stringify(datas) )
        console.log("values=" + JSON.stringify(values) )
        console.log("tradeAreaValue=" + JSON.stringify(tradeAreaValue) )*/
        this.changeDate(datas, values, tradeAreaValue);
        this.setState({
          destination: values.destination
        })
      }
    }
  }
  changeDate = (datas, values, tradeAreaValue) => {
    // console.log("takeData" + JSON.stringify(datas.rows));
    // console.log("tradearea====" + JSON.stringify(tradeAreaValue));
    // console.log("valuesOption11 = " + JSON.stringify(values));
    this.props.dataChild(datas, values );

    //表单和商圈的相关信息
    this.setState({
      paramForm: values,
      paramArea: tradeAreaValue
    })
    //根据后台数据生成位置选项
    this.optionnode(tradeAreaValue);
  }
  //耗时操作放在这里面
  componentWillMount() {
    fetchBiz({
      url: "/hotel/queryhotelfeature",
      callback: (e) => {
        // console.log("queryhotelfeature=" + e.data)
        this.featureNode(e.data);
      }
    })

    //this.props.dataChild(datas, values );
   // console.log ("this.state.paramForm完善=="+ JSON.stringify(this.props.dataChild(datas, values )) )
    console.log ("this.state.paramForm完善feartureId=="+ JSON.stringify(this.props.dataChild) )
  }

/*  componentWillMount() {
    console.log ("this.state.paramForm完善=="+ JSON.stringify(this.state.paramForm) )
  }*/

  //改变位置事件(商圈的事件)
  onChange1 = (checkedValues) => {
    this.state.paramForm["tradeAreaIds"] = checkedValues.join();
    //拿到数据
    console.log(this.state.paramForm);
    //链接商圈之后向后台接口请求数据
    fetchSearch({
      url: "/hotellist/searchItripHotelPage",
      type: "POST",
      param: this.state.paramForm,
      callback: e => {
        //得到后台的请求数据
        console.log("连接商圈==" + JSON.stringify(e.data));
        //根据请求的后台数据改变状态值
        this.setState({
          tradeAreaSearchData: e.data
        })
        // 将请求数据传递给父组件
        // 通过回调函数中改变的状态值
        // 参数列表是：根据商圈请求的酒店信息--改变的表单参数列表--商圈参数列表
        this.state.handleSearchChild(this.state.tradeAreaSearchData, this.state.paramForm, this.state.paramArea);
      }
    })

  }
  //改变价格事件
  onChange2 = (e) => {
    let priceNum = parseInt(e.target.value);
    console.log('radio1 checked', priceNum);
    //num数值中的最大值
    //console.log(Number.MAX_VALUE);
    if (priceNum == 150) {
      this.state.paramForm["minPrice"] = 0;
      this.state.paramForm["maxPrice"] = priceNum;
    } else if (priceNum == 300) {
      this.state.paramForm["minPrice"] = 151;
      this.state.paramForm["maxPrice"] = priceNum;
    } else if (priceNum == 450) {
      this.state.paramForm["minPrice"] = 301;
      this.state.paramForm["maxPrice"] = priceNum;
    } else if (priceNum == 451) {
      this.state.paramForm["minPrice"] = priceNum;
      this.state.paramForm["maxPrice"] = Number.MAX_VALUE;
    }else if (priceNum == 0) {
      this.state.paramForm["minPrice"] = 0;
      this.state.paramForm["maxPrice"] = Number.MAX_VALUE;
    }
    //拿到数据
    console.log(this.state.paramForm);
    this.setState({
      value1: e.target.value,
    });
    //链接价格之后向后台接口请求数据
    fetchSearch({
      url: "/hotellist/searchItripHotelPage",
      type: "POST",
      param: this.state.paramForm,
      callback: e => {
        //得到后台的请求数据
        console.log("连接价格==" + JSON.stringify(e.data));
        //根据请求的后台数据改变状态值
        this.setState({
          hotelLevelSearhData: e.data
        })
        // 将请求数据传递给父组件
        // 通过回调函数中改变的状态值
        // 参数列表是：根据请求的酒店信息--改变的表单参数列表--商圈参数列表
        this.state.handleSearchChild(this.state.hotelLevelSearhData, this.state.paramForm, this.state.paramArea);
      }
    })

  }
  //改变星级事件
  onChange3 = (e) => {
    //console.log('radio2 checked', typeof(e.target.value));
    let hotelLevelNum = parseInt(e.target.value);

    this.state.paramForm["hotelLevel"] = hotelLevelNum;

    this.setState({
      value2: e.target.value,
    });

    //链接星级之后向后台接口请求数据
    fetchSearch({
      url: "/hotellist/searchItripHotelPage",
      type: "POST",
      param: this.state.paramForm,
      callback: e => {
        //得到后台的请求数据
        //console.log("连接商圈==" + JSON.stringify(e.data));
        //根据请求的后台数据改变状态值
        this.setState({
          hotelLevelSearhData: e.data
        })
        // 将请求数据传递给父组件
        // 通过回调函数中改变的状态值
        // 参数列表是：根据请求的酒店信息--改变的表单参数列表--星级参数列表
        this.state.handleSearchChild(this.state.hotelLevelSearhData, this.state.paramForm, this.state.paramArea);
      }
    })

  }
  //改变特色事件
  onChange4 = (checkedValues) => {
    //console.log('checked = ', checkedValues);
    this.state.paramForm["featureIds"] = checkedValues.join();
    //拿到数据
    //console.log(this.state.paramForm);
    //链接商圈之后向后台接口请求数据
    fetchSearch({
      url: "/hotellist/searchItripHotelPage",
      type: "POST",
      param: this.state.paramForm,
      callback: e => {
        //得到后台的请求数据
        //console.log("连接商圈==" + JSON.stringify(e.data));
        //根据请求的后台数据改变状态值
        this.setState({
          hotelFeatureSearchData: e.data
        })
        // 将请求数据传递给父组件
        // 通过回调函数中改变的状态值
        // 参数列表是：根据商圈请求的酒店信息--改变的表单参数列表--商圈参数列表
        this.state.handleSearchChild(this.state.hotelFeatureSearchData, this.state.paramForm, this.state.paramArea);
      }
    })

  }
  //根据后台请求数据动态生成商圈列表
  optionnode = (data) => {
    let val = {};
    if (data && data.length > 0) {
      val = data.map((value, index) => {
        return (
          <Checkbox value={value.id} key={index}>{value.name}</Checkbox>
        )
      })
    }
    this.setState(
      {
        optionnode: val
      })
  }
  //根据后台请求数据动态生成特色列表
  featureNode = (data) => {
    let val = {};
    if (data && data.length > 0) {
      val = data.map((value, index) => {
        return (
          <Checkbox value={value.id}  key={index}>{value.name}</Checkbox>
        )
      })
    }
    this.setState(
      {
        featureNode: val
      })
  }

  render() {
    return (
      <div className="travel tavern-list">
        <div className="tavern-list-head">
          <div className="localtion-item">您所在的位置：<a>酒店预订&gt;</a>{this.state.destination}酒店</div>
        </div>
        <div className="travel-body list-body">
          <div id="myTabContent" className="tavern-list-param">
            <SearchHotelItem receivedata={this.state.handleSearchChild} />
            <div className="tavern-search-params">
              <div className="search-one-param">
                <span className="param-label">位置：</span>
                <div className="checkbox-list">
                  {/*后台动态获取数据来生成选项*/}
                  <Checkbox.Group onChange={this.onChange1}>
                    {this.state.optionnode}
                  </Checkbox.Group>

                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">价格：</span>
                <div className="checkbox-list">
                  <RadioGroup options={options} onChange={this.onChange2} value={this.state.value1} />
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">星级：</span>
                <div className="checkbox-list">
                  <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value2} />
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label" style={{ float: "left" }}>特色：</span>
                <div className="checkbox-list">
                  <Checkbox.Group onChange={this.onChange4} /*defaultValue={}*/>
                    {this.state.featureNode}
                  </Checkbox.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}





