import React from 'react';
import ReactDOM from 'react-dom'; 
import { Router, hashHistory } from 'react-router'
import { changeToken } from 'common/js/ckman'
import routes from './router'
import 'antd/dist/antd.css';
import 'common/css/font-awesome.min_back.css'
import 'common/css/font-awesome.min.css'
import 'common/css/style.css'

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "H+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
} 
/**
 * 重写toJSON方法
 * @returns {string}
 */
Date.prototype.toJSON = function () {
    var format = this.Format("yyyy-MM-dd HH:mm:ss");
    return (format.replace(" ", "T") + ".000Z");
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
/* 删除数组中的数据信息，仅限字符串 String 类型的数组*/
Array.prototype.indexOf = function(val) { for (var i = 0; i < this.length; i++) { if (this[i] == val) return i; } return -1; };

Array.prototype.remove = function(val) { var index = this.indexOf(val); if (index > -1) { this.splice(index, 1); } };

ReactDOM.render(
 
  <Router
    history={hashHistory}
    routes={routes} />,
  document.getElementById('root'),
  changeToken
);
