import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'
import moment from 'moment'
import Cookie from 'js-cookie'
import LoginFooter from 'components/Footer/LoginFooter.js'
import { postRequestForm } from 'common/js/fetch'
import { loginUrl, chTokenUrl } from 'constants/url'
import { changeToken } from 'common/js/ckman'
import { getUrlParam } from 'components/fetchUtils'

import loginLogo from './imgs/i-LOGO-02-01.png'
import LeftPhone from './imgs/left-phone.png'
import yanzhengma from './imgs/yanzhengma.png'
import iconsina from './imgs/icon-sina.png'
import iconQQ from './imgs/icon-QQ.png'
import iconWechat from './imgs/icon-Wechat.png'
import iconBaidu from './imgs/icon-Baidu.png'

import './style.css'
const FormItem = Form.Item;

function requestError(err) {
  if (err.msg || err.message) {
    Modal.error({
      title: '错误提示：',
      content: err.msg || err.message
    })
    return
  }
  console.log(err)
}

class Login extends React.Component {

  componentDidUpdate() {
    const token = Cookie.get('token')
    const user = Cookie.get('user')

    if (token && user) {
      Modal.info({
        title: '提示',
        content: '您已经登录，若要切换用户，请先注销！',
        onOk() {
          hashHistory.push('/home')
        }
      })
    }
  }
 validatorEmailAndPhone(rule, value, callback) {
    if (!/(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(value)) {
      return callback('请输入正确的邮箱或手机号！')
    }else{
      return true;
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return

      postRequestForm(loginUrl, values).then(data => {
        const days = moment(data.data.expTime - 0).diff(moment(data.data.genTime - 0), 'days', true)
        Cookie.set('token', data.data.token, { expires: days })
        Cookie.set('user', values.name, { expires: days })
        Cookie.set('expTime', data.data.expTime - 0, { expires: days })
        changeToken()
        if (!getUrlParam('skipPage')) {
          hashHistory.push('/home')
        } else {
          // http://localhost:3000/#/login?hotel=1&room=1&startDate=Mon Jun 26 2017&endDate=Tue Jun 27 2017&skipPage=orderfill&_k=futrqg
          const query = stringify({
            hotelId: getUrlParam('hotelId'),
            room: getUrlParam('room'),
            startTime: getUrlParam('startTime'),
            endTime: getUrlParam('endTime')
          })
          hashHistory.push('/'+getUrlParam('skipPage')+'?' + query)
        }
      }).catch(err => {
        requestError(err)
        Cookie.remove('token')
        Cookie.remove('user')
        Cookie.remove('expTime')
      })
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <div className='LoginHeader'>
          <h1>
            <img src={loginLogo} alt="" />
          </h1>
        </div>
        <div className='LoginContain'>
          <section>
            <div className="left-phone">
              <img src={LeftPhone} />
            </div>
            <div className="right-message">
              使用<img src={loginLogo} />客户端<br />
              手机扫描安全登录
        </div>
            <div className="right-message gray">
              1. 打开手机i旅行客户端并登录i旅行账号<br />
              2. 在i旅行登录页点击右上角扫码安全登录<br />
              3. 使用i旅行客户端左上角扫描功能完成登录<br />
            </div>
          </section>
          <aside>
            <div className="login-header">
              <div>
                <span>会员登录</span>&nbsp;<a href="register.html"> 立即注册</a>，享积分换礼、返现等专属优惠！
          </div>
              <span className="right-erweima" />
            </div>
            <div className="login-body">
              <div id="staticOption">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem >
                    {getFieldDecorator('name', {
                      ///(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/
                      rules: [
                       // { type: 'string', message: '请输入正确的邮箱！' },
                        { required: true, message: '邮箱必须填写！' }, 
                        { pattern: /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,message:'请输入正确的邮箱和手机号！' }
                      ]
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入注册邮箱" />
                      )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '密码必须填写！' }]
                    })(
                      <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                      )}
                  </FormItem>
                  <FormItem>
                    <Checkbox checked>30天内自动登录</Checkbox>
                    <a className="login-form-forgot" href="">忘记密码?</a>

                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>

                  </FormItem>
                </Form>
              </div>
            </div>

            <div className="login-footer">
              <div className="footer-message">
                您也可以用合作网站的帐号登录去i旅行网
          </div>
              <div className="footer-label">
                <a><img src={iconsina} /> 新浪微博</a>
                <a><img src={iconQQ} />QQ</a>
                <a><img src={iconWechat} />微信</a>
                <a><img src={iconBaidu} />百度</a>
              </div>
            </div>
          </aside>
        </div>
        <LoginFooter />
      </div>
    );
  }
}

export default Form.create()(Login)




