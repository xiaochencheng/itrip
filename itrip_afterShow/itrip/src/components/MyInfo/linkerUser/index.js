import React from 'react'
import { Modal, Icon, Layout, Input, Checkbox, Button, Select, Radio, Form, DatePicker, message } from 'antd';
import { fetchBiz } from 'components/fetchUtils'
const FormItem = Form.Item;
const Option = Select.Option;
const alertDesc = (param) => {
  message[param.type](param.desc, param.time);
  //   message.success(content, duration, onClose)
  // message.error(content, duration, onClose)
  // message.info(content, duration, onClose)
  // message.warning(content, duration, onClose)
  // message.warn(content, duration, onClose)  
  // message.loading(content, duration, onClose)
};
export default class App extends React.Component {

  handleCancel = (e) => {
    this.props.data.setState();
  }
  render() {
    let data = this.props.data.data;
    const WrappedApp = Form.create()(MyAddFrom);
    return (
      <Modal title={this.props.data.data.title} width={300} footer="" maskClosable={false} visible={this.props.data.visible}
        onOk={this.handleOk} onCancel={this.handleCancel} >
        <WrappedApp data={data} callback={this.props.data.callback}></WrappedApp>
      </Modal>
    )
  }
}
export class MyAddFrom extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values["linkIdCardType"] = 0;
        fetchBiz({
          url: this.props.data.url,
          type: "POST",
          param: values,
          callback: e => {
            this.props.callback()
            alertDesc({
              type: 'success',
              desc: '添加成功！',
              time: 3
            });
          }
        })
      }
    });
  }
  render() {
    let data = this.props.data;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{ marginBottom: '30px' }}>
        <FormItem style={{ display: 'none' }} >
          {getFieldDecorator('id', {
            initialValue: data.userMess.id
          })(
            <Input size="small" />
            )}
        </FormItem>
        <FormItem
          label="姓名"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }} >
          {getFieldDecorator('linkUserName', {
            rules: [{
              type: 'string', message: '不能输入特殊字符!',
            }, {
              required: true, message: '联系人不能为空!',
            }],
            initialValue: data.userMess.userName
          })(
            <Input size="small" />
            )}

        </FormItem>
        <FormItem
          label="电话"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('linkPhone', {
            rules: [{
              type: 'string', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: '请输入正确的手机号!'
            }, {
              pattern: /^0?1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号!'
            }],
            initialValue: data.userMess.phone
          })(
            <Input size="small" />
            )}
        </FormItem>
        <FormItem
          label="身份证号"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('linkIdCard', {
            rules: [{
              type: 'string', message: '请输入正确的身份证号!',
            }, {
              required: true, message: '请输入正确的身份证号!'
            }, {
              pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号!'
            }],
            initialValue: data.userMess.card
          })(
            <Input size="small" defaultValue={data.userMess.card} />
            )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 8, offset: 4 }}
          style={{ float: 'right', marginRight: '10px' }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}
