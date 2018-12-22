import React from 'react'
import { Form, Input, DatePicker, Row, Col, Button, Icon, Cascader } from 'antd'
import moment from 'moment';
import CitySwitcher from 'components/CitySwitcher'
import { fetchBiz, fetchSearch, getUrlParam } from 'components/fetchUtils'
import "./style.css"

const FormItem = Form.Item
//const Option = Select.Option

const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 18
  },
}

const formItemLayout2 = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 9
  },
}

const tailFormItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 19
  },
}
/*关闭日历插件之前的日期函数*/
/*function disabledDate(current) {
  return current && current.valueOf() < (Date.now() - 24 * 60 * 60 * 1000);
}*/


class SearchHotelItem extends React.Component {

  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      param: {},
      cityNameValue: '北京',
      cityIdValue: '2',
      cityTradeArea: {},
    };

  }
  componentWillMount() {
    if (!getUrlParam('id')) {
      this.state.param["featureIds"] = '';
    } else {
      this.state.param["featureIds"] = getUrlParam('id');
      this.state.cityNameValue = this.state.cityNameValue;
      this.state.cityIdValue = this.state.cityIdValue;
    }
    console.log("getUrlParam('featureIds')=" + JSON.stringify(this.state.param) )

    console.log("getUrlParam('destinationLabel')=" + getUrlParam('destinationLabel'))
    if (getUrlParam('destinationLabel') == '' || getUrlParam('destinationLabel') == null) {
      this.state.cityNameValue = this.state.cityNameValue;
    } else {
      this.state.cityNameValue = decodeURIComponent(getUrlParam('destinationLabel'));
    }
    if (getUrlParam('destination') == '' || getUrlParam('destination') == null) {
      this.state.cityIdValue = this.state.cityIdValue;
    } else {
      this.state.cityIdValue = getUrlParam('destination');
    }

    if (getUrlParam('checkInDate') == '' || getUrlParam('checkInDate') == null) {
      this.state.param["checkInDate"] = Date.now();
    } else {
      this.state.param["checkInDate"] = getUrlParam('checkInDate');
    }

    if (getUrlParam('checkOutDate') == '' || getUrlParam('checkOutDate') == null) {
      this.state.param["checkOutDate"] = (Date.now() + 24 * 60 * 60 * 1000);
    } else {
      this.state.param["checkOutDate"] = getUrlParam('checkOutDate');
    }
    /*酒店首页传来的是不限的时候，这里赋值为空*/
    // console.log("getUrlParam('hotelLevel')==0"+decodeURIComponent(getUrlParam('hotelLevel')))
    let hotelLevel =  getUrlParam('hotelLevel'); 
    if ( hotelLevel==0){
      this.state.param["hotelLevel"] = "";
    } else if (hotelLevel !=0 && hotelLevel != 1 && hotelLevel != 2 && hotelLevel != 3 && hotelLevel != 4&& hotelLevel != 5){
      this.state.param["hotelLevel"] = "";        
    }else {
    this.state.param["hotelLevel"] = getUrlParam('hotelLevel');
    }
    this.state.param["keywords"] = getUrlParam('keywords');

    this.handleSubmit();
  }
  //获得子组件传递的名称和ID
  handleChangeCityName = (cityName, cityId) => {
    // console.log("城市名称=" + cityName)
    // console.log("城市ID=" + cityId)
    this.setState({
      cityNameValue: cityName,
      cityIdValue: cityId
    })
  }

  //提交表单并向后台获取数据
  handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }

    this.props.form.validateFields((err, values) => {
      if (err) return
      for (const formField in values) {
        const formValue = values[formField]
        if (formValue.format) {
          values[formField] = formValue.format('YYYY-MM-DD')
        }
      }
      //values包含表单的数据了
      this.state.param["destination"] = this.state.cityNameValue;
      //后台接口请求商圈数据
      fetchBiz({
        url: "/hotel/querytradearea/" + this.state.cityIdValue,
        callback: e => {
          //得到后台的请求数据
          this.setState({
            cityTradeArea: e.data
          })
        }
      })

      //后台接口请求数据
      fetchSearch({
        url: "/hotellist/searchItripHotelPage",
        type: "POST",
        param: this.state.param,
        callback: e => {
          //得到后台的请求数据
         // console.log(e.data);

          if (e.data) {
          for (var i = 0; i < e.data.rows.length; i++) {
            if (e.data.rows[i].isOkCount != 0) {
              e.data.rows[i].isOkCount = e.data.rows[i].isOkCount*100+'%';
            }else {
              e.data.rows[i].isOkCount = 0;
            }
          }
        }
          // 将请求数据传递给父组件
          // 参数列表是：请求的酒店信息--表单参数列表--商圈参数列表
          this.props.receivedata(e.data, this.state.param, this.state.cityTradeArea)
        }
      })

      console.log("zzvalues="+ JSON.stringify(values));

      this.state.param["checkInDate"] = values.checkInDate;
      this.state.param["checkOutDate"] = values.checkOutDate;

    });
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='SearchTitle'>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col span={5}>
              <FormItem
                {...formItemLayout}
                label="目的地">
                {getFieldDecorator('destination', { initialValue: '' })(
                  <CitySwitcher changeCityName={this.handleChangeCityName} destination={this.state.param.destination}/>
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...formItemLayout2}
                label="入住时间">
                {getFieldDecorator('checkInDate', { initialValue: moment(this.state.param.checkInDate) })(
                  <DatePicker /*disabledDate={disabledDate}*/ style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...formItemLayout2}
                label="退房时间">
                {getFieldDecorator('checkOutDate', { initialValue: moment(this.state.param.checkOutDate) })(
                  <DatePicker /* disabledDate={disabledDate}*/ style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout}
                label="关键词">
                {getFieldDecorator('keywords', { initialValue: '' })(
                  <Input size='small' placeholder='品牌' />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem
                {...tailFormItemLayout}
                colon={false}
                label=" ">
                <div className='common-bar'>
                  <Button type="primary" ref="submitID" htmlType="submit" size="default">
                    搜索
                <Icon style={{ fontSize: '14px' }} type="right" />
                  </Button>
                </div>
              </FormItem>
            </Col>
          </Row>

        </Form>
      </div>
    )
  }
}

export default Form.create()(SearchHotelItem)
