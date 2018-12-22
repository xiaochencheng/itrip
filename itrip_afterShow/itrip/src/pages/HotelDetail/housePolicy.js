/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
import { fetchBiz } from '../../components/fetchUtils'
import img_01 from '../../common/images/icon/card01_xxx1214_09.jpg'
import img_02 from '../../common/images/icon/card02_xxx1214_09.jpg'
import img_03 from '../../common/images/icon/card03_xxx1214_09.jpg'
import img_04 from '../../common/images/icon/card_xxx1214_09.jpg'

'use strict';
export default class HousePolicy extends React.Component {
  state = {
    data: []
  }
  componentWillMount() {
    fetchBiz({
      url: "/hotel/queryhotelpolicy/"+this.props.hotelId,
      callback: (data) => {
        this.setState({
          data: eval("(" + data.data + ")")
        })
      }
    })
  }
  render() {//clearfix
    return (
      <div className="i_cost i_cost_con clearfix">
        <span className="i_icon1">
          <h4>酒店政策</h4>
          <i className="icon-book" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            <div className="facility_list">
              {
                this.state.data.map((val, i, array) => {
                  if (typeof val.description == "string") {
                    return (
                      <div className="list_wrap clearfix">
                        <h5>【{val.name}】</h5>
                        <ol>
                          <li>{val.description}</li>
                        </ol>
                      </div>
                    )
                  } else {
                    return (
                      <div className="list_wrap clearfix">
                        <h5>【{val.name}】</h5>
                        <ol>
                          {
                            val.description.map(value => {
                              return (<li>{value}</li>)
                            })
                          }
                        </ol>
                      </div>
                    )
                  }

                })
              }
              <div className="list_wrap">
                <h5>【接受信用卡】</h5>
                <a href="#"><img src={img_01} height={40} width={67} alt="" /></a>
                <a href="#"><img src={img_02} height={40} width={64} alt="" /></a>
                <a href="#"><img src={img_03} height={40} width={41} alt="" /></a>
                <a href="#"><img src={img_04} height={40} width={53} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }
}
