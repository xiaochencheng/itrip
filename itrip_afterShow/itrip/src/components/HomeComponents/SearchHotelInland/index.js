import React from 'react'
import { Form, Input, DatePicker, Row, Col, Select, Button, Icon } from 'antd'
import CitySwitcher from 'components/CitySwitcher'
import './style.css'

const FormItem = Form.Item
const Option = Select.Option

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

class SearchHotelInland extends React.Component {
    status = {
    destinationLabel: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
  
    this.props.form.validateFields((err, values) => {
      if (err) return
      for (const formField in values) {
        const formValue = values[formField]
        if (formValue && formValue.format) {
          values[formField] = formValue.format('YYYY-MM-DD')
        }
      }
      Object.assign(values, this.status)
      this.props.onSubmit(values)
    });
  }
 handleChange = (value, label) => {
    this.status.destinationLabel = encodeURIComponent(label)
  }
  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='SearchHotelInland'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="目的地">
            {getFieldDecorator('destination', { initialValue: '', onChange: this.handleChange })(
              <CitySwitcher destination={"请选择"}/>
            )}
          </FormItem>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout2}
                label="入住时间">
                {getFieldDecorator('checkInDate', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout2}
                label="退房时间">
                {getFieldDecorator('checkOutDate', { initialValue: '' })(
                  <DatePicker style={{ width: '94px' }} size='small' />
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem
            {...formItemLayout}
            label="酒店级别">
            {getFieldDecorator('hotelLevel', { initialValue: '不限' })(
              <Select size='small' style={{ width: '110px' }}  placeholder='请选择'>
                <Option value="0">不限</Option>
                <Option value='5'>五星级/豪华</Option>
                <Option value='4'>四星级/高档</Option>
                <Option value='3'>三星级/舒适</Option>
                <Option value='2'>二星级以下/经济</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="关键词">
            {getFieldDecorator('keywords', { initialValue: '' })(
              <Input size='small' placeholder='海岛' />
            )}
          </FormItem>
          <FormItem
            {...tailFormItemLayout}
            colon={false}
            label=" ">
            <div className="common-tar tuiJian">
              <a href="#">温泉</a>、
                    <a href="#">亲子</a>、
                    <a href="#">自由行</a>、
                    <a href="#">名胜古迹</a>、
                    <a href="#">都市购物</a>
                </div>
              </FormItem>
              <FormItem
                {...tailFormItemLayout}
                colon={false}
                label=" ">
                <div className='common-tar'>
                  <Button type="primary" htmlType="submit" size="default">
                    搜索行程
                    <Icon style={{fontSize: '10px'}} type="right" />
                  </Button>
                </div>
              </FormItem>
            </Form>
      </div>
    )
  }
}

export default Form.create()(SearchHotelInland)
