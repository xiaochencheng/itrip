import React from 'react'
import { Form, Input, DatePicker, Row, Col, Button, Icon } from 'antd'
import { fetchBiz } from 'components/fetchUtils'

import "./style.css"

const FormItem = Form.Item
//const Option = Select.Option

const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 14
  },
}

const formItemLayout2 = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
}

const tailFormItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  },
}

class SearchOrder extends React.Component {

  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      param: {}
    };

  }
  // 组件加载完成之后自执行一次
  componentDidMount() {
    // this.handleSubmit();
  }

  handleSubmit = (e) => {
    // e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) return
      for (const formField in values) {
        const formValue = values[formField]
        if (formValue.format) {
          values[formField] = formValue.format('YYYY-MM-DD')
        }
        
      }
      //this.props.onSubmit(values)
      // 表单获取数据改变状态
      /*this.setState({
        param: values
      })*/
      // 将获取的表单参数传递到父组件
      values["orderStatus"] = -1;
      values["orderType"] = -1;
      values["pageSize"] = 6;

      this.props.searchData(values)
      // console.log(this);
      
      // 设置订单状态
      // 设置订单类型
      /*values["orderStatus"] = -1;
      values["orderType"] = -1;*/

      // console.log("this.state.param==" + JSON.stringify(values));

      /*fetchBiz({
        url: "/hotelorder/getpersonalorderlist",
        type: "POST",
        param: values,
        callback: e => {
          //得到后台的请求数据
          console.log("搜索价格==" + JSON.stringify(e.data));
          //根据请求的后台数据改变状态值
          // this.setState({
          //   orderlist: e.data
          // })
          // 传递到父组件
          this.props.searchData(e.data)

        }
      })*/

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
                {...tailFormItemLayout}
                label="订单号">
                {getFieldDecorator('orderNo', { initialValue: '' })(
                  <Input size='small' placeholder='订单号' />
                )}
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout}
                label="旅客">
                {getFieldDecorator('linkUserName', { initialValue: '' })(
                  <Input size='small' placeholder='中文名/英文名' />
                )}
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout2}
                label="预订日期">
                {getFieldDecorator('startDate', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={5}>
              <FormItem
                {...formItemLayout2}
                label="结束日期">
                {getFieldDecorator('endDate', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={3}>
              <FormItem
                {...tailFormItemLayout}
                colon={false}
                label=" ">
                <div className='common-bar'>
                  <Button type="primary" htmlType="submit" size="default">
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

export default Form.create()(SearchOrder)
