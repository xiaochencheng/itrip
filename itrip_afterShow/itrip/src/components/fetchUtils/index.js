

import React from 'react'
import { postRequest, getRequest } from 'common/js/fetch'
import {message } from 'antd';
const alertDesc = (param) => {
  message[param.type](param.desc, param.time);
  //   message.success(content, duration, onClose)
  // message.error(content, duration, onClose)
  // message.info(content, duration, onClose)
  // message.warning(content, duration, onClose)
  // message.warn(content, duration, onClose)  
  // message.loading(content, duration, onClose)
};
/* 请求发送 知道接口*/
let fetchRequest = function (params) {
  if (params.type) {
    postRequest(params.url, params.param).then(res => {
      if (res.success === 'true') {
        params.callback(res);
      }
    }).catch(err => {
      // if(err.success=='false'){
      //     alertDesc({
      //     type: 'error',
      //     desc: err.msg,
      //     time: 2
      //   });
      // } 
    })
  }else{
     getRequest(params.url, params.param).then(data => {
     params.callback(data);
    }).catch(err => {
      //  alertDesc({
      //     type: 'error',
      //     desc: err.msg,
      //     time: 2
      //   });
    })  
  } 
}
export default fetchRequest;

/* 获取业务数据接口*/
let fetchBiz = function (params) {
  // /biz/api
  params.url = "/biz/api" + params.url
  fetchRequest(params);
}
/* 获取验证或登录状态接口*/
let fetchAuth = function (params) {
  // auth/api
  params.url = "/auth/api" + params.url
  fetchRequest(params);
}
/* 根据参数获取查询数据接口*/
let fetchSearch = function (params) {
  // /search/api/
  params.url = "/search/api" + params.url
  fetchRequest(params);
}
/* name 参数显示名称*/
//name 参数显示名称
let getUrlParam = (name) => {
  var reg = new RegExp(name + "=([^&]*)(&|$)");
  var r = window.location.hash.match(reg);
  if (r != null) return unescape(r[1]); return null;
}







export { fetchAuth, fetchBiz, fetchSearch, getUrlParam };
