/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
import { fetchBiz } from '../../components/fetchUtils'
'use strict';


export default class HotelDetail extends React.Component {
  state = {
    data: []
  };

  componentWillMount() {
    fetchBiz({
      url: "/hotel/queryhoteldetails/"+this.props.hotelId,
      callback: (data) => {
        this.setState({
          data: data.data
        })
      }
    }) 
  }
  render() {
    return (
      <div id="hotelDetail" className="i_cost i_cost_con i_cost_in clearfix">
        <span className="i_icon1">
          <h4>酒店介绍</h4>
          <i className="icon-info-sign" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            <div className="facility_list">
              <div className="list_wrap">
                {
                  this.state.data.map((val, index) => {
                    if (index == 0) return;

                    return <span className="wrap_in_detail">{val.name}</span>
                  })
                }

              </div>
              <div className="list_wrap clearfix">
                <ul className="list_wrap_title">

                  {
                    this.state.data.map((val, index)  => {
                       if (index == 0) return;
                      return <li><span>【{val.name}】</span><p>{val.description}</p></li>
                    })
                  }
                </ul>
              </div>
              <div className="list_wrap">
                <p className="list_wrap_say">
                 {
                    this.state.data.map((val, index)  => {
                       if (index == 0){
                        return  val.description
                       }  
                      
                    })
                  } 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }
}
