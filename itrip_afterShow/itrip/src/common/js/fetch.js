import { stringify } from 'querystring'
import Cookie from 'js-cookie'
let timeout = null
import { message } from 'antd';
import { hashHistory } from 'react-router'
const alertDesc = (param) => {
  message[param.type](param.desc, param.time);
  //   message.success(content, duration, onClose)
  // message.error(content, duration, onClose)
  // message.info(content, duration, onClose)
  // message.warning(content, duration, onClose)
  // message.warn(content, duration, onClose)  
  // message.loading(content, duration, onClose)
};

function timeRestart() {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    Cookie.remove('token')
    Cookie.remove('user')
    Cookie.remove('expTime')
  }, 2 * 60 * 60 * 1000)
}

function request(url, op = {}) {
  const config = {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const token = Cookie.get('token')
  if (token) {
    config.headers['token'] = token
  }

  return fetch(url, { ...config, ...op })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.errorCode === '302') {
        window.location.href = res.msg
        return {}
      }
      return res
    }).then(res => {
      if (res.success !== 'true') {
        alertDesc({
          type: 'error',
          desc: res.msg,
          time: 2
        });
        if (res.errorCode === '100000') {
          alertDesc({
            type: 'error',
            desc: res.msg + " 5s之后跳转到登录页面！",
            time: 5
          });
          setTimeout(e => {
            Cookie.remove('token')
            Cookie.remove('user')
            Cookie.remove('expTime')
            hashHistory.push('/login')
          }, 5 * 1000)
        }
      }

      if (res.success !== 'true') return Promise.reject(res)
      return res
    }).then(res => {
      timeRestart()
      return res
    })
}

export function getRequest(url, params, op) {
  if (params && typeof params === 'object') {
    return request(url + '?' + stringify(params), op)
  }
  return request(url, op)
}

export function postRequest(url, params, op = {}) {
  return request(url, {
    ...op,
    method: 'POST',
    body: JSON.stringify(params)
  })
}



export function putRequest(url, params, op = {}) {
  if (params && typeof params === 'object') {
    return request(url + '?' + stringify(params), { method: 'PUT', ...op })
  }
  return request(url,
    {
      ...op,
      method: 'PUT'
    })
}

export function postRequestForm(url, params, op = {}) {
  const data = []
  if (params && typeof params === 'object') {
    const keys = Object.keys(params)
    keys.forEach(key => {
      data.push(`${key}=${params[key]}`)
    })
  }
  return request(url, {
    ...op,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Accept': 'application/json'
    },
    body: data.join('&')
  })
}


export const getUrlParam = (name) => {
  var reg = new RegExp(name + "=([^&]*)(&|$)");
  var r = window.location.hash.match(reg);
  if (r != null) return unescape(r[1]); return null;
}