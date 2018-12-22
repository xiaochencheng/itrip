import Cookie from 'js-cookie'
import moment from 'moment'
import { Modal } from 'antd'
import { chTokenUrl } from 'constants/url'
import { postRequest } from './fetch'

let timeout = null

function requestError(err) {
    if (err.msg || err.message) {
        Modal.error({
            title: 'Token过期提示：',
            content: err.msg || err.message
        })
        return
    }
    console.log(err)
}
function setCookie(data) {
    //  expTime  使用本地时间，加2个小时的时间 
    const days = moment(data.data.expTime - 0).diff(moment(data.data.genTime - 0), 'days', true)
    Cookie.set('token', data.data.token, { expires: days })
    Cookie.set('user', data.user, { expires: days })
    Cookie.set('expTime', data.data.expTime, { expires: days })
}
function getCookie() {
    return {
        token: Cookie.get('token'),
        expTime: Cookie.get('expTime'),
        user: Cookie.get('user')
    }
}
function remveCookie() {
        Cookie.remove('token'),
        Cookie.remove('expTime'),
        Cookie.remove('user')
}
export function changeToken() {
    const tokenPojo = getCookie()
    let milliseconds = moment(tokenPojo.expTime - 0).diff(moment(Date.now()))
    const ms = 25 * 60 * 1000
    milliseconds = milliseconds - ms;
    clearTimeout(timeout)
    if (tokenPojo.token && tokenPojo.user && milliseconds > 0) {
        console.log(`${milliseconds} 毫秒后自动转换Token.`)
        timeout = setTimeout(() => {
            postRequest(chTokenUrl).then(data => {
                data["user"]=tokenPojo.user
                setCookie(data);
            }).catch(requestError)
        }, milliseconds)
    }
}
